(function(){

var edt = {};
var wasmApi = null;

// This version will include branch and build number (see WebAssebmly-EDT.yml)
edt.Version = "0.1.master.123";

if (typeof window !== 'undefined') {
    // This fixes an issue when caller loads this script more than once
    if (window.edt) {
        return;
    }

    window.edt = edt;
} else {
    module.exports = edt;
}

var edtClient = function edt$edtClient(port, host, dtls, client)
{
    this.port = port;
    this.host = host;
    this.client = null;
    this.textEncoder = null;
    this.textDecoder = null;
    this.receiveBuffer = null;
    this.receiveSize = 0;
    this.sendBuffer = null;
    this.dtls = (typeof dtls !== 'undefined') ? dtls : false;
    this.dataBufferSize = 0;

    // This allows us to use a mock socket
    if (!client) {
        if (typeof window !== 'undefined')
            client = new UDPChromeSocketsClient(this);
        else
            client = new UDPNodeClient(this);
    }
    this.client = client;
    
    this.udtSocket = wasmApi.EdtCreateSocket(port, host, dtls);
};

edt.edtClient = edtClient;

edtClient.prototype =
{
    // Connect to EDT
    connect: function edtClient$connect(callback, timeoutMS)
    {
        if (this.udtSocket < 0) {
            let error = "Could not connect: no EDT socket";
            if (callback) {
                callback(error);
                return;
            }
            if (Promise) {
                return Promise.reject(error);
            }
        }

        edtClient.socketsMap[this.udtSocket] = this;

        this.connectHandler = callback;
        this.connectErrorHandler = null;

        // Call socket implementation to connect
        // We will notify when connection occurs
        var options = {};
        this.client.connect(this.port, this.host, options, callback);

        var _this = this;

        if (typeof timeoutMS != "number") {
            timeoutMS = 10000;  // Default used in Win32
        }

        // Win32 has a loop in core.cpp that calls connectAsync every second and connectAsync has a hardcoded comparison
        // (CTimer::getTime() - m_ullFirstReqTime > (uint64_t)10000000)
        if (!this.dtls) {
            this.timerConnect = setTimeout(function () {
                _this.onErrorConnect(false);
            }, timeoutMS);
        }

        if (!callback && Promise) {

            var promise = new Promise(function (resolve, reject) {
                _this.connectHandler = resolve;
                _this.connectErrorHandler = reject;
            });

            return promise;
        }
    },

    close: function edtClient$close(callback)
    {
        this.closing = true;
        var module = edt.wasmModule;

        this.closeResult = wasmApi.EdtCloseSocket(this.udtSocket);

		if (this.client) {
			this.client.stopReceiveEvents();
		}

        // Note that cached receiveBuffer is malloced
        if (this.receiveBuffer) {
            module._free(this.receiveBuffer);
            this.receiveBuffer = null;
        }
        if (this.sendBuffer) {
            module._free(this.sendBuffer);
            this.sendBuffer = null;
        }
        if (this.dataBuffer) {
            module._free(this.dataBuffer);
            this.dataBuffer = null;
        }

        if (this.sendHeaderBuffer) {
            module._free(this.sendHeaderBuffer);
            this.sendHeaderBuffer = null;
        }

        if (callback) {
            this.closeHandler = callback;
        } else if (Promise) {
            var _this = this;

            var promise = new Promise(function (resolve, reject) {
                _this.closeHandler = resolve;
            });

            return promise;
        }
    },

    send: function edtClient$send(data, callback)
    {
        var error = 0;

        if (this.client) {
            var arrayBuffer;

            if (typeof data == "string")
                arrayBuffer = this.stringToArrayBuffer(data);
            else
                arrayBuffer = data;

            // The pointer created by getCPointerFromArrayBuffer will be malloced
            let pointer = this.getCPointerFromArrayBuffer(arrayBuffer);
            var size = arrayBuffer.byteLength;
        
            error = wasmApi.EdtSend(this.udtSocket, pointer, size);

            if (this.sendBuffer != null)
                edt.wasmModule._free(this.sendBuffer);
            this.sendBuffer = pointer;
        } else
            error = edt.Result.EINVSOCK;

        if ((!callback) && Promise) {
            var _this = this;

            var promise = new Promise(function (resolve, reject) {
                _this.sendHandler = resolve;
                // TODO: Handle reject to notify connection error
            });

            return promise;
        } else {
            if (error != 0)
                callback({socket:this, error:error});
            else
                this.sendHandler = callback;
        }
    },

    receive: function edtClient$receive(size)
    {
        if (!this.client)
            return edt.Result.EINVSOCK;

        var module = edt.wasmModule;

        // Reuse receive buffer if possible
        if ((this.receiveBuffer == null) || (size > this.receiveSize)) {
            if (this.receiveBuffer)
                module._free(this.receiveBuffer);
            this.receiveBuffer = module._malloc(size);
            this.receiveSize = size;
        }
        var pointer = this.receiveBuffer;

        if (pointer == 0)
            return 0;

        // Note that EdtReceive returns a negative number for error and a positive for bytes read to avoid passing an int*parameter
        var retValue = wasmApi.EdtReceive(this.udtSocket, pointer, size);
        if (retValue < 0)
            return retValue;

        // If we do not allow memory growth we could in theory just return a view into the malloced buffer
        // This works well in node and in our EDT test app (except for use of TextDecoder)
        // but in Html5Chrome causes a major failure to the point where logging seems to stop working
        // return new Uint8Array(module.HEAPU8.buffer, pointer, retValue);

        // This just maps a Uint8Array into the existing pointer
        var viewIntoCBuffer = new Uint8Array(module.HEAPU8.buffer, pointer, retValue);
        // Uint8Array will copy passed arrayBuffer into newly allocated object
        return new Uint8Array(viewIntoCBuffer);
    },

    setOption: function edtClient$setOption(option, value, length)
    {
        if (option == edt.Option.MTUSTARTDISC) {
            this.mtuHandler = value;
        }

        return wasmApi.EdtSetOption(this.udtSocket, option, value, length);
    },

    getOption: function edtClient$getOption(option)
    {
        return wasmApi.EdtGetOption(this.udtSocket, option);
    },

    // TODO: Check if we can make this compatible with promises
    onData: function edtClient$onData(callback)
    {
        this.dataHandler = callback;
    },

    isClosing: function edtClient$isClosing()
    {
        return edt.queryInfo(this.udtSocket, edt.QueryID.Closing);
    },

    perfMon: function edtClient$perfmon(clear)
    {
        var result = {};
        var buffer = edt.queryInfo(this.udtSocket, edt.QueryID.PerfMon, clear);
        if (buffer) {
            // PerfMon will add the size of the returned buffer (as the first integer in the buffer) so we don't have to harcode it here
            this.bufferToJson(buffer, -1, result, edt.TraceInfoLayout);

            // The buffer was allocated in perfMon so we need to free it here
            edt.wasmModule._free(buffer);
        }
        
        return result;
    },
    
    getPort: function edtClient$getPort()
    {
        return this.port;
    },

    getHost: function edtClient$getHost()
    {
        return this.host;
    },

    // We provide access to the underlying socket because Html5Chrome needs to handle cleanup in a different context (background page)
    // Note that this works because the Chrome UDP API uses an integer to identify a socket
    getUnderlyingSocket: function edtClient$getUnderlyingSocket()
    {
        if (!this.client)
            return undefined;

        return this.client.getSocket();
    },

    // Private API
    updateReceiveBufferSize: function edtClient$updateReceiveBufferSize()
    {
        let recvBufSize = edt.queryInfo(this.udtSocket, edt.QueryID.RcvBufSize);
        if (recvBufSize && this["client"] && (typeof this.client.updateReceiveBufferSize == 'function'))
            this.client.updateReceiveBufferSize(recvBufSize);
    },

    connectEdtSocket: function edtClient$connectEdtSocket()
    {
        wasmApi.EdtConnectSocket(this.udtSocket);
        this.updateReceiveBufferSize();
    },

    onConnected: function edtClient$onConnected(client, handler)
    {
        edtClient.idMap[this.client.socketId] = this;
        if (this.dtls) {
            // Drive the DTLS handshake from Javascript, then let EDT wasm take it from there.
            //
            // EDT does the entire handshake in a single function, which prevents
            // the JavaScript runloop from processing socket receive callbacks. 
            // The handshake would be starved of data and time out.
            //
            // Asyncify cannot help here, since it suspects CWasmData::addblock may unwind the stack, 
            // and only one async call is allowed to be in flight at once.
            // (doClientHandshake will actually unwind the stack when the cert chain is verified)
            (async function () {
                this.dtlsGreeter = new edt.dtlsHandshake(client, this.udtSocket);
                if (this.dtlsGreeter.context) {
                    try {
                        await this.dtlsGreeter.clientHandshake();
                        this.connectEdtSocket();
                    }
                    catch (e) {
                        this.onErrorConnect(true, "DTLS failed to connect");
                    }
                } else {
                    this.onErrorConnect(true, "Could not get DTLS context");
                }
            }).bind(this)();

        } else {
            this.connectEdtSocket();
        }
    },

    onErrorConnect: function edtClient$onErrorConnect(forceError, errorDetail)
    {
        if (forceError || !edt.queryInfo(this.udtSocket, edt.QueryID.Connected)) {

            if (!errorDetail)
                errorDetail = "Failed to connect";

            // We have a connectErrorHandler when using promises
            // with regular callbacks we are passing the error as the parameter
            if (this.connectErrorHandler)
                this.connectErrorHandler(errorDetail);
            else if (this.connectHandler)
                this.connectHandler(errorDetail);
        }
    },

    notifyConnection: function edtClient$notifyConnection(handler)
    {
        if (this.timerConnect) {
            clearTimeout(this.timerConnect);
            this.timerConnect = 0;
        }

        if (!handler)
            handler = this.connectHandler;

        if (handler)
            handler();
    },
    
    notifySent: function edtClient$notifySent(handler)
    {
        // TODO: Decide if we need to handle multiple pending sent notifications
        if (this.sendHandler) {
            var handler = this.sendHandler;
            this.sendHandler = null;

            // Every time a message is sent we need to update the header of a prefetched message
            // because data messages include a message sequence number
            if (this.sendHeaderBuffer) {
                wasmApi.EdtGetMessageData(this.udtSocket, 0, 0, 0, this.sendHeaderBuffer, edt.HeaderSize);

                // Notify JS of new prefetch header
                if (this.prefetchCallback) {
                    var module = edt.wasmModule;
                    var viewIntoCBuffer = new Uint8Array(module.HEAPU8.buffer, this.sendHeaderBuffer, edt.HeaderSize);
                    this.prefetchCallback(new Uint8Array(viewIntoCBuffer));
                }
            }

            // We cannot notify right away (probably related to this being fired when socket has sent the message and not on UDT ack)
            setTimeout(function() {
                handler();
            }, 20);
        }
    },

    onDataReceived: function edtClient$onDataReceived(data, client)
    {
        if (!data || data.byteLength <= 0)
            return;
        
        if (this['dtlsGreeter'] && this.dtlsGreeter.handshakeInProgress()) {
            this.dtlsGreeter.onDataReceived(data);
        } else {
            let module = edt.wasmModule;
            let size = data.byteLength;
            if (this.dataBufferSize < size) {
                if (this.dataBuffer)
                    module._free(this.dataBuffer);
                this.dataBufferSize = size;
                if (this.dataBufferSize < 1500)
                    this.dataBufferSize = 1500;
                this.dataBuffer = module._malloc(this.dataBufferSize);
            }
            if (this.dataBuffer) {
                module.HEAPU8.set(new Uint8Array(data, 0, size), this.dataBuffer);
                let result = wasmApi.EdtOnDataReceived(this.udtSocket, this.dataBuffer, size);
                if (result)
                    this.dataBuffer = result;
            }
        }
    },

    notifyClose: function edtClient$notifyClose()
    {
        if (this.closeHandler) {
            var handler = this.closeHandler;
            var result = this.closeResult;

            this.closeHandler = null;

            handler(result);
        }
    },

    closeSocket: function edtClient$closeSocket()
    {
        // This means we got disconnected because of server/network
        if (!this.closing) {
            if (this.dataHandler) {
                this.dataHandler({socket:this, error:"Disconnected"});
            }
        }

        if (this.client != null) {
            this.client.close();
            this.client = null;
        }
    },

    prefetchPacket: function edtClient$prefetchPacket(control, arrayBuffer)
    {
        var module = edt.wasmModule;
        var pointerSrc;
        var sizeSrc;
        var messageSize = edt.HeaderSize;

        // We will use a call to prefetchPacket to preallocate buffer that will have to updated on each send operation
        if (!this.sendHeaderBuffer) {
            this.sendHeaderBuffer = module._malloc(edt.HeaderSize);
        }
        
        if (arrayBuffer && !control) {
            if (typeof arrayBuffer == "string")
                arrayBuffer = this.stringToArrayBuffer(arrayBuffer);

            pointerSrc = this.getCPointerFromArrayBuffer(arrayBuffer);
            sizeSrc = arrayBuffer.byteLength;

            messageSize += arrayBuffer.byteLength;
        } else {
            pointerSrc = 0;
            sizeSrc = 0;

            // Control messages seems to have 4 bytes of padding
            messageSize += 4;
        }

        // Add safety padding to message size
        messageSize += 32;

        var pointerTarget = module._malloc(messageSize);

        // Note that EdtGetMessageData will return buffer size
        var bufferSize = wasmApi.EdtGetMessageData(this.udtSocket, control, pointerSrc, sizeSrc, pointerTarget, messageSize);

        if (pointerSrc != 0)
            module._free(pointerSrc);

        var retValue = null;

        if (bufferSize > 0) {
            // We are returning a JS copy of pointerTarget
            var viewIntoCBuffer = new Uint8Array(module.HEAPU8.buffer, pointerTarget, bufferSize);
            retValue = new Uint8Array(viewIntoCBuffer);
        }

        module._free(pointerTarget);
        return retValue;
    },

    notifyMTU: function edtClient$notifyMTU()
    {
        var handler = this.mtuHandler;
        if (handler) {
            this.mtuHandler = null;
            if (typeof handler === "function")
                handler();
            else
                edt.logFunc("Warning unexpected value for MTU callback:" + handler);
        }
    },

    // Utility Functions

    getCPointerFromArrayBuffer: function edtClient$getCPointerFromArrayBuffer(data)
    {
        let pointer = edt.wasmModule._malloc(data.byteLength);
        if (pointer)
            edt.wasmModule.HEAPU8.set(new Uint8Array(data, 0, data.byteLength), pointer);
    
        return pointer;
    },

    stringToArrayBuffer: function stringToArrayBuffer(text)
    {
        if (this.textEncoder == null)
            this.textEncoder = new TextEncoder('utf-8');
    
        return this.textEncoder.encode(text).buffer;
    },

    bufferToJson: function edtClient$bufferToJson(pointer, size, json, layout)
    {
        let module = edt.wasmModule;

        if (pointer % 4 != 0) {
            console.warn("Unaligned pointer in edtClient.bufferToJson() call");
            return;
        }

        if (size == -1) {
            size = module.HEAPU32[pointer >> 2];
            pointer += 4;
            size -= 4;
        }

        let int32Array = new Int32Array(module.HEAP32.buffer, pointer, size);
        let uint32Array = new Uint32Array(module.HEAPU32.buffer, pointer, size);

        for(let i = 0, pos = 0; i < layout.length; i += 2, pos++) {
            let sizeElem = layout[i];
            let value;

            if (sizeElem == Tint) {
                value = int32Array[pos];
            } else if (sizeElem == Tuint32_t) {
                value = uint32Array[pos];
            } else if (sizeElem == Tint64_t) {
                value = (int32Array[pos + 1] * 0xFFFFFFFF) + uint32Array[pos];
                pos++;
            } else if (sizeElem == Tuint64_t) {
                value = (uint32Array[pos + 1] * 0xFFFFFFFF) + uint32Array[pos];
                pos++;
            } else {
                edt.logFunc("Unexpected layout size:" + sizeElem);
                break;
            }

            json[layout[i+1]] = value;
        }
    }
};

/// Static function called from C++ when there is available data
/// the original call comes from (CUDT::ConsumeData) and then to EdtNotifyData
edtClient.NotifyData = function edtClient$NotifyData(udtSocket)
{
    var client = edtClient.socketsMap[udtSocket];
    if (!client) {
        edt.logFunc("edtClient$NotifyData socket not found " + udtSocket);
        return;
    }

    if (client.dataHandler)
        client.dataHandler();
};

/// Static function called from C++ when the UDT connection is made
/// after asyncHandshake is finished in EdtOnDataReceived
edtClient.NotifyConnection = function edtClient$NotifyConnection(udtSocket)
{
    var client = edtClient.socketsMap[udtSocket];
    if (!client) {
        edt.logFunc("edtClient$NotifyConnection socket not found " + udtSocket);
        return;
    }

    client.notifyConnection(null);
};

/// Static function called from C++ when a message is sent (EdtOnSent)
edtClient.NotifySent = function edtClient$NotifySent(udtSocket)
{
    var client = edtClient.socketsMap[udtSocket];
    if (!client) {
        edt.logFunc("edtClient$NotifySent socket not found " + udtSocket);
        return;
    }

    client.notifySent(null);
};

/// Static function called from C++ when a message needs to be sent
///  through the native socket
edtClient.SendSocket = function edtClient$SendSocket(udtSocket, buffer, handler)
{
    var udtClient = edtClient.socketsMap[udtSocket];
    if (!udtClient) {
        edt.logFunc("edtClient$SendSocket socket not found " + udtSocket);
        return;
    }

    // This call occurs frequently so we are sending it straight to native client
    if (udtClient.client)
        udtClient.client.send(buffer, handler);
};

/// Static function called from C++ when establishing a connection asynchronously
edtClient.NotifyConnectAsync = function edtClient$NotifyConnectAsync(udtSocket)
{
    // Note that we use setTimeout to avoid a chrome warning about blocking the main thread
    setTimeout(function() {
        wasmApi.EdtConnectAsync(udtSocket);
    }, 10);
};

/// Static function called from C++ when socket is erased and memory has been released (EdtNotifySocketErased)
edtClient.NotifyClose = function edtClient$NotifyClose(udtSocket)
{
    var client = edtClient.socketsMap[udtSocket];
    if (!client) {
        edt.logFunc("edtClient$NotifyClose socket not found " + udtSocket);
        return;
    }

    client.notifyClose();

    // Note that we actually wait until all memory is released to remove this socket from the maps
    delete edtClient.socketsMap[udtSocket];
    delete edtClient.idMap[client.socketId];
};

/// Static function called from C++ to close underlying socket
edtClient.CloseSocket = function edtClient$CloseSocket(udtSocket)
{
    var client = edtClient.socketsMap[udtSocket];
    if (!client) {
        edt.logFunc("edtClient$CloseSocket socket not found " + udtSocket);
        return;
    }

    client.closeSocket();
};

/// Static function called from C++ when MTU completes
edtClient.NotifyMTU = function edtClient$NotifyMTU(udtSocket)
{
    var client = edtClient.socketsMap[udtSocket];
    if (!client) {
        edt.logFunc("edtClient$NotifyMTU socket not found " + udtSocket);
        return;
    }

    client.notifyMTU();
};

edtClient.socketsMap = {};
edtClient.idMap = {};

// Size of EDT header
edt.HeaderSize = 16;

// These constants need to be kept in sync with EDT_QUERYINFO_ in WasmData.h
// Note that values bigger than 16 will be assumed to require a valid UDTSOCKET
edt.QueryID = { Debug: 0, MultiThread: 1, Connected: 16, Closing: 17, RcvBufSize: 18, PerfMon: 19};

// These constants need to be kept in sync with UDTOpt in udtc.h
edt.Option = {
    MSS: 0,              // the Maximum Transfer Unit
    SNDSYN: 1,           // if sending is blocking
    RCVSYN: 2,           // if receiving is blocking
    CC: 3,               // custom congestion control algorithm
    FC : 4,              // Flight flag size (window size)
    SNDBUF: 5,           // maximum buffer in sending queue
    RCVBUF: 6,           // UDT receiving buffer size
    LINGER: 7,           // waiting for unsent data when closing
    UDPSNDBUF: 8,        // UDP sending buffer size
    UDPRCVBUF: 9,        // UDP receiving buffer size
    MAXMSG: 10,          // maximum datagram message size
    MSGTTL: 11,          // time-to-live of a datagram message
    APPEND: 12,          // try to append STREAM data before sending
    RENDEZVOUS: 13,      // rendezvous connection mode
    SSL: 14,             // SSL (DTLS) connection type (server or client)
    NSGHAFTIMEO: 15,     // NSG HA failover connection liveness timeout
    SNDTIMEO: 16,        // send() timeout
    RCVTIMEO: 17,        // recv() timeout
    REUSEADDR: 18,       // reuse an existing port or create a new one
    MAXBW: 19,           // maximum bandwidth (bytes per second) that the connection can use
    STATE: 20,           // current socket state, see UDTSTATUS, read only
    EVENT: 21,           // current available events associated with the socket
    SNDDATA: 22,         // size of data in the sending buffer
    RCVDATA: 23,         // size of data available for recv
    SET_DTLS: 24,        // DTLS Configuration
    GET_DTLS: 25,        // DTLS Connection Information
    SUBCHANNEL: 26,      // Sub-Channel
    PAYLOAD: 27,         // payload size (get only)
    MTUENUMSS: 28,       // HDX-16658 - Enumerate all search strategies as a bitmap (get only)
    MTUINITSS: 29,       // HDX-16658 - Select the search strategy to be used (set only)
    MTUSETPIVOT: 30,     // HDX-16658 - Set pivot for MTU discovery (set only)
    MTUSTARTDISC: 31,    // HDX-16658 - Start path MTU discovery (set only)
    ECHOTIMEO: 32,       // HDX-16658 - Timeout value for ECHO packet(s) to be used by search strategies (set only)
    CANCELMTUDISC: 33,   // HDX-16658 - Cancel/disable MTU discovery
    PROXYCONFIG: 34,     // HDX-27786 - Rendezvous explicit proxy support
    RESETMTUFLAG: 35,    // HDX-25577 - Setting DF during MTU discovery (set only)
    OUTOFORDERLIMIT: 36, // Receiver Out Of Order Limit
    SETPERFMEM: 37,      // HDX-29977 - Set memory to share EDT performance stats between TD and CtxSmcDrv
    DTLS_OVERHEAD: 38    // DTLS Overhead (get only) 
};

// These constants need to be kept in sync with UDT_* in udtc.h
edt.Result = {
    ECONNLOST: -7,          // Connection was broken
    ENOCONN: -8,            // Connection does not exist
    EINVSOCK: -21,          // Operation not supported: Invalid socket ID
    EASYNCRCV: -34,         // Non-blocking call failure: no data available for reading
    ETIMEOUT: -35           // Non-blocking call failure: timed out
};

// This array allows us to parse UDT_TRACEINFO so it needs to match with the one defined in udt_perfstats.h
var Tint64_t = "a";
var Tuint64_t = "b";
var Tint = "c";
var Tuint32_t = "d";

edt.TraceInfoLayout = [
    Tint64_t, "msTimeStamp",                 // time since the UDT entity is started, in milliseconds
    Tint64_t, "pktSentTotal",                // total number of sent data packets, including retransmissions
    Tint64_t, "pktRecvTotal",                // total number of received packets
    Tuint64_t, "bytesSentTotal",			 // total number of sent data bytes, including retransmissions
    Tuint64_t, "bytesRecvTotal",			 // total number of received bytes
    Tint, "pktSndLossTotal",                 // total number of lost packets (sender side)
    Tint, "pktRcvLossTotal",                 // total number of lost packets (receiver side)
    Tint, "pktRcvOOOTotal",                  // total number of out-of-order packets (receiver side)
    Tint, "pktRetransTotal",                 // total number of retransmitted packets
    Tint, "pktSentACKTotal",                 // total number of sent ACK packets
    Tint, "pktRecvACKTotal",                 // total number of received ACK packets
    Tint, "pktSentNAKTotal",                 // total number of sent NAK packets
    Tint, "pktRecvNAKTotal",                 // total number of received NAK packets
    Tuint64_t, "usSndDurationTotal",         // total time duration when UDT was sending data (idle time exclusive)

    // local measurements
    Tint64_t, "pktSent",                     // number of sent data packets, including retransmissions
    Tint64_t, "pktRecv",                     // number of received packets
    Tuint64_t, "bytesSent",				     // number of sent data bytes, including retransmissions
    Tuint64_t, "bytesRecv",				     // number of received bytes
    Tint, "pktSndLoss",                      // number of lost packets (sender side)
    Tint, "pktRcvLoss",                      // number of lost packets (receiver side)
    Tint, "pktRcvOOO",                       // number of out-of-order packets (receiver side)
    Tint, "pktRetrans",                      // number of retransmitted packets
    Tint, "pktSentACK",                      // number of sent ACK packets
    Tint, "pktRecvACK",                      // number of received ACK packets
    Tint, "pktSentNAK",                      // number of sent NAK packets
    Tint, "pktRecvNAK",                      // number of received NAK packets
    Tuint64_t, "bpsSendRate",                // sending rate in b/s
    Tuint64_t, "bpsRecvRate",                // receiving rate in b/s
    Tuint64_t, "usSndDuration",              // current busy sending time (i.e., idle time exclusive)

    // instant measurements
    Tint, "pktFlowWindow",                   // flow window size, in number of packets
    Tint, "pktCongestionWindow",             // congestion window size, in number of packets
    Tint, "pktFlightSize",                   // number of packets on flight
    Tint, "pktDeliveryRate",                 // packet arrival rate at the remote side, in pkts per second
    Tint, "pktAvailSndBuf",                  // available UDT sender queue size, in number of packets
    Tint, "pktAvailRcvBuf",                  // available UDT receiver queue size, in number of packets
    Tuint64_t, "bpsBandwidth",               // estimated bandwidth, in bits per second
    Tuint32_t, "usPktSndPeriod",             // packet sending period, in microseconds
    Tuint32_t, "usRTT",                      // RTT, in microseconds

    // Added by WebAssembly
    Tint, "consumedData",
    Tint, "receivedData",
];

// TODO: Figure out how we can initialize this
edt.initializeWasm = function edt$initializeWasm(module)
{
    edt.wasmModule = module;

    wasmApi = {
        EdtSetLogLevel: module.cwrap('EdtSetLogLevel', 'number', ['number']),
        EdtCreateSocket: module.cwrap('EdtCreateSocket', 'number', ['number', 'string', 'number']),
        EdtConnectSocket: module.cwrap('EdtConnectSocket', 'number', ['number', 'number', 'number']),
        EdtOnDataReceived: module.cwrap('EdtOnDataReceived', 'number', ['number', 'number', 'number']),
        EdtSend: module.cwrap('EdtSend', 'number', ['number', 'number', 'number']),
        EdtCloseSocket: module.cwrap('EdtCloseSocket', 'number', ['number']),
        EdtReceive: module.cwrap('EdtReceive', 'number', ['number', 'number', 'number']),
        EdtQueryInfo: module.cwrap('EdtQueryInfo', 'number', ['number', 'number', 'number']),
        EdtSetOption: module.cwrap('EdtSetOption', 'number', ['number', 'number', 'number', 'number']),
        EdtGetOption: module.cwrap('EdtGetOption', 'number', ['number', 'number']),
        EdtConnectAsync: module.cwrap('EdtConnectAsync', 'number', ['number']),
        EdtGetMessageData: module.cwrap('EdtGetMessageData', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
        EdtGetSSLContext: module.cwrap('EdtGetSSLContext', 'number', ['number']),
        doClientHandshake: module.cwrap('doClientHandshake', 'number', ['number', 'number', 'number', 'number', 'number'], { async: true }),
    };

    if (edt.onRuntimeInitialized)
        edt.onRuntimeInitialized();
};

function edtLog(text)
{
    // Note that we are not trying to support log calls without \n to avoid losing last log after a crash
    // Removing the carriage return is not strictly needed in Chrome but it is when using node

    let n = text.length;

    if (text[n - 1] == "\n") {
        text = text.substr(0, n - 1);
    }

    console.log(text);
}

edt.logFunc = edtLog;
edt.setLogLevel = function edt$setLogLevel(logLevel, func)
{
    edt.logFunc = func?func:edtLog;
    return wasmApi.EdtSetLogLevel(logLevel);
};

edt.queryInfo = function edt$queryInfo(socket, query, data)
{
    return wasmApi.EdtQueryInfo(socket, query, data);
};

// dtlsClient Class
    
function dtlsHandshake(udpSocket, udtSocket) {
    this.udpSocket = udpSocket;
    this.context = wasmApi.EdtGetSSLContext(udtSocket);
    if (!this.context) {
        dtlsHandshake.error("could not locate DTLS context");
        this.status = dtlsHandshake.HANDSHAKE_STATUS.ERROR;
        this.cleanup();
        return;
    }
    this.status = dtlsHandshake.HANDSHAKE_STATUS.NOT_STARTED;

    this.maxBufSize = 4096;
    this.inBufSize = 0;

    this.pOutBufSize = edt.wasmModule._malloc(4);
    this.pInBuf = edt.wasmModule._malloc(this.maxBufSize);
    this.pOutBuf = edt.wasmModule._malloc(this.maxBufSize);
    this.pNumProcessedBytes = edt.wasmModule._malloc(4);
    if (!this.pOutBufSize ||
        !this.pInBuf      ||
        !this.pOutBuf     ||
        !this.pNumProcessedBytes)
    {
        dtlsHandshake.error("out of memory");
        this.cleanup();
        return;
    }

    edt.wasmModule.setValue(this.pOutBufSize, this.maxBufSize, 'i32');
    this.receivedPackets = [];
    this.handshakeGuard = false;
    this.processID = setInterval(this.processPackets.bind(this), 50);
}

dtlsHandshake.error = function dtlsHandshake$error(msg) { edt.logFunc("dtlsHandshake: " + msg); };

dtlsHandshake.HANDSHAKE_STATUS = {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    SUCCESS: 2,
    ERROR: 3
};

dtlsHandshake.SSL_STATUS = {
    SUCCESS: 0,
    HANDSHAKE_COMPLETE: 2
};

dtlsHandshake.prototype = {
    // Public
    handshakeInProgress: function dtlsHandshake$handshakeInProgress() {
        return this.status < dtlsHandshake.HANDSHAKE_STATUS.SUCCESS;
    },

    onDataReceived: function dtlsHandshake$onDataReceived(data) {
        if (this["timeout"] !== undefined) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
        if (data.byteLength > this.maxBufSize) {
            dtlsHandshake.error("Received an unexpectedly large packet: " + data.byteLength);
        } else {
            this.receivedPackets.push(data);
        }
    },

    clientHandshake: function dtlsHandshake$clientHandshake() {
        this.status = dtlsHandshake.HANDSHAKE_STATUS.IN_PROGRESS;
        this.continueHandshake();
        return new Promise((resolve, reject) => {
            this.handshakeComplete = resolve;
            this.handshakeError = reject;
        });;
    },

    // Private
    cleanup: function dtlsHandshake$cleanup() {
        if (this.pOutBufSize)
            edt.wasmModule._free(this.pOutBufSize);
        if (this.pOutBuf)
            edt.wasmModule._free(this.pOutBuf);
        if (this.pInBuf)
            edt.wasmModule._free(this.pInBuf);
        if (this.pNumProcessedBytes)
            edt.wasmModule._free(this.pNumProcessedBytes);
        if (this.processID)
            clearInterval(this.processID);
        if (this["timeout"] !== undefined)
            clearTimeout(this.timeout);

        this.udpSocket = -1;
        this.context = null; // do not free this: it is owned by CUDT/CChannel
        this.pOutBufSize = null;
        this.pOutBuf = null;
        this.pInBuf = null;
        this.pNumProcessedBytes = null;
        this.processID = null;
        this.handshakeGuard = false;
        this.inBufSize = 0;
        this.timeout = undefined;
        this.receivedPackets = [];
    },

    setInputBuf: function dtlsHandshake$setInputBuf(data) {
        this.inBufSize = Math.min(data.byteLength, this.maxBufSize);
        edt.wasmModule.HEAPU8.set(new Uint8Array(data, 0, this.inBufSize), this.pInBuf);
    },

    resetOutputBuf: function dtlsHandshake$resetOutputBuf() {
        edt.wasmModule.setValue(this.pOutBufSize, this.maxBufSize, 'i32');
    },

    sendOutData: function dtlsHandshake$sendOutData() {
        const outBufSize = edt.wasmModule.getValue(this.pOutBufSize, 'i32');
        if (outBufSize > 0) {
            // SharedArrayBuffers, such as HEAPU8 with pthreads, are non-transferable.
            // In order to send data to a chrome.sockets.udp, we need a transferable object.
            let data = new Uint8Array(outBufSize);
            data.set(new Uint8Array(edt.wasmModule.HEAPU8.buffer, this.pOutBuf, outBufSize));
            this.udpSocket.send(data, function (info) {
                if (info && (info.resultCode < 0)) {
                    dtlsHandshake.error("send error: " + info.resultCode);
                }
            });
        }
    },

    processPackets: function dtlsHandshake$processPackets() {
        if (this.receivedPackets.length > 0 && this.handshakeInProgress())
                this.continueHandshake();
    },

    continueHandshake: async function dtlsHandshake$continueHandshake() {
        if (!this.handshakeGuard) {
            this.handshakeGuard = true;

            if (this.receivedPackets.length > 0) {
                this.setInputBuf(this.receivedPackets.shift());
            } else {
                this.inBufSize = 0;
            }
            this.resetOutputBuf();

            const status = await wasmApi.doClientHandshake(this.context, this.pInBuf, this.inBufSize, this.pOutBuf, this.pOutBufSize);

            if (status == dtlsHandshake.SSL_STATUS.SUCCESS) {
                this.sendOutData();
                if (this["timeout"] == undefined) {
                    this.timeout = setTimeout(function() {
                        dtlsHandshake.error("Handshake timeout");
                        this.status = dtlsHandshake.HANDSHAKE_STATUS.ERROR;
                        this.cleanup();
                        this.handshakeError();
                    }.bind(this), 2500);
                }
            } else if (status == dtlsHandshake.SSL_STATUS.HANDSHAKE_COMPLETE) {
                this.status = dtlsHandshake.HANDSHAKE_STATUS.SUCCESS;
                this.cleanup();
                this.handshakeComplete();
            } else {
                dtlsHandshake.error("Exited handshake with error: " + status);
                this.status = dtlsHandshake.HANDSHAKE_STATUS.ERROR;
                this.cleanup();
                this.handshakeError();
            }
            this.handshakeGuard = false;
        }
    }
};
edt.dtlsHandshake = dtlsHandshake;

// UDPChromeSocketsClient Class

function UDPChromeSocketsClient(owner)
{
    this.owner = owner;
    this.isOpened = false;
}
edt.UDPChromeSocketsClient = UDPChromeSocketsClient;

UDPChromeSocketsClient.prototype = 
{
    connect: function UDPChromeSocketsClient$connect(port, host, options, handler)
    {
        this.port = port;
        this.host = host;

        // Sanity check for chrome sockets udp API availability
        if ((typeof chrome === undefined) || (chrome.sockets === undefined) || (chrome.sockets.udp === undefined)) {
            this.notifyConnectError(handler, "chrome sockets api not available");
            return;
        }

        var _this = this;

        chrome.sockets.udp.create(options, function (createInfo) {
            _this.socketId = createInfo.socketId;

            chrome.sockets.udp.bind(createInfo.socketId, "0.0.0.0", 0, function (result) {

                // This can happen if app does not request (or is not granted) udp sockets permission
                if (result === undefined) {
                    var error = "Failed to bind udp socket";
                    if (chrome.runtime.lastError && chrome.runtime.lastError.message)
                        error += ", " + chrome.runtime.lastError.message;

                    _this.notifyConnectError(handler, error);
                    return;
                }

                chrome.sockets.udp.getInfo(createInfo.socketId, function (detailedInfo) {
                    _this.localPort = detailedInfo.localPort;
                    _this.localAddress = detailedInfo.localAddress;

                    _this.onBound(handler);
                });    
            });
        });
    },

    onBound: function UDPChromeSocketsClient$onBound(handler)
    {
        var _this = this;

        if (chrome.runtime.lastError) {
            this.notifyConnectError(handler, chrome.runtime.lastError.message);
        } else {
            _this.isOpened = true;

            // Note that there is a global listener
            if (UDPChromeSocketsClient.listening == 0) {
                chrome.sockets.udp.onReceive.addListener(UDPChromeSocketsClient.listener);
                UDPChromeSocketsClient.listening++;
            }

            if (this.owner && this.owner.onConnected)
                this.owner.onConnected(this, handler);
        } 
    },

    notifyConnectError: function UDPChromeSocketsClient$notifyConnectError(handler, errorDetail)
    {
        if (this.owner && this.owner.onErrorConnect)
            this.owner.onErrorConnect(true, errorDetail);
    },

    send: function UDPChromeSocketsClient$send(data, handler)
    {
        if (this.isOpened)
            chrome.sockets.udp.send(this.socketId, data, this.host, this.port, handler);    
    },

    close: function UDPChromeSocketsClient$close()
    {
        chrome.sockets.udp.close(this.socketId);
        this.isOpened = false;

        if (UDPChromeSocketsClient.listening > 0) {
            UDPChromeSocketsClient.listening--;
            if (UDPChromeSocketsClient.listening == 0)
                chrome.sockets.udp.onReceive.removeListener(UDPChromeSocketsClient.listener);
        }
    },

    getSocket: function UDPChromeSocketsClient$getSocket()
    {
        return this.socketId;
    },

    updateReceiveBufferSize: function UDPChromeSocketsClient$updateReceiveBufferSize(size)
    {
        chrome.sockets.udp.update(this.socketId, { bufferSize: size });
    },

	stopReceiveEvents: function UDPChromeSocketsClient$stopReceiveEvents()
	{
		chrome.sockets.udp.setPaused(this.socketId, true); 
	}
};

UDPChromeSocketsClient.listening = 0;

UDPChromeSocketsClient.listener = function UDPChromeSocketsClient$listener(info)
{
    // Note that there is a global listener so we use the idMap to route the message appropriately
    if (info.data) {
        var edt_client = edtClient.idMap[info.socketId];

        // After a socket is closed we might still receive some of the keep alive messages
        // if we do not do this test here we will see some console.logs generated by EdtOnDataReceived
        if (edt_client) {
            if (edt_client["client"] && !edt_client.client["hasRemoteAddress"]) {
                // Ensure future sends use an IP address to prevent DNS lookups
                edt_client.client.hasRemoteAddress = true;
                edt_client.client.host = info.remoteAddress;
            }
            edt_client.onDataReceived(info.data);
        }
    }
};

// UDPNodeClient Class

function UDPNodeClient(owner)
{
    this.owner = owner;
    this.isOpened = false;
}

UDPNodeClient.prototype = 
{
    connect: function UDPNodeClient$connect(port, host, options, handler)
    {
        this.port = port;
        this.host = host;

        var _this = this;

        const dgram = require('dgram');
        var socket = dgram.createSocket('udp4');
        this.socket = socket;

        if (!UDPNodeClient.clients) {
            UDPNodeClient.clients = {};
            UDPNodeClient.socketID = 1;
        }

        var socketID = UDPNodeClient.socketID;
        this.socketId = socketID;
        UDPNodeClient.socketID++;

        UDPNodeClient.clients[this.socketId] = this;
        
        socket.on('connect', () => {
            const address = socket.address();
            this.localPort = address.port;

            _this.onBound(handler);
        });

        socket.on("message", (data, rinfo) => {
            this.owner.onDataReceived(data);
        });

        // This is needed to avoid exceptions in Node when running in Linux
        socket.on("error", (error) => {
        });

        socket.connect(port, host);
    },

    onBound: function UDPNodeClient$onBound(handler)
    {
        this.isOpened = true;

        if (this.owner && this.owner.onConnected)
            this.owner.onConnected(this, handler);
    },

    send: function UDPNodeClient$send(data, handler)
    {
        if (this.isOpened)
            this.socket.send(data, handler);
    },

    close: function UDPNodeClient$close()
    {
        this.isOpened = false;
        this.socket.close();
        delete UDPNodeClient.clients[this.socketId];
    },    

    getSocket: function UDPNodeClient$getSocket()
    {
        return this.socket;
    },

    updateReceiveBufferSize: function UDPNodeClient$updateReceiveBufferSize(size)
    {
        if (this['socket'] && typeof this.socket.setRecvBufferSize == 'function')
            this.socket.setRecvBufferSize(size);
    },

	stopReceiveEvents: function UDPNodeClient$stopReceiveEvents()
	{
	}
};

edt.UDPNodeClient = UDPNodeClient;

if (typeof window !== 'undefined') {
    EdtNativeModule(/* optional default settings */).then(function(module) {
        module.__edt = edt;
        edt.initializeWasm(module);
      });
} else {

    // This function allows node unit tests to mock the WASM module
    // Note that it means that all node scenarios need to manually call this

    edt.initModule = function(moduleNameOrModule) {
        if (moduleNameOrModule === undefined)
            moduleNameOrModule = "./edt.js";

        if (typeof moduleNameOrModule === "string") {
            var edtNative = require(moduleNameOrModule);
            edtNative().then((module) => {
                module.__edt = edt;
                edt.initializeWasm(module);
            });
        } else {
            edt.initializeWasm(moduleNameOrModule);
        }
    };
}

})();
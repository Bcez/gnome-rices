function SimpleRTCData(a,b,c){function A(){var c=a||{iceServers:[{url:"stun:stun.l.google.com:19302"}]},d=b||{optional:[{DtlsSrtpKeyAgreement:!0}]};return new i(c,d)}function B(a){var b="",c;for(var d=0;d<a.length;d++)c=a[d].toString(16),c.length===1&&(c="0"+c),b+=c;return b}function C(a){var b=new ArrayBuffer(a.length/2),c=new Uint8Array(b);for(var d=0;d<a.length/2;d++)c[d]=parseInt(a.substr(d*2,2),16);return b}function D(a){var b=new Uint8Array(new ArrayBuffer(o));return window.crypto.getRandomValues(b),a?b.buffer:B(b)}function I(){while(z.length>0)l.send(z.shift())}function J(a,b){var c=["local","remote"];if(c.indexOf(a)===-1)throw new Error("Unsupported Stats Type ("+a+")");try{H.getStats(function(c){var d=c.result(),e={};d.forEach(function(b){e[b.type]=e[b.type]||[];var c=b[a].names(),d={};c.forEach(function(c){var e=b[a].stat(c);d[c]=e}),e[b.type].push(d)}),b(e)})}catch(d){console.log(d)}}function K(a,b){if(typeof G[a]=="undefined")return!0;for(var c=0;c<G[a].length;c++)G[a][c].apply(e,b)}function L(a){if(typeof F[a.type]=="undefined")return!0;for(var b=0;b<F[a.type].length;b++)F[a.type][b].apply(this,[a])}function M(a){if(typeof E[a.type]=="undefined")return!0;for(var b=0;b<E[a.type].length;b++)E[a.type][b].apply(this,[a])}function N(a,b){var c=null;a.addEventListener(b,function(a){if(a.type==="message"&&typeof a.data=="string")try{c=JSON.parse(a.data);if(c._internal)return}catch(b){}M.apply(this,[a])})}function O(a){return typeof a._internal!="undefined"?!0:!1}function P(a){switch(a.type){case"cb":typeof m[a.data]!="undefined"&&(m[a.data]({}),delete m[a.data]);break;case"rq":K("request",[{id:a.data.requestId,sendReply:function(b){Q(a.data.replyId,b)}}])}}function Q(a,b){var c=b,d=g.object;if(typeof b=="string"){var e=unescape(encodeURIComponent(b));c=new ArrayBuffer(e.length);var h=new Uint8Array(c);for(var i=0,j=e.length;i<j;i++)h[i]=e.charCodeAt(i);d=g.string}var k=c.byteLength+3+o,m=f.rp,n=new ArrayBuffer(k),p=new Uint8Array(n);p[0]=m,p[1]=d,p.set(new Uint8Array(C(a)),3),p.set(new Uint8Array(c),11),eb(l,n)}function R(a,b){if(typeof a=="string")return b(a),!1;var c,d=new DataView(a),e=d.getUint32(0,!0),f=d.getUint32(4,!0),g=d.getUint8(8,!0),h=d.getUint8(9,!0);g&s&&(q[e]={offset:0,view:new Uint8Array(new ArrayBuffer(f))});var i=q[e],j=(new Uint8Array(a)).subarray(10);if(g&t){var k=i.offset+r-f;k>0&&(j=j.subarray(0,j.length-k))}i.view.set(j,i.offset),i.offset+=r;if(!(g&t))return!1;c=i.view.buffer;if(c instanceof Blob){var l=new FileReader;return l.onload=function(){b(this.result)},l.readAsArrayBuffer(c),!0}h===u&&(c=cb(c)),b(c)}function S(a){a.addEventListener("open",function(){I()}),a.addEventListener("close",function(){h&&(h=!1,K("disconnect"))}),a.addEventListener("message",function(a){R(a.data,function(a){if(typeof a=="string")a=JSON.parse(a),O(a)?P(a):(K("data",[a.data]),typeof a.cb=="string"&&V(a.cb));else{var b=new Uint8Array(a),c=2,d=null,e=null;switch(b[0]){case f.cb:c+=o,d=new ArrayBuffer(o),e=new Uint8Array(d),e.set(b.subarray(2,o+2));break;case f.rp:return T(a),!0}var g=new ArrayBuffer(a.byteLength-c),h=new Uint8Array(g);h.set(b.subarray(c)),K("data",[g]),e&&V(B(e))}})});for(var b=0;b<x.length;b++)N(a,x[b])}function T(a){var b=new Uint8Array(a),c=B(b.subarray(3,3+o));switch(b[1]){case g.string:if(typeof n[c]=="function"){var d="",e=b.subarray(11);for(var f=0;f<e.length;f++)d+=String.fromCharCode(e[f]);var h=decodeURIComponent(escape(d));n[c](h)}break;case g.object:var i=new Uint8Array(new ArrayBuffer(b.length-11));i.set(b.subarray(11)),n[c](i)}delete n[c]}function U(a){h&&l.readyState==="open"?l.send(a):z.push(a)}function V(a){U(JSON.stringify({_internal:!0,type:"cb",data:a}))}function W(a,b){E[a]=E[a]||[],E[a].push(b)}function X(a,b){F[a]=F[a]||[],F[a].push(b)}function Y(a,b){G[a]=G[a]||[],G[a].push(b)}function Z(a,b){if(typeof e.onError!="function")return;e.onError({message:a,rtc:b})}function $(a){return{type:a.type,sdp:a.sdp}}function _(a){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex}}function ab(a,b){var c=a.byteLength+2,d=0;b!==null&&(d=f.cb,c+=b.byteLength);var e=new ArrayBuffer(c),g=new Uint8Array(e);return g[0]=d,b!==null?(g.set(new Uint8Array(b),2),g.set(new Uint8Array(a),10)):g.set(new Uint8Array(a),2),g.buffer}function bb(a){return typeof a.buffer!="undefined"?!0:!1}function cb(a){var b=new Uint16Array(a),c=b.length,d="",e=65535;for(var f=0;f<c;f+=e){var g=e;f+e>c&&(g=c-f),d+=String.fromCharCode.apply(null,b.subarray(f,f+g))}return d}function db(a){var b=new ArrayBuffer(a.length*2),c=new Uint16Array(b);for(var d=0,e=a.length;d<e;d++)c[d]=a.charCodeAt(d);return b}function eb(a,b){var c=u,d=0;if(typeof b=="object"&&b instanceof ArrayBuffer)c=v,d=b.byteLength;else{if(typeof b!="string")throw new Error("Unsupported data type: "+typeof b);b=db(b),d=b.byteLength}var e=10,f=Math.ceil(d/r),g=new ArrayBuffer(r+e),h=new DataView(g);h.setUint32(0,p,!0),h.setUint32(4,d,!0),h.setUint8(9,c);var i=new Uint8Array(b),j=new Uint8Array(g);for(var k=0;k<f;k++){var l=0;k===0&&(l|=s),k===f-1&&(l|=t),h.setUint8(8,l);var m=k*r,n=m+r;n>d&&(n=d),j.set(i.subarray(m,n),e),U(g)}}function fb(a,b){b=b||function(){};var c=a.shift();if(!c)return b({error:0,errmsg:""}),!0;H.addIceCandidate(new k(c),function(){fb(a,b)},function(){console.warn("fail")})}var d=null,e=this,f={cb:1,rp:2},g={string:1,object:2},h=!1,i=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,j=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription,k=window.mozRTCIceCandidate||window.webkitRTCIceCandidate||window.RTCIceCandidate;if(!this)return{isSupported:function(){return!i||!j||!k?!1:!0}};var l=null,m=[],n=[],o=8,p=0,q={},r=32768,s=1,t=2,u=1,v=2,w=["data","error","connect","disconnect","request"],x=["open","close","error","message"],y=["addstream","datachannel","icecandidate","iceconnectionstatechange","identityresult","idpassertionerror","idpvalidationerror","negotiationneeded","peeridentity","remotestream","signalingstatechange"],z=[],E={},F={},G={},H=A();H.addEventListener("iceconnectionstatechange",function(){switch(H.iceConnectionState){case"disconnected":h&&(h=!1,K("disconnect"));break;case"completed":case"connected":h||(h=!0,K("connect"))}}),y.forEach(function(a){H.addEventListener(a,function(a){L.apply(this,[a])})}),H.addEventListener("datachannel",function(a){l=a.channel,S(a.channel)}),this.getConnection=function(){return H},this.getLocalStats=function(a){return J("local",a)},this.getRemoteStats=function(a){return J("remote",a)},this.getDataChannel=function(){return l},this.close=function(){if(!H||H.iceConnectionState==="closed")return null;H.close()},this.send=function(a,b){if(!l)return!1;var c=null,d=a;p++;switch(typeof a){case"string":d={data:a},typeof b=="function"&&(c=D(),m[c]=b,d.cb=c),d=JSON.stringify(d);break;case"object":typeof b=="function"&&(c=D(!0),m[B(new Uint8Array(c))]=b);if(a instanceof ArrayBuffer)d=ab(a,c);else if(bb(a))d=ab(a.buffer,c);else if(c)throw new Error("Callbacks not supported for type `"+a.constructor.name+"`")}eb(l,d)},this.request=function(a,b){var c=D();n[c]=b,U(JSON.stringify({_internal:!0,type:"rq",data:{requestId:a,replyId:c}})),K("request",[])},this.getOffer=function(a){function g(c,d){if(b)return!1;b=!0,a(JSON.stringify({sdp:$(c),icecandidates:d}))}if(d!==null)throw new Error("getOffer cannot be called with getAnswer");d="offer";if(typeof a!="function")throw new Error("getOffer requires first argument to be a callback");var b=!1,e=[],f=null;l=H.createDataChannel("SimpleRTCDataChannel",c||{reliable:!0,ordered:!0}),S(l),H.onicecandidate=function(a){a.candidate?e.push(_(a.candidate)):H.iceGatheringState==="complete"&&g(f,e)},H.createOffer(function(a){H.setLocalDescription(a,function(){},function(){g(null)}),f=a},function(){g(null)})},this.setAnswer=function(a,b){function e(a){a=a||null;if(c)return!0;if(!a&&!d)return!0;c=!0,H.removeEventListener("iceconnectionstatechange",f),a&&(a="SimpleRTCData.setAnswer Failed: "+a),b({error:a})}function f(){switch(H.iceConnectionState){case"completed":case"connected":e();break;case"failed":e("Failed to setAnswer")}}b=b||function(a){if(a.error)throw new Error(a.error)};var c=!1,d=!1;if(typeof a!="string")return e("Expected `string` for Argument 1 (answer) got `"+typeof a+"` instead"),!1;try{a=JSON.parse(a)}catch(g){return e("Malformed Answer Supplied"),!1}if(a.sdp&&a.sdp.type==="offer")return e("Expected Argument 1 to be `Answer` but got an `Offer` instead."),!1;H.addEventListener("iceconnectionstatechange",f),l.addEventListener("open",function(){d=!0,e()});var h=new j(a.sdp);H.setRemoteDescription(h,function(){fb(a.icecandidates)},function(){e("Failed to setRemoteDescription")})},this.getAnswer=function(a,b){function i(a,c){if(g)return!1;g=!0,b(JSON.stringify({sdp:$(a),icecandidates:c}))}if(d!==null)throw new Error("getAnswer cannot be called with getOffer");d="answer";if(typeof a!="string")throw new Error("getAnswer: Argument 1 must be the result of a call to getOffer");try{a=JSON.parse(a)}catch(c){throw new Error("getAnswer: Invalid offer, this should be the result of a call to getOffer")}if(typeof b!="function")throw new Error("getAnswer requires second argument to be a callback");var e=[],f=null,g=!1,h="SimpleRTCData.getAnswer Failed: ";H.addEventListener("icecandidate",function(a){a.candidate?e.push(_(a.candidate)):i(f,e)});var k=new j(a.sdp);H.setRemoteDescription(k,function(){H.createAnswer(function(b){f=b,H.setLocalDescription(b,function(){fb(a.icecandidates)},function(a){Z(h+"(setLocalDescription)",a)})},function(a){Z(h+"(createAnswer)",a)})},function(a){Z(h+"(setRemoteDescription)",a)})},this.onChannelEvent=function(a,b){if(a!=="*"){W(a,b);return}x.forEach(function(a){W(a,b)})},this.onConnectionEvent=function(a,b){if(a!=="*"){X(a,b);return}y.forEach(function(a){X(a,b)})},this.on=function(a,b){if(a==="*")throw new Error("SimpleRTCData.on does not accept wildcard for the eventName argument");if(w.indexOf(a)===-1)throw new Error("SimpleRTCData.on: Unknown eventName ("+a+")");Y(a,b)}}function loadImageHQ(a,b,c){function h(a){if(e)return!1;var c={srcWidth:f,srcHeight:g};b(a,null,c)}function j(){i.removeEventListener("load",k,!1),i.removeEventListener("error",j,!1),i=undefined,b(null,!0)}function k(){i.removeEventListener("load",k,!1),i.removeEventListener("error",j,!1),f=i.naturalWidth,g=i.naturalHeight;var a=c.maxWidth?c.maxWidth:0,b=c.maxHeight?c.maxHeight:0,e=a>b?a:b,l=f>g?g:f,o=Math.round(e/l*f),p=Math.round(e/l*g);a=a||o,b=b||p;var q=n(i,o,p);q=m(c.orientation,q);var r,s;if(d)if(q.width===a&&q.height===b)h(q);else{var t=document.createElement("canvas");t.width=a,t.height=b;var u=t.getContext("2d");r=q.width-a,s=q.height-b;var v=Math.ceil(r/2),w=Math.ceil(s/2);u.drawImage(q,v,w,a,b,0,0,t.width,t.height),q.remove(),q=undefined,h(t)}else if(q.width>a||q.height>b){c.maxHeight||(b=q.height),c.maxWidth||(a=q.width),r=q.width-a,s=q.height-b;var x,y,z,A;r>s?(y=a/q.width*q.height,x=a,z=document.createElement("canvas"),z.width=x,z.height=y,A=z.getContext("2d"),A.drawImage(q,0,0,q.width,q.height,0,0,x,y),q.remove(),q=undefined,h(z)):(x=b/q.height*q.width,y=b,z=document.createElement("canvas"),z.width=x,z.height=y,A=z.getContext("2d"),A.drawImage(q,0,0,q.width,q.height,0,0,x,y),q.remove(),q=undefined,h(z))}else h(q);i.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",i.remove(),i=undefined}function l(a){var b=[5,6,7,8];return b.indexOf(a)!==-1}function m(a,b){a&&(a=parseInt(a,10));var c=[2,3,4,5,6,7,8];if(c.indexOf(a)===-1)return b;var d=document.createElement("canvas");l(a)?(d.width=b.height,d.height=b.width):(d.width=b.width,d.height=b.height);var e=document.createElement("canvas");e.width=d.width>d.height?d.width:d.height,e.height=d.width>d.height?d.width:d.height;var f=e.getContext("2d"),g=d.getContext("2d");switch(a){case 2:f.translate(e.width,0),f.scale(-1,1),f.drawImage(b,0,0),g.drawImage(e,0,0,b.width,b.height,0,0,b.width,b.height);break;case 3:f.translate(e.width,e.height),f.rotate(Math.PI),f.drawImage(b,0,0),g.drawImage(e,0,e.height-b.height,b.width,b.height,0,0,b.width,b.height);break;case 4:f.translate(0,e.height),f.scale(1,-1),f.drawImage(b,0,0),g.drawImage(e,0,e.height-b.height,b.width,b.height,0,0,b.width,b.height);break;case 5:f.rotate(.5*Math.PI),f.scale(1,-1),f.drawImage(b,0,0),g.drawImage(e,0,0);break;case 6:f.rotate(.5*Math.PI),f.translate(0,-e.height),f.drawImage(b,0,0),g.drawImage(e,e.width-b.height,0,b.height,b.width,0,0,b.height,b.width);break;case 7:f.rotate(.5*Math.PI),f.translate(e.width,-e.height),f.scale(-1,1),f.drawImage(b,0,0),g.drawImage(e,e.width-b.height,0,b.height,b.width,0,0,b.height,b.width);break;case 8:f.rotate(-0.5*Math.PI),f.translate(-e.width,0),f.drawImage(b,0,0),g.drawImage(e,0,0)}return e.remove(),e=undefined,d}function n(a,b,c){var d=document.createElement("canvas");d.width=b,d.height=c;var e=null,f=null,g=a.naturalWidth,h=a.naturalHeight,i=Math.ceil(Math.log(g/b)/Math.log(2))-1,j=i,k=g,l=h;if(j===Infinity)throw new Error("Scaling Error");while(j>0){var m=Math.pow(2,i+1-j),n=Math.round(g/m),o=Math.round(h/m),p=e||a;e||(e=document.createElement("canvas"),e.width=n,e.height=o,f=e.getContext("2d")),f.drawImage(p,0,0,k,l,0,0,n,o),k=n,l=o,j--}var q=e||a,r=d.getContext("2d");return r.drawImage(q,0,0,k,l,0,0,b,c),e&&(e.remove(),e=undefined),d}var d=!0,e=!1,f,g;c.crop===!1&&(d=!1),typeof c.maxWidth!="undefined"&&(c.maxWidth=parseInt(c.maxWidth,10)),typeof c.maxHeight!="undefined"&&(c.maxHeight=parseInt(c.maxHeight,10));if(!c.maxWidth||!c.maxHeight)d=!1;b=b||function(){};var i=document.createElement("img");i.style.display="none",i.addEventListener("error",j,!1),i.addEventListener("load",k,!1),i.src=a}"use strict";var WebServer=function(){function m(a,b){if(!c[a])return!0;for(var d=0;d<c[a].length;d++)c[a][d].apply(j,b)}function n(a){if(a.socketId!=e)return!1;i&&clearTimeout(i);var c=Object.keys(b);if(c.length>=k)return setTimeout(function(){chrome.sockets.tcp.getInfo(a.clientSocketId,function(c){c.connected?n(a):(N(a.clientSocketId),delete b[a.clientSocketId])})},3e3),!1;b[a.clientSocketId]=!0,chrome.sockets.tcp.setPaused(a.clientSocketId,!1,function(){}),chrome.sockets.tcp.setNoDelay(a.clientSocketId,!0,function(a){chrome.runtime.lastError&&console.warn(a,chrome.runtime.lastError)})}function o(a){if(!b[a.socketId])return!1;L(a)}function p(){if(d)return m("startError",[{message:"Server already started"}]),!1;i=setTimeout(function(){m("connectorClose")},1e4),chrome.sockets.tcpServer.create({name:"WebServerListener"},function(a){function f(){chrome.sockets.tcpServer.listen(e,"0.0.0.0",c,null,function(a){if(a<0)return a===-147?(c++,setTimeout(function(){f()},1e3),!1):(m("startError",[{result:a}]),!0);d=!0,h=c,chrome.sockets.tcpServer.getInfo(e,function(a){m("start",[{port:a.localPort,address:a.localAddress}])})})}e=a.socketId;var c=g;f(),chrome.sockets.tcpServer.onAccept.addListener(n),chrome.sockets.tcpServer.onAcceptError.addListener(function(){}),chrome.sockets.tcp.onReceive.addListener(o),chrome.sockets.tcp.onReceiveError.addListener(function(a){if(!b[a.socketId])return!1;N(a.socketId),delete b[a.socketId]})})}function q(a){var b=new ArrayBuffer(a.length),c=new Uint8Array(b);for(var d=0;d<c.length;d++)c[d]=a.charCodeAt(d);return b}function s(a){var b=JSON.parse(decodeURIComponent(escape(atob(a))));m("message",[b])}function t(a,b){m("command",[a,b])}function v(a){if(typeof r!="function")return u.push(a),!1;r("*:"+btoa(encodeURIComponent(JSON.stringify(a)))+"\r\n")}function w(a){var b="";for(var c=0;c<a;c++)b+=" ";return b}function A(a,b,c,d,e){d=d||function(){},e=e||{};var f=!1;c>a.size-1&&(f=!0);if(e.nocache!==!0&&z.rangeStart===b&&z.rangeEnd===c&&z.index===a._internalIndex&&z.name===a.name)return d({buffer:z.buffer,start:z.rangeStart,end:z.rangeEnd,lastChunk:f}),!0;var g=new FileReader;g.onerror=function(){d({error:!0})},g.onload=function(a){d({buffer:a.target.result,start:b,end:c,lastChunk:f})},g.readAsArrayBuffer(a.slice(b,c))}function B(a,b,c){var d=0,e=c.size-1,f="",g="",h=262144;b.range=b.range||"",f=b.range.replace("bytes=","").split("-"),d=parseInt(f[0],10),e=d+h,A(c,d,e,function(d){b.range?(g+="HTTP/1.1 206 Partial Content\r\n",d.lastChunk?g+="Connection: close\r\n":g+="Connection: keep-alive\r\n",g+="Accept-Ranges: bytes\r\n"):g+="HTTP/1.1 200 OK\r\n",g+="Content-Type: "+c.type+"\r\n";var e=d.buffer,f=d.start,i=d.end;g+="Content-Length: "+e.byteLength+"\r\n",g+="Content-Range: bytes "+f+"-"+(i<c.size?i:c.size-1)+"/"+c.size+"\r\n",g+="\r\n";var j=new Uint8Array(g.length+e.byteLength);j.set(new Uint8Array(q(g)),0),j.set(new Uint8Array(e),g.length),D(a,j.buffer,function(){setTimeout(function(){var a=f+h,b=i+h;if(a>=c.size)return!1;A(c,a,b,function(d){z.rangeStart=a,z.rangeEnd=b,z.index=c._internalIndex,z.name=c.name,z.buffer=d.buffer},{nocache:!0})},500)})})}function C(a){a=a||"";var b=a.lastIndexOf("?"),c={};if(b!==-1){var d=a.substr(b+1),e=d.split("&");for(var f=0;f<e.length;f++){var g=e[f].split("=");c[g[0]]=g[1]}}return c}function D(a,c,d){d=d||function(){},chrome.sockets.tcp.getInfo(a,function(e){chrome.runtime.lastError&&console.warn(chrome.runtime.lastError),e&&e.connected===!0&&!chrome.runtime.lastError?chrome.sockets.tcp.send(a,c,function(){N(a),d(),delete b[a]}):(N(a),delete b[a])})}function E(a){return typeof WebServer.translation_passthrough!="function"?a:WebServer.translation_passthrough(a)}function F(c,d){function p(b,c){var d="HTTP/1.1 200 OK\r\n";d+="Content-Type: "+b+"; charset=utf-8\r\n",a.indexOf(b)!=-1&&(d+="Cache-Control: max-age: 240\r\n",d+="Expires: Sun, 07 Jul 2027 20:27:27 GMT\r\n"),d+="Content-Length: "+c.byteLength+"\r\n",d+="\r\n";var e=new ArrayBuffer(d.length+c.byteLength),f=new Uint8Array(e),g;for(g=0;g<d.length;g++)f[g]=d.charCodeAt(g);var h=new Uint8Array(c),i=d.length;for(g=0;g<c.byteLength;g++)f[g+i]=h[g];return e}function w(b,c){var d="404 NOT FOUND";switch(c){case 200:d="200 OK"}var e="HTTP/1.1 "+d+"\r\n",f="text/plain";switch(g){case"html":f="text/html";break;case"css":f="text/css";break;case"png":f="image/png";break;case"js":f="application/javascript";break;case"ico":f="image/x-icon"}return e+="Content-Type: "+f+"; charset=utf-8\r\n",a.indexOf(f)!=-1&&(e+="Cache-Control: max-age: 240\r\n",e+="Expires: Sun, 07 Jul 2027 20:27:27 GMT\r\n"),e+="Content-Length: "+b.length+"\r\n",e+="\r\n",e+=b,e}d._GET=="/"&&(d._GET="/index.html");var e=!1;d._GET.indexOf("/clear.png")!=-1&&(e=!0);var g=d._GET.split(".").pop().toLowerCase(),h=d._GET,i=h.indexOf("?")+1,j="";if(d._GET.indexOf("/datasend")===0)return s(h.substr(i)),j=w("",200),D(c,q(j)),!0;if(d._GET.indexOf("/getMusic")===0)return chrome.sockets.tcp.getInfo(c,function(a){if(!a)return D(c,q("")),!1;var b=h.lastIndexOf("/")+1,e=parseInt(h.substr(b),10),f=C(h);m("getMusic",[{index:e,options:f,socket:a,callback:function(a){a=a||{};if(a.error)return D(c,q("")),!1;B(c,d,a.file)}}])}),!0;if(d._GET.indexOf("/file")===0)return chrome.sockets.tcp.getInfo(c,function(a){if(!a)return D(c,q("")),!1;var b=h.lastIndexOf("/")+1,d=parseInt(h.substr(b),10),e=C(h);m("requestFile",[{index:d,options:e,socket:a,callback:function(a){a.error&&(a.type="text/plain",a.buffer=new ArrayBuffer(0));var b=p(a.type,a.buffer);D(c,b),a=undefined}}])}),!0;if(d._GET.indexOf("/command")===0){var k=JSON.parse(atob(h.substr(i)));return function(a){t(a,function(b){var d={cmd:a,reply:b},e="PictaCastTV.processCommandResponse('"+btoa(JSON.stringify(d))+"')";g="js",j=w(e,200),chrome.sockets.tcp.send(c,q(j),function(){N(c)})})}(k),!0}if(d._GET.substr(0,9)=="/register")return j=w("",200),chrome.sockets.tcp.send(c,q(j),function(){chrome.sockets.tcp.getInfo(c,function(a){var e=C(d._GET);m("registerCast",[{host:a.peerAddress,local:a.localAddress,websock:e.websock==="true",csid:e.csid}]),N(c),delete b[c]})}),!0;if(d._GET.substr(0,13)=="/dataretrieve"){l!=null&&D(l,q(w("",200))),l=c;var n="HTTP/1.1 200 OK\r\n";return n+="Content-Type: text/plain; charset=utf-8\r\n",n+="\r\n",n+=f+"\r\n",chrome.sockets.tcp.send(c,q(n),function(){r=function(a){chrome.sockets.tcp.getInfo(c,function(b){chrome.runtime.lastError||b&&b.connected===!0&&chrome.sockets.tcp.send(c,q(a),function(){})})};if(u.length>0)for(var a=0;a<u.length;a++)v(u[a])}),!0}if(d._GET=="/status"){y&&clearTimeout(y),y=setTimeout(function(){m("connectorClose")},x);var o={version:chrome.runtime.getManifest().version};return j=w(JSON.stringify(o),200),D(c,q(j)),!0}if(d._GET=="/requestState")return N(c),m("requestState"),!0;d._GET.indexOf("/share")===0&&(e=!0,typeof WebServer.canDoMobileUploads=="function"&&d._GET.indexOf("/share/")!==0&&(WebServer.canDoMobileUploads()?d._GET="/share.html":d._GET="/share_error.html")),chrome.sockets.tcp.getInfo(c,function(a){a=a||{};var b=a.peerAddress;if(typeof WebServer.getAllowedIPs=="function"){var f=WebServer.getAllowedIPs();if(f.indexOf(b)===-1&&!e){console.warn("request denied",d._GET,"Client IP",b,"allowed ips",f.join(","));var g=w("Permission Denied",403);return D(c,q(g)),!1}}(function(a){function d(){if(b.readyState==4){var e="";if(b.status==200){var f=b.response.type,g=new FileReader;function h(){g.removeEventListener("load",h,!1);var e=a.lastIndexOf("."),i="";e!=-1&&(i=a.substr(e).toLowerCase());switch(i){case".html":f="text/html";break;case".cssalt":case".css":f="text/css";break;case".png":f="image/png";break;case".js":f="application/javascript";break;case".ico":f="image/x-icon"}var j=this.result;i===".html"&&(j=E(j));var k=p(f,j);D(c,k),b.removeEventListener("readystatechange",d,!1),b=null,g=null}g.addEventListener("load",h,!1),g.readAsArrayBuffer(b.response)}else{var i=w(e,b.status);D(c,q(i)),b.removeEventListener("readystatechange",d,!1),b=null}}}var b=new XMLHttpRequest;b.responseType="blob",b.addEventListener("readystatechange",d,!1),b.open("GET","/resources/www"+a,!0),b.send("")})(d._GET)})}function G(a){return String.fromCharCode.apply(null,new Uint8Array(a))}function I(a){function b(){D(a.socket,q("")),a=null}if(typeof a.header["content-type"]!="string")return b(),!1;if(a.header["content-type"].indexOf("multipart/form-data;")!==0)return b(),!1;var c=a.header["content-type"],d="boundary=",e=c.indexOf(d)+d.length,f=c.length;c.indexOf(" ",f)!==-1&&(f=c.indexOf(" ",f));var g=c.substr(e,f-e),h=a.body.split(g);h.pop(),h.shift();for(var i=0;i<h.length;i++){var j=K(h[i]),k=h[i].indexOf("\r\n\r\n")+4,l=h[i].substr(k);J({type:j["content-type"]||"",data:l,url:a.header._POST})}a.header._GET=a.header._POST,F(a.socket,a.header)}function J(a){typeof WebServer.canDoMobileUploads=="function"&&WebServer.canDoMobileUploads()&&a.url.indexOf("/share")===0&&(m("uploadFile",[a]),a=null)}function K(a){a=a.split("\r\n\r\n")[0].trim();var b=a.split("\r\n"),c={_GET:"",_POST:""};for(var d=0;d<b.length;d++){var e=b[d].indexOf(":");if(e==-1){var f=b[d].split(" ");f[0]=="GET"?(c._GET=f[1].trim(),delete c._POST):f[0]=="POST"&&(c._POST=f[1].trim(),delete c._GET);continue}var g,h;g=b[d].substr(0,e).trim().toLowerCase(),h=b[d].substr(e+1).trim();if(!g||!h)continue;c[g]=h}return c}function L(a){function d(a){c.data+=G(a),c.header=c.header||K(c.data);if(c.header._GET)return F(b,c.header),!0;if(c.header._POST){c.bodyStart=c.bodyStart||c.data.indexOf("\r\n\r\n")+4;var d=c.data.length-c.bodyStart,e=parseInt(c.header["content-length"],10);return d==e&&I({header:c.header,body:c.data.substr(c.bodyStart),socket:b}),!0}N(b)}var b=a.socketId;H[b]=H[b]||{data:"",header:null};var c=H[b];d(a.data)}function M(){if(!e)return!1;chrome.sockets.tcpServer.onAccept.removeListener(n),chrome.sockets.tcp.onReceive.removeListener(o),chrome.sockets.tcpServer.disconnect(e),chrome.sockets.tcpServer.close(e),m("stop"),d=!1}function N(a){chrome.sockets.tcp.getInfo(a,function(b){if(!chrome.runtime.lastError&&b!==undefined){b.connected&&chrome.sockets.tcp.disconnect(a);try{chrome.runtime.lastError||chrome.sockets.tcp.close(a)}catch(c){}}}),delete H[a]}var a=["image/jpeg","image/jpg","image/png"],b={},c={},d=!1,e=null,f="",g=8011,h=null,i=null,j=this,k=10,l=null,r=null,u=[];f=w(1280);var x=5e3,y=null,z={},H={};return{on:function(a,b){c[a]=c[a]||[],c[a].push(b)},start:function(){p()},stop:function(){M()},send:function(a){v(a)},isStarted:function(){return d},getPort:function(){return h}}}();"use strict";var App=App||{};App.Folders=function(){function j(b,c){if(!a[b])return!0;c=c||[];for(var d=0;d<a[b].length;d++)a[b][d].apply(g,c)}function k(a){a=a||function(){},c&&clearInterval(c),c=setTimeout(function(){var c={};c[b]=f,chrome.storage[e].set(c,function(){chrome.runtime.lastError?console.warn("error saving entry",chrome.runtime.lastError):(a(),j("change",[f]))})},d)}function l(a){chrome.storage[e].get(b,function(c){c=c||{},f=c[b]||[],i=!0,a(f)})}function m(a){if(i)return a(f),!0;l(a)}function n(a,b){a=a||"";if(a.length===0)throw new Error("Missing entry id");b=b||function(){},m(function(){s(a),f.unshift(a),k(b)})}function o(a){var b=a.indexOf(h),c=a;return b!=-1&&(c=c.substr(0,b)),c}function p(a){for(var b=0;b<f.length;b++){var c=o(f[b]),d=o(a);if(c==d)return b}return-1}function q(a){var b=p(a),c=f[b]||"",d=c.lastIndexOf(h);if(d==-1)return{};var e=c.substr(d+h.length);try{return JSON.parse(atob(e))}catch(g){return{}}}function r(a,b,c){m(function(){if(p(a)===-1)return!1;var d=q(a);d[b]=c;var e=btoa(JSON.stringify(d));n(a+h+e)})}function s(a,b){b=b||function(){},m(function(){var c=p(a);if(c==-1)return!1;f.splice(c,1),k(b)})}var a={},b="dirEntries",c=!1,d=2e3,e="local",f=[],g=this,h="|:",i=!1;return{on:function(b,c){a[b]=a[b]||[],a[b].push(c)},add:function(a,b){n(a,b)},remove:function(a,b){s(a,b)},setExtra:function(a,b,c){r(a,b,c)},getExtra:function(a,b){return q(a)},getAll:function(a){a=a||function(){},m(function(){var b=[];for(var c=0;c<f.length;c++)b.push(o(f[c]));a(b)})},hasUrl:function(a,b){b=b||function(){},m(function(){p(a)==-1?b(!1):b(!0)})},getTotal:function(){return f.length}}}(),"use strict";var App=App||{};App.Music=function(){function j(b,c){if(!a[b])return!0;c=c||[];for(var d=0;d<a[b].length;d++)a[b][d].apply(g,c)}function k(a){a=a||function(){},c&&clearInterval(c),c=setTimeout(function(){var c={};c[b]=f,chrome.storage[e].set(c,function(){chrome.runtime.lastError?console.warn("error saving entry",chrome.runtime.lastError):(a(),j("change",[f]))})},d)}function l(a){chrome.storage[e].get(b,function(c){c=c||{},f=c[b]||[],i=!0,a(f)})}function m(a){if(i)return a(f),!0;l(a)}function n(a,b){a=a||"";if(a.length===0)throw new Error("Missing entry id");b=b||function(){},m(function(){s(a),f.unshift(a),k(b)})}function o(a){var b=a.indexOf(h),c=a;return b!=-1&&(c=c.substr(0,b)),c}function p(a){for(var b=0;b<f.length;b++){var c=o(f[b]),d=o(a);if(c==d)return b}return-1}function q(a){var b=p(a),c=f[b]||"",d=c.lastIndexOf(h);if(d==-1)return{};var e=c.substr(d+h.length);try{return JSON.parse(atob(e))}catch(g){return{}}}function r(a,b,c){m(function(){if(p(a)===-1)return!1;var d=q(a);d[b]=c;var e=btoa(JSON.stringify(d));n(a+h+e)})}function s(a,b){b=b||function(){},m(function(){var c=p(a);if(c==-1)return!1;f.splice(c,1),k(b)})}var a={},b="musicEntries",c=!1,d=2e3,e="local",f=[],g=this,h="|:",i=!1;return{on:function(b,c){a[b]=a[b]||[],a[b].push(c)},add:function(a,b){n(a,b)},remove:function(a,b){s(a,b)},setExtra:function(a,b,c){r(a,b,c)},getExtra:function(a){return q(a)},getAll:function(a){a=a||function(){},m(function(){var b=[];for(var c=0;c<f.length;c++)b.push(o(f[c]));a(b)})},hasUrl:function(a,b){b=b||function(){},m(function(){p(a)==-1?b(!1):b(!0)})},getTotal:function(){return f.length}}}(),"use strict","use strict"
/*Copyright (c) 2020 Citrix Systems, Inc.
The materials in this file are protected by copyright and other intellectual property laws.
Copying and use is permitted only by end users to enable use of Citrix server technology.
Any other reproduction or use of this file, or any portion of it, is unlicensed.
In no event may the file be reverse engineered or may copies be made in association with deobfuscation, decompilation or disassembly.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

var HTML5_CONFIG = {
	'type':'update',
	'vc_channel' : {
	},
	'userinput' : {
		'mousetimer' : '*'
	},
	'analytics' : {
		'enabled' : true,
		'sendPublicIPToCAS': true,
		"connectionEnabled" : true
	},
	'thirdPartyServices' :{
		'enableLaunchDarkly' : true
	},
	'ui' : {
		'toolbar' : {
			'menubar':true,
			'clipboard':true,
			'usb': true,
			'fileTransfer':true,
			'about':true,
			'lock':true,
			'disconnect':true,
			'logoff':true,
			'fullscreen':true,
			'keyboard':true,
			'multitouch':true,
			'switchApp':true,
			'preferences':true,
			'gestureGuide':true,
			'viewLogs':true,
			'multiMonitor' :true,
			'displayResolution' : true
		},
		"hide":{
			"urlredirection" : false,
			"error" : false,
			'ftu' : false,
			'printDialog': false,
			"clipboardOnBoarding":false,
			"copyToDeviceConfirmation" : false,
			"highDPIOnBoarding" : true,
			"windowPlacementDenyDialog": false
		},
		'sessionsize' : {
			'minwidth' : 240, 
			'minheight' : 120,
			'available' : {
				"default" : "Fit_To_Window",
				"values" : ["Fit_To_Window", "Use_Device_Pixel_Ratio","1280x800","1440x900","1600x1200"]	
			}
		},
		'appSwitcher': {
				'enhancedAppSwitcher': true,
				'showTaskbar': true,
				'showAutoHide': false,
				'autoHide': false,
				'showIconsOnly': false
		},
		'handleMouseCursorUsingDivForIE' : true,
		'resizeOverlayDuration' : 3500,
		'touch' :{
			'defaultMode' : 'panning', //'panning' and 'multitouch' are the accepted values
			'detectTabletMode' : true
		}		
	},
	'features' : {
		'ime': {
			'keyboardIMEHotkeys': false,
			'mode': {}
		},
		'seamlesswindow' : false,
		'seamlessclip' : true,
		'sessionsharing' : true,
		'icaConnectOnAppLaunchFail': true,
		'sendAllKeys' : true,
		'directClipboard':true,
		'audio' : {
			'HTML5_Audio_Buffer_Duration' : -1,
			'HTML5_Audio_Lag_Threshold'	  :	-1
		},
		'video':{
			'enable': true,
			'config': {
				'codecType': 1 // 1 - HARDWARE_CODEC with SOFTWARE_CODEC fallback, 2 - Only SOFTWARE_CODEC, 3 - Only HARDWARE_CODEC
			}
		},
		'graphics' : {
			'jpegSupport' : true,
            'avoidCache' : true,
            'selectiveH264' : true,
            'useGlTexH264': true,
			'h264Support' : {
				'enabled' : true,
				'losslessOverlays' : true,
				'dirtyRegions' : true,
				'yuv444Support' : false
			},
            'noWaitForSpaceEx': false,
            "useThinwireV2" : true,
            'spanMonitorSubset':true,
			'multiMonitor': true,
			'trueMMSupportForHTML5': true
		},
		'filetransfer' : {
			'allowupload' : true,
			'allowdownload' : true,
			'maxuploadsize'	: 2147483647,//2GB
			'maxdownloadsize' : 2147483647//2GB
		},
		'com':{
			'portname':"COM5"
		},
		'pdfPrinting':{
			'directPrint':{
				'supportedBrowsers':true, //Chrome,Firefox,Chromium Edge
				'IE':false,
				'printResolution':150
			},
			'disableForBrowsers' : [] // Disable PdfPrinting in the browsers mentioned in the array, By Default it's empty
			//	Template Browser String
			// 'ALL', 'MSIE', 'FIREFOX', 'Chrome', 'SAFARI', 'BB10', 'MSEDGE', 'CHROMIUMEDGE'
			// 'ALL' 			- All the browsers - Use 'ALL' if PdfPrinting needs to be disabled for all the browsers
			// 'MSIE' 			- Internet Explorer
			// 'FIREFOX' 		- Firefox
			// 'Chrome' 		- Chrome
			// 'SAFARI' 		- Safari
			// 'BB10' 			- Blackberry
			// 'MSEDGE' 		- Microsoft Edge - EDGE HTML aka Old Edge
			// 'CHROMIUMEDGE' 	- Chromium Edge aka New Edge
		},
		'msTeamsOptimization':{
			'screenSharing' : false,
			'seamlessApps' : true,
			'webcamSupportInMM' : true,
			'originTrialToken' : {
				'chrome': "",
			},
			'CWAOnlyScreenSharing': false
		},
		'keyboard': {
			'captureAllKeys': true //allows or disallows redirecting few additional shortcuts like alt+Tab, Esc, Windows logo key shortcuts like Win+R, Win+X, Win+D etc in fullscreen mode
		},
		'fontAppearance': {
			'enableFontSmoothing' : true, //Enables Font Smoothing info to be sent to server
			'fontSmoothingType' : 2
			/* Allowed values for Font Smoothing
			 * FONT_SMOOTHING_NONE				- 0x0000
			 * FONT_SMOOTHING_STANDARD 			- 0x0001
			 * FONT_SMOOTHING_CLEARTYPE			- 0x0002
			 * FONT_SMOOTHING_SERVER_DEFAULT	- 0x0003
			 */
        },
		'edt': {
			'enabled': false,
			'logLevel' : 0
			// Available values for EDT log level
			// NONE (default) - 0
            // ERROR          - 1
            // WARN           - 2
            // DEBUG          - 3
            // VERBOSE        - 4
		}
	},
	'customVC':[],
	'domain' : {
		//'src':list of domain seperated by ;
		//'message':
	},
	'hardware' : {
		'webgl' : true,
		'webglSubTex' : true
	},
	'transport' : {
		'outbufscountclient' : 100,
		'outbufscounthost' : 100,
		'cgpEnabled' : true,
		'wasmCgpEnabled' : false,
		'aggressiveSRTrigger': false
	},
	'other' : {
		'sec_protocol' : "",
		'workerdisable' : false,
		'h264nonworker' : false
	},
	'fpsMeter':{
		'visibility':false,
		'updateFrequency':0 // fps update frequence in secs
	},
	//Preferences for chrome app
	'appPrefs':{
		'chromeApp':{
			'ui' : {
				'toolbar' : {
					'menubar':true,
					'clipboard': false,
					'usb' : true,
					'fileTransfer':true
				},
				"sessionsize": {
            		"windowstate": "maximized"
        		},
				"netPromoters" : true,
				"splashScreen" : false,
				"assistiveCursor" : false
			},
			'nacl' : {
                'supportNacl' : true,
                'audio': {
                    'enable': true,
                    'config': {

                    }
                }
			},
			'transport' : {
				'nativeSocket' : true
			},
			'features' : {
				'graphics' : {
					'dpiSetting': {
						'scaleToDPI': true
					},
					'multiMonitor': true,
					'kioskMultimonitor' : true
				},
				'multipleStores' : {
					'enable': true
				},
				'usb':{
					'resetDevice': false
				},
				'shield' : {
					'enable': false
				},
				'IWS' : {
					'enable': true
				}
			},
			'smartcard' : {
				'managerappid' : 'khpfeaanjngmcnplbdlpegiifgpfgdco'
			},
			'uniqueID' : {
				'prefixKey' : "CR-",
				'restrictNameLength' : false,
				'useAssetID' : false
			},
			'seamless' : {
			}
		}
	}
};

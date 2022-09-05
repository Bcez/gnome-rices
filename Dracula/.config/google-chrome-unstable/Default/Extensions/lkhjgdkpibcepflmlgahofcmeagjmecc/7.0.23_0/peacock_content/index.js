var scener=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=384)}({1:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return displayMessageDialog}));__webpack_require__.d(__webpack_exports__,"c",(function(){return displayStatusMessage}));__webpack_require__.d(__webpack_exports__,"d",(function(){return hideStatusMessage}));__webpack_require__.d(__webpack_exports__,"f",(function(){return isFullscreen}));__webpack_require__.d(__webpack_exports__,"e",(function(){return injectFrame}));__webpack_require__.d(__webpack_exports__,"a",(function(){return checkTabTypeAndStartTracking}));var _templates_status_template_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6);var _templates_status_template_html__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_templates_status_template_html__WEBPACK_IMPORTED_MODULE_0__);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}var displayMessageDialog=function displayMessageDialog(options){var div=document.getElementById("scener-message-dialog");var dismiss=function dismiss(){if(div&&div.parentElement){div.parentElement.removeChild(div)}};if(!div){div=document.createElement("div")}else{div.innerHTML=""}div.id="scener-message-dialog";div.style.display="flex";div.style.flexFlow="column nowrap";div.style.alignItems="center";div.style.justifyContent="space-between";div.style.fontFamily="Roboto, sans-serif";div.style.padding="16px 16px";div.style.borderRadius="16px";div.style.minWidth="100px";div.width=options.width||"300px";if(options.headerImage){var headerImgEl=document.createElement("img");headerImgEl.src=options.headerImage;headerImgEl.style.height="auto";headerImgEl.style.flex="0 1 100%";div.appendChild(headerImgEl)}if(options.title){var titleEl=document.createElement("div");titleEl.style.width="100%";titleEl.style.flex="0 1 100%";titleEl.innerHTML='<h3 style="font-size:24px; text-align:center; letter-spacing:.1em; font-weight:bold; marginTop: 24px; marginBottom:12px; color: '.concat(options.titleColor||"#FFF",'">').concat(options.title,"</h3>");div.appendChild(titleEl)}if(options.body){var bodyEl=document.createElement("div");bodyEl.style.width="100%";bodyEl.style.flex="0 1 100%";bodyEl.innerHTML='<p style="font-size:14px; text-align:center;  color: '.concat(options.bodyColor||"#FFF",'">').concat(options.body,"</p>");div.appendChild(bodyEl)}if(options.backgroundImage){div.style.backgroundImage="url(".concat(options.backgroundImage,")");div.style.backgroundSize="cover";div.style.backgroundRepeat="no-repeat";div.style.backgroundPosition="center center"}div.style.backgroundColor=options.backgroundColor||"#3A006E";if(options.buttons&&options.buttons.length>0){var btns=options.buttons.map((function(btn){var btnWrapperEl=document.createElement("div");var btnEl=document.createElement("button");switch(btn.type){case"cancel":{btnEl.innerHTML=btn.title||"Cancel";btnEl.style.backgroundColor=btn.backgroundColor||"#CCC";btnEl.style.color=btn.color||"#000";btnEl.onclick=btn.onclick||dismiss;break}default:{btnEl.innerHTML=btn.title||"OK";btnEl.style.backgroundColor=btn.backgroundColor||"rgb(157, 0, 255)";btnEl.style.color=btn.color||"#FFF";btnEl.onclick=function(){btn.onclick&&btn.onclick(btn.data)};break}}btnWrapperEl.style.display="flex";btnWrapperEl.style.flex="0 1 100%";btnWrapperEl.style.padding="8px";btnWrapperEl.style.flexFlow="row nowrap";btnWrapperEl.style.alignItems="center";btnWrapperEl.style.justifyContent="center";btnEl.style.borderRadius="8px";btnEl.style.flex="1 1 0%";btnEl.style.fontSize="12px";btnEl.style.padding="8px 8px";btnEl.style.borderColor="transparent";btnWrapperEl.appendChild(btnEl);return btnWrapperEl}));var btnContainerEl=document.createElement("div");btnContainerEl.style.display="flex";btnContainerEl.style.width="100%";btnContainerEl.style.flexFlow="row nowrap";btnContainerEl.style.alignItems="center";btnContainerEl.style.justifyContent="space-around";btnContainerEl.append.apply(btnContainerEl,_toConsumableArray(btns));btnContainerEl.style.flex="0 1 100%";div.appendChild(btnContainerEl)}div.style.display="flex";div.style.position="fixed";div.style.top="16px";div.style.right="16px";div.style.zIndex=9999999;document.body.appendChild(div);if(options.timeout){setTimeout((function(){dismiss()}),options.timeout)}return dismiss};var injectStatusMessage=function injectStatusMessage(){var div=document.getElementById("scener-status-overlay");if(!div){div=document.createElement("div");div.innerHTML=_templates_status_template_html__WEBPACK_IMPORTED_MODULE_0___default.a;div.id="scener-status-overlay"}if(div.parentElement){if(document.fullscreenElement&&div.parentElement!=document.fullscreenElement){document.fullscreenElement.appendChild(div)}else if(!document.fullscreenElement&&div.parentElement!=document.body){document.body.appendChild(div)}}else{(document.fullscreenElement||document.body).appendChild(div)}return div};var displayStatusMessage=function displayStatusMessage(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var div=injectStatusMessage();div.classList.add("in");document.getElementById("scener-status-message").innerHTML=options.message||"syncing...";if(options.disableContent){document.style.pointerEvents="none";div.classList.add("disabled")}else{document.body.style.pointerEvents=null;div.classList.remove("disabled")}};var hideStatusMessage=function hideStatusMessage(options){var div=injectStatusMessage();div.classList.remove("in");div.classList.remove("disabled")};var isFullscreen=function isFullscreen(){if(document.fullscreenElement){return true}var isMac=navigator.platform.toUpperCase().indexOf("MAC")>=0;if(isMac){return!window.screenTop&&!window.screenY}else{return window.innerHeight==window.outerHeight&&window.innerHeight>=screen.availHeight-1}};var injectFrame=function injectFrame(_ref){var parent=_ref.parent,url=_ref.url,styles=_ref.styles,attributes=_ref.attributes;var container=document.createElement("div");var frame=document.createElement("iframe");var style=_objectSpread({position:"fixed",outline:"0",border:"0",zIndex:2147483640,background:"red",overflow:"visible"},styles);applyStyles(container,style);applyStyles(frame,{outline:"0",border:"0",height:"100%",width:"100%",position:"absolute",left:0,top:0,right:0,bottom:0,overflow:"hidden"});applyAttributes(frame,_objectSpread({},attributes));frame.src=url;frame.onload=function(){frame.style.zIndex=1};container.appendChild(frame);parent.appendChild(container);var rect=container.getBoundingClientRect();var canvas=createDragAndResizeContainer(rect.height/rect.width,{width:rect.width});canvas.onResizeFinished=function(dimensions){applyStyles(container,dimensions)};parent.appendChild(canvas);return frame};var createDragAndResizeContainer=function createDragAndResizeContainer(ratio,sizeMin){var canvas=document.createElement("div");canvas.id="scener-draw-resize-container";var box=document.createElement("div");box.id="scener-draw-resize-box";applyStyles(canvas,{left:0,right:0,bottom:0,top:0,position:"fixed",zIndex:2147483647});applyStyles(box,{left:0,width:0,height:0,top:0,position:"absolute",zIndex:1,border:"dashed 5px #FFFFFF",borderRadius:"5px"});var dragging=false;var boxStart=null;var boxEnd=null;var updateBox=function updateBox(){if(boxStart&&boxEnd){applyStyles(box,{left:Math.max(0,Math.min(boxStart.x,boxEnd.x))+"px",top:Math.max(0,Math.min(boxStart.y,boxEnd.y))+"px",width:Math.abs(boxStart.x-boxEnd.x)+"px",height:(ratio?Math.abs(boxStart.x-boxEnd.x)*ratio:Math.abs(boxStart.y-boxEnd.y))+"px",position:"absolute",zIndex:1,border:"dashed 5px #FFFFFF"})}};var onMouseDown=function onMouseDown(ev){canvas.appendChild(box);dragging=true;boxStart={x:ev.x,y:ev.y};boxEnd={x:ev.x,y:ev.y};updateBox()};var onMouseUp=function onMouseUp(ev){if(dragging){boxEnd={x:ev.x,y:ev.y};dragging=false;updateBox();if(canvas.onResizeFinished){var dims={left:Math.max(0,Math.min(boxStart.x,boxEnd.x)),top:Math.max(0,Math.min(boxStart.y,boxEnd.y)),width:Math.abs(boxStart.x-boxEnd.x),height:ratio?Math.abs(boxStart.x-boxEnd.x)*ratio:Math.abs(boxStart.y-boxEnd.y)};if(dims.width<sizeMin.width){dims.width=sizeMin.width;if(ratio){dims.height=dims.width*ratio}}if(dims.height<sizeMin.height&&!ratio){dims.height=sizeMin.height}for(var k in dims){dims[k]=dims[k]+"px"}canvas.onResizeFinished(dims)}setTimeout((function(){canvas.removeChild(box)}),200)}};var onMouseMove=function onMouseMove(ev){if(dragging){boxEnd={x:ev.x,y:ev.y};updateBox()}};canvas.addEventListener("mousedown",onMouseDown);canvas.addEventListener("mousemove",onMouseMove);canvas.addEventListener("mouseup",onMouseUp);canvas.addEventListener("mouseleave",onMouseUp);return canvas};var applyAttributes=function applyAttributes(el,attrs){for(var k in attrs){el.setAttribute(k,attrs[k])}};var applyStyles=function applyStyles(el,styles){for(var k in styles){el.style[k]=styles[k]}};var checkTabTypeAndStartTracking=function checkTabTypeAndStartTracking(){chrome.runtime.sendMessage({name:"getTabId"},(function(_ref2){var id=_ref2.id,type=_ref2.type;var thisTab={};thisTab.id=id;thisTab.type=type;if(thisTab.type=="normal"){var getCurrentStateTimer=setInterval((function(){window.postMessage({name:"getCurrentState",source:"scener-content"},"*")}),1e3);window.addEventListener("message",(function(_ref3){var data=_ref3.data;if(!data||!data.name||data.source!="scener"||!thisTab.id){return null}if(data.name=="currentState"){if(thisTab.type==="popup"){chrome.storage.local.set(_defineProperty({},"contentTabState",_objectSpread(_objectSpread({},data.state),{},{tabId:thisTab.id,timestamp:Date.now()})))}else{if(data.state&&data.state.videoId){chrome.storage.local.set(_defineProperty({},"serviceTabState:"+thisTab.id,_objectSpread(_objectSpread({},data.state),{},{tabId:thisTab.id,timestamp:Date.now()})))}}}}));window.addEventListener("beforeunload",(function(){chrome.storage.local.remove([thisTab.type==="popup"?"contentTabState":"serviceTabState:"+thisTab.id]);clearInterval(getCurrentStateTimer)}))}}))}},384:function(module,exports,__webpack_require__){module.exports=__webpack_require__(385)},385:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _MessageForwarder__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5);var _common_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["a"])();if(!window.scenerContentScriptInjected){var msgClient=new _MessageForwarder__WEBPACK_IMPORTED_MODULE_0__["a"]("content");chrome.runtime.onMessage.addListener((function(msg,sender,sendResponse){if(msg){var name=msg.name,value=msg.value;switch(name){case"showStatus":{Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["c"])(value);break}case"hideStatus":{Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["d"])();break}case"showMessageDialog":{var options=value;var dismiss=function dismiss(){};var newOpts=Object.apply({},{timeout:15e3,buttons:[{title:"OK",onclick:function onclick(d){chrome.runtime.sendMessage("lkhjgdkpibcepflmlgahofcmeagjmecc",{name:"popup-clicked",data:d,currentUrl:document.location.href,target:"background"});dismiss&&dismiss()}}]},options);if(newOpts.buttons){newOpts.buttons.forEach((function(btn){if(!btn.onclick){btn.onclick=function(d){chrome.runtime.sendMessage("lkhjgdkpibcepflmlgahofcmeagjmecc",{name:"popup-clicked",data:d,currentUrl:document.location.href,target:"background"});dismiss&&dismiss()}}}))}dismiss=Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["b"])(newOpts);break}default:{msgClient.forwardRequest(msg).then(sendResponse)["catch"](sendResponse);return true}}sendResponse(true);return true}}));window.scenerContentScriptInjected=true;var s=document.createElement("script");s.id="scener-injected";s.src=chrome.extension.getURL("peacock_injected/index.js");if(!document.getElementById("scener-injected")){(document.head||document.documentElement).append(s)}}},5:function(module,__webpack_exports__,__webpack_require__){"use strict";function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var MessageForwarder=_createClass((function MessageForwarder(senderId){var _this=this;_classCallCheck(this,MessageForwarder);_defineProperty(this,"forwardMessage",(function(data){window.postMessage(data,"*")}));_defineProperty(this,"forwardRequest",(function(requestData){var timeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2e3;requestData.request=true;return new Promise((function(resolve,reject){var requestTimeout=setTimeout((function(){window.removeEventListener("message",responseHandler);reject({error:"timeout",request:requestData})}),timeout);var responseHandler=function responseHandler(_ref){var data=_ref.data;if(requestData.type==data.type&&data.response==true&&data.sender!=data.target){window.removeEventListener("message",responseHandler);clearTimeout(requestTimeout);resolve(data)}};window.addEventListener("message",responseHandler);_this.forwardMessage(requestData)}))}));_defineProperty(this,"addListener",(function(cb){window.addEventListener("message",cb,false);return function(){window.removeEventListener("message",cb)}}));_defineProperty(this,"removeListener",(function(cb){window.removeEventListener("message",cb)}));this.id=senderId}));__webpack_exports__["a"]=MessageForwarder},6:function(module,exports){var code='<div id="scener-status-container"> <div id="scener-status-wrapper"> <div id="scener-status-content"> <div id="scener-status-icon"></div> <div id="scener-status-message">syncing...</div> </div> </div> </div> <style>#scener-status-overlay{position:absolute;opacity:0;left:0;top:0;width:100vw;height:100vh;pointer-events:none;background:0 0;z-index:2147483647;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}#scener-status-overlay.in{opacity:1}#scener-status-overlay.disabled{pointer-events:all}#scener-status-container{width:20vw}#scener-status-wrapper{height:0;padding-top:15%;position:relative}#scener-status-content{position:absolute;left:0;right:0;bottom:0;top:0;background:linear-gradient(45deg,#614b7d,#9d00ff);border-radius:2vw;opacity:.7;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}#scener-status-message{flex:0 1 100%;text-align:center;font-size:calc(6px + 1vw);color:#fff;animation:pulse-25 2s linear infinite;font-weight:700;font-family:Roboto,Helvetica,sans-serif}</style> ';module.exports=code}});
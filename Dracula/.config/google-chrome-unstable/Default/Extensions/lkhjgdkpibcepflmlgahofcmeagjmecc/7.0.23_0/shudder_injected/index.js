var scener=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=389)}({0:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return isFullscreen}));__webpack_require__.d(__webpack_exports__,"d",(function(){return elemVis}));__webpack_require__.d(__webpack_exports__,"a",(function(){return elemAttr}));__webpack_require__.d(__webpack_exports__,"c",(function(){return elemText}));__webpack_require__.d(__webpack_exports__,"b",(function(){return elemData}));__webpack_require__.d(__webpack_exports__,"g",(function(){return reg}));__webpack_require__.d(__webpack_exports__,"i",(function(){return xpath}));__webpack_require__.d(__webpack_exports__,"h",(function(){return titleCase}));__webpack_require__.d(__webpack_exports__,"f",(function(){return onLoaded}));var isFullscreen=function isFullscreen(){if(document.fullscreenElement){return true}var isMac=navigator.platform.toUpperCase().indexOf("MAC")>=0;if(isMac){return!window.screenTop&&!window.screenY}else{return window.innerHeight==window.outerHeight&&window.innerHeight>=screen.availHeight-1}};var timeStrToSeconds=function timeStrToSeconds(str){var p=str.split(":"),s=0,m=1;while(p.length>0){s+=m*parseInt(p.pop(),10);m*=60}return s};var elemVis=function elemVis(){try{for(var _len=arguments.length,selectors=new Array(_len),_key=0;_key<_len;_key++){selectors[_key]=arguments[_key]}for(var _i=0,_selectors=selectors;_i<_selectors.length;_i++){var sel=_selectors[_i];if(document.querySelector(sel)&&document.querySelector(sel).offsetParent){return true}}}catch(e){}return false};var elemAttr=function elemAttr(attr){try{for(var _len2=arguments.length,selectors=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){selectors[_key2-1]=arguments[_key2]}for(var _i2=0,_selectors2=selectors;_i2<_selectors2.length;_i2++){var sel=_selectors2[_i2];if(document.querySelector(sel)&&document.querySelector(sel).hasAttribute(attr)){return document.querySelector(sel).getAttribute(attr)}}}catch(e){}return null};var elemText=function elemText(){try{for(var _len3=arguments.length,selectors=new Array(_len3),_key3=0;_key3<_len3;_key3++){selectors[_key3]=arguments[_key3]}for(var _i3=0,_selectors3=selectors;_i3<_selectors3.length;_i3++){var sel=_selectors3[_i3];if(document.querySelector(sel)){return document.querySelector(sel).hasAttribute("content")?document.querySelector(sel).content.trim():document.querySelector(sel).textContent.trim()}}}catch(e){}return null};var elemData=function elemData(){try{for(var _len4=arguments.length,selectors=new Array(_len4),_key4=0;_key4<_len4;_key4++){selectors[_key4]=arguments[_key4]}for(var _i4=0,_selectors4=selectors;_i4<_selectors4.length;_i4++){var sel=_selectors4[_i4];if(document.querySelector(sel)){return JSON.parse(document.querySelector(sel).textContent)}}}catch(e){}return null};var reg=function reg(regex,source,match,exec){try{var matches=exec?source.exec(regex):source.match(regex);if(matches!=null&&matches.length>0){return match!==undefined?match==-1?matches[matches.length-1]:matches[match]:true}}catch(e){}return match!==undefined?null:false};var xpath=function xpath(query,source){var valueOnly=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;try{var xpathNode=document.evaluate(query,document.querySelector(source),null,valueOnly?XPathResult.FIRST_ORDERED_NODE_TYPE:XPathResult.ANY_TYPE,null);return xpathNode?valueOnly?xpathNode.singleNodeValue:xpathNode.iterateNext():false}catch(e){}return false};var titleCase=function titleCase(str){if(str){var splitStr=str;for(var _len5=arguments.length,stripList=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){stripList[_key5-1]=arguments[_key5]}for(var _i5=0,_stripList=stripList;_i5<_stripList.length;_i5++){var strip=_stripList[_i5];splitStr=splitStr.replace(strip,"")}splitStr=splitStr.trim().toLowerCase().split(" ");for(var i=0;i<splitStr.length;i++){splitStr[i]=reg(/^[i]+$/,splitStr[i])?splitStr[i].toUpperCase():splitStr[i].charAt(0).toUpperCase()+splitStr[i].substring(1)}return splitStr.join(" ")}return""};var onLoaded=function onLoaded(){chrome.runtime.sendMessage("lkhjgdkpibcepflmlgahofcmeagjmecc",{name:"injectedScriptLoaded",currentUrl:document.location.href,target:"background"})}},389:function(module,exports,__webpack_require__){module.exports=__webpack_require__(419)},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return show}));var OverlayDiv=function OverlayDiv(){var div=document.querySelector("#ScenerStatusOverlay");if(!div){div=document.createElement("div");div.id="ScenerStatusOverlay";div.style.zIndex=9999999;div.style.opacity="0";div.style.pointerEvents="none";div.style.top="50%";div.style.left="50%";div.style.transform="translate(-50%,-50%)";div.style.height=0;div.style.minHeight=0;div.style.paddingTop="33%";div.style.width="33vw";div.style.position="absolute";div.style.transition="opacity 100ms ease-in-out";div.style.backgroundImage="url('https://media.scener.com/website/syncing-indicator-extension.png')";div.style.backgroundRepeat="no-repeat";div.style.backgroundSize="contain";div.style.backgroundPosition="center center";attachToDom(div)}return div};var attachToDom=function attachToDom(div){var containerEl=document.body;containerEl.append(div)};var show=function show(){var div=OverlayDiv();if(!div.parentElement){attachToDom(div)}div.style.opacity=1;if(div.timer){clearTimeout(div.timer)}div.timer=setTimeout((function(){return hide()}),1200)};var hide=function hide(){var div=OverlayDiv();if(!div.parentElement){attachToDom(div)}div.style.opacity=0}},419:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var shudder_api_namespaceObject={};__webpack_require__.r(shudder_api_namespaceObject);__webpack_require__.d(shudder_api_namespaceObject,"getCurrentState",(function(){return shudder_api_getCurrentState}));__webpack_require__.d(shudder_api_namespaceObject,"play",(function(){return play}));__webpack_require__.d(shudder_api_namespaceObject,"pause",(function(){return pause}));__webpack_require__.d(shudder_api_namespaceObject,"setCurrentTime",(function(){return setCurrentTime}));__webpack_require__.d(shudder_api_namespaceObject,"getVideoType",(function(){return shudder_api_getVideoType}));__webpack_require__.d(shudder_api_namespaceObject,"hasError",(function(){return shudder_api_hasError}));__webpack_require__.d(shudder_api_namespaceObject,"getCurrentTime",(function(){return getCurrentTime}));__webpack_require__.d(shudder_api_namespaceObject,"isPlaying",(function(){return isPlaying}));__webpack_require__.d(shudder_api_namespaceObject,"getContentType",(function(){return shudder_api_getContentType}));__webpack_require__.d(shudder_api_namespaceObject,"parseSeriesTitle",(function(){return shudder_api_parseSeriesTitle}));__webpack_require__.d(shudder_api_namespaceObject,"getTitle",(function(){return shudder_api_getTitle}));__webpack_require__.d(shudder_api_namespaceObject,"getSubtitle",(function(){return shudder_api_getSubtitle}));__webpack_require__.d(shudder_api_namespaceObject,"isLive",(function(){return shudder_api_isLive}));__webpack_require__.d(shudder_api_namespaceObject,"getDuration",(function(){return getDuration}));__webpack_require__.d(shudder_api_namespaceObject,"getVideoId",(function(){return shudder_api_getVideoId}));__webpack_require__.d(shudder_api_namespaceObject,"isWatchUrl",(function(){return shudder_api_isWatchUrl}));__webpack_require__.d(shudder_api_namespaceObject,"VideoPlayer",(function(){return VideoPlayer}));var common=__webpack_require__(0);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var contentTitles={};var contentSubtitles={};var shudder_api_getCurrentState=function getCurrentState(){var state={fullscreen:Object(common["e"])(),service:"shudder",error:shudder_api_hasError(),navReady:!shudder_api_hasError()};if(shudder_api_isWatchUrl(document.location.pathname)){var id=shudder_api_getVideoId();var title="";var subtitle="";if(id){var newtitle=shudder_api_getTitle();if(newtitle){contentTitles[id]=newtitle}if(contentTitles[id]){title=contentTitles[id]}else{title=newtitle}var newsubtitle=shudder_api_getSubtitle();if(newsubtitle){contentSubtitles[id]=newsubtitle}if(contentSubtitles[id]){subtitle=contentSubtitles[id]}else{subtitle=newsubtitle}}state=_objectSpread(_objectSpread({},state),{},{duration:!shudder_api_hasError()&&getDuration(),currentTime:getCurrentTime(),playing:isPlaying(),title:title,error:shudder_api_hasError(),isLive:shudder_api_isLive(),videoType:shudder_api_getVideoType(),subtitle:subtitle,videoId:id,lang:window.navigator.language,metadata:{title:title,subtitle:subtitle,description:Object(common["c"])(".vjs-dock-description"),year:null}})}return _objectSpread(_objectSpread({},state),{},{url:document.location.href})};var play=function play(){VideoPlayer()&&VideoPlayer().play()};var pause=function pause(){VideoPlayer()&&VideoPlayer().pause()};var setCurrentTime=function setCurrentTime(time){if(VideoPlayer()){VideoPlayer().currentTime=time/1e3}};var shudder_api_getVideoType=function getVideoType(){if(Object(common["d"])(".ad-countdown__remaining-time",".ad-countdown__container")){return"AD"}return null};var shudder_api_hasError=function hasError(){var loggedIn=Object(common["a"])("data-logged-in","body");return loggedIn!="true"?"Log in with your Shudder account to watch in sync":null};var getCurrentTime=function getCurrentTime(){var _VideoPlayer;return VideoPlayer()&&((_VideoPlayer=VideoPlayer())===null||_VideoPlayer===void 0?void 0:_VideoPlayer.currentTime)*1e3};var isPlaying=function isPlaying(){return VideoPlayer()&&!VideoPlayer().paused};var shudder_api_getContentType=function getContentType(){return Object(common["a"])("data-media-type","body.body-page-play")};var shudder_api_parseSeriesTitle=function parseSeriesTitle(){var pixelRef=document.querySelector("img[width='0']");if(pixelRef){var pixelSrc=pixelRef.getAttribute("src");var seriesTitle=Object(common["g"])(/%2Fseries%2Fwatch%2F(.+?)%2F/,pixelSrc,-1);return seriesTitle&&Object(common["h"])(seriesTitle.replaceAll("-"," "))}};var shudder_api_getTitle=function getTitle(){if(shudder_api_getContentType()=="episode"){return shudder_api_parseSeriesTitle()}return Object(common["c"])(".vjs-dock-title",".now-playing-heading__title")};var shudder_api_getSubtitle=function getSubtitle(){if(shudder_api_getContentType()=="episode"){return Object(common["c"])(".vjs-dock-title")}};var shudder_api_isLive=function isLive(){return Object(common["g"])(/^\/shudder-tv/,document.location.pathname)};var getDuration=function getDuration(){var _VideoPlayer2;if(VideoPlayer()&&(_VideoPlayer2=VideoPlayer())!==null&&_VideoPlayer2!==void 0&&_VideoPlayer2.duration){var _VideoPlayer3;return((_VideoPlayer3=VideoPlayer())===null||_VideoPlayer3===void 0?void 0:_VideoPlayer3.duration)*1e3}};var shudder_api_getVideoId=function getVideoId(){return shudder_api_isLive()?"shudder-tv":Object(common["g"])(/^\/play\/([0-9a-z-]+)$/,document.location.pathname,-1)};var shudder_api_isWatchUrl=function isWatchUrl(url){return Object(common["g"])(/^\/play\/([0-9a-z-]+)$/,url)||shudder_api_isLive()};var VideoPlayer=function VideoPlayer(){return document.querySelector("video")&&document.querySelector("video")};var StatusOverlay=__webpack_require__(4);var ExtensionMessagingClient=__webpack_require__(7);var shudder_receiveMessage=function receiveMessage(_ref){var data=_ref.data;var name=data.name,value=data.value,sender=data.sender;if(name&&sender!=injectedMsgClient.senderId){switch(name){case"navigate":{if(typeof value=="string"){document.location.href=value}else if(value.href){document.location.href=value.href}else if(value.pathname){document.location.pathname=value.pathname}break}case"pauseVideo":{pause();if(VideoPlayer()){StatusOverlay["a"]()}break}case"playVideo":{play();if(VideoPlayer()){StatusOverlay["a"]()}break}case"setCurrentTime":{setCurrentTime(value);if(VideoPlayer()){StatusOverlay["a"]()}break}case"getCurrentState":{injectedMsgClient.sendMessage({name:"currentState",state:shudder_api_getCurrentState(),response:true,sender:sender},"*");break}default:break}}};var injectedMsgClient=new ExtensionMessagingClient["a"]("injected");injectedMsgClient.addListener(shudder_receiveMessage);var shudder=__webpack_exports__["default"]={Shudder:shudder_api_namespaceObject};(function(){Object(common["f"])()})()},7:function(module,__webpack_exports__,__webpack_require__){"use strict";function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var ExtensionMessagingClient=_createClass((function ExtensionMessagingClient(senderId){var _this=this;_classCallCheck(this,ExtensionMessagingClient);_defineProperty(this,"sendMessage",(function(data){var targetWindow=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_this._window;if(!data.sender){data.sender=_this.senderId}data.via=_this.senderId;data.source="scener";if(targetWindow&&targetWindow.postMessage){targetWindow.postMessage(data,"*")}else{window.postMessage(data,"*")}}));_defineProperty(this,"sendRequest",(function(requestData){var timeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2e3;var targetWindow=arguments.length>2&&arguments[2]!==undefined?arguments[2]:_this._window;requestData.request=true;return new Promise((function(resolve,reject){var requestTimeout=setTimeout((function(){_this._window.removeEventListener("message",responseHandler);reject({error:"timeout",request:requestData})}),timeout);var responseHandler=function responseHandler(_ref){var data=_ref.data;if(requestData.name==data.name&&data.response==true&&data.sender!=data.target){_this._window.removeEventListener("message",responseHandler);clearTimeout(requestTimeout);resolve(data)}};_this._window.addEventListener("message",responseHandler);_this.sendMessage(requestData,targetWindow)}))}));_defineProperty(this,"addListener",(function(cb){var targetWindow=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_this._window;targetWindow.addEventListener("message",cb,false);return function(){targetWindow.removeEventListener("message",cb)}}));_defineProperty(this,"removeListener",(function(cb){var targetWindow=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_this._window;targetWindow.removeEventListener("message",cb)}));this.senderId=senderId;this._window=senderId=="iframe"?window.self:window}));__webpack_exports__["a"]=ExtensionMessagingClient}});
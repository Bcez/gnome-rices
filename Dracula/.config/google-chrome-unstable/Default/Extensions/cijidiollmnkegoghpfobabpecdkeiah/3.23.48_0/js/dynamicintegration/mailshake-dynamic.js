var injectedAlready=document.getElementById("hippovideo-mailshake-dynamic-injected");if(!injectedAlready){var mergFieldMappings={Email:"{{email}}","First Name":"{{first}}","Last Name":"{{last}}"},hippoContentScriptEle='<input type=hidden id="hippovideo-mailshake-dynamic-injected" value=true />';$(hippoContentScriptEle).appendTo("body"),console.log("mailshake-dynamic script injected"),$(document).ready(function(){function e(e){var t=document.getElementById(e);if(t&&t.getAttribute("value"))return t.getAttribute("value")}function t(){return{serviceName:d.serviceName,windowId:d.windowId,tabId:d.tabId}}function i(e){if(0==$(e).parent().find(".hv-insert-btn-container").length){var t=$(e).closest(".mce-tinymce.mce-container.mce-panel").attr("id"),i=$("#"+t).find(".mce-edit-area").attr("id"),a=$(s.button);$(a).attr("id","hvInsertBtn_"+i),$(a).attr("editor-id",i),$(a).attr("container-id",t),$(e).parent().append(a),$("#hvInsertBtn_"+i).off("click").on("click",function(e){o($(e.currentTarget).attr("container-id"),$(e.currentTarget).attr("editor-id"))})}}function o(e,i){$("#hvMailshakePop").remove();var o=t();o.messageFromContentScript1234=!0,o.initWorkflowPop=!0,o.msgType="workflow",o.payload={logPrefix:d.logPrefix,popType:"sales",popId:"hvMailshakePop",assetContent:{containerId:e,editorId:i},popConfig:{showEditOption:!0,showTemplatesOption:!1,showContactsOption:!1,showVideoPageLibrary:!0,popReinitConditions:["containerId","editorId"],showMfForm:!1,fetchMfInVideo:!0,mandatoryEmailMf:!1,showCustomizeComponent:!0,showTelePrompter:!0,showLandingPageComponent:!0}},d.port.postMessage(o),a()}function a(){var e=t();e.messageFromContentScript1234=!0,e.messageType="mailshake",e.injectIframeScript=!0,d.port.postMessage(e)}function n(e){$("#hvMailshakePop").hide();var i=e.assetContent,o=i.videoShareUrl,a=i.thumbnailShareUrl,n=i.mfInVideo||[];if(n.length>0){for(var s="",p=0;p<n.length;p++){var l=n[p];mfVal=mergFieldMappings[l]?mergFieldMappings[l]:"{{"+l+"}}",s+=(0==p?"":"&")+encodeURIComponent(l)+"="+mfVal}o+=o.includes("?")?"&"+s:"?"+s,a+=a.includes("?")?"&"+s:"?"+s}var c=t();c.messageFromContentScript1234=!0,c.messageType="mailshake",c.mailshakeEditorAction=!0,c.editorAction="prepend",c.iframeId=$("#"+i.editorId).find("iframe").attr("id"),c.content=r(o,a,i.videoTitle),d.port.postMessage(c)}function r(e,t,i){return'<div><br></div><div class="hippo-video"  style="width: 100%; max-width: 360px; max-height: 260px;" contenteditable="false" ><div style="width: 100%; max-width: 360px; max-height: 200px; display: flex; background: #f6f6f6; border-top-left-radius: 5px; border-top-right-radius: 5px; border: 1px solid rgba(117, 117, 117, 0.1);"><span style="width: 100%; min-height: 200px; max-height: 200px;"><a href="'+e+'" target="_blank"><img crossorigin="anonymous" src="'+t+'"  style="max-width : 360px; max-height: 200px ;text-align: center; display: table-cell; margin: auto;"></a<span style="width: 100%; height: 100%;"></span></span></div><div style="width: 100%; height: 50px; background: #fafafa; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border: 1px solid rgba(117, 117, 117, 0.1); border-top: none;"><div style="padding-left: 10px; padding-top: 5px; font-size: 18px; font-weight: bold; letter-spacing: 0.3px; font-family: Open Sans; height: 23px;"><a href="'+e+'" target="_blank" style="color: #52a8be; text-decoration: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block;">'+i+'</a></div><div style="padding-left: 10px; padding-bottom: 5px; letter-spacing: 0.3px; font-family: Open Sans; font-size: 13px;"><a href="'+e+'" target="_blank" style="color: #757575; text-decoration: none;">Click to watch video</a></div></div></div>'}var d=function(){var t={};return t.serviceName=e("hvIntegName"),t.windowId=Number(e("hvWindowId")),t.tabId=Number(e("hvTabId")),t.logPrefix=" MAILSHAKE_DYNAMIC :: ",t.port=chrome.extension.connect({name:t.serviceName+"::"+t.windowId+"::"+t.tabId}),t}();!function(){var e=t();e.messageFromContentScript1234=!0,e.injectHvWorkflowScripts=!0,d.port.postMessage(e)}(),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,new MutationObserver(function(e,t){for(var o in e){var a=e[o];$(a.target).hasClass("mce-last")&&$(a.target).hasClass("mce-btn-group")&&i(a.target)}}).observe(document,{subtree:!0,childlist:!0,attributes:!0}),d.port.onMessage.addListener(function(e,t,i){msgFromPort=e.backgroundRecordingMessage,"insertFromWorkflowPop"==msgFromPort&&e.data.serviceName==d.serviceName&&e.data.tabId==d.tabId&&n(e.data.workflowConfig)});var s={button:'<div class="mce-container mce-flow-layout-item mce-last mce-btn-group hv-insert-btn-container" role="group"><div><div class="mce-widget mce-btn mce-last" tabindex="-1" aria-pressed="false" role="button" aria-label="Insert Video"><button role="presentation" type="button" tabindex="-1"><i class="mce-ico"><img class="hv-insert-btn" src="'+chrome.extension.getURL("/images/injected/video-icon-orange.svg")+'"></i></button></div></div></div>'}})}
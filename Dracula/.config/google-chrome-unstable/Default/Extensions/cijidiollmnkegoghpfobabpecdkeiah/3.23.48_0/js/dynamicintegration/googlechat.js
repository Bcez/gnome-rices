var injectedAlready=document.getElementById("hippowiz-googlechat-injected"),shareUrl,isRecording=!1,waitingForUrl=!1,guestUrl,recordingConfiguration,assetId,HTML_CONTENT={hippo_button:"<div class='hv-embed-main-container' style='display:inline;vertical-align: top; height: 32px;margin: 0px; width: 40px;'> <button id='hippo_video_button' data-ref='hv-embed-main-container' data-type='record_and_library' class='toolbar-action-component toggle text-editor-extension hint--top hv-embed-main-icon'  style='margin:0px 0px 0px 5px;border:0;padding:0;width:33px;height:33px;' data-hint='Hippo Video' type='button'><img src='https://hippolms-wiz-static.s3.amazonaws.com/images/gmail_add_on/video-icon-orange.svg' class='icon_image'  height='22px' width='22px' style='margin:0px 0px -2px 0px;' > </button><span class='tooltiptext'>Hippo Video</span></div>"},old_url="";if(!injectedAlready){var hippoCsInjected='<input type=hidden id="hippowiz-googlechat-injected" value=true />';$(hippoCsInjected).appendTo("body");var port;console.log("injected googlechat script"),$(document).ready(function(){function e(e){var o=document.getElementById(e);if(o&&o.getAttribute("value"))return o.getAttribute("value")}function o(){return{serviceName:c.serviceName,windowId:c.windowId,tabId:c.tabId}}function t(e,o){if(e.fireEvent)e.fireEvent("on"+o);else{var t=document.createEvent("Events");t.initEvent(o,!0,!1),e.dispatchEvent(t)}}function n(e){var o=e.data.workflowConfig.assetContent.mfFormValues,t="",n=1;for(mf_d in o)t+=1==n?encodeURIComponent(mf_d)+"="+encodeURIComponent(o[mf_d]):"&"+encodeURIComponent(mf_d)+"="+encodeURIComponent(o[mf_d]),n++;var i=e.data.workflowConfig.assetContent,a=i.videoShareUrl;return a+=a.includes("?")?"&"+t:"?"+t}function i(e,t){var n=o();n.messageFromContentScript1234=!0,n.msgType="workflow",n.payload={playUrl:e,uniqueId:t},n.urlToBeShortened=e,n.fetchShortenUrl=!0,c.port.postMessage(n)}function a(e){var o=e.data.payload.uniqueId,n=$(".hv-embed-main-icon[random-id="+o+"]"),i=$(n).closest(".dJ9vNe"),a=e.data.shortenUrl;$(".XweIZc div")[0].innerText="",$(i).find(".XweIZc div").innerText="",$(i).find(".oAzRtb.krjOGe").append(a).focus(),$(i).find(".oAzRtb.krjOGe").append("\n").focus(),$("#hvGoogleChatPop").remove(),t($(".oAzRtb.krjOGe")[0],"focus")}function r(){$(".XganBc").length>0&&($(".hv-embed-main-container").remove(),$(".CfUpN").prepend($(HTML_CONTENT.hippo_button)),$(".hv-embed-main-icon").off("click"),$(".hv-embed-main-icon").on("click",p),$(".rich-text-editor-component button.primary-button.save").addClass("hv-tool-bar-quill-override"))}function d(e){for(var o="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,i=0;i<e;i++)o+=t.charAt(Math.floor(Math.random()*n));return o}function s(e){var t=o();t.messageFromContentScript1234=!0,t.initWorkflowPop=!0,t.msgType="workflow",t.payload={logPrefix:c.logPrefix,popType:"sales",popId:"hvGoogleChatPop",assetContent:{uniqueId:e},popConfig:{showEditOption:!0,showTemplatesOption:!1,showContactsOption:!1,showVideoPageLibrary:!0,addSalesUtmParams:!1,popReinitConditions:[],showMfForm:!0,fetchMfInVideo:!0,mandatoryEmailMf:!1,showCustomizeComponent:!0,showTelePrompter:!0,showLandingPageComponent:!0}},c.port.postMessage(t)}function p(e){$("#hvGoogleChatPop").remove();var o=d(20);$(e.currentTarget).attr("random-id",o),s(o)}var c=function(){var o={};return o.serviceName=e("hvIntegName"),o.windowId=Number(e("hvWindowId")),o.tabId=Number(e("hvTabId")),o.logPrefix=" GOOGLECHAT_DYNAMIC :: ",o.port=chrome.extension.connect({name:o.serviceName+"::"+o.windowId+"::"+o.tabId}),o}();!function(){var e=o();e.messageFromContentScript1234=!0,e.injectHvWorkflowScripts=!0,c.port.postMessage(e)}(),c.port.onMessage.addListener(function(e,o,t){if(msgFromPort=e.backgroundRecordingMessage,"insertFromWorkflowPop"==msgFromPort&&"googlechat"==e.data.serviceName&&e.data.tabId==c.tabId){var r=e.data.workflowConfig.assetContent.uniqueId;i(n(e),r)}"fetchShortenUrlResponse"==msgFromPort&&e.data.serviceName==c.serviceName&&e.data.tabId==c.tabId&&a(e)}),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,new MutationObserver(function(e,o){for(var t in e){var n=(e[t],window.location.href);""==old_url&&(old_url=n,setTimeout(r,1e3)),old_url!=n&&(old_url=n,setTimeout(r,1e3))}}).observe(document,{subtree:!0,childlist:!0,attributes:!0}),setTimeout(r,2e3)})}
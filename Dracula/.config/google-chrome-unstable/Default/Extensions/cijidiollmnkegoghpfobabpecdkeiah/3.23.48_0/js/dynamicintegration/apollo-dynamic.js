var injectedAlready=document.getElementById("hippowiz-apollo-dynamic-injected"),HTML_CONTENT={hippo_button:"<div id='hippoVideoBtn' class='hv-embed-main-container' style='display:flex; position: relative;margin: 0px 4px 4px 4px !important;padding: 0px !important;justify-content: center;width: 14px !important;text-align: center;height: 22px !important;'> <button data-ref='hv-embed-main-container' data-type='record_and_library' class='toolbar-action-component toggle text-editor-extension hint--top hv-embed-main-icon' type='button'><img src='https://hippolms-wiz-static.s3.amazonaws.com/images/gmail_add_on/video-icon-orange.svg' height='16px' width='19px'><span id='hippoVideoTooltip' style='display: none;position: absolute;top: -25px;left: -12px;width: 90px;background: #263040;color: white;font-size: 12px;padding: 4px;font-family: &quot;proxima nova&quot;, proxima-nova, ProximaNova, Avenir, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;border-radius: 3px;font-weight: 500;letter-spacing: 1px;'>Hippo Video</span></div>",report_button:'<div class="hv-embed-main-container-report hv-integration-reports-button" style="display:inline;"><button data-ref="hv-embed-main-container-report" class="hv-integration-reports" type="button" style="display: flex; margin-top: 2px; height: 32px; padding-left: 15px; font-family: &quot;Inter&quot;,&quot;proxima nova&quot;,&quot;proxima-nova&quot;,&quot;Helvetica Neue&quot;,&quot;Helvetica&quot;,arial,sans-serif; color: rgb(25, 145, 235);"><img src="'+chrome.extension.getURL("/images/injected/hv-integration-reports.svg")+'" style="width: 20px; height: 20px; margin-top: 5px;"><div class="hv-report-tooltip">Video Reports</div></button></div>'};if(!injectedAlready){var hippoCsInjected='<input type=hidden id="hippowiz-apollo-dynamic-injected" value=true />';$(hippoCsInjected).appendTo("body"),console.log("injected apollo-dynamic script");var port;$(document).ready(function(){function t(t){var e=document.getElementById(t);if(e&&e.getAttribute("value"))return e.getAttribute("value")}function e(){return{serviceName:v.serviceName,windowId:v.windowId,tabId:v.tabId}}function o(){var t=$(".zp_1ipe9");if(0==$(t).find(".hv-integration-reports-button").length){$(t).find(".zp_3fzAY");$(t).prepend($(HTML_CONTENT.report_button)),$(".hv-integration-reports-button").unbind("click").bind("click",function(){$("#hvApolloReportPop").remove(),n()})}}function n(){var t=d(!0),o=p(!0),n=e();n.messageFromContentScript1234=!0,n.initReportPop=!0,n.randomId="",n.msgType="workflow",n.reportBtn="hv-integration-reports",n.contactEmail=t,n.contactName=o,n.payload={popId:"hvApolloReportPop",logPrefix:v.logPrefix},v.port.postMessage(n)}function i(t){var e=0,o=setInterval(function(){if(++e,0==$(t).find(".hv-embed-main-container").length){var n=window.location.href,i=n.includes("/people")||n.includes("/contacts"),a=$(t).find(".ql-formats")[0];$(a).prepend($(HTML_CONTENT.hippo_button)),$(".hv-embed-main-container button").unbind("mousein").bind("mouseover",function(t){$("#hippoVideoTooltip").show()}),$(".hv-embed-main-container button").unbind("mouseout").bind("mouseout",function(t){$("#hippoVideoTooltip").hide()}),$("#hippoVideoBtn").unbind("click").bind("click",function(t){var e=$(t.currentTarget).attr("hv-id");c(i,e)});var d=$(t).closest(".quill-editor"),p=$(d).find(".ql-editor"),l=s();$(p).attr("hv-id",l),$(".hv-embed-main-container").attr("hv-id",l),$(p).off("mouseup").on("mouseup",r),$(p).off("keyup").on("keyup",r)}20==e&&clearInterval(o)},1e3)}function r(t){var e=window.getSelection(),o=e.anchorNode;$(t.currentTarget).parent().find(".hv-current-cursor").removeClass("hv-current-cursor").removeAttr("anchor-offset");var n;1==o.nodeType?n=$(o):3==o.nodeType&&(n=$(o.parentElement)),$(n).addClass("hv-current-cursor").attr("anchor-offset",e.anchorOffset)}function a(t){var e=$('.ql-editor[hv-id="'+t+'"]');return $(e)[0].innerHTML}function s(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function d(t){try{if(t){if(window.location.href.includes("/contacts"))return $(".zp_n4sev a").text().trim();if(window.location.href.includes("/people")){var e=$(".zp_39f8T").text().trim();return e.substr(e.indexOf("<")+1,e.indexOf(">")-e.indexOf("<")-1)}}}catch(t){console.log(t)}return""}function p(t){try{if(t){if(window.location.href.includes("/contacts"))return $(".zp_1t2Qc").text().trim();if(window.location.href.includes("/people")){var e=$(".zp_39f8T").text().trim();return e.substr(0,e.indexOf("<")-1)}}}catch(t){console.log(t)}return""}function c(t,o){var n=e();n.messageFromContentScript1234=!0,n.initWorkflowPop=!0,n.msgType="workflow",n.payload={logPrefix:v.logPrefix,popType:"sales",popId:"hvApolloPop",assetContent:{mfFormValues:{Email:d(t),"First Name":p(t)},uniqueId:o},popConfig:{showEditOption:!0,showTemplatesOption:!1,showContactsOption:!1,showVideoPageLibrary:!0,addSalesUtmParams:!1,popReinitConditions:[],showMfForm:t,fetchMfInVideo:!0,mandatoryEmailMf:t,showCustomizeComponent:!0,showLandingPageComponent:!0,showTelePrompter:!0,defaultHtmlContent:a(o),isMailFlow:t}},v.port.postMessage(n)}function l(t){var e=t.workflowConfig;e.popConfig.isMailFlow?u(e):m(!1,e)}function u(t){var o=e();o.messageFromContentScript1234=!0,o.messageType="apollo_dynamic",o.getUTMToken=!0,o.popId=t.popId,o.content=t,o.serviceName=v.serviceName,v.port.postMessage(o)}function m(t,e){$("#hvApolloPop").hide();var o,n,i;if(t){i=e.content.assetContent.uniqueId,o=e.content.assetContent.videoShareUrl,n=e.content.assetContent.thumbnailShareUrl;var r=e.track_id;if(1==e.status)o+=o.includes("?")?"&hv_id="+r:"?hv_id="+r,n+=n.includes("?")?"&hv_id="+r:"?hv_id="+r;else{var a=e.content.assetContent.mfInVideo,s=e.content.assetContent.mfFormValues;if(a.length>0){for(var d="",p=0;p<a.length;p++)d=d+encodeURIComponent(a[p])+"="+encodeURIComponent(s[a[p]])+"&";""!=d&&(o+=o.includes("?")?"&"+d:"?"+d,n+=n.includes("?")?"&"+d:"?"+d)}}}else{o=e.assetContent.videoShareUrl,n=e.assetContent.thumbnailShareUrl,i=e.assetContent.uniqueId;var a=e.assetContent.mfInVideo;a=a||[],a.includes("Email")||a.includes("email")||a.push("Email");for(var d="utm_source=hv-campaigns&hreferer=apollo_dynamic&",p=0;p<a.length;p++)d=d+encodeURIComponent(a[p])+"="+(f[a[p]]?f[a[p]]:"{{"+a[p]+"}}")+"&";""!=d&&(o+=o.includes("?")?"&"+d:"?"+d,n+=n.includes("?")?"&"+d:"?"+d)}for(var c=h(o,n),l=$('.ql-editor[hv-id="'+i+'"]'),u=$(l).children(),m=!1,v=0;v<$(u).length;v++){var g=$(u)[v];if($(g).hasClass("hv-current-cursor")){$(c).insertAfter($(g)),m=!0;break}}m||$(l).prepend($(c))}function h(t,e){var o='<a href="'+t+'"><img src="'+e+'" width="360px" height="200px"></a>';return o+='<a href="'+t+'">Watch Video</a>'}var f={"First Name":"{{first_name}}","Last Name":"{{last_name}}","Company Name":"{{company}}",Email:"{{email}}",City:"{{location_city}}",State:"{{location_state}}",Country:"{{location_country}}","Phone Number":"{{phone}}",Title:"{{title}}"},v=function(){var e={};return e.serviceName=t("hvIntegName"),e.windowId=Number(t("hvWindowId")),e.tabId=Number(t("hvTabId")),e.logPrefix=" APOLLO_DYNAMIC :: ",e.port=chrome.extension.connect({name:e.serviceName+"::"+e.windowId+"::"+e.tabId}),e}();!function(){var t=e();t.messageFromContentScript1234=!0,t.injectHvWorkflowScripts=!0,v.port.postMessage(t)}(),v.port.onMessage.addListener(function(t,e,o){if(msgFromPort=t.backgroundRecordingMessage,"insertFromWorkflowPop"==msgFromPort&&t.data.serviceName==v.serviceName&&t.data.tabId==v.tabId&&l(t.data),"insertVideoInApollo"==msgFromPort&&t.data.tabId==v.tabId){m(!0,t.data)}}),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,new MutationObserver(function(t,e){for(var n in t){var r=t[n];$(r.target).hasClass("ql-toolbar")&&i(r.target),window.location.href.includes("/contacts")&&o()}}).observe(document,{subtree:!0,childlist:!0,attributes:!0})})}
var injectedAlready=document.getElementById("hippowiz-zoho-crm-dynamic-injected"),HTML_CONTENT={hippo_button:"<li class='hv-embed-main-container' title='Hippo Video'><img src='https://hippolms-wiz-static.s3.amazonaws.com/images/gmail_add_on/video-icon-orange.svg' height='16px' width='16px'></li>",report_button:"<div class='hv-reports-container'><button type='button' class='hv-integration-reports'><img src='"+chrome.extension.getURL("/images/injected/hv-integration-reports.svg")+"' width='25px' height='28px'><div class='hv-report-tooltip'>Video Reports</div></button></div>",hippo_button_for_pop_flow:"<li class='tool_li hv-embed-main-container' title='Hippo Video' style='user-select: none;'>                                     <a tab-index='-1' style='user-select: none;'>                                     <img class='hippo-record-icon' src='https://hippolms-wiz-static.s3.amazonaws.com/images/gmail_add_on/video-icon-orange.svg' height='16px' width='16px'>                                     </a>                                     </li>"},copyToClipboard=void 0;if(!injectedAlready){var hippoCsInjected='<input type=hidden id="hippowiz-zoho-crm-dynamic-injected" value=true />';$(hippoCsInjected).appendTo("body");var copyToClipboardBtn='<button class="copy-to-clipboard" data-clipboard-target="#copy-to-clipboard-btn" style="display:none;"></button>';$(copyToClipboardBtn).appendTo("body"),console.log("injected zoho-crm-dynamic script"),$(document).ready(function(){function t(t){var e=document.getElementById(t);if(e&&e.getAttribute("value"))return e.getAttribute("value")}function e(){return{serviceName:C.serviceName,windowId:C.windowId,tabId:C.tabId}}function o(t,e){var o,a;if(t){o=e.content.assetContent.videoShareUrl,a=e.content.assetContent.thumbnailShareUrl;var i=e.track_id;if(1==e.status)o+=o.includes("?")?"&track_id="+i:"?track_id="+i,a+=a.includes("?")?"&track_id="+i:"?track_id="+i;else{var r=e.content.assetContent.mfInVideo,s=e.content.assetContent.mfFormValues;if(r.length>0){for(var d="",c=0;c<r.length;c++)d=d+encodeURIComponent(r[c])+"="+encodeURIComponent(s[r[c]])+"&";""!=d&&(o+=o.includes("?")?"&"+d:"?"+d,a+=a.includes("?")?"&"+d:"?"+d)}}}else{var p="contacts"==e.popConfig.moduleName?b:f;o=e.assetContent.videoShareUrl,a=e.assetContent.thumbnailShareUrl;var r=e.assetContent.mfInVideo;r=r||[],r.includes("Email")||r.includes("email")||r.push("Email");for(var d="utm_source=hv-campaigns&hreferer=zoho_crm_dynamic&",c=0;c<r.length;c++)d=d+encodeURIComponent(r[c])+"="+(p[r[c]]?p[r[c]]:"{{"+r[c]+"}}")+"&";""!=d&&(o+=o.includes("?")?"&"+d:"?"+d,a+=a.includes("?")?"&"+d:"?"+d)}copyToClipboard&&copyToClipboard.destroy(),jQuery(function(){jQuery(".copy-to-clipboard").click()}),copyToClipboard=new ClipboardJS(".copy-to-clipboard",{target:function(){return n(o,a)}}),copyToClipboard.on("success",function(t){$("#copyLinkWithThumbnailTarget").remove()}),$("#hvZohoCrmPop").hide()}function n(t,e){return $("#copyLinkWithThumbnailTarget").remove(),$("body").append('<div id="copyLinkWithThumbnailTarget" aria-hidden="true" tabindex="-1" >'+a(t,e)+"</div>"),document.querySelector("#copyLinkWithThumbnailTarget")}function a(t,e){return'<a href="'+t+'" target="_blank" tabindex="-1"><img src="'+e+'" alt="'+t+'" style="cursor: pointer;" width="360" height="200"></a><div><a href="'+t+'" target="_blank" tabindex="-1" style="cursor: pointer;">Watch Video</a></div><div><br></div>'}function i(){var t=e();t.messageFromContentScript1234=!0,t.messageType="zoho-crm-dynamic",t.injectIframeScript=!0,C.port.postMessage(t)}function r(t,e){e?($(t).find("ul")[0].prepend($(HTML_CONTENT.hippo_button)[0]),$(".hv-embed-main-container").off("click").on("click",u)):s()}function s(){var t=0,e=setInterval(function(){$(".composeEditor").length>0&&0==$(".composeEditor").find(".hv-embed-main-container").length&&(clearInterval(e),$(".composeEditor").find("#font_ul").prepend($(HTML_CONTENT.hippo_button_for_pop_flow)),$(".hv-embed-main-container").off("click").on("click",u)),++t>200&&clearInterval(e)},25)}function d(t){(window.location.href.includes("/tab/Leads/")||window.location.href.includes("/tab/Contacts/"))&&($(t).find(".sendmailgroupbtn").parents("#fixedBtn").prepend(HTML_CONTENT.report_button),$(".hv-integration-reports").off("click").on("click",c))}function c(t){var o=window.location.href.includes("/tab/Leads/")?t.contactEmail?t.contactEmail:$("#value_EMAIL").find("#subvalue_EMAIL").text():$("#header_EMAIL").find("#subvalue_EMAIL").text(),n=t.lastName?t.lastName:$("#headervalue_LASTNAME").find("#subvalue_LASTNAME").text(),a=e();a.messageFromContentScript1234=!0,a.initReportPop=!0,a.randomId="",a.msgType="workflow",a.reportBtn="hv-integration-reports",a.contactEmail=o,a.contactName=n,a.payload={popId:"hvZohoCrmReportPop",logPrefix:C.logPrefix},C.port.postMessage(a)}function p(t){var o=e();o.messageFromContentScript1234=!0,o.messageType="zoho_crm_dynamic",o.getUTMToken=!0,o.popId=t.popId,o.content=t,o.serviceName=C.serviceName,C.port.postMessage(o)}function l(t){var e=t.workflowConfig;e.popConfig.isMailFlow?p(e):o(!1,e)}function m(t,o,n){var a=e();a.messageFromContentScript1234=!0,a.initWorkflowPop=!0,a.msgType="workflow",a.payload={logPrefix:C.logPrefix,popType:"sales",popId:"hvZohoCrmPop",assetContent:{mfFormValues:{Email:n.contactEmail?n.contactEmail:h()},uniqueId:o},popConfig:{showEditOption:!0,showTemplatesOption:!1,showContactsOption:!1,showVideoPageLibrary:!0,addSalesUtmParams:!1,popReinitConditions:[],showMfForm:t,fetchMfInVideo:!0,mandatoryEmailMf:t,insertVideoText:"COPY TO CLIPBOARD",showCustomizeComponent:!0,showLandingPageComponent:!0,showTelePrompter:!0,isMailFlow:t,moduleName:g()}},C.port.postMessage(a)}function u(t){m(!window.location.href.includes("/templates"),v(),t)}function h(){var t="",e=window.location.href,o=e.split("entEmail=")[1];return o?(o=o.split("&")[0],t=decodeURIComponent(o)):(e.includes("/tab/Leads/")||e.includes("/tab/Contacts/"))&&$(".selectedEmail").length>0&&(t=$(".selectedEmail")[0].getAttribute("email")),t}function g(t){if(!t){var e=window.location.href.split("module=")[1];if(e)var o=e.split("&")[0].toLowerCase()}return o}function v(){return Math.random().toString(36).substr(2,5)+Date.now()}var f={"First Name":"${Leads.First Name}","Last Name":"${Leads.Last Name}","Company Name":"${Leads.Company}",Email:"${Leads.Email}",City:"${Leads.City}",State:"${Leads.State}",Country:"${Leads.Country}","Phone Number":"${Leads.Phone}",Title:"${Leads.Title}"},b={"First Name":"${Contacts.First Name}","Last Name":"${Contacts.Last Name}","Company Name":"${Contacts.Account Name}",Email:"${Contacts.Email}",City:"${Contacts.Mailing City}",State:"${Contacts.Mailing State}",Country:"${Contacts.Mailing Country}","Phone Number":"${Contacts.Phone}",Title:"${Contacts.Title}"},C=function(){var e={};return e.serviceName=t("hvIntegName"),e.windowId=Number(t("hvWindowId")),e.tabId=Number(t("hvTabId")),e.logPrefix="ZOHO_CRM_DYNAMIC :: ",e.port=chrome.extension.connect({name:e.serviceName+"::"+e.windowId+"::"+e.tabId}),e}();!function(){var t=e();t.messageFromContentScript1234=!0,t.injectHvWorkflowScripts=!0,C.port.postMessage(t)}(),window.addEventListener("message",function(t){t.data.type&&"hv_init_workflow_pop"==t.data.type&&u(t.data.data),t.data.type&&"hv_init_report_workflow_pop"==t.data.type&&c(t.data.data),t.data.type&&"hv_inject_iframe_script"==t.data.type&&i()}),C.port.onMessage.addListener(function(t,e,n){if(msgFromPort=t.backgroundRecordingMessage,"insertFromWorkflowPop"==msgFromPort&&t.data.serviceName==C.serviceName&&t.data.tabId==C.tabId&&l(t.data),"insertVideoInZohoCrm"==msgFromPort&&t.data.tabId==C.tabId){o(!0,t.data)}}),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,new MutationObserver(function(t,e){for(var o in t){var n=t[o];"emailEditor"==$(n.target).attr("id")&&i(),$(n.target).hasClass("ceVariousTextFormattingOptionContainer")&&0==$(".hv-embed-main-container").length&&r(n.target,!0),$(n.target).hasClass("composeContentPanel")&&0==$(".hv-embed-main-container").length&&r(n.target,!1),"detailViewButtonLayerDiv"==$(n.target).attr("id")&&0==$(".hv-integration-reports").length&&d(n.target),"productLoading"==$(n.target).attr("id")&&$("iframe").on("load",function(){i()})}}).observe(document,{subtree:!0,childlist:!0,attributes:!0})})}
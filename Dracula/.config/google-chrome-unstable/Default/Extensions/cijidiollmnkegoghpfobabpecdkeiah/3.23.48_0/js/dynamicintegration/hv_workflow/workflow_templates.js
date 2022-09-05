document.getElementById("hv-workflow-templates-injected")||($('<input type=hidden id="hv-workflow-templates-injected" value=true />').appendTo("body"),$(document).ready(function(){function e(e){var t=document.getElementById(e);if(t&&t.getAttribute("value"))return t.getAttribute("value")}function t(){return{serviceName:W.serviceName,windowId:W.windowId,tabId:W.tabId}}function n(e){var t=e.workflowConfig,n=t.assetContent;$("#"+t.popId).find(".hv-wf-pop-header .hv-pop-topbar-ele").removeClass("tp-selected"),$("#"+t.popId).find(".hv-wf-pop-header .hv-templates").addClass("tp-selected"),B(t.popId),0===$("#"+t.popId).find(".hv-wf-pop-body .hv-wf-pop-content").find(".hv-templates-container").length&&$("#"+t.popId).find(".hv-wf-pop-body .hv-wf-pop-content").append($(U.templatesContainer)),$("#"+t.popId).find(".hv-wf-pop-body .hv-wf-pop-content").find(".hv-pop-content-container").hide(),$("#"+t.popId).find(".hv-wf-pop-body .hv-wf-pop-content").find(".hv-templates-container").show();var a="true"==$("#"+t.popId).find(".hv-wf-pop-body .hv-wf-pop-content").find(".hv-templates-container").attr("is-page"),i=$("#"+t.popId).find(".hv-wf-pop-body .hv-wf-pop-content").find(".hv-templates-container").attr("element-id"),r=n.isPage?n.pageId:n.assetId;o(t,a&&!n.isPage||!a&&n.isPage||i!=r)}function o(e,t){var n=$("#"+e.popId);n.find(".hv-wf-pop-body .hv-wf-pop-loading").fadeOut(50);var o;if(0==n.find(".hv-templates-container .hv-email-template-form").length){n.find(".hv-templates-container").append($(U.templateForm)),n.find(".hv-templates-container .hv-email-template-form").append($(U.templateSelect)),n.find(".hv-templates-container .hv-email-template-form").append($(U.templateSubject)),n.find(".hv-templates-container .hv-email-template-form").append($(U.templateContent)),n.find(".hv-email-template-content").attr("delivery-token",e.assetContent.deliveryToken),o=D(e.popId);var i=x(e);o.innerHTML=i,E(e.popId,e.logPrefix),"campaign"==e.popType?T(e.popId,o):$("#"+e.popId).find(".hv-email-template-form .template-content").find(".mf-note").hide(),a(e),$("#"+e.popId).find(".hv-wf-pop-body .hv-wf-pop-content").find(".hv-templates-container").attr("is-page",e.assetContent.isPage),$("#"+e.popId).find(".hv-wf-pop-body .hv-wf-pop-content").find(".hv-templates-container").attr("element-id",e.assetContent.isPage?e.assetContent.pageId:e.assetContent.assetId)}else if($("#"+e.popId).find(".hv-templates-container .hv-email-template-form").show(),o=D(e.popId),e.assetContent.html){if(t){var r=$("#"+e.popId).find(".hv-templates-container .hv-email-template-form").find("#hvEmailTemplateSelect").val();"none"!==r?M(e,Number(r),o):o.innerHTML=DOMPurify.sanitize(N(e),X),e.assetContent.mfFormFilled=!1,e.assetContent.mfInVideo=void 0,q(e),v(e.popId)}}else{t&&(e.assetContent.mfFormFilled=!1,e.assetContent.mfInVideo=void 0,q(e),v(e.popId));var p=x(e);o.innerHTML=p}c(e.popId),e.openMfForm&&m(e)}function a(e){b(e),$("#"+e.popId).find("#templateFinishBtn").attr("pop-id",e.popId),$("#"+e.popId).find("#templateContinueBtn").attr("pop-id",e.popId),$("#"+e.popId).find("#templateFinishBtn").off("click").on("click",function(e){var t=$(e.currentTarget).attr("pop-id");$("#"+t).find("#templateFinishBtn").attr("disabled","disabled");var n=$("#"+t).data("workflowConfig");if(n.assetContent.mfInTemplates=w(n.popId),n.popConfig&&n.popConfig.showMfForm&&!n.assetContent.mfInVideo)return n.assetContent.mfFormFilled=!1,q(n),void C(n);var o=n.assetContent.mfInTemplates||[],a=n.assetContent.mfInVideo||[];if(o.length>0&&(n.assetContent.mfFormFilled=!1),"sales"==n.popType&&(o.length>0||a.length>0||n.popConfig.mandatoryEmailMf)&&!n.assetContent.mfFormFilled)return n.assetContent.mfFormFilled=!1,q(n),void m(n);n=p(n),q(n),r(n.popId),$("#"+n.popId).find("#templateFinishBtn").removeAttr("disabled"),A(n.logPrefix,"Finish Button in Templates Clicked");var i;n.assetContent.templateId&&(i=n.assetContent.templateId),H(n.logPrefix,"Finish Button in Templates Clicked",i)}),$("#"+e.popId).find("#templateContinueBtn").off("click").on("click",function(e){var t=$(e.currentTarget).attr("pop-id"),n=$("#"+t).data("workflowConfig");n=p(n);var o=w(n.popId);n.assetContent.mfInTemplates=o,q(n),i(n),A(n.logPrefix,"Continue Button in Templates Clicked");var a;n.assetContent.templateId&&(a=n.assetContent.templateId),H(n.logPrefix,"Continue Button in Templates Clicked",a)})}function i(e){var n=t();n.messageFromContentScript1234=!0,n.msgType="workflow",n.screenName="hv-contacts",n.mode="contacts",n.popScreenSwitch=!0,n.workflowConfig=e,W.port.postMessage(n)}function r(e){var n=$("#"+e).data("workflowConfig"),o=P(n.assetContent);n.assetContent.videoShareUrl=o.video,n.assetContent.thumbnailShareUrl=o.thumbnail,q(n);var a=t();a.insertFromWorkflowPop=!0,a.messageFromContentScript1234=!0,a.msgType="workflow",a.workflowConfig=n,W.port.postMessage(a),$("#"+n.popId).find(".hv-wf-pop-body .hv-wf-pop-loading").fadeOut(100)}function p(e){return e.assetContent.templateId=d(e.popId),e.assetContent.html=l(e.popId),e.assetContent.subject=_(e.popId),e}function l(e){for(var t=$("#"+e).find("#"+e+"EmailTemplateContent .ql-editor")[0],n=$(t).find(".atwho-inserted"),o=0;o<$(n).length;o++){var a=n[o];$(a).replaceWith(a.innerHTML)}for(var i=$(t).find(".hv-mf-error"),r=0;r<$(i).length;r++){var p=i[r];$(p).replaceWith(p.innerHTML)}s(t);var l=$("#"+e).find("#"+e+"EmailTemplateContent .ql-editor")[0].innerHTML;l=l.replace(new RegExp("<p>","g"),"<div>"),l=l.replace(new RegExp("<p ","g"),"<div "),l=l.replace(new RegExp("</p>","g"),"</div>");for(var d=l.split("\n"),m=0;m<d.length;m++){""==d[m].trim()?d[m]=d[m]+"<br></div><div>":d[m]=d[m]+"</div><div>"}return l=d.join("")}function s(e){for(var t,n=$(e).find("span,p,pre,blockquote"),o=0;o<n.length;o++){for(var a=n[o],i=($(a).attr("class")||"").split(/\s+/),r=0;r<i.length;r++){var p=i[r];if(K[p]){t=K[p];for(var l in t)$(a).css(l,t[l])}}var s=$(a).prop("tagName");if(J[s]){t=J[s];for(var l in t)$(a).css(l,t[l])}}}function d(e){var t=$("#"+e).find(".hv-templates-container .hv-email-template-form").find("#hvEmailTemplateSelect").val();if("none"!==t)return Number(t)}function m(e){$("#"+e.popId).find(".hv-wf-pop-body .hv-wf-pop-loading").fadeOut(10);var t,n=[],o=[];if(e.popConfig&&e.popConfig.showMfForm)for(o=e.assetContent.mfInVideo,t=0;t<o.length;t++)n.includes(o[t])||n.push(o[t]);var a=w(e.popId);for(e.assetContent.mfInTemplates=a,q(e),t=0;t<a.length;t++)n.includes(a[t])||n.push(a[t]);var i=e.popConfig.mandatoryEmailMf;i&&!n.includes("Email")&&n.push("Email"),0==$("#"+e.popId).find(".hv-wf-pop .hv-template-mf-form").length&&$("#"+e.popId).find(".hv-wf-pop").append($(U.hvTemplateMfForm)),$("#"+e.popId).find(".hv-wf-pop .hv-template-mf-form").show("slide",{direction:"right"},500),$("#"+e.popId).find(".hv-wf-pop .hv-template-mf-form").empty();var r=R(e.popId),p=U.hvTemplateMfFormContent;p=p.replace("{insertText}",r),$("#"+e.popId).find(".hv-wf-pop .hv-template-mf-form").append($(p)),$("#"+e.popId).find(".hv-wf-pop .hv-template-mf-form-desc").text(z.mfFormDesc);var l=e.assetContent.mfFormValues||{};for(t=0;t<n.length;t++){var s=$(U.hvTemplateMfFormInputEle);$(s).find(".input-label").text(n[t]),$(s).find(".input-ele input").attr({placeholder:chrome.i18n.getMessage("enter")+" "+n[t],"hv-key":n[t]}),i&&"Email"==n[t]&&$(s).find(".input-label").append("<span>*</span>"),l[n[t]]&&$(s).find(".input-ele input").val(l[n[t]]),$("#"+e.popId).find(".hv-wf-pop .hv-template-mf-form-input-container").append($(s))}f(e.popId,e.logPrefix),h(e.popId)}function f(e,t){$("#"+e).find("#templateMfSaveBtn").attr("pop-id",e),$("#"+e).find("#templateMfSaveBtn").off("click").on("click",function(e){for(var t=$(e.currentTarget).attr("pop-id"),n=$("#"+t).data("workflowConfig"),o=n.assetContent.mfFormValues||{},a=$("#"+t).find(".hv-template-mf-form-input-container input"),i=0;i<$(a).length;i++){var r=$(a)[i],p=$(r).val();o[$(r).attr("hv-key")]=p}n.popConfig.mandatoryEmailMf?o.Email&&""!=o.Email.trim()?n.assetContent.mfFormFilled=!0:n.assetContent.mfFormFilled=!1:n.assetContent.mfFormFilled=!0,n.assetContent.mfFormValues=o,q(n),g(t),y(n,D(n.popId)),n.assetContent.mfInVideo&&n.assetContent.mfInVideo.length>0&&u(n.popId),c(t),A(n.logPrefix,"Merge Field Form Save Button Clicked"),$("#"+t).find("#templateFinishBtn").click()}),$("#"+e).find("#templateMfCancelBtn").attr("pop-id",e).attr("log-prefix",t),$("#"+e).find("#templateMfCancelBtn").off("click").on("click",function(e){var t=$(e.currentTarget).attr("pop-id"),n=$(e.currentTarget).attr("log-prefix");g(t),c(t),A(n,"Merge Field Form Cancel Button Clicked")})}function c(e){$("#"+e).find("#templateFinishBtn").show(),$("#"+e).find("#templateContinueBtn").show(),$("#"+e).find("#templateMfEditBtn").show()}function v(e){$("#"+e).find("#templateMfEditBtn").remove()}function h(e){$("#"+e).find("#templateFinishBtn").hide(),$("#"+e).find("#templateContinueBtn").hide(),$("#"+e).find("#templateMfEditBtn").hide()}function g(e){$("#"+e).find(".hv-wf-pop .hv-template-mf-form").hide("slide",{direction:"right"},500)}function u(e){0==$("#"+e).find("#templateMfEditBtn").length&&$("#"+e).find(".template-select-container").append($(U.mfFormEditValueBtn)),$("#"+e).find("#templateMfEditBtn").attr("pop-id",e),$("#"+e).find("#templateMfEditBtn").off("click").on("click",function(e){var t=$(e.currentTarget).attr("pop-id");m($("#"+t).data("workflowConfig"))})}function C(e){var n=t();n.fetchMergeFields=!0,n.msgType="workflow",n.screenName=W.screenName,n.messageFromContentScript1234=!0,n.workflowConfig=e,n.params={is_page:e.assetContent.isPage,asset_id:e.assetContent.assetId,page_id:e.assetContent.pageId},!e.assetContent.isPage&&e.assetContent.customPageDetails&&(n.params.is_custom_asset=!0,n.params.custom_page_id=e.assetContent.customPageDetails.pageId,n.params.custom_asset_id=e.assetContent.assetId),W.port.postMessage(n)}function w(e){for(var t=$("#"+e).find("#"+e+"EmailTemplateContent .ql-editor").find(".atwho-inserted"),n=0;n<$(t).length;n++){var o=t[n];$(o).replaceWith(o.innerHTML)}for(var a=$("#"+e).find("#"+e+"EmailTemplateContent .ql-editor")[0].innerText,i=I(a),r=_(e),p=I(r),l=0;l<p.length;l++){var s=p[l];i.includes(s)||i.push(s)}return i}function I(e){for(var t,n=[],o=0,a=e.indexOf("${",0);-1!==a&&-1!==o;)-1!==(o=e.indexOf("}",a))&&(t=e.substring(a+2,o),a=e.indexOf("${",o),n.includes(t)||n.push(t));return n}function b(e){var t;t="sales"==e.popType?[{name:z.finish,id:"templateFinishBtn",type:"primary"}]:[{name:z.finish,id:"templateFinishBtn",type:"secondary"},{name:z.continue,id:"templateContinueBtn",type:"primary"}];for(var n=0;n<t.length;n++)if(0==$("#"+e.popId).find(".hv-wf-pop-footer .right-btn-container").find("#"+t[n].id).length){var o=$(U.buttonEle);$(o).attr("id",t[n].id),$(o).find("span").text(t[n].name),$("#"+e.popId).find(".hv-wf-pop-footer .right-btn-container").append($(o)),$("#"+e.popId).find(".hv-wf-pop-footer .right-btn-container").find("#"+t[n].id).addClass(t[n].type+"-btn")}}function T(e,t,n){n=n||Y,n=n.slice();for(var o=0;o<n.length;o++)n[o]="{"+n[o]+"}";$(t).atwho({at:"$",data:n,limit:n.length}).on("inserted.atwho",function(e){$(e.currentTarget).find(".ql-cursor").parent().parent().remove()}),$("#"+e).find("#hvEmailTemplateSubject").atwho({at:"$",data:n,limit:n.length})}function k(e){var t=e.response.emailslist;Q=t;var n=$("#"+e.popId).find(".hv-templates-container .hv-email-template-form").find("#hvEmailTemplateSelect");$(n).empty().append('<option value="none" selected>'+z.none+"</option>");for(var o=0;o<t.length;o++){var a=t[o];$(n).append('<option value="'+a.id+'">'+a.name+"</option>")}$(n).attr("pop-id",e.popId).attr("log-prefix",e.logPrefix),$(n).off("change").on("change",function(e){var t=$(e.currentTarget).attr("pop-id"),n=$(e.currentTarget).attr("log-prefix"),o=$(e.currentTarget).val(),a=$("#"+t).data("workflowConfig"),i=D(t);"none"==o?(i.innerHTML=DOMPurify.sanitize(N(a),X),$("#"+t).find("#hvEmailTemplateSubject").val("")):M(a,Number(o),i),A(n,"Template Changed")})}function M(e,t,n){var o=F(t),a=o.content;a=a.replace("${Video Url}",N(e)),n.innerHTML=DOMPurify.sanitize(a,X),$("#"+e.popId).find("#hvEmailTemplateSubject").val(o.subject),y(e,n)}function y(e,t){var n=$("#"+e.popId).find("#"+e.popId+"EmailTemplateContent .ql-editor")[0].innerHTML,o=_(e.popId),a=e.assetContent.mfFormValues||{},i=!1;for(var r in a)n=n.replace(new RegExp("\\${"+r+"}","g"),a[r]),o=o.replace(new RegExp("\\${"+r+"}","g"),a[r]),i=!0;if(i){var p=DOMPurify.sanitize(n,X);t.innerHTML=p,$("#"+e.popId).find("#hvEmailTemplateSubject").val(o)}}function _(e){return $("#"+e).find(".hv-templates-container .hv-email-template-form").find("#hvEmailTemplateSubject").val()}function F(e){for(var t=0;t<Q.length;t++){var n=Q[t];if(e===n.id)return n}}function E(e,n){var o=t();o.fetchEmailTemplates=!0,o.messageFromContentScript1234=!0,o.msgType="workflow",o.logPrefix=n,o.popId=e,o.screenName=W.screenName,W.port.postMessage(o)}function x(e){var t=e.popConfig.defaultHtmlContent||"";t=t.includes("${Video Url}")?t.replace(new RegExp("\\${Video Url}","g"),N(e)):S(N(e),t),t=DOMPurify.sanitize(t,X);var n=e.popConfig.defaultContentSubject||"";return $("#"+e.popId).find(".hv-templates-container .hv-email-template-form").find("#hvEmailTemplateSubject").val(n),t}function S(e,t){var n=t.indexOf("hv-current-cursor");if(-1!=n){var o=t.indexOf(">",n+1),a=t.indexOf(">",o+1);return"<p>"+[t.slice(0,a+1),e,t.slice(a+1)].join("")+"</p>"}return"<p>"+e+t+"</p>"}function N(e){var t=P(e.assetContent),n=t.video;return'<a href="'+n+'" target="_blank"><img style="max-height: 200px; max-width: 360px;" alt="'+n+'" src="'+t.thumbnail+'"></a>'}function P(e){var t={};return!e.isPage&&e.customPageDetails?(t.video=e.customPageDetails.customerHost+"/page/"+e.customPageDetails.pageDeliveryToken+"?custom_asset_token="+e.deliveryToken+"&org_tok="+e.orgTok,t.thumbnail=e.customPageDetails.customerHost+"/page/thumbnail/"+e.customPageDetails.pageDeliveryToken+"?custom_asset_token="+e.deliveryToken+"&org_tok="+e.orgTok):e.isPage&&e.pageId?(t.video=e.customerHost+e.urlParam+e.deliveryToken+"?org_tok="+e.orgTok,t.thumbnail=e.customerHost+e.thumbnailParam+e.deliveryToken+"?org_tok="+e.orgTok):(t.video=e.customerHost+e.urlParam+e.deliveryToken,t.thumbnail=e.customerHost+e.thumbnailParam+e.deliveryToken),t.thumbnail+=t.thumbnail.includes("?")?"&is_play_time=true":"?is_play_time=true",t}function B(e){$("#"+e).find(".hv-wf-pop-footer .right-btn-container").find(".pop-btn-ele").hide(),$("#"+e).find(".hv-wf-pop-footer .hv-alert-msg-ele").hide()}function D(e){var t=e+"EmailTemplateContent";if(0==$("#"+t).length){$("#"+e).find(".hv-email-template-content").attr("id",e+"EmailTemplateContent");var n=Quill.import("parchment"),o=new n.Attributor.Class("custom","atwho",{scope:n.Scope.INLINE_BLOT,whitelist:["query","inserted"]});Quill.register(o,!0);var a=new Quill("#"+t,{theme:"snow",modules:{toolbar:G}});$(a.root).attr("spellcheck",!0)}return $("#"+t+" .ql-editor")[0]}function j(e){return e&&e.serviceName==W.serviceName&&e.tabId==W.tabId&&e.windowId==W.windowId}function V(e,n,o){var a=t();a.messageFromContentScript1234=!0,a.flashAlertInWorkflowPop=!0,a.msgType="workflow",a.popId=e,a.msg=n,a.alertType=o,W.port.postMessage(a)}function L(e,n){var o=t();o.messageFromContentScript1234=!0,o.popScreenSwitch=!0,o.screenName=n.targetScreen,o.mode=n.targetMode,o.popId=e,o.msgType="workflow",o.workflowConfig=$("#"+e).data("workflowConfig"),W.port.postMessage(o)}function O(e){var t=e.workflowConfig.assetContent||{};t.modes?t.modes.includes("templates")||t.modes.push("templates"):t.modes=["templates"];var n=e.workflowConfig.popId;$("#"+n).find(".hv-wf-pop-header .hv-pop-topbar-ele").removeClass("click-not-allowed").removeAttr("data-tooltip"),!e.disableCreate&&t.modes.includes("create")||$("#"+n).find(".hv-wf-pop-header .hv-create-video").addClass("click-not-allowed").attr("data-tooltip",z.createNotAllowed),t.modes.includes("edit")&&!t.isPage||$("#"+n).find(".hv-wf-pop-header .hv-edit-video").addClass("click-not-allowed").attr("data-tooltip",z.editDisableContent),t.modes.includes("templates")||$("#"+n).find(".hv-wf-pop-header .hv-templates").addClass("click-not-allowed").attr("data-tooltip",z.templateDisableContent),t.modes.includes("contacts")||$("#"+n).find(".hv-wf-pop-header .hv-contacts").addClass("click-not-allowed").attr("data-tooltip",z.contactDisableContent);var o=e.workflowConfig;o.assetContent=t,q(o)}function q(e){$("#"+e.popId).data("workflowConfig",e)}function A(e,n){var o=t();o.messageFromContentScript1234=!0,o.trackWorkflowActivity=!0,o.msgType="workflow",o.actionName=e+" "+n,W.port.postMessage(o)}function H(e,t,n){var o={};o.messageFromContentScript1234=!0,o.trackUserActivity=!0,o.actionName=e+" "+t,o.assetId=n,W.port.postMessage(o)}function R(e){var t=$("#"+e).data("workflowConfig");return t.popConfig&&t.popConfig.insertVideoText?t.popConfig.insertVideoText:z.insertVideo}var W=function(){var t={};return t.serviceName=e("hvIntegName"),t.windowId=Number(e("hvWindowId")),t.tabId=Number(e("hvTabId")),t.screenName="hv-templates",t.port=chrome.extension.connect({name:t.serviceName+"::"+t.windowId+"::"+t.tabId+"::"+t.screenName}),t}(),z={editDisableContent:chrome.i18n.getMessage("create_import_video_to_enable_edit"),templateDisableContent:chrome.i18n.getMessage("get_your_video_ready_to_enable_templates"),contactDisableContent:chrome.i18n.getMessage("complete_your_video_and_email_content_to_add_contacts"),createNotAllowed:chrome.i18n.getMessage("create_not_allowed_in_edit"),mailTemplates:chrome.i18n.getMessage("mail_templates"),subject:chrome.i18n.getMessage("subject"),content:chrome.i18n.getMessage("content"),none:chrome.i18n.getMessage("none"),finish:chrome.i18n.getMessage("insert_video"),continue:chrome.i18n.getMessage("continue"),replaceMfInContent:chrome.i18n.getMessage("merge_field_missing_in_content"),replaceMfInSubject:chrome.i18n.getMessage("merge_field_missing_in_subject"),mergeFieldsNote:chrome.i18n.getMessage("use_merge_fields_from_imported_sheet"),wentWrong:chrome.i18n.getMessage("something_went_wrong"),refreshPage:chrome.i18n.getMessage("reload_the_page"),refresh:chrome.i18n.getMessage("refresh_text"),mfFormDesc:chrome.i18n.getMessage("fill_in_the_placeholder_value"),save:chrome.i18n.getMessage("save_text"),cancel:chrome.i18n.getMessage("cancel_text"),saveLC:chrome.i18n.getMessage("save"),cancelLC:chrome.i18n.getMessage("cancel"),insertVideo:chrome.i18n.getMessage("insert_video"),editPlaceholder:chrome.i18n.getMessage("edit_placeholder_values"),editDisableContent:"Create or import a video to enable editing",templateDisableContent:"Get your video ready to enable Templates.",contactDisableContent:"Complete your video and email content to add contacts",createNotAllowed:"Create not allowed in edit mode",mailTemplates:"Email Templates",subject:"Subject",content:"Content",none:"None",finish:"INSERT VIDEO",continue:"CONTINUE",replaceMfInContent:"Values for ‘$merge_field’ are missing in Content. Please fill them.",replaceMfInSubject:"Values for ‘$merge_field’ are missing in Subject. Please fill them.",mergeFieldsNote:"Note: Type $ to use merge fields from imported sheet.",wentWrong:"Something went wrong! Please contact support@hippovideo.io",refreshPage:"We've released cool new updates. Please reload the page to view them.",refresh:"REFRESH",mfFormDesc:"Fill in the placeholder value here to personalize your email",save:"SAVE",cancel:"CANCEL",saveLC:"Save",cancelLC:"Cancel",insertVideo:"INSERT VIDEO",editPlaceholder:"EDIT PLACEHOLDER VALUES"},U={templatesContainer:'<div class="hv-pop-content-container hv-templates-container"></div>',templateForm:'<div class="hv-email-template-form"></div>',templateSelect:'<div class="template-form-ele template-select-container"><div class="ele-label">'+z.mailTemplates+'</div><div class="ele-val"><select class="hv-email-template-select" id="hvEmailTemplateSelect"></select></div></div>',templateSubject:'<div class="template-form-ele template-subject"><div class="ele-label">'+z.subject+'</div><div class="ele-val"><input autocomplete="off" placeholder="'+z.subject+'" id="hvEmailTemplateSubject"></div></div>',templateContent:'<div class="template-form-ele template-content"><div class="ele-label">'+z.content+'</div><div class="ele-val"><div class="hv-email-template-content"></div><span class="mf-note">'+z.mergeFieldsNote+"</span></div></div>",buttonEle:'<div class="pop-btn-ele"><span></span></div>',hvTemplateMfForm:'<div class="hv-template-mf-form"></div>',hvTemplateMfFormContent:'<div class="hv-template-mf-form-content"><div class="hv-template-mf-form-desc"></div><div class="hv-template-mf-form-input-container"></div><div class="hv-template-mf-form-footer"><div class="footer-save-btn" data-tooltip="Save" id="templateMfSaveBtn"><span>{insertText}</span></div><div class="footer-cancel-btn" data-tooltip="Cancel" id="templateMfCancelBtn"><span>'+z.cancelLC+"</span></div></div></div>",hvTemplateMfFormInputEle:'<div class="hv-template-mf-form-input-ele"><div class="input-label"></div><div class="input-ele"><input></input></div></div>',mfFormEditValueBtn:'<div class="mf-form-edit-placeholder" id="templateMfEditBtn">'+z.editPlaceholder+"</div>"},Q={},G=[[{font:[]}],[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],["blockquote","code-block"],[{align:[]}],["link"]],K={"ql-font-serif":{"font-family":"Georgia, Times New Roman, serif"},"ql-font-monospace":{"font-family":"Monaco, Courier New, monospace"},"ql-size-small":{"font-size":"12px"},"ql-size-large":{"font-size":"24px"},"ql-size-huge":{"font-size":"40px"},"ql-align-center":{"text-align":"center"},"ql-align-right":{"text-align":"right"},"ql-align-justify":{"text-align":"justify"},"ql-syntax":{"background-color":"#23241f",color:"#f8f8f2",overflow:"visible"}},J={BLOCKQUOTE:{"border-left":"4px solid #ccc","margin-bottom":"5px","margin-top":"5px","padding-left":"16px"},PRE:{"white-space":"pre-wrap","margin-bottom":"5px","margin-top":"5px",padding:"5px 10px","border-radius":"3px"}},X={ALLOWED_TAGS:["iframe","input","form","p","a","h1","h2","h3","h4","h5","h6","div","select","option","html","body","head","style","span","b","i","u","br","label","strong","em","pre","blockquote","img"],ADD_ATTR:["target"]},Y=["Email","First Name","Last Name","Country","City","Phone Number","Company Name","Title","State","Address"];W.port.onMessage.addListener(function(e,t,o){if(e){var a=e.backgroundRecordingMessage,i=e.data||{};if(j(i)&&("handleTopMenuClick"==a&&i.menuClickMetadata.previousSelection==W.screenName&&L(i.popId,i.menuClickMetadata),"popScreenSwitch"==a&&i.screenName==W.screenName&&(O(i),n(i)),"fetchEmailTemplatesResponse"==a&&(i.status&&i.response.status?k(i):V(i.popId,z.wentWrong,"error")),"fetchMergeFieldsResponse"==a&&i.screenName==W.screenName)){var r=i.workflowConfig;$("#"+r.popId).find(".hv-wf-pop-body .hv-wf-pop-loading").fadeOut(10),i.status?(r.assetContent.mfInVideo=i.response.merge_fields||[],q(r),$("#"+r.popId).find("#templateFinishBtn").click()):V(r.popId,z.wentWrong,"error")}}})}));
function APIClient(){}var local="cijidiollmnkegoghpfobabpecdkeiah"!==chrome.runtime.id,API_ENDPOINT=local?"http://localhost:3000":"https://www.hippovideo.io";APIClient.updateAuthorState=function(e,t){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(i){var o,n;i.wizDigest&&i.wizDigest.length>0?(o={token:i.wizDigest,state:t},n=API_ENDPOINT+"/video/guest/"+e+"/update_state.json"):(o={authentication_token:i.wizAuthToken,email:encodeURIComponent(i.wizUserEmail),state:t},n=API_ENDPOINT+"/video/"+e+"/update_state.json"),$.ajax({url:n,method:"POST",data:o,success:function(e){},error:function(e){console.error("error setting author state",{response:e})}})})},APIClient.updateActivityLogs=function(e,t){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(i){var o;o=i.wizDigest&&i.wizDigest.length>0?API_ENDPOINT+"/video/guest/"+e+"/activity/"+t+"?token="+i.wizDigest:API_ENDPOINT+"/video/"+e+"/activity/"+t+"?authentication_token="+i.wizAuthToken+"&email="+encodeURIComponent(i.wizUserEmail),$.ajax({url:o,method:"GET",success:function(e){},error:function(e){console.error("error sending updateActivityLogs request",e.statusText)}})})},APIClient.logData=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(o){var n,a;o.wizDigest&&o.wizDigest.length>0?(n={token:o.wizDigest,description:t,stack_trace:chrome.runtime.getManifest().version+": "+i},a=API_ENDPOINT+"/video/guest/"+e+"/client_error"):(n={authentication_token:o.wizAuthToken,email:encodeURIComponent(o.wizUserEmail),description:t,stack_trace:chrome.runtime.getManifest().version+": "+i},a=API_ENDPOINT+"/video/"+e+"/client_error"),$.ajax({url:a,method:"POST",data:n,success:function(e){},error:function(e){console.error("error sending updateActivityLogs request",e.statusText)}})})},APIClient.logClientData=function(e,t){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(i){var o,n;i.wizDigest&&i.wizDigest.length>0?(o={token:i.wizDigest,data:e},n=API_ENDPOINT+"/video/guest/client_logs"):(o={authentication_token:i.wizAuthToken,email:encodeURIComponent(i.wizUserEmail),data:e},n=API_ENDPOINT+"/video/client_logs"),$.ajax({url:n,method:"POST",data:o,success:function(e){t&&t(e)},error:function(e){console.error("error sending logs request",e.statusText)}})})},APIClient.setErrorActivity=function(e,t,i){var o=t.code;chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(n){var a;a=n.wizDigest&&n.wizDigest.length>0?API_ENDPOINT+"/video/guest/"+e+"/erroractivity/"+o+"?token="+n.wizDigest+"&message="+encodeURI(t.message):API_ENDPOINT+"/video/"+e+"/erroractivity/"+o+"?authentication_token="+n.wizAuthToken+"&email="+encodeURIComponent(n.wizUserEmail)+"&message="+encodeURI(t.message),$.ajax({url:a,method:"GET",cache:!1,contentType:!1,processData:!1,success:function(t){i&&i(e,t)},error:function(o){i&&i(e,o),setErrorActivityAfterReload(e,t),console.error("error sending updateActivityLogs request",o.statusText)}})})},APIClient.sendWebhookEvent=function(e,t){t.type=e,$.ajax({url:API_ENDPOINT+"/api/webhook/push_event",method:"POST",data:t,success:function(){},error:function(e){console.error("error sending webhook event",e.statusText)}})},APIClient.createRecording=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(o){var n,a;o.wizDigest&&o.wizDigest.length>0?(n={token:o.wizDigest},a=API_ENDPOINT+"/video/guest"):(n={authentication_token:o.wizAuthToken,email:encodeURIComponent(o.wizUserEmail)},a=API_ENDPOINT+"/video"),n.recordConfiguration=JSON.stringify(e),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)&&(n.rtt=navigator.connection.rtt),$.ajax({url:a,method:"POST",data:n,success:function(e){t(e),console.log("create video response ::::: "+JSON.stringify(e))},error:function(e){i(e),console.error("error sending updateActivityLogs request",e.statusText),console.error("error = "+JSON.stringify(e))}})})},APIClient.submitWidgetRecording=function(e,t,i,o){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(t){var n,a;t.wizDigest&&t.wizDigest.length>0?(n={id:e,token:t.wizDigest},a=API_ENDPOINT+"/video/rapi/guest/submit"):(n={id:e,authentication_token:t.wizAuthToken,email:encodeURIComponent(t.wizUserEmail)},a=API_ENDPOINT+"/video/rapi/submit"),$.ajax({url:a,method:"POST",data:n,success:function(e){i&&i(e)},error:function(e){o&&o(e)}})})},APIClient.compressVideos=function(e,t,i,o,n,a,r){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(s){var c,u;s.wizDigest&&s.wizDigest.length>0?(c={token:s.wizDigest},u=API_ENDPOINT+"/video/guest/"+t+"/compress"):(c={authentication_token:s.wizAuthToken,email:encodeURIComponent(s.wizUserEmail)},u=API_ENDPOINT+"/video/"+t+"/compress"),i&&(c.webcamid=i),o&&(c.screenid=o),c.recordConfiguration=e,c.generate_gif_preview=n,$.ajax({url:u,method:"POST",data:c,success:function(e){a(e)},error:function(e){r(e),console.error("error sending updateActivityLogs request",e.statusText),console.error("error = "+JSON.stringify(e))}})})},APIClient.statusOf=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(o){var n;n=o.wizDigest&&o.wizDigest.length>0?API_ENDPOINT+"/operation_status/guest/status_of?id="+e+"&token="+o.wizDigest:API_ENDPOINT+"/operation_status/status_of?id="+e+"&authentication_token="+o.wizAuthToken+"&email="+encodeURIComponent(o.wizUserEmail),$.ajax({url:n,method:"GET",cache:!1,contentType:!1,processData:!1,success:function(e){t(e)},error:function(e){console.error("error sending updateActivityLogs request",e.statusText),i(e)}})})},APIClient.mergeAndRender=function(e,t,i,o){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(n){var a,r;n.wizDigest&&n.wizDigest.length>0?(a={token:n.wizDigest},r=API_ENDPOINT+"/video/guest/"+e+"/render_video"):(a={authentication_token:n.wizAuthToken,email:encodeURIComponent(n.wizUserEmail)},r=API_ENDPOINT+"/video/"+e+"/render_video"),a.asset_id=e,a.data=JSON.stringify(t),$.ajax({url:r,method:"POST",data:a,success:function(e){i(e)},error:function(e){console.error("error sending updateActivityLogs request",e.statusText),o(e)}})})},APIClient.getFederatedAwsToken=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(o){var n,a;o.wizDigest&&o.wizDigest.length>0?(n={token:o.wizDigest,region:e},a=API_ENDPOINT+"/video/guest/get_federated_aws_token"):(n={authentication_token:o.wizAuthToken,email:encodeURIComponent(o.wizUserEmail),region:e},a=API_ENDPOINT+"/api/user/get_federated_aws_token"),$.ajax({url:a,method:"POST",data:n,success:function(e){t(e)},error:function(e){console.error("error sending updateActivityLogs request",e.statusText),i(e)}})})},APIClient.trackHighlightsActions=function(e,t,i,o){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(n){var a,r;console.log("object.wizDigest",n),n.wizDigest&&n.wizDigest.length>0?(a={token:n.wizDigest},r=API_ENDPOINT+"/video/guest/track_actions"):(a={authentication_token:n.wizAuthToken,email:encodeURIComponent(n.wizUserEmail)},r=API_ENDPOINT+"/user/track_actions"),"action"==e?a.action_name=t:"highlight"==e&&(a.action_names=t),$.ajax({url:r,method:"POST",data:a,success:function(e){i&&i(e)},error:function(e){console.error("error sending updateActivityLogs request",e.statusText),o&&o(e)}})})},APIClient.trackFaqAction=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(o){var n,a;console.log("object.wizDigest",o),o.wizDigest&&o.wizDigest.length>0?(n={token:o.wizDigest,action_name:e},a=API_ENDPOINT+"/video/guest/track_faq_action"):(n={authentication_token:o.wizAuthToken,email:encodeURIComponent(o.wizUserEmail),action_name:e},a=API_ENDPOINT+"/user/track_faq_action"),$.ajax({url:a,method:"POST",data:n,success:function(e){t&&t(e)},error:function(e){console.error("error sending updateActivityLogs request",e.statusText),i&&i(e)}})})},APIClient.trackDynamicIntegAction=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(o){var n;console.log("object.wizDigest",o),n=void 0==o.wizUserEmail?{action_name:e}:{email:encodeURIComponent(o.wizUserEmail),action_name:e};var a=API_ENDPOINT+"/user/track_dynamic_integ_action";$.ajax({url:a,method:"POST",data:n,success:function(e){t&&t(e)},error:function(e){console.error("dynamic_integ error sending updateActivityLogs request",e.statusText),i&&i(e)}})})},APIClient.isUserSignedIn=function(e,t){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(i){if(console.log("Getting from storage >>>>>>>>>>>>> ",i),void 0==i.wizUserEmail||void 0==i.wizAuthToken)t();else{var o={authentication_token:i.wizAuthToken,email:encodeURIComponent(i.wizUserEmail)};$.ajax({url:API_ENDPOINT+"/api/user/token_valid.json",method:"POST",data:o,success:e,error:t})}})},APIClient.googleSignup=function(e,t,i,o){var n={email:e,refresh_token:t,time_zone:Intl.DateTimeFormat().resolvedOptions().timeZone};$.ajax({url:API_ENDPOINT+"/api/chrome_signup.json",method:"POST",data:n,success:i,error:o})},APIClient.updateRegistrationToken=function(e,t,i){$.ajax({url:e.url,method:"post",data:e.data,success:function(e){0==e.code&&chrome.storage.local.set({token_update:!0})},error:function(e){}})},APIClient.signout=function(e,t){$.ajax({url:API_ENDPOINT+"/api/sign_out",method:"GET",success:e,error:t})},APIClient.getGuestLink=function(e,t){console.log("URL :: ",API_ENDPOINT+"/api/user/guest_link"),$.ajax({url:API_ENDPOINT+"/api/user/guest_link",method:"POST",success:e,error:t})},APIClient.fetchVideos=function(e,t,i,o,n,a,r,s){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(c){if(void 0==c.wizUserEmail||void 0==c.wizAuthToken)s();else{var u;u=e?{authentication_token:c.wizAuthToken,email:encodeURIComponent(c.wizUserEmail),video_fetch_type:"all",category_id:i,fetch_categories:o,offset:t,limit:20,library_type:n,video_only:a}:{authentication_token:c.wizAuthToken,email:encodeURIComponent(c.wizUserEmail),category_id:i,fetch_categories:o,offset:t,limit:20,library_type:n,video_only:a},$.ajax({url:API_ENDPOINT+"/api/video/recent_videos.json",method:"POST",data:u,success:r,error:s})}})},APIClient.fetchSearchVideos=function(e,t,i,o,n,a){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(r){if(void 0==r.wizUserEmail||void 0==r.wizAuthToken)a();else{var s={email:encodeURIComponent(r.wizUserEmail),authentication_token:r.wizAuthToken,search_token:e,offset:t,type:1,cat_id:i,library_type:o,video_only:!0};$.ajax({url:API_ENDPOINT+"/api/video/search_videos.json",data:s,method:"POST",success:n,error:a})}})},APIClient.fetchVideoCategories=function(e,t){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(i){if(void 0==i.wizUserEmail||void 0==i.wizAuthToken)t();else{var o={email:encodeURIComponent(i.wizUserEmail),authentication_token:i.wizAuthToken};$.ajax({url:API_ENDPOINT+"/video_category",data:o,method:"GET",success:e,error:t})}})},APIClient.getFirehoseFederateToken=function(e){$.ajax({url:API_ENDPOINT+"/api/internal/log/identity",method:"GET",data:null,success:e,error:e,async:!0})},APIClient.searchVideoLibrary=function(e,t,i,o,n){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(a){if(void 0==a.wizUserEmail||void 0==a.wizAuthToken)n();else{var r,s="all"==i?"allVideos":"myVideos";r={authentication_token:a.wizAuthToken,email:encodeURIComponent(a.wizUserEmail),search_token:e,type:1,from:s,cat_id:t},$.ajax({url:API_ENDPOINT+"/api/video/search_videos.json",method:"POST",data:r,success:o,error:n})}})},APIClient.updateUploadRate=function(e){chrome.storage.sync.get(["wizUserEmail","wizAuthToken","wizDigest"],function(t){var i;t.wizDigest&&t.wizDigest.length>0?(e.token=t.wizDigest,i=API_ENDPOINT+"/video/guest/update_upload_rate.json"):i=API_ENDPOINT+"/video/update_upload_rate.json",$.ajax({url:i,method:"POST",data:e})})},APIClient.getUTMToken=function(e,t,i,o,n){var a=i||{};a.from="extension";var r=API_ENDPOINT+"/video/utm/"+t+"/"+e;$.ajax({url:r,method:"GET",data:a,success:o,error:n})},APIClient.getLeadData=function(e,t,i,o,n){var a=i||{};a.from="extension";var r=API_ENDPOINT+"/api/salesforce/"+t+"/"+e;$.ajax({url:r,method:"GET",data:a,success:o,error:n})},APIClient.updateUTMParams=function(e,t,i,o,n){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(a){if(a.wizUserEmail&&a.wizUserEmail.length>0&&a.wizAuthToken&&a.wizAuthToken.length>0){var r=API_ENDPOINT+"/video/utm/"+e+"/"+t;$.ajax({url:r,method:"POST",data:i,success:o,error:n})}})},APIClient.getNotificationBatchCount=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n=e||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/notifications/batch_count";$.ajax({url:a,method:"GET",data:n,success:t,error:i})}else{t({status:"error",user_signed_in:!1})}})},APIClient.fetchNotifications=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n=e||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/notifications/show";$.ajax({url:a,method:"GET",data:n,success:t,error:i})}else{t({status:"error",user_signed_in:!1})}})},APIClient.markReadNotifications=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n=e||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/notifications/mark_read";$.ajax({url:a,method:"GET",data:n,success:t,error:i})}else{t({status:"error",user_signed_in:!1})}})},APIClient.fechVideoDetails=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n={email:o.wizUserEmail,authentication_token:o.wizAuthToken};$.ajax({method:"GET",url:API_ENDPOINT+"/video/get_video_meta/"+e,data:n,success:t,error:i})}})},APIClient.requestServer=function(e,t,i,o){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(n){if(!(n.wizUserEmail&&n.wizUserEmail.length>0&&n.wizAuthToken&&n.wizAuthToken.length>0))return i({not_signed_in:!0});var a=t||{};a.email=n.wizUserEmail,a.authentication_token=n.wizAuthToken;var r={data:a,success:i,error:o},s=URL_INFO[e];r.method=s.method,r.url=API_ENDPOINT+s.url,$.ajax(r)})},APIClient.fetchTeleprompterData=function(e,t){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(i){if(!(i.wizUserEmail&&i.wizUserEmail.length>0&&i.wizAuthToken&&i.wizAuthToken.length>0))return e({not_signed_in:!0});var o=API_ENDPOINT+"/video_scripts/";$.ajax({url:o,method:"GET",data:{to_prompt:!0,nsud:!0},success:e,error:t})})},APIClient.fetchReportData=function(e,t,i,o,n){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(a){if(!(a.wizUserEmail&&a.wizUserEmail.length>0&&a.wizAuthToken&&a.wizAuthToken.length>0))return o({not_signed_in:!0});var r=i;r.email=a.wizUserEmail,r.authentication_token=a.wizAuthToken,r.from="extension";var s=API_ENDPOINT+"/integ/dynamic/reports/"+e+"/"+t;$.ajax({url:s,method:"GET",data:r,success:o,error:n})})},APIClient.fetchContactId=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(!(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0))return t({not_signed_in:!0});var n=e||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken,n.from="extension";var a=API_ENDPOINT+"/people/info";$.ajax({url:a,method:"POST",data:n,success:t,error:i})})},APIClient.fetchActivityData=function(e,t,i,o){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(n){if(!(n.wizUserEmail&&n.wizUserEmail.length>0&&n.wizAuthToken&&n.wizAuthToken.length>0))return i({not_signed_in:!0});var a=t||{};a.email=n.wizUserEmail,a.authentication_token=n.wizAuthToken,a.from="extension";var r=API_ENDPOINT+"/people/activity/"+e;$.ajax({url:r,method:"GET",data:a,success:i,error:o})})},APIClient.getSalesforceLeadData=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(!(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0))return t({not_signed_in:!0});var n=e||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken,n.from="extension";var a=API_ENDPOINT+"/api/salesforce/fetch_email";$.ajax({url:a,method:"POST",data:n,success:t,error:i})})},APIClient.checkHubspotOnboardingStatus=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(!(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0))return t({not_signed_in:!0});var n=e||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken,n.from="extension";var a=API_ENDPOINT+"/hubspot/check_onboarding_status";$.ajax({url:a,method:"POST",data:n,success:t,error:i})})},APIClient.fetchVideosExtnVBG=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n={};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/video/get_all_videos/?offset=0&categoryId="+e.categoryId+"&image_only="+e.imageOnly+"&video_only="+e.videoOnly+"&filter_by_tag_ids="+e.filterByTags;$.ajax({url:a,method:"GET",data:n,success:t,error:i})}})},APIClient.getMaskedImagesApiExtnVBG=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n={};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/video/virtualbg/get_masked_images?asset_id="+e.assetId;$.ajax({url:a,method:"POST",data:n,success:t,error:i})}})},APIClient.applyVirtualBgExtnVBG=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n=JSON.stringify(e)||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/video/virtualbg/apply";$.ajax({url:a,method:"POST",data:n,success:t,error:i})}})},APIClient.revertVirtualBgExtnVBG=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n=JSON.stringify(e)||{};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/video/virtualbg/revert";$.ajax({url:a,method:"POST",data:n,success:t,error:i})}})},APIClient.searchLibraryExtnVBG=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n=new FormData;n.append("search_token",e.formdata.search_token),n.append("email",o.wizUserEmail),n.append("authentication_token",o.wizAuthToken),e.formdata.cat_id&&n.append("cat_id",e.formdata.cat_id);var a=API_ENDPOINT+"/video/"+e.paramData.from+"/"+e.paramData.searchType+"/search_videos";$.ajax({url:a,method:"POST",data:n,processData:!1,contentType:!1,success:t,error:i})}})},APIClient.statusPollerExtnVBG=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n={};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/operation_status/status_of?asset_id="+e.assetId+"&operation_type="+e.operationType;$.ajax({url:a,method:"GET",data:n,success:t,error:i})}})},APIClient.getManageTagsApiExtnVBG=function(e,t,i){chrome.storage.sync.get(["wizUserEmail","wizAuthToken"],function(o){if(o.wizUserEmail&&o.wizUserEmail.length>0&&o.wizAuthToken&&o.wizAuthToken.length>0){var n={limit:e.limit,offset:e.offset,orderBy:e.orderBy,sort_order:e.sortOrder,search_term:e.searchTerm};n.email=o.wizUserEmail,n.authentication_token=o.wizAuthToken;var a=API_ENDPOINT+"/api/video/tags";$.ajax({url:a,method:"GET",headers:{"Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"},data:n,success:t,error:i})}})};var URL_INFO={configureGDriveApp:{url:"/google_api/drive/configure",method:"POST"},getGDriveAccounts:{url:"/media/gdrive/accounts",method:"GET"},listDriveFiles:{url:"/media/gdrive/list",method:"GET"},parseGoogleSheet:{url:"/google_api/gmail/parse_spreadsheet",method:"GET"},fetchGmailAccounts:{url:"/google_api/gmail/accounts",method:"GET"},configureGmailApp:{url:"/google_api/gmail/configure",method:"POST"},sendMail:{url:"/google_api/gmail/send",method:"POST"},saveMailMetaData:{url:"/utm/gmail/save_metadata",method:"POST"},gmailReports:{url:"/utm/gmail/reports",method:"GET"},briefGmailReports:{url:"/utm/gmail/brief_report",method:"GET"},campaignsList:{url:"/campaigns/list",method:"GET"},campaignSpecificReport:{url:"/campaigns/brief_report",method:"GET"},GmailIconSettings:{url:"/integration/gmail/change_icon_settings",method:"POST"},campaignMailIds:{url:"/campaigns/get_mail_ids",method:"GET"},fetchEmailTemplates:{url:"/org_email_template/index/campaigns_templates",method:"GET"},fetchGContactAccounts:{url:"/media/google/accounts",method:"GET"},configureGContact:{url:"/google_api/contacts/configure",method:"POST"},fetchGoogleContacts:{url:"/google_api/gmail/parse_contacts",method:"POST"},getMergeFields:{url:"/personalization/merge_fields",method:"GET"},fetchPages:{url:"/api/video_page/pages",method:"GET"},fetchPageComponentData:{url:"/api/video_page/pages",method:"GET"},setDefaultPageAPI:{url:"/api/video_page/set_default",method:"POST"},fetchThumbnails:{url:"/video/thumbnail",method:"GET"},switchThumbnail:{url:"/video/thumbnail/switch",method:"POST"},fetchShortenUrl:{url:"/api/shorten_url",method:"POST"}};
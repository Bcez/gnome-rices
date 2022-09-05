"use strict";function init(){$(".tab1 span.button").off("click").click(function(){window.close()}),$(".tab1 div.imageInputWrapper").off("click").click(function(t){showCallInList(1),clickOnce(),t.stopPropagation()}),$(".tab1 .callinlist-div ").undelegate("li","click").delegate("li","click",function(t){var a=$(this).attr("data-name");switchCallInCountry(a),showCallInList(0),saveCallInCountry(a),t.stopPropagation()}),$(".tab2 .button").off("click").click(function(){if($(this).hasClass("enabled"))try{chrome.runtime.sendMessage({message:"joinAudio_fromWin"},function(t){window.close()})}catch(t){_jsCrash.push(t)}else $(this).hasClass("leave")&&mainAppHtmlWindow.inmeeting.leaveAudio()}),$(".tab2 .closebtn").off("click").click(function(){window.close()}),$(".tab2 #alwaysUseVoIPWhenJoin").off("click").click(function(){setAlwaysUseVoIPWhenJoin()}),$(".tab2 .checkbox").undelegate("input","click").delegate("input","click",function(t){"audio"==$(this).attr("data-name")?setConnectOption():"video"==$(this).attr("data-name")&&setVideoOption()}),$("ul.joinAudioTab li").off("click").click(function(){var t=$(this).attr("data-name");switchTab(t),saveSelectdJoinAudioTab(t)}),$(".tab3 .imageInputWrapper input").off("focus").focus(function(){$(".tab3 .imageInputWrapper").addClass("focused")}),$(".tab3 .imageInputWrapper input").off("blur").blur(function(){$(".tab3 .imageInputWrapper").removeClass("focused")}),$(".tab3 #calloutnumber").unbind("input propertychange").bind("input propertychange",function(){0<util.trim(this.value).length?$("#calloutbtn").addClass("enabled"):$("#calloutbtn").removeClass("enabled")}),$(".tab3 #calloutbtn").off("click").click(function(t){if($(this).hasClass("enabled")){var a=$("#calloutnumber").val(),i=$(".tab3 .imageInputWrapper .countrycode-span").text();mainAppHtmlWindow.inmeeting.startCallOut(i,a),saveCallOutNumber(a)}else $(this).hasClass("calling")&&mainAppHtmlWindow.inmeeting.hangUp()}),$(".tab3 div.countrycode-div").off("click").click(function(t){showCallOutList(1),clickOnce(),t.stopPropagation()}),$(".tab3 .calloutlist-div ").undelegate("li","click").delegate("li","click",function(t){var a=$(this).attr("data-name");switchCallOutCountry(a),showCallOutList(0),saveCallOutCountry(a),t.stopPropagation()}),$(".tab3 #remembercallout").off("click").click(function(){saveRememberCallOut($("#remembercallout").prop("checked"))}),setAutoConnectAudioStatus()}function setAutoConnectAudioStatus(){var t=mainAppHtmlWindow.userSettings.getAppSetting(mainAppHtmlWindow.userSettings.ALWAYS_USE_VOIP_WHEN_JOIN);$("#alwaysUseVoIPWhenJoin").prop("checked",t)}function bindCallListA11y(){$(".tab3 div.countrycode-div").unbind("keydown").keydown(function(t){var a=t.key;"ArrowUp"===a&&$(".tab3 .calloutlist-div li:last").focus(),"ArrowDown"===a&&$(".tab3 .calloutlist-div li:first").focus(),"Tab"===a&&showCallOutList(0),$(".tab3 .calloutlist-div #calloutnumber").focus(),"Enter"===a&&this.click()}),$(".tab3 .calloutlist-div li").unbind("keydown").keydown(function(t){var a=t.key;t.stopPropagation(),"ArrowUp"===a&&$(this).prev().focus()&&t.preventDefault(),"ArrowDown"===a&&$(this).next().focus()&&t.preventDefault(),"Tab"===a&&showCallOutList(0),"Enter"===a&&this.click()}),$(".tab1 .imageInputWrapper").unbind("keydown").keydown(function(t){var a=t.key;t.stopPropagation(),"ArrowUp"===a&&$(".tab1 .callinlist-div li:last").focus(),"ArrowDown"===a&&$(".tab1 .callinlist-div li:first").focus(),"Tab"===a&&showCallInList(0),"Enter"===a&&this.click()}),$(".tab1 .callinlist-ul li").unbind("keydown").keydown(function(t){var a=t.key;t.stopPropagation(),"ArrowUp"===a&&$(this).prev().focus()&&t.preventDefault(),"ArrowDown"===a&&$(this).next().focus()&&t.preventDefault(),"Tab"===a&&showCallInList(0),"Enter"===a&&this.click()})}function resizeJoinAudioWindow(){window.resizeTo(document.documentElement.offsetWidth,$(".mainContent").height()+30),mainAppHtmlWindow.winMgr.getWinByWinId("joinAudioWindow").show()}function switchTab(t){var a=$('.joinAudioTab li[data-name="'+t+'"]');$("ul.joinAudioTab li").removeClass("selected"),$(".tab_content").hide();var i=a.find("span").attr("data-url");$(i).show(),resizeJoinAudioWindow(),a.addClass("selected")}function clickOnce(){$("body").one("click",function(){showCallInList(0),showCallOutList(0)})}function renderTspItem(t){return['<div class="row">','<div class="col-xs-5 text-right">',t.key,":","</div>",'<div class="col-xs-7 text-left">',"<span>",t.value,"</span>","</div>","</div>"].join("")}function renderTspContent(t){t=t||[];for(var a=$(".tspContentDiv").empty(),i=0;i<t.length;i++)a.append(renderTspItem(t[i]))}function initJoinAudioWindow(){init(),refrshTabUI(),showBindPhoneInfo(),mainAppHtmlWindow.callInInfoObject.isTspEnabled?($(".tspContentDiv").show(),renderTspContent(mainAppHtmlWindow.callInInfoObject.tspInfo)):($(".meetingid-participantid").show(),$(".meetingid").text(util.addSpace(mainAppHtmlWindow.g.getMeetingStatusObj().meetingNo)),$(".participantid").text(mainAppHtmlWindow.myStatusObject.participantID),mainAppHtmlWindow.callInInfoObject.isPSTNPassWordOn&&($(".tab1 .pstn-password").text(mainAppHtmlWindow.callInInfoObject.PSTNPassWord),$(".tab1 .pstn").removeClass("hideMe"))),mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallMe&&(initCallOutInfoList(),null==mainAppHtmlWindow.localStorage.callOutCountryId?switchCallOutCountry(mainAppHtmlWindow.callOutInfoObject.defaultCallOutCountryCodeID):switchCallOutCountry(mainAppHtmlWindow.localStorage.callOutCountryId),null!=mainAppHtmlWindow.localStorage.callOutNumber&&($("#calloutnumber").val(mainAppHtmlWindow.localStorage.callOutNumber),$("#calloutbtn").addClass("enabled")),null!=mainAppHtmlWindow.localStorage.rememberCallOut&&$("#remembercallout").prop("checked",mainAppHtmlWindow.localStorage.rememberCallOut)),mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallIn&&(null==mainAppHtmlWindow.localStorage.callInCountryId?switchCallInCountry(mainAppHtmlWindow.callInInfoObject.defaultCallInCountryCodeID):switchCallInCountry(mainAppHtmlWindow.localStorage.callInCountryId),initCallInInfoList());mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallMe,mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallIn,mainAppHtmlWindow.g.getMeetingStatusObj().isSupportVoip;var t=mainAppHtmlWindow.localStorage.selectedJoinAudioTabName;null!=t?"tab3"==t&&0==mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallMe?mainAppHtmlWindow.g.getMeetingStatusObj().isSupportVoip?switchTab("tab2"):switchTab("tab1"):switchTab(t):mainAppHtmlWindow.g.getMeetingStatusObj().isSupportVoip?switchTab("tab2"):mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallIn&&switchTab("tab1"),null!=mainAppHtmlWindow.localStorage.audioStatus&&showConnectedUI(mainAppHtmlWindow.localStorage.audioStatus),a11y(),bindCallListA11y()}function refrshTabUI(){var t=mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallMe+mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallIn+mainAppHtmlWindow.g.getMeetingStatusObj().isSupportVoip;1==t?$("div.tabs").addClass("forceHide"):2==t?(0==mainAppHtmlWindow.g.getMeetingStatusObj().isSupportCallMe?$('.joinAudioTab li[data-name="tab3"]').addClass("forceHide"):0==mainAppHtmlWindow.g.getMeetingStatusObj().isSupportVoip?$('.joinAudioTab li[data-name="tab2"]').addClass("forceHide"):$('.joinAudioTab li[data-name="tab1"]').addClass("forceHide"),$(".joinAudioTab li").css("width","285px")):3==t||0==t&&mainAppHtmlWindow.g.getMeetingStatusObj().isOtherTeleOn&&($("div.third-party .content").text(mainAppHtmlWindow.g.getMeetingStatusObj().otherTeleInfo),$("div.tabs").addClass("forceHide"),$("div.tab_container").addClass("forceHide"),$("div.third-party").removeClass("forceHide"),resizeJoinAudioWindow())}function showConnectedUI(t){"callin"==t?($('.joinAudioTab li[data-name="tab1"] span').text("Join by Phone - Connected"),$(".tab3 .form").addClass("forceHide"),$(".tab3 .div1 .callout-status").text("Your audio is connected using Dial In.").removeClass("visibility-hidden").addClass("green"),$("#calloutbtn").removeClass("enabled"),$(".tab2 .div1 span.button").removeClass("enabled").text("Disconnected")):"callout"==t?($('.joinAudioTab li[data-name="tab3"] span').text("Call Me - Connected"),$(".tab3 .div1 .callout-status").text("Phone Connected").removeClass("visibility-hidden").addClass("green"),$(".tab2 .div1 span.button").removeClass("enabled").text("Disconnected"),showCallOutInfo()):"none"==t?($('.joinAudioTab li[data-name="tab1"] span').text("Join by Phone"),$('.joinAudioTab li[data-name="tab2"] span').text("Join by Computer"),$('.joinAudioTab li[data-name="tab3"] span').text("Call Me"),$(".tab3 .div1 .callout-status").text("").addClass("visibility-hidden").removeClass("green"),$(".tab3 .form").removeClass("forceHide"),0<util.trim($("#calloutnumber").val())&&$("#calloutbtn").addClass("enabled"),$(".tab2 .div1 span.button").removeClass("leave").addClass("enabled").text("Join Audio by Computer")):"voip"==t&&($('.joinAudioTab li[data-name="tab1"] span').text("Join by Phone"),$('.joinAudioTab li[data-name="tab2"] span').text("Computer Audio - Connected"),$('.joinAudioTab li[data-name="tab3"] span').text("Call Me"),$(".tab2 .div1 span.button").removeClass("enabled").addClass("leave").text("Leave Computer Audio"),$(".tab3 .div1 .callout-status").text("Your audio is connected using Computer Audio").removeClass("visibility-hidden").addClass("green"))}function showBindPhoneInfo(){0<mainAppHtmlWindow.telephoneUserNum&&("AUDIO_VOIP"==mainAppHtmlWindow.myStatusObject.audioType?$(".bind-phone").removeClass("visibility-hidden"):"AUDIO_NONE"==mainAppHtmlWindow.myStatusObject.audioType&&($(".tab1 .bind-phone").removeClass("visibility-hidden"),$(".tab2 .bind-phone").addClass("visibility-hidden"),$(".tab2 .closebtn").removeClass("forceHide")))}function initCallInInfoList(){$(".countrylist-ul").empty();for(var t=mainAppHtmlWindow.callInInfoObject.callInInfoList,a=0;a<t.length;a++){var i=t[a],l='<li tabindex="2" class="callinlist-li " data-name="'+i.id+'"><span class="img-flags country-'+i.id+'"></span><span class="country-name">'+i.name+"</span></li>";$(".callinlist-ul").append(l)}}function initCallOutInfoList(){$(".countrylist-ul").empty();for(var t=mainAppHtmlWindow.callOutInfoObject.callOutInfoList,a=0;a<t.length;a++){var i=t[a],l='<li tabindex="2" aria-label="'+i.name+'" class="calloutlist-li " data-name="'+i.id+'"><span class="left"><span class="img-flags country-'+i.id+'"></span><span class="country-name">'+i.name+'</span></span><span class="text right">'+i.code+"</span></li>";$(".calloutlist-ul").append(l)}}function showCallInList(t){if(t){var a=30*$(".tab1 .callinlist-li.selected").prevAll().length;$(".tab1 .callinlist-div").removeClass("hideMe"),$(".tab1 span.country-flag").parent().attr("aria-haspopup",!0),$(".tab1 .callinlist-ul").scrollTop(a)}else $(".tab1 .callinlist-div").addClass("hideMe"),$(".tab1 span.country-flag").parent().attr("aria-haspopup",!1)}function showCallOutList(t){if(t){var a=30*$(".tab3 .calloutlist-li.selected").prevAll().length;$(".tab3 .calloutlist-div").removeClass("hideMe"),$(".tab3 .countrycode-div").attr("aria-haspopup",!0),$(".tab3 .calloutlist-ul").scrollTop(a)}else $(".tab3 .calloutlist-div").addClass("hideMe"),$(".tab3 .countrycode-div").attr("aria-haspopup",!1)}function switchCallInCountry(t){var a=t,i=getCallInObject(t);null==i&&null==(i=getCallInObject(a=mainAppHtmlWindow.callInInfoObject.defaultCallInCountryCodeID))&&(i=getCallInObject(a=mainAppHtmlWindow.callInInfoObject.callInInfoList[0].id));for(var l=i.displaynumber.split(";"),n=0,e=0,o="",s="",d=0;d<l.length;d++)-1<l[d].indexOf("Toll Free")?(n++,o=o+"<li>"+l[d]+"</li>"):(e++,s=s+"<li>"+l[d]+"</li>");0<n&&0<e?($("div.dial-2").removeClass("hideMe"),$("ul.numlist.dial-1").html(s),$("div.dial-2 ul.numlist").html(o)):(0<n?$("ul.numlist.dial-1").html(o):$("ul.numlist.dial-1").html(s),$("div.dial-2").addClass("hideMe"),$("div.dial-2 ul.numlist").empty()),$(".tab1 .callinlist-li").removeClass("selected"),$('.tab1 .callinlist-li[data-name="'+a+'"]').addClass("selected"),$(".tab1 span.country-flag").removeClass().addClass("country-flag img-flags country-"+a),$(".tab1 span.country-flag").parent().attr("aria-label",i.name),resizeJoinAudioWindow()}function switchCallOutCountry(t){var a=getCallOutObject(t);null!=a&&($(".tab3 span.country-flag").removeClass().addClass("country-flag img-flags country-"+t),$(".tab3 span.countrycode-span").text(a.code),$(".tab3 .countrycode-div").attr("aria-label",a.name),$(".tab3 .calloutlist-li").removeClass("selected"),$('.tab3 .calloutlist-li[data-name="'+t+'"]').addClass("selected"))}function saveSelectdJoinAudioTab(t){mainAppHtmlWindow.saveToLocal("selectedJoinAudioTabName",t)}function saveCallInCountry(t){mainAppHtmlWindow.saveToLocal("callInCountryId",t)}function saveCallOutCountry(t){mainAppHtmlWindow.saveToLocal("callOutCountryId",t)}function saveCallOutNumber(t){mainAppHtmlWindow.saveToLocal("callOutNumber",t)}function saveRememberCallOut(t){mainAppHtmlWindow.saveToLocal("rememberCallOut",t)}function getCallInObject(t){for(var a=mainAppHtmlWindow.callInInfoObject.callInInfoList,i=null,l=0;l<a.length;l++)if(a[l].id==t){i=a[l];break}return i}function getCallOutObject(t){for(var a=mainAppHtmlWindow.callOutInfoObject.callOutInfoList,i=null,l=0;l<a.length;l++)if(a[l].id==t){i=a[l];break}return i}function refreshCallOutStatus(t){"CALLOUT_STATUS_CALLING"==t?($(".div1 .callout-status").text("Callling...").removeClass("visibility-hidden").removeClass("green"),showCallOutInfo()):"CALLOUT_STATUS_RINGING"==t?$(".div1 .callout-status").text("Ringing...").removeClass("visibility-hidden").removeClass("green"):"CALLOUT_STATUS_ACCEPTED"==t?$(".div1 .callout-status").text("Call accepted").removeClass("visibility-hidden").addClass("green"):"CALLOUT_STATUS_NOT_AVAILABLE"==t?($(".div1 .callout-status").text("Busy").removeClass("visibility-hidden").removeClass("green"),showCallOutForm()):"CALLOUT_STATUS_JOIN_SUC"==t?($(".div1 .callout-status").text("Phone Connected").removeClass("visibility-hidden").addClass("green"),mainAppHtmlWindow.saveToLocal("audioStatus","callout"),setTimeout(function(){window.close()},2e3)):"CALLOUT_STATUS_ZOOM_START_CANCELCALL"==t?$(".div1 .callout-status").text("Disconnecting call").removeClass("visibility-hidden").removeClass("green"):"CALLOUT_STATUS_ZOOM_CALL_CACELED"==t?($(".div1 .callout-status").text("").addClass("visibility-hidden").removeClass("green"),showCallOutForm()):"CALLOUT_STATUS_TIMEOUT"==t&&($(".div1 .callout-status").text("Time Out").removeClass("visibility-hidden").removeClass("green"),showCallOutForm())}function showCallOutForm(){$(".div1 .form").removeClass("forceHide"),$(".div1 .info").addClass("forceHide"),$("#calloutbtn").text("Call Me"),$("#calloutbtn").removeClass("calling"),0<util.trim($("#calloutnumber").val())&&$("#calloutbtn").addClass("enabled")}function showCallOutInfo(){$("#calloutbtn").removeClass("enabled").addClass("calling"),$("#calloutbtn").text("Hang Up"),$(".div1 .info span.code").text($(".div1 .countrycode-span").text()),$(".div1 .info span.number").text($("#calloutnumber").val()),$(".div1 .form").addClass("forceHide"),$(".div1 .info").removeClass("forceHide")}function setAlwaysUseVoIPWhenJoin(){var t=$("#alwaysUseVoIPWhenJoin").is(":checked");mainAppHtmlWindow.userSettings.setAppSetting("audio",mainAppHtmlWindow.userSettings.ALWAYS_USE_VOIP_WHEN_JOIN,t)}
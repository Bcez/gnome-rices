"use strict";function init(e){var i=$(".window-leave-meeting");"end"===e?i.addClass("host").removeClass("bo"):"leave"===e?i.removeClass("host bo"):"bo"===e&&(i.addClass("bo"),mainAppHtmlWindow.myStatusObject.isHost?i.addClass("host"):i.removeClass("host")),i.undelegate().delegate("li","click",function(){switch($(this).data("action")){case"end":mainAppHtmlWindow.inmeeting.endMeeting();break;case"leave":mainAppHtmlWindow.inmeeting.leaveMeeting();break;case"leave-bo":mainAppHtmlWindow.inmeeting.leaveBO()}closeWindow()})}function closeWindow(){window.close()}
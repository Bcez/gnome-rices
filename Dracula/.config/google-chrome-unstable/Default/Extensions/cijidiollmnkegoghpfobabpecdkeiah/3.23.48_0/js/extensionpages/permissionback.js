function openPermissionVideo(){"Mac"==resolveOSType()?($("#windowsSSInstructions").remove(),$("#macSSInstructions").removeClass("disp-none")):($("#macSSInstructions").remove(),$("#windowsSSInstructions").removeClass("disp-none")),$(".info-video-container video")[0].play()}function resolveOSType(){var n="Unknown";return-1!=window.navigator.userAgent.indexOf("Windows")&&(n="Windows"),-1!=window.navigator.userAgent.indexOf("Mac")&&(n="Mac"),-1!=window.navigator.userAgent.indexOf("X11")&&(n="UNIX"),-1!=window.navigator.userAgent.indexOf("Linux")&&(n="Linux"),n}$(document).ready(function(){$("#popupFindVideo").on("click",openPermissionVideo)});
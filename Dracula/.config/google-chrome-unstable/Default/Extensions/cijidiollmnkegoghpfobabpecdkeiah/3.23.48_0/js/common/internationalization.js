for(var objects=document.getElementsByTagName("html"),j=0;j<objects.length;j++){var obj=objects[j],valStrH=obj.innerHTML.toString(),valNewH=valStrH.replace(/__MSG_(\w+)__/g,function(e,t){return t?chrome.i18n.getMessage(t):""});valNewH!=valStrH&&(obj.innerHTML=valNewH)}
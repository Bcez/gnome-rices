chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Open Ubuntu online",
        id: "UbuntuOnline",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "UbuntuOnline") {
        UbuntuOnline();
    }
});

function UbuntuOnline() {         
  	
  		gourl =  "https://www.onworks.net/runos/create-os.html?os=ubuntu-16.04.6-desktop-i386&home=init";
    	window.open(gourl,'_blank');
	
}




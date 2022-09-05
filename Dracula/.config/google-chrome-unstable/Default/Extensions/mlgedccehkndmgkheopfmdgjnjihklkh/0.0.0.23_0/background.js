let newTabUrl = "chrome://newtab";

chrome.management.onEnabled.addListener(function (ExtensionInfo) {
  if (ExtensionInfo.id !== chrome.runtime.id) {
    return;
  }

  if (!localStorage["BingDefaultsSet"]) {
    localStorage["BingDefaultsSet"] = "done";
  }
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: newTabUrl });
});

'use strict';

chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({ url: "https://sumo.app/paint/?lang=en&cloud=false&mode=extension" });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "edit-image",
        title: "Edit image in Sumopaint",
        contexts: ["image"],
    });
});
chrome.contextMenus.onClicked.addListener(handleImageURL);

function handleImageURL(evt) {
    chrome.tabs.create({ url: "https://sumo.app/paint/?lang=en&cloud=false&mode=extension&url=" + evt.srcUrl });
}
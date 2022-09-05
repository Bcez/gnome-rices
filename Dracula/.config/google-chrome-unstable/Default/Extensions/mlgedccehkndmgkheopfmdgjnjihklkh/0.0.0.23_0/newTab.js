const connectionUrl =
  "https://www.bing.com/favicon.ico?_=" + new Date().getTime();
const domain = "www.bing.com";
const partnerCode = "U549";
const formCode = "U549DF";
let path = "xbox";

let pathPrefix = "c/";
var isEdge = isEdgeBrowser();
if (isEdge) {
  path = pathPrefix.concat(path);
}

let newTabUrl = `https://${domain}/browserextension/${path}?origin=ext&pc=${partnerCode}&FORM=${formCode}`;
const defaultUrl = "defaultHomePage.html";

window.onload = function () {
  document.title = chrome.i18n.getMessage("newtabPageTitle");
  loadNewTab();
};

function setNewTabPage(online) {
  let newTabFrame = document.getElementById("ntp-frame");
  if (online) {
    newTabFrame.src = newTabUrl;
  } else {
    newTabFrame.src = defaultUrl;
  }
}

function loadNewTab() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", connectionUrl);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304)) {
        setNewTabPage(true);
      } else {
        setNewTabPage(false);
      }
    }
  };
  xhr.send();
}

function isEdgeBrowser() {
  return (
    navigator.userAgent.match(/edg/i) != null ||
    (navigator.userAgentData &&
      navigator.userAgentData.brands &&
      navigator.userAgentData.brands.some((a) => a.brand === "Microsoft Edge"))
  );
}

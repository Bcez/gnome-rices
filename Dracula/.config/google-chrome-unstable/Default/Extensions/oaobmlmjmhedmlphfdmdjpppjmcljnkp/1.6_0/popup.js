chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('Url').innerHTML = "<g:sharetoclassroom size=32 url="+tab.url+"></g:sharetoclassroom>";
});
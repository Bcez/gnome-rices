(function(){

   var username = ""; 
   if ( localStorage.getItem('username') )
   {
        username = localStorage.getItem('username');
   }
   else {
       username = "MyUser:" + randomString(5);
       localStorage.setItem('username', username);
   }
 
        
  var apps_urls = {
    png1: "https://www.offidocs.com/create-gimp.html?username=" + username,
    files: "https://www.offidocs.com/community/preprefile.php?username=" + username,
  };
  
  for (var link_id in apps_urls){
        var url = apps_urls[link_id];
        document.getElementById(link_id).firstElementChild.href = url;
  }
  
  //var ira = encodeURIComponent("https://www.offidocs.com/community/preprefile.php");
  //document.getElementById("usersettings").firstElementChild.href = "https://www.offidocs.com/community/offidocschangeuser.html?ira=" + aaa;
  document.getElementById('status').innerText = "Using Gimp image editor and paint tool";
    
  /*for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  } */
    
   var xhr1 = new XMLHttpRequest();
        xhr1.open('GET', 'https://www.offidocs.com/community/user.php?username=' + username, true);
        xhr1.onload = function (e) {
                if (xhr1.readyState === 4) {
                        if (xhr1.status === 200) {
                                console.log(xhr1.responseText);
                                var response1 = xhr1.responseText;
                            localStorage.setItem('service', response1);
                            console.log('https://www.offidocs.com/phpextensions/connector.php?username=' + username  + "&service=" + response1);
                                var elf = $('#elfinder').elfinder({
					                   url : 'https://www.offidocs.com/phpextensions/connector.php?username=' + username  + "&service=" + response1,
                                       uiOptions : {
                                           
                                           
                                                    toolbar : [
                                                            ['back', 'forward'],
                                                            // ['reload'],
                                                            // ['home', 'up'],
                                                            ['mkdir', 'upload'],
                                                            ['open', 'download'],
                                                            //['info'],
                                                            //['quicklook'],
                                                            ['copy', 'cut', 'paste'],
                                                            ['rm'],
                                                            ['duplicate', 'rename'],
                                                            ['extract', 'archive'],
                                                            ['search'],
                                                            //['view']
                                                    ],
                                           
                                       }
				                    }).elfinder('instance');
                        } else {
                                console.error(xhr1.statusText);
                        }
                 }
        };
        xhr1.onerror = function (e) {
                console.error(xhr1.statusText);
        };
        xhr1.send();    
   
    
})();


function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

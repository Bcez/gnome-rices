function updateBackground(){var a=document.body;a.style.backgroundImage="url('/share/banner.jpg')",window.innerHeight>window.innerWidth?(a.style.backgroundSize="auto "+document.documentElement.clientHeight+"px",a.style.backgroundPosition="-16.5em "+getHeaderHeight()+"px"):(a.style.backgroundSize=document.documentElement.clientWidth+18+"px auto",a.style.backgroundPosition="0px "+getHeaderHeight()+"px")}function initButtonHandlers(){var a=document.getElementById("filechooser"),b=document.getElementById("bttcancel");if(!a||!b)return!0;a.onchange=function(a){var b=0;this.files&&(b=this.files.length||0),b>0&&(showUploadButton(b),hideSelectButton())},b.onclick=function(a){showSelectButton(),document.getElementsByTagName("form")[0].reset()}}function updateElementPositions(){updateUploaderSize()}function showUploadButton(a){var b=document.getElementById("bttupload");document.getElementById("bttHolder").style.visibility="visible";var c=b.dataset.stringsingle,d=b.dataset.stringmulti;d=d.split("[total]").join(a),a>1?b.value=d:b.value=c}function showSelectButton(){document.getElementById("filechooser")&&(document.getElementById("filechooser").style.visibility="visible");if(document.getElementById("bttselect")){var a=document.getElementById("bttselect");a.style.width||(a.style.width=a.offsetWidth+"px"),a.style.visibility="visible"}hideUploadButton()}function hideSelectButton(){document.getElementById("filechooser").style.visibility="hidden",document.getElementById("bttselect").style.visibility="hidden"}function hideUploadButton(){document.getElementById("bttHolder")&&(document.getElementById("bttHolder").style.visibility="hidden")}function getHeaderHeight(){return document.getElementById("header").offsetHeight}function getViewportHeight(){return window.screen.availHeight}function getViewportWidth(){return window.screen.availWidth}function updateUploaderSize(){var a=getHeaderHeight(),b=document.getElementById("filechooser");if(!b)return!0;b.style.bottom="0px",b.style.left="0px",b.style.right="0px",b.style.top=a+"px"}window.addEventListener("load",function(){updateElementPositions(),showSelectButton(),initButtonHandlers(),updateBackground()},!1),window.addEventListener("resize",function(){updateElementPositions(),updateBackground()},!1)
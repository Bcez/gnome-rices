var CcWdF=function(){function tzm_G(MuUep){var element=document.getElementById(MuUep);this.setBounds=function(bounds){element.style.left=bounds.left+"\x70\x78";element.style.top=bounds.top+"\x70\x78";element.style.width=bounds.width+"\x70\x78";element.style.height=bounds.height+"\x70\x78";};this.id=MuUep;this.getBounds=function(){if(element){var bounds=element.getBoundingClientRect();return{top:bounds.top,left:bounds.left,width:bounds.width,height:bounds.height};}};this.tT6NH=function(state){if(state=="\x6f\x6e\x55\x70\x64\x61\x74\x69\x6e\x67"&&element){element.style.borderColor="\x67\x72\x65\x65\x6e";element.style.backgroundColor="\x72\x67\x62\x61\x28\x30\x2c\x30\x2c\x30\x2c\x30\x2e\x32\x29";element.style.borderWidth="\x32\x70\x78";}else if(state=="\x6f\x6e\x53\x74\x61\x72\x74"){element.style.display="\x62\x6c\x6f\x63\x6b";}else if(state=="\x69\x6e\x69\x74"){document.body.style.backgroundColor="\x72\x67\x62\x61\x28\x30\x2c\x30\x2c\x30\x2c\x30\x2e\x31\x29";}};};function lfpZV(){var current;var IgiOL,tRNQy,BoP_s;chrome.runtime.getBackgroundPage(function(Nwcev){Nwcev.g3nIZ.get("\x61\x70\x70\x57\x69\x6e\x64\x6f\x77\x2e\x6f\x76\x65\x72\x6c\x61\x79\x57\x69\x6e\x64\x6f\x77",function(mn8nn){current=mn8nn;IgiOL=current["\x6f\x75\x74\x65\x72\x42\x6f\x75\x6e\x64\x73"];});});this.id="\x64\x65\x66\x61\x75\x6c\x74";this.borderWidth=3;this.setBounds=function(bounds){IgiOL["\x6c\x65\x66\x74"]=bounds.left;IgiOL["\x74\x6f\x70"]=bounds.top;IgiOL["\x77\x69\x64\x74\x68"]=bounds.width;IgiOL["\x68\x65\x69\x67\x68\x74"]=bounds.height;tRNQy=bounds;};this.xXU8c=function(bounds){BoP_s=bounds;};this.mW037=function(C5gwR){current.setShape({"\x72\x65\x63\x74\x73":C5gwR});};this.VQMn_=function(){var bounds=IgiOL;var C5gwR=[];C5gwR[0]={top:0,left:0,width:bounds.width,height:this.borderWidth};C5gwR[1]={top:0,left:0,width:this.borderWidth,height:bounds.height};C5gwR[2]={top:0,left:bounds.width-this.borderWidth,width:this.borderWidth,height:bounds.height};C5gwR[3]={top:bounds.height-this.borderWidth,left:0,width:bounds.width,height:this.borderWidth};current.setShape({"\x72\x65\x63\x74\x73":C5gwR});};this.getBounds=function(){return tRNQy;};this.u0slT=function(){return BoP_s;};this.tT6NH=function(state){};this.hide=function(){current.hide();};this.show=function(){current.show();};};var bjREv;var UVTPe;var pU9GS=null;var zYHFf;var minWidth=30;var minHeight=30;var XZPLy={left:0,top:0,width:0,height:0};function start(ZhcJg,s8K8u,RsC5J,Dr27l){bjREv=Dr27l;UVTPe=RsC5J;BNvJP();XZPLy.top=s8K8u.top;XZPLy.left=s8K8u.left;XZPLy.width=s8K8u.width;XZPLy.height=s8K8u.height;zYHFf.setBounds(ReP98(ZhcJg.bounds));zYHFf.xXU8c(ReP98(ZhcJg.bounds));zYHFf.tT6NH("\x6f\x6e\x53\x74\x61\x72\x74");zYHFf.id=ZhcJg.id;zYHFf.window_info=ZhcJg.window_info;pU9GS={};pU9GS.AEjLs=ZhcJg.AEjLs;pU9GS.b=ZhcJg.bounds;pU9GS.x=ZhcJg.e.clientX-pU9GS.b.left;pU9GS.y=ZhcJg.e.clientY-pU9GS.b.top;pU9GS.cx=ZhcJg.e.clientX;pU9GS.cy=ZhcJg.e.clientY;pU9GS.fPLjg=pU9GS.b.width;pU9GS.EyrBE=pU9GS.b.height;if(pU9GS.AEjLs!="\x63\x61\x70\x74\x69\x6f\x6e\x52\x65\x63\x74"){pU9GS.TuMu1=pU9GS.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x52\x54"||pU9GS.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x4c\x54"||pU9GS.AEjLs=="\x73\x69\x64\x65\x54\x6f\x70";pU9GS.F78Jx=pU9GS.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x4c\x54"||pU9GS.AEjLs=="\x73\x69\x64\x65\x4c\x65\x66\x74"||ZhcJg.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x4c\x42";pU9GS._YOOt=pU9GS.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x52\x54"||pU9GS.AEjLs=="\x73\x69\x64\x65\x52\x69\x67\x68\x74"||pU9GS.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x52\x42";pU9GS.VzjA3=pU9GS.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x52\x42"||pU9GS.AEjLs=="\x63\x6f\x72\x6e\x65\x72\x4c\x42"||pU9GS.AEjLs=="\x73\x69\x64\x65\x42\x6f\x74\x74\x6f\x6d";pU9GS.action="\x72\x65\x73\x69\x7a\x65";}else{pU9GS.action="\x6d\x6f\x76\x65";}};function update(e){if(!pU9GS){console.log("\x4e\x6f\x20\x76\x61\x6c\x69\x64\x20\x73\x74\x61\x72\x74\x20\x73\x74\x61\x74\x65\x20\x74\x6f\x20\x75\x70\x64\x61\x74\x65");return;}var x=e.clientX-pU9GS.b.left;var y=e.clientY-pU9GS.b.top;var bounds={top:pU9GS.b.top,left:pU9GS.b.left,width:pU9GS.b.width,height:pU9GS.b.height};if(pU9GS.action=="\x6d\x6f\x76\x65"){bounds.top=(e.clientY-pU9GS.y);bounds.left=(e.clientX-pU9GS.x);}else if(pU9GS.action=="\x72\x65\x73\x69\x7a\x65"){if(pU9GS._YOOt){bounds.width=Math.max(x,minWidth);}if(pU9GS.VzjA3)bounds.height=Math.max(y,minHeight);if(pU9GS.F78Jx){var AWCZz=Math.max(pU9GS.cx-e.clientX+pU9GS.fPLjg,minWidth);if(AWCZz>minWidth){bounds.width=AWCZz;bounds.left=e.clientX;};}if(pU9GS.TuMu1){var vIpnf=Math.max(pU9GS.cy-e.clientY+pU9GS.EyrBE,minHeight);if(vIpnf>minHeight){bounds.height=vIpnf;bounds.top=e.clientY;};};}zYHFf.setBounds(ReP98(bounds));zYHFf.VQMn_();};function BNvJP(){zYHFf.tT6NH("\x6f\x6e\x55\x70\x64\x61\x74\x69\x6e\x67");zYHFf.show();};function rYRlJ(x,y){for(var XMC0D in bjREv){mn8nn=bjREv[XMC0D];var yplrz=mn8nn["\x73\x65\x72\x76\x65\x72\x42\x6f\x75\x6e\x64\x73"]||mn8nn["\x69\x6e\x6e\x65\x72\x42\x6f\x75\x6e\x64\x73"];var zEAY0={"\x6c\x65\x66\x74":yplrz["\x6c\x65\x66\x74"],"\x74\x6f\x70":yplrz["\x74\x6f\x70"],"\x72\x69\x67\x68\x74":yplrz["\x77\x69\x64\x74\x68"]+yplrz["\x6c\x65\x66\x74"],"\x62\x6f\x74\x74\x6f\x6d":yplrz["\x68\x65\x69\x67\x68\x74"]+yplrz["\x74\x6f\x70"]};if((x>=zEAY0.left)&&(x<=zEAY0.right)&&(y>=zEAY0.top)&&(y<=zEAY0.bottom)){return true;};}return false;};function stop(hahHf,e){if(rYRlJ(e.screenX,e.screenY)==true){hahHf(zYHFf.window_info,zYHFf.getBounds());}else{hahHf(zYHFf.window_info,zYHFf.u0slT());}zYHFf.id="";zYHFf.hide();pU9GS=null;};function ReP98(bounds){return{left:bounds.left+XZPLy.left,top:bounds.top+XZPLy.top,width:bounds.width,height:bounds.height,};};function YrMxW(bounds){return{left:bounds.left-XZPLy.left,top:bounds.top-XZPLy.top,width:bounds.width,height:bounds.height,};};function init(){zYHFf=new lfpZV();zYHFf.tT6NH("\x69\x6e\x69\x74");};return{start:start,update:update,stop:stop,init:init};}();document.addEventListener("\x44\x4f\x4d\x43\x6f\x6e\x74\x65\x6e\x74\x4c\x6f\x61\x64\x65\x64",hWeva,false);function hWeva(){CcWdF.init();chrome.runtime.getBackgroundPage(function(Nwcev){Nwcev.g3nIZ.add("\x6f\x62\x6a\x65\x63\x74\x2e\x6f\x76\x65\x72\x6c\x61\x79\x57\x69\x6e\x64\x6f\x77",CcWdF);});console.log("\x4f\x76\x65\x72\x6c\x61\x79\x20\x69\x6e\x69\x74\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c");};

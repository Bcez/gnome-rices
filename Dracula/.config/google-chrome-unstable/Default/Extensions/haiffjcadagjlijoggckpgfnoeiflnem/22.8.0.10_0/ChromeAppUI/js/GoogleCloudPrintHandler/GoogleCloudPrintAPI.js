var B9MOn=(function B9MOn(){var hXkaS={};hXkaS[403]=chrome.i18n.getMessage("\x68\x74\x74\x70\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x34\x30\x33");hXkaS[404]=chrome.i18n.getMessage("\x68\x74\x74\x70\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x34\x30\x34");hXkaS[413]=chrome.i18n.getMessage("\x68\x74\x74\x70\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x34\x31\x33");hXkaS["\x64\x65\x66\x61\x75\x6c\x74"]=chrome.i18n.getMessage("\x47\x43\x50\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x64\x65\x66\x61\x75\x6c\x74");function WWHjk(status,reject){if(hXkaS.hasOwnProperty(status)){reject(hXkaS[status]);}reject(hXkaS["\x64\x65\x66\x61\x75\x6c\x74"]);};var kPUMr={};kPUMr[111]=chrome.i18n.getMessage("\x47\x43\x50\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x31\x31\x31");kPUMr[403]=chrome.i18n.getMessage("\x47\x43\x50\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x34\x30\x33");kPUMr["\x64\x65\x66\x61\x75\x6c\x74"]=chrome.i18n.getMessage("\x47\x43\x50\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x64\x65\x66\x61\x75\x6c\x74");function WULds(response,reject){if(kPUMr[response["\x65\x72\x72\x6f\x72\x43\x6f\x64\x65"]]){reject(kPUMr[response["\x65\x72\x72\x6f\x72\x43\x6f\x64\x65"]]);}reject(kPUMr["\x64\x65\x66\x61\x75\x6c\x74"]);};var T0As9=(function(){var yx4Q0;function NlVBp(response){if(response["\x78\x73\x72\x66\x5f\x74\x6f\x6b\x65\x6e"]){yx4Q0=response["\x78\x73\x72\x66\x5f\x74\x6f\x6b\x65\x6e"];}};function t4lvG(){return yx4Q0;};return{NlVBp:NlVBp,t4lvG:t4lvG};})();function qeRBJ(kcp9r,reject){var response;try{response=JSON.parse(kcp9r);}catch(e){reject(chrome.i18n.getMessage("\x47\x43\x50\x5f\x65\x72\x72\x6f\x72\x5f\x63\x6f\x64\x65\x5f\x64\x65\x66\x61\x75\x6c\x74"));}T0As9.NlVBp(response);return response;};var TI4UD=(function(){var count=0;var U19FM={};U19FM[200]=function(gTeGH,resolve,reject){count=0;var response=qeRBJ(this.response,reject);if(response["\x73\x75\x63\x63\x65\x73\x73"]===true){if(response["\x70\x72\x69\x6e\x74\x65\x72\x73"].length<=0){reject(chrome.i18n.getMessage("\x47\x43\x50\x5f\x6e\x6f\x5f\x70\x72\x69\x6e\x74\x65\x72\x5f\x65\x72\x72\x6f\x72"));}resolve(fyaUz(response["\x70\x72\x69\x6e\x74\x65\x72\x73"]));}else{console.log(this.response);WULds(response,reject);}};U19FM[500]=function(gTeGH,resolve,reject){if(count<3){setTimeout(function(){count++;console.log("\x72\x65\x74\x72\x79\x69\x6e\x67\x20\x66\x6f\x72\x20"+count+"\x20\x74\x69\x6d\x65\x73\x2c\x20\x61\x73\x20\x74\x68\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x69\x73\x20\x35\x30\x30");JBCPo(gTeGH,resolve,reject);},500);}else{count=0;WWHjk(this.status,reject);console.log("\x72\x65\x6a\x65\x63\x74\x69\x6e\x67\x20\x61\x73\x20\x6d\x61\x78\x20\x6e\x75\x6d\x62\x65\x72\x20\x6f\x66\x20\x72\x65\x74\x72\x69\x65\x73\x20\x72\x65\x61\x63\x68\x65\x64");}};U19FM["\x64\x65\x66\x61\x75\x6c\x74"]=function(resolve,reject){WWHjk(this.status,reject);};function JBCPo(gTeGH,resolve,reject){var plTaO=new XMLHttpRequest();var form=new FormData();form.append("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x5f\x73\x74\x61\x74\x75\x73","\x41\x4c\x4c");plTaO.onload=function(tQXpn){if(U19FM[this.status]){U19FM[this.status].call(this,gTeGH,resolve,reject);}else{U19FM["\x64\x65\x66\x61\x75\x6c\x74"].call(this,resolve,reject);}};plTaO.open("\x50\x4f\x53\x54","\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x6f\x6f\x67\x6c\x65\x2e\x63\x6f\x6d\x2f\x63\x6c\x6f\x75\x64\x70\x72\x69\x6e\x74\x2f\x73\x65\x61\x72\x63\x68");plTaO.setRequestHeader("\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e","\x4f\x41\x75\x74\x68\x20"+gTeGH);plTaO.send(form);};return JBCPo;})();function KbqDZ(gTeGH,I1ocu,title,EzMxO,contentType,resolve,reject){var plTaO=new XMLHttpRequest();var form=new FormData();var yx4Q0=T0As9.t4lvG();form.append("\x70\x72\x69\x6e\x74\x65\x72\x69\x64",I1ocu);form.append("\x74\x69\x74\x6c\x65",title);form.append("\x74\x69\x63\x6b\x65\x74",JSON.stringify({"\x76\x65\x72\x73\x69\x6f\x6e":"\x31\x2e\x30","\x70\x72\x69\x6e\x74":{}}));form.append("\x63\x6f\x6e\x74\x65\x6e\x74",EzMxO);form.append("\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70\x65",contentType);if(yx4Q0){form.append("\x78\x73\x72\x66\x5f\x74\x6f\x6b\x65\x6e",yx4Q0);}plTaO.onload=function(tQXpn){var response;if(this.status===200){response=qeRBJ(this.response,reject);if(response["\x73\x75\x63\x63\x65\x73\x73"]===true){resolve();}else{console.log(this.response);WULds(response,reject);};}else{WWHjk(this.status,reject);}};plTaO.addEventListener("\x70\x72\x6f\x67\x72\x65\x73\x73",function(event){console.log("\x70\x72\x6f\x67\x72\x65\x73\x73",this.status,event);if(this.status===413){WWHjk(this.status,reject);}},false);plTaO.open("\x50\x4f\x53\x54","\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x6f\x6f\x67\x6c\x65\x2e\x63\x6f\x6d\x2f\x63\x6c\x6f\x75\x64\x70\x72\x69\x6e\x74\x2f\x73\x75\x62\x6d\x69\x74");plTaO.setRequestHeader("\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e","\x4f\x41\x75\x74\x68\x20"+gTeGH);plTaO.send(form);};var fyaUz=function(ujZTo){var KAS4S={};var KR4Di=[];var XMC0D;for(XMC0D=0;XMC0D<ujZTo.length;XMC0D++){KR4Di[XMC0D]={g0dkF:ujZTo[XMC0D]["\x64\x69\x73\x70\x6c\x61\x79\x4e\x61\x6d\x65"],name:ujZTo[XMC0D]["\x6e\x61\x6d\x65"],id:ujZTo[XMC0D]["\x69\x64"],rDxk5:ujZTo[XMC0D]["\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x75\x73"]};KAS4S[ujZTo[XMC0D]["\x69\x64"]]=KR4Di[XMC0D];}function fEBjW(id){return KAS4S[id];};function jTNWe(){return KR4Di;};return{jTNWe:jTNWe,fEBjW:fEBjW};};return{TI4UD:TI4UD,KbqDZ:KbqDZ};})();
function Storage(key){this.pRCrh=key;};Storage.fJPpT=chrome.storage.local;Storage.prototype.set=function(value,hahHf){Storage.setValue(this.pRCrh,value,hahHf);};Storage.prototype.get=function(hahHf){Storage.getValue(this.pRCrh,hahHf);};Storage.VAhD_=function(){Storage.fJPpT.clear();};Storage.setValue=function(key,value,hahHf){var jqtiB={};jqtiB[key]=value;Storage.fJPpT.set(jqtiB,hahHf);};Storage.getValue=function(key,hahHf){var jqtiB={};jqtiB[key]=null;Storage.fJPpT.get(jqtiB,function(result){var value=xGPcy.isValid(result)?result[key]:null;xGPcy.ST_Dv(hahHf,value);});};Storage.fwKhJ=function(key){Storage.fJPpT.remove(key,function(result){});};function s7L7v(){};s7L7v.cf56s="\x73\x65\x74\x74\x69\x6e\x67\x73";s7L7v.RKG2n="\x73\x74\x6f\x72\x65\x5f\x73\x65\x74\x74\x69\x6e\x67\x73";s7L7v.maq9q="\x70\x6f\x77\x65\x72\x5f\x73\x65\x74\x74\x69\x6e\x67\x73";s7L7v.ZCUBa="\x31\x32\x34\x35\x36\x37\x38\x39";s7L7v.GtysP="\x61\x62\x63\x64\x65\x66\x67\x6b\x6d\x6f\x6b\x73\x64\x66\x6c\x73\x64\x66\x73\x6a\x66\x62\x6e\x67\x66\x62";s7L7v._egEm="\x31\x2e\x30";s7L7v.SOh1z="\x65\x6e\x67\x69\x6e\x65\x5f\x73\x65\x74\x74\x69\x6e\x67\x73";s7L7v.X79jJ="\x73\x73\x6f";s7L7v.OXzOd="\x6b\x65\x65\x70\x5f\x61\x77\x61\x6b\x65\x5f\x6c\x65\x76\x65\x6c";s7L7v.types={};s7L7v.types.MVVTX="\x61\x63\x63\x6f\x75\x6e\x74\x55\x52\x4c";s7L7v.types.XrpEI="\x67\x6f\x6f\x67\x6c\x65\x50\x6f\x6c\x69\x63\x79";s7L7v.types.jeuQ7="\x63\x72";s7L7v.clear=function(){Storage.VAhD_();};s7L7v.localStorage={getItem:function(key,hahHf){chrome.storage.local.get(key,hahHf);},setItem:function(key,ArZnN){var WcVSK={};WcVSK[key]=ArZnN;chrome.storage.local.set(WcVSK);}};s7L7v.fz0jL=function(Hr6SV,hahHf){var I6KVb=false;if(Hr6SV&&Hr6SV["\x66\x65\x61\x74\x75\x72\x65\x73"]&&Hr6SV["\x66\x65\x61\x74\x75\x72\x65\x73"]["\x67\x72\x61\x70\x68\x69\x63\x73"]&&Hr6SV["\x66\x65\x61\x74\x75\x72\x65\x73"]["\x67\x72\x61\x70\x68\x69\x63\x73"]["\x6d\x75\x6c\x74\x69\x4d\x6f\x6e\x69\x74\x6f\x72"]&&Hr6SV["\x66\x65\x61\x74\x75\x72\x65\x73"]["\x67\x72\x61\x70\x68\x69\x63\x73"]["\x6d\x75\x6c\x74\x69\x4d\x6f\x6e\x69\x74\x6f\x72"]===true){I6KVb=true;chrome.storage.local.get("\x75\x73\x65\x41\x6c\x6c\x4d\x79\x4d\x6f\x6e\x69\x74\x6f\x72\x73",function(data){if(data&&(typeof data["\x75\x73\x65\x41\x6c\x6c\x4d\x79\x4d\x6f\x6e\x69\x74\x6f\x72\x73"]==="\x62\x6f\x6f\x6c\x65\x61\x6e")){I6KVb=data["\x75\x73\x65\x41\x6c\x6c\x4d\x79\x4d\x6f\x6e\x69\x74\x6f\x72\x73"];}hahHf(I6KVb);});}else{hahHf(I6KVb);}};s7L7v.V104Y=function(Hr6SV,hahHf){var state="\x6d\x61\x78\x69\x6d\x69\x7a\x65\x64";if(Hr6SV&&Hr6SV["\x75\x69"]&&Hr6SV["\x75\x69"]["\x73\x65\x73\x73\x69\x6f\x6e\x73\x69\x7a\x65"]&&Hr6SV["\x75\x69"]["\x73\x65\x73\x73\x69\x6f\x6e\x73\x69\x7a\x65"]["\x77\x69\x6e\x64\x6f\x77\x73\x74\x61\x74\x65"]==="\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e"){state="\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e";hahHf(state);}else{chrome.storage.local.get("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e",function(data){if(data&&data["\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e"]){state="\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e";}hahHf(state);});}};s7L7v.TLlXF=function(hahHf){chrome.system.display["\x67\x65\x74\x49\x6e\x66\x6f"](function(XEDmG){var bounds;var hxFqw=g.xGPcy.Fv8Cw(XEDmG).hxFqw;if(hxFqw){for(var XMC0D=0;XMC0D<XEDmG.length;XMC0D++){if(XEDmG[XMC0D]["\x69\x73\x50\x72\x69\x6d\x61\x72\x79"]===true){bounds=XEDmG[XMC0D]["\x62\x6f\x75\x6e\x64\x73"];break;};};}if(hahHf){hahHf(bounds);}});};s7L7v.lUdz3=function(hahHf){chrome["\x72\x75\x6e\x74\x69\x6d\x65"]["\x67\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x50\x61\x67\x65"]((JwoJr)=>{let uMGoj=JwoJr.eHxoQ;uMGoj.m6xYG({DyX4F:JwoJr.pDrEq,A76V3:[uMGoj.A76V3["\x41\x44\x4d\x49\x4e\x5f\x50\x4f\x4c\x49\x43\x59"]]},(result)=>{if(result!==null){let LrEaq=KRkTO.GJaQz(result);if(xGPcy.isValid(LrEaq)&&LrEaq[s7L7v.RKG2n]["\x72\x66\x5f\x77\x65\x62"]["\x75\x72\x6c"]){s7L7v.Pq5Nd(true);Storage.fwKhJ(s7L7v.cf56s);hahHf(LrEaq);}else{hahHf(null);}}else{hahHf(null);}});});};s7L7v.pE1P5=function(key,hahHf){s7L7v.lUdz3(function(ktBKP){if(ktBKP!=null){xGPcy.udaCM(hahHf,ktBKP);}else{Storage.getValue(key,function(ktBKP){xGPcy.udaCM(hahHf,ktBKP);});}});};s7L7v.DJRQu=function(key,hahHf){chrome["\x72\x75\x6e\x74\x69\x6d\x65"]["\x67\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x50\x61\x67\x65"]((JwoJr)=>{let uMGoj=JwoJr.eHxoQ;uMGoj.m6xYG({DyX4F:JwoJr.pDrEq,A76V3:[uMGoj.A76V3["\x41\x44\x4d\x49\x4e\x5f\x50\x4f\x4c\x49\x43\x59"]]},(result)=>{if(result!==null){hahHf(result[key]);}else{hahHf(null);}});});};s7L7v.T0tOr=function(hahHf){chrome["\x72\x75\x6e\x74\x69\x6d\x65"]["\x67\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x50\x61\x67\x65"]((JwoJr)=>{let uMGoj=JwoJr.eHxoQ;uMGoj.m6xYG({DyX4F:JwoJr.pDrEq,A76V3:[uMGoj.A76V3["\x41\x44\x4d\x49\x4e\x5f\x50\x4f\x4c\x49\x43\x59"]]},(result)=>{let response=null;let bkczI=result[s7L7v.RKG2n];if(bkczI!==null){if(bkczI!==undefined&&bkczI[s7L7v.X79jJ]!==undefined){response=bkczI[s7L7v.X79jJ];}}hahHf(response);});});};s7L7v.zpPZu=function(hahHf){chrome["\x72\x75\x6e\x74\x69\x6d\x65"]["\x67\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x50\x61\x67\x65"]((JwoJr)=>{let uMGoj=JwoJr.eHxoQ;uMGoj.m6xYG({DyX4F:JwoJr.pDrEq,A76V3:[uMGoj.A76V3["\x41\x44\x4d\x49\x4e\x5f\x50\x4f\x4c\x49\x43\x59"]]},(result)=>{let response=null;let fUIcF=result[s7L7v.maq9q];if(fUIcF!==undefined){response=fUIcF;}hahHf(response);});});};s7L7v.xPo2a=function(hahHf){chrome["\x72\x75\x6e\x74\x69\x6d\x65"]["\x67\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x50\x61\x67\x65"]((JwoJr)=>{let uMGoj=JwoJr.eHxoQ;uMGoj.m6xYG({DyX4F:JwoJr.pDrEq,A76V3:[uMGoj.A76V3["\x41\x44\x4d\x49\x4e\x5f\x50\x4f\x4c\x49\x43\x59"]]},(result)=>{let response=null;let bkczI=result[s7L7v.RKG2n];if(bkczI!==null){if(bkczI!==undefined&&bkczI["\x65\x78\x74\x65\x72\x6e\x61\x6c\x41\x70\x70\x73"]!==undefined){response=bkczI["\x65\x78\x74\x65\x72\x6e\x61\x6c\x41\x70\x70\x73"];}}hahHf(response);});});};s7L7v.erhVi=function(key,KRkTO){Storage.setValue(key,KRkTO);};s7L7v.GSLDf=function(hahHf){Storage.getValue(s7L7v.GtysP,function(checked){xGPcy.udaCM(hahHf,checked);});};s7L7v.Pq5Nd=function(checked){Storage.setValue(s7L7v.GtysP,checked);};s7L7v.QjOZD=function(veLNr,hahHf){veLNr.file(function(hB25h){var R3MMz=new FileReader();R3MMz.onerror=function(K6PDO){xGPcy.ST_Dv(hahHf,null);};R3MMz.onload=function(e){var content=e.target.result;xGPcy.ST_Dv(hahHf,content);};R3MMz.readAsText(hB25h);});};s7L7v.VfltD=function(njuv2,hahHf){njuv2.file(function(j5_G9){var R3MMz=new FileReader();R3MMz.onerror=function(K6PDO){xGPcy.ST_Dv(hahHf,null);};R3MMz.onload=function(e){var jOIq5=new X2JS();var CCRcw=e.target.result;var Y_EdH=jOIq5["\x78\x6d\x6c\x32\x6a\x73"](CCRcw);xGPcy.ST_Dv(hahHf,Y_EdH);};R3MMz.readAsText(j5_G9);});};s7L7v.Ve_yq=function(K2cHz,async,hahHf){function N4I01(plTaO,hahHf){var CCRcw=(200===plTaO.status)?plTaO.responseText:null;var jOIq5=new X2JS();var Y_EdH=jOIq5["\x78\x6d\x6c\x32\x6a\x73"](CCRcw);xGPcy.ST_Dv(hahHf,Y_EdH);}var options={"\x75\x72\x6c":K2cHz,"\x61\x73\x79\x6e\x63":async,"\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e":"\x47\x45\x54","\x6f\x6e\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6e\x67\x65":null};if(true===async){options.onreadystatechange=function(){if(4===this.readyState){N4I01(this,hahHf);}};xGPcy.Y1YaQ(options);}else{var plTaO=xGPcy.Y1YaQ(options);N4I01(plTaO,hahHf);}};function KRkTO(){}KRkTO.gMPem=function(){var ktBKP={"\x73\x65\x74\x74\x69\x6e\x67\x73\x5f\x76\x65\x72\x73\x69\x6f\x6e":s7L7v._egEm,"\x73\x74\x6f\x72\x65\x5f\x73\x65\x74\x74\x69\x6e\x67\x73":{"\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x5f\x74\x79\x70\x65":"","\x6e\x61\x6d\x65":"\x6d\x79\x73\x74\x6f\x72\x65","\x72\x65\x6d\x6f\x76\x65\x53\x74\x61\x74\x75\x73\x43\x6f\x64\x65\x43\x68\x65\x63\x6b":true,"\x62\x65\x61\x63\x6f\x6e\x73":{"\x65\x78\x74\x65\x72\x6e\x61\x6c":[],"\x69\x6e\x74\x65\x72\x6e\x61\x6c":[]},"\x67\x61\x74\x65\x77\x61\x79\x73":[],"\x72\x66\x5f\x77\x65\x62":{}}};return ktBKP;};KRkTO.MCgLD=function(j5_G9){var ktBKP=KRkTO.gMPem();ktBKP[s7L7v.RKG2n]["\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x5f\x74\x79\x70\x65"]=s7L7v.types.jeuQ7;try{if(xGPcy.isValid(j5_G9)&&xGPcy.isValid(j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"])){ktBKP[s7L7v._egEm]=j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x5f\x76\x65\x72\x73\x69\x6f\x6e"];if(xGPcy.isValid(j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"])){ktBKP[s7L7v.RKG2n]["\x6e\x61\x6d\x65"]=j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x4e\x61\x6d\x65"];ktBKP[s7L7v.RKG2n]["\x72\x66\x5f\x77\x65\x62"]["\x75\x72\x6c"]=j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x72\x66\x57\x65\x62"];if(xGPcy.isValid(j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"])){if(xGPcy.isValid(j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x49\x6e\x74\x65\x72\x6e\x61\x6c"])&&j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x49\x6e\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]){if((typeof j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x49\x6e\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]).toLocaleLowerCase()=="\x73\x74\x72\x69\x6e\x67")ktBKP[s7L7v.RKG2n]["\x62\x65\x61\x63\x6f\x6e\x73"]["\x69\x6e\x74\x65\x72\x6e\x61\x6c"].push({url:j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x49\x6e\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]});else if(typeof j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x49\x6e\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"].toLocaleLowerCase()=="\x61\x72\x72\x61\x79"){var lBYf3=j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x49\x6e\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"];for(var XMC0D=0;XMC0D<lBYf3.length;XMC0D++){ktBKP[s7L7v.RKG2n]["\x62\x65\x61\x63\x6f\x6e\x73"]["\x69\x6e\x74\x65\x72\x6e\x61\x6c"].push({"\x75\x72\x6c":lBYf3[XMC0D]});}}}if(xGPcy.isValid(j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x45\x78\x74\x65\x72\x6e\x61\x6c"])&&j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x45\x78\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]){if((typeof j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x45\x78\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]).toLocaleLowerCase()=="\x73\x74\x72\x69\x6e\x67")ktBKP[s7L7v.RKG2n]["\x62\x65\x61\x63\x6f\x6e\x73"]["\x65\x78\x74\x65\x72\x6e\x61\x6c"].push({url:j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x45\x78\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]});else if((typeof j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x45\x78\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]).toLocaleLowerCase()=="\x61\x72\x72\x61\x79"||(typeof j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x45\x78\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"]).toLocaleLowerCase()=="\x6f\x62\x6a\x65\x63\x74"){var lBYf3=j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x42\x65\x61\x63\x6f\x6e\x73"]["\x45\x78\x74\x65\x72\x6e\x61\x6c"]["\x42\x65\x61\x63\x6f\x6e"];for(var XMC0D=0;XMC0D<lBYf3.length;XMC0D++){ktBKP[s7L7v.RKG2n]["\x62\x65\x61\x63\x6f\x6e\x73"]["\x65\x78\x74\x65\x72\x6e\x61\x6c"].push({"\x75\x72\x6c":lBYf3[XMC0D]});}}}}if(xGPcy.isValid(j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x47\x61\x74\x65\x77\x61\x79\x73"])){var XnNHt=j5_G9["\x53\x65\x72\x76\x69\x63\x65\x73"]["\x53\x65\x72\x76\x69\x63\x65"]["\x47\x61\x74\x65\x77\x61\x79\x73"]["\x47\x61\x74\x65\x77\x61\x79"];if(!XnNHt.length){ktBKP[s7L7v.RKG2n]["\x67\x61\x74\x65\x77\x61\x79\x73"].push({"\x75\x72\x6c":XnNHt["\x4c\x6f\x63\x61\x74\x69\x6f\x6e"],"\x69\x73\x5f\x64\x65\x66\x61\x75\x6c\x74":XnNHt["\x5f\x44\x65\x66\x61\x75\x6c\x74"]});}else{for(var XMC0D=0;XMC0D<XnNHt.length;XMC0D++){ktBKP[s7L7v.RKG2n]["\x67\x61\x74\x65\x77\x61\x79\x73"].push({"\x75\x72\x6c":XnNHt[XMC0D]["\x4c\x6f\x63\x61\x74\x69\x6f\x6e"],"\x69\x73\x5f\x64\x65\x66\x61\x75\x6c\x74":XnNHt[XMC0D]["\x5f\x44\x65\x66\x61\x75\x6c\x74"]});}}}}return ktBKP;}else{throw new EJYuc(chrome.i18n.getMessage("\x65\x72\x72\x6f\x72\x5f\x6e\x6f\x74\x43\x6f\x6e\x66\x69\x67\x75\x72\x65\x64",[chrome.i18n.getMessage("\x63\x69\x74\x72\x69\x78\x5f\x72\x65\x63\x65\x69\x76\x65\x72")]));}}catch(e){console.log(e.message);}return null;};KRkTO.atiRp=function(wVJMS,_R95F,RQZQZ){var ktBKP;if(_R95F){if(xGPcy.isValid(pmukw)){ktBKP=pmukw;}else{ktBKP=KRkTO.gMPem();}if(!ktBKP[s7L7v.RKG2n]["\x73\x74\x6f\x72\x65\x73"]){ktBKP[s7L7v.RKG2n]["\x73\x74\x6f\x72\x65\x73"]=[];}var HhFG0=true;for(var XMC0D=0;XMC0D<ktBKP[s7L7v.RKG2n]["\x73\x74\x6f\x72\x65\x73"].length;XMC0D++){var bNEP6=ktBKP[s7L7v.RKG2n]["\x73\x74\x6f\x72\x65\x73"][XMC0D]["\x75\x72\x6c"];if(wVJMS.toLowerCase()===bNEP6.toLowerCase()){HhFG0=false;break;}else{if(Math.abs(wVJMS.length-bNEP6.length)===1){if(bNEP6[bNEP6.length-1]==="\x2f"){if(wVJMS.toLowerCase()===bNEP6.substring(0,bNEP6.length-1).toLowerCase()){HhFG0=false;break;}}else if(wVJMS[wVJMS.length-1]==="\x2f"){if(wVJMS.substring(0,wVJMS.length-1).toLowerCase()===bNEP6.toLowerCase()){HhFG0=false;break;}}}}}if(HhFG0){if(!RQZQZ){ktBKP[s7L7v.RKG2n]["\x73\x74\x6f\x72\x65\x73"].push({"\x75\x72\x6c":wVJMS});}}}else{ktBKP=KRkTO.gMPem();}ktBKP[s7L7v.RKG2n]["\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x5f\x74\x79\x70\x65"]=s7L7v.types.MVVTX;ktBKP[s7L7v.RKG2n]["\x72\x66\x5f\x77\x65\x62"]["\x75\x72\x6c"]=wVJMS;return ktBKP;};KRkTO.GJaQz=function(bd2mT){var ktBKP=KRkTO.gMPem();ktBKP[s7L7v.RKG2n]["\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x5f\x74\x79\x70\x65"]=s7L7v.types.XrpEI;try{if(xGPcy.isValid(bd2mT)){if(xGPcy.isValid(bd2mT[s7L7v.RKG2n])){var at2BU=bd2mT[s7L7v.RKG2n];if(xGPcy.isValid(at2BU["\x72\x66\x5f\x77\x65\x62"])&&at2BU["\x72\x66\x5f\x77\x65\x62"]["\x75\x72\x6c"]){ktBKP[s7L7v.RKG2n]["\x72\x66\x5f\x77\x65\x62"]["\x75\x72\x6c"]=at2BU["\x72\x66\x5f\x77\x65\x62"]["\x75\x72\x6c"];if(xGPcy.isValid(at2BU["\x67\x61\x74\x65\x77\x61\x79\x73"])&&Array.isArray(at2BU["\x67\x61\x74\x65\x77\x61\x79\x73"])){ktBKP[s7L7v.RKG2n]["\x67\x61\x74\x65\x77\x61\x79\x73"]=at2BU["\x67\x61\x74\x65\x77\x61\x79\x73"];}if(xGPcy.isValid(at2BU["\x62\x65\x61\x63\x6f\x6e\x73"])){if(xGPcy.isValid(at2BU["\x62\x65\x61\x63\x6f\x6e\x73"]["\x65\x78\x74\x65\x72\x6e\x61\x6c"])&&Array.isArray(at2BU["\x62\x65\x61\x63\x6f\x6e\x73"]["\x65\x78\x74\x65\x72\x6e\x61\x6c"])){ktBKP[s7L7v.RKG2n]["\x62\x65\x61\x63\x6f\x6e\x73"]["\x65\x78\x74\x65\x72\x6e\x61\x6c"]=at2BU["\x62\x65\x61\x63\x6f\x6e\x73"]["\x65\x78\x74\x65\x72\x6e\x61\x6c"];}if(xGPcy.isValid(at2BU["\x62\x65\x61\x63\x6f\x6e\x73"]["\x69\x6e\x74\x65\x72\x6e\x61\x6c"])&&Array.isArray(at2BU["\x62\x65\x61\x63\x6f\x6e\x73"]["\x69\x6e\x74\x65\x72\x6e\x61\x6c"])){ktBKP[s7L7v.RKG2n]["\x62\x65\x61\x63\x6f\x6e\x73"]["\x69\x6e\x74\x65\x72\x6e\x61\x6c"]=at2BU["\x62\x65\x61\x63\x6f\x6e\x73"]["\x69\x6e\x74\x65\x72\x6e\x61\x6c"];}}if(bd2mT["\x6e\x61\x6d\x65"]){ktBKP["\x6e\x61\x6d\x65"]=bd2mT["\x6e\x61\x6d\x65"];}if(xGPcy.isValid(at2BU["\x72\x65\x6d\x6f\x76\x65\x53\x74\x61\x74\x75\x73\x43\x6f\x64\x65\x43\x68\x65\x63\x6b"])){ktBKP["\x72\x65\x6d\x6f\x76\x65\x53\x74\x61\x74\x75\x73\x43\x6f\x64\x65\x43\x68\x65\x63\x6b"]=bd2mT[s7L7v.RKG2n]["\x72\x65\x6d\x6f\x76\x65\x53\x74\x61\x74\x75\x73\x43\x6f\x64\x65\x43\x68\x65\x63\x6b"];}}else{console.log("\x4e\x6f\x20\x73\x74\x6f\x72\x65\x66\x72\x6f\x6e\x74\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x74\x69\x6f\x6e\x20\x61\x70\x70\x6c\x69\x65\x64\x20\x66\x72\x6f\x6d\x20\x70\x6f\x6c\x69\x63\x79");return null;}}}}catch(e){console.log(e.message);ktBKP=null;}return ktBKP;};

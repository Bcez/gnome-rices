/*Copyright (c) 2020 Citrix Systems, Inc.
The materials in this file are protected by copyright and other intellectual property laws.
Copying and use is permitted only by end users to enable use of Citrix server technology.
Any other reproduction or use of this file, or any portion of it, is unlicensed.
In no event may the file be reverse engineered or may copies be made in association with deobfuscation, decompilation or disassembly.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

function BvYdf(eAL3g){var Qy4rb=this;var SiyL5=eAL3g;var xkgWp="\x43\x54\x58\x49\x4d\x45\x20";var E0DCx=0x2000;var jampS=false;var djbCD=null;var N52Xb='';var F623Q=1;var AvZbi=4;var jqR9R=0;var Q3yt9;var HZgLf=0;var Bnltv=false;this.JKXnz=function(){return xkgWp;};var mOEyU=function(){var L1lil=djbCD.bTs6J();var gLCVX=djbCD.sK1t2();djbCD.sK1t2();var _e1mU=L1lil-AvZbi;var l8v_E=new Uint8Array(_e1mU);djbCD.nYqIW(l8v_E,0,_e1mU);switch(gLCVX){case XggCq._Qa5G.Qd_H0:LLTup(l8v_E);break;case XggCq._Qa5G.loCVk:aUWDH(gLCVX,l8v_E);break;case XggCq._Qa5G.wBusT:mmFRp(gLCVX,l8v_E);break;case XggCq._Qa5G.f07D_:nHe7y(gLCVX,l8v_E);break;default:_2E29(0,"\x43\x54\x58\x49\x4d\x45\x20\x7c\x20\x49\x4d\x45\x45\x6e\x67\x69\x6e\x65\x20\x7c\x20\x70\x72\x6f\x63\x65\x73\x73\x43\x6f\x6d\x6d\x61\x6e\x64\x20\x7c\x20\x75\x6e\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x66\x72\x6f\x6d\x20\x56\x44\x41\x3a\x20"+gLCVX);break;};};var uwzvA=function(name,size){var stream=new wD3Ex(SiyL5,size);return stream;};var LLTup=function(buffer){_2E29(0,"\x43\x54\x58\x49\x4d\x45\x20\x7c\x20\x49\x4d\x45\x45\x6e\x67\x69\x6e\x65\x20\x7c\x20\x52\x65\x63\x65\x69\x76\x65\x64\x20\x62\x69\x6e\x64\x20\x72\x65\x71\x75\x65\x73\x74");jampS=false;var Nuwn8=CBLxP(buffer);WmQCA.lNzRf("\x43\x6c\x69\x65\x6e\x74\x5f\x4b\x65\x79\x62\x6f\x61\x72\x64\x5f\x53\x79\x6e\x63",XggCq._Qa5G.NbnJQ);WmQCA.lNzRf("\x43\x6c\x69\x65\x6e\x74\x5f\x49\x4d\x45\x5f\x4e\x61\x6d\x65",XggCq._Qa5G.jpDSp);WmQCA.lNzRf("\x4d\x61\x70\x70\x65\x64\x5f\x4b\x65\x79\x62\x6f\x61\x72\x64\x5f\x4c\x61\x79\x6f\x75\x74",XggCq._Qa5G.f9APV);WmQCA.lNzRf("\x43\x6c\x69\x65\x6e\x74\x5f\x4b\x65\x79\x62\x6f\x61\x72\x64\x5f\x4c\x61\x79\x6f\x75\x74",XggCq._Qa5G.I5TwY);switch(Q3yt9["\x4d\x6f\x64\x65"]){case "\x73\x65\x61\x6d\x6c\x65\x73\x73\x49\x6d\x65":WmQCA.lNzRf("\x43\x54\x58\x5f\x49\x4d\x45\x5f\x4d\x6f\x64\x65",XggCq._Qa5G.b3Rnx);break;case "\x63\x74\x78\x49\x6d\x65":if(Nuwn8){UA3jA();}else{WmQCA.lNzRf("\x43\x54\x58\x5f\x49\x4d\x45\x5f\x4d\x6f\x64\x65",XggCq._Qa5G.b3Rnx);}break;default:console.warn("\x55\x6e\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x20\x49\x4d\x45\x20\x6d\x6f\x64\x65\x20"+Q3yt9["\x4d\x6f\x64\x65"]);_2E29(0,"\x55\x6e\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x20\x49\x4d\x45\x20\x6d\x6f\x64\x65\x20"+Q3yt9["\x4d\x6f\x64\x65"]);};};var CBLxP=function(buffer){var X0oYc=false;var fJ3Gl=GkANS.hKCWV(buffer,1)-AvZbi;var Mpjfe=GkANS.ihhke(buffer,3);var offset=fJ3Gl;for(var index=0;index<Mpjfe;index++){var lfFdr=GkANS.hKCWV(buffer,offset);var jhn0T=GkANS.ihhke(buffer,offset+2);var reserved=GkANS.ihhke(buffer,offset+3);_2E29(0,"\x43\x54\x58\x49\x4d\x45\x20\x7c\x20\x49\x4d\x45\x45\x6e\x67\x69\x6e\x65\x20\x7c\x20\x42\x69\x6e\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x63\x61\x70\x61\x63\x69\x74\x79\x20"+jhn0T+"\x20\x72\x65\x73\x65\x72\x76\x65\x64\x20"+reserved);if(jhn0T==XggCq._Qa5G.gIIM8){X0oYc=true;Bnltv=(reserved==0);SiyL5.SwRaI({gLCVX:XggCq._Qa5G.Qd_H0,Bnltv:Bnltv});break;}offset+=lfFdr;}return X0oYc;};var aUWDH=function(gLCVX,buffer){_2E29(0,"\x43\x54\x58\x49\x4d\x45\x20\x7c\x20\x49\x4d\x45\x45\x6e\x67\x69\x6e\x65\x20\x7c\x20\x52\x65\x63\x65\x69\x76\x65\x64\x20\x62\x69\x6e\x64\x20\x63\x6f\x6d\x6d\x69\x74");jampS=true;SiyL5.SwRaI({gLCVX:gLCVX});iP3ki(1);Pj4bc();};var mmFRp=function(gLCVX,buffer){if(jampS){var offset=8;var left=GkANS.hKCWV(buffer,offset);var top=GkANS.hKCWV(buffer,offset+2);var right=GkANS.hKCWV(buffer,offset+4);var bottom=GkANS.hKCWV(buffer,offset+6);SiyL5.SwRaI({gLCVX:gLCVX,Ew_0K:{left:left,top:top,right:right,bottom:bottom}});}};var nHe7y=function(gLCVX,buffer){var disabled=GkANS.ihhke(buffer,0);if(disabled!=HZgLf){SiyL5.SwRaI({gLCVX:gLCVX,HZgLf:disabled});HZgLf=disabled;}};var db4kV=function(gLCVX){var g6NkP=new Cydie();GkANS.mpXRu(g6NkP,8);g6NkP.Z45C3(gLCVX);g6NkP.Z45C3(0);var K1RMm=F623Q;var NxFNp=0;GkANS.mpXRu(g6NkP,K1RMm);GkANS.mpXRu(g6NkP,NxFNp);var response=g6NkP.hokSl();return response;};var X5RkD=function(gLCVX,EyW6C){var YazZv=new Cydie();GkANS.mpXRu(YazZv,0);YazZv.Z45C3(gLCVX);YazZv.Z45C3(0);YazZv.R6j19(EyW6C,0,EyW6C.length);var IVS6q=YazZv.hokSl();IVS6q[0]=IVS6q.length;djbCD.Z45C3(IVS6q,0,IVS6q.length);};var Z4tuk=function(){var g6NkP=new Cydie();var wRm48=XggCq.imnOq();var Gb8z_=wRm48.length;var T8cdU=XggCq._Qa5G.zt41v+Gb8z_*2;var IcHPz=XggCq.RzUUj();var hunqr=IcHPz.length;g6NkP.Z45C3(XggCq._Qa5G.s944E);var Va7mG=0;GkANS.mpXRu(g6NkP,Va7mG);GkANS.mpXRu(g6NkP,XggCq._Qa5G.zt41v);GkANS.mpXRu(g6NkP,Gb8z_);GkANS.mpXRu(g6NkP,T8cdU);GkANS.mpXRu(g6NkP,hunqr);g6NkP.Z45C3(0);var XMC0D,A8H6J,yMeFR,char;for(XMC0D=0,yMeFR=Gb8z_;XMC0D<yMeFR;XMC0D++){char=wRm48.charCodeAt(XMC0D);GkANS.mpXRu(g6NkP,char);}for(A8H6J=0,yMeFR=hunqr;A8H6J<yMeFR;A8H6J++){char=IcHPz.charCodeAt(A8H6J);GkANS.mpXRu(g6NkP,char);}var EyW6C=g6NkP.hokSl();X5RkD(XggCq._Qa5G.CXqtF,EyW6C);};var UA3jA=function(){var g6NkP=new Cydie();g6NkP.Z45C3(2);var lwfE7=8;var urlpD=2;GkANS.mpXRu(g6NkP,lwfE7);g6NkP.Z45C3(urlpD);GkANS.mpXRu(g6NkP,4);g6NkP.Z45C3(XggCq._Qa5G.z4ln3);g6NkP.Z45C3(0);GkANS.mpXRu(g6NkP,4);g6NkP.Z45C3(XggCq._Qa5G.gIIM8);g6NkP.Z45C3(0);var EyW6C=g6NkP.hokSl();X5RkD(XggCq._Qa5G.VeSWF,EyW6C);};var O2n5Q=function(N6D8R){var PfHwq=db4kV(XggCq._Qa5G.wG4r3);var Z3KIR=db4kV(XggCq._Qa5G.OhxWD);var stream=new Cydie();stream.R6j19(PfHwq,0,PfHwq.length);stream.R6j19(N6D8R,0,N6D8R.length);stream.R6j19(Z3KIR,0,Z3KIR.length);var QwEQk=stream.hokSl();djbCD.Z45C3(QwEQk,0,QwEQk.length);F623Q++;};var z6VzI=function(){var packet=PkiuE();if(!Bnltv){djbCD.Z45C3(packet,0,packet.length);}else{O2n5Q(packet);}};var KzpwY=function(){var packet=jOAOk();O2n5Q(packet);};var PkiuE=function(){var g6NkP=new Cydie();GkANS.mpXRu(g6NkP,12);g6NkP.Z45C3(XggCq._Qa5G.ZIY7i);g6NkP.Z45C3(0);var zKwSo=0;GkANS.z2xUW(g6NkP,zKwSo);var E_VO6=0;var S1kcG=0;GkANS.mpXRu(g6NkP,E_VO6);GkANS.mpXRu(g6NkP,S1kcG);if(Bnltv){var Prj5F=xKWFL(0,0);g6NkP.R6j19(Prj5F,0,Prj5F.length);}var response=g6NkP.hokSl();return response;};var jOAOk=function(){var g6NkP=new Cydie();GkANS.mpXRu(g6NkP,8);g6NkP.Z45C3(XggCq._Qa5G.b7lI0);g6NkP.Z45C3(0);var zKwSo=0;GkANS.z2xUW(g6NkP,zKwSo);var response=g6NkP.hokSl();return response;};var xKWFL=function(start,end){var g6NkP=new Cydie();GkANS.mpXRu(g6NkP,16);g6NkP.Z45C3(XggCq._Qa5G.dELSM);g6NkP.Z45C3(0);var zKwSo=0;GkANS.z2xUW(g6NkP,zKwSo);GkANS.mpXRu(g6NkP,start);GkANS.mpXRu(g6NkP,end);var BnJkM=0;g6NkP.Z45C3(BnJkM);var ha93u=0;g6NkP.Z45C3(ha93u);g6NkP.Z45C3(0);g6NkP.Z45C3(0);var response=g6NkP.hokSl();return response;};var XfFsI=function(data){var g6NkP=new Cydie();var TU3m6=PkiuE();g6NkP.R6j19(TU3m6,0,TU3m6.length);GkANS.mpXRu(g6NkP,16+data.length*2);g6NkP.Z45C3(XggCq._Qa5G.QQ_O1);g6NkP.Z45C3(0);var GmhCh=0;var hYG43=0;GkANS.mpXRu(g6NkP,GmhCh);GkANS.mpXRu(g6NkP,hYG43);var KRIK4=0;var czzIV=N52Xb.length;GkANS.mpXRu(g6NkP,KRIK4);GkANS.mpXRu(g6NkP,czzIV);var zDvgn=16;GkANS.mpXRu(g6NkP,zDvgn);var length=data.length;GkANS.mpXRu(g6NkP,length);for(var XMC0D=0,goRjq=data.length;XMC0D<goRjq;XMC0D++){var key=data.charCodeAt(XMC0D);GkANS.mpXRu(g6NkP,key);}var Prj5F=xKWFL(data.length,data.length);g6NkP.R6j19(Prj5F,0,Prj5F.length);var UsW4O=g6NkP.hokSl();O2n5Q(UsW4O);};var Pj4bc=function(){var g6NkP=new Cydie();var zKwSo=0;GkANS.z2xUW(g6NkP,zKwSo);var lg_9A=0;var Ml49f=0;GkANS.mpXRu(g6NkP,lg_9A);GkANS.mpXRu(g6NkP,Ml49f);var EyW6C=g6NkP.hokSl();X5RkD(XggCq._Qa5G.PbPkG,EyW6C);};var iP3ki=function(status){var g6NkP=new Cydie();GkANS.z2xUW(g6NkP,status);var EyW6C=g6NkP.hokSl();X5RkD(XggCq._Qa5G.W2BgE,EyW6C);};this.Yp5Gz=function Yp5Gz(gLCVX,data){if(jampS){switch(gLCVX){case XggCq._Qa5G.ZIY7i:z6VzI();break;case XggCq._Qa5G.b7lI0:KzpwY();N52Xb='';break;case XggCq._Qa5G.QQ_O1:XfFsI(data);N52Xb='';break;case XggCq._Qa5G.PbPkG:Pj4bc();break;case XggCq._Qa5G.W2BgE:iP3ki(data);break;case XggCq._Qa5G.CXqtF:Z4tuk();break;default:_2E29(0,"\x43\x54\x58\x49\x4d\x45\x20\x7c\x20\x49\x4d\x45\x45\x6e\x67\x69\x6e\x65\x20\x7c\x20\x73\x65\x6e\x64\x43\x54\x58\x49\x4d\x45\x4d\x65\x73\x73\x61\x67\x65\x7c\x20\x75\x6e\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x3a\x20"+gLCVX);break;}}};this.r3iK7=function(){djbCD=uwzvA(xkgWp,E0DCx);return djbCD;};this.xSbxh=function(config){Q3yt9=config;};var wPimw=function(){djbCD.KC3pg(jqR9R);djbCD.RegisterCallback(Qy4rb.g0Rqr);};this.Pudeu=function tVpNN(){jqR9R=0;djbCD.RegisterCallback(this.g0Rqr);};this.g0Rqr=function l7hIc(){try{while(djbCD.tIIwU()>0){jqR9R=djbCD.uQWrk();try{mOEyU();}catch(error){if(error==R4vy2.MJaIX){wPimw();return;}else{throw error;}}jqR9R=djbCD.uQWrk();}}catch(error){console.log(error);}};}

var XggCq=XggCq||{};(function(){function WzWIN(language){return(XKOxw(language,"\x7a\x68")||XKOxw(language,"\x6a\x61")||XKOxw(language,"\x6b\x6f"))?XggCq._Qa5G.rVAjH:XggCq._Qa5G.lzEiV;};function XKOxw(language,YgfEn){return language&&language.indexOf(YgfEn)>=0;};XggCq.imnOq=function(){var browserLanguage=globalThis["\x6e\x61\x76\x69\x67\x61\x74\x6f\x72"]["\x75\x73\x65\x72\x4c\x61\x6e\x67\x75\x61\x67\x65"]||globalThis["\x6e\x61\x76\x69\x67\x61\x74\x6f\x72"]["\x6c\x61\x6e\x67\x75\x61\x67\x65"];return XggCq._Qa5G.kSWx0[browserLanguage.toLowerCase()];};XggCq.RzUUj=function(){var locale=XggCq.imnOq()["\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65"]();return XggCq._Qa5G.ZFigY.concat(XggCq._Qa5G._Pd0N[locale]);};XggCq.RdlDb=function(){if(!HTML5_CONFIG["\x76\x63\x5f\x63\x68\x61\x6e\x6e\x65\x6c"]["\x43\x54\x58\x49\x4d\x45\x20"]){return XggCq._Qa5G.lzEiV;}var language=globalThis["\x6e\x61\x76\x69\x67\x61\x74\x6f\x72"]["\x75\x73\x65\x72\x4c\x61\x6e\x67\x75\x61\x67\x65"]||globalThis["\x6e\x61\x76\x69\x67\x61\x74\x6f\x72"]["\x6c\x61\x6e\x67\x75\x61\x67\x65"];var HobM3=(HTML5_CONFIG&&HTML5_CONFIG["\x66\x65\x61\x74\x75\x72\x65\x73"]&&HTML5_CONFIG["\x66\x65\x61\x74\x75\x72\x65\x73"]["\x69\x6d\x65"]&&HTML5_CONFIG["\x66\x65\x61\x74\x75\x72\x65\x73"]["\x69\x6d\x65"]["\x6d\x6f\x64\x65"])?HTML5_CONFIG["\x66\x65\x61\x74\x75\x72\x65\x73"]["\x69\x6d\x65"]["\x6d\x6f\x64\x65"]:{};var imeMode;for(var key in HobM3){if(XKOxw(language,key)){imeMode=HobM3[key];break;};}return imeMode?imeMode:WzWIN(language);};})();

var XggCq=XggCq||{};(function(){var _Qa5G={};_Qa5G.wApLe=4;_Qa5G.QNB9e=15;_Qa5G.DTFWC=4;_Qa5G.Qd_H0=0x01;_Qa5G.VeSWF=0x02;_Qa5G.loCVk=0x03;_Qa5G.CXqtF=0x04;_Qa5G.ZIY7i=0x05;_Qa5G.b7lI0=0x06;_Qa5G.SaW_l=0x07;_Qa5G.QQ_O1=0x08;_Qa5G.dELSM=0x09;_Qa5G.W2BgE=0x12;_Qa5G.f07D_=0x15;_Qa5G.wG4r3=0x19;_Qa5G.OhxWD=0x1a;_Qa5G.WBmkE=0x1c;_Qa5G.PbPkG=0x0b;_Qa5G.wBusT=0x0c;_Qa5G.z4ln3=1;_Qa5G.gIIM8=2;_Qa5G.s944E=5;_Qa5G.zt41v=16;_Qa5G.ZFigY="\x33\x36\x64\x63\x30\x35\x39\x61\x2d\x31\x36\x30\x62\x2d\x34\x39\x37\x66\x2d\x61\x37\x62\x38\x2d\x37\x33\x65\x33\x62\x61\x64\x31\x30\x38\x64\x34";_Qa5G._Pd0N={"\x7a\x68\x2d\x63\x6e":"\x31\x64\x34\x30\x39\x38\x38\x36\x2d\x35\x39\x65\x33\x2d\x34\x33\x35\x64\x2d\x38\x39\x62\x65\x2d\x61\x64\x66\x34\x34\x65\x30\x38\x63\x63\x64\x39","\x7a\x68\x2d\x74\x77":"\x65\x65\x66\x32\x39\x30\x32\x37\x2d\x66\x35\x31\x66\x2d\x34\x39\x62\x64\x2d\x38\x39\x32\x64\x2d\x30\x34\x30\x66\x66\x31\x38\x35\x38\x34\x35\x39","\x6a\x61\x2d\x6a\x70":"\x31\x61\x35\x39\x34\x65\x33\x32\x2d\x31\x33\x31\x37\x2d\x34\x63\x39\x65\x2d\x62\x34\x30\x64\x2d\x34\x64\x35\x65\x36\x64\x35\x35\x66\x34\x35\x62","\x6b\x6f\x2d\x6b\x72":"\x64\x33\x38\x63\x63\x39\x66\x37\x2d\x65\x34\x35\x62\x2d\x34\x31\x30\x32\x2d\x61\x66\x37\x65\x2d\x38\x33\x37\x39\x66\x65\x30\x35\x65\x62\x33\x38"};_Qa5G.kSWx0={"\x7a\x68":"\x7a\x68\x2d\x43\x4e","\x7a\x68\x2d\x63\x6e":"\x7a\x68\x2d\x43\x4e","\x7a\x68\x2d\x68\x61\x6e\x73":"\x7a\x68\x2d\x43\x4e","\x7a\x68\x2d\x74\x77":"\x7a\x68\x2d\x54\x57","\x7a\x68\x2d\x68\x61\x6e\x74":"\x7a\x68\x2d\x54\x57","\x7a\x68\x2d\x68\x6b":"\x7a\x68\x2d\x54\x57","\x6a\x61":"\x6a\x61\x2d\x4a\x50","\x6a\x61\x2d\x6a\x70":"\x6a\x61\x2d\x4a\x50","\x6b\x6f":"\x6b\x6f\x2d\x4b\x52","\x6b\x6f\x2d\x6b\x72":"\x6b\x6f\x2d\x4b\x52"};_Qa5G.lzEiV="\x73\x65\x61\x6d\x6c\x65\x73\x73\x49\x6d\x65";_Qa5G.rVAjH="\x63\x74\x78\x49\x6d\x65";_Qa5G.vzcrQ=0x0000;_Qa5G.ON8zm=0x000f;_Qa5G.rhC9J=229;_Qa5G.FDfUe=246;_Qa5G.qnGGS=245;_Qa5G.NPY0w=3;_Qa5G.b3Rnx=1;_Qa5G.NbnJQ=3;_Qa5G.jpDSp="\x4e\x2f\x41";_Qa5G.f9APV="\x4e\x2f\x41";_Qa5G.I5TwY="\x4e\x2f\x41";XggCq._Qa5G=_Qa5G;})();

/*Copyright (c) 2020 Citrix Systems, Inc.
The materials in this file are protected by copyright and other intellectual property laws.
Copying and use is permitted only by end users to enable use of Citrix server technology.
Any other reproduction or use of this file, or any portion of it, is unlicensed.
In no event may the file be reverse engineered or may copies be made in association with deobfuscation, decompilation or disassembly.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

var ewfMK=(ewfMK||{});(function(){let bYxCT="\x52\x53\x41\x53\x53\x41\x2d\x50\x4b\x43\x53\x31\x2d\x76\x31\x5f\x35";let yHw2V="\x53\x48\x41\x2d\x32\x35\x36";let CzHPb;let N9i0c;let CQMLR="\x57\x65\x62\x43\x72\x79\x70\x74\x6f\x20\x3a\x7c\x3a\x20";class sii13{TUzR7(olxfD){const CdoNz=new ArrayBuffer(olxfD.length);const mMsdw=new Uint8Array(CdoNz);for(let XMC0D=0,goRjq=olxfD.length;XMC0D<goRjq;XMC0D++){mMsdw[XMC0D]=olxfD.charCodeAt(XMC0D);}return CdoNz;}}CzHPb=new sii13();class XALaW{jfkgj(vKt5S,data){try{let IXql2=vKt5S.split("\x2e");let zxG0H=IXql2[0];let iZnVr=IXql2[1];let gnSir=btoa(JSON.stringify(data));gnSir=gnSir["\x72\x65\x70\x6c\x61\x63\x65\x41\x6c\x6c"]("\x3d","");let Op13C=zxG0H+"\x2e"+gnSir+"\x2e"+iZnVr;return Op13C;}catch(e){console.log(CQMLR+"\x20\x67\x65\x6e\x65\x72\x61\x74\x65\x20\x3a\x7c\x3a\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x20\x77\x68\x69\x6c\x65\x20\x67\x65\x6e\x65\x72\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x74\x6f\x6b\x65\x6e\x20\x3a\x7c\x3a\x20",e);return null;}}validate(Op13C,BWd9f,cb){if(!Op13C||!BWd9f){console.log(CQMLR+"\x20\x76\x61\x6c\x69\x64\x61\x74\x65\x20\x3a\x7c\x3a\x20\x49\x6e\x76\x61\x6c\x69\x64\x20\x74\x6f\x6b\x65\x6e\x20\x6f\x72\x20\x63\x65\x72\x74\x69\x66\x69\x63\x61\x74\x65");cb(false);return;}const OozvI=J49Ku.jz35g(BWd9f);N9i0c.u_mGb(OozvI).then((key)=>{try{N9i0c.T_Cpd(key,Op13C).then(function(isValid){cb(isValid);}).catch(function(OiLd5){console.log(CQMLR+"\x20\x76\x61\x6c\x69\x64\x61\x74\x65\x20\x3a\x7c\x3a\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x20\x77\x68\x69\x6c\x65\x20\x76\x61\x6c\x69\x64\x61\x74\x69\x6e\x67\x20\x74\x6f\x6b\x65\x6e\x20\x3a\x7c\x3a\x20",OiLd5);cb(false);});}catch(e){console.log(CQMLR+"\x20\x76\x61\x6c\x69\x64\x61\x74\x65\x20\x3a\x7c\x3a\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x20\x77\x68\x69\x6c\x65\x20\x76\x61\x6c\x69\x64\x61\x74\x69\x6e\x67\x20\x74\x6f\x6b\x65\x6e\x20\x3a\x7c\x3a\x20",e);cb(false);}}).catch(error=>{console.log(CQMLR+"\x20\x76\x61\x6c\x69\x64\x61\x74\x65\x20\x3a\x7c\x3a\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x20\x77\x68\x69\x6c\x65\x20\x69\x6d\x70\x6f\x72\x74\x69\x6e\x67\x20\x70\x75\x62\x6c\x69\x63\x20\x4b\x65\x79\x20\x3a\x7c\x3a\x20",error);cb(false);});}}class p8q9p{u_mGb(OozvI){const YP7j8=globalThis.atob(OozvI);const cRKjh=CzHPb.TUzR7(YP7j8);return globalThis["\x63\x72\x79\x70\x74\x6f"]["\x73\x75\x62\x74\x6c\x65"]["\x69\x6d\x70\x6f\x72\x74\x4b\x65\x79"]("\x73\x70\x6b\x69",cRKjh,{name:bYxCT,hash:yHw2V},false,["\x76\x65\x72\x69\x66\x79"]);}T_Cpd(OozvI,Op13C){let iZnVr=Op13C.split("\x2e")[2];let data=Op13C.split("\x2e").slice(0,2).join("\x2e");let jmtu5=globalThis.atob(iZnVr["\x72\x65\x70\x6c\x61\x63\x65"](/\-/g,"\x2b")["\x72\x65\x70\x6c\x61\x63\x65"](/_/g,"\x2f"));return globalThis["\x63\x72\x79\x70\x74\x6f"]["\x73\x75\x62\x74\x6c\x65"]["\x76\x65\x72\x69\x66\x79"]({name:bYxCT,hash:yHw2V},OozvI,CzHPb.TUzR7(jmtu5),new globalThis["\x54\x65\x78\x74\x45\x6e\x63\x6f\x64\x65\x72"]()["\x65\x6e\x63\x6f\x64\x65"](data));}}N9i0c=new p8q9p();ewfMK.zeGXc=new XALaW();})();


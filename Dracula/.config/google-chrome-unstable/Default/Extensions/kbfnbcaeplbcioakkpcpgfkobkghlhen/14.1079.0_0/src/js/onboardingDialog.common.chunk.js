(self.webpackChunk=self.webpackChunk||[]).push([[8391],{34072:(e,t,n)=>{n.r(t),n.d(t,{OnboardingDialog:()=>J});var i=n(44577),o=n(26273),s=n(37896),a=n(27378),r=n(41263),l=n(18505),c=n(2780),d=n(68383),h=n(38983),p=n(5872),m=n(92783),u=n(75668),g=n(19106),_=n(88326),v=n(1620),k=n(12187),w=n(33304),b=n.n(w);const C=e=>a.createElement(_.M,{clickHandler:e.clickHandler},a.createElement("button",{...(0,k.Sh)(b().buttonPrimary,e.className)},e.children)),E=e=>a.createElement(_.M,{clickHandler:e.clickHandler},a.createElement("button",{...(0,k.Sh)(b().buttonTertiary,e.className)},e.children)),y=e=>a.createElement(_.M,{dataGrammarlyPart:"btnCloseOnboarding",clickHandler:e.clickHandler},a.createElement(v.P,{color:"white"}));var S=n(43694),f=n.n(S);const x=({isActive:e})=>a.createElement("div",{...(0,k.Sh)(f().progressDot,e&&f().active)}),A=({stepIndex:e,totalSteps:t})=>a.createElement("div",{className:f().progressDotsContainer},[...Array(t).keys()].map((t=>a.createElement(x,{isActive:t===e}))),`${e+1}/${t}`),T=e=>{const{title:t,skipText:n,nextText:i,stepName:o,stepIndex:s,totalSteps:r,onSkipClick:l,onNextClick:c}=e;return a.useEffect((()=>{g.J.onboardingOnboardingStepOverlayShow(o)}),[o]),a.createElement("div",{className:f().newContent},a.createElement("h3",{className:f().newHeader},t),a.createElement("div",{className:f().buttonRow},a.createElement(A,{stepIndex:s,totalSteps:r}),a.createElement("div",null,n&&a.createElement(E,{className:f().buttonMinWidth,clickHandler:l},n),a.createElement(C,{className:f().buttonMinWidth,clickHandler:c},i))))};var N;!function(e){e.inlineSuggestions="inlineSuggestions",e.clickToAccept="clickToAccept",e.happyWriting="happyWriting"}(N||(N={}));var P=n(62111);const R=u.Rd().appConfig.url.assets.onboardingTour,D={[N.inlineSuggestions]:R.inlineSuggestionsAnimation,[N.clickToAccept]:R.clickToAcceptAnimation,[N.happyWriting]:R.happyWritingAnimation},H={[N.inlineSuggestions]:"To view inline suggestions, hover over the underlined text. Click the suggestion to accept it.",[N.clickToAccept]:"Grammarly keeps count of all your suggestions. To review them, click the number. Click the suggestion to accept it.",[N.happyWriting]:"All right, you’re ready to go. Happy writing!"},W={[N.inlineSuggestions]:R.inlineSuggestionsPreviewImage},M=[N.inlineSuggestions,N.clickToAccept,N.happyWriting],O=({onClose:e})=>{const[t,n]=a.useState(0),i=t>=M.length-1;a.useEffect((()=>{g.J.onboardingOverlayShow(),(0,P.T)().onboardingTutorialShow()}),[]);return a.createElement("div",{...(0,k.Sh)(f().onboardingTour)},a.createElement("div",{className:f().close},a.createElement(y,{clickHandler:()=>{g.J.onboardingOverlayCloseButtonClick("dialog"),e()}})),M.map(((e,n)=>!!D[e]&&n<=t+1&&a.createElement("video",{key:e,...(0,k.Sh)(f().newVideo,n===t&&f().show),autoPlay:!0,loop:t<M.length-1,muted:!0,height:720,width:392,preload:"auto",poster:W[e]},a.createElement("source",{type:"video/mp4",src:D[e]})))),a.createElement(T,{title:H[M[t]],skipText:i?"":"Skip tutorial",nextText:i?"Finish":"Next",stepName:M[t],stepIndex:t,totalSteps:M.length,onSkipClick:()=>{g.J.onboardingSkipButtonClick("onboardingTour",M[t]),n(M.length-1)},onNextClick:i?()=>{g.J.onboardingOverlayLetsWriteButtonClick("end-step"),e()}:()=>{n((e=>e+1))}}))};var L=n(33163);class I extends a.Component{constructor(){super(...arguments),this._containerRef=null,this.state={hide:!1},this.onClose=e=>{e&&e.stopPropagation(),this.setState({hide:!0}),this._containerRef&&this._containerRef.addEventListener("animationend",(()=>this.props.onClose()))},this.setOnboardingRef=e=>{e&&!this._containerRef?(this._containerRef=e,this._containerRef.addEventListener("click",this.preventClick)):!e&&this._containerRef&&(this._containerRef.removeEventListener("click",this.preventClick),this._containerRef=null)},this.preventClick=e=>{e.stopPropagation(),e.stopImmediatePropagation()}}componentDidMount(){this._sub=this.props.shouldClose.subscribe((e=>{e&&this.onClose()}))}componentWillUnmount(){var e;null===(e=this._sub)||void 0===e||e.unsubscribe()}render(){const e=(0,p.cs)({[L.onboardingDialog]:!0,[L.hide]:this.state.hide,[L.windows]:(0,m.ED)()}),t=(0,p.cs)({[L.content]:!0,[L.newContent]:!0});return a.createElement("div",{ref:this.setOnboardingRef,className:e,"data-grammarly-part":"onboarding"},a.createElement("div",{className:t},a.createElement("div",{className:(0,p.cs)({[L.viewContainer]:!0,[L.experiment]:!0})},a.createElement(O,{onClose:this.onClose}))))}}class J extends((0,s.qH)(i.u)){constructor({doc:e,experimentClient:t,saveAnonymousProps:n}){super(),this.view=null,this.shouldClose=h.h.create(!1),this.onKey=e=>{(0,s.rw)(e)===s.DG&&this.view&&this.shouldClose.set(!0)},this.onClose=()=>{this.emit("hide"),this.remove()},this.component=()=>(a.useEffect((()=>((0,o.o)(this.doc.defaultView,"keydown",this.onKey,!1),()=>(0,o.E)(this.doc.defaultView,"keydown",this.onKey,!1))),[]),a.createElement(r.L,{chunkName:"onboardingDialog"},a.createElement(I,{saveAnonymousProps:this.saveAnonymousProps,onClose:this.onClose,shouldClose:this.shouldClose}))),this.doc=e,this.experimentClient=t,this.saveAnonymousProps=n,this.createView()}createView(){if(!this.view){const e=this.component;this.view=l.VB.get({monitorAs:"onboarding"}).inject(c.EM.fromDocument(this.doc,"grammarly-onboarding"),c.zs.appendChild(this.doc.documentElement),d.G7.showWhenLoaded(a.createElement(e,null)))}}remove(){this.view&&(this.view.dispose(),this.view=null)}}},33163:e=>{e.exports={onboardingDialog:"_2PUCY",gr__onboarding_dialog_appear:"_2kQom",viewContainer:"_2r76m",view:"iXxau",windows:"_3YNSP",footer:"_220RP",hide:"_2crZn",gr__onboarding_dialog_disappear:"_3pI3R",content:"_2WdMd",gr__centered_onboarding_dialog_content_disappear:"_1MuSx",gr__centered_onboarding_dialog_content_appear:"_1PPL8",oldContent:"_1snd7",newContent:"_1J2QV",experiment:"_218Xl"}},33304:e=>{e.exports={buttonPrimary:"DeSZy",buttonTertiary:"MlFOd"}},43694:e=>{e.exports={onboardingTour:"_1kT00",close:"_1d9eL",video:"_1EkJs",show:"_30F92",content:"_26qzv",header:"_5zyYS",text:"_1nSmD",footer:"_1U2Zt",stepIndicator:"_1ASb6",white:"_1a0vu",newContent:"AwMmd",buttonRow:"_3pl-d",newVideo:"ZQlY3",progressDotsContainer:"_3QaH9",progressDot:"_3woi7",active:"_1mm7L",newHeader:"_1SRns",buttonMinWidth:"_3AvOJ"}}}]);
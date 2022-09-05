!function(){var e;!function(e){e.full="full",e.limited="limited"}(e||(e={}));function n(e,n,t,o=document,i=!1,a=!1){const r=e,d=o.documentElement;if(i){const e=o.createElement("link");e.href=r,e.rel="preload",e.as="script",e.onload=()=>{e.remove()},d.prepend(e)}const l=o.createElement("script");l.async=!1,l.defer=!1,l.src=r,l.type="text/javascript",n&&l.setAttribute("data-ext-id",n),t&&l.setAttribute("data-ext-version",t),a&&l.setAttribute("data-ext-minimal","true"),l.onload=()=>{l.remove()},d.prepend(l)}!function(e,t,o){var i,a,r;try{n(t("Grammarly-gDocsEarlyInjectedCs.js"),e,void 0,void 0,!0);const d=o(),l=Boolean(null===(i=d.canvasWithSVG)||void 0===i?void 0:i.enabledWithExperiment),c=Boolean(null===(a=d.canvasWithSVG)||void 0===a?void 0:a.enabledWithDynamicConfig);(Boolean(null===(r=d.canvasWithSVG)||void 0===r?void 0:r.forcedWithDynamicConfig)||c&&l)&&n(t("Grammarly-gDocsAnnotatedCanvasEarlyInjected.js"),e,void 0,void 0,!0)}catch(e){console.error("Grammarly error: Unable to initialize on gdocs due to exception: ",e)}(function(e="grammarly-desktop-integration"){var n,t;const o=`\n  div.${e} {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select:none;\n    user-select:none;\n  }\n\n  div.${e}:before {\n    content: attr(data-content);\n  }\n`,i=document.createElement("style");i.textContent=o;const a=document.createElement("div");a.setAttribute("aria-label","grammarly-integration"),a.setAttribute("role","group"),a.setAttribute("tabindex","-1"),a.setAttribute("class",e);const r=document.createElement(e);return r.attachShadow({mode:"open"}),r.setAttribute("data-grammarly-shadow-root","true"),null===(n=r.shadowRoot)||void 0===n||n.appendChild(i),null===(t=r.shadowRoot)||void 0===t||t.appendChild(a),document.documentElement.appendChild(r),{activate:(e,n,t)=>{null==a||a.setAttribute("data-content",JSON.stringify(n?{mode:n,isActive:e,isUserDisabled:t}:{isActive:e}))},remove:()=>{var e;null===(e=null==r?void 0:r.parentNode)||void 0===e||e.removeChild(r)}}})().activate(!0)}(chrome.runtime.id,(e=>chrome.runtime.getURL(`src/js/${e}`)),function(e,n,t,o){function i(){const e=n.getItem(t);if(e)try{return JSON.parse(e)}catch(e){}}return chrome.storage.local.get(e,(e=>{const a=JSON.stringify(o(i(),e));n.setItem(t,a)})),chrome.storage.onChanged.addListener(((a,r)=>{if("local"===r){const r={};let d=!1;for(const[n,t]of Object.entries(a))e.includes(n)&&(r[n]=t.newValue,d=!0);if(d){const e=JSON.stringify(o(i(),r));n.setItem(t,e)}}})),function(){return o(i(),{})}}(["user","dynamicConfig"],localStorage,"grammarly.gDocs",(function(e,n){var t,o,i,a,r,d,l,c,s,u;return{canvasWithSVG:{enabledWithDynamicConfig:Boolean((null===(t=n.dynamicConfig)||void 0===t?void 0:t.gDocsCanvasConfig)?null===(i=null===(o=n.dynamicConfig)||void 0===o?void 0:o.gDocsCanvasConfig)||void 0===i?void 0:i.useAnnotatedCanvas:null===(a=null==e?void 0:e.canvasWithSVG)||void 0===a?void 0:a.enabledWithDynamicConfig),enabledWithExperiment:Boolean((null===(r=n.user)||void 0===r?void 0:r.experiments)?n.user.experiments.gDocsAnnotatedCanvas:null===(d=null==e?void 0:e.canvasWithSVG)||void 0===d?void 0:d.enabledWithExperiment),forcedWithDynamicConfig:Boolean((null===(l=n.dynamicConfig)||void 0===l?void 0:l.gDocsCanvasConfig)?null===(s=null===(c=n.dynamicConfig)||void 0===c?void 0:c.gDocsCanvasConfig)||void 0===s?void 0:s.forceSVGMapping:null===(u=null==e?void 0:e.canvasWithSVG)||void 0===u?void 0:u.forcedWithDynamicConfig)}}})))}();
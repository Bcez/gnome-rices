"use strict";!function(r){r.addEventListener("message",function(e){e.source===r&&e.data.vueDetected&&chrome.runtime.sendMessage(e.data)});var u={};if(!r.hasOwnProperty("__VUE_DEVTOOLS_GLOBAL_HOOK__")){var n={Vue:null,on:function(e,n){(u[e="$"+e]||(u[e]=[])).push(n)},once:function(e,n){var t=e;(u[e="$"+e]||(u[e]=[])).push(function e(){this.off(t,e),n.apply(this,arguments)})},off:function(e,n){if(e="$"+e,arguments.length){var t=u[e];if(t)if(n)for(var o=0,i=t.length;o<i;o++){var r=t[o];if(r===n||r.fn===n){t.splice(o,1);break}}else u[e]=null}else u={}},emit:function(e){var n=u[e="$"+e];if(n)for(var t=[].slice.call(arguments,1),o=0,i=(n=n.slice()).length;o<i;o++)n[o].apply(this,t)}};n.once("init",function(e){(n.Vue=e).prototype.$inspect=function(){var e=r.__VUE_DEVTOOLS_INSPECT__;e&&e(this)}}),n.once("vuex:init",function(e){n.store=e}),Object.defineProperty(r,"__VUE_DEVTOOLS_GLOBAL_HOOK__",{get:function(){return n}}),setTimeout(function(){if(Boolean(r.__NUXT__||r.$nuxt)){var e=void 0;return r.$nuxt&&(e=r.$nuxt.$root.constructor),void r.postMessage({devtoolsEnabled:e&&e.config.devtools,vueDetected:!0,nuxtDetected:!0},"*")}for(var n=document.querySelectorAll("*"),t=void 0,o=0;o<n.length;o++)if(n[o].__vue__){t=n[o];break}if(t){for(var i=Object.getPrototypeOf(t.__vue__).constructor;i.super;)i=i.super;r.postMessage({devtoolsEnabled:i.config.devtools,vueDetected:!0},"*")}},100);var o=null,i=0,c={normal:"#3BA776",warn:"#DB6B00",error:"#DB2600"};r.__VUE_DEVTOOLS_TOAST__=function(e,n){var t=c[n]||c.normal;o?o.querySelector(".vue-wrapper").style.background=t:((o=document.createElement("div")).addEventListener("click",s),o.innerHTML='\n      <div id="vue-devtools-toast" style="\n        position: fixed;\n        bottom: 6px;\n        left: 0;\n        right: 0;\n        height: 0;\n        display: flex;\n        align-items: flex-end;\n        justify-content: center;\n        z-index: 999999999999999999999;\n        font-family: Menlo, Consolas, monospace;\n        font-size: 14px;\n      ">\n        <div class="vue-wrapper" style="\n          padding: 6px 12px;\n          background: '+t+';\n          color: white;\n          border-radius: 3px;\n          flex: auto 0 1;\n          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n          cursor: pointer;\n        ">\n          <div class="vue-content"></div>\n        </div>\n      </div>\n      ',document.body.appendChild(o)),o.querySelector(".vue-content").innerText=e,clearTimeout(i),i=setTimeout(s,5e3)}}function s(){clearTimeout(i),o&&(document.body.removeChild(o),o=null)}}(window);
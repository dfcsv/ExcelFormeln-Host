var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(){return t=" ",document.createTextNode(t);var t}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function g(t,e){(null!=e||t.value)&&(t.value=e)}function p(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let h;function v(t){h=t}function m(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const $=[],_=[],y=[],b=[],x=Promise.resolve();let w=!1;function E(t){y.push(t)}function A(){const t=new Set;do{for(;$.length;){const t=$.shift();v(t),j(t.$$)}for(;_.length;)_.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];t.has(n)||(n(),t.add(n))}y.length=0}while($.length);for(;b.length;)b.pop()();w=!1}function j(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(E))}const k=new Set;let q;function C(t,e){t&&t.i&&(k.delete(t),t.i(e))}function S(t,n,l){const{fragment:a,on_mount:u,on_destroy:c,after_update:i}=t.$$;a.m(n,l),E(()=>{const n=u.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(E)}function O(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function B(t,e){t.$$.dirty||($.push(t),w||(w=!0,x.then(A)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function L(e,r,l,a,u,c){const i=h;v(e);const s=r.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:null};let f=!1;d.ctx=l?l(e,s,(t,n,o=n)=>(d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),f&&B(e,t)),n)):s,d.update(),f=!0,o(d.before_update),d.fragment=a(d.ctx),r.target&&(r.hydrate?d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment.c(),r.intro&&C(e.$$.fragment),S(e,r.target,r.anchor),A()),v(i)}class F{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var N,P,M=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){void 0===e&&(e="en");var n=function(t,e,n){return t.substr(0,e)+n+t.substr(e+1,t.length)};if(0===(t=void 0!==t?String(t):"").length)return"Empty String";"="!==t[0]&&(t="="+t),t="de"===e?t.replace(/\;\s/g,";"):t.replace(/\,\s/g,",");for(var o=0,r=!1,l=0;l<t.length;l++){var a=t[l],u=t.length,c=0===l?"":t[l-1];"("===a&&(/\w/.test(c)?(l+=u=(t=n(t,l,"(\n"+"\t".repeat(o+=1))).length-u,r=!1):r=!0),"de"===e?";"===a&&(l+=u=(t=n(t,l,";\n"+"\t".repeat(o))).length-u):","===a&&(l+=u=(t=n(t,l,",\n"+"\t".repeat(o))).length-u),")"===a&&(r?r=!1:l+=u=(t=n(t,l,"\n"+"\t".repeat(o-=1)+")")).length-u)}return t=(t=t.replace(/\t/g," ".repeat(4))).trim()}}(N={exports:{}},N.exports),N.exports),T=(P=M)&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P;function G(t){var e;return{c(){(e=i("h1")).textContent="Excel Formula Prettifier"},m(t,n){u(t,e,n)},d(t){t&&c(e)}}}function I(t){var e;return{c(){(e=i("h1")).textContent="Excel Formeln Formatierer"},m(t,n){u(t,e,n)},d(t){t&&c(e)}}}function V(e){var n,r,l,h,v,m,$,_,y,b,x,w,A,j,k,q,C;function S(t,e){return"de"===e.lang?I:G}var O=S(0,e),B=O(e);return{c(){n=i("div"),r=i("img"),l=s(),h=i("div"),B.c(),v=s(),m=i("textarea"),$=s(),_=i("div"),(y=i("button")).textContent="Go",b=s(),x=i("select"),(w=i("option")).textContent="de",(A=i("option")).textContent="en",j=s(),k=i("pre"),q=i("code"),f(r,"src","./Assets/analysis.svg"),f(r,"alt","Excel Illustration"),f(r,"class","svelte-ljqusv"),f(y,"type","button"),f(y,"id","go"),f(y,"class","svelte-ljqusv"),w.__value="de",w.value=w.__value,A.__value="en",A.value=A.__value,void 0===e.lang&&E(()=>e.select_change_handler.call(x)),f(x,"id","lang"),f(x,"name","languageSelector"),f(x,"class","svelte-ljqusv"),f(_,"class","row svelte-ljqusv"),f(q,"class","excel svelte-ljqusv"),f(h,"class","white-box svelte-ljqusv"),f(n,"class","center svelte-ljqusv"),C=[d(m,"input",e.textarea_input_handler),d(y,"click",e.handleButtonGo),d(x,"change",e.select_change_handler)]},m(t,o){u(t,n,o),a(n,r),a(n,l),a(n,h),B.m(h,null),a(h,v),a(h,m),g(m,e.input),a(h,$),a(h,_),a(_,y),a(_,b),a(_,x),a(x,w),a(x,A),p(x,e.lang),a(h,j),a(h,k),a(k,q),e.code_binding(q)},p(t,e){O!==(O=S(0,e))&&(B.d(1),(B=O(e))&&(B.c(),B.m(h,v))),t.input&&g(m,e.input),t.lang&&p(x,e.lang)},i:t,o:t,d(t){t&&c(n),B.d(),e.code_binding(null),o(C)}}}function z(t,e,n){let o,{lang:r="de"}=e,l='=VLOOKUP(A1, A4:A8, (1+1)/14, False) + CONCAT(X, Y+"abc")',a=T(l,r);"de"===r&&n("input",l="=SVERWEIS(A1; A4:A8; (1+1)/14; Falsch)");let u=()=>{a=T(l,r),n("block",o.innerHTML=a,o),hljs.highlightBlock(o)};return m(()=>u()),t.$set=t=>{"lang"in t&&n("lang",r=t.lang)},{lang:r,input:l,block:o,handleButtonGo:u,textarea_input_handler:function(){l=this.value,n("input",l)},select_change_handler:function(){r=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n("lang",r)},code_binding:function(t){_[t?"unshift":"push"](()=>{n("block",o=t)})}}}class H extends F{constructor(t){super(),L(this,t,z,V,l,["lang"])}}function K(e){var n,o=new H({props:{lang:U}});return{c(){o.$$.fragment.c()},m(t,e){S(o,t,e),n=!0},p:t,i(t){n||(C(o.$$.fragment,t),n=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(k.has(t))return;k.add(t),q.c.push(()=>{k.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(o.$$.fragment,t),n=!1},d(t){O(o,t)}}}var R=[...window.navigator.languages||[],window.navigator.language,window.navigator.browserLanguage,window.navigator.userLanguage,window.navigator.systemLanguage],U=R.filter(Boolean).map(t=>t.substr(0,2)).find(t=>["de"].includes(R))||"en";let W=document.getElementsByTagName("html")[0];W.setAttribute("lang",U);let X=W.querySelectorAll("[lang]");Array.from(X).forEach(t=>{t.lang===U?t.style.display="block":t.style.display="none"});return new class extends F{constructor(t){super(),L(this,t,null,K,l,[])}}({target:document.getElementById("app")})}();
//# sourceMappingURL=bundle.js.map

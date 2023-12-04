var ve=Object.defineProperty;var _e=(r,e,t)=>e in r?ve(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var R=(r,e,t)=>(_e(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,q=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),K=new WeakMap;let ne=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(t,e))}return e}toString(){return this.cssText}};const we=r=>new ne(typeof r=="string"?r:r+"",void 0,W),G=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ne(t,r,W)},be=(r,e)=>{if(q)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},F=q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return we(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ae,defineProperty:xe,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:Se,getOwnPropertySymbols:Ce,getPrototypeOf:Pe}=Object,y=globalThis,J=y.trustedTypes,Ne=J?J.emptyScript:"",z=y.reactiveElementPolyfillSupport,C=(r,e)=>r,V={toAttribute(r,e){switch(e){case Boolean:r=r?Ne:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},oe=(r,e)=>!Ae(r,e),X={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:oe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&xe(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=Ee(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=Pe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,s=[...Se(t),...Ce(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(F(i))}else e!==void 0&&t.push(F(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:V).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:V;this._$Em=i,this[i]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??oe)(i?n:this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$E_)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[C("elementProperties")]=new Map,b[C("finalized")]=new Map,z==null||z({ReactiveElement:b}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,H=P.trustedTypes,Z=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,ae="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,le="?"+$,ke=`<${le}>`,w=document,N=()=>w.createComment(""),k=r=>r===null||typeof r!="object"&&typeof r!="function",ce=Array.isArray,Le=r=>ce(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,Y=/>/g,v=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,he=/^(?:script|style|textarea|title)$/i,Ue=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=Ue(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),se=new WeakMap,_=w.createTreeWalker(w,129);function de(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(e):e}const Me=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":"",o=S;for(let c=0;c<t;c++){const a=r[c];let h,u,l=-1,m=0;for(;m<a.length&&(o.lastIndex=m,u=o.exec(a),u!==null);)m=o.lastIndex,o===S?u[1]==="!--"?o=Q:u[1]!==void 0?o=Y:u[2]!==void 0?(he.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=v):u[3]!==void 0&&(o=v):o===v?u[0]===">"?(o=i??S,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?v:u[3]==='"'?te:ee):o===te||o===ee?o=v:o===Q||o===Y?o=S:(o=v,i=void 0);const f=o===v&&r[c+1].startsWith("/>")?" ":"";n+=o===S?a+ke:l>=0?(s.push(h),a.slice(0,l)+ae+a.slice(l)+$+f):a+$+(l===-2?c:f)}return[de(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class L{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[h,u]=Me(e,t);if(this.el=L.createElement(h,s),_.currentNode=this.el.content,t===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=_.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ae)){const m=u[o++],f=i.getAttribute(l).split($),M=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:M[2],strings:f,ctor:M[1]==="."?Te:M[1]==="?"?Ie:M[1]==="@"?He:O}),i.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(he.test(i.tagName)){const l=i.textContent.split($),m=l.length-1;if(m>0){i.textContent=H?H.emptyScript:"";for(let f=0;f<m;f++)i.append(l[f],N()),_.nextNode(),a.push({type:2,index:++n});i.append(l[m],N())}}}else if(i.nodeType===8)if(i.data===le)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)a.push({type:7,index:n}),l+=$.length-1}n++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function E(r,e,t=r,s){var o,c;if(e===x)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=k(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=E(r,i._$AS(r,e.values),i,s)),e}class Re{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);_.currentNode=i;let n=_.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new U(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new Oe(n,this,e)),this._$AV.push(h),a=s[++c]}o!==(a==null?void 0:a.index)&&(n=_.nextNode(),o++)}return _.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),k(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Le(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&k(this._$AH)?this._$AA.nextSibling.data=e:this.$(w.createTextNode(e)),this._$AH=e}g(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=L.createElement(de(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Re(i,this),c=o.u(this.options);o.p(t),this.$(c),this._$AH=o}}_$AC(e){let t=se.get(e.strings);return t===void 0&&se.set(e.strings,t=new L(e)),t}T(e){ce(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new U(this.k(N()),this.k(N()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class O{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=E(this,e,t,0),o=!k(e)||e!==this._$AH&&e!==x,o&&(this._$AH=e);else{const c=e;let a,h;for(e=n[0],a=0;a<n.length-1;a++)h=E(this,c[s+a],t,a),h===x&&(h=this._$AH[a]),o||(o=!k(h)||h!==this._$AH[a]),h===d?e=d:e!==d&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!i&&this.O(e)}O(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends O{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===d?void 0:e}}class Ie extends O{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class He extends O{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===x)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const j=P.litHtmlPolyfillSupport;j==null||j(L,U),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.0");const ze=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new U(e.insertBefore(N(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return x}}var re;A._$litElement$=!0,A.finalized=!0,(re=globalThis.litElementHydrateSupport)==null||re.call(globalThis,{LitElement:A});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Be=r=>{document.body.addEventListener("click",e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey)return;const t=e.composedPath().filter(o=>o.tagName==="A")[0];if(!t||t.target||t.hasAttribute("download")||t.getAttribute("rel")==="external")return;const s=t.href;if(!s||s.indexOf("mailto:")!==-1)return;const i=window.location,n=i.origin||i.protocol+"//"+i.host;s.indexOf(n)===0&&(e.preventDefault(),s!==i.href&&(window.history.pushState({},"",s),r(i,e)))}),window.addEventListener("popstate",e=>r(window.location,e)),r(window.location,null)};let T;const je=new Uint8Array(16);function De(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(je)}const Ve=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function pe(r){return typeof r=="string"&&Ve.test(r)}const p=[];for(let r=0;r<256;++r)p.push((r+256).toString(16).slice(1));function qe(r,e=0){return p[r[e+0]]+p[r[e+1]]+p[r[e+2]]+p[r[e+3]]+"-"+p[r[e+4]]+p[r[e+5]]+"-"+p[r[e+6]]+p[r[e+7]]+"-"+p[r[e+8]]+p[r[e+9]]+"-"+p[r[e+10]]+p[r[e+11]]+p[r[e+12]]+p[r[e+13]]+p[r[e+14]]+p[r[e+15]]}const We=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ie={randomUUID:We};function ue(r,e,t){if(ie.randomUUID&&!e&&!r)return ie.randomUUID();r=r||{};const s=r.random||(r.rng||De)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){t=t||0;for(let i=0;i<16;++i)e[t+i]=s[i];return e}return qe(s)}class ge extends A{shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}const me={user:g`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,mouse:g`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="mouse"><path fill="none" d="M0 0h48v48H0z"></path><path d="M26 2.14V18h14c0-8.16-6.11-14.88-14-15.86zM8 30c0 8.84 7.16 16 16 16s16-7.16 16-16v-8H8v8zM22 2.14C14.11 3.12 8 9.84 8 18h14V2.14z"></path></svg>`};class fe extends ge{static get properties(){return{username:{type:Object},selectedLevel:{type:String},cards:{type:Array},score:{type:Number},showNumbers:{type:Boolean},gameStarted:{type:Boolean},clickedCardIndex:{type:Number},cardColors:{type:Array},targetNumber:{type:Number},timer:{type:Number},showPlayButtonMessage:{type:Boolean},showPlayButton:{type:Boolean}}}constructor(){super(),this.gameStarted=!1,this.selectedLevel="",this.cards=[],this.score=0,this.showNumbers=!1,this.clickedCardIndex=-1,this.cardColors=[],this.targetNumber=0,this.selectedLevel="easy",this.showPlayButtonMessage=!0,this.timer=0,this.showPlayButton=!1}render(){return g`
            <div class="header">
                <div class="username">
                <span class="username-icon" alt="User Icon">${me.user}</span>
                <span>${this.username.username}</span>
                </div>
                <div class="level-select-wrapper">
                <span class="level-label">Level</span>
                <select
                    class="level-select"
                    name="selector"
                    @change=${this.onLevelSelectChange}
                    aria-label="Select level"
                >
                    <option value="easy" ?selected=${this.selectedLevel==="easy"}>
                    Easy
                    </option>
                    <option
                    value="medium"
                    ?selected=${this.selectedLevel==="medium"}
                    >
                    Medium
                    </option>
                    <option
                    value="difficult"
                    ?selected=${this.selectedLevel==="difficult"}
                    >
                    Difficult
                    </option>
                </select>
                </div>
            </div>
            ${this.showPlayButtonMessage?g`
                    <div class="game-phrase">
                    <p class="new-game">Click play button to start a new game</p>
                    </div>
                    <div class="play-button-container">
                    <button class="new-game-button" @click=${this.startNewGame}>
                        Play
                    </button>
                    </div>
                `:g`
                    <div class="score-wrapper">
                    <div class="score">Points: ${this.score}</div>
                    </div>
                    <div class="game-phrase">
                    <p>
                        ${this.showNumbers?"Memorize the cards":`¿Where is the number ${this.targetNumber}?`}
                    </p>
                    </div>
                    <div class="timer ${this.gameStarted?"":"hide"}">
                    Time left: ${this.timer} seconds
                    </div>
                `}

            <div class="card-container">
                ${this.cards.map((e,t)=>g`
                    <div
                    name="cards"
                    class="card ${this.gameStarted?"disabled":""} ${this.isClicked(t)?"clicked":""} ${this.getCardColor(t)}"
                    @click=${()=>this.onCardClick(t)}
                    >
                    ${this.showNumbers||this.isClicked(t)?e:g`<span class="question-mark">&#63;</span>`}
                    </div>
                `)}
            </div>

            ${this.showPlayButton?g`
                    <div class="play-button-container" ?hidden=${!this.gameStarted}>
                    <button class="new-game-button" @click=${this.startNewGame}>
                        Play
                    </button>
                    </div>
                `:""}
        `}isCorrectCard(e){return this.cards[e]===this.targetNumber}isClicked(e){return this.clickedCardIndex===e}getCardColor(e){return this.cardColors[e]}startNewGameWithSelectedLevel(){this.gameStarted||(this.selectedLevel==="easy"?this.timer=10:this.selectedLevel==="medium"?this.timer=5:this.selectedLevel==="difficult"&&(this.timer=2),this.startNewGame())}startNewGame(){if(this.gameStarted)return;this.clickedCardIndex=-1;let e;this.selectedLevel==="easy"?e=10:this.selectedLevel==="medium"?e=5:this.selectedLevel==="difficult"&&(e=2);const t=this.shuffleArray([1,2,3,4,5,6,7,8,9]);this.cards=t,this.showPlayButton=!0,this.targetNumber=this.getRandomNumber(1,9),this.showNumbers=!0,this.gameStarted=!0,this.cardColors=this.cards.map(()=>""),this.timer=e,this.showPlayButtonMessage=!1;const s=setInterval(()=>{this.timer--,this.timer===0&&(clearInterval(s),this.showNumbers=!1,this.resetCardColors(),this.gameStarted=!1)},1e3)}onCardClick(e){if(!this.showNumbers&&!this.gameStarted&&!this.isClicked(e)){this.clickedCardIndex=e;const t=this.cards[e],s=this.shadowRoot.querySelector(`.card:nth-child(${e+1})`);if(t===this.targetNumber){s.classList.add("correct-answer"),this.cardColors[e]="correct-answer";let i;this.selectedLevel==="easy"?i=10:this.selectedLevel==="medium"?i=20:this.selectedLevel==="difficult"&&(i=30),this.score+=i,setTimeout(()=>{this.startNewGame()},1e3)}else s.classList.add("wrong-answer"),this.cardColors[e]="wrong-answer",window.navigator.vibrate(1e3),setTimeout(()=>{this.resetCardColors(),this.startNewGame()},1e3);this.disableAllCards()}}disableAllCards(){this.shadowRoot.querySelectorAll(".card").forEach(t=>{t.classList.add("disabled")})}resetCardColors(){this.cardColors=this.cards.map(()=>"")}shuffleArray(e){const t=[...e];for(let s=t.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[t[s],t[i]]=[t[i],t[s]]}return t}getRandomNumber(e,t){return Math.floor(Math.random()*(t-e+1))+e}onLevelSelectChange(e){this.selectedLevel=e.target.value}}R(fe,"styles",G`
        .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        background-color: #004481;
        color: #fff;
        }

        .card-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        justify-items: center;
        align-items: center;
        padding: 16px;
        }

        .card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80px;
        font-size: 20px;
        background-color: #eee;
        cursor: pointer;
        }

        .username {
        display: flex;
        align-items: center;
        gap: 8px;
        }

        .username-icon {
        width: 20px;
        height: 20px;
        }

        .level-select-wrapper {
        gap: 8px;
        }

        .level-label {
        font-size: 14px;
        font-weight: bold;
        }

        .level-select {
        padding: 6px;
        font-size: 14px;
        }

        /* Estilos responsivos para dispositivos móviles */
        @media (max-width: 600px) {
        .level-select-wrapper {
            flex-direction: row;
        }

        .level-select {
            margin-top: 8px;
        }
        }

        .new-game {
        display: block;
        text-align: center;
        font-weight: bold;
        }

        .new-game-button {
        padding: 8px 16px;
        font-size: 16px;
        background-color: #0c186c;
        color: #fff;
        border: none;
        display: block;
        margin: 0 auto;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        }

        .new-game-button:hover {
        background-color: #061049;
        }

        .question-mark {
        font-size: 32px;
        }

        .correct-answer {
        background-color: green;
        }

        .wrong-answer {
        background-color: red;
        }

        .disabled {
        pointer-events: none;
        }

        .score {
        font-size: 24px;
        font-weight: 300;
        }

        .level-select {
        font-size: 16px;
        padding: 8px;
        }

        .timer,
        .game-phrase {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        align-items: center;
        width: 100%;
        }

        .score-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 16px;
        }

        .hide {
        display: none;
        }

        .play-button-container {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        }

        @media (max-width: 600px) {
        .card-container {
            grid-template-columns: repeat(3, 1fr);
        }
        }

        @media (max-width: 410px) {
        .card-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }
        }
    `);customElements.define("view-card",fe);class $e extends ge{static get properties(){return{selectedPage:{type:String},page:{type:String},inputError:{type:Boolean}}}constructor(){super(),this.selectedPage="",this.loggedIn=!1,this.inputError=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.handlePopState.bind(this))}handlePopState(){localStorage.removeItem("token")}render(){return g`
            <div class="login-container">
                <div class="mouse">${me.mouse}</div>
                <h1 class="login-title">Name</h1>
                <input
                id="usernameInput"
                type="text"
                value=""
                name="inputName"
                class="login-input ${this.inputError?"error":""}"
                placeholder="Name"
                @focus="${this.handleInputFocus}"
                />
                ${this.inputError?g`
                    <p class="error-message">
                        The name requires minimum two letters
                    </p>
                    `:""}
                <button @click="${this.login}" class="login-button">Join</button>
            </div>
        `}handleInputFocus(){this.inputError=!1}login(){const e=this.shadowRoot.getElementById("usernameInput").value;if(e.length<3){this.inputError=!0;return}const t=ue();this.dispatchEvent(new CustomEvent("username-login",{composed:!0,bubbles:!0,detail:{username:e,token:t}})),localStorage.setItem("token",t),pe(t)?this.dispatchEvent(new CustomEvent("navigate",{detail:"/view-card"})):console.log("Token inválido"),this.shadowRoot.querySelector("[name=inputName]").value=""}}R($e,"styles",G`
    .mouse {
        display: flex;
        justify-content: center;
        align-items: center;
        }

        .login-title {
        font-size: 16px;
        margin-bottom: 24px;
        color: #004481;
        }

        .login-input {
        width: 100%;
        padding: 12px;
        margin-bottom: 16px;
        border: 1px solid #b0b8c6;
        border-radius: 4px;
        font-size: 16px;
        box-sizing: border-box;
        outline: none;
        transition: box-shadow 0.3s ease;
        }

        .login-input:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        }

        .login-button {
        width: 100%;
        padding: 12px;
        background-color: #0c186c;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
        }

        .login-button:hover {
        background-color: #061049;
        }
        .error {
        border: 1px solid red;
        }

        .error-message {
        color: red;
        font-size: 12px;
        margin-top: 8px;
        }
    `);customElements.define("view-login",$e);class ye extends A{static get properties(){return{user:{type:String},page:{type:String},hideLogin:{type:Boolean},loggedIn:{type:Boolean},initialized:{type:Boolean}}}constructor(){super(),this.user="",this.page="login",this.hideLogin=!1,this.loggedIn=!1,this.initialized=!1,Be(e=>this.handleNavigation(e.pathname))}generateToken(){return ue()}render(){return g`
        <div class="app-container">
            <div
            class="login-container"
            ?hidden=${this.hideLogin&&this.page!=="login"}
            >
            <view-login
                @username-login="${this.dataFromLogin}"
                name="login"
                ?active=${this.page==="login"}
                @navigate=${this.navigate}
            ></view-login>
            </div>
            ${this.page==="card"?g`
                <view-card
                    .username="${this.user}"
                    name="card"
                    ?active=${this.page==="card"}
                ></view-card>
                `:""}
        </div>
    `}dataFromLogin(e){this.user=e.detail}handleNavigation(e){const t=decodeURIComponent(e);if(this.loggedIn&&this.initialized){this.page="card",this.hideLogin=!0;return}const s=localStorage.getItem("token"),i=s&&pe(s);if(t==="/view-card"&&!i){window.location.href="/";return}this.page=t==="/view-card"?"card":"login",this.hideLogin=this.page==="card",this.initialized=!0}navigate(){this.page="card",this.hideLogin=!0,window.history.pushState({},"","/view-card")}}R(ye,"styles",G`
        :host {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: sans-serif;
        background-color: #ededed;
        }

        .app-container {
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        padding: 24px;
        text-align: left;
        width: 100%;
        max-width: 400px;
        margin-top: -10rem;
        }

        .container {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-gap: 16px;
        max-width: 400px;
        width: 100%;
        margin: 0 auto;
        padding: 16px;
        }

        .login-container {
        display: block;
        }

        .login-container[hidden] {
        display: none;
        }
    `);customElements.define("memory-card",ye);

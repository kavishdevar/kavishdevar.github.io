/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$9 = e => n => {if (typeof n === "function") {return ((e, n) => {if (!customElements.get(e)){customElements.define(e, n);}return n;})(e, n);} else {return ((e, n) => {const { kind: t, elements: s } = n;return {kind: t,elements: s,finisher(n) {if (!customElements.get(e)){customElements.define(e, n);}}};})(e, n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$6=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$8=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$7(n){return (t,o)=>void 0!==o?e$8(n,t,o):i$6(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$3(t){return n$7({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$7=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$5(i,n){return o$7({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$7(e){return o$7({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$6;const e$6=null!=(null===(n$6=window.HTMLSlotElement)||void 0===n$6?void 0:n$6.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$5(n){const{slot:l,selector:t}=null!=n?n:{};return o$7({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$6(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$5=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),n$5=new WeakMap;let o$6 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$6("string"==typeof t?t:t+"",void 0,s$5),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$6(n,t,s$5)},S$1=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$4=window,r$1=e$4.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$5=e$4.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$3=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$3},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$4){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$3)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$5||o$5({ReactiveElement:u$1}),(null!==(s$4=e$4.reactiveElementVersions)&&void 0!==s$4?s$4:e$4.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$3=window,s$3=i$3.trustedTypes,e$3=s$3?s$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$4="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$3="?"+n$3,h=`<${l$3}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$2="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$4+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$4)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$4).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$3?s$3.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$3)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$3?s$3.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$3.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$1=i$3.litHtmlVersions)&&void 0!==t$1?t$1:i$3.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$2,o$3;let s$2 = class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}};s$2.finalized=!0,s$2._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$2});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s$2});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2=!1;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$v = i$4 `.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-card{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);position:relative;box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-card::after{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);border-width:1px;border-style:solid;border-color:#e0e0e0}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}:host{display:inline-flex}:host(:not([clickable])){cursor:default}.mdc-card{width:inherit;height:inherit;padding:var(--md-card-padding, 0);margin:var(--md-card-margin, 0);flex:1;z-index:0}.mdc-card .mdc-card__primary-action{flex:1}.mdc-card .mdc-card__primary-action.mdc-card__primary-action--disabled{cursor:initial}.mdc-card .mdc-card__primary-action:not(:has(+.mdc-card__actions)) .mdc-card__ripple{border-radius:var(--_container-shape)}.mdc-card .mdc-card__media{flex:1;background-color:inherit;border-radius:inherit}.mdc-card md-focus-ring{border-radius:var(--_container-shape)}::slotted(img:first-child){border-top-left-radius:var(--_container-shape);border-top-right-radius:var(--_container-shape)}slot::slotted(.mdc-card__action){display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;align-items:initial;justify-content:center;user-select:none}slot::slotted(.mdc-card__action:focus){outline:none}slot[name=button]::slotted(.mdc-card__action--button){margin-left:0;margin-right:8px}[dir=rtl] slot[name=button]::slotted(.mdc-card__action--button),::slotted(.mdc-card__action--buttonslot[name=button][dir=rtl]){margin-left:8px;margin-right:0}slot[name=button]::slotted(.mdc-card__action--button:last-child){margin-left:0;margin-right:0}[dir=rtl] slot[name=button]::slotted(.mdc-card__action--button:last-child),::slotted(.mdc-card__action--button:last-childslot[name=button][dir=rtl]){margin-left:0;margin-right:0}.mdc-card__actions--full-bleed slot[name=button]::slotted(.mdc-card__action--button){justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed slot[name=button]::slotted(.mdc-card__action--button),.mdc-card__actions--full-bleed ::slotted(.mdc-card__action--buttonslot[name=button][dir=rtl]){text-align:right}slot[name=icon]::slotted(.mdc-card__action--icon){margin:-6px 0}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$u = i$4 `.card{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color);border-radius:var(--_container-shape);background-color:var(--_container-color);border:var(--_outline-width) solid var(--_outline-color)}md-focus-ring{--md-focus-ring-shape: 12px;--md-focus-ring-outward-offset: -3px;--md-focus-ring-shape-end-end: 0;--md-focus-ring-shape-end-start: 0}:host{--_container-color: var(--md-elevated-card-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-card-container-elevation, 1);--_container-shadow-color: var(--md-elevated-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-elevated-card-container-shape, 12px);--_disabled-container-color: var(--md-elevated-card-disabled-container-color, var(--md-sys-color-surface, #fef7ff));--_disabled-container-elevation: var(--md-elevated-card-disabled-container-elevation, 1);--_disabled-container-opacity: var(--md-elevated-card-disabled-container-opacity, 0.38);--_dragged-container-elevation: var(--md-elevated-card-dragged-container-elevation, 4);--_dragged-state-layer-color: var(--md-elevated-card-dragged-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_dragged-state-layer-opacity: var(--md-elevated-card-dragged-state-layer-opacity, 0.16);--_focus-container-elevation: var(--md-elevated-card-focus-container-elevation, 1);--_focus-state-layer-color: var(--md-elevated-card-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity: var(--md-elevated-card-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-elevated-card-hover-container-elevation, 2);--_hover-state-layer-color: var(--md-elevated-card-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-elevated-card-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-elevated-card-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-elevated-card-icon-size, 24px);--_pressed-container-elevation: var(--md-elevated-card-pressed-container-elevation, 1);--_pressed-state-layer-color: var(--md-elevated-card-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-elevated-card-pressed-state-layer-opacity, 0.12)}/*# sourceMappingURL=elevated-styles.css.map */
`;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$2(class extends i$2{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A key to retrieve an `Attachable` element's `AttachableController` from a
 * global `MutationObserver`.
 */
const ATTACHABLE_CONTROLLER = Symbol('attachableController');
let FOR_ATTRIBUTE_OBSERVER;
{
    /**
     * A global `MutationObserver` that reacts to `for` attribute changes on
     * `Attachable` elements. If the `for` attribute changes, the controller will
     * re-attach to the new referenced element.
     */
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver(records => {
        for (const record of records) {
            // When a control's `for` attribute changes, inform its
            // `AttachableController` to update to a new control.
            record.target[ATTACHABLE_CONTROLLER]
                ?.hostConnected();
        }
    });
}
/**
 * A controller that provides an implementation for `Attachable` elements.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement implements Attachable {
 *   get control() { return this.attachableController.control; }
 *
 *   private readonly attachableController = new AttachableController(
 *     this,
 *     (previousControl, newControl) => {
 *       previousControl?.removeEventListener('click', this.handleClick);
 *       newControl?.addEventListener('click', this.handleClick);
 *     }
 *   );
 *
 *   // Implement remaining `Attachable` properties/methods that call the
 *   // controller's properties/methods.
 * }
 * ```
 */
class AttachableController {
    get htmlFor() {
        return this.host.getAttribute('for');
    }
    set htmlFor(htmlFor) {
        if (htmlFor === null) {
            this.host.removeAttribute('for');
        }
        else {
            this.host.setAttribute('for', htmlFor);
        }
    }
    get control() {
        if (this.host.hasAttribute('for')) {
            if (!this.htmlFor || !this.host.isConnected) {
                return null;
            }
            return this.host.getRootNode()
                .querySelector(`#${this.htmlFor}`);
        }
        return this.currentControl || this.host.parentElement;
    }
    set control(control) {
        if (control) {
            this.attach(control);
        }
        else {
            this.detach();
        }
    }
    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(host, onControlChange) {
        this.host = host;
        this.onControlChange = onControlChange;
        this.currentControl = null;
        host.addController(this);
        host[ATTACHABLE_CONTROLLER] = this;
        FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ['for'] });
    }
    attach(control) {
        if (control === this.currentControl) {
            return;
        }
        this.setCurrentControl(control);
        // When imperatively attaching, remove the `for` attribute so
        // that the attached control is used instead of a referenced one.
        this.host.removeAttribute('for');
    }
    detach() {
        this.setCurrentControl(null);
        // When imperatively detaching, add an empty `for=""` attribute. This will
        // ensure the control is `null` rather than the `parentElement`.
        this.host.setAttribute('for', '');
    }
    /** @private */
    hostConnected() {
        this.setCurrentControl(this.control);
    }
    /** @private */
    hostDisconnected() {
        this.setCurrentControl(null);
    }
    setCurrentControl(control) {
        this.onControlChange(this.currentControl, control);
        this.currentControl = control;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Easing functions to use for web animations.
 *
 * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
 *
 * TODO(b/241113345): replace with tokens
 */
const EASING = {
    STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
    STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
    STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
    EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
    EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
    EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
};
/**
 * Creates an `AnimationSignal` that can be used to cancel a previous task.
 *
 * @example
 * class MyClass {
 *   private labelAnimationSignal = createAnimationSignal();
 *
 *   private async animateLabel() {
 *     // Start of the task. Previous tasks will be canceled.
 *     const signal = this.labelAnimationSignal.start();
 *
 *     // Do async work...
 *     if (signal.aborted) {
 *       // Use AbortSignal to check if a request was made to abort after some
 *       // asynchronous work.
 *       return;
 *     }
 *
 *     const animation = this.animate(...);
 *     // Add event listeners to be notified when the task should be canceled.
 *     signal.addEventListener('abort', () => {
 *       animation.cancel();
 *     });
 *
 *     animation.addEventListener('finish', () => {
 *       // Tell the signal that the current task is finished.
 *       this.labelAnimationSignal.finish();
 *     });
 *   }
 * }
 *
 * @return An `AnimationSignal`.
 */
function createAnimationSignal() {
    // The current animation's AbortController
    let animationAbortController = null;
    return {
        start() {
            // Tell the previous animation to cancel.
            animationAbortController?.abort();
            // Set up a new AbortController for the current animation.
            animationAbortController = new AbortController();
            // Provide the AbortSignal so that the caller can check aborted status
            // and add listeners.
            return animationAbortController.signal;
        },
        finish() {
            animationAbortController = null;
        },
    };
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = '::after';
const ANIMATION_FILL = 'forwards';
/**
 * Interaction states for the ripple.
 *
 * On Touch:
 *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
 *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
 *
 * On Mouse or Pen:
 *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
 */
var State;
(function (State) {
    /**
     * Initial state of the control, no touch in progress.
     *
     * Transitions:
     *   - on touch down: transition to `TOUCH_DELAY`.
     *   - on mouse down: transition to `WAITING_FOR_CLICK`.
     */
    State[State["INACTIVE"] = 0] = "INACTIVE";
    /**
     * Touch down has been received, waiting to determine if it's a swipe or
     * scroll.
     *
     * Transitions:
     *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
     *   - on cancel: transition to `INACTIVE`.
     *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
     */
    State[State["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    /**
     * A touch has been deemed to be a press
     *
     * Transitions:
     *  - on up: transition to `WAITING_FOR_CLICK`.
     */
    State[State["HOLDING"] = 2] = "HOLDING";
    /**
     * The user touch has finished, transition into rest state.
     *
     * Transitions:
     *   - on click end press; transition to `INACTIVE`.
     */
    State[State["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
/**
 * Events that the ripple listens to.
 */
const EVENTS$1 = [
    'click', 'contextmenu', 'pointercancel', 'pointerdown', 'pointerenter',
    'pointerleave', 'pointerup'
];
/**
 * Delay reacting to touch so that we do not show the ripple for a swipe or
 * scroll interaction.
 */
const TOUCH_DELAY_MS = 150;
/**
 * A ripple component.
 */
class Ripple extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Disables the ripple.
         */
        this.disabled = false;
        this.hovered = false;
        this.pressed = false;
        this.rippleSize = '';
        this.rippleScale = '';
        this.initialSize = 0;
        this.state = State.INACTIVE;
        this.checkBoundsAfterContextMenu = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        const classes = {
            'hovered': this.hovered,
            'pressed': this.pressed,
        };
        return x `<div class="surface ${o$1(classes)}"></div>`;
    }
    update(changedProps) {
        if (changedProps.has('disabled') && this.disabled) {
            this.hovered = false;
            this.pressed = false;
        }
        super.update(changedProps);
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerenter(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = true;
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerleave(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = false;
        // release a held mouse or pen press that moves outside the element
        if (this.state !== State.INACTIVE) {
            this.endPressAnimation();
        }
    }
    handlePointerup(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        if (this.state === State.HOLDING) {
            this.state = State.WAITING_FOR_CLICK;
            return;
        }
        if (this.state === State.TOUCH_DELAY) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(this.rippleStartEvent);
            return;
        }
    }
    async handlePointerdown(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.rippleStartEvent = event;
        if (!this.isTouch(event)) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(event);
            return;
        }
        // after a longpress contextmenu event, an extra `pointerdown` can be
        // dispatched to the pressed element. Check that the down is within
        // bounds of the element in this case.
        if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
            return;
        }
        this.checkBoundsAfterContextMenu = false;
        // Wait for a hold after touch delay
        this.state = State.TOUCH_DELAY;
        await new Promise(resolve => {
            setTimeout(resolve, TOUCH_DELAY_MS);
        });
        if (this.state !== State.TOUCH_DELAY) {
            return;
        }
        this.state = State.HOLDING;
        this.startPressAnimation(event);
    }
    handleClick() {
        // Click is a MouseEvent in Firefox and Safari, so we cannot use
        // `shouldReactToEvent`
        if (this.disabled) {
            return;
        }
        if (this.state === State.WAITING_FOR_CLICK) {
            this.endPressAnimation();
            return;
        }
        if (this.state === State.INACTIVE) {
            // keyboard synthesized click event
            this.startPressAnimation();
            this.endPressAnimation();
        }
    }
    handlePointercancel(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.endPressAnimation();
    }
    handleContextmenu() {
        if (this.disabled) {
            return;
        }
        this.checkBoundsAfterContextMenu = true;
        this.endPressAnimation();
    }
    determineRippleSize() {
        const { height, width } = this.getBoundingClientRect();
        const maxDim = Math.max(height, width);
        const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
        const maxRadius = hypotenuse + PADDING;
        this.initialSize = initialSize;
        this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
        this.rippleSize = `${initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
        const { scrollX, scrollY } = window;
        const { left, top } = this.getBoundingClientRect();
        const documentX = scrollX + left;
        const documentY = scrollY + top;
        const { pageX, pageY } = pointerEvent;
        return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
        const { height, width } = this.getBoundingClientRect();
        // end in the center
        const endPoint = {
            x: (width - this.initialSize) / 2,
            y: (height - this.initialSize) / 2,
        };
        let startPoint;
        if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent);
        }
        else {
            startPoint = {
                x: width / 2,
                y: height / 2,
            };
        }
        // center around start point
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
        if (!this.mdRoot) {
            return;
        }
        this.pressed = true;
        this.growAnimation?.cancel();
        this.determineRippleSize();
        const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
        const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
        this.growAnimation = this.mdRoot.animate({
            top: [0, 0],
            left: [0, 0],
            height: [this.rippleSize, this.rippleSize],
            width: [this.rippleSize, this.rippleSize],
            transform: [
                `translate(${translateStart}) scale(1)`,
                `translate(${translateEnd}) scale(${this.rippleScale})`
            ],
        }, {
            pseudoElement: PRESS_PSEUDO,
            duration: PRESS_GROW_MS,
            easing: EASING.STANDARD,
            fill: ANIMATION_FILL
        });
    }
    async endPressAnimation() {
        this.state = State.INACTIVE;
        const animation = this.growAnimation;
        const pressAnimationPlayState = animation?.currentTime ?? Infinity;
        // TODO: go/ts51upgrade - Auto-added to unblock TS5.1 migration.
        //   TS2365: Operator '>=' cannot be applied to types 'CSSNumberish' and
        //   'number'.
        // @ts-ignore
        if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
            this.pressed = false;
            return;
        }
        await new Promise(resolve => {
            // TODO: go/ts51upgrade - Auto-added to unblock TS5.1 migration.
            //   TS2363: The right-hand side of an arithmetic operation must be of
            //   type 'any', 'number', 'bigint' or an enum type.
            // @ts-ignore
            setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
        });
        if (this.growAnimation !== animation) {
            // A new press animation was started. The old animation was canceled and
            // should not finish the pressed state.
            return;
        }
        this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
        if (this.disabled || !event.isPrimary) {
            return false;
        }
        if (this.rippleStartEvent &&
            this.rippleStartEvent.pointerId !== event.pointerId) {
            return false;
        }
        if (event.type === 'pointerenter' || event.type === 'pointerleave') {
            return !this.isTouch(event);
        }
        const isPrimaryButton = event.buttons === 1;
        return this.isTouch(event) || isPrimaryButton;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x, y }) {
        const { top, left, bottom, right } = this.getBoundingClientRect();
        return x >= left && x <= right && y >= top && y <= bottom;
    }
    isTouch({ pointerType }) {
        return pointerType === 'touch';
    }
    /** @private */
    async handleEvent(event) {
        switch (event.type) {
            case 'click':
                this.handleClick();
                break;
            case 'contextmenu':
                this.handleContextmenu();
                break;
            case 'pointercancel':
                this.handlePointercancel(event);
                break;
            case 'pointerdown':
                await this.handlePointerdown(event);
                break;
            case 'pointerenter':
                this.handlePointerenter(event);
                break;
            case 'pointerleave':
                this.handlePointerleave(event);
                break;
            case 'pointerup':
                this.handlePointerup(event);
                break;
        }
    }
    onControlChange(prev, next) {
        for (const event of EVENTS$1) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
}
__decorate([
    n$7({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", void 0);
__decorate([
    t$3()
], Ripple.prototype, "hovered", void 0);
__decorate([
    t$3()
], Ripple.prototype, "pressed", void 0);
__decorate([
    i$5('.surface')
], Ripple.prototype, "mdRoot", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$t = i$4 `:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Ripples, also known as state layers, are visual indicators used to
 * communicate the status of a component or interactive element.
 *
 * @description A state layer is a semi-transparent covering on an element that
 * indicates its state. State layers provide a systematic approach to
 * visualizing states by using opacity. A layer can be applied to an entire
 * element or in a circular shape and only one state layer can be applied at a
 * given time.
 *
 * @final
 * @suppress {visibility}
 */
let MdRipple = class MdRipple extends Ripple {
};
MdRipple.styles = [styles$t];
MdRipple = __decorate([
    e$9('md-ripple')
], MdRipple);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Events that the focus ring listens to.
 *
 * @fires visibility-changed Fired whenever `visible` changes.
 */
const EVENTS = ['focusin', 'focusout', 'pointerdown'];
/**
 * A focus ring component.
 */
class FocusRing extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Makes the focus ring visible.
         */
        this.visible = false;
        /**
         * Makes the focus ring animate inwards instead of outwards.
         */
        this.inward = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    /** @private */
    handleEvent(event) {
        if (event[HANDLED_BY_FOCUS_RING]) {
            // This ensures the focus ring does not activate when multiple focus rings
            // are used within a single component.
            return;
        }
        switch (event.type) {
            default:
                return;
            case 'focusin':
                this.visible = this.control?.matches(':focus-visible') ?? false;
                break;
            case 'focusout':
            case 'pointerdown':
                this.visible = false;
                break;
        }
        event[HANDLED_BY_FOCUS_RING] = true;
    }
    onControlChange(prev, next) {
        for (const event of EVENTS) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
    update(changed) {
        if (changed.has('visible')) {
            // This logic can be removed once the `:has` selector has been introduced
            // to Firefox. This is necessary to allow correct submenu styles.
            this.dispatchEvent(new Event('visibility-changed'));
        }
        super.update(changed);
    }
}
__decorate([
    n$7({ type: Boolean, reflect: true })
], FocusRing.prototype, "visible", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], FocusRing.prototype, "inward", void 0);
const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$s = i$4 `:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/267336424): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdFocusRing = class MdFocusRing extends FocusRing {
};
MdFocusRing.styles = [styles$s];
MdFocusRing = __decorate([
    e$9('md-focus-ring')
], MdFocusRing);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A component for elevation.
 */
class Elevation extends s$2 {
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        return x `<span class="shadow"></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$r = i$4 `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The `<md-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 */
let MdElevation = class MdElevation extends Elevation {
};
MdElevation.styles = [styles$r];
MdElevation = __decorate([
    e$9('md-elevation')
], MdElevation);

class Card extends s$2 {
    constructor() {
        super(...arguments);
        /** Allows the card to be clickable with a ripple effect. */
        this.clickable = false;
    }
    render() {
        return x `
            <div class="${o$1(this.getRenderClasses())}">
                ${this.renderPrimaryAction()}
                ${this.renderActions()}
                <md-elevation shadow></md-elevation>
            </div>`;
    }
    getRenderClasses() {
        return {
            'mdc-card': true,
            'card': true,
        };
    }
    getPrimaryActionRenderClasses() {
        return {
            'mdc-card__primary-action': true,
            'mdc-card__primary-action--disabled': !this.clickable
        };
    }
    stopActionPropagation(action) {
        const events = ['click', 'pointerdown', 'pointerup', 'pointercancel', 'pointerleave', 'pointerenter', 'contextmenu'];
        for (const event of events) {
            action.addEventListener(event, (e) => {
                e.stopPropagation();
            });
        }
        action.addEventListener('focus', () => this.blur());
        action.addEventListener('blur', () => this.focus());
    }
    getRenderActionsClasses() {
        return {
            'mdc-card__actions': true,
        };
    }
    renderPrimaryAction() {
        return x `
            <div id="primary-action"
                 class="${o$1(this.getPrimaryActionRenderClasses())}"
                 tabindex="0"
                 aria-label="${this.ariaLabel}">
                 ${this.renderRipple()}
                ${this.renderFocusRing()}
                <slot></slot>
            </div>`;
    }
    getRippleRenderClasses() {
        return {
            'mdc-card__ripple': true
        };
    }
    /** @soyTemplate */
    renderFocusRing() {
        return x `
            <md-focus-ring for="primary-action" inward></md-focus-ring>`;
    }
    onButtonSlotChanged() {
        for (const button of this.buttons) {
            button.classList.add('mdc-card__action');
            button.classList.add('mdc-card__action--button');
            this.stopActionPropagation(button);
        }
        this.requestUpdate();
    }
    onIconSlotChanged() {
        for (const icon of this.icons) {
            icon.classList.add('mdc-card__action');
            icon.classList.add('mdc-card__action--icon');
            this.stopActionPropagation(icon);
        }
        this.requestUpdate();
    }
    renderRipple() {
        return x `<md-ripple class="${o$1(this.getRippleRenderClasses())}" ?disabled=${!this.clickable}></md-ripple>`;
    }
    wrapButtonSlot(buttonSlotTemplate) {
        if (this.buttons.length > 0) {
            return x `
                <div class="mdc-card__action-buttons">
                    ${buttonSlotTemplate}
                </div>`;
        }
        return buttonSlotTemplate;
    }
    wrapIconSlot(iconSlotTemplate) {
        if (this.icons.length > 0) {
            return x `
                <div class="mdc-card__action-icons">
                    ${iconSlotTemplate}
                </div>`;
        }
        return iconSlotTemplate;
    }
    renderActions() {
        const buttonSlotTemplate = x `<slot name="button" @slotchange=${this.onButtonSlotChanged}></slot>`;
        const iconSlotTemplate = x `<slot name="icon" @slotchange=${this.onIconSlotChanged}></slot>`;
        if (this.icons.length > 0 || this.buttons.length > 0) {
            return x `
            <div class="${o$1(this.getRenderActionsClasses())}"
                ${this.renderRipple()}>
                ${this.wrapButtonSlot(buttonSlotTemplate)}
                ${this.wrapIconSlot(iconSlotTemplate)}
            </div>`;
        }
        return x `
          ${buttonSlotTemplate}
          ${iconSlotTemplate}
      `;
    }
}
__decorate([
    n$7({ type: Boolean, reflect: true })
], Card.prototype, "clickable", void 0);
__decorate([
    l$5({ slot: 'button' })
], Card.prototype, "buttons", void 0);
__decorate([
    l$5({ slot: 'icon' })
], Card.prototype, "icons", void 0);

class ElevatedCard extends Card {
}

let MdElevatedCard = class MdElevatedCard extends ElevatedCard {
};
MdElevatedCard.styles = [styles$v, styles$u];
MdElevatedCard = __decorate([
    e$9('md-elevated-card')
], MdElevatedCard);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$q = i$4 `.card{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color);border-radius:var(--_container-shape);background-color:var(--_container-color);border:var(--_outline-width) solid var(--_outline-color)}md-focus-ring{--md-focus-ring-shape: 12px;--md-focus-ring-outward-offset: -3px;--md-focus-ring-shape-end-end: 0;--md-focus-ring-shape-end-start: 0}:host{--_container-color: var(--md-filled-card-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-elevation: var(--md-filled-card-container-elevation, 0);--_container-shadow-color: var(--md-filled-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-card-container-shape, 12px);--_disabled-container-color: var(--md-filled-card-disabled-container-color, var(--md-sys-color-surface-variant, #e7e0ec));--_disabled-container-elevation: var(--md-filled-card-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-card-disabled-container-opacity, 0.38);--_dragged-container-elevation: var(--md-filled-card-dragged-container-elevation, 3);--_dragged-state-layer-color: var(--md-filled-card-dragged-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_dragged-state-layer-opacity: var(--md-filled-card-dragged-state-layer-opacity, 0.16);--_focus-container-elevation: var(--md-filled-card-focus-container-elevation, 0);--_focus-state-layer-color: var(--md-filled-card-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity: var(--md-filled-card-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-filled-card-hover-container-elevation, 1);--_hover-state-layer-color: var(--md-filled-card-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-card-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-card-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-filled-card-icon-size, 24px);--_pressed-container-elevation: var(--md-filled-card-pressed-container-elevation, 0);--_pressed-state-layer-color: var(--md-filled-card-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-filled-card-pressed-state-layer-opacity, 0.12)}/*# sourceMappingURL=filled-styles.css.map */
`;

class FilledCard extends Card {
}

let MdFilledCard = class MdFilledCard extends FilledCard {
};
MdFilledCard.styles = [styles$v, styles$q];
MdFilledCard = __decorate([
    e$9('md-filled-card')
], MdFilledCard);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$p = i$4 `.card{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color);border-radius:var(--_container-shape);background-color:var(--_container-color);border:var(--_outline-width) solid var(--_outline-color)}md-focus-ring{--md-focus-ring-shape: 12px;--md-focus-ring-outward-offset: -3px;--md-focus-ring-shape-end-end: 0;--md-focus-ring-shape-end-start: 0}:host{--_container-color: var(--md-outlined-card-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-outlined-card-container-elevation, 0);--_container-shadow-color: var(--md-outlined-card-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-outlined-card-container-shape, 12px);--_disabled-container-elevation: var(--md-outlined-card-disabled-container-elevation, 0);--_disabled-outline-color: var(--md-outlined-card-disabled-outline-color, var(--md-sys-color-outline, #79747e));--_disabled-outline-opacity: var(--md-outlined-card-disabled-outline-opacity, 0.12);--_dragged-container-elevation: var(--md-outlined-card-dragged-container-elevation, 3);--_dragged-outline-color: var(--md-outlined-card-dragged-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_dragged-state-layer-color: var(--md-outlined-card-dragged-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_dragged-state-layer-opacity: var(--md-outlined-card-dragged-state-layer-opacity, 0.16);--_focus-container-elevation: var(--md-outlined-card-focus-container-elevation, 0);--_focus-outline-color: var(--md-outlined-card-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-color: var(--md-outlined-card-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity: var(--md-outlined-card-focus-state-layer-opacity, 0.12);--_hover-container-elevation: var(--md-outlined-card-hover-container-elevation, 1);--_hover-outline-color: var(--md-outlined-card-hover-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_hover-state-layer-color: var(--md-outlined-card-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-outlined-card-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-outlined-card-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-card-icon-size, 24px);--_outline-color: var(--md-outlined-card-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_outline-width: var(--md-outlined-card-outline-width, 1px);--_pressed-container-elevation: var(--md-outlined-card-pressed-container-elevation, 0);--_pressed-outline-color: var(--md-outlined-card-pressed-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_pressed-state-layer-color: var(--md-outlined-card-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-outlined-card-pressed-state-layer-opacity, 0.12)}/*# sourceMappingURL=outlined-styles.css.map */
`;

class OutlinedCard extends Card {
}

let MdOutlinedCard = class MdOutlinedCard extends OutlinedCard {
};
MdOutlinedCard.styles = [styles$v, styles$p];
MdOutlinedCard = __decorate([
    e$9('md-outlined-card')
], MdOutlinedCard);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Accessibility Object Model reflective aria properties.
 */
const ARIA_PROPERTIES = [
    'ariaAtomic',
    'ariaAutoComplete',
    'ariaBusy',
    'ariaChecked',
    'ariaColCount',
    'ariaColIndex',
    'ariaColSpan',
    'ariaCurrent',
    'ariaDisabled',
    'ariaExpanded',
    'ariaHasPopup',
    'ariaHidden',
    'ariaInvalid',
    'ariaKeyShortcuts',
    'ariaLabel',
    'ariaLevel',
    'ariaLive',
    'ariaModal',
    'ariaMultiLine',
    'ariaMultiSelectable',
    'ariaOrientation',
    'ariaPlaceholder',
    'ariaPosInSet',
    'ariaPressed',
    'ariaReadOnly',
    'ariaRequired',
    'ariaRoleDescription',
    'ariaRowCount',
    'ariaRowIndex',
    'ariaRowSpan',
    'ariaSelected',
    'ariaSetSize',
    'ariaSort',
    'ariaValueMax',
    'ariaValueMin',
    'ariaValueNow',
    'ariaValueText',
];
/**
 * Accessibility Object Model aria attributes.
 */
ARIA_PROPERTIES.map(ariaPropertyToAttribute);
/**
 * Converts an AOM aria property into its corresponding attribute.
 *
 * @example
 * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
 *
 * @param property The aria property.
 * @return The aria attribute.
 */
function ariaPropertyToAttribute(property) {
    return property
        .replace('aria', 'aria-')
        // IDREF attributes also include an "Element" or "Elements" suffix
        .replace(/Elements?/g, '')
        .toLowerCase();
}
/**
 * Enables a host custom element to be the target for aria roles and attributes.
 * Components should set the `elementInternals.role` property.
 *
 * By default, aria components are tab focusable. Provide a `focusable: false`
 * option for components that should not be tab focusable, such as
 * `role="listbox"`.
 *
 * This function will also polyfill aria `ElementInternals` properties for
 * Firefox.
 *
 * @param ctor The `ReactiveElement` constructor to set up.
 * @param options Options to configure the element's host aria.
 */
function setupHostAria(ctor, { focusable } = {}) {
    if (focusable !== false) {
        ctor.addInitializer(host => {
            host.addController({
                hostConnected() {
                    if (host.hasAttribute('tabindex')) {
                        return;
                    }
                    host.tabIndex = 0;
                }
            });
        });
    }
    if ('role' in Element.prototype) {
        return;
    }
    // Polyfill reflective aria properties for Firefox
    for (const ariaProperty of ARIA_PROPERTIES) {
        ctor.createProperty(ariaProperty, {
            attribute: ariaPropertyToAttribute(ariaProperty),
            reflect: true,
        });
    }
    ctor.createProperty('role', { reflect: true });
}
/**
 * Polyfills an element and its `ElementInternals` to support `ARIAMixin`
 * properties on internals. This is needed for Firefox.
 *
 * `setupHostAria()` must be called for the element class.
 *
 * @example
 * class XButton extends LitElement {
 *   static {
 *     setupHostAria(XButton);
 *   }
 *
 *   private internals =
 *       polyfillElementInternalsAria(this, this.attachInternals());
 *
 *   constructor() {
 *     super();
 *     this.internals.role = 'button';
 *   }
 * }
 */
function polyfillElementInternalsAria(host, internals) {
    if (checkIfElementInternalsSupportsAria(internals)) {
        return internals;
    }
    if (!('role' in host)) {
        throw new Error('Missing setupHostAria()');
    }
    let firstConnectedCallbacks = [];
    let hasBeenConnected = false;
    // Add support for Firefox, which has not yet implement ElementInternals aria
    for (const ariaProperty of ARIA_PROPERTIES) {
        let internalAriaValue = null;
        Object.defineProperty(internals, ariaProperty, {
            enumerable: true,
            configurable: true,
            get() {
                return internalAriaValue;
            },
            set(value) {
                const setValue = () => {
                    internalAriaValue = value;
                    if (!hasBeenConnected) {
                        firstConnectedCallbacks.push({ property: ariaProperty, callback: setValue });
                        return;
                    }
                    // Dynamic lookup rather than hardcoding all properties.
                    // tslint:disable-next-line:no-dict-access-on-struct-type
                    host[ariaProperty] = value;
                };
                setValue();
            },
        });
    }
    let internalRoleValue = null;
    Object.defineProperty(internals, 'role', {
        enumerable: true,
        configurable: true,
        get() {
            return internalRoleValue;
        },
        set(value) {
            const setRole = () => {
                internalRoleValue = value;
                if (!hasBeenConnected) {
                    firstConnectedCallbacks.push({
                        property: 'role',
                        callback: setRole,
                    });
                    return;
                }
                if (value === null) {
                    host.removeAttribute('role');
                }
                else {
                    host.setAttribute('role', value);
                }
            };
            setRole();
        },
    });
    host.addController({
        hostConnected() {
            if (hasBeenConnected) {
                return;
            }
            hasBeenConnected = true;
            const propertiesSetByUser = new Set();
            // See which properties were set by the user on host before we apply
            // internals values as attributes to host. Needs to be done in another
            // for loop because the callbacks set these attributes on host.
            for (const { property } of firstConnectedCallbacks) {
                const wasSetByUser = host.getAttribute(ariaPropertyToAttribute(property)) !== null ||
                    // Dynamic lookup rather than hardcoding all properties.
                    // tslint:disable-next-line:no-dict-access-on-struct-type
                    host[property] !== undefined;
                if (wasSetByUser) {
                    propertiesSetByUser.add(property);
                }
            }
            for (const { property, callback } of firstConnectedCallbacks) {
                // If the user has set the attribute or property, do not override the
                // user's value
                if (propertiesSetByUser.has(property)) {
                    continue;
                }
                callback();
            }
            // Remove strong callback references
            firstConnectedCallbacks = [];
        }
    });
    return internals;
}
// Separate function so that typescript doesn't complain about internals being
// "never".
function checkIfElementInternalsSupportsAria(internals) {
    return 'role' in internals;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up a `ReactiveElement` constructor to enable updates when delegating
 * aria attributes. Elements may bind `this.aria*` properties to `aria-*`
 * attributes in their render functions.
 *
 * This function will:
 * - Call `requestUpdate()` when an aria attribute changes.
 * - Add `role="presentation"` to the host.
 *
 * NOTE: The following features are not currently supported:
 * - Delegating IDREF attributes (ex: `aria-labelledby`, `aria-controls`)
 * - Delegating the `role` attribute
 *
 * @example
 * class XButton extends LitElement {
 *   static {
 *     requestUpdateOnAriaChange(XButton);
 *   }
 *
 *   protected override render() {
 *     return html`
 *       <button aria-label=${this.ariaLabel || nothing}>
 *         <slot></slot>
 *       </button>
 *     `;
 *   }
 * }
 *
 * @param ctor The `ReactiveElement` constructor to patch.
 */
function requestUpdateOnAriaChange(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
        ctor.createProperty(ariaProperty, {
            attribute: ariaPropertyToAttribute(ariaProperty),
            reflect: true,
        });
    }
    ctor.addInitializer(element => {
        const controller = {
            hostConnected() {
                element.setAttribute('role', 'presentation');
            }
        };
        element.addController(controller);
    });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Re-dispatches an event from the provided element.
 *
 * This function is useful for forwarding non-composed events, such as `change`
 * events.
 *
 * @example
 * class MyInput extends LitElement {
 *   render() {
 *     return html`<input @change=${this.redispatchEvent}>`;
 *   }
 *
 *   protected redispatchEvent(event: Event) {
 *     redispatchEvent(this, event);
 *   }
 * }
 *
 * @param element The element to dispatch the event from.
 * @param event The event to re-dispatch.
 * @return Whether or not the event was dispatched (if cancelable).
 */
function redispatchEvent(element, event) {
    // For bubbling events in SSR light DOM (or composed), stop their propagation
    // and dispatch the copy.
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
        event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
        event.preventDefault();
    }
    return dispatched;
}
/**
 * Dispatches a click event to the given element that triggers a native action,
 * but is not composed and therefore is not seen outside the element.
 *
 * This is useful for responding to an external click event on the host element
 * that should trigger an internal action like a button click.
 *
 * Note, a helper is provided because setting this up correctly is a bit tricky.
 * In particular, calling `click` on an element creates a composed event, which
 * is not desirable, and a manually dispatched event must specifically be a
 * `MouseEvent` to trigger a native action.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function dispatchActivationClick(element) {
    const event = new MouseEvent('click', { bubbles: true });
    element.dispatchEvent(event);
    return event;
}
/**
 * Returns true if the click event should trigger an activation behavior. The
 * behavior is defined by the element and is whatever it should do when
 * clicked.
 *
 * Typically when an element needs to handle a click, the click is generated
 * from within the element and an event listener within the element implements
 * the needed behavior; however, it's possible to fire a click directly
 * at the element that the element should handle. This method helps
 * distinguish these "external" clicks.
 *
 * An "external" click can be triggered in a number of ways: via a click
 * on an associated label for a form  associated element, calling
 * `element.click()`, or calling
 * `element.dispatchEvent(new MouseEvent('click', ...))`.
 *
 * Also works around Firefox issue
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
 * events for a microtask after called.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function isActivationClick(event) {
    // Event must start at the event target.
    if (event.currentTarget !== event.target) {
        return false;
    }
    // Event must not be retargeted from shadowRoot.
    if (event.composedPath()[0] !== event.target) {
        return false;
    }
    // Target must not be disabled; this should only occur for a synthetically
    // dispatched click.
    if (event.target.disabled) {
        return false;
    }
    // This is an activation if the event should not be squelched.
    return !squelchEvent(event);
}
// TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
//  Remove when Firefox bug is addressed.
function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
}
// Ignore events for one microtask only.
let isSquelchingEvents = false;
async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    // Need to pause for just one microtask.
    // tslint:disable-next-line
    await null;
    isSquelchingEvents = false;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A checkbox component.
 */
class Checkbox extends s$2 {
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    /**
     * Returns a ValidityState object that represents the validity states of the
     * checkbox.
     *
     * Note that checkboxes will only set `valueMissing` if `required` and not
     * checked.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     */
    get validity() {
        this.syncValidity();
        return this.internals.validity;
    }
    /**
     * Returns the native validation error message.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#constraint_validation_process
     */
    get validationMessage() {
        this.syncValidity();
        return this.internals.validationMessage;
    }
    /**
     * Returns whether an element will successfully validate based on forms
     * validation rules and constraints.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#constraint_validation_process
     */
    get willValidate() {
        this.syncValidity();
        return this.internals.willValidate;
    }
    constructor() {
        super();
        /**
         * Whether or not the checkbox is selected.
         */
        this.checked = false;
        /**
         * Whether or not the checkbox is disabled.
         */
        this.disabled = false;
        /**
         * Whether or not the checkbox is indeterminate.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
         */
        this.indeterminate = false;
        /**
         * When true, require the checkbox to be selected when participating in
         * form submission.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
         */
        this.required = false;
        /**
         * The value of the checkbox that is submitted with a form when selected.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
         */
        this.value = 'on';
        this.prevChecked = false;
        this.prevDisabled = false;
        this.prevIndeterminate = false;
        // Needed for Safari, see https://bugs.webkit.org/show_bug.cgi?id=261432
        // Replace with this.internals.validity.customError when resolved.
        this.hasCustomValidityError = false;
        this.internals = this /* needed for closure */.attachInternals();
        {
            this.addEventListener('click', (event) => {
                if (!isActivationClick(event)) {
                    return;
                }
                this.focus();
                dispatchActivationClick(this.input);
            });
        }
    }
    /**
     * Checks the checkbox's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     *
     * @return true if the checkbox is valid, or false if not.
     */
    checkValidity() {
        this.syncValidity();
        return this.internals.checkValidity();
    }
    /**
     * Checks the checkbox's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * The `validationMessage` is reported to the user by the browser. Use
     * `setCustomValidity()` to customize the `validationMessage`.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     *
     * @return true if the checkbox is valid, or false if not.
     */
    reportValidity() {
        this.syncValidity();
        return this.internals.reportValidity();
    }
    /**
     * Sets the checkbox's native validation error message. This is used to
     * customize `validationMessage`.
     *
     * When the error is not an empty string, the checkbox is considered invalid
     * and `validity.customError` will be true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     *
     * @param error The error message to display.
     */
    setCustomValidity(error) {
        this.hasCustomValidityError = !!error;
        this.internals.setValidity({ customError: !!error }, error, this.getInput());
    }
    update(changed) {
        if (changed.has('checked') || changed.has('disabled') ||
            changed.has('indeterminate')) {
            this.prevChecked = changed.get('checked') ?? this.checked;
            this.prevDisabled = changed.get('disabled') ?? this.disabled;
            this.prevIndeterminate =
                changed.get('indeterminate') ?? this.indeterminate;
        }
        const shouldAddFormValue = this.checked && !this.indeterminate;
        const state = String(this.checked);
        this.internals.setFormValue(shouldAddFormValue ? this.value : null, state);
        super.update(changed);
    }
    render() {
        const prevNone = !this.prevChecked && !this.prevIndeterminate;
        const prevChecked = this.prevChecked && !this.prevIndeterminate;
        const prevIndeterminate = this.prevIndeterminate;
        const isChecked = this.checked && !this.indeterminate;
        const isIndeterminate = this.indeterminate;
        const containerClasses = o$1({
            'disabled': this.disabled,
            'selected': isChecked || isIndeterminate,
            'unselected': !isChecked && !isIndeterminate,
            'checked': isChecked,
            'indeterminate': isIndeterminate,
            'prev-unselected': prevNone,
            'prev-checked': prevChecked,
            'prev-indeterminate': prevIndeterminate,
            'prev-disabled': this.prevDisabled,
        });
        // Needed for closure conformance
        const { ariaLabel, ariaInvalid } = this;
        // Note: <input> needs to be rendered before the <svg> for
        // form.reportValidity() to work in Chrome.
        return x `
      <div class="container ${containerClasses}">
        <input type="checkbox"
          id="input"
          aria-checked=${isIndeterminate ? 'mixed' : A}
          aria-label=${ariaLabel || A}
          aria-invalid=${ariaInvalid || A}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @change=${this.handleChange}
        >

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `;
    }
    updated() {
        // Sync validity when properties change, since validation properties may
        // have changed.
        this.syncValidity();
    }
    handleChange(event) {
        const target = event.target;
        this.checked = target.checked;
        this.indeterminate = target.indeterminate;
        redispatchEvent(this, event);
    }
    syncValidity() {
        // Sync the internal <input>'s validity and the host's ElementInternals
        // validity. We do this to re-use native `<input>` validation messages.
        const input = this.getInput();
        if (this.hasCustomValidityError) {
            input.setCustomValidity(this.internals.validationMessage);
        }
        else {
            input.setCustomValidity('');
        }
        this.internals.setValidity(input.validity, input.validationMessage, this.getInput());
    }
    getInput() {
        if (!this.input) {
            // If the input is not yet defined, synchronously render.
            this.connectedCallback();
            this.performUpdate();
        }
        if (this.isUpdatePending) {
            // If there are pending updates, synchronously perform them. This ensures
            // that constraint validation properties (like `required`) are synced
            // before interacting with input APIs that depend on them.
            this.scheduleUpdate();
        }
        return this.input;
    }
    /** @private */
    formResetCallback() {
        // The checked property does not reflect, so the original attribute set by
        // the user is used to determine the default value.
        this.checked = this.hasAttribute('checked');
    }
    /** @private */
    formStateRestoreCallback(state) {
        this.checked = state === 'true';
    }
}
(() => {
    requestUpdateOnAriaChange(Checkbox);
})();
/** @nocollapse */
Checkbox.shadowRootOptions = {
    ...s$2.shadowRootOptions,
    delegatesFocus: true
};
/** @nocollapse */
Checkbox.formAssociated = true;
__decorate([
    n$7({ type: Boolean })
], Checkbox.prototype, "checked", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], Checkbox.prototype, "disabled", void 0);
__decorate([
    n$7({ type: Boolean })
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    n$7({ type: Boolean })
], Checkbox.prototype, "required", void 0);
__decorate([
    n$7()
], Checkbox.prototype, "value", void 0);
__decorate([
    t$3()
], Checkbox.prototype, "prevChecked", void 0);
__decorate([
    t$3()
], Checkbox.prototype, "prevDisabled", void 0);
__decorate([
    t$3()
], Checkbox.prototype, "prevIndeterminate", void 0);
__decorate([
    i$5('input')
], Checkbox.prototype, "input", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$o = i$4 `:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_disabled-container-opacity: var(--md-checkbox-disabled-container-opacity, 0.38);--_disabled-outline-color: var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-width: var(--md-checkbox-disabled-outline-width, 2px);--_focus-outline-color: var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-outline-width: var(--md-checkbox-focus-outline-width, 2px);--_hover-outline-color: var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-checkbox-hover-outline-width, 2px);--_hover-state-layer-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--_outline-color: var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-width: var(--md-checkbox-outline-width, 2px);--_pressed-outline-color: var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-outline-width: var(--md-checkbox-pressed-outline-width, 2px);--_pressed-state-layer-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:var(--_container-size);position:relative;vertical-align:top;width:var(--_container-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--_outline-color);border-style:solid;border-width:var(--_outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--_hover-outline-color);border-width:var(--_hover-outline-width)}:where(:hover) .background{background:var(--_selected-hover-container-color)}:where(:hover) .icon{fill:var(--_selected-hover-icon-color)}:where(:focus-within) .outline{border-color:var(--_focus-outline-color);border-width:var(--_focus-outline-width)}:where(:focus-within) .background{background:var(--_selected-focus-container-color)}:where(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:where(:active) .outline{border-color:var(--_pressed-outline-color);border-width:var(--_pressed-outline-width)}:where(:active) .background{background:var(--_selected-pressed-container-color)}:where(:active) .icon{fill:var(--_selected-pressed-icon-color)}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);border-width:var(--_disabled-outline-width);opacity:var(--_disabled-container-opacity)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:where(.disabled) .icon{fill:var(--_selected-disabled-icon-color)}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}/*# sourceMappingURL=checkbox-styles.css.map */
`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Checkboxes allow users to select one or more items from a set.
 * Checkboxes can turn an option on or off.
 *
 * @description
 * Use checkboxes to:
 * - Select one or more options from a list
 * - Present a list containing sub-selections
 * - Turn an item on or off in a desktop environment
 *
 * @final
 * @suppress {visibility}
 */
let MdCheckbox = class MdCheckbox extends Checkbox {
};
MdCheckbox.styles = [styles$o];
MdCheckbox = __decorate([
    e$9('md-checkbox')
], MdCheckbox);

/**
 * @fires checked - Event emitted when the cell checkbox has been checked or unchecked. Detail contains the `checked` property.
 */
class DataTableCell extends s$2 {
    constructor() {
        super(...arguments);
        this.onCheckboxClicked = (e) => {
            const checkbox = e.target;
            this.dispatchEvent(new CustomEvent('checked', {
                detail: {
                    checked: checkbox.checked
                }
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.role = 'cell';
    }
    /** @internal */
    get checkbox() {
        return this.checkboxSlotElements?.[0];
    }
    render() {
        return x `
      <slot @slotchange=${this.onSlotChanged}>${this.renderCheckbox()}</slot>
    `;
    }
    renderCheckbox() {
        if (this.type === 'checkbox') {
            return x `<md-checkbox class="mdc-data-table__row-checkbox" touch-target="wrapper" @change=${this.onCheckboxClicked}></md-checkbox>`;
        }
        return '';
    }
    onSlotChanged() {
        this.requestUpdate();
        this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
        this.checkbox?.addEventListener('change', this.onCheckboxClicked);
    }
}
__decorate([
    n$7({ type: String, reflect: true })
], DataTableCell.prototype, "type", void 0);
__decorate([
    l$5({ selector: 'md-checkbox', flatten: true })
], DataTableCell.prototype, "checkboxSlotElements", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$n = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,:host,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,:host,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell,.mdc-data-table__row:last-child :host{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell,:host{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,:host,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox,:host([type=checkbox]){padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,[dir=rtl] :host([type=checkbox]),.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell,:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,[dir=rtl] :host,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric,:host([type=numeric]){text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,[dir=rtl] :host([type=numeric]),.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox,:host([type=checkbox]){width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host{display:table-cell;vertical-align:inherit;color:var(--_row-item-label-text-color);font-family:var(--_row-item-label-text-font);font-size:var(--_row-item-label-text-size);line-height:var(--_row-item-label-text-line-height);font-weight:var(--_row-item-label-text-weight);letter-spacing:var(--_row-item-label-text-tracking);border-bottom:var(--_row-item-outline-width) solid var(--_row-item-outline-color)}:host([type=checkbox]){padding:0 6px;width:50px}/*# sourceMappingURL=data-table-cell.css.map */
`;

let MdDataTableCell = class MdDataTableCell extends DataTableCell {
};
MdDataTableCell.styles = [styles$n];
MdDataTableCell = __decorate([
    e$9('md-data-table-cell')
], MdDataTableCell);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A field component.
 */
class Field extends s$2 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.error = false;
        this.focused = false;
        this.label = '';
        this.populated = false;
        this.required = false;
        this.resizable = false;
        this.supportingText = '';
        this.errorText = '';
        this.count = -1;
        this.max = -1;
        /**
         * Whether or not the field has leading content.
         */
        this.hasStart = false;
        /**
         * Whether or not the field has trailing content.
         */
        this.hasEnd = false;
        this.isAnimating = false;
        /**
         * When set to true, the error text's `role="alert"` will be removed, then
         * re-added after an animation frame. This will re-announce an error message
         * to screen readers.
         */
        this.refreshErrorAlert = false;
        this.disableTransitions = false;
    }
    get counterText() {
        if (this.count < 0 || this.max < 0) {
            return '';
        }
        return `${this.count} / ${this.max}`;
    }
    get supportingOrErrorText() {
        return this.error && this.errorText ? this.errorText : this.supportingText;
    }
    /**
     * Re-announces the field's error supporting text to screen readers.
     *
     * Error text announces to screen readers anytime it is visible and changes.
     * Use the method to re-announce the message when the text has not changed,
     * but announcement is still needed (such as for `reportValidity()`).
     */
    reannounceError() {
        this.refreshErrorAlert = true;
    }
    update(props) {
        // Client-side property updates
        const isDisabledChanging = props.has('disabled') && props.get('disabled') !== undefined;
        if (isDisabledChanging) {
            this.disableTransitions = true;
        }
        // When disabling, remove focus styles if focused.
        if (this.disabled && this.focused) {
            props.set('focused', true);
            this.focused = false;
        }
        // Animate if focused or populated change.
        this.animateLabelIfNeeded({
            wasFocused: props.get('focused'),
            wasPopulated: props.get('populated')
        });
        super.update(props);
    }
    render() {
        const floatingLabel = this.renderLabel(/*isFloating*/ true);
        const restingLabel = this.renderLabel(/*isFloating*/ false);
        const outline = this.renderOutline?.(floatingLabel);
        const classes = {
            'disabled': this.disabled,
            'disable-transitions': this.disableTransitions,
            'error': this.error && !this.disabled,
            'focused': this.focused,
            'with-start': this.hasStart,
            'with-end': this.hasEnd,
            'populated': this.populated,
            'resizable': this.resizable,
            'required': this.required,
            'no-label': !this.label,
        };
        return x `
      <div class="field ${o$1(classes)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          ${this.renderIndicator?.()}
          ${outline}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${restingLabel}
                ${outline ? A : floatingLabel}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `;
    }
    updated(changed) {
        if (changed.has('supportingText') || changed.has('errorText') ||
            changed.has('count') || changed.has('max')) {
            this.updateSlottedAriaDescribedBy();
        }
        if (this.refreshErrorAlert) {
            // The past render cycle removed the role="alert" from the error message.
            // Re-add it after an animation frame to re-announce the error.
            requestAnimationFrame(() => {
                this.refreshErrorAlert = false;
            });
        }
        if (this.disableTransitions) {
            requestAnimationFrame(() => {
                this.disableTransitions = false;
            });
        }
    }
    renderSupportingText() {
        const { supportingOrErrorText, counterText } = this;
        if (!supportingOrErrorText && !counterText) {
            return A;
        }
        // Always render the supporting text span so that our `space-around`
        // container puts the counter at the end.
        const start = x `<span>${supportingOrErrorText}</span>`;
        // Conditionally render counter so we don't render the extra `gap`.
        // TODO(b/244473435): add aria-label and announcements
        const end = counterText ?
            x `<span class="counter">${counterText}</span>` :
            A;
        // Announce if there is an error and error text visible.
        // If refreshErrorAlert is true, do not announce. This will remove the
        // role="alert" attribute. Another render cycle will happen after an
        // animation frame to re-add the role.
        const shouldErrorAnnounce = this.error && this.errorText && !this.refreshErrorAlert;
        const role = shouldErrorAnnounce ? 'alert' : A;
        return x `
      <div class="supporting-text" role=${role}>${start}${end}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
    }
    updateSlottedAriaDescribedBy() {
        for (const element of this.slottedAriaDescribedBy) {
            D(x `${this.supportingOrErrorText} ${this.counterText}`, element);
            element.setAttribute('hidden', '');
        }
    }
    renderLabel(isFloating) {
        if (!this.label) {
            return A;
        }
        let visible;
        if (isFloating) {
            // Floating label is visible when focused/populated or when animating.
            visible = this.focused || this.populated || this.isAnimating;
        }
        else {
            // Resting label is visible when unfocused. It is never visible while
            // animating.
            visible = !this.focused && !this.populated && !this.isAnimating;
        }
        const classes = {
            'hidden': !visible,
            'floating': isFloating,
            'resting': !isFloating,
        };
        // Add '*' if a label is present and the field is required
        const labelText = `${this.label}${this.required ? '*' : ''}`;
        return x `
      <span class="label ${o$1(classes)}"
        aria-hidden=${!visible}
      >${labelText}</span>
    `;
    }
    animateLabelIfNeeded({ wasFocused, wasPopulated }) {
        if (!this.label) {
            return;
        }
        wasFocused ?? (wasFocused = this.focused);
        wasPopulated ?? (wasPopulated = this.populated);
        const wasFloating = wasFocused || wasPopulated;
        const shouldBeFloating = this.focused || this.populated;
        if (wasFloating === shouldBeFloating) {
            return;
        }
        this.isAnimating = true;
        this.labelAnimation?.cancel();
        // Only one label is visible at a time for clearer text rendering.
        // The floating label is visible and used during animation. At the end of
        // the animation, it will either remain visible (if floating) or hide and
        // the resting label will be shown.
        //
        // We don't use forward filling because if the dimensions of the text field
        // change (leading icon removed, density changes, etc), then the animation
        // will be inaccurate.
        //
        // Re-calculating the animation each time will prevent any visual glitches
        // from appearing.
        // TODO(b/241113345): use animation tokens
        this.labelAnimation = this.floatingLabelEl?.animate(this.getLabelKeyframes(), { duration: 150, easing: EASING.STANDARD });
        this.labelAnimation?.addEventListener('finish', () => {
            // At the end of the animation, update the visible label.
            this.isAnimating = false;
        });
    }
    getLabelKeyframes() {
        const { floatingLabelEl, restingLabelEl } = this;
        if (!floatingLabelEl || !restingLabelEl) {
            return [];
        }
        const { x: floatingX, y: floatingY, height: floatingHeight } = floatingLabelEl.getBoundingClientRect();
        const { x: restingX, y: restingY, height: restingHeight } = restingLabelEl.getBoundingClientRect();
        const floatingScrollWidth = floatingLabelEl.scrollWidth;
        const restingScrollWidth = restingLabelEl.scrollWidth;
        // Scale by width ratio instead of font size since letter-spacing will scale
        // incorrectly. Using the width we can better approximate the adjusted
        // scale and compensate for tracking and overflow.
        // (use scrollWidth instead of width to account for clipped labels)
        const scale = restingScrollWidth / floatingScrollWidth;
        const xDelta = restingX - floatingX;
        // The line-height of the resting and floating label are different. When
        // we move the floating label down to the resting label's position, it won't
        // exactly match because of this. We need to adjust by half of what the
        // final scaled floating label's height will be.
        const yDelta = restingY - floatingY +
            Math.round((restingHeight - floatingHeight * scale) / 2);
        // Create the two transforms: floating to resting (using the calculations
        // above), and resting to floating (re-setting the transform to initial
        // values).
        const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`;
        const floatTransform = `translateX(0) translateY(0) scale(1)`;
        // Constrain the floating labels width to a scaled percentage of the
        // resting label's width. This will prevent long clipped labels from
        // overflowing the container.
        const restingClientWidth = restingLabelEl.clientWidth;
        const isRestingClipped = restingScrollWidth > restingClientWidth;
        const width = isRestingClipped ? `${restingClientWidth / scale}px` : '';
        if (this.focused || this.populated) {
            return [
                { transform: restTransform, width }, { transform: floatTransform, width }
            ];
        }
        return [
            { transform: floatTransform, width }, { transform: restTransform, width }
        ];
    }
    getSurfacePositionClientRect() {
        return this.containerEl.getBoundingClientRect();
    }
}
__decorate([
    n$7({ type: Boolean })
], Field.prototype, "disabled", void 0);
__decorate([
    n$7({ type: Boolean })
], Field.prototype, "error", void 0);
__decorate([
    n$7({ type: Boolean })
], Field.prototype, "focused", void 0);
__decorate([
    n$7()
], Field.prototype, "label", void 0);
__decorate([
    n$7({ type: Boolean })
], Field.prototype, "populated", void 0);
__decorate([
    n$7({ type: Boolean })
], Field.prototype, "required", void 0);
__decorate([
    n$7({ type: Boolean })
], Field.prototype, "resizable", void 0);
__decorate([
    n$7({ attribute: 'supporting-text' })
], Field.prototype, "supportingText", void 0);
__decorate([
    n$7({ attribute: 'error-text' })
], Field.prototype, "errorText", void 0);
__decorate([
    n$7({ type: Number })
], Field.prototype, "count", void 0);
__decorate([
    n$7({ type: Number })
], Field.prototype, "max", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'has-start' })
], Field.prototype, "hasStart", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'has-end' })
], Field.prototype, "hasEnd", void 0);
__decorate([
    l$5({ slot: 'aria-describedby' })
], Field.prototype, "slottedAriaDescribedBy", void 0);
__decorate([
    t$3()
], Field.prototype, "isAnimating", void 0);
__decorate([
    t$3()
], Field.prototype, "refreshErrorAlert", void 0);
__decorate([
    t$3()
], Field.prototype, "disableTransitions", void 0);
__decorate([
    i$5('.label.floating')
], Field.prototype, "floatingLabelEl", void 0);
__decorate([
    i$5('.label.resting')
], Field.prototype, "restingLabelEl", void 0);
__decorate([
    i$5('.container')
], Field.prototype, "containerEl", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined field component.
 */
class OutlinedField extends Field {
    renderOutline(floatingLabel) {
        return x `
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$m = i$4 `:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_container-shape: var(--md-outlined-field-container-shape, 4px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var( --md-outlined-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-field-container-shape-end-start, var(--_container-shape) )}.outline{border-color:var(--_outline-color);border-radius:inherit;color:var(--_outline-color);display:flex;pointer-events:none;height:100%;position:absolute;width:100%}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}:host-context([dir=rtl]) .resizable .container,:host([dir=rtl]) .resizable .container{clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$l = i$4 `:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
let MdOutlinedField = class MdOutlinedField extends OutlinedField {
};
MdOutlinedField.styles = [styles$l, styles$m];
MdOutlinedField = __decorate([
    e$9('md-outlined-field')
], MdOutlinedField);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=Symbol.for(""),l$1=t=>{if((null==t?void 0:t.r)===e$1)return null==t?void 0:t._$litStatic$},i$1=(t,...r)=>({_$litStatic$:r.reduce(((r,e,l)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[l+1]),t[0]),r:e$1}),s$1=new Map,a$1=t=>(r,...e)=>{const o=e.length;let i,a;const n=[],u=[];let c,$=0,f=!1;for(;$<o;){for(c=r[$];$<o&&void 0!==(a=e[$],i=l$1(a));)c+=i+r[++$],f=!0;$!==o&&u.push(a),n.push(c),$++;}if($===o&&n.push(r[o]),f){const t=n.join("$$lit$$");void 0===(r=s$1.get(t))&&(n.raw=n,s$1.set(t,r=n)),e=u;}return t(r,...e)},n$1=a$1(x);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$k = i$4 `@media(forced-colors: active){:host{--md-outlined-text-field-disabled-input-text-color: GrayText;--md-outlined-text-field-disabled-input-text-opacity: 1;--md-outlined-text-field-disabled-label-text-color: GrayText;--md-outlined-text-field-disabled-label-text-opacity: 1;--md-outlined-text-field-disabled-leading-icon-color: GrayText;--md-outlined-text-field-disabled-leading-icon-opacity: 1;--md-outlined-text-field-disabled-outline-color: GrayText;--md-outlined-text-field-disabled-outline-opacity: 1;--md-outlined-text-field-disabled-supporting-text-color: GrayText;--md-outlined-text-field-disabled-supporting-text-opacity: 1;--md-outlined-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$j = i$4 `:host{--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-outlined-text-field-container-shape, 4px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var( --md-outlined-text-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-text-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-text-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-text-field-container-shape-end-start, var(--_container-shape) );--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=o=>void 0===o.strings,s={},a=(o,l=s)=>o._$AH=l;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$2(class extends i$2{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===T||t$1===A)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return T}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return T}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return T;return a(i),t$1}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i="important",n=" !"+i,o=e$2(class extends i$2{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ht){this.ht=new Set;for(const t in r)this.ht.add(t);return this.render(r)}this.ht.forEach((t=>{null==r[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ht.add(t);const r="string"==typeof e&&e.endsWith(n);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i:""):s[t]=e;}}return T}});

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const stringConverter = {
    fromAttribute(value) {
        return value ?? '';
    },
    toAttribute(value) {
        return value || null;
    }
};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A text field component.
 */
class TextField extends s$2 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        /**
         * Gets or sets whether or not the text field is in a visually invalid state.
         *
         * This error state overrides the error state controlled by
         * `reportValidity()`.
         */
        this.error = false;
        /**
         * The error message that replaces supporting text when `error` is true. If
         * `errorText` is an empty string, then the supporting text will continue to
         * show.
         *
         * This error message overrides the error message displayed by
         * `reportValidity()`.
         */
        this.errorText = '';
        this.label = '';
        this.required = false;
        /**
         * The current value of the text field. It is always a string.
         */
        this.value = '';
        /**
         * An optional prefix to display before the input value.
         */
        this.prefixText = '';
        /**
         * An optional suffix to display after the input value.
         */
        this.suffixText = '';
        /**
         * Whether or not the text field has a leading icon. Used for SSR.
         */
        this.hasLeadingIcon = false;
        /**
         * Whether or not the text field has a trailing icon. Used for SSR.
         */
        this.hasTrailingIcon = false;
        /**
         * Conveys additional information below the text field, such as how it should
         * be used.
         */
        this.supportingText = '';
        /**
         * Override the input text CSS `direction`. Useful for RTL languages that use
         * LTR notation for fractions.
         */
        this.textDirection = '';
        /**
         * The number of rows to display for a `type="textarea"` text field.
         * Defaults to 2.
         */
        this.rows = 2;
        // <input> properties
        this.inputMode = '';
        /**
         * Defines the greatest value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
         */
        this.max = '';
        /**
         * The maximum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
         */
        this.maxLength = -1;
        /**
         * Defines the most negative value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
         */
        this.min = '';
        /**
         * The minimum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
         */
        this.minLength = -1;
        /**
         * A regular expression that the text field's value must match to pass
         * constraint validation.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
         */
        this.pattern = '';
        this.placeholder = '';
        /**
         * Indicates whether or not a user should be able to edit the text field's
         * value.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
         */
        this.readOnly = false;
        /**
         * Returns or sets the element's step attribute, which works with min and max
         * to limit the increments at which a numeric or date-time value can be set.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
         */
        this.step = '';
        /**
         * The `<input>` type to use, defaults to "text". The type greatly changes how
         * the text field behaves.
         *
         * Text fields support a limited number of `<input>` types:
         *
         * - text
         * - textarea
         * - email
         * - number
         * - password
         * - search
         * - tel
         * - url
         *
         * See
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
         * for more details on each input type.
         */
        this.type = 'text';
        /**
         * Describes what, if any, type of autocomplete functionality the input
         * should provide.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
         */
        this.autocomplete = '';
        /**
         * Returns true when the text field has been interacted with. Native
         * validation errors only display in response to user interactions.
         */
        this.dirty = false;
        this.focused = false;
        /**
         * Whether or not a native error has been reported via `reportValidity()`.
         */
        this.nativeError = false;
        /**
         * The validation message displayed from a native error via
         * `reportValidity()`.
         */
        this.nativeErrorText = '';
        // Needed for Safari, see https://bugs.webkit.org/show_bug.cgi?id=261432
        // Replace with this.internals.validity.customError when resolved.
        this.hasCustomValidityError = false;
        this.internals = this /* needed for closure */.attachInternals();
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * Gets or sets the direction in which selection occurred.
     */
    get selectionDirection() {
        return this.getInputOrTextarea().selectionDirection;
    }
    set selectionDirection(value) {
        this.getInputOrTextarea().selectionDirection = value;
    }
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    get selectionEnd() {
        return this.getInputOrTextarea().selectionEnd;
    }
    set selectionEnd(value) {
        this.getInputOrTextarea().selectionEnd = value;
    }
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    get selectionStart() {
        return this.getInputOrTextarea().selectionStart;
    }
    set selectionStart(value) {
        this.getInputOrTextarea().selectionStart = value;
    }
    /**
     * Returns the text field's validation error message.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
     */
    get validationMessage() {
        this.syncValidity();
        return this.internals.validationMessage;
    }
    /**
     * Returns a `ValidityState` object that represents the validity states of the
     * text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
     */
    get validity() {
        this.syncValidity();
        return this.internals.validity;
    }
    /**
     * The text field's value as a number.
     */
    get valueAsNumber() {
        const input = this.getInput();
        if (!input) {
            return NaN;
        }
        return input.valueAsNumber;
    }
    set valueAsNumber(value) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.valueAsNumber = value;
        this.value = input.value;
    }
    /**
     * The text field's value as a Date.
     */
    get valueAsDate() {
        const input = this.getInput();
        if (!input) {
            return null;
        }
        return input.valueAsDate;
    }
    set valueAsDate(value) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.valueAsDate = value;
        this.value = input.value;
    }
    /**
     * Returns whether an element will successfully validate based on forms
     * validation rules and constraints.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/willValidate
     */
    get willValidate() {
        this.syncValidity();
        return this.internals.willValidate;
    }
    get hasError() {
        return this.error || this.nativeError;
    }
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    checkValidity() {
        this.syncValidity();
        return this.internals.checkValidity();
    }
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * This method will display or clear an error text message equal to the text
     * field's `validationMessage`, unless the invalid event is canceled.
     *
     * Use `setCustomValidity()` to customize the `validationMessage`.
     *
     * This method can also be used to re-announce error messages to screen
     * readers.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    reportValidity() {
        let invalidEvent;
        this.addEventListener('invalid', event => {
            invalidEvent = event;
        }, { once: true });
        const valid = this.checkValidity();
        if (invalidEvent?.defaultPrevented) {
            return valid;
        }
        const prevMessage = this.getErrorText();
        this.nativeError = !valid;
        this.nativeErrorText = this.validationMessage;
        if (prevMessage === this.getErrorText()) {
            this.field?.reannounceError();
        }
        return valid;
    }
    /**
     * Selects all the text in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
     */
    select() {
        this.getInputOrTextarea().select();
    }
    /**
     * Sets a custom validation error message for the text field. Use this for
     * custom error message.
     *
     * When the error is not an empty string, the text field is considered invalid
     * and `validity.customError` will be true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     *
     * @param error The error message to display.
     */
    setCustomValidity(error) {
        this.hasCustomValidityError = !!error;
        this.internals.setValidity({ customError: !!error }, error, this.getInputOrTextarea());
    }
    setRangeText(...args) {
        // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
        // Use spread syntax and type casting to ensure correct usage.
        this.getInputOrTextarea().setRangeText(...args);
        this.value = this.getInputOrTextarea().value;
    }
    /**
     * Sets the start and end positions of a selection in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
     *
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start, end, direction) {
        this.getInputOrTextarea().setSelectionRange(start, end, direction);
    }
    /**
     * Decrements the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
     *
     * @param stepDecrement The number of steps to decrement, defaults to 1.
     */
    stepDown(stepDecrement) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.stepDown(stepDecrement);
        this.value = input.value;
    }
    /**
     * Increments the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
     *
     * @param stepIncrement The number of steps to increment, defaults to 1.
     */
    stepUp(stepIncrement) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.stepUp(stepIncrement);
        this.value = input.value;
    }
    /**
     * Reset the text field to its default value.
     */
    reset() {
        this.dirty = false;
        this.value = this.getAttribute('value') ?? '';
        this.nativeError = false;
        this.nativeErrorText = '';
    }
    attributeChangedCallback(attribute, newValue, oldValue) {
        if (attribute === 'value' && this.dirty) {
            // After user input, changing the value attribute no longer updates the
            // text field's value (until reset). This matches native <input> behavior.
            return;
        }
        super.attributeChangedCallback(attribute, newValue, oldValue);
    }
    render() {
        const classes = {
            'disabled': this.disabled,
            'error': !this.disabled && this.hasError,
            'textarea': this.type === 'textarea',
        };
        return x `
       <span class="text-field ${o$1(classes)}">
         ${this.renderField()}
       </span>
     `;
    }
    updated(changedProperties) {
        // Keep changedProperties arg so that subclasses may call it
        // If a property such as `type` changes and causes the internal <input>
        // value to change without dispatching an event, re-sync it.
        const value = this.getInputOrTextarea().value;
        if (this.value !== value) {
            // Note this is typically inefficient in updated() since it schedules
            // another update. However, it is needed for the <input> to fully render
            // before checking its value.
            this.value = value;
        }
        this.internals.setFormValue(value);
        // Sync validity when properties change, since validation properties may
        // have changed.
        this.syncValidity();
    }
    renderField() {
        return n$1 `<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === 'textarea'}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`;
    }
    renderLeadingIcon() {
        return x `
       <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
    }
    renderTrailingIcon() {
        return x `
       <span class="icon trailing" slot="end">
         <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
    }
    renderInputOrTextarea() {
        const style = { direction: this.textDirection };
        const ariaLabel = this.ariaLabel || this.label || A;
        // lit-anaylzer `autocomplete` types are too strict
        // tslint:disable-next-line:no-any
        const autocomplete = this.autocomplete;
        if (this.type === 'textarea') {
            return x `
        <textarea
          class="input"
          style=${o(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || A}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength > -1 ? this.maxLength : A}
          minlength=${this.minLength > -1 ? this.minLength : A}
          placeholder=${this.placeholder || A}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${l(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;
        }
        const prefix = this.renderPrefix();
        const suffix = this.renderSuffix();
        // TODO(b/243805848): remove `as unknown as number` and `as any` once lit
        // analyzer is fixed
        // tslint:disable-next-line:no-any
        const inputMode = this.inputMode;
        return x `
      <div class="input-wrapper">
        ${prefix}
        <input
          class="input"
          style=${o(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || A}
          ?disabled=${this.disabled}
          inputmode=${inputMode || A}
          max=${(this.max || A)}
          maxlength=${this.maxLength > -1 ? this.maxLength : A}
          min=${(this.min || A)}
          minlength=${this.minLength > -1 ? this.minLength : A}
          pattern=${this.pattern || A}
          placeholder=${this.placeholder || A}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          step=${(this.step || A)}
          type=${this.type}
          .value=${l(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${suffix}
      </div>
    `;
    }
    renderPrefix() {
        return this.renderAffix(this.prefixText, /* isSuffix */ false);
    }
    renderSuffix() {
        return this.renderAffix(this.suffixText, /* isSuffix */ true);
    }
    renderAffix(text, isSuffix) {
        if (!text) {
            return A;
        }
        const classes = {
            'suffix': isSuffix,
            'prefix': !isSuffix,
        };
        return x `<span class="${o$1(classes)}">${text}</span>`;
    }
    getErrorText() {
        return this.error ? this.errorText : this.nativeErrorText;
    }
    handleFocusin() {
        this.focused = true;
    }
    handleFocusout() {
        this.focused = false;
    }
    handleInput(event) {
        this.dirty = true;
        this.value = event.target.value;
        // Sync validity so that clients can check validity on input.
        this.syncValidity();
    }
    handleChange(event) {
        // Sync validity so that clients can check validity on change.
        this.syncValidity();
        this.redispatchEvent(event);
    }
    redispatchEvent(event) {
        redispatchEvent(this, event);
    }
    getInputOrTextarea() {
        if (!this.inputOrTextarea) {
            // If the input is not yet defined, synchronously render.
            // e.g.
            // const textField = document.createElement('md-outlined-text-field');
            // document.body.appendChild(textField);
            // textField.focus(); // synchronously render
            this.connectedCallback();
            this.scheduleUpdate();
        }
        if (this.isUpdatePending) {
            // If there are pending updates, synchronously perform them. This ensures
            // that constraint validation properties (like `required`) are synced
            // before interacting with input APIs that depend on them.
            this.scheduleUpdate();
        }
        return this.inputOrTextarea;
    }
    getInput() {
        if (this.type === 'textarea') {
            return null;
        }
        return this.getInputOrTextarea();
    }
    syncValidity() {
        // Sync the internal <input>'s validity and the host's ElementInternals
        // validity. We do this to re-use native `<input>` validation messages.
        const input = this.getInputOrTextarea();
        if (this.hasCustomValidityError) {
            input.setCustomValidity(this.internals.validationMessage);
        }
        else {
            input.setCustomValidity('');
        }
        this.internals.setValidity(input.validity, input.validationMessage, this.getInputOrTextarea());
    }
    handleIconChange() {
        this.hasLeadingIcon = this.leadingIcons.length > 0;
        this.hasTrailingIcon = this.trailingIcons.length > 0;
    }
    /** @private */
    formResetCallback() {
        this.reset();
    }
    /** @private */
    formStateRestoreCallback(state) {
        this.value = state;
    }
}
(() => {
    requestUpdateOnAriaChange(TextField);
})();
/** @nocollapse */
TextField.shadowRootOptions = { ...s$2.shadowRootOptions, delegatesFocus: true };
/** @nocollapse  */
TextField.formAssociated = true;
__decorate([
    n$7({ type: Boolean, reflect: true })
], TextField.prototype, "disabled", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], TextField.prototype, "error", void 0);
__decorate([
    n$7({ attribute: 'error-text' })
], TextField.prototype, "errorText", void 0);
__decorate([
    n$7()
], TextField.prototype, "label", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], TextField.prototype, "required", void 0);
__decorate([
    n$7()
], TextField.prototype, "value", void 0);
__decorate([
    n$7({ attribute: 'prefix-text' })
], TextField.prototype, "prefixText", void 0);
__decorate([
    n$7({ attribute: 'suffix-text' })
], TextField.prototype, "suffixText", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'has-leading-icon' })
], TextField.prototype, "hasLeadingIcon", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'has-trailing-icon' })
], TextField.prototype, "hasTrailingIcon", void 0);
__decorate([
    n$7({ attribute: 'supporting-text' })
], TextField.prototype, "supportingText", void 0);
__decorate([
    n$7({ attribute: 'text-direction' })
], TextField.prototype, "textDirection", void 0);
__decorate([
    n$7({ type: Number })
], TextField.prototype, "rows", void 0);
__decorate([
    n$7({ reflect: true })
], TextField.prototype, "inputMode", void 0);
__decorate([
    n$7()
], TextField.prototype, "max", void 0);
__decorate([
    n$7({ type: Number })
], TextField.prototype, "maxLength", void 0);
__decorate([
    n$7()
], TextField.prototype, "min", void 0);
__decorate([
    n$7({ type: Number })
], TextField.prototype, "minLength", void 0);
__decorate([
    n$7()
], TextField.prototype, "pattern", void 0);
__decorate([
    n$7({ reflect: true, converter: stringConverter })
], TextField.prototype, "placeholder", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], TextField.prototype, "readOnly", void 0);
__decorate([
    n$7()
], TextField.prototype, "step", void 0);
__decorate([
    n$7({ reflect: true })
], TextField.prototype, "type", void 0);
__decorate([
    n$7({ reflect: true })
], TextField.prototype, "autocomplete", void 0);
__decorate([
    t$3()
], TextField.prototype, "dirty", void 0);
__decorate([
    t$3()
], TextField.prototype, "focused", void 0);
__decorate([
    t$3()
], TextField.prototype, "nativeError", void 0);
__decorate([
    t$3()
], TextField.prototype, "nativeErrorText", void 0);
__decorate([
    i$5('.input')
], TextField.prototype, "inputOrTextarea", void 0);
__decorate([
    i$5('.field')
], TextField.prototype, "field", void 0);
__decorate([
    l$5({ slot: 'leading-icon' })
], TextField.prototype, "leadingIcons", void 0);
__decorate([
    l$5({ slot: 'trailing-icon' })
], TextField.prototype, "trailingIcons", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined text field component
 */
class OutlinedTextField extends TextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-outlined-field`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$i = i$4 `:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
let MdOutlinedTextField = class MdOutlinedTextField extends OutlinedTextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-outlined-field`;
    }
};
MdOutlinedTextField.styles = [styles$i, styles$j, styles$k];
MdOutlinedTextField = __decorate([
    e$9('md-outlined-text-field')
], MdOutlinedTextField);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique symbol used for protected access to an instance's
 * `ElementInternals`.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement {
 *   static formAssociated = true;
 *
 *   [internals] = this.attachInternals();
 * }
 *
 * function getForm(element: MyElement) {
 *   return element[internals].form;
 * }
 * ```
 */
const internals = Symbol('internals');

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up an element's constructor to enable form submission. The element
 * instance should be form associated and have a `type` property.
 *
 * A click listener is added to each element instance. If the click is not
 * default prevented, it will submit the element's form, if any.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement {
 *   static {
 *     setupFormSubmitter(MyElement);
 *   }
 *
 *   static formAssociated = true;
 *
 *   type: FormSubmitterType = 'submit';
 *
 *   [internals] = this.attachInternals();
 * }
 * ```
 *
 * @param ctor The form submitter element's constructor.
 */
function setupFormSubmitter(ctor) {
    ctor.addInitializer(instance => {
        const submitter = instance;
        submitter.addEventListener('click', async (event) => {
            const { type, [internals]: elementInternals } = submitter;
            const { form } = elementInternals;
            if (!form || type === 'button') {
                return;
            }
            // Wait a microtask for event bubbling to complete.
            await new Promise(resolve => {
                resolve();
            });
            if (event.defaultPrevented) {
                return;
            }
            if (type === 'reset') {
                form.reset();
                return;
            }
            // form.requestSubmit(submitter) does not work with form associated custom
            // elements. This patches the dispatched submit event to add the correct
            // `submitter`.
            // See https://github.com/WICG/webcomponents/issues/814
            form.addEventListener('submit', submitEvent => {
                Object.defineProperty(submitEvent, 'submitter', {
                    configurable: true,
                    enumerable: true,
                    get: () => submitter,
                });
            }, { capture: true, once: true });
            elementInternals.setFormValue(submitter.value);
            form.requestSubmit();
        });
    });
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns `true` if the given element is in a right-to-left direction.
 *
 * @param el Element to determine direction from
 * @param shouldCheck Optional. If `false`, return `false` without checking
 *     direction. Determining the direction of `el` is somewhat expensive, so
 *     this parameter can be used as a conditional guard. Defaults to `true`.
 */
function isRtl(el, shouldCheck = true) {
    return shouldCheck &&
        getComputedStyle(el).getPropertyValue('direction').trim() === 'rtl';
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$1;
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class IconButton extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Disables the icon button and makes it non-interactive.
         */
        this.disabled = false;
        /**
         * Flips the icon if it is in an RTL context at startup.
         */
        this.flipIconInRtl = false;
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.href = '';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `target` attribute.
         */
        this.target = '';
        /**
         * The `aria-label` of the button when the button is toggleable and selected.
         */
        this.ariaLabelSelected = '';
        /**
         * When true, the button will toggle between selected and unselected
         * states
         */
        this.toggle = false;
        /**
         * Sets the selected state. When false, displays the default icon. When true,
         * displays the selected icon, or the default icon If no `slot="selected"`
         * icon is provided.
         */
        this.selected = false;
        this.type = 'submit';
        this.value = '';
        this.flipIcon = isRtl(this, this.flipIconInRtl);
        /** @private */
        this[_a$1] = this /* needed for closure */.attachInternals();
    }
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this[internals].form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this[internals].labels;
    }
    /**
     * Link buttons cannot be disabled.
     */
    willUpdate() {
        if (this.href) {
            this.disabled = false;
        }
    }
    render() {
        const tag = this.href ? i$1 `div` : i$1 `button`;
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
        const ariaPressedValue = !this.toggle ? A : this.selected;
        let ariaLabelValue = A;
        if (!this.href) {
            ariaLabelValue = (hasToggledAriaLabel && this.selected) ?
                this.ariaLabelSelected :
                ariaLabel;
        }
        return n$1 `<${tag}
        class="icon-button ${o$1(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}"
      ></a>
    `;
    }
    getRenderClasses() {
        return {
            'flip-icon': this.flipIcon,
            'selected': this.toggle && this.selected,
        };
    }
    renderIcon() {
        return x `<span class="icon"><slot></slot></span>`;
    }
    renderSelectedIcon() {
        // Use default slot as fallback to not require specifying multiple icons
        return x `<span class="icon icon--selected"><slot name="selected"><slot></slot></slot></span>`;
    }
    renderTouchTarget() {
        return x `<span class="touch"></span>`;
    }
    renderFocusRing() {
        return x `<md-focus-ring part="focus-ring" for=${this.href ? 'link' : 'button'}></md-focus-ring>`;
    }
    renderRipple() {
        return x `<md-ripple
      for=${this.href ? 'link' : A}
      ?disabled="${!this.href && this.disabled}"
    ></md-ripple>`;
    }
    connectedCallback() {
        this.flipIcon = isRtl(this, this.flipIconInRtl);
        super.connectedCallback();
    }
    async handleClick(event) {
        // Allow the event to propagate
        await 0;
        if (!this.toggle || this.disabled || event.defaultPrevented) {
            return;
        }
        this.selected = !this.selected;
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        // Bubbles but does not compose to mimic native browser <input> & <select>
        // Additionally, native change event is not an InputEvent.
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
}
_a$1 = internals;
(() => {
    requestUpdateOnAriaChange(IconButton);
    setupFormSubmitter(IconButton);
})();
/** @nocollapse */
IconButton.formAssociated = true;
/** @nocollapse */
IconButton.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    n$7({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'flip-icon-in-rtl' })
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
    n$7()
], IconButton.prototype, "href", void 0);
__decorate([
    n$7()
], IconButton.prototype, "target", void 0);
__decorate([
    n$7({ attribute: 'aria-label-selected' })
], IconButton.prototype, "ariaLabelSelected", void 0);
__decorate([
    n$7({ type: Boolean })
], IconButton.prototype, "toggle", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", void 0);
__decorate([
    n$7()
], IconButton.prototype, "type", void 0);
__decorate([
    n$7()
], IconButton.prototype, "value", void 0);
__decorate([
    t$3()
], IconButton.prototype, "flipIcon", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$h = i$4 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$g = i$4 `:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdIconButton = class MdIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'standard': true,
        };
    }
};
MdIconButton.styles = [styles$h, styles$g];
MdIconButton = __decorate([
    e$9('md-icon-button')
], MdIconButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/265336902): add docs
 */
class Icon extends s$2 {
    render() {
        return x `<slot></slot>`;
    }
    connectedCallback() {
        super.connectedCallback();
        const ariaHidden = this.getAttribute('aria-hidden');
        if (ariaHidden === 'false') {
            // Allow the user to set `aria-hidden="false"` to create an icon that is
            // announced by screenreaders.
            this.removeAttribute('aria-hidden');
            return;
        }
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$f = i$4 `:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @final
 * @suppress {visibility}
 */
let MdIcon = class MdIcon extends Icon {
};
/** @nocollapse */
MdIcon.styles = [styles$f];
MdIcon = __decorate([
    e$9('md-icon')
], MdIcon);

/**
 * @fires checked - Event emitted when the column checkbox has been checked or unchecked. Detail contains the `checked` property.
 * @fires filter - Event emitted when the user has typed in column filter textfield. Detail contains the `field`, `text`, `column`, `caseSensitive` and `customFiltering` properties.
 * @fires keydown - Event emitted when the user has typed in column filter textfield. Detail contains the `field`, `key` and `column` properties.
 * @fires sort - Event emitted when the user has typed in column filter textfield. Detail contains the `column`, `isDescending` and `customSorting` properties.
 */
class DataTableColumn extends s$2 {
    connectedCallback() {
        super.connectedCallback();
        this.role = 'column-header';
        this.slot = 'header-cell';
    }
    /** @internal */
    get checkbox() {
        return this.checkboxSlotElements?.[0];
    }
    constructor() {
        super();
        /**
         * Column type. If `checkbox`, the checkbox inside the column will be also created if not supplied via the default slot.
         * If `numeric`, the column label will be aligned to the right.
         */
        this.type = '';
        /**
         * Whether the column can be sorted.
         */
        this.sortable = false;
        /**
         * Whether the column is sorted.
         */
        this.sorted = false;
        /**
         * Whether the column is sorted descending.
         */
        this.sortedDescending = false;
        /**
         * Whether the column is displaying a sort button.
         */
        this.withSortButton = false;
        /**
         * Whether the column is using a custom sorting function. If true, the column will not sort automatically and
         * you will need to handle the sorting yourself (see `sort` event).
         */
        this.customSorting = false;
        /**
         * Whether the column can be filtered.
         */
        this.filterable = false;
        /**
         * Label to show on the filter textfield.
         */
        this.filterTextFieldLabel = 'Filter';
        /**
         * Sets the filtering to be case-sensitive.
         */
        this.filterCaseSensitive = false;
        /**
         * Whether the column is using a custom filtering function. If true, the column will not filter automatically and
         * you will need to handle the filtering yourself (see `filter` event).
         */
        this.customFiltering = false;
        this.addEventListener('click', () => {
            this.withSortButton = !this.withSortButton;
        });
    }
    render() {
        return x `
        ${this.renderCheckbox()}
        ${this.renderSlot()}
    `;
    }
    renderCheckbox() {
        if (this.type === 'checkbox') {
            return x `
          <slot name="checkbox" @slotchange=${this.onCheckboxSlotChanged}>
              <md-checkbox
                      class="mdc-data-table__header-row-checkbox"
                      @change=${this.onCheckboxClicked}
                      touch-target="wrapper"
                      aria-label="Toggle all rows"></md-checkbox>
          </slot>
      `;
        }
        return '';
    }
    renderFilterTextField() {
        if (this.filterable && this.type !== 'checkbox') {
            return x `
          <slot name="filter-textfield" class="mdc-data-table__filter-textfield">
              <md-outlined-text-field
                      label="${this.filterTextFieldLabel}"
                      style="--md-outlined-text-field-top-space: var(--_pagination-outlined-select-field-top-space); --md-outlined-text-field-bottom-space: var(--_pagination-outlined-select-field-bottom-space);"
                      @input=${this.onFilterTextFieldInput}
                      @keydown=${this.onFilterTextFieldKeyDown}
                      @click="${(e) => e.stopPropagation()}"
              />
          </slot>
      `;
        }
        return A;
    }
    renderSlot() {
        return x `
        <div class="mdc-data-table__header-cell-filter-wrapper">
            ${this.sortable ? this.renderSortButton() : x `
                <slot class="mdc-data-table__header-cell-label"></slot>`}
            ${this.renderFilterTextField()}
        </div>
    `;
    }
    renderSortButton() {
        return x `
        <div class="mdc-data-table__header-cell-wrapper">
            <md-icon-button ?selected=${this.sortedDescending}
                                     toggle
                                     @change=${this.onSortButtonClicked}
                                     @click="${(e) => e.stopPropagation()}"
                                     aria-hidden="${this.withSortButton ? 'false' : 'true'}"
                                     ?hidden="${!this.withSortButton}">
                <slot name="sort-icon-on" slot="selected">
                    <md-icon>arrow_downward</md-icon>
                </slot>
                <slot name="sort-icon-off">
                    <md-icon>arrow_upward</md-icon>
                </slot>
            </md-icon-button>
            &nbsp;
            <slot class="mdc-data-table__header-cell-label"></slot>
        </div>
    `;
    }
    /** @internal */
    onCheckboxClicked(e) {
        const checkbox = e.target;
        /**
         * Event emitted when the column checkbox has been checked or unchecked.
         *
         * Event detail: `CellCheckedEventDetail`;
         */
        this.dispatchEvent(new CustomEvent('checked', {
            detail: {
                checked: checkbox.checked ?? false
            }
        }));
    }
    onCheckboxSlotChanged() {
        this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
        this.checkbox?.addEventListener('change', this.onCheckboxClicked);
    }
    /** @internal */
    onFilterTextFieldInput(e) {
        const textfield = e.target;
        /**
         * Event emitted when the user has typed in column filter textfield.
         *
         * Event detail: `FilterTextFieldInputEventDetail`;
         */
        this.dispatchEvent(new CustomEvent('filter', {
            detail: {
                field: textfield,
                text: textfield.value,
                column: this,
                caseSensitive: this.filterCaseSensitive,
                customFiltering: this.customFiltering
            }
        }));
    }
    /** @internal */
    onFilterTextFieldKeyDown(e) {
        const textfield = e.target;
        /**
         * Event emitted when the user has typed in column filter textfield.
         *
         * Event detail: `FilterTextFieldKeyDownEventDetail`;
         */
        this.dispatchEvent(new CustomEvent('keydown', {
            detail: {
                field: textfield,
                key: e.key,
                column: this,
            }
        }));
    }
    /** @internal */
    onSortButtonClicked(e) {
        this.sortedDescending = this.sortButton?.selected ?? false;
        /**
         * Event emitted when the user has typed in column filter textfield.
         *
         * Event detail: `SortButtonClickedEventDetail`;
         */
        this.dispatchEvent(new CustomEvent('sort', {
            detail: {
                column: this,
                isDescending: this.sortedDescending,
                customSorting: this.customSorting
            }
        }));
    }
    updated(_changedProperties) {
        if (_changedProperties.has('sorted')) {
            this.withSortButton = this.sortable && this.sorted;
        }
        super.updated(_changedProperties);
    }
}
__decorate([
    n$7({ type: String, reflect: true })
], DataTableColumn.prototype, "type", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], DataTableColumn.prototype, "sortable", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], DataTableColumn.prototype, "sorted", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true, attribute: 'sorted-descending' })
], DataTableColumn.prototype, "sortedDescending", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true, attribute: 'with-sort-button' })
], DataTableColumn.prototype, "withSortButton", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'custom-sorting' })
], DataTableColumn.prototype, "customSorting", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], DataTableColumn.prototype, "filterable", void 0);
__decorate([
    n$7({ type: String, attribute: 'filter-text-field-label' })
], DataTableColumn.prototype, "filterTextFieldLabel", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true, attribute: 'filter-case-sensitive' })
], DataTableColumn.prototype, "filterCaseSensitive", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'custom-filtering' })
], DataTableColumn.prototype, "customFiltering", void 0);
__decorate([
    i$5('md-icon-button')
], DataTableColumn.prototype, "sortButton", void 0);
__decorate([
    l$5({ slot: 'checkbox', flatten: true })
], DataTableColumn.prototype, "checkboxSlotElements", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$e = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell,:host{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell,:host{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell,:host{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell,:host{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell,:host{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,:host([type=checkbox]),.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] :host([type=checkbox]),[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell,:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,[dir=rtl] :host,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox,:host([type=checkbox]){width:1px}.mdc-data-table__header-cell--numeric,:host([type=numeric]){text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,[dir=rtl] :host([type=numeric]),.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,:host([type=numeric]) .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,[dir=rtl] :host([type=numeric]) .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl],:host([type=numeric]) .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button,:host([sortedDescending]) .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button,:host([sorted]) .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort,:host([sortable]){cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell,.mdc-data-table--sticky-header :host{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button,:host([sorted]) .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after,:host([sorted]) .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before,:host([sorted]) .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after,:host([sorted]) .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after,:host([sorted]) .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded,:host([sorted]) .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host{display:table-cell;vertical-align:inherit;background-color:var(--_header-container-color);height:var(--_header-container-height);color:var(--_header-headline-color);font-family:var(--_header-headline-font);line-height:var(--_header-headline-line-height);font-size:var(--_header-headline-size);letter-spacing:var(--_header-headline-tracking);font-weight:var(--_header-headline-weight);border-bottom:var(--_row-item-outline-width) solid var(--_row-item-outline-color)}:host(:first-of-type){border-top-left-radius:var(--_container-shape)}:host(:last-of-type){border-top-right-radius:var(--_container-shape)}:host(:hover){color:var(--_header-headline-hover-color)}:host([type=checkbox]){padding:0 6px;width:50px}:host([sortable]) md-icon-button:hover{--md-icon-button-unselected-icon-color: var(--_header-hover-sorting-icon-button-color)}:host([sortable]) md-icon-button[hidden]{display:none}:host([filterable]):not([type=checkbox]){padding:8px 16px}:host([filterable]) .mdc-data-table__header-cell-filter-wrapper{flex-direction:column;display:flex;align-items:center;padding:8px 0}:host([filterable]) .mdc-data-table__header-cell-label{white-space:nowrap}:host([filterable]) .mdc-data-table__header-cell-filter-textfield{width:fit-content}/*# sourceMappingURL=data-table-column.css.map */
`;

let MdDataTableColumn = class MdDataTableColumn extends DataTableColumn {
};
MdDataTableColumn.styles = [styles$e];
MdDataTableColumn = __decorate([
    e$9('md-data-table-column')
], MdDataTableColumn);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$d = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination,:host{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination,:host{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination,:host{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination,:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host{display:table-footer-group;vertical-align:inherit;background-color:var(--_footer-container-color);height:var(--_footer-container-height);color:var(--_footer-supporting-text-color);font-family:var(--_footer-supporting-text-font);line-height:var(--_footer-supporting-text-line-height);font-size:var(--_footer-supporting-text-size);letter-spacing:var(--_footer-supporting-text-tracking);font-weight:var(--_footer-supporting-text-weight);--md-icon-color: var(--md-sys-color-on-surface-variant, inherit);padding:0 16px;border-top:var(--_row-item-outline-width) solid var(--_row-item-outline-color);border-bottom-left-radius:var(--_container-shape);border-bottom-right-radius:var(--_container-shape)}/*# sourceMappingURL=data-table-footer.css.map */
`;

class DataTableFooter extends s$2 {
    connectedCallback() {
        super.connectedCallback();
        this.role = 'rowgroup';
        this.slot = 'footer';
    }
    render() {
        return x `
      <slot></slot>
    `;
    }
}

let MdDataTableFooter = class MdDataTableFooter extends DataTableFooter {
};
MdDataTableFooter.styles = [styles$d];
MdDataTableFooter = __decorate([
    e$9('md-data-table-footer')
], MdDataTableFooter);

/**
 * @fires selected - Event emitted when a row has been selected or unselected. Detail contains the `selected` property.
 */
class DataTableRow extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Whether the row is selected.
         */
        this.selected = false;
        /** @internal */
        this.onCheckboxClicked = (e) => {
            const event = e;
            this.selected = event.detail.checked;
            this.dispatchEvent(new CustomEvent('selected', {
                detail: {
                    selected: event.detail.checked
                }
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.role = 'row';
        this.slot = 'row';
    }
    /** @internal */
    get checkboxCell() {
        return this.checkboxCells?.[0];
    }
    render() {
        return x `
      <slot @slotchange="${this.requestUpdate}"></slot>`;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        const checkboxCell = this.checkboxCell;
        if (!checkboxCell && this.checkboxCells.length === 0) {
            // Wait for the checkbox cell to be created
            for (const cell of this.cells) {
                cell.updateComplete.then(() => {
                    if (cell.type === 'checkbox' && !this.isUpdatePending) {
                        this.requestUpdate();
                    }
                });
            }
        }
        if (checkboxCell) {
            checkboxCell.removeEventListener('checked', this.onCheckboxClicked);
            checkboxCell.addEventListener('checked', this.onCheckboxClicked);
            const checkbox = checkboxCell.checkbox;
            if (checkbox) {
                checkbox.checked = this.selected;
            }
        }
    }
}
__decorate([
    n$7({ type: Boolean, reflect: true })
], DataTableRow.prototype, "selected", void 0);
__decorate([
    n$7({ type: String, reflect: true })
], DataTableRow.prototype, "density", void 0);
__decorate([
    l$5({ selector: 'md-data-table-cell' })
], DataTableRow.prototype, "cells", void 0);
__decorate([
    l$5({ selector: 'md-data-table-cell[type="checkbox"]' })
], DataTableRow.prototype, "checkboxCells", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$c = i$4 `.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row,:host{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected,:host([selected]){background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row,:host{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}:host([density=tight]){height:48px}:host([density=comfortable]){height:44px}:host([density=dense]){height:40px}:host([density=compact]){height:36px}:host{display:table-row;vertical-align:inherit;border-radius:var(--_container-shape);background-color:var(--_row-item-unselected-container-color);height:var(--_row-item-container-height)}:host:has(::slotted(md-data-table-cell[type=checkbox])){background-color:var(--_row-item-unselected-container-color)}:host(.without-bottom-border) ::slotted(md-data-table-cell),:host(:not([hidden]):last-of-type) ::slotted(md-data-table-cell){border-bottom:none}:host(:not([hidden]):last-of-type) ::slotted(md-data-table-cell:first-of-type){border-bottom-left-radius:var(--_container-shape)}:host(:not([hidden]):last-of-type) ::slotted(md-data-table-cell:last-of-type){border-bottom-right-radius:var(--_container-shape)}:host([selected]){background-color:var(--_row-item-selected-container-color)}:host([selected]:hover) ::slotted(md-data-table-cell){color:rgba(var(--_row-item-selected-hover-state-layer-color), var(--_row-item-selected-hover-state-layer-opacity))}:host(:not([selected]):hover) ::slotted(md-data-table-cell){color:rgba(var(--_row-item-unselected-hover-state-layer-color), var(--_row-item-unselected-hover-state-layer-opacity))}:host(:disabled) ::slotted(md-data-table-cell){color:rgba(var(--_row-item-disabled-label-text-color), var(row-item-disabled-label-text-opacity))}:host([hidden]){display:none}slot{vertical-align:inherit}/*# sourceMappingURL=data-table-row.css.map */
`;

let MdDataTableRow = class MdDataTableRow extends DataTableRow {
};
MdDataTableRow.styles = [styles$c];
MdDataTableRow = __decorate([
    e$9('md-data-table-row')
], MdDataTableRow);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$b = i$4 `:host{--_container-shape: var(--md-data-table-container-shape, 4px);--_footer-container-color: var(--md-data-table-footer-container-color, var(--md-sys-color-surface, #fef7ff));--_footer-container-height: var(--md-data-table-footer-container-height, 52px);--_footer-supporting-text-color: var(--md-data-table-footer-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_footer-supporting-text-font: var(--md-data-table-footer-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));--_footer-supporting-text-line-height: var(--md-data-table-footer-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));--_footer-supporting-text-size: var(--md-data-table-footer-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));--_footer-supporting-text-tracking: var(--md-data-table-footer-supporting-text-tracking, );--_footer-supporting-text-weight: var(--md-data-table-footer-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));--_header-container-color: var(--md-data-table-header-container-color, var(--md-sys-color-surface, #fef7ff));--_header-container-height: var(--md-data-table-header-container-height, 56px);--_header-headline-color: var(--md-data-table-header-headline-color, var(--md-sys-color-on-surface-variant, #49454f));--_header-headline-font: var(--md-data-table-header-headline-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_header-headline-line-height: var(--md-data-table-header-headline-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_header-headline-size: var(--md-data-table-header-headline-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_header-headline-tracking: var(--md-data-table-header-headline-tracking, );--_header-headline-weight: var(--md-data-table-header-headline-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_header-hover-headline-color: var(--md-data-table-header-hover-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_header-hover-sorting-icon-button-color: var(--md-data-table-header-hover-sorting-icon-button-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-data-table-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_outline-width: var(--md-data-table-outline-width, 1px);--_row-item-container-height: var(--md-data-table-row-item-container-height, 52px);--_row-item-disabled-label-text-color: var(--md-data-table-row-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-disabled-label-text-opacity: var(--md-data-table-row-item-disabled-label-text-opacity, 0.38);--_row-item-label-text-color: var(--md-data-table-row-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-label-text-font: var(--md-data-table-row-item-label-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));--_row-item-label-text-line-height: var(--md-data-table-row-item-label-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));--_row-item-label-text-size: var(--md-data-table-row-item-label-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));--_row-item-label-text-tracking: var(--md-data-table-row-item-label-text-tracking, );--_row-item-label-text-weight: var(--md-data-table-row-item-label-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));--_row-item-outline-color: var(--md-data-table-row-item-outline-color, var(--md-sys-color-outline-variant, #cac4d0));--_row-item-outline-width: var(--md-data-table-row-item-outline-width, 1px);--_row-item-selected-container-color: var(--md-data-table-row-item-selected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_row-item-selected-hover-state-layer-color: var(--md-data-table-row-item-selected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-selected-hover-state-layer-opacity: var(--md-data-table-row-item-selected-hover-state-layer-opacity, 0.08);--_row-item-unselected-container-color: var(--md-data-table-row-item-unselected-container-color, var(--md-sys-color-surface, #fef7ff));--_row-item-unselected-hover-state-layer-color: var(--md-data-table-row-item-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_row-item-unselected-hover-state-layer-opacity: var(--md-data-table-row-item-unselected-hover-state-layer-opacity, 0.08);--_pagination-outlined-select-field-top-space: var(--md-data-table-pagination-outlined-select-field-top-space, 6px);--_pagination-outlined-select-field-bottom-space: var(--md-data-table-pagination-outlined-select-field-bottom-space, 6px)}.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:rgba(0,0,0,.12);-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:rgba(98, 0, 238, 0.04)}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:rgba(0,0,0,.12)}.mdc-data-table__pagination{border-top-color:rgba(0,0,0,.12)}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(0, 0, 0, 0.04)}.mdc-data-table__header-cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.6)}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.6);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:rgba(0, 0, 0, 0.87)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12);--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color);background-color:rgba(0,0,0,0);border-radius:var(--_container-shape);border:var(--_outline-width) solid var(--_outline-color)}.mdc-data-table .mdc-data-table__table{display:table;width:var(--mdc-data-table-width);height:var(--mdc-data-table-height)}.mdc-data-table .mdc-data-table__head{display:table-header-group;vertical-align:middle;border-color:inherit}.mdc-data-table .mdc-data-table__header-row{display:table-row;vertical-align:inherit;border-color:inherit}.mdc-data-table .mdc-data-table__content{display:table-row-group;vertical-align:middle;border-color:inherit}.mdc-data-table slot{vertical-align:inherit}.mdc-data-table .mdc-data-table__pagination-trailing{margin:0}.mdc-data-table .mdc-data-table__pagination-rows-per-page-select{--md-outlined-field-top-space: var(--_pagination-outlined-select-field-top-space);--md-outlined-field-bottom-space: var(--_pagination-outlined-select-field-bottom-space)}.mdc-data-table .mdc-data-table__pagination-total,.mdc-data-table .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table .mdc-data-table__cell{font:var(--_footer-supporting-text-font);line-height:var(--_footer-supporting-text-line-height);font-size:var(--_footer-supporting-text-size);font-weight:var(--_footer-supporting-text-weight);color:var(--_footer-supporting-text-color)}.mdc-data-table .mdc-data-table__linear-progress{width:100%}.mdc-data-table__pagination{min-height:48px}.mdc-data-table__pagination{min-height:44px}.mdc-data-table__pagination{min-height:40px}.mdc-data-table__pagination{min-height:36px}:host([density=tight]) .mdc-data-table__header-row{height:52px}:host([density=comfortable]) .mdc-data-table__header-row{height:48px}:host([density=dense]) .mdc-data-table__header-row{height:44px}:host([density=compact]) .mdc-data-table__header-row{height:40px}/*# sourceMappingURL=data-table.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A progress component.
 */
class Progress extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Progress to display, a fraction between 0 and `max`.
         */
        this.value = 0;
        /**
         * Maximum progress to display, defaults to 1.
         */
        this.max = 1;
        /**
         * Whether or not to display indeterminate progress, which gives no indication
         * to how long an activity will take.
         */
        this.indeterminate = false;
        /**
         * Whether or not to render indeterminate mode using 4 colors instead of one.
         */
        this.fourColor = false;
    }
    render() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <div class="progress ${o$1(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${ariaLabel || A}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate ? A : this.value}
      >${this.renderIndicator()}</div>
    `;
    }
    getRenderClasses() {
        return {
            'indeterminate': this.indeterminate,
            'four-color': this.fourColor,
        };
    }
}
(() => {
    requestUpdateOnAriaChange(Progress);
})();
__decorate([
    n$7({ type: Number })
], Progress.prototype, "value", void 0);
__decorate([
    n$7({ type: Number })
], Progress.prototype, "max", void 0);
__decorate([
    n$7({ type: Boolean })
], Progress.prototype, "indeterminate", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'four-color' })
], Progress.prototype, "fourColor", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A linear progress component.
 */
class LinearProgress extends Progress {
    constructor() {
        super(...arguments);
        /**
         * Buffer amount to display, a fraction between 0 and 1.
         */
        this.buffer = 1;
    }
    // Note, the indeterminate animation is rendered with transform %'s
    // Previously, this was optimized to use px calculated with the resizeObserver
    // due to a now fixed Chrome bug: crbug.com/389359.
    renderIndicator() {
        const progressStyles = {
            transform: `scaleX(${(this.indeterminate ? 1 : this.value / this.max) * 100}%)`
        };
        const dotStyles = {
            transform: `scaleX(${(this.indeterminate ? 1 : this.buffer / this.max) * 100}%)`
        };
        return x `
      <div class="dots"></div>
      <div class="inactive-track" style=${o(dotStyles)}></div>
      <div class="bar primary-bar" style=${o(progressStyles)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `;
    }
}
__decorate([
    n$7({ type: Number })
], LinearProgress.prototype, "buffer", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$a = i$4 `:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, 0px);border-radius:var(--_track-shape);display:flex;position:relative;width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .dots{display:none}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host-context([dir=rtl]),:host([dir=rtl]){transform:scale(-1)}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}/*# sourceMappingURL=linear-progress-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Linear progress indicators display progress by animating along the
 * length of a fixed, visible track.
 *
 * @description
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 */
let MdLinearProgress = class MdLinearProgress extends LinearProgress {
};
MdLinearProgress.styles = [styles$a];
MdLinearProgress = __decorate([
    e$9('md-linear-progress')
], MdLinearProgress);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$9 = i$4 `:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledIconButton = class MdFilledIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'filled': true,
            'toggle-filled': this.toggle,
        };
    }
};
MdFilledIconButton.styles = [styles$h, styles$9];
MdFilledIconButton = __decorate([
    e$9('md-filled-icon-button')
], MdFilledIconButton);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$8 = i$4 `@media(forced-colors: active){:host{--md-outlined-select-text-field-disabled-input-text-color: GrayText;--md-outlined-select-text-field-disabled-input-text-opacity: 1;--md-outlined-select-text-field-disabled-label-text-color: GrayText;--md-outlined-select-text-field-disabled-label-text-opacity: 1;--md-outlined-select-text-field-disabled-leading-icon-color: GrayText;--md-outlined-select-text-field-disabled-leading-icon-opacity: 1;--md-outlined-select-text-field-disabled-outline-color: GrayText;--md-outlined-select-text-field-disabled-outline-opacity: 1;--md-outlined-select-text-field-disabled-supporting-text-color: GrayText;--md-outlined-select-text-field-disabled-supporting-text-opacity: 1;--md-outlined-select-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-select-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$7 = i$4 `@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Activates the first non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     first item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 */
function activateFirstItem(items, isActivatable = (isItemNotDisabled)) {
    // NOTE: These selector functions are static and not on the instance such
    // that multiple operations can be chained and we do not have to re-query
    // the DOM
    const firstItem = getFirstActivatableItem(items, isActivatable);
    if (firstItem) {
        firstItem.tabIndex = 0;
        firstItem.focus();
    }
    return firstItem;
}
/**
 * Activates the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     last item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @nocollapse
 */
function activateLastItem(items, isActivatable = (isItemNotDisabled)) {
    const lastItem = getLastActivatableItem(items, isActivatable);
    if (lastItem) {
        lastItem.tabIndex = 0;
        lastItem.focus();
    }
    return lastItem;
}
/**
 * Retrieves the first activated item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return A record of the first activated item including the item and the
 *     index of the item or `null` if none are activated.
 * @nocollapse
 */
function getActiveItem(items, isActivatable = (isItemNotDisabled)) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.tabIndex === 0 && isActivatable(item)) {
            return {
                item,
                index: i,
            };
        }
    }
    return null;
}
/**
 * Retrieves the first non-disabled item of a given array of items. This
 * the first item that is not disabled.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The first activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getFirstActivatableItem(items, isActivatable = (isItemNotDisabled)) {
    for (const item of items) {
        if (isActivatable(item)) {
            return item;
        }
    }
    return null;
}
/**
 * Retrieves the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The last activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getLastActivatableItem(items, isActivatable = (isItemNotDisabled)) {
    for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (isActivatable(item)) {
            return item;
        }
    }
    return null;
}
/**
 * Retrieves the next non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The next activatable item or `null` if none are activatable.
 */
function getNextItem(items, index, isActivatable = (isItemNotDisabled)) {
    for (let i = 1; i < items.length; i++) {
        const nextIndex = (i + index) % items.length;
        const item = items[nextIndex];
        if (isActivatable(item)) {
            return item;
        }
    }
    return items[index] ? items[index] : null;
}
/**
 * Retrieves the previous non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The previous activatable item or `null` if none are activatable.
 */
function getPrevItem(items, index, isActivatable = (isItemNotDisabled)) {
    for (let i = 1; i < items.length; i++) {
        const prevIndex = (index - i + items.length) % items.length;
        const item = items[prevIndex];
        if (isActivatable(item)) {
            return item;
        }
    }
    return items[index] ? items[index] : null;
}
/**
 * Activates the next item and focuses it. If nothing is currently activated,
 * activates the first item.
 */
function activateNextItem(items, activeItemRecord, isActivatable = (isItemNotDisabled)) {
    if (activeItemRecord) {
        const next = getNextItem(items, activeItemRecord.index, isActivatable);
        if (next) {
            next.tabIndex = 0;
            next.focus();
        }
        return next;
    }
    else {
        return activateFirstItem(items, isActivatable);
    }
}
/**
 * Activates the previous item and focuses it. If nothing is currently
 * activated, activates the last item.
 */
function activatePreviousItem(items, activeItemRecord, isActivatable = (isItemNotDisabled)) {
    if (activeItemRecord) {
        const prev = getPrevItem(items, activeItemRecord.index, isActivatable);
        if (prev) {
            prev.tabIndex = 0;
            prev.focus();
        }
        return prev;
    }
    else {
        return activateLastItem(items, isActivatable);
    }
}
/**
 * The default `isActivatable` function, which checks if an item is not
 * disabled.
 *
 * @param item The item to check.
 * @return true if `item.disabled` is `false.
 */
function isItemNotDisabled(item) {
    return !item.disabled;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO: move this file to List and make List use this
/**
 * Default keys that trigger navigation.
 */
// tslint:disable:enforce-name-casing Following Enum style
const NavigableKeys = {
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    Home: 'Home',
    End: 'End',
};
/**
 * A controller that handles list keyboard navigation and item management.
 */
class ListController {
    constructor(config) {
        /**
         * Handles keyboard navigation. Should be bound to the node that will act as
         * the List.
         */
        this.handleKeydown = (event) => {
            const key = event.key;
            if (event.defaultPrevented || !this.isNavigableKey(key)) {
                return;
            }
            // do not use this.items directly in upcoming calculations so we don't
            // re-query the DOM unnecessarily
            const items = this.items;
            if (!items.length) {
                return;
            }
            const activeItemRecord = getActiveItem(items, this.isActivatable);
            if (activeItemRecord) {
                activeItemRecord.item.tabIndex = -1;
            }
            event.preventDefault();
            const isRtl = this.isRtl();
            const inlinePrevious = isRtl ? NavigableKeys.ArrowRight : NavigableKeys.ArrowLeft;
            const inlineNext = isRtl ? NavigableKeys.ArrowLeft : NavigableKeys.ArrowRight;
            switch (key) {
                // Activate the next item
                case NavigableKeys.ArrowDown:
                case inlineNext:
                    activateNextItem(items, activeItemRecord, this.isActivatable);
                    break;
                // Activate the previous item
                case NavigableKeys.ArrowUp:
                case inlinePrevious:
                    activatePreviousItem(items, activeItemRecord, this.isActivatable);
                    break;
                // Activate the first item
                case NavigableKeys.Home:
                    activateFirstItem(items, this.isActivatable);
                    break;
                // Activate the last item
                case NavigableKeys.End:
                    activateLastItem(items, this.isActivatable);
                    break;
            }
        };
        /**
         * Listener to be bound to the `deactivate-items` item event.
         */
        this.onDeactivateItems = () => {
            const items = this.items;
            for (const item of items) {
                this.deactivateItem(item);
            }
        };
        /**
         * Listener to be bound to the `request-activation` item event..
         */
        this.onRequestActivation = (event) => {
            this.onDeactivateItems();
            const target = event.target;
            this.activateItem(target);
            target.focus();
        };
        /**
         * Listener to be bound to the `slotchange` event for the slot that renders
         * the items.
         */
        this.onSlotchange = () => {
            const items = this.items;
            // Whether we have encountered an item that has been activated
            let encounteredActivated = false;
            for (const item of items) {
                const isActivated = !item.disabled && item.tabIndex > -1;
                if (isActivated && !encounteredActivated) {
                    encounteredActivated = true;
                    item.tabIndex = 0;
                    continue;
                }
                // Deactivate the rest including disabled
                item.tabIndex = -1;
            }
            if (encounteredActivated) {
                return;
            }
            const firstActivatableItem = getFirstActivatableItem(items, this.isActivatable);
            if (!firstActivatableItem) {
                return;
            }
            firstActivatableItem.tabIndex = 0;
        };
        const { isItem, getPossibleItems, isRtl, deactivateItem, activateItem, isNavigableKey, isActivatable, } = config;
        this.isItem = isItem;
        this.getPossibleItems = getPossibleItems;
        this.isRtl = isRtl;
        this.deactivateItem = deactivateItem;
        this.activateItem = activateItem;
        this.isNavigableKey = isNavigableKey;
        this.isActivatable = isActivatable;
    }
    /**
     * The items being managed by the list. Additionally, attempts to see if the
     * object has a sub-item in the `.item` property.
     */
    get items() {
        const maybeItems = this.getPossibleItems();
        const items = [];
        for (const itemOrParent of maybeItems) {
            const isItem = this.isItem(itemOrParent);
            // if the item is a list item, add it to the list of items
            if (isItem) {
                items.push(itemOrParent);
                continue;
            }
            // If the item exposes an `item` property check if it is a list item.
            const subItem = itemOrParent.item;
            if (subItem && this.isItem(subItem)) {
                items.push(subItem);
            }
        }
        return items;
    }
    /**
     * Activates the next item in the list. If at the end of the list, the first
     * item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activateNextItem() {
        const items = this.items;
        const activeItemRecord = getActiveItem(items, this.isActivatable);
        if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
        }
        return activateNextItem(items, activeItemRecord, this.isActivatable);
    }
    /**
     * Activates the previous item in the list. If at the start of the list, the
     * last item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activatePreviousItem() {
        const items = this.items;
        const activeItemRecord = getActiveItem(items, this.isActivatable);
        if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
        }
        return activatePreviousItem(items, activeItemRecord, this.isActivatable);
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Creates an event that closes any parent menus.
 */
function createCloseMenuEvent(initiator, reason) {
    return new CustomEvent('close-menu', {
        bubbles: true,
        composed: true,
        detail: { initiator, reason, itemPath: [initiator] }
    });
}
/**
 * Creates a default close menu event used by md-menu.
 */
const createDefaultCloseMenuEvent = (createCloseMenuEvent);
/**
 * Keys that are used for selection in menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const SelectionKey = {
    SPACE: 'Space',
    ENTER: 'Enter',
};
/**
 * Default close `Reason` kind values.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const CloseReason = {
    CLICK_SELECTION: 'click-selection',
    KEYDOWN: 'keydown',
};
/**
 * Keys that can close menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const KeydownCloseKey = {
    ESCAPE: 'Escape',
    SPACE: SelectionKey.SPACE,
    ENTER: SelectionKey.ENTER,
};
/**
 * Determines whether the given key code is a key code that should close the
 * menu.
 *
 * @param code The KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to close the
 * menu.
 */
function isClosableKey(code) {
    return Object.values(KeydownCloseKey).some(value => (value === code));
}
/**
 * Determines whether the given key code is a key code that should select a menu
 * item.
 *
 * @param code They KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to select a
 * menu item.
 */
function isSelectableKey(code) {
    return Object.values(SelectionKey).some(value => (value === code));
}
/**
 * Determines whether a target element is contained inside another element's
 * composed tree.
 *
 * @param target The potential contained element.
 * @param container The potential containing element of the target.
 * @returns Whether the target element is contained inside the container's
 * composed subtree
 */
function isElementInSubtree(target, container) {
    // Dispatch a composed, bubbling event to check its path to see if the
    // newly-focused element is contained in container's subtree
    const focusEv = new Event('md-contains', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    container.addEventListener('md-contains', listener);
    target.dispatchEvent(focusEv);
    container.removeEventListener('md-contains', listener);
    const isContained = composedPath.length > 0;
    return isContained;
}
/**
 * Element to focus on when menu is first opened.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const FocusState = {
    NONE: 'none',
    LIST_ROOT: 'list-root',
    FIRST_ITEM: 'first-item',
    LAST_ITEM: 'last-item'
};

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An enum of supported Menu corners
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const Corner = {
    END_START: 'end-start',
    END_END: 'end-end',
    START_START: 'start-start',
    START_END: 'start-end',
};
/**
 * Given a surface, an anchor, corners, and some options, this surface will
 * calculate the position of a surface to align the two given corners and keep
 * the surface inside the window viewport. It also provides a StyleInfo map that
 * can be applied to the surface to handle visiblility and position.
 */
class SurfacePositionController {
    /**
     * @param host The host to connect the controller to.
     * @param getProperties A function that returns the properties for the
     * controller.
     */
    constructor(host, getProperties) {
        this.host = host;
        this.getProperties = getProperties;
        // The current styles to apply to the surface.
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        // Previous values stored for change detection. Open change detection is
        // calculated separately so initialize it here.
        this.lastValues = { isOpen: false };
        this.host.addController(this);
    }
    /**
     * The StyleInfo map to apply to the surface via Lit's stylemap
     */
    get surfaceStyles() {
        return this.surfaceStylesInternal;
    }
    /**
     * Calculates the surface's new position required so that the surface's
     * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
     * surface inside the window viewport. This positioning also respects RTL by
     * checking `getComputedStyle()` on the surface element.
     */
    async position() {
        const { surfaceEl, anchorEl, anchorCorner: anchorCornerRaw, surfaceCorner: surfaceCornerRaw, positioning, xOffset, yOffset, repositionStrategy, } = this.getProperties();
        const anchorCorner = anchorCornerRaw.toLowerCase().trim();
        const surfaceCorner = surfaceCornerRaw.toLowerCase().trim();
        if (!surfaceEl || !anchorEl) {
            return;
        }
        // Paint the surface transparently so that we can get the position and the
        // rect info of the surface.
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '0',
        };
        // Wait for it to be visible.
        this.host.requestUpdate();
        await this.host.updateComplete;
        const surfaceRect = surfaceEl.getSurfacePositionClientRect ?
            surfaceEl.getSurfacePositionClientRect() :
            surfaceEl.getBoundingClientRect();
        const anchorRect = anchorEl.getSurfacePositionClientRect ?
            anchorEl.getSurfacePositionClientRect() :
            anchorEl.getBoundingClientRect();
        const [surfaceBlock, surfaceInline] = surfaceCorner.split('-');
        const [anchorBlock, anchorInline] = anchorCorner.split('-');
        // LTR depends on the direction of the SURFACE not the anchor.
        const isLTR = getComputedStyle(surfaceEl).direction === 'ltr';
        /*
         * A diagram that helps describe some of the variables used in the following
         * calculations.
         *
         * ┌───── inline/blockTopLayerOffset
         * │       │
         * │     ┌─▼───┐                  Window
         * │    ┌┼─────┴────────────────────────┐
         * │    ││                              │
         * └──► ││  ┌──inline/blockAnchorOffset │
         *      ││  │     │                     │
         *      └┤  │  ┌──▼───┐                 │
         *       │  │ ┌┼──────┤                 │
         *       │  └─►│Anchor│                 │
         *       │    └┴──────┘                 │
         *       │                              │
         *       │     ┌────────────────────────┼────┐
         *       │     │ Surface                │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       └─────┼────────────────────────┘    ├┐
         *             │ inline/blockOOBCorrection   ││
         *             │                         │   ││
         *             │                         ├──►││
         *             │                         │   ││
         *             └────────────────────────┐▼───┼┘
         *                                      └────┘
         */
        // Calculate the block positioning properties
        let { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty } = this.calculateBlock({
            surfaceRect,
            anchorRect,
            anchorBlock,
            surfaceBlock,
            yOffset,
            positioning
        });
        // If the surface should be out of bounds in the block direction, flip the
        // surface and anchor corner block values and recalculate
        if (blockOutOfBoundsCorrection) {
            const flippedSurfaceBlock = surfaceBlock === 'start' ? 'end' : 'start';
            const flippedAnchorBlock = anchorBlock === 'start' ? 'end' : 'start';
            const flippedBlock = this.calculateBlock({
                surfaceRect,
                anchorRect,
                anchorBlock: flippedAnchorBlock,
                surfaceBlock: flippedSurfaceBlock,
                yOffset,
                positioning
            });
            // In the case that the flipped verion would require less out of bounds
            // correcting, use the flipped corner block values
            if (blockOutOfBoundsCorrection >
                flippedBlock.blockOutOfBoundsCorrection) {
                blockInset = flippedBlock.blockInset;
                blockOutOfBoundsCorrection = flippedBlock.blockOutOfBoundsCorrection;
                surfaceBlockProperty = flippedBlock.surfaceBlockProperty;
            }
        }
        // Calculate the inline positioning properties
        let { inlineInset, inlineOutOfBoundsCorrection, surfaceInlineProperty } = this.calculateInline({
            surfaceRect,
            anchorRect,
            anchorInline,
            surfaceInline,
            xOffset,
            positioning,
            isLTR,
        });
        // If the surface should be out of bounds in the inline direction, flip the
        // surface and anchor corner inline values and recalculate
        if (inlineOutOfBoundsCorrection) {
            const flippedSurfaceInline = surfaceInline === 'start' ? 'end' : 'start';
            const flippedAnchorInline = anchorInline === 'start' ? 'end' : 'start';
            const flippedInline = this.calculateInline({
                surfaceRect,
                anchorRect,
                anchorInline: flippedAnchorInline,
                surfaceInline: flippedSurfaceInline,
                xOffset,
                positioning,
                isLTR,
            });
            // In the case that the flipped verion would require less out of bounds
            // correcting, use the flipped corner inline values
            if (Math.abs(inlineOutOfBoundsCorrection) >
                Math.abs(flippedInline.inlineOutOfBoundsCorrection)) {
                inlineInset = flippedInline.inlineInset;
                inlineOutOfBoundsCorrection = flippedInline.inlineOutOfBoundsCorrection;
                surfaceInlineProperty = flippedInline.surfaceInlineProperty;
            }
        }
        // If we are simply repositioning the surface back inside the viewport,
        // subtract the out of bounds correction values from the positioning.
        if (repositionStrategy === 'move') {
            blockInset = blockInset - blockOutOfBoundsCorrection;
            inlineInset = inlineInset - inlineOutOfBoundsCorrection;
        }
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '1',
            [surfaceBlockProperty]: `${blockInset}px`,
            [surfaceInlineProperty]: `${inlineInset}px`,
        };
        // In the case that we are resizing the surface to stay inside the viewport
        // we need to set height and width on the surface.
        if (repositionStrategy === 'resize') {
            // Add a height property to the styles if there is block height correction
            if (blockOutOfBoundsCorrection) {
                this.surfaceStylesInternal['height'] =
                    `${surfaceRect.height - blockOutOfBoundsCorrection}px`;
            }
            // Add a width property to the styles if there is block height correction
            if (inlineOutOfBoundsCorrection) {
                this.surfaceStylesInternal['width'] =
                    `${surfaceRect.width - inlineOutOfBoundsCorrection}px`;
            }
        }
        this.host.requestUpdate();
    }
    /**
     * Calculates the css property, the inset, and the out of bounds correction
     * for the surface in the block direction.
     */
    calculateBlock(config) {
        const { surfaceRect, anchorRect, anchorBlock, surfaceBlock, yOffset, positioning, } = config;
        // We use number booleans to multiply values rather than `if` / ternary
        // statements because it _heavily_ cuts down on nesting and readability
        const relativeToWindow = positioning === 'fixed' ? 1 : 0;
        const isSurfaceBlockStart = surfaceBlock === 'start' ? 1 : 0;
        const isSurfaceBlockEnd = surfaceBlock === 'end' ? 1 : 0;
        const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0;
        // Whether or not to apply the height of the anchor
        const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset;
        // The absolute block position of the anchor relative to window
        const blockTopLayerOffset = isSurfaceBlockStart * anchorRect.top +
            isSurfaceBlockEnd * (window.innerHeight - anchorRect.bottom);
        // If the surface's block would be out of bounds of the window, move it back
        // in
        const blockOutOfBoundsCorrection = Math.abs(Math.min(0, window.innerHeight - blockTopLayerOffset - blockAnchorOffset -
            surfaceRect.height));
        // The block logical value of the surface
        const blockInset = relativeToWindow * blockTopLayerOffset + blockAnchorOffset;
        const surfaceBlockProperty = surfaceBlock === 'start' ? 'inset-block-start' : 'inset-block-end';
        return { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty };
    }
    /**
     * Calculates the css property, the inset, and the out of bounds correction
     * for the surface in the inline direction.
     */
    calculateInline(config) {
        const { isLTR: isLTRBool, surfaceInline, anchorInline, anchorRect, surfaceRect, xOffset, positioning, } = config;
        // We use number booleans to multiply values rather than `if` / ternary
        // statements because it _heavily_ cuts down on nesting and readability
        const relativeToWindow = positioning === 'fixed' ? 1 : 0;
        const isLTR = isLTRBool ? 1 : 0;
        const isRTL = isLTRBool ? 0 : 1;
        const isSurfaceInlineStart = surfaceInline === 'start' ? 1 : 0;
        const isSurfaceInlineEnd = surfaceInline === 'end' ? 1 : 0;
        const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0;
        // Whether or not to apply the width of the anchor
        const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset;
        // The inline position of the anchor relative to window in LTR
        const inlineTopLayerOffsetLTR = isSurfaceInlineStart * anchorRect.left +
            isSurfaceInlineEnd * (window.innerWidth - anchorRect.right);
        // The inline position of the anchor relative to window in RTL
        const inlineTopLayerOffsetRTL = isSurfaceInlineStart * (window.innerWidth - anchorRect.right) +
            isSurfaceInlineEnd * anchorRect.left;
        // The inline position of the anchor relative to window
        const inlineTopLayerOffset = isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL;
        // If the surface's inline would be out of bounds of the window, move it
        // back in
        const inlineOutOfBoundsCorrection = Math.abs(Math.min(0, window.innerWidth - inlineTopLayerOffset - inlineAnchorOffset -
            surfaceRect.width));
        // The inline logical value of the surface
        const inlineInset = relativeToWindow * inlineTopLayerOffset + inlineAnchorOffset;
        const surfaceInlineProperty = surfaceInline === 'start' ? 'inset-inline-start' : 'inset-inline-end';
        return {
            inlineInset,
            inlineOutOfBoundsCorrection,
            surfaceInlineProperty,
        };
    }
    hostUpdate() {
        this.onUpdate();
    }
    hostUpdated() {
        this.onUpdate();
    }
    /**
     * Checks whether the properties passed into the controller have changed since
     * the last positioning. If so, it will reposition if the surface is open or
     * close it if the surface should close.
     */
    async onUpdate() {
        const props = this.getProperties();
        let hasChanged = false;
        for (const [key, value] of Object.entries(props)) {
            // tslint:disable-next-line
            hasChanged = hasChanged || (value !== this.lastValues[key]);
            if (hasChanged)
                break;
        }
        const openChanged = this.lastValues.isOpen !== props.isOpen;
        const hasAnchor = !!props.anchorEl;
        const hasSurface = !!props.surfaceEl;
        if (hasChanged && hasAnchor && hasSurface) {
            // Only update isOpen, because if it's closed, we do not want to waste
            // time on a useless reposition calculation. So save the other "dirty"
            // values until next time it opens.
            this.lastValues.isOpen = props.isOpen;
            if (props.isOpen) {
                // We are going to do a reposition, so save the prop values for future
                // dirty checking.
                this.lastValues = props;
                await this.position();
                props.onOpen();
            }
            else if (openChanged) {
                await props.beforeClose();
                this.close();
                props.onClose();
            }
        }
    }
    /**
     * Hides the surface.
     */
    close() {
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        this.host.requestUpdate();
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Indicies to access the TypeaheadRecord tuple type.
 */
const TYPEAHEAD_RECORD = {
    INDEX: 0,
    ITEM: 1,
    TEXT: 2,
};
/**
 * This controller listens to `keydown` events and searches the header text of
 * an array of `MenuItem`s with the corresponding entered keys within the buffer
 * time and activates the item.
 *
 * @example
 * ```ts
 * const typeaheadController = new TypeaheadController(() => ({
 *   typeaheadBufferTime: 50,
 *   getItems: () => Array.from(document.querySelectorAll('md-menu-item'))
 * }));
 * html`
 *   <div
 *       @keydown=${typeaheadController.onKeydown}
 *       tabindex="0"
 *       class="activeItemText">
 *     <!-- focusable element that will receive keydown events -->
 *     Apple
 *   </div>
 *   <div>
 *     <md-menu-item active header="Apple"></md-menu-item>
 *     <md-menu-item header="Apricot"></md-menu-item>
 *     <md-menu-item header="Banana"></md-menu-item>
 *     <md-menu-item header="Olive"></md-menu-item>
 *     <md-menu-item header="Orange"></md-menu-item>
 *   </div>
 * `;
 * ```
 */
class TypeaheadController {
    /**
     * @param getProperties A function that returns the options of the typeahead
     * controller:
     *
     * {
     *   getItems: A function that returns an array of menu items to be searched.
     *   typeaheadBufferTime: The maximum time between each keystroke to keep the
     *       current type buffer alive.
     * }
     */
    constructor(getProperties) {
        this.getProperties = getProperties;
        /**
         * Array of tuples that helps with indexing.
         */
        this.typeaheadRecords = [];
        /**
         * Currently-typed text since last buffer timeout
         */
        this.typaheadBuffer = '';
        /**
         * The timeout id from the current buffer's setTimeout
         */
        this.cancelTypeaheadTimeout = 0;
        /**
         * If we are currently "typing"
         */
        this.isTypingAhead = false;
        /**
         * The record of the last active item.
         */
        this.lastActiveRecord = null;
        /**
         * Apply this listener to the element that will receive `keydown` events that
         * should trigger this controller.
         *
         * @param event The native browser `KeyboardEvent` from the `keydown` event.
         */
        this.onKeydown = (event) => {
            if (this.isTypingAhead) {
                this.typeahead(event);
            }
            else {
                this.beginTypeahead(event);
            }
        };
        /**
         * Ends the current typeahead and clears the buffer.
         */
        this.endTypeahead = () => {
            this.isTypingAhead = false;
            this.typaheadBuffer = '';
            this.typeaheadRecords = [];
        };
    }
    get items() {
        return this.getProperties().getItems();
    }
    get active() {
        return this.getProperties().active;
    }
    /**
     * Sets up typingahead
     */
    beginTypeahead(event) {
        if (!this.active) {
            return;
        }
        // We don't want to typeahead if the _beginning_ of the typeahead is a menu
        // navigation, or a selection. We will handle "Space" only if it's in the
        // middle of a typeahead
        if (event.code === 'Space' || event.code === 'Enter' ||
            event.code.startsWith('Arrow') || event.code === 'Escape') {
            return;
        }
        this.isTypingAhead = true;
        // Generates the record array data structure which is the index, the element
        // and a normalized header.
        this.typeaheadRecords = this.items.map((el, index) => [index, el, el.typeaheadText.trim().toLowerCase()]);
        this.lastActiveRecord =
            this.typeaheadRecords.find(record => (record[TYPEAHEAD_RECORD.ITEM].tabIndex === 0)) ??
                null;
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
        }
        this.typeahead(event);
    }
    /**
     * Performs the typeahead. Based on the normalized items and the current text
     * buffer, finds the _next_ item with matching text and activates it.
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: 'o'
     * user types: l
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Orange
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange (active), Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     */
    typeahead(event) {
        if (event.defaultPrevented)
            return;
        clearTimeout(this.cancelTypeaheadTimeout);
        // Stop typingahead if one of the navigation or selection keys (except for
        // Space) are pressed
        if (event.code === 'Enter' || event.code.startsWith('Arrow') ||
            event.code === 'Escape') {
            this.endTypeahead();
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            return;
        }
        // If Space is pressed, prevent it from selecting and closing the menu
        if (event.code === 'Space') {
            event.preventDefault();
        }
        // Start up a new keystroke buffer timeout
        this.cancelTypeaheadTimeout =
            setTimeout(this.endTypeahead, this.getProperties().typeaheadBufferTime);
        this.typaheadBuffer += event.key.toLowerCase();
        const lastActiveIndex = this.lastActiveRecord ?
            this.lastActiveRecord[TYPEAHEAD_RECORD.INDEX] :
            -1;
        const numRecords = this.typeaheadRecords.length;
        /**
         * Sorting function that will resort the items starting with the given index
         *
         * @example
         *
         * this.typeaheadRecords =
         * 0: [0, <reference>, 'apple']
         * 1: [1, <reference>, 'apricot']
         * 2: [2, <reference>, 'banana']
         * 3: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 4: [4, <reference>, 'orange']
         * 5: [5, <reference>, 'strawberry']
         *
         * this.typeaheadRecords.sort((a,b) => rebaseIndexOnActive(a)
         *                                       - rebaseIndexOnActive(b)) ===
         * 0: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 1: [4, <reference>, 'orange']
         * 2: [5, <reference>, 'strawberry']
         * 3: [0, <reference>, 'apple']
         * 4: [1, <reference>, 'apricot']
         * 5: [2, <reference>, 'banana']
         */
        const rebaseIndexOnActive = (record) => {
            return (record[TYPEAHEAD_RECORD.INDEX] + numRecords - lastActiveIndex) %
                numRecords;
        };
        // records filtered and sorted / rebased around the last active index
        const matchingRecords = this.typeaheadRecords
            .filter(record => !record[TYPEAHEAD_RECORD.ITEM].disabled &&
            record[TYPEAHEAD_RECORD.TEXT].startsWith(this.typaheadBuffer))
            .sort((a, b) => rebaseIndexOnActive(a) - rebaseIndexOnActive(b));
        // Just leave if there's nothing that matches. Native select will just
        // choose the first thing that starts with the next letter in the alphabet
        // but that's out of scope and hard to localize
        if (matchingRecords.length === 0) {
            clearTimeout(this.cancelTypeaheadTimeout);
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            this.endTypeahead();
            return;
        }
        const isNewQuery = this.typaheadBuffer.length === 1;
        let nextRecord;
        // This is likely the case that someone is trying to "tab" through different
        // entries that start with the same letter
        if (this.lastActiveRecord === matchingRecords[0] && isNewQuery) {
            nextRecord = matchingRecords[1] ?? matchingRecords[0];
        }
        else {
            nextRecord = matchingRecords[0];
        }
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
        }
        this.lastActiveRecord = nextRecord;
        nextRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = 0;
        nextRecord[TYPEAHEAD_RECORD.ITEM].focus();
        return;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The default value for the typeahead buffer time in Milliseconds.
 */
const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;
const submenuNavKeys = new Set([
    NavigableKeys.ArrowDown,
    NavigableKeys.ArrowUp,
    NavigableKeys.Home,
    NavigableKeys.End,
]);
const menuNavKeys = new Set([
    NavigableKeys.ArrowLeft,
    NavigableKeys.ArrowRight,
    ...submenuNavKeys,
]);
/**
 * Gets the currently focused element on the page.
 *
 * @param activeDoc The document or shadowroot from which to start the search.
 *    Defaults to `window.document`
 * @return Returns the currently deeply focused element or `null` if none.
 */
function getFocusedElement(activeDoc = document) {
    let activeEl = activeDoc.activeElement;
    // Check for activeElement in the case that an element with a shadow root host
    // is currently focused.
    while (activeEl && activeEl?.shadowRoot?.activeElement) {
        activeEl = activeEl.shadowRoot.activeElement;
    }
    return activeEl;
}
/**
 * @fires opening Fired before the opening animation begins
 * @fires opened Fired once the menu is open, after any animations
 * @fires closing Fired before the closing animation begins
 * @fires closed Fired once the menu is closed, after any animations
 */
class Menu extends s$2 {
    /**
     * Whether the menu is animating upwards or downwards when opening. This is
     * helpful for calculating some animation calculations.
     */
    get openDirection() {
        const menuCornerBlock = this.menuCorner.split('_')[0];
        return menuCornerBlock === 'START' ? 'DOWN' : 'UP';
    }
    /**
     * The element which the menu should align to. If `anchor` is set to a
     * non-empty idref string, then `anchorEl` will resolve to the element with
     * the given id in the same root node. Otherwise, `null`.
     */
    get anchorElement() {
        if (this.anchor) {
            return this.getRootNode()
                .querySelector(`#${this.anchor}`);
        }
        return this.currentAnchorElement;
    }
    set anchorElement(element) {
        this.currentAnchorElement = element;
        this.requestUpdate('anchorElement');
    }
    constructor() {
        super();
        /**
         * The ID of the element in the same root node in which the menu should align
         * to. Overrides setting `anchorElement = elementReference`.
         *
         * __NOTE__: anchor or anchorElement must either be an HTMLElement or resolve
         * to an HTMLElement in order for menu to open.
         */
        this.anchor = '';
        /**
         * Whether the positioning algorithim should calculate relative to the parent
         * of the anchor element (absolute) or relative to the window (fixed).
         *
         * Examples for `position = 'fixed'`:
         *
         * - If there is no `position:relative` in the given parent tree and the
         *   surface is `position:absolute`
         * - If the surface is `position:fixed`
         * - If the surface is in the "top layer"
         * - The anchor and the surface do not share a common `position:relative`
         *   ancestor
         *
         * When using positioning = fixed, in most cases, the menu should position
         * itself above most other `position:absolute` or `position:fixed` elements
         * when placed inside of them. e.g. using a menu inside of an `md-dialog`.
         *
         * __NOTE__: Fixed menus will not scroll with the page and will be fixed to
         * the window instead.
         */
        this.positioning = 'absolute';
        /**
         * Skips the opening and closing animations.
         */
        this.quick = false;
        /**
         * Displays overflow content like a submenu.
         *
         * __NOTE__: This may cause adverse effects if you set
         * `md-menu {max-height:...}`
         * and have items overflowing items in the "y" direction.
         */
        this.hasOverflow = false;
        /**
         * Opens the menu and makes it visible. Alternative to the `.show()` and
         * `.close()` methods
         */
        this.open = false;
        /**
         * Offsets the menu's inline alignment from the anchor by the given number in
         * pixels. This value is direction aware and will follow the LTR / RTL
         * direction.
         *
         * e.g. LTR: positive -> right, negative -> left
         *      RTL: positive -> left, negative -> right
         */
        this.xOffset = 0;
        /**
         * Offsets the menu's block alignment from the anchor by the given number in
         * pixels.
         *
         * e.g. positive -> down, negative -> up
         */
        this.yOffset = 0;
        /**
         * The max time between the keystrokes of the typeahead menu behavior before
         * it clears the typeahead buffer.
         */
        this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME;
        /**
         * The corner of the anchor which to align the menu in the standard logical
         * property style of <block>-<inline> e.g. `'end-start'`.
         *
         * NOTE: This value may not be respected by the menu positioning algorithm
         * if the menu would render outisde the viewport.
         */
        this.anchorCorner = Corner.END_START;
        /**
         * The corner of the menu which to align the anchor in the standard logical
         * property style of <block>-<inline> e.g. `'start-start'`.
         *
         * NOTE: This value may not be respected by the menu positioning algorithm
         * if the menu would render outisde the viewport.
         */
        this.menuCorner = Corner.START_START;
        /**
         * Keeps the user clicks outside the menu.
         *
         * NOTE: clicking outside may still cause focusout to close the menu so see
         * `stayOpenOnFocusout`.
         */
        this.stayOpenOnOutsideClick = false;
        /**
         * Keeps the menu open when focus leaves the menu's composed subtree.
         *
         * NOTE: Focusout behavior will stop propagation of the focusout event. Set
         * this property to true to opt-out of menu's focuout handling altogether.
         */
        this.stayOpenOnFocusout = false;
        /**
         * After closing, does not restore focus to the last focused element before
         * the menu was opened.
         */
        this.skipRestoreFocus = false;
        /**
         * The element that should be focused by default once opened.
         *
         * NOTE: When setting default focus to 'LIST_ROOT', remember to change
         * `tabindex` to `0` and change md-menu's display to something other than
         * `display: contents` when necessary.
         */
        this.defaultFocus = FocusState.FIRST_ITEM;
        this.typeaheadActive = true;
        /**
         * Whether or not the current menu is a submenu and should not handle specific
         * navigation keys.
         *
         * @exports
         */
        this.isSubmenu = false;
        /**
         * The event path of the last window pointerdown event.
         */
        this.pointerPath = [];
        this.isPointerDown = false;
        this.openCloseAnimationSignal = createAnimationSignal();
        this.listController = new ListController({
            isItem: (maybeItem) => {
                return maybeItem.hasAttribute('md-menu-item');
            },
            getPossibleItems: () => this.slotItems,
            isRtl: () => (getComputedStyle(this).direction === 'rtl'),
            deactivateItem: (item) => {
                item.selected = false;
                item.tabIndex = -1;
            },
            activateItem: (item) => {
                item.selected = true;
                item.tabIndex = 0;
            },
            isNavigableKey: (key) => {
                if (!this.isSubmenu) {
                    return menuNavKeys.has(key);
                }
                const isRtl = getComputedStyle(this).direction === 'rtl';
                // we want md-submenu to handle the submenu's left/right arrow exit
                // key so it can close the menu instead of navigate the list.
                // Therefore we need to include all keys but left/right arrow close
                // key
                const arrowOpen = isRtl ? NavigableKeys.ArrowLeft : NavigableKeys.ArrowRight;
                if (key === arrowOpen) {
                    return true;
                }
                return submenuNavKeys.has(key);
            },
        });
        /**
         * The element that was focused before the menu opened.
         */
        this.lastFocusedElement = null;
        /**
         * Handles typeahead navigation through the menu.
         */
        this.typeaheadController = new TypeaheadController(() => {
            return {
                getItems: () => this.items,
                typeaheadBufferTime: this.typeaheadDelay,
                active: this.typeaheadActive
            };
        });
        this.currentAnchorElement = null;
        this.internals = polyfillElementInternalsAria(this, this /* needed for closure */.attachInternals());
        /**
         * Handles positioning the surface and aligning it to the anchor as well as
         * keeping it in the viewport.
         */
        this.menuPositionController = new SurfacePositionController(this, () => {
            return {
                anchorCorner: this.anchorCorner,
                surfaceCorner: this.menuCorner,
                surfaceEl: this.surfaceEl,
                anchorEl: this.anchorElement,
                positioning: this.positioning,
                isOpen: this.open,
                xOffset: this.xOffset,
                yOffset: this.yOffset,
                onOpen: this.onOpened,
                beforeClose: this.beforeClose,
                onClose: this.onClosed,
                // We can't resize components that have overflow like menus with
                // submenus because the overflow-y will show menu items / content
                // outside the bounds of the menu. (to be fixed w/ popover API)
                repositionStrategy: this.hasOverflow ? 'move' : 'resize',
            };
        });
        this.handleFocusout = async (event) => {
            if (this.stayOpenOnFocusout || !this.open) {
                return;
            }
            if (event.relatedTarget) {
                // Don't close the menu if we are switching focus between menu,
                // md-menu-item, and md-list
                if (isElementInSubtree(event.relatedTarget, this)) {
                    return;
                }
                const anchorEl = this.anchorElement;
                const wasAnchorClickFocused = isElementInSubtree(event.relatedTarget, anchorEl) &&
                    this.isPointerDown;
                if (wasAnchorClickFocused) {
                    return;
                }
            }
            else if (this.isPointerDown && this.pointerPath.includes(this)) {
                // If menu tabindex == -1 and the user clicks on the menu or a divider, we
                // want to keep the menu open.
                return;
            }
            const oldRestoreFocus = this.skipRestoreFocus;
            // allow focus to continue to the next focused object rather than returning
            this.skipRestoreFocus = true;
            this.close();
            // await for close
            await this.updateComplete;
            // return to previous behavior
            this.skipRestoreFocus = oldRestoreFocus;
        };
        /**
         * Saves the last focused element focuses the new element based on
         * `defaultFocus`, and animates open.
         */
        this.onOpened = async () => {
            this.lastFocusedElement = getFocusedElement();
            const items = this.items;
            const activeItemRecord = getActiveItem(items);
            if (activeItemRecord && this.defaultFocus !== FocusState.NONE) {
                activeItemRecord.item.tabIndex = -1;
            }
            let animationAborted = !this.quick;
            if (this.quick) {
                this.dispatchEvent(new Event('opening'));
            }
            else {
                animationAborted = !!await this.animateOpen();
            }
            // This must come after the opening animation or else it may focus one of
            // the items before the animation has begun and causes the list to slide
            // (block-padding-of-the-menu)px at the end of the animation
            switch (this.defaultFocus) {
                case FocusState.FIRST_ITEM:
                    const first = getFirstActivatableItem(items);
                    if (first) {
                        first.tabIndex = 0;
                        first.focus();
                        await first.updateComplete;
                    }
                    break;
                case FocusState.LAST_ITEM:
                    const last = getLastActivatableItem(items);
                    if (last) {
                        last.tabIndex = 0;
                        last.focus();
                        await last.updateComplete;
                    }
                    break;
                case FocusState.LIST_ROOT:
                    this.focus();
                    break;
                default:
                case FocusState.NONE:
                    // Do nothing.
                    break;
            }
            if (!animationAborted) {
                this.dispatchEvent(new Event('opened'));
            }
        };
        /**
         * Animates closed.
         */
        this.beforeClose = async () => {
            this.open = false;
            if (!this.skipRestoreFocus) {
                this.lastFocusedElement?.focus?.();
            }
            if (!this.quick) {
                await this.animateClose();
            }
        };
        /**
         * Focuses the last focused element.
         */
        this.onClosed = () => {
            if (this.quick) {
                this.dispatchEvent(new Event('closing'));
                this.dispatchEvent(new Event('closed'));
            }
        };
        this.onWindowPointerdown = (event) => {
            this.isPointerDown = true;
            this.pointerPath = event.composedPath();
        };
        this.onWindowPointerup = () => {
            this.isPointerDown = false;
        };
        this.onWindowClick = (event) => {
            if (!this.open) {
                return;
            }
            const path = event.composedPath();
            if (!this.stayOpenOnOutsideClick && !path.includes(this) &&
                !path.includes(this.anchorElement)) {
                this.open = false;
            }
        };
        {
            this.internals.role = 'menu';
            this.addEventListener('keydown', this.listController.handleKeydown);
            // Capture so that we can grab the event before it reaches the menu item
            // istelf. Specifically useful for the case where typeahead encounters a
            // space and we don't want the menu item to close the menu.
            this.addEventListener('keydown', this.captureKeydown, { capture: true });
            this.addEventListener('focusout', this.handleFocusout);
        }
    }
    /**
     * The menu items associated with this menu. The items must be `MenuItem`s and
     * have both the `md-menu-item` and `md-list-item` attributes.
     */
    get items() {
        return this.listController.items;
    }
    willUpdate(changed) {
        if (!changed.has('open')) {
            return;
        }
        if (this.open) {
            this.removeAttribute('aria-hidden');
            return;
        }
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        return this.renderSurface();
    }
    /**
     * Renders the positionable surface element and its contents.
     */
    renderSurface() {
        return x `
       <div
          class="menu ${o$1(this.getSurfaceClasses())}"
          style=${o(this.menuPositionController.surfaceStyles)}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding">
            ${this.renderMenuItems()}
          </div>
        </div>
       </div>
     `;
    }
    /**
     * Renders the menu items' slot
     */
    renderMenuItems() {
        return x `<slot
        @close-menu=${this.onCloseMenu}
        @deactivate-items=${this.onDeactivateItems}
        @request-activation=${this.onRequestActivation}
        @deactivate-typeahead=${this.handleDeactivateTypeahead}
        @activate-typeahead=${this.handleActivateTypeahead}
        @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
        @close-on-focusout=${this.handleCloseOnFocusout}
        @slotchange=${this.listController.onSlotchange}></slot>`;
    }
    /**
     * Renders the elevation component.
     */
    renderElevation() {
        return x `<md-elevation part="elevation"></md-elevation>`;
    }
    getSurfaceClasses() {
        return {
            open: this.open,
            fixed: this.positioning === 'fixed',
            'has-overflow': this.hasOverflow,
        };
    }
    captureKeydown(event) {
        if (event.target === this && !event.defaultPrevented &&
            isClosableKey(event.code)) {
            event.preventDefault();
            this.close();
        }
        this.typeaheadController.onKeydown(event);
    }
    /**
     * Performs the opening animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     *
     * @return A promise that resolve to `true` if the animation was aborted,
     *     `false` if it was not aborted.
     */
    async animateOpen() {
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl)
            return true;
        const openDirection = this.openDirection;
        this.dispatchEvent(new Event('opening'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const openingUpwards = openDirection === 'UP';
        const children = this.items;
        const FULL_DURATION = 500;
        const SURFACE_OPACITY_DURATION = 50;
        const ITEM_OPACITY_DURATION = 250;
        // We want to fit every child fade-in animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_DURATION) / children.length;
        const surfaceHeightAnimation = surfaceEl.animate([{ height: '0px' }, { height: `${height}px` }], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED,
        });
        // When we are opening upwards, we want to make sure the last item is always
        // in view, so we need to translate it upwards the opposite direction of the
        // height animation
        const upPositionCorrectionAnimation = slotEl.animate([
            { transform: openingUpwards ? `translateY(-${height}px)` : '' },
            { transform: '' }
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 0 }, { opacity: 1 }], SURFACE_OPACITY_DURATION);
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If we are animating upwards, then reverse the children list.
            const directionalIndex = openingUpwards ? children.length - 1 - i : i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: DELAY_BETWEEN_ITEMS * i,
            });
            // Make them all initially hidden and then clean up at the end of each
            // animation.
            child.classList.toggle('md-menu-hidden', true);
            animation.addEventListener('finish', () => {
                child.classList.toggle('md-menu-hidden', false);
            });
            childrenAnimations.push([child, animation]);
        }
        let resolveAnimation = (value) => { };
        const animationFinished = new Promise((resolve) => {
            resolveAnimation = resolve;
        });
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            upPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                child.classList.toggle('md-menu-hidden', false);
                animation.cancel();
            });
            resolveAnimation(true);
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            this.openCloseAnimationSignal.finish();
            resolveAnimation(false);
        });
        return await animationFinished;
    }
    /**
     * Performs the closing animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     */
    animateClose() {
        let resolve;
        let reject;
        // This promise blocks the surface position controller from setting
        // display: none on the surface which will interfere with this animation.
        const animationEnded = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl) {
            reject();
            return animationEnded;
        }
        const openDirection = this.openDirection;
        const closingDownwards = openDirection === 'UP';
        this.dispatchEvent(new Event('closing'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const children = this.items;
        const FULL_DURATION = 150;
        const SURFACE_OPACITY_DURATION = 50;
        // The surface fades away at the very end
        const SURFACE_OPACITY_DELAY = FULL_DURATION - SURFACE_OPACITY_DURATION;
        const ITEM_OPACITY_DURATION = 50;
        const ITEM_OPACITY_INITIAL_DELAY = 50;
        const END_HEIGHT_PERCENTAGE = .35;
        // We want to fit every child fade-out animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_INITIAL_DELAY - ITEM_OPACITY_DURATION) /
            children.length;
        // The mock has the animation shrink to 35%
        const surfaceHeightAnimation = surfaceEl.animate([
            { height: `${height}px` },
            { height: `${height * END_HEIGHT_PERCENTAGE}px` }
        ], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED_ACCELERATE,
        });
        // When we are closing downwards, we want to make sure the last item is
        // always in view, so we need to translate it upwards the opposite direction
        // of the height animation
        const downPositionCorrectionAnimation = slotEl.animate([
            { transform: '' }, {
                transform: closingDownwards ?
                    `translateY(-${height * (1 - END_HEIGHT_PERCENTAGE)}px)` :
                    ''
            }
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED_ACCELERATE });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SURFACE_OPACITY_DURATION, delay: SURFACE_OPACITY_DELAY });
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If the animation is closing upwards, then reverse the list of
            // children so that we animate in the opposite direction.
            const directionalIndex = closingDownwards ? i : children.length - 1 - i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: ITEM_OPACITY_INITIAL_DELAY + DELAY_BETWEEN_ITEMS * i,
            });
            // Make sure the items stay hidden at the end of each child animation.
            // We clean this up at the end of the overall animation.
            animation.addEventListener('finish', () => {
                child.classList.toggle('md-menu-hidden', true);
            });
            childrenAnimations.push([child, animation]);
        }
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            downPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                animation.cancel();
                child.classList.toggle('md-menu-hidden', false);
            });
            reject();
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            childrenAnimations.forEach(([child]) => {
                child.classList.toggle('md-menu-hidden', false);
            });
            this.openCloseAnimationSignal.finish();
            this.dispatchEvent(new Event('closed'));
            resolve(true);
        });
        return animationEnded;
    }
    connectedCallback() {
        super.connectedCallback();
        {
            window.addEventListener('click', this.onWindowClick, { capture: true });
            window.addEventListener('pointerdown', this.onWindowPointerdown);
            window.addEventListener('pointerup', this.onWindowPointerup);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        {
            window.removeEventListener('click', this.onWindowClick, { capture: true });
            window.removeEventListener('pointerdown', this.onWindowPointerdown);
            window.removeEventListener('pointerup', this.onWindowPointerup);
        }
    }
    onCloseMenu() {
        this.close();
    }
    onDeactivateItems(event) {
        event.stopPropagation();
        this.listController.onDeactivateItems();
    }
    onRequestActivation(event) {
        event.stopPropagation();
        this.listController.onRequestActivation(event);
    }
    handleDeactivateTypeahead(event) {
        // stopPropagation so that this does not deactivate any typeaheads in menus
        // nested above it e.g. md-sub-menu
        event.stopPropagation();
        this.typeaheadActive = false;
    }
    handleActivateTypeahead(event) {
        // stopPropagation so that this does not activate any typeaheads in menus
        // nested above it e.g. md-sub-menu
        event.stopPropagation();
        this.typeaheadActive = true;
    }
    handleStayOpenOnFocusout(event) {
        event.stopPropagation();
        this.stayOpenOnFocusout = true;
    }
    handleCloseOnFocusout(event) {
        event.stopPropagation();
        this.stayOpenOnFocusout = false;
    }
    close() {
        this.open = false;
        const maybeSubmenu = this.slotItems;
        maybeSubmenu.forEach(item => {
            item.close?.();
        });
    }
    show() {
        this.open = true;
    }
    /**
     * Activates the next item in the menu. If at the end of the menu, the first
     * item will be activated.
     *
     * @return The activated menu item or `null` if there are no items.
     */
    activateNextItem() {
        return this.listController.activateNextItem() ?? null;
    }
    /**
     * Activates the previous item in the menu. If at the start of the menu, the
     * last item will be activated.
     *
     * @return The activated menu item or `null` if there are no items.
     */
    activatePreviousItem() {
        return this.listController.activatePreviousItem() ?? null;
    }
}
(() => {
    // We want to manage tabindex ourselves.
    setupHostAria(Menu, { focusable: false });
})();
__decorate([
    i$5('.menu')
], Menu.prototype, "surfaceEl", void 0);
__decorate([
    i$5('slot')
], Menu.prototype, "slotEl", void 0);
__decorate([
    n$7()
], Menu.prototype, "anchor", void 0);
__decorate([
    n$7()
], Menu.prototype, "positioning", void 0);
__decorate([
    n$7({ type: Boolean })
], Menu.prototype, "quick", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'has-overflow' })
], Menu.prototype, "hasOverflow", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], Menu.prototype, "open", void 0);
__decorate([
    n$7({ type: Number, attribute: 'x-offset' })
], Menu.prototype, "xOffset", void 0);
__decorate([
    n$7({ type: Number, attribute: 'y-offset' })
], Menu.prototype, "yOffset", void 0);
__decorate([
    n$7({ type: Number, attribute: 'typeahead-delay' })
], Menu.prototype, "typeaheadDelay", void 0);
__decorate([
    n$7({ attribute: 'anchor-corner' })
], Menu.prototype, "anchorCorner", void 0);
__decorate([
    n$7({ attribute: 'menu-corner' })
], Menu.prototype, "menuCorner", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'stay-open-on-outside-click' })
], Menu.prototype, "stayOpenOnOutsideClick", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'stay-open-on-focusout' })
], Menu.prototype, "stayOpenOnFocusout", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'skip-restore-focus' })
], Menu.prototype, "skipRestoreFocus", void 0);
__decorate([
    n$7({ attribute: 'default-focus' })
], Menu.prototype, "defaultFocus", void 0);
__decorate([
    l$5({ flatten: true })
], Menu.prototype, "slotItems", void 0);
__decorate([
    t$3()
], Menu.prototype, "typeaheadActive", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$6 = i$4 `:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow .items{overflow:visible}.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}/*# sourceMappingURL=menu-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menus appear when users interact with a button, action, or other control.
 *
 * They can be opened from a variety of elements, most commonly icon buttons,
 * buttons, and text fields.
 *
 * md-menu listens for the `close-menu` and `deselect-items` events.
 *
 * - `close-menu` closes the menu when dispatched from a child element.
 * - `deselect-items` deselects all of its immediate menu-item children.
 *
 * @example
 * ```html
 * <div style="position:relative;">
 *   <button
 *       id="anchor"
 *       @click=${() => this.menuRef.value.show()}>
 *     Click to open menu
 *   </button>
 *   <!--
 *     `has-overflow` is required when using a submenu which overflows the
 *     menu's contents.
 *
 *     Additionally, `anchor` ingests an idref which do not pass through shadow
 *     roots. You can also set `.anchorElement` to an element reference if
 *     necessary.
 *   -->
 *   <md-menu anchor="anchor" has-overflow ${ref(menuRef)}>
 *     <md-menu-item headline="This is a headline"></md-menu-item>
 *     <md-sub-menu>
 *       <md-menu-item
 *           slot="item"
 *           headline="this is a submenu item">
 *       </md-menu-item>
 *       <md-menu slot="menu">
 *         <md-menu-item headline="This is an item inside a submenu">
 *         </md-menu-item>
 *       </md-menu>
 *     </md-sub-menu>
 *   </md-menu>
 * </div>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdMenu = class MdMenu extends Menu {
};
MdMenu.styles = [styles$6, styles$7];
MdMenu = __decorate([
    e$9('md-menu')
], MdMenu);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Given a list of select options, this function will return an array of
 * SelectOptionRecords that are selected.
 *
 * @return An array of SelectOptionRecords describing the options that are
 * selected.
 */
function getSelectedItems(items) {
    const selectedItemRecords = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.selected) {
            selectedItemRecords.push([item, i]);
        }
    }
    return selectedItemRecords;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
const VALUE = Symbol('value');
/**
 * @fires input Fired when a selection is made by the user via mouse or keyboard
 * interaction.
 * @fires change Fired when a selection is made by the user via mouse or
 * keyboard interaction.
 * @fires opening Fired when the select's menu is about to open.
 * @fires opened Fired when the select's menu has finished animations and
 * opened.
 * @fires closing Fired when the select's menu is about to close.
 * @fires closed Fired when the select's menu has finished animations and
 * closed.
 */
class Select extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Opens the menu synchronously with no animation.
         */
        this.quick = false;
        /**
         * Whether or not the select is required.
         */
        this.required = false;
        /**
         * Disables the select.
         */
        this.disabled = false;
        /**
         * The error message that replaces supporting text when `error` is true. If
         * `errorText` is an empty string, then the supporting text will continue to
         * show.
         *
         * This error message overrides the error message displayed by
         * `reportValidity()`.
         */
        this.errorText = '';
        /**
         * The floating label for the field.
         */
        this.label = '';
        /**
         * Conveys additional information below the select, such as how it should
         * be used.
         */
        this.supportingText = '';
        /**
         * Gets or sets whether or not the select is in a visually invalid state.
         *
         * This error state overrides the error state controlled by
         * `reportValidity()`.
         */
        this.error = false;
        /**
         * Whether or not the underlying md-menu should be position: fixed to display
         * in a top-level manner, or position: absolute.
         *
         * position:fixed is useful for cases where select is inside of another
         * element with stacking context and hidden overflows such as `md-dialog`.
         */
        this.menuPositioning = 'absolute';
        /**
         * The max time between the keystrokes of the typeahead select / menu behavior
         * before it clears the typeahead buffer.
         */
        this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME;
        /**
         * Whether or not the text field has a leading icon. Used for SSR.
         */
        this.hasLeadingIcon = false;
        /**
         * Text to display in the field. Only set for SSR.
         */
        this.displayText = '';
        this[_a] = '';
        /**
         * Used for initializing select when the user sets the `value` directly.
         */
        this.lastUserSetValue = null;
        /**
         * Used for initializing select when the user sets the `selectedIndex`
         * directly.
         */
        this.lastUserSetSelectedIndex = null;
        /**
         * Used for `input` and `change` event change detection.
         */
        this.lastSelectedOption = null;
        // tslint:disable-next-line:enforce-name-casing
        this.lastSelectedOptionRecords = [];
        /**
         * Whether or not a native error has been reported via `reportValidity()`.
         */
        this.nativeError = false;
        /**
         * The validation message displayed from a native error via
         * `reportValidity()`.
         */
        this.nativeErrorText = '';
        this.focused = false;
        this.open = false;
        this.customValidationMessage = '';
        this.internals = this /* needed for closure */.attachInternals();
    }
    /**
     * The value of the currently selected option.
     *
     * Note: For SSR, set `[selected]` on the requested option and `displayText`
     * rather than setting `value` setting `value` will incur a DOM query.
     */
    get value() {
        return this[VALUE];
    }
    set value(value) {
        this.lastUserSetValue = value;
        this.select(value);
    }
    get options() {
        // NOTE: this does a DOM query.
        return (this.menu?.items ?? []);
    }
    /**
     * The index of the currently selected option.
     *
     * Note: For SSR, set `[selected]` on the requested option and `displayText`
     * rather than setting `selectedIndex` setting `selectedIndex` will incur a
     * DOM query.
     */
    get selectedIndex() {
        // tslint:disable-next-line:enforce-name-casing
        const [_option, index] = (this.getSelectedOptions() ?? [])[0] ?? [];
        return index ?? -1;
    }
    set selectedIndex(index) {
        this.lastUserSetSelectedIndex = index;
        this.selectIndex(index);
    }
    /**
     * Returns an array of selected options.
     *
     * NOTE: md-select only suppoprts single selection.
     */
    get selectedOptions() {
        return (this.getSelectedOptions() ?? []).map(([option]) => option);
    }
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    /**
     * Returns a ValidityState object that represents the validity states of the
     * checkbox.
     *
     * Note that selects will only set `valueMissing` if unselected and
     * `required`.
     */
    get validity() {
        this.syncValidity();
        return this.internals.validity;
    }
    /**
     * Returns the native validation error message.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#constraint_validation_process
     */
    get validationMessage() {
        this.syncValidity();
        return this.internals.validationMessage;
    }
    /**
     * Returns whether an element will successfully validate based on forms
     * validation rules and constraints.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#constraint_validation_process
     */
    get willValidate() {
        this.syncValidity();
        return this.internals.willValidate;
    }
    get hasError() {
        return this.error || this.nativeError;
    }
    /**
     * Selects an option given the value of the option, and updates MdSelect's
     * value.
     */
    select(value) {
        const optionToSelect = this.options.find(option => option.value === value);
        if (optionToSelect) {
            this.selectItem(optionToSelect);
        }
    }
    /**
     * Selects an option given the index of the option, and updates MdSelect's
     * value.
     */
    selectIndex(index) {
        const optionToSelect = this.options[index];
        if (optionToSelect) {
            this.selectItem(optionToSelect);
        }
    }
    /**
     * Reset the select to its default value.
     */
    reset() {
        for (const option of this.options) {
            option.selected = option.hasAttribute('selected');
        }
        this.updateValueAndDisplayText();
        this.nativeError = false;
        this.nativeErrorText = '';
    }
    /**
     * Checks the select's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity
     *
     * @return true if the select is valid, or false if not.
     */
    checkValidity() {
        this.syncValidity();
        return this.internals.checkValidity();
    }
    /**
     * Checks the select's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * This method will display or clear an error text message equal to the
     * select's `validationMessage`, unless the invalid event is canceled.
     *
     * Use `setCustomValidity()` to customize the `validationMessage`.
     *
     * This method can also be used to re-announce error messages to screen
     * readers.
     *
     * @return true if the select is valid, or false if not.
     */
    reportValidity() {
        let invalidEvent;
        this.addEventListener('invalid', event => {
            invalidEvent = event;
        }, { once: true });
        const valid = this.checkValidity();
        if (invalidEvent?.defaultPrevented) {
            return valid;
        }
        const prevMessage = this.getErrorText();
        this.nativeError = !valid;
        this.nativeErrorText = this.validationMessage;
        if (prevMessage === this.getErrorText()) {
            this.field?.reannounceError();
        }
        return valid;
    }
    /**
     * Sets the select's native validation error message. This is used to
     * customize `validationMessage`.
     *
     * When the error is not an empty string, the select is considered invalid
     * and `validity.customError` will be true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity
     *
     * @param error The error message to display.
     */
    setCustomValidity(error) {
        this.customValidationMessage = error;
        this.syncValidity();
    }
    update(changed) {
        // In SSR the options will be ready to query, so try to figure out what
        // the value and display text should be.
        if (!this.hasUpdated) {
            this.initUserSelection();
        }
        super.update(changed);
    }
    render() {
        return x `
      <span
          class="select ${o$1(this.getRenderClasses())}"
          @focusout=${this.handleFocusout}>
        ${this.renderField()}
        ${this.renderMenu()}
      </span>
    `;
    }
    updated(changed) {
        if (changed.has('required')) {
            this.syncValidity();
        }
    }
    async firstUpdated(changed) {
        await this.menu?.updateComplete;
        // If this has been handled on update already due to SSR, try again.
        if (!this.lastSelectedOptionRecords.length) {
            this.initUserSelection();
        }
        // Case for when the DOM is streaming, there are no children, and a child
        // has [selected] set on it, we need to wait for DOM to render something.
        if (!this.lastSelectedOptionRecords.length && !o$2 &&
            !this.options.length) {
            setTimeout(() => {
                this.updateValueAndDisplayText();
            });
        }
        super.firstUpdated(changed);
    }
    getRenderClasses() {
        return {
            'disabled': this.disabled,
            'error': this.error,
            'open': this.open,
        };
    }
    renderField() {
        // TODO(b/290078041): add aria-label/describedby
        return n$1 `
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-label=${this.ariaLabel || A}
          aria-describedby="description"
          aria-expanded=${this.open ? 'true' : A}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          .focused=${this.focused || this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`;
    }
    renderFieldContent() {
        return [
            this.renderLeadingIcon(),
            this.renderLabel(),
            this.renderTrailingIcon(),
        ];
    }
    renderLeadingIcon() {
        return x `
      <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
     `;
    }
    renderTrailingIcon() {
        return x `
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon class="down" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
            <polygon class="up" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
     `;
    }
    renderLabel() {
        // need to render &nbsp; so that line-height can apply and give it a
        // non-zero height
        return x `<div id="label">${this.displayText || x `&nbsp;`}</div>`;
    }
    renderMenu() {
        const ariaLabel = this.label || this.ariaLabel;
        return x `
      <md-menu
          id="listbox"
          default-focus="none"
          role="listbox"
          tabindex="-1"
          aria-label=${ariaLabel || A}
          stay-open-on-focusout
          part="menu"
          exportparts="focus-ring: menu-focus-ring"
          anchor="field"
          .open=${this.open}
          .quick=${this.quick}
          .positioning=${this.menuPositioning}
          .typeaheadDelay=${this.typeaheadDelay}
          @opening=${this.handleOpening}
          @opened=${this.redispatchEvent}
          @closing=${this.redispatchEvent}
          @closed=${this.handleClosed}
          @close-menu=${this.handleCloseMenu}
          @request-selection=${this.handleRequestSelection}
          @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>`;
    }
    renderMenuContent() {
        return x `<slot></slot>`;
    }
    /**
     * Handles opening the select on keydown and typahead selection when the menu
     * is closed.
     */
    handleKeydown(event) {
        if (this.open || this.disabled || !this.menu) {
            return;
        }
        const typeaheadController = this.menu.typeaheadController;
        const isOpenKey = event.code === 'Space' || event.code === 'ArrowDown' ||
            event.code === 'Enter';
        // Do not open if currently typing ahead because the user may be typing the
        // spacebar to match a word with a space
        if (!typeaheadController.isTypingAhead && isOpenKey) {
            event.preventDefault();
            this.open = true;
            return;
        }
        const isPrintableKey = event.key.length === 1;
        // Handles typing ahead when the menu is closed by delegating the event to
        // the underlying menu's typeaheadController
        if (isPrintableKey) {
            typeaheadController.onKeydown(event);
            event.preventDefault();
            const { lastActiveRecord } = typeaheadController;
            if (!lastActiveRecord) {
                return;
            }
            this.labelEl?.setAttribute?.('aria-live', 'polite');
            const hasChanged = this.selectItem(lastActiveRecord[TYPEAHEAD_RECORD.ITEM]);
            if (hasChanged) {
                this.dispatchInteractionEvents();
            }
        }
    }
    handleClick() {
        this.open = true;
    }
    handleFocus() {
        this.focused = true;
    }
    handleBlur() {
        this.focused = false;
    }
    /**
     * Handles closing the menu when the focus leaves the select's subtree.
     */
    handleFocusout(event) {
        // Don't close the menu if we are switching focus between menu,
        // select-option, and field
        if (event.relatedTarget && isElementInSubtree(event.relatedTarget, this)) {
            return;
        }
        this.open = false;
    }
    /**
     * Gets a list of all selected select options as a list item record array.
     *
     * @return An array of selected list option records.
     */
    getSelectedOptions() {
        if (!this.menu) {
            this.lastSelectedOptionRecords = [];
            return null;
        }
        const items = this.menu.items;
        this.lastSelectedOptionRecords = getSelectedItems(items);
        return this.lastSelectedOptionRecords;
    }
    async getUpdateComplete() {
        await this.menu?.updateComplete;
        return super.getUpdateComplete();
    }
    /**
     * Gets the selected options from the DOM, and updates the value and display
     * text to the first selected option's value and headline respectively.
     *
     * @return Whether or not the selected option has changed since last update.
     */
    updateValueAndDisplayText() {
        const selectedOptions = this.getSelectedOptions() ?? [];
        // Used to determine whether or not we need to fire an input / change event
        // which fire whenever the option element changes (value or selectedIndex)
        // on user interaction.
        let hasSelectedOptionChanged = false;
        if (selectedOptions.length) {
            const [firstSelectedOption] = selectedOptions[0];
            hasSelectedOptionChanged =
                this.lastSelectedOption !== firstSelectedOption;
            this.lastSelectedOption = firstSelectedOption;
            this[VALUE] = firstSelectedOption.value;
            this.displayText = firstSelectedOption.displayText;
        }
        else {
            hasSelectedOptionChanged = this.lastSelectedOption !== null;
            this.lastSelectedOption = null;
            this[VALUE] = '';
            this.displayText = '';
        }
        this.internals.setFormValue(this.value);
        this.syncValidity();
        return hasSelectedOptionChanged;
    }
    /**
     * Focuses and activates the last selected item upon opening, and resets other
     * active items.
     */
    async handleOpening(e) {
        this.labelEl?.removeAttribute?.('aria-live');
        this.redispatchEvent(e);
        const items = this.menu.items;
        const activeItem = getActiveItem(items)?.item;
        let [selectedItem] = this.lastSelectedOptionRecords[0] ?? [null];
        // This is true if the user keys through the list but clicks out of the menu
        // thus no close-menu event is fired by an item and we can't clean up in
        // handleCloseMenu.
        if (activeItem && activeItem !== selectedItem) {
            activeItem.tabIndex = -1;
        }
        // in the case that nothing is selected, focus the first item
        selectedItem = selectedItem ?? items[0];
        if (selectedItem) {
            selectedItem.tabIndex = 0;
            selectedItem.focus();
        }
    }
    redispatchEvent(e) {
        redispatchEvent(this, e);
    }
    handleClosed(e) {
        this.open = false;
        this.redispatchEvent(e);
    }
    /**
     * Determines the reason for closing, and updates the UI accordingly.
     */
    handleCloseMenu(event) {
        const reason = event.detail.reason;
        const item = event.detail.itemPath[0];
        this.open = false;
        let hasChanged = false;
        if (reason.kind === 'click-selection') {
            hasChanged = this.selectItem(item);
        }
        else if (reason.kind === 'keydown' && isSelectableKey(reason.key)) {
            hasChanged = this.selectItem(item);
        }
        else {
            // This can happen on ESC being pressed
            item.tabIndex = -1;
            item.blur();
        }
        // Dispatch interaction events since selection has been made via keyboard
        // or mouse.
        if (hasChanged) {
            this.dispatchInteractionEvents();
        }
    }
    /**
     * Selects a given option, deselects other options, and updates the UI.
     *
     * @return Whether the last selected option has changed.
     */
    selectItem(item) {
        this.lastSelectedOptionRecords.forEach(([option]) => {
            if (item !== option) {
                option.selected = false;
            }
        });
        item.selected = true;
        return this.updateValueAndDisplayText();
    }
    /**
     * Handles updating selection when an option element requests selection via
     * property / attribute change.
     */
    handleRequestSelection(event) {
        const requestingOptionEl = event.target;
        // No-op if this item is already selected.
        if (this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
            return;
        }
        this.selectItem(requestingOptionEl);
    }
    /**
     * Handles updating selection when an option element requests deselection via
     * property / attribute change.
     */
    handleRequestDeselection(event) {
        const requestingOptionEl = event.target;
        // No-op if this item is not even in the list of tracked selected items.
        if (!this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
            return;
        }
        this.updateValueAndDisplayText();
    }
    /**
     * Attempts to initialize the selected option from user-settable values like
     * SSR, setting `value`, or `selectedIndex` at startup.
     */
    initUserSelection() {
        // User has set `.value` directly, but internals have not yet booted up.
        if (this.lastUserSetValue && !this.lastSelectedOptionRecords.length) {
            this.select(this.lastUserSetValue);
            // User has set `.selectedIndex` directly, but internals have not yet
            // booted up.
        }
        else if (this.lastUserSetSelectedIndex !== null &&
            !this.lastSelectedOptionRecords.length) {
            this.selectIndex(this.lastUserSetSelectedIndex);
            // Regular boot up!
        }
        else {
            this.updateValueAndDisplayText();
        }
    }
    handleIconChange() {
        this.hasLeadingIcon = this.leadingIcons.length > 0;
    }
    /**
     * Dispatches the `input` and `change` events.
     */
    dispatchInteractionEvents() {
        this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
    getErrorText() {
        return this.error ? this.errorText : this.nativeErrorText;
    }
    syncValidity() {
        const valueMissing = this.required && !this.value;
        const customError = !!this.customValidationMessage;
        const validationMessage = this.customValidationMessage ||
            valueMissing && this.getRequiredValidationMessage() || '';
        this.internals.setValidity({ valueMissing, customError }, validationMessage);
    }
    // Returns the platform `<select>` validation message for i18n.
    getRequiredValidationMessage() {
        const select = document.createElement('select');
        select.required = true;
        return select.validationMessage;
    }
    /** @private */
    formResetCallback() {
        this.reset();
    }
    /** @private */
    formStateRestoreCallback(state) {
        this.value = state;
    }
}
_a = VALUE;
(() => {
    requestUpdateOnAriaChange(Select);
})();
/** @nocollapse  */
Select.formAssociated = true;
__decorate([
    n$7({ type: Boolean })
], Select.prototype, "quick", void 0);
__decorate([
    n$7({ type: Boolean })
], Select.prototype, "required", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], Select.prototype, "disabled", void 0);
__decorate([
    n$7({ type: String, attribute: 'error-text' })
], Select.prototype, "errorText", void 0);
__decorate([
    n$7()
], Select.prototype, "label", void 0);
__decorate([
    n$7({ type: String, attribute: 'supporting-text' })
], Select.prototype, "supportingText", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true })
], Select.prototype, "error", void 0);
__decorate([
    n$7({ attribute: 'menu-positioning' })
], Select.prototype, "menuPositioning", void 0);
__decorate([
    n$7({ type: Number, attribute: 'typeahead-delay' })
], Select.prototype, "typeaheadDelay", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'has-leading-icon' })
], Select.prototype, "hasLeadingIcon", void 0);
__decorate([
    n$7({ attribute: 'display-text' })
], Select.prototype, "displayText", void 0);
__decorate([
    n$7()
], Select.prototype, "value", null);
__decorate([
    n$7({ type: Number, attribute: 'selected-index' })
], Select.prototype, "selectedIndex", null);
__decorate([
    t$3()
], Select.prototype, "nativeError", void 0);
__decorate([
    t$3()
], Select.prototype, "nativeErrorText", void 0);
__decorate([
    t$3()
], Select.prototype, "focused", void 0);
__decorate([
    t$3()
], Select.prototype, "open", void 0);
__decorate([
    i$5('.field')
], Select.prototype, "field", void 0);
__decorate([
    i$5('md-menu')
], Select.prototype, "menu", void 0);
__decorate([
    i$5('#label')
], Select.prototype, "labelEl", void 0);
__decorate([
    l$5({ slot: 'leading-icon', flatten: true })
], Select.prototype, "leadingIcons", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class OutlinedSelect extends Select {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-outlined-field`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$5 = i$4 `:host{--_text-field-container-shape: var(--md-outlined-select-text-field-container-shape, 4px);--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var( --md-outlined-select-text-field-container-shape-start-start, var(--_text-field-container-shape) );--_text-field-container-shape-start-end: var( --md-outlined-select-text-field-container-shape-start-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-end: var( --md-outlined-select-text-field-container-shape-end-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-start: var( --md-outlined-select-text-field-container-shape-end-start, var(--_text-field-container-shape) );--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=outlined-select-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$4 = i$4 `:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the "outlined"
 * variant.
 *
 * @example
 * ```html
 * <md-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedSelect = class MdOutlinedSelect extends OutlinedSelect {
};
MdOutlinedSelect.styles = [styles$4, styles$5, styles$8];
MdOutlinedSelect = __decorate([
    e$9('md-outlined-select')
], MdOutlinedSelect);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$3 = i$4 `@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$2 = i$4 `:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}/*# sourceMappingURL=menu-item-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An item layout component.
 */
class Item extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Only needed for SSR.
         *
         * Add this attribute when an item has two lines to avoid a Flash Of Unstyled
         * Content. This attribute is not needed for single line items or items with
         * three or more lines.
         */
        this.multiline = false;
    }
    render() {
        return x `
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot class="default-slot"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="supporting-text"
            @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `;
    }
    handleTextSlotChange() {
        // Check if there's more than one text slot with content. If so, the item is
        // multiline, which has a different min-height than single line items.
        let isMultiline = false;
        let slotsWithContent = 0;
        for (const slot of this.textSlots) {
            if (slotHasContent(slot)) {
                slotsWithContent += 1;
            }
            if (slotsWithContent > 1) {
                isMultiline = true;
                break;
            }
        }
        this.multiline = isMultiline;
    }
}
__decorate([
    n$7({ type: Boolean, reflect: true })
], Item.prototype, "multiline", void 0);
__decorate([
    e$7('.text slot')
], Item.prototype, "textSlots", void 0);
function slotHasContent(slot) {
    for (const node of slot.assignedNodes({ flatten: true })) {
        // Assume there's content if there's an element slotted in
        const isElement = node.nodeType === Node.ELEMENT_NODE;
        // If there's only text nodes for the default slot, check if there's
        // non-whitespace.
        const isTextWithContent = node.nodeType === Node.TEXT_NODE && node.textContent?.match(/\S/);
        if (isElement || isTextWithContent) {
            return true;
        }
    }
    return false;
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = i$4 `:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An item layout component that can be used inside list items to give them
 * their customizable structure.
 *
 * `<md-item>` does not have any functionality, which must be added by the
 * component using it.
 *
 * All text will wrap unless `white-space: nowrap` is set on the item or any of
 * its children.
 *
 * Slots available:
 * - `<default>`: The headline, or custom content.
 * - `headline`: The first line.
 * - `supporting-text`: Supporting text lines underneath the headline.
 * - `trailing-supporting-text`: A small text snippet at the end of the item.
 * - `start`: Any leading content, such as icons, avatars, or checkboxes.
 * - `end`: Any trailing content, such as icons and buttons.
 * - `container`: Background container content, intended for adding additional
 *     styles, such as ripples or focus rings.
 *
 * @example
 * ```html
 * <md-item>Single line</md-item>
 *
 * <md-item>
 *   <div class="custom-content">...</div>
 * </md-item>
 *
 * <!-- Classic 1 to 3+ line list items -->
 * <md-item>
 *   <md-icon slot="start">image</md-icon>
 *   <div slot="overline">Overline</div>
 *   <div slot="headline">Headline</div>
 *   <div="supporting-text">Supporting text</div>
 *   <div="trailing-supporting-text">Trailing</div>
 *   <md-icon slot="end">image</md-icon>
 * </md-item>
 * ```
 *
 * When wrapping `<md-item>`, forward the available slots to use the same slot
 * structure for the wrapping component (this is what `<md-list-item>` does).
 *
 * @example
 * ```html
 * <md-item>
 *   <slot></slot>
 *   <slot name="overline" slot="overline"></slot>
 *   <slot name="headline" slot="headline"></slot>
 *   <slot name="supporting-text" slot="supporting-text"></slot>
 *   <slot name="trailing-supporting-text"
 *       slot="trailing-supporting-text"></slot>
 *   <slot name="start" slot="start"></slot>
 *   <slot name="end" slot="end"></slot>
 * </md-item>
 * ```
 */
let MdItem = class MdItem extends Item {
};
MdItem.styles = [styles$1];
MdItem = __decorate([
    e$9('md-item')
], MdItem);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A controller that provides most functionality of an element that implements
 * the MenuItem interface.
 */
class MenuItemController {
    /**
     * @param host The MenuItem in which to attach this controller to.
     * @param config The object that configures this controller's behavior.
     */
    constructor(host, config) {
        this.host = host;
        this.internalTypeaheadText = null;
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onClick = () => {
            if (this.host.keepOpen)
                return;
            this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, { kind: CloseReason.CLICK_SELECTION }));
        };
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onKeydown = (event) => {
            if (this.host.keepOpen || event.defaultPrevented)
                return;
            const keyCode = event.code;
            if (!event.defaultPrevented && isClosableKey(keyCode)) {
                event.preventDefault();
                this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, { kind: CloseReason.KEYDOWN, key: keyCode }));
            }
        };
        const { getHeadlineElements, } = config;
        this.getHeadlineElements = getHeadlineElements;
        this.host.addController(this);
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot.
     */
    get typeaheadText() {
        if (this.internalTypeaheadText !== null) {
            return this.internalTypeaheadText;
        }
        const headlineElements = this.getHeadlineElements();
        const textParts = [];
        headlineElements.forEach((headlineElement) => {
            if (headlineElement.textContent && headlineElement.textContent.trim()) {
                textParts.push(headlineElement.textContent.trim());
            }
        });
        return textParts.join(' ');
    }
    /**
     * The recommended tag name to render as the list item.
     */
    get tagName() {
        const type = this.host.type;
        switch (type) {
            case 'link':
                return 'a';
            case 'button':
                return 'button';
            default:
            case 'menuitem':
            case 'option':
                return 'li';
        }
    }
    /**
     * The recommended role of the menu item.
     */
    get role() {
        return this.host.type === 'option' ? 'option' : 'menuitem';
    }
    hostConnected() {
        this.host.toggleAttribute('md-menu-item', true);
    }
    hostUpdate() {
        if (this.host.href) {
            this.host.type = 'link';
        }
    }
    /**
     * Use to set the typeaheadText when it changes.
     */
    setTypeaheadText(text) {
        this.internalTypeaheadText = text;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Creates an event fired by a SelectOption to request selection from md-select.
 * Typically fired after `selected` changes from `false` to `true`.
 */
function createRequestSelectionEvent() {
    return new Event('request-selection', {
        bubbles: true,
        composed: true,
    });
}
/**
 * Creates an event fired by a SelectOption to request deselection from
 * md-select. Typically fired after `selected` changes from `true` to `false`.
 */
function createRequestDeselectionEvent() {
    return new Event('request-deselection', {
        bubbles: true,
        composed: true,
    });
}
/**
 * A controller that provides most functionality and md-select compatibility for
 * an element that implements the SelectOption interface.
 */
class SelectOptionController {
    /**
     * The recommended role of the select option.
     */
    get role() {
        return this.menuItemController.role;
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot.
     */
    get typeaheadText() {
        return this.menuItemController.typeaheadText;
    }
    setTypeaheadText(text) {
        this.menuItemController.setTypeaheadText(text);
    }
    /**
     * The text that is displayed in the select field when selected. If not set,
     * defaults to the textContent of the item slotted into the `"headline"` slot.
     */
    get displayText() {
        if (this.internalDisplayText !== null) {
            return this.internalDisplayText;
        }
        const headlineElements = this.getHeadlineElements();
        const textParts = [];
        headlineElements.forEach((headlineElement) => {
            if (headlineElement.textContent && headlineElement.textContent.trim()) {
                textParts.push(headlineElement.textContent.trim());
            }
        });
        return textParts.join(' ');
    }
    setDisplayText(text) {
        this.internalDisplayText = text;
    }
    /**
     * @param host The SelectOption in which to attach this controller to.
     * @param config The object that configures this controller's behavior.
     */
    constructor(host, config) {
        this.host = host;
        this.internalDisplayText = null;
        this.lastSelected = this.host.selected;
        this.firstUpdate = true;
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onClick = () => {
            this.menuItemController.onClick();
        };
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onKeydown = (e) => {
            this.menuItemController.onKeydown(e);
        };
        this.menuItemController = new MenuItemController(host, config);
        this.getHeadlineElements = config.getHeadlineElements;
        host.addController(this);
    }
    hostUpdate() {
        if (this.lastSelected !== this.host.selected) {
            this.host.ariaSelected = this.host.selected ? 'true' : 'false';
        }
    }
    hostUpdated() {
        // Do not dispatch event on first update / boot-up.
        if (this.lastSelected !== this.host.selected && !this.firstUpdate) {
            // This section is really useful for when the user sets selected on the
            // option programmatically. Most other cases (click and keyboard) are
            // handled by md-select because it needs to coordinate the
            // single-selection behavior.
            if (this.host.selected) {
                this.host.dispatchEvent(createRequestSelectionEvent());
            }
            else {
                this.host.dispatchEvent(createRequestDeselectionEvent());
            }
        }
        this.lastSelected = this.host.selected;
        this.firstUpdate = false;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires close-menu Closes the encapsulating menu on
 * @fires request-selection Requests the parent md-select to select this element
 * (and deselect others if single-selection) when `selected` changed to `true`.
 * @fires request-deselection Requests the parent md-select to deselect this
 * element when `selected` changed to `false`.
 */
class SelectOptionEl extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Disables the item and makes it non-selectable and non-interactive.
         */
        this.disabled = false;
        /**
         * READONLY: self-identifies as a menu item and sets its identifying attribute
         */
        this.isMenuItem = true;
        /**
         * Sets the item in the selected visual state when a submenu is opened.
         */
        this.selected = false;
        /**
         * Form value of the option.
         */
        this.value = '';
        this.type = 'option';
        this.selectOptionController = new SelectOptionController(this, {
            getHeadlineElements: () => {
                return this.headlineElements;
            }
        });
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot.
     */
    get typeaheadText() {
        return this.selectOptionController.typeaheadText;
    }
    set typeaheadText(text) {
        this.selectOptionController.setTypeaheadText(text);
    }
    /**
     * The text that is displayed in the select field when selected. If not set,
     * defaults to the textContent of the item slotted into the `"headline"` slot.
     */
    get displayText() {
        return this.selectOptionController.displayText;
    }
    set displayText(text) {
        this.selectOptionController.setDisplayText(text);
    }
    render() {
        return this.renderListItem(x `
      <md-item>
        <div slot="container">
          ${this.renderRipple()}
          ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
    }
    /**
     * Renders the root list item.
     *
     * @param content the child content of the list item.
     */
    renderListItem(content) {
        return x `
      <li
        id="item"
        tabindex=${this.disabled ? -1 : 0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel || A}
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        aria-expanded=${this.ariaExpanded || A}
        aria-haspopup=${this.ariaHasPopup || A}
        class="list-item ${o$1(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
      >${content}</li>
    `;
    }
    /**
     * Handles rendering of the ripple element.
     */
    renderRipple() {
        return x `
      <md-ripple
          part="ripple"
          for="item"
          ?disabled=${this.disabled}></md-ripple>`;
    }
    /**
     * Handles rendering of the focus ring.
     */
    renderFocusRing() {
        return x `
      <md-focus-ring
          part="focus-ring"
          for="item"
          inward></md-focus-ring>`;
    }
    /**
     * Classes applied to the list item root.
     */
    getRenderClasses() {
        return {
            'disabled': this.disabled,
            'selected': this.selected,
        };
    }
    /**
     * Handles rendering the headline and supporting text.
     */
    renderBody() {
        return x `
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing-supporting-text"
          slot="trailing-supporting-text"></slot>
    `;
    }
    focus() {
        // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
        // work programmatically like in FF and select-option
        this.listItemRoot?.focus();
    }
}
(() => {
    requestUpdateOnAriaChange(SelectOptionEl);
})();
/** @nocollapse */
SelectOptionEl.shadowRootOptions = {
    ...s$2.shadowRootOptions,
    delegatesFocus: true
};
__decorate([
    n$7({ type: Boolean, reflect: true })
], SelectOptionEl.prototype, "disabled", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'md-menu-item', reflect: true })
], SelectOptionEl.prototype, "isMenuItem", void 0);
__decorate([
    n$7({ type: Boolean })
], SelectOptionEl.prototype, "selected", void 0);
__decorate([
    n$7()
], SelectOptionEl.prototype, "value", void 0);
__decorate([
    i$5('.list-item')
], SelectOptionEl.prototype, "listItemRoot", void 0);
__decorate([
    l$5({ slot: 'headline' })
], SelectOptionEl.prototype, "headlineElements", void 0);
__decorate([
    n$7({ attribute: 'typeahead-text' })
], SelectOptionEl.prototype, "typeaheadText", null);
__decorate([
    n$7({ attribute: 'display-text' })
], SelectOptionEl.prototype, "displayText", null);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the option that
 * can be placed inside of an md-select.
 *
 * This component is a subclass of `md-menu-item` and can accept the same slots,
 * properties, and events as `md-menu-item`.
 *
 * @example
 * ```html
 * <md-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdSelectOption = class MdSelectOption extends SelectOptionEl {
};
MdSelectOption.styles = [styles$2, styles$3];
MdSelectOption = __decorate([
    e$9('md-select-option')
], MdSelectOption);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * CSS class names used in component.
 */
var cssClasses = {
    CELL: 'mdc-data-table__cell',
    CELL_NUMERIC: 'mdc-data-table__cell--numeric',
    CONTENT: 'mdc-data-table__content',
    HEADER_CELL: 'mdc-data-table__header-cell',
    HEADER_CELL_LABEL: 'mdc-data-table__header-cell-label',
    HEADER_CELL_SORTED: 'mdc-data-table__header-cell--sorted',
    HEADER_CELL_SORTED_DESCENDING: 'mdc-data-table__header-cell--sorted-descending',
    HEADER_CELL_WITH_SORT: 'mdc-data-table__header-cell--with-sort',
    HEADER_CELL_WRAPPER: 'mdc-data-table__header-cell-wrapper',
    HEADER_ROW: 'mdc-data-table__header-row',
    HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
    IN_PROGRESS: 'mdc-data-table--in-progress',
    LINEAR_PROGRESS: 'mdc-data-table__linear-progress',
    PAGINATION_ROWS_PER_PAGE_LABEL: 'mdc-data-table__pagination-rows-per-page-label',
    PAGINATION_ROWS_PER_PAGE_SELECT: 'mdc-data-table__pagination-rows-per-page-select',
    PROGRESS_INDICATOR: 'mdc-data-table__progress-indicator',
    ROOT: 'mdc-data-table',
    ROW: 'mdc-data-table__row',
    ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
    ROW_SELECTED: 'mdc-data-table__row--selected',
    SORT_ICON_BUTTON: 'mdc-data-table__sort-icon-button',
    SORT_STATUS_LABEL: 'mdc-data-table__sort-status-label',
    TABLE_CONTAINER: 'mdc-data-table__table-container',
};
/**
 * DOM attributes used in component.
 */
var attributes = {
    ARIA_SELECTED: 'aria-selected',
    ARIA_SORT: 'aria-sort',
};
/**
 * List of data attributes used in component.
 */
var dataAttributes = {
    COLUMN_ID: 'data-column-id',
    ROW_ID: 'data-row-id',
};
/**
 * CSS selectors used in component.
 */
var selectors = {
    CONTENT: "." + cssClasses.CONTENT,
    HEADER_CELL: "." + cssClasses.HEADER_CELL,
    HEADER_CELL_WITH_SORT: "." + cssClasses.HEADER_CELL_WITH_SORT,
    HEADER_ROW: "." + cssClasses.HEADER_ROW,
    HEADER_ROW_CHECKBOX: "." + cssClasses.HEADER_ROW_CHECKBOX,
    PROGRESS_INDICATOR: "." + cssClasses.PROGRESS_INDICATOR,
    ROW: "." + cssClasses.ROW,
    ROW_CHECKBOX: "." + cssClasses.ROW_CHECKBOX,
    ROW_SELECTED: "." + cssClasses.ROW_SELECTED,
    SORT_ICON_BUTTON: "." + cssClasses.SORT_ICON_BUTTON,
    SORT_STATUS_LABEL: "." + cssClasses.SORT_STATUS_LABEL,
};
/**
 * Messages used in component.
 */
var messages = {
    SORTED_IN_DESCENDING: 'Sorted in descending order',
    SORTED_IN_ASCENDING: 'Sorted in ascending order',
};
/**
 * Attributes and selectors used in component.
 * @deprecated Use `attributes`, `dataAttributes` and `selectors` instead.
 */
var strings = {
    ARIA_SELECTED: attributes.ARIA_SELECTED,
    ARIA_SORT: attributes.ARIA_SORT,
    DATA_ROW_ID_ATTR: dataAttributes.ROW_ID,
    HEADER_ROW_CHECKBOX_SELECTOR: selectors.HEADER_ROW_CHECKBOX,
    ROW_CHECKBOX_SELECTOR: selectors.ROW_CHECKBOX,
    ROW_SELECTED_SELECTOR: selectors.ROW_SELECTED,
    ROW_SELECTOR: selectors.ROW,
};
/**
 * Sort values defined by ARIA.
 * See https://www.w3.org/WAI/PF/aria/states_and_properties#aria-sort
 */
var SortValue;
(function (SortValue) {
    // Items are sorted in ascending order by this column.
    SortValue["ASCENDING"] = "ascending";
    // Items are sorted in descending order by this column.
    SortValue["DESCENDING"] = "descending";
    // There is no defined sort applied to the column.
    SortValue["NONE"] = "none";
    // A sort algorithm other than ascending or descending has been applied.
    SortValue["OTHER"] = "other";
})(SortValue || (SortValue = {}));

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * The Foundation of data table component containing pure business logic, any
 * logic requiring DOM manipulation are delegated to adapter methods.
 */
var MDCDataTableFoundation = /** @class */ (function (_super) {
    __extends(MDCDataTableFoundation, _super);
    function MDCDataTableFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCDataTableFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassAtRowIndex: function () { return undefined; },
                getAttributeByHeaderCellIndex: function () { return ''; },
                getHeaderCellCount: function () { return 0; },
                getHeaderCellElements: function () { return []; },
                getRowCount: function () { return 0; },
                getRowElements: function () { return []; },
                getRowIdAtIndex: function () { return ''; },
                getRowIndexByChildElement: function () { return 0; },
                getSelectedRowCount: function () { return 0; },
                getTableContainerHeight: function () { return 0; },
                getTableHeaderHeight: function () { return 0; },
                isCheckboxAtRowIndexChecked: function () { return false; },
                isHeaderRowCheckboxChecked: function () { return false; },
                isRowsSelectable: function () { return false; },
                notifyRowSelectionChanged: function () { return undefined; },
                notifySelectedAll: function () { return undefined; },
                notifySortAction: function () { return undefined; },
                notifyUnselectedAll: function () { return undefined; },
                notifyRowClick: function () { return undefined; },
                registerHeaderRowCheckbox: function () { return undefined; },
                registerRowCheckboxes: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassAtRowIndex: function () { return undefined; },
                removeClassNameByHeaderCellIndex: function () { return undefined; },
                setAttributeAtRowIndex: function () { return undefined; },
                setAttributeByHeaderCellIndex: function () { return undefined; },
                setClassNameByHeaderCellIndex: function () { return undefined; },
                setHeaderRowCheckboxChecked: function () { return undefined; },
                setHeaderRowCheckboxIndeterminate: function () { return undefined; },
                setProgressIndicatorStyles: function () { return undefined; },
                setRowCheckboxCheckedAtIndex: function () { return undefined; },
                setSortStatusLabelByHeaderCellIndex: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows
     * are added or removed from table. Use this if registering checkbox is
     * synchronous.
     */
    MDCDataTableFoundation.prototype.layout = function () {
        if (this.adapter.isRowsSelectable()) {
            this.adapter.registerHeaderRowCheckbox();
            this.adapter.registerRowCheckboxes();
            this.setHeaderRowCheckboxState();
        }
    };
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows
     * are added or removed from table. Use this if registering checkbox is
     * asynchronous.
     */
    MDCDataTableFoundation.prototype.layoutAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.adapter.isRowsSelectable()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.adapter.registerHeaderRowCheckbox()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.adapter.registerRowCheckboxes()];
                    case 2:
                        _a.sent();
                        this.setHeaderRowCheckboxState();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return Returns array of row elements.
     */
    MDCDataTableFoundation.prototype.getRows = function () {
        return this.adapter.getRowElements();
    };
    /**
     * @return Array of header cell elements.
     */
    MDCDataTableFoundation.prototype.getHeaderCells = function () {
        return this.adapter.getHeaderCellElements();
    };
    /**
     * Sets selected row ids. Overwrites previously selected rows.
     * @param rowIds Array of row ids that needs to be selected.
     */
    MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            var rowId = this.adapter.getRowIdAtIndex(rowIndex);
            var isSelected = false;
            if (rowId && rowIds.indexOf(rowId) >= 0) {
                isSelected = true;
            }
            this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
            this.selectRowAtIndex(rowIndex, isSelected);
        }
        this.setHeaderRowCheckboxState();
    };
    /**
     * @return Returns array of all row ids.
     */
    MDCDataTableFoundation.prototype.getRowIds = function () {
        var rowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            rowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
        }
        return rowIds;
    };
    /**
     * @return Returns array of selected row ids.
     */
    MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
        var selectedRowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            if (this.adapter.isCheckboxAtRowIndexChecked(rowIndex)) {
                selectedRowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
            }
        }
        return selectedRowIds;
    };
    /**
     * Handles header row checkbox change event.
     */
    MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
        var isHeaderChecked = this.adapter.isHeaderRowCheckboxChecked();
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
            this.selectRowAtIndex(rowIndex, isHeaderChecked);
        }
        if (isHeaderChecked) {
            this.adapter.notifySelectedAll();
        }
        else {
            this.adapter.notifyUnselectedAll();
        }
    };
    /**
     * Handles change event originated from row checkboxes.
     */
    MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
        var rowIndex = this.adapter.getRowIndexByChildElement(event.target);
        if (rowIndex === -1) {
            return;
        }
        var selected = this.adapter.isCheckboxAtRowIndexChecked(rowIndex);
        this.selectRowAtIndex(rowIndex, selected);
        this.setHeaderRowCheckboxState();
        var rowId = this.adapter.getRowIdAtIndex(rowIndex);
        this.adapter.notifyRowSelectionChanged({ rowId: rowId, rowIndex: rowIndex, selected: selected });
    };
    /**
     * Handles sort action on sortable header cell.
     */
    MDCDataTableFoundation.prototype.handleSortAction = function (eventData) {
        var columnId = eventData.columnId, columnIndex = eventData.columnIndex, headerCell = eventData.headerCell;
        // Reset sort attributes / classes on other header cells.
        for (var index = 0; index < this.adapter.getHeaderCellCount(); index++) {
            if (index === columnIndex) {
                continue;
            }
            this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED);
            this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(index, strings.ARIA_SORT, SortValue.NONE);
            this.adapter.setSortStatusLabelByHeaderCellIndex(index, SortValue.NONE);
        }
        // Set appropriate sort attributes / classes on target header cell.
        this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED);
        var currentSortValue = this.adapter.getAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT);
        var sortValue = SortValue.NONE;
        // Set to descending if sorted on ascending order.
        if (currentSortValue === SortValue.ASCENDING) {
            this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.DESCENDING);
            sortValue = SortValue.DESCENDING;
            // Set to ascending if sorted on descending order.
        }
        else if (currentSortValue === SortValue.DESCENDING) {
            this.adapter.removeClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
            sortValue = SortValue.ASCENDING;
        }
        else {
            // Set to ascending by default when not sorted.
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
            sortValue = SortValue.ASCENDING;
        }
        this.adapter.setSortStatusLabelByHeaderCellIndex(columnIndex, sortValue);
        this.adapter.notifySortAction({
            columnId: columnId,
            columnIndex: columnIndex,
            headerCell: headerCell,
            sortValue: sortValue,
        });
    };
    /**
     * Handles data table row click event.
     */
    MDCDataTableFoundation.prototype.handleRowClick = function (_a) {
        var rowId = _a.rowId, row = _a.row;
        this.adapter.notifyRowClick({
            rowId: rowId,
            row: row,
        });
    };
    /**
     * Shows progress indicator blocking only the table body content when in
     * loading state.
     */
    MDCDataTableFoundation.prototype.showProgress = function () {
        var tableHeaderHeight = this.adapter.getTableHeaderHeight();
        // Calculate the height of table content (Not scroll content) excluding
        // header row height.
        var height = this.adapter.getTableContainerHeight() - tableHeaderHeight;
        var top = tableHeaderHeight;
        this.adapter.setProgressIndicatorStyles({
            height: height + "px",
            top: top + "px",
        });
        this.adapter.addClass(cssClasses.IN_PROGRESS);
    };
    /**
     * Hides progress indicator when data table is finished loading.
     */
    MDCDataTableFoundation.prototype.hideProgress = function () {
        this.adapter.removeClass(cssClasses.IN_PROGRESS);
    };
    /**
     * Updates header row checkbox state based on number of rows selected.
     */
    MDCDataTableFoundation.prototype.setHeaderRowCheckboxState = function () {
        if (this.adapter.getSelectedRowCount() === 0) {
            this.adapter.setHeaderRowCheckboxChecked(false);
            this.adapter.setHeaderRowCheckboxIndeterminate(false);
        }
        else if (this.adapter.getSelectedRowCount() === this.adapter.getRowCount()) {
            this.adapter.setHeaderRowCheckboxChecked(true);
            this.adapter.setHeaderRowCheckboxIndeterminate(false);
        }
        else {
            this.adapter.setHeaderRowCheckboxIndeterminate(true);
            this.adapter.setHeaderRowCheckboxChecked(false);
        }
    };
    /**
     * Sets the attributes of row element based on selection state.
     */
    MDCDataTableFoundation.prototype.selectRowAtIndex = function (rowIndex, selected) {
        if (selected) {
            this.adapter.addClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
            this.adapter.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'true');
        }
        else {
            this.adapter.removeClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
            this.adapter.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'false');
        }
    };
    return MDCDataTableFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */
const fn = () => { };
const optionsBlock = {
    get passive() {
        return false;
    }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class BaseElement extends s$2 {
    click() {
        if (this.mdcRoot) {
            this.mdcRoot.focus();
            this.mdcRoot.click();
            return;
        }
        super.click();
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        if (this.mdcFoundationClass) {
            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
        }
    }
    firstUpdated() {
        this.createFoundation();
    }
}

/**
 * @fires row-selection-changed - Event emitted when row checkbox is checked or unchecked. Detail contains the `row` element, `rowIndex` and `selected`.
 * @fires selected-all - Event emitted when header row checkbox is checked.
 * @fires unselected-all - Event emitted when header row checkbox is unchecked.
 * @fires row-click - Event emitted when a row has been checked or unchecked. Detail contains the `row` element, `rowIndex` and `selected`.
 * @fires filtered - Event emitted when the data table has been filtered. Detail contains the `column` element, `text`, `caseSensitive` and `columnIndex`.
 * @fires sorted - Event emitted when the data table has been sorted. Detail contains the `column` element and `isDescending`.
 * @fires page-size-change - Event emitted when the page size has been changed. Detail contains the `pageSize`.
 * @fires page-changed - Event emitted when the page has been changed. Detail contains the `action`.
 * @fires paginate - Event emitted when the data table has been paginated. Detail contains the `firstRow`, `lastRow`, `pageSize` and `action`.
 */
class DataTable extends BaseElement {
    constructor() {
        super(...arguments);
        /**
         * Enable/disable pagination.
         */
        this.paginated = false;
        /**
         * JSON array with the page sizes to be used in the pagination and shown as page size select options.
         */
        this.pageSizes = '[10, 25, 100]';
        /**
         * Label to show before the page size select.
         */
        this.pageSizesLabel = 'Rows per page:';
        /**
         * Index of the first row to be shown on the current page.
         */
        this.currentFirstRow = 1;
        /** @internal */
        this.pageSizesArray = JSON.parse(this.pageSizes);
        /**
         * Size of the current page.
         */
        this.currentPageSize = this.pageSizesArray[0];
        /**
         * Index of the last row to be shown on the current page.
         */
        this.currentLastRow = this.currentPageSize;
        /**
         * Total number of rows in the data table to show in the pagination label and
         */
        this.totalRows = 0;
        /**
         * Label pattern to show after the page size select that indicates the current rows shown in the page.
         * It should contain the following parameters: `:firstRow`, `:lastRow`, `:totalRows`
         */
        this.paginationTotalLabel = ':firstRow-:lastRow of :totalRows';
        /**
         * Whether the data table is using a custom pagination function. If true, the automatic pagination is disabled and
         * the `current-first-row`, `current-last-row` and `current-page-size` attributes are not updated automatically.
         * You'll have to handle the pagination yourself by listening to the `paginate` event and updating the
         * `current-first-row`, `current-last-row` and `current-page-size` attributes accordingly.
         */
        this.customPagination = false;
        /**
         * Whether the loading indicator is active.
         */
        this.inProgress = false;
        /**
         * Overall height of the table. Available in three different measures.
         */
        this.density = '';
        /** @internal */
        this.mdcRoot = this.tableElement;
        /** @internal */
        // @ts-expect-error (TypeScript bug)
        this.mdcFoundationClass = MDCDataTableFoundation;
        this.columnFilters = new Map();
        /** @internal */
        this.rowCallback = (e) => this.mdcFoundation.handleRowCheckboxChange(e);
        /** @internal */
        this.headerRowCallback = () => this.mdcFoundation.handleHeaderRowCheckboxChange();
        /** @internal */
        this.filterColumnCallback = (e) => {
            const event = e;
            // Don't filter if the column is using custom filtering
            if (event.detail.customFiltering) {
                return;
            }
            const { text, column } = event.detail;
            if (text === '') {
                this.columnFilters.delete(column);
            }
            else {
                this.columnFilters.set(column, text);
            }
            for (const row of this.rows) {
                row.hidden = true;
            }
            let rowsToShow = this.rows;
            for (let [column, filterText] of this.columnFilters) {
                rowsToShow = this.rows.filter((row) => {
                    const index = this.columns.indexOf(column);
                    let cellText = row.cells[index].textContent ?? '';
                    if (!event.detail.caseSensitive) {
                        cellText = cellText.toLowerCase();
                        filterText = filterText.toLowerCase();
                    }
                    return cellText.search(filterText) !== -1;
                });
            }
            this.showRows(rowsToShow);
            this.dispatchEvent(new CustomEvent('filtered', {
                detail: {
                    column: event.detail.column,
                    text,
                    caseSensitive: event.detail.caseSensitive,
                    columnIndex: this.columns.indexOf(column)
                }
            }));
        };
        this.sortColumnCallback = (e) => {
            const event = e;
            const { column, isDescending } = event.detail;
            // Don't sort if the column is using custom sorting
            if (!event.detail.customSorting) {
                this.inProgress = true;
                for (const col of this.columns.filter((col) => col !== column && col.sortable)) {
                    col.sorted = false;
                    col.sortedDescending = false;
                }
                const cells = this.rows.map((row) => row.cells[this.columns.indexOf(column)]);
                cells.sort((a, b) => {
                    let aValue = a.textContent;
                    let bValue = b.textContent;
                    if (column.type === 'numeric' && (typeof aValue === 'string' || typeof bValue === 'string')) {
                        aValue = Number.parseFloat(aValue);
                        bValue = Number.parseFloat(bValue);
                    }
                    if (!isDescending) {
                        const temporary = aValue;
                        aValue = bValue;
                        bValue = temporary;
                    }
                    if (typeof aValue === 'string' && typeof bValue === 'string') {
                        return aValue.localeCompare(bValue);
                    }
                    return aValue < bValue ? -1 : (aValue > bValue ? 1 : 0);
                });
                // this.rows = cells.map((cell) => cell.parentElement as DataTableRow);
                for (const cell of cells) {
                    const row = cell.parentElement;
                    row.parentElement?.append(row);
                }
                this.inProgress = false;
                column.sorted = true;
            }
            column.withSortButton = true;
            this.dispatchEvent(new CustomEvent('sorted', {
                detail: {
                    column: event.detail.column,
                    isDescending,
                }
            }));
        };
    }
    /** @internal */
    get headerCheckboxRow() {
        return this.columns.filter((column) => column.checkbox !== undefined)[0];
    }
    /** @internal */
    get headerCheckbox() {
        return this.headerCheckboxRow?.checkbox;
    }
    render() {
        return x `
        <div class="mdc-data-table">
            <div class="mdc-data-table__table-container">
                <div class="mdc-data-table__table" aria-label="${this.ariaLabel}" role="table">
                    <div class="mdc-data-table__head" role="rowgroup">
                        <div class="mdc-data-table__header-row" role="row">
                            <slot name="header-cell" @slotchange=${this.onHeaderCellSlotChange}></slot>
                        </div>
                    </div>
                    <div class="mdc-data-table__content" role="rowgroup">
                        <slot name="row" @slotchange=${() => this.requestUpdate()}></slot>
                    </div>
                </div>
            </div>

            ${this.renderPagination()}

            <slot name="footer"></slot>

            <div class="mdc-data-table__progress-indicator">
                <div class="mdc-data-table__scrim"></div>
                <md-linear-progress indeterminate class="mdc-data-table__linear-progress" role="progressbar"
                                    aria-label="Data is being loaded..."></md-linear-progress>
            </div>
        </div>
    `;
    }
    onHeaderCellSlotChange() {
        this.requestUpdate();
        const sortColumn = this.columns.find((column) => column.sortable && column.sorted);
        if (sortColumn) {
            // @ts-ignore
            sortColumn.onSortButtonClicked(new CustomEvent('icon-button-toggle-change', { detail: { selected: !sortColumn.sortedDescending } }));
        }
    }
    renderPagination() {
        if (this.paginated) {
            const totalRows = this.totalRows || this.rows.length;
            const currentFirstRow = this.currentFirstRow < 1 ? 1 : this.currentFirstRow;
            const currentLastRow = this.currentLastRow > totalRows ? totalRows : this.currentLastRow;
            return x `
          <md-data-table-footer>
              <div class="mdc-data-table__pagination-trailing">
                  <div class="mdc-data-table__pagination-rows-per-page">
                      <div class="mdc-data-table__pagination-rows-per-page-label">
                          ${this.pageSizesLabel}
                      </div>

                      <md-outlined-select type="number" class="mdc-data-table__pagination-rows-per-page-select" @input=${this.onPageSizeSelected}>
                          ${this.pageSizesArray.map((size) => x `
                              <md-select-option value="${size}" ?selected="${this.currentPageSize === size}">
                                  <span slot="headline">${size}</span>
                              </md-select-option>
                          `)}
                      </md-outlined-select>
                  </div>

                  <div class="mdc-data-table__pagination-navigation">
                      <div class="mdc-data-table__pagination-total">
                          ${this.renderTemplate(this.paginationTotalLabel, {
                'firstRow': currentFirstRow,
                'lastRow': currentLastRow,
                totalRows,
            })}
                      </div>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="first"
                                             ?disabled=${currentFirstRow <= 1}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-first-button-icon">
                              <md-icon slot="icon">first_page</md-icon>
                          </slot>
                      </md-filled-icon-button>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="previous"
                                             ?disabled=${currentFirstRow <= 1}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-previous-button-icon">
                              <md-icon>chevron_left</md-icon>
                          </slot>
                      </md-filled-icon-button>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="next"
                                             ?disabled=${currentLastRow >= totalRows}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-next-button-icon">
                              <md-icon>chevron_right</md-icon>
                          </slot>
                      </md-filled-icon-button>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="last"
                                             ?disabled=${currentLastRow >= totalRows}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-last-button-icon">
                              <md-icon>last_page</md-icon>
                          </slot>
                      </md-filled-icon-button>
                  </div>
              </div>
              </div>
      `;
        }
        return '';
    }
    onPageSizeSelected(e) {
        this.currentPageSize = Number.parseInt(e.target.value);
        this.dispatchEvent(new CustomEvent('page-size-change', {
            detail: {
                pageSize: this.currentPageSize,
            }
        }));
        this.paginate('first');
    }
    onPaginationButtonClicked(event) {
        let button = event.target;
        if (!(button instanceof IconButton)) {
            button = button.closest('.mdc-data-table__pagination-button');
        }
        const action = button.dataset['page'];
        this.dispatchEvent(new CustomEvent('page-changed', {
            detail: {
                action
            }
        }));
        this.paginate(action);
    }
    paginate(action = 'current') {
        this.pageSizesArray = JSON.parse(this.pageSizes);
        if (!this.pageSizesArray.includes(this.currentPageSize)) {
            this.currentPageSize = this.pageSizesArray[0];
        }
        this.dispatchEvent(new CustomEvent('paginate', {
            detail: {
                pageSize: this.currentPageSize,
                firstRow: this.currentFirstRow,
                lastRow: this.currentLastRow,
                action
            }
        }));
        if (this.paginated && !this.customPagination) {
            this.hideRows();
            switch (action) {
                case 'first':
                    this.currentFirstRow = 1;
                    this.currentLastRow = this.currentPageSize;
                    break;
                case 'previous':
                    this.currentFirstRow -= this.currentPageSize;
                    this.currentLastRow -= this.currentPageSize;
                    if (this.currentFirstRow < 1) {
                        this.currentFirstRow = 1;
                        this.currentLastRow = this.currentPageSize;
                    }
                    break;
                case 'next':
                    this.currentFirstRow += this.currentPageSize;
                    this.currentLastRow += this.currentPageSize;
                    break;
                case 'last':
                    this.currentFirstRow = this.rows.length - this.currentPageSize + 1;
                    this.currentLastRow = this.rows.length;
                    break;
            }
            const rowsToShow = this.rows.slice(this.currentFirstRow - 1, this.currentLastRow);
            this.showRows(rowsToShow);
        }
    }
    firstUpdated() {
        super.firstUpdated();
        this.paginate('first');
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        for (const row of this.rows) {
            row.removeEventListener('selected', this.rowCallback);
            row.addEventListener('selected', this.rowCallback);
            row.setAttribute('density', this.density);
        }
        for (const column of this.columns) {
            column.removeEventListener('filter', this.filterColumnCallback);
            column.addEventListener('filter', this.filterColumnCallback);
            column.removeEventListener('sort', this.sortColumnCallback);
            column.addEventListener('sort', this.sortColumnCallback);
            column.setAttribute('density', this.density);
        }
        this.headerCheckboxRow?.removeEventListener('checked', this.headerRowCallback);
        this.headerCheckboxRow?.addEventListener('checked', this.headerRowCallback);
        this.paginate();
        if (this.inProgress) {
            this.mdcFoundation?.showProgress();
        }
        else {
            this.mdcFoundation?.hideProgress();
        }
        this.mdcFoundation?.layout();
    }
    createAdapter() {
        return {
            addClass: (className) => {
                if (className === cssClasses.IN_PROGRESS) {
                    this.tableElement.classList.add(cssClasses.IN_PROGRESS);
                }
            },
            removeClass: (className) => {
                if (className === cssClasses.IN_PROGRESS) {
                    this.tableElement.classList.remove(cssClasses.IN_PROGRESS);
                }
            },
            addClassAtRowIndex: (rowIndex, className) => {
                if (className === cssClasses.ROW_SELECTED) {
                    this.rows[rowIndex].selected = true;
                }
            },
            getRowCount: () => this.totalRows || this.rows.length,
            getRowElements: () => this.rows,
            getRowIdAtIndex: (rowIndex) => this.rows?.[rowIndex].id ?? null,
            getRowIndexByChildElement: (el) => this.rows.findIndex((row) => row.contains(el)),
            getSelectedRowCount: () => this.rows.filter((row) => row.selected).length,
            isCheckboxAtRowIndexChecked: (rowIndex) => this.rows[rowIndex].selected,
            isHeaderRowCheckboxChecked: () => this.headerCheckbox?.checked ?? false,
            isRowsSelectable: () => this.headerCheckbox !== undefined ||
                this.rows.filter((row) => row.checkboxCell !== undefined).length > 0,
            notifyRowSelectionChanged: (data) => {
                this.dispatchEvent(new CustomEvent('row-selection-changed', {
                    detail: {
                        row: this.rows[data.rowIndex],
                        rowIndex: data.rowIndex,
                        selected: data.selected,
                    }
                }));
            },
            notifySelectedAll: () => {
                this.dispatchEvent(new CustomEvent('selected-all'));
            },
            notifyUnselectedAll: () => {
                this.dispatchEvent(new CustomEvent('unselected-all'));
            },
            notifyRowClick: (detail) => {
                this.dispatchEvent(new CustomEvent('row-click', { detail }));
            },
            registerHeaderRowCheckbox: () => {
            },
            registerRowCheckboxes: () => {
            },
            removeClassAtRowIndex: (rowIndex, className) => {
                if (className === cssClasses.ROW_SELECTED) {
                    this.rows[rowIndex].selected = false;
                }
            },
            setAttributeAtRowIndex: (rowIndex, attr, value) => {
                const row = this.rows[rowIndex];
                if (row) {
                    row.setAttribute(attr, value);
                    if (attr === attributes.ARIA_SELECTED) {
                        row.selected = value === 'true';
                    }
                }
            },
            setHeaderRowCheckboxChecked: (checked) => {
                if (this.headerCheckbox) {
                    this.headerCheckbox.checked = checked;
                }
            },
            setHeaderRowCheckboxIndeterminate: (indeterminate) => {
                if (this.headerCheckbox) {
                    this.headerCheckbox.indeterminate = indeterminate;
                }
            },
            setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
                const row = this.rows[rowIndex];
                if (row) {
                    row.selected = checked;
                }
            },
            getHeaderCellCount: () => this.columns.length,
            getHeaderCellElements: () => this.columns,
            getAttributeByHeaderCellIndex: (columnIndex, attribute) => this.columns[columnIndex].getAttribute(attribute),
            setAttributeByHeaderCellIndex: (columnIndex, attribute, value) => {
                this.columns[columnIndex].setAttribute(attribute, value);
            },
            setClassNameByHeaderCellIndex: (columnIndex, className) => {
                const attributesMapping = {
                    [cssClasses.HEADER_CELL_SORTED]: 'sorted',
                    [cssClasses.HEADER_CELL_SORTED_DESCENDING]: 'sortedDescending'
                };
                this.columns[columnIndex].toggleAttribute(attributesMapping[className], true);
            },
            removeClassNameByHeaderCellIndex: (columnIndex, className) => {
                const attributesMapping = {
                    [cssClasses.HEADER_CELL_SORTED]: 'sorted',
                    [cssClasses.HEADER_CELL_SORTED_DESCENDING]: 'sortedDescending'
                };
                this.columns[columnIndex].toggleAttribute(attributesMapping[className], false);
            },
            notifySortAction: (data) => {
                this.dispatchEvent(new CustomEvent('sorted', { detail: data }));
            },
            getTableContainerHeight: () => this.tableContainerElement.getBoundingClientRect().height,
            getTableHeaderHeight: () => this.headerRowElement.getBoundingClientRect().height,
            setProgressIndicatorStyles: (styles) => {
                this.progressIndicator.style.top = styles.top;
                this.progressIndicator.style.height = styles.height;
            },
            setSortStatusLabelByHeaderCellIndex: (columnIndex, sortValue) => {
                const column = this.columns[columnIndex];
                if (column.sortable) {
                    const mappings = {
                        [SortValue.ASCENDING]: messages.SORTED_IN_ASCENDING,
                        [SortValue.DESCENDING]: messages.SORTED_IN_DESCENDING,
                    };
                    // @ts-ignore
                    column.sortButton.ariaLabel = mappings[sortValue];
                }
            }
        };
    }
    renderTemplate(template, params) {
        for (const [key, value] of Object.entries(params)) {
            template = template.replace(`:${key}`, value);
        }
        return template;
    }
    hideRows(rows = this.rows) {
        for (const row of rows) {
            row.hidden = true;
            row.classList.remove('without-bottom-border');
        }
    }
    showRows(rows = this.rows) {
        for (const row of rows) {
            row.hidden = false;
        }
        // Add bottom border to the last row
        rows.slice(-1)[0]?.classList.add('without-bottom-border');
    }
}
__decorate([
    n$7({ type: Boolean, reflect: true })
], DataTable.prototype, "paginated", void 0);
__decorate([
    n$7({ type: String, reflect: true, attribute: 'page-sizes' })
], DataTable.prototype, "pageSizes", void 0);
__decorate([
    n$7({ type: String, reflect: true, attribute: 'page-sizes-label' })
], DataTable.prototype, "pageSizesLabel", void 0);
__decorate([
    n$7({ type: Number, reflect: true, attribute: 'current-first-row' })
], DataTable.prototype, "currentFirstRow", void 0);
__decorate([
    n$7({ type: Number, reflect: true, attribute: 'current-page-size' })
], DataTable.prototype, "currentPageSize", void 0);
__decorate([
    n$7({ type: Number, reflect: true, attribute: 'current-last-row' })
], DataTable.prototype, "currentLastRow", void 0);
__decorate([
    n$7({ type: Number, attribute: 'total-rows' })
], DataTable.prototype, "totalRows", void 0);
__decorate([
    n$7({ type: String })
], DataTable.prototype, "paginationTotalLabel", void 0);
__decorate([
    n$7({ type: Boolean, attribute: 'custom-pagination' })
], DataTable.prototype, "customPagination", void 0);
__decorate([
    n$7({ type: Boolean, reflect: true, attribute: 'in-progress' })
], DataTable.prototype, "inProgress", void 0);
__decorate([
    n$7({ type: String })
], DataTable.prototype, "density", void 0);
__decorate([
    l$5({ slot: 'header-cell', selector: 'md-data-table-column' })
], DataTable.prototype, "columns", void 0);
__decorate([
    l$5({ slot: 'row', selector: 'md-data-table-row' })
], DataTable.prototype, "rows", void 0);
__decorate([
    i$5('.mdc-data-table')
], DataTable.prototype, "tableElement", void 0);
__decorate([
    i$5('.mdc-data-table__table-container')
], DataTable.prototype, "tableContainerElement", void 0);
__decorate([
    i$5('.mdc-data-table__header-row')
], DataTable.prototype, "headerRowElement", void 0);
__decorate([
    i$5('.mdc-data-table__progress-indicator')
], DataTable.prototype, "progressIndicator", void 0);

let MdDataTable = class MdDataTable extends DataTable {
};
MdDataTable.styles = [styles$b];
MdDataTable = __decorate([
    e$9('md-data-table')
], MdDataTable);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i$4 `:root{--mdc-layout-grid-margin-desktop: 24px;--mdc-layout-grid-gutter-desktop: 24px;--mdc-layout-grid-column-width-desktop: 72px;--mdc-layout-grid-margin-tablet: 16px;--mdc-layout-grid-gutter-tablet: 16px;--mdc-layout-grid-column-width-tablet: 72px;--mdc-layout-grid-margin-phone: 16px;--mdc-layout-grid-gutter-phone: 16px;--mdc-layout-grid-column-width-phone: 72px}@media(min-width: 840px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:24px;padding:var(--mdc-layout-grid-margin-desktop, 24px)}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-tablet, 16px)}}@media(max-width: 599px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-phone, 16px)}}@media(min-width: 840px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2*-1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:24px;grid-gap:var(--mdc-layout-grid-gutter-desktop, 24px);grid-template-columns:repeat(12, minmax(0, 1fr))}}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2*-1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-tablet, 16px);grid-template-columns:repeat(8, minmax(0, 1fr))}}}@media(max-width: 599px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2*-1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-phone, 16px);grid-template-columns:repeat(4, minmax(0, 1fr))}}}@media(min-width: 840px){.mdc-layout-grid__cell,::slotted(*){width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));box-sizing:border-box;margin:12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2)}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:auto;grid-column-end:span 9}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:auto;grid-column-end:span 10}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:auto;grid-column-end:span 11}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:auto;grid-column-end:span 12}}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid__cell,::slotted(*){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2)}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:auto;grid-column-end:span 8}}}@media(max-width: 599px){.mdc-layout-grid__cell,::slotted(*){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2)}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell,::slotted(*){margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:auto;grid-column-end:span 4}}}.mdc-layout-grid__cell--order-1{order:1}.mdc-layout-grid__cell--order-2{order:2}.mdc-layout-grid__cell--order-3{order:3}.mdc-layout-grid__cell--order-4{order:4}.mdc-layout-grid__cell--order-5{order:5}.mdc-layout-grid__cell--order-6{order:6}.mdc-layout-grid__cell--order-7{order:7}.mdc-layout-grid__cell--order-8{order:8}.mdc-layout-grid__cell--order-9{order:9}.mdc-layout-grid__cell--order-10{order:10}.mdc-layout-grid__cell--order-11{order:11}.mdc-layout-grid__cell--order-12{order:12}.mdc-layout-grid__cell--align-top{align-self:flex-start}@supports(display: grid){.mdc-layout-grid__cell--align-top{align-self:start}}.mdc-layout-grid__cell--align-middle{align-self:center}.mdc-layout-grid__cell--align-bottom{align-self:flex-end}@supports(display: grid){.mdc-layout-grid__cell--align-bottom{align-self:end}}@media(min-width: 840px){.mdc-layout-grid--fixed-column-width{width:1176px;width:calc(var(--mdc-layout-grid-column-width-desktop, 72px)*12 + var(--mdc-layout-grid-gutter-desktop, 24px)*11 + var(--mdc-layout-grid-margin-desktop, 24px)*2)}}@media(min-width: 600px)and (max-width: 839px){.mdc-layout-grid--fixed-column-width{width:720px;width:calc(var(--mdc-layout-grid-column-width-tablet, 72px)*8 + var(--mdc-layout-grid-gutter-tablet, 16px)*7 + var(--mdc-layout-grid-margin-tablet, 16px)*2)}}@media(max-width: 599px){.mdc-layout-grid--fixed-column-width{width:368px;width:calc(var(--mdc-layout-grid-column-width-phone, 72px)*4 + var(--mdc-layout-grid-gutter-phone, 16px)*3 + var(--mdc-layout-grid-margin-phone, 16px)*2)}}.mdc-layout-grid--align-left{margin-right:auto;margin-left:0}.mdc-layout-grid--align-right{margin-right:0;margin-left:auto}div.mdc-layout-grid{background:inherit;border:inherit}div.mdc-layout-grid,div.mdc-layout-grid__inner{max-width:inherit;width:inherit;min-width:inherit;height:inherit;max-height:inherit;min-height:inherit}@media(min-width: 840px){::slotted(*[grid-span="1"]),::slotted(*[grid-span-desktop="1"]){width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="1"]),::slotted(*[grid-span-desktop="1"]){width:auto;grid-column-end:span 1}}::slotted(*[grid-span="2"]),::slotted(*[grid-span-desktop="2"]){width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="2"]),::slotted(*[grid-span-desktop="2"]){width:auto;grid-column-end:span 2}}::slotted(*[grid-span="3"]),::slotted(*[grid-span-desktop="3"]){width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="3"]),::slotted(*[grid-span-desktop="3"]){width:auto;grid-column-end:span 3}}::slotted(*[grid-span="4"]),::slotted(*[grid-span-desktop="4"]){width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="4"]),::slotted(*[grid-span-desktop="4"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="5"]),::slotted(*[grid-span-desktop="5"]){width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="5"]),::slotted(*[grid-span-desktop="5"]){width:auto;grid-column-end:span 5}}::slotted(*[grid-span="6"]),::slotted(*[grid-span-desktop="6"]){width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="6"]),::slotted(*[grid-span-desktop="6"]){width:auto;grid-column-end:span 6}}::slotted(*[grid-span="7"]),::slotted(*[grid-span-desktop="7"]){width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="7"]),::slotted(*[grid-span-desktop="7"]){width:auto;grid-column-end:span 7}}::slotted(*[grid-span="8"]),::slotted(*[grid-span-desktop="8"]){width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="8"]),::slotted(*[grid-span-desktop="8"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="9"]),::slotted(*[grid-span-desktop="9"]){width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="9"]),::slotted(*[grid-span-desktop="9"]){width:auto;grid-column-end:span 9}}::slotted(*[grid-span="10"]),::slotted(*[grid-span-desktop="10"]){width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="10"]),::slotted(*[grid-span-desktop="10"]){width:auto;grid-column-end:span 10}}::slotted(*[grid-span="11"]),::slotted(*[grid-span-desktop="11"]){width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="11"]),::slotted(*[grid-span-desktop="11"]){width:auto;grid-column-end:span 11}}::slotted(*[grid-span="12"]),::slotted(*[grid-span-desktop="12"]){width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){::slotted(*[grid-span="12"]),::slotted(*[grid-span-desktop="12"]){width:auto;grid-column-end:span 12}}}@media(min-width: 600px)and (max-width: 839px){::slotted(*[grid-span="1"]),::slotted(*[grid-span-tablet="1"]){width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="1"]),::slotted(*[grid-span-tablet="1"]){width:auto;grid-column-end:span 1}}::slotted(*[grid-span="2"]),::slotted(*[grid-span-tablet="2"]){width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="2"]),::slotted(*[grid-span-tablet="2"]){width:auto;grid-column-end:span 2}}::slotted(*[grid-span="3"]),::slotted(*[grid-span-tablet="3"]){width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="3"]),::slotted(*[grid-span-tablet="3"]){width:auto;grid-column-end:span 3}}::slotted(*[grid-span="4"]),::slotted(*[grid-span-tablet="4"]){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="4"]),::slotted(*[grid-span-tablet="4"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="5"]),::slotted(*[grid-span-tablet="5"]){width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="5"]),::slotted(*[grid-span-tablet="5"]){width:auto;grid-column-end:span 5}}::slotted(*[grid-span="6"]),::slotted(*[grid-span-tablet="6"]){width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="6"]),::slotted(*[grid-span-tablet="6"]){width:auto;grid-column-end:span 6}}::slotted(*[grid-span="7"]),::slotted(*[grid-span-tablet="7"]){width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="7"]),::slotted(*[grid-span-tablet="7"]){width:auto;grid-column-end:span 7}}::slotted(*[grid-span="8"]),::slotted(*[grid-span-tablet="8"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="8"]),::slotted(*[grid-span-tablet="8"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="9"]),::slotted(*[grid-span-tablet="9"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="9"]),::slotted(*[grid-span-tablet="9"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="10"]),::slotted(*[grid-span-tablet="10"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="10"]),::slotted(*[grid-span-tablet="10"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="11"]),::slotted(*[grid-span-tablet="11"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="11"]),::slotted(*[grid-span-tablet="11"]){width:auto;grid-column-end:span 8}}::slotted(*[grid-span="12"]),::slotted(*[grid-span-tablet="12"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){::slotted(*[grid-span="12"]),::slotted(*[grid-span-tablet="12"]){width:auto;grid-column-end:span 8}}}@media(max-width: 599px){::slotted(*[grid-span="1"]),::slotted(*[grid-span-phone="1"]){width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="1"]),::slotted(*[grid-span-phone="1"]){width:auto;grid-column-end:span 1}}::slotted(*[grid-span="2"]),::slotted(*[grid-span-phone="2"]){width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="2"]),::slotted(*[grid-span-phone="2"]){width:auto;grid-column-end:span 2}}::slotted(*[grid-span="3"]),::slotted(*[grid-span-phone="3"]){width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="3"]),::slotted(*[grid-span-phone="3"]){width:auto;grid-column-end:span 3}}::slotted(*[grid-span="4"]),::slotted(*[grid-span-phone="4"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="4"]),::slotted(*[grid-span-phone="4"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="5"]),::slotted(*[grid-span-phone="5"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="5"]),::slotted(*[grid-span-phone="5"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="6"]),::slotted(*[grid-span-phone="6"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="6"]),::slotted(*[grid-span-phone="6"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="7"]),::slotted(*[grid-span-phone="7"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="7"]),::slotted(*[grid-span-phone="7"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="8"]),::slotted(*[grid-span-phone="8"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="8"]),::slotted(*[grid-span-phone="8"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="9"]),::slotted(*[grid-span-phone="9"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="9"]),::slotted(*[grid-span-phone="9"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="10"]),::slotted(*[grid-span-phone="10"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="10"]),::slotted(*[grid-span-phone="10"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="11"]),::slotted(*[grid-span-phone="11"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="11"]),::slotted(*[grid-span-phone="11"]){width:auto;grid-column-end:span 4}}::slotted(*[grid-span="12"]),::slotted(*[grid-span-phone="12"]){width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){::slotted(*[grid-span="12"]),::slotted(*[grid-span-phone="12"]){width:auto;grid-column-end:span 4}}}::slotted(*[grid-order="1"]){order:1}::slotted(*[grid-order="2"]){order:2}::slotted(*[grid-order="3"]){order:3}::slotted(*[grid-order="4"]){order:4}::slotted(*[grid-order="5"]){order:5}::slotted(*[grid-order="6"]){order:6}::slotted(*[grid-order="7"]){order:7}::slotted(*[grid-order="8"]){order:8}::slotted(*[grid-order="9"]){order:9}::slotted(*[grid-order="10"]){order:10}::slotted(*[grid-order="11"]){order:11}::slotted(*[grid-order="12"]){order:12}::slotted(*[grid-align=top]){align-self:flex-start}@supports(display: grid){::slotted(*[grid-align=top]){align-self:start}}::slotted(*[grid-align=middle]){align-self:center}::slotted(*[grid-align=bottom]){align-self:flex-end}@supports(display: grid){::slotted(*[grid-align=bottom]){align-self:end}}/*# sourceMappingURL=layout-grid.css.map */
`;

class LayoutGrid extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * You can designate each column to have a certain width. The column width can be specified through the CSS custom property `--mdc-layout-grid-column-width-{screen_size}`. The column width is set to 72px on all devices by default.
         */
        this.fixedColumnWidth = false;
        /**
         * The grid is by default center aligned. You can set this attribute to `left` or `right` to change this behavior. Note, these modifiers will have no effect when the grid already fills its container.
         */
        this.align = 'center';
    }
    getRenderClasses() {
        return {
            'mdc-layout-grid': true,
            'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
            'mdc-layout-grid--align-left': this.align === 'left',
            'mdc-layout-grid--align-right': this.align === 'right',
        };
    }
    render() {
        return x `
            <div class="${o$1(this.getRenderClasses())}">
                ${this.renderSlot()}
            </div>
        `;
    }
    renderSlot() {
        return x `
            <md-layout-grid-inner>
                <slot></slot>
            </md-layout-grid-inner>
        `;
    }
}
__decorate([
    n$7({ type: Boolean, attribute: 'fixed-column-width' })
], LayoutGrid.prototype, "fixedColumnWidth", void 0);
__decorate([
    n$7({ type: String })
], LayoutGrid.prototype, "align", void 0);

class LayoutGridInner extends LayoutGrid {
    getRenderClasses() {
        const classes = super.getRenderClasses();
        delete classes['mdc-layout-grid'];
        classes['mdc-layout-grid__inner'] = true;
        return classes;
    }
    renderSlot() {
        return x `
            <slot></slot>`;
    }
}

let MdLayoutGridInner = class MdLayoutGridInner extends LayoutGridInner {
};
MdLayoutGridInner.styles = [styles];
MdLayoutGridInner = __decorate([
    e$9('md-layout-grid-inner')
], MdLayoutGridInner);

let MdLayoutGrid = class MdLayoutGrid extends LayoutGrid {
};
MdLayoutGrid.styles = [styles];
MdLayoutGrid = __decorate([
    e$9('md-layout-grid')
], MdLayoutGrid);

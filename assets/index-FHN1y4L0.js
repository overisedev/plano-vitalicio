var yp=e=>{throw TypeError(e)};var _l=(e,t,n)=>t.has(e)||yp("Cannot "+n);var P=(e,t,n)=>(_l(e,t,"read from private field"),n?n.call(e):t.get(e)),J=(e,t,n)=>t.has(e)?yp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),H=(e,t,n,r)=>(_l(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Oe=(e,t,n)=>(_l(e,t,"access private method"),n);var ko=(e,t,n,r)=>({set _(i){H(e,t,i,n)},get _(){return P(e,t,r)}});function Iw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ug(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wg={exports:{}},il={},Hg={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),zw=Symbol.for("react.portal"),Fw=Symbol.for("react.fragment"),Vw=Symbol.for("react.strict_mode"),_w=Symbol.for("react.profiler"),Bw=Symbol.for("react.provider"),$w=Symbol.for("react.context"),Uw=Symbol.for("react.forward_ref"),Ww=Symbol.for("react.suspense"),Hw=Symbol.for("react.memo"),Gw=Symbol.for("react.lazy"),wp=Symbol.iterator;function Kw(e){return e===null||typeof e!="object"?null:(e=wp&&e[wp]||e["@@iterator"],typeof e=="function"?e:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kg=Object.assign,Yg={};function Vi(e,t,n){this.props=e,this.context=t,this.refs=Yg,this.updater=n||Gg}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qg(){}qg.prototype=Vi.prototype;function gd(e,t,n){this.props=e,this.context=t,this.refs=Yg,this.updater=n||Gg}var xd=gd.prototype=new qg;xd.constructor=gd;Kg(xd,Vi.prototype);xd.isPureReactComponent=!0;var bp=Array.isArray,Qg=Object.prototype.hasOwnProperty,vd={current:null},Xg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Qg.call(t,r)&&!Xg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:so,type:e,key:s,ref:o,props:i,_owner:vd.current}}function Yw(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yd(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function qw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sp=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qw(""+e.key):t.toString(36)}function Zo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case so:case zw:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Bl(o,0):r,bp(i)?(n="",e!=null&&(n=e.replace(Sp,"$&/")+"/"),Zo(i,t,n,"",function(u){return u})):i!=null&&(yd(i)&&(i=Yw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bp(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Bl(s,a);o+=Zo(s,t,n,l,i)}else if(l=Kw(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Bl(s,a++),o+=Zo(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(e,t,n){if(e==null)return e;var r=[],i=0;return Zo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Qw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},Jo={transition:null},Xw={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:vd};function Jg(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!yd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Vi;Q.Fragment=Fw;Q.Profiler=_w;Q.PureComponent=gd;Q.StrictMode=Vw;Q.Suspense=Ww;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xw;Q.act=Jg;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kg({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=vd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Qg.call(t,l)&&!Xg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:so,type:e.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:$w,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bw,_context:e},e.Consumer=e};Q.createElement=Zg;Q.createFactory=function(e){var t=Zg.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Uw,render:e}};Q.isValidElement=yd;Q.lazy=function(e){return{$$typeof:Gw,_payload:{_status:-1,_result:e},_init:Qw}};Q.memo=function(e,t){return{$$typeof:Hw,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};Q.unstable_act=Jg;Q.useCallback=function(e,t){return Ye.current.useCallback(e,t)};Q.useContext=function(e){return Ye.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ye.current.useEffect(e,t)};Q.useId=function(){return Ye.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ye.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};Q.useRef=function(e){return Ye.current.useRef(e)};Q.useState=function(e){return Ye.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ye.current.useTransition()};Q.version="18.3.1";Hg.exports=Q;var w=Hg.exports;const L=Ug(w),e0=Iw({__proto__:null,default:L},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zw=w,Jw=Symbol.for("react.element"),eb=Symbol.for("react.fragment"),tb=Object.prototype.hasOwnProperty,nb=Zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rb={key:!0,ref:!0,__self:!0,__source:!0};function t0(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)tb.call(t,r)&&!rb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jw,type:e,key:s,ref:o,props:i,_owner:nb.current}}il.Fragment=eb;il.jsx=t0;il.jsxs=t0;Wg.exports=il;var c=Wg.exports,n0={exports:{}},ct={},r0={exports:{}},i0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,R){var z=N.length;N.push(R);e:for(;0<z;){var U=z-1>>>1,B=N[U];if(0<i(B,R))N[U]=R,N[z]=B,z=U;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],z=N.pop();if(z!==R){N[0]=z;e:for(var U=0,B=N.length,q=B>>>1;U<q;){var X=2*(U+1)-1,ve=N[X],De=X+1,ee=N[De];if(0>i(ve,z))De<B&&0>i(ee,ve)?(N[U]=ee,N[De]=z,U=De):(N[U]=ve,N[X]=z,U=X);else if(De<B&&0>i(ee,z))N[U]=ee,N[De]=z,U=De;else break e}}return R}function i(N,R){var z=N.sortIndex-R.sortIndex;return z!==0?z:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,p=3,h=!1,b=!1,m=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=N)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function S(N){if(m=!1,v(N),!b)if(n(l)!==null)b=!0,$(k);else{var R=n(u);R!==null&&_(S,R.startTime-N)}}function k(N,R){b=!1,m&&(m=!1,g(E),E=-1),h=!0;var z=p;try{for(v(R),f=n(l);f!==null&&(!(f.expirationTime>R)||N&&!D());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var B=U(f.expirationTime<=R);R=e.unstable_now(),typeof B=="function"?f.callback=B:f===n(l)&&r(l),v(R)}else r(l);f=n(l)}if(f!==null)var q=!0;else{var X=n(u);X!==null&&_(S,X.startTime-R),q=!1}return q}finally{f=null,p=z,h=!1}}var j=!1,C=null,E=-1,T=5,A=-1;function D(){return!(e.unstable_now()-A<T)}function O(){if(C!==null){var N=e.unstable_now();A=N;var R=!0;try{R=C(!0,N)}finally{R?K():(j=!1,C=null)}}else j=!1}var K;if(typeof x=="function")K=function(){x(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Y=I.port2;I.port1.onmessage=O,K=function(){Y.postMessage(null)}}else K=function(){y(O,0)};function $(N){C=N,j||(j=!0,K())}function _(N,R){E=y(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){b||h||(b=!0,$(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var z=p;p=R;try{return N()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=p;p=N;try{return R()}finally{p=z}},e.unstable_scheduleCallback=function(N,R,z){var U=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?U+z:U):z=U,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,N={id:d++,callback:R,priorityLevel:N,startTime:z,expirationTime:B,sortIndex:-1},z>U?(N.sortIndex=z,t(u,N),n(l)===null&&N===n(u)&&(m?(g(E),E=-1):m=!0,_(S,z-U))):(N.sortIndex=B,t(l,N),b||h||(b=!0,$(k))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var R=p;return function(){var z=p;p=R;try{return N.apply(this,arguments)}finally{p=z}}}})(i0);r0.exports=i0;var ib=r0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sb=w,lt=ib;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Ps={};function Fr(e,t){Ni(e,t),Ni(e+"Capture",t)}function Ni(e,t){for(Ps[e]=t,e=0;e<t.length;e++)s0.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,ob=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},jp={};function ab(e){return Vc.call(jp,e)?!0:Vc.call(kp,e)?!1:ob.test(e)?jp[e]=!0:(kp[e]=!0,!1)}function lb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cb(e,t,n,r){if(t===null||typeof t>"u"||lb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function bd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wd,bd);Me[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wd,bd);Me[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wd,bd);Me[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sd(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cb(t,n,i,r)&&(n=null),r||i===null?ab(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vn=sb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function Xi(e){return e===null||typeof e!="object"?null:(e=Cp&&e[Cp]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,$l;function ls(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Ul=!1;function Wl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ls(e):""}function ub(e){switch(e.tag){case 5:return ls(e.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function Uc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qr:return"Fragment";case qr:return"Portal";case _c:return"Profiler";case kd:return"StrictMode";case Bc:return"Suspense";case $c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a0:return(e.displayName||"Context")+".Consumer";case o0:return(e._context.displayName||"Context")+".Provider";case jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cd:return t=e.displayName||null,t!==null?t:Uc(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return Uc(e(t))}catch{}}return null}function db(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(t);case 8:return t===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function c0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fb(e){var t=c0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=fb(e))}function u0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=c0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wc(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ep(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function d0(e,t){t=t.checked,t!=null&&Sd(e,"checked",t,!1)}function Hc(e,t){d0(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gc(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gc(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cs=Array.isArray;function di(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Np(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(cs(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function f0(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function p0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?p0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,h0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pb=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(e){pb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ms[t]=ms[e]})});function m0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ms.hasOwnProperty(e)&&ms[e]?(""+t).trim():t+"px"}function g0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=m0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hb=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(e,t){if(t){if(hb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Qc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function Ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zc=null,fi=null,pi=null;function Rp(e){if(e=lo(e)){if(typeof Zc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=cl(t),Zc(e.stateNode,e.type,t))}}function x0(e){fi?pi?pi.push(e):pi=[e]:fi=e}function v0(){if(fi){var e=fi,t=pi;if(pi=fi=null,Rp(e),t)for(e=0;e<t.length;e++)Rp(t[e])}}function y0(e,t){return e(t)}function w0(){}var Hl=!1;function b0(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return y0(e,t,n)}finally{Hl=!1,(fi!==null||pi!==null)&&(w0(),v0())}}function As(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Jc=!1;if(dn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Jc=!1}function mb(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var gs=!1,va=null,ya=!1,eu=null,gb={onError:function(e){gs=!0,va=e}};function xb(e,t,n,r,i,s,o,a,l){gs=!1,va=null,mb.apply(gb,arguments)}function vb(e,t,n,r,i,s,o,a,l){if(xb.apply(this,arguments),gs){if(gs){var u=va;gs=!1,va=null}else throw Error(M(198));ya||(ya=!0,eu=u)}}function Vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function S0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ap(e){if(Vr(e)!==e)throw Error(M(188))}function yb(e){var t=e.alternate;if(!t){if(t=Vr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ap(i),e;if(s===r)return Ap(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function k0(e){return e=yb(e),e!==null?j0(e):null}function j0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=j0(e);if(t!==null)return t;e=e.sibling}return null}var C0=lt.unstable_scheduleCallback,Mp=lt.unstable_cancelCallback,wb=lt.unstable_shouldYield,bb=lt.unstable_requestPaint,xe=lt.unstable_now,Sb=lt.unstable_getCurrentPriorityLevel,Td=lt.unstable_ImmediatePriority,E0=lt.unstable_UserBlockingPriority,wa=lt.unstable_NormalPriority,kb=lt.unstable_LowPriority,T0=lt.unstable_IdlePriority,sl=null,Yt=null;function jb(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Tb,Cb=Math.log,Eb=Math.LN2;function Tb(e){return e>>>=0,e===0?32:31-(Cb(e)/Eb|0)|0}var No=64,Po=4194304;function us(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=us(a):(s&=o,s!==0&&(r=us(s)))}else o=n&~i,o!==0?r=us(o):s!==0&&(r=us(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function Nb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ot(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Nb(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function tu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function N0(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Rb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function P0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var R0,Pd,A0,M0,L0,nu=!1,Ro=[],Un=null,Wn=null,Hn=null,Ms=new Map,Ls=new Map,Mn=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Ms.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(t.pointerId)}}function Ji(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=lo(t),t!==null&&Pd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mb(e,t,n,r,i){switch(t){case"focusin":return Un=Ji(Un,e,t,n,r,i),!0;case"dragenter":return Wn=Ji(Wn,e,t,n,r,i),!0;case"mouseover":return Hn=Ji(Hn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ms.set(s,Ji(Ms.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Ji(Ls.get(s)||null,e,t,n,r,i)),!0}return!1}function D0(e){var t=vr(e.target);if(t!==null){var n=Vr(t);if(n!==null){if(t=n.tag,t===13){if(t=S0(n),t!==null){e.blockedOn=t,L0(e.priority,function(){A0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ru(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xc=r,n.target.dispatchEvent(r),Xc=null}else return t=lo(n),t!==null&&Pd(t),e.blockedOn=n,!1;t.shift()}return!0}function Dp(e,t,n){ea(e)&&n.delete(t)}function Lb(){nu=!1,Un!==null&&ea(Un)&&(Un=null),Wn!==null&&ea(Wn)&&(Wn=null),Hn!==null&&ea(Hn)&&(Hn=null),Ms.forEach(Dp),Ls.forEach(Dp)}function es(e,t){e.blockedOn===t&&(e.blockedOn=null,nu||(nu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Lb)))}function Ds(e){function t(i){return es(i,e)}if(0<Ro.length){es(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&es(Un,e),Wn!==null&&es(Wn,e),Hn!==null&&es(Hn,e),Ms.forEach(t),Ls.forEach(t),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)D0(n),n.blockedOn===null&&Mn.shift()}var hi=vn.ReactCurrentBatchConfig,Sa=!0;function Db(e,t,n,r){var i=te,s=hi.transition;hi.transition=null;try{te=1,Rd(e,t,n,r)}finally{te=i,hi.transition=s}}function Ob(e,t,n,r){var i=te,s=hi.transition;hi.transition=null;try{te=4,Rd(e,t,n,r)}finally{te=i,hi.transition=s}}function Rd(e,t,n,r){if(Sa){var i=ru(e,t,n,r);if(i===null)nc(e,t,r,ka,n),Lp(e,r);else if(Mb(i,e,t,n,r))r.stopPropagation();else if(Lp(e,r),t&4&&-1<Ab.indexOf(e)){for(;i!==null;){var s=lo(i);if(s!==null&&R0(s),s=ru(e,t,n,r),s===null&&nc(e,t,r,ka,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nc(e,t,r,null,n)}}var ka=null;function ru(e,t,n,r){if(ka=null,e=Ed(r),e=vr(e),e!==null)if(t=Vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=S0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ka=e,null}function O0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sb()){case Td:return 1;case E0:return 4;case wa:case kb:return 16;case T0:return 536870912;default:return 16}default:return 16}}var Vn=null,Ad=null,ta=null;function I0(){if(ta)return ta;var e,t=Ad,n=t.length,r,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ta=i.slice(e,1<r?1-r:void 0)}function na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ao(){return!0}function Op(){return!1}function ut(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ao:Op,this.isPropagationStopped=Op,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),t}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=ut(_i),ao=he({},_i,{view:0,detail:0}),Ib=ut(ao),Kl,Yl,ts,ol=he({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ts&&(ts&&e.type==="mousemove"?(Kl=e.screenX-ts.screenX,Yl=e.screenY-ts.screenY):Yl=Kl=0,ts=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),Ip=ut(ol),zb=he({},ol,{dataTransfer:0}),Fb=ut(zb),Vb=he({},ao,{relatedTarget:0}),ql=ut(Vb),_b=he({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),Bb=ut(_b),$b=he({},_i,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ub=ut($b),Wb=he({},_i,{data:0}),zp=ut(Wb),Hb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kb[e])?!!t[e]:!1}function Ld(){return Yb}var qb=he({},ao,{key:function(e){if(e.key){var t=Hb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(e){return e.type==="keypress"?na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qb=ut(qb),Xb=he({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=ut(Xb),Zb=he({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),Jb=ut(Zb),e5=he({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),t5=ut(e5),n5=he({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r5=ut(n5),i5=[9,13,27,32],Dd=dn&&"CompositionEvent"in window,xs=null;dn&&"documentMode"in document&&(xs=document.documentMode);var s5=dn&&"TextEvent"in window&&!xs,z0=dn&&(!Dd||xs&&8<xs&&11>=xs),Vp=" ",_p=!1;function F0(e,t){switch(e){case"keyup":return i5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function o5(e,t){switch(e){case"compositionend":return V0(t);case"keypress":return t.which!==32?null:(_p=!0,Vp);case"textInput":return e=t.data,e===Vp&&_p?null:e;default:return null}}function a5(e,t){if(Xr)return e==="compositionend"||!Dd&&F0(e,t)?(e=I0(),ta=Ad=Vn=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return z0&&t.locale!=="ko"?null:t.data;default:return null}}var l5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l5[e.type]:t==="textarea"}function _0(e,t,n,r){x0(r),t=ja(t,"onChange"),0<t.length&&(n=new Md("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vs=null,Os=null;function c5(e){X0(e,0)}function al(e){var t=ei(e);if(u0(t))return e}function u5(e,t){if(e==="change")return t}var B0=!1;if(dn){var Ql;if(dn){var Xl="oninput"in document;if(!Xl){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),Xl=typeof $p.oninput=="function"}Ql=Xl}else Ql=!1;B0=Ql&&(!document.documentMode||9<document.documentMode)}function Up(){vs&&(vs.detachEvent("onpropertychange",$0),Os=vs=null)}function $0(e){if(e.propertyName==="value"&&al(Os)){var t=[];_0(t,Os,e,Ed(e)),b0(c5,t)}}function d5(e,t,n){e==="focusin"?(Up(),vs=t,Os=n,vs.attachEvent("onpropertychange",$0)):e==="focusout"&&Up()}function f5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Os)}function p5(e,t){if(e==="click")return al(t)}function h5(e,t){if(e==="input"||e==="change")return al(t)}function m5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:m5;function Is(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function Wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,t){var n=Wp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function U0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function W0(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g5(e){var t=W0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&U0(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Hp(n,s);var o=Hp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x5=dn&&"documentMode"in document&&11>=document.documentMode,Zr=null,iu=null,ys=null,su=!1;function Gp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;su||Zr==null||Zr!==xa(r)||(r=Zr,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ys&&Is(ys,r)||(ys=r,r=ja(iu,"onSelect"),0<r.length&&(t=new Md("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Zl={},H0={};dn&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function ll(e){if(Zl[e])return Zl[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in H0)return Zl[e]=t[n];return e}var G0=ll("animationend"),K0=ll("animationiteration"),Y0=ll("animationstart"),q0=ll("transitionend"),Q0=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,t){Q0.set(e,t),Fr(t,[e])}for(var Jl=0;Jl<Kp.length;Jl++){var ec=Kp[Jl],v5=ec.toLowerCase(),y5=ec[0].toUpperCase()+ec.slice(1);or(v5,"on"+y5)}or(G0,"onAnimationEnd");or(K0,"onAnimationIteration");or(Y0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(q0,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w5=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function Yp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vb(r,t,void 0,e),e.currentTarget=null}function X0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yp(i,a,u),s=l}}}if(ya)throw e=eu,ya=!1,eu=null,e}function se(e,t){var n=t[uu];n===void 0&&(n=t[uu]=new Set);var r=e+"__bubble";n.has(r)||(Z0(t,e,2,!1),n.add(r))}function tc(e,t,n){var r=0;t&&(r|=4),Z0(n,e,r,t)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function zs(e){if(!e[Lo]){e[Lo]=!0,s0.forEach(function(n){n!=="selectionchange"&&(w5.has(n)||tc(n,!1,e),tc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lo]||(t[Lo]=!0,tc("selectionchange",!1,t))}}function Z0(e,t,n,r){switch(O0(t)){case 1:var i=Db;break;case 4:i=Ob;break;default:i=Rd}n=i.bind(null,t,n,e),i=void 0,!Jc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nc(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}b0(function(){var u=s,d=Ed(n),f=[];e:{var p=Q0.get(e);if(p!==void 0){var h=Md,b=e;switch(e){case"keypress":if(na(n)===0)break e;case"keydown":case"keyup":h=Qb;break;case"focusin":b="focus",h=ql;break;case"focusout":b="blur",h=ql;break;case"beforeblur":case"afterblur":h=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Fb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Jb;break;case G0:case K0:case Y0:h=Bb;break;case q0:h=t5;break;case"scroll":h=Ib;break;case"wheel":h=r5;break;case"copy":case"cut":case"paste":h=Ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fp}var m=(t&4)!==0,y=!m&&e==="scroll",g=m?p!==null?p+"Capture":null:p;m=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=As(x,g),S!=null&&m.push(Fs(x,S,v)))),y)break;x=x.return}0<m.length&&(p=new h(p,b,null,n,d),f.push({event:p,listeners:m}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Xc&&(b=n.relatedTarget||n.fromElement)&&(vr(b)||b[fn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(b=n.relatedTarget||n.toElement,h=u,b=b?vr(b):null,b!==null&&(y=Vr(b),b!==y||b.tag!==5&&b.tag!==6)&&(b=null)):(h=null,b=u),h!==b)){if(m=Ip,S="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(m=Fp,S="onPointerLeave",g="onPointerEnter",x="pointer"),y=h==null?p:ei(h),v=b==null?p:ei(b),p=new m(S,x+"leave",h,n,d),p.target=y,p.relatedTarget=v,S=null,vr(d)===u&&(m=new m(g,x+"enter",b,n,d),m.target=v,m.relatedTarget=y,S=m),y=S,h&&b)t:{for(m=h,g=b,x=0,v=m;v;v=Yr(v))x++;for(v=0,S=g;S;S=Yr(S))v++;for(;0<x-v;)m=Yr(m),x--;for(;0<v-x;)g=Yr(g),v--;for(;x--;){if(m===g||g!==null&&m===g.alternate)break t;m=Yr(m),g=Yr(g)}m=null}else m=null;h!==null&&qp(f,p,h,m,!1),b!==null&&y!==null&&qp(f,y,b,m,!0)}}e:{if(p=u?ei(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=u5;else if(Bp(p))if(B0)k=h5;else{k=f5;var j=d5}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=p5);if(k&&(k=k(e,u))){_0(f,k,n,d);break e}j&&j(e,p,u),e==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&Gc(p,"number",p.value)}switch(j=u?ei(u):window,e){case"focusin":(Bp(j)||j.contentEditable==="true")&&(Zr=j,iu=u,ys=null);break;case"focusout":ys=iu=Zr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Gp(f,n,d);break;case"selectionchange":if(x5)break;case"keydown":case"keyup":Gp(f,n,d)}var C;if(Dd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xr?F0(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(z0&&n.locale!=="ko"&&(Xr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xr&&(C=I0()):(Vn=d,Ad="value"in Vn?Vn.value:Vn.textContent,Xr=!0)),j=ja(u,E),0<j.length&&(E=new zp(E,e,null,n,d),f.push({event:E,listeners:j}),C?E.data=C:(C=V0(n),C!==null&&(E.data=C)))),(C=s5?o5(e,n):a5(e,n))&&(u=ja(u,"onBeforeInput"),0<u.length&&(d=new zp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}X0(f,t)})}function Fs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ja(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=As(e,n),s!=null&&r.unshift(Fs(e,s,i)),s=As(e,t),s!=null&&r.push(Fs(e,s,i))),e=e.return}return r}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qp(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=As(n,s),l!=null&&o.unshift(Fs(n,l,a))):i||(l=As(n,s),l!=null&&o.push(Fs(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var b5=/\r\n?/g,S5=/\u0000|\uFFFD/g;function Qp(e){return(typeof e=="string"?e:""+e).replace(b5,`
`).replace(S5,"")}function Do(e,t,n){if(t=Qp(t),Qp(e)!==t&&n)throw Error(M(425))}function Ca(){}var ou=null,au=null;function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,k5=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,j5=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(e){return Xp.resolve(null).then(e).catch(C5)}:cu;function C5(e){setTimeout(function(){throw e})}function rc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ds(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ds(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Bi,Vs="__reactProps$"+Bi,fn="__reactContainer$"+Bi,uu="__reactEvents$"+Bi,E5="__reactListeners$"+Bi,T5="__reactHandles$"+Bi;function vr(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zp(e);e!==null;){if(n=e[Gt])return n;e=Zp(e)}return t}e=n,n=e.parentNode}return null}function lo(e){return e=e[Gt]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function cl(e){return e[Vs]||null}var du=[],ti=-1;function ar(e){return{current:e}}function oe(e){0>ti||(e.current=du[ti],du[ti]=null,ti--)}function re(e,t){ti++,du[ti]=e.current,e.current=t}var Jn={},Be=ar(Jn),Je=ar(!1),Mr=Jn;function Pi(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function Ea(){oe(Je),oe(Be)}function Jp(e,t,n){if(Be.current!==Jn)throw Error(M(168));re(Be,t),re(Je,n)}function J0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,db(e)||"Unknown",i));return he({},n,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,Mr=Be.current,re(Be,e),re(Je,Je.current),!0}function eh(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=J0(e,t,Mr),r.__reactInternalMemoizedMergedChildContext=e,oe(Je),oe(Be),re(Be,e)):oe(Je),re(Je,n)}var on=null,ul=!1,ic=!1;function ex(e){on===null?on=[e]:on.push(e)}function N5(e){ul=!0,ex(e)}function lr(){if(!ic&&on!==null){ic=!0;var e=0,t=te;try{var n=on;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,ul=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),C0(Td,lr),i}finally{te=t,ic=!1}}return null}var ni=[],ri=0,Na=null,Pa=0,ht=[],mt=0,Lr=null,ln=1,cn="";function mr(e,t){ni[ri++]=Pa,ni[ri++]=Na,Na=e,Pa=t}function tx(e,t,n){ht[mt++]=ln,ht[mt++]=cn,ht[mt++]=Lr,Lr=e;var r=ln;e=cn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ln=1<<32-Ot(t)+i|n<<i|r,cn=s+e}else ln=1<<s|n<<i|r,cn=e}function Id(e){e.return!==null&&(mr(e,1),tx(e,1,0))}function zd(e){for(;e===Na;)Na=ni[--ri],ni[ri]=null,Pa=ni[--ri],ni[ri]=null;for(;e===Lr;)Lr=ht[--mt],ht[mt]=null,cn=ht[--mt],ht[mt]=null,ln=ht[--mt],ht[mt]=null}var ot=null,st=null,ce=!1,Dt=null;function nx(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function th(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,st=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lr!==null?{id:ln,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,st=null,!0):!1;default:return!1}}function fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pu(e){if(ce){var t=st;if(t){var n=t;if(!th(e,t)){if(fu(e))throw Error(M(418));t=Gn(n.nextSibling);var r=ot;t&&th(e,t)?nx(r,n):(e.flags=e.flags&-4097|2,ce=!1,ot=e)}}else{if(fu(e))throw Error(M(418));e.flags=e.flags&-4097|2,ce=!1,ot=e}}}function nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Oo(e){if(e!==ot)return!1;if(!ce)return nh(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lu(e.type,e.memoizedProps)),t&&(t=st)){if(fu(e))throw rx(),Error(M(418));for(;t;)nx(e,t),t=Gn(t.nextSibling)}if(nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=ot?Gn(e.stateNode.nextSibling):null;return!0}function rx(){for(var e=st;e;)e=Gn(e.nextSibling)}function Ri(){st=ot=null,ce=!1}function Fd(e){Dt===null?Dt=[e]:Dt.push(e)}var P5=vn.ReactCurrentBatchConfig;function ns(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rh(e){var t=e._init;return t(e._payload)}function ix(e){function t(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=Qn(g,x),g.index=0,g.sibling=null,g}function s(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,x,v,S){return x===null||x.tag!==6?(x=dc(v,g.mode,S),x.return=g,x):(x=i(x,v),x.return=g,x)}function l(g,x,v,S){var k=v.type;return k===Qr?d(g,x,v.props.children,S,v.key):x!==null&&(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&rh(k)===x.type)?(S=i(x,v.props),S.ref=ns(g,x,v),S.return=g,S):(S=ca(v.type,v.key,v.props,null,g.mode,S),S.ref=ns(g,x,v),S.return=g,S)}function u(g,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=fc(v,g.mode,S),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function d(g,x,v,S,k){return x===null||x.tag!==7?(x=Rr(v,g.mode,S,k),x.return=g,x):(x=i(x,v),x.return=g,x)}function f(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=dc(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:return v=ca(x.type,x.key,x.props,null,g.mode,v),v.ref=ns(g,null,x),v.return=g,v;case qr:return x=fc(x,g.mode,v),x.return=g,x;case Rn:var S=x._init;return f(g,S(x._payload),v)}if(cs(x)||Xi(x))return x=Rr(x,g.mode,v,null),x.return=g,x;Io(g,x)}return null}function p(g,x,v,S){var k=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(g,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:return v.key===k?l(g,x,v,S):null;case qr:return v.key===k?u(g,x,v,S):null;case Rn:return k=v._init,p(g,x,k(v._payload),S)}if(cs(v)||Xi(v))return k!==null?null:d(g,x,v,S,null);Io(g,v)}return null}function h(g,x,v,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(x,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Co:return g=g.get(S.key===null?v:S.key)||null,l(x,g,S,k);case qr:return g=g.get(S.key===null?v:S.key)||null,u(x,g,S,k);case Rn:var j=S._init;return h(g,x,v,j(S._payload),k)}if(cs(S)||Xi(S))return g=g.get(v)||null,d(x,g,S,k,null);Io(x,S)}return null}function b(g,x,v,S){for(var k=null,j=null,C=x,E=x=0,T=null;C!==null&&E<v.length;E++){C.index>E?(T=C,C=null):T=C.sibling;var A=p(g,C,v[E],S);if(A===null){C===null&&(C=T);break}e&&C&&A.alternate===null&&t(g,C),x=s(A,x,E),j===null?k=A:j.sibling=A,j=A,C=T}if(E===v.length)return n(g,C),ce&&mr(g,E),k;if(C===null){for(;E<v.length;E++)C=f(g,v[E],S),C!==null&&(x=s(C,x,E),j===null?k=C:j.sibling=C,j=C);return ce&&mr(g,E),k}for(C=r(g,C);E<v.length;E++)T=h(C,g,E,v[E],S),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?E:T.key),x=s(T,x,E),j===null?k=T:j.sibling=T,j=T);return e&&C.forEach(function(D){return t(g,D)}),ce&&mr(g,E),k}function m(g,x,v,S){var k=Xi(v);if(typeof k!="function")throw Error(M(150));if(v=k.call(v),v==null)throw Error(M(151));for(var j=k=null,C=x,E=x=0,T=null,A=v.next();C!==null&&!A.done;E++,A=v.next()){C.index>E?(T=C,C=null):T=C.sibling;var D=p(g,C,A.value,S);if(D===null){C===null&&(C=T);break}e&&C&&D.alternate===null&&t(g,C),x=s(D,x,E),j===null?k=D:j.sibling=D,j=D,C=T}if(A.done)return n(g,C),ce&&mr(g,E),k;if(C===null){for(;!A.done;E++,A=v.next())A=f(g,A.value,S),A!==null&&(x=s(A,x,E),j===null?k=A:j.sibling=A,j=A);return ce&&mr(g,E),k}for(C=r(g,C);!A.done;E++,A=v.next())A=h(C,g,E,A.value,S),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?E:A.key),x=s(A,x,E),j===null?k=A:j.sibling=A,j=A);return e&&C.forEach(function(O){return t(g,O)}),ce&&mr(g,E),k}function y(g,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Qr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:e:{for(var k=v.key,j=x;j!==null;){if(j.key===k){if(k=v.type,k===Qr){if(j.tag===7){n(g,j.sibling),x=i(j,v.props.children),x.return=g,g=x;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rn&&rh(k)===j.type){n(g,j.sibling),x=i(j,v.props),x.ref=ns(g,j,v),x.return=g,g=x;break e}n(g,j);break}else t(g,j);j=j.sibling}v.type===Qr?(x=Rr(v.props.children,g.mode,S,v.key),x.return=g,g=x):(S=ca(v.type,v.key,v.props,null,g.mode,S),S.ref=ns(g,x,v),S.return=g,g=S)}return o(g);case qr:e:{for(j=v.key;x!==null;){if(x.key===j)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=fc(v,g.mode,S),x.return=g,g=x}return o(g);case Rn:return j=v._init,y(g,x,j(v._payload),S)}if(cs(v))return b(g,x,v,S);if(Xi(v))return m(g,x,v,S);Io(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,v),x.return=g,g=x):(n(g,x),x=dc(v,g.mode,S),x.return=g,g=x),o(g)):n(g,x)}return y}var Ai=ix(!0),sx=ix(!1),Ra=ar(null),Aa=null,ii=null,Vd=null;function _d(){Vd=ii=Aa=null}function Bd(e){var t=Ra.current;oe(Ra),e._currentValue=t}function hu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mi(e,t){Aa=e,Vd=ii=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Vd!==e)if(e={context:e,memoizedValue:t,next:null},ii===null){if(Aa===null)throw Error(M(308));ii=e,Aa.dependencies={lanes:0,firstContext:e}}else ii=ii.next=e;return t}var yr=null;function $d(e){yr===null?yr=[e]:yr.push(e)}function ox(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$d(t)):(n.next=i.next,i.next=n),t.interleaved=n,pn(e,r)}function pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function Ud(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ax(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pn(e,n)}return i=r.interleaved,i===null?(t.next=t,$d(r)):(t.next=i.next,i.next=t),r.interleaved=t,pn(e,n)}function ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}function ih(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ma(e,t,n,r){var i=e.updateQueue;An=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var p=a.lane,h=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,m=a;switch(p=t,h=n,m.tag){case 1:if(b=m.payload,typeof b=="function"){f=b.call(h,f,p);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=m.payload,p=typeof b=="function"?b.call(h,f,p):b,p==null)break e;f=he({},f,p);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=h,l=f):d=d.next=h,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Or|=o,e.lanes=o,e.memoizedState=f}}function sh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var co={},qt=ar(co),_s=ar(co),Bs=ar(co);function wr(e){if(e===co)throw Error(M(174));return e}function Wd(e,t){switch(re(Bs,t),re(_s,e),re(qt,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yc(t,e)}oe(qt),re(qt,t)}function Mi(){oe(qt),oe(_s),oe(Bs)}function lx(e){wr(Bs.current);var t=wr(qt.current),n=Yc(t,e.type);t!==n&&(re(_s,e),re(qt,n))}function Hd(e){_s.current===e&&(oe(qt),oe(_s))}var de=ar(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sc=[];function Gd(){for(var e=0;e<sc.length;e++)sc[e]._workInProgressVersionPrimary=null;sc.length=0}var ia=vn.ReactCurrentDispatcher,oc=vn.ReactCurrentBatchConfig,Dr=0,pe=null,je=null,Te=null,Da=!1,ws=!1,$s=0,R5=0;function Ie(){throw Error(M(321))}function Kd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Yd(e,t,n,r,i,s){if(Dr=s,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?D5:O5,e=n(r,i),ws){s=0;do{if(ws=!1,$s=0,25<=s)throw Error(M(301));s+=1,Te=je=null,t.updateQueue=null,ia.current=I5,e=n(r,i)}while(ws)}if(ia.current=Oa,t=je!==null&&je.next!==null,Dr=0,Te=je=pe=null,Da=!1,t)throw Error(M(300));return e}function qd(){var e=$s!==0;return $s=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?pe.memoizedState=Te=e:Te=Te.next=e,Te}function bt(){if(je===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Te===null?pe.memoizedState:Te.next;if(t!==null)Te=t,je=e;else{if(e===null)throw Error(M(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Te===null?pe.memoizedState=Te=e:Te=Te.next=e}return Te}function Us(e,t){return typeof t=="function"?t(e):t}function ac(e){var t=bt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Dr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,pe.lanes|=d,Or|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,pe.lanes|=s,Or|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lc(e){var t=bt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);zt(s,t.memoizedState)||(Ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function cx(){}function ux(e,t){var n=pe,r=bt(),i=t(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,Qd(px.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Ws(9,fx.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(M(349));Dr&30||dx(n,t,i)}return i}function dx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fx(e,t,n,r){t.value=n,t.getSnapshot=r,hx(t)&&mx(e)}function px(e,t,n){return n(function(){hx(t)&&mx(e)})}function hx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function mx(e){var t=pn(e,1);t!==null&&It(t,e,1,-1)}function oh(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:e},t.queue=e,e=e.dispatch=L5.bind(null,pe,e),[t.memoizedState,e]}function Ws(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gx(){return bt().memoizedState}function sa(e,t,n,r){var i=$t();pe.flags|=e,i.memoizedState=Ws(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Kd(r,o.deps)){i.memoizedState=Ws(t,n,s,r);return}}pe.flags|=e,i.memoizedState=Ws(1|t,n,s,r)}function ah(e,t){return sa(8390656,8,e,t)}function Qd(e,t){return dl(2048,8,e,t)}function xx(e,t){return dl(4,2,e,t)}function vx(e,t){return dl(4,4,e,t)}function yx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wx(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,yx.bind(null,t,e),n)}function Xd(){}function bx(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sx(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kx(e,t,n){return Dr&21?(zt(n,t)||(n=N0(),pe.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function A5(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=oc.transition;oc.transition={};try{e(!1),t()}finally{te=n,oc.transition=r}}function jx(){return bt().memoizedState}function M5(e,t,n){var r=qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cx(e))Ex(t,n);else if(n=ox(e,t,n,r),n!==null){var i=Ke();It(n,e,r,i),Tx(n,t,r)}}function L5(e,t,n){var r=qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cx(e))Ex(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,o)){var l=t.interleaved;l===null?(i.next=i,$d(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ox(e,t,i,r),n!==null&&(i=Ke(),It(n,e,r,i),Tx(n,t,r))}}function Cx(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Ex(e,t){ws=Da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}var Oa={readContext:wt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},D5={readContext:wt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:ah,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sa(4194308,4,yx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return sa(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=M5.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:oh,useDebugValue:Xd,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=oh(!1),t=e[0];return e=A5.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=$t();if(ce){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Ne===null)throw Error(M(349));Dr&30||dx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ah(px.bind(null,r,s,e),[e]),r.flags|=2048,Ws(9,fx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ne.identifierPrefix;if(ce){var n=cn,r=ln;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$s++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=R5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},O5={readContext:wt,useCallback:bx,useContext:wt,useEffect:Qd,useImperativeHandle:wx,useInsertionEffect:xx,useLayoutEffect:vx,useMemo:Sx,useReducer:ac,useRef:gx,useState:function(){return ac(Us)},useDebugValue:Xd,useDeferredValue:function(e){var t=bt();return kx(t,je.memoizedState,e)},useTransition:function(){var e=ac(Us)[0],t=bt().memoizedState;return[e,t]},useMutableSource:cx,useSyncExternalStore:ux,useId:jx,unstable_isNewReconciler:!1},I5={readContext:wt,useCallback:bx,useContext:wt,useEffect:Qd,useImperativeHandle:wx,useInsertionEffect:xx,useLayoutEffect:vx,useMemo:Sx,useReducer:lc,useRef:gx,useState:function(){return lc(Us)},useDebugValue:Xd,useDeferredValue:function(e){var t=bt();return je===null?t.memoizedState=e:kx(t,je.memoizedState,e)},useTransition:function(){var e=lc(Us)[0],t=bt().memoizedState;return[e,t]},useMutableSource:cx,useSyncExternalStore:ux,useId:jx,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=qn(e),s=un(r,i);s.payload=t,n!=null&&(s.callback=n),t=Kn(e,s,i),t!==null&&(It(t,e,i,r),ra(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=qn(e),s=un(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Kn(e,s,i),t!==null&&(It(t,e,i,r),ra(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=qn(e),i=un(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,r),t!==null&&(It(t,e,r,n),ra(t,e,r))}};function lh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Is(n,r)||!Is(i,s):!0}function Nx(e,t,n){var r=!1,i=Jn,s=t.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=et(t)?Mr:Be.current,r=t.contextTypes,s=(r=r!=null)?Pi(e,i):Jn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ch(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function gu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ud(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=et(t)?Mr:Be.current,i.context=Pi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(mu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fl.enqueueReplaceState(i,i.state,null),Ma(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Li(e,t){try{var n="",r=t;do n+=ub(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function cc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var z5=typeof WeakMap=="function"?WeakMap:Map;function Px(e,t,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){za||(za=!0,Tu=r),xu(e,t)},n}function Rx(e,t,n){n=un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xu(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function uh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new z5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=X5.bind(null,e,t,n),t.then(e,e))}function dh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=un(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e)}var F5=vn.ReactCurrentOwner,Ze=!1;function Ue(e,t,n,r){t.child=e===null?sx(t,null,n,r):Ai(t,e.child,n,r)}function ph(e,t,n,r,i){n=n.render;var s=t.ref;return mi(t,i),r=Yd(e,t,n,r,s,i),n=qd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(ce&&n&&Id(t),t.flags|=1,Ue(e,t,r,i),t.child)}function hh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ax(e,t,s,r,i)):(e=ca(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(o,r)&&e.ref===t.ref)return hn(e,t,i)}return t.flags|=1,e=Qn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ax(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Is(s,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,hn(e,t,i)}return vu(e,t,n,r,i)}function Mx(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(oi,rt),rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(oi,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(oi,rt),rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,re(oi,rt),rt|=r;return Ue(e,t,i,n),t.child}function Lx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vu(e,t,n,r,i){var s=et(n)?Mr:Be.current;return s=Pi(t,s),mi(t,i),n=Yd(e,t,n,r,s,i),r=qd(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hn(e,t,i)):(ce&&r&&Id(t),t.flags|=1,Ue(e,t,n,i),t.child)}function mh(e,t,n,r,i){if(et(n)){var s=!0;Ta(t)}else s=!1;if(mi(t,i),t.stateNode===null)oa(e,t),Nx(t,n,r),gu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=et(n)?Mr:Be.current,u=Pi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ch(t,o,r,u),An=!1;var p=t.memoizedState;o.state=p,Ma(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Je.current||An?(typeof d=="function"&&(mu(t,n,d,r),l=t.memoizedState),(a=An||lh(t,n,a,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ax(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Pt(t.type,a),o.props=u,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=et(n)?Mr:Be.current,l=Pi(t,l));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&ch(t,o,r,l),An=!1,p=t.memoizedState,o.state=p,Ma(t,r,o,i);var b=t.memoizedState;a!==f||p!==b||Je.current||An?(typeof h=="function"&&(mu(t,n,h,r),b=t.memoizedState),(u=An||lh(t,n,u,r,p,b,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return yu(e,t,n,r,s,i)}function yu(e,t,n,r,i,s){Lx(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&eh(t,n,!1),hn(e,t,s);r=t.stateNode,F5.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ai(t,e.child,null,s),t.child=Ai(t,null,a,s)):Ue(e,t,a,s),t.memoizedState=r.state,i&&eh(t,n,!0),t.child}function Dx(e){var t=e.stateNode;t.pendingContext?Jp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jp(e,t.context,!1),Wd(e,t.containerInfo)}function gh(e,t,n,r,i){return Ri(),Fd(i),t.flags|=256,Ue(e,t,n,r),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function bu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ox(e,t,n){var r=t.pendingProps,i=de.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(de,i&1),e===null)return pu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ml(o,r,0,null),e=Rr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=bu(n),t.memoizedState=wu,e):Zd(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return V5(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qn(a,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?bu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=wu,r}return s=e.child,e=s.sibling,r=Qn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zd(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&Fd(r),Ai(t,e.child,null,n),e=Zd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V5(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=cc(Error(M(422))),zo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ml({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Ai(t,e.child,null,o),t.child.memoizedState=bu(o),t.memoizedState=wu,s);if(!(t.mode&1))return zo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(M(419)),r=cc(s,r,void 0),zo(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ze||a){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pn(e,i),It(r,e,i,-1))}return sf(),r=cc(Error(M(421))),zo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Z5.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,st=Gn(i.nextSibling),ot=t,ce=!0,Dt=null,e!==null&&(ht[mt++]=ln,ht[mt++]=cn,ht[mt++]=Lr,ln=e.id,cn=e.overflow,Lr=t),t=Zd(t,r.children),t.flags|=4096,t)}function xh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hu(e.return,t,n)}function uc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ix(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xh(e,n,t);else if(e.tag===19)xh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&La(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&La(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uc(t,!0,n,null,s);break;case"together":uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _5(e,t,n){switch(t.tag){case 3:Dx(t),Ri();break;case 5:lx(t);break;case 1:et(t.type)&&Ta(t);break;case 4:Wd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?Ox(e,t,n):(re(de,de.current&1),e=hn(e,t,n),e!==null?e.sibling:null);re(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ix(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,Mx(e,t,n)}return hn(e,t,n)}var zx,Su,Fx,Vx;zx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Su=function(){};Fx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wr(qt.current);var s=null;switch(n){case"input":i=Wc(e,i),r=Wc(e,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=Kc(e,i),r=Kc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ca)}qc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ps.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Vx=function(e,t,n,r){n!==r&&(t.flags|=4)};function rs(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function B5(e,t,n){var r=t.pendingProps;switch(zd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return et(t.type)&&Ea(),ze(t),null;case 3:return r=t.stateNode,Mi(),oe(Je),oe(Be),Gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Ru(Dt),Dt=null))),Su(e,t),ze(t),null;case 5:Hd(t);var i=wr(Bs.current);if(n=t.type,e!==null&&t.stateNode!=null)Fx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return ze(t),null}if(e=wr(qt.current),Oo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Gt]=t,r[Vs]=s,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<ds.length;i++)se(ds[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Ep(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Np(r,s),se("invalid",r)}qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Do(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Do(r.textContent,a,e),i=["children",""+a]):Ps.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Eo(r),Tp(r,s,!0);break;case"textarea":Eo(r),Pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ca)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=p0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Gt]=t,e[Vs]=r,zx(e,t,!1,!1),t.stateNode=e;e:{switch(o=Qc(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<ds.length;i++)se(ds[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Ep(e,r),i=Wc(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),se("invalid",e);break;case"textarea":Np(e,r),i=Kc(e,r),se("invalid",e);break;default:i=r}qc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g0(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h0(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rs(e,l):typeof l=="number"&&Rs(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ps.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",e):l!=null&&Sd(e,s,l,o))}switch(n){case"input":Eo(e),Tp(e,r,!1);break;case"textarea":Eo(e),Pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?di(e,!!r.multiple,s,!1):r.defaultValue!=null&&di(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Vx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=wr(Bs.current),wr(qt.current),Oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gt]=t,(s=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:Do(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Do(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=t,t.stateNode=r}return ze(t),null;case 13:if(oe(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&st!==null&&t.mode&1&&!(t.flags&128))rx(),Ri(),t.flags|=98560,s=!1;else if(s=Oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Gt]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else Dt!==null&&(Ru(Dt),Dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Ee===0&&(Ee=3):sf())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Mi(),Su(e,t),e===null&&zs(t.stateNode.containerInfo),ze(t),null;case 10:return Bd(t.type._context),ze(t),null;case 17:return et(t.type)&&Ea(),ze(t),null;case 19:if(oe(de),s=t.memoizedState,s===null)return ze(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)rs(s,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=La(e),o!==null){for(t.flags|=128,rs(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(de,de.current&1|2),t.child}e=e.sibling}s.tail!==null&&xe()>Di&&(t.flags|=128,r=!0,rs(s,!1),t.lanes=4194304)}else{if(!r)if(e=La(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return ze(t),null}else 2*xe()-s.renderingStartTime>Di&&n!==1073741824&&(t.flags|=128,r=!0,rs(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=xe(),t.sibling=null,n=de.current,re(de,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return rf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function $5(e,t){switch(zd(t),t.tag){case 1:return et(t.type)&&Ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mi(),oe(Je),oe(Be),Gd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hd(t),null;case 13:if(oe(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(de),null;case 4:return Mi(),null;case 10:return Bd(t.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Fo=!1,Ve=!1,U5=typeof WeakSet=="function"?WeakSet:Set,V=null;function si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function ku(e,t,n){try{n()}catch(r){ge(e,t,r)}}var vh=!1;function W5(e,t){if(ou=Sa,e=W0(),Od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++d===r&&(l=o),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:e,selectionRange:n},Sa=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var m=b.memoizedProps,y=b.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:Pt(t.type,m),y);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){ge(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return b=vh,vh=!1,b}function bs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ku(t,n,s)}i=i.next}while(i!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ju(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _x(e){var t=e.alternate;t!==null&&(e.alternate=null,_x(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[Vs],delete t[uu],delete t[E5],delete t[T5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bx(e){return e.tag===5||e.tag===3||e.tag===4}function yh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ca));else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}var Pe=null,Lt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)$x(e,t,n),n=n.sibling}function $x(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:Ve||si(n,t);case 6:var r=Pe,i=Lt;Pe=null,Cn(e,t,n),Pe=r,Lt=i,Pe!==null&&(Lt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Lt?(e=Pe,n=n.stateNode,e.nodeType===8?rc(e.parentNode,n):e.nodeType===1&&rc(e,n),Ds(e)):rc(Pe,n.stateNode));break;case 4:r=Pe,i=Lt,Pe=n.stateNode.containerInfo,Lt=!0,Cn(e,t,n),Pe=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ku(n,t,o),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!Ve&&(si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,t,a)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Cn(e,t,n),Ve=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function wh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U5),t.forEach(function(r){var i=J5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Lt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Lt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Lt=!0;break e}a=a.return}if(Pe===null)throw Error(M(160));$x(s,o,i),Pe=null,Lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ux(t,e),t=t.sibling}function Ux(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Bt(e),r&4){try{bs(3,e,e.return),pl(3,e)}catch(m){ge(e,e.return,m)}try{bs(5,e,e.return)}catch(m){ge(e,e.return,m)}}break;case 1:Ct(t,e),Bt(e),r&512&&n!==null&&si(n,n.return);break;case 5:if(Ct(t,e),Bt(e),r&512&&n!==null&&si(n,n.return),e.flags&32){var i=e.stateNode;try{Rs(i,"")}catch(m){ge(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&d0(i,s),Qc(a,o);var u=Qc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?g0(i,f):d==="dangerouslySetInnerHTML"?h0(i,f):d==="children"?Rs(i,f):Sd(i,d,f,u)}switch(a){case"input":Hc(i,s);break;case"textarea":f0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?di(i,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?di(i,!!s.multiple,s.defaultValue,!0):di(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vs]=s}catch(m){ge(e,e.return,m)}}break;case 6:if(Ct(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){ge(e,e.return,m)}}break;case 3:if(Ct(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(t.containerInfo)}catch(m){ge(e,e.return,m)}break;case 4:Ct(t,e),Bt(e);break;case 13:Ct(t,e),Bt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tf=xe())),r&4&&wh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,Ct(t,e),Ve=u):Ct(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(V=e,d=e.child;d!==null;){for(f=V=d;V!==null;){switch(p=V,h=p.child,p.tag){case 0:case 11:case 14:case 15:bs(4,p,p.return);break;case 1:si(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(m){ge(r,n,m)}}break;case 5:si(p,p.return);break;case 22:if(p.memoizedState!==null){Sh(f);continue}}h!==null?(h.return=p,V=h):Sh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m0("display",o))}catch(m){ge(e,e.return,m)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){ge(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ct(t,e),Bt(e),r&4&&wh(e);break;case 21:break;default:Ct(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bx(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rs(i,""),r.flags&=-33);var s=yh(e);Eu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=yh(e);Cu(e,a,o);break;default:throw Error(M(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H5(e,t,n){V=e,Wx(e)}function Wx(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ve;a=Fo;var u=Ve;if(Fo=o,(Ve=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?kh(i):l!==null?(l.return=o,V=l):kh(i);for(;s!==null;)V=s,Wx(s),s=s.sibling;V=i,Fo=a,Ve=u}bh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):bh(e)}}function bh(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&sh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sh(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ds(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ve||t.flags&512&&ju(t)}catch(p){ge(t,t.return,p)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Sh(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function kh(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var s=t.return;try{ju(t)}catch(l){ge(t,s,l)}break;case 5:var o=t.return;try{ju(t)}catch(l){ge(t,o,l)}}}catch(l){ge(t,t.return,l)}if(t===e){V=null;break}var a=t.sibling;if(a!==null){a.return=t.return,V=a;break}V=t.return}}var G5=Math.ceil,Ia=vn.ReactCurrentDispatcher,Jd=vn.ReactCurrentOwner,vt=vn.ReactCurrentBatchConfig,Z=0,Ne=null,be=null,Ae=0,rt=0,oi=ar(0),Ee=0,Hs=null,Or=0,hl=0,ef=0,Ss=null,Xe=null,tf=0,Di=1/0,sn=null,za=!1,Tu=null,Yn=null,Vo=!1,_n=null,Fa=0,ks=0,Nu=null,aa=-1,la=0;function Ke(){return Z&6?xe():aa!==-1?aa:aa=xe()}function qn(e){return e.mode&1?Z&2&&Ae!==0?Ae&-Ae:P5.transition!==null?(la===0&&(la=N0()),la):(e=te,e!==0||(e=window.event,e=e===void 0?16:O0(e.type)),e):1}function It(e,t,n,r){if(50<ks)throw ks=0,Nu=null,Error(M(185));oo(e,n,r),(!(Z&2)||e!==Ne)&&(e===Ne&&(!(Z&2)&&(hl|=n),Ee===4&&Ln(e,Ae)),tt(e,r),n===1&&Z===0&&!(t.mode&1)&&(Di=xe()+500,ul&&lr()))}function tt(e,t){var n=e.callbackNode;Pb(e,t);var r=ba(e,e===Ne?Ae:0);if(r===0)n!==null&&Mp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mp(n),t===1)e.tag===0?N5(jh.bind(null,e)):ex(jh.bind(null,e)),j5(function(){!(Z&6)&&lr()}),n=null;else{switch(P0(r)){case 1:n=Td;break;case 4:n=E0;break;case 16:n=wa;break;case 536870912:n=T0;break;default:n=wa}n=Zx(n,Hx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hx(e,t){if(aa=-1,la=0,Z&6)throw Error(M(327));var n=e.callbackNode;if(gi()&&e.callbackNode!==n)return null;var r=ba(e,e===Ne?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Va(e,r);else{t=r;var i=Z;Z|=2;var s=Kx();(Ne!==e||Ae!==t)&&(sn=null,Di=xe()+500,Pr(e,t));do try{q5();break}catch(a){Gx(e,a)}while(!0);_d(),Ia.current=s,Z=i,be!==null?t=0:(Ne=null,Ae=0,t=Ee)}if(t!==0){if(t===2&&(i=tu(e),i!==0&&(r=i,t=Pu(e,i))),t===1)throw n=Hs,Pr(e,0),Ln(e,r),tt(e,xe()),n;if(t===6)Ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!K5(i)&&(t=Va(e,r),t===2&&(s=tu(e),s!==0&&(r=s,t=Pu(e,s))),t===1))throw n=Hs,Pr(e,0),Ln(e,r),tt(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:gr(e,Xe,sn);break;case 3:if(Ln(e,r),(r&130023424)===r&&(t=tf+500-xe(),10<t)){if(ba(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cu(gr.bind(null,e,Xe,sn),t);break}gr(e,Xe,sn);break;case 4:if(Ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G5(r/1960))-r,10<r){e.timeoutHandle=cu(gr.bind(null,e,Xe,sn),r);break}gr(e,Xe,sn);break;case 5:gr(e,Xe,sn);break;default:throw Error(M(329))}}}return tt(e,xe()),e.callbackNode===n?Hx.bind(null,e):null}function Pu(e,t){var n=Ss;return e.current.memoizedState.isDehydrated&&(Pr(e,t).flags|=256),e=Va(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Ru(t)),e}function Ru(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function K5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~ef,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function jh(e){if(Z&6)throw Error(M(327));gi();var t=ba(e,0);if(!(t&1))return tt(e,xe()),null;var n=Va(e,t);if(e.tag!==0&&n===2){var r=tu(e);r!==0&&(t=r,n=Pu(e,r))}if(n===1)throw n=Hs,Pr(e,0),Ln(e,t),tt(e,xe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,Xe,sn),tt(e,xe()),null}function nf(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Di=xe()+500,ul&&lr())}}function Ir(e){_n!==null&&_n.tag===0&&!(Z&6)&&gi();var t=Z;Z|=1;var n=vt.transition,r=te;try{if(vt.transition=null,te=1,e)return e()}finally{te=r,vt.transition=n,Z=t,!(Z&6)&&lr()}}function rf(){rt=oi.current,oe(oi)}function Pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,k5(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ea();break;case 3:Mi(),oe(Je),oe(Be),Gd();break;case 5:Hd(r);break;case 4:Mi();break;case 13:oe(de);break;case 19:oe(de);break;case 10:Bd(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Ne=e,be=e=Qn(e.current,null),Ae=rt=t,Ee=0,Hs=null,ef=hl=Or=0,Xe=Ss=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yr=null}return e}function Gx(e,t){do{var n=be;try{if(_d(),ia.current=Oa,Da){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Da=!1}if(Dr=0,Te=je=pe=null,ws=!1,$s=0,Jd.current=null,n===null||n.return===null){Ee=1,Hs=t,be=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=dh(o);if(h!==null){h.flags&=-257,fh(h,o,a,s,t),h.mode&1&&uh(s,u,t),t=h,l=u;var b=t.updateQueue;if(b===null){var m=new Set;m.add(l),t.updateQueue=m}else b.add(l);break e}else{if(!(t&1)){uh(s,u,t),sf();break e}l=Error(M(426))}}else if(ce&&a.mode&1){var y=dh(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),fh(y,o,a,s,t),Fd(Li(l,a));break e}}s=l=Li(l,a),Ee!==4&&(Ee=2),Ss===null?Ss=[s]:Ss.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Px(s,l,t);ih(s,g);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yn===null||!Yn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Rx(s,a,t);ih(s,S);break e}}s=s.return}while(s!==null)}qx(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Kx(){var e=Ia.current;return Ia.current=Oa,e===null?Oa:e}function sf(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ne===null||!(Or&268435455)&&!(hl&268435455)||Ln(Ne,Ae)}function Va(e,t){var n=Z;Z|=2;var r=Kx();(Ne!==e||Ae!==t)&&(sn=null,Pr(e,t));do try{Y5();break}catch(i){Gx(e,i)}while(!0);if(_d(),Z=n,Ia.current=r,be!==null)throw Error(M(261));return Ne=null,Ae=0,Ee}function Y5(){for(;be!==null;)Yx(be)}function q5(){for(;be!==null&&!wb();)Yx(be)}function Yx(e){var t=Xx(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?qx(e):be=t,Jd.current=null}function qx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$5(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,be=null;return}}else if(n=B5(n,t,rt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ee===0&&(Ee=5)}function gr(e,t,n){var r=te,i=vt.transition;try{vt.transition=null,te=1,Q5(e,t,n,r)}finally{vt.transition=i,te=r}return null}function Q5(e,t,n,r){do gi();while(_n!==null);if(Z&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rb(e,s),e===Ne&&(be=Ne=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,Zx(wa,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vt.transition,vt.transition=null;var o=te;te=1;var a=Z;Z|=4,Jd.current=null,W5(e,n),Ux(n,e),g5(au),Sa=!!ou,au=ou=null,e.current=n,H5(n),bb(),Z=a,te=o,vt.transition=s}else e.current=n;if(Vo&&(Vo=!1,_n=e,Fa=i),s=e.pendingLanes,s===0&&(Yn=null),jb(n.stateNode),tt(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(za)throw za=!1,e=Tu,Tu=null,e;return Fa&1&&e.tag!==0&&gi(),s=e.pendingLanes,s&1?e===Nu?ks++:(ks=0,Nu=e):ks=0,lr(),null}function gi(){if(_n!==null){var e=P0(Fa),t=vt.transition,n=te;try{if(vt.transition=null,te=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Fa=0,Z&6)throw Error(M(331));var i=Z;for(Z|=4,V=e.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var d=V;switch(d.tag){case 0:case 11:case 15:bs(8,d,s)}var f=d.child;if(f!==null)f.return=d,V=f;else for(;V!==null;){d=V;var p=d.sibling,h=d.return;if(_x(d),d===u){V=null;break}if(p!==null){p.return=h,V=p;break}V=h}}}var b=s.alternate;if(b!==null){var m=b.child;if(m!==null){b.child=null;do{var y=m.sibling;m.sibling=null,m=y}while(m!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,V=g;break e}V=s.return}}var x=e.current;for(V=x;V!==null;){o=V;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,V=v;else e:for(o=x;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(k){ge(a,a.return,k)}if(a===o){V=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,V=S;break e}V=a.return}}if(Z=i,lr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{te=n,vt.transition=t}}return!1}function Ch(e,t,n){t=Li(n,t),t=Px(e,t,1),e=Kn(e,t,1),t=Ke(),e!==null&&(oo(e,1,t),tt(e,t))}function ge(e,t,n){if(e.tag===3)Ch(e,e,n);else for(;t!==null;){if(t.tag===3){Ch(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Li(n,e),e=Rx(t,e,1),t=Kn(t,e,1),e=Ke(),t!==null&&(oo(t,1,e),tt(t,e));break}}t=t.return}}function X5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Ae&n)===n&&(Ee===4||Ee===3&&(Ae&130023424)===Ae&&500>xe()-tf?Pr(e,0):ef|=n),tt(e,t)}function Qx(e,t){t===0&&(e.mode&1?(t=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):t=1);var n=Ke();e=pn(e,t),e!==null&&(oo(e,t,n),tt(e,n))}function Z5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qx(e,n)}function J5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Qx(e,n)}var Xx;Xx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,_5(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ce&&t.flags&1048576&&tx(t,Pa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oa(e,t),e=t.pendingProps;var i=Pi(t,Be.current);mi(t,n),i=Yd(null,t,r,e,i,n);var s=qd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(s=!0,Ta(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ud(t),i.updater=fl,t.stateNode=i,i._reactInternals=t,gu(t,r,e,n),t=yu(null,t,r,!0,s,n)):(t.tag=0,ce&&s&&Id(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=t2(r),e=Pt(r,e),i){case 0:t=vu(null,t,r,e,n);break e;case 1:t=mh(null,t,r,e,n);break e;case 11:t=ph(null,t,r,e,n);break e;case 14:t=hh(null,t,r,Pt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),vu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),mh(e,t,r,i,n);case 3:e:{if(Dx(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ax(e,t),Ma(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Li(Error(M(423)),t),t=gh(e,t,r,n,i);break e}else if(r!==i){i=Li(Error(M(424)),t),t=gh(e,t,r,n,i);break e}else for(st=Gn(t.stateNode.containerInfo.firstChild),ot=t,ce=!0,Dt=null,n=sx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===i){t=hn(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return lx(t),e===null&&pu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,lu(r,i)?o=null:s!==null&&lu(r,s)&&(t.flags|=32),Lx(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&pu(t),null;case 13:return Ox(e,t,n);case 4:return Wd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ai(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ph(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,re(Ra,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!Je.current){t=hn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=un(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mi(t,n),i=wt(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),hh(e,t,r,i,n);case 15:return Ax(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),oa(e,t),t.tag=1,et(r)?(e=!0,Ta(t)):e=!1,mi(t,n),Nx(t,r,i),gu(t,r,i,n),yu(null,t,r,!0,e,n);case 19:return Ix(e,t,n);case 22:return Mx(e,t,n)}throw Error(M(156,t.tag))};function Zx(e,t){return C0(e,t)}function e2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new e2(e,t,n,r)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t2(e){if(typeof e=="function")return of(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jd)return 11;if(e===Cd)return 14}return 2}function Qn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ca(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")of(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qr:return Rr(n.children,i,s,t);case kd:o=8,i|=8;break;case _c:return e=gt(12,n,t,i|2),e.elementType=_c,e.lanes=s,e;case Bc:return e=gt(13,n,t,i),e.elementType=Bc,e.lanes=s,e;case $c:return e=gt(19,n,t,i),e.elementType=$c,e.lanes=s,e;case l0:return ml(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case o0:o=10;break e;case a0:o=9;break e;case jd:o=11;break e;case Cd:o=14;break e;case Rn:o=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=gt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Rr(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=gt(22,e,r,t),e.elementType=l0,e.lanes=n,e.stateNode={isHidden:!1},e}function dc(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function fc(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function af(e,t,n,r,i,s,o,a,l){return e=new n2(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(s),e}function r2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jx(e){if(!e)return Jn;e=e._reactInternals;e:{if(Vr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(et(n))return J0(e,n,t)}return t}function ev(e,t,n,r,i,s,o,a,l){return e=af(n,r,!0,e,i,s,o,a,l),e.context=Jx(null),n=e.current,r=Ke(),i=qn(n),s=un(r,i),s.callback=t??null,Kn(n,s,i),e.current.lanes=i,oo(e,i,r),tt(e,r),e}function gl(e,t,n,r){var i=t.current,s=Ke(),o=qn(i);return n=Jx(n),t.context===null?t.context=n:t.pendingContext=n,t=un(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kn(i,t,o),e!==null&&(It(e,i,o,s),ra(e,i,o)),o}function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lf(e,t){Eh(e,t),(e=e.alternate)&&Eh(e,t)}function i2(){return null}var tv=typeof reportError=="function"?reportError:function(e){console.error(e)};function cf(e){this._internalRoot=e}xl.prototype.render=cf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));gl(e,t,null,null)};xl.prototype.unmount=cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){gl(null,e,null,null)}),t[fn]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=M0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mn.length&&t!==0&&t<Mn[n].priority;n++);Mn.splice(n,0,e),n===0&&D0(e)}};function uf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Th(){}function s2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_a(o);s.call(u)}}var o=ev(t,r,e,0,null,!1,!1,"",Th);return e._reactRootContainer=o,e[fn]=o.current,zs(e.nodeType===8?e.parentNode:e),Ir(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_a(l);a.call(u)}}var l=af(e,0,!1,null,null,!1,!1,"",Th);return e._reactRootContainer=l,e[fn]=l.current,zs(e.nodeType===8?e.parentNode:e),Ir(function(){gl(t,l,n,r)}),l}function yl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_a(o);a.call(l)}}gl(t,o,e,i)}else o=s2(n,t,e,i,r);return _a(o)}R0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=us(t.pendingLanes);n!==0&&(Nd(t,n|1),tt(t,xe()),!(Z&6)&&(Di=xe()+500,lr()))}break;case 13:Ir(function(){var r=pn(e,1);if(r!==null){var i=Ke();It(r,e,1,i)}}),lf(e,1)}};Pd=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var n=Ke();It(t,e,134217728,n)}lf(e,134217728)}};A0=function(e){if(e.tag===13){var t=qn(e),n=pn(e,t);if(n!==null){var r=Ke();It(n,e,t,r)}lf(e,t)}};M0=function(){return te};L0=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Zc=function(e,t,n){switch(t){case"input":if(Hc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=cl(r);if(!i)throw Error(M(90));u0(r),Hc(r,i)}}}break;case"textarea":f0(e,n);break;case"select":t=n.value,t!=null&&di(e,!!n.multiple,t,!1)}};y0=nf;w0=Ir;var o2={usingClientEntryPoint:!1,Events:[lo,ei,cl,x0,v0,nf]},is={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a2={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=k0(e),e===null?null:e.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||i2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{sl=_o.inject(a2),Yt=_o}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o2;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(t))throw Error(M(200));return r2(e,t,null,n)};ct.createRoot=function(e,t){if(!uf(e))throw Error(M(299));var n=!1,r="",i=tv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=af(e,1,!1,null,null,n,!1,r,i),e[fn]=t.current,zs(e.nodeType===8?e.parentNode:e),new cf(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=k0(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Ir(e)};ct.hydrate=function(e,t,n){if(!vl(t))throw Error(M(200));return yl(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!uf(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ev(t,null,e,1,n??null,i,!1,s,o),e[fn]=t.current,zs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xl(t)};ct.render=function(e,t,n){if(!vl(t))throw Error(M(200));return yl(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!vl(e))throw Error(M(40));return e._reactRootContainer?(Ir(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};ct.unstable_batchedUpdates=nf;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return yl(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(e){console.error(e)}}nv(),n0.exports=ct;var uo=n0.exports;const rv=Ug(uo);var iv,Nh=uo;iv=Nh.createRoot,Nh.hydrateRoot;const l2=1,c2=1e6;let pc=0;function u2(){return pc=(pc+1)%Number.MAX_SAFE_INTEGER,pc.toString()}const hc=new Map,Ph=e=>{if(hc.has(e))return;const t=setTimeout(()=>{hc.delete(e),js({type:"REMOVE_TOAST",toastId:e})},c2);hc.set(e,t)},d2=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,l2)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Ph(n):e.toasts.forEach(r=>{Ph(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},ua=[];let da={toasts:[]};function js(e){da=d2(da,e),ua.forEach(t=>{t(da)})}function f2({...e}){const t=u2(),n=i=>js({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>js({type:"DISMISS_TOAST",toastId:t});return js({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function p2(){const[e,t]=w.useState(da);return w.useEffect(()=>(ua.push(t),()=>{const n=ua.indexOf(t);n>-1&&ua.splice(n,1)}),[e]),{...e,toast:f2,dismiss:n=>js({type:"DISMISS_TOAST",toastId:n})}}function Ce(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Rh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function sv(...e){return t=>{let n=!1;const r=e.map(i=>{const s=Rh(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():Rh(e[i],null)}}}}function Ft(...e){return w.useCallback(sv(...e),e)}function wl(e,t=[]){let n=[];function r(s,o){const a=w.createContext(o),l=n.length;n=[...n,o];const u=f=>{var g;const{scope:p,children:h,...b}=f,m=((g=p==null?void 0:p[e])==null?void 0:g[l])||a,y=w.useMemo(()=>b,Object.values(b));return c.jsx(m.Provider,{value:y,children:h})};u.displayName=s+"Provider";function d(f,p){var m;const h=((m=p==null?void 0:p[e])==null?void 0:m[l])||a,b=w.useContext(h);if(b)return b;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[u,d]}const i=()=>{const s=n.map(o=>w.createContext(o));return function(a){const l=(a==null?void 0:a[e])||s;return w.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,h2(i,...t)]}function h2(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const o=r.reduce((a,{useScope:l,scopeName:u})=>{const f=l(s)[`__scope${u}`];return{...a,...f}},{});return w.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}function Ba(e){const t=g2(e),n=w.forwardRef((r,i)=>{const{children:s,...o}=r,a=w.Children.toArray(s),l=a.find(v2);if(l){const u=l.props.children,d=a.map(f=>f===l?w.Children.count(u)>1?w.Children.only(null):w.isValidElement(u)?u.props.children:null:f);return c.jsx(t,{...o,ref:i,children:w.isValidElement(u)?w.cloneElement(u,void 0,d):null})}return c.jsx(t,{...o,ref:i,children:s})});return n.displayName=`${e}.Slot`,n}var m2=Ba("Slot");function g2(e){const t=w.forwardRef((n,r)=>{const{children:i,...s}=n;if(w.isValidElement(i)){const o=w2(i),a=y2(s,i.props);return i.type!==w.Fragment&&(a.ref=r?sv(r,o):o),w.cloneElement(i,a)}return w.Children.count(i)>1?w.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ov=Symbol("radix.slottable");function x2(e){const t=({children:n})=>c.jsx(c.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=ov,t}function v2(e){return w.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ov}function y2(e,t){const n={...t};for(const r in t){const i=e[r],s=t[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...a)=>{const l=s(...a);return i(...a),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...e,...n}}function w2(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function b2(e){const t=e+"CollectionProvider",[n,r]=wl(t),[i,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=m=>{const{scope:y,children:g}=m,x=L.useRef(null),v=L.useRef(new Map).current;return c.jsx(i,{scope:y,itemMap:v,collectionRef:x,children:g})};o.displayName=t;const a=e+"CollectionSlot",l=Ba(a),u=L.forwardRef((m,y)=>{const{scope:g,children:x}=m,v=s(a,g),S=Ft(y,v.collectionRef);return c.jsx(l,{ref:S,children:x})});u.displayName=a;const d=e+"CollectionItemSlot",f="data-radix-collection-item",p=Ba(d),h=L.forwardRef((m,y)=>{const{scope:g,children:x,...v}=m,S=L.useRef(null),k=Ft(y,S),j=s(d,g);return L.useEffect(()=>(j.itemMap.set(S,{ref:S,...v}),()=>void j.itemMap.delete(S))),c.jsx(p,{[f]:"",ref:k,children:x})});h.displayName=d;function b(m){const y=s(e+"CollectionConsumer",m);return L.useCallback(()=>{const x=y.collectionRef.current;if(!x)return[];const v=Array.from(x.querySelectorAll(`[${f}]`));return Array.from(y.itemMap.values()).sort((j,C)=>v.indexOf(j.ref.current)-v.indexOf(C.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:o,Slot:u,ItemSlot:h},b,r]}var S2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],nt=S2.reduce((e,t)=>{const n=Ba(`Primitive.${t}`),r=w.forwardRef((i,s)=>{const{asChild:o,...a}=i,l=o?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(l,{...a,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function av(e,t){e&&uo.flushSync(()=>e.dispatchEvent(t))}function er(e){const t=w.useRef(e);return w.useEffect(()=>{t.current=e}),w.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function k2(e,t=globalThis==null?void 0:globalThis.document){const n=er(e);w.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var j2="DismissableLayer",Au="dismissableLayer.update",C2="dismissableLayer.pointerDownOutside",E2="dismissableLayer.focusOutside",Ah,lv=w.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),df=w.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=e,u=w.useContext(lv),[d,f]=w.useState(null),p=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,h]=w.useState({}),b=Ft(t,C=>f(C)),m=Array.from(u.layers),[y]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=m.indexOf(y),x=d?m.indexOf(d):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,S=x>=g,k=N2(C=>{const E=C.target,T=[...u.branches].some(A=>A.contains(E));!S||T||(i==null||i(C),o==null||o(C),C.defaultPrevented||a==null||a())},p),j=P2(C=>{const E=C.target;[...u.branches].some(A=>A.contains(E))||(s==null||s(C),o==null||o(C),C.defaultPrevented||a==null||a())},p);return k2(C=>{x===u.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))},p),w.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Ah=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Mh(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Ah)}},[d,p,n,u]),w.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Mh())},[d,u]),w.useEffect(()=>{const C=()=>h({});return document.addEventListener(Au,C),()=>document.removeEventListener(Au,C)},[]),c.jsx(nt.div,{...l,ref:b,style:{pointerEvents:v?S?"auto":"none":void 0,...e.style},onFocusCapture:Ce(e.onFocusCapture,j.onFocusCapture),onBlurCapture:Ce(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:Ce(e.onPointerDownCapture,k.onPointerDownCapture)})});df.displayName=j2;var T2="DismissableLayerBranch",cv=w.forwardRef((e,t)=>{const n=w.useContext(lv),r=w.useRef(null),i=Ft(t,r);return w.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),c.jsx(nt.div,{...e,ref:i})});cv.displayName=T2;function N2(e,t=globalThis==null?void 0:globalThis.document){const n=er(e),r=w.useRef(!1),i=w.useRef(()=>{});return w.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let l=function(){uv(C2,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",s),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function P2(e,t=globalThis==null?void 0:globalThis.document){const n=er(e),r=w.useRef(!1);return w.useEffect(()=>{const i=s=>{s.target&&!r.current&&uv(E2,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Mh(){const e=new CustomEvent(Au);document.dispatchEvent(e)}function uv(e,t,n,{discrete:r}){const i=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?av(i,s):i.dispatchEvent(s)}var R2=df,A2=cv,tr=globalThis!=null&&globalThis.document?w.useLayoutEffect:()=>{},M2="Portal",dv=w.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[i,s]=w.useState(!1);tr(()=>s(!0),[]);const o=n||i&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?rv.createPortal(c.jsx(nt.div,{...r,ref:t}),o):null});dv.displayName=M2;function L2(e,t){return w.useReducer((n,r)=>t[n][r]??n,e)}var ff=e=>{const{present:t,children:n}=e,r=D2(t),i=typeof n=="function"?n({present:r.isPresent}):w.Children.only(n),s=Ft(r.ref,O2(i));return typeof n=="function"||r.isPresent?w.cloneElement(i,{ref:s}):null};ff.displayName="Presence";function D2(e){const[t,n]=w.useState(),r=w.useRef(null),i=w.useRef(e),s=w.useRef("none"),o=e?"mounted":"unmounted",[a,l]=L2(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return w.useEffect(()=>{const u=Bo(r.current);s.current=a==="mounted"?u:"none"},[a]),tr(()=>{const u=r.current,d=i.current;if(d!==e){const p=s.current,h=Bo(u);e?l("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(d&&p!==h?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),tr(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,f=h=>{const m=Bo(r.current).includes(h.animationName);if(h.target===t&&m&&(l("ANIMATION_END"),!i.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},p=h=>{h.target===t&&(s.current=Bo(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:w.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Bo(e){return(e==null?void 0:e.animationName)||"none"}function O2(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var I2=e0[" useInsertionEffect ".trim().toString()]||tr;function z2({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,s,o]=F2({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:i;{const d=w.useRef(e!==void 0);w.useEffect(()=>{const f=d.current;f!==a&&console.warn(`${r} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,r])}const u=w.useCallback(d=>{var f;if(a){const p=V2(d)?d(e):d;p!==e&&((f=o.current)==null||f.call(o,p))}else s(d)},[a,e,s,o]);return[l,u]}function F2({defaultProp:e,onChange:t}){const[n,r]=w.useState(e),i=w.useRef(n),s=w.useRef(t);return I2(()=>{s.current=t},[t]),w.useEffect(()=>{var o;i.current!==n&&((o=s.current)==null||o.call(s,n),i.current=n)},[n,i]),[n,r,s]}function V2(e){return typeof e=="function"}var _2=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),B2="VisuallyHidden",bl=w.forwardRef((e,t)=>c.jsx(nt.span,{...e,ref:t,style:{..._2,...e.style}}));bl.displayName=B2;var $2=bl,pf="ToastProvider",[hf,U2,W2]=b2("Toast"),[fv,sA]=wl("Toast",[W2]),[H2,Sl]=fv(pf),pv=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:s=50,children:o}=e,[a,l]=w.useState(null),[u,d]=w.useState(0),f=w.useRef(!1),p=w.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${pf}\`. Expected non-empty \`string\`.`),c.jsx(hf.Provider,{scope:t,children:c.jsx(H2,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:s,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:w.useCallback(()=>d(h=>h+1),[]),onToastRemove:w.useCallback(()=>d(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:p,children:o})})};pv.displayName=pf;var hv="ToastViewport",G2=["F8"],Mu="toast.viewportPause",Lu="toast.viewportResume",mv=w.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=G2,label:i="Notifications ({hotkey})",...s}=e,o=Sl(hv,n),a=U2(n),l=w.useRef(null),u=w.useRef(null),d=w.useRef(null),f=w.useRef(null),p=Ft(t,f,o.onViewportChange),h=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=o.toastCount>0;w.useEffect(()=>{const y=g=>{var v;r.length!==0&&r.every(S=>g[S]||g.code===S)&&((v=f.current)==null||v.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r]),w.useEffect(()=>{const y=l.current,g=f.current;if(b&&y&&g){const x=()=>{if(!o.isClosePausedRef.current){const j=new CustomEvent(Mu);g.dispatchEvent(j),o.isClosePausedRef.current=!0}},v=()=>{if(o.isClosePausedRef.current){const j=new CustomEvent(Lu);g.dispatchEvent(j),o.isClosePausedRef.current=!1}},S=j=>{!y.contains(j.relatedTarget)&&v()},k=()=>{y.contains(document.activeElement)||v()};return y.addEventListener("focusin",x),y.addEventListener("focusout",S),y.addEventListener("pointermove",x),y.addEventListener("pointerleave",k),window.addEventListener("blur",x),window.addEventListener("focus",v),()=>{y.removeEventListener("focusin",x),y.removeEventListener("focusout",S),y.removeEventListener("pointermove",x),y.removeEventListener("pointerleave",k),window.removeEventListener("blur",x),window.removeEventListener("focus",v)}}},[b,o.isClosePausedRef]);const m=w.useCallback(({tabbingDirection:y})=>{const x=a().map(v=>{const S=v.ref.current,k=[S,...sS(S)];return y==="forwards"?k:k.reverse()});return(y==="forwards"?x.reverse():x).flat()},[a]);return w.useEffect(()=>{const y=f.current;if(y){const g=x=>{var k,j,C;const v=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!v){const E=document.activeElement,T=x.shiftKey;if(x.target===y&&T){(k=u.current)==null||k.focus();return}const O=m({tabbingDirection:T?"backwards":"forwards"}),K=O.findIndex(I=>I===E);mc(O.slice(K+1))?x.preventDefault():T?(j=u.current)==null||j.focus():(C=d.current)==null||C.focus()}};return y.addEventListener("keydown",g),()=>y.removeEventListener("keydown",g)}},[a,m]),c.jsxs(A2,{ref:l,role:"region","aria-label":i.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:b?void 0:"none"},children:[b&&c.jsx(Du,{ref:u,onFocusFromOutsideViewport:()=>{const y=m({tabbingDirection:"forwards"});mc(y)}}),c.jsx(hf.Slot,{scope:n,children:c.jsx(nt.ol,{tabIndex:-1,...s,ref:p})}),b&&c.jsx(Du,{ref:d,onFocusFromOutsideViewport:()=>{const y=m({tabbingDirection:"backwards"});mc(y)}})]})});mv.displayName=hv;var gv="ToastFocusProxy",Du=w.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,s=Sl(gv,n);return c.jsx(bl,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:o=>{var u;const a=o.relatedTarget;!((u=s.viewport)!=null&&u.contains(a))&&r()}})});Du.displayName=gv;var fo="Toast",K2="toast.swipeStart",Y2="toast.swipeMove",q2="toast.swipeCancel",Q2="toast.swipeEnd",xv=w.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...o}=e,[a,l]=z2({prop:r,defaultProp:i??!0,onChange:s,caller:fo});return c.jsx(ff,{present:n||a,children:c.jsx(J2,{open:a,...o,ref:t,onClose:()=>l(!1),onPause:er(e.onPause),onResume:er(e.onResume),onSwipeStart:Ce(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ce(e.onSwipeMove,u=>{const{x:d,y:f}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Ce(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ce(e.onSwipeEnd,u=>{const{x:d,y:f}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});xv.displayName=fo;var[X2,Z2]=fv(fo,{onClose(){}}),J2=w.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:d,onSwipeMove:f,onSwipeCancel:p,onSwipeEnd:h,...b}=e,m=Sl(fo,n),[y,g]=w.useState(null),x=Ft(t,I=>g(I)),v=w.useRef(null),S=w.useRef(null),k=i||m.duration,j=w.useRef(0),C=w.useRef(k),E=w.useRef(0),{onToastAdd:T,onToastRemove:A}=m,D=er(()=>{var Y;(y==null?void 0:y.contains(document.activeElement))&&((Y=m.viewport)==null||Y.focus()),o()}),O=w.useCallback(I=>{!I||I===1/0||(window.clearTimeout(E.current),j.current=new Date().getTime(),E.current=window.setTimeout(D,I))},[D]);w.useEffect(()=>{const I=m.viewport;if(I){const Y=()=>{O(C.current),u==null||u()},$=()=>{const _=new Date().getTime()-j.current;C.current=C.current-_,window.clearTimeout(E.current),l==null||l()};return I.addEventListener(Mu,$),I.addEventListener(Lu,Y),()=>{I.removeEventListener(Mu,$),I.removeEventListener(Lu,Y)}}},[m.viewport,k,l,u,O]),w.useEffect(()=>{s&&!m.isClosePausedRef.current&&O(k)},[s,k,m.isClosePausedRef,O]),w.useEffect(()=>(T(),()=>A()),[T,A]);const K=w.useMemo(()=>y?jv(y):null,[y]);return m.viewport?c.jsxs(c.Fragment,{children:[K&&c.jsx(eS,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:K}),c.jsx(X2,{scope:n,onClose:D,children:uo.createPortal(c.jsx(hf.ItemSlot,{scope:n,children:c.jsx(R2,{asChild:!0,onEscapeKeyDown:Ce(a,()=>{m.isFocusedToastEscapeKeyDownRef.current||D(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:c.jsx(nt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":m.swipeDirection,...b,ref:x,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:Ce(e.onKeyDown,I=>{I.key==="Escape"&&(a==null||a(I.nativeEvent),I.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:Ce(e.onPointerDown,I=>{I.button===0&&(v.current={x:I.clientX,y:I.clientY})}),onPointerMove:Ce(e.onPointerMove,I=>{if(!v.current)return;const Y=I.clientX-v.current.x,$=I.clientY-v.current.y,_=!!S.current,N=["left","right"].includes(m.swipeDirection),R=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,z=N?R(0,Y):0,U=N?0:R(0,$),B=I.pointerType==="touch"?10:2,q={x:z,y:U},X={originalEvent:I,delta:q};_?(S.current=q,$o(Y2,f,X,{discrete:!1})):Lh(q,m.swipeDirection,B)?(S.current=q,$o(K2,d,X,{discrete:!1}),I.target.setPointerCapture(I.pointerId)):(Math.abs(Y)>B||Math.abs($)>B)&&(v.current=null)}),onPointerUp:Ce(e.onPointerUp,I=>{const Y=S.current,$=I.target;if($.hasPointerCapture(I.pointerId)&&$.releasePointerCapture(I.pointerId),S.current=null,v.current=null,Y){const _=I.currentTarget,N={originalEvent:I,delta:Y};Lh(Y,m.swipeDirection,m.swipeThreshold)?$o(Q2,h,N,{discrete:!0}):$o(q2,p,N,{discrete:!0}),_.addEventListener("click",R=>R.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),eS=e=>{const{__scopeToast:t,children:n,...r}=e,i=Sl(fo,t),[s,o]=w.useState(!1),[a,l]=w.useState(!1);return rS(()=>o(!0)),w.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),a?null:c.jsx(dv,{asChild:!0,children:c.jsx(bl,{...r,children:s&&c.jsxs(c.Fragment,{children:[i.label," ",n]})})})},tS="ToastTitle",vv=w.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return c.jsx(nt.div,{...r,ref:t})});vv.displayName=tS;var nS="ToastDescription",yv=w.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return c.jsx(nt.div,{...r,ref:t})});yv.displayName=nS;var wv="ToastAction",bv=w.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?c.jsx(kv,{altText:n,asChild:!0,children:c.jsx(mf,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${wv}\`. Expected non-empty \`string\`.`),null)});bv.displayName=wv;var Sv="ToastClose",mf=w.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=Z2(Sv,n);return c.jsx(kv,{asChild:!0,children:c.jsx(nt.button,{type:"button",...r,ref:t,onClick:Ce(e.onClick,i.onClose)})})});mf.displayName=Sv;var kv=w.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return c.jsx(nt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function jv(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),iS(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",s=r.dataset.radixToastAnnounceExclude==="";if(!i)if(s){const o=r.dataset.radixToastAnnounceAlt;o&&t.push(o)}else t.push(...jv(r))}}),t}function $o(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?av(i,s):i.dispatchEvent(s)}var Lh=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),s=r>i;return t==="left"||t==="right"?s&&r>n:!s&&i>n};function rS(e=()=>{}){const t=er(e);tr(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function iS(e){return e.nodeType===e.ELEMENT_NODE}function sS(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function mc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var oS=pv,Cv=mv,Ev=xv,Tv=vv,Nv=yv,Pv=bv,Rv=mf;function Av(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Av(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Mv(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Av(e))&&(r&&(r+=" "),r+=t);return r}const Dh=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Oh=Mv,Lv=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Oh(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=t,o=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],f=s==null?void 0:s[u];if(d===null)return null;const p=Dh(d)||Dh(f);return i[u][p]}),a=n&&Object.entries(n).reduce((u,d)=>{let[f,p]=d;return p===void 0||(u[f]=p),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:f,className:p,...h}=d;return Object.entries(h).every(b=>{let[m,y]=b;return Array.isArray(y)?y.includes({...s,...a}[m]):{...s,...a}[m]===y})?[...u,f,p]:u},[]);return Oh(e,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dv=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>w.createElement("svg",{ref:l,...lS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Dv("lucide",i),...a},[...o.map(([u,d])=>w.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(e,t)=>{const n=w.forwardRef(({className:r,...i},s)=>w.createElement(cS,{ref:s,iconNode:t,className:Dv(`lucide-${aS(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=Le("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=Le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=Le("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=Le("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=Le("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=Le("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Le("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=Le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Le("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=Le("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Le("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Le("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Le("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Le("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Le("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=Le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=Le("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),vf="-",vS=e=>{const t=wS(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{const a=o.split(vf);return a[0]===""&&a.length!==1&&a.shift(),zv(a,t)||yS(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}}},zv=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?zv(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const s=e.join(vf);return(o=t.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Fh=/^\[(.+)\]$/,yS=e=>{if(Fh.test(e)){const t=Fh.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},wS=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return SS(Object.entries(e.classGroups),n).forEach(([s,o])=>{zu(o,r,s,t)}),r},zu=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const s=i===""?t:Vh(t,i);s.classGroupId=n;return}if(typeof i=="function"){if(bS(i)){zu(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{zu(o,Vh(t,s),n,r)})})},Vh=(e,t)=>{let n=e;return t.split(vf).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},bS=e=>e.isThemeGetter,SS=(e,t)=>t?e.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[t+o,a])):s);return[n,i]}):e,kS=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),t++,t>e&&(t=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},Fv="!",jS=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],s=t.length,o=a=>{const l=[];let u=0,d=0,f;for(let y=0;y<a.length;y++){let g=a[y];if(u===0){if(g===i&&(r||a.slice(y,y+s)===t)){l.push(a.slice(d,y)),d=y+s;continue}if(g==="/"){f=y;continue}}g==="["?u++:g==="]"&&u--}const p=l.length===0?a:a.substring(d),h=p.startsWith(Fv),b=h?p.substring(1):p,m=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:h,baseClassName:b,maybePostfixModifierPosition:m}};return n?a=>n({className:a,parseClassName:o}):o},CS=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},ES=e=>({cache:kS(e.cacheSize),parseClassName:jS(e),...vS(e)}),TS=/\s+/,NS=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,s=[],o=e.trim().split(TS);let a="";for(let l=o.length-1;l>=0;l-=1){const u=o[l],{modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:h}=n(u);let b=!!h,m=r(b?p.substring(0,h):p);if(!m){if(!b){a=u+(a.length>0?" "+a:a);continue}if(m=r(p),!m){a=u+(a.length>0?" "+a:a);continue}b=!1}const y=CS(d).join(":"),g=f?y+Fv:y,x=g+m;if(s.includes(x))continue;s.push(x);const v=i(m,b);for(let S=0;S<v.length;++S){const k=v[S];s.push(g+k)}a=u+(a.length>0?" "+a:a)}return a};function PS(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Vv(t))&&(r&&(r+=" "),r+=n);return r}const Vv=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Vv(e[r]))&&(n&&(n+=" "),n+=t);return n};function RS(e,...t){let n,r,i,s=o;function o(l){const u=t.reduce((d,f)=>f(d),e());return n=ES(u),r=n.cache.get,i=n.cache.set,s=a,a(l)}function a(l){const u=r(l);if(u)return u;const d=NS(l,n);return i(l,d),d}return function(){return s(PS.apply(null,arguments))}}const ie=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},_v=/^\[(?:([a-z-]+):)?(.+)\]$/i,AS=/^\d+\/\d+$/,MS=new Set(["px","full","screen"]),LS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,DS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,OS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,IS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,nn=e=>xi(e)||MS.has(e)||AS.test(e),En=e=>$i(e,"length",HS),xi=e=>!!e&&!Number.isNaN(Number(e)),gc=e=>$i(e,"number",xi),ss=e=>!!e&&Number.isInteger(Number(e)),FS=e=>e.endsWith("%")&&xi(e.slice(0,-1)),G=e=>_v.test(e),Tn=e=>LS.test(e),VS=new Set(["length","size","percentage"]),_S=e=>$i(e,VS,Bv),BS=e=>$i(e,"position",Bv),$S=new Set(["image","url"]),US=e=>$i(e,$S,KS),WS=e=>$i(e,"",GS),os=()=>!0,$i=(e,t,n)=>{const r=_v.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},HS=e=>DS.test(e)&&!OS.test(e),Bv=()=>!1,GS=e=>IS.test(e),KS=e=>zS.test(e),YS=()=>{const e=ie("colors"),t=ie("spacing"),n=ie("blur"),r=ie("brightness"),i=ie("borderColor"),s=ie("borderRadius"),o=ie("borderSpacing"),a=ie("borderWidth"),l=ie("contrast"),u=ie("grayscale"),d=ie("hueRotate"),f=ie("invert"),p=ie("gap"),h=ie("gradientColorStops"),b=ie("gradientColorStopPositions"),m=ie("inset"),y=ie("margin"),g=ie("opacity"),x=ie("padding"),v=ie("saturate"),S=ie("scale"),k=ie("sepia"),j=ie("skew"),C=ie("space"),E=ie("translate"),T=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",G,t],O=()=>[G,t],K=()=>["",nn,En],I=()=>["auto",xi,G],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],_=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",G],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[xi,G];return{cacheSize:500,separator:":",theme:{colors:[os],spacing:[nn,En],blur:["none","",Tn,G],brightness:U(),borderColor:[e],borderRadius:["none","","full",Tn,G],borderSpacing:O(),borderWidth:K(),contrast:U(),grayscale:R(),hueRotate:U(),invert:R(),gap:O(),gradientColorStops:[e],gradientColorStopPositions:[FS,En],inset:D(),margin:D(),opacity:U(),padding:O(),saturate:U(),scale:U(),sepia:R(),skew:U(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[Tn]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),G]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ss,G]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",ss,G]}],"grid-cols":[{"grid-cols":[os]}],"col-start-end":[{col:["auto",{span:["full",ss,G]},G]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[os]}],"row-start-end":[{row:["auto",{span:[ss,G]},G]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,t]}],"min-w":[{"min-w":[G,t,"min","max","fit"]}],"max-w":[{"max-w":[G,t,"none","full","min","max","fit","prose",{screen:[Tn]},Tn]}],h:[{h:[G,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Tn,En]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",gc]}],"font-family":[{font:[os]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",xi,gc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",nn,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",nn,En]}],"underline-offset":[{"underline-offset":["auto",nn,G]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),BS]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_S]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},US]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:$()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[nn,G]}],"outline-w":[{outline:[nn,En]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[nn,En]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Tn,WS]}],"shadow-color":[{shadow:[os]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[..._(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":_()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Tn,G]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[ss,G]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[nn,En,gc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},qS=RS(YS);function cr(...e){return qS(Mv(e))}const QS=oS,$v=w.forwardRef(({className:e,...t},n)=>c.jsx(Cv,{ref:n,className:cr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));$v.displayName=Cv.displayName;const XS=Lv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Uv=w.forwardRef(({className:e,variant:t,...n},r)=>c.jsx(Ev,{ref:r,className:cr(XS({variant:t}),e),...n}));Uv.displayName=Ev.displayName;const ZS=w.forwardRef(({className:e,...t},n)=>c.jsx(Pv,{ref:n,className:cr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));ZS.displayName=Pv.displayName;const Wv=w.forwardRef(({className:e,...t},n)=>c.jsx(Rv,{ref:n,className:cr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:c.jsx(Iu,{className:"h-4 w-4"})}));Wv.displayName=Rv.displayName;const Hv=w.forwardRef(({className:e,...t},n)=>c.jsx(Tv,{ref:n,className:cr("text-sm font-semibold",e),...t}));Hv.displayName=Tv.displayName;const Gv=w.forwardRef(({className:e,...t},n)=>c.jsx(Nv,{ref:n,className:cr("text-sm opacity-90",e),...t}));Gv.displayName=Nv.displayName;function JS(){const{toasts:e}=p2();return c.jsxs(QS,{children:[e.map(function({id:t,title:n,description:r,action:i,...s}){return c.jsxs(Uv,{...s,children:[c.jsxs("div",{className:"grid gap-1",children:[n&&c.jsx(Hv,{children:n}),r&&c.jsx(Gv,{children:r})]}),i,c.jsx(Wv,{})]},t)}),c.jsx($v,{})]})}var _h=["light","dark"],ek="(prefers-color-scheme: dark)",tk=w.createContext(void 0),nk={setTheme:e=>{},themes:[]},rk=()=>{var e;return(e=w.useContext(tk))!=null?e:nk};w.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:s,value:o,attrs:a,nonce:l})=>{let u=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(b=>`'${b}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=i?_h.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(b,m=!1,y=!0)=>{let g=o?o[b]:b,x=m?b+"|| ''":`'${g}'`,v="";return i&&y&&!m&&_h.includes(b)&&(v+=`d.style.colorScheme = '${b}';`),n==="class"?m||g?v+=`c.add(${x})`:v+="null":g&&(v+=`d[s](n,${x})`),v},h=e?`!function(){${d}${p(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${ek}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${p(o?"x[e]":"e",!0)}}${u?"":"else{"+p(s,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${p(o?"x[e]":"e",!0)}}else{${p(s,!1,!1)};}${f}}catch(t){}}();`;return w.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:h}})});var ik=e=>{switch(e){case"success":return ak;case"info":return ck;case"warning":return lk;case"error":return uk;default:return null}},sk=Array(12).fill(0),ok=({visible:e,className:t})=>L.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},L.createElement("div",{className:"sonner-spinner"},sk.map((n,r)=>L.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),ak=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),lk=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),ck=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),uk=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),dk=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},L.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),L.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),fk=()=>{let[e,t]=L.useState(document.hidden);return L.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Fu=1,pk=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Fu++,s=this.toasts.find(a=>a.id===i),o=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),s?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...e,id:i,title:n}),{...a,...e,id:i,dismissible:o,title:n}):a):this.addToast({title:n,...r,dismissible:o,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,s,o=r.then(async l=>{if(s=["resolve",l],L.isValidElement(l))i=!1,this.create({id:n,type:"default",message:l});else if(mk(l)&&!l.ok){i=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){i=!1;let u=typeof t.success=="function"?await t.success(l):t.success,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async l=>{if(s=["reject",l],t.error!==void 0){i=!1;let u=typeof t.error=="function"?await t.error(l):t.error,d=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var l;i&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),a=()=>new Promise((l,u)=>o.then(()=>s[0]==="reject"?u(s[1]):l(s[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Fu++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Qe=new pk,hk=(e,t)=>{let n=(t==null?void 0:t.id)||Fu++;return Qe.addToast({title:e,...t,id:n}),n},mk=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",gk=hk,xk=()=>Qe.toasts,vk=()=>Qe.getActiveToasts();Object.assign(gk,{success:Qe.success,info:Qe.info,warning:Qe.warning,error:Qe.error,custom:Qe.custom,message:Qe.message,promise:Qe.promise,dismiss:Qe.dismiss,loading:Qe.loading},{getHistory:xk,getToasts:vk});function yk(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}yk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Uo(e){return e.label!==void 0}var wk=3,bk="32px",Sk="16px",Bh=4e3,kk=356,jk=14,Ck=20,Ek=200;function Et(...e){return e.filter(Boolean).join(" ")}function Tk(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Nk=e=>{var t,n,r,i,s,o,a,l,u,d,f;let{invert:p,toast:h,unstyled:b,interacting:m,setHeights:y,visibleToasts:g,heights:x,index:v,toasts:S,expanded:k,removeToast:j,defaultRichColors:C,closeButton:E,style:T,cancelButtonStyle:A,actionButtonStyle:D,className:O="",descriptionClassName:K="",duration:I,position:Y,gap:$,loadingIcon:_,expandByDefault:N,classNames:R,icons:z,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:B}=e,[q,X]=L.useState(null),[ve,De]=L.useState(null),[ee,$r]=L.useState(!1),[yn,dr]=L.useState(!1),[wn,Ur]=L.useState(!1),[bn,wo]=L.useState(!1),[Il,bo]=L.useState(!1),[zl,qi]=L.useState(0),[Wr,pp]=L.useState(0),Qi=L.useRef(h.duration||I||Bh),hp=L.useRef(null),fr=L.useRef(null),Tw=v===0,Nw=v+1<=g,dt=h.type,Hr=h.dismissible!==!1,Pw=h.className||"",Rw=h.descriptionClassName||"",So=L.useMemo(()=>x.findIndex(W=>W.toastId===h.id)||0,[x,h.id]),Aw=L.useMemo(()=>{var W;return(W=h.closeButton)!=null?W:E},[h.closeButton,E]),mp=L.useMemo(()=>h.duration||I||Bh,[h.duration,I]),Fl=L.useRef(0),Gr=L.useRef(0),gp=L.useRef(0),Kr=L.useRef(null),[Mw,Lw]=Y.split("-"),xp=L.useMemo(()=>x.reduce((W,ne,le)=>le>=So?W:W+ne.height,0),[x,So]),vp=fk(),Dw=h.invert||p,Vl=dt==="loading";Gr.current=L.useMemo(()=>So*$+xp,[So,xp]),L.useEffect(()=>{Qi.current=mp},[mp]),L.useEffect(()=>{$r(!0)},[]),L.useEffect(()=>{let W=fr.current;if(W){let ne=W.getBoundingClientRect().height;return pp(ne),y(le=>[{toastId:h.id,height:ne,position:h.position},...le]),()=>y(le=>le.filter(St=>St.toastId!==h.id))}},[y,h.id]),L.useLayoutEffect(()=>{if(!ee)return;let W=fr.current,ne=W.style.height;W.style.height="auto";let le=W.getBoundingClientRect().height;W.style.height=ne,pp(le),y(St=>St.find(kt=>kt.toastId===h.id)?St.map(kt=>kt.toastId===h.id?{...kt,height:le}:kt):[{toastId:h.id,height:le,position:h.position},...St])},[ee,h.title,h.description,y,h.id]);let Sn=L.useCallback(()=>{dr(!0),qi(Gr.current),y(W=>W.filter(ne=>ne.toastId!==h.id)),setTimeout(()=>{j(h)},Ek)},[h,j,y,Gr]);L.useEffect(()=>{if(h.promise&&dt==="loading"||h.duration===1/0||h.type==="loading")return;let W;return k||m||B&&vp?(()=>{if(gp.current<Fl.current){let ne=new Date().getTime()-Fl.current;Qi.current=Qi.current-ne}gp.current=new Date().getTime()})():Qi.current!==1/0&&(Fl.current=new Date().getTime(),W=setTimeout(()=>{var ne;(ne=h.onAutoClose)==null||ne.call(h,h),Sn()},Qi.current)),()=>clearTimeout(W)},[k,m,h,dt,B,vp,Sn]),L.useEffect(()=>{h.delete&&Sn()},[Sn,h.delete]);function Ow(){var W,ne,le;return z!=null&&z.loading?L.createElement("div",{className:Et(R==null?void 0:R.loader,(W=h==null?void 0:h.classNames)==null?void 0:W.loader,"sonner-loader"),"data-visible":dt==="loading"},z.loading):_?L.createElement("div",{className:Et(R==null?void 0:R.loader,(ne=h==null?void 0:h.classNames)==null?void 0:ne.loader,"sonner-loader"),"data-visible":dt==="loading"},_):L.createElement(ok,{className:Et(R==null?void 0:R.loader,(le=h==null?void 0:h.classNames)==null?void 0:le.loader),visible:dt==="loading"})}return L.createElement("li",{tabIndex:0,ref:fr,className:Et(O,Pw,R==null?void 0:R.toast,(t=h==null?void 0:h.classNames)==null?void 0:t.toast,R==null?void 0:R.default,R==null?void 0:R[dt],(n=h==null?void 0:h.classNames)==null?void 0:n[dt]),"data-sonner-toast":"","data-rich-colors":(r=h.richColors)!=null?r:C,"data-styled":!(h.jsx||h.unstyled||b),"data-mounted":ee,"data-promise":!!h.promise,"data-swiped":Il,"data-removed":yn,"data-visible":Nw,"data-y-position":Mw,"data-x-position":Lw,"data-index":v,"data-front":Tw,"data-swiping":wn,"data-dismissible":Hr,"data-type":dt,"data-invert":Dw,"data-swipe-out":bn,"data-swipe-direction":ve,"data-expanded":!!(k||N&&ee),style:{"--index":v,"--toasts-before":v,"--z-index":S.length-v,"--offset":`${yn?zl:Gr.current}px`,"--initial-height":N?"auto":`${Wr}px`,...T,...h.style},onDragEnd:()=>{Ur(!1),X(null),Kr.current=null},onPointerDown:W=>{Vl||!Hr||(hp.current=new Date,qi(Gr.current),W.target.setPointerCapture(W.pointerId),W.target.tagName!=="BUTTON"&&(Ur(!0),Kr.current={x:W.clientX,y:W.clientY}))},onPointerUp:()=>{var W,ne,le,St;if(bn||!Hr)return;Kr.current=null;let kt=Number(((W=fr.current)==null?void 0:W.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),kn=Number(((ne=fr.current)==null?void 0:ne.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),pr=new Date().getTime()-((le=hp.current)==null?void 0:le.getTime()),jt=q==="x"?kt:kn,jn=Math.abs(jt)/pr;if(Math.abs(jt)>=Ck||jn>.11){qi(Gr.current),(St=h.onDismiss)==null||St.call(h,h),De(q==="x"?kt>0?"right":"left":kn>0?"down":"up"),Sn(),wo(!0),bo(!1);return}Ur(!1),X(null)},onPointerMove:W=>{var ne,le,St,kt;if(!Kr.current||!Hr||((ne=window.getSelection())==null?void 0:ne.toString().length)>0)return;let kn=W.clientY-Kr.current.y,pr=W.clientX-Kr.current.x,jt=(le=e.swipeDirections)!=null?le:Tk(Y);!q&&(Math.abs(pr)>1||Math.abs(kn)>1)&&X(Math.abs(pr)>Math.abs(kn)?"x":"y");let jn={x:0,y:0};q==="y"?(jt.includes("top")||jt.includes("bottom"))&&(jt.includes("top")&&kn<0||jt.includes("bottom")&&kn>0)&&(jn.y=kn):q==="x"&&(jt.includes("left")||jt.includes("right"))&&(jt.includes("left")&&pr<0||jt.includes("right")&&pr>0)&&(jn.x=pr),(Math.abs(jn.x)>0||Math.abs(jn.y)>0)&&bo(!0),(St=fr.current)==null||St.style.setProperty("--swipe-amount-x",`${jn.x}px`),(kt=fr.current)==null||kt.style.setProperty("--swipe-amount-y",`${jn.y}px`)}},Aw&&!h.jsx?L.createElement("button",{"aria-label":U,"data-disabled":Vl,"data-close-button":!0,onClick:Vl||!Hr?()=>{}:()=>{var W;Sn(),(W=h.onDismiss)==null||W.call(h,h)},className:Et(R==null?void 0:R.closeButton,(i=h==null?void 0:h.classNames)==null?void 0:i.closeButton)},(s=z==null?void 0:z.close)!=null?s:dk):null,h.jsx||w.isValidElement(h.title)?h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title:L.createElement(L.Fragment,null,dt||h.icon||h.promise?L.createElement("div",{"data-icon":"",className:Et(R==null?void 0:R.icon,(o=h==null?void 0:h.classNames)==null?void 0:o.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||Ow():null,h.type!=="loading"?h.icon||(z==null?void 0:z[dt])||ik(dt):null):null,L.createElement("div",{"data-content":"",className:Et(R==null?void 0:R.content,(a=h==null?void 0:h.classNames)==null?void 0:a.content)},L.createElement("div",{"data-title":"",className:Et(R==null?void 0:R.title,(l=h==null?void 0:h.classNames)==null?void 0:l.title)},typeof h.title=="function"?h.title():h.title),h.description?L.createElement("div",{"data-description":"",className:Et(K,Rw,R==null?void 0:R.description,(u=h==null?void 0:h.classNames)==null?void 0:u.description)},typeof h.description=="function"?h.description():h.description):null),w.isValidElement(h.cancel)?h.cancel:h.cancel&&Uo(h.cancel)?L.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||A,onClick:W=>{var ne,le;Uo(h.cancel)&&Hr&&((le=(ne=h.cancel).onClick)==null||le.call(ne,W),Sn())},className:Et(R==null?void 0:R.cancelButton,(d=h==null?void 0:h.classNames)==null?void 0:d.cancelButton)},h.cancel.label):null,w.isValidElement(h.action)?h.action:h.action&&Uo(h.action)?L.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||D,onClick:W=>{var ne,le;Uo(h.action)&&((le=(ne=h.action).onClick)==null||le.call(ne,W),!W.defaultPrevented&&Sn())},className:Et(R==null?void 0:R.actionButton,(f=h==null?void 0:h.classNames)==null?void 0:f.actionButton)},h.action.label):null))};function $h(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Pk(e,t){let n={};return[e,t].forEach((r,i)=>{let s=i===1,o=s?"--mobile-offset":"--offset",a=s?Sk:bk;function l(u){["top","right","bottom","left"].forEach(d=>{n[`${o}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${o}-${u}`]=a:n[`${o}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(a)}),n}var Rk=w.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:s,closeButton:o,className:a,offset:l,mobileOffset:u,theme:d="light",richColors:f,duration:p,style:h,visibleToasts:b=wk,toastOptions:m,dir:y=$h(),gap:g=jk,loadingIcon:x,icons:v,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:k}=e,[j,C]=L.useState([]),E=L.useMemo(()=>Array.from(new Set([r].concat(j.filter(B=>B.position).map(B=>B.position)))),[j,r]),[T,A]=L.useState([]),[D,O]=L.useState(!1),[K,I]=L.useState(!1),[Y,$]=L.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),_=L.useRef(null),N=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=L.useRef(null),z=L.useRef(!1),U=L.useCallback(B=>{C(q=>{var X;return(X=q.find(ve=>ve.id===B.id))!=null&&X.delete||Qe.dismiss(B.id),q.filter(({id:ve})=>ve!==B.id)})},[]);return L.useEffect(()=>Qe.subscribe(B=>{if(B.dismiss){C(q=>q.map(X=>X.id===B.id?{...X,delete:!0}:X));return}setTimeout(()=>{rv.flushSync(()=>{C(q=>{let X=q.findIndex(ve=>ve.id===B.id);return X!==-1?[...q.slice(0,X),{...q[X],...B},...q.slice(X+1)]:[B,...q]})})})}),[]),L.useEffect(()=>{if(d!=="system"){$(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;let B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:q})=>{$(q?"dark":"light")})}catch{B.addListener(({matches:X})=>{try{$(X?"dark":"light")}catch(ve){console.error(ve)}})}},[d]),L.useEffect(()=>{j.length<=1&&O(!1)},[j]),L.useEffect(()=>{let B=q=>{var X,ve;i.every(De=>q[De]||q.code===De)&&(O(!0),(X=_.current)==null||X.focus()),q.code==="Escape"&&(document.activeElement===_.current||(ve=_.current)!=null&&ve.contains(document.activeElement))&&O(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[i]),L.useEffect(()=>{if(_.current)return()=>{R.current&&(R.current.focus({preventScroll:!0}),R.current=null,z.current=!1)}},[_.current]),L.createElement("section",{ref:t,"aria-label":`${S} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},E.map((B,q)=>{var X;let[ve,De]=B.split("-");return j.length?L.createElement("ol",{key:B,dir:y==="auto"?$h():y,tabIndex:-1,ref:_,className:a,"data-sonner-toaster":!0,"data-theme":Y,"data-y-position":ve,"data-lifted":D&&j.length>1&&!s,"data-x-position":De,style:{"--front-toast-height":`${((X=T[0])==null?void 0:X.height)||0}px`,"--width":`${kk}px`,"--gap":`${g}px`,...h,...Pk(l,u)},onBlur:ee=>{z.current&&!ee.currentTarget.contains(ee.relatedTarget)&&(z.current=!1,R.current&&(R.current.focus({preventScroll:!0}),R.current=null))},onFocus:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||z.current||(z.current=!0,R.current=ee.relatedTarget)},onMouseEnter:()=>O(!0),onMouseMove:()=>O(!0),onMouseLeave:()=>{K||O(!1)},onDragEnd:()=>O(!1),onPointerDown:ee=>{ee.target instanceof HTMLElement&&ee.target.dataset.dismissible==="false"||I(!0)},onPointerUp:()=>I(!1)},j.filter(ee=>!ee.position&&q===0||ee.position===B).map((ee,$r)=>{var yn,dr;return L.createElement(Nk,{key:ee.id,icons:v,index:$r,toast:ee,defaultRichColors:f,duration:(yn=m==null?void 0:m.duration)!=null?yn:p,className:m==null?void 0:m.className,descriptionClassName:m==null?void 0:m.descriptionClassName,invert:n,visibleToasts:b,closeButton:(dr=m==null?void 0:m.closeButton)!=null?dr:o,interacting:K,position:B,style:m==null?void 0:m.style,unstyled:m==null?void 0:m.unstyled,classNames:m==null?void 0:m.classNames,cancelButtonStyle:m==null?void 0:m.cancelButtonStyle,actionButtonStyle:m==null?void 0:m.actionButtonStyle,removeToast:U,toasts:j.filter(wn=>wn.position==ee.position),heights:T.filter(wn=>wn.position==ee.position),setHeights:A,expandByDefault:s,gap:g,loadingIcon:x,expanded:D,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const Ak=({...e})=>{const{theme:t="system"}=rk();return c.jsx(Rk,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},Mk=["top","right","bottom","left"],nr=Math.min,it=Math.max,Ua=Math.round,Wo=Math.floor,Qt=e=>({x:e,y:e}),Lk={left:"right",right:"left",bottom:"top",top:"bottom"},Dk={start:"end",end:"start"};function Vu(e,t,n){return it(e,nr(t,n))}function mn(e,t){return typeof e=="function"?e(t):e}function gn(e){return e.split("-")[0]}function Ui(e){return e.split("-")[1]}function yf(e){return e==="x"?"y":"x"}function wf(e){return e==="y"?"height":"width"}const Ok=new Set(["top","bottom"]);function Kt(e){return Ok.has(gn(e))?"y":"x"}function bf(e){return yf(Kt(e))}function Ik(e,t,n){n===void 0&&(n=!1);const r=Ui(e),i=bf(e),s=wf(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=Wa(o)),[o,Wa(o)]}function zk(e){const t=Wa(e);return[_u(e),t,_u(t)]}function _u(e){return e.replace(/start|end/g,t=>Dk[t])}const Uh=["left","right"],Wh=["right","left"],Fk=["top","bottom"],Vk=["bottom","top"];function _k(e,t,n){switch(e){case"top":case"bottom":return n?t?Wh:Uh:t?Uh:Wh;case"left":case"right":return t?Fk:Vk;default:return[]}}function Bk(e,t,n,r){const i=Ui(e);let s=_k(gn(e),n==="start",r);return i&&(s=s.map(o=>o+"-"+i),t&&(s=s.concat(s.map(_u)))),s}function Wa(e){return e.replace(/left|right|bottom|top/g,t=>Lk[t])}function $k(e){return{top:0,right:0,bottom:0,left:0,...e}}function Kv(e){return typeof e!="number"?$k(e):{top:e,right:e,bottom:e,left:e}}function Ha(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Hh(e,t,n){let{reference:r,floating:i}=e;const s=Kt(t),o=bf(t),a=wf(o),l=gn(t),u=s==="y",d=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,p=r[a]/2-i[a]/2;let h;switch(l){case"top":h={x:d,y:r.y-i.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:f};break;case"left":h={x:r.x-i.width,y:f};break;default:h={x:r.x,y:r.y}}switch(Ui(t)){case"start":h[o]-=p*(n&&u?-1:1);break;case"end":h[o]+=p*(n&&u?-1:1);break}return h}const Uk=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let u=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:f}=Hh(u,r,l),p=r,h={},b=0;for(let m=0;m<a.length;m++){const{name:y,fn:g}=a[m],{x,y:v,data:S,reset:k}=await g({x:d,y:f,initialPlacement:r,placement:p,strategy:i,middlewareData:h,rects:u,platform:o,elements:{reference:e,floating:t}});d=x??d,f=v??f,h={...h,[y]:{...h[y],...S}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(p=k.placement),k.rects&&(u=k.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):k.rects),{x:d,y:f}=Hh(u,p,l)),m=-1)}return{x:d,y:f,placement:p,strategy:i,middlewareData:h}};async function Gs(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:o,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:h=0}=mn(t,e),b=Kv(h),y=a[p?f==="floating"?"reference":"floating":f],g=Ha(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),x=f==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),S=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},k=Ha(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:v,strategy:l}):x);return{top:(g.top-k.top+b.top)/S.y,bottom:(k.bottom-g.bottom+b.bottom)/S.y,left:(g.left-k.left+b.left)/S.x,right:(k.right-g.right+b.right)/S.x}}const Wk=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:s,platform:o,elements:a,middlewareData:l}=t,{element:u,padding:d=0}=mn(e,t)||{};if(u==null)return{};const f=Kv(d),p={x:n,y:r},h=bf(i),b=wf(h),m=await o.getDimensions(u),y=h==="y",g=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",S=s.reference[b]+s.reference[h]-p[h]-s.floating[b],k=p[h]-s.reference[h],j=await(o.getOffsetParent==null?void 0:o.getOffsetParent(u));let C=j?j[v]:0;(!C||!await(o.isElement==null?void 0:o.isElement(j)))&&(C=a.floating[v]||s.floating[b]);const E=S/2-k/2,T=C/2-m[b]/2-1,A=nr(f[g],T),D=nr(f[x],T),O=A,K=C-m[b]-D,I=C/2-m[b]/2+E,Y=Vu(O,I,K),$=!l.arrow&&Ui(i)!=null&&I!==Y&&s.reference[b]/2-(I<O?A:D)-m[b]/2<0,_=$?I<O?I-O:I-K:0;return{[h]:p[h]+_,data:{[h]:Y,centerOffset:I-Y-_,...$&&{alignmentOffset:_}},reset:$}}}),Hk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:m=!0,...y}=mn(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const g=gn(i),x=Kt(a),v=gn(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=p||(v||!m?[Wa(a)]:zk(a)),j=b!=="none";!p&&j&&k.push(...Bk(a,m,b,S));const C=[a,...k],E=await Gs(t,y),T=[];let A=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&T.push(E[g]),f){const I=Ik(i,o,S);T.push(E[I[0]],E[I[1]])}if(A=[...A,{placement:i,overflows:T}],!T.every(I=>I<=0)){var D,O;const I=(((D=s.flip)==null?void 0:D.index)||0)+1,Y=C[I];if(Y&&(!(f==="alignment"?x!==Kt(Y):!1)||A.every(N=>N.overflows[0]>0&&Kt(N.placement)===x)))return{data:{index:I,overflows:A},reset:{placement:Y}};let $=(O=A.filter(_=>_.overflows[0]<=0).sort((_,N)=>_.overflows[1]-N.overflows[1])[0])==null?void 0:O.placement;if(!$)switch(h){case"bestFit":{var K;const _=(K=A.filter(N=>{if(j){const R=Kt(N.placement);return R===x||R==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(R=>R>0).reduce((R,z)=>R+z,0)]).sort((N,R)=>N[1]-R[1])[0])==null?void 0:K[0];_&&($=_);break}case"initialPlacement":$=a;break}if(i!==$)return{reset:{placement:$}}}return{}}}};function Gh(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Kh(e){return Mk.some(t=>e[t]>=0)}const Gk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=mn(e,t);switch(r){case"referenceHidden":{const s=await Gs(t,{...i,elementContext:"reference"}),o=Gh(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:Kh(o)}}}case"escaped":{const s=await Gs(t,{...i,altBoundary:!0}),o=Gh(s,n.floating);return{data:{escapedOffsets:o,escaped:Kh(o)}}}default:return{}}}}},Yv=new Set(["left","top"]);async function Kk(e,t){const{placement:n,platform:r,elements:i}=e,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=gn(n),a=Ui(n),l=Kt(n)==="y",u=Yv.has(o)?-1:1,d=s&&l?-1:1,f=mn(t,e);let{mainAxis:p,crossAxis:h,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof b=="number"&&(h=a==="end"?b*-1:b),l?{x:h*d,y:p*u}:{x:p*u,y:h*d}}const Yk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:s,placement:o,middlewareData:a}=t,l=await Kk(t,e);return o===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:o}}}}},qk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:y=>{let{x:g,y:x}=y;return{x:g,y:x}}},...l}=mn(e,t),u={x:n,y:r},d=await Gs(t,l),f=Kt(gn(i)),p=yf(f);let h=u[p],b=u[f];if(s){const y=p==="y"?"top":"left",g=p==="y"?"bottom":"right",x=h+d[y],v=h-d[g];h=Vu(x,h,v)}if(o){const y=f==="y"?"top":"left",g=f==="y"?"bottom":"right",x=b+d[y],v=b-d[g];b=Vu(x,b,v)}const m=a.fn({...t,[p]:h,[f]:b});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[p]:s,[f]:o}}}}}},Qk=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:s,middlewareData:o}=t,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=mn(e,t),d={x:n,y:r},f=Kt(i),p=yf(f);let h=d[p],b=d[f];const m=mn(a,t),y=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const v=p==="y"?"height":"width",S=s.reference[p]-s.floating[v]+y.mainAxis,k=s.reference[p]+s.reference[v]-y.mainAxis;h<S?h=S:h>k&&(h=k)}if(u){var g,x;const v=p==="y"?"width":"height",S=Yv.has(gn(i)),k=s.reference[f]-s.floating[v]+(S&&((g=o.offset)==null?void 0:g[f])||0)+(S?0:y.crossAxis),j=s.reference[f]+s.reference[v]+(S?0:((x=o.offset)==null?void 0:x[f])||0)-(S?y.crossAxis:0);b<k?b=k:b>j&&(b=j)}return{[p]:h,[f]:b}}}},Xk=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:s,platform:o,elements:a}=t,{apply:l=()=>{},...u}=mn(e,t),d=await Gs(t,u),f=gn(i),p=Ui(i),h=Kt(i)==="y",{width:b,height:m}=s.floating;let y,g;f==="top"||f==="bottom"?(y=f,g=p===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(g=f,y=p==="end"?"top":"bottom");const x=m-d.top-d.bottom,v=b-d.left-d.right,S=nr(m-d[y],x),k=nr(b-d[g],v),j=!t.middlewareData.shift;let C=S,E=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(E=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=x),j&&!p){const A=it(d.left,0),D=it(d.right,0),O=it(d.top,0),K=it(d.bottom,0);h?E=b-2*(A!==0||D!==0?A+D:it(d.left,d.right)):C=m-2*(O!==0||K!==0?O+K:it(d.top,d.bottom))}await l({...t,availableWidth:E,availableHeight:C});const T=await o.getDimensions(a.floating);return b!==T.width||m!==T.height?{reset:{rects:!0}}:{}}}};function kl(){return typeof window<"u"}function Wi(e){return qv(e)?(e.nodeName||"").toLowerCase():"#document"}function at(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function tn(e){var t;return(t=(qv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qv(e){return kl()?e instanceof Node||e instanceof at(e).Node:!1}function Vt(e){return kl()?e instanceof Element||e instanceof at(e).Element:!1}function Jt(e){return kl()?e instanceof HTMLElement||e instanceof at(e).HTMLElement:!1}function Yh(e){return!kl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof at(e).ShadowRoot}const Zk=new Set(["inline","contents"]);function po(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=_t(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Zk.has(i)}const Jk=new Set(["table","td","th"]);function ej(e){return Jk.has(Wi(e))}const tj=[":popover-open",":modal"];function jl(e){return tj.some(t=>{try{return e.matches(t)}catch{return!1}})}const nj=["transform","translate","scale","rotate","perspective"],rj=["transform","translate","scale","rotate","perspective","filter"],ij=["paint","layout","strict","content"];function Sf(e){const t=kf(),n=Vt(e)?_t(e):e;return nj.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||rj.some(r=>(n.willChange||"").includes(r))||ij.some(r=>(n.contain||"").includes(r))}function sj(e){let t=rr(e);for(;Jt(t)&&!Oi(t);){if(Sf(t))return t;if(jl(t))return null;t=rr(t)}return null}function kf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const oj=new Set(["html","body","#document"]);function Oi(e){return oj.has(Wi(e))}function _t(e){return at(e).getComputedStyle(e)}function Cl(e){return Vt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rr(e){if(Wi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Yh(e)&&e.host||tn(e);return Yh(t)?t.host:t}function Qv(e){const t=rr(e);return Oi(t)?e.ownerDocument?e.ownerDocument.body:e.body:Jt(t)&&po(t)?t:Qv(t)}function Ks(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Qv(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),o=at(i);if(s){const a=Bu(o);return t.concat(o,o.visualViewport||[],po(i)?i:[],a&&n?Ks(a):[])}return t.concat(i,Ks(i,[],n))}function Bu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xv(e){const t=_t(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Jt(e),s=i?e.offsetWidth:n,o=i?e.offsetHeight:r,a=Ua(n)!==s||Ua(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function jf(e){return Vt(e)?e:e.contextElement}function vi(e){const t=jf(e);if(!Jt(t))return Qt(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:s}=Xv(t);let o=(s?Ua(n.width):n.width)/r,a=(s?Ua(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const aj=Qt(0);function Zv(e){const t=at(e);return!kf()||!t.visualViewport?aj:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function lj(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==at(e)?!1:t}function zr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=jf(e);let o=Qt(1);t&&(r?Vt(r)&&(o=vi(r)):o=vi(e));const a=lj(s,n,r)?Zv(s):Qt(0);let l=(i.left+a.x)/o.x,u=(i.top+a.y)/o.y,d=i.width/o.x,f=i.height/o.y;if(s){const p=at(s),h=r&&Vt(r)?at(r):r;let b=p,m=Bu(b);for(;m&&r&&h!==b;){const y=vi(m),g=m.getBoundingClientRect(),x=_t(m),v=g.left+(m.clientLeft+parseFloat(x.paddingLeft))*y.x,S=g.top+(m.clientTop+parseFloat(x.paddingTop))*y.y;l*=y.x,u*=y.y,d*=y.x,f*=y.y,l+=v,u+=S,b=at(m),m=Bu(b)}}return Ha({width:d,height:f,x:l,y:u})}function Cf(e,t){const n=Cl(e).scrollLeft;return t?t.left+n:zr(tn(e)).left+n}function Jv(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:Cf(e,r)),s=r.top+t.scrollTop;return{x:i,y:s}}function cj(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const s=i==="fixed",o=tn(r),a=t?jl(t.floating):!1;if(r===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},u=Qt(1);const d=Qt(0),f=Jt(r);if((f||!f&&!s)&&((Wi(r)!=="body"||po(o))&&(l=Cl(r)),Jt(r))){const h=zr(r);u=vi(r),d.x=h.x+r.clientLeft,d.y=h.y+r.clientTop}const p=o&&!f&&!s?Jv(o,l,!0):Qt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-l.scrollTop*u.y+d.y+p.y}}function uj(e){return Array.from(e.getClientRects())}function dj(e){const t=tn(e),n=Cl(e),r=e.ownerDocument.body,i=it(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=it(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+Cf(e);const a=-n.scrollTop;return _t(r).direction==="rtl"&&(o+=it(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:a}}function fj(e,t){const n=at(e),r=tn(e),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;const u=kf();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a,y:l}}const pj=new Set(["absolute","fixed"]);function hj(e,t){const n=zr(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,s=Jt(e)?vi(e):Qt(1),o=e.clientWidth*s.x,a=e.clientHeight*s.y,l=i*s.x,u=r*s.y;return{width:o,height:a,x:l,y:u}}function qh(e,t,n){let r;if(t==="viewport")r=fj(e,n);else if(t==="document")r=dj(tn(e));else if(Vt(t))r=hj(t,n);else{const i=Zv(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ha(r)}function ey(e,t){const n=rr(e);return n===t||!Vt(n)||Oi(n)?!1:_t(n).position==="fixed"||ey(n,t)}function mj(e,t){const n=t.get(e);if(n)return n;let r=Ks(e,[],!1).filter(a=>Vt(a)&&Wi(a)!=="body"),i=null;const s=_t(e).position==="fixed";let o=s?rr(e):e;for(;Vt(o)&&!Oi(o);){const a=_t(o),l=Sf(o);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&pj.has(i.position)||po(o)&&!l&&ey(e,o))?r=r.filter(d=>d!==o):i=a,o=rr(o)}return t.set(e,r),r}function gj(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?jl(t)?[]:mj(t,this._c):[].concat(n),r],a=o[0],l=o.reduce((u,d)=>{const f=qh(t,d,i);return u.top=it(f.top,u.top),u.right=nr(f.right,u.right),u.bottom=nr(f.bottom,u.bottom),u.left=it(f.left,u.left),u},qh(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xj(e){const{width:t,height:n}=Xv(e);return{width:t,height:n}}function vj(e,t,n){const r=Jt(t),i=tn(t),s=n==="fixed",o=zr(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=Qt(0);function u(){l.x=Cf(i)}if(r||!r&&!s)if((Wi(t)!=="body"||po(i))&&(a=Cl(t)),r){const h=zr(t,!0,s,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else i&&u();s&&!r&&i&&u();const d=i&&!r&&!s?Jv(i,a):Qt(0),f=o.left+a.scrollLeft-l.x-d.x,p=o.top+a.scrollTop-l.y-d.y;return{x:f,y:p,width:o.width,height:o.height}}function xc(e){return _t(e).position==="static"}function Qh(e,t){if(!Jt(e)||_t(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return tn(e)===n&&(n=n.ownerDocument.body),n}function ty(e,t){const n=at(e);if(jl(e))return n;if(!Jt(e)){let i=rr(e);for(;i&&!Oi(i);){if(Vt(i)&&!xc(i))return i;i=rr(i)}return n}let r=Qh(e,t);for(;r&&ej(r)&&xc(r);)r=Qh(r,t);return r&&Oi(r)&&xc(r)&&!Sf(r)?n:r||sj(e)||n}const yj=async function(e){const t=this.getOffsetParent||ty,n=this.getDimensions,r=await n(e.floating);return{reference:vj(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function wj(e){return _t(e).direction==="rtl"}const bj={convertOffsetParentRelativeRectToViewportRelativeRect:cj,getDocumentElement:tn,getClippingRect:gj,getOffsetParent:ty,getElementRects:yj,getClientRects:uj,getDimensions:xj,getScale:vi,isElement:Vt,isRTL:wj};function ny(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Sj(e,t){let n=null,r;const i=tn(e);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const u=e.getBoundingClientRect(),{left:d,top:f,width:p,height:h}=u;if(a||t(),!p||!h)return;const b=Wo(f),m=Wo(i.clientWidth-(d+p)),y=Wo(i.clientHeight-(f+h)),g=Wo(d),v={rootMargin:-b+"px "+-m+"px "+-y+"px "+-g+"px",threshold:it(0,nr(1,l))||1};let S=!0;function k(j){const C=j[0].intersectionRatio;if(C!==l){if(!S)return o();C?o(!1,C):r=setTimeout(()=>{o(!1,1e-7)},1e3)}C===1&&!ny(u,e.getBoundingClientRect())&&o(),S=!1}try{n=new IntersectionObserver(k,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(k,v)}n.observe(e)}return o(!0),s}function kj(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=jf(e),d=i||s?[...u?Ks(u):[],...Ks(t)]:[];d.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const f=u&&a?Sj(u,n):null;let p=-1,h=null;o&&(h=new ResizeObserver(g=>{let[x]=g;x&&x.target===u&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var v;(v=h)==null||v.observe(t)})),n()}),u&&!l&&h.observe(u),h.observe(t));let b,m=l?zr(e):null;l&&y();function y(){const g=zr(e);m&&!ny(m,g)&&n(),m=g,b=requestAnimationFrame(y)}return n(),()=>{var g;d.forEach(x=>{i&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),f==null||f(),(g=h)==null||g.disconnect(),h=null,l&&cancelAnimationFrame(b)}}const jj=Yk,Cj=qk,Ej=Hk,Tj=Xk,Nj=Gk,Xh=Wk,Pj=Qk,Rj=(e,t,n)=>{const r=new Map,i={platform:bj,...n},s={...i.platform,_c:r};return Uk(e,t,{...i,platform:s})};var Aj=typeof document<"u",Mj=function(){},fa=Aj?w.useLayoutEffect:Mj;function Ga(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Ga(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const s=i[r];if(!(s==="_owner"&&e.$$typeof)&&!Ga(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function ry(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Zh(e,t){const n=ry(e);return Math.round(t*n)/n}function vc(e){const t=w.useRef(e);return fa(()=>{t.current=e}),t}function Lj(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:u}=e,[d,f]=w.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=w.useState(r);Ga(p,r)||h(r);const[b,m]=w.useState(null),[y,g]=w.useState(null),x=w.useCallback(N=>{N!==j.current&&(j.current=N,m(N))},[]),v=w.useCallback(N=>{N!==C.current&&(C.current=N,g(N))},[]),S=s||b,k=o||y,j=w.useRef(null),C=w.useRef(null),E=w.useRef(d),T=l!=null,A=vc(l),D=vc(i),O=vc(u),K=w.useCallback(()=>{if(!j.current||!C.current)return;const N={placement:t,strategy:n,middleware:p};D.current&&(N.platform=D.current),Rj(j.current,C.current,N).then(R=>{const z={...R,isPositioned:O.current!==!1};I.current&&!Ga(E.current,z)&&(E.current=z,uo.flushSync(()=>{f(z)}))})},[p,t,n,D,O]);fa(()=>{u===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,f(N=>({...N,isPositioned:!1})))},[u]);const I=w.useRef(!1);fa(()=>(I.current=!0,()=>{I.current=!1}),[]),fa(()=>{if(S&&(j.current=S),k&&(C.current=k),S&&k){if(A.current)return A.current(S,k,K);K()}},[S,k,K,A,T]);const Y=w.useMemo(()=>({reference:j,floating:C,setReference:x,setFloating:v}),[x,v]),$=w.useMemo(()=>({reference:S,floating:k}),[S,k]),_=w.useMemo(()=>{const N={position:n,left:0,top:0};if(!$.floating)return N;const R=Zh($.floating,d.x),z=Zh($.floating,d.y);return a?{...N,transform:"translate("+R+"px, "+z+"px)",...ry($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:R,top:z}},[n,a,$.floating,d.x,d.y]);return w.useMemo(()=>({...d,update:K,refs:Y,elements:$,floatingStyles:_}),[d,K,Y,$,_])}const Dj=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Xh({element:r.current,padding:i}).fn(n):{}:r?Xh({element:r,padding:i}).fn(n):{}}}},Oj=(e,t)=>({...jj(e),options:[e,t]}),Ij=(e,t)=>({...Cj(e),options:[e,t]}),zj=(e,t)=>({...Pj(e),options:[e,t]}),Fj=(e,t)=>({...Ej(e),options:[e,t]}),Vj=(e,t)=>({...Tj(e),options:[e,t]}),_j=(e,t)=>({...Nj(e),options:[e,t]}),Bj=(e,t)=>({...Dj(e),options:[e,t]});var $j="Arrow",iy=w.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...s}=e;return c.jsx(nt.svg,{...s,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:c.jsx("polygon",{points:"0,0 30,0 15,10"})})});iy.displayName=$j;var Uj=iy;function Wj(e){const[t,n]=w.useState(void 0);return tr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const s=i[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,u=Array.isArray(l)?l[0]:l;o=u.inlineSize,a=u.blockSize}else o=e.offsetWidth,a=e.offsetHeight;n({width:o,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var sy="Popper",[oy,ay]=wl(sy),[oA,ly]=oy(sy),cy="PopperAnchor",uy=w.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,s=ly(cy,n),o=w.useRef(null),a=Ft(t,o);return w.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||o.current)}),r?null:c.jsx(nt.div,{...i,ref:a})});uy.displayName=cy;var Ef="PopperContent",[Hj,Gj]=oy(Ef),dy=w.forwardRef((e,t)=>{var ee,$r,yn,dr,wn,Ur;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:p=!1,updatePositionStrategy:h="optimized",onPlaced:b,...m}=e,y=ly(Ef,n),[g,x]=w.useState(null),v=Ft(t,bn=>x(bn)),[S,k]=w.useState(null),j=Wj(S),C=(j==null?void 0:j.width)??0,E=(j==null?void 0:j.height)??0,T=r+(s!=="center"?"-"+s:""),A=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},D=Array.isArray(u)?u:[u],O=D.length>0,K={padding:A,boundary:D.filter(Yj),altBoundary:O},{refs:I,floatingStyles:Y,placement:$,isPositioned:_,middlewareData:N}=Lj({strategy:"fixed",placement:T,whileElementsMounted:(...bn)=>kj(...bn,{animationFrame:h==="always"}),elements:{reference:y.anchor},middleware:[Oj({mainAxis:i+E,alignmentAxis:o}),l&&Ij({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?zj():void 0,...K}),l&&Fj({...K}),Vj({...K,apply:({elements:bn,rects:wo,availableWidth:Il,availableHeight:bo})=>{const{width:zl,height:qi}=wo.reference,Wr=bn.floating.style;Wr.setProperty("--radix-popper-available-width",`${Il}px`),Wr.setProperty("--radix-popper-available-height",`${bo}px`),Wr.setProperty("--radix-popper-anchor-width",`${zl}px`),Wr.setProperty("--radix-popper-anchor-height",`${qi}px`)}}),S&&Bj({element:S,padding:a}),qj({arrowWidth:C,arrowHeight:E}),p&&_j({strategy:"referenceHidden",...K})]}),[R,z]=hy($),U=er(b);tr(()=>{_&&(U==null||U())},[_,U]);const B=(ee=N.arrow)==null?void 0:ee.x,q=($r=N.arrow)==null?void 0:$r.y,X=((yn=N.arrow)==null?void 0:yn.centerOffset)!==0,[ve,De]=w.useState();return tr(()=>{g&&De(window.getComputedStyle(g).zIndex)},[g]),c.jsx("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:_?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ve,"--radix-popper-transform-origin":[(dr=N.transformOrigin)==null?void 0:dr.x,(wn=N.transformOrigin)==null?void 0:wn.y].join(" "),...((Ur=N.hide)==null?void 0:Ur.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:c.jsx(Hj,{scope:n,placedSide:R,onArrowChange:k,arrowX:B,arrowY:q,shouldHideArrow:X,children:c.jsx(nt.div,{"data-side":R,"data-align":z,...m,ref:v,style:{...m.style,animation:_?void 0:"none"}})})})});dy.displayName=Ef;var fy="PopperArrow",Kj={top:"bottom",right:"left",bottom:"top",left:"right"},py=w.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,s=Gj(fy,r),o=Kj[s.placedSide];return c.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:c.jsx(Uj,{...i,ref:n,style:{...i.style,display:"block"}})})});py.displayName=fy;function Yj(e){return e!==null}var qj=e=>({name:"transformOrigin",options:e,fn(t){var y,g,x;const{placement:n,rects:r,middlewareData:i}=t,o=((y=i.arrow)==null?void 0:y.centerOffset)!==0,a=o?0:e.arrowWidth,l=o?0:e.arrowHeight,[u,d]=hy(n),f={start:"0%",center:"50%",end:"100%"}[d],p=(((g=i.arrow)==null?void 0:g.x)??0)+a/2,h=(((x=i.arrow)==null?void 0:x.y)??0)+l/2;let b="",m="";return u==="bottom"?(b=o?f:`${p}px`,m=`${-l}px`):u==="top"?(b=o?f:`${p}px`,m=`${r.floating.height+l}px`):u==="right"?(b=`${-l}px`,m=o?f:`${h}px`):u==="left"&&(b=`${r.floating.width+l}px`,m=o?f:`${h}px`),{data:{x:b,y:m}}}});function hy(e){const[t,n="center"]=e.split("-");return[t,n]}var Qj=uy,Xj=dy,Zj=py,[El,aA]=wl("Tooltip",[ay]),Tf=ay(),my="TooltipProvider",Jj=700,Jh="tooltip.open",[eC,gy]=El(my),xy=e=>{const{__scopeTooltip:t,delayDuration:n=Jj,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:s}=e,o=w.useRef(!0),a=w.useRef(!1),l=w.useRef(0);return w.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),c.jsx(eC,{scope:t,isOpenDelayedRef:o,delayDuration:n,onOpen:w.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:w.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:w.useCallback(u=>{a.current=u},[]),disableHoverableContent:i,children:s})};xy.displayName=my;var vy="Tooltip",[lA,Tl]=El(vy),$u="TooltipTrigger",tC=w.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Tl($u,n),s=gy($u,n),o=Tf(n),a=w.useRef(null),l=Ft(t,a,i.onTriggerChange),u=w.useRef(!1),d=w.useRef(!1),f=w.useCallback(()=>u.current=!1,[]);return w.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),c.jsx(Qj,{asChild:!0,...o,children:c.jsx(nt.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:Ce(e.onPointerMove,p=>{p.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:Ce(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:Ce(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:Ce(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:Ce(e.onBlur,i.onClose),onClick:Ce(e.onClick,i.onClose)})})});tC.displayName=$u;var nC="TooltipPortal",[cA,rC]=El(nC,{forceMount:void 0}),Ii="TooltipContent",yy=w.forwardRef((e,t)=>{const n=rC(Ii,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...s}=e,o=Tl(Ii,e.__scopeTooltip);return c.jsx(ff,{present:r||o.open,children:o.disableHoverableContent?c.jsx(wy,{side:i,...s,ref:t}):c.jsx(iC,{side:i,...s,ref:t})})}),iC=w.forwardRef((e,t)=>{const n=Tl(Ii,e.__scopeTooltip),r=gy(Ii,e.__scopeTooltip),i=w.useRef(null),s=Ft(t,i),[o,a]=w.useState(null),{trigger:l,onClose:u}=n,d=i.current,{onPointerInTransitChange:f}=r,p=w.useCallback(()=>{a(null),f(!1)},[f]),h=w.useCallback((b,m)=>{const y=b.currentTarget,g={x:b.clientX,y:b.clientY},x=cC(g,y.getBoundingClientRect()),v=uC(g,x),S=dC(m.getBoundingClientRect()),k=pC([...v,...S]);a(k),f(!0)},[f]);return w.useEffect(()=>()=>p(),[p]),w.useEffect(()=>{if(l&&d){const b=y=>h(y,d),m=y=>h(y,l);return l.addEventListener("pointerleave",b),d.addEventListener("pointerleave",m),()=>{l.removeEventListener("pointerleave",b),d.removeEventListener("pointerleave",m)}}},[l,d,h,p]),w.useEffect(()=>{if(o){const b=m=>{const y=m.target,g={x:m.clientX,y:m.clientY},x=(l==null?void 0:l.contains(y))||(d==null?void 0:d.contains(y)),v=!fC(g,o);x?p():v&&(p(),u())};return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)}},[l,d,o,u,p]),c.jsx(wy,{...e,ref:s})}),[sC,oC]=El(vy,{isInside:!1}),aC=x2("TooltipContent"),wy=w.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=e,l=Tl(Ii,n),u=Tf(n),{onClose:d}=l;return w.useEffect(()=>(document.addEventListener(Jh,d),()=>document.removeEventListener(Jh,d)),[d]),w.useEffect(()=>{if(l.trigger){const f=p=>{const h=p.target;h!=null&&h.contains(l.trigger)&&d()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,d]),c.jsx(df,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:f=>f.preventDefault(),onDismiss:d,children:c.jsxs(Xj,{"data-state":l.stateAttribute,...u,...a,ref:t,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(aC,{children:r}),c.jsx(sC,{scope:n,isInside:!0,children:c.jsx($2,{id:l.contentId,role:"tooltip",children:i||r})})]})})});yy.displayName=Ii;var by="TooltipArrow",lC=w.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Tf(n);return oC(by,n).isInside?null:c.jsx(Zj,{...i,...r,ref:t})});lC.displayName=by;function cC(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),s=Math.abs(t.left-e.x);switch(Math.min(n,r,i,s)){case s:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function uC(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function dC(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function fC(e,t){const{x:n,y:r}=e;let i=!1;for(let s=0,o=t.length-1;s<t.length;o=s++){const a=t[s],l=t[o],u=a.x,d=a.y,f=l.x,p=l.y;d>r!=p>r&&n<(f-u)*(r-d)/(p-d)+u&&(i=!i)}return i}function pC(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),hC(t)}function hC(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const s=t[t.length-1],o=t[t.length-2];if((s.x-o.x)*(i.y-o.y)>=(s.y-o.y)*(i.x-o.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(i.y-o.y)>=(s.y-o.y)*(i.x-o.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var mC=xy,Sy=yy;const gC=mC,xC=w.forwardRef(({className:e,sideOffset:t=4,...n},r)=>c.jsx(Sy,{ref:r,sideOffset:t,className:cr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));xC.displayName=Sy.displayName;var Nl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Pl=typeof window>"u"||"Deno"in globalThis;function Rt(){}function vC(e,t){return typeof e=="function"?e(t):e}function yC(e){return typeof e=="number"&&e>=0&&e!==1/0}function wC(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Uu(e,t){return typeof e=="function"?e(t):e}function bC(e,t){return typeof e=="function"?e(t):e}function em(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=e;if(o){if(r){if(t.queryHash!==Nf(o,t.options))return!1}else if(!qs(t.queryKey,o))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||i&&i!==t.state.fetchStatus||s&&!s(t))}function tm(e,t){const{exact:n,status:r,predicate:i,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(n){if(Ys(t.options.mutationKey)!==Ys(s))return!1}else if(!qs(t.options.mutationKey,s))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Nf(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ys)(e)}function Ys(e){return JSON.stringify(e,(t,n)=>Wu(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function qs(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>qs(e[n],t[n])):!1}function ky(e,t){if(e===t)return e;const n=nm(e)&&nm(t);if(n||Wu(e)&&Wu(t)){const r=n?e:Object.keys(e),i=r.length,s=n?t:Object.keys(t),o=s.length,a=n?[]:{},l=new Set(r);let u=0;for(let d=0;d<o;d++){const f=n?d:s[d];(!n&&l.has(f)||n)&&e[f]===void 0&&t[f]===void 0?(a[f]=void 0,u++):(a[f]=ky(e[f],t[f]),a[f]===e[f]&&e[f]!==void 0&&u++)}return i===o&&u===i?e:a}return t}function nm(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Wu(e){if(!rm(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!rm(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function rm(e){return Object.prototype.toString.call(e)==="[object Object]"}function SC(e){return new Promise(t=>{setTimeout(t,e)})}function kC(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?ky(e,t):t}function jC(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function CC(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Pf=Symbol();function jy(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Pf?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var kr,Dn,wi,Og,EC=(Og=class extends Nl{constructor(){super();J(this,kr);J(this,Dn);J(this,wi);H(this,wi,t=>{if(!Pl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){P(this,Dn)||this.setEventListener(P(this,wi))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,Dn))==null||t.call(this),H(this,Dn,void 0))}setEventListener(t){var n;H(this,wi,t),(n=P(this,Dn))==null||n.call(this),H(this,Dn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){P(this,kr)!==t&&(H(this,kr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof P(this,kr)=="boolean"?P(this,kr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},kr=new WeakMap,Dn=new WeakMap,wi=new WeakMap,Og),Cy=new EC,bi,On,Si,Ig,TC=(Ig=class extends Nl{constructor(){super();J(this,bi,!0);J(this,On);J(this,Si);H(this,Si,t=>{if(!Pl&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){P(this,On)||this.setEventListener(P(this,Si))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,On))==null||t.call(this),H(this,On,void 0))}setEventListener(t){var n;H(this,Si,t),(n=P(this,On))==null||n.call(this),H(this,On,t(this.setOnline.bind(this)))}setOnline(t){P(this,bi)!==t&&(H(this,bi,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return P(this,bi)}},bi=new WeakMap,On=new WeakMap,Si=new WeakMap,Ig),Ka=new TC;function NC(){let e,t;const n=new Promise((i,s)=>{e=i,t=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function PC(e){return Math.min(1e3*2**e,3e4)}function Ey(e){return(e??"online")==="online"?Ka.isOnline():!0}var Ty=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function yc(e){return e instanceof Ty}function Ny(e){let t=!1,n=0,r=!1,i;const s=NC(),o=m=>{var y;r||(p(new Ty(m)),(y=e.abort)==null||y.call(e))},a=()=>{t=!0},l=()=>{t=!1},u=()=>Cy.isFocused()&&(e.networkMode==="always"||Ka.isOnline())&&e.canRun(),d=()=>Ey(e.networkMode)&&e.canRun(),f=m=>{var y;r||(r=!0,(y=e.onSuccess)==null||y.call(e,m),i==null||i(),s.resolve(m))},p=m=>{var y;r||(r=!0,(y=e.onError)==null||y.call(e,m),i==null||i(),s.reject(m))},h=()=>new Promise(m=>{var y;i=g=>{(r||u())&&m(g)},(y=e.onPause)==null||y.call(e)}).then(()=>{var m;i=void 0,r||(m=e.onContinue)==null||m.call(e)}),b=()=>{if(r)return;let m;const y=n===0?e.initialPromise:void 0;try{m=y??e.fn()}catch(g){m=Promise.reject(g)}Promise.resolve(m).then(f).catch(g=>{var j;if(r)return;const x=e.retry??(Pl?0:3),v=e.retryDelay??PC,S=typeof v=="function"?v(n,g):v,k=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,g);if(t||!k){p(g);return}n++,(j=e.onFail)==null||j.call(e,n,g),SC(S).then(()=>u()?void 0:h()).then(()=>{t?p(g):b()})})};return{promise:s,cancel:o,continue:()=>(i==null||i(),s),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?b():h().then(b),s)}}var RC=e=>setTimeout(e,0);function AC(){let e=[],t=0,n=a=>{a()},r=a=>{a()},i=RC;const s=a=>{t?e.push(a):i(()=>{n(a)})},o=()=>{const a=e;e=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;t++;try{l=a()}finally{t--,t||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var We=AC(),jr,zg,Py=(zg=class{constructor(){J(this,jr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),yC(this.gcTime)&&H(this,jr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Pl?1/0:5*60*1e3))}clearGcTimeout(){P(this,jr)&&(clearTimeout(P(this,jr)),H(this,jr,void 0))}},jr=new WeakMap,zg),ki,Cr,pt,Er,Fe,ro,Tr,At,rn,Fg,MC=(Fg=class extends Py{constructor(t){super();J(this,At);J(this,ki);J(this,Cr);J(this,pt);J(this,Er);J(this,Fe);J(this,ro);J(this,Tr);H(this,Tr,!1),H(this,ro,t.defaultOptions),this.setOptions(t.options),this.observers=[],H(this,Er,t.client),H(this,pt,P(this,Er).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,H(this,ki,DC(this.options)),this.state=t.state??P(this,ki),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=P(this,Fe))==null?void 0:t.promise}setOptions(t){this.options={...P(this,ro),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&P(this,pt).remove(this)}setData(t,n){const r=kC(this.state.data,t,this.options);return Oe(this,At,rn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Oe(this,At,rn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=P(this,Fe))==null?void 0:r.promise;return(i=P(this,Fe))==null||i.cancel(t),n?n.then(Rt).catch(Rt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(P(this,ki))}isActive(){return this.observers.some(t=>bC(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Pf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Uu(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!wC(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=P(this,Fe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=P(this,Fe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),P(this,pt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(P(this,Fe)&&(P(this,Tr)?P(this,Fe).cancel({revert:!0}):P(this,Fe).cancelRetry()),this.scheduleGc()),P(this,pt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Oe(this,At,rn).call(this,{type:"invalidate"})}fetch(t,n){var u,d,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(P(this,Fe))return P(this,Fe).continueRetry(),P(this,Fe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(h=>h.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(H(this,Tr,!0),r.signal)})},s=()=>{const p=jy(this.options,n),b=(()=>{const m={client:P(this,Er),queryKey:this.queryKey,meta:this.meta};return i(m),m})();return H(this,Tr,!1),this.options.persister?this.options.persister(p,b,this):p(b)},a=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:P(this,Er),state:this.state,fetchFn:s};return i(p),p})();(u=this.options.behavior)==null||u.onFetch(a,this),H(this,Cr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&Oe(this,At,rn).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const l=p=>{var h,b,m,y;yc(p)&&p.silent||Oe(this,At,rn).call(this,{type:"error",error:p}),yc(p)||((b=(h=P(this,pt).config).onError)==null||b.call(h,p,this),(y=(m=P(this,pt).config).onSettled)==null||y.call(m,this.state.data,p,this)),this.scheduleGc()};return H(this,Fe,Ny({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var h,b,m,y;if(p===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(g){l(g);return}(b=(h=P(this,pt).config).onSuccess)==null||b.call(h,p,this),(y=(m=P(this,pt).config).onSettled)==null||y.call(m,p,this.state.error,this),this.scheduleGc()},onError:l,onFail:(p,h)=>{Oe(this,At,rn).call(this,{type:"failed",failureCount:p,error:h})},onPause:()=>{Oe(this,At,rn).call(this,{type:"pause"})},onContinue:()=>{Oe(this,At,rn).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),P(this,Fe).start()}},ki=new WeakMap,Cr=new WeakMap,pt=new WeakMap,Er=new WeakMap,Fe=new WeakMap,ro=new WeakMap,Tr=new WeakMap,At=new WeakSet,rn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...LC(r.data,this.options),fetchMeta:t.meta??null};case"success":return H(this,Cr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return yc(i)&&i.revert&&P(this,Cr)?{...P(this,Cr),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),We.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),P(this,pt).notify({query:this,type:"updated",action:t})})},Fg);function LC(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ey(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function DC(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ut,Vg,OC=(Vg=class extends Nl{constructor(t={}){super();J(this,Ut);this.config=t,H(this,Ut,new Map)}build(t,n,r){const i=n.queryKey,s=n.queryHash??Nf(i,n);let o=this.get(s);return o||(o=new MC({client:t,queryKey:i,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(o)),o}add(t){P(this,Ut).has(t.queryHash)||(P(this,Ut).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=P(this,Ut).get(t.queryHash);n&&(t.destroy(),n===t&&P(this,Ut).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){We.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return P(this,Ut).get(t)}getAll(){return[...P(this,Ut).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>em(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>em(t,r)):n}notify(t){We.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){We.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){We.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Ut=new WeakMap,Vg),Wt,$e,Nr,Ht,Nn,_g,IC=(_g=class extends Py{constructor(t){super();J(this,Ht);J(this,Wt);J(this,$e);J(this,Nr);this.mutationId=t.mutationId,H(this,$e,t.mutationCache),H(this,Wt,[]),this.state=t.state||zC(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){P(this,Wt).includes(t)||(P(this,Wt).push(t),this.clearGcTimeout(),P(this,$e).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){H(this,Wt,P(this,Wt).filter(n=>n!==t)),this.scheduleGc(),P(this,$e).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){P(this,Wt).length||(this.state.status==="pending"?this.scheduleGc():P(this,$e).remove(this))}continue(){var t;return((t=P(this,Nr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,o,a,l,u,d,f,p,h,b,m,y,g,x,v,S,k,j,C,E;const n=()=>{Oe(this,Ht,Nn).call(this,{type:"continue"})};H(this,Nr,Ny({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(T,A)=>{Oe(this,Ht,Nn).call(this,{type:"failed",failureCount:T,error:A})},onPause:()=>{Oe(this,Ht,Nn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>P(this,$e).canRun(this)}));const r=this.state.status==="pending",i=!P(this,Nr).canStart();try{if(r)n();else{Oe(this,Ht,Nn).call(this,{type:"pending",variables:t,isPaused:i}),await((o=(s=P(this,$e).config).onMutate)==null?void 0:o.call(s,t,this));const A=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));A!==this.state.context&&Oe(this,Ht,Nn).call(this,{type:"pending",context:A,variables:t,isPaused:i})}const T=await P(this,Nr).start();return await((d=(u=P(this,$e).config).onSuccess)==null?void 0:d.call(u,T,t,this.state.context,this)),await((p=(f=this.options).onSuccess)==null?void 0:p.call(f,T,t,this.state.context)),await((b=(h=P(this,$e).config).onSettled)==null?void 0:b.call(h,T,null,this.state.variables,this.state.context,this)),await((y=(m=this.options).onSettled)==null?void 0:y.call(m,T,null,t,this.state.context)),Oe(this,Ht,Nn).call(this,{type:"success",data:T}),T}catch(T){try{throw await((x=(g=P(this,$e).config).onError)==null?void 0:x.call(g,T,t,this.state.context,this)),await((S=(v=this.options).onError)==null?void 0:S.call(v,T,t,this.state.context)),await((j=(k=P(this,$e).config).onSettled)==null?void 0:j.call(k,void 0,T,this.state.variables,this.state.context,this)),await((E=(C=this.options).onSettled)==null?void 0:E.call(C,void 0,T,t,this.state.context)),T}finally{Oe(this,Ht,Nn).call(this,{type:"error",error:T})}}finally{P(this,$e).runNext(this)}}},Wt=new WeakMap,$e=new WeakMap,Nr=new WeakMap,Ht=new WeakSet,Nn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),We.batch(()=>{P(this,Wt).forEach(r=>{r.onMutationUpdate(t)}),P(this,$e).notify({mutation:this,type:"updated",action:t})})},_g);function zC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var an,Mt,io,Bg,FC=(Bg=class extends Nl{constructor(t={}){super();J(this,an);J(this,Mt);J(this,io);this.config=t,H(this,an,new Set),H(this,Mt,new Map),H(this,io,0)}build(t,n,r){const i=new IC({mutationCache:this,mutationId:++ko(this,io)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){P(this,an).add(t);const n=Ho(t);if(typeof n=="string"){const r=P(this,Mt).get(n);r?r.push(t):P(this,Mt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(P(this,an).delete(t)){const n=Ho(t);if(typeof n=="string"){const r=P(this,Mt).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&P(this,Mt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Ho(t);if(typeof n=="string"){const r=P(this,Mt).get(n),i=r==null?void 0:r.find(s=>s.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Ho(t);if(typeof n=="string"){const i=(r=P(this,Mt).get(n))==null?void 0:r.find(s=>s!==t&&s.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){We.batch(()=>{P(this,an).forEach(t=>{this.notify({type:"removed",mutation:t})}),P(this,an).clear(),P(this,Mt).clear()})}getAll(){return Array.from(P(this,an))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>tm(n,r))}findAll(t={}){return this.getAll().filter(n=>tm(t,n))}notify(t){We.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return We.batch(()=>Promise.all(t.map(n=>n.continue().catch(Rt))))}},an=new WeakMap,Mt=new WeakMap,io=new WeakMap,Bg);function Ho(e){var t;return(t=e.options.scope)==null?void 0:t.id}function im(e){return{onFetch:(t,n)=>{var d,f,p,h,b;const r=t.options,i=(p=(f=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:p.direction,s=((h=t.state.data)==null?void 0:h.pages)||[],o=((b=t.state.data)==null?void 0:b.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const u=async()=>{let m=!1;const y=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},g=jy(t.options,t.fetchOptions),x=async(v,S,k)=>{if(m)return Promise.reject();if(S==null&&v.pages.length)return Promise.resolve(v);const C=(()=>{const D={client:t.client,queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};return y(D),D})(),E=await g(C),{maxPages:T}=t.options,A=k?CC:jC;return{pages:A(v.pages,E,T),pageParams:A(v.pageParams,S,T)}};if(i&&s.length){const v=i==="backward",S=v?VC:sm,k={pages:s,pageParams:o},j=S(r,k);a=await x(k,j,v)}else{const v=e??s.length;do{const S=l===0?o[0]??r.initialPageParam:sm(r,a);if(l>0&&S==null)break;a=await x(a,S),l++}while(l<v)}return a};t.options.persister?t.fetchFn=()=>{var m,y;return(y=(m=t.options).persister)==null?void 0:y.call(m,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function sm(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function VC(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var me,In,zn,ji,Ci,Fn,Ei,Ti,$g,_C=($g=class{constructor(e={}){J(this,me);J(this,In);J(this,zn);J(this,ji);J(this,Ci);J(this,Fn);J(this,Ei);J(this,Ti);H(this,me,e.queryCache||new OC),H(this,In,e.mutationCache||new FC),H(this,zn,e.defaultOptions||{}),H(this,ji,new Map),H(this,Ci,new Map),H(this,Fn,0)}mount(){ko(this,Fn)._++,P(this,Fn)===1&&(H(this,Ei,Cy.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,me).onFocus())})),H(this,Ti,Ka.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,me).onOnline())})))}unmount(){var e,t;ko(this,Fn)._--,P(this,Fn)===0&&((e=P(this,Ei))==null||e.call(this),H(this,Ei,void 0),(t=P(this,Ti))==null||t.call(this),H(this,Ti,void 0))}isFetching(e){return P(this,me).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return P(this,In).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=P(this,me).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=P(this,me).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Uu(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return P(this,me).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=P(this,me).get(r.queryHash),s=i==null?void 0:i.state.data,o=vC(t,s);if(o!==void 0)return P(this,me).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return We.batch(()=>P(this,me).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=P(this,me).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=P(this,me);We.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=P(this,me);return We.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=We.batch(()=>P(this,me).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(Rt).catch(Rt)}invalidateQueries(e,t={}){return We.batch(()=>(P(this,me).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=We.batch(()=>P(this,me).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(Rt)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(Rt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=P(this,me).build(this,t);return n.isStaleByTime(Uu(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Rt).catch(Rt)}fetchInfiniteQuery(e){return e.behavior=im(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Rt).catch(Rt)}ensureInfiniteQueryData(e){return e.behavior=im(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ka.isOnline()?P(this,In).resumePausedMutations():Promise.resolve()}getQueryCache(){return P(this,me)}getMutationCache(){return P(this,In)}getDefaultOptions(){return P(this,zn)}setDefaultOptions(e){H(this,zn,e)}setQueryDefaults(e,t){P(this,ji).set(Ys(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...P(this,ji).values()],n={};return t.forEach(r=>{qs(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){P(this,Ci).set(Ys(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...P(this,Ci).values()],n={};return t.forEach(r=>{qs(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...P(this,zn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Nf(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Pf&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...P(this,zn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){P(this,me).clear(),P(this,In).clear()}},me=new WeakMap,In=new WeakMap,zn=new WeakMap,ji=new WeakMap,Ci=new WeakMap,Fn=new WeakMap,Ei=new WeakMap,Ti=new WeakMap,$g),BC=w.createContext(void 0),$C=({client:e,children:t})=>(w.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),c.jsx(BC.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qs(){return Qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qs.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const om="popstate";function UC(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Hu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ya(i)}return HC(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ry(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function WC(){return Math.random().toString(36).substr(2,8)}function am(e,t){return{usr:e.state,key:e.key,idx:t}}function Hu(e,t,n,r){return n===void 0&&(n=null),Qs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hi(t):t,{state:n,key:t&&t.key||r||WC()})}function Ya(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function HC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Bn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Qs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Bn.Pop;let y=d(),g=y==null?null:y-u;u=y,l&&l({action:a,location:m.location,delta:g})}function p(y,g){a=Bn.Push;let x=Hu(m.location,y,g);u=d()+1;let v=am(x,u),S=m.createHref(x);try{o.pushState(v,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}s&&l&&l({action:a,location:m.location,delta:1})}function h(y,g){a=Bn.Replace;let x=Hu(m.location,y,g);u=d();let v=am(x,u),S=m.createHref(x);o.replaceState(v,"",S),s&&l&&l({action:a,location:m.location,delta:0})}function b(y){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof y=="string"?y:Ya(y);return x=x.replace(/ $/,"%20"),Se(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let m={get action(){return a},get location(){return e(i,o)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(om,f),l=y,()=>{i.removeEventListener(om,f),l=null}},createHref(y){return t(i,y)},createURL:b,encodeLocation(y){let g=b(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(y){return o.go(y)}};return m}var lm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lm||(lm={}));function GC(e,t,n){return n===void 0&&(n="/"),KC(e,t,n,!1)}function KC(e,t,n,r){let i=typeof t=="string"?Hi(t):t,s=Rf(i.pathname||"/",n);if(s==null)return null;let o=Ay(e);YC(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=sE(s);a=rE(o[l],u,r)}return a}function Ay(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ay(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:tE(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of My(s.path))i(s,o,l)}),t}function My(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=My(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function YC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qC=/^:[\w-]+$/,QC=3,XC=2,ZC=1,JC=10,eE=-2,cm=e=>e==="*";function tE(e,t){let n=e.split("/"),r=n.length;return n.some(cm)&&(r+=eE),t&&(r+=XC),n.filter(i=>!cm(i)).reduce((i,s)=>i+(qC.test(s)?QC:s===""?ZC:JC),r)}function nE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rE(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=um({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=um({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Xn([s,f.pathname]),pathnameBase:cE(Xn([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Xn([s,f.pathnameBase]))}return o}function um(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=iE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let m=a[f]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}const b=a[f];return h&&!b?u[p]=void 0:u[p]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function iE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ry(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function sE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ry(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function oE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hi(e):e;return{pathname:n?n.startsWith("/")?n:aE(n,t):t,search:uE(r),hash:dE(i)}}function aE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ly(e,t){let n=lE(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hi(e):(i=Qs({},e),Se(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=oE(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),cE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Oy=["post","put","patch","delete"];new Set(Oy);const pE=["get",...Oy];new Set(pE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(this,arguments)}const Af=w.createContext(null),hE=w.createContext(null),_r=w.createContext(null),Rl=w.createContext(null),Br=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Iy=w.createContext(null);function mE(e,t){let{relative:n}=t===void 0?{}:t;ho()||Se(!1);let{basename:r,navigator:i}=w.useContext(_r),{hash:s,pathname:o,search:a}=Fy(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ho(){return w.useContext(Rl)!=null}function mo(){return ho()||Se(!1),w.useContext(Rl).location}function zy(e){w.useContext(_r).static||w.useLayoutEffect(e)}function gE(){let{isDataRoute:e}=w.useContext(Br);return e?PE():xE()}function xE(){ho()||Se(!1);let e=w.useContext(Af),{basename:t,future:n,navigator:r}=w.useContext(_r),{matches:i}=w.useContext(Br),{pathname:s}=mo(),o=JSON.stringify(Ly(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return zy(()=>{a.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Dy(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Xn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function Fy(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(_r),{matches:i}=w.useContext(Br),{pathname:s}=mo(),o=JSON.stringify(Ly(i,r.v7_relativeSplatPath));return w.useMemo(()=>Dy(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function vE(e,t){return yE(e,t)}function yE(e,t,n,r){ho()||Se(!1);let{navigator:i}=w.useContext(_r),{matches:s}=w.useContext(Br),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=mo(),d;if(t){var f;let y=typeof t=="string"?Hi(t):t;l==="/"||(f=y.pathname)!=null&&f.startsWith(l)||Se(!1),d=y}else d=u;let p=d.pathname||"/",h=p;if(l!=="/"){let y=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=GC(e,{pathname:h}),m=jE(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Xn([l,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Xn([l,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return t&&m?w.createElement(Rl.Provider,{value:{location:Xs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bn.Pop}},m):m}function wE(){let e=NE(),t=fE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const bE=w.createElement(wE,null);class SE extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Br.Provider,{value:this.props.routeContext},w.createElement(Iy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kE(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Af);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Br.Provider,{value:t},r)}function jE(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Se(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,b=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||b){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let h,b=!1,m=null,y=null;n&&(h=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||bE,l&&(u<0&&p===0?(b=!0,y=null):u===p&&(b=!0,y=f.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,p+1)),x=()=>{let v;return h?v=m:b?v=y:f.route.Component?v=w.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,w.createElement(kE,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(SE,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var Vy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vy||{}),qa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qa||{});function CE(e){let t=w.useContext(Af);return t||Se(!1),t}function EE(e){let t=w.useContext(hE);return t||Se(!1),t}function TE(e){let t=w.useContext(Br);return t||Se(!1),t}function _y(e){let t=TE(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function NE(){var e;let t=w.useContext(Iy),n=EE(qa.UseRouteError),r=_y(qa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function PE(){let{router:e}=CE(Vy.UseNavigateStable),t=_y(qa.UseNavigateStable),n=w.useRef(!1);return zy(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Xs({fromRouteId:t},s)))},[e,t])}function RE(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fs(e){Se(!1)}function AE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Bn.Pop,navigator:s,static:o=!1,future:a}=e;ho()&&Se(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:s,static:o,future:Xs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Hi(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:b="default"}=r,m=w.useMemo(()=>{let y=Rf(d,l);return y==null?null:{location:{pathname:y,search:f,hash:p,state:h,key:b},navigationType:i}},[l,d,f,p,h,b,i]);return m==null?null:w.createElement(_r.Provider,{value:u},w.createElement(Rl.Provider,{children:n,value:m}))}function ME(e){let{children:t,location:n}=e;return vE(Gu(t),n)}new Promise(()=>{});function Gu(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Gu(r.props.children,s));return}r.type!==fs&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ku.apply(this,arguments)}function LE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function DE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function OE(e,t){return e.button===0&&(!t||t==="_self")&&!DE(e)}const IE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zE="6";try{window.__reactRouterVersion=zE}catch{}const FE="startTransition",dm=e0[FE];function VE(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=UC({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&dm?dm(()=>l(f)):l(f)},[l,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.useEffect(()=>RE(r),[r]),w.createElement(AE,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const _E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$E=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,p=LE(t,IE),{basename:h}=w.useContext(_r),b,m=!1;if(typeof u=="string"&&BE.test(u)&&(b=u,_E))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),k=Rf(S.pathname,h);S.origin===v.origin&&k!=null?u=k+S.search+S.hash:m=!0}catch{}let y=mE(u,{relative:i}),g=UE(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function x(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",Ku({},p,{href:b||y,onClick:m||s?r:x,ref:n,target:l}))});var fm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fm||(fm={}));var pm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pm||(pm={}));function UE(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=gE(),u=mo(),d=Fy(e,{relative:o});return w.useCallback(f=>{if(OE(f,n)){f.preventDefault();let p=r!==void 0?r:Ya(u)===Ya(d);l(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,r,i,n,e,s,o,a])}const WE=["AÇÃO","RPG","AVENTURA","MUNDO ABERTO","TERROR","SIMULADOR","SOBREVIVÊNCIA","CORRIDA","ESPORTES","FPS","INDIE","VR","COOP","OUTROS"],HE=["Forza Horizon 6","Resident Evil Requiem","PRAGMATA","Black Myth","Grand Theft Auto V","Red Dead Redemption 2","Baldur's Gate 3","Cyberpunk 2077","ELDEN RING","Hogwarts Legacy"],GE={gta:["Grand Theft Auto"],rdr:["Red Dead Redemption"],rdr2:["Red Dead Redemption 2"],tlou:["The Last of Us"],cod:["Call of Duty"],gow:["God of War"],mhw:["Monster Hunter: World"],ds3:["Dark Souls III"],hzd:["Horizon Zero Dawn"],got:["Ghost of Tsushima"],bg3:["Baldur's Gate 3"]},KE={Forza:["horizon 6"],"Resident Evil":["requiem"],PRAGMATA:["pragmata"],"Black Myth":["wukong"],"Spider-Man":["remastered","spider-man remastered"],"The Last of Us":["part i","part 1"],"Red Dead":["redemption 2","rdr2"],"Dark Souls":["dark souls iii","dark souls 3"],"Monster Hunter":["world"],Horizon:["zero dawn"],"The Witcher":["witcher 3","wild hunt"],"Death Stranding":["director's cut","directors cut"],"Elden Ring":["elden ring"],Cyberpunk:["2077"],"Baldurs Gate":["gate 3","bg3"],GTA:["enhanced","grand theft auto v enhanced"]},YE=[{key:"forza horizon",franchise:"Forza"},{key:"forza",franchise:"Forza"},{key:"pragmata",franchise:"PRAGMATA"},{key:"black myth",franchise:"Black Myth"},{key:"resident evil",franchise:"Resident Evil"},{key:"spider-man",franchise:"Spider-Man"},{key:"spiderman",franchise:"Spider-Man"},{key:"last of us",franchise:"The Last of Us"},{key:"red dead",franchise:"Red Dead"},{key:"dark souls",franchise:"Dark Souls"},{key:"monster hunter",franchise:"Monster Hunter"},{key:"horizon",franchise:"Horizon"},{key:"witcher",franchise:"The Witcher"},{key:"death stranding",franchise:"Death Stranding"},{key:"elden ring",franchise:"Elden Ring"},{key:"cyberpunk",franchise:"Cyberpunk"},{key:"baldur",franchise:"Baldurs Gate"},{key:"gta",franchise:"GTA"},{key:"grand theft auto",franchise:"GTA"},{key:"sekiro",franchise:"Sekiro"},{key:"hogwarts",franchise:"Hogwarts"},{key:"hollow knight",franchise:"Hollow Knight"}];function qE(e){const t=e.toLowerCase();for(const{key:n,franchise:r}of YE)if(t.includes(n))return r;return null}function QE(e,t){const n=KE[t];if(!n)return!0;const r=e.toLowerCase();return n.some(i=>r.includes(i))}function XE(e){const t=new Map,n=[];for(const r of e){if(!r.cover||!r.steam_appid)continue;const i=qE(r.name);if(i){const s=t.get(i);QE(r.name,i)?t.set(i,r):s||t.set(i,r)}else n.push(r)}return[...t.values(),...n]}function ZE(e){if(!e.cover)return!1;const t=e.cover.toLowerCase();return!(t.includes("placeholder")||t.includes("default")||t===""||t.includes("missing"))}function By(){const[e,t]=w.useState([]),[n,r]=w.useState(!0);w.useEffect(()=>{fetch("/plano-vitalicio/data/games.json").then(a=>a.json()).then(a=>{const l=a.filter(ZE);t(l),r(!1)}).catch(a=>{console.error("Error loading games:",a),r(!1)})},[]);const i=w.useMemo(()=>{const a=[];for(const l of HE){const u=e.find(d=>d.cover&&d.steam_appid&&(d.name.toLowerCase().includes(l.toLowerCase())||l.toLowerCase().includes(d.name.toLowerCase())));u&&a.push(u)}return XE(a)},[e]),s=a=>{if(!a.trim())return e;const l=a.toLowerCase().trim();for(const[u,d]of Object.entries(GE))if(l.includes(u))return e.filter(f=>d.some(p=>f.name.toLowerCase().includes(p.toLowerCase())));return e.filter(u=>u.name.toLowerCase().includes(l))},o=a=>!a||a==="ALL"?e:e.filter(l=>l.categories.some(u=>u.toUpperCase()===a.toUpperCase()));return{games:e,aaaGames:i,loading:n,totalGames:e.length,searchGames:s,getGamesByCategory:o}}function JE({urgencyBarVisible:e=!1}){return c.jsxs("header",{className:"fixed inset-x-0 z-[1000] transition-all duration-300",style:{top:e?"48px":"0",background:"rgba(5,5,5,.72)",borderBottom:"1px solid rgba(255,255,255,.06)",backdropFilter:"blur(14px)"},children:[c.jsx("div",{className:"container-main",children:c.jsxs("nav",{className:"flex items-center justify-between py-3.5 gap-4",children:[c.jsxs("a",{href:"#",className:"flex items-center gap-0 font-black tracking-tight uppercase text-lg text-white whitespace-nowrap",children:["OVER",c.jsx("span",{style:{color:"var(--neon)"},children:"ISE"})]}),c.jsxs("div",{className:"hidden md:flex items-center gap-3.5 font-bold",style:{color:"var(--muted2)"},children:[c.jsx("a",{href:"#catalogo",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"Jogos"}),c.jsx("a",{href:"#planos",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"Planos"}),c.jsx("a",{href:"#testemunhos",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"Depoimentos"}),c.jsx("a",{href:"#faq",className:"px-3 py-2.5 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/5 hover:-translate-y-0.5",children:"FAQ"})]}),c.jsx("div",{className:"flex gap-2.5 items-center",children:c.jsx("a",{href:"#planos",className:"btn-primary",children:"Desbloquear jogos"})})]})}),c.jsx("style",{children:`
        .btn-ghost {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.32);
          color: #fff;
          font-weight: 800;
          letter-spacing: .5px;
          text-transform: uppercase;
          font-size: 12px;
          cursor: pointer;
          transition: .22s ease;
          overflow: hidden;
          white-space: nowrap;
        }
        .btn-ghost:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,.18);
          box-shadow: var(--shadowSoft);
        }
        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 12px;
          border: none;
          background: var(--neon);
          color: #000;
          font-weight: 800;
          letter-spacing: .5px;
          text-transform: uppercase;
          font-size: 12px;
          cursor: pointer;
          transition: .22s ease;
          white-space: nowrap;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
      `})]})}const Mf="/plano-vitalicio/assets/jz-DMROM4NA.jpg",Lf="/plano-vitalicio/assets/adrielly-BUycGSw2.jpg",Df="/plano-vitalicio/assets/maicon-aCUZCPAj.jpg",Of="/plano-vitalicio/assets/wl-BU6lX2HI.jpeg";function eT({featuredGame:e,isTransitioning:t,onPrev:n,onNext:r,onOpenDetails:i}){return c.jsxs("section",{className:"section-top section hero-section",style:{paddingTop:"clamp(90px, 12vw, 140px)"},children:[c.jsx("div",{className:"container-main",children:c.jsxs("div",{className:"hero-grid",children:[c.jsx("div",{className:"hero-mobile-wrapper",children:e&&c.jsxs("div",{className:`hero-card hero-card-mobile ${t?"transitioning":""}`,children:[c.jsx("div",{className:"hero-card-glow"}),c.jsxs("div",{className:"hero-card-media",children:[c.jsx("img",{src:e.cover,alt:e.name}),c.jsx("div",{className:"hero-card-overlay"})]}),c.jsx("button",{onClick:n,className:"feat-nav feat-prev",children:"‹"}),c.jsx("button",{onClick:r,className:"feat-nav feat-next",children:"›"}),c.jsx("div",{className:"hero-card-info",children:c.jsxs("div",{className:"hero-card-text",children:[c.jsxs("div",{className:"badge-row",children:[c.jsx("span",{className:"chip green",children:"Jogo Original"}),c.jsx("span",{className:"chip",children:"Steam"})]}),c.jsx("h2",{className:"hero-card-name",children:e.name})]})})]})}),c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"pill pill-desktop",children:[c.jsx("span",{className:"dot"}),"Conta Pessoal • Funciona com Denuvo"]}),c.jsxs("h1",{className:"hero-title",children:[c.jsx("span",{className:"accent",children:"Toda a Steam desbloqueada"}),c.jsx("span",{className:"title-dlc",children:"com um simples aplicativo pra PC"})]}),c.jsxs("div",{className:"hero-price",children:[c.jsxs("span",{className:"price-from",children:["de ",c.jsx("s",{children:"R$ 300~500"})," por jogo"]}),c.jsx("span",{className:"price-now",children:"por R$ 49,97"})]}),c.jsxs("p",{className:"hero-sub",children:["Sem família Steam e arquivos duvidosos. Funciona até com Denuvo.",c.jsx("br",{}),"Desbloqueio na sua conta pessoal. Entrega instantânea e automatizada."]}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("a",{href:"#planos",className:"hero-cta",children:["Garantir Meu Acesso",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),c.jsxs("div",{className:"social-proof",children:[c.jsxs("div",{className:"avatars-stack",children:[c.jsx("img",{src:Mf,alt:"",className:"avatar-mini"}),c.jsx("img",{src:Lf,alt:"",className:"avatar-mini"}),c.jsx("img",{src:Df,alt:"",className:"avatar-mini"}),c.jsx("img",{src:Of,alt:"",className:"avatar-mini"})]}),c.jsxs("div",{className:"social-text",children:[c.jsx("span",{className:"stars",children:"★★★★★"}),c.jsx("span",{className:"count",children:"+5K clientes"})]})]})]})]}),e&&c.jsxs("div",{className:`hero-card hero-card-desktop ${t?"transitioning":""}`,children:[c.jsx("div",{className:"hero-card-glow"}),c.jsxs("div",{className:"hero-card-media",children:[c.jsx("img",{src:e.cover,alt:e.name}),c.jsx("div",{className:"hero-card-overlay"})]}),c.jsx("button",{onClick:n,className:"feat-nav feat-prev",children:"‹"}),c.jsx("button",{onClick:r,className:"feat-nav feat-next",children:"›"}),c.jsx("div",{className:"hero-card-info",children:c.jsxs("div",{className:"hero-card-text",children:[c.jsxs("div",{className:"badge-row",children:[c.jsx("span",{className:"chip green",children:"Jogo Original"}),c.jsx("span",{className:"chip",children:"Steam"})]}),c.jsx("h2",{className:"hero-card-name",children:e.name}),c.jsx("p",{className:"hero-card-desc",children:"Baixe os arquivos oficiais direto pela Steam."})]})})]})]})}),c.jsx("style",{children:`
        /* Pill style */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.05);
          border: 1px solid var(--border);
          font-weight: 800;
          letter-spacing: .6px;
          text-transform: uppercase;
          font-size: 12px;
          backdrop-filter: blur(10px);
          white-space: nowrap;
          margin-bottom: 12px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--neon);
          box-shadow: 0 0 14px rgba(0,255,65,.55);
        }
        .pill-desktop {
          display: inline-flex;
        }
        @media (max-width: 640px) {
          .pill {
            padding: 8px 12px;
            font-size: 10px;
            gap: 8px;
          }
          .dot {
            width: 6px;
            height: 6px;
          }
          .pill-desktop {
            display: none;
          }
        }

        /* Mobile Wrapper */
        .hero-mobile-wrapper {
          display: none;
        }
        @media (max-width: 640px) {
          .hero-mobile-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 100%;
            position: relative;
          }
        }

        .hero-card-mobile {
          display: none;
        }
        .hero-card-desktop {
          display: block;
        }
        @media (max-width: 640px) {
          .hero-card-mobile {
            display: block;
            width: 100%;
            max-width: 100%;
            border-radius: var(--r2);
            margin-bottom: 0;
            position: relative;
          }
          .hero-card-mobile::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: -1px;
            right: -1px;
            height: 80px;
            background: linear-gradient(to bottom, transparent, var(--bg));
            pointer-events: none;
            z-index: 10;
            border-radius: 0 0 var(--r2) var(--r2);
          }
          .hero-card-mobile .hero-card-media {
            height: 220px;
          }
          .hero-card-mobile .hero-card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,.85) 0%, transparent 60%);
          }
          .hero-card-desktop {
            display: none;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 34px;
          align-items: center;
        }
        @media (max-width: 980px) {
          .hero-grid { 
            grid-template-columns: 1fr; 
            gap: 24px; 
          }
        }
        @media (max-width: 640px) {
          .hero-grid { 
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 5;
            padding-top: 10px;
            padding-bottom: 16px;
          }
        }

        .hero-title {
          margin: 12px 0 12px;
          font-weight: 950;
          font-size: clamp(32px, 5.2vw, 56px);
          line-height: 1.05;
          letter-spacing: -2px;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hero-title .accent { 
          color: var(--neon); 
        }
        .title-dlc {
          font-size: clamp(16px, 2.5vw, 24px);
          color: rgba(255,255,255,.6);
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        @media (max-width: 640px) {
          .hero-title {
            font-size: 32px;
            letter-spacing: -1.5px;
            margin: 8px 0 8px;
            text-align: center;
            align-items: center;
            gap: 2px;
          }
          .title-dlc {
            font-size: 15px;
            color: rgba(255,255,255,.75);
            margin-top: 2px;
          }
        }

        /* Price Display - Clean & Minimal */
        .hero-price {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 14px;
        }
        .price-from {
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,.5);
        }
        .price-from s {
          text-decoration: line-through;
        }
        .price-now {
          font-size: 28px;
          font-weight: 950;
          color: var(--neon);
          letter-spacing: -1px;
        }
        @media (max-width: 640px) {
          .hero-price {
            justify-content: center;
            gap: 10px;
            margin-bottom: 12px;
            margin-top: 4px;
          }
          .price-from {
            font-size: 14px;
            color: rgba(255,255,255,.65);
          }
          .price-now {
            font-size: 28px;
          }
        }

        .hero-sub {
          max-width: 48ch;
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255,255,255,.75);
          margin-bottom: 22px;
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .hero-sub {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 16px;
            text-align: center;
            color: rgba(255,255,255,.85);
            padding: 0 4px;
          }
          .hero-sub br {
            display: none;
          }
        }
        
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .hero-actions {
            gap: 14px;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        }

        /* Social Proof with Avatars */
        .social-proof {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatars-stack {
          display: flex;
        }
        .avatar-mini {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid var(--bg);
          object-fit: cover;
          margin-left: -10px;
        }
        .avatar-mini:first-child {
          margin-left: 0;
        }
        .social-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .social-text .stars {
          color: var(--neon);
          font-size: 12px;
          letter-spacing: 1px;
        }
        .social-text .count {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,.7);
        }
        @media (max-width: 640px) {
          .social-proof {
            gap: 10px;
          }
          .avatar-mini {
            width: 28px;
            height: 28px;
            margin-left: -8px;
          }
          .social-text .stars {
            font-size: 11px;
          }
          .social-text .count {
            font-size: 11px;
          }
        }

        .hero-card {
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadow);
          overflow: hidden;
          position: relative;
          isolation: isolate;
          min-height: 280px;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 640px) {
          .hero-card {
            min-height: 220px;
          }
        }
        .hero-card.transitioning {
          opacity: 0;
          transform: scale(0.98);
        }
        .hero-card-glow {
          position: absolute;
          inset: -2px;
          background: radial-gradient(700px 240px at 20% 10%, rgba(0,255,65,.16), transparent 60%);
          pointer-events: none;
          z-index: 0;
        }
        .hero-card-media {
          position: relative;
          height: 280px;
          background: #000;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .hero-card-media {
            height: 220px;
          }
        }
        .hero-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          filter: saturate(1.10) contrast(1.10);
          transform: scale(1.03);
        }
        .hero-card-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(800px 320px at 78% 45%, rgba(0,0,0,.12), rgba(0,0,0,.78)),
            linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.16));
        }
        .hero-card-info {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 14px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .hero-card-info {
            left: 12px;
            right: 12px;
            bottom: 12px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
        .hero-card-text { max-width: 62%; min-width: 0; }
        @media (max-width: 980px) {
          .hero-card-text { max-width: 100%; }
        }
        .badge-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
        @media (max-width: 640px) {
          .badge-row { gap: 6px; margin-bottom: 8px; }
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .5px;
          background: rgba(0,0,0,.35);
          border: 1px solid rgba(255,255,255,.12);
          color: #fff;
          text-shadow: 0 10px 30px rgba(0,0,0,.9);
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .chip {
            padding: 6px 8px;
            font-size: 10px;
          }
        }
        .chip.green {
          border-color: rgba(0,255,65,.35);
          box-shadow: 0 0 0 1px rgba(0,255,65,.10) inset;
        }
        .hero-card-name {
          margin: 0;
          font-weight: 950;
          font-size: 22px;
          color: #fff;
          letter-spacing: -1px;
          text-transform: uppercase;
          text-shadow: 0 10px 40px rgba(0,0,0,.95);
          line-height: 1.05;
        }
        @media (max-width: 640px) {
          .hero-card-name {
            font-size: 18px;
          }
        }
        .hero-card-desc {
          margin-top: 8px;
          color: rgba(255,255,255,.82);
          font-size: 13px;
          line-height: 1.35;
          text-shadow: 0 10px 30px rgba(0,0,0,.9);
          max-width: 55ch;
        }
        @media (max-width: 640px) {
          .hero-card-desc {
            font-size: 12px;
            margin-top: 6px;
          }
        }
        .hero-card-btns { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
        @media (max-width: 640px) {
          .hero-card-btns { 
            justify-content: flex-start;
            width: 100%;
          }
        }
        
        .feat-nav {
          position: absolute;
          top: 14px;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.35);
          color: #fff;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: .2s ease;
          z-index: 5;
          font-size: 18px;
        }
        @media (max-width: 640px) {
          .feat-nav {
            width: 34px;
            height: 34px;
            font-size: 16px;
          }
        }
        .feat-nav:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,.22);
        }
        .feat-prev { right: 58px; }
        .feat-next { right: 14px; }
        @media (max-width: 640px) {
          .feat-prev { right: 52px; }
          .feat-next { right: 12px; }
        }

        .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 14px;
          border: none;
          background: var(--neon);
          color: #000;
          font-weight: 900;
          letter-spacing: .5px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: .22s ease;
          overflow: hidden;
          white-space: nowrap;
          font-size: 14px;
        }
        @media (max-width: 640px) {
          .btn {
            padding: 14px 20px;
            font-size: 13px;
          }
        }
        .btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .btn-primary-lg {
          background: var(--neon);
          color: #000;
          border: none;
          font-size: 14px;
          padding: 16px 28px;
        }
        .btn-primary-lg:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .btn-outline {
          background: rgba(255,255,255,.05);
        }
        .btn-small {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 12px;
        }
        @media (max-width: 640px) {
          .btn-small {
            padding: 8px 12px;
            font-size: 11px;
          }
        }
        .btn-primary-sm {
          background: var(--neon);
          color: #000;
          border: none;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 14px;
          background: var(--neon);
          color: #000;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: .5px;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: .25s ease;
          border: none;
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0,255,65,.35);
        }
        .hero-cta svg {
          width: 16px;
          height: 16px;
        }
        @media (max-width: 640px) {
          .hero-cta {
            width: 100%;
            padding: 14px 24px;
            font-size: 13px;
            border-radius: 12px;
          }
        }
      `})]})}const If=w.createContext({});function zf(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const $y=typeof window<"u",Uy=$y?w.useLayoutEffect:w.useEffect,Al=w.createContext(null);function Ff(e,t){e.indexOf(t)===-1&&e.push(t)}function Vf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const en=(e,t,n)=>n>t?t:n<e?e:n;let Ml=()=>{},zi=()=>{};const xn={},Wy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Hy(e){return typeof e=="object"&&e!==null}const Gy=e=>/^0[^.\s]+$/u.test(e);function _f(e){let t;return()=>(t===void 0&&(t=e()),t)}const yt=e=>e,tT=(e,t)=>n=>t(e(n)),go=(...e)=>e.reduce(tT),Zs=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class Bf{constructor(){this.subscriptions=[]}add(t){return Ff(this.subscriptions,t),()=>Vf(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xt=e=>e*1e3,xt=e=>e/1e3;function Ky(e,t){return t?e*(1e3/t):0}const Yy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,nT=1e-7,rT=12;function iT(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=Yy(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>nT&&++a<rT);return o}function xo(e,t,n,r){if(e===t&&n===r)return yt;const i=s=>iT(s,0,1,e,n);return s=>s===0||s===1?s:Yy(i(s),t,r)}const qy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Qy=e=>t=>1-e(1-t),Xy=xo(.33,1.53,.69,.99),$f=Qy(Xy),Zy=qy($f),Jy=e=>(e*=2)<1?.5*$f(e):.5*(2-Math.pow(2,-10*(e-1))),Uf=e=>1-Math.sin(Math.acos(e)),e1=Qy(Uf),t1=qy(Uf),sT=xo(.42,0,1,1),oT=xo(0,0,.58,1),n1=xo(.42,0,.58,1),aT=e=>Array.isArray(e)&&typeof e[0]!="number",r1=e=>Array.isArray(e)&&typeof e[0]=="number",hm={linear:yt,easeIn:sT,easeInOut:n1,easeOut:oT,circIn:Uf,circInOut:t1,circOut:e1,backIn:$f,backInOut:Zy,backOut:Xy,anticipate:Jy},lT=e=>typeof e=="string",mm=e=>{if(r1(e)){zi(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[t,n,r,i]=e;return xo(t,n,r,i)}else if(lT(e))return zi(hm[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),hm[e];return e},Go=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],gm={value:null,addProjectionMetrics:null};function cT(e,t){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(f){o.has(f)&&(d.schedule(f),e()),l++,f(a)}const d={schedule:(f,p=!1,h=!1)=>{const m=h&&i?n:r;return p&&o.add(f),m.has(f)||m.add(f),f},cancel:f=>{r.delete(f),o.delete(f)},process:f=>{if(a=f,i){s=!0;return}i=!0,[n,r]=[r,n],n.forEach(u),t&&gm.value&&gm.value.frameloop[t].push(l),l=0,n.clear(),i=!1,s&&(s=!1,d.process(f))}};return d}const uT=40;function i1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Go.reduce((v,S)=>(v[S]=cT(s,t?S:void 0),v),{}),{setup:a,read:l,resolveKeyframes:u,preUpdate:d,update:f,preRender:p,render:h,postRender:b}=o,m=()=>{const v=xn.useManualTiming?i.timestamp:performance.now();n=!1,xn.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,uT),1)),i.timestamp=v,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),h.process(i),b.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(m))},y=()=>{n=!0,r=!0,i.isProcessing||e(m)};return{schedule:Go.reduce((v,S)=>{const k=o[S];return v[S]=(j,C=!1,E=!1)=>(n||y(),k.schedule(j,C,E)),v},{}),cancel:v=>{for(let S=0;S<Go.length;S++)o[Go[S]].cancel(v)},state:i,steps:o}}const{schedule:ae,cancel:ir,state:Re,steps:bc}=i1(typeof requestAnimationFrame<"u"?requestAnimationFrame:yt,!0);let pa;function dT(){pa=void 0}const He={now:()=>(pa===void 0&&He.set(Re.isProcessing||xn.useManualTiming?Re.timestamp:performance.now()),pa),set:e=>{pa=e,queueMicrotask(dT)}},s1=e=>t=>typeof t=="string"&&t.startsWith(e),o1=s1("--"),fT=s1("var(--"),Wf=e=>fT(e)?pT.test(e.split("/*")[0].trim()):!1,pT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function xm(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Gi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Js={...Gi,transform:e=>en(0,1,e)},Ko={...Gi,default:1},Cs=e=>Math.round(e*1e5)/1e5,Hf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function hT(e){return e==null}const mT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gf=(e,t)=>n=>!!(typeof n=="string"&&mT.test(n)&&n.startsWith(e)||t&&!hT(n)&&Object.prototype.hasOwnProperty.call(n,t)),a1=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Hf);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},gT=e=>en(0,255,e),Sc={...Gi,transform:e=>Math.round(gT(e))},br={test:Gf("rgb","red"),parse:a1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Sc.transform(e)+", "+Sc.transform(t)+", "+Sc.transform(n)+", "+Cs(Js.transform(r))+")"};function xT(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Yu={test:Gf("#"),parse:xT,transform:br.transform},vo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Pn=vo("deg"),Zt=vo("%"),F=vo("px"),vT=vo("vh"),yT=vo("vw"),vm={...Zt,parse:e=>Zt.parse(e)/100,transform:e=>Zt.transform(e*100)},ai={test:Gf("hsl","hue"),parse:a1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Zt.transform(Cs(t))+", "+Zt.transform(Cs(n))+", "+Cs(Js.transform(r))+")"},ye={test:e=>br.test(e)||Yu.test(e)||ai.test(e),parse:e=>br.test(e)?br.parse(e):ai.test(e)?ai.parse(e):Yu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?br.transform(e):ai.transform(e),getAnimatableNone:e=>{const t=ye.parse(e);return t.alpha=0,ye.transform(t)}},wT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function bT(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Hf))==null?void 0:t.length)||0)+(((n=e.match(wT))==null?void 0:n.length)||0)>0}const l1="number",c1="color",ST="var",kT="var(",ym="${}",jT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function eo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(jT,l=>(ye.test(l)?(r.color.push(s),i.push(c1),n.push(ye.parse(l))):l.startsWith(kT)?(r.var.push(s),i.push(ST),n.push(l)):(r.number.push(s),i.push(l1),n.push(parseFloat(l))),++s,ym)).split(ym);return{values:n,split:a,indexes:r,types:i}}function u1(e){return eo(e).values}function d1(e){const{split:t,types:n}=eo(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===l1?s+=Cs(i[o]):a===c1?s+=ye.transform(i[o]):s+=i[o]}return s}}const CT=e=>typeof e=="number"?0:ye.test(e)?ye.getAnimatableNone(e):e;function ET(e){const t=u1(e);return d1(e)(t.map(CT))}const sr={test:bT,parse:u1,createTransformer:d1,getAnimatableNone:ET};function kc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function TT({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=kc(l,a,e+1/3),s=kc(l,a,e),o=kc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Qa(e,t){return n=>n>0?t:e}const fe=(e,t,n)=>e+(t-e)*n,jc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},NT=[Yu,br,ai],PT=e=>NT.find(t=>t.test(e));function wm(e){const t=PT(e);if(Ml(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===ai&&(n=TT(n)),n}const bm=(e,t)=>{const n=wm(e),r=wm(t);if(!n||!r)return Qa(e,t);const i={...n};return s=>(i.red=jc(n.red,r.red,s),i.green=jc(n.green,r.green,s),i.blue=jc(n.blue,r.blue,s),i.alpha=fe(n.alpha,r.alpha,s),br.transform(i))},qu=new Set(["none","hidden"]);function RT(e,t){return qu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function AT(e,t){return n=>fe(e,t,n)}function Kf(e){return typeof e=="number"?AT:typeof e=="string"?Wf(e)?Qa:ye.test(e)?bm:DT:Array.isArray(e)?f1:typeof e=="object"?ye.test(e)?bm:MT:Qa}function f1(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Kf(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function MT(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Kf(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function LT(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][r[s]],a=e.values[o]??0;n[i]=a,r[s]++}return n}const DT=(e,t)=>{const n=sr.createTransformer(t),r=eo(e),i=eo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?qu.has(e)&&!i.values.length||qu.has(t)&&!r.values.length?RT(e,t):go(f1(LT(r,i),i.values),n):(Ml(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),Qa(e,t))};function p1(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?fe(e,t,n):Kf(e)(e,t)}const OT=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>ae.update(t,n),stop:()=>ir(t),now:()=>Re.isProcessing?Re.timestamp:He.now()}},h1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Xa=2e4;function Yf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Xa;)t+=n,r=e.next(t);return t>=Xa?1/0:t}function IT(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Yf(r),Xa);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:xt(i)}}const zT=5;function m1(e,t,n){const r=Math.max(t-zT,0);return Ky(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Cc=.001;function FT({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,s;Ml(e<=Xt(ue.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let o=1-t;o=en(ue.minDamping,ue.maxDamping,o),e=en(ue.minDuration,ue.maxDuration,xt(e)),o<1?(i=u=>{const d=u*o,f=d*e,p=d-n,h=Qu(u,o),b=Math.exp(-f);return Cc-p/h*b},s=u=>{const f=u*o*e,p=f*n+n,h=Math.pow(o,2)*Math.pow(u,2)*e,b=Math.exp(-f),m=Qu(Math.pow(u,2),o);return(-i(u)+Cc>0?-1:1)*((p-h)*b)/m}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Cc+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=_T(i,s,a);if(e=Xt(e),isNaN(l))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const VT=12;function _T(e,t,n){let r=n;for(let i=1;i<VT;i++)r=r-e(r)/t(r);return r}function Qu(e,t){return e*Math.sqrt(1-t*t)}const BT=["duration","bounce"],$T=["stiffness","damping","mass"];function Sm(e,t){return t.some(n=>e[n]!==void 0)}function UT(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!Sm(e,$T)&&Sm(e,BT))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*en(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:s}}else{const n=FT(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function Za(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:h}=UT({...n,velocity:-xt(n.velocity||0)}),b=p||0,m=u/(2*Math.sqrt(l*d)),y=o-s,g=xt(Math.sqrt(l/d)),x=Math.abs(y)<5;r||(r=x?ue.restSpeed.granular:ue.restSpeed.default),i||(i=x?ue.restDelta.granular:ue.restDelta.default);let v;if(m<1){const k=Qu(g,m);v=j=>{const C=Math.exp(-m*g*j);return o-C*((b+m*g*y)/k*Math.sin(k*j)+y*Math.cos(k*j))}}else if(m===1)v=k=>o-Math.exp(-g*k)*(y+(b+g*y)*k);else{const k=g*Math.sqrt(m*m-1);v=j=>{const C=Math.exp(-m*g*j),E=Math.min(k*j,300);return o-C*((b+m*g*y)*Math.sinh(E)+k*y*Math.cosh(E))/k}}const S={calculatedDuration:h&&f||null,next:k=>{const j=v(k);if(h)a.done=k>=f;else{let C=k===0?b:0;m<1&&(C=k===0?Xt(b):m1(v,k,j));const E=Math.abs(C)<=r,T=Math.abs(o-j)<=i;a.done=E&&T}return a.value=a.done?o:j,a},toString:()=>{const k=Math.min(Yf(S),Xa),j=h1(C=>S.next(k*C).value,k,30);return k+"ms "+j},toTransition:()=>{}};return S}Za.applyToOptions=e=>{const t=IT(e,100,Za);return e.ease=t.ease,e.duration=Xt(t.duration),e.type="keyframes",e};function Xu({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},h=E=>a!==void 0&&E<a||l!==void 0&&E>l,b=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let m=n*t;const y=f+m,g=o===void 0?y:o(y);g!==y&&(m=g-f);const x=E=>-m*Math.exp(-E/r),v=E=>g+x(E),S=E=>{const T=x(E),A=v(E);p.done=Math.abs(T)<=u,p.value=p.done?g:A};let k,j;const C=E=>{h(p.value)&&(k=E,j=Za({keyframes:[p.value,b(p.value)],velocity:m1(v,E,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:E=>{let T=!1;return!j&&k===void 0&&(T=!0,S(E),C(E)),k!==void 0&&E>=k?j.next(E-k):(!T&&S(E),p)}}}function WT(e,t,n){const r=[],i=n||xn.mix||p1,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||yt:t;a=go(l,a)}r.push(a)}return r}function HT(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(zi(s===t.length,"Both input and output ranges must be the same length","range-length"),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=WT(t,r,i),l=a.length,u=d=>{if(o&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Zs(e[f],e[f+1],d);return a[f](p)};return n?d=>u(en(e[0],e[s-1],d)):u}function GT(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Zs(0,t,r);e.push(fe(n,1,i))}}function KT(e){const t=[0];return GT(t,e.length-1),t}function YT(e,t){return e.map(n=>n*t)}function qT(e,t){return e.map(()=>t||n1).splice(0,e.length-1)}function Es({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=aT(r)?r.map(mm):mm(r),s={done:!1,value:t[0]},o=YT(n&&n.length===t.length?n:KT(t),e),a=HT(o,t,{ease:Array.isArray(i)?i:qT(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const QT=e=>e!==null;function qf(e,{repeat:t,repeatType:n="loop"},r,i=1){const s=e.filter(QT),a=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const XT={decay:Xu,inertia:Xu,tween:Es,keyframes:Es,spring:Za};function g1(e){typeof e.type=="string"&&(e.type=XT[e.type])}class Qf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const ZT=e=>e/100;class Xf extends Qf{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==He.now()&&this.tick(He.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;g1(t);const{type:n=Es,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=t;let{keyframes:a}=t;const l=n||Es;l!==Es&&typeof a[0]!="number"&&(this.mixKeyframes=go(ZT,p1(a[0],a[1])),a=[0,100]);const u=l({...t,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Yf(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:f,repeatType:p,repeatDelay:h,type:b,onUpdate:m,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,S=r;if(f){const E=Math.min(this.currentTime,i)/a;let T=Math.floor(E),A=E%1;!A&&E>=1&&(A=1),A===1&&T--,T=Math.min(T,f+1),!!(T%2)&&(p==="reverse"?(A=1-A,h&&(A-=h/a)):p==="mirror"&&(S=o)),v=en(0,1,A)*a}const k=x?{done:!1,value:d[0]}:S.next(v);s&&(k.value=s(k.value));let{done:j}=k;!x&&l!==null&&(j=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return C&&b!==Xu&&(k.value=qf(d,this.options,y,this.speed)),m&&m(k.value),C&&this.finish(),k}then(t,n){return this.finished.then(t,n)}get duration(){return xt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+xt(t)}get time(){return xt(this.currentTime)}set time(t){var n;t=Xt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(He.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=xt(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=OT,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(He.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function JT(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Sr=e=>e*180/Math.PI,Zu=e=>{const t=Sr(Math.atan2(e[1],e[0]));return Ju(t)},eN={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Zu,rotateZ:Zu,skewX:e=>Sr(Math.atan(e[1])),skewY:e=>Sr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ju=e=>(e=e%360,e<0&&(e+=360),e),km=Zu,jm=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Cm=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),tN={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jm,scaleY:Cm,scale:e=>(jm(e)+Cm(e))/2,rotateX:e=>Ju(Sr(Math.atan2(e[6],e[5]))),rotateY:e=>Ju(Sr(Math.atan2(-e[2],e[0]))),rotateZ:km,rotate:km,skewX:e=>Sr(Math.atan(e[4])),skewY:e=>Sr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ed(e){return e.includes("scale")?1:0}function td(e,t){if(!e||e==="none")return ed(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=tN,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=eN,i=a}if(!i)return ed(t);const s=r[t],o=i[1].split(",").map(rN);return typeof s=="function"?s(o):o[s]}const nN=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return td(n,t)};function rN(e){return parseFloat(e.trim())}const Ki=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yi=new Set(Ki),Em=e=>e===Gi||e===F,iN=new Set(["x","y","z"]),sN=Ki.filter(e=>!iN.has(e));function oN(e){const t=[];return sN.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const $n={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>td(t,"x"),y:(e,{transform:t})=>td(t,"y")};$n.translateX=$n.x;$n.translateY=$n.y;const Ar=new Set;let nd=!1,rd=!1,id=!1;function x1(){if(rd){const e=Array.from(Ar).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=oN(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}rd=!1,nd=!1,Ar.forEach(e=>e.complete(id)),Ar.clear()}function v1(){Ar.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(rd=!0)})}function aN(){id=!0,v1(),x1(),id=!1}class Zf{constructor(t,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Ar.add(this),nd||(nd=!0,ae.read(v1),ae.resolveKeyframes(x1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=o),i&&s===void 0&&i.set(t[0])}JT(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ar.delete(this)}cancel(){this.state==="scheduled"&&(Ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const lN=e=>e.startsWith("--");function cN(e,t,n){lN(t)?e.style.setProperty(t,n):e.style[t]=n}const uN=_f(()=>window.ScrollTimeline!==void 0),dN={};function fN(e,t){const n=_f(e);return()=>dN[t]??n()}const y1=fN(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ps=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Tm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ps([0,.65,.55,1]),circOut:ps([.55,0,1,.45]),backIn:ps([.31,.01,.66,-.59]),backOut:ps([.33,1.53,.69,.99])};function w1(e,t){if(e)return typeof e=="function"?y1()?h1(e,t):"ease-out":r1(e)?ps(e):Array.isArray(e)?e.map(n=>w1(n,t)||Tm.easeOut):Tm[e]}function pN(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},u=void 0){const d={[t]:n};l&&(d.offset=l);const f=w1(a,i);Array.isArray(f)&&(d.easing=f);const p={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(d,p)}function b1(e){return typeof e=="function"&&"applyToOptions"in e}function hN({type:e,...t}){return b1(e)&&y1()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class mN extends Qf{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,zi(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const u=hN(t);this.animation=pN(n,r,i,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=qf(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):cN(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return xt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+xt(t)}get time(){return xt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&uN()?(this.animation.timeline=t,yt):n(this)}}const S1={anticipate:Jy,backInOut:Zy,circInOut:t1};function gN(e){return e in S1}function xN(e){typeof e.ease=="string"&&gN(e.ease)&&(e.ease=S1[e.ease])}const Ec=10;class vN extends mN{constructor(t){xN(t),g1(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Xf({...o,autoplay:!1}),l=Math.max(Ec,He.now()-this.startTime),u=en(0,Ec,l-Ec);n.setWithVelocity(a.sample(Math.max(0,l-u)).value,a.sample(l).value,u),a.stop()}}const Nm=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(sr.test(e)||e==="0")&&!e.startsWith("url("));function yN(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function wN(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Nm(i,t),a=Nm(s,t);return Ml(o===a,`You are trying to animate ${t} from "${i}" to "${s}". "${o?s:i}" is not an animatable value.`,"value-not-animatable"),!o||!a?!1:yN(e)||(n==="spring"||b1(n))&&r}function sd(e){e.duration=0,e.type="keyframes"}const bN=new Set(["opacity","clipPath","filter","transform"]),SN=_f(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function kN(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:o}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=t.owner.getProps();return SN()&&n&&bN.has(n)&&(n!=="transform"||!u)&&!l&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const jN=40;class CN extends Qf{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:u,element:d,...f}){var b;super(),this.stop=()=>{var m,y;this._animation&&(this._animation.stop(),(m=this.stopTimeline)==null||m.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=He.now();const p={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:d,...f},h=(d==null?void 0:d.KeyframeResolver)||Zf;this.keyframeResolver=new h(a,(m,y,g)=>this.onKeyframesResolved(m,y,p,!g),l,u,d),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:u,onUpdate:d}=r;this.resolvedAt=He.now(),wN(t,s,o,a)||((xn.instantAnimations||!l)&&(d==null||d(qf(t,r,n))),t[0]=t[t.length-1],sd(r),r.repeat=0);const p={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>jN?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},h=!u&&kN(p)?new vN({...p,element:p.motionValue.owner.current}):new Xf(p);h.finished.then(()=>this.notifyFinished()).catch(yt),this.pendingTimeline&&(this.stopTimeline=h.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),aN()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const EN=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TN(e){const t=EN.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}const NN=4;function k1(e,t,n=1){zi(n<=NN,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[r,i]=TN(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return Wy(o)?parseFloat(o):o}return Wf(i)?k1(i,t,n+1):i}function Jf(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const PN={type:"spring",stiffness:500,damping:25,restSpeed:10},RN=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),AN={type:"keyframes",duration:.8},MN={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},LN=(e,{keyframes:t})=>t.length>2?AN:Yi.has(e)?e.startsWith("scale")?RN(t[1]):PN:MN;function DN({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const ON=e=>e!==null;function IN(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(ON),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}function j1(e,t,n,r=0,i=1){const s=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),o=e.size,a=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:a-s*r}const ep=(e,t,n,r={},i,s)=>o=>{const a=Jf(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Xt(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};DN(a)||Object.assign(d,LN(e,d)),d.duration&&(d.duration=Xt(d.duration)),d.repeatDelay&&(d.repeatDelay=Xt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(sd(d),d.delay===0&&(f=!0)),(xn.instantAnimations||xn.skipAnimations)&&(f=!0,sd(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,f&&!s&&t.get()!==void 0){const p=IN(d.keyframes,a);if(p!==void 0){ae.update(()=>{d.onUpdate(p),d.onComplete()});return}}return a.isSync?new Xf(d):new CN(d)},C1=new Set(["width","height","top","left","right","bottom",...Ki]),Pm=30,zN=e=>!isNaN(parseFloat(e));class FN{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=He.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=He.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=zN(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Bf);const r=this.events[t].add(n);return t==="change"?()=>{r(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=He.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Pm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Pm);return Ky(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fi(e,t){return new FN(e,t)}function Rm(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function tp(e,t,n,r){if(typeof t=="function"){const[i,s]=Rm(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Rm(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function yi(e,t,n){const r=e.getProps();return tp(r,t,n!==void 0?n:r.custom,e)}const od=e=>Array.isArray(e);function VN(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Fi(n))}function _N(e){return od(e)?e[e.length-1]||0:e}function BN(e,t){const n=yi(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=_N(s[o]);VN(e,o,a)}}const _e=e=>!!(e&&e.getVelocity);function $N(e){return!!(_e(e)&&e.add)}function ad(e,t){const n=e.getValue("willChange");if($N(n))return n.add(t);if(!n&&xn.WillChange){const r=new xn.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function np(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const UN="framerAppearId",E1="data-"+np(UN);function T1(e){return e.props[E1]}function WN({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function N1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=t;r&&(s=r);const l=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d,e.latestValues[d]??null),p=a[d];if(p===void 0||u&&WN(u,d))continue;const h={delay:n,...Jf(s||{},d)},b=f.get();if(b!==void 0&&!f.isAnimating&&!Array.isArray(p)&&p===b&&!h.velocity)continue;let m=!1;if(window.MotionHandoffAnimation){const g=T1(e);if(g){const x=window.MotionHandoffAnimation(g,d,ae);x!==null&&(h.startTime=x,m=!0)}}ad(e,d),f.start(ep(d,f,p,e.shouldReduceMotion&&C1.has(d)?{type:!1}:h,e,m));const y=f.animation;y&&l.push(y)}return o&&Promise.all(l).then(()=>{ae.update(()=>{o&&BN(e,o)})}),l}function ld(e,t,n={}){var l;const r=yi(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(N1(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=i;return HN(e,t,u,d,f,p,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,d]=a==="beforeChildren"?[s,o]:[o,s];return u().then(()=>d())}else return Promise.all([s(),o(n.delay)])}function HN(e,t,n=0,r=0,i=0,s=1,o){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(ld(l,t,{...o,delay:n+(typeof r=="function"?0:r)+j1(e.variantChildren,l,r,i,s)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function GN(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>ld(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=ld(e,t,n);else{const i=typeof t=="function"?yi(e,t,n.custom):t;r=Promise.all(N1(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const KN={test:e=>e==="auto",parse:e=>e},P1=e=>t=>t.test(e),R1=[Gi,F,Zt,Pn,yT,vT,KN],Am=e=>R1.find(P1(e));function YN(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Gy(e):!0}const qN=new Set(["brightness","contrast","saturate","opacity"]);function QN(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Hf)||[];if(!r)return e;const i=n.replace(r,"");let s=qN.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const XN=/\b([a-z-]*)\(.*?\)/gu,cd={...sr,getAnimatableNone:e=>{const t=e.match(XN);return t?t.map(QN).join(" "):e}},Mm={...Gi,transform:Math.round},ZN={rotate:Pn,rotateX:Pn,rotateY:Pn,rotateZ:Pn,scale:Ko,scaleX:Ko,scaleY:Ko,scaleZ:Ko,skew:Pn,skewX:Pn,skewY:Pn,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:Js,originX:vm,originY:vm,originZ:F},rp={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,radius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,top:F,right:F,bottom:F,left:F,inset:F,insetBlock:F,insetBlockStart:F,insetBlockEnd:F,insetInline:F,insetInlineStart:F,insetInlineEnd:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,paddingBlock:F,paddingBlockStart:F,paddingBlockEnd:F,paddingInline:F,paddingInlineStart:F,paddingInlineEnd:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,marginBlock:F,marginBlockStart:F,marginBlockEnd:F,marginInline:F,marginInlineStart:F,marginInlineEnd:F,backgroundPositionX:F,backgroundPositionY:F,...ZN,zIndex:Mm,fillOpacity:Js,strokeOpacity:Js,numOctaves:Mm},JN={...rp,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:cd,WebkitFilter:cd},A1=e=>JN[e];function M1(e,t){let n=A1(e);return n!==cd&&(n=sr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const eP=new Set(["auto","none","0"]);function tP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!eP.has(s)&&eo(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=M1(n,i)}class nP extends Zf{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),Wf(f))){const p=k1(f,n.current);p!==void 0&&(t[d]=p),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!C1.has(r)||t.length!==2)return;const[i,s]=t,o=Am(i),a=Am(s),l=xm(i),u=xm(s);if(l!==u&&$n[r]){this.needsMeasurement=!0;return}if(o!==a)if(Em(o)&&Em(a))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else $n[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||YN(t[i]))&&r.push(i);r.length&&tP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$n[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=$n[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,u])=>{t.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function rP(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const i=document.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const L1=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function D1(e){return Hy(e)&&"offsetHeight"in e}const{schedule:ip,cancel:uA}=i1(queueMicrotask,!1),Nt={x:!1,y:!1};function O1(){return Nt.x||Nt.y}function iP(e){return e==="x"||e==="y"?Nt[e]?null:(Nt[e]=!0,()=>{Nt[e]=!1}):Nt.x||Nt.y?null:(Nt.x=Nt.y=!0,()=>{Nt.x=Nt.y=!1})}function I1(e,t){const n=rP(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Lm(e){return!(e.pointerType==="touch"||O1())}function sP(e,t,n={}){const[r,i,s]=I1(e,n),o=a=>{if(!Lm(a))return;const{target:l}=a,u=t(l,a);if(typeof u!="function"||!l)return;const d=f=>{Lm(f)&&(u(f),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const z1=(e,t)=>t?e===t?!0:z1(e,t.parentElement):!1,sp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,oP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function F1(e){return oP.has(e.tagName)||e.isContentEditable===!0}const ha=new WeakSet;function Dm(e){return t=>{t.key==="Enter"&&e(t)}}function Tc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const aP=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Dm(()=>{if(ha.has(n))return;Tc(n,"down");const i=Dm(()=>{Tc(n,"up")}),s=()=>Tc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Om(e){return sp(e)&&!O1()}function lP(e,t,n={}){const[r,i,s]=I1(e,n),o=a=>{const l=a.currentTarget;if(!Om(a))return;ha.add(l);const u=t(l,a),d=(h,b)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),ha.has(l)&&ha.delete(l),Om(h)&&typeof u=="function"&&u(h,{success:b})},f=h=>{d(h,l===window||l===document||n.useGlobalTarget||z1(l,h.target))},p=h=>{d(h,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),D1(a)&&(a.addEventListener("focus",u=>aP(u,i)),!F1(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function V1(e){return Hy(e)&&"ownerSVGElement"in e}function cP(e){return V1(e)&&e.tagName==="svg"}const uP=[...R1,ye,sr],dP=e=>uP.find(P1(e)),Im=()=>({translate:0,scale:1,origin:0,originPoint:0}),li=()=>({x:Im(),y:Im()}),zm=()=>({min:0,max:0}),ke=()=>({x:zm(),y:zm()}),ud={current:null},_1={current:!1},fP=typeof window<"u";function pP(){if(_1.current=!0,!!fP)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ud.current=e.matches;e.addEventListener("change",t),t()}else ud.current=!1}const hP=new WeakMap;function Ll(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function to(e){return typeof e=="string"||Array.isArray(e)}const op=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ap=["initial",...op];function Dl(e){return Ll(e.animate)||ap.some(t=>to(e[t]))}function B1(e){return!!(Dl(e)||e.variants)}function mP(e,t,n){for(const r in t){const i=t[r],s=n[r];if(_e(i))e.addValue(r,i);else if(_e(s))e.addValue(r,Fi(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Fi(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Fm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ja={};function $1(e){Ja=e}function gP(){return Ja}class xP{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=He.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ae.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Dl(n),this.isVariantNode=B1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const h=f[p];l[p]!==void 0&&_e(h)&&h.set(l[p])}}mount(t){var n;this.current=t,hP.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_1.current||pP(),this.shouldReduceMotion=ud.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),ir(this.notifyUpdate),ir(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Yi.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&ae.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ja){const n=Ja[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ke()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Fm.length;r++){const i=Fm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=mP(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Fi(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Wy(r)||Gy(r))?r=parseFloat(r):!dP(r)&&sr.test(n)&&(r=M1(t,n)),this.setBaseTarget(t,_e(r)?r.get():r)),_e(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=tp(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!_e(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Bf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){ip.render(this.render)}}class ur{constructor(t){this.isMounted=!1,this.node=t}update(){}}class U1 extends xP{constructor(){super(...arguments),this.KeyframeResolver=nP}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;_e(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function W1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function vP({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function yP(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Nc(e){return e===void 0||e===1}function dd({scale:e,scaleX:t,scaleY:n}){return!Nc(e)||!Nc(t)||!Nc(n)}function xr(e){return dd(e)||H1(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function H1(e){return Vm(e.x)||Vm(e.y)}function Vm(e){return e&&e!=="0%"}function el(e,t,n){const r=e-n,i=t*r;return n+i}function _m(e,t,n,r,i){return i!==void 0&&(e=el(e,i,r)),el(e,n,r)+t}function fd(e,t=0,n=1,r,i){e.min=_m(e.min,t,n,r,i),e.max=_m(e.max,t,n,r,i)}function G1(e,{x:t,y:n}){fd(e.x,t.translate,t.scale,t.originPoint),fd(e.y,n.translate,n.scale,n.originPoint)}const Bm=.999999999999,$m=1.0000000000001;function wP(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ui(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,G1(e,o)),r&&xr(s.latestValues)&&ui(e,s.latestValues))}t.x<$m&&t.x>Bm&&(t.x=1),t.y<$m&&t.y>Bm&&(t.y=1)}function ci(e,t){e.min=e.min+t,e.max=e.max+t}function Um(e,t,n,r,i=.5){const s=fe(e.min,e.max,i);fd(e,t,n,s,r)}function ui(e,t){Um(e.x,t.x,t.scaleX,t.scale,t.originX),Um(e.y,t.y,t.scaleY,t.scale,t.originY)}function K1(e,t){return W1(yP(e.getBoundingClientRect(),t))}function bP(e,t,n){const r=K1(e,n),{scroll:i}=t;return i&&(ci(r.x,i.offset.x),ci(r.y,i.offset.y)),r}const SP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},kP=Ki.length;function jP(e,t,n){let r="",i=!0;for(let s=0;s<kP;s++){const o=Ki[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=L1(a,rp[o]);if(!l){i=!1;const d=SP[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function lp(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(Yi.has(l)){o=!0;continue}else if(o1(l)){i[l]=u;continue}else{const d=L1(u,rp[l]);l.startsWith("origin")?(a=!0,s[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=jP(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}function Y1(e,{style:t,vars:n},r,i){const s=e.style;let o;for(o in t)s[o]=t[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function Wm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const as={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(F.test(e))e=parseFloat(e);else return e;const n=Wm(e,t.target.x),r=Wm(e,t.target.y);return`${n}% ${r}%`}},CP={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=sr.parse(e);if(i.length>5)return r;const s=sr.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=fe(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}},pd={borderRadius:{...as,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:as,borderTopRightRadius:as,borderBottomLeftRadius:as,borderBottomRightRadius:as,boxShadow:CP};function q1(e,{layout:t,layoutId:n}){return Yi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!pd[e]||e==="opacity")}function cp(e,t,n){var o;const r=e.style,i=t==null?void 0:t.style,s={};if(!r)return s;for(const a in r)(_e(r[a])||i&&_e(i[a])||q1(a,e)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function EP(e){return window.getComputedStyle(e)}class TP extends U1{constructor(){super(...arguments),this.type="html",this.renderInstance=Y1}readValueFromInstance(t,n){var r;if(Yi.has(n))return(r=this.projection)!=null&&r.isProjecting?ed(n):nN(t,n);{const i=EP(t),s=(o1(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return K1(t,n)}build(t,n,r){lp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return cp(t,n,r)}}const NP={offset:"stroke-dashoffset",array:"stroke-dasharray"},PP={offset:"strokeDashoffset",array:"strokeDasharray"};function RP(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?NP:PP;e[s.offset]=F.transform(-r);const o=F.transform(t),a=F.transform(n);e[s.array]=`${o} ${a}`}const AP=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Q1(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},l,u,d){if(lp(e,a,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p}=e;f.transform&&(p.transform=f.transform,delete f.transform),(p.transform||f.transformOrigin)&&(p.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),p.transform&&(p.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const h of AP)f[h]!==void 0&&(p[h]=f[h],delete f[h]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&RP(f,i,s,o,!1)}const X1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Z1=e=>typeof e=="string"&&e.toLowerCase()==="svg";function MP(e,t,n,r){Y1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(X1.has(i)?i:np(i),t.attrs[i])}function J1(e,t,n){const r=cp(e,t,n);for(const i in e)if(_e(e[i])||_e(t[i])){const s=Ki.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}class LP extends U1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ke}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Yi.has(n)){const r=A1(n);return r&&r.default||0}return n=X1.has(n)?n:np(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return J1(t,n,r)}build(t,n,r){Q1(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){MP(t,n,r,i)}mount(t){this.isSVGTag=Z1(t.tagName),super.mount(t)}}const DP=ap.length;function ew(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ew(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<DP;n++){const r=ap[n],i=e.props[r];(to(i)||i===!1)&&(t[r]=i)}return t}function tw(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const OP=[...op].reverse(),IP=op.length;function zP(e){return t=>Promise.all(t.map(({animation:n,options:r})=>GN(e,n,r)))}function FP(e){let t=zP(e),n=Hm(),r=!0;const i=l=>(u,d)=>{var p;const f=yi(e,d,l==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:h,transitionEnd:b,...m}=f;u={...u,...m,...b}}return u};function s(l){t=l(e)}function o(l){const{props:u}=e,d=ew(e.parent)||{},f=[],p=new Set;let h={},b=1/0;for(let y=0;y<IP;y++){const g=OP[y],x=n[g],v=u[g]!==void 0?u[g]:d[g],S=to(v),k=g===l?x.isActive:null;k===!1&&(b=y);let j=v===d[g]&&v!==u[g]&&S;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),x.protectedKeys={...h},!x.isActive&&k===null||!v&&!x.prevProp||Ll(v)||typeof v=="boolean")continue;const C=VP(x.prevProp,v);let E=C||g===l&&x.isActive&&!j&&S||y>b&&S,T=!1;const A=Array.isArray(v)?v:[v];let D=A.reduce(i(g),{});k===!1&&(D={});const{prevResolvedValues:O={}}=x,K={...O,...D},I=_=>{E=!0,p.has(_)&&(T=!0,p.delete(_)),x.needsAnimating[_]=!0;const N=e.getValue(_);N&&(N.liveStyle=!1)};for(const _ in K){const N=D[_],R=O[_];if(h.hasOwnProperty(_))continue;let z=!1;od(N)&&od(R)?z=!tw(N,R):z=N!==R,z?N!=null?I(_):p.add(_):N!==void 0&&p.has(_)?I(_):x.protectedKeys[_]=!0}x.prevProp=v,x.prevResolvedValues=D,x.isActive&&(h={...h,...D}),r&&e.blockInitialAnimation&&(E=!1);const Y=j&&C;E&&(!Y||T)&&f.push(...A.map(_=>{const N={type:g};if(typeof _=="string"&&r&&!Y&&e.manuallyAnimateOnMount&&e.parent){const{parent:R}=e,z=yi(R,_);if(R.enteringChildren&&z){const{delayChildren:U}=z.transition||{};N.delay=j1(R.enteringChildren,e,U)}}return{animation:_,options:N}}))}if(p.size){const y={};if(typeof u.initial!="boolean"){const g=yi(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(y.transition=g.transition)}p.forEach(g=>{const x=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),y[g]=x??null}),f.push({animation:y})}let m=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(m=!1),r=!1,m?t(f):Promise.resolve()}function a(l,u){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(p=>{var h;return(h=p.animationState)==null?void 0:h.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Hm()}}}function VP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!tw(t,e):!1}function hr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Hm(){return{animate:hr(!0),whileInView:hr(),whileHover:hr(),whileTap:hr(),whileDrag:hr(),whileFocus:hr(),exit:hr()}}const nw=1e-4,_P=1-nw,BP=1+nw,rw=.01,$P=0-rw,UP=0+rw;function Ge(e){return e.max-e.min}function WP(e,t,n){return Math.abs(e-t)<=n}function Gm(e,t,n,r=.5){e.origin=r,e.originPoint=fe(t.min,t.max,e.origin),e.scale=Ge(n)/Ge(t),e.translate=fe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=_P&&e.scale<=BP||isNaN(e.scale))&&(e.scale=1),(e.translate>=$P&&e.translate<=UP||isNaN(e.translate))&&(e.translate=0)}function Ts(e,t,n,r){Gm(e.x,t.x,n.x,r?r.originX:void 0),Gm(e.y,t.y,n.y,r?r.originY:void 0)}function Km(e,t,n){e.min=n.min+t.min,e.max=e.min+Ge(t)}function HP(e,t,n){Km(e.x,t.x,n.x),Km(e.y,t.y,n.y)}function Ym(e,t,n){e.min=t.min-n.min,e.max=e.min+Ge(t)}function tl(e,t,n){Ym(e.x,t.x,n.x),Ym(e.y,t.y,n.y)}function qm(e,t,n,r,i){return e-=t,e=el(e,1/n,r),i!==void 0&&(e=el(e,1/i,r)),e}function GP(e,t=0,n=1,r=.5,i,s=e,o=e){if(Zt.test(t)&&(t=parseFloat(t),t=fe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=fe(s.min,s.max,r);e===s&&(a-=t),e.min=qm(e.min,t,n,a,i),e.max=qm(e.max,t,n,a,i)}function Qm(e,t,[n,r,i],s,o){GP(e,t[n],t[r],t[i],t.scale,s,o)}const KP=["x","scaleX","originX"],YP=["y","scaleY","originY"];function Xm(e,t,n,r){Qm(e.x,t,KP,n?n.x:void 0,r?r.x:void 0),Qm(e.y,t,YP,n?n.y:void 0,r?r.y:void 0)}function Zm(e,t){e.min=t.min,e.max=t.max}function Tt(e,t){Zm(e.x,t.x),Zm(e.y,t.y)}function Jm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function eg(e){return e.translate===0&&e.scale===1}function iw(e){return eg(e.x)&&eg(e.y)}function tg(e,t){return e.min===t.min&&e.max===t.max}function qP(e,t){return tg(e.x,t.x)&&tg(e.y,t.y)}function ng(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function sw(e,t){return ng(e.x,t.x)&&ng(e.y,t.y)}function rg(e){return Ge(e.x)/Ge(e.y)}function ig(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function ft(e){return[e("x"),e("y")]}function QP(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:h,skewY:b}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),b&&(r+=`skewY(${b}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const ow=["TopLeft","TopRight","BottomLeft","BottomRight"],XP=ow.length,sg=e=>typeof e=="string"?parseFloat(e):e,og=e=>typeof e=="number"||F.test(e);function ZP(e,t,n,r,i,s){i?(e.opacity=fe(0,n.opacity??1,JP(r)),e.opacityExit=fe(t.opacity??1,0,e4(r))):s&&(e.opacity=fe(t.opacity??1,n.opacity??1,r));for(let o=0;o<XP;o++){const a=`border${ow[o]}Radius`;let l=ag(t,a),u=ag(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||og(l)===og(u)?(e[a]=Math.max(fe(sg(l),sg(u),r),0),(Zt.test(u)||Zt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=fe(t.rotate||0,n.rotate||0,r))}function ag(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const JP=aw(0,.5,e1),e4=aw(.5,.95,yt);function aw(e,t,n){return r=>r<e?0:r>t?1:n(Zs(e,t,r))}function t4(e,t){const n=He.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(ir(r),e(s-t))};return ae.setup(r,!0),()=>ir(r)}function no(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ma(e){return _e(e)?e.get():e}function n4(e,t,n){const r=_e(e)?e:Fi(e);return r.start(ep("",r,t,n)),r.animation}const r4=(e,t)=>e.depth-t.depth;class i4{constructor(){this.children=[],this.isDirty=!1}add(t){Ff(this.children,t),this.isDirty=!0}remove(t){Vf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(r4),this.isDirty=!1,this.children.forEach(t)}}class s4{constructor(){this.members=[]}add(t){Ff(this.members,t),t.scheduleRender()}remove(t){if(Vf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ga={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Pc=["","X","Y","Z"],o4=1e3;let a4=0;function Rc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function lw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=T1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ae,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&lw(r)}function cw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=a4++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(u4),this.nodes.forEach(h4),this.nodes.forEach(m4),this.nodes.forEach(d4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new i4)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Bf),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=V1(o)&&!cP(o),this.instance=o;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,f=0;const p=()=>this.root.updateBlockedByResize=!1;ae.read(()=>{f=window.innerWidth}),e(o,()=>{const h=window.innerWidth;h!==f&&(f=h,this.root.updateBlockedByResize=!0,d&&d(),d=t4(p,250),ga.hasAnimatedSinceResize&&(ga.hasAnimatedSinceResize=!1,this.nodes.forEach(ug)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:p,layout:h})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||u.getDefaultTransition()||w4,{onLayoutAnimationStart:m,onLayoutAnimationComplete:y}=u.getProps(),g=!this.targetLayout||!sw(this.targetLayout,h),x=!f&&p;if(this.options.layoutRoot||this.resumeFrom||x||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Jf(b,"layout"),onPlay:m,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,x)}else f||ug(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=h})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ir(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(g4),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(lg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(cg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(p4),this.nodes.forEach(l4),this.nodes.forEach(c4)):this.nodes.forEach(cg),this.clearAllSnapshots();const a=He.now();Re.delta=en(0,1e3/60,a-Re.timestamp),Re.timestamp=a,Re.isProcessing=!0,bc.update.process(Re),bc.preRender.process(Re),bc.render.process(Re),Re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(f4),this.sharedNodes.forEach(x4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ge(this.snapshot.measuredBox.x)&&!Ge(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!iw(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&this.instance&&(a||xr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),b4(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return ke();const a=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(S4))){const{scroll:d}=this.root;d&&(ci(a.x,d.offset.x),ci(a.y,d.offset.y))}return a}removeElementScroll(o){var l;const a=ke();if(Tt(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Tt(a,o),ci(a.x,f.offset.x),ci(a.y,f.offset.y))}return a}applyTransform(o,a=!1){const l=ke();Tt(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ui(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),xr(d.latestValues)&&ui(l,d.latestValues)}return xr(this.latestValues)&&ui(l,this.latestValues),l}removeTransform(o){const a=ke();Tt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!xr(u.latestValues))continue;dd(u.latestValues)&&u.updateSnapshot();const d=ke(),f=u.measurePageBox();Tt(d,f),Xm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return xr(this.latestValues)&&Xm(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var h;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=Re.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ke(),this.targetWithTransforms=ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tt(this.target,this.layout.layoutBox),G1(this.target,this.targetDelta)):Tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||dd(this.parent.latestValues)||H1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),tl(this.relativeTargetOrigin,a,l),Tt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var b;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Re.timestamp&&(l=!1),l)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Tt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;wP(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ke());const{target:h}=o;if(!h){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Jm(this.prevProjectionDelta.x,this.projectionDelta.x),Jm(this.prevProjectionDelta.y,this.projectionDelta.y)),Ts(this.projectionDelta,this.layoutCorrected,h,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!ig(this.projectionDelta.x,this.prevProjectionDelta.x)||!ig(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",h))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=li(),this.projectionDelta=li(),this.projectionDeltaWithTransform=li()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=li();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=ke(),h=l?l.source:void 0,b=this.layout?this.layout.source:void 0,m=h!==b,y=this.getStack(),g=!y||y.members.length<=1,x=!!(m&&!g&&this.options.crossfade===!0&&!this.path.some(y4));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const k=S/1e3;dg(f.x,o.x,k),dg(f.y,o.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(tl(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),v4(this.relativeTarget,this.relativeTargetOrigin,p,k),v&&qP(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=ke()),Tt(v,this.relativeTarget)),m&&(this.animationValues=d,ZP(d,u,this.latestValues,k,x,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(ir(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{ga.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fi(0)),this.currentAnimation=n4(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),o.onUpdate&&o.onUpdate(d)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(o4),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&uw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ke();const f=Ge(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Ge(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Tt(a,l),ui(a,d),Ts(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new s4),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Rc("z",o,u,this.animationValues);for(let d=0;d<Pc.length;d++)Rc(`rotate${Pc[d]}`,o,u,this.animationValues),Rc(`skew${Pc[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=ma(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=ma(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!xr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let f=QP(this.projectionDeltaWithTransform,this.treeScale,d);l&&(f=l(d,f)),o.transform=f;const{x:p,y:h}=this.projectionDelta;o.transformOrigin=`${p.origin*100}% ${h.origin*100}% 0`,u.animationValues?o.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:o.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const b in pd){if(d[b]===void 0)continue;const{correct:m,applyTo:y,isCSSVariable:g}=pd[b],x=f==="none"?d[b]:m(d[b],u);if(y){const v=y.length;for(let S=0;S<v;S++)o[y[S]]=x}else g?this.options.visualElement.renderState.vars[b]=x:o[b]=x}this.options.layoutId&&(o.pointerEvents=u===this?ma(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(lg),this.root.sharedNodes.clear()}}}function l4(e){e.updateLayout()}function c4(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;s==="size"?ft(f=>{const p=o?t.measuredBox[f]:t.layoutBox[f],h=Ge(p);p.min=r[f].min,p.max=p.min+h}):uw(s,t.layoutBox,r)&&ft(f=>{const p=o?t.measuredBox[f]:t.layoutBox[f],h=Ge(r[f]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+h)});const a=li();Ts(a,r,t.layoutBox);const l=li();o?Ts(l,e.applyTransform(i,!0),t.measuredBox):Ts(l,r,t.layoutBox);const u=!iw(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const b=ke();tl(b,t.layoutBox,p.layoutBox);const m=ke();tl(m,r,h.layoutBox),sw(b,m)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=m,e.relativeTargetOrigin=b,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function u4(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function d4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function f4(e){e.clearSnapshot()}function lg(e){e.clearMeasurements()}function cg(e){e.isLayoutDirty=!1}function p4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ug(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function h4(e){e.resolveTargetDelta()}function m4(e){e.calcProjection()}function g4(e){e.resetSkewAndRotation()}function x4(e){e.removeLeadSnapshot()}function dg(e,t,n){e.translate=fe(t.translate,0,n),e.scale=fe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function fg(e,t,n,r){e.min=fe(t.min,n.min,r),e.max=fe(t.max,n.max,r)}function v4(e,t,n,r){fg(e.x,t.x,n.x,r),fg(e.y,t.y,n.y,r)}function y4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const w4={duration:.45,ease:[.4,0,.1,1]},pg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),hg=pg("applewebkit/")&&!pg("chrome/")?Math.round:yt;function mg(e){e.min=hg(e.min),e.max=hg(e.max)}function b4(e){mg(e.x),mg(e.y)}function uw(e,t,n){return e==="position"||e==="preserve-aspect"&&!WP(rg(t),rg(n),.2)}function S4(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const k4=cw({attachResizeListener:(e,t)=>no(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ac={current:void 0},dw=cw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ac.current){const e=new k4({});e.mount(window),e.setOptions({layoutScroll:!0}),Ac.current=e}return Ac.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),up=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function gg(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function j4(...e){return t=>{let n=!1;const r=e.map(i=>{const s=gg(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():gg(e[i],null)}}}}function C4(...e){return w.useCallback(j4(...e),e)}class E4 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=D1(r)&&r.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=i-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function T4({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),s=w.useRef(null),o=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=w.useContext(up),l=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=C4(s,l);return w.useInsertionEffect(()=>{const{width:f,height:p,top:h,left:b,right:m}=o.current;if(t||!s.current||!f||!p)return;const y=n==="left"?`left: ${b}`:`right: ${m}`;s.current.dataset.motionPopId=i;const g=document.createElement("style");a&&(g.nonce=a);const x=r??document.head;return x.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${y}px !important;
            top: ${h}px !important;
          }
        `),()=>{x.contains(g)&&x.removeChild(g)}},[t]),c.jsx(E4,{isPresent:t,childRef:s,sizeRef:o,children:w.cloneElement(e,{ref:u})})}const N4=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a,root:l})=>{const u=zf(P4),d=w.useId();let f=!0,p=w.useMemo(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:h=>{u.set(h,!0);for(const b of u.values())if(!b)return;r&&r()},register:h=>(u.set(h,!1),()=>u.delete(h))}),[n,u,r]);return s&&f&&(p={...p}),w.useMemo(()=>{u.forEach((h,b)=>u.set(b,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o==="popLayout"&&(e=c.jsx(T4,{isPresent:n,anchorX:a,root:l,children:e})),c.jsx(Al.Provider,{value:p,children:e})};function P4(){return new Map}function fw(e=!0){const t=w.useContext(Al);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=w.useId();w.useEffect(()=>{if(e)return i(s)},[e]);const o=w.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Yo=e=>e.key||"";function xg(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const nl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",root:l})=>{const[u,d]=fw(o),f=w.useMemo(()=>xg(e),[e]),p=o&&!u?[]:f.map(Yo),h=w.useRef(!0),b=w.useRef(f),m=zf(()=>new Map),y=w.useRef(new Set),[g,x]=w.useState(f),[v,S]=w.useState(f);Uy(()=>{h.current=!1,b.current=f;for(let C=0;C<v.length;C++){const E=Yo(v[C]);p.includes(E)?(m.delete(E),y.current.delete(E)):m.get(E)!==!0&&m.set(E,!1)}},[v,p.length,p.join("-")]);const k=[];if(f!==g){let C=[...f];for(let E=0;E<v.length;E++){const T=v[E],A=Yo(T);p.includes(A)||(C.splice(E,0,T),k.push(T))}return s==="wait"&&k.length&&(C=k),S(xg(C)),x(f),null}const{forceRender:j}=w.useContext(If);return c.jsx(c.Fragment,{children:v.map(C=>{const E=Yo(C),T=o&&!u?!1:f===v||p.includes(E),A=()=>{if(y.current.has(E))return;if(y.current.add(E),m.has(E))m.set(E,!0);else return;let D=!0;m.forEach(O=>{O||(D=!1)}),D&&(j==null||j(),S(b.current),o&&(d==null||d()),r&&r())};return c.jsx(N4,{isPresent:T,initial:!h.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:s,root:l,onExitComplete:T?void 0:A,anchorX:a,children:C},E)})})},pw=w.createContext({strict:!1}),vg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let yg=!1;function R4(){if(yg)return;const e={};for(const t in vg)e[t]={isEnabled:n=>vg[t].some(r=>!!n[r])};$1(e),yg=!0}function hw(){return R4(),gP()}function A4(e){const t=hw();for(const n in e)t[n]={...t[n],...e[n]};$1(t)}const M4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function rl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||M4.has(e)}let mw=e=>!rl(e);function L4(e){typeof e=="function"&&(mw=t=>t.startsWith("on")?!rl(t):e(t))}try{L4(require("@emotion/is-prop-valid").default)}catch{}function D4(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(mw(i)||n===!0&&rl(i)||!t&&!rl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Ol=w.createContext({});function O4(e,t){if(Dl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||to(n)?n:void 0,animate:to(r)?r:void 0}}return e.inherit!==!1?t:{}}function I4(e){const{initial:t,animate:n}=O4(e,w.useContext(Ol));return w.useMemo(()=>({initial:t,animate:n}),[wg(t),wg(n)])}function wg(e){return Array.isArray(e)?e.join(" "):e}const dp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function gw(e,t,n){for(const r in t)!_e(t[r])&&!q1(r,n)&&(e[r]=t[r])}function z4({transformTemplate:e},t){return w.useMemo(()=>{const n=dp();return lp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function F4(e,t){const n=e.style||{},r={};return gw(r,n,e),Object.assign(r,z4(e,t)),r}function V4(e,t){const n={},r=F4(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const xw=()=>({...dp(),attrs:{}});function _4(e,t,n,r){const i=w.useMemo(()=>{const s=xw();return Q1(s,t,Z1(r),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};gw(s,e.style,e),i.style={...s,...i.style}}return i}const B4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fp(e){return typeof e!="string"||e.includes("-")?!1:!!(B4.indexOf(e)>-1||/[A-Z]/u.test(e))}function $4(e,t,n,{latestValues:r},i,s=!1,o){const l=(o??fp(e)?_4:V4)(t,r,i,e),u=D4(t,typeof e=="string",s),d=e!==w.Fragment?{...u,...l,ref:n}:{},{children:f}=t,p=w.useMemo(()=>_e(f)?f.get():f,[f]);return w.createElement(e,{...d,children:p})}function U4({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:W4(n,r,i,e),renderState:t()}}function W4(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=ma(s[p]);let{initial:o,animate:a}=e;const l=Dl(e),u=B1(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;if(f&&typeof f!="boolean"&&!Ll(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const b=tp(e,p[h]);if(b){const{transitionEnd:m,transition:y,...g}=b;for(const x in g){let v=g[x];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(i[x]=v)}for(const x in m)i[x]=m[x]}}}return i}const vw=e=>(t,n)=>{const r=w.useContext(Ol),i=w.useContext(Al),s=()=>U4(e,t,r,i);return n?s():zf(s)},H4=vw({scrapeMotionValuesFromProps:cp,createRenderState:dp}),G4=vw({scrapeMotionValuesFromProps:J1,createRenderState:xw}),K4=Symbol.for("motionComponentSymbol");function Y4(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(s=>{var a;s&&((a=e.onMount)==null||a.call(e,s)),t&&(s?t.mount(s):t.unmount());const o=r.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(s);else o&&(o.current=s)},[t])}const yw=w.createContext({});function hs(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function q4(e,t,n,r,i,s){var y,g;const{visualElement:o}=w.useContext(Ol),a=w.useContext(pw),l=w.useContext(Al),u=w.useContext(up).reducedMotion,d=w.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,isSVG:s}));const f=d.current,p=w.useContext(yw);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&Q4(d.current,n,i,p);const h=w.useRef(!1);w.useInsertionEffect(()=>{f&&h.current&&f.update(n,l)});const b=n[E1],m=w.useRef(!!b&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,b))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,b)));return Uy(()=>{f&&(h.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),m.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)==null||x.call(window,b)}),m.current=!1),f.enteringChildren=void 0)}),f}function Q4(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:ww(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&hs(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:u})}function ww(e){if(e)return e.options.allowProjection!==!1?e.projection:ww(e.parent)}function Mc(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&A4(r);const s=n?n==="svg":fp(e),o=s?G4:H4;function a(u,d){let f;const p={...w.useContext(up),...u,layoutId:X4(u)},{isStatic:h}=p,b=I4(u),m=o(u,h);if(!h&&$y){Z4();const y=J4(p);f=y.MeasureLayout,b.visualElement=q4(e,m,p,i,y.ProjectionNode,s)}return c.jsxs(Ol.Provider,{value:b,children:[f&&b.visualElement?c.jsx(f,{visualElement:b.visualElement,...p}):null,$4(e,u,Y4(m,b.visualElement,d),m,h,t,s)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=w.forwardRef(a);return l[K4]=e,l}function X4({layoutId:e}){const t=w.useContext(If).id;return t&&e!==void 0?t+"-"+e:e}function Z4(e,t){w.useContext(pw).strict}function J4(e){const t=hw(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function eR(e,t){if(typeof Proxy>"u")return Mc;const n=new Map,r=(s,o)=>Mc(s,o,e,t),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,Mc(o,void 0,e,t)),n.get(o))})}const tR=(e,t)=>t.isSVG??fp(e)?new LP(t):new TP(t,{allowProjection:e!==w.Fragment});class nR extends ur{constructor(t){super(t),t.animationState||(t.animationState=FP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ll(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let rR=0;class iR extends ur{constructor(){super(...arguments),this.id=rR++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const sR={animation:{Feature:nR},exit:{Feature:iR}};function yo(e){return{point:{x:e.pageX,y:e.pageY}}}const oR=e=>t=>sp(t)&&e(t,yo(t));function Ns(e,t,n,r){return no(e,t,oR(n),r)}const bw=({current:e})=>e?e.ownerDocument.defaultView:null,bg=(e,t)=>Math.abs(e-t);function aR(e,t){const n=bg(e.x,t.x),r=bg(e.y,t.y);return Math.sqrt(n**2+r**2)}const Sg=new Set(["auto","scroll"]);class Sw{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=h=>{this.handleScroll(h.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Dc(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,m=aR(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!m)return;const{point:y}=h,{timestamp:g}=Re;this.history.push({...y,timestamp:g});const{onStart:x,onMove:v}=this.handlers;b||(x&&x(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,h)},this.handlePointerMove=(h,b)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Lc(b,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(h,b)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Dc(h.type==="pointercancel"?this.lastMoveEventInfo:Lc(b,this.transformPagePoint),this.history);this.startEvent&&m&&m(h,x),y&&y(h,x)},!sp(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const l=yo(t),u=Lc(l,this.transformPagePoint),{point:d}=u,{timestamp:f}=Re;this.history=[{...d,timestamp:f}];const{onSessionStart:p}=n;p&&p(t,Dc(u,this.history)),this.removeListeners=go(Ns(this.contextWindow,"pointermove",this.handlePointerMove),Ns(this.contextWindow,"pointerup",this.handlePointerUp),Ns(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Sg.has(r.overflowX)||Sg.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,i),ae.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ir(this.updatePoint)}}function Lc(e,t){return t?{point:t(e.point)}:e}function kg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Dc({point:e},t){return{point:e,delta:kg(e,kw(t)),offset:kg(e,lR(t)),velocity:cR(t,.1)}}function lR(e){return e[0]}function kw(e){return e[e.length-1]}function cR(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=kw(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Xt(t)));)n--;if(!r)return{x:0,y:0};const s=xt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function uR(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?fe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?fe(n,e,r.max):Math.min(e,n)),e}function jg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function dR(e,{top:t,left:n,bottom:r,right:i}){return{x:jg(e.x,n,i),y:jg(e.y,t,r)}}function Cg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function fR(e,t){return{x:Cg(e.x,t.x),y:Cg(e.y,t.y)}}function pR(e,t){let n=.5;const r=Ge(e),i=Ge(t);return i>r?n=Zs(t.min,t.max-r,e.min):r>i&&(n=Zs(e.min,e.max-i,t.min)),en(0,1,n)}function hR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const hd=.35;function mR(e=hd){return e===!1?e=0:e===!0&&(e=hd),{x:Eg(e,"left","right"),y:Eg(e,"top","bottom")}}function Eg(e,t,n){return{min:Tg(e,t),max:Tg(e,n)}}function Tg(e,t){return typeof e=="number"?e:e[t]||0}const gR=new WeakMap;class xR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ke(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=f=>{n?(this.stopAnimation(),this.snapToCursor(yo(f).point)):this.pauseAnimation()},o=(f,p)=>{this.stopAnimation();const{drag:h,dragPropagation:b,onDragStart:m}=this.getProps();if(h&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=iP(h),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ft(g=>{let x=this.getAxisMotionValue(g).get()||0;if(Zt.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const S=v.layout.layoutBox[g];S&&(x=Ge(S)*(parseFloat(x)/100))}}this.originPoint[g]=x}),m&&ae.postRender(()=>m(f,p)),ad(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:h,dragDirectionLock:b,onDirectionLock:m,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:g}=p;if(b&&this.currentDirection===null){this.currentDirection=vR(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",p.point,g),this.updateAxis("y",p.point,g),this.visualElement.render(),y&&y(f,p)},l=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>ft(f=>{var p;return this.getAnimationState(f)==="paused"&&((p=this.getAxisMotionValue(f).animation)==null?void 0:p.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Sw(t,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:bw(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&ae.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!qo(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=uR(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&hs(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=dR(r.layoutBox,t):this.constraints=!1,this.elastic=mR(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ft(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=hR(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!hs(t))return!1;const r=t.current;zi(r!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=bP(r,i.root,this.visualElement.getTransformPagePoint());let o=fR(i.layout.layoutBox,s);if(n){const a=n(vP(o));this.hasMutatedConstraints=!!a,a&&(o=W1(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=ft(d=>{if(!qo(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,b={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,b)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return ad(this.visualElement,t),r.start(ep(t,r,0,n,this.visualElement,!1))}stopAnimation(){ft(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ft(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ft(n=>{const{drag:r}=this.getProps();if(!qo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],l=s.get()||0;s.set(t[n]-fe(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!hs(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ft(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=pR({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ft(o=>{if(!qo(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(fe(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;gR.set(this.visualElement,this);const t=this.visualElement.current,n=Ns(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!F1(l.target)&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();hs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ae.read(r);const o=no(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ft(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=hd,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function qo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function vR(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class yR extends ur{constructor(t){super(t),this.removeGroupControls=yt,this.removeListeners=yt,this.controls=new xR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ng=e=>(t,n)=>{e&&ae.postRender(()=>e(t,n))};class wR extends ur{constructor(){super(...arguments),this.removePointerDownListener=yt}onPointerDown(t){this.session=new Sw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ng(t),onStart:Ng(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ae.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Ns(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Oc=!1;class bR extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),Oc&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ga.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,Oc=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||ae.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ip.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Oc=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function jw(e){const[t,n]=fw(),r=w.useContext(If);return c.jsx(bR,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(yw),isPresent:t,safeToRemove:n})}const SR={pan:{Feature:wR},drag:{Feature:yR,ProjectionNode:dw,MeasureLayout:jw}};function Pg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&ae.postRender(()=>s(t,yo(t)))}class kR extends ur{mount(){const{current:t}=this.node;t&&(this.unmount=sP(t,(n,r)=>(Pg(this.node,r,"Start"),i=>Pg(this.node,i,"End"))))}unmount(){}}class jR extends ur{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=go(no(this.node.current,"focus",()=>this.onFocus()),no(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Rg(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&ae.postRender(()=>s(t,yo(t)))}class CR extends ur{mount(){const{current:t}=this.node;t&&(this.unmount=lP(t,(n,r)=>(Rg(this.node,r,"Start"),(i,{success:s})=>Rg(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const md=new WeakMap,Ic=new WeakMap,ER=e=>{const t=md.get(e.target);t&&t(e)},TR=e=>{e.forEach(ER)};function NR({root:e,...t}){const n=e||document;Ic.has(n)||Ic.set(n,{});const r=Ic.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(TR,{root:e,...t})),r[i]}function PR(e,t,n){const r=NR(t);return md.set(e,n),r.observe(e),()=>{md.delete(e),r.unobserve(e)}}const RR={some:0,all:1};class AR extends ur{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:RR[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return PR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(MR(t,n))&&this.startObserver()}unmount(){}}function MR({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const LR={inView:{Feature:AR},tap:{Feature:CR},focus:{Feature:jR},hover:{Feature:kR}},DR={layout:{ProjectionNode:dw,MeasureLayout:jw}},OR={...sR,...LR,...SR,...DR},we=eR(OR,tR);function IR({games:e,totalGames:t,onOpenDetails:n}){const[r,i]=w.useState(null),s=["Forza Horizon 6","Resident Evil Requiem","PRAGMATA","Black Myth","Grand Theft Auto V","Red Dead Redemption 2","Cyberpunk 2077","ELDEN RING","Baldur's Gate 3","Hogwarts Legacy","God of War","Spider-Man"],o=w.useMemo(()=>{const l=[];for(const u of s){const d=e.find(f=>f.name.toLowerCase().includes(u.toLowerCase())||u.toLowerCase().includes(f.name.toLowerCase()));d&&d.cover&&l.push(d)}return l.slice(0,12)},[e]),a=l=>l<9;return e.length===0?null:c.jsxs("section",{className:"games-preview-section section section-light",children:[c.jsx("div",{className:"container-main",children:c.jsxs("div",{className:"preview-container",children:[c.jsxs("div",{className:"preview-grid-wrapper",children:[c.jsx(we.div,{className:"preview-grid",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,ease:"easeOut"},children:o.map((l,u)=>{const d=a(u);return c.jsx(we.div,{className:`preview-card ${r===u&&d?"hovered":""} ${d?"":"faded"}`,onClick:()=>d&&n(l),onMouseEnter:()=>d&&i(u),onMouseLeave:()=>d&&i(null),initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.4,delay:u*.06,ease:"easeOut"},style:{cursor:d?"pointer":"default"},children:c.jsxs(we.div,{className:"card-inner",animate:{scale:r===u&&d?1.08:1,y:r===u&&d?-8:0},transition:{duration:.3,ease:"easeOut"},children:[c.jsx("div",{className:"card-glow"}),c.jsx("div",{className:"card-shine"}),c.jsx("img",{src:l.cover,alt:l.name,loading:"lazy"}),c.jsx("div",{className:"preview-overlay"})]})},l.steam_appid)})}),c.jsx("div",{className:"grid-fade-overlay"})]}),c.jsxs(we.div,{className:"preview-content",initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:.2,ease:"easeOut"},children:[c.jsxs("div",{className:"content-badge",children:[c.jsx(Ov,{size:16}),c.jsx("span",{children:"Arquivos Oficiais Steam"})]}),c.jsxs("h2",{className:"content-title",children:[c.jsx("span",{className:"highlight",children:"Toda a Steam"}),c.jsx("br",{}),"desbloqueada"]}),c.jsx("p",{className:"content-description",children:"Esqueça downloads lentos ou sites estranhos. Com a Overise, os jogos vão direto pra sua biblioteca. Sem família Steam, sem arquivos duvidosos. Funciona até com Denuvo."}),c.jsxs("div",{className:"content-features",children:[c.jsxs("div",{className:"feature",children:[c.jsx(xf,{size:18}),c.jsxs("div",{className:"feature-text",children:[c.jsx("span",{className:"feature-title",children:"Velocidade Máxima"}),c.jsx("span",{className:"feature-desc",children:"Baixe direto dos servidores da Steam usando o máximo da sua internet."})]})]}),c.jsxs("div",{className:"feature",children:[c.jsx(gf,{size:18}),c.jsxs("div",{className:"feature-text",children:[c.jsx("span",{className:"feature-title",children:"Segurança Total"}),c.jsx("span",{className:"feature-desc",children:"Nada de vírus ou arquivos suspeitos. Jogo original e limpo."})]})]}),c.jsxs("div",{className:"feature",children:[c.jsx(mS,{size:18}),c.jsxs("div",{className:"feature-text",children:[c.jsx("span",{className:"feature-title",children:"Acesso Vitalício"}),c.jsx("span",{className:"feature-desc",children:"Pagou uma vez, é seu pra sempre. Sem mensalidade."})]})]})]})]})]})}),c.jsx("style",{children:`
        .games-preview-section {
          padding: clamp(60px, 10vw, 100px) 0;
        }

        .preview-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 980px) {
          .preview-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .preview-grid-wrapper {
          position: relative;
          width: 100%;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
        }
        @media (max-width: 480px) {
          .preview-grid {
            gap: 6px;
          }
        }

        .grid-fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, var(--bg, #030303) 0%, transparent 100%);
          pointer-events: none;
          z-index: 5;
        }

        .preview-card {
          position: relative;
        }

        .preview-card.faded {
          opacity: 0.5;
          pointer-events: none;
        }

        .card-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 10px;
          overflow: hidden;
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,.08);
          transition: border-color .3s ease, box-shadow .3s ease;
        }

        .preview-card.hovered .card-inner {
          border-color: rgba(0,255,65,.6);
          box-shadow: 
            0 12px 40px rgba(0,0,0,.7),
            0 0 40px rgba(0,255,65,.2),
            0 0 80px rgba(0,255,65,.1);
        }

        .card-glow {
          position: absolute;
          inset: -100%;
          background: radial-gradient(circle at 50% 50%, rgba(0,255,65,.2), transparent 50%);
          opacity: 0;
          transition: opacity .4s ease;
          pointer-events: none;
          z-index: 2;
        }
        .preview-card.hovered .card-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .card-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,.08) 40%,
            rgba(255,255,255,.15) 50%,
            rgba(255,255,255,.08) 60%,
            transparent 80%
          );
          transform: rotate(25deg);
          pointer-events: none;
          z-index: 3;
          animation: shine-sweep 4s ease-in-out infinite;
          animation-delay: calc(var(--card-index, 0) * 0.15s);
        }

        .preview-card:nth-child(1) .card-shine { --card-index: 0; }
        .preview-card:nth-child(2) .card-shine { --card-index: 1; }
        .preview-card:nth-child(3) .card-shine { --card-index: 2; }
        .preview-card:nth-child(4) .card-shine { --card-index: 3; }
        .preview-card:nth-child(5) .card-shine { --card-index: 4; }
        .preview-card:nth-child(6) .card-shine { --card-index: 5; }
        .preview-card:nth-child(7) .card-shine { --card-index: 6; }
        .preview-card:nth-child(8) .card-shine { --card-index: 7; }
        .preview-card:nth-child(9) .card-shine { --card-index: 8; }
        .preview-card:nth-child(10) .card-shine { --card-index: 9; }
        .preview-card:nth-child(11) .card-shine { --card-index: 10; }
        .preview-card:nth-child(12) .card-shine { --card-index: 11; }

        @keyframes shine-sweep {
          0%, 100% {
            top: -100%;
            left: -100%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            top: 100%;
            left: 150%;
            opacity: 1;
          }
          60%, 100% {
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .card-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .preview-card.hovered .card-inner img {
          transform: scale(1.1);
        }

        .preview-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.4) 0%, transparent 60%);
          pointer-events: none;
          transition: opacity .3s ease;
        }
        .preview-card.hovered .preview-overlay {
          opacity: .2;
        }

        .preview-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (max-width: 980px) {
          .preview-content {
            text-align: center;
            align-items: center;
          }
        }
        @media (max-width: 640px) {
          .preview-content {
            text-align: center;
            align-items: center;
          }
          .content-features {
            align-items: center;
          }
          .feature {
            text-align: left;
          }
        }

        .content-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(0,255,65,.1);
          border: 1px solid rgba(0,255,65,.25);
          border-radius: 20px;
          color: var(--neon);
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .5px;
          width: fit-content;
        }

        .content-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 950;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0;
        }
        .content-title .highlight {
          color: var(--neon);
          text-shadow: 0 0 30px rgba(0,255,65,.4);
        }

        .content-description {
          font-size: 16px;
          color: rgba(255,255,255,.80);
          line-height: 1.75;
          max-width: 480px;
          margin: 0;
          font-weight: 500;
        }

        .content-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .content-features {
            gap: 14px;
          }
        }

        .feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255,255,255,.85);
          font-size: 14px;
          font-weight: 600;
        }
        .feature svg {
          color: var(--neon);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .feature-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .feature-title {
          color: #fff;
          font-weight: 800;
          font-size: 15px;
        }
        .feature-desc {
          color: rgba(255,255,255,.75);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: var(--neon);
          color: #000;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .5px;
          border-radius: 12px;
          text-decoration: none;
          transition: all .25s ease;
          box-shadow: 0 0 25px rgba(0,255,65,.3);
          width: fit-content;
          margin-top: 8px;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(0,255,65,.5);
        }
      `})]})}const Qo=[{id:1,name:"Elden Ring",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg"},{id:2,name:"God of War",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/library_600x900.jpg"},{id:3,name:"Hogwarts",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg"},{id:4,name:"Spider-Man",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/library_600x900.jpg"},{id:5,name:"Forza 5",cover:"https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_600x900.jpg"}];function zR(){const e=w.useRef(null),[t,n]=w.useState({rotateX:0,rotateY:0}),[r,i]=w.useState(!1),s=l=>{if(!e.current)return;const u=e.current.getBoundingClientRect(),d=u.left+u.width/2,f=u.top+u.height/2,p=l.clientX-d,h=l.clientY-f,b=p/(u.width/2)*12,m=-(h/(u.height/2))*12;n({rotateX:m,rotateY:b})},o=()=>{n({rotateX:0,rotateY:0}),i(!1)},a=()=>{i(!0)};return c.jsxs("section",{id:"como-funciona",className:"section section-light",children:[c.jsx("div",{className:"container-main",children:c.jsxs("div",{className:"app-section-grid",children:[c.jsxs("div",{className:"app-section-content",children:[c.jsxs("span",{className:"app-badge",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),"Windows App"]}),c.jsxs("h2",{className:"app-title",children:["Overise App",c.jsx("br",{}),c.jsx("span",{className:"app-title-accent",children:"Baixe jogos em segundos"})]}),c.jsxs("p",{className:"app-desc",children:["O jeito mais fácil de acessar sua biblioteca.",c.jsx("br",{}),"Escolha o jogo, clique e baixe direto pela Steam."]}),c.jsxs("div",{className:"app-features",children:[c.jsxs("span",{className:"app-feature",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"Download Instantâneo"]}),c.jsxs("span",{className:"app-feature",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"100% Seguro"]}),c.jsxs("span",{className:"app-feature",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"})}),"Acesso Vitalício"]})]}),c.jsxs("a",{href:"#planos",className:"app-cta",children:["Desbloquear Steam",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsx("div",{className:"app-mockup-container",children:c.jsxs("div",{ref:e,className:`app-mockup-wrapper ${r?"hovering":""}`,onMouseMove:s,onMouseLeave:o,onMouseEnter:a,style:{transform:`perspective(1000px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg)`},children:[c.jsx("div",{className:"mockup-glow"}),c.jsxs("div",{className:"mockup-device",children:[c.jsxs("div",{className:"mockup-titlebar",children:[c.jsxs("div",{className:"titlebar-dots",children:[c.jsx("span",{className:"dot-red"}),c.jsx("span",{className:"dot-yellow"}),c.jsx("span",{className:"dot-green"})]}),c.jsx("span",{className:"titlebar-text",children:"Overise"})]}),c.jsxs("div",{className:"mockup-app-content",children:[c.jsxs("div",{className:"mockup-sidebar",children:[c.jsxs("div",{className:"sidebar-logo",children:[c.jsx("span",{className:"logo-w",children:"OVER"}),c.jsx("span",{className:"logo-g",children:"ISE"})]}),c.jsxs("div",{className:"sidebar-menu",children:[c.jsxs("div",{className:"menu-item active",children:[c.jsx("span",{className:"menu-dot"}),"Biblioteca"]}),c.jsx("div",{className:"menu-item",children:"Downloads"}),c.jsx("div",{className:"menu-item",children:"Configurações"})]}),c.jsxs("div",{className:"sidebar-status",children:[c.jsx("span",{className:"status-dot"}),"Online"]})]}),c.jsxs("div",{className:"mockup-main",children:[c.jsxs("div",{className:"featured-game",children:[c.jsx("img",{src:Qo[0].cover,alt:Qo[0].name}),c.jsxs("div",{className:"featured-overlay",children:[c.jsx("span",{className:"featured-tag",children:"Destaque"}),c.jsx("h4",{children:Qo[0].name}),c.jsx("span",{className:"featured-price",children:"Liberado"})]})]}),c.jsx("div",{className:"mockup-game-grid",children:Qo.slice(1,5).map(l=>c.jsx("div",{className:"mockup-game-item",children:c.jsx("img",{src:l.cover,alt:l.name})},l.id))})]})]})]}),c.jsx("div",{className:"mockup-reflection"})]})})]})}),c.jsx("style",{children:`
        .app-section-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 980px) {
          .app-section-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .app-section-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 980px) {
          .app-section-content {
            align-items: center;
            text-align: center;
          }
        }

        .app-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(0,255,65,.08);
          border: 1px solid rgba(0,255,65,.25);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: var(--neon);
          margin-bottom: 20px;
        }

        .app-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 950;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .app-title-accent {
          color: var(--neon);
        }

        .app-desc {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 24px;
          max-width: 400px;
        }

        .app-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }

        .app-feature {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,.85);
        }

        .app-feature svg {
          color: var(--neon);
        }

        .app-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          background: var(--neon);
          color: #000;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 14px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .app-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0,255,65,.35);
        }

        /* 3D Mockup */
        .app-mockup-container {
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        .app-mockup-wrapper {
          position: relative;
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .app-mockup-wrapper.hovering {
          transition: transform 0.05s ease-out;
        }

        .mockup-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at center, rgba(0,255,65,.15), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .app-mockup-wrapper.hovering .mockup-glow {
          opacity: 1;
        }

        .mockup-device {
          width: 480px;
          background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          box-shadow: 
            0 50px 100px rgba(0,0,0,.6),
            0 0 0 1px rgba(255,255,255,.05) inset;
          transform-style: preserve-3d;
        }

        @media (max-width: 640px) {
          .mockup-device {
            width: 340px;
          }
        }

        .mockup-titlebar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0,0,0,.5);
          border-bottom: 1px solid rgba(255,255,255,.06);
        }

        .titlebar-dots {
          display: flex;
          gap: 6px;
        }

        .titlebar-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f57; }
        .dot-yellow { background: #febc2e; }
        .dot-green { background: #28c840; }

        .titlebar-text {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,.5);
          letter-spacing: 0.5px;
        }

        .mockup-app-content {
          display: flex;
          height: 300px;
        }

        @media (max-width: 640px) {
          .mockup-app-content {
            height: 220px;
          }
        }

        .mockup-sidebar {
          width: 120px;
          background: rgba(0,0,0,.4);
          border-right: 1px solid rgba(255,255,255,.06);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .mockup-sidebar {
            width: 90px;
            padding: 12px 8px;
          }
        }

        .sidebar-logo {
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .logo-w { color: #fff; }
        .logo-g { color: var(--neon); }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .menu-item {
          font-size: 11px;
          color: rgba(255,255,255,.4);
          padding: 8px 10px;
          border-radius: 6px;
          cursor: default;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .menu-item.active {
          background: rgba(0,255,65,.1);
          color: var(--neon);
        }

        .menu-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon);
        }

        .sidebar-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: var(--neon);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon);
          box-shadow: 0 0 8px var(--neon);
        }

        .mockup-main {
          flex: 1;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .featured-game {
          position: relative;
          height: 140px;
          border-radius: 10px;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .featured-game {
            height: 100px;
          }
        }

        .featured-game img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .featured-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.9), transparent 70%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 12px;
        }

        .featured-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 8px;
          background: var(--neon);
          color: #000;
          font-size: 9px;
          font-weight: 800;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .featured-overlay h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 800;
          color: #fff;
        }

        .featured-price {
          font-size: 11px;
          color: var(--neon);
          font-weight: 700;
        }

        .mockup-game-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          flex: 1;
        }

        .mockup-game-item {
          border-radius: 6px;
          overflow: hidden;
          background: rgba(255,255,255,.05);
        }

        .mockup-game-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mockup-reflection {
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: -60px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(0,255,65,.08), transparent);
          filter: blur(20px);
          transform: scaleY(-0.3);
          pointer-events: none;
        }
      `})]})}function FR({games:e,totalGames:t,getGamesByCategory:n,searchGames:r,onOpenDetails:i}){const[s,o]=w.useState(null),[a,l]=w.useState(0),[u,d]=w.useState(!1),[f,p]=w.useState(""),[h,b]=w.useState(0);w.useMemo(()=>s?n(s):e,[s,e,n]);const m=["The Witcher 3: Wild Hunt","Sekiro: Shadows Die Twice","Dark Souls III","Horizon Forbidden West","Detroit: Become Human","Assassin's Creed Valhalla","Red Dead Redemption 2","ELDEN RING","Cyberpunk 2077","God of War Ragnarök","The Last of Us Part I","Baldur's Gate 3","Hogwarts Legacy","Forza Horizon 5","Counter-Strike 2"],y=w.useMemo(()=>{const A=[...e.filter(D=>m.some(O=>D.name.toLowerCase().includes(O.toLowerCase())||O.toLowerCase().includes(D.name.toLowerCase())))];for(let D=A.length-1;D>0;D--){const O=Math.floor(Math.random()*(D+1));[A[D],A[O]]=[A[O],A[D]]}return A},[e]),g=w.useMemo(()=>{if(y.length===0)return[];const T=[],A=a*3%y.length;for(let D=0;D<3;D++)T.push(y[(A+D)%y.length]);return T},[y,a]),x=Math.max(0,Math.floor(y.length/3)-1),v=()=>{l(T=>Math.max(0,T-1))},S=()=>{l(T=>Math.min(x,T+1))};w.useEffect(()=>{l(0)},[s]);const k=w.useMemo(()=>{const T=s?n(s):e;if(!f.trim())return T;const A=f.toLowerCase().trim();return T.filter(D=>D.name.toLowerCase().includes(A))},[f,s,e,n]),j=8,C=w.useMemo(()=>{const T=h*j;return k.slice(T,T+j)},[k,h]),E=(h+1)*j<k.length;return c.jsxs("section",{id:"catalogo",className:"catalog-section",style:{padding:"clamp(50px, 8vw, 80px) 0"},children:[c.jsx("div",{className:"catalog-header",children:c.jsxs("div",{children:[c.jsx("h2",{children:"Verificar Disponibilidade"}),c.jsx("p",{children:"Pesquise abaixo. Se o jogo está na Steam, é quase certo que nossa ferramenta consegue desbloqueá-lo para você."})]})}),c.jsxs("div",{className:"catalog-shell",children:[c.jsxs("aside",{className:"side",children:[c.jsxs("div",{className:"side-title",children:[c.jsx("span",{children:"Categorias"}),c.jsx("span",{children:"Filtro"})]}),c.jsxs("div",{className:"cats",children:[c.jsx("button",{onClick:()=>o(null),className:`cat ${s?"":"active"}`,children:"Todos"}),WE.map(T=>c.jsx("button",{onClick:()=>o(T),className:`cat ${s===T?"active":""}`,children:T},T))]})]}),c.jsxs("div",{className:"catalog-main",children:[c.jsxs("div",{className:"showcase-carousel",children:[c.jsx("button",{className:"showcase-arrow showcase-arrow-left",onClick:v,disabled:a===0,children:c.jsx(Ou,{size:20})}),c.jsx("div",{className:"showcase-row",children:g.map((T,A)=>c.jsxs("div",{className:"game showcase-animate",style:{animationDelay:`${A*.1}s`},onClick:()=>i(T),children:[c.jsxs("div",{className:"game-img",children:[c.jsx("img",{src:T.cover,alt:T.name,loading:"lazy"}),c.jsx("div",{className:"game-grad"})]}),c.jsxs("div",{className:"game-info",children:[c.jsx("span",{className:"game-name",children:T.name}),c.jsxs("div",{className:"tag-row",children:[T.categories.slice(0,1).map(D=>c.jsx("span",{className:"tag",children:D},D)),c.jsx("span",{className:"tag ok",children:"Disponível"})]}),c.jsxs("div",{className:"game-cta",children:[c.jsx("span",{className:"tiny",children:"Steam"}),c.jsx("a",{href:"#como-funciona",className:"unlock-btn",onClick:D=>D.stopPropagation(),children:"Desbloquear"})]})]})]},`${T.steam_appid}-${a}-${A}`))}),c.jsx("button",{className:"showcase-arrow showcase-arrow-right",onClick:S,disabled:a>=x,children:c.jsx($a,{size:20})})]}),c.jsxs("div",{className:"catalog-more-row",children:[c.jsxs("button",{onClick:()=>d(!u),className:"btn catalog-more-btn",children:[c.jsx("span",{className:"catalog-more-icon",children:c.jsx(zh,{size:16})}),u?"Fechar catálogo":"Ver catálogo completo"]}),c.jsx("span",{className:"catalog-more-hint",children:"Abra a biblioteca completa com busca e paginação."})]}),u&&c.jsxs("div",{className:"full-catalog show",children:[c.jsxs("div",{className:"full-top",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"full-title",children:"Catálogo completo"}),c.jsx("p",{className:"full-sub",children:"Pesquise pelo nome e clique para ver detalhes."})]}),c.jsxs("div",{className:"full-search",children:[c.jsx("span",{className:"full-search-icon",children:c.jsx(zh,{size:16})}),c.jsx("input",{type:"text",placeholder:"Digite o nome do jogo...",value:f,onChange:T=>{p(T.target.value),b(0)}}),c.jsx("button",{className:"ghost-btn",onClick:()=>d(!1),children:"Fechar"})]})]}),c.jsx("div",{className:"full-grid",children:C.length>0?C.map(T=>c.jsxs("div",{className:"full-card",onClick:()=>i(T),children:[c.jsxs("div",{className:"full-card-img",children:[c.jsx("img",{src:T.cover,alt:T.name,loading:"lazy",onError:A=>{const D=A.target;D.style.opacity="0"}}),c.jsx("div",{className:"full-card-grad"})]}),c.jsx("div",{className:"full-card-info",children:c.jsx("span",{className:"full-card-name",children:T.name})})]},`${T.steam_appid}-${T.name}`)):c.jsxs("div",{className:"empty-state",children:[c.jsx("b",{children:"Nenhum resultado"}),c.jsx("span",{children:"Tente outra busca ou limpe o filtro."})]})}),c.jsx("div",{className:"full-bottom",children:E&&c.jsx("button",{className:"btn btn-small",onClick:()=>b(T=>T+1),children:"Carregar mais"})})]})]})]}),c.jsx("style",{children:`
        .catalog-section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          overflow: visible;
        }
        @media (max-width: 640px) {
          .catalog-section {
            width: calc(100% - 32px);
          }
        }
        .catalog-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .catalog-header {
            flex-direction: column;
            gap: 14px;
          }
        }
        .catalog-header h2 {
          margin: 0;
          font-size: 28px;
          font-weight: 950;
          letter-spacing: -1px;
          color: #fff;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .catalog-header {
            text-align: center;
            align-items: center;
          }
          .catalog-header h2 {
            font-size: 22px;
          }
        }
        .catalog-header p {
          margin: 8px 0 0;
          color: rgba(255,255,255,.80);
          max-width: 56ch;
          line-height: 1.7;
          font-size: 15px;
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .catalog-header p {
            font-size: 14px;
            line-height: 1.6;
            text-align: center;
          }
        }
        .catalog-actions { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
        @media (max-width: 640px) {
          .catalog-actions {
            width: 100%;
            justify-content: flex-start;
          }
        }
        
        .catalog-shell {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 14px;
          align-items: start;
        }
        @media (max-width: 980px) {
          .catalog-shell { 
            grid-template-columns: 1fr; 
            gap: 16px;
          }
        }
        
        .side {
          position: sticky;
          top: 86px;
          padding: 14px;
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadowSoft);
          z-index: 10;
        }
        @media (max-width: 980px) {
          .side {
            position: relative;
            top: auto;
            z-index: 1;
          }
        }
        @media (max-width: 640px) {
          .side {
            padding: 12px;
          }
        }
        .side-title {
          font-weight: 950;
          letter-spacing: .6px;
          text-transform: uppercase;
          font-size: 12px;
          color: var(--muted2);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .cats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        @media (max-width: 640px) {
          .cats {
            gap: 6px;
          }
        }
        .cat {
          cursor: pointer;
          user-select: none;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.22);
          font-weight: 950;
          font-size: 12px;
          letter-spacing: .4px;
          color: #d7d7d7;
          transition: .2s ease;
          text-transform: uppercase;
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .cat {
            padding: 8px 10px;
            font-size: 11px;
            border-radius: 12px;
          }
        }
        .cat:hover {
          transform: translateY(-1px);
          border-color: rgba(0,255,65,.25);
        }
        .cat.active {
          background: rgba(0,255,65,.90);
          color: #000;
          border-color: rgba(0,255,65,.55);
        }

        .showcase-carousel {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .showcase-arrow {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.05);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .2s ease;
        }
        .showcase-arrow:hover:not(:disabled) {
          background: rgba(0,255,65,.15);
          border-color: rgba(0,255,65,.4);
          color: var(--neon);
        }
        .showcase-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        @media (max-width: 640px) {
          .showcase-arrow {
            display: none;
          }
        }

        .showcase-row {
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 14px;
        }
        .showcase-row .game {
          flex: 1 1 calc(33.333% - 10px);
          min-width: 200px;
          max-width: 100%;
        }
        @media (max-width: 980px) {
          .showcase-row .game {
            flex: 1 1 calc(50% - 7px);
            min-width: 180px;
          }
        }
        @media (max-width: 640px) {
          .showcase-row {
            flex-direction: column;
            gap: 16px;
          }
          .showcase-row .game {
            flex: 1 1 100%;
            min-width: 100%;
            width: 100%;
          }
        }
        
        .game {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadowSoft);
          overflow: hidden;
          cursor: pointer;
          min-width: 0;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        @media (max-width: 640px) {
          .game {
            border-radius: 14px;
          }
        }
        
        .game.showcase-animate {
          animation: showcaseEnter 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        
        @keyframes showcaseEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .game:hover {
          transform: translateY(-4px);
          border-color: rgba(0,255,65,.22);
        }
        .game-img {
          aspect-ratio: 16/9;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        .game-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.08);
          opacity: 1 !important;
        }
        .game:hover .game-img img {
          filter: saturate(1.12) contrast(1.10) brightness(1.05);
        }
        .game-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.86), rgba(0,0,0,.06));
          pointer-events: none;
        }
        .game-info {
          padding: 12px 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
        }
        @media (max-width: 640px) {
          .game-info {
            padding: 10px;
            gap: 8px;
          }
        }
        .game-name {
          font-weight: 950;
          font-size: 12px;
          letter-spacing: .4px;
          color: #fff;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 640px) {
          .game-name {
            font-size: 11px;
          }
        }
        .tag-row { 
          display: flex; 
          gap: 6px; 
          flex-wrap: wrap;
          max-width: 100%;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .tag-row { 
            gap: 5px; 
          }
        }
        .tag {
          font-size: 10px;
          font-weight: 950;
          letter-spacing: .4px;
          text-transform: uppercase;
          padding: 6px 8px;
          border-radius: 999px;
          background: rgba(0,0,0,.30);
          border: 1px solid rgba(255,255,255,.10);
          color: #fff;
          text-shadow: 0 10px 30px rgba(0,0,0,.95);
          white-space: nowrap;
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 640px) {
          .tag {
            padding: 5px 7px;
            font-size: 9px;
            max-width: 100px;
          }
        }
        .tag.ok { border-color: rgba(0,255,65,.30); }
        .game-cta {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          margin-top: 4px;
        }
        @media (max-width: 640px) {
          .game-cta { 
            gap: 8px;
            margin-top: 2px; 
          }
        }
        .tiny {
          font-size: 11px;
          color: var(--muted2);
          letter-spacing: .4px;
        }
        @media (max-width: 640px) {
          .tiny { font-size: 10px; }
        }
        .ghost-btn {
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(0,0,0,.22);
          color: #fff;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 11px;
          cursor: pointer;
          transition: .2s ease;
          white-space: nowrap;
        }
        .ghost-btn:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,.22);
        }
        .unlock-btn {
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(0,255,65,.95), rgba(0,200,55,.85));
          color: #000;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 11px;
          cursor: pointer;
          transition: .2s ease;
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .unlock-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0,255,65,.25);
        }
        .btn-primary-small {
          padding: 10px 16px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(0,255,65,.95), rgba(0,200,55,.85));
          color: #000;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: .2s ease;
        }
        .btn-primary-small:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,255,65,.25);
        }

        .catalog-more-row {
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          flex-wrap: wrap;
        }
        .catalog-more-btn {
          padding: 12px 16px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 950;
        }
        .catalog-more-icon {
          width: 28px;
          height: 28px;
          border-radius: 10px;
          background: rgba(0,255,65,.12);
          border: 1px solid rgba(0,255,65,.22);
          color: var(--neon);
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          font-weight: 950;
        }
        .catalog-more-hint {
          color: var(--muted2);
          font-size: 12px;
          line-height: 1.4;
        }

        .full-catalog {
          margin-top: 16px;
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          box-shadow: var(--shadowSoft);
          padding: 16px;
          overflow: hidden;
          animation: floatIn .45s ease both;
        }
        .full-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .full-title {
          font-weight: 950;
          letter-spacing: -.8px;
          text-transform: uppercase;
          color: #fff;
          font-size: 18px;
          margin: 0 0 2px;
        }
        .full-sub {
          color: var(--muted2);
          font-size: 12px;
          line-height: 1.4;
          margin: 0;
        }
        .full-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.24);
          flex: 1 1 420px;
          min-width: 280px;
        }
        .full-search-icon {
          width: 28px;
          height: 28px;
          border-radius: 10px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.08);
          display: grid;
          place-items: center;
          color: #cfcfcf;
          flex: 0 0 auto;
        }
        .full-search input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #fff;
          font-weight: 800;
          letter-spacing: .2px;
          font-size: 13px;
          min-width: 0;
        }
        .full-search input::placeholder {
          color: rgba(255,255,255,.42);
        }

        .full-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 980px) {
          .full-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .full-grid { grid-template-columns: 1fr; }
        }

        .full-card {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.10);
          background: #0a0a0a;
          overflow: hidden;
          cursor: pointer;
          transition: transform .25s ease, border-color .25s ease;
          min-width: 0;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          user-select: none;
          outline: none;
        }
        .full-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0,255,65,.22);
        }
        .full-card:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        .full-card:focus {
          outline: none;
        }
        .full-card-img {
          aspect-ratio: 16 / 9;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }
        .full-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.06);
          -webkit-user-drag: none;
          pointer-events: none;
          background: #0a0a0a;
        }
        .full-card:hover .full-card-img img {
          filter: saturate(1.12) contrast(1.10) brightness(1.05);
        }
        .full-card-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.06));
          pointer-events: none;
        }
        .full-card-info {
          padding: 10px 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          min-width: 0;
        }
        .full-card-name {
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .4px;
          font-size: 11px;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1 1 auto;
          min-width: 0;
        }
        .full-card-btn {
          padding: 9px 10px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(0,0,0,.22);
          color: #fff;
          font-weight: 950;
          text-transform: uppercase;
          font-size: 10px;
          cursor: pointer;
          white-space: nowrap;
        }
        .full-bottom {
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .empty-state {
          grid-column: 1 / -1;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(0,0,0,.18);
          padding: 18px;
        }
        .empty-state b {
          display: block;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: .4px;
        }
        .empty-state span {
          display: block;
          margin-top: 6px;
          color: var(--muted2);
          font-size: 12px;
        }

        .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.05);
          color: #fff;
          font-weight: 950;
          letter-spacing: .5px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: .22s ease;
          overflow: hidden;
          white-space: nowrap;
        }
        .btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,.18);
          box-shadow: var(--shadowSoft);
        }
        .btn-small {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 12px;
        }
      `})]})}function VR(){return c.jsxs("section",{id:"sobre",className:"section container-main",children:[c.jsxs("div",{className:"about-container",children:[c.jsxs("div",{className:"about-bg",children:[c.jsx("img",{src:"https://images.igdb.com/igdb/image/upload/t_1080p/co1rgi.jpg",alt:"Hollow Knight background"}),c.jsx("div",{className:"about-bg-overlay"})]}),c.jsxs("div",{className:"about-content",children:[c.jsx("h2",{className:"about-title",children:"POR QUE É MELHOR QUE PIRATARIA?"}),c.jsxs("p",{className:"about-text",children:["Jogos piratas trazem vírus, travam o computador e não conectam na internet. A Overise entrega o ",c.jsx("strong",{children:"oposto disso"}),"."]}),c.jsxs("p",{className:"about-text",children:["Nós fornecemos acesso a uma ",c.jsx("strong",{children:"licença oficial compartilhada"}),". Você abre a sua Steam e baixa o jogo original. Ele atualiza sozinho, não trava e você joga com qualidade máxima. É o jeito inteligente e barato de jogar."]}),c.jsx("div",{className:"about-divider"}),c.jsx("span",{className:"about-tagline",children:"Jogue sem medo e sem vírus."})]})]}),c.jsx("style",{children:`
        .about-container {
          position: relative;
          border-radius: var(--r2);
          overflow: hidden;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .about-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        
        .about-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: saturate(0.8) brightness(0.5);
        }
        
        .about-bg-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at center, rgba(5,5,5,.65), rgba(5,5,5,.92)),
            linear-gradient(to top, rgba(5,5,5,.95), transparent 60%);
        }
        
        .about-content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 60px 30px;
          max-width: 700px;
        }
        
        .about-title {
          font-size: clamp(24px, 5vw, 36px);
          font-weight: 950;
          letter-spacing: -1px;
          color: #fff;
          text-transform: uppercase;
          text-shadow: 0 10px 60px rgba(0,0,0,.8);
          margin: 0 0 24px;
        }
        
        .about-text {
          font-size: 16px;
          line-height: 1.9;
          color: rgba(255,255,255,.85);
          margin: 0;
          text-shadow: 0 4px 20px rgba(0,0,0,.6);
        }
        @media (max-width: 640px) {
          .about-text {
            font-size: 15px;
            line-height: 1.75;
          }
        }
        
        .about-text strong {
          color: #fff;
          font-weight: 800;
        }
        
        .about-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--neon), transparent);
          margin: 28px auto;
          border-radius: 2px;
        }
        
        .about-tagline {
          font-size: 14px;
          font-weight: 800;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 0 20px rgba(0,255,65,.4);
        }
      `})]})}const Ag=[{name:"Jz",avatar:Mf,text:"Sinceramente achei que fosse mentira pelo preço baixo. Paguei para ver e me surpreendi. Em 10 minutos eu já estava baixando o jogo pela minha Steam com velocidade total. É surreal."},{name:"Adrielly",avatar:Lf,text:"Eu não entendo nada de computador e tinha medo de ser difícil de instalar. Mas o sistema faz tudo sozinho. É só clicar em Ativar e o jogo aparece na biblioteca pronto para jogar."},{name:"Maicon",avatar:Df,text:"O melhor para mim é baixar na velocidade máxima. Nada daqueles sites lentos cheios de vírus. Aqui vem direto do servidor oficial e jogo online com meus amigos sem travar."},{name:"Wl",avatar:Of,text:"Só neste mês eu economizei uns 500 reais. Eu ia comprar dois lançamentos caros mas peguei o plano vitalício aqui e já estou jogando os dois. Recomendo demais."},{name:"Lynguinho",avatar:null,text:"Simplesmente uma obra prima, comprei e deu tudo certinho, e o suporte atende muito rápido além de ser bom, super recomendo."},{name:"Cliente",avatar:null,text:"Obrigado irmão slc. Tem tudo mesmo. Brabo demais!"}],Xo=[{id:1,src:"/plano-vitalicio/videos/testimonial-1.mp4",poster:""},{id:2,src:"/plano-vitalicio/videos/testimonial-2.mov",poster:""},{id:3,src:"/plano-vitalicio/videos/testimonial-3.mp4",poster:""}];function Mg({src:e}){const t=w.useRef(null),[n,r]=w.useState(!0),[i,s]=w.useState(!0),[o,a]=w.useState(!1),l=()=>{t.current&&(n?t.current.pause():t.current.play(),r(!n))},u=d=>{d.stopPropagation(),t.current&&(t.current.muted=!i,s(!i))};return c.jsxs("div",{className:"video-testimonial-card",onClick:l,children:[c.jsx("video",{ref:t,src:e,muted:!0,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",className:"video-testimonial-video",onLoadedData:()=>a(!0),onPlay:()=>r(!0),onPause:()=>r(!1)}),!o&&c.jsx("div",{className:"video-loading-placeholder",children:c.jsx(Ih,{size:32,fill:"white",style:{opacity:.5}})}),c.jsx("div",{className:`video-overlay ${n?"playing":""}`,children:!n&&c.jsx("div",{className:"play-button",children:c.jsx(Ih,{size:32,fill:"white"})})}),c.jsx("button",{className:"mute-button",onClick:u,children:i?c.jsx(xS,{size:18}):c.jsx(gS,{size:18})})]})}function _R(){const[e,t]=w.useState(0),[n,r]=w.useState(0),[i,s]=w.useState(!1),o=()=>typeof window<"u"?window.innerWidth<640?1:window.innerWidth<1024?2:3:3,[a,l]=w.useState(o());w.useState(()=>{if(typeof window<"u"){s(window.innerWidth<640);const y=()=>{s(window.innerWidth<640),l(o())};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)}});const u=Math.max(0,Ag.length-a),d=Xo.length-1,f=()=>{t(y=>Math.max(0,y-1))},p=()=>{t(y=>Math.min(u,y+1))},h=()=>{r(y=>Math.max(0,y-1))},b=()=>{r(y=>Math.min(d,y+1))},m=Ag.slice(e,e+a);return c.jsxs("section",{id:"testemunhos",className:"section section-light",style:{padding:"80px 0"},children:[c.jsxs("div",{className:"container-main",children:[c.jsxs(we.div,{className:"testimonials-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[c.jsx("h2",{className:"testimonials-title",children:"QUEM BAIXOU, APROVOU"}),c.jsx("p",{className:"testimonials-subtitle",children:"Veja o que a nossa comunidade diz sobre a economia e a segurança que a Overise proporciona."})]}),c.jsxs("div",{className:"testimonials-carousel",children:[c.jsx("button",{className:"carousel-arrow carousel-arrow-left",onClick:f,disabled:e===0,children:c.jsx(Ou,{size:24})}),c.jsx("div",{className:"testimonials-track",children:c.jsx(nl,{mode:"wait",children:c.jsx(we.div,{className:"testimonials-grid",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:m.map((y,g)=>c.jsxs("div",{className:"testimonial-card",children:[c.jsx("div",{className:"testimonial-stars",children:[...Array(5)].map((x,v)=>c.jsx(pS,{size:16,fill:"var(--neon)",stroke:"var(--neon)"},v))}),c.jsxs("p",{className:"testimonial-text",children:['"',y.text,'"']}),c.jsxs("div",{className:"testimonial-author",children:[y.avatar?c.jsx("img",{src:y.avatar,alt:`Foto de ${y.name}`,className:"testimonial-avatar-img"}):c.jsx("div",{className:"testimonial-avatar-placeholder",children:y.name.charAt(0).toUpperCase()}),c.jsx("span",{className:"testimonial-name",children:y.name})]})]},e+g))},e)})}),c.jsx("button",{className:"carousel-arrow carousel-arrow-right",onClick:p,disabled:e>=u,children:c.jsx($a,{size:24})})]}),c.jsx("div",{className:"carousel-dots",children:Array.from({length:u+1}).map((y,g)=>c.jsx("button",{className:`carousel-dot ${g===e?"active":""}`,onClick:()=>t(g)},g))}),c.jsxs(we.div,{className:"video-testimonials-section",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[c.jsx("h3",{className:"video-testimonials-title",children:"DEPOIMENTOS EM VÍDEO"}),c.jsx("div",{className:"video-testimonials-grid video-grid-desktop",children:Xo.map(y=>c.jsx(Mg,{src:y.src},y.id))}),c.jsxs("div",{className:"video-carousel-mobile",children:[c.jsxs("div",{className:"video-carousel-container",children:[c.jsx("button",{className:"carousel-arrow video-carousel-arrow-left",onClick:h,disabled:n===0,children:c.jsx(Ou,{size:20})}),c.jsx("div",{className:"video-carousel-track",children:c.jsx(nl,{mode:"wait",children:c.jsx(we.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:c.jsx(Mg,{src:Xo[n].src})},n)})}),c.jsx("button",{className:"carousel-arrow video-carousel-arrow-right",onClick:b,disabled:n>=d,children:c.jsx($a,{size:20})})]}),c.jsx("div",{className:"carousel-dots video-carousel-dots",children:Xo.map((y,g)=>c.jsx("button",{className:`carousel-dot ${g===n?"active":""}`,onClick:()=>r(g)},g))})]})]})]}),c.jsx("style",{children:`
        .testimonials-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .testimonials-title {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 950;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -1px;
        }
        
        .testimonials-subtitle {
          color: rgba(255,255,255,.75);
          font-size: 15px;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .testimonials-carousel {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .carousel-arrow {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.05);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .2s ease;
        }
        .carousel-arrow:hover:not(:disabled) {
          background: rgba(0,255,65,.15);
          border-color: rgba(0,255,65,.4);
          color: var(--neon);
        }
        .carousel-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        @media (max-width: 640px) {
          .carousel-arrow {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }
        }

        .testimonials-track {
          flex: 1;
          overflow: hidden;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .testimonial-card {
          padding: 24px;
          border-radius: var(--r2);
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.04);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .testimonial-stars {
          display: flex;
          gap: 4px;
        }
        
        .testimonial-text {
          color: rgba(255,255,255,.85);
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
          flex: 1;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.08);
        }
        
        .testimonial-avatar-img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          object-fit: cover;
          border: 2px solid rgba(0,255,65,.3);
        }
        
        .testimonial-name {
          font-weight: 800;
          font-size: 14px;
          color: #fff;
          letter-spacing: .3px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }
        
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,.2);
          cursor: pointer;
          transition: all .2s ease;
          padding: 0;
        }
        .carousel-dot:hover {
          background: rgba(255,255,255,.4);
        }
        .carousel-dot.active {
          background: var(--neon);
          width: 24px;
          border-radius: 4px;
        }

        .testimonial-avatar-placeholder {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0,255,65,.3), rgba(0,255,65,.1));
          border: 2px solid rgba(0,255,65,.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          color: var(--neon);
        }

        .video-testimonials-section {
          margin-top: 48px;
          text-align: center;
        }

        .video-testimonials-title {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 900;
          color: #fff;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        .video-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        .video-grid-desktop {
          display: grid;
        }
        
        .video-carousel-mobile {
          display: none;
        }

        @media (max-width: 1024px) {
          .video-testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .video-grid-desktop {
            display: none;
          }
          
          .video-carousel-mobile {
            display: block;
          }
          
          .video-carousel-container {
            display: flex;
            align-items: center;
            gap: 12px;
            justify-content: center;
          }
          
          .video-carousel-track {
            width: 200px;
            flex-shrink: 0;
          }
          
          .video-carousel-arrow-left,
          .video-carousel-arrow-right {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
          }
          
          .video-carousel-dots {
            margin-top: 16px;
          }
        }

        .video-testimonial-card {
          position: relative;
          border-radius: var(--r2);
          overflow: hidden;
          background: #111;
          aspect-ratio: 9/16;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,.10);
        }

        .video-testimonial-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #111;
        }
        
        .video-loading-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s ease;
        }

        .video-overlay.playing {
          background: transparent;
          opacity: 0;
        }

        .video-testimonial-card:hover .video-overlay.playing {
          opacity: 1;
          background: rgba(0,0,0,.2);
        }

        .play-button {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(0,255,65,.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 4px;
          transition: transform .2s ease;
        }

        .video-testimonial-card:hover .play-button {
          transform: scale(1.1);
        }

        .mute-button {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,.6);
          border: 1px solid rgba(255,255,255,.2);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all .2s ease;
          z-index: 10;
        }

        .mute-button:hover {
          background: rgba(0,255,65,.3);
          border-color: rgba(0,255,65,.5);
        }
      `})]})}function BR(){const e=new URLSearchParams(window.location.search),t=new URLSearchParams;["utm_source","utm_medium","utm_campaign","utm_term","utm_content","utm_id","fbclid","gclid","ttclid","sck","src"].forEach(r=>{const i=e.get(r);i&&t.append(r,i)});try{const r=localStorage.getItem("__utmify_session_data");if(r){const i=JSON.parse(r);i.utm_source&&!t.has("utm_source")&&t.append("utm_source",i.utm_source),i.utm_medium&&!t.has("utm_medium")&&t.append("utm_medium",i.utm_medium),i.utm_campaign&&!t.has("utm_campaign")&&t.append("utm_campaign",i.utm_campaign)}}catch{}return t.toString()}const zc="https://ggcheckout.app/checkout/v5/pdDOCAlm20ZQxjUiglc3",$R=[{icon:xf,title:"Ativação Instantânea",desc:"Acesso liberado em menos de 2 minutos após o pagamento."},{icon:uS,title:"Download pela Steam",desc:"Baixe direto dos servidores oficiais na velocidade máxima."},{icon:dS,title:"Atualizações Automáticas",desc:"Seus jogos sempre na versão mais recente, sem fazer nada."},{icon:Iv,title:"Suporte via WhatsApp",desc:"Equipe real pronta para te ajudar a qualquer momento."},{icon:Ov,title:"Pedidos de Novos Jogos",desc:"Solicite jogos e nossa equipe adiciona ao catálogo."},{icon:gf,title:"Garantia de 7 Dias",desc:"Não curtiu? Devolvemos seu dinheiro sem burocracia."}];function Lg(){typeof window<"u"&&window.fbq&&window.fbq("track","InitiateCheckout",{content_name:"Acesso Premium",value:49.97,currency:"BRL"});const e=BR(),t=zc.includes("?")?"&":"?",n=e?`${zc}${t}${e}`:zc;window.open(n,"_blank","noopener,noreferrer")}function UR(){return c.jsxs("section",{id:"planos",className:"pricing-section section-light",children:[c.jsxs("div",{className:"container-main",children:[c.jsx(we.div,{className:"pricing-top",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:c.jsxs("span",{className:"pricing-label",children:[c.jsx(xf,{size:14}),"Investimento"]})}),c.jsxs(we.div,{className:"pricing-headline",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.05},children:[c.jsxs("h2",{children:["Quanto custa ter acesso a",c.jsx("br",{}),c.jsx("span",{className:"pricing-hl-accent",children:"toda a Steam desbloqueada?"})]}),c.jsx("p",{className:"pricing-hl-sub",children:"Menos do que UM jogo. Pagou uma vez, é seu pra sempre."})]}),c.jsxs(we.div,{className:"pricing-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[c.jsxs("div",{className:"pc-inner",children:[c.jsx("h3",{className:"pc-plan-name",children:"OVERISE"}),c.jsx("span",{className:"pc-plan-sub",children:"ACESSO PREMIUM"}),c.jsxs("span",{className:"pc-from",children:["De ",c.jsx("s",{children:"R$ 300~500"})," por jogo"]}),c.jsxs("div",{className:"pc-price-row",children:[c.jsx("span",{className:"pc-currency",children:"R$"}),c.jsx("span",{className:"pc-value",children:"49"}),c.jsx("span",{className:"pc-cents",children:",97"})]}),c.jsx("span",{className:"pc-label",children:"Taxa Única"}),c.jsx("div",{className:"pc-divider"}),c.jsxs("div",{className:"pc-benefits",children:[c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title pc-bold",children:"+40.000 Jogos (+Lançamentos)"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title",children:"Seus pra Sempre (Vitalício)"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title pc-bold",children:"Na sua Conta Pessoal"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title pc-bold",children:"Funciona com Denuvo"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title",children:"Download pela Steam"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title",children:"Atualizações Automáticas"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title",children:"Suporte WhatsApp"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title",children:"Pedidos de Jogos"})]}),c.jsxs("div",{className:"pc-benefit",children:[c.jsx("svg",{className:"pc-check-svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--neon)",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})}),c.jsx("span",{className:"pc-benefit-title",children:"Garantia de 7 dias"})]})]}),c.jsxs("button",{className:"pc-cta",onClick:Lg,children:["Quero Meu Acesso",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),c.jsxs("div",{className:"pc-social",children:[c.jsxs("div",{className:"pc-avatars",children:[c.jsx("img",{src:Mf,alt:""}),c.jsx("img",{src:Lf,alt:""}),c.jsx("img",{src:Df,alt:""}),c.jsx("img",{src:Of,alt:""})]}),c.jsxs("div",{className:"pc-social-text",children:[c.jsx("span",{className:"pc-stars",children:"★★★★★"}),c.jsx("span",{children:"+5K clientes satisfeitos"})]})]}),c.jsx("p",{className:"pc-secure",children:"Compra 100% segura. Acesso liberado imediatamente após a confirmação."})]}),c.jsx("div",{className:"pc-glow"})]}),c.jsxs(we.div,{className:"bonuses-header",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.15},children:[c.jsxs("span",{className:"pricing-label",children:[c.jsx(gf,{size:14}),"Inclusos no Acesso"]}),c.jsxs("h3",{className:"bonuses-title",children:["Tudo isso por apenas",c.jsx("br",{}),c.jsx("span",{className:"pricing-hl-accent",children:"R$ 49,97"})]})]}),c.jsx(we.div,{className:"bonuses-list",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},children:$R.map((e,t)=>c.jsxs(we.div,{className:"bonus-row",variants:{hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.5}}},children:[c.jsx("div",{className:"bonus-row-icon",children:c.jsx(e.icon,{size:22})}),c.jsxs("div",{className:"bonus-row-content",children:[c.jsx("h4",{children:e.title}),c.jsx("p",{children:e.desc})]}),c.jsx("div",{className:"bonus-row-check",children:c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:c.jsx("path",{d:"M5 12l5 5L20 7"})})})]},t))}),c.jsx(we.div,{className:"pricing-final-cta",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:c.jsxs("button",{className:"pc-cta pc-cta-final",onClick:Lg,children:["Garantir Meu Acesso por R$ 49,97",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]}),c.jsx("style",{children:`
        .pricing-section {
          padding: 100px 0 80px;
          overflow: hidden;
        }

        /* Top Label */
        .pricing-top {
          text-align: center;
          margin-bottom: 16px;
        }
        .pricing-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0,255,65,.08);
          border: 1px solid rgba(0,255,65,.25);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Headline */
        .pricing-headline {
          text-align: center;
          margin-bottom: 40px;
        }
        .pricing-headline h2 {
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 950;
          color: #fff;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin: 0;
        }
        .pricing-hl-accent {
          color: var(--neon);
          font-style: italic;
        }
        .pricing-hl-sub {
          color: rgba(255,255,255,.75);
          font-size: 16px;
          margin-top: 12px;
          font-weight: 600;
        }

        /* Price Card */
        .pricing-card {
          max-width: 420px;
          margin: 0 auto;
          position: relative;
          border-radius: 28px;
          border: 1.5px solid rgba(0,255,65,.3);
          background: linear-gradient(180deg, rgba(10,10,10,.97) 0%, rgba(3,3,3,1) 100%);
          overflow: hidden;
          box-shadow: 
            0 40px 80px rgba(0,0,0,.5),
            0 0 80px rgba(0,255,65,.08),
            inset 0 1px 0 rgba(0,255,65,.1);
        }
        .pc-inner {
          position: relative;
          z-index: 1;
          padding: 48px 36px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .pc-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(0,255,65,.1), transparent 70%);
          pointer-events: none;
        }

        /* Badge */
        .pc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          background: var(--neon);
          color: #000;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-radius: 999px;
          margin-bottom: 28px;
          box-shadow: 0 4px 20px rgba(0,255,65,.3);
        }

        /* Plan Name */
        .pc-plan-name {
          font-family: 'Sora', sans-serif;
          font-size: 32px;
          font-weight: 950;
          color: #fff;
          letter-spacing: -1px;
          margin: 0 0 4px;
          text-transform: uppercase;
        }
        .pc-plan-sub {
          font-size: 13px;
          font-weight: 800;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .pc-from {
          font-size: 14px;
          color: rgba(255,255,255,.7);
          font-weight: 600;
          margin-bottom: 4px;
        }
        .pc-from s { text-decoration: line-through; color: rgba(255,255,255,.5); }

        .pc-price-row {
          display: flex;
          align-items: flex-start;
          line-height: 1;
        }
        .pc-currency {
          font-size: 24px;
          font-weight: 800;
          color: var(--neon);
          margin-top: 20px;
          margin-right: 4px;
        }
        .pc-value {
          font-size: 110px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -5px;
          filter: drop-shadow(0 0 40px rgba(0,255,65,.2));
        }
        .pc-cents {
          font-size: 34px;
          font-weight: 800;
          color: #fff;
          margin-top: 22px;
        }
        .pc-label {
          font-size: 11px;
          font-weight: 800;
          color: var(--neon);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 2px;
          margin-bottom: 24px;
        }

        .pc-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
          margin-bottom: 24px;
        }

        .pc-benefits {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 28px;
        }
        .pc-benefit {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .pc-benefit:last-child {
          border-bottom: none;
        }
        .pc-check-svg {
          flex-shrink: 0;
        }
        .pc-benefit-title {
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,.85);
          letter-spacing: -.2px;
          text-align: left;
        }
        .pc-benefit-title.pc-bold {
          font-weight: 800;
          color: #fff;
          font-size: 16px;
        }

        .pc-cta {
          width: 100%;
          padding: 18px;
          background: var(--neon);
          color: #000;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .5px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all .25s ease;
          box-shadow: 0 8px 30px rgba(0,255,65,.25);
        }
        .pc-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,255,65,.4);
        }

        .pc-social {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
        }
        .pc-avatars {
          display: flex;
        }
        .pc-avatars img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #0a0a0a;
          object-fit: cover;
          margin-left: -8px;
        }
        .pc-avatars img:first-child { margin-left: 0; }
        .pc-social-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .pc-stars {
          color: var(--neon);
          font-size: 11px;
          letter-spacing: 1px;
        }
        .pc-social-text span:last-child {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,.75);
        }

        .pc-secure {
          font-size: 12px;
          color: rgba(255,255,255,.6);
          margin-top: 16px;
          font-weight: 600;
          line-height: 1.5;
        }

        /* Bonuses */
        .bonuses-header {
          text-align: center;
          margin-top: 80px;
          margin-bottom: 12px;
        }
        .bonuses-title {
          text-align: center;
          font-size: clamp(24px, 4vw, 34px);
          font-weight: 950;
          color: #fff;
          letter-spacing: -1px;
          line-height: 1.15;
          margin: 16px 0 40px;
        }

        .bonuses-list {
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .bonus-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 24px;
          border-bottom: 1px solid rgba(255,255,255,.06);
          position: relative;
          transition: background .2s ease;
        }
        .bonus-row:first-child {
          border-top: 1px solid rgba(255,255,255,.06);
        }
        .bonus-row:hover {
          background: rgba(0,255,65,.03);
        }
        .bonus-row::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 0;
          background: var(--neon);
          transition: height .25s ease;
          border-radius: 2px;
        }
        .bonus-row:hover::before {
          height: 60%;
        }

        .bonus-row-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(0,255,65,.08);
          border: 1px solid rgba(0,255,65,.15);
          color: var(--neon);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bonus-row-content {
          flex: 1;
          min-width: 0;
        }
        .bonus-row-content h4 {
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 3px;
          letter-spacing: -.3px;
        }
        .bonus-row-content p {
          font-size: 13px;
          color: rgba(255,255,255,.7);
          line-height: 1.45;
          margin: 0;
          font-weight: 500;
        }

        .bonus-row-check {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,255,65,.1);
          border: 1px solid rgba(0,255,65,.2);
          color: var(--neon);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Final CTA */
        .pricing-final-cta {
          text-align: center;
          margin-top: 40px;
        }
        .pc-cta-final {
          max-width: 420px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .pricing-section {
            padding: 56px 0 48px;
          }
          .pricing-headline {
            margin-bottom: 28px;
          }
          .pc-inner {
            padding: 40px 20px 24px;
          }
          .pc-badge {
            margin-bottom: 20px;
            font-size: 10px;
            padding: 6px 16px;
          }
          .pc-plan-name {
            font-size: 26px;
          }
          .pc-plan-sub {
            font-size: 11px;
            margin-bottom: 14px;
          }
          .pc-value {
            font-size: 80px;
          }
          .pc-cents {
            font-size: 28px;
          }
          .pc-benefit {
            padding: 11px 0;
          }
          .pc-benefit-title {
            font-size: 14px;
          }
          .pc-benefit-title.pc-bold {
            font-size: 14px;
          }
          .bonuses-header {
            margin-top: 56px;
          }
          .bonuses-title {
            margin-bottom: 24px;
          }
          .bonus-row {
            padding: 16px 12px;
            gap: 14px;
          }
          .bonus-row-icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }
          .bonus-row-content h4 {
            font-size: 14px;
          }
          .bonus-row-content p {
            font-size: 12px;
          }
          .bonus-row-check {
            width: 28px;
            height: 28px;
          }
          .pricing-final-cta {
            margin-top: 28px;
          }
        }
      `})]})}const WR=w.forwardRef(function(t,n){return c.jsxs("section",{ref:n,className:"section-tight container-main",children:[c.jsx("div",{className:"guarantee-wrapper",children:c.jsxs("div",{className:"guarantee-card",children:[c.jsxs("div",{className:"guarantee-badge",children:[c.jsx("span",{className:"badge-icon",children:"✓"}),"Garantia Total"]}),c.jsxs("div",{className:"guarantee-content",children:[c.jsx("h3",{children:"Reembolso em até 7 dias"}),c.jsxs("p",{children:["Compra sem risco. Se por qualquer motivo você não curtir a experiência, você pode solicitar reembolso em até ",c.jsx("strong",{children:"7 dias"})," após a compra. Transparente, simples e direto — padrão ",c.jsx("strong",{children:"Overise"}),"."]})]}),c.jsxs("div",{className:"guarantee-features",children:[c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Pagamento 100% seguro"]}),c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Ativação imediata via Steam"]}),c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Suporte dedicado"]}),c.jsxs("div",{className:"g-feature",children:[c.jsx("span",{className:"check",children:"✓"}),"Sem taxas ocultas"]})]}),c.jsx("div",{className:"guarantee-glow"})]})}),c.jsx("style",{children:`
        .guarantee-wrapper {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .guarantee-card {
          position: relative;
          padding: 32px;
          border-radius: var(--r2);
          border: 1px solid rgba(0,255,65,.25);
          background: linear-gradient(135deg, rgba(0,255,65,.05) 0%, rgba(0,0,0,.3) 100%);
          box-shadow: 0 20px 60px rgba(0,255,65,.08);
          overflow: hidden;
          text-align: center;
        }
        
        .guarantee-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(0,255,65,.12), transparent 70%);
          pointer-events: none;
        }
        
        .guarantee-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(0,255,65,.15);
          border: 1px solid rgba(0,255,65,.35);
          color: var(--neon);
          font-weight: 900;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        
        .badge-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--neon);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 900;
        }
        
        .guarantee-content {
          position: relative;
          z-index: 1;
          margin-bottom: 24px;
        }
        
        .guarantee-content h3 {
          font-size: 26px;
          font-weight: 950;
          color: #fff;
          margin: 0 0 12px;
          letter-spacing: -1px;
          text-transform: uppercase;
        }
        
        .guarantee-content p {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .guarantee-content strong {
          color: var(--neon);
          font-weight: 800;
        }
        
        .guarantee-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        
        .g-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(0,0,0,.3);
          border: 1px solid rgba(255,255,255,.08);
          font-size: 12px;
          font-weight: 800;
          color: #d9d9d9;
        }
        
        .g-feature .check {
          color: var(--neon);
          font-weight: 900;
        }
      `})]})}),HR=w.forwardRef(function(t,n){const[r,i]=w.useState(null),s=[{q:"Isso é pirataria?",a:"Não. Você usa os arquivos originais da Steam e não precisa instalar programas suspeitos que estragam o computador."},{q:"Funciona online mesmo?",a:"Sim. A maioria dos jogos de história você joga sozinho, mas jogos como Futebol, Tiro e Luta funcionam online para você jogar contra outras pessoas."},{q:"Preciso formatar o PC?",a:"De jeito nenhum. Nosso aplicativo é leve e se o seu computador roda o jogo, ele roda nosso sistema sem problemas."},{q:"E se eu não souber instalar?",a:"Temos uma equipe de suporte real no Discord e WhatsApp. Se você tiver qualquer dificuldade, a gente entra e te ajuda a instalar."}];return c.jsxs("section",{ref:n,id:"faq",className:"section container-main",children:[c.jsx("h2",{style:{fontSize:"28px",fontWeight:950,color:"#fff",textTransform:"uppercase",margin:"0 0 8px"},children:"FAQ"}),c.jsx("p",{style:{color:"var(--muted)",marginBottom:"18px"},children:"Respostas rápidas para as dúvidas mais comuns."}),c.jsx("div",{className:"faq-box",children:s.map((o,a)=>c.jsxs("div",{className:`qa ${r===a?"open":""}`,children:[c.jsxs("button",{className:"q",onClick:()=>i(r===a?null:a),children:[o.q,c.jsx("span",{className:"chev",children:"+"})]}),c.jsx("div",{className:"a",children:o.a})]},a))}),c.jsx("style",{children:".faq-box{border-radius:var(--r2);border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);box-shadow:var(--shadowSoft);overflow:hidden}.qa{border-top:1px solid rgba(255,255,255,.06)}.qa:first-child{border-top:0}.q{width:100%;background:transparent;border:0;padding:16px 18px;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px;font-weight:950;letter-spacing:.4px;text-transform:uppercase;text-align:left}.chev{width:26px;height:26px;border-radius:8px;border:1px solid rgba(255,255,255,.10);display:grid;place-items:center;color:var(--neon);transition:.25s ease;background:rgba(0,0,0,.20)}.a{max-height:0;overflow:hidden;transition:max-height .35s ease;padding:0 18px;color:var(--muted);line-height:1.65;font-size:14px}.qa.open .a{max-height:240px;padding-bottom:16px}.qa.open .chev{transform:rotate(45deg)}"})]})}),GR=w.forwardRef(function(t,n){return c.jsx("footer",{ref:n,className:"py-11 border-t",style:{borderColor:"rgba(255,255,255,.06)",color:"#606060",fontSize:"12px"},children:c.jsx("div",{className:"container-main text-center",children:c.jsx("p",{children:"© 2024 Overise Software. Todos os direitos reservados."})})})});function KR({game:e,onClose:t}){return c.jsxs("div",{className:"backdrop show",onClick:t,children:[c.jsxs("div",{className:"modal",onClick:n=>n.stopPropagation(),children:[c.jsxs("div",{className:"modal-top",children:[c.jsx("img",{src:`https://steamcdn-a.akamaihd.net/steam/apps/${e.steam_appid}/library_hero.jpg`,alt:e.name,onError:n=>{n.currentTarget.src=e.cover}}),c.jsx("button",{className:"modal-close",onClick:t,children:"✕"})]}),c.jsxs("div",{className:"modal-body",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"modal-title",children:e.name}),c.jsx("p",{className:"modal-desc",children:"Este jogo está disponível na nossa biblioteca oficial. Ao ativar, seu computador irá baixar os arquivos originais diretamente dos servidores da Steam. Isso garante que você tenha a versão mais atualizada, livre de vírus e com desempenho máximo. É o jogo oficial pronto para rodar."})]}),c.jsxs("div",{className:"modal-side",children:[c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"Origem"}),c.jsx("b",{children:"Servidor Oficial Steam"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"Segurança"}),c.jsx("b",{style:{color:"var(--neon)"},children:"100% Verificado"})]}),c.jsx("div",{className:"modal-btns",children:c.jsx("a",{href:"#como-funciona",className:"btn btn-primary-full",onClick:t,children:"Desbloquear Jogo"})})]})]})]}),c.jsx("style",{children:'.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.68);backdrop-filter:blur(10px);display:grid;place-items:center;z-index:2000;padding:18px}.modal{width:min(980px,100%);border-radius:26px;border:1px solid rgba(255,255,255,.12);background:rgba(10,10,10,.92);box-shadow:var(--shadow);overflow:hidden;animation:floatIn .25s ease both}.modal-top{position:relative;height:clamp(240px,32vw,360px);background:#000;overflow:hidden}.modal-top img{width:100%;height:100%;object-fit:cover;transform:scale(1.03);filter:saturate(1.18) contrast(1.14)}.modal-top::after{content:"";position:absolute;inset:0;background:radial-gradient(900px 380px at 18% 28%,rgba(0,255,65,.10),transparent 58%),linear-gradient(to top,rgba(0,0,0,.82),rgba(0,0,0,.10))}.modal-close{position:absolute;top:14px;right:14px;width:42px;height:42px;border-radius:14px;border:1px solid rgba(255,255,255,.14);background:rgba(0,0,0,.35);color:#fff;cursor:pointer;display:grid;place-items:center;transition:.2s ease;z-index:5}.modal-close:hover{border-color:rgba(255,255,255,.22)}.modal-body{padding:24px;display:grid;grid-template-columns:1.2fr .8fr;gap:20px;align-items:start}@media(max-width:980px){.modal-body{grid-template-columns:1fr}}.modal-title{font-weight:950;font-size:22px;letter-spacing:-.8px;text-transform:uppercase;color:#fff;margin:0 0 10px}.modal-desc{color:var(--muted);line-height:1.75;font-size:14px;margin:0}.modal-side{border-radius:18px;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);padding:16px}.row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#d9d9d9;font-weight:850;font-size:13px}.row:last-of-type{border-bottom:0}.row span{color:var(--muted2);font-weight:800}.modal-btns{display:flex;gap:10px;margin-top:12px}.btn-primary-full{width:100%;background:linear-gradient(180deg,rgba(0,255,65,.95),rgba(0,200,55,.85));color:#000;border-color:rgba(0,255,65,.55);padding:12px 18px;border-radius:14px;font-weight:950;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:.22s ease}.btn-primary-full:hover{box-shadow:0 18px 60px rgba(0,255,65,.15)}'})]})}function YR({isVisible:e}){const[t,n]=w.useState({minutes:14,seconds:59});w.useEffect(()=>{const i=setInterval(()=>{n(s=>s.seconds>0?{...s,seconds:s.seconds-1}:s.minutes>0?{minutes:s.minutes-1,seconds:59}:{minutes:14,seconds:59})},1e3);return()=>clearInterval(i)},[]);const r=i=>i.toString().padStart(2,"0");return c.jsx(nl,{children:e&&c.jsxs(we.div,{className:"urgency-bar",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},exit:{y:-100,opacity:0},transition:{type:"spring",damping:25,stiffness:300},children:[c.jsx("div",{className:"urgency-glow"}),c.jsxs("div",{className:"urgency-content",children:[c.jsxs("div",{className:"urgency-left",children:[c.jsxs("div",{className:"urgency-badge",children:[c.jsx(hS,{size:14}),c.jsx("span",{children:"OFERTA LIMITADA"})]}),c.jsx("span",{className:"urgency-text",children:"Preço promocional termina em:"})]}),c.jsxs("div",{className:"urgency-right",children:[c.jsx("div",{className:"urgency-timer",children:c.jsxs("span",{children:[r(t.minutes),":",r(t.seconds)]})}),c.jsxs("a",{href:"#planos",className:"urgency-cta",children:["Aproveitar",c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),c.jsx("style",{children:`
            .urgency-bar {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1001;
              background: linear-gradient(90deg, 
                rgba(0, 30, 10, 0.98) 0%,
                rgba(5, 5, 5, 0.98) 50%,
                rgba(0, 30, 10, 0.98) 100%
              );
              border-bottom: 1px solid rgba(0, 255, 65, 0.25);
              padding: 12px 20px;
              backdrop-filter: blur(12px);
              overflow: hidden;
            }
            
            .urgency-glow {
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 600px;
              height: 100%;
              background: radial-gradient(ellipse at center, rgba(0, 255, 65, 0.08) 0%, transparent 70%);
              pointer-events: none;
            }
            
            .urgency-content {
              max-width: 1200px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 20px;
              position: relative;
              z-index: 1;
            }
            
            .urgency-left {
              display: flex;
              align-items: center;
              gap: 14px;
            }
            
            .urgency-badge {
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 6px 12px;
              border-radius: 8px;
              background: linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 255, 65, 0.05));
              border: 1px solid rgba(0, 255, 65, 0.35);
              color: var(--neon);
              font-size: 11px;
              font-weight: 900;
              letter-spacing: 0.5px;
              box-shadow: 0 0 20px rgba(0, 255, 65, 0.15);
            }
            
            .urgency-text {
              font-size: 13px;
              font-weight: 600;
              color: rgba(255, 255, 255, 0.75);
            }
            
            .urgency-right {
              display: flex;
              align-items: center;
              gap: 12px;
            }
            
            .urgency-timer {
              display: flex;
              align-items: center;
              gap: 6px;
              background: rgba(0, 0, 0, 0.5);
              padding: 8px 16px;
              border-radius: 8px;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .urgency-timer span {
              font-size: 16px;
              font-weight: 900;
              color: #fff;
              font-family: monospace;
              letter-spacing: 2px;
            }
            
            .urgency-cta {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 10px 20px;
              border-radius: 10px;
              background: var(--neon);
              color: #000;
              font-weight: 900;
              font-size: 12px;
              text-transform: uppercase;
              text-decoration: none;
              letter-spacing: 0.5px;
              transition: all 0.2s ease;
              box-shadow: 0 0 25px rgba(0, 255, 65, 0.3);
            }
            
            .urgency-cta:hover {
              box-shadow: 0 0 35px rgba(0, 255, 65, 0.5);
              transform: translateY(-1px);
            }
            
            @media (max-width: 768px) {
              .urgency-bar {
                padding: 10px 16px;
              }
              
              .urgency-content {
                gap: 12px;
                justify-content: center;
              }
              
              .urgency-left {
                gap: 10px;
              }
              
              .urgency-text {
                display: none;
              }
              
              .urgency-badge {
                padding: 6px 10px;
                gap: 6px;
              }
              
              .urgency-badge span {
                display: inline;
                font-size: 9px;
              }
              
              .urgency-badge svg {
                width: 12px;
                height: 12px;
              }
              
              .urgency-timer {
                padding: 6px 12px;
              }
              
              .urgency-timer span {
                font-size: 14px;
                letter-spacing: 1.5px;
              }
              
              .urgency-cta {
                padding: 8px 14px;
                font-size: 10px;
                border-radius: 8px;
                gap: 6px;
              }
              
              .urgency-cta svg {
                width: 12px;
                height: 12px;
              }
            }
          `})]})})}const Cw="/plano-vitalicio/assets/overise-logo-G-GEIxtw.png",Fc=[{label:"Qual o preço do acesso?",response:"O acesso vitalício custa apenas R$39,99 por um pagamento único! Você terá acesso a mais de 6.500 jogos para sempre, sem mensalidades."},{label:"Como funciona o desbloqueio?",response:"Após a compra, você recebe acesso imediato à sua conta Steam desbloqueada. Basta fazer login no seu PC e todos os jogos estarão disponíveis para baixar e jogar!"},{label:"Funciona em qualquer PC?",response:"Sim! Funciona em qualquer computador Windows. Basta ter a Steam instalada e fazer login com a conta desbloqueada."},{label:"É seguro? Tem garantia?",response:"100% seguro! Oferecemos garantia de 7 dias. Se não gostar, devolvemos seu dinheiro sem perguntas. Mais de 50 mil clientes satisfeitos!"},{label:"Recebo na hora?",response:"Sim! O acesso é liberado automaticamente após a confirmação do pagamento. Em poucos minutos você já estará jogando!"}];function qR(){const[e,t]=w.useState(!1),[n,r]=w.useState([{id:1,type:"bot",content:"Olá! Sou o assistente da Overise. Tem alguma dúvida sobre o pacote de jogos? Estou aqui para ajudar!"},{id:2,type:"bot",content:"Escolha uma opção ou digite sua dúvida:",options:Fc}]),[i,s]=w.useState(""),[o,a]=w.useState(!0),l=w.useRef(null),u=()=>{var m;(m=l.current)==null||m.scrollIntoView({behavior:"smooth"})};w.useEffect(()=>{u()},[n]);const d=m=>{if(m.isCTA&&m.ctaLink){window.location.href=m.ctaLink;return}const y={id:Date.now(),type:"user",content:m.label},g={id:Date.now()+1,type:"bot",content:m.response,options:[{label:"Quero desbloquear agora!",isCTA:!0,ctaLink:"#planos",response:""},{label:"Tenho outra dúvida",response:"Claro! Escolha uma das opções abaixo:"}]};r(x=>[...x,y,g])},f=()=>{const m={id:Date.now(),type:"bot",content:"Sem problemas! Escolha uma das opções abaixo:",options:Fc};r(y=>[...y,m])},p=()=>{if(!i.trim())return;const m={id:Date.now(),type:"user",content:i},y={id:Date.now()+1,type:"bot",content:"Obrigado pela sua mensagem! Para uma resposta mais rápida, escolha uma das opções abaixo ou acesse nosso suporte no WhatsApp.",options:[{label:"Falar no WhatsApp",isCTA:!0,ctaLink:"https://wa.me/5511999999999",response:""},...Fc.slice(0,3)]};r(g=>[...g,m,y]),s("")},h=m=>{m.key==="Enter"&&p()},b=()=>{t(!e),a(!1)};return c.jsxs("div",{className:"fixed bottom-5 right-5 z-[1000]",style:{fontFamily:"'DM Sans', sans-serif"},children:[c.jsx(nl,{children:e&&c.jsxs(we.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"absolute bottom-20 right-0 w-[350px] h-[500px] flex flex-col overflow-hidden",style:{background:"rgba(8, 8, 8, 0.98)",border:"1px solid rgba(0, 255, 65, 0.25)",borderRadius:"20px",boxShadow:"0 15px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 255, 65, 0.08)"},children:[c.jsxs("div",{className:"flex items-center justify-between px-4 py-3.5",style:{background:"linear-gradient(180deg, rgba(20, 20, 20, 1) 0%, rgba(12, 12, 12, 1) 100%)",borderBottom:"1px solid rgba(0, 255, 65, 0.2)"},children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center",style:{background:"#000",border:"1px solid rgba(0, 255, 65, 0.3)",boxShadow:"0 0 15px rgba(0, 255, 65, 0.15)"},children:c.jsx("img",{src:Cw,alt:"Overise",className:"w-full h-full object-cover"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-white font-bold text-[15px] m-0 tracking-tight",children:"Assistente Overise"}),c.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[c.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:"#00FF41",boxShadow:"0 0 8px rgba(0, 255, 65, 0.6)"}}),c.jsx("p",{className:"text-[11px] m-0 font-semibold uppercase tracking-wider",style:{color:"#00FF41"},children:"Online"})]})]})]}),c.jsx("button",{onClick:b,className:"w-8 h-8 rounded-lg flex items-center justify-center bg-transparent cursor-pointer transition-all duration-200",style:{border:"1px solid rgba(255, 255, 255, 0.1)",color:"#666"},onMouseOver:m=>{m.currentTarget.style.color="#fff",m.currentTarget.style.borderColor="rgba(255, 255, 255, 0.2)",m.currentTarget.style.background="rgba(255, 255, 255, 0.05)"},onMouseOut:m=>{m.currentTarget.style.color="#666",m.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",m.currentTarget.style.background="transparent"},children:c.jsx(Iu,{size:16})})]}),c.jsxs("div",{className:"flex-1 p-4 overflow-y-auto flex flex-col gap-3",style:{background:"linear-gradient(180deg, #050505 0%, #000 100%)",scrollbarWidth:"thin",scrollbarColor:"#222 #000"},children:[n.map(m=>c.jsxs("div",{children:[c.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${m.type==="user"?"self-end ml-auto":""}`,style:{background:m.type==="user"?"linear-gradient(135deg, #00FF41 0%, #00cc33 100%)":"linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)",color:m.type==="user"?"#000":"#f0f0f0",borderRadius:m.type==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",borderLeft:m.type==="bot"?"3px solid #00FF41":"none",fontWeight:m.type==="user"?600:400,boxShadow:m.type==="user"?"0 4px 15px rgba(0, 255, 65, 0.3)":"0 4px 15px rgba(0, 0, 0, 0.4)"},children:m.content}),m.options&&c.jsx("div",{className:"mt-3 flex flex-col gap-2",children:m.options.map((y,g)=>c.jsxs("button",{onClick:()=>y.label.includes("outra dúvida")?f():d(y),className:"chat-option-btn w-full flex items-center justify-between px-4 py-3 text-[13px] cursor-pointer transition-all duration-200",style:{background:y.isCTA?"linear-gradient(135deg, #00FF41 0%, #00cc33 100%)":"linear-gradient(135deg, rgba(25, 25, 25, 0.9) 0%, rgba(18, 18, 18, 0.9) 100%)",border:y.isCTA?"none":"1px solid rgba(0, 255, 65, 0.2)",color:y.isCTA?"#000":"#e5e5e5",borderRadius:"12px",fontWeight:y.isCTA?800:500,textTransform:y.isCTA?"uppercase":"none",letterSpacing:y.isCTA?"0.5px":"normal",boxShadow:y.isCTA?"0 4px 15px rgba(0, 255, 65, 0.25)":"0 2px 10px rgba(0, 0, 0, 0.3)"},onMouseOver:x=>{y.isCTA?(x.currentTarget.style.boxShadow="0 6px 20px rgba(0, 255, 65, 0.4)",x.currentTarget.style.transform="translateY(-1px)"):(x.currentTarget.style.borderColor="rgba(0, 255, 65, 0.5)",x.currentTarget.style.background="linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 255, 65, 0.05) 100%)",x.currentTarget.style.color="#00FF41")},onMouseOut:x=>{y.isCTA?(x.currentTarget.style.boxShadow="0 4px 15px rgba(0, 255, 65, 0.25)",x.currentTarget.style.transform="translateY(0)"):(x.currentTarget.style.borderColor="rgba(0, 255, 65, 0.2)",x.currentTarget.style.background="linear-gradient(135deg, rgba(25, 25, 25, 0.9) 0%, rgba(18, 18, 18, 0.9) 100%)",x.currentTarget.style.color="#e5e5e5")},children:[c.jsx("span",{children:y.label}),!y.isCTA&&c.jsx($a,{size:16,style:{opacity:.5}})]},g))})]},m.id)),c.jsx("div",{ref:l})]}),c.jsxs("div",{className:"flex items-center gap-3 p-4",style:{background:"linear-gradient(180deg, rgba(12, 12, 12, 1) 0%, rgba(8, 8, 8, 1) 100%)",borderTop:"1px solid rgba(0, 255, 65, 0.15)"},children:[c.jsx("input",{type:"text",value:i,onChange:m=>s(m.target.value),onKeyPress:h,placeholder:"Digite sua dúvida...",className:"flex-1 px-4 py-3 text-sm outline-none transition-all duration-200",style:{background:"rgba(0, 0, 0, 0.6)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",color:"#fff"},onFocus:m=>{m.currentTarget.style.borderColor="rgba(0, 255, 65, 0.5)",m.currentTarget.style.boxShadow="0 0 15px rgba(0, 255, 65, 0.1)"},onBlur:m=>{m.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",m.currentTarget.style.boxShadow="none"}}),c.jsx("button",{onClick:p,className:"w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200",style:{background:"linear-gradient(135deg, #00FF41 0%, #00cc33 100%)",border:"none",color:"#000",boxShadow:"0 4px 15px rgba(0, 255, 65, 0.3)"},onMouseOver:m=>{m.currentTarget.style.transform="scale(1.05)",m.currentTarget.style.boxShadow="0 6px 20px rgba(0, 255, 65, 0.4)"},onMouseOut:m=>{m.currentTarget.style.transform="scale(1)",m.currentTarget.style.boxShadow="0 4px 15px rgba(0, 255, 65, 0.3)"},children:c.jsx(fS,{size:18})})]})]})}),c.jsxs(we.button,{onClick:b,whileHover:{scale:1.08},whileTap:{scale:.95},className:"w-[60px] h-[60px] rounded-2xl flex items-center justify-center cursor-pointer border-none relative",style:{background:"linear-gradient(135deg, #00FF41 0%, #00cc33 100%)",boxShadow:"0 6px 25px rgba(0, 255, 65, 0.4)",color:"#000"},children:[e?c.jsx(Iu,{size:24}):c.jsx(Iv,{size:24}),o&&!e&&c.jsx(we.span,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 w-4 h-4 rounded-full",style:{background:"#FF3B3B",border:"3px solid #0a0a0a",boxShadow:"0 0 10px rgba(255, 59, 59, 0.5)",animation:"pulse 2s infinite"}})]}),c.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
        
        @media (max-width: 480px) {
          .fixed.bottom-5.right-5 > div:first-child {
            width: 90vw !important;
            height: 70vh !important;
            bottom: 80px !important;
            right: -10px !important;
          }
        }
      `})]})}const QR=()=>{const{games:e,aaaGames:t,loading:n,totalGames:r,searchGames:i,getGamesByCategory:s}=By(),[o,a]=w.useState(null),[l,u]=w.useState(0),[d,f]=w.useState(!1),[p,h]=w.useState(!1);w.useEffect(()=>{const g=()=>{const x=window.scrollY,v=window.innerHeight*.8;h(x>v)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]),w.useEffect(()=>{if(t.length===0)return;const g=setInterval(()=>{f(!0),setTimeout(()=>{u(x=>(x+1)%t.length),setTimeout(()=>f(!1),100)},600)},8e3);return()=>clearInterval(g)},[t.length]);const b=t[l],m=()=>{f(!0),setTimeout(()=>{u(g=>(g-1+t.length)%t.length),setTimeout(()=>f(!1),100)},500)},y=()=>{f(!0),setTimeout(()=>{u(g=>(g+1)%t.length),setTimeout(()=>f(!1),100)},500)};return c.jsxs("div",{className:"min-h-screen",children:[c.jsx(YR,{isVisible:p}),c.jsx(JE,{urgencyBarVisible:p}),c.jsx(eT,{featuredGame:b,isTransitioning:d,onPrev:m,onNext:y,onOpenDetails:a}),c.jsx(IR,{games:e,totalGames:r,onOpenDetails:a}),c.jsx(zR,{}),c.jsx(FR,{games:e,totalGames:r,getGamesByCategory:s,searchGames:i,onOpenDetails:a}),c.jsx(VR,{}),c.jsx(_R,{}),c.jsx(UR,{}),c.jsx(WR,{}),c.jsx(HR,{}),c.jsx(GR,{}),o&&c.jsx(KR,{game:o,onClose:()=>a(null)}),c.jsx(qR,{})]})},XR=()=>{By();const[e,t]=w.useState(!1),n=[{name:"Elden Ring",appid:1245620},{name:"Cyberpunk 2077",appid:1091500},{name:"Red Dead Redemption 2",appid:1174180},{name:"Baldur's Gate 3",appid:1086940},{name:"Hogwarts Legacy",appid:990080},{name:"God of War",appid:1593500},{name:"GTA V",appid:271590},{name:"Resident Evil 4",appid:2050650},{name:"Dark Souls III",appid:374320}],r=i=>`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${i}/library_600x900.jpg`;return c.jsxs("div",{className:`carousel-page ${e?"export-mode":""}`,children:[c.jsxs("div",{className:"carousel-header",children:[c.jsx("h1",{children:"Carrossel Instagram — OVERISE"}),c.jsxs("p",{children:["Clique direito no slide → Inspecionar → selecione ",c.jsx("code",{children:".slide"}),' → "Capture node screenshot"']}),c.jsxs("div",{className:"export-controls",children:[c.jsx("button",{className:`export-toggle ${e?"active":""}`,onClick:()=>t(!e),children:e?"✓ Modo Export Ativo":"Ativar Modo Export"}),c.jsxs("div",{className:"export-instructions",children:[c.jsx("strong",{children:"Instruções para DPR 2x/3x:"}),c.jsxs("ol",{children:[c.jsx("li",{children:"Zoom do Chrome = 100% (Ctrl+0)"}),c.jsx("li",{children:"Abra Device Toolbar (Ctrl+Shift+M)"}),c.jsx("li",{children:"Defina viewport: 1080×1350"}),c.jsx("li",{children:"No menu ⋮ → More tools → Rendering → Force DPR: 2 ou 3"}),c.jsx("li",{children:'Inspecione o .slide → "Capture node screenshot"'})]}),c.jsx("p",{className:"export-result",children:"DPR 2 → PNG ~2160×2700 | DPR 3 → PNG ~3240×4050"})]})]})]}),c.jsx("div",{className:"slide",id:"slide-1",children:c.jsxs("div",{className:"slide-inner",children:[c.jsxs("div",{className:"slide-bg-mosaic",children:[c.jsx("img",{src:r(1245620),alt:"",loading:"eager"}),c.jsx("img",{src:r(1091500),alt:"",loading:"eager"}),c.jsx("img",{src:r(1174180),alt:"",loading:"eager"})]}),c.jsx("div",{className:"slide-overlay"}),c.jsx("div",{className:"slide-glow glow-left"}),c.jsx("div",{className:"slide-glow glow-right"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"OVER"}),c.jsx("span",{className:"logo-neon",children:"ISE"})]}),c.jsxs("div",{className:"slide-main",children:[c.jsxs("div",{className:"slide-pill",children:[c.jsx("span",{className:"pill-dot"}),"Sistema Online • Baixe na Steam"]}),c.jsxs("h1",{className:"slide-headline",children:["Sua Steam,",c.jsx("br",{}),c.jsx("span",{className:"headline-accent",children:"desbloqueada."})]}),c.jsxs("p",{className:"slide-subtext",children:["Acesso a ",c.jsx("span",{className:"text-neon",children:"+1000 jogos AAA"})," por uma fração do preço.",c.jsx("br",{}),c.jsx("strong",{children:"Baixe direto dos servidores oficiais."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"overisestore.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-2",children:c.jsxs("div",{className:"slide-inner",children:[c.jsx("div",{className:"slide-bg-image",children:c.jsx("img",{src:r(1086940),alt:"",loading:"eager"})}),c.jsx("div",{className:"slide-overlay overlay-stronger"}),c.jsx("div",{className:"slide-glow glow-bottom"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"OVER"}),c.jsx("span",{className:"logo-neon",children:"ISE"})]}),c.jsxs("div",{className:"slide-main center",children:[c.jsxs("h2",{className:"slide-headline smaller",children:["Como ",c.jsx("span",{className:"headline-accent",children:"funciona"}),"?"]}),c.jsx("div",{className:"glass-card",children:c.jsxs("div",{className:"steps-list",children:[c.jsxs("div",{className:"step-item",children:[c.jsx("div",{className:"step-number",children:"1"}),c.jsx("span",{className:"step-text",children:"Você escolhe um plano"})]}),c.jsxs("div",{className:"step-item",children:[c.jsx("div",{className:"step-number",children:"2"}),c.jsx("span",{className:"step-text",children:"Recebe acesso ao catálogo"})]}),c.jsxs("div",{className:"step-item",children:[c.jsx("div",{className:"step-number",children:"3"}),c.jsx("span",{className:"step-text",children:"Baixa direto pela Steam"})]})]})}),c.jsxs("p",{className:"slide-subtext italic",children:["Simples assim. ",c.jsx("strong",{children:"Sem complicação."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"overisestore.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-3",children:c.jsxs("div",{className:"slide-inner slide-dark",children:[c.jsx("div",{className:"slide-glow glow-left"}),c.jsx("div",{className:"slide-glow glow-top-right"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-header-row",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"OVER"}),c.jsx("span",{className:"logo-neon",children:"ISE"})]}),c.jsxs("div",{className:"badge-neon",children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),c.jsx("path",{d:"M6 12h4M14 12h4"})]}),"+1000 jogos"]})]}),c.jsxs("div",{className:"slide-main",children:[c.jsxs("h2",{className:"slide-headline smaller center-text",children:["Uma prévia do ",c.jsx("span",{className:"headline-accent",children:"catálogo"})]}),c.jsx("div",{className:"games-grid",children:n.map(i=>c.jsxs("div",{className:"game-card",children:[c.jsx("img",{src:`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${i.appid}/header.jpg`,alt:i.name,loading:"eager"}),c.jsx("div",{className:"game-card-overlay"})]},i.appid))}),c.jsxs("p",{className:"slide-subtext center-text",children:["E muito mais... ",c.jsx("span",{className:"text-neon",children:"atualizações toda semana."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"overisestore.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-4",children:c.jsxs("div",{className:"slide-inner",children:[c.jsx("div",{className:"slide-bg-image saturated",children:c.jsx("img",{src:r(1593500),alt:"",loading:"eager"})}),c.jsx("div",{className:"slide-overlay"}),c.jsx("div",{className:"slide-glow glow-center"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-logo",children:[c.jsx("span",{className:"logo-white",children:"OVER"}),c.jsx("span",{className:"logo-neon",children:"ISE"})]}),c.jsxs("div",{className:"slide-main center",children:[c.jsx("div",{className:"shield-icon",children:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),c.jsx("path",{d:"M9 12l2 2 4-4"})]})}),c.jsxs("h2",{className:"slide-headline smaller",children:["Garantia ",c.jsx("span",{className:"headline-accent",children:"total"})]}),c.jsx("div",{className:"neon-line"}),c.jsxs("p",{className:"quote-text",children:["Testou e não funcionou?",c.jsx("br",{}),c.jsx("span",{className:"highlight-box",children:"Devolvemos seu dinheiro."})]}),c.jsxs("p",{className:"slide-subtext italic center-text",children:["Com a ",c.jsx("strong",{className:"text-neon",children:"Overise"})," você não corre risco.",c.jsx("br",{}),c.jsx("strong",{children:"Mas isso não é tudo."})]}),c.jsxs("div",{className:"slide-swipe",children:["Arraste para o lado",c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"}),c.jsx("span",{className:"dot"})]}),c.jsx("span",{className:"footer-url",children:"overisestore.com.br"})]})]})]})}),c.jsx("div",{className:"slide",id:"slide-5",children:c.jsxs("div",{className:"slide-inner",children:[c.jsx("div",{className:"slide-bg-grid",children:n.slice(0,9).map((i,s)=>c.jsx("img",{src:r(i.appid),alt:"",loading:"eager"},s))}),c.jsx("div",{className:"slide-overlay overlay-radial"}),c.jsx("div",{className:"slide-glow glow-center large"}),c.jsxs("div",{className:"slide-content",children:[c.jsxs("div",{className:"slide-main center full-height",children:[c.jsxs("div",{className:"slide-logo large",children:[c.jsx("span",{className:"logo-white",children:"OVER"}),c.jsx("span",{className:"logo-neon",children:"ISE"})]}),c.jsxs("h2",{className:"slide-headline cta-headline",children:["Acesse o link",c.jsx("br",{}),c.jsx("span",{className:"text-muted",children:"na bio e"}),c.jsx("br",{}),c.jsx("span",{className:"headline-accent",children:"libere sua Steam."})]}),c.jsxs("div",{className:"pills-row",children:[c.jsxs("div",{className:"pill",children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),c.jsx("path",{d:"M6 12h4M14 12h4"})]}),"+1000 jogos"]}),c.jsxs("div",{className:"pill",children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"Download rápido"]}),c.jsxs("div",{className:"pill",children:[c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"Garantia"]})]}),c.jsxs("div",{className:"ig-icons",children:[c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:c.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:c.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:c.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[c.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),c.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]}),c.jsxs("div",{className:"slide-footer",children:[c.jsxs("div",{className:"slide-dots",children:[c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot"}),c.jsx("span",{className:"dot active"})]}),c.jsx("span",{className:"footer-url",children:"overisestore.com.br"})]})]})]})}),c.jsx("style",{children:`
        .carousel-page {
          min-height: 100vh;
          background: #050505;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
        }

        .carousel-header {
          text-align: center;
          max-width: 700px;
        }

        .carousel-header h1 {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }

        .carousel-header p {
          font-size: 15px;
          color: rgba(255,255,255,.5);
        }

        .carousel-header code {
          background: rgba(255,255,255,.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: monospace;
        }

        /* ========== EXPORT CONTROLS ========== */
        .export-controls {
          margin-top: 24px;
          padding: 20px;
          background: rgba(0,255,65,0.05);
          border: 1px solid rgba(0,255,65,0.2);
          border-radius: 12px;
        }

        .export-toggle {
          padding: 12px 24px;
          background: rgba(0,255,65,0.1);
          border: 1px solid rgba(0,255,65,0.4);
          border-radius: 8px;
          color: #00FF41;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .export-toggle:hover {
          background: rgba(0,255,65,0.2);
        }

        .export-toggle.active {
          background: #00FF41;
          color: #000;
        }

        .export-instructions {
          margin-top: 16px;
          text-align: left;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }

        .export-instructions strong {
          color: #fff;
        }

        .export-instructions ol {
          margin: 8px 0;
          padding-left: 20px;
        }

        .export-instructions li {
          margin: 4px 0;
        }

        .export-result {
          margin-top: 12px;
          padding: 8px 12px;
          background: rgba(0,255,65,0.1);
          border-radius: 6px;
          color: #00FF41;
          font-weight: 600;
          text-align: center;
        }

        /* ========== SLIDE BASE ========== */
        .slide {
          width: 1080px;
          height: 1350px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 50px 100px rgba(0,0,0,.8),
            0 0 0 1px rgba(255,255,255,.05);
          /* GPU acceleration para render mais nítido */
          transform: translateZ(0);
          will-change: auto;
        }

        .slide-inner {
          width: 100%;
          height: 100%;
          position: relative;
          background: var(--bg, #030303);
        }

        .slide-dark {
          background: linear-gradient(180deg, #040404 0%, #080808 100%);
        }

        /* ========== BACKGROUNDS - ALTA QUALIDADE ========== */
        .slide-bg-mosaic {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .slide-bg-mosaic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Render otimizado sem banding */
          image-rendering: auto;
          transform: translateZ(0);
        }

        /* Overlay gradiente ao invés de filter direto na imagem */
        .slide-bg-mosaic::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.1) 100%
          );
          pointer-events: none;
        }

        .slide-bg-image {
          position: absolute;
          inset: 0;
        }

        .slide-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Render de alta qualidade */
          image-rendering: auto;
          transform: translateZ(0);
        }

        /* Overlay gradiente para escurecer sem banding */
        .slide-bg-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
          pointer-events: none;
        }

        .slide-bg-image.saturated::after {
          background: rgba(0,0,0,0.75);
        }

        .slide-bg-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 12px;
          padding: 60px;
          opacity: 0.18;
        }

        .slide-bg-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          image-rendering: auto;
          transform: translateZ(0);
        }

        /* ========== OVERLAYS ========== */
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0,0,0,0.97) 0%, transparent 55%),
            radial-gradient(ellipse 100% 60% at 0% 50%, rgba(0,0,0,0.92) 0%, transparent 45%),
            linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.7) 100%);
        }

        .slide-overlay.overlay-stronger {
          background: 
            radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0,0,0,0.98) 0%, transparent 50%),
            linear-gradient(to top, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.75) 100%);
        }

        .slide-overlay.overlay-radial {
          background: radial-gradient(ellipse at center, rgba(3,3,3,0.8) 0%, rgba(3,3,3,0.97) 100%);
        }

        /* ========== GLOWS ========== */
        .slide-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,65,0.25) 0%, transparent 65%);
          filter: blur(60px);
          pointer-events: none;
        }

        .glow-left {
          bottom: -200px;
          left: -200px;
        }

        .glow-right {
          top: -100px;
          right: -200px;
          opacity: 0.4;
        }

        .glow-bottom {
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
        }

        .glow-top-right {
          top: -150px;
          right: -150px;
          opacity: 0.5;
        }

        .glow-center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .glow-center.large {
          width: 800px;
          height: 800px;
        }

        /* ========== CONTENT ========== */
        .slide-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 72px 80px;
        }

        .slide-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slide-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
        }

        .slide-main.center {
          align-items: center;
          text-align: center;
        }

        .slide-main.full-height {
          justify-content: center;
          gap: 40px;
        }

        /* ========== LOGO ========== */
        .slide-logo {
          display: flex;
          align-items: center;
        }

        .slide-logo.large .logo-white,
        .slide-logo.large .logo-neon {
          font-size: 80px;
        }

        .logo-white {
          font-size: 48px;
          font-weight: 950;
          color: #fff;
          letter-spacing: 2px;
        }

        .logo-neon {
          font-size: 48px;
          font-weight: 950;
          color: var(--neon, #00FF41);
          letter-spacing: 2px;
          text-shadow: 0 0 60px rgba(0,255,65,0.6);
        }

        /* ========== PILL ========== */
        .slide-pill {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 16px 24px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 999px;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,.9);
          backdrop-filter: blur(12px);
          width: fit-content;
        }

        .pill-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--neon, #00FF41);
          box-shadow: 0 0 20px rgba(0,255,65,0.7);
        }

        /* ========== TYPOGRAPHY ========== */
        .slide-headline {
          font-size: 100px;
          font-weight: 950;
          line-height: 0.98;
          color: #fff;
          letter-spacing: -4px;
        }

        .slide-headline.smaller {
          font-size: 82px;
          letter-spacing: -3px;
        }

        .slide-headline.cta-headline {
          font-size: 78px;
          line-height: 1.05;
        }

        .headline-accent {
          color: var(--neon, #00FF41);
          text-shadow: 
            0 0 80px rgba(0,255,65,0.5),
            0 4px 40px rgba(0,255,65,0.3);
        }

        .slide-subtext {
          font-size: 34px;
          font-weight: 500;
          color: rgba(255,255,255,.6);
          line-height: 1.55;
          max-width: 850px;
        }

        .slide-subtext.italic {
          font-style: italic;
          color: rgba(255,255,255,.7);
        }

        .slide-subtext strong {
          color: #fff;
          font-weight: 700;
        }

        .text-neon {
          color: var(--neon, #00FF41);
          font-weight: 700;
        }

        .text-muted {
          color: rgba(255,255,255,.5);
          font-weight: 700;
        }

        .center-text {
          text-align: center;
        }

        /* ========== SWIPE INDICATOR ========== */
        .slide-swipe {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 22px 44px;
          background: rgba(0,255,65,0.1);
          border: 2px solid rgba(0,255,65,0.5);
          border-radius: 60px;
          color: var(--neon, #00FF41);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.3px;
          box-shadow: 
            0 0 50px rgba(0,255,65,0.15),
            inset 0 0 30px rgba(0,255,65,0.05);
          margin-top: 20px;
        }

        .slide-swipe svg {
          animation: swipeArrow 1.2s ease-in-out infinite;
        }

        @keyframes swipeArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(12px); }
        }

        /* ========== FOOTER ========== */
        .slide-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .slide-dots {
          display: flex;
          gap: 12px;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255,255,255,.25);
        }

        .dot.active {
          background: var(--neon, #00FF41);
          box-shadow: 0 0 20px rgba(0,255,65,0.6);
        }

        .footer-url {
          font-size: 26px;
          font-weight: 600;
          color: rgba(255,255,255,.35);
          letter-spacing: 0.5px;
        }

        /* ========== GLASS CARD ========== */
        .glass-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px;
          padding: 52px 56px;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 20px 60px rgba(0,0,0,.4),
            inset 0 1px 0 rgba(255,255,255,.05);
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .step-number {
          width: 76px;
          height: 76px;
          background: linear-gradient(135deg, var(--neon, #00FF41), rgba(0,200,55,0.9));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: 900;
          color: #000;
          flex-shrink: 0;
          box-shadow: 0 10px 40px rgba(0,255,65,0.4);
        }

        .step-text {
          font-size: 36px;
          font-weight: 600;
          color: #fff;
        }

        /* ========== GAMES GRID ========== */
        .games-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .game-card {
          aspect-ratio: 460/215;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,.12);
          background: #0a0a0a;
        }

        .game-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.15) contrast(1.05);
        }

        .game-card-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 40%),
            linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%);
        }

        .game-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.08) 0%,
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 2;
        }

        /* ========== BADGE ========== */
        .badge-neon {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          background: rgba(0,255,65,0.1);
          border: 1px solid rgba(0,255,65,0.4);
          border-radius: 50px;
          color: var(--neon, #00FF41);
          font-size: 22px;
          font-weight: 700;
        }

        .badge-neon svg {
          flex-shrink: 0;
        }

        /* ========== SHIELD ========== */
        .shield-icon {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(0,255,65,0.15), rgba(0,255,65,0.05));
          border: 2px solid rgba(0,255,65,0.4);
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .shield-icon svg {
          width: 60px;
          height: 60px;
          color: var(--neon, #00FF41);
        }

        /* ========== DECORATIVE ========== */
        .neon-line {
          width: 160px;
          height: 5px;
          background: linear-gradient(90deg, var(--neon, #00FF41), rgba(0,255,65,0.4));
          border-radius: 3px;
          box-shadow: 0 0 40px rgba(0,255,65,0.5);
          margin: 20px 0;
        }

        .quote-text {
          font-size: 44px;
          font-weight: 600;
          color: #fff;
          line-height: 1.45;
        }

        .highlight-box {
          display: inline;
          background: var(--neon, #00FF41);
          color: #000;
          padding: 6px 28px;
          font-weight: 900;
          box-shadow: 0 10px 50px rgba(0,255,65,0.4);
        }

        /* ========== PILLS ROW ========== */
        .pills-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 32px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 60px;
          color: #fff;
          font-size: 24px;
          font-weight: 600;
        }

        .pill svg {
          color: var(--neon, #00FF41);
          flex-shrink: 0;
        }

        /* ========== IG ICONS ========== */
        .ig-icons {
          display: flex;
          gap: 32px;
          justify-content: center;
          margin-top: 24px;
        }

        .ig-icons svg {
          width: 44px;
          height: 44px;
          color: rgba(255,255,255,.6);
        }

        /* ========== EXPORT MODE ========== */
        .export-mode .slide {
          /* Remove sombras pesadas para export limpo */
          box-shadow: none;
          border-radius: 0;
        }

        .export-mode .slide-bg-mosaic img,
        .export-mode .slide-bg-image img,
        .export-mode .slide-bg-grid img,
        .export-mode .game-card img {
          /* Nitidez extra para export */
          filter: contrast(1.02) saturate(1.05);
        }

        .export-mode .slide-glow {
          /* Reduz blur para render mais limpo */
          filter: blur(40px);
        }

        /* Força anti-aliasing de alta qualidade */
        .slide * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Previne compressão de cores */
        .slide img {
          color-interpolation: sRGB;
        }
      `})]})},Dg=["✅ 100% Seguro","⚡ Acesso Imediato","🔒 Compra Blindada","🎮 Jogue Hoje Mesmo","🛡️ Garantia de 7 Dias","🚀 Download via Steam"],ZR=["Cyberpunk 2077","ELDEN RING","Hogwarts Legacy","Spider-Man","God of War","Red Dead Redemption 2","Baldur's Gate 3","Resident Evil","Grand Theft Auto V","Dark Souls III","Horizon Zero Dawn","The Last of Us","Call of Duty","Battlefield","Apex"];function JR(){const[e,t]=w.useState([]),[n,r]=w.useState(0),[i,s]=w.useState(15*60),o=w.useRef(null);w.useEffect(()=>{fetch("/plano-vitalicio/data/games.json").then(b=>b.json()).then(b=>t(b.filter(m=>m.cover)))},[]),w.useEffect(()=>{const b=setInterval(()=>{r(m=>(m+1)%Dg.length)},3e3);return()=>clearInterval(b)},[]),w.useEffect(()=>{const b=setInterval(()=>{s(m=>m>0?m-1:900)},1e3);return()=>clearInterval(b)},[]);const a=b=>{if(!o.current)return;const{left:m,top:y,width:g,height:x}=o.current.getBoundingClientRect(),v=(b.clientX-m)/g-.5,S=(b.clientY-y)/x-.5;o.current.style.transform=`perspective(1000px) rotateY(${v*5}deg) rotateX(${-S*5}deg)`},l=()=>{o.current&&(o.current.style.transform="perspective(1000px) rotateY(0deg) rotateX(0deg)")},u=b=>{const m=Math.floor(b/60).toString().padStart(2,"0"),y=(b%60).toString().padStart(2,"0");return`${m}:${y}`},d=w.useMemo(()=>{const b=[];for(const m of ZR){const y=e.find(g=>g.name.toLowerCase().includes(m.toLowerCase())||m.toLowerCase().includes(g.name.toLowerCase()));y&&!b.includes(y)&&b.push(y)}return b.slice(0,15)},[e]),f=w.useMemo(()=>{const b=d.slice(0,5);return[...b,...b]},[d]),p=w.useMemo(()=>{const b=d.slice(5,10);return[...b,...b]},[d]),h=w.useMemo(()=>{const b=d.slice(10,15);return[...b,...b]},[d]);return c.jsxs("div",{className:"cb-root",ref:o,onMouseMove:a,onMouseLeave:l,children:[c.jsxs("div",{className:"cb-left",children:[c.jsxs("div",{className:"cb-logo-row",children:[c.jsx("img",{src:Cw,alt:"Overise",className:"cb-logo"}),c.jsx("span",{className:"cb-store-label",children:"OVERISE STORE"})]}),c.jsxs("h1",{className:"cb-title",children:["PLANO",c.jsx("br",{}),c.jsx("span",{className:"cb-title-hl",children:"INICIANTE"})]}),c.jsxs("ul",{className:"cb-features",children:[c.jsxs("li",{children:[c.jsx("span",{className:"cb-check",children:"✓"})," ACESSO IMEDIATO"]}),c.jsxs("li",{children:[c.jsx("span",{className:"cb-check",children:"✓"})," JOGOS AAA OFFLINE"]}),c.jsxs("li",{children:[c.jsx("span",{className:"cb-check",children:"✓"})," ATUALIZAÇÕES GRÁTIS"]})]}),c.jsxs("div",{className:"cb-badge",children:[c.jsx("div",{className:"cb-pulse-dot"}),"OFERTA ENCERRA EM ",u(i)]}),c.jsx("div",{className:"cb-rotating-text",children:c.jsx("span",{children:Dg[n]},n)})]}),c.jsxs("div",{className:"cb-center",children:[c.jsx("div",{className:"cb-old-price",children:"DE R$ 19,97 POR"}),c.jsxs("div",{className:"cb-price",children:[c.jsx("span",{className:"cb-currency",children:"R$"}),c.jsx("span",{className:"cb-price-main",children:"9"}),c.jsx("span",{className:"cb-price-cents",children:",97"})]}),c.jsx("div",{className:"cb-price-tag",children:"TAXA ÚNICA"})]}),c.jsx("div",{className:"cb-right",children:c.jsxs("div",{className:"cb-scroll-container",children:[c.jsx("div",{className:"cb-scroll-col cb-scroll-up",style:{animationDuration:"25s"},children:f.map((b,m)=>c.jsx("div",{className:"cb-scroll-card",children:c.jsx("img",{src:b.cover,alt:b.name,loading:"eager"})},`c1-${m}`))}),c.jsx("div",{className:"cb-scroll-col cb-scroll-down",style:{marginTop:"-50px",animationDuration:"20s"},children:p.map((b,m)=>c.jsx("div",{className:"cb-scroll-card",children:c.jsx("img",{src:b.cover,alt:b.name,loading:"eager"})},`c2-${m}`))}),c.jsx("div",{className:"cb-scroll-col cb-scroll-up",style:{animationDuration:"30s"},children:h.map((b,m)=>c.jsx("div",{className:"cb-scroll-card",children:c.jsx("img",{src:b.cover,alt:b.name,loading:"eager"})},`c3-${m}`))})]})}),c.jsx("div",{className:"cb-scanlines"}),c.jsx("style",{children:`
        .cb-root {
          width: 100%;
          max-width: 1200px;
          aspect-ratio: 1200 / 420;
          margin: 0 auto;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 30% 50%, #0a0f0a 0%, #050505 100%);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          padding: 32px 40px;
          gap: 24px;
          font-family: 'Sora', sans-serif;
          box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.05), inset 0 0 60px rgba(0,255,65,.02);
          transition: transform 0.1s ease-out;
        }

        .cb-scanlines {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,.2) 50%, rgba(0,0,0,.2));
          background-size: 100% 4px;
          pointer-events: none; z-index: 10; opacity: .3;
        }

        /* LEFT */
        .cb-left { flex: 0 0 340px; display: flex; flex-direction: column; gap: 12px; z-index: 5; }
        .cb-logo-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
        .cb-logo { width: 22px; height: 22px; object-fit: contain; }
        .cb-store-label { font-size: 11px; font-weight: 800; color: rgba(255,255,255,.4); letter-spacing: 3px; text-transform: uppercase; }

        .cb-title { font-size: 42px; font-weight: 800; color: #fff; line-height: .9; letter-spacing: -2px; margin: 0; }
        .cb-title-hl {
          color: #00FF41;
          text-shadow: 0 0 20px rgba(0,255,65,.6);
          font-size: 52px;
          display: inline-block;
          animation: cb-glitch 3s infinite linear alternate-reverse;
        }
        @keyframes cb-glitch {
          0%, 90% { transform: skew(0deg); }
          92% { transform: skew(-2deg); filter: hue-rotate(0deg); }
          94% { transform: skew(2deg); filter: hue-rotate(90deg); }
          96% { transform: skew(0deg); filter: hue-rotate(0deg); }
          100% { transform: skew(0deg); }
        }

        .cb-features { list-style: none; padding: 0; margin: 8px 0; display: flex; flex-direction: column; gap: 6px; }
        .cb-features li { font-size: 13px; font-weight: 600; color: #ccc; display: flex; align-items: center; gap: 8px; }
        .cb-check { color: #00FF41; font-weight: 900; }

        .cb-badge {
          display: flex; align-items: center; gap: 8px; width: fit-content;
          padding: 6px 14px;
          background: rgba(220,38,38,.15); border: 1px solid rgba(220,38,38,.4); border-radius: 8px;
          color: #ef4444; font-size: 11px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase;
          box-shadow: 0 0 15px rgba(220,38,38,.1);
        }
        .cb-pulse-dot {
          width: 6px; height: 6px; background: #ef4444; border-radius: 50%;
          animation: cb-pulse-red 1.5s infinite;
        }
        @keyframes cb-pulse-red {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        .cb-rotating-text { font-size: 14px; font-weight: 600; color: #fff; min-height: 22px; margin-top: 4px; }
        .cb-rotating-text span { animation: cb-fadeUp .4s ease forwards; }
        @keyframes cb-fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* CENTER */
        .cb-center {
          flex: 0 0 220px; display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 5; position: relative;
        }
        .cb-center::before, .cb-center::after {
          content: ''; position: absolute; top: 10%; height: 80%; width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,.1), transparent);
        }
        .cb-center::before { left: 0; }
        .cb-center::after { right: 0; }

        .cb-old-price { font-size: 11px; color: #666; font-weight: 700; text-decoration: line-through; margin-bottom: -5px; }
        .cb-price { display: flex; align-items: flex-start; line-height: 1; filter: drop-shadow(0 0 10px rgba(0,255,65,.3)); }
        .cb-currency { font-size: 20px; font-weight: 700; color: #00FF41; margin-top: 12px; margin-right: 4px; }
        .cb-price-main { font-size: 100px; font-weight: 800; color: #fff; letter-spacing: -4px; }
        .cb-price-cents { font-size: 32px; font-weight: 700; color: #fff; margin-top: 16px; }
        .cb-price-tag {
          font-size: 11px; font-weight: 800; background: #00FF41; color: #000;
          padding: 4px 12px; border-radius: 4px; text-transform: uppercase; margin-top: 8px;
          transform: skewX(-10deg);
        }

        /* RIGHT - Scrolling */
        .cb-right {
          flex: 1; height: 100%; position: relative; overflow: hidden; z-index: 1;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .cb-right::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, #050505 0%, transparent 20%, transparent 80%, #050505 100%);
          pointer-events: none; z-index: 2;
        }

        .cb-scroll-container {
          display: flex; gap: 12px; height: 150%;
          transform: translateY(-15%) rotate(5deg) scale(1.1);
        }

        .cb-scroll-col { flex: 1; display: flex; flex-direction: column; gap: 12px; }
        .cb-scroll-up { animation: cb-scrollUp linear infinite; }
        .cb-scroll-down { animation: cb-scrollDown linear infinite; }

        .cb-scroll-card {
          border-radius: 8px; overflow: hidden; aspect-ratio: 2/3; position: relative;
          box-shadow: 0 4px 10px rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.1);
          flex-shrink: 0;
        }
        .cb-scroll-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        @keyframes cb-scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes cb-scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `})]})}const eA=Lv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon hover:shadow-neon-strong",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-secondary hover:border-primary/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-secondary hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",hero:"bg-primary text-primary-foreground font-bold tracking-wide uppercase shadow-neon hover:shadow-neon-strong hover:scale-105",heroOutline:"border-2 border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",neon:"bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-neon hover:shadow-neon-strong"},size:{default:"h-11 px-6 py-2",sm:"h-9 rounded-lg px-4 text-xs",lg:"h-14 rounded-xl px-8 text-base",xl:"h-16 rounded-2xl px-10 text-lg",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ew=w.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},s)=>{const o=r?m2:"button";return c.jsx(o,{className:cr(eA({variant:t,size:n,className:e})),ref:s,...i})});Ew.displayName="Button";const tA=()=>{const e=mo();return w.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),c.jsx("div",{className:"flex min-h-screen items-center justify-center bg-background",children:c.jsxs("div",{className:"text-center space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[c.jsx("div",{className:"w-3 h-3 rounded-full bg-primary animate-pulse-neon"}),c.jsx("span",{className:"text-2xl font-bold tracking-wider",children:"OVERISE"})]}),c.jsx("h1",{className:"text-8xl font-black neon-text",children:"404"}),c.jsx("p",{className:"text-xl text-muted-foreground",children:"Página não encontrada"}),c.jsx(Ew,{variant:"hero",asChild:!0,children:c.jsx($E,{to:"/",children:"Voltar ao Início"})})]})})},nA=new _C,rA=()=>c.jsx($C,{client:nA,children:c.jsxs(gC,{children:[c.jsx(JS,{}),c.jsx(Ak,{}),c.jsx(VE,{basename:"/plano-vitalicio/",children:c.jsxs(ME,{children:[c.jsx(fs,{path:"/",element:c.jsx(QR,{})}),c.jsx(fs,{path:"/instagram",element:c.jsx(XR,{})}),c.jsx(fs,{path:"/checkout-banner",element:c.jsx(JR,{})}),c.jsx(fs,{path:"*",element:c.jsx(tA,{})})]})})]})});iv(document.getElementById("root")).render(c.jsx(rA,{}));

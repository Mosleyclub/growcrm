(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sy={exports:{}},Dl={},oy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),hw=Symbol.for("react.portal"),dw=Symbol.for("react.fragment"),fw=Symbol.for("react.strict_mode"),pw=Symbol.for("react.profiler"),mw=Symbol.for("react.provider"),gw=Symbol.for("react.context"),yw=Symbol.for("react.forward_ref"),_w=Symbol.for("react.suspense"),vw=Symbol.for("react.memo"),Ew=Symbol.for("react.lazy"),Rp=Symbol.iterator;function ww(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var ay={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ly=Object.assign,uy={};function Wi(t,e,n){this.props=t,this.context=e,this.refs=uy,this.updater=n||ay}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cy(){}cy.prototype=Wi.prototype;function Bh(t,e,n){this.props=t,this.context=e,this.refs=uy,this.updater=n||ay}var $h=Bh.prototype=new cy;$h.constructor=Bh;ly($h,Wi.prototype);$h.isPureReactComponent=!0;var Cp=Array.isArray,hy=Object.prototype.hasOwnProperty,Wh={current:null},dy={key:!0,ref:!0,__self:!0,__source:!0};function fy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hy.call(e,r)&&!dy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:yo,type:t,key:s,ref:o,props:i,_owner:Wh.current}}function Tw(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function Iw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pp=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Iw(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case hw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uu(o,0):r,Cp(i)?(n="",t!=null&&(n=t.replace(Pp,"$&/")+"/"),Ta(i,e,n,"",function(h){return h})):i!=null&&(Hh(i)&&(i=Tw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Uu(s,l);o+=Ta(s,e,n,u,i)}else if(u=ww(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Uu(s,l++),o+=Ta(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jo(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Sw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Ia={transition:null},Aw={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:Wh};function py(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Jo,forEach:function(t,e,n){Jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jo(t,function(){e++}),e},toArray:function(t){return Jo(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Wi;Z.Fragment=dw;Z.Profiler=pw;Z.PureComponent=Bh;Z.StrictMode=fw;Z.Suspense=_w;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw;Z.act=py;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ly({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)hy.call(e,u)&&!dy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:yo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:gw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mw,_context:t},t.Consumer=t};Z.createElement=fy;Z.createFactory=function(t){var e=fy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:yw,render:t}};Z.isValidElement=Hh;Z.lazy=function(t){return{$$typeof:Ew,_payload:{_status:-1,_result:t},_init:Sw}};Z.memo=function(t,e){return{$$typeof:vw,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};Z.unstable_act=py;Z.useCallback=function(t,e){return lt.current.useCallback(t,e)};Z.useContext=function(t){return lt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return lt.current.useEffect(t,e)};Z.useId=function(){return lt.current.useId()};Z.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return lt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};Z.useRef=function(t){return lt.current.useRef(t)};Z.useState=function(t){return lt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return lt.current.useTransition()};Z.version="18.3.1";oy.exports=Z;var Q=oy.exports;const kw=cw(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rw=Q,Cw=Symbol.for("react.element"),Pw=Symbol.for("react.fragment"),xw=Object.prototype.hasOwnProperty,Nw=Rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dw={key:!0,ref:!0,__self:!0,__source:!0};function my(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xw.call(e,r)&&!Dw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Cw,type:t,key:s,ref:o,props:i,_owner:Nw.current}}Dl.Fragment=Pw;Dl.jsx=my;Dl.jsxs=my;sy.exports=Dl;var E=sy.exports,Ac={},gy={exports:{}},kt={},yy={exports:{}},_y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var J=z.length;z.push(q);e:for(;0<J;){var ye=J-1>>>1,le=z[ye];if(0<i(le,q))z[ye]=q,z[J]=le,J=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],J=z.pop();if(J!==q){z[0]=J;e:for(var ye=0,le=z.length,Se=le>>>1;ye<Se;){var ln=2*(ye+1)-1,un=z[ln],cn=ln+1,hn=z[cn];if(0>i(un,J))cn<le&&0>i(hn,un)?(z[ye]=hn,z[cn]=J,ye=cn):(z[ye]=un,z[ln]=J,ye=ln);else if(cn<le&&0>i(hn,J))z[ye]=hn,z[cn]=J,ye=cn;else break e}}return q}function i(z,q){var J=z.sortIndex-q.sortIndex;return J!==0?J:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,C=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(z){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=z)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function N(z){if(D=!1,k(z),!C)if(n(u)!==null)C=!0,ht(F);else{var q=n(h);q!==null&&Ct(N,q.startTime-z)}}function F(z,q){C=!1,D&&(D=!1,I(y),y=-1),A=!0;var J=g;try{for(k(q),p=n(u);p!==null&&(!(p.expirationTime>q)||z&&!R());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,g=p.priorityLevel;var le=ye(p.expirationTime<=q);q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),k(q)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var ln=n(h);ln!==null&&Ct(N,ln.startTime-q),Se=!1}return Se}finally{p=null,g=J,A=!1}}var j=!1,v=null,y=-1,_=5,T=-1;function R(){return!(t.unstable_now()-T<_)}function P(){if(v!==null){var z=t.unstable_now();T=z;var q=!0;try{q=v(!0,z)}finally{q?S():(j=!1,v=null)}}else j=!1}var S;if(typeof w=="function")S=function(){w(P)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ct=pe.port2;pe.port1.onmessage=P,S=function(){ct.postMessage(null)}}else S=function(){b(P,0)};function ht(z){v=z,j||(j=!0,S())}function Ct(z,q){y=b(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,ht(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var J=g;g=q;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return q()}finally{g=J}},t.unstable_scheduleCallback=function(z,q,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,z={id:f++,callback:q,priorityLevel:z,startTime:J,expirationTime:le,sortIndex:-1},J>ye?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(D?(I(y),y=-1):D=!0,Ct(N,J-ye))):(z.sortIndex=le,e(u,z),C||A||(C=!0,ht(F))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var q=g;return function(){var J=g;g=q;try{return z.apply(this,arguments)}finally{g=J}}}})(_y);yy.exports=_y;var Ow=yy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bw=Q,At=Ow;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vy=new Set,Ws={};function $r(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Ws[t]=e,t=0;t<e.length;t++)vy.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,Vw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},Np={};function Lw(t){return kc.call(Np,t)?!0:kc.call(xp,t)?!1:Vw.test(t)?Np[t]=!0:(xp[t]=!0,!1)}function Mw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fw(t,e,n,r){if(e===null||typeof e>"u"||Mw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function Kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qh,Kh);He[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qh,Kh);He[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qh,Kh);He[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gh(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fw(e,n,i,r)&&(n=null),r||i===null?Lw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),ii=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),Qh=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),Ey=Symbol.for("react.provider"),wy=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),Ty=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,zu;function Es(t){if(zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var Bu=!1;function $u(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function jw(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=$u(t.type,!1),t;case 11:return t=$u(t.type.render,!1),t;case 1:return t=$u(t.type,!0),t;default:return""}}function xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case ii:return"Portal";case Rc:return"Profiler";case Qh:return"StrictMode";case Cc:return"Suspense";case Pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wy:return(t.displayName||"Context")+".Consumer";case Ey:return(t._context.displayName||"Context")+".Provider";case Yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:xc(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return xc(t(e))}catch{}}return null}function Uw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xc(e);case 8:return e===Qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zw(t){var e=Iy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=zw(t))}function Sy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Iy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Op(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ay(t,e){e=e.checked,e!=null&&Gh(t,"checked",e,!1)}function Dc(t,e){Ay(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oc(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oc(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(ws(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function ky(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ry(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ry(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,Cy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bw=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){Bw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function Py(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function xy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Py(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $w=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lc(t,e){if(e){if($w[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Mc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function Jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,_i=null,vi=null;function Mp(t){if(t=Eo(t)){if(typeof jc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Ml(e),jc(t.stateNode,t.type,e))}}function Ny(t){_i?vi?vi.push(t):vi=[t]:_i=t}function Dy(){if(_i){var t=_i,e=vi;if(vi=_i=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function Oy(t,e){return t(e)}function by(){}var Wu=!1;function Vy(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return Oy(t,e,n)}finally{Wu=!1,(_i!==null||vi!==null)&&(by(),Dy())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Uc=!1;if(In)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Uc=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Uc=!1}function Ww(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ns=!1,Wa=null,Ha=!1,zc=null,Hw={onError:function(t){Ns=!0,Wa=t}};function qw(t,e,n,r,i,s,o,l,u){Ns=!1,Wa=null,Ww.apply(Hw,arguments)}function Kw(t,e,n,r,i,s,o,l,u){if(qw.apply(this,arguments),Ns){if(Ns){var h=Wa;Ns=!1,Wa=null}else throw Error(M(198));Ha||(Ha=!0,zc=h)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ly(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(Wr(t)!==t)throw Error(M(188))}function Gw(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fp(i),t;if(s===r)return Fp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function My(t){return t=Gw(t),t!==null?Fy(t):null}function Fy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fy(t);if(e!==null)return e;t=t.sibling}return null}var jy=At.unstable_scheduleCallback,jp=At.unstable_cancelCallback,Qw=At.unstable_shouldYield,Yw=At.unstable_requestPaint,ke=At.unstable_now,Xw=At.unstable_getCurrentPriorityLevel,Zh=At.unstable_ImmediatePriority,Uy=At.unstable_UserBlockingPriority,qa=At.unstable_NormalPriority,Jw=At.unstable_LowPriority,zy=At.unstable_IdlePriority,Ol=null,Qt=null;function Zw(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:nT,eT=Math.log,tT=Math.LN2;function nT(t){return t>>>=0,t===0?32:31-(eT(t)/tT|0)|0}var na=64,ra=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ts(l):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function rT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=rT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function By(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function sT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function $y(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wy,td,Hy,qy,Ky,$c=!1,ia=[],Gn=null,Qn=null,Yn=null,Ks=new Map,Gs=new Map,jn=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Eo(e),e!==null&&td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aT(t,e,n,r,i){switch(e){case"focusin":return Gn=fs(Gn,t,e,n,r,i),!0;case"dragenter":return Qn=fs(Qn,t,e,n,r,i),!0;case"mouseover":return Yn=fs(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ks.set(s,fs(Ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,fs(Gs.get(s)||null,t,e,n,r,i)),!0}return!1}function Gy(t){var e=Ar(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ly(n),e!==null){t.blockedOn=e,Ky(t.priority,function(){Hy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fc=r,n.target.dispatchEvent(r),Fc=null}else return e=Eo(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function zp(t,e,n){Sa(t)&&n.delete(e)}function lT(){$c=!1,Gn!==null&&Sa(Gn)&&(Gn=null),Qn!==null&&Sa(Qn)&&(Qn=null),Yn!==null&&Sa(Yn)&&(Yn=null),Ks.forEach(zp),Gs.forEach(zp)}function ps(t,e){t.blockedOn===e&&(t.blockedOn=null,$c||($c=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,lT)))}function Qs(t){function e(i){return ps(i,t)}if(0<ia.length){ps(ia[0],t);for(var n=1;n<ia.length;n++){var r=ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&ps(Gn,t),Qn!==null&&ps(Qn,t),Yn!==null&&ps(Yn,t),Ks.forEach(e),Gs.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Gy(n),n.blockedOn===null&&jn.shift()}var Ei=Nn.ReactCurrentBatchConfig,Ga=!0;function uT(t,e,n,r){var i=oe,s=Ei.transition;Ei.transition=null;try{oe=1,nd(t,e,n,r)}finally{oe=i,Ei.transition=s}}function cT(t,e,n,r){var i=oe,s=Ei.transition;Ei.transition=null;try{oe=4,nd(t,e,n,r)}finally{oe=i,Ei.transition=s}}function nd(t,e,n,r){if(Ga){var i=Wc(t,e,n,r);if(i===null)tc(t,e,r,Qa,n),Up(t,r);else if(aT(i,t,e,n,r))r.stopPropagation();else if(Up(t,r),e&4&&-1<oT.indexOf(t)){for(;i!==null;){var s=Eo(i);if(s!==null&&Wy(s),s=Wc(t,e,n,r),s===null&&tc(t,e,r,Qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tc(t,e,r,null,n)}}var Qa=null;function Wc(t,e,n,r){if(Qa=null,t=Jh(r),t=Ar(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ly(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qa=t,null}function Qy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xw()){case Zh:return 1;case Uy:return 4;case qa:case Jw:return 16;case zy:return 536870912;default:return 16}default:return 16}}var Hn=null,rd=null,Aa=null;function Yy(){if(Aa)return Aa;var t,e=rd,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Aa=i.slice(t,1<r?1-r:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function Bp(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:Bp,this.isPropagationStopped=Bp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},id=Rt(Hi),vo=Ee({},Hi,{view:0,detail:0}),hT=Rt(vo),qu,Ku,ms,bl=Ee({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ms&&(ms&&t.type==="mousemove"?(qu=t.screenX-ms.screenX,Ku=t.screenY-ms.screenY):Ku=qu=0,ms=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),$p=Rt(bl),dT=Ee({},bl,{dataTransfer:0}),fT=Rt(dT),pT=Ee({},vo,{relatedTarget:0}),Gu=Rt(pT),mT=Ee({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),gT=Rt(mT),yT=Ee({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_T=Rt(yT),vT=Ee({},Hi,{data:0}),Wp=Rt(vT),ET={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TT[t])?!!e[t]:!1}function sd(){return IT}var ST=Ee({},vo,{key:function(t){if(t.key){var e=ET[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AT=Rt(ST),kT=Ee({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Rt(kT),RT=Ee({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),CT=Rt(RT),PT=Ee({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),xT=Rt(PT),NT=Ee({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=Rt(NT),OT=[9,13,27,32],od=In&&"CompositionEvent"in window,Ds=null;In&&"documentMode"in document&&(Ds=document.documentMode);var bT=In&&"TextEvent"in window&&!Ds,Xy=In&&(!od||Ds&&8<Ds&&11>=Ds),qp=" ",Kp=!1;function Jy(t,e){switch(t){case"keyup":return OT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function VT(t,e){switch(t){case"compositionend":return Zy(e);case"keypress":return e.which!==32?null:(Kp=!0,qp);case"textInput":return t=e.data,t===qp&&Kp?null:t;default:return null}}function LT(t,e){if(oi)return t==="compositionend"||!od&&Jy(t,e)?(t=Yy(),Aa=rd=Hn=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xy&&e.locale!=="ko"?null:e.data;default:return null}}var MT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MT[t.type]:e==="textarea"}function e_(t,e,n,r){Ny(r),e=Ya(e,"onChange"),0<e.length&&(n=new id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Os=null,Ys=null;function FT(t){h_(t,0)}function Vl(t){var e=ui(t);if(Sy(e))return t}function jT(t,e){if(t==="change")return e}var t_=!1;if(In){var Qu;if(In){var Yu="oninput"in document;if(!Yu){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),Yu=typeof Qp.oninput=="function"}Qu=Yu}else Qu=!1;t_=Qu&&(!document.documentMode||9<document.documentMode)}function Yp(){Os&&(Os.detachEvent("onpropertychange",n_),Ys=Os=null)}function n_(t){if(t.propertyName==="value"&&Vl(Ys)){var e=[];e_(e,Ys,t,Jh(t)),Vy(FT,e)}}function UT(t,e,n){t==="focusin"?(Yp(),Os=e,Ys=n,Os.attachEvent("onpropertychange",n_)):t==="focusout"&&Yp()}function zT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Ys)}function BT(t,e){if(t==="click")return Vl(e)}function $T(t,e){if(t==="input"||t==="change")return Vl(e)}function WT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:WT;function Xs(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Xp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xp(n)}}function r_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i_(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HT(t){var e=i_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r_(n.ownerDocument.documentElement,n)){if(r!==null&&ad(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jp(n,s);var o=Jp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qT=In&&"documentMode"in document&&11>=document.documentMode,ai=null,Hc=null,bs=null,qc=!1;function Zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qc||ai==null||ai!==$a(r)||(r=ai,"selectionStart"in r&&ad(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&Xs(bs,r)||(bs=r,r=Ya(Hc,"onSelect"),0<r.length&&(e=new id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Xu={},s_={};In&&(s_=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Ll(t){if(Xu[t])return Xu[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in s_)return Xu[t]=e[n];return t}var o_=Ll("animationend"),a_=Ll("animationiteration"),l_=Ll("animationstart"),u_=Ll("transitionend"),c_=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){c_.set(t,e),$r(e,[t])}for(var Ju=0;Ju<em.length;Ju++){var Zu=em[Ju],KT=Zu.toLowerCase(),GT=Zu[0].toUpperCase()+Zu.slice(1);fr(KT,"on"+GT)}fr(o_,"onAnimationEnd");fr(a_,"onAnimationIteration");fr(l_,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(u_,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kw(r,e,void 0,t),t.currentTarget=null}function h_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;tm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;tm(i,l,h),s=u}}}if(Ha)throw t=zc,Ha=!1,zc=null,t}function de(t,e){var n=e[Xc];n===void 0&&(n=e[Xc]=new Set);var r=t+"__bubble";n.has(r)||(d_(e,t,2,!1),n.add(r))}function ec(t,e,n){var r=0;e&&(r|=4),d_(n,t,r,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[aa]){t[aa]=!0,vy.forEach(function(n){n!=="selectionchange"&&(QT.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,ec("selectionchange",!1,e))}}function d_(t,e,n,r){switch(Qy(e)){case 1:var i=uT;break;case 4:i=cT;break;default:i=nd}n=i.bind(null,e,n,t),i=void 0,!Uc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function tc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ar(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Vy(function(){var h=s,f=Jh(n),p=[];e:{var g=c_.get(t);if(g!==void 0){var A=id,C=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":A=AT;break;case"focusin":C="focus",A=Gu;break;case"focusout":C="blur",A=Gu;break;case"beforeblur":case"afterblur":A=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=fT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=CT;break;case o_:case a_:case l_:A=gT;break;case u_:A=xT;break;case"scroll":A=hT;break;case"wheel":A=DT;break;case"copy":case"cut":case"paste":A=_T;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Hp}var D=(e&4)!==0,b=!D&&t==="scroll",I=D?g!==null?g+"Capture":null:g;D=[];for(var w=h,k;w!==null;){k=w;var N=k.stateNode;if(k.tag===5&&N!==null&&(k=N,I!==null&&(N=qs(w,I),N!=null&&D.push(Zs(w,N,k)))),b)break;w=w.return}0<D.length&&(g=new A(g,C,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Fc&&(C=n.relatedTarget||n.fromElement)&&(Ar(C)||C[Sn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=h,C=C?Ar(C):null,C!==null&&(b=Wr(C),C!==b||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=h),A!==C)){if(D=$p,N="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=Hp,N="onPointerLeave",I="onPointerEnter",w="pointer"),b=A==null?g:ui(A),k=C==null?g:ui(C),g=new D(N,w+"leave",A,n,f),g.target=b,g.relatedTarget=k,N=null,Ar(f)===h&&(D=new D(I,w+"enter",C,n,f),D.target=k,D.relatedTarget=b,N=D),b=N,A&&C)t:{for(D=A,I=C,w=0,k=D;k;k=Zr(k))w++;for(k=0,N=I;N;N=Zr(N))k++;for(;0<w-k;)D=Zr(D),w--;for(;0<k-w;)I=Zr(I),k--;for(;w--;){if(D===I||I!==null&&D===I.alternate)break t;D=Zr(D),I=Zr(I)}D=null}else D=null;A!==null&&nm(p,g,A,D,!1),C!==null&&b!==null&&nm(p,b,C,D,!0)}}e:{if(g=h?ui(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var F=jT;else if(Gp(g))if(t_)F=$T;else{F=zT;var j=UT}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=BT);if(F&&(F=F(t,h))){e_(p,F,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Oc(g,"number",g.value)}switch(j=h?ui(h):window,t){case"focusin":(Gp(j)||j.contentEditable==="true")&&(ai=j,Hc=h,bs=null);break;case"focusout":bs=Hc=ai=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Zp(p,n,f);break;case"selectionchange":if(qT)break;case"keydown":case"keyup":Zp(p,n,f)}var v;if(od)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else oi?Jy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Xy&&n.locale!=="ko"&&(oi||y!=="onCompositionStart"?y==="onCompositionEnd"&&oi&&(v=Yy()):(Hn=f,rd="value"in Hn?Hn.value:Hn.textContent,oi=!0)),j=Ya(h,y),0<j.length&&(y=new Wp(y,t,null,n,f),p.push({event:y,listeners:j}),v?y.data=v:(v=Zy(n),v!==null&&(y.data=v)))),(v=bT?VT(t,n):LT(t,n))&&(h=Ya(h,"onBeforeInput"),0<h.length&&(f=new Wp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}h_(p,e)})}function Zs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ya(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qs(t,n),s!=null&&r.unshift(Zs(t,s,i)),s=qs(t,e),s!=null&&r.push(Zs(t,s,i))),t=t.return}return r}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=qs(n,s),u!=null&&o.unshift(Zs(n,u,l))):i||(u=qs(n,s),u!=null&&o.push(Zs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YT=/\r\n?/g,XT=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(YT,`
`).replace(XT,"")}function la(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(M(425))}function Xa(){}var Kc=null,Gc=null;function Qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,JT=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,ZT=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(t){return im.resolve(null).then(t).catch(eI)}:Yc;function eI(t){setTimeout(function(){throw t})}function nc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qs(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+qi,eo="__reactProps$"+qi,Sn="__reactContainer$"+qi,Xc="__reactEvents$"+qi,tI="__reactListeners$"+qi,nI="__reactHandles$"+qi;function Ar(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[Kt])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function Eo(t){return t=t[Kt]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Ml(t){return t[eo]||null}var Jc=[],ci=-1;function pr(t){return{current:t}}function fe(t){0>ci||(t.current=Jc[ci],Jc[ci]=null,ci--)}function ce(t,e){ci++,Jc[ci]=t.current,t.current=e}var lr={},nt=pr(lr),mt=pr(!1),Or=lr;function Pi(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Ja(){fe(mt),fe(nt)}function om(t,e,n){if(nt.current!==lr)throw Error(M(168));ce(nt,e),ce(mt,n)}function f_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,Uw(t)||"Unknown",i));return Ee({},n,r)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Or=nt.current,ce(nt,t),ce(mt,mt.current),!0}function am(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=f_(t,e,Or),r.__reactInternalMemoizedMergedChildContext=t,fe(mt),fe(nt),ce(nt,t)):fe(mt),ce(mt,n)}var mn=null,Fl=!1,rc=!1;function p_(t){mn===null?mn=[t]:mn.push(t)}function rI(t){Fl=!0,p_(t)}function mr(){if(!rc&&mn!==null){rc=!0;var t=0,e=oe;try{var n=mn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,Fl=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),jy(Zh,mr),i}finally{oe=e,rc=!1}}return null}var hi=[],di=0,el=null,tl=0,Pt=[],xt=0,br=null,gn=1,yn="";function Tr(t,e){hi[di++]=tl,hi[di++]=el,el=t,tl=e}function m_(t,e,n){Pt[xt++]=gn,Pt[xt++]=yn,Pt[xt++]=br,br=t;var r=gn;t=yn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-zt(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function ld(t){t.return!==null&&(Tr(t,1),m_(t,1,0))}function ud(t){for(;t===el;)el=hi[--di],hi[di]=null,tl=hi[--di],hi[di]=null;for(;t===br;)br=Pt[--xt],Pt[xt]=null,yn=Pt[--xt],Pt[xt]=null,gn=Pt[--xt],Pt[xt]=null}var Tt=null,Et=null,me=!1,jt=null;function g_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function Zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eh(t){if(me){var e=Et;if(e){var n=e;if(!lm(t,e)){if(Zc(t))throw Error(M(418));e=Xn(n.nextSibling);var r=Tt;e&&lm(t,e)?g_(r,n):(t.flags=t.flags&-4097|2,me=!1,Tt=t)}}else{if(Zc(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,Tt=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function ua(t){if(t!==Tt)return!1;if(!me)return um(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qc(t.type,t.memoizedProps)),e&&(e=Et)){if(Zc(t))throw y_(),Error(M(418));for(;e;)g_(t,e),e=Xn(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?Xn(t.stateNode.nextSibling):null;return!0}function y_(){for(var t=Et;t;)t=Xn(t.nextSibling)}function xi(){Et=Tt=null,me=!1}function cd(t){jt===null?jt=[t]:jt.push(t)}var iI=Nn.ReactCurrentBatchConfig;function gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cm(t){var e=t._init;return e(t._payload)}function __(t){function e(I,w){if(t){var k=I.deletions;k===null?(I.deletions=[w],I.flags|=16):k.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=tr(I,w),I.index=0,I.sibling=null,I}function s(I,w,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<w?(I.flags|=2,w):k):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,k,N){return w===null||w.tag!==6?(w=cc(k,I.mode,N),w.return=I,w):(w=i(w,k),w.return=I,w)}function u(I,w,k,N){var F=k.type;return F===si?f(I,w,k.props.children,N,k.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Mn&&cm(F)===w.type)?(N=i(w,k.props),N.ref=gs(I,w,k),N.return=I,N):(N=Oa(k.type,k.key,k.props,null,I.mode,N),N.ref=gs(I,w,k),N.return=I,N)}function h(I,w,k,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=hc(k,I.mode,N),w.return=I,w):(w=i(w,k.children||[]),w.return=I,w)}function f(I,w,k,N,F){return w===null||w.tag!==7?(w=xr(k,I.mode,N,F),w.return=I,w):(w=i(w,k),w.return=I,w)}function p(I,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=cc(""+w,I.mode,k),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Zo:return k=Oa(w.type,w.key,w.props,null,I.mode,k),k.ref=gs(I,null,w),k.return=I,k;case ii:return w=hc(w,I.mode,k),w.return=I,w;case Mn:var N=w._init;return p(I,N(w._payload),k)}if(ws(w)||hs(w))return w=xr(w,I.mode,k,null),w.return=I,w;ca(I,w)}return null}function g(I,w,k,N){var F=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return F!==null?null:l(I,w,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Zo:return k.key===F?u(I,w,k,N):null;case ii:return k.key===F?h(I,w,k,N):null;case Mn:return F=k._init,g(I,w,F(k._payload),N)}if(ws(k)||hs(k))return F!==null?null:f(I,w,k,N,null);ca(I,k)}return null}function A(I,w,k,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return I=I.get(k)||null,l(w,I,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Zo:return I=I.get(N.key===null?k:N.key)||null,u(w,I,N,F);case ii:return I=I.get(N.key===null?k:N.key)||null,h(w,I,N,F);case Mn:var j=N._init;return A(I,w,k,j(N._payload),F)}if(ws(N)||hs(N))return I=I.get(k)||null,f(w,I,N,F,null);ca(w,N)}return null}function C(I,w,k,N){for(var F=null,j=null,v=w,y=w=0,_=null;v!==null&&y<k.length;y++){v.index>y?(_=v,v=null):_=v.sibling;var T=g(I,v,k[y],N);if(T===null){v===null&&(v=_);break}t&&v&&T.alternate===null&&e(I,v),w=s(T,w,y),j===null?F=T:j.sibling=T,j=T,v=_}if(y===k.length)return n(I,v),me&&Tr(I,y),F;if(v===null){for(;y<k.length;y++)v=p(I,k[y],N),v!==null&&(w=s(v,w,y),j===null?F=v:j.sibling=v,j=v);return me&&Tr(I,y),F}for(v=r(I,v);y<k.length;y++)_=A(v,I,y,k[y],N),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?y:_.key),w=s(_,w,y),j===null?F=_:j.sibling=_,j=_);return t&&v.forEach(function(R){return e(I,R)}),me&&Tr(I,y),F}function D(I,w,k,N){var F=hs(k);if(typeof F!="function")throw Error(M(150));if(k=F.call(k),k==null)throw Error(M(151));for(var j=F=null,v=w,y=w=0,_=null,T=k.next();v!==null&&!T.done;y++,T=k.next()){v.index>y?(_=v,v=null):_=v.sibling;var R=g(I,v,T.value,N);if(R===null){v===null&&(v=_);break}t&&v&&R.alternate===null&&e(I,v),w=s(R,w,y),j===null?F=R:j.sibling=R,j=R,v=_}if(T.done)return n(I,v),me&&Tr(I,y),F;if(v===null){for(;!T.done;y++,T=k.next())T=p(I,T.value,N),T!==null&&(w=s(T,w,y),j===null?F=T:j.sibling=T,j=T);return me&&Tr(I,y),F}for(v=r(I,v);!T.done;y++,T=k.next())T=A(v,I,y,T.value,N),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),w=s(T,w,y),j===null?F=T:j.sibling=T,j=T);return t&&v.forEach(function(P){return e(I,P)}),me&&Tr(I,y),F}function b(I,w,k,N){if(typeof k=="object"&&k!==null&&k.type===si&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Zo:e:{for(var F=k.key,j=w;j!==null;){if(j.key===F){if(F=k.type,F===si){if(j.tag===7){n(I,j.sibling),w=i(j,k.props.children),w.return=I,I=w;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Mn&&cm(F)===j.type){n(I,j.sibling),w=i(j,k.props),w.ref=gs(I,j,k),w.return=I,I=w;break e}n(I,j);break}else e(I,j);j=j.sibling}k.type===si?(w=xr(k.props.children,I.mode,N,k.key),w.return=I,I=w):(N=Oa(k.type,k.key,k.props,null,I.mode,N),N.ref=gs(I,w,k),N.return=I,I=N)}return o(I);case ii:e:{for(j=k.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(I,w.sibling),w=i(w,k.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=hc(k,I.mode,N),w.return=I,I=w}return o(I);case Mn:return j=k._init,b(I,w,j(k._payload),N)}if(ws(k))return C(I,w,k,N);if(hs(k))return D(I,w,k,N);ca(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,k),w.return=I,I=w):(n(I,w),w=cc(k,I.mode,N),w.return=I,I=w),o(I)):n(I,w)}return b}var Ni=__(!0),v_=__(!1),nl=pr(null),rl=null,fi=null,hd=null;function dd(){hd=fi=rl=null}function fd(t){var e=nl.current;fe(nl),t._currentValue=e}function th(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wi(t,e){rl=t,hd=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(hd!==t)if(t={context:t,memoizedValue:e,next:null},fi===null){if(rl===null)throw Error(M(308));fi=t,rl.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return e}var kr=null;function pd(t){kr===null?kr=[t]:kr.push(t)}function E_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pd(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,pd(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}function hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,D=l;switch(g=e,A=n,D.tag){case 1:if(C=D.payload,typeof C=="function"){p=C.call(A,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=D.payload,g=typeof C=="function"?C.call(A,p,g):C,g==null)break e;p=Ee({},p,g);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=p}}function dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var wo={},Yt=pr(wo),to=pr(wo),no=pr(wo);function Rr(t){if(t===wo)throw Error(M(174));return t}function gd(t,e){switch(ce(no,e),ce(to,t),ce(Yt,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vc(e,t)}fe(Yt),ce(Yt,e)}function Di(){fe(Yt),fe(to),fe(no)}function T_(t){Rr(no.current);var e=Rr(Yt.current),n=Vc(e,t.type);e!==n&&(ce(to,t),ce(Yt,n))}function yd(t){to.current===t&&(fe(Yt),fe(to))}var _e=pr(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ic=[];function _d(){for(var t=0;t<ic.length;t++)ic[t]._workInProgressVersionPrimary=null;ic.length=0}var Ca=Nn.ReactCurrentDispatcher,sc=Nn.ReactCurrentBatchConfig,Vr=0,ve=null,xe=null,Le=null,ol=!1,Vs=!1,ro=0,sI=0;function Ye(){throw Error(M(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function Ed(t,e,n,r,i,s){if(Vr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ca.current=t===null||t.memoizedState===null?uI:cI,t=n(r,i),Vs){s=0;do{if(Vs=!1,ro=0,25<=s)throw Error(M(301));s+=1,Le=xe=null,e.updateQueue=null,Ca.current=hI,t=n(r,i)}while(Vs)}if(Ca.current=al,e=xe!==null&&xe.next!==null,Vr=0,Le=xe=ve=null,ol=!1,e)throw Error(M(300));return t}function wd(){var t=ro!==0;return ro=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ve.memoizedState=Le=t:Le=Le.next=t,Le}function bt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Le===null?ve.memoizedState:Le.next;if(e!==null)Le=e,xe=t;else{if(t===null)throw Error(M(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?ve.memoizedState=Le=t:Le=Le.next=t}return Le}function io(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=bt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Vr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,Lr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ac(t){var e=bt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function I_(){}function S_(t,e){var n=ve,r=bt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Td(R_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,so(9,k_.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(M(349));Vr&30||A_(n,e,i)}return i}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k_(t,e,n,r){e.value=n,e.getSnapshot=r,C_(e)&&P_(t)}function R_(t,e,n){return n(function(){C_(e)&&P_(t)})}function C_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function P_(t){var e=An(t,1);e!==null&&Bt(e,t,1,-1)}function fm(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:t},e.queue=t,t=t.dispatch=lI.bind(null,ve,t),[e.memoizedState,t]}function so(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function x_(){return bt().memoizedState}function Pa(t,e,n,r){var i=qt();ve.flags|=t,i.memoizedState=so(1|e,n,void 0,r===void 0?null:r)}function jl(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&vd(r,o.deps)){i.memoizedState=so(e,n,s,r);return}}ve.flags|=t,i.memoizedState=so(1|e,n,s,r)}function pm(t,e){return Pa(8390656,8,t,e)}function Td(t,e){return jl(2048,8,t,e)}function N_(t,e){return jl(4,2,t,e)}function D_(t,e){return jl(4,4,t,e)}function O_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b_(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,O_.bind(null,e,t),n)}function Id(){}function V_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M_(t,e,n){return Vr&21?($t(n,e)||(n=By(),ve.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function oI(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=sc.transition;sc.transition={};try{t(!1),e()}finally{oe=n,sc.transition=r}}function F_(){return bt().memoizedState}function aI(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j_(t))U_(e,n);else if(n=E_(t,e,n,r),n!==null){var i=at();Bt(n,t,r,i),z_(n,e,r)}}function lI(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j_(t))U_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,pd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=E_(t,e,i,r),n!==null&&(i=at(),Bt(n,t,r,i),z_(n,e,r))}}function j_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function U_(t,e){Vs=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}var al={readContext:Ot,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},uI={readContext:Ot,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,O_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aI.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:fm,useDebugValue:Id,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=fm(!1),e=t[0];return t=oI.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=qt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Fe===null)throw Error(M(349));Vr&30||A_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pm(R_.bind(null,r,s,t),[t]),r.flags|=2048,so(9,k_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qt(),e=Fe.identifierPrefix;if(me){var n=yn,r=gn;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cI={readContext:Ot,useCallback:V_,useContext:Ot,useEffect:Td,useImperativeHandle:b_,useInsertionEffect:N_,useLayoutEffect:D_,useMemo:L_,useReducer:oc,useRef:x_,useState:function(){return oc(io)},useDebugValue:Id,useDeferredValue:function(t){var e=bt();return M_(e,xe.memoizedState,t)},useTransition:function(){var t=oc(io)[0],e=bt().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:S_,useId:F_,unstable_isNewReconciler:!1},hI={readContext:Ot,useCallback:V_,useContext:Ot,useEffect:Td,useImperativeHandle:b_,useInsertionEffect:N_,useLayoutEffect:D_,useMemo:L_,useReducer:ac,useRef:x_,useState:function(){return ac(io)},useDebugValue:Id,useDeferredValue:function(t){var e=bt();return xe===null?e.memoizedState=t:M_(e,xe.memoizedState,t)},useTransition:function(){var t=ac(io)[0],e=bt().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:S_,useId:F_,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=er(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),Ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=er(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),Ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=er(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(Bt(e,t,r,n),Ra(e,t,r))}};function mm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function B_(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=gt(e)?Or:nt.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},md(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=gt(e)?Or:nt.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ul.enqueueReplaceState(i,i.state,null),il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oi(t,e){try{var n="",r=e;do n+=jw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dI=typeof WeakMap=="function"?WeakMap:Map;function $_(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ul||(ul=!0,ph=r),ih(t,e)},n}function W_(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ih(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ih(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kI.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var fI=Nn.ReactCurrentOwner,pt=!1;function ot(t,e,n,r){e.child=t===null?v_(e,null,n,r):Ni(e,t.child,n,r)}function Em(t,e,n,r,i){n=n.render;var s=e.ref;return wi(e,i),r=Ed(t,e,n,r,s,i),n=wd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(me&&n&&ld(e),e.flags|=1,ot(t,e,r,i),e.child)}function wm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H_(t,e,s,r,i)):(t=Oa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function H_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return sh(t,e,n,r,i)}function q_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(mi,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(mi,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(mi,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(mi,vt),vt|=r;return ot(t,e,i,n),e.child}function K_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sh(t,e,n,r,i){var s=gt(n)?Or:nt.current;return s=Pi(e,s),wi(e,i),n=Ed(t,e,n,r,s,i),r=wd(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(me&&r&&ld(e),e.flags|=1,ot(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(gt(n)){var s=!0;Za(e)}else s=!1;if(wi(e,i),e.stateNode===null)xa(t,e),B_(e,n,r),rh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ot(h):(h=gt(n)?Or:nt.current,h=Pi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&gm(e,o,r,h),Fn=!1;var g=e.memoizedState;o.state=g,il(e,r,o,i),u=e.memoizedState,l!==r||g!==u||mt.current||Fn?(typeof f=="function"&&(nh(e,n,f,r),u=e.memoizedState),(l=Fn||mm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,w_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Mt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=gt(n)?Or:nt.current,u=Pi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&gm(e,o,r,u),Fn=!1,g=e.memoizedState,o.state=g,il(e,r,o,i);var C=e.memoizedState;l!==p||g!==C||mt.current||Fn?(typeof A=="function"&&(nh(e,n,A,r),C=e.memoizedState),(h=Fn||mm(e,n,h,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return oh(t,e,n,r,s,i)}function oh(t,e,n,r,i,s){K_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&am(e,n,!1),kn(t,e,s);r=e.stateNode,fI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&am(e,n,!0),e.child}function G_(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),gd(t,e.containerInfo)}function Im(t,e,n,r,i){return xi(),cd(i),e.flags|=256,ot(t,e,n,r),e.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q_(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$l(o,r,0,null),t=xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lh(n),e.memoizedState=ah,t):Sd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return pI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tr(l,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ah,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sd(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,r){return r!==null&&cd(r),Ni(e,t.child,null,n),t=Sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lc(Error(M(422))),ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$l({mode:"visible",children:r.children},i,0,null),s=xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=lh(o),e.memoizedState=ah,s);if(!(e.mode&1))return ha(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=lc(s,r,void 0),ha(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Bt(r,t,i,-1))}return xd(),r=lc(Error(M(421))),ha(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=Xn(i.nextSibling),Tt=e,me=!0,jt=null,t!==null&&(Pt[xt++]=gn,Pt[xt++]=yn,Pt[xt++]=br,gn=t.id,yn=t.overflow,br=e),e=Sd(e,r.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),th(t.return,e,n)}function uc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Y_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),uc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}uc(e,!0,n,null,s);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mI(t,e,n){switch(e.tag){case 3:G_(e),xi();break;case 5:T_(e);break;case 1:gt(e.type)&&Za(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Q_(t,e,n):(ce(_e,_e.current&1),t=kn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,q_(t,e,n)}return kn(t,e,n)}var X_,uh,J_,Z_;X_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uh=function(){};J_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(Yt.current);var s=null;switch(n){case"input":i=Nc(t,i),r=Nc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=bc(t,i),r=bc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Lc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ws.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Z_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ys(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gI(t,e,n){var r=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return gt(e.type)&&Ja(),Xe(e),null;case 3:return r=e.stateNode,Di(),fe(mt),fe(nt),_d(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(yh(jt),jt=null))),uh(t,e),Xe(e),null;case 5:yd(e);var i=Rr(no.current);if(n=e.type,t!==null&&e.stateNode!=null)J_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Xe(e),null}if(t=Rr(Yt.current),ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[eo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)de(Is[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Op(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Vp(r,s),de("invalid",r)}Lc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&la(r.textContent,l,t),i=["children",""+l]):Ws.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ea(r),bp(r,s,!0);break;case"textarea":ea(r),Lp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ry(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[eo]=r,X_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)de(Is[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Op(t,r),i=Nc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":Vp(t,r),i=bc(t,r),de("invalid",t);break;default:i=r}Lc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?xy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Cy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hs(t,u):typeof u=="number"&&Hs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ws.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Gh(t,s,u,o))}switch(n){case"input":ea(t),bp(t,r,!1);break;case"textarea":ea(t),Lp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)Z_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Rr(no.current),Rr(Yt.current),ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:la(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return Xe(e),null;case 13:if(fe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&Et!==null&&e.mode&1&&!(e.flags&128))y_(),xi(),e.flags|=98560,s=!1;else if(s=ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Kt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else jt!==null&&(yh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):xd())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Di(),uh(t,e),t===null&&Js(e.stateNode.containerInfo),Xe(e),null;case 10:return fd(e.type._context),Xe(e),null;case 17:return gt(e.type)&&Ja(),Xe(e),null;case 19:if(fe(_e),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ys(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>bi&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Xe(e),null}else 2*ke()-s.renderingStartTime>bi&&n!==1073741824&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function yI(t,e){switch(ud(e),e.tag){case 1:return gt(e.type)&&Ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),fe(mt),fe(nt),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yd(e),null;case 13:if(fe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(_e),null;case 4:return Di(),null;case 10:return fd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var da=!1,et=!1,_I=typeof WeakSet=="function"?WeakSet:Set,B=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function ch(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Am=!1;function vI(t,e){if(Kc=Ga,t=i_(),ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gc={focusedElem:t,selectionRange:n},Ga=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var D=C.memoizedProps,b=C.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Mt(e.type,D),b);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(N){Ie(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return C=Am,Am=!1,C}function Ls(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ch(e,n,s)}i=i.next}while(i!==r)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ev(t){var e=t.alternate;e!==null&&(t.alternate=null,ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[eo],delete e[Xc],delete e[tI],delete e[nI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tv(t){return t.tag===5||t.tag===3||t.tag===4}function km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var Ue=null,Ft=!1;function Vn(t,e,n){for(n=n.child;n!==null;)nv(t,e,n),n=n.sibling}function nv(t,e,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:et||pi(n,e);case 6:var r=Ue,i=Ft;Ue=null,Vn(t,e,n),Ue=r,Ft=i,Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?nc(t.parentNode,n):t.nodeType===1&&nc(t,n),Qs(t)):nc(Ue,n.stateNode));break;case 4:r=Ue,i=Ft,Ue=n.stateNode.containerInfo,Ft=!0,Vn(t,e,n),Ue=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ch(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!et&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Vn(t,e,n),et=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _I),e.forEach(function(r){var i=CI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Ft=!1;break e;case 3:Ue=l.stateNode.containerInfo,Ft=!0;break e;case 4:Ue=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Ue===null)throw Error(M(160));nv(s,o,i),Ue=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ie(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rv(e,t),e=e.sibling}function rv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Ht(t),r&4){try{Ls(3,t,t.return),zl(3,t)}catch(D){Ie(t,t.return,D)}try{Ls(5,t,t.return)}catch(D){Ie(t,t.return,D)}}break;case 1:Lt(e,t),Ht(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(Lt(e,t),Ht(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{Hs(i,"")}catch(D){Ie(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ay(i,s),Mc(l,o);var h=Mc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?xy(i,p):f==="dangerouslySetInnerHTML"?Cy(i,p):f==="children"?Hs(i,p):Gh(i,f,p,h)}switch(l){case"input":Dc(i,s);break;case"textarea":ky(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?yi(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?yi(i,!!s.multiple,s.defaultValue,!0):yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[eo]=s}catch(D){Ie(t,t.return,D)}}break;case 6:if(Lt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ie(t,t.return,D)}}break;case 3:if(Lt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(D){Ie(t,t.return,D)}break;case 4:Lt(e,t),Ht(t);break;case 13:Lt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rd=ke())),r&4&&Rm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(h=et)||f,Lt(e,t),et=h):Lt(e,t),Ht(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(p=B=f;B!==null;){switch(g=B,A=g.child,g.tag){case 0:case 11:case 14:case 15:Ls(4,g,g.return);break;case 1:pi(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(D){Ie(r,n,D)}}break;case 5:pi(g,g.return);break;case 22:if(g.memoizedState!==null){Pm(p);continue}}A!==null?(A.return=g,B=A):Pm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Py("display",o))}catch(D){Ie(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Ie(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),Ht(t),r&4&&Rm(t);break;case 21:break;default:Lt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tv(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hs(i,""),r.flags&=-33);var s=km(t);fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=km(t);dh(t,l,o);break;default:throw Error(M(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EI(t,e,n){B=t,iv(t)}function iv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||da;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=da;var h=et;if(da=o,(et=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?xm(i):u!==null?(u.return=o,B=u):xm(i);for(;s!==null;)B=s,iv(s),s=s.sibling;B=i,da=l,et=h}Cm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Cm(t)}}function Cm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Qs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}et||e.flags&512&&hh(e)}catch(g){Ie(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Pm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function xm(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{hh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{hh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var wI=Math.ceil,ll=Nn.ReactCurrentDispatcher,Ad=Nn.ReactCurrentOwner,Dt=Nn.ReactCurrentBatchConfig,re=0,Fe=null,Ce=null,$e=0,vt=0,mi=pr(0),Oe=0,oo=null,Lr=0,Bl=0,kd=0,Ms=null,dt=null,Rd=0,bi=1/0,pn=null,ul=!1,ph=null,Zn=null,fa=!1,qn=null,cl=0,Fs=0,mh=null,Na=-1,Da=0;function at(){return re&6?ke():Na!==-1?Na:Na=ke()}function er(t){return t.mode&1?re&2&&$e!==0?$e&-$e:iI.transition!==null?(Da===0&&(Da=By()),Da):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Qy(t.type)),t):1}function Bt(t,e,n,r){if(50<Fs)throw Fs=0,mh=null,Error(M(185));_o(t,n,r),(!(re&2)||t!==Fe)&&(t===Fe&&(!(re&2)&&(Bl|=n),Oe===4&&Un(t,$e)),yt(t,r),n===1&&re===0&&!(e.mode&1)&&(bi=ke()+500,Fl&&mr()))}function yt(t,e){var n=t.callbackNode;iT(t,e);var r=Ka(t,t===Fe?$e:0);if(r===0)n!==null&&jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jp(n),e===1)t.tag===0?rI(Nm.bind(null,t)):p_(Nm.bind(null,t)),ZT(function(){!(re&6)&&mr()}),n=null;else{switch($y(r)){case 1:n=Zh;break;case 4:n=Uy;break;case 16:n=qa;break;case 536870912:n=zy;break;default:n=qa}n=dv(n,sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sv(t,e){if(Na=-1,Da=0,re&6)throw Error(M(327));var n=t.callbackNode;if(Ti()&&t.callbackNode!==n)return null;var r=Ka(t,t===Fe?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hl(t,r);else{e=r;var i=re;re|=2;var s=av();(Fe!==t||$e!==e)&&(pn=null,bi=ke()+500,Pr(t,e));do try{SI();break}catch(l){ov(t,l)}while(!0);dd(),ll.current=s,re=i,Ce!==null?e=0:(Fe=null,$e=0,e=Oe)}if(e!==0){if(e===2&&(i=Bc(t),i!==0&&(r=i,e=gh(t,i))),e===1)throw n=oo,Pr(t,0),Un(t,r),yt(t,ke()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!TI(i)&&(e=hl(t,r),e===2&&(s=Bc(t),s!==0&&(r=s,e=gh(t,s))),e===1))throw n=oo,Pr(t,0),Un(t,r),yt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Ir(t,dt,pn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Rd+500-ke(),10<e)){if(Ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yc(Ir.bind(null,t,dt,pn),e);break}Ir(t,dt,pn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wI(r/1960))-r,10<r){t.timeoutHandle=Yc(Ir.bind(null,t,dt,pn),r);break}Ir(t,dt,pn);break;case 5:Ir(t,dt,pn);break;default:throw Error(M(329))}}}return yt(t,ke()),t.callbackNode===n?sv.bind(null,t):null}function gh(t,e){var n=Ms;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=hl(t,e),t!==2&&(e=dt,dt=n,e!==null&&yh(e)),t}function yh(t){dt===null?dt=t:dt.push.apply(dt,t)}function TI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~kd,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function Nm(t){if(re&6)throw Error(M(327));Ti();var e=Ka(t,0);if(!(e&1))return yt(t,ke()),null;var n=hl(t,e);if(t.tag!==0&&n===2){var r=Bc(t);r!==0&&(e=r,n=gh(t,r))}if(n===1)throw n=oo,Pr(t,0),Un(t,e),yt(t,ke()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,dt,pn),yt(t,ke()),null}function Cd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(bi=ke()+500,Fl&&mr())}}function Mr(t){qn!==null&&qn.tag===0&&!(re&6)&&Ti();var e=re;re|=1;var n=Dt.transition,r=oe;try{if(Dt.transition=null,oe=1,t)return t()}finally{oe=r,Dt.transition=n,re=e,!(re&6)&&mr()}}function Pd(){vt=mi.current,fe(mi)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JT(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ja();break;case 3:Di(),fe(mt),fe(nt),_d();break;case 5:yd(r);break;case 4:Di();break;case 13:fe(_e);break;case 19:fe(_e);break;case 10:fd(r.type._context);break;case 22:case 23:Pd()}n=n.return}if(Fe=t,Ce=t=tr(t.current,null),$e=vt=e,Oe=0,oo=null,kd=Bl=Lr=0,dt=Ms=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}kr=null}return t}function ov(t,e){do{var n=Ce;try{if(dd(),Ca.current=al,ol){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Vr=0,Le=xe=ve=null,Vs=!1,ro=0,Ad.current=null,n===null||n.return===null){Oe=1,oo=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=_m(o);if(A!==null){A.flags&=-257,vm(A,o,l,s,e),A.mode&1&&ym(s,h,e),e=A,u=h;var C=e.updateQueue;if(C===null){var D=new Set;D.add(u),e.updateQueue=D}else C.add(u);break e}else{if(!(e&1)){ym(s,h,e),xd();break e}u=Error(M(426))}}else if(me&&l.mode&1){var b=_m(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),vm(b,o,l,s,e),cd(Oi(u,l));break e}}s=u=Oi(u,l),Oe!==4&&(Oe=2),Ms===null?Ms=[s]:Ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=$_(s,u,e);hm(s,I);break e;case 1:l=u;var w=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Zn===null||!Zn.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=W_(s,l,e);hm(s,N);break e}}s=s.return}while(s!==null)}uv(n)}catch(F){e=F,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function av(){var t=ll.current;return ll.current=al,t===null?al:t}function xd(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(Lr&268435455)&&!(Bl&268435455)||Un(Fe,$e)}function hl(t,e){var n=re;re|=2;var r=av();(Fe!==t||$e!==e)&&(pn=null,Pr(t,e));do try{II();break}catch(i){ov(t,i)}while(!0);if(dd(),re=n,ll.current=r,Ce!==null)throw Error(M(261));return Fe=null,$e=0,Oe}function II(){for(;Ce!==null;)lv(Ce)}function SI(){for(;Ce!==null&&!Qw();)lv(Ce)}function lv(t){var e=hv(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?uv(t):Ce=e,Ad.current=null}function uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yI(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ce=null;return}}else if(n=gI(n,e,vt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Oe===0&&(Oe=5)}function Ir(t,e,n){var r=oe,i=Dt.transition;try{Dt.transition=null,oe=1,AI(t,e,n,r)}finally{Dt.transition=i,oe=r}return null}function AI(t,e,n,r){do Ti();while(qn!==null);if(re&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sT(t,s),t===Fe&&(Ce=Fe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fa||(fa=!0,dv(qa,function(){return Ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=oe;oe=1;var l=re;re|=4,Ad.current=null,vI(t,n),rv(n,t),HT(Gc),Ga=!!Kc,Gc=Kc=null,t.current=n,EI(n),Yw(),re=l,oe=o,Dt.transition=s}else t.current=n;if(fa&&(fa=!1,qn=t,cl=i),s=t.pendingLanes,s===0&&(Zn=null),Zw(n.stateNode),yt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,t=ph,ph=null,t;return cl&1&&t.tag!==0&&Ti(),s=t.pendingLanes,s&1?t===mh?Fs++:(Fs=0,mh=t):Fs=0,mr(),null}function Ti(){if(qn!==null){var t=$y(cl),e=Dt.transition,n=oe;try{if(Dt.transition=null,oe=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,cl=0,re&6)throw Error(M(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Ls(8,f,s)}var p=f.child;if(p!==null)p.return=f,B=p;else for(;B!==null;){f=B;var g=f.sibling,A=f.return;if(ev(f),f===h){B=null;break}if(g!==null){g.return=A,B=g;break}B=A}}}var C=s.alternate;if(C!==null){var D=C.child;if(D!==null){C.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ls(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var w=t.current;for(B=w;B!==null;){o=B;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,B=k;else e:for(o=w;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(F){Ie(l,l.return,F)}if(l===o){B=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,B=N;break e}B=l.return}}if(re=i,mr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Ol,t)}catch{}r=!0}return r}finally{oe=n,Dt.transition=e}}return!1}function Dm(t,e,n){e=Oi(n,e),e=$_(t,e,1),t=Jn(t,e,1),e=at(),t!==null&&(_o(t,1,e),yt(t,e))}function Ie(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=Oi(n,t),t=W_(e,t,1),e=Jn(e,t,1),t=at(),e!==null&&(_o(e,1,t),yt(e,t));break}}e=e.return}}function kI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&($e&n)===n&&(Oe===4||Oe===3&&($e&130023424)===$e&&500>ke()-Rd?Pr(t,0):kd|=n),yt(t,e)}function cv(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var n=at();t=An(t,e),t!==null&&(_o(t,e,n),yt(t,n))}function RI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cv(t,n)}function CI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),cv(t,n)}var hv;hv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,mI(t,e,n);pt=!!(t.flags&131072)}else pt=!1,me&&e.flags&1048576&&m_(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xa(t,e),t=e.pendingProps;var i=Pi(e,nt.current);wi(e,n),i=Ed(null,e,r,t,i,n);var s=wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,md(e),i.updater=Ul,e.stateNode=i,i._reactInternals=e,rh(e,r,t,n),e=oh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&ld(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xI(r),t=Mt(r,t),i){case 0:e=sh(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=Em(null,e,r,t,n);break e;case 14:e=wm(null,e,r,Mt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),sh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Tm(t,e,r,i,n);case 3:e:{if(G_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,w_(t,e),il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oi(Error(M(423)),e),e=Im(t,e,r,n,i);break e}else if(r!==i){i=Oi(Error(M(424)),e),e=Im(t,e,r,n,i);break e}else for(Et=Xn(e.stateNode.containerInfo.firstChild),Tt=e,me=!0,jt=null,n=v_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=kn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return T_(e),t===null&&eh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qc(r,i)?o=null:s!==null&&Qc(r,s)&&(e.flags|=32),K_(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&eh(e),null;case 13:return Q_(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Em(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(nl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!mt.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),th(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),th(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wi(e,n),i=Ot(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),wm(t,e,r,i,n);case 15:return H_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),xa(t,e),e.tag=1,gt(r)?(t=!0,Za(e)):t=!1,wi(e,n),B_(e,r,i),rh(e,r,i,n),oh(null,e,r,!0,t,n);case 19:return Y_(t,e,n);case 22:return q_(t,e,n)}throw Error(M(156,e.tag))};function dv(t,e){return jy(t,e)}function PI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new PI(t,e,n,r)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xI(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yh)return 11;if(t===Xh)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return xr(n.children,i,s,e);case Qh:o=8,i|=8;break;case Rc:return t=Nt(12,n,e,i|2),t.elementType=Rc,t.lanes=s,t;case Cc:return t=Nt(13,n,e,i),t.elementType=Cc,t.lanes=s,t;case Pc:return t=Nt(19,n,e,i),t.elementType=Pc,t.lanes=s,t;case Ty:return $l(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ey:o=10;break e;case wy:o=9;break e;case Yh:o=11;break e;case Xh:o=14;break e;case Mn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function $l(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Ty,t.lanes=n,t.stateNode={isHidden:!1},t}function cc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function hc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,r,i,s,o,l,u){return t=new NI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(s),t}function DI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fv(t){if(!t)return lr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(gt(n))return f_(t,n,e)}return e}function pv(t,e,n,r,i,s,o,l,u){return t=Dd(n,r,!0,t,i,s,o,l,u),t.context=fv(null),n=t.current,r=at(),i=er(n),s=Tn(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,_o(t,i,r),yt(t,r),t}function Wl(t,e,n,r){var i=e.current,s=at(),o=er(i);return n=fv(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(Bt(t,i,o,s),Ra(t,i,o)),o}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){Om(t,e),(t=t.alternate)&&Om(t,e)}function OI(){return null}var mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}Hl.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Wl(t,e,null,null)};Hl.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Wl(null,t,null,null)}),e[Sn]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=qy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Gy(t)}};function Vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function bI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=dl(o);s.call(h)}}var o=pv(e,r,t,0,null,!1,!1,"",bm);return t._reactRootContainer=o,t[Sn]=o.current,Js(t.nodeType===8?t.parentNode:t),Mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=dl(u);l.call(h)}}var u=Dd(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=u,t[Sn]=u.current,Js(t.nodeType===8?t.parentNode:t),Mr(function(){Wl(e,u,n,r)}),u}function Kl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=dl(o);l.call(u)}}Wl(e,o,t,i)}else o=bI(n,e,t,i,r);return dl(o)}Wy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(ed(e,n|1),yt(e,ke()),!(re&6)&&(bi=ke()+500,mr()))}break;case 13:Mr(function(){var r=An(t,1);if(r!==null){var i=at();Bt(r,t,1,i)}}),Od(t,1)}};td=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=at();Bt(e,t,134217728,n)}Od(t,134217728)}};Hy=function(t){if(t.tag===13){var e=er(t),n=An(t,e);if(n!==null){var r=at();Bt(n,t,e,r)}Od(t,e)}};qy=function(){return oe};Ky=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};jc=function(t,e,n){switch(e){case"input":if(Dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ml(r);if(!i)throw Error(M(90));Sy(r),Dc(r,i)}}}break;case"textarea":ky(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};Oy=Cd;by=Mr;var VI={usingClientEntryPoint:!1,Events:[Eo,ui,Ml,Ny,Dy,Cd]},_s={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LI={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=My(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||OI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Ol=pa.inject(LI),Qt=pa}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VI;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(e))throw Error(M(200));return DI(t,e,null,n)};kt.createRoot=function(t,e){if(!Vd(t))throw Error(M(299));var n=!1,r="",i=mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,Js(t.nodeType===8?t.parentNode:t),new bd(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=My(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Mr(t)};kt.hydrate=function(t,e,n){if(!ql(e))throw Error(M(200));return Kl(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Vd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pv(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,Js(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hl(e)};kt.render=function(t,e,n){if(!ql(e))throw Error(M(200));return Kl(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!ql(t))throw Error(M(40));return t._reactRootContainer?(Mr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};kt.unstable_batchedUpdates=Cd;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ql(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Kl(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)}catch(t){console.error(t)}}gv(),gy.exports=kt;var MI=gy.exports,Vm=MI;Ac.createRoot=Vm.createRoot,Ac.hydrateRoot=Vm.hydrateRoot;var Lm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new jI;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UI=function(t){const e=yv(t);return _v.encodeByteArray(e,!0)},fl=function(t){return UI(t).replace(/\./g,"")},vv=function(t){try{return _v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=()=>zI().__FIREBASE_DEFAULTS__,$I=()=>{if(typeof process>"u"||typeof Lm>"u")return;const t=Lm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vv(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return BI()||$I()||WI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ev=t=>{var e,n;return(n=(e=Gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wv=t=>{const e=Ev(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tv=()=>{var t;return(t=Gl())===null||t===void 0?void 0:t.config},Iv=t=>{var e;return(e=Gl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function KI(){var t;const e=(t=Gl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XI(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JI(){return!KI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZI(){try{return typeof indexedDB=="object"}catch{return!1}}function e1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=t1,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?n1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new on(i,l,r)}}function n1(t,e){return t.replace(r1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const r1=/\{\$([^}]+)}/g;function i1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mm(s)&&Mm(o)){if(!pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ss(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function As(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function s1(t,e){const n=new o1(t,e);return n.subscribe.bind(n)}class o1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");a1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dc),i.error===void 0&&(i.error=dc),i.complete===void 0&&(i.complete=dc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function a1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c1(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u1(t){return t===Sr?void 0:t}function c1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const d1={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},f1=te.INFO,p1={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},m1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=p1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=f1,this._logHandler=m1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const g1=(t,e)=>e.some(n=>t instanceof n);let Fm,jm;function y1(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _1(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Av=new WeakMap,_h=new WeakMap,kv=new WeakMap,fc=new WeakMap,Md=new WeakMap;function v1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Av.set(n,t)}).catch(()=>{}),Md.set(e,t),e}function E1(t){if(_h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_h.set(t,e)}let vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function w1(t){vh=t(vh)}function T1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pc(this),e,...n);return kv.set(r,e.sort?e.sort():[e]),nr(r)}:_1().includes(t)?function(...e){return t.apply(pc(this),e),nr(Av.get(this))}:function(...e){return nr(t.apply(pc(this),e))}}function I1(t){return typeof t=="function"?T1(t):(t instanceof IDBTransaction&&E1(t),g1(t,y1())?new Proxy(t,vh):t)}function nr(t){if(t instanceof IDBRequest)return v1(t);if(fc.has(t))return fc.get(t);const e=I1(t);return e!==t&&(fc.set(t,e),Md.set(e,t)),e}const pc=t=>Md.get(t);function S1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const A1=["get","getKey","getAll","getAllKeys","count"],k1=["put","add","delete","clear"],mc=new Map;function Um(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mc.get(e))return mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||A1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return mc.set(e,s),s}w1(t=>({...t,get:(e,n,r)=>Um(e,n)||t.get(e,n,r),has:(e,n)=>!!Um(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(C1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function C1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eh="@firebase/app",zm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Ld("@firebase/app"),P1="@firebase/app-compat",x1="@firebase/analytics-compat",N1="@firebase/analytics",D1="@firebase/app-check-compat",O1="@firebase/app-check",b1="@firebase/auth",V1="@firebase/auth-compat",L1="@firebase/database",M1="@firebase/data-connect",F1="@firebase/database-compat",j1="@firebase/functions",U1="@firebase/functions-compat",z1="@firebase/installations",B1="@firebase/installations-compat",$1="@firebase/messaging",W1="@firebase/messaging-compat",H1="@firebase/performance",q1="@firebase/performance-compat",K1="@firebase/remote-config",G1="@firebase/remote-config-compat",Q1="@firebase/storage",Y1="@firebase/storage-compat",X1="@firebase/firestore",J1="@firebase/vertexai-preview",Z1="@firebase/firestore-compat",eS="firebase",tS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="[DEFAULT]",nS={[Eh]:"fire-core",[P1]:"fire-core-compat",[N1]:"fire-analytics",[x1]:"fire-analytics-compat",[O1]:"fire-app-check",[D1]:"fire-app-check-compat",[b1]:"fire-auth",[V1]:"fire-auth-compat",[L1]:"fire-rtdb",[M1]:"fire-data-connect",[F1]:"fire-rtdb-compat",[j1]:"fire-fn",[U1]:"fire-fn-compat",[z1]:"fire-iid",[B1]:"fire-iid-compat",[$1]:"fire-fcm",[W1]:"fire-fcm-compat",[H1]:"fire-perf",[q1]:"fire-perf-compat",[K1]:"fire-rc",[G1]:"fire-rc-compat",[Q1]:"fire-gcs",[Y1]:"fire-gcs-compat",[X1]:"fire-fst",[Z1]:"fire-fst-compat",[J1]:"fire-vertex","fire-js":"fire-js",[eS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,rS=new Map,Th=new Map;function Bm(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Th.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Th.set(e,t);for(const n of ml.values())Bm(n,t);for(const n of rS.values())Bm(n,t);return!0}function Ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new To("app","Firebase",iS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=tS;function Rv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=Tv()),!n)throw rr.create("no-options");const s=ml.get(i);if(s){if(pl(n,s.options)&&pl(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new h1(i);for(const u of Th.values())o.addComponent(u);const l=new sS(n,r,o);return ml.set(i,l),l}function Fd(t=wh){const e=ml.get(t);if(!e&&t===wh&&Tv())return Rv();if(!e)throw rr.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let i=(r=nS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(l.join(" "));return}Fr(new ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firebase-heartbeat-database",aS=1,ao="firebase-heartbeat-store";let gc=null;function Cv(){return gc||(gc=S1(oS,aS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),gc}async function lS(t){try{const n=(await Cv()).transaction(ao),r=await n.objectStore(ao).get(Pv(t));return await n.done,r}catch(e){if(e instanceof on)Rn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function $m(t,e){try{const r=(await Cv()).transaction(ao,"readwrite");await r.objectStore(ao).put(e,Pv(t)),await r.done}catch(n){if(n instanceof on)Rn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function Pv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=1024,cS=30*24*60*60*1e3;class hS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=cS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=dS(this._heartbeatsCache.heartbeats),s=fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rn.warn(n),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function dS(t,e=uS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZI()?e1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hm(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){Fr(new ur("platform-logger",e=>new R1(e),"PRIVATE")),Fr(new ur("heartbeat",e=>new hS(e),"PRIVATE")),Xt(Eh,zm,t),Xt(Eh,zm,"esm2017"),Xt("fire-js","")}pS("");var mS="firebase",gS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(mS,gS,"app");var qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,xv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function _(){}_.prototype=y.prototype,v.D=y.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(T,R,P){for(var S=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)S[pe-2]=arguments[pe];return y.prototype[R].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)T[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=v.g[0],_=v.g[1],R=v.g[2];var P=v.g[3],S=y+(P^_&(R^P))+T[0]+3614090360&4294967295;y=_+(S<<7&4294967295|S>>>25),S=P+(R^y&(_^R))+T[1]+3905402710&4294967295,P=y+(S<<12&4294967295|S>>>20),S=R+(_^P&(y^_))+T[2]+606105819&4294967295,R=P+(S<<17&4294967295|S>>>15),S=_+(y^R&(P^y))+T[3]+3250441966&4294967295,_=R+(S<<22&4294967295|S>>>10),S=y+(P^_&(R^P))+T[4]+4118548399&4294967295,y=_+(S<<7&4294967295|S>>>25),S=P+(R^y&(_^R))+T[5]+1200080426&4294967295,P=y+(S<<12&4294967295|S>>>20),S=R+(_^P&(y^_))+T[6]+2821735955&4294967295,R=P+(S<<17&4294967295|S>>>15),S=_+(y^R&(P^y))+T[7]+4249261313&4294967295,_=R+(S<<22&4294967295|S>>>10),S=y+(P^_&(R^P))+T[8]+1770035416&4294967295,y=_+(S<<7&4294967295|S>>>25),S=P+(R^y&(_^R))+T[9]+2336552879&4294967295,P=y+(S<<12&4294967295|S>>>20),S=R+(_^P&(y^_))+T[10]+4294925233&4294967295,R=P+(S<<17&4294967295|S>>>15),S=_+(y^R&(P^y))+T[11]+2304563134&4294967295,_=R+(S<<22&4294967295|S>>>10),S=y+(P^_&(R^P))+T[12]+1804603682&4294967295,y=_+(S<<7&4294967295|S>>>25),S=P+(R^y&(_^R))+T[13]+4254626195&4294967295,P=y+(S<<12&4294967295|S>>>20),S=R+(_^P&(y^_))+T[14]+2792965006&4294967295,R=P+(S<<17&4294967295|S>>>15),S=_+(y^R&(P^y))+T[15]+1236535329&4294967295,_=R+(S<<22&4294967295|S>>>10),S=y+(R^P&(_^R))+T[1]+4129170786&4294967295,y=_+(S<<5&4294967295|S>>>27),S=P+(_^R&(y^_))+T[6]+3225465664&4294967295,P=y+(S<<9&4294967295|S>>>23),S=R+(y^_&(P^y))+T[11]+643717713&4294967295,R=P+(S<<14&4294967295|S>>>18),S=_+(P^y&(R^P))+T[0]+3921069994&4294967295,_=R+(S<<20&4294967295|S>>>12),S=y+(R^P&(_^R))+T[5]+3593408605&4294967295,y=_+(S<<5&4294967295|S>>>27),S=P+(_^R&(y^_))+T[10]+38016083&4294967295,P=y+(S<<9&4294967295|S>>>23),S=R+(y^_&(P^y))+T[15]+3634488961&4294967295,R=P+(S<<14&4294967295|S>>>18),S=_+(P^y&(R^P))+T[4]+3889429448&4294967295,_=R+(S<<20&4294967295|S>>>12),S=y+(R^P&(_^R))+T[9]+568446438&4294967295,y=_+(S<<5&4294967295|S>>>27),S=P+(_^R&(y^_))+T[14]+3275163606&4294967295,P=y+(S<<9&4294967295|S>>>23),S=R+(y^_&(P^y))+T[3]+4107603335&4294967295,R=P+(S<<14&4294967295|S>>>18),S=_+(P^y&(R^P))+T[8]+1163531501&4294967295,_=R+(S<<20&4294967295|S>>>12),S=y+(R^P&(_^R))+T[13]+2850285829&4294967295,y=_+(S<<5&4294967295|S>>>27),S=P+(_^R&(y^_))+T[2]+4243563512&4294967295,P=y+(S<<9&4294967295|S>>>23),S=R+(y^_&(P^y))+T[7]+1735328473&4294967295,R=P+(S<<14&4294967295|S>>>18),S=_+(P^y&(R^P))+T[12]+2368359562&4294967295,_=R+(S<<20&4294967295|S>>>12),S=y+(_^R^P)+T[5]+4294588738&4294967295,y=_+(S<<4&4294967295|S>>>28),S=P+(y^_^R)+T[8]+2272392833&4294967295,P=y+(S<<11&4294967295|S>>>21),S=R+(P^y^_)+T[11]+1839030562&4294967295,R=P+(S<<16&4294967295|S>>>16),S=_+(R^P^y)+T[14]+4259657740&4294967295,_=R+(S<<23&4294967295|S>>>9),S=y+(_^R^P)+T[1]+2763975236&4294967295,y=_+(S<<4&4294967295|S>>>28),S=P+(y^_^R)+T[4]+1272893353&4294967295,P=y+(S<<11&4294967295|S>>>21),S=R+(P^y^_)+T[7]+4139469664&4294967295,R=P+(S<<16&4294967295|S>>>16),S=_+(R^P^y)+T[10]+3200236656&4294967295,_=R+(S<<23&4294967295|S>>>9),S=y+(_^R^P)+T[13]+681279174&4294967295,y=_+(S<<4&4294967295|S>>>28),S=P+(y^_^R)+T[0]+3936430074&4294967295,P=y+(S<<11&4294967295|S>>>21),S=R+(P^y^_)+T[3]+3572445317&4294967295,R=P+(S<<16&4294967295|S>>>16),S=_+(R^P^y)+T[6]+76029189&4294967295,_=R+(S<<23&4294967295|S>>>9),S=y+(_^R^P)+T[9]+3654602809&4294967295,y=_+(S<<4&4294967295|S>>>28),S=P+(y^_^R)+T[12]+3873151461&4294967295,P=y+(S<<11&4294967295|S>>>21),S=R+(P^y^_)+T[15]+530742520&4294967295,R=P+(S<<16&4294967295|S>>>16),S=_+(R^P^y)+T[2]+3299628645&4294967295,_=R+(S<<23&4294967295|S>>>9),S=y+(R^(_|~P))+T[0]+4096336452&4294967295,y=_+(S<<6&4294967295|S>>>26),S=P+(_^(y|~R))+T[7]+1126891415&4294967295,P=y+(S<<10&4294967295|S>>>22),S=R+(y^(P|~_))+T[14]+2878612391&4294967295,R=P+(S<<15&4294967295|S>>>17),S=_+(P^(R|~y))+T[5]+4237533241&4294967295,_=R+(S<<21&4294967295|S>>>11),S=y+(R^(_|~P))+T[12]+1700485571&4294967295,y=_+(S<<6&4294967295|S>>>26),S=P+(_^(y|~R))+T[3]+2399980690&4294967295,P=y+(S<<10&4294967295|S>>>22),S=R+(y^(P|~_))+T[10]+4293915773&4294967295,R=P+(S<<15&4294967295|S>>>17),S=_+(P^(R|~y))+T[1]+2240044497&4294967295,_=R+(S<<21&4294967295|S>>>11),S=y+(R^(_|~P))+T[8]+1873313359&4294967295,y=_+(S<<6&4294967295|S>>>26),S=P+(_^(y|~R))+T[15]+4264355552&4294967295,P=y+(S<<10&4294967295|S>>>22),S=R+(y^(P|~_))+T[6]+2734768916&4294967295,R=P+(S<<15&4294967295|S>>>17),S=_+(P^(R|~y))+T[13]+1309151649&4294967295,_=R+(S<<21&4294967295|S>>>11),S=y+(R^(_|~P))+T[4]+4149444226&4294967295,y=_+(S<<6&4294967295|S>>>26),S=P+(_^(y|~R))+T[11]+3174756917&4294967295,P=y+(S<<10&4294967295|S>>>22),S=R+(y^(P|~_))+T[2]+718787259&4294967295,R=P+(S<<15&4294967295|S>>>17),S=_+(P^(R|~y))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var _=y-this.blockSize,T=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=_;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<y;)if(T[R++]=v.charCodeAt(P++),R==this.blockSize){i(this,T),R=0;break}}else for(;P<y;)if(T[R++]=v[P++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var _=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=_&255,_/=256;for(this.u(v),v=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)v[_++]=this.g[y]>>>T&255;return v};function s(v,y){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=y(v)}function o(v,y){this.h=y;for(var _=[],T=!0,R=v.length-1;0<=R;R--){var P=v[R]|0;T&&P==y||(_[R]=P,T=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return b(h(-v));for(var y=[],_=1,T=0;v>=_;T++)y[T]=v/_|0,_*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return b(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),T=p,R=0;R<v.length;R+=8){var P=Math.min(8,v.length-R),S=parseInt(v.substring(R,R+P),y);8>P?(P=h(Math.pow(y,P)),T=T.j(P).add(h(S))):(T=T.j(_),T=T.add(h(S)))}return T}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-b(this).m();for(var v=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);v+=(0<=T?T:4294967296+T)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(D(this))return"-"+b(this).toString(v);for(var y=h(Math.pow(v,6)),_=this,T="";;){var R=N(_,y).g;_=I(_,R.j(y));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=R,C(_))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=I(this,v),D(v)?-1:C(v)?0:1};function b(v){for(var y=v.g.length,_=[],T=0;T<y;T++)_[T]=~v.g[T];return new o(_,~v.h).add(g)}t.abs=function(){return D(this)?b(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0,R=0;R<=y;R++){var P=T+(this.i(R)&65535)+(v.i(R)&65535),S=(P>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);T=S>>>16,P&=65535,S&=65535,_[R]=S<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(v,y){return v.add(b(y))}t.j=function(v){if(C(this)||C(v))return p;if(D(this))return D(v)?b(this).j(b(v)):b(b(this).j(v));if(D(v))return b(this.j(b(v)));if(0>this.l(A)&&0>v.l(A))return h(this.m()*v.m());for(var y=this.g.length+v.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<v.g.length;R++){var P=this.i(T)>>>16,S=this.i(T)&65535,pe=v.i(R)>>>16,ct=v.i(R)&65535;_[2*T+2*R]+=S*ct,w(_,2*T+2*R),_[2*T+2*R+1]+=P*ct,w(_,2*T+2*R+1),_[2*T+2*R+1]+=S*pe,w(_,2*T+2*R+1),_[2*T+2*R+2]+=P*pe,w(_,2*T+2*R+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new o(_,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function k(v,y){this.g=v,this.h=y}function N(v,y){if(C(y))throw Error("division by zero");if(C(v))return new k(p,p);if(D(v))return y=N(b(v),y),new k(b(y.g),b(y.h));if(D(y))return y=N(v,b(y)),new k(b(y.g),y.h);if(30<v.g.length){if(D(v)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,T=y;0>=T.l(v);)_=F(_),T=F(T);var R=j(_,1),P=j(T,1);for(T=j(T,2),_=j(_,2);!C(T);){var S=P.add(T);0>=S.l(v)&&(R=R.add(_),P=S),T=j(T,1),_=j(_,1)}return y=I(v,R.j(y)),new k(R,y)}for(R=p;0<=v.l(y);){for(_=Math.max(1,Math.floor(v.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(_),S=P.j(y);D(S)||0<S.l(v);)_-=T,P=h(_),S=P.j(y);C(P)&&(P=g),R=R.add(P),v=I(v,S)}return new k(R,v)}t.A=function(v){return N(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&v.i(T);return new o(_,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|v.i(T);return new o(_,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^v.i(T);return new o(_,this.h^v.h)};function F(v){for(var y=v.g.length+1,_=[],T=0;T<y;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(_,v.h)}function j(v,y){var _=y>>5;y%=32;for(var T=v.g.length-_,R=[],P=0;P<T;P++)R[P]=0<y?v.i(P+_)>>>y|v.i(P+_+1)<<32-y:v.i(P+_);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Nr=o}).apply(typeof qm<"u"?qm:typeof self<"u"?self:typeof window<"u"?window:{});var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nv,ks,Dv,ba,Ih,Ov,bv,Vv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ma=="object"&&ma];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var x=a[m];if(!(x in d))break e;d=d[x]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,x={next:function(){if(!m&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,m),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,x,O){for(var U=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)U[ue-2]=arguments[ue];return c.prototype[x].apply(m,U)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function b(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const x=a.length||0,O=m.length||0;a.length=x+O;for(let U=0;U<O;U++)a[x+U]=m[U]}else a.push(m)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var F=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function j(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)a[d]=m[d];for(let O=0;O<_.length;O++)d=_[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function S(){var a=q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class pe{constructor(){this.h=this.g=null}add(c,d){const m=ct.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ct=new I(()=>new ht,a=>a.reset());class ht{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ct,z=!1,q=new pe,J=()=>{const a=l.Promise.resolve(void 0);Ct=()=>{a.then(ye)}};var ye=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){P(d)}var c=ct;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function un(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{N(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}C(un,Se);var cn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),OE=0;function bE(a,c,d,m,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++OE,this.da=this.fa=!1}function bo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vo(a){this.src=a,this.g={},this.h=0}Vo.prototype.add=function(a,c,d,m,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var U=_u(a,c,m,x);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new bE(c,this.src,O,!!m,x),c.fa=d,a.push(c)),c};function yu(a,c){var d=c.type;if(d in a.g){var m=a.g[d],x=Array.prototype.indexOf.call(m,c,void 0),O;(O=0<=x)&&Array.prototype.splice.call(m,x,1),O&&(bo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function _u(a,c,d,m){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==m)return x}return-1}var vu="closure_lm_"+(1e6*Math.random()|0),Eu={};function Cf(a,c,d,m,x){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Cf(a,c[O],d,m,x);return null}return d=Nf(d),a&&a[hn]?a.K(c,d,h(m)?!!m.capture:!1,x):VE(a,c,d,!1,m,x)}function VE(a,c,d,m,x,O){if(!c)throw Error("Invalid event type");var U=h(x)?!!x.capture:!!x,ue=Tu(a);if(ue||(a[vu]=ue=new Vo(a)),d=ue.add(c,d,m,U,O),d.proxy)return d;if(m=LE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)ln||(x=U),x===void 0&&(x=!1),a.addEventListener(c.toString(),m,x);else if(a.attachEvent)a.attachEvent(xf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function LE(){function a(d){return c.call(a.src,a.listener,d)}const c=ME;return a}function Pf(a,c,d,m,x){if(Array.isArray(c))for(var O=0;O<c.length;O++)Pf(a,c[O],d,m,x);else m=h(m)?!!m.capture:!!m,d=Nf(d),a&&a[hn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=_u(O,d,m,x),-1<d&&(bo(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Tu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=_u(c,d,m,x)),(d=-1<a?c[a]:null)&&wu(d))}function wu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[hn])yu(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(xf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Tu(c))?(yu(d,a),d.h==0&&(d.src=null,c[vu]=null)):bo(a)}}}function xf(a){return a in Eu?Eu[a]:Eu[a]="on"+a}function ME(a,c){if(a.da)a=!0;else{c=new un(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&wu(a),a=d.call(m,c)}return a}function Tu(a){return a=a[vu],a instanceof Vo?a:null}var Iu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nf(a){return typeof a=="function"?a:(a[Iu]||(a[Iu]=function(c){return a.handleEvent(c)}),a[Iu])}function Ke(){le.call(this),this.i=new Vo(this),this.M=this,this.F=null}C(Ke,le),Ke.prototype[hn]=!0,Ke.prototype.removeEventListener=function(a,c,d,m){Pf(this,a,c,d,m)};function it(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var x=c;c=new Se(m,a),T(c,x)}if(x=!0,d)for(var O=d.length-1;0<=O;O--){var U=c.g=d[O];x=Lo(U,m,!0,c)&&x}if(U=c.g=a,x=Lo(U,m,!0,c)&&x,x=Lo(U,m,!1,c)&&x,d)for(O=0;O<d.length;O++)U=c.g=d[O],x=Lo(U,m,!1,c)&&x}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)bo(d[m]);delete a.g[c],a.h--}}this.F=null},Ke.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Ke.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Lo(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,O=0;O<c.length;++O){var U=c[O];if(U&&!U.da&&U.capture==d){var ue=U.listener,je=U.ha||U.src;U.fa&&yu(a.i,U),x=ue.call(je,m)!==!1&&x}}return x&&!m.defaultPrevented}function Df(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Of(a){a.g=Df(()=>{a.g=null,a.i&&(a.i=!1,Of(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class FE extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Of(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(a){le.call(this),this.h=a,this.g={}}C(Ji,le);var bf=[];function Vf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&wu(c)},a),a.g={}}Ji.prototype.N=function(){Ji.aa.N.call(this),Vf(this)},Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Su=l.JSON.stringify,jE=l.JSON.parse,UE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Au(){}Au.prototype.h=null;function Lf(a){return a.h||(a.h=a.i())}function Mf(){}var Zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ku(){Se.call(this,"d")}C(ku,Se);function Ru(){Se.call(this,"c")}C(Ru,Se);var _r={},Ff=null;function Mo(){return Ff=Ff||new Ke}_r.La="serverreachability";function jf(a){Se.call(this,_r.La,a)}C(jf,Se);function es(a){const c=Mo();it(c,new jf(c))}_r.STAT_EVENT="statevent";function Uf(a,c){Se.call(this,_r.STAT_EVENT,a),this.stat=c}C(Uf,Se);function st(a){const c=Mo();it(c,new Uf(c,a))}_r.Ma="timingevent";function zf(a,c){Se.call(this,_r.Ma,a),this.size=c}C(zf,Se);function ts(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function zE(a,c,d,m,x,O){a.info(function(){if(a.g)if(O)for(var U="",ue=O.split("&"),je=0;je<ue.length;je++){var ie=ue[je].split("=");if(1<ie.length){var Ge=ie[0];ie=ie[1];var Qe=Ge.split("_");U=2<=Qe.length&&Qe[1]=="type"?U+(Ge+"="+ie+"&"):U+(Ge+"=redacted&")}}else U=null;else U=O;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+U})}function BE(a,c,d,m,x,O,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+O+" "+U})}function Qr(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+WE(a,d)+(m?" "+m:"")})}function $E(a,c){a.info(function(){return"TIMEOUT: "+c})}ns.prototype.info=function(){};function WE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var x=m[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var U=1;U<x.length;U++)x[U]=""}}}}return Su(d)}catch{return c}}var Fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cu;function jo(){}C(jo,Au),jo.prototype.g=function(){return new XMLHttpRequest},jo.prototype.i=function(){return{}},Cu=new jo;function Dn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new Ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $f}function $f(){this.i=null,this.g="",this.h=!1}var Wf={},Pu={};function xu(a,c,d){a.L=1,a.v=$o(dn(c)),a.m=d,a.P=!0,Hf(a,null)}function Hf(a,c){a.F=Date.now(),Uo(a),a.A=dn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),sp(d.i,"t",m),a.C=0,d=a.j.J,a.h=new $f,a.g=Ip(a.j,d?c:null,!a.m),0<a.O&&(a.M=new FE(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(bf[0]=x.toString()),x=bf);for(var O=0;O<x.length;O++){var U=Cf(d,x[O],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),es(),zE(a.i,a.u,a.A,a.l,a.R,a.m)}Dn.prototype.ca=function(a){a=a.target;const c=this.M;c&&fn(a)==3?c.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=fn(this.g);var c=this.g.Ba();const Jr=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||dp(this.g)))){this.J||Qe!=4||c==7||(c==8||0>=Jr?es(3):es(2)),Nu(this);var d=this.g.Z();this.X=d;t:if(qf(this)){var m=dp(this.g);a="";var x=m.length,O=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),rs(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(O&&c==x-1)});m.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,BE(this.i,this.u,this.A,this.l,this.R,Qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,je=this.g;if((ue=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ue)){var ie=ue;break t}}ie=null}if(d=ie)Qr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Du(this,d);else{this.o=!1,this.s=3,st(12),vr(this),rs(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<U.length;)if(Vt=HE(this,U),Vt==Pu){Qe==4&&(this.s=4,st(14),d=!1),Qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Wf){this.s=4,st(15),Qr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Qr(this.i,this.l,Vt,null),Du(this,Vt);if(qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||U.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)Qr(this.i,this.l,U,"[Invalid Chunked Response]"),vr(this),rs(this);else if(0<U.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Fu(Ge),Ge.M=!0,st(11))}}else Qr(this.i,this.l,U,null),Du(this,U);Qe==4&&vr(this),this.o&&!this.J&&(Qe==4?vp(this.j,this):(this.o=!1,Uo(this)))}else lw(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),vr(this),rs(this)}}}catch{}finally{}};function qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function HE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Pu:(d=Number(c.substring(d,m)),isNaN(d)?Wf:(m+=1,m+d>c.length?Pu:(c=c.slice(m,m+d),a.C=m+d,c)))}Dn.prototype.cancel=function(){this.J=!0,vr(this)};function Uo(a){a.S=Date.now()+a.I,Kf(a,a.I)}function Kf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ts(g(a.ba,a),c)}function Nu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($E(this.i,this.A),this.L!=2&&(es(),st(17)),vr(this),this.s=2,rs(this)):Kf(this,this.S-a)};function rs(a){a.j.G==0||a.J||vp(a.j,a)}function vr(a){Nu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Vf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Du(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ou(d.h,a))){if(!a.K&&Ou(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Qo(d),Ko(d);else break e;Mu(d),st(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=ts(g(d.Za,d),6e3));if(1>=Yf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else wr(d,11)}else if((a.K||d.g==a)&&Qo(d),!w(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let ie=x[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Ge=ie[3];Ge!=null&&(d.la=Ge,d.j.info("VER="+d.la));const Qe=ie[4];Qe!=null&&(d.Aa=Qe,d.j.info("SVER="+d.Aa));const Jr=ie[5];Jr!=null&&typeof Jr=="number"&&0<Jr&&(m=1.5*Jr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Vt=a.g;if(Vt){const Xo=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var O=m.h;O.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(bu(O,O.h),O.h=null))}if(m.D){const ju=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;ju&&(m.ya=ju,he(m.I,m.D,ju))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var U=a;if(m.qa=Tp(m,m.J?m.ia:null,m.W),U.K){Xf(m.h,U);var ue=U,je=m.L;je&&(ue.I=je),ue.B&&(Nu(ue),Uo(ue)),m.g=U}else yp(m);0<d.i.length&&Go(d)}else ie[0]!="stop"&&ie[0]!="close"||wr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?wr(d,7):Lu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}es(4)}catch{}}var qE=class{constructor(a,c){this.g=a,this.map=c}};function Gf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yf(a){return a.h?1:a.g?a.g.size:0}function Ou(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function bu(a,c){a.g?a.g.add(c):a.h=c}function Xf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Gf.prototype.cancel=function(){if(this.i=Jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function KE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function GE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function Zf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=GE(a),m=KE(a),x=m.length,O=0;O<x;O++)c.call(void 0,m[O],d&&d[O],a)}var ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),x=null;if(0<=m){var O=a[d].substring(0,m);x=a[d].substring(m+1)}else O=a[d];c(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,zo(this,a.j),this.o=a.o,this.g=a.g,Bo(this,a.s),this.l=a.l;var c=a.i,d=new os;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),tp(this,d),this.m=a.m}else a&&(c=String(a).match(ep))?(this.h=!1,zo(this,c[1]||"",!0),this.o=is(c[2]||""),this.g=is(c[3]||"",!0),Bo(this,c[4]),this.l=is(c[5]||"",!0),tp(this,c[6]||"",!0),this.m=is(c[7]||"")):(this.h=!1,this.i=new os(null,this.h))}Er.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ss(c,np,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ss(c,np,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ss(d,d.charAt(0)=="/"?JE:XE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ss(d,ew)),a.join("")};function dn(a){return new Er(a)}function zo(a,c,d){a.j=d?is(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Bo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function tp(a,c,d){c instanceof os?(a.i=c,tw(a.i,a.h)):(d||(c=ss(c,ZE)),a.i=new os(c,a.h))}function he(a,c,d){a.i.set(c,d)}function $o(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function is(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ss(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,YE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function YE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var np=/[#\/\?@]/g,XE=/[#\?:]/g,JE=/[#\?]/g,ZE=/[#\?@]/g,ew=/#/g;function os(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function On(a){a.g||(a.g=new Map,a.h=0,a.i&&QE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=os.prototype,t.add=function(a,c){On(this),this.i=null,a=Yr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function rp(a,c){On(a),c=Yr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ip(a,c){return On(a),c=Yr(a,c),a.g.has(c)}t.forEach=function(a,c){On(this),this.g.forEach(function(d,m){d.forEach(function(x){a.call(c,x,m,this)},this)},this)},t.na=function(){On(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const x=a[m];for(let O=0;O<x.length;O++)d.push(c[m])}return d},t.V=function(a){On(this);let c=[];if(typeof a=="string")ip(this,a)&&(c=c.concat(this.g.get(Yr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return On(this),this.i=null,a=Yr(this,a),ip(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function sp(a,c,d){rp(a,c),0<d.length&&(a.i=null,a.g.set(Yr(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const O=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var x=O;U[m]!==""&&(x+="="+encodeURIComponent(String(U[m]))),a.push(x)}}return this.i=a.join("&")};function Yr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function tw(a,c){c&&!a.j&&(On(a),a.i=null,a.g.forEach(function(d,m){var x=m.toLowerCase();m!=x&&(rp(this,m),sp(this,x,d))},a)),a.j=c}function nw(a,c){const d=new ns;if(l.Image){const m=new Image;m.onload=A(bn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=A(bn,d,"TestLoadImage: error",!1,c,m),m.onabort=A(bn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=A(bn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function rw(a,c){const d=new ns,m=new AbortController,x=setTimeout(()=>{m.abort(),bn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(x),O.ok?bn(d,"TestPingServer: ok",!0,c):bn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),bn(d,"TestPingServer: error",!1,c)})}function bn(a,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function iw(){this.g=new UE}function sw(a,c,d){const m=d||"";try{Zf(a,function(x,O){let U=x;h(x)&&(U=Su(x)),c.push(m+O+"="+encodeURIComponent(U))})}catch(x){throw c.push(m+"type="+encodeURIComponent("_badmap")),x}}function Wo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Wo,Au),Wo.prototype.g=function(){return new Ho(this.l,this.j)},Wo.prototype.i=function(a){return function(){return a}}({});function Ho(a,c){Ke.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ho,Ke),t=Ho.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;op(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function op(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?as(this):ls(this),this.readyState==3&&op(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,as(this))},t.Qa=function(a){this.g&&(this.response=a,as(this))},t.ga=function(){this.g&&as(this)};function as(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ls(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ap(a){let c="";return j(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Vu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ap(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Te(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Te,Ke);var ow=/^https?$/i,aw=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cu.g(),this.v=this.o?Lf(this.o):Lf(Cu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){lp(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(aw,c,void 0))||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of d)this.g.setRequestHeader(O,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){lp(this,O)}};function lp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,up(a),qo(a)}function up(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qo(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cp(this):this.bb())},t.bb=function(){cp(this)};function cp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)Df(a.Ea,0,a);else if(it(a,"readystatechange"),fn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=U===0){var x=String(a.D).match(ep)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),m=!ow.test(x?x.toLowerCase():"")}d=m}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var O=2<fn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",up(a)}}finally{qo(a)}}}}function qo(a,c){if(a.g){hp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||it(a,"ready");try{d.onreadystatechange=m}catch{}}}function hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),jE(c)}};function dp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function lw(a){const c={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(w(a[m]))continue;var d=R(a[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[x]||[];c[x]=O,O.push(d)}v(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function fp(a){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,a),this.cb=us("retryDelaySeedMs",1e4,a),this.Wa=us("forwardChannelMaxRetries",2,a),this.wa=us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gf(a&&a.concurrentRequestLimit),this.Da=new iw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){st(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Tp(this,null,this.W),Go(this)};function Lu(a){if(pp(a),a.G==3){var c=a.U++,d=dn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),cs(a,d),c=new Dn(a,a.j,c),c.L=2,c.v=$o(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ip(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Uo(c)}wp(a)}function Ko(a){a.g&&(Fu(a),a.g.cancel(),a.g=null)}function pp(a){Ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Go(a){if(!Qf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ct||J(),z||(Ct(),z=!0),q.add(c,a),a.B=0}}function uw(a,c){return Yf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ts(g(a.Ga,a,c),Ep(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Dn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=gp(this,x,c),d=dn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),cs(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(ap(O)))+"&"+c:this.m&&Vu(d,this.m,O)),bu(this.h,x),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),x.T=!0,xu(x,d,null)):xu(x,d,c),this.G=2}}else this.G==3&&(a?mp(this,a):this.i.length==0||Qf(this.h)||mp(this))};function mp(a,c){var d;c?d=c.l:d=a.U++;const m=dn(a.I);he(m,"SID",a.K),he(m,"RID",d),he(m,"AID",a.T),cs(a,m),a.m&&a.o&&Vu(m,a.m,a.o),d=new Dn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=gp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),bu(a.h,d),xu(d,m,c)}function cs(a,c){a.H&&j(a.H,function(d,m){he(c,m,d)}),a.l&&Zf({},function(d,m){he(c,m,d)})}function gp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const U=["count="+d];O==-1?0<d?(O=x[0].g,U.push("ofs="+O)):O=0:U.push("ofs="+O);let ue=!0;for(let je=0;je<d;je++){let ie=x[je].g;const Ge=x[je].map;if(ie-=O,0>ie)O=Math.max(0,x[je].g-100),ue=!1;else try{sw(Ge,U,"req"+ie+"_")}catch{m&&m(Ge)}}if(ue){m=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function yp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ct||J(),z||(Ct(),z=!0),q.add(c,a),a.v=0}}function Mu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ts(g(a.Fa,a),Ep(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_p(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ts(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Ko(this),_p(this))};function Fu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _p(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=dn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),cs(a,c),a.m&&a.o&&Vu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=$o(dn(c)),d.m=null,d.P=!0,Hf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),Mu(this),st(19))};function Qo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vp(a,c){var d=null;if(a.g==c){Qo(a),Fu(a),a.g=null;var m=2}else if(Ou(a.h,c))d=c.D,Xf(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;m=Mo(),it(m,new zf(m,d)),Go(a)}else yp(a);else if(x=c.s,x==3||x==0&&0<c.X||!(m==1&&uw(a,c)||m==2&&Mu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function Ep(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function wr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const x=!m;m=new Er(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zo(m,"https"),$o(m),x?nw(m.toString(),d):rw(m.toString(),d)}else st(2);a.G=0,a.l&&a.l.sa(c),wp(a),pp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function wp(a){if(a.G=0,a.ka=[],a.l){const c=Jf(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ka,c),b(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Tp(a,c,d){var m=d instanceof Er?dn(d):new Er(d);if(m.g!="")c&&(m.g=c+"."+m.g),Bo(m,m.s);else{var x=l.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var O=new Er(null);m&&zo(O,m),c&&(O.g=c),x&&Bo(O,x),d&&(O.l=d),m=O}return d=a.D,c=a.ya,d&&c&&he(m,d,c),he(m,"VER",a.la),cs(a,m),m}function Ip(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Te(new Wo({eb:d})):new Te(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sp(){}t=Sp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yo(){}Yo.prototype.g=function(a,c){return new _t(a,c)};function _t(a,c){Ke.call(this),this.g=new fp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Xr(this)}C(_t,Ke),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Lu(this.g)},_t.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Su(a),a=d);c.i.push(new qE(c.Ya++,a)),c.G==3&&Go(c)},_t.prototype.N=function(){this.g.l=null,delete this.j,Lu(this.g),delete this.g,_t.aa.N.call(this)};function Ap(a){ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Ap,ku);function kp(){Ru.call(this),this.status=1}C(kp,Ru);function Xr(a){this.g=a}C(Xr,Sp),Xr.prototype.ua=function(){it(this.g,"a")},Xr.prototype.ta=function(a){it(this.g,new Ap(a))},Xr.prototype.sa=function(a){it(this.g,new kp)},Xr.prototype.ra=function(){it(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,Vv=function(){return new Yo},bv=function(){return Mo()},Ov=_r,Ih={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,ba=Fo,Bf.COMPLETE="complete",Dv=Bf,Mf.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,ks=Mf,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,Nv=Te}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});const Km="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Ld("@firebase/firestore");function vs(){return jr.logLevel}function $(t,...e){if(jr.logLevel<=te.DEBUG){const n=e.map(jd);jr.debug(`Firestore (${Ki}): ${t}`,...n)}}function Cn(t,...e){if(jr.logLevel<=te.ERROR){const n=e.map(jd);jr.error(`Firestore (${Ki}): ${t}`,...n)}}function Vi(t,...e){if(jr.logLevel<=te.WARN){const n=e.map(jd);jr.warn(`Firestore (${Ki}): ${t}`,...n)}}function jd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class _S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vS{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Lv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Ze(e)}}class ES{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ES(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new TS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Li(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new be(0,0))}static max(){return new Y(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends lo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const AS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends lo{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return AS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ge.fromString(e))}static fromName(e){return new H(ge.fromString(e).popFirst(5))}static empty(){return new H(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ge(e.slice()))}}function kS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new cr(i,H.empty(),e)}function RS(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(Y.min(),H.empty(),-1)}static max(){return new cr(Y.max(),H.empty(),-1)}}function CS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==PS)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function NS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ud.oe=-1;function Yl(t){return t==null}function gl(t){return t===0&&1/t==-1/0}function DS(t){return typeof t=="number"&&Number.isInteger(t)&&!gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qm(this.data.getIterator())}getIteratorFrom(e){return new Qm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Qm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new wt([])}unionWith(e){let n=new We(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jv("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const OS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=OS.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bd(t){const e=t.mapValue.fields.__previous_value__;return zd(e)?Bd(e):e}function uo(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zd(t)?4:LS(t)?9007199254740991:VS(t)?10:11:G()}function nn(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),l=hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ur(i.bytesValue).isEqual(Ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?gl(o)===gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Li(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Gm(o)!==Gm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!nn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function ho(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ym(t.timestampValue,e.timestampValue);case 4:return Ym(uo(t),uo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ur(s),u=Ur(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ae(s.latitude),Ae(o.latitude));return l!==0?l:se(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},g=o.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=se(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Xm(A,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ya.mapValue&&o===ya.mapValue)return 0;if(s===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=se(u[p],f[p]);if(g!==0)return g;const A=Mi(l[u[p]],h[f[p]]);if(A!==0)return A}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Ym(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=hr(t),r=hr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Xm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Mi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Fi(t){return Sh(t)}function Sh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sh(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function Ah(t){return!!t&&"integerValue"in t}function $d(t){return!!t&&"arrayValue"in t}function Jm(t){return!!t&&"nullValue"in t}function Zm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function VS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=js(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Va(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(js(this.value))}}function Uv(t){const e=[];return qr(t.fields,(n,r)=>{const i=new Be([n]);if(Va(r)){const s=Uv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.position=e,this.inclusive=n}}function eg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Mi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n="asc"){this.field=e,this.dir=n}}function MS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{}class De extends zv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jS(e,n,r):n==="array-contains"?new BS(e,r):n==="in"?new $S(e,r):n==="not-in"?new WS(e,r):n==="array-contains-any"?new HS(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new US(e,r):new zS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mi(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends zv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return Bv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Bv(t){return t.op==="and"}function $v(t){return FS(t)&&Bv(t)}function FS(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function kh(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if($v(t))return t.filters.map(e=>kh(e)).join(",");{const e=t.filters.map(n=>kh(n)).join(",");return`${t.op}(${e})`}}function Wv(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Wv(o,i.filters[l]),!0):!1}(t,e):void G()}function Hv(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Fi(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(Hv).join(" ,")+"}"}(t):"Filter"}class jS extends De{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class US extends De{constructor(e,n){super(e,"in",n),this.keys=qv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zS extends De{constructor(e,n){super(e,"not-in",n),this.keys=qv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class BS extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $d(n)&&ho(n.arrayValue,this.value)}}class $S extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class WS extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class HS extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$d(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ng(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qS(t,e,n,r,i,s,o)}function Wd(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.ue=n}return e.ue}function Hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tg(t.startAt,e.startAt)&&tg(t.endAt,e.endAt)}function Rh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KS(t,e,n,r,i,s,o,l){return new Xl(t,e,n,r,i,s,o,l)}function qd(t){return new Xl(t)}function rg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GS(t){return t.collectionGroup!==null}function Us(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _l(s,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new _l(Be.keyField(),r))}return e.ce}function Jt(t){const e=X(t);return e.le||(e.le=QS(e,Us(t))),e.le}function QS(t,e){if(t.limitType==="F")return ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _l(i.field,s)});const n=t.endAt?new yl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yl(t.startAt.position,t.startAt.inclusive):null;return ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ch(t,e,n){return new Xl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jl(t,e){return Hd(Jt(t),Jt(e))&&t.limitType===e.limitType}function Kv(t){return`${Wd(Jt(t))}|lt:${t.limitType}`}function ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Hv(i)).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fi(i)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function Zl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Us(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=eg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Us(r),i)||r.endAt&&!function(o,l,u){const h=eg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Us(r),i))}(t,e)}function YS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gv(t){return(e,n)=>{let r=!1;for(const i of Us(t)){const s=XS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XS(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Mi(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Fv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new we(H.comparator);function Pn(){return JS}const Qv=new we(H.comparator);function Rs(...t){let e=Qv;for(const n of t)e=e.insert(n.key,n);return e}function Yv(t){let e=Qv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return zs()}function Xv(){return zs()}function zs(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZS=new we(H.comparator),eA=new We(H.comparator);function ee(...t){let e=eA;for(const n of t)e=e.add(n);return e}const tA=new We(se);function nA(){return tA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function Jv(t){return{integerValue:""+t}}function rA(t,e){return DS(e)?Jv(e):Kd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this._=void 0}}function iA(t,e,n){return t instanceof vl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zd(s)&&(s=Bd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fo?e0(t,e):t instanceof po?t0(t,e):function(i,s){const o=Zv(i,s),l=ig(o)+ig(i.Pe);return Ah(o)&&Ah(i.Pe)?Jv(l):Kd(i.serializer,l)}(t,e)}function sA(t,e,n){return t instanceof fo?e0(t,e):t instanceof po?t0(t,e):n}function Zv(t,e){return t instanceof El?function(r){return Ah(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vl extends eu{}class fo extends eu{constructor(e){super(),this.elements=e}}function e0(t,e){const n=n0(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends eu{constructor(e){super(),this.elements=e}}function t0(t,e){let n=n0(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class El extends eu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ig(t){return Ae(t.integerValue||t.doubleValue)}function n0(t){return $d(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fo&&i instanceof fo||r instanceof po&&i instanceof po?Li(r.elements,i.elements,nn):r instanceof El&&i instanceof El?nn(r.Pe,i.Pe):r instanceof vl&&i instanceof vl}(t.transform,e.transform)}class aA{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function r0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nu(t.key,It.none()):new ko(t.key,t.data,It.none());{const n=t.data,r=ft.empty();let i=new We(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new wt(i.toArray()),It.none())}}function lA(t,e,n){t instanceof ko?function(i,s,o){const l=i.value.clone(),u=og(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,s,o){if(!La(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=og(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(i0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof ko?function(s,o,l,u){if(!La(s.precondition,o))return l;const h=s.value.clone(),f=ag(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(s,o,l,u){if(!La(s.precondition,o))return l;const h=ag(s.fieldTransforms,u,o),f=o.data;return f.setAll(i0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return La(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Zv(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function sg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Li(r,i,(s,o)=>oA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends tu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends tu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function i0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function og(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,sA(o,l,n[i]))}return r}function ag(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iA(s,o,e))}return r}class nu extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cA extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=r0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Li(this.mutations,e.mutations,(n,r)=>sg(n,r))&&Li(this.baseMutations,e.baseMutations,(n,r)=>sg(n,r))}}class Gd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return ZS}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ne;function pA(t){switch(t){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function s0(t){if(t===void 0)return Cn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Re.OK:return V.OK;case Re.CANCELLED:return V.CANCELLED;case Re.UNKNOWN:return V.UNKNOWN;case Re.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Re.INTERNAL:return V.INTERNAL;case Re.UNAVAILABLE:return V.UNAVAILABLE;case Re.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Re.NOT_FOUND:return V.NOT_FOUND;case Re.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Re.ABORTED:return V.ABORTED;case Re.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Re.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=new Nr([4294967295,4294967295],0);function lg(t){const e=mA().encode(t),n=new xv;return n.update(e),new Uint8Array(n.digest())}function ug(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Nr([n,r],0),new Nr([i,s],0)]}class Qd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Cs(`Invalid padding: ${n}`);if(r<0)throw new Cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Cs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Nr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Nr.fromNumber(r)));return i.compare(gA)===1&&(i=new Nr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=lg(e),[r,i]=ug(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=lg(e),[r,i]=ug(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(Y.min(),i,new we(se),Pn(),ee())}}class Ro{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ro(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class o0{constructor(e,n){this.targetId=e,this.me=n}}class a0{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cg{constructor(){this.fe=0,this.ge=dg(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ro(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=dg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=hg(),this.Qe=new we(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Rh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,tt.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ur(r).toUint8Array()}catch(u){if(u instanceof jv)return Vi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qd(o,i,s)}catch(u){return Vi(u instanceof Cs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Rh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,tt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ru(e,n,this.Qe,this.ke,r);return this.ke=Pn(),this.qe=hg(),this.Qe=new we(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new cg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new We(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function hg(){return new we(H.comparator)}function dg(){return new we(H.comparator)}const _A={asc:"ASCENDING",desc:"DESCENDING"},vA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EA={and:"AND",or:"OR"};class wA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ph(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function wl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function l0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TA(t,e){return wl(t,e.toTimestamp())}function Zt(t){return ae(!!t),Y.fromTimestamp(function(n){const r=hr(n);return new be(r.seconds,r.nanos)}(t))}function Yd(t,e){return xh(t,e).canonicalString()}function xh(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function u0(t){const e=ge.fromString(t);return ae(p0(e)),e}function Nh(t,e){return Yd(t.databaseId,e.path)}function yc(t,e){const n=u0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(h0(n))}function c0(t,e){return Yd(t.databaseId,e)}function IA(t){const e=u0(t);return e.length===4?ge.emptyPath():h0(e)}function Dh(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function h0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fg(t,e,n){return{name:Nh(t,e),fields:n.value.mapValue.fields}}function SA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),qe.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:s0(h.code);return new W(f,h.message||"")}(o);n=new a0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yc(t,r.document.name),s=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):Y.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ma(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yc(t,r.document),s=r.readTime?Zt(r.readTime):Y.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ma([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yc(t,r.document),s=r.removedTargetIds||[];n=new Ma([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fA(i,s),l=r.targetId;n=new o0(l,o)}}return n}function AA(t,e){let n;if(e instanceof ko)n={update:fg(t,e.key,e.value)};else if(e instanceof nu)n={delete:Nh(t,e.key)};else if(e instanceof gr)n={update:fg(t,e.key,e.data),updateMask:bA(e.fieldMask)};else{if(!(e instanceof cA))return G();n={verify:Nh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof El)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function kA(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Zt(i.updateTime):Zt(s);return o.isEqual(Y.min())&&(o=Zt(s)),new aA(o,i.transformResults||[])}(n,e))):[]}function RA(t,e){return{documents:[c0(t,e.path)]}}function CA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=c0(t,i);const s=function(h){if(h.length!==0)return f0(rn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ni(g.field),direction:NA(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ph(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function PA(t){let e=IA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=d0(p);return g instanceof rn&&$v(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new _l(ri(C.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Yl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new yl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new yl(A,g)}(n.endAt)),KS(e,i,o,s,l,"F",u,h)}function xA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function d0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ri(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ri(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ri(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return De.create(ri(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>d0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function NA(t){return _A[t]}function DA(t){return vA[t]}function OA(t){return EA[t]}function ni(t){return{fieldPath:t.canonicalString()}}function ri(t){return Be.fromServerFormat(t.fieldPath)}function f0(t){return t instanceof De?function(n){if(n.op==="=="){if(Zm(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NAN"}};if(Jm(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zm(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NAN"}};if(Jm(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(n.field),op:DA(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>f0(i));return r.length===1?r[0]:{compositeFilter:{op:OA(n.op),filters:r}}}(t):G()}function bA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function p0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.ct=e}}function LA(t){const e=PA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ch(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.un=new FA}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(cr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class FA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ji(0)}static kn(){return new ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,wt.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Rs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pn();const o=zs(),l=function(){return zs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof gr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Bs(f.mutation,h,f.mutation.getFieldMask(),be.now())):o.set(h.key,wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new UA(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=zs();let i=new we((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||wt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Xv();f.forEach(g=>{if(!s.has(g)){const A=r0(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Cr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:Yv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Rs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Rs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,g){return new Xl(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,tt.newInvalidDocument(f)))});let l=Rs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Bs(f.mutation,h,wt.empty(),be.now()),Zl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:LA(i.bundledQuery),readTime:Zt(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.overlays=new we(H.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Cr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Cr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Cr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dA(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.Tr=new We(Ve.Er),this.dr=new We(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ge([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ge([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new We(Ve.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(se);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new We(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.Mr=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||CS(RS(f),r)<=0||(i.has(f.key)||Zl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KA(this)}getSize(e){return L.resolve(this.size)}}class KA extends jA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.persistence=e,this.Nr=new Gi(n=>Wd(n),Hd),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Xd,this.targetCount=0,this.kr=ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ud(0),this.Kr=!1,this.Kr=!0,this.$r=new WA,this.referenceDelegate=e(this),this.Ur=new GA(this),this.indexManager=new MA,this.remoteDocumentCache=function(i){return new qA(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VA(n),this.Gr=new BA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $A,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new HA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new YA(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YA extends xS{constructor(e){super(),this.currentSequenceNumber=e}}class Jd{constructor(e){this.persistence=e,this.Jr=new Xd,this.Yr=null}static Zr(e){return new Jd(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return JI()?8:NS(rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XA;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(vs()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(vs()<=te.DEBUG&&$("QueryEngine","Query:",ti(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(vs()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):L.resolve())}Yi(e,n){if(rg(n))return L.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ch(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ch(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return rg(n)||i.isEqual(Y.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(vs()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ti(n)),this.rs(e,o,n,kS(i,-1)).next(l=>l))})}ts(e,n){let r=new We(Gv(e));return n.forEach((i,s)=>{Zl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return vs()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ti(n)),this.Ji.getDocumentsMatchingQuery(e,n,cr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(se),this._s=new Gi(s=>Wd(s),Hd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ek(t,e,n,r){return new ZA(t,e,n,r)}async function m0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function tk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=L.resolve();return g.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(D=>{const b=h.docVersions.get(C);ae(b!==null),D.version.compareTo(b)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function g0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nk(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(D,b,I){return D.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Pn(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(rk(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function rk(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function ik(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sk(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Oh(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ao(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function pg(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=X(u),g=p._s.get(f);return g!==void 0?L.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Jt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(ok(r,YS(e),l),{documents:l,Ts:s})))}function ok(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class mg{constructor(){this.activeTargetIds=nA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ak{constructor(){this.so=new mg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function _c(){return _a===null?_a=function(){return 268435456+Math.round(2147483648*Math.random())}():_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class hk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=_c(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>($("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Vi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uk[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=_c();return new Promise((o,l)=>{const u=new Nv;u.setWithCredentials(!0),u.listenOnce(Dv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ba.NO_ERROR:const f=u.getResponseJson();$(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case ba.TIMEOUT:$(Je,`RPC '${e}' ${s} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case ba.HTTP_ERROR:const p=u.getStatus();if($(Je,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const C=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(A.status);l(new W(C,A.message))}else l(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(Je,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);$(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=_c(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vv(),l=bv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,A=!1;const C=new ck({Io:b=>{A?$(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||($(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),$(Je,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),D=(b,I,w)=>{b.listen(I,k=>{try{w(k)}catch(N){setTimeout(()=>{throw N},0)}})};return D(p,ks.EventType.OPEN,()=>{A||($(Je,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),D(p,ks.EventType.CLOSE,()=>{A||(A=!0,$(Je,`RPC '${e}' stream ${i} transport closed`),C.So())}),D(p,ks.EventType.ERROR,b=>{A||(A=!0,Vi(Je,`RPC '${e}' stream ${i} transport errored:`,b),C.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),D(p,ks.EventType.MESSAGE,b=>{var I;if(!A){const w=b.data[0];ae(!!w);const k=w,N=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(N){$(Je,`RPC '${e}' stream ${i} received error:`,N);const F=N.status;let j=function(_){const T=Re[_];if(T!==void 0)return s0(T)}(F),v=N.message;j===void 0&&(j=V.INTERNAL,v="Unknown error status: "+F+" with message "+N.message),A=!0,C.So(new W(j,v)),p.close()}else $(Je,`RPC '${e}' stream ${i} received:`,w),C.bo(w)}}),D(l,Ov.STAT_EVENT,b=>{b.stat===Ih.PROXY?$(Je,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Ih.NOPROXY&&$(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){return new wA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new y0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dk extends _0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=SA(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Zt(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Dh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Rh(u)?{documents:RA(s,u)}:{query:CA(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=l0(s,o.resumeToken);const h=Ph(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=wl(s,o.snapshotVersion.toTimestamp());const h=Ph(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=xA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Dh(this.serializer),n.removeTarget=e,this.a_(n)}}class fk extends _0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kA(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Dh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,xh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,xh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Cn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Kr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await Co(h),h.q_.set("Unknown"),h.L_.delete(4),await su(h)}(this))})}),this.q_=new mk(r,i)}}async function su(t){if(Kr(t))for(const e of t.B_)await e(!0)}async function Co(t){for(const e of t.B_)await e(!1)}function v0(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),rf(n)?nf(n):Qi(n).r_()&&tf(n,e))}function ef(t,e){const n=X(t),r=Qi(n);n.N_.delete(e),r.r_()&&E0(n,e),n.N_.size===0&&(r.r_()?r.o_():Kr(n)&&n.q_.set("Unknown"))}function tf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qi(t).A_(e)}function E0(t,e){t.Q_.xe(e),Qi(t).R_(e)}function nf(t){t.Q_=new yA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qi(t).start(),t.q_.v_()}function rf(t){return Kr(t)&&!Qi(t).n_()&&t.N_.size>0}function Kr(t){return X(t).L_.size===0}function w0(t){t.Q_=void 0}async function yk(t){t.q_.set("Online")}async function _k(t){t.N_.forEach((e,n)=>{tf(t,e)})}async function vk(t,e){w0(t),rf(t)?(t.q_.M_(e),nf(t)):t.q_.set("Unknown")}async function Ek(t,e,n){if(t.q_.set("Online"),e instanceof a0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tl(t,r)}else if(e instanceof Ma?t.Q_.Ke(e):e instanceof o0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await g0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),E0(s,u);const p=new Kn(f.target,u,h,f.sequenceNumber);tf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Tl(t,r)}}async function Tl(t,e,n){if(!Ao(e))throw e;t.L_.add(1),await Co(t),t.q_.set("Offline"),n||(n=()=>g0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await su(t)})}function T0(t,e){return e().catch(n=>Tl(t,n,e))}async function ou(t){const e=X(t),n=dr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wk(e);)try{const i=await ik(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Tk(e,i)}catch(i){await Tl(e,i)}I0(e)&&S0(e)}function wk(t){return Kr(t)&&t.O_.length<10}function Tk(t,e){t.O_.push(e);const n=dr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function I0(t){return Kr(t)&&!dr(t).n_()&&t.O_.length>0}function S0(t){dr(t).start()}async function Ik(t){dr(t).p_()}async function Sk(t){const e=dr(t);for(const n of t.O_)e.m_(n.mutations)}async function Ak(t,e,n){const r=t.O_.shift(),i=Gd.from(r,e,n);await T0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ou(t)}async function kk(t,e){e&&dr(t).V_&&await async function(r,i){if(function(o){return pA(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();dr(r).s_(),await T0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ou(r)}}(t,e),I0(t)&&S0(t)}async function yg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.L_.add(3),await Co(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await su(n)}async function Rk(t,e){const n=X(t);e?(n.L_.delete(2),await su(n)):e||(n.L_.add(2),await Co(n),n.q_.set("Unknown"))}function Qi(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new dk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yk.bind(null,t),Ro:_k.bind(null,t),mo:vk.bind(null,t),d_:Ek.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),rf(t)?nf(t):t.q_.set("Unknown")):(await t.K_.stop(),w0(t))})),t.K_}function dr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new fk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ik.bind(null,t),mo:kk.bind(null,t),f_:Sk.bind(null,t),g_:Ak.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ou(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new sf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function of(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),Ao(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Rs(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.W_=new we(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ui{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ui(e,n,Ii.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Pk{constructor(){this.queries=vg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=vg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function vg(){return new Gi(t=>Kv(t),Jl)}async function xk(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Ck,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=of(o,`Initialization of query '${ti(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&af(n)}async function Nk(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Dk(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&af(n)}function Ok(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function af(t){t.Y_.forEach(e=>{e.next()})}var bh,Eg;(Eg=bh||(bh={})).ea="default",Eg.Cache="cache";class bk{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ui(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.key=e}}class k0{constructor(e){this.key=e}}class Vk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Gv(e),this.Ra=new Ii(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new _g,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=Zl(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let b=!1;g&&A?g.data.isEqual(A.data)?C!==D&&(r.track({type:3,doc:A}),b=!0):this.ga(g,A)||(r.track({type:2,doc:A}),b=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),b=!0):g&&!A&&(r.track({type:1,doc:g}),b=!0,(u||h)&&(l=!0)),b&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(A,C){const D=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return D(A)-D(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Ui(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _g,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new k0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new A0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ui.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Lk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mk{constructor(e){this.key=e,this.va=!1}}class Fk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Gi(l=>Kv(l),Jl),this.Ma=new Map,this.xa=new Set,this.Oa=new we(H.comparator),this.Na=new Map,this.La=new Xd,this.Ba={},this.ka=new Map,this.qa=ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jk(t,e,n=!0){const r=D0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await R0(r,e,n,!0),i}async function Uk(t,e){const n=D0(t);await R0(n,e,!0,!1)}async function R0(t,e,n,r){const i=await sk(t.localStore,Jt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await zk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&v0(t.remoteStore,i),l}async function zk(t,e,n,r,i){t.Ka=(p,g,A)=>async function(D,b,I,w){let k=b.view.ma(I);k.ns&&(k=await pg(D.localStore,b.query,!1).then(({documents:v})=>b.view.ma(v,k)));const N=w&&w.targetChanges.get(b.targetId),F=w&&w.targetMismatches.get(b.targetId)!=null,j=b.view.applyChanges(k,D.isPrimaryClient,N,F);return Tg(D,b.targetId,j.wa),j.snapshot}(t,p,g,A);const s=await pg(t.localStore,e,!0),o=new Vk(e,s.Ts),l=o.ma(s.documents),u=Ro.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Tg(t,n,h.wa);const f=new Lk(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Bk(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Jl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Oh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ef(r.remoteStore,i.targetId),Vh(r,i.targetId)}).catch(So)):(Vh(r,i.targetId),await Oh(r.localStore,i.targetId,!0))}async function $k(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ef(n.remoteStore,r.targetId))}async function Wk(t,e,n){const r=Xk(t);try{const i=await function(o,l){const u=X(o),h=be.now(),f=l.reduce((A,C)=>A.add(C.key),ee());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=Pn(),D=ee();return u.cs.getEntries(A,f).next(b=>{C=b,C.forEach((I,w)=>{w.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(b=>{p=b;const I=[];for(const w of l){const k=uA(w,p.get(w.key).overlayedDocument);k!=null&&I.push(new gr(w.key,k,Uv(k.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(b=>{g=b;const I=b.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(A,b.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Yv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new we(se)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Po(r,i.changes),await ou(r.remoteStore)}catch(i){const s=of(i,"Failed to persist write");n.reject(s)}}async function C0(t,e){const n=X(t);try{const r=await nk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Po(n,r,e)}catch(r){await So(r)}}function wg(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&af(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hk(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(H.comparator);o=o.insert(s,tt.newNoDocument(s,Y.min()));const l=ee().add(s),u=new ru(Y.min(),new Map,new we(se),o,l);await C0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),lf(r)}else await Oh(r.localStore,e,!1).then(()=>Vh(r,e,n)).catch(So)}async function qk(t,e){const n=X(t),r=e.batch.batchId;try{const i=await tk(n.localStore,e);x0(n,r,null),P0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Po(n,i)}catch(i){await So(i)}}async function Kk(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ae(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);x0(r,e,n),P0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Po(r,i)}catch(i){await So(i)}}function P0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function x0(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||N0(t,r)})}function N0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ef(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),lf(t))}function Tg(t,e,n){for(const r of n)r instanceof A0?(t.La.addReference(r.key,e),Gk(t,r)):r instanceof k0?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||N0(t,r.key)):G()}function Gk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),lf(t))}function lf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new Mk(n)),t.Oa=t.Oa.insert(n,r),v0(t.remoteStore,new Kn(Jt(qd(n.path)),r,"TargetPurposeLimboResolution",Ud.oe))}}async function Po(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Zd.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.$i,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>L.forEach(g.Ui,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!Ao(p))throw p;$("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.os.get(g),C=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,D)}}}(r.localStore,s))}async function Qk(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await m0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Po(n,r.hs)}}function Yk(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function D0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=C0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hk.bind(null,e),e.Ca.d_=Dk.bind(null,e.eventManager),e.Ca.$a=Ok.bind(null,e.eventManager),e}function Xk(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kk.bind(null,e),e}class Il{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=iu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ek(this.persistence,new JA,e.initialUser,this.serializer)}Ga(e){return new QA(Jd.Zr,this.serializer)}Wa(e){return new ak}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Il.provider={build:()=>new Il};class Lh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await Rk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Pk}()}createDatastore(e){const n=iu(e.databaseInfo.databaseId),r=function(s){return new hk(s)}(e.databaseInfo);return function(s,o,l,u){return new pk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new gk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wg(this.syncEngine,n,0),function(){return gg.D()?new gg:new lk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new Fk(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Co(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lh.provider={build:()=>new Lh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=Mv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=of(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ec(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await m0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ig(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eR(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yg(e.remoteStore,i)),t._onlineComponents=e}async function eR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Vi("Error using user provided cache. Falling back to memory cache: "+n),await Ec(t,new Il)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Ec(t,new Il);return t._offlineComponents}async function O0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Ig(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Ig(t,new Lh))),t._onlineComponents}function tR(t){return O0(t).then(e=>e.syncEngine)}async function Sg(t){const e=await O0(t),n=e.eventManager;return n.onListen=jk.bind(null,e.syncEngine),n.onUnlisten=Bk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Uk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$k.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nR(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kg(t){if(!H.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rg(t){if(H.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uf(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yS;switch(r.type){case"firstParty":return new wS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ag.get(n);r&&($("ComponentProvider","Removing Datastore"),Ag.delete(n),r.terminate())}(this),Promise.resolve()}}function rR(t,e,n,r={}){var i;const s=(t=ir(t,au))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=Sv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(h)}t._authCredentials=new _S(new Lv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lu(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class sr extends lu{constructor(e,n,r){super(e,n,qd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new H(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function iR(t,e,...n){if(t=Pe(t),V0("collection","path",e),t instanceof au){const r=ge.fromString(e,...n);return Rg(r),new sr(t,null,r)}{if(!(t instanceof St||t instanceof sr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Rg(r),new sr(t.firestore,null,r)}}function va(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=Mv.newId()),V0("doc","path",e),t instanceof au){const r=ge.fromString(e,...n);return kg(r),new St(t,null,new H(r))}{if(!(t instanceof St||t instanceof sr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return kg(r),new St(t.firestore,t instanceof sr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new y0(this,"async_queue_retry"),this.Vu=()=>{const r=vc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Dr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ao(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=sf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function xg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class zi extends au{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Pg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pg(e),this._firestoreClient=void 0,await e}}}function sR(t,e){const n=typeof t=="object"?t:Fd(),r=typeof t=="string"?t:"(default)",i=Ql(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wv("firestore");s&&rR(i,...s)}return i}function cf(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oR(t),t._firestoreClient}function oR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new bS(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,b0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Zk(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bi(qe.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bi(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^__.*__$/;class lR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}class L0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function M0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(M0(this.Cu)&&aR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||iu(e)}Qu(e,n,r,i=!1){return new pf({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function F0(t){const e=t._freezeSettings(),n=iu(t._databaseId);return new uR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function j0(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);mf("Data must be an object, but it was:",o,r);const l=U0(r,o);let u,h;if(s.merge)u=new wt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Mh(e,p,n);if(!o.contains(g))throw new W(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);B0(f,g)||f.push(g)}u=new wt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new lR(new ft(l),u,h)}class cu extends hf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cu}}function cR(t,e,n,r){const i=t.Qu(1,e,n);mf("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();qr(r,(u,h)=>{const f=gf(e,u,n);h=Pe(h);const p=i.Nu(f);if(h instanceof cu)s.push(f);else{const g=hu(h,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new wt(s);return new L0(o,l,i.fieldTransforms)}function hR(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Mh(e,r,n)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Mh(e,s[g])),u.push(s[g+1]);const h=[],f=ft.empty();for(let g=l.length-1;g>=0;--g)if(!B0(h,l[g])){const A=l[g];let C=u[g];C=Pe(C);const D=o.Nu(A);if(C instanceof cu)h.push(A);else{const b=hu(C,D);b!=null&&(h.push(A),f.set(A,b))}}const p=new wt(h);return new L0(f,p,o.fieldTransforms)}function hu(t,e){if(z0(t=Pe(t)))return mf("Unsupported field value:",e,t),U0(t,e);if(t instanceof hf)return function(r,i){if(!M0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=hu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:wl(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wl(i.serializer,s)}}if(r instanceof df)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bi)return{bytesValue:l0(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ff)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Kd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${uf(r)}`)}(t,e)}function U0(t,e){const n={};return Fv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(r,i)=>{const s=hu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function z0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof df||t instanceof Bi||t instanceof St||t instanceof hf||t instanceof ff)}function mf(t,e,n){if(!z0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=uf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Mh(t,e,n){if((e=Pe(e))instanceof uu)return e._internalPath;if(typeof e=="string")return gf(t,e);throw Sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const dR=new RegExp("[~\\*/\\[\\]]");function gf(t,e,n){if(e.search(dR)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uu(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function B0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(W0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fR extends $0{data(){return super.data()}}function W0(t,e){return typeof e=="string"?gf(t,e):e instanceof uu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mR{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new ff(s)}convertGeoPoint(e){return new df(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=hr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ae(p0(r));const i=new co(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class q0 extends $0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(W0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fa extends q0{data(e={}){return super.data(e)}}class gR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fa(this._firestore,this._userDataWriter,r.key,r,new Ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Fa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Fa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ps(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:yR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class K0 extends mR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Ng(t,e,n){t=ir(t,St);const r=ir(t.firestore,zi),i=H0(t.converter,e,n);return yf(r,[j0(F0(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,It.none())])}function _R(t){return yf(ir(t.firestore,zi),[new nu(t._key,It.none())])}function vR(t,...e){var n,r,i;t=Pe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(xg(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof St)h=ir(t.firestore,zi),f=qd(t._key.path),u={next:p=>{e[o]&&e[o](ER(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=ir(t,lu);h=ir(p.firestore,zi),f=p._query;const g=new K0(h);u={next:A=>{e[o]&&e[o](new gR(h,g,p,A))},error:e[o+1],complete:e[o+2]},pR(t._query)}return function(g,A,C,D){const b=new Jk(D),I=new bk(A,b,C);return g.asyncQueue.enqueueAndForget(async()=>xk(await Sg(g),I)),()=>{b.Za(),g.asyncQueue.enqueueAndForget(async()=>Nk(await Sg(g),I))}}(cf(h),f,l,u)}function yf(t,e){return function(r,i){const s=new Dr;return r.asyncQueue.enqueueAndForget(async()=>Wk(await tR(r),i,s)),s.promise}(cf(t),e)}function ER(t,e,n){const r=n.docs.get(e._key),i=new K0(t);return new q0(t,i,e._key,r,new Ps(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=F0(e)}set(e,n,r){this._verifyNotCommitted();const i=wc(e,this._firestore),s=H0(i.converter,n,r),o=j0(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,It.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=wc(e,this._firestore);let o;return o=typeof(n=Pe(n))=="string"||n instanceof uu?hR(this._dataReader,"WriteBatch.update",s._key,n,r,i):cR(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,It.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=wc(e,this._firestore);return this._mutations=this._mutations.concat(new nu(n._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wc(t,e){if((t=Pe(t)).firestore!==e)throw new W(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){return cf(t=ir(t,zi)),new wR(t,e=>yf(t,e))}(function(e,n=!0){(function(i){Ki=i})(Hr),Fr(new ur("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new zi(new vS(r.getProvider("auth-internal")),new IS(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new co(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xt(Km,"4.7.3",e),Xt(Km,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="firebasestorage.googleapis.com",IR="storageBucket",SR=2*60*1e3,AR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends on{constructor(e,n,r=0){super(Tc(e),`Firebase Storage: ${n} (${Tc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,an.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sn||(sn={}));function Tc(t){return"storage/"+t}function kR(){const t="An unknown error occurred, please check the error payload for server response.";return new an(sn.UNKNOWN,t)}function RR(){return new an(sn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CR(){return new an(sn.CANCELED,"User canceled the upload/download.")}function PR(t){return new an(sn.INVALID_URL,"Invalid URL '"+t+"'.")}function xR(t){return new an(sn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Dg(t){return new an(sn.INVALID_ARGUMENT,t)}function Q0(){return new an(sn.APP_DELETED,"The Firebase app was deleted.")}function NR(t){return new an(sn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw xR(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},D=n===G0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${D}/${i}/${b}`,"i"),k=[{regex:l,indices:u,postModify:s},{regex:A,indices:C,postModify:h},{regex:I,indices:{bucket:1,path:2},postModify:h}];for(let N=0;N<k.length;N++){const F=k[N],j=F.regex.exec(e);if(j){const v=j[F.indices.bucket];let y=j[F.indices.path];y||(y=""),r=new Ut(v,y),F.postModify(r);break}}if(r==null)throw PR(e);return r}}class DR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...b){h||(h=!0,e.apply(null,b))}function p(b){i=setTimeout(()=>{i=null,t(A,u())},b)}function g(){s&&clearTimeout(s)}function A(b,...I){if(h){g();return}if(b){g(),f.call(null,b,...I);return}if(u()||o){g(),f.call(null,b,...I);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,p(k)}let C=!1;function D(b){C||(C=!0,g(),!h&&(i!==null?(b||(l=2),clearTimeout(i),p(0)):b||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function bR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){return t!==void 0}function Og(t,e,n,r){if(r<e)throw Dg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Dg(`Invalid value for '${t}'. Expected ${n} or less.`)}function LR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Al;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Al||(Al={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,i,s,o,l,u,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,C)=>{this.resolve_=A,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ea(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Al.NO_ERROR,u=s.getStatus();if(!l||MR(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Al.ABORT;r(!1,new Ea(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Ea(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());VR(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=kR();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Q0():CR();o(u)}else{const u=RR();o(u)}};this.canceled_?n(!1,new Ea(!1,null,!0)):this.backoffId_=OR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ea{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function jR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $R(t,e,n,r,i,s,o=!0){const l=LR(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return zR(h,e),jR(h,n),UR(h,s),BR(h,r),new FR(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new kl(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HR(this._location.path)}get storage(){return this._service}get parent(){const e=WR(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new kl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NR(e)}}function bg(t,e){const n=e==null?void 0:e[IR];return n==null?null:Ut.makeFromBucketSpec(n,t)}function qR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Sv(i,t.app.options.projectId))}class KR{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=G0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SR,this._maxUploadRetryTime=AR,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Og("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Og("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kl(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new DR(Q0());{const o=$R(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Vg="@firebase/storage",Lg="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="storage";function GR(t=Fd(),e){t=Pe(t);const r=Ql(t,Y0).getImmediate({identifier:e}),i=wv("storage");return i&&QR(r,...i),r}function QR(t,e,n,r={}){qR(t,e,n,r)}function YR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new KR(n,r,i,e,Hr)}function XR(){Fr(new ur(Y0,YR,"PUBLIC").setMultipleInstances(!0)),Xt(Vg,Lg,""),Xt(Vg,Lg,"esm2017")}XR();function _f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function X0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JR=X0,J0=new To("auth","Firebase",X0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Ld("@firebase/auth");function ZR(t,...e){Rl.logLevel<=te.WARN&&Rl.warn(`Auth (${Hr}): ${t}`,...e)}function ja(t,...e){Rl.logLevel<=te.ERROR&&Rl.error(`Auth (${Hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw vf(t,...e)}function en(t,...e){return vf(t,...e)}function Z0(t,e,n){const r=Object.assign(Object.assign({},JR()),{[e]:n});return new To("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return Z0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J0.create(t,...e)}function K(t,e,...n){if(!t)throw vf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function xn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eC(){return Mg()==="http:"||Mg()==="https:"}function Mg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eC()||QI()||"connection"in navigator)?navigator.onLine:!0}function nC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=qI()||YI()}get(){return tC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new xo(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yr(t,e,n,r,i={}){return tE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Io(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return GI()||(h.referrerPolicy="no-referrer"),eE.fetch()(nE(t,t.config.apiHost,n,l),h)})}async function tE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rC),e);try{const i=new oC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw wa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Z0(t,f,h);Wt(t,f)}}catch(i){if(i instanceof on)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function du(t,e,n,r,i={}){const s=await yr(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ef(t.config,i):`${t.config.apiScheme}://${i}`}function sC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),iC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}function Fg(t){return t!==void 0&&t.enterprise!==void 0}class aC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function lC(t,e){return yr(t,"GET","/v2/recaptchaConfig",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){return yr(t,"POST","/v1/accounts:delete",e)}async function rE(t,e){return yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cC(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=wf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$s(Ic(i.auth_time)),issuedAtTime:$s(Ic(i.iat)),expirationTime:$s(Ic(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=vv(n);return i?JSON.parse(i):(ja("Failed to decode base64 JWT payload"),null)}catch(i){return ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jg(t){const e=wf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&hC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mo(t,rE(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iE(s.providerUserInfo):[],l=pC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new jh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function fC(t){const e=Pe(t);await Cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iE(t){return t.map(e=>{var{providerId:n}=e,r=_f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e){const n=await tE(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",eE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gC(t,e){return yr(t,"POST","/v2/accounts:revokeToken",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=jg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Si;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cC(this,e)}reload(){return fC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await mo(this,uC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:N,isAnonymous:F,providerData:j,stsTokenManager:v}=n;K(k&&v,e,"internal-error");const y=Si.fromJSON(this.name,v);K(typeof k=="string",e,"internal-error"),Ln(p,e.name),Ln(g,e.name),K(typeof N=="boolean",e,"internal-error"),K(typeof F=="boolean",e,"internal-error"),Ln(A,e.name),Ln(C,e.name),Ln(D,e.name),Ln(b,e.name),Ln(I,e.name),Ln(w,e.name);const _=new En({uid:k,auth:e,email:g,emailVerified:N,displayName:p,isAnonymous:F,photoURL:C,phoneNumber:A,tenantId:D,stsTokenManager:y,createdAt:I,lastLoginAt:w});return j&&Array.isArray(j)&&(_.providerData=j.map(T=>Object.assign({},T))),b&&(_._redirectEventId=b),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Si;l.updateFromIdToken(r);const u=new En({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Map;function wn(t){xn(t instanceof Function,"Expected a class definition");let e=Ug.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ug.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sE.type="NONE";const zg=sE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ua(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ua("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(wn(zg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||wn(zg);const o=Ua(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=En._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ai(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hE(e))return"Blackberry";if(dE(e))return"Webos";if(aE(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(cE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oE(t=rt()){return/firefox\//i.test(t)}function aE(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=rt()){return/crios\//i.test(t)}function uE(t=rt()){return/iemobile/i.test(t)}function cE(t=rt()){return/android/i.test(t)}function hE(t=rt()){return/blackberry/i.test(t)}function dE(t=rt()){return/webos/i.test(t)}function Tf(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yC(t=rt()){var e;return Tf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _C(){return XI()&&document.documentMode===10}function fE(t=rt()){return Tf(t)||cE(t)||dE(t)||hE(t)||/windows phone/i.test(t)||uE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e=[]){let n;switch(t){case"Browser":n=Bg(rt());break;case"Worker":n=`${Bg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e={}){return yr(t,"GET","/v2/passwordPolicy",Gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6;class TC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $g(this),this.idTokenSubscription=new $g(this),this.beforeStateQueue=new vC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rE(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(or(this));const n=e?Pe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EC(this),n=new TC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yi(t){return Pe(t)}class $g{constructor(e){this.auth=e,this.observer=null,this.addObserver=s1(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SC(t){fu=t}function mE(t){return fu.loadJS(t)}function AC(){return fu.recaptchaEnterpriseScript}function kC(){return fu.gapiScript}function RC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CC="recaptcha-enterprise",PC="NO_RECAPTCHA";class xC{constructor(e){this.type=CC,this.auth=Yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{lC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new aC(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Fg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(PC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=AC();u.length!==0&&(u+=l),mE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Wg(t,e,n,r=!1){const i=new xC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e){const n=Ql(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pl(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function DC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OC(t,e,n){const r=Yi(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=gE(e),{host:o,port:l}=bC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),VC()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bC(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qg(o)}}}function qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function LC(t,e){return yr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e){return du(t,"POST","/v1/accounts:signInWithPassword",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return du(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}async function jC(t,e){return du(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends If{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hg(e,n,"signInWithPassword",MC);case"emailLink":return FC(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hg(e,r,"signUpPassword",LC);case"emailLink":return jC(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e){return du(t,"POST","/v1/accounts:signInWithIdp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="http://localhost";class Br extends If{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:UC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(t){const e=Ss(As(t)).link,n=e?Ss(As(e)).deep_link_id:null,r=Ss(As(t)).deep_link_id;return(r?Ss(As(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,i,s,o,l;const u=Ss(As(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=zC((i=u.mode)!==null&&i!==void 0?i:null);K(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=BC(e);try{return new Sf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return K(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends yE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends No{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends No{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends No{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=Kg(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kg(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends on{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pl(e,n,r,i)}}function _E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pl._fromErrorAndOperation(t,s,e,r):s})}async function $C(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e,n=!1){const{auth:r}=t;if(_n(r.app))return Promise.reject(or(r));const i="reauthenticate";try{const s=await mo(t,_E(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=wf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e,n=!1){if(_n(t.app))return Promise.reject(or(t));const r="signIn",i=await _E(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function HC(t,e){return vE(Yi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t){const e=Yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function KC(t,e,n){return _n(t.app)?Promise.reject(or(t)):HC(Pe(t),Xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qC(t),r})}function GC(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function QC(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function YC(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function XC(t){return Pe(t).signOut()}const xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=1e3,ZC=10;class wE extends EE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_C()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wE.type="LOCAL";const eP=wE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE extends EE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TE.type="SESSION";const IE=TE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await tP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Af("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function rP(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function iP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oP(){return SE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebaseLocalStorageDb",aP=1,Nl="firebaseLocalStorage",kE="fbase_key";class Do{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([Nl],e?"readwrite":"readonly").objectStore(Nl)}function lP(){const t=indexedDB.deleteDatabase(AE);return new Do(t).toPromise()}function Uh(){const t=indexedDB.open(AE,aP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nl,{keyPath:kE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nl)?e(r):(r.close(),await lP(),e(await Uh()))})})}async function Gg(t,e,n){const r=mu(t,!0).put({[kE]:e,value:n});return new Do(r).toPromise()}async function uP(t,e){const n=mu(t,!1).get(e),r=await new Do(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=mu(t,!0).delete(e);return new Do(n).toPromise()}const cP=800,hP=3;class RE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return SE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance(oP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iP(),!this.activeServiceWorker)return;this.sender=new nP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uh();return await Gg(e,xl,"1"),await Qg(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mu(i,!1).getAll();return new Do(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RE.type="LOCAL";const dP=RE;new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){return e?wn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends If{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pP(t){return vE(t.auth,new kf(t),t.bypassAuthState)}function mP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),WC(n,new kf(t),t.bypassAuthState)}async function gP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),$C(n,new kf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pP;case"linkViaPopup":case"linkViaRedirect":return gP;case"reauthViaPopup":case"reauthViaRedirect":return mP;default:Wt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new xo(2e3,1e4);class gi extends CE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yP.get())};e()}}gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="pendingRedirect",za=new Map;class vP extends CE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const r=await EP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EP(t,e){const n=IP(e),r=TP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wP(t,e){za.set(t._key(),e)}function TP(t){return wn(t._redirectPersistence)}function IP(t){return Ua(_P,t.config.apiKey,t.name)}async function SP(t,e,n=!1){if(_n(t.app))return Promise.reject(or(t));const r=Yi(t),i=fP(r,e),o=await new vP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=10*60*1e3;class kP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e={}){return yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xP=/^https?/;async function NP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CP(t);for(const n of e)try{if(DP(n))return}catch{}Wt(t,"unauthorized-domain")}function DP(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xP.test(n))return!1;if(PP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new xo(3e4,6e4);function Xg(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bP(t){return new Promise((e,n)=>{var r,i,s;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(en(t,"network-request-failed"))},timeout:OP.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=RC("iframefcb");return tn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},mE(`${kC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function VP(t){return Ba=Ba||bP(t),Ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new xo(5e3,15e3),MP="__/auth/iframe",FP="emulator/auth/iframe",jP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ef(e,FP):`https://${t.config.authDomain}/${MP}`,r={apiKey:e.apiKey,appName:t.name,v:Hr},i=UP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Io(r).slice(1)}`}async function BP(t){const e=await VP(t),n=tn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:zP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},LP.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WP=500,HP=600,qP="_blank",KP="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=WP,i=HP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},$P),{width:r.toString(),height:i.toString(),top:s,left:o}),h=rt().toLowerCase();n&&(l=lE(h)?qP:n),oE(h)&&(e=e||KP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,C])=>`${g}${A}=${C},`,"");if(yC(h)&&l!=="_self")return QP(e||"",l),new Jg(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Jg(p)}function QP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="__/auth/handler",XP="emulator/auth/handler",JP=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hr,eventId:i};if(e instanceof yE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",i1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof No){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${JP}=${encodeURIComponent(u)}`:"";return`${ZP(t)}?${Io(l).slice(1)}${h}`}function ZP({config:t}){return t.emulator?Ef(t,XP):`https://${t.authDomain}/${YP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class ex{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IE,this._completeRedirectFn=SP,this._overrideRedirectResult=wP}async _openPopup(e,n,r,i){var s;xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,Fh(),i);return GP(e,o,Af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,Fh(),i);return rP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BP(e),r=new kP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sc];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fE()||aE()||Tf()}}const tx=ex;var ey="@firebase/auth",ty="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ix(t){Fr(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(t)},h=new IC(r,i,s,u);return DC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new ur("auth-internal",e=>{const n=Yi(e.getProvider("auth").getImmediate());return(r=>new nx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(ey,ty,rx(t)),Xt(ey,ty,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=5*60,ox=Iv("authIdTokenMaxAge")||sx;let ny=null;const ax=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ox)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lx(t=Fd()){const e=Ql(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NC(t,{popupRedirectResolver:tx,persistence:[dP,eP,IE]}),r=Iv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ax(s.toString());QC(n,o,()=>o(n.currentUser)),GC(n,l=>o(l))}}const i=Ev("auth");return i&&OC(n,`http://${i}`),n}function ux(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ux().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ix("Browser");const cx={apiKey:"AIzaSyAFYtOo_23sBn-5-C0VGTaITHXtYnfPexQ",authDomain:"growcrm-highpro.firebaseapp.com",projectId:"growcrm-highpro",storageBucket:"growcrm-highpro.firebasestorage.app",messagingSenderId:"382190286267",appId:"1:382190286267:web:be784fc9415801a5ae409e"},Rf=Rv(cx),ei=sR(Rf);GR(Rf);const zh=lx(Rf),hx="382190286267-tr23lvv8bug5540csvmaffv296ck4vbt.apps.googleusercontent.com",dx="https://www.googleapis.com/auth/calendar";let ry=null,gu=null;function fx(){return new Promise(t=>{var n,r;if((r=(n=window.google)==null?void 0:n.accounts)!=null&&r.oauth2)return t();const e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.onload=t,document.body.appendChild(e)})}async function px(){return await fx(),new Promise((t,e)=>{ry=window.google.accounts.oauth2.initTokenClient({client_id:hx,scope:dx,callback:n=>{if(n.error)return e(n);gu=n.access_token,localStorage.setItem("g_token",n.access_token),localStorage.setItem("g_token_expiry",String(Date.now()+n.expires_in*1e3)),t(n.access_token)}}),ry.requestAccessToken()})}function xE(){const t=localStorage.getItem("g_token"),e=Number(localStorage.getItem("g_token_expiry")||0);return t&&Date.now()<e?(gu=t,t):null}async function mx(t,e){const n=gu||xE();if(!n)return{needsAuth:!0,events:[]};const r=t.toISOString(),i=e.toISOString();try{const s=await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(r)}&timeMax=${encodeURIComponent(i)}&singleEvents=true&orderBy=startTime`,{headers:{Authorization:`Bearer ${n}`}});return s.status===401?(localStorage.removeItem("g_token"),{needsAuth:!0,events:[]}):{needsAuth:!1,events:((await s.json()).items||[]).map(u=>{var h,f,p;return{id:u.id,title:u.summary||"(Sin título)",time:(h=u.start)!=null&&h.dateTime?new Date(u.start.dateTime).toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}):"Todo el día",location:u.location||"",description:u.description||"",start:((f=u.start)==null?void 0:f.dateTime)||((p=u.start)==null?void 0:p.date)}})}}catch{return{needsAuth:!1,events:[]}}}async function gx({title:t,description:e,location:n,startDateTime:r,endDateTime:i}){const s=gu||xE();if(!s)return{error:"needsAuth"};try{return await(await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({summary:t,description:e,location:n,start:{dateTime:r,timeZone:"America/Argentina/Buenos_Aires"},end:{dateTime:i,timeZone:"America/Argentina/Buenos_Aires"}})})).json()}catch(o){return{error:o.message}}}const Gt={hot:{label:"Caliente",color:"#FF4D4D",bg:"#2A0A0A",bar:100},warm:{label:"Tibio",color:"#FF9A3C",bg:"#2A1A0A",bar:60},cold:{label:"Frío",color:"#4DB8FF",bg:"#0A1A2A",bar:25}},Oo={grow_shop:"Grow Shop",distribuidor:"Distribuidor",consumidor:"Consumidor"};function yx(){const[t,e]=Q.useState([]),[n,r]=Q.useState(!0),i=Q.useRef(!1);Q.useEffect(()=>{const u=vR(iR(ei,"clients"),async h=>{if(h.empty&&!i.current){i.current=!0;try{const g=await(await fetch("/clients_data.json")).json(),A=TR(ei);g.forEach(C=>{A.set(va(ei,"clients",String(C.id)),C)}),await A.commit()}catch(p){console.error("Error seeding clients:",p)}r(!1);return}const f=h.docs.map(p=>p.data());e(f),r(!1)});return()=>u()},[]);async function s(u){try{await Ng(va(ei,"clients",String(u.id)),u)}catch(h){console.error("Error updating client:",h)}}async function o(u){try{await Ng(va(ei,"clients",String(u.id)),u)}catch(h){console.error("Error adding client:",h)}}async function l(u){try{await _R(va(ei,"clients",String(u)))}catch(h){console.error("Error deleting client:",h)}}return{clients:t,loading:n,updateClient:s,addClient:o,deleteClient:l}}const Me=({d:t,size:e=20,color:n="currentColor",fill:r="none"})=>E.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:r,stroke:n,strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:Array.isArray(t)?t.map((i,s)=>E.jsx("path",{d:i},s)):E.jsx("path",{d:t})}),Ne={calendar:"M8 2v3M16 2v3M3 9h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",clients:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",plus:"M12 5v14M5 12h14",back:"M19 12H5M12 19l-7-7 7-7",whatsapp:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",camera:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8",map:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6",trash:"M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"};function NE(t,e){return t?/^https?:\/\//i.test(t.trim())?t.trim():`https://maps.google.com/?q=${encodeURIComponent(t)}`:`https://maps.google.com/?q=${encodeURIComponent(e)}`}function Ri({status:t}){const e=Gt[t];return E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[E.jsxs("div",{style:{position:"relative",width:10,height:28},children:[E.jsx("div",{style:{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:4,height:28,background:"#1E2E1F",borderRadius:4}}),E.jsx("div",{style:{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:4,height:`${e.bar*.28}px`,background:e.color,borderRadius:4,transition:"height 0.4s ease"}}),E.jsx("div",{style:{position:"absolute",bottom:-4,left:"50%",transform:"translateX(-50%)",width:10,height:10,borderRadius:"50%",background:e.color}})]}),E.jsx("span",{style:{fontSize:11,fontWeight:600,color:e.color,letterSpacing:"0.04em",textTransform:"uppercase"},children:e.label})]})}function _x({clients:t,initialDate:e,onClose:n,onSaved:r}){const[i,s]=Q.useState(""),[o,l]=Q.useState(null),[u,h]=Q.useState(e.toISOString().split("T")[0]),[f,p]=Q.useState("10:00"),[g,A]=Q.useState(30),[C,D]=Q.useState(""),[b,I]=Q.useState(!1),w=t.filter(N=>N.name.toLowerCase().includes(i.toLowerCase())).slice(0,8);async function k(){if(!o)return;I(!0);const N=new Date(`${u}T${f}:00`),F=new Date(N.getTime()+g*6e4),j=await gx({title:`Visita ${Oo[o.type]||"Grow"}: ${o.name}`,description:C,location:o.address||"",startDateTime:N.toISOString(),endDateTime:F.toISOString()});I(!1),j.error||r()}return E.jsxs("div",{style:{position:"fixed",inset:0,background:"#0D1F0F",zIndex:200,display:"flex",flexDirection:"column"},children:[E.jsxs("div",{style:{padding:"16px 16px 0",display:"flex",alignItems:"center",gap:12},children:[E.jsx("button",{onClick:n,style:{background:"none",border:"none",color:"#7AE84A",cursor:"pointer",padding:4},children:E.jsx(Me,{d:Ne.back,size:22})}),E.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#F2F5EE"},children:"Agendar visita"})]}),E.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 16px 100px"},children:[E.jsxs("div",{style:{marginBottom:18},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Cliente"}),o?E.jsxs("div",{style:{background:"#0A2A10",border:"1px solid #7AE84A",borderRadius:10,padding:12,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsx("span",{style:{color:"#7AE84A",fontSize:13,fontWeight:600},children:o.name}),E.jsx("button",{onClick:()=>l(null),style:{background:"none",border:"none",color:"#4A6B4C",cursor:"pointer",fontSize:12},children:"Cambiar"})]}):E.jsxs(E.Fragment,{children:[E.jsx("input",{value:i,onChange:N=>s(N.target.value),placeholder:"Buscar cliente...",style:{width:"100%",background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:"11px 14px",fontFamily:"inherit",outline:"none",boxSizing:"border-box",marginBottom:8}}),i&&E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,maxHeight:200,overflowY:"auto"},children:w.map(N=>E.jsx("div",{onClick:()=>{l(N),s("")},style:{background:"#1E2E1F",borderRadius:8,padding:"10px 12px",cursor:"pointer",fontSize:13,color:"#F2F5EE"},children:N.name},N.id))})]})]}),E.jsxs("div",{style:{display:"flex",gap:10,marginBottom:18},children:[E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Fecha"}),E.jsx("input",{type:"date",value:u,onChange:N=>h(N.target.value),style:{width:"100%",background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:13,padding:"11px 10px",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}})]}),E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Hora"}),E.jsx("input",{type:"time",value:f,onChange:N=>p(N.target.value),style:{width:"100%",background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:13,padding:"11px 10px",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}})]})]}),E.jsxs("div",{style:{marginBottom:18},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Duración"}),E.jsx("div",{style:{display:"flex",gap:8},children:[15,30,45,60].map(N=>E.jsxs("button",{onClick:()=>A(N),style:{flex:1,padding:"9px 0",borderRadius:8,border:`2px solid ${g===N?"#7AE84A":"#2E4A30"}`,background:g===N?"#0A2A10":"#1E2E1F",color:g===N?"#7AE84A":"#4A6B4C",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},children:[N," min"]},N))})]}),E.jsxs("div",{style:{marginBottom:18},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Notas (opcional)"}),E.jsx("textarea",{value:C,onChange:N=>D(N.target.value),placeholder:"Motivo de la visita...",style:{width:"100%",minHeight:70,background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:14,resize:"none",fontFamily:"inherit",boxSizing:"border-box",outline:"none"}})]})]}),E.jsx("div",{style:{padding:"12px 16px",background:"#0D1F0F",borderTop:"1px solid #1E2E1F"},children:E.jsx("button",{onClick:k,disabled:!o||b,style:{width:"100%",padding:"14px 0",borderRadius:12,background:o&&!b?"#7AE84A":"#1E2E1F",color:o&&!b?"#0D1F0F":"#2E4A30",border:"none",fontSize:15,fontWeight:700,cursor:o&&!b?"pointer":"not-allowed",fontFamily:"inherit"},children:b?"Agendando...":"Agendar en Google Calendar"})})]})}function vx({clients:t,onClientSelect:e}){const[n,r]=Q.useState([]),[i,s]=Q.useState(!0),[o,l]=Q.useState(!1),[u,h]=Q.useState(!1),[f,p]=Q.useState(0),[g,A]=Q.useState(!1),C=new Date;C.setDate(C.getDate()+f);function D(){s(!0);const _=new Date(C);_.setHours(0,0,0,0);const T=new Date(C);T.setHours(23,59,59,999),mx(_,T).then(({needsAuth:R,events:P})=>{l(R),r(P),s(!1)})}Q.useEffect(()=>{D()},[f]);async function b(){h(!0);try{await px(),D()}catch{h(!1)}h(!1)}const I=C.toLocaleDateString("es-AR",{weekday:"long",day:"numeric",month:"long"}),w=f===0?"Recorrida de hoy":f<0?`Hace ${Math.abs(f)} día${Math.abs(f)>1?"s":""}`:`En ${f} día${f>1?"s":""}`,k=["grow","cliente","distribuidor","mayorista","ong","club"],N=n.filter(_=>{const T=(_.title||"").toLowerCase();return k.some(R=>T.includes(R))}).map(_=>{const T=(_.title||"").toLowerCase().split(/\s+/).map(S=>S.replace(/[^\wáéíóúñ]/g,"")).filter(S=>S.length>=4);let R=null,P=0;for(const S of t){const ct=S.name.toLowerCase().split(/\s+/).map(ht=>ht.replace(/[^\wáéíóúñ]/g,"")).filter(ht=>ht.length>=4).filter(ht=>T.includes(ht)).length;ct>P&&(P=ct,R=S)}return{..._,client:P>0?R:null}}).filter(_=>_.client),F=N.filter(_=>_.client.address);function j(_){const T=_.filter(pe=>pe.client.lat&&pe.client.lng),R=_.filter(pe=>!pe.client.lat||!pe.client.lng);if(T.length<=1)return[...T,...R];const P=[T[0]],S=T.slice(1);for(;S.length>0;){const pe=P[P.length-1];let ct=0,ht=1/0;S.forEach((Ct,z)=>{const q=DE(pe.client.lat,pe.client.lng,Ct.client.lat,Ct.client.lng);q<ht&&(ht=q,ct=z)}),P.push(S[ct]),S.splice(ct,1)}return[...P,...R]}const v=j(F);function y(){const _=v.map(P=>{const S=P.client.address.trim(),pe=/^https?:\/\//i.test(S);return encodeURIComponent(pe?P.client.name:S)});if(_.length===0)return null;if(_.length===1)return`https://maps.google.com/?q=${_[0]}`;const T=_[_.length-1],R=_.slice(0,-1).join("|");return`https://www.google.com/maps/dir/?api=1&destination=${T}&waypoints=${R}&travelmode=driving`}return g?E.jsx(_x,{clients:t,initialDate:C,onClose:()=>A(!1),onSaved:()=>{A(!1),D()}}):E.jsxs("div",{style:{padding:"0 16px 100px"},children:[E.jsxs("div",{style:{paddingTop:24,paddingBottom:16,display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:11,color:"#7AE84A",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em"},children:w}),E.jsx("div",{style:{fontSize:22,fontWeight:700,color:"#F2F5EE",textTransform:"capitalize",marginTop:2},children:I})]}),!o&&E.jsxs("button",{onClick:()=>A(!0),style:{background:"#7AE84A",border:"none",borderRadius:10,padding:"8px 12px",color:"#0D1F0F",fontSize:12,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontFamily:"inherit"},children:[E.jsx(Me,{d:Ne.plus,size:14,color:"#0D1F0F"})," Agendar"]})]}),F.length>=2&&E.jsxs("a",{href:y(),target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"#0A2A10",border:"1px solid #7AE84A",borderRadius:10,padding:"11px 0",color:"#7AE84A",fontSize:13,fontWeight:700,textDecoration:"none",marginBottom:16},children:[E.jsx(Me,{d:Ne.map,size:16})," Ver recorrido completo (",F.length," paradas)"]}),E.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[E.jsx("button",{onClick:()=>p(_=>_-1),style:{flex:1,background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:8,padding:"8px 0",color:"#7AE84A",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},children:"← Anterior"}),f!==0&&E.jsx("button",{onClick:()=>p(0),style:{background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:8,padding:"8px 14px",color:"#4A6B4C",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},children:"Hoy"}),E.jsx("button",{onClick:()=>p(_=>_+1),style:{flex:1,background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:8,padding:"8px 0",color:"#7AE84A",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},children:"Siguiente →"})]}),o?E.jsxs("div",{style:{background:"#1E2E1F",borderRadius:12,padding:24,textAlign:"center"},children:[E.jsx("div",{style:{fontSize:13,color:"#F2F5EE",marginBottom:4,fontWeight:600},children:"Conectá tu Google Calendar"}),E.jsx("div",{style:{fontSize:12,color:"#4A6B4C",marginBottom:16},children:"Para ver y agendar visitas directamente desde la app"}),E.jsx("button",{onClick:b,disabled:u,style:{background:"#7AE84A",border:"none",borderRadius:10,padding:"12px 24px",color:"#0D1F0F",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},children:u?"Conectando...":"Conectar Google Calendar"})]}):i?E.jsx("div",{style:{textAlign:"center",padding:40,color:"#4A6B4C"},children:E.jsx("div",{style:{fontSize:13},children:"Cargando calendario…"})}):N.length===0?E.jsx("div",{style:{background:"#1E2E1F",borderRadius:12,padding:20,textAlign:"center"},children:E.jsx("div",{style:{fontSize:13,color:"#4A6B4C"},children:"No hay visitas agendadas"})}):E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:N.map((_,T)=>E.jsxs("div",{onClick:()=>_.client&&e(_.client),style:{background:"#1E2E1F",borderRadius:12,padding:16,cursor:_.client?"pointer":"default",border:`1px solid ${_.client?"#2E4A30":"#1A2A1B"}`,transition:"border-color 0.2s"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#F2F5EE"},children:_.title}),_.time&&E.jsx("div",{style:{fontSize:11,color:"#7AE84A",marginTop:2},children:_.time}),_.location&&E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",marginTop:2},children:_.location})]}),_.client&&E.jsx(Ri,{status:_.client.status})]}),_.client&&E.jsxs("div",{style:{marginTop:10,paddingTop:10,borderTop:"1px solid #2E4A30",display:"flex",gap:8},children:[E.jsxs("a",{href:`https://wa.me/${_.client.phone}`,target:"_blank",rel:"noreferrer",onClick:R=>R.stopPropagation(),style:{flex:1,background:"#0A2A10",color:"#7AE84A",border:"1px solid #2E4A30",borderRadius:8,padding:"7px 0",fontSize:12,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:5},children:[E.jsx(Me,{d:Ne.whatsapp,size:14})," WhatsApp"]}),E.jsxs("a",{href:NE(_.client.address,_.client.name),target:"_blank",rel:"noreferrer",onClick:R=>R.stopPropagation(),style:{flex:1,background:"#0A2A10",color:"#7AE84A",border:"1px solid #2E4A30",borderRadius:8,padding:"7px 0",fontSize:12,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:5},children:[E.jsx(Me,{d:Ne.map,size:14})," Maps"]})]})]},T))}),E.jsxs("div",{style:{marginTop:24},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10},children:"Clientes activos"}),E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:t.slice(0,3).map(_=>E.jsxs("div",{onClick:()=>e(_),style:{background:"#1E2E1F",borderRadius:10,padding:"12px 14px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#F2F5EE"},children:_.name}),E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",marginTop:1},children:Oo[_.type]})]}),E.jsx(Ri,{status:_.status})]},_.id))})]})]})}function Ex({client:t,onSave:e,onClose:n}){const[r,i]=Q.useState(""),[s,o]=Q.useState(t.status),[l,u]=Q.useState([]),h=Q.useRef();function f(g){Array.from(g.target.files).forEach(C=>{const D=new FileReader;D.onload=b=>u(I=>[...I,b.target.result]),D.readAsDataURL(C)})}function p(){if(!r.trim())return;const g={id:Date.now(),date:new Date().toLocaleDateString("es-AR"),notes:r,status:s,photos:l};e(g,s)}return E.jsxs("div",{style:{position:"fixed",inset:0,background:"#0D1F0F",zIndex:200,display:"flex",flexDirection:"column"},children:[E.jsxs("div",{style:{padding:"16px 16px 0",display:"flex",alignItems:"center",gap:12},children:[E.jsx("button",{onClick:n,style:{background:"none",border:"none",color:"#7AE84A",cursor:"pointer",padding:4},children:E.jsx(Me,{d:Ne.back,size:22})}),E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#F2F5EE"},children:"Nueva visita"}),E.jsx("div",{style:{fontSize:11,color:"#4A6B4C"},children:t.name})]})]}),E.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 16px 100px"},children:[E.jsxs("div",{style:{marginBottom:20},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10},children:"Estado del cliente"}),E.jsx("div",{style:{display:"flex",gap:8},children:["cold","warm","hot"].map(g=>E.jsx("button",{onClick:()=>o(g),style:{flex:1,padding:"10px 0",borderRadius:10,border:`2px solid ${s===g?Gt[g].color:"#2E4A30"}`,background:s===g?Gt[g].bg:"#1E2E1F",color:s===g?Gt[g].color:"#4A6B4C",fontSize:12,fontWeight:700,cursor:"pointer",transition:"all 0.2s"},children:Gt[g].label},g))})]}),E.jsxs("div",{style:{marginBottom:20},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10},children:"Notas de la visita"}),E.jsx("textarea",{value:r,onChange:g=>i(g.target.value),placeholder:"¿Qué se habló? ¿Qué pidieron? ¿Próximos pasos?",style:{width:"100%",minHeight:120,background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:14,resize:"none",fontFamily:"inherit",boxSizing:"border-box",outline:"none"}})]}),E.jsxs("div",{style:{marginBottom:24},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10},children:"Fotos"}),E.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[l.map((g,A)=>E.jsxs("div",{style:{position:"relative"},children:[E.jsx("img",{src:g,alt:"",style:{width:80,height:80,borderRadius:8,objectFit:"cover",border:"1px solid #2E4A30"}}),E.jsx("button",{onClick:()=>u(C=>C.filter((D,b)=>b!==A)),style:{position:"absolute",top:-6,right:-6,background:"#FF4D4D",border:"none",borderRadius:"50%",width:20,height:20,color:"white",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0},children:"×"})]},A)),E.jsxs("button",{onClick:()=>h.current.click(),style:{width:80,height:80,borderRadius:8,border:"2px dashed #2E4A30",background:"#1E2E1F",color:"#4A6B4C",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4},children:[E.jsx(Me,{d:Ne.camera,size:20}),E.jsx("span",{style:{fontSize:10},children:"Agregar"})]}),E.jsx("input",{ref:h,type:"file",accept:"image/*",multiple:!0,onChange:f,style:{display:"none"}})]})]})]}),E.jsx("div",{style:{padding:"12px 16px",background:"#0D1F0F",borderTop:"1px solid #1E2E1F"},children:E.jsx("button",{onClick:p,disabled:!r.trim(),style:{width:"100%",padding:"14px 0",borderRadius:12,background:r.trim()?"#7AE84A":"#1E2E1F",color:r.trim()?"#0D1F0F":"#2E4A30",border:"none",fontSize:15,fontWeight:700,cursor:r.trim()?"pointer":"not-allowed",transition:"all 0.2s",fontFamily:"inherit"},children:"Guardar visita"})})]})}function DE(t,e,n,r){const s=(n-t)*Math.PI/180,o=(r-e)*Math.PI/180,l=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}function wx(t,e,n=3,r=2){return!t.lat||!t.lng?[]:e.filter(i=>i.id!==t.id&&i.lat&&i.lng).map(i=>({...i,distanciaKm:DE(t.lat,t.lng,i.lat,i.lng)})).filter(i=>i.distanciaKm<=r).sort((i,s)=>i.distanciaKm-s.distanciaKm).slice(0,n)}function Tx({client:t,onBack:e,onUpdate:n,allClients:r,onDelete:i}){var F,j;const[s,o]=Q.useState(!1),l=r?wx(t,r,3):[],[u,h]=Q.useState(!1),[f,p]=Q.useState(!1),[g,A]=Q.useState(t.address||""),[C,D]=Q.useState(!1),[b,I]=Q.useState(t.instagram||"");function w(v,y){const _={...t,status:y,visits:[v,...t.visits||[]]};n(_),h(!1)}function k(){n({...t,address:g.trim()}),p(!1)}function N(){n({...t,instagram:b.trim()}),D(!1)}return u?E.jsx(Ex,{client:t,onSave:w,onClose:()=>h(!1)}):(Gt[t.status],E.jsxs("div",{style:{position:"fixed",inset:0,background:"#0D1F0F",zIndex:100,display:"flex",flexDirection:"column",overflowY:"auto"},children:[E.jsxs("div",{style:{background:"#1E2E1F",padding:"16px 16px 20px"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[E.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"#7AE84A",cursor:"pointer",padding:4},children:E.jsx(Me,{d:Ne.back,size:22})}),E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:Oo[t.type]})]}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[E.jsxs("div",{style:{flex:1,marginRight:12},children:[E.jsx("div",{style:{fontSize:20,fontWeight:700,color:"#F2F5EE",lineHeight:1.2},children:t.name}),t.phone_display&&E.jsx("div",{style:{fontSize:12,color:"#7AE84A",marginTop:4},children:t.phone_display}),f?E.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[E.jsx("input",{value:g,onChange:v=>A(v.target.value),placeholder:"Pegá el link de Maps o la dirección",style:{flex:1,background:"#0D1F0F",border:"1px solid #2E4A30",borderRadius:6,color:"#F2F5EE",fontSize:12,padding:"6px 8px",fontFamily:"inherit",outline:"none"}}),E.jsx("button",{onClick:k,style:{background:"#7AE84A",border:"none",borderRadius:6,padding:"0 10px",color:"#0D1F0F",fontWeight:700,fontSize:12,cursor:"pointer"},children:"OK"})]}):E.jsx("div",{onClick:()=>p(!0),style:{fontSize:12,color:t.address?"#4A6B4C":"#FF9A3C",marginTop:2,cursor:"pointer",textDecoration:t.address?"none":"underline"},children:t.address||"Sin dirección · tocá para agregar"}),C?E.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[E.jsx("input",{value:b,onChange:v=>I(v.target.value),placeholder:"Pegá el link de Instagram",style:{flex:1,background:"#0D1F0F",border:"1px solid #2E4A30",borderRadius:6,color:"#F2F5EE",fontSize:12,padding:"6px 8px",fontFamily:"inherit",outline:"none"}}),E.jsx("button",{onClick:N,style:{background:"#7AE84A",border:"none",borderRadius:6,padding:"0 10px",color:"#0D1F0F",fontWeight:700,fontSize:12,cursor:"pointer"},children:"OK"})]}):E.jsx("div",{onClick:()=>D(!0),style:{fontSize:12,color:t.instagram?"#4A6B4C":"#FF9A3C",marginTop:2,cursor:"pointer",textDecoration:t.instagram?"none":"underline"},children:t.instagram||"Sin Instagram · tocá para agregar"})]}),E.jsx(Ri,{status:t.status})]}),E.jsxs("div",{style:{display:"flex",gap:8,marginTop:16},children:[E.jsxs("a",{href:`https://wa.me/${t.phone}`,target:"_blank",rel:"noreferrer",style:{flex:1,background:"#0A2A10",color:"#7AE84A",border:"1px solid #2E4A30",borderRadius:10,padding:"10px 0",fontSize:12,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[E.jsx(Me,{d:Ne.whatsapp,size:16})," WhatsApp"]}),E.jsxs("a",{href:NE(t.address,t.name),target:"_blank",rel:"noreferrer",style:{flex:1,background:"#0A2A10",color:"#7AE84A",border:"1px solid #2E4A30",borderRadius:10,padding:"10px 0",fontSize:12,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[E.jsx(Me,{d:Ne.map,size:16})," ",t.address?"Maps":"Buscar ubicación"]}),E.jsxs("button",{onClick:()=>h(!0),style:{flex:1,background:"#7AE84A",color:"#0D1F0F",border:"none",borderRadius:10,padding:"10px 0",fontSize:12,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontFamily:"inherit"},children:[E.jsx(Me,{d:Ne.plus,size:16,color:"#0D1F0F"})," Visita"]})]}),E.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.lat&&t.lng&&E.jsxs("button",{onClick:()=>o(!0),style:{flex:1,background:"#0A2A10",color:"#7AE84A",border:"1px solid #2E4A30",borderRadius:10,padding:"9px 0",fontSize:12,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontFamily:"inherit"},children:[E.jsx(Me,{d:Ne.map,size:14})," Ver cercanos"]}),t.instagram&&E.jsxs("a",{href:t.instagram,target:"_blank",rel:"noreferrer",style:{flex:1,background:"#0A2A10",color:"#7AE84A",border:"1px solid #2E4A30",borderRadius:10,padding:"9px 0",fontSize:12,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[E.jsx(Me,{d:Ne.camera,size:14})," Instagram"]})]}),E.jsxs("button",{onClick:()=>{window.confirm(`¿Eliminar a "${t.name}"? Esta acción no se puede deshacer.`)&&(i(t.id),e())},style:{width:"100%",marginTop:8,background:"none",border:"1px solid #4A1A1A",color:"#FF6B6B",borderRadius:10,padding:"9px 0",fontSize:12,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontFamily:"inherit"},children:[E.jsx(Me,{d:Ne.trash,size:14})," Eliminar cliente"]})]}),s&&E.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,display:"flex",alignItems:"flex-end"},onClick:()=>o(!1),children:E.jsxs("div",{onClick:v=>v.stopPropagation(),style:{background:"#1E2E1F",borderRadius:"16px 16px 0 0",padding:"20px 16px 32px",width:"100%",maxWidth:430,margin:"0 auto"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[E.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#F2F5EE"},children:"Clientes cercanos"}),E.jsx("button",{onClick:()=>o(!1),style:{background:"none",border:"none",color:"#4A6B4C",fontSize:18,cursor:"pointer"},children:"×"})]}),l.length===0?E.jsx("div",{style:{fontSize:13,color:"#4A6B4C",textAlign:"center",padding:20},children:"No hay otros clientes con ubicación cercana"}):E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:l.map(v=>E.jsxs("div",{style:{background:"#0D1F0F",borderRadius:10,padding:"12px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#F2F5EE"},children:v.name}),E.jsxs("div",{style:{fontSize:11,color:"#4A6B4C",marginTop:2},children:[v.distanciaKm.toFixed(1)," km"]})]}),E.jsx(Ri,{status:v.status})]},v.id))})]})}),E.jsxs("div",{style:{padding:"20px 16px 100px"},children:[t.notes&&E.jsxs("div",{style:{marginBottom:24},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Notas generales"}),E.jsx("div",{style:{background:"#1E2E1F",borderRadius:10,padding:14,fontSize:13,color:"#C8D9C9",lineHeight:1.5},children:t.notes})]}),E.jsxs("div",{children:[E.jsxs("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10},children:["Historial de visitas ",((F=t.visits)==null?void 0:F.length)>0&&`(${t.visits.length})`]}),(j=t.visits)!=null&&j.length?E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:t.visits.map(v=>{var y,_;return E.jsxs("div",{style:{background:"#1E2E1F",borderRadius:12,padding:14},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[E.jsx("div",{style:{fontSize:11,color:"#7AE84A",fontWeight:600},children:v.date}),E.jsx(Ri,{status:v.status})]}),E.jsx("div",{style:{fontSize:13,color:"#C8D9C9",lineHeight:1.5,marginBottom:(y=v.photos)!=null&&y.length?10:0},children:v.notes}),((_=v.photos)==null?void 0:_.length)>0&&E.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginTop:8},children:v.photos.map((T,R)=>E.jsx("img",{src:T,alt:"",style:{width:70,height:70,borderRadius:8,objectFit:"cover",border:"1px solid #2E4A30"}},R))})]},v.id)})}):E.jsxs("div",{style:{background:"#1E2E1F",borderRadius:10,padding:20,textAlign:"center"},children:[E.jsx("div",{style:{fontSize:13,color:"#4A6B4C"},children:"Sin visitas registradas"}),E.jsx("div",{style:{fontSize:11,color:"#2E4A30",marginTop:4},children:'Tocá "+ Visita" para registrar la primera'})]})]})]})]}))}function iy({client:t,onSave:e,onClose:n}){const[r,i]=Q.useState(t||{name:"",type:"grow_shop",phone:"",address:"",status:"cold",notes:""}),s=(o,l)=>i(u=>({...u,[o]:l}));return E.jsxs("div",{style:{position:"fixed",inset:0,background:"#0D1F0F",zIndex:200,display:"flex",flexDirection:"column"},children:[E.jsxs("div",{style:{padding:"16px 16px 0",display:"flex",alignItems:"center",gap:12},children:[E.jsx("button",{onClick:n,style:{background:"none",border:"none",color:"#7AE84A",cursor:"pointer",padding:4},children:E.jsx(Me,{d:Ne.back,size:22})}),E.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#F2F5EE"},children:t?"Editar cliente":"Nuevo cliente"})]}),E.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 16px 100px"},children:[[{label:"Nombre",key:"name",placeholder:"Ej: Green House Grow Shop"},{label:"Teléfono (sin 0 ni 15)",key:"phone",placeholder:"Ej: 1140001111",type:"tel"},{label:"Dirección",key:"address",placeholder:"Ej: Av. Corrientes 1234, CABA"}].map(o=>E.jsxs("div",{style:{marginBottom:16},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:o.label}),E.jsx("input",{value:r[o.key],onChange:l=>s(o.key,l.target.value),placeholder:o.placeholder,type:o.type||"text",style:{width:"100%",background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:"12px 14px",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}})]},o.key)),E.jsxs("div",{style:{marginBottom:16},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Tipo"}),E.jsx("div",{style:{display:"flex",gap:8},children:Object.entries(Oo).map(([o,l])=>E.jsx("button",{onClick:()=>s("type",o),style:{flex:1,padding:"9px 0",borderRadius:8,border:`2px solid ${r.type===o?"#7AE84A":"#2E4A30"}`,background:r.type===o?"#0A2A10":"#1E2E1F",color:r.type===o?"#7AE84A":"#4A6B4C",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},children:l},o))})]}),E.jsxs("div",{style:{marginBottom:16},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Estado inicial"}),E.jsx("div",{style:{display:"flex",gap:8},children:["cold","warm","hot"].map(o=>E.jsx("button",{onClick:()=>s("status",o),style:{flex:1,padding:"9px 0",borderRadius:8,border:`2px solid ${r.status===o?Gt[o].color:"#2E4A30"}`,background:r.status===o?Gt[o].bg:"#1E2E1F",color:r.status===o?Gt[o].color:"#4A6B4C",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},children:Gt[o].label},o))})]}),E.jsxs("div",{style:{marginBottom:16},children:[E.jsx("div",{style:{fontSize:11,color:"#4A6B4C",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:"Notas generales"}),E.jsx("textarea",{value:r.notes,onChange:o=>s("notes",o.target.value),placeholder:"Info relevante del cliente…",style:{width:"100%",minHeight:80,background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:14,resize:"none",fontFamily:"inherit",boxSizing:"border-box",outline:"none"}})]})]}),E.jsx("div",{style:{padding:"12px 16px",background:"#0D1F0F",borderTop:"1px solid #1E2E1F"},children:E.jsx("button",{onClick:()=>e(r),disabled:!r.name.trim(),style:{width:"100%",padding:"14px 0",borderRadius:12,background:r.name.trim()?"#7AE84A":"#1E2E1F",color:r.name.trim()?"#0D1F0F":"#2E4A30",border:"none",fontSize:15,fontWeight:700,cursor:r.name.trim()?"pointer":"not-allowed",fontFamily:"inherit"},children:t?"Guardar cambios":"Agregar cliente"})})]})}function Ix({clients:t,onClientSelect:e,onAddClient:n,onDeleteClient:r}){const[i,s]=Q.useState(""),[o,l]=Q.useState("all"),u=t.filter(h=>{const f=h.name.toLowerCase().includes(i.toLowerCase())||h.address.toLowerCase().includes(i.toLowerCase()),p=o==="all"||h.status===o||h.type===o;return f&&p}).sort((h,f)=>h.name.localeCompare(f.name,"es",{sensitivity:"base"}));return E.jsxs("div",{style:{padding:"0 16px 100px"},children:[E.jsxs("div",{style:{paddingTop:24,paddingBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:11,color:"#7AE84A",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em"},children:"Cartera"}),E.jsxs("div",{style:{fontSize:22,fontWeight:700,color:"#F2F5EE",marginTop:2},children:[t.length," clientes"]})]}),E.jsxs("button",{onClick:n,style:{background:"#7AE84A",border:"none",borderRadius:10,padding:"8px 14px",color:"#0D1F0F",fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontFamily:"inherit"},children:[E.jsx(Me,{d:Ne.plus,size:16,color:"#0D1F0F"})," Nuevo"]})]}),E.jsx("input",{value:i,onChange:h=>s(h.target.value),placeholder:"Buscar cliente…",style:{width:"100%",background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:"11px 14px",fontFamily:"inherit",outline:"none",boxSizing:"border-box",marginBottom:12}}),E.jsx("div",{style:{display:"flex",gap:6,marginBottom:16,overflowX:"auto",paddingBottom:4},children:[{k:"all",label:"Todos"},{k:"hot",label:"🔴 Caliente"},{k:"warm",label:"🟠 Tibio"},{k:"cold",label:"🔵 Frío"},{k:"grow_shop",label:"Grow"},{k:"distribuidor",label:"Distrib."},{k:"consumidor",label:"Consumidor"}].map(h=>E.jsx("button",{onClick:()=>l(h.k),style:{whiteSpace:"nowrap",padding:"6px 12px",borderRadius:20,border:`1px solid ${o===h.k?"#7AE84A":"#2E4A30"}`,background:o===h.k?"#0A2A10":"#1E2E1F",color:o===h.k?"#7AE84A":"#4A6B4C",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},children:h.label},h.k))}),E.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[u.map(h=>{var f,p;return E.jsxs("div",{style:{background:"#1E2E1F",borderRadius:12,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid #1A2A1B"},children:[E.jsxs("div",{onClick:()=>e(h),style:{flex:1,marginRight:12,cursor:"pointer"},children:[E.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#F2F5EE"},children:h.name}),E.jsxs("div",{style:{fontSize:11,color:"#4A6B4C",marginTop:2},children:[Oo[h.type]," · ",((f=h.visits)==null?void 0:f.length)||0," visita",((p=h.visits)==null?void 0:p.length)!==1?"s":""]})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[E.jsx(Ri,{status:h.status}),E.jsx("button",{onClick:()=>{window.confirm(`¿Eliminar a "${h.name}"? Esta acción no se puede deshacer.`)&&r(h.id)},style:{background:"none",border:"none",color:"#4A6B4C",cursor:"pointer",padding:4,display:"flex"},children:E.jsx(Me,{d:Ne.trash,size:16})})]})]},h.id)}),u.length===0&&E.jsx("div",{style:{background:"#1E2E1F",borderRadius:10,padding:20,textAlign:"center"},children:E.jsx("div",{style:{fontSize:13,color:"#4A6B4C"},children:"Sin resultados"})})]})]})}function Sx({onLogin:t}){const[e,n]=Q.useState(""),[r,i]=Q.useState(""),[s,o]=Q.useState(""),[l,u]=Q.useState(!1);async function h(f){f.preventDefault(),o(""),u(!0);try{await KC(zh,e.trim(),r)}catch{o("Email o contraseña incorrectos")}u(!1)}return E.jsxs("div",{style:{background:"#0D1F0F",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,fontFamily:"'Space Grotesk', sans-serif"},children:[E.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');"}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:32},children:[E.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:"#7AE84A"}}),E.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#7AE84A",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Garden Highpro · CRM"})]}),E.jsxs("form",{onSubmit:h,style:{width:"100%",maxWidth:320,display:"flex",flexDirection:"column",gap:14},children:[E.jsx("input",{type:"email",value:e,onChange:f=>n(f.target.value),placeholder:"Email",required:!0,style:{background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:"13px 16px",fontFamily:"inherit",outline:"none"}}),E.jsx("input",{type:"password",value:r,onChange:f=>i(f.target.value),placeholder:"Contraseña",required:!0,style:{background:"#1E2E1F",border:"1px solid #2E4A30",borderRadius:10,color:"#F2F5EE",fontSize:14,padding:"13px 16px",fontFamily:"inherit",outline:"none"}}),s&&E.jsx("div",{style:{color:"#FF4D4D",fontSize:12},children:s}),E.jsx("button",{type:"submit",disabled:l,style:{background:"#7AE84A",color:"#0D1F0F",border:"none",borderRadius:10,padding:"13px 0",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:8},children:l?"Entrando...":"Entrar"})]})]})}function Ax(){const[t,e]=Q.useState(void 0),{clients:n,loading:r,updateClient:i,addClient:s,deleteClient:o}=yx(),[l,u]=Q.useState("today"),[h,f]=Q.useState(null),[p,g]=Q.useState(!1),[A,C]=Q.useState(null);Q.useEffect(()=>{const I=YC(zh,w=>e(w));return()=>I()},[]),Q.useEffect(()=>{if(h){const I=n.find(w=>w.id===h.id);I&&f(I)}},[n]);function D(I){i(I),f(I)}function b(I){const w={...I,id:Date.now(),visits:[]};s(w),g(!1)}return t===void 0?E.jsx("div",{style:{background:"#0D1F0F",minHeight:"100vh"}}):t===null?E.jsx(Sx,{}):r?E.jsxs("div",{style:{background:"#0D1F0F",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:12,fontFamily:"'Space Grotesk', sans-serif"},children:[E.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');"}),E.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#7AE84A"}}),E.jsx("div",{style:{color:"#4A6B4C",fontSize:13},children:"Cargando clientes..."})]}):E.jsxs(E.Fragment,{children:[E.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { background: #0D1F0F; font-family: 'Space Grotesk', sans-serif; }
        ::-webkit-scrollbar { display: none; }
        input::placeholder, textarea::placeholder { color: #2E4A30; }
      `}),E.jsxs("div",{style:{background:"#0D1F0F",minHeight:"100vh",maxWidth:430,margin:"0 auto",fontFamily:"'Space Grotesk', sans-serif",position:"relative"},children:[E.jsx("div",{style:{height:44,background:"#0D1F0F"}}),E.jsxs("div",{style:{padding:"0 16px 4px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[E.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#7AE84A"}}),E.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#4A6B4C",letterSpacing:"0.12em",textTransform:"uppercase"},children:"Garden Highpro · CRM"})]}),E.jsx("button",{onClick:()=>XC(zh),style:{background:"none",border:"none",color:"#2E4A30",fontSize:11,cursor:"pointer",fontFamily:"inherit"},children:"Salir"})]}),E.jsxs("div",{style:{paddingBottom:0},children:[l==="today"&&E.jsx(vx,{clients:n,onClientSelect:f}),l==="clients"&&E.jsx(Ix,{clients:n,onClientSelect:f,onAddClient:()=>g(!0),onDeleteClient:o})]}),E.jsx("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:"#0D1F0F",borderTop:"1px solid #1E2E1F",display:"flex",zIndex:50},children:[{key:"today",label:"Hoy",icon:Ne.calendar},{key:"clients",label:"Clientes",icon:Ne.clients}].map(I=>E.jsxs("button",{onClick:()=>u(I.key),style:{flex:1,padding:"12px 0 20px",background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,color:l===I.key?"#7AE84A":"#2E4A30",transition:"color 0.2s",fontFamily:"inherit"},children:[E.jsx(Me,{d:I.icon,size:22,color:l===I.key?"#7AE84A":"#2E4A30"}),E.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase"},children:I.label})]},I.key))})]}),h&&E.jsx(Tx,{client:h,onBack:()=>f(null),onUpdate:D,allClients:n,onDelete:o}),p&&E.jsx(iy,{onSave:b,onClose:()=>g(!1)}),A&&E.jsx(iy,{client:A,onSave:I=>{D({...A,...I}),C(null)},onClose:()=>C(null)})]})}Ac.createRoot(document.getElementById("root")).render(E.jsx(kw.StrictMode,{children:E.jsx(Ax,{})}));

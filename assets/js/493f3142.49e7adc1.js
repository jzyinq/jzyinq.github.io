"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[2977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="trackMainFormView()",c={unversionedId:"js-api/js-api-consent-manager/methods/trackMainFormView()",id:"js-api/js-api-consent-manager/methods/trackMainFormView()",title:"trackMainFormView()",description:"Command used to track Consent Form main view (automatic view, when user",source:"@site/docs/js-api/js-api-consent-manager/methods/trackMainFormView().md",sourceDirName:"js-api/js-api-consent-manager/methods",slug:"/js-api/js-api-consent-manager/methods/trackMainFormView()",permalink:"/docs/js-api/js-api-consent-manager/methods/trackMainFormView()",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-api/js-api-consent-manager/methods/trackMainFormView().md",tags:[],version:"current",frontMatter:{},sidebar:"jsApiSideBar",previous:{title:"trackCloseButtonClick()",permalink:"/docs/js-api/js-api-consent-manager/methods/trackCloseButtonClick()"},next:{title:"trackPrivacyPolicyLinkView()",permalink:"/docs/js-api/js-api-consent-manager/methods/trackPrivacyPolicyLinkView()"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trackmainformview"},"trackMainFormView()"),(0,a.kt)("p",null,"Command used to track Consent Form main view (automatic view, when user\nenters the website for the first time)."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"ppms.cm.api('trackMainFormView', onFulfilled, onRejected);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onFulfilled()")," (function, required)",(0,a.kt)("br",{parentName:"p"}),"\n","The fulfillment handler callback (called with result)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onRejected(error)"),(0,a.kt)("br",{parentName:"p"}),"\n","The rejection handler callback (called with error code). If not\nspecified, the exception will be thrown in the main stack trace."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"error")," (string | object, required)",(0,a.kt)("br",{parentName:"p"}),"\n","Error code or exception")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://piwikpro.github.io/ConsentManager-CustomConsentFormExample/"},"custom consent form\nexample"),"."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[3678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},s="setComplianceSettings()",o={unversionedId:"js-api/js-api-consent-manager/methods/setComplianceSettings()",id:"js-api/js-api-consent-manager/methods/setComplianceSettings()",title:"setComplianceSettings()",description:"Set compliance settings based on visitor's decisions. Use this command",source:"@site/docs/js-api/js-api-consent-manager/methods/setComplianceSettings().md",sourceDirName:"js-api/js-api-consent-manager/methods",slug:"/js-api/js-api-consent-manager/methods/setComplianceSettings()",permalink:"/docs/js-api/js-api-consent-manager/methods/setComplianceSettings()",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-api/js-api-consent-manager/methods/setComplianceSettings().md",tags:[],version:"current",frontMatter:{},sidebar:"jsApiSideBar",previous:{title:"sendDataRequest()",permalink:"/docs/js-api/js-api-consent-manager/methods/sendDataRequest()"},next:{title:"setInitialComplianceSettings()",permalink:"/docs/js-api/js-api-consent-manager/methods/setInitialComplianceSettings()"}},p={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setcompliancesettings"},"setComplianceSettings()"),(0,a.kt)("p",null,"Set compliance settings based on visitor's decisions. Use this command\nto save visitor's consent choices from the consent form. Consent Manager\nforces a page view after the command is invoked, so all tags requiring\ncertain choices will be fired immediately after the consent is given."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"ppms.cm.api('setComplianceSettings', settings, onFulfilled, onRejected);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"settings")," (object, required)",(0,a.kt)("br",{parentName:"p"}),"\n","The consent settings object. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"{consents: {analytics:\n{status: 1}}}"),(0,a.kt)("br",{parentName:"p"}),"\n","Where ",(0,a.kt)("inlineCode",{parentName:"p"},"consent.analytics")," is consent type and status indicate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0"),": A visitor rejected consent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),": A visitor approved consent.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onFulfilled()")," (function, required)",(0,a.kt)("br",{parentName:"p"}),"\n","The fulfillment handler callback (called with result)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onRejected(error)"),(0,a.kt)("br",{parentName:"p"}),"\n","The rejection handler callback (called with error code). If not\nspecified, the exception will be thrown in the main stack trace."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"error")," (string | object, required)",(0,a.kt)("br",{parentName:"p"}),"\n","Error code or exception")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://piwikpro.github.io/ConsentManager-CustomConsentFormExample/"},"custom consent form\nexample"),"."))}u.isMDXComponent=!0}}]);
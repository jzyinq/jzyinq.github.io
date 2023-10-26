"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={},o="deleteCustomVariable() \ud83d\uddd1",i={unversionedId:"js-api/js-api-analytics/methods/deleteCustomVariable()",id:"js-api/js-api-analytics/methods/deleteCustomVariable()",title:"deleteCustomVariable() \ud83d\uddd1",description:"0.0.0 This method is no longer recommended. Use the",source:"@site/docs/js-api/js-api-analytics/methods/deleteCustomVariable().md",sourceDirName:"js-api/js-api-analytics/methods",slug:"/js-api/js-api-analytics/methods/deleteCustomVariable()",permalink:"/docs/js-api/js-api-analytics/methods/deleteCustomVariable()",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-api/js-api-analytics/methods/deleteCustomVariable().md",tags:[],version:"current",frontMatter:{},sidebar:"jsApiSideBar",previous:{title:"deleteCustomDimension()",permalink:"/docs/js-api/js-api-analytics/methods/deleteCustomDimension()"},next:{title:"disableCookies()",permalink:"/docs/js-api/js-api-analytics/methods/disableCookies()"}},l={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deletecustomvariable-"},"deleteCustomVariable() \ud83d\uddd1"),(0,n.kt)("div",{class:"deprecated"},(0,n.kt)("p",null,"0.0.0 This method is no longer recommended. Use the\nsetCustomDimensionValue() and deleteCustomDimension() method instead.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"deleteCustomDimension()")," method removes a custom variable."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("div",{class:"tabs"},(0,n.kt)("div",{class:"group-tab"},(0,n.kt)("p",null,"JS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"deleteCustomVariable(index[, scope])\n")))),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"index")," (number, required)",(0,n.kt)("br",{parentName:"p"}),"\n","Index from 1 to 5 where the variable is stored."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"scope")," (string, optional)",(0,n.kt)("br",{parentName:"p"}),"\n",'Scope of the variable: "visit" or "page". The default value is "visit".'),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"To remove a custom variable:"),(0,n.kt)("div",{class:"tabs"},(0,n.kt)("div",{class:"group-tab"},(0,n.kt)("p",null,"JS (queue)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'_paq.push(["deleteCustomVariable", 1, "page"]);\n'))),(0,n.kt)("div",{class:"group-tab"},(0,n.kt)("p",null,"JS (direct)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var jstc = Piwik.getTracker(\n  "https://example.com/",\n  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"\n);\njstc.deleteCustomVariable(1, "page");\n')))))}m.isMDXComponent=!0}}]);
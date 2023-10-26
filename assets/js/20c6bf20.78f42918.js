"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[2667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56044:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(45697);const o=e=>{let{src:t}=e;return(0,n.useEffect)((()=>{const e=document.createElement("script");return e.src="/_static/js/redoc.2.0.0-rc.23.min.js",e.onload=()=>{window.Redoc&&window.Redoc.init(t,{},document.getElementById("redoc-container"))},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[t]),n.createElement("div",null,n.createElement("div",{id:"redoc-container"}))};o.propTypes={src:r.n(a)().string.isRequired};const i=o},3930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(56044);const i={hide_table_of_contents:!0},c="Tracking HTTP API",p={unversionedId:"web-api/methods/tracker-api/http_api",id:"web-api/methods/tracker-api/http_api",title:"Tracking HTTP API",description:"Tracking HTTP API collects events such as page views, custom events and",source:"@site/docs/web-api/methods/tracker-api/http_api.mdx",sourceDirName:"web-api/methods/tracker-api",slug:"/web-api/methods/tracker-api/http_api",permalink:"/docs/web-api/methods/tracker-api/http_api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-api/methods/tracker-api/http_api.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"webApiSideBar",previous:{title:"API",permalink:"/docs/web-api/methods/tracker-api/"},next:{title:"Collecting & Processing Pipeline debugger API",permalink:"/docs/web-api/methods/tracker-api/tracker_debugger_api"}},s={},l=[],d={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tracking-http-api"},"Tracking HTTP API"),(0,a.kt)("p",null,"Tracking HTTP API collects events such as page views, custom events and\ncontent impressions. The data sent to this API will be processed and\neventually appear in Analytics reports."),(0,a.kt)("div",{class:"warning"},(0,a.kt)("div",{class:"title"},(0,a.kt)("p",null,"Warning")),(0,a.kt)("p",null,"All query parameter values inserted into URL must be URL encoded. For\nexample, ",(0,a.kt)("inlineCode",{parentName:"p"},"action_name")," parameter with value ",(0,a.kt)("inlineCode",{parentName:"p"},"#1 Coffee & Cookies")," should\nbecome ",(0,a.kt)("inlineCode",{parentName:"p"},"action_name=%231%20Coffee%20%26%20Cookies")," in the URL. Requests\nwith unencoded parameter values can create malformed events or be\nrejected completely.")),(0,a.kt)(o.Z,{src:"/_static/api/tracker_tracking_api.json",mdxType:"RedocBrowser"}))}m.isMDXComponent=!0}}]);
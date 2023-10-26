"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[9591],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="React",o={unversionedId:"js-api/js-api-analytics/frameworks/react",id:"js-api/js-api-analytics/frameworks/react",title:"React",description:"This library lets you start collecting data from your web app. It also",source:"@site/docs/js-api/js-api-analytics/frameworks/react.md",sourceDirName:"js-api/js-api-analytics/frameworks",slug:"/js-api/js-api-analytics/frameworks/react",permalink:"/docs/js-api/js-api-analytics/frameworks/react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-api/js-api-analytics/frameworks/react.md",tags:[],version:"current",frontMatter:{},sidebar:"jsApiSideBar",previous:{title:"Angular",permalink:"/docs/js-api/js-api-analytics/frameworks/angular"},next:{title:"Getting started",permalink:"/docs/js-api/js-api-analytics/getting-started"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Additional setup for SPA",id:"additional-setup-for-spa",level:2},{value:"Methods",id:"methods",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react"},"React"),(0,r.kt)("p",null,"This library lets you start collecting data from your web app. It also\nhelps you control which data you collect \u2013\u2013 like screen views, custom\nevents, goals, and more. The library contains modules with methods."),(0,r.kt)("p",null,"To call methods in React, you'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomEventsService")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"PageViewsService"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install JS library for React, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In your project folder, run the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install @piwik-pro/react-piwik-pro\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"yarn add \u200b\u200b@piwikpro/react-piwik-pro\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"PiwikPro")," module to your project files. Call the\n",(0,r.kt)("strong",{parentName:"li"},"initialize()")," method by passing your account address (Example:\n",(0,r.kt)("a",{parentName:"li",href:"https://example.piwik.pro/"},"https://example.piwik.pro/"),") and the site ID (",(0,r.kt)("a",{parentName:"li",href:"https://help.piwik.pro/support/questions/find-website-id/"},"Where to find\nit?"),"):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import PiwikPro from '@piwik-pro/react-piwik-pro';\n\nPiwikPro.initialize('site-id', 'account-address');\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),(0,r.kt)("p",null,"Note: This method makes sure that collected data is sent to the your\naccount in Piwik PRO and is reported as a corresponding site or app."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add tracking methods like screen views or custom events to your\napplication."),(0,r.kt)("li",{parentName:"ol"},"Data will appear in reports in about an hour. Data in the tracker\ndebugger will appear instantly.")),(0,r.kt)("h2",{id:"additional-setup-for-spa"},"Additional setup for SPA"),(0,r.kt)("p",null,"If your web app is built as a single-page application (SPA), you need to\ntrack virtual page views. In SPAs, when a user goes from one page to the\nother, the page doesn't reload. It loads just once at the beginning of\nthe session. Because of that, page views can't be recorded in the usual\nway. You need virtual page views."),(0,r.kt)("p",null,"To automatically track virtual page views in React projects, you need to\nfollow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Something"),(0,r.kt)("li",{parentName:"ol"},"Something"),(0,r.kt)("li",{parentName:"ol"},"Something")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"Here's a list of all JS methods you can use in your React project.\nDescriptions and other information are available after clicking on\nlinks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addDownloadExtensions()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addEcommerceItem()"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearEcommerceCart()"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deleteCustomDimension()"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"E")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enableLinkTracking()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"G")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getCustomDimensionValue()"),(0,r.kt)("li",{parentName:"ul"},"getEcommerceItems()"),(0,r.kt)("li",{parentName:"ul"},"getLinkTrackingTimer()"),(0,r.kt)("li",{parentName:"ul"},"getUserId()"),(0,r.kt)("li",{parentName:"ul"},"getVisitorId()"),(0,r.kt)("li",{parentName:"ul"},"getVisitorInfo()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"removeDownloadExtensions()"),(0,r.kt)("li",{parentName:"ul"},"removeEcommerceItem()"),(0,r.kt)("li",{parentName:"ul"},"resetUserId()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"S")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setCustomDimensionValue()"),(0,r.kt)("li",{parentName:"ul"},"setDownloadClasses()"),(0,r.kt)("li",{parentName:"ul"},"setDownloadExtensions()"),(0,r.kt)("li",{parentName:"ul"},"setEcommerceView()"),(0,r.kt)("li",{parentName:"ul"},"setIgnoreClasses()"),(0,r.kt)("li",{parentName:"ul"},"setLinkClasses()"),(0,r.kt)("li",{parentName:"ul"},"setLinkTrackingTimer()"),(0,r.kt)("li",{parentName:"ul"},"setUserId()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"T")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"trackContentImpression()"),(0,r.kt)("li",{parentName:"ul"},"trackContentInteraction()"),(0,r.kt)("li",{parentName:"ul"},"trackEcommerceCartUpdate()"),(0,r.kt)("li",{parentName:"ul"},"trackEcommerceOrder()"),(0,r.kt)("li",{parentName:"ul"},"trackEvent()"),(0,r.kt)("li",{parentName:"ul"},"trackGoal()"),(0,r.kt)("li",{parentName:"ul"},"trackLink()"),(0,r.kt)("li",{parentName:"ul"},"trackPageView()"),(0,r.kt)("li",{parentName:"ul"},"trackSiteSearch()")))}m.isMDXComponent=!0}}]);
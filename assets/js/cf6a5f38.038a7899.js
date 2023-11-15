"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[9591],{28969:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=i(85893),r=i(11151);const t={},l="React",a={id:"js-api/js-api-analytics/frameworks/react",title:"React",description:"This library lets you start collecting data from your web app. It also",source:"@site/docs/js-api/js-api-analytics/frameworks/react.md",sourceDirName:"js-api/js-api-analytics/frameworks",slug:"/js-api/js-api-analytics/frameworks/react",permalink:"/docs/js-api/js-api-analytics/frameworks/react",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-api/js-api-analytics/frameworks/react.md",tags:[],version:"current",frontMatter:{},sidebar:"jsApiSideBar",previous:{title:"Angular",permalink:"/docs/js-api/js-api-analytics/frameworks/angular"},next:{title:"Getting started",permalink:"/docs/js-api/js-api-analytics/getting-started"}},o={},c=[{value:"Installation",id:"installation",level:2},{value:"Additional setup for SPA",id:"additional-setup-for-spa",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"react",children:"React"}),"\n",(0,s.jsx)(n.p,{children:"This library lets you start collecting data from your web app. It also\nhelps you control which data you collect \u2013\u2013 like screen views, custom\nevents, goals, and more. The library contains modules with methods."}),"\n",(0,s.jsxs)(n.p,{children:["To call methods in React, you'll use ",(0,s.jsx)(n.code,{children:"CustomEventsService"})," or\n",(0,s.jsx)(n.code,{children:"PageViewsService"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"To install JS library for React, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"In your project folder, run the following command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"npm install @piwik-pro/react-piwik-pro\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"yarn add \u200b\u200b@piwikpro/react-piwik-pro\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Add the ",(0,s.jsx)(n.code,{children:"PiwikPro"})," module to your project files. Call the\n",(0,s.jsx)(n.strong,{children:"initialize()"})," method by passing your account address (Example:\n",(0,s.jsx)(n.a,{href:"https://example.piwik.pro/",children:"https://example.piwik.pro/"}),") and the site ID (",(0,s.jsx)(n.a,{href:"https://help.piwik.pro/support/questions/find-website-id/",children:"Where to find\nit?"}),"):"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import PiwikPro from '@piwik-pro/react-piwik-pro';\n\nPiwikPro.initialize('site-id', 'account-address');\n\nReactDOM.render(<App />, document.getElementById('root'))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note: This method makes sure that collected data is sent to the your\naccount in Piwik PRO and is reported as a corresponding site or app."}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Add tracking methods like screen views or custom events to your\napplication."}),"\n",(0,s.jsx)(n.li,{children:"Data will appear in reports in about an hour. Data in the tracker\ndebugger will appear instantly."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"additional-setup-for-spa",children:"Additional setup for SPA"}),"\n",(0,s.jsx)(n.p,{children:"If your web app is built as a single-page application (SPA), you need to\ntrack virtual page views. In SPAs, when a user goes from one page to the\nother, the page doesn't reload. It loads just once at the beginning of\nthe session. Because of that, page views can't be recorded in the usual\nway. You need virtual page views."}),"\n",(0,s.jsx)(n.p,{children:"To automatically track virtual page views in React projects, you need to\nfollow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Something"}),"\n",(0,s.jsx)(n.li,{children:"Something"}),"\n",(0,s.jsx)(n.li,{children:"Something"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"Here's a list of all JS methods you can use in your React project.\nDescriptions and other information are available after clicking on\nlinks."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"A"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"addDownloadExtensions()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"addEcommerceItem()"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"C"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"clearEcommerceCart()"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"D"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"deleteCustomDimension()"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"E"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"enableLinkTracking()"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"G"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"getCustomDimensionValue()"}),"\n",(0,s.jsx)(n.li,{children:"getEcommerceItems()"}),"\n",(0,s.jsx)(n.li,{children:"getLinkTrackingTimer()"}),"\n",(0,s.jsx)(n.li,{children:"getUserId()"}),"\n",(0,s.jsx)(n.li,{children:"getVisitorId()"}),"\n",(0,s.jsx)(n.li,{children:"getVisitorInfo()"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"R"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"removeDownloadExtensions()"}),"\n",(0,s.jsx)(n.li,{children:"removeEcommerceItem()"}),"\n",(0,s.jsx)(n.li,{children:"resetUserId()"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"S"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"setCustomDimensionValue()"}),"\n",(0,s.jsx)(n.li,{children:"setDownloadClasses()"}),"\n",(0,s.jsx)(n.li,{children:"setDownloadExtensions()"}),"\n",(0,s.jsx)(n.li,{children:"setEcommerceView()"}),"\n",(0,s.jsx)(n.li,{children:"setIgnoreClasses()"}),"\n",(0,s.jsx)(n.li,{children:"setLinkClasses()"}),"\n",(0,s.jsx)(n.li,{children:"setLinkTrackingTimer()"}),"\n",(0,s.jsx)(n.li,{children:"setUserId()"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"T"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"trackContentImpression()"}),"\n",(0,s.jsx)(n.li,{children:"trackContentInteraction()"}),"\n",(0,s.jsx)(n.li,{children:"trackEcommerceCartUpdate()"}),"\n",(0,s.jsx)(n.li,{children:"trackEcommerceOrder()"}),"\n",(0,s.jsx)(n.li,{children:"trackEvent()"}),"\n",(0,s.jsx)(n.li,{children:"trackGoal()"}),"\n",(0,s.jsx)(n.li,{children:"trackLink()"}),"\n",(0,s.jsx)(n.li,{children:"trackPageView()"}),"\n",(0,s.jsx)(n.li,{children:"trackSiteSearch()"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var s=i(67294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
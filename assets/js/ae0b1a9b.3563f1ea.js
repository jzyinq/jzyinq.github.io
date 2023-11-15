"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[1828],{52004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const r={},o="getComplianceSettings()",c={id:"js-api/js-api-consent-manager/methods/getComplianceSettings()",title:"getComplianceSettings()",description:"Returns current privacy settings. Use this command to get visitor's",source:"@site/docs/js-api/js-api-consent-manager/methods/getComplianceSettings().md",sourceDirName:"js-api/js-api-consent-manager/methods",slug:"/js-api/js-api-consent-manager/methods/getComplianceSettings()",permalink:"/docs/js-api/js-api-consent-manager/methods/getComplianceSettings()",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-api/js-api-consent-manager/methods/getComplianceSettings().md",tags:[],version:"current",frontMatter:{},sidebar:"jsApiSideBar",previous:{title:"Methods",permalink:"/docs/js-api/js-api-consent-manager/methods/"},next:{title:"getComplianceTypes()",permalink:"/docs/js-api/js-api-consent-manager/methods/getComplianceTypes()"}},a={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getcompliancesettings",children:"getComplianceSettings()"}),"\n",(0,s.jsx)(n.p,{children:"Returns current privacy settings. Use this command to get visitor's\ndecisions. This command returns an empty object if there were no\ndecisions registered yet."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"ppms.cm.api('getComplianceSettings', onFulfilled, onRejected);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onFulfilled(settings)"})," (function, required)",(0,s.jsx)(n.br,{}),"\n","The fulfillment handler callback (called with result)."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"settings"})," (object, required)",(0,s.jsx)(n.br,{}),"\n","The consent setting object",(0,s.jsx)(n.br,{}),"\n","Example: ",(0,s.jsx)(n.code,{children:"{consents: {analytics: {status: -1, updatedAt: '2018-07-03T12:18:19.957Z'}}}"}),(0,s.jsx)(n.br,{}),"\n","Where ",(0,s.jsx)(n.code,{children:"consent.analytics"})," is consent type and status indicate:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-1"}),": A vistior didn't interact. For example, they closed a\nconsent popup without any decision."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0"}),": A visitor rejected consent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1"}),": A vistior approved consent."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onRejected(error)"}),(0,s.jsx)(n.br,{}),"\n","The rejection handler callback (called with error code). If not\nspecified, the exception will be thrown in the main stack trace."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"error"})," (string | object, required)",(0,s.jsx)(n.br,{}),"\n","Error code or exception"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://piwikpro.github.io/ConsentManager-CustomConsentFormExample/",children:"custom consent form\nexample"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
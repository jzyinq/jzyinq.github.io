"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[878],{41364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const a={},o="setInitialComplianceSettings()",r={id:"js-api/js-api-consent-manager/methods/setInitialComplianceSettings()",title:"setInitialComplianceSettings()",description:"Sets initial compliance settings (no decision signal for each consent",source:"@site/docs/js-api/js-api-consent-manager/methods/setInitialComplianceSettings().md",sourceDirName:"js-api/js-api-consent-manager/methods",slug:"/js-api/js-api-consent-manager/methods/setInitialComplianceSettings()",permalink:"/docs/js-api/js-api-consent-manager/methods/setInitialComplianceSettings()",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-api/js-api-consent-manager/methods/setInitialComplianceSettings().md",tags:[],version:"current",frontMatter:{},sidebar:"jsApiSideBar",previous:{title:"setComplianceSettings()",permalink:"/docs/js-api/js-api-consent-manager/methods/setComplianceSettings()"},next:{title:"trackAgreeToAllClick()",permalink:"/docs/js-api/js-api-consent-manager/methods/trackAgreeToAllClick()"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setinitialcompliancesettings",children:"setInitialComplianceSettings()"}),"\n",(0,s.jsx)(n.p,{children:'Sets initial compliance settings (no decision signal for each consent\ntype) in the cookie. Use this command to save "no decision" for the\navailable consent types, to further know that a visitor has seen the\nform. Result from getNewComplianceTypes() method can be passed directly.'}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"ppms.cm.api('setInitialComplianceSettings', settings, onFulfilled, onRejected);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"settings"})," (object, required)",(0,s.jsx)(n.br,{}),"\n","The consent settings object. Example: ",(0,s.jsx)(n.code,{children:"{consents: ['analytics']}"})," or\n",(0,s.jsx)(n.code,{children:"['analytics']"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onFulfilled()"})," (function, required)",(0,s.jsx)(n.br,{}),"\n","The fulfillment handler callback (called with result)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onRejected(error)"}),(0,s.jsx)(n.br,{}),"\n","The rejection handler callback (called with error code). If not\nspecified, the exception will be thrown in the main stack trace."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"error"})," (string | object, required)",(0,s.jsx)(n.br,{}),"\n","Error code or exception"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://piwikpro.github.io/ConsentManager-CustomConsentFormExample/",children:"custom consent form\nexample"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
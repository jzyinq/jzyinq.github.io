"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[2667],{2765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(85893),s=n(11151),i=n(56044);const c={hide_table_of_contents:!0},a="Tracking HTTP API",o={id:"web-api/methods/tracker-api/http_api",title:"Tracking HTTP API",description:"Tracking HTTP API collects events such as page views, custom events and",source:"@site/docs/web-api/methods/tracker-api/http_api.mdx",sourceDirName:"web-api/methods/tracker-api",slug:"/web-api/methods/tracker-api/http_api",permalink:"/docs/web-api/methods/tracker-api/http_api",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-api/methods/tracker-api/http_api.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"webApiSideBar",previous:{title:"API",permalink:"/docs/web-api/methods/tracker-api/"},next:{title:"Collecting & Processing Pipeline debugger API",permalink:"/docs/web-api/methods/tracker-api/tracker_debugger_api"}},d={},p=[];function l(e){const t={code:"code",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tracking-http-api",children:"Tracking HTTP API"}),"\n",(0,r.jsx)(t.p,{children:"Tracking HTTP API collects events such as page views, custom events and\ncontent impressions. The data sent to this API will be processed and\neventually appear in Analytics reports."}),"\n",(0,r.jsxs)("div",{class:"warning",children:[(0,r.jsx)("div",{class:"title",children:(0,r.jsx)(t.p,{children:"Warning"})}),(0,r.jsxs)(t.p,{children:["All query parameter values inserted into URL must be URL encoded. For\nexample, ",(0,r.jsx)(t.code,{children:"action_name"})," parameter with value ",(0,r.jsx)(t.code,{children:"#1 Coffee & Cookies"})," should\nbecome ",(0,r.jsx)(t.code,{children:"action_name=%231%20Coffee%20%26%20Cookies"})," in the URL. Requests\nwith unencoded parameter values can create malformed events or be\nrejected completely."]})]}),"\n","\n","\n",(0,r.jsx)(i.Z,{src:"/pstatic/api/tracker_tracking_api.json"})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},56044:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),s=n(45697),i=n.n(s),c=n(85893);const a=e=>{let{src:t}=e;return(0,r.useEffect)((()=>{const e=document.createElement("script");return e.src="/pstatic/js/redoc.2.0.0-rc.23.min.js",e.onload=()=>{window.Redoc&&window.Redoc.init(t,{},document.getElementById("redoc-container"))},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[t]),(0,c.jsx)("div",{children:(0,c.jsx)("div",{id:"redoc-container"})})};a.propTypes={src:i().string.isRequired};const o=a},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(67294);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
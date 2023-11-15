"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[8162],{62443:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(85893),a=t(11151);const i={},s="audienceManagerGetProfileAttributes() \ud83d\uddd1",o={id:"sdks/android-sdk/methods/audienceManagerGetProfileAttributes()",title:"audienceManagerGetProfileAttributes() \ud83d\uddd1",description:"16.0.0 This method is no longer recommended. Audience Manager is no",source:"@site/docs/sdks/android-sdk/methods/audienceManagerGetProfileAttributes().md",sourceDirName:"sdks/android-sdk/methods",slug:"/sdks/android-sdk/methods/audienceManagerGetProfileAttributes()",permalink:"/docs/sdks/android-sdk/methods/audienceManagerGetProfileAttributes()",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdks/android-sdk/methods/audienceManagerGetProfileAttributes().md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related methods",id:"related-methods",level:2}];function c(e){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"audiencemanagergetprofileattributes-",children:"audienceManagerGetProfileAttributes() \ud83d\uddd1"}),"\n",(0,n.jsx)("div",{class:"deprecated",children:(0,n.jsx)(r.p,{children:"16.0.0 This method is no longer recommended. Audience Manager is no\nlonger available in the latest product version."})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"audienceManagerGetProfileAttributes()"})," method returns profile\nattributes. You can get only the attributes with ",(0,n.jsx)(r.a,{href:"https://help.piwik.pro/support/audiences/api-access-attribute/",children:"granted\naccess"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsxs)("div",{class:"tabs",children:[(0,n.jsxs)("div",{class:"group-tab",children:[(0,n.jsx)(r.p,{children:"Java"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'getTracker().audienceManagerGetProfileAttributes(new Tracker.OnGetProfileAttributes() {\n    @Override\n    public void onAttributesReceived(Map<String, String> attributes) {\n      // handle result\n    }\n\n    @Override\n    public void onError(String errorData) {\n      errorData = TextUtils.isEmpty(errorData) ? "Network error": errorData;\n      // handle error\n    }\n});\n'})})]}),(0,n.jsxs)("div",{class:"group-tab",children:[(0,n.jsx)(r.p,{children:"Kotlin"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'tracker.audienceManagerGetProfileAttributes(object : OnGetProfileAttributes {\n  override fun onAttributesReceived(attributes: Map<String, String>) {\n    // handle result\n  }\n\n  override fun onError(errorData: String) {\n    var errorData: String? = errorData\n    errorData = if (TextUtils.isEmpty(errorData)) "Network error" else errorData\n    // handle error\n  }\n})\n'})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"OnGetProfileAttributes ()"})," (required)",(0,n.jsx)(r.br,{}),"\n","The callback to handle a request result. The call is asynchronous. It\nhas two methods ",(0,n.jsx)(r.code,{children:"void onAttributesReceived(Map<String, String> attributes)"})," and ",(0,n.jsx)(r.code,{children:"void onError(String errorData)"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"attributes"})," (output)",(0,n.jsx)(r.br,{}),"\n","The dictionary of key-value pairs. Key: attribute name. Value: attribute\nvalue."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"errorData"})," (output)",(0,n.jsx)(r.br,{}),"\n","The error string. If an error occurs, only this method will be called."]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.p,{children:"To get profile attributes:"}),"\n",(0,n.jsxs)("div",{class:"tabs",children:[(0,n.jsxs)("div",{class:"group-tab",children:[(0,n.jsx)(r.p,{children:"Java"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'getTracker().audienceManagerGetProfileAttributes(new Tracker.OnGetProfileAttributes() {\n    @Override\n    public void onAttributesReceived(Map<String, String> attributes) {\n      // handle result\n    }\n\n    @Override\n    public void onError(String errorData) {\n      errorData = TextUtils.isEmpty(errorData) ? "Network error": errorData;\n      // handle error\n    }\n});\n'})})]}),(0,n.jsxs)("div",{class:"group-tab",children:[(0,n.jsx)(r.p,{children:"Kotlin"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'tracker.audienceManagerGetProfileAttributes(object : OnGetProfileAttributes {\n  override fun onAttributesReceived(attributes: Map<String, String>) {\n    // handle result\n  }\n\n  override fun onError(errorData: String) {\n    var errorData: String? = errorData\n    errorData = if (TextUtils.isEmpty(errorData)) "Network error" else errorData\n    // handle error\n  }\n})\n'})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["You can get only the attributes with ",(0,n.jsx)(r.a,{href:"https://help.piwik.pro/support/audiences/api-access-attribute/",children:"granted\naccess"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"related-methods",children:"Related methods"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"android audienceManagerSetProfileAttribute()"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"android OnCheckAudienceMembership()"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var n=t(67294);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
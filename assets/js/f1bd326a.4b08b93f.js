"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[4609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},s="track().event()",c={unversionedId:"sdks/android-sdk/methods/track().event()",id:"sdks/android-sdk/methods/track().event()",title:"track().event()",description:"The track().event() method records actions users perform on your",source:"@site/docs/sdks/android-sdk/methods/track().event().md",sourceDirName:"sdks/android-sdk/methods",slug:"/sdks/android-sdk/methods/track().event()",permalink:"/docs/sdks/android-sdk/methods/track().event()",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdks/android-sdk/methods/track().event().md",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}],l={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trackevent"},"track().event()"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"track().event()")," method records actions users perform on your\nmobile app \u2013 like button presses, gestures or voice commands."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("div",{class:"tabs"},(0,a.kt)("div",{class:"group-tab"},(0,a.kt)("p",null,"Java"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'TrackHelper.track()\n  .event("category", "action")\n  .path("path")\n  .name("name")\n  .value(value)\n  .with(getTracker());\n'))),(0,a.kt)("div",{class:"group-tab"},(0,a.kt)("p",null,"Kotlin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'TrackHelper.track()\n  .event("category", "action")\n  .path("path")\n  .name("name")\n  .value(value)\n  .with(tracker)\n')))),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"category")," (string, required)",(0,a.kt)("br",{parentName:"p"}),"\n","The category of the event you're tracking. You can define event\ncategories based on actions (clicks, gestures, voice commands, and the\nlike) or features (play, pause, fast forward, and the like)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"action")," (string, required)",(0,a.kt)("br",{parentName:"p"}),"\n","The action of the event you're tracking. Example: A category can be user\nclicks, an action can be a button click."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"name")," (string, optional)",(0,a.kt)("br",{parentName:"p"}),"\n","The name of the event you're tracking. For example, if you have multiple\nbutton controls on a screen, you can use the name to record a specific\nview control identifier that was clicked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"value")," (float, optional)",(0,a.kt)("br",{parentName:"p"}),"\n","The value you want to assign to the event you're tracking. For example,\nif you're tracking \u201cBuy\u201d button presses, you can record the number of\npurchased items or the total cost."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path")," (string, optional)",(0,a.kt)("br",{parentName:"p"}),"\n","A URL path set for this event."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To send a custom event when a user clicks on a signup button on\n",(0,a.kt)("inlineCode",{parentName:"p"},"/main/signup")," and assign ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," value to it:"),(0,a.kt)("div",{class:"tabs"},(0,a.kt)("div",{class:"group-tab"},(0,a.kt)("p",null,"Java"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Tracker tracker = ((PiwikApplication) getApplication()).getTracker();\nTrackHelper.track()\n  .event("Clicks", "Button")\n  .path("/main/signup")\n  .name("Sign up")\n  .value(100)\n  .with(tracker);\n'))),(0,a.kt)("div",{class:"group-tab"},(0,a.kt)("p",null,"Kotlin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'val tracker: Tracker = (application as PiwikApplication).tracker\nTrackHelper.track()\n  .event("Clicks", "Button")\n  .path("/main/signup")\n  .name("Sign up")\n  .value(100)\n  .with(tracker)\n')))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For more on custom events, ",(0,a.kt)("a",{parentName:"li",href:"https://help.piwik.pro/support/getting-started/custom-event/"},"see this\narticle"),".")))}k.isMDXComponent=!0}}]);
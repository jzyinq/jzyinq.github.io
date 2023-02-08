"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[7175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,l={unversionedId:"data-collection/web/javascript_tracking_client/installation",id:"data-collection/web/javascript_tracking_client/installation",title:"installation",description:"js",source:"@site/docs/data-collection/web/javascript_tracking_client/installation.md",sourceDirName:"data-collection/web/javascript_tracking_client",slug:"/data-collection/web/javascript_tracking_client/installation",permalink:"/docs/data-collection/web/javascript_tracking_client/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-collection/web/javascript_tracking_client/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"dataCollectionSideBar",previous:{title:"api",permalink:"/docs/data-collection/web/javascript_tracking_client/api"},next:{title:"reserved_names",permalink:"/docs/data-collection/web/javascript_tracking_client/reserved_names"}},s={},c=[{value:"Installing tracking code via code snippet",id:"installing-tracking-code-via-code-snippet",level:2},{value:"Alternative configurations",id:"alternative-configurations",level:2},{value:"Tracking domains and all subdomains",id:"tracking-domains-and-all-subdomains",level:3},{value:"Tracking multiple domains as one site",id:"tracking-multiple-domains-as-one-site",level:3},{value:"Tracking subdirectories of domain as separate websites",id:"tracking-subdirectories-of-domain-as-separate-websites",level:3},{value:"Collecting page performance metrics",id:"collecting-page-performance-metrics",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"default-domain"},(0,i.kt)("p",null,"js")),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("h2",{id:"installing-tracking-code-via-code-snippet"},"Installing tracking code via code snippet"),(0,i.kt)("p",null,'Installation via snippet should only be carried out if the Tag Manager\nis not available or when options of "Piwik PRO Analytics template" do\nnot let you configure your use case.'),(0,i.kt)("div",{class:"note"},(0,i.kt)("div",{class:"title"},(0,i.kt)("p",null,"Note")),(0,i.kt)("p",null,"We highly recommend using the template from the Tag Manager to set up\ntracking for the Analytics module (including customizations).")),(0,i.kt)("div",{class:"note"},(0,i.kt)("div",{class:"title"},(0,i.kt)("p",null,"Note")),(0,i.kt)("p",null,"Basic configuration will setup a single domain configuration. For other\noptions, see: ",(0,i.kt)("inlineCode",{parentName:"p"},"jtc-installation-alternative-configurations"),".")),(0,i.kt)("div",{id:"jtc-installation-jsts-example"},(0,i.kt)("p",null,"This code should be added in the head section of the page just before\nthe closing ",(0,i.kt)("inlineCode",{parentName:"p"},"</head>")," tag. Additionally, the snippet must be configured\nin the following way:")),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"String ",(0,i.kt)("inlineCode",{parentName:"li"},"XXX-XXX-XXX-XXX-XXX")," should be replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"app ID"),"\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"efcd98a5-335b-48b0-ab17-bf43f1c542be"),")."),(0,i.kt)("li",{parentName:"ul"},"String ",(0,i.kt)("inlineCode",{parentName:"li"},"https://your-instance-name.piwik.pro/")," should be replaced\nwith your PPAS instance address."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Piwik --\x3e\n<script type="text/javascript">\n  var _paq = _paq || [];\n  _paq.push(["trackPageView"]);\n  _paq.push(["enableLinkTracking"]);\n  (function() {\n    var u="https://your-instance-name.piwik.pro/";\n    _paq.push(["setTrackerUrl", u+"ppms.php"]);\n    _paq.push(["setSiteId", "XXX-XXX-XXX-XXX-XXX"]);\n    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];\n    g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"ppms.js"; s.parentNode.insertBefore(g,s);\n  })();\n<\/script>\n')),(0,i.kt)("p",null,"This code initializes the JavaScript Tracking Client in following ways:"),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Initializes the global ",(0,i.kt)("inlineCode",{parentName:"li"},"_paq")," command queue that schedules\ncommands to be run when the JavaScript Tracking Client library is\nloaded."),(0,i.kt)("li",{parentName:"ol"},"Schedules basic configuration of JavaScript Tracking Client using\n",(0,i.kt)("inlineCode",{parentName:"li"},"_paq.push"),"."),(0,i.kt)("li",{parentName:"ol"},"Creates a ",(0,i.kt)("inlineCode",{parentName:"li"},"<script>")," tag that asynchronously loads the JavaScript\nTracking Client library."))),(0,i.kt)("p",null,"When loading, the snippet is added on the page. The JavaScript Tracking\nClient will start tracking ",(0,i.kt)("inlineCode",{parentName:"p"},"visitor")," actions starting with page view."),(0,i.kt)("h2",{id:"alternative-configurations"},"Alternative configurations"),(0,i.kt)("h3",{id:"tracking-domains-and-all-subdomains"},"Tracking domains and all subdomains"),(0,i.kt)("p",null,"To track all data between domain and all its subdomains, we must use\ncookies configured with the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'_paq.push(["setTrackerUrl", u+"ppms.php"]);\n_paq.push(["setSiteId", "XXX-XXX-XXX-XXX-XXX"]);\n\n// Share the tracking cookie across example.com, www.example.com, subdomain.example.com, ...\n_paq.push(["setCookieDomain", "*.example.com"]);\n\n// Tell Piwik the website domain so that clicks on these domains are not tracked as "Outlinks"\n_paq.push(["setDomains", "*.example.com"]);\n\n_paq.push(["trackPageView"]);\n')),(0,i.kt)("h3",{id:"tracking-multiple-domains-as-one-site"},"Tracking multiple domains as one site"),(0,i.kt)("p",null,"To set up tracking between multiple domains, you must use multiple\nfunctions: ",(0,i.kt)("inlineCode",{parentName:"p"},"setDomains<jtc-api-setDomains>")," to set a list of domains and\n",(0,i.kt)("inlineCode",{parentName:"p"},"enableCrossDomainLinking<jtc-api-enableCrossDomainLinking>")," to enable\ncross domain linking:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// specify which domains should be linked\n_paq.push(["setDomains", ["*.example.com", "otherdomain.com"]]);\n\n// enable cross domains linking\n_paq.push(["enableCrossDomainLinking"]);\n')),(0,i.kt)("div",{class:"note"},(0,i.kt)("div",{class:"title"},(0,i.kt)("p",null,"Note")),(0,i.kt)("p",null,"For cross-domain linking to work, you have to enable link tracking using\n",(0,i.kt)("inlineCode",{parentName:"p"},"enableLinkTracking<jtc-api-enableLinkTracking>")," function. Remember that\nlinks added dynamically to the HTML document won't be tracked unless you\ncall ",(0,i.kt)("inlineCode",{parentName:"p"},"enableLinkTracking<jtc-api-enableLinkTracking>")," again. You can\nlearn more about tracking dynamically added links\n",(0,i.kt)("inlineCode",{parentName:"p"},"here<guide_tracking_link_clicks_on_pages_with_dynamically_generated_content>"),".")),(0,i.kt)("h3",{id:"tracking-subdirectories-of-domain-as-separate-websites"},"Tracking subdirectories of domain as separate websites"),(0,i.kt)("p",null,"To differentiate parts of a website as another site, you must configure\nJavaScript Tracking Client this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'_paq.push(["setSiteId", "App1"]);\n_paq.push(["setTrackerUrl", u+"ppms.php"]);\n_paq.push(["trackPageView"]);\n')),(0,i.kt)("p",null,"Afterwards, you can change configuration for selected paths and track\nthem as another site:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'_paq.push(["setSiteId", "App2"]);\n\n_paq.push(["setCookiePath", "/data/something_useful"]);\n\n_paq.push(["setDomains", "example.com/data/something_useful"]);\n\n_paq.push(["setTrackerUrl", u+"ppms.php"]);\n_paq.push(["trackPageView"]);\n')),(0,i.kt)("p",null,"This way, all actions tracked on ",(0,i.kt)("inlineCode",{parentName:"p"},"/data/something_useful")," will be\ntracked for ",(0,i.kt)("inlineCode",{parentName:"p"},"App2")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"App1"),"."),(0,i.kt)("p",null,"If you wish to track a group of pages as separate site, you can use the\nwildcard in the ",(0,i.kt)("inlineCode",{parentName:"p"},"setDomains<jtc-api-setDomains>")," function."),(0,i.kt)("h3",{id:"collecting-page-performance-metrics"},"Collecting page performance metrics"),(0,i.kt)("p",null,"To set up page performance metrics gathering use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"setTimingDataSamplingOnPageLoad<jtc-api-setTimingDataSamplingOnPageLoad>"),"\nfunction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// measure performance on 33% of page loads\n_paq.push(["setTimingDataSamplingOnPageLoad", 33]);\n\n// track page view and potentially measure page performance\n_paq.push(["trackPageView"]);\n')))}d.isMDXComponent=!0}}]);
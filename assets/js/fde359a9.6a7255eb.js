"use strict";(self.webpackChunkpiwik_pro=self.webpackChunkpiwik_pro||[]).push([[5556],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>k});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(i),d=n,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return i?a.createElement(k,o(o({ref:t},m),{},{components:i})):a.createElement(k,o({ref:t},m))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8407:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=i(7462),n=(i(7294),i(3905));const r={},o="Piwik PRO Library for React",l={unversionedId:"data-collection/web/frameworks/Piwik_PRO_Library_for_React",id:"data-collection/web/frameworks/Piwik_PRO_Library_for_React",title:"Piwik PRO Library for React",description:"Dedicated Piwik PRO library that helps with implementing Piwik PRO Tag Manager and the Piwik PRO tracking client in React applications.",source:"@site/docs/data-collection/web/frameworks/Piwik_PRO_Library_for_React.md",sourceDirName:"data-collection/web/frameworks",slug:"/data-collection/web/frameworks/Piwik_PRO_Library_for_React",permalink:"/docs/data-collection/web/frameworks/Piwik_PRO_Library_for_React",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-collection/web/frameworks/Piwik_PRO_Library_for_React.md",tags:[],version:"current",frontMatter:{},sidebar:"dataCollectionSideBar",previous:{title:"Piwik PRO Library for Next.js",permalink:"/docs/data-collection/web/frameworks/Piwik_PRO_Library_for_NextJS"},next:{title:"JavaScript Tracking Client",permalink:"/docs/data-collection/web/javascript_tracking_client/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"NPM",id:"npm",level:3},{value:"Basic setup",id:"basic-setup",level:3},{value:"Piwik PRO Services",id:"piwik-pro-services",level:2},{value:"Send Custom Events",id:"send-custom-events",level:3},{value:"Send page views and virtual page views",id:"send-page-views-and-virtual-page-views",level:3},{value:"API",id:"api",level:2},{value:"Page Views Service",id:"page-views-service",level:3},{value:"Import",id:"import",level:4},{value:"Methods",id:"methods",level:4},{value:"User Management",id:"user-management",level:3},{value:"Import",id:"import-1",level:4},{value:"Methods",id:"methods-1",level:4},{value:"Custom Event",id:"custom-event",level:3},{value:"Import",id:"import-2",level:4},{value:"Methods",id:"methods-2",level:4},{value:"Site search Service",id:"site-search-service",level:3},{value:"Import",id:"import-3",level:4},{value:"Methods",id:"methods-3",level:4},{value:"E-Commerce Service",id:"e-commerce-service",level:3},{value:"Import",id:"import-4",level:4},{value:"Methods",id:"methods-4",level:4},{value:"Content Tracking Service",id:"content-tracking-service",level:3},{value:"Import",id:"import-5",level:4},{value:"Methods",id:"methods-5",level:3},{value:"Download and outlink Service",id:"download-and-outlink-service",level:3},{value:"Import",id:"import-6",level:4},{value:"Methods",id:"methods-6",level:4},{value:"Goal Conversions",id:"goal-conversions",level:3},{value:"Import",id:"import-7",level:4},{value:"Methods",id:"methods-7",level:4},{value:"Custom Dimensions",id:"custom-dimensions",level:3},{value:"Import",id:"import-8",level:4},{value:"Methods",id:"methods-8",level:4},{value:"Data Layer",id:"data-layer",level:3},{value:"Import",id:"import-9",level:4},{value:"Methods",id:"methods-9",level:4}],m={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"piwik-pro-library-for-react"},"Piwik PRO Library for React"),(0,n.kt)("p",null,"Dedicated Piwik PRO library that helps with implementing Piwik PRO Tag Manager and the Piwik PRO tracking client in React applications."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#npm"},"NPM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#basic-setup"},"Basic setup")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#piwik-pro-services"},"Piwik PRO Services"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#send-custom-events"},"Custom Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#send-page-views-and-virtual-page-views"},"Page Views")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#api"},"API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#page-views-service"},"Page Views Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#user-management"},"User Management")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#custom-event"},"Custom Event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#site-search-service"},"Site search Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#e-commerce-service"},"E-Commerce Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#content-tracking-service"},"Content Tracking Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#download-and-outlink-service"},"Download and outlink Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#goal-conversions"},"Goal Conversions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#custom-dimensions"},"Custom Dimensions"))))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"npm"},"NPM"),(0,n.kt)("p",null,"To use this package in your project, run the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install @piwikpro/react-piwik-pro\n")),(0,n.kt)("h3",{id:"basic-setup"},"Basic setup"),(0,n.kt)("p",null,"In your React Project, include the default ",(0,n.kt)("inlineCode",{parentName:"p"},"PiwikPro")," in the highest level application module. ie ",(0,n.kt)("inlineCode",{parentName:"p"},"index"),". To set up the Piwik PRO Tag Manager container in the app, the easiest way is to call the ",(0,n.kt)("inlineCode",{parentName:"p"},"PiwikPro.initialize()")," method. ",(0,n.kt)("inlineCode",{parentName:"p"},"PiwikPro.initialize()")," must be initialized using this function before any of the other tracking functions will record any data."),(0,n.kt)("p",null,"In the arguments, pass your app ID and your account URL as parameters (marked 'container-id' and 'container-url' in the example below)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import PiwikPro from '@piwikpro/react-piwik-pro';\n\nPiwikPro.initialize('container-id', 'container-url');\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),(0,n.kt)("h2",{id:"piwik-pro-services"},"Piwik PRO Services"),(0,n.kt)("h3",{id:"send-custom-events"},"Send Custom Events"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { CustomEvent } from '@piwikpro/react-piwik-pro'\n\nexport class TestFormComponent {\n\n  onUserInputName() {\n    ...\n    CustomEvent.trackEvent('user_register_form', 'enter_name', 'Name', 'Value');\n  }\n\n  onUserInputEmail() {\n    ...\n    CustomEvent.trackEvent('user_register_form', 'enter_email', 'Email', 'Value');\n  }\n\n  onSubmit() {\n    ...\n    CustomEvent.trackEvent('user_register_form', 'submit', 'Sent');\n  }\n}\n\n")),(0,n.kt)("h3",{id:"send-page-views-and-virtual-page-views"},"Send page views and virtual page views"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { PageViews } from '@piwikpro/react-piwik-pro';\n...\n\nconst App = () => {\n\n  PageViews.trackPageView('optional title');\n\n  return ...;\n}\n\nexport default App\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"page-views-service"},"Page Views Service"),(0,n.kt)("p",null,"A page view is the most basic type of a tracked event. It represents a single page viewing action."),(0,n.kt)("h4",{id:"import"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { PageViews } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackPageView(customPageTitle?: string)")," - Tracks a visit on the page that the function was run on.")),(0,n.kt)("h3",{id:"user-management"},"User Management"),(0,n.kt)("h4",{id:"import-1"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserManagement } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods-1"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getUserId()")," - The function that will return user ID."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setUserId(userId: string)")," - user ID is an additional parameter that allows you to aggregate data. When set up, you will be able to search through sessions by this parameter, filter reports through it or create Multi attribution reports using User ID."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"resetUserId()")," - Clears previously set ",(0,n.kt)("inlineCode",{parentName:"li"},"userID"),", e.g. when visitor logs out."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getVisitorId()"),"  - Returns 16-character hex ID of the visitor."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getVisitorInfo()")," - Returns visitor information in an array:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"new visitor flag indicating new (1) or returning (0) visitor"),(0,n.kt)("li",{parentName:"ul"},"visitor ID (UUID)"),(0,n.kt)("li",{parentName:"ul"},"first visit timestamp (Unix epoch time)"),(0,n.kt)("li",{parentName:"ul"},"previous visit count (0 for first visit)"),(0,n.kt)("li",{parentName:"ul"},"current visit timestamp (Unix epoch time)"),(0,n.kt)("li",{parentName:"ul"},"last visit timestamp (Unix epoch time or '' if N/A)"),(0,n.kt)("li",{parentName:"ul"},"last e-commerce order timestamp (Unix epoch time or '' if N/A)")))),(0,n.kt)("h3",{id:"custom-event"},"Custom Event"),(0,n.kt)("p",null,"Custom events enable tracking visitor actions that are not predefined in the existing ",(0,n.kt)("a",{parentName:"p",href:"https://developers.piwik.pro/en/latest/data_collection/web/javascript_tracking_client/api.html"},"JavaScript Tracking Client API"),", allowing web analysts to accurately measure and analyze any domain."),(0,n.kt)("h4",{id:"import-2"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { CustomEvent } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods-2"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackEvent(category: string, action: string, name?: string, value?: number) ")," - Tracks a custom event, e.g. when a visitor interacts with the page.")),(0,n.kt)("h3",{id:"site-search-service"},"Site search Service"),(0,n.kt)("p",null,"Site search tracking gives you insights into how visitors interact with the search engine on your website - what they search for and how many results they get back."),(0,n.kt)("h4",{id:"import-3"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { SiteSearch } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods-3"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackSiteSearch(keyword: string, category?: string, searchCount?: number, dimensions?: Object)")," - Tracks search requests on a website.")),(0,n.kt)("h3",{id:"e-commerce-service"},"E-Commerce Service"),(0,n.kt)("h4",{id:"import-4"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { eCommerce } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods-4"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"addEcommerceItem(productSKU: string, productName: string, productCategory: string | string[], productPrice: number, productQuantity: number)")," - Adds a product to a virtual shopping cart. If a product with the same SKU is in the cart, it will be removed first. Does not send any data to the Collecting & Processing Pipeline."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"removeEcommerceItem(productSKU: string)")," - Removes a product with the provided SKU from a virtual shopping cart. If multiple units of that product are in the virtual cart, all of them will be removed. Does not send any data to the Collecting & Processing Pipeline."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clearEcommerceCart()")," - Removes all items from a virtual shopping cart. Does not send any data to the Collecting & Processing Pipeline."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getEcommerceItems()")," - Returns a copy of items from a virtual shopping cart. Does not send any data to the Collecting & Processing Pipeline"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackEcommerceOrder()")," - Tracks a successfully placed e-commerce order with items present in a virtual cart (registered using addEcommerceItem)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackEcommerceCartUpdate(cartAmount: number)")," - Tracks items present in a virtual shopping cart (registered with addEcommerceItem)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setEcommerceView(productSKU: string, productName?: string, productCategory?: string[], productPrice?: string)")," - Tracks product or category view. Must be followed by a page view.")),(0,n.kt)("h3",{id:"content-tracking-service"},"Content Tracking Service"),(0,n.kt)("p",null,"Content Tracking lets you track what content is visible on your site and how users interact with it."),(0,n.kt)("h4",{id:"import-5"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { ContentTracking } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h3",{id:"methods-5"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackContentImpression(contentName: string, contentPiece: string, contentTarget: string)")," - Tracks manual content impression event."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackContentInteraction(contentInteraction: string, contentName: string, contentPiece: string, contentTarget: string)")," - Tracks manual content interaction event.")),(0,n.kt)("h3",{id:"download-and-outlink-service"},"Download and outlink Service"),(0,n.kt)("h4",{id:"import-6"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { DownloadAndOutlink } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods-6"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackLink(url: string, linkType: string, customData?: object, callback?: (params: any) => void)")," - Manually tracks outlink or download event with provided values."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"enableLinkTracking(enable: boolean)"),"  - Enables or disables automatic link tracking. If enabled, left, right and middle clicks on links will be treated as opening a link. Opening a links to an external site (different domain) creates an outlink event. Opening a link to a downloadable file creates a download event."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setLinkClasses(classes: string[])"),"  - Sets a list of class names that indicate whether a link is an outlink and not download."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setDownloadClasses(classes: string[])"),"  - Sets a list of class names that indicate whether a list is a download and not an outlink."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setDownloadExtensions(extensions: string[])"),"  - Overwrites the list of file extensions indicating that a link is a download."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"addDownloadExtensions(extensions: string[])"),"  - Adds new extensions to the download extensions list."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"removeDownloadExtensions(extensions: string[])"),"  - Removes extensions from the download extensions list."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setLinkTrackingTimer(time: number)"),"  - When a visitor produces an events and closes the page immediately afterwards, e.g. when opening a link, the request might get cancelled. To avoid loosing the last event this way, JavaScript Tracking Client will lock the page for a fraction of a second (if wait time hasn\u2019t passed), giving the request time to reach the Collecting & Processing Pipeline."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getLinkTrackingTimer()"),"  - Returns lock/wait time after a request set by setLinkTrackingTimer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setIgnoreClasses(classes: string[])")," - Set a list of class names that indicate a link should not be tracked.")),(0,n.kt)("h3",{id:"goal-conversions"},"Goal Conversions"),(0,n.kt)("p",null,"Goals let you define important actions registered in your application and track conversions when the conditions for the action are fulfilled."),(0,n.kt)("h4",{id:"import-7"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { GoalConversions } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods-7"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackGoal(goalId: number | string, conversionValue: number, dimensions?: Object)")," - Tracks manual goal conversion.")),(0,n.kt)("h3",{id:"custom-dimensions"},"Custom Dimensions"),(0,n.kt)("h4",{id:"import-8"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { CustomDimensions } from '@piwikpro/react-piwik-pro'\n")),(0,n.kt)("h4",{id:"methods-8"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setCustomDimensionValue(customDimensionId: string | number, customDimensionValue: string)"),"  - Sets a custom dimension value to be used later."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"deleteCustomDimension(customDimensionId: string)")," - Removes a custom dimension with the specified ID."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"getCustomDimensionValue(customDimensionId: string | number)")," - Returns the value of a custom dimension with the specified ID.")),(0,n.kt)("h3",{id:"data-layer"},"Data Layer"),(0,n.kt)("p",null,"A data layer is a data structure on your site or app where you can store data and access it with tools like Tag Manager. You can include any data you want in your data layer."),(0,n.kt)("h4",{id:"import-9"},"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { DataLayer } from '@piwikpro/react-piwik-pro';\n")),(0,n.kt)("h4",{id:"methods-9"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"push(dataLayerObject: Object)"),"  - Adds an event to a data layer.")))}u.isMDXComponent=!0}}]);
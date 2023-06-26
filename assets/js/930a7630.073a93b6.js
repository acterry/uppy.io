"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",date:new Date("2021-02-26T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/1.26/dashboard-disabled.jpg",published:!0,slug:"2021/02/1.26"},o=void 0,l={permalink:"/blog/2021/02/1.26",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-02-1.26.md",source:"@site/blog/2021-02-1.26.md",title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",description:"Uppy 1.26 brings a new disabled option for the Dashboad, ability to set",date:"2021-02-26T00:00:00.000Z",formattedDate:"February 26, 2021",tags:[],readingTime:1.775,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",date:"2021-02-26T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/1.26/dashboard-disabled.jpg",published:!0,slug:"2021/02/1.26"},prevItem:{title:"Uppy 1.27: Drop Target plugin, Vue 3 support, Dashboard dynamic meta fields, \u201cShared with me\u201d in Google Drive",permalink:"/blog/2021/04/1.27"},nextItem:{title:"Uppy 1.25: right-to-left scripts, Ukrainian translation, Companion improvements",permalink:"/blog/2021/01/1.25"}},s={authorsImageUrls:[void 0]},p=[{value:"Dashboard \u201cDisabled\u201d",id:"dashboard-disabled",level:2},{value:"XHR Upload Per File headers",id:"xhr-upload-per-file-headers",level:2},{value:"Build System Improvements",id:"build-system-improvements",level:2},{value:"Transloadit Plugin",id:"transloadit-plugin",level:2},{value:"Misc",id:"misc",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Uppy 1.26 brings a new ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," option for the Dashboad, ability to set\nheaders per file with XHR Upload, and fixes for the Transloadit plugin."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Uppy Dashboard UI with disabled state",src:a(65151).Z,width:"1219",height:"959"})),(0,r.kt)("h2",{id:"dashboard-disabled"},"Dashboard \u201cDisabled\u201d"),(0,r.kt)("p",null,"You can now specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," option for the Dashboard, in order to make it\nnon-interactive and grayed out. Users won\u2019t be able to click on buttons or drop\nfiles."),(0,r.kt)("p",null,"This is useful when you need to confitionally enable/disable file uploading or\nmanipulation, based on a condition in your app."),(0,r.kt)("video",{alt:"Demo video showing Uppy with Dashboard disabled vs enabled state",poster:"/img/blog/1.26/dashboard-disabled.jpg",muted:!0,autoplay:!0,loop:!0},(0,r.kt)("source",{src:"/img/blog/1.26/dashboard-disabled-vs-enabled.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/img/blog/1.26/dashboard-disabled-vs-enabled.mp4"),(0,r.kt)("p",null,"This option can be set on init:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dashboard, {\n    disabled: true,\n});\n")),(0,r.kt)("p",null,"and via API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const dashboard = uppy.getPlugin('Dashboard');\ndashboard.setOptions({ disabled: true });\n\nuserNameInput.addEventListener('change', () => {\n    dashboard.setOptions({ disabled: false });\n});\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/dashboard/#disabled-false"},"See the docs"),"."),(0,r.kt)("h2",{id:"xhr-upload-per-file-headers"},"XHR Upload Per File headers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/xhr-upload")," now accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"headers: (file) => {}")," function, so you can do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(XHRUpload, {\n    headers: (file) => ({\n        authorization: `bearer ${global.userToken}`,\n        'header-name': file.meta.someMetaValue,\n    }),\n});\n")),(0,r.kt)("p",null,"to determine file-specific headers."),(0,r.kt)("p",null,"The function syntax for ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," is only available if the ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," option is\n",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (the default). ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," uploads share only one set of headers."),(0,r.kt)("h2",{id:"build-system-improvements"},"Build System Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"build: set legacy-peer-deps for npm 7. We have some peerDependency mismatches\nin our install tree. In npm 6 this was OK (maybe reason for a warning) but in\nnpm 7 they hard fail the install"),(0,r.kt)("li",{parentName:"ul"},"build: added npm version check (33e656cad32b865f960dbd88abf4d3839c8377f0 /\n@goto-bus-stop)")),(0,r.kt)("h2",{id:"transloadit-plugin"},"Transloadit Plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a case where the plugin used stale file data."),(0,r.kt)("li",{parentName:"ul"},"Fixed polling fallback bugs."),(0,r.kt)("li",{parentName:"ul"},"Url concatenation is now more robust.")),(0,r.kt)("h2",{id:"misc"},"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@uppy/companion: Docker tag release (#2771 / @kiloreux)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/companion: Companion should respect previously set value for\nAccesss-Control-Allow-Methods (#2726 / @tim-kos, @mifi, @so-steve)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/transloadit: fix polling fallback bugs (#2759 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"@uppy/utils: added mp4 file type support \u2014 Safari 14.0 on Mac records audio\nusing audio/mp4 MIME type which isn't currently recognised by Uppy (#2753 /\n@dominiceden)")),(0,r.kt)("p",null,"See\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#1260"},"changelog"),"\nfor details."))}c.isMDXComponent=!0},65151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-disabled-6df98c5e4209d6d4290c96d100fe9617.jpg"}}]);
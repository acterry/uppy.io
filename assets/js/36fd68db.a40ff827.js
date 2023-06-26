"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=o,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",date:new Date("2020-04-20T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/1.13/uppy-dashboard-dark-mar-2020.png",published:!0,slug:"2020/04/1.13"},i=void 0,l={permalink:"/blog/2020/04/1.13",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-04-1.13.md",source:"@site/blog/2020-04-1.13.md",title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",description:"Releases 1.11 through 1.13 introduced a bunch of major new features and",date:"2020-04-20T00:00:00.000Z",formattedDate:"April 20, 2020",tags:[],readingTime:2.725,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",date:"2020-04-20T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/1.13/uppy-dashboard-dark-mar-2020.png",published:!0,slug:"2020/04/1.13"},prevItem:{title:"Adding Custom Providers: Step by Step Tutorial to add Custom Providers",permalink:"/blog/2020/03/custom-providers"},nextItem:{title:"Uppy 1.10.1: Facebook and OneDrive",permalink:"/blog/2020/04/1.10"}},p={authorsImageUrls:[void 0]},s=[{value:"Dark mode",id:"dark-mode",level:2},{value:"Custom meta fields",id:"custom-meta-fields",level:2},{value:"Google Docs support in Companion",id:"google-docs-support-in-companion",level:2},{value:"AWS S3",id:"aws-s3",level:2},{value:"Locales",id:"locales",level:2},{value:"Exifr in Thumbnail Generator",id:"exifr-in-thumbnail-generator",level:2},{value:"Misc",id:"misc",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Releases 1.11 through 1.13 introduced a bunch of major new features and\nbugfixes. Let's go through the main ones!"),(0,o.kt)("h2",{id:"dark-mode"},"Dark mode"),(0,o.kt)("p",null,"A little while ago we\u2019ve\n",(0,o.kt)("a",{parentName:"p",href:"https://mobile.twitter.com/uppy_io/status/1221070643543838721"},"announced work in progress"),"\non Dark Mode for the Dashboard. We're happy to tell you it\u2019s live now! You can\ntry it out on ",(0,o.kt)("a",{parentName:"p",href:"/examples/dashboard/"},"the Dashboard example page"),"."),(0,o.kt)("video",{alt:"Demo video showing Uppy Dark Mode",muted:!0,autoplay:!0,loop:!0},(0,o.kt)("source",{src:"/img/blog/1.13/dark-mode-auto.webm",type:"video/webm"}),(0,o.kt)("source",{src:"/img/blog/1.13/dark-mode-auto.mp4",type:"video/mp4"})),(0,o.kt)("p",null,"There are three options available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"light")," \u2014 the default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto")," \u2014 will respect the user\u2019s system settings and switch automatically")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dashboard, {\n    theme: 'dark',\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(22946).Z,width:"1200",height:"940"})),(0,o.kt)("h2",{id:"custom-meta-fields"},"Custom meta fields"),(0,o.kt)("p",null,"This is big one! Thanks to @galli-leo, you can now add custom fields to the\nDashboard meta editor, such as ",(0,o.kt)("inlineCode",{parentName:"p"},'<input type="tel">'),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<select>")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},'<input type="checkbox">'),", like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dashboard, {\n    trigger: '#pick-files',\n    metaFields: [\n        {\n            id: 'caption',\n            name: 'Caption',\n            placeholder: 'describe what the image is about',\n        },\n        {\n            id: 'public',\n            name: 'Public',\n            render: ({ value, onChange }, h) => {\n                return h('input', {\n                    type: 'checkbox',\n                    onChange: (ev) => onChange(ev.target.checked ? 'on' : 'off'),\n                    defaultChecked: value === 'on',\n                });\n            },\n        },\n    ],\n});\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/dashboard/#metaFields"},"the docs")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2147"},"PR #2147")," for details."),(0,o.kt)("h2",{id:"google-docs-support-in-companion"},"Google Docs support in Companion"),(0,o.kt)("p",null,"In the past, Uppy could already import files from Google Drive using Companion.\nHowever, files from Google Docs are not ",(0,o.kt)("em",{parentName:"p"},"really")," files, and could not be\nimported. That was confusing for users: some of their files simply didn't\nappear!"),(0,o.kt)("p",null,"Companion now automagically converts GSuite documents, such as docs,\nspreadsheets and presentations, to ",(0,o.kt)("inlineCode",{parentName:"p"},".docx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".xlsx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".ppt")," files that can be\nopened in various applications. The current list of conversions is hardcoded to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "application/vnd.google-apps.document": ".docx",\n    "application/vnd.google-apps.drawing": ".png",\n    "application/vnd.google-apps.script": ".json",\n    "application/vnd.google-apps.spreadsheet": ".xlsx",\n    "application/vnd.google-apps.presentation": ".ppt"\n}\n')),(0,o.kt)("p",null,"This may be configurable in a future release."),(0,o.kt)("p",null,"Note that only documents under 10MB are converted. This is a limitation set by\nthe Google Drive API."),(0,o.kt)("h2",{id:"aws-s3"},"AWS S3"),(0,o.kt)("p",null,"The Aws S3 plugin now handles uploads internally, instead of deferring to XHR\nUpload. This change fixes many bugs with Aws S3. See\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2147"},"PR #2060")," for details."),(0,o.kt)("h2",{id:"locales"},"Locales"),(0,o.kt)("p",null,"Polish, Croatian and Romanian language packs have been added by @alfatv, @dkisic\nand @akizor \ud83c\udf89"),(0,o.kt)("h2",{id:"exifr-in-thumbnail-generator"},"Exifr in Thumbnail Generator"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/MikeKovarik"},"@MikeKovarik")," created an awesome library called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MikeKovarik/exifr"},"Exifr"),", useful for extracting EXIF image\ndata. He was kind enough to submit a PR that replaces Uppy\u2019s internal fork of\n",(0,o.kt)("inlineCode",{parentName:"p"},"exif-js")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"exifr"),". Our thumbnail generation is now faster and more robust!\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2140"},"PR 2140")," for details."),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@uppy/tus, @uppy/xhr-upload: emit error when companion returns error during\nupload creation (#2166 / @ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/transloadit: fix progress with very different Assembly runtimes (#2143 /\n@agreene-coursera)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/core: Only ",(0,o.kt)("inlineCode",{parentName:"li"},"_startIfAutoProceed")," if some files were actually added\n(#2146 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: emit error to client if download fails (#2139 /\n@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: validate all client provided upload data. (#2160 /\n@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/dashboard: Log warning instead of an error when trigger is not found\n(#2144 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/robodog: Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"hideUploadButton")," to Dashboard in Robodog too (#2169 /\n@arturi)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/aws-s3-multipart: emit ",(0,o.kt)("inlineCode",{parentName:"li"},"upload-error")," when companion returns error\nduring upload instantiation (#2168 / @ifedapoolarewaju)")),(0,o.kt)("p",null,"As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md"},"changelog"),"."))}m.isMDXComponent=!0},22946:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uppy-dashboard-dark-mar-2020-8404676e497ecef5f6832518f40f8fa6.png"}}]);
"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9879],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Uppy 0.23: Import from Url, refactored thumbnail generation, XHR bundle",date:new Date("2018-02-12T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2018/02/0.23"},l=void 0,i={permalink:"/blog/2018/02/0.23",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2018-02-0.23.md",source:"@site/blog/2018-02-0.23.md",title:"Uppy 0.23: Import from Url, refactored thumbnail generation, XHR bundle",description:"Hi all! We are back from holidays with a shiny new 0.23.0 release for you!",date:"2018-02-12T00:00:00.000Z",formattedDate:"February 12, 2018",tags:[],readingTime:9.285,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.23: Import from Url, refactored thumbnail generation, XHR bundle",date:"2018-02-12T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2018/02/0.23"},prevItem:{title:"Uppy 0.24: Refreshed Dashboard, StatusBar and Provider UI, revamped XHR Response Handling",permalink:"/blog/2018/04/0.24"},nextItem:{title:"Uppy 0.22: Preact, Form, Improved Dashboard, Custom Stores",permalink:"/blog/2017/12/0.22"}},s={authorsImageUrls:[void 0]},p=[{value:"Import from Url",id:"import-from-url",level:2},{value:"ThumbnailGenerator",id:"thumbnailgenerator",level:2},{value:"Processing results",id:"processing-results",level:2},{value:"Webcam",id:"webcam",level:2},{value:"Server",id:"server",level:2},{value:"Other Improvements and Additions",id:"other-improvements-and-additions",level:2},{value:"Other Fixes",id:"other-fixes",level:2},{value:"Press",id:"press",level:2},{value:"Full Changelog",id:"full-changelog",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hi all! We are back from holidays with a shiny new ",(0,r.kt)("inlineCode",{parentName:"p"},"0.23.0")," release for you!\nIt\u2019s packed with a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Url")," plugin (imports files from urls), refactored\n",(0,r.kt)("inlineCode",{parentName:"p"},"ThumbnailGenerator"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Webcam")," improvements and more."),(0,r.kt)("h2",{id:"import-from-url"},"Import from Url"),(0,r.kt)("p",null,"Meet our new \u201cProvider\u201d plugin, ",(0,r.kt)("inlineCode",{parentName:"p"},"Url"),". It\u2019s simple, yet powerful: paste a link\nto any file on the web, and Uppy with Uppy Server will upload it wherever you\nneed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Url, { target: Dashboard, host: YOUR_UPPY_SERVER_URL });\n")),(0,r.kt)("figure",{class:"wide"},(0,r.kt)("video",{alt:"Demo video showing Uppy with Url plugin that imports files from urls",controls:!0,autoplay:!0},(0,r.kt)("source",{src:"/img/blog/0.23/uppy-url-demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag, you can ",(0,r.kt)("a",{href:"/img/blog/0.23/uppy-url-demo.mp4"},"download the video")," to watch it.")),(0,r.kt)("h2",{id:"thumbnailgenerator"},"ThumbnailGenerator"),(0,r.kt)("p",null,"Thumbnail generation has been refactored to a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"ThumbnailGenerator"),"\nplugin, thanks to the PR from\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/richardwillars"},"@richardwillars"),". So Uppy Core is now more\nlightweight, if you don\u2019t need previews."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ThumbnailGenerator")," is still bundled with our most feature complete ",(0,r.kt)("inlineCode",{parentName:"p"},"Dashboard"),"\nplugin though, so you don\u2019t have to change anything if you were using that."),(0,r.kt)("p",null,"We\u2019ve also fixed previews in Safari and tweaked the code slightly after reading\nthe excellent\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.uploadcare.com/image-resize-in-browsers-is-broken-e38eed08df01"},"Image resize in browsers is broken"),"\npost by Uploadcare \ud83d\udc4c."),(0,r.kt)("h2",{id:"processing-results"},"Processing results"),(0,r.kt)("p",null,"Processing results from encoding plugins like\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/transloadit/"},(0,r.kt)("inlineCode",{parentName:"a"},"Transloadit")),", are now added to ",(0,r.kt)("inlineCode",{parentName:"p"},"complete"),"\nevent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('complete', (result) => {\n    console.log(result);\n    // result: {\n    //   failed: [...],\n    //   successful: [...],\n    //   transloadit: [...],\n    //   uploadID: \"cjdnzj2zy0000c___iewu9m5y\"\n    // }\n});\n")),(0,r.kt)("p",null,"And to ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.upload()")," promise result too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.upload().then((result) => {\n    console.log(result);\n});\n")),(0,r.kt)("p",null,"You can still use events like\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/transloadit/#transloadit-result"},(0,r.kt)("inlineCode",{parentName:"a"},"transloadit:result")),",\nits just easier when things are in the same place. Plugins can use the new\n",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.addResultData()")," API to add data to the ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),", like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.addResultData(uploadID, { transloadit: assemblies });\n")),(0,r.kt)("h2",{id:"webcam"},"Webcam"),(0,r.kt)("p",null,"The Webcam plugin now mirrors image previews by default, so when you are making\na selfie and wave with your right hand, you see that right hand in the Webcam\npreview, just like in the mirror. This option can be disabled via\n",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.use(Webcam, { mirror: false }"),". Note that the resulting image will not be\nmirrored, so your hand will actually be waving on the left. This mimics the\nbehaviour of smarphone selfie cameras."),(0,r.kt)("p",null,"We\u2019ve also added an option to select which camera will be used to capture\npictures or video:\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/webcam/#facingMode-39-user-39"},"facingMode"),", set to ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\n(front camera) by default."),(0,r.kt)("h2",{id:"server"},"Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can now specify a config path when starting the standalone Uppy Server\nlike so ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy-server --config /path/to/uppyconf.json"),". The config file is\nexpected to be a JSON file with the same schema as the\n",(0,r.kt)("a",{parentName:"li",href:"https://uppy.io/docs/server/#Options"},"Uppy Server options"),"."),(0,r.kt)("li",{parentName:"ul"},"A periodic cleanup job has been added to Uppy Server, to delete stale upload\nfiles from the specified ",(0,r.kt)("inlineCode",{parentName:"li"},"filePath"),". Even though we'd rarely expect uploaded\nfiles to go undeleted immediately, there could be cases where an error occurs\nduring an upload, and so Uppy Server leaves the file undeleted to give room\nfor upload retries. With the cleanup job in place, we can ensure that this\nfile would eventually be deleted after the file upload is done."),(0,r.kt)("li",{parentName:"ul"},"Responses from Multipart uploads are now relayed to Uppy Client as they are\nreceived from the target server. With this in place, you can now handle\nresponses from local and remote XHRUpload in nearly the same way.")),(0,r.kt)("h2",{id:"other-improvements-and-additions"},"Other Improvements and Additions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new option to hide ProgressBar and StatusBar after upload finish (#485 /\n@wilkoklak)"),(0,r.kt)("li",{parentName:"ul"},"Chaining API has been improved, you can now use ",(0,r.kt)("inlineCode",{parentName:"li"},".on")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".off")," anywhere:\n",(0,r.kt)("inlineCode",{parentName:"li"},"uppy.use(Dashboard).use(Tus).on('complete', handleComplete).run()")),(0,r.kt)("li",{parentName:"ul"},"The Transloadit plugin now has a new ",(0,r.kt)("inlineCode",{parentName:"li"},"transloadit:assembly-executing")," event\nand passes Assembly results to the ",(0,r.kt)("inlineCode",{parentName:"li"},"complete")," callback (#547, #527 /\n@goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"We\u2019ve added a ",(0,r.kt)("inlineCode",{parentName:"li"},"bundle")," option to the ",(0,r.kt)("inlineCode",{parentName:"li"},"XHRUpload")," plugin to send multiple files\nin one request (#442 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"Uppy releases are now hosted on Edgly CDN by Transloadit"),(0,r.kt)("li",{parentName:"ul"},"A Third-party extension for integrating the Ngrx Angular state management\nlibrary with Uppy has been released,\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rimlin/uppy-store-ngrx/"},"uppy-store-ngrx")," by @rimlin")),(0,r.kt)("h2",{id:"other-fixes"},"Other Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed blank preview thumbnails for images in Safari; use slightly different\nstep scaling (#458, #584 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"We now log in console and show an Informer message, not error in console, when\nfile cannot be added due to restrictions (#604, #492 / @goto-bus-stop)."),(0,r.kt)("li",{parentName:"ul"},"Unused files have been removed from published package, saving many many\nprecious megabytes :) (#586 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"Use empty input value so same file can be selected multiple times (@arturi /\n#534)"),(0,r.kt)("li",{parentName:"ul"},"Fix modal and page scroll (#564 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"Refactor provider views (#554 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"Lots of documentation fixes, thanks to all our contributors!")),(0,r.kt)("h2",{id:"press"},"Press"),(0,r.kt)("p",null,"Uppy has made some appearances on the internet recently."),(0,r.kt)("p",null,"1",".","\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://janko.io/better-file-uploads-with-shrine-direct-uploads/"},"Better File Uploads with Shrine: Direct Uploads")),":"),(0,r.kt)("p",null,"On how to set up Uppy with ",(0,r.kt)("a",{parentName:"p",href:"http://shrinerb.com/"},"Shrine"),", a file attachment\ntoolkit for Ruby applications. It starts off with an example of a plain ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>"),"\nupload and builds up to a more advanced experience:"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"When the user submits the form with selected files, there is no indicator\ntelling them when the upload will finish."),(0,r.kt)("li",{parentName:"ul"},"When the user is uploading multiple files at once and the request happens to\nget aborted, it\u2019s not possible to keep the files that were uploaded so far,\nbecause all files are sent in a single request. In other words, multiple\nuploads are all-or-nothing."),(0,r.kt)("li",{parentName:"ul"},"Files are validated only after they have been uploaded, which means the user\nneeds to wait until the upload finishes before they can know whether their\nfile was even valid.")),(0,r.kt)("p",{parentName:"blockquote"},"We can improve that by asynchronously starting to upload files on the client\nside as soon as they\u2019re selected. This also gives users the ability to\ncontinue filling in other fields while files are being uploaded, because the\nUI isn\u2019t blocked during the upload."),(0,r.kt)("p",{parentName:"blockquote"},"There are many popular JavaScript file upload libraries out there \u2013\njQuery-File-Upload, Dropzone.js, FineUploader etc. \u2013 but the one you should\nuse with Shrine is definitely Uppy \ud83d\udc36. Uppy is a modular library that knows\nhow to upload files to a custom endpoint on your app, to Amazon S3, or even to\na resumable endpoint, providing progress bars, drag & drop functionality,\nimage previews, file validations etc, all while making as few assumptions as\npossible.")),(0,r.kt)("p",null,"2","."," ",(0,r.kt)("strong",{parentName:"p"},"Featured\n",(0,r.kt)("a",{parentName:"strong",href:"https://twitter.com/JavaScriptDaily/status/950348390268919809"},"in Javascript Daily")),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Uppy: A Powerful, Modular JavaScript File Uploader")),(0,r.kt)("cite",null,"\u2014 JavaScript Daily"),(0,r.kt)("p",null,"3",".","\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://twitter.com/uppy_io/status/946485101541683201"},"#1 Trending on GitHub"),"\naccross all languages"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Today our open source efforts are outpacing those of MSFT GOOG FB combined :D")),(0,r.kt)("cite",null,"\u2014 kvz, transloadit"),(0,r.kt)("p",null,"4","."," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.producthunt.com/posts/uppy-io"},"#2 Product of the Week")," on\nProductHunt"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You literally solved my biggest problem, thank you for developing such a great\nproject.")),(0,r.kt)("cite",null,"\u2014 Chetan Menaria"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Writing file upload functionality is always a pain in the arse. I\u2019ll be\nchecking this out today and integrating into SongBox if it\u2019s good.")),(0,r.kt)("cite",null,"\u2014 Mick"),(0,r.kt)("p",null,"5",".","\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://stackshare.io/posts/top-developer-tools-2017"},"#2 New Tool of The Year"),"\non Stackshare"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Uppy closed out the year as the #1 trending GitHub JavaScript project, so we\nthink it\u2019s only getting started.")),(0,r.kt)("h2",{id:"full-changelog"},"Full Changelog"),(0,r.kt)("p",null,"Here is the full list of changes for version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.23.0")," (and patches\n",(0,r.kt)("inlineCode",{parentName:"p"},"0.22.1"),"\u2014",(0,r.kt)("inlineCode",{parentName:"p"},"0.22.5"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"core: Allow plugins to add data to result object. Return ",(0,r.kt)("inlineCode",{parentName:"li"},"processing")," results\namong with ",(0,r.kt)("inlineCode",{parentName:"li"},"upload")," results in ",(0,r.kt)("inlineCode",{parentName:"li"},"complete")," event and ",(0,r.kt)("inlineCode",{parentName:"li"},"upload()")," promise (#527 /\n@goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"core: Move limiting to different point, to fix StatusBar and other UI issues\n#468 (#524, #526 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"core: Add uploadID to complete event (#569 / @richardwillars)"),(0,r.kt)("li",{parentName:"ul"},"core: Allow chanining after .on() and .off() to improve ergonomics (#597 /\n@arturi)"),(0,r.kt)("li",{parentName:"ul"},"core: Allow user to override sass variables (#555 / @chao)"),(0,r.kt)("li",{parentName:"ul"},"core: Move preview generation to separate plugin, add queuing (#431 /\n@richardwillars)"),(0,r.kt)("li",{parentName:"ul"},"core: Third-party extension, uppy-store-ngrx\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rimlin/uppy-store-ngrx/"},"https://github.com/rimlin/uppy-store-ngrx/")," (#532 / @rimlin)"),(0,r.kt)("li",{parentName:"ul"},"core: Warn, not error, when file cannot be added due to restrictions? (#604,\n#492 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: Add more i18n strings (#565 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: Fix modal and page scroll (#564 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: Refactor provider views (#554 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: Restore focus after modal has been closed (#536 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: Use empty input value so same file can be selected multiple times\n(@arturi / #534)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: Use more accessible tip lib microtip (#536 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"docs: Add PHP snippets to XHRUpload docs (#567 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"meta: Added instruction to fork the repo first (#512 / muhammadInam)"),(0,r.kt)("li",{parentName:"ul"},"meta: Automatically host releases on edgly and use that as our main CDN (#558\n/ @kvz)"),(0,r.kt)("li",{parentName:"ul"},"meta: Dependency version updates (#523 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"meta: Remove unused files from published package (#586 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"s3: Respect ",(0,r.kt)("inlineCode",{parentName:"li"},"limit")," option for upload parameter requests too; fix isXml()\ncheck when no content-type is available (#545, #544, #528 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"statusbar: Fix status text still showing when statusbar is hidden (#525 /\n@goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"test: Alter jest testPathPattern to current dir, add chai (#583 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"thumbnail: Add thumbnail generation plugin (#461 / @richardwillars)"),(0,r.kt)("li",{parentName:"ul"},"thumbnail: Fix blank preview thumbnails for images in Safari; use slightly\ndifferent stap scaling (#458, #584 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"transloadit: Add ",(0,r.kt)("inlineCode",{parentName:"li"},"transloadit:assembly-executing")," event (#547 /\n@goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"transloadit: Add assembly results to to the ",(0,r.kt)("inlineCode",{parentName:"li"},"complete")," callback (#527 /\n@goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"transloadit: Easily pass form fields (#593 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"tus: ",(0,r.kt)("inlineCode",{parentName:"li"},"resume: false")," \u2014 don\u2019t store url (@arturi / #507)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: Detect file upload size from the server (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: Fix circular json stringify error (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: Load standalone server options via config path\n(@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: Pass response from uppy-server upload\u2019s endpoint (#591 /\n@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: Schedule job to delete stale upload files (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: Security audit, ask @acconut"),(0,r.kt)("li",{parentName:"ul"},"uppy-server: Support localhost urls as endpoints (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"url: New plugin that imports files from urls (#588 / @arturi,\n@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"webcam: Font styling for Webcam option (#509 / @muhammadInam)"),(0,r.kt)("li",{parentName:"ul"},"webcam: Mirror image preview, add option to select which camera is used to\ncapture, try filling the whole Dashboard with webcam preview image, remove\nURL.createObjectURL() (#574 / @arturi, @nqst)"),(0,r.kt)("li",{parentName:"ul"},"website: Add Transloadit example to website (#603 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"website: Doc fixes (#563 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"website: Improve the Contributing guide (#578 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"xhrupload: Add bundle option to send multiple files in one request (#442 /\n@goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"xhrupload: Prevent files from being uploaded multiple times in separate\nuploads (#552 / @richardwillars)"),(0,r.kt)("li",{parentName:"ul"},"xhrupload: Refactor response and error handling (#591 / @goto-bus-stop,\n@arturi, @ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"core: Fix remote uploads (#474 / @arturi)"),(0,r.kt)("li",{parentName:"ul"},"statusbar, progressbar: Add option to hide progress bar after upload finish\n(#485 / @wilkoklak)"),(0,r.kt)("li",{parentName:"ul"},'s3: Allow passing on XHRUpload options, such as "limit" to AwsS3 Plugin (#471\n/ @ogtfaber)'),(0,r.kt)("li",{parentName:"ul"},"XHRUpload: Fix progress with ",(0,r.kt)("inlineCode",{parentName:"li"},"limit"),"ed XHRUploads (#505 / @goto-bus-stop)"),(0,r.kt)("li",{parentName:"ul"},"core: fix error when ",(0,r.kt)("inlineCode",{parentName:"li"},"file.type === null"),", shouldn\u2019t pass that to match\n(@arturi)"),(0,r.kt)("li",{parentName:"ul"},'dashboard: input hidden="true" should not be focusable too (@arturi)'),(0,r.kt)("li",{parentName:"ul"},"webcam: Font styling for Webcam option (#509 / @muhammadInam)"),(0,r.kt)("li",{parentName:"ul"},"docs: fix reference to incorrect width/height options (#475 / @xhocquet)"),(0,r.kt)("li",{parentName:"ul"},"docs: Documentation fixes and improvements (#463 / @janko-m)"),(0,r.kt)("li",{parentName:"ul"},"docs: Fixed several typos in docs/server and docs/uppy (#484 / @martiuslim)")),(0,r.kt)("p",null,"The Uppy Team"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Uppy 1.7: A Small One",date:new Date("2020-01-10T00:00:00.000Z"),author:"renee",published:!0,image:"https://uppy.io/img/blog/1.7/cat-video-screen.jpg",slug:"2019/12/1.7"},i=void 0,l={permalink:"/blog/2019/12/1.7",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-12-1.7.md",source:"@site/blog/2019-12-1.7.md",title:"Uppy 1.7: A Small One",description:"Uppy 1.7 was released last December! This release added Hebrew translations, a",date:"2020-01-10T00:00:00.000Z",formattedDate:"January 10, 2020",tags:[],readingTime:2.655,hasTruncateMarker:!0,authors:[{name:"renee"}],frontMatter:{title:"Uppy 1.7: A Small One",date:"2020-01-10T00:00:00.000Z",author:"renee",published:!0,image:"https://uppy.io/img/blog/1.7/cat-video-screen.jpg",slug:"2019/12/1.7"},prevItem:{title:"Uppy 1.8 and 1.9: security, error handling and better types",permalink:"/blog/2020/03/1.9"},nextItem:{title:"Uppy 1.6: setOptions(), Icelandic and Thai",permalink:"/blog/2019/11/1.6"}},p={authorsImageUrls:[void 0]},s=[{value:"showRecordingLength: true",id:"showrecordinglength-true",level:2},{value:"Companion",id:"companion",level:2},{value:"Locales",id:"locales",level:2},{value:"Misc",id:"misc",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uppy 1.7 was released last December! This release added Hebrew translations, a\nrecording length timer for the ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/webcam")," plugin, and a collection of\nimprovements to Companion."),(0,o.kt)("h2",{id:"showrecordinglength-true"},"showRecordingLength: true"),(0,o.kt)("p",null,"When recording audio or video using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/webcam")," plugin, this new option\ncontributed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dominiceden"},"@dominiceden")," shows a timer in\nthe bottom right, so your users can see how long they\u2019ve been recording for."),(0,o.kt)("video",{alt:"Demo video showing Uppy Webcam video recording timer",muted:!0,autoplay:!0,loop:!0},(0,o.kt)("source",{src:"/img/blog/1.7/cat-video-timer.webm",type:"video/webm"}),(0,o.kt)("source",{src:"/img/blog/1.7/cat-video-timer.mp4",type:"video/mp4"})),(0,o.kt)("h2",{id:"companion"},"Companion"),(0,o.kt)("p",null,"The past months we\u2019ve made some incremental improvements to Companion. We\npatched an issue where Companion could sometimes output remote provider\nauthentication tokens into logs."),(0,o.kt)("p",null,"We now run Companion tests on Node.js 6 on each commit, in addition to Node.js\n10, to make sure that we don\u2019t break compatibility in a minor release. Node.js 6\nsupport will be dropped in a future major release, and we recommend you upgrade\nsoon if you are still using it."),(0,o.kt)("p",null,"Uploading files from remote providers with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," plugin\nnow uses the correct file name in your S3 bucket by default, instead of the\ntemporary filename that Companion uses internally."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getKey()")," option for S3 now has a\n",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/#s3-getKey-req-filename-metadata"},(0,o.kt)("inlineCode",{parentName:"a"},"metadata")),"\nparameter, so you can use file metadata from the client to determine the name of\nfiles in S3."),(0,o.kt)("h2",{id:"locales"},"Locales"),(0,o.kt)("p",null,"The new Hebrew locale is available as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"require('@uppy/locales/lib/he_IL');\n")),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/YehudaKremer"},"@YehudaKremer")," for the contribution!"),(0,o.kt)("p",null,"In 1.7, we also fixed the naming of the Galician locale. The locale names follow\na ",(0,o.kt)("inlineCode",{parentName:"p"},"country_LANGUAGE")," format. Previously, we used ",(0,o.kt)("inlineCode",{parentName:"p"},"es_GL")," for Galician, which was\nintended to mean \u201cGalician in Spain\u201d, but which ",(0,o.kt)("em",{parentName:"p"},"actually")," means \u201cSpanish in\nGreenland\u201d! The correct way to refer to Galician is as ",(0,o.kt)("inlineCode",{parentName:"p"},"gl_ES"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"require('@uppy/locales/lib/gl_ES');\n")),(0,o.kt)("p",null,"The old ",(0,o.kt)("inlineCode",{parentName:"p"},"es_GL")," name is now an alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"gl_ES"),". It will be removed in a future\nmajor release, so we recommend updating your code if you were using the old\nname. If you do it now, the migration will be easier once 2.0 comes around\n\ud83d\ude04"),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@uppy/aws-s3: add some tests (@bambii7, #1934)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: add onedrive domain validation for the demo deployment\n(@ifedapoolarewaju, #1959)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: change demo deployment type to stable API (@kiloreux, #1938)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: rename uppy occurrences to companion (@ifedapoolarewaju,\n#1926)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: upgrade ",(0,o.kt)("inlineCode",{parentName:"li"},"helmet")," (@goto-bus-stop,\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/6b006ac42c20062c37bdcaf6a77e07b304da7957"},"6b006ac"),")"),(0,o.kt)("li",{parentName:"ul"},"@uppy/core: make ",(0,o.kt)("inlineCode",{parentName:"li"},"uppy.on()")," work better with IntelliSense (@bambii7, #1923)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/dashboard: hide top bar cancel button when ",(0,o.kt)("inlineCode",{parentName:"li"},"hideCancelButton: true"),"\n(@goto-bus-stop, #1955)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/thumbnail-generator: add webp to the list of supported types (@arturi,\n#1961)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/thumbnail-generator: vendor exif-js source in Uppy (@mskelton, #1940)"),(0,o.kt)("li",{parentName:"ul"},"docs: FB and OneDrive are not yet in the CDN bundle (@goto-bus-stop,\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/61b54b914dd437d2e60362c4ece1429943b32555"},"61b54b9"),")"),(0,o.kt)("li",{parentName:"ul"},"docs: add ",(0,o.kt)("inlineCode",{parentName:"li"},"companionHeaders")," to s3-multipart docs (@goto-bus-stop,\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/a6e44a953114e385466dcce884d37e433f030549"},"a6e44a9"),")"),(0,o.kt)("li",{parentName:"ul"},"docs: add reset-progress event to docs (@bambii7, #1922)"),(0,o.kt)("li",{parentName:"ul"},"docs: make Robodog naming more consistent (@goto-bus-stop, #1935)"),(0,o.kt)("li",{parentName:"ul"},"docs: make react sample code more standalone (@uxitten, #1864)"),(0,o.kt)("li",{parentName:"ul"},"examples: remove ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPYSERVER_")," references (@goto-bus-stop,\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/e74690e20cc0a1afd9156ce03b1ca6a5358cc7d9"},"e74690e"),")"),(0,o.kt)("li",{parentName:"ul"},"website: add facebook to dashboard example (@ifedapoolarewaju, #1930)"),(0,o.kt)("li",{parentName:"ul"},"website: add plugin versions (@arturi, #1952)"),(0,o.kt)("li",{parentName:"ul"},"website: enable onedrive on the website example (@ifedapoolarewaju, #1975)")),(0,o.kt)("p",null,"As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md"},"changelog"),"."))}c.isMDXComponent=!0}}]);
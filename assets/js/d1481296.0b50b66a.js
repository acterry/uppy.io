"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Uppy 1.3: Accessibility and performance, new languages",date:new Date("2019-08-05T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2019/08/1.3"},i=void 0,p={permalink:"/blog/2019/08/1.3",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-08-1.3.md",source:"@site/blog/2019-08-1.3.md",title:"Uppy 1.3: Accessibility and performance, new languages",description:"Hi there! We are back after a period of silence following the",date:"2019-08-05T00:00:00.000Z",formattedDate:"August 5, 2019",tags:[],readingTime:7.19,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.3: Accessibility and performance, new languages",date:"2019-08-05T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2019/08/1.3"},prevItem:{title:"Uppy 1.5: Facebook and OneDrive (beta) support, upload cancellation",permalink:"/blog/2019/10/1.5"},nextItem:{title:"Uppy 1.0: Your best friend in file uploading",permalink:"/blog/2019/04/1.0"}},l={authorsImageUrls:[void 0]},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hi there! We are back after a period of silence following the\n",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2019/04/1.0/"},"Uppy 1.0 release")," in the end of April. It\nwas pretty well received by the commnunity and press: we hit the front pages of\nHacker News, ",(0,a.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy-1-0/"},"Product Hunt")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/javascript/comments/bhkx5k/uppy_10_your_best_friend_in_file_uploading/"},"Reddit"),".\nWe then started trending and gained over 20,000 stargazers on GitHub, got\nmentioned by\n",(0,a.kt)("a",{parentName:"p",href:"https://mobile.twitter.com/smashingmag/status/1097870169043546112"},"Smashing Magazine"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/JavaScriptDaily/status/1122935583603556352"},"JavaScript Daily"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://javascriptweekly.com/issues/434"},"JavaScript Weekly"),". It\u2019s been a\ncrazy ride! We\u2019d like to thank all our contributors and users for their\ncontinued support."),(0,a.kt)("p",null,"It was not all self reflection and celebrations, though, in Uppy Remote\nHeadquaters\u2122 following the ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0")," launch. After some vacation time, we quickly\ngot back to work, releasing Uppy ",(0,a.kt)("inlineCode",{parentName:"p"},"1.1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1.3"),". These updates address a\nlot of issues raised by the community and the team."),(0,a.kt)("p",null,"This post highlights the most important and exciting changes from those\nreleases: accessibility and performance, thumbnails rotatation, new logger,\nprogress and uploader improvements, Robodog and Companion updates, new languages\nand more."))}m.isMDXComponent=!0}}]);
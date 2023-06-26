"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,y=c["".concat(s,".").concat(m)]||c[m]||g[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Uppy 0.29: separate Core and Plugin styles, React Native in tus-js-client",date:new Date("2018-12-11T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/0.29/uppy-core-plugins-separate-styles.jpg",published:!0,slug:"2018/12/0.29"},i=void 0,p={permalink:"/blog/2018/12/0.29",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2018-12-0.29.md",source:"@site/blog/2018-12-0.29.md",title:"Uppy 0.29: separate Core and Plugin styles, React Native in tus-js-client",description:"0.29 brings bug fixes and improvements, while we are busy working on Uppy",date:"2018-12-11T00:00:00.000Z",formattedDate:"December 11, 2018",tags:[],readingTime:3.73,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.29: separate Core and Plugin styles, React Native in tus-js-client",date:"2018-12-11T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/0.29/uppy-core-plugins-separate-styles.jpg",published:!0,slug:"2018/12/0.29"},prevItem:{title:"Uppy 0.30: Introducing Robodog",permalink:"/blog/2019/03/0.30"},nextItem:{title:"Uppy 0.28: A look behind the scenes",permalink:"/blog/2018/10/0.28"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/blog/0.29/uppy-core-plugins-separate-styles.jpg"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0.29")," brings bug fixes and improvements, while we are busy working on Uppy\nReact Native support (which first had to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client#react-native-support"},"land in the js client for our resumable file upload protocol: tus.io"),")\nand a Preset (still debating the name) which will make it easier to leverage\nTransloadit's encoding platform, and offer a smooth migration path for users not\nyet on Uppy. The highlights of this release are: separating Core and Plugin\nstyles, more accurate progress reporting by factoring in sizes across files,\nadding a ",(0,a.kt)("inlineCode",{parentName:"p"},"responseType")," option for XHR Upload, and fixing visual Webcam bugs."))}g.isMDXComponent=!0}}]);
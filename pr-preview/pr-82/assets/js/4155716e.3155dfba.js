"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5503],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={title:"Uppy 1.5: Facebook and OneDrive (beta) support, upload cancellation",date:new Date("2019-10-11T00:00:00.000Z"),author:"renee",published:!0,slug:"2019/10/1.5"},r=void 0,l={permalink:"/uppy.io/blog/2019/10/1.5",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-10-1.5.md",source:"@site/blog/2019-10-1.5.md",title:"Uppy 1.5: Facebook and OneDrive (beta) support, upload cancellation",description:"In the past two months, we have halved our open issue count and worked on a much",date:"2019-10-11T00:00:00.000Z",formattedDate:"October 11, 2019",tags:[],readingTime:8.435,hasTruncateMarker:!0,authors:[{name:"renee"}],frontMatter:{title:"Uppy 1.5: Facebook and OneDrive (beta) support, upload cancellation",date:"2019-10-11T00:00:00.000Z",author:"renee",published:!0,slug:"2019/10/1.5"},prevItem:{title:"Uppy 1.6: setOptions(), Icelandic and Thai",permalink:"/uppy.io/blog/2019/11/1.6"},nextItem:{title:"Uppy 1.3: Accessibility and performance, new languages",permalink:"/uppy.io/blog/2019/08/1.3"}},s={authorsImageUrls:[void 0]},p=[{value:"Issue busting",id:"issue-busting",level:2},{value:"Duplicate files",id:"duplicate-files",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Cancellation",id:"cancellation",level:2},{value:"Lerna lerna lerna",id:"lerna-lerna-lerna",level:2},{value:"Localization",id:"localization",level:2},{value:"Facebook and OneDrive",id:"facebook-and-onedrive",level:2},{value:"Revoke Companion\u2019s Provider access on logout",id:"revoke-companions-provider-access-on-logout",level:2},{value:"Misc",id:"misc",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the past two months, we have halved our open issue count and worked on a much\nmore robust approach to upload cancellation. Members of the community also\ncontributed a bunch of new localizations: Czech, Danish, Greek, Indonesian, and\nSwedish!"),(0,o.kt)("p",null,"We are also releasing beta versions of new remote providers for Facebook and\nOneDrive. Please try them out!"),(0,o.kt)("h2",{id:"issue-busting"},"Issue busting"),(0,o.kt)("p",null,"Our issue tracker was getting pretty full over the past year, topping out at\nabout 120 open issues. Some had been open for months without any reply! Issues\nwere being opened at such a rate that it was almost too much for our small team\nto handle. So, we sat down to go through everything together and started setting\nup a process to make sure our issue list doesn't get out of hand again in the\nfuture."),(0,o.kt)("p",null,"When opening a new issue, we now ask you to mark it as a bug or a feature\nrequest. The issue will also get a \u201cTriage\u201d label, indicating that an Uppy team\nmember needs to sort it. If there are many \u201cTriage\u201d issues open at any point, we\nwill discuss them in our weekly team call. New issues will also be assigned to a\nspecific team member as soon as possible, so each of us has a much smaller and\nmore manageable list of issues to keep track of."),(0,o.kt)("p",null,"To keep the issue tracker focused on Uppy features and bugs, detailed support\nquestions should go to Transloadit's\n",(0,o.kt)("a",{parentName:"p",href:"https://community.transloadit.com/"},"community forum"),"."),(0,o.kt)("h2",{id:"duplicate-files"},"Duplicate files"),(0,o.kt)("p",null,"Up until now, if you added a file that had been already added to Uppy some time\nbefore \u2014 i.e., a file with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedDate")," etc. \u2014 the old\nfile would be silently replaced with a new one. This changes with v1.5:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Uppy now throws a warning if a file with the same ",(0,o.kt)("inlineCode",{parentName:"li"},"file.id")," already exist.\nThe new file will not be added and the old file will not be replaced."),(0,o.kt)("li",{parentName:"ol"},"We are adding the ",(0,o.kt)("inlineCode",{parentName:"li"},"file.meta.relativePath")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"file.id"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"relativePath"),"\nexists on files that have been dropped together with a folder. This means\nthat if you drop a folder with ",(0,o.kt)("inlineCode",{parentName:"li"},"folder/a.jpg")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"folder/subfolder/a.jpg"),",\nboth ",(0,o.kt)("inlineCode",{parentName:"li"},"a.jpg"),"s will be added, since they come from different folders and this\nkind of duplication might be intended.")),(0,o.kt)("p",null,"See PR ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1767"},"#1767")," for details."),(0,o.kt)("h2",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"Files in the Dashboard no longer have an icon indicating where they came from\n(local device, GDrive, etc.). We think it's nice for developers to see, but not\nthat useful for most end users. If you want to re-enable it, you can add the\nfollowing CSS to your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".uppy-DashboardItem-sourceIcon {\n    display: inline-block;\n}\n")),(0,o.kt)("p",null,"The difference is very small. The icons used to be next to the file size, as\nseen here in Uppy v1.3:\n",(0,o.kt)("img",{alt:"Uppy Dashboard v1.3, with file source icon",src:a(7143).Z,width:"1432",height:"573"})),(0,o.kt)("p",null,"Now, in v1.5, they\u2019re gone:\n",(0,o.kt)("img",{alt:"Uppy Dashboard v1.5, without file source icon",src:a(9459).Z,width:"1470",height:"557"})),(0,o.kt)("p",null,"Additionally:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Editing a file now fires ",(0,o.kt)("inlineCode",{parentName:"li"},"dashboard:file-edit-start")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"dashboard:file-edit-complete")," events\n(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1776"},"#1776"),")"),(0,o.kt)("li",{parentName:"ul"},"Excessive debug logging is reduced\n(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1747"},"#1747"),")"),(0,o.kt)("li",{parentName:"ul"},"Fixes to the TypeScript typings were submitted by @mrbatista and\n@MatthiasKunnen")),(0,o.kt)("h2",{id:"cancellation"},"Cancellation"),(0,o.kt)("p",null,"Our old approach to limiting the amount of simultaneous uploads had some\nproblems. Uploads were queued by chaining Promises, but they did not respect\ncancellation. So, if you cancelled an upload while some files were still waiting\nto start, those files would actually start uploading even though they had\nalready been removed. Obviously, that's pretty bad!"),(0,o.kt)("p",null,"PR ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1736"},"#1736")," addresses this by\nripping out the old limiting code and replacing it with a new,\ncancellation-aware upload queue. We\u2019ve also added a browser test to make sure\nthat this thing stays resilient:"),(0,o.kt)("video",{alt:"Demo video showing an automated Chaos Monkey session with Uppy",muted:!0,autoplay:!0,loop:!0},(0,o.kt)("source",{src:"/img/blog/1.5/chaos-monkey.webm",type:"video/webm"}),(0,o.kt)("source",{src:"/img/blog/1.5/chaos-monkey.mp4",type:"video/mp4"})),(0,o.kt)("h2",{id:"lerna-lerna-lerna"},"Lerna lerna lerna"),(0,o.kt)("p",null,"In August, we bit the bullet and used Lerna\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna link convert")," feature. Now,\nall the packages in our monorepo depend on each other, using\n",(0,o.kt)("inlineCode",{parentName:"p"},"file:../packagename/")," paths instead of version numbers. The entire repository\nis one big dependency tree in npm's view. Npm can install the entire thing on\nits own, without ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna bootstrap"),"\u2019s help! Since npm manages the entire tree,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file in the repository root contains everything we need.\nWe can now use the faster ",(0,o.kt)("inlineCode",{parentName:"p"},"npm ci")," install command on CI, saving more than sixty\nseconds on every run \ud83c\udf89"),(0,o.kt)("p",null,"As part of this effort, we also added all our examples to the lerna-managed\ntree, so you no longer have to do ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," in example folders to use them."),(0,o.kt)("p",null,"This change makes working on the repository much easier, since dependencies are\nhandled in the same way as in any other repository, simply by doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("h2",{id:"localization"},"Localization"),(0,o.kt)("p",null,"Thanks to multiple contributors, Uppy now knows Czech, Danish, Greek,\nIndonesian, and Swedish, on top of the nineteen languages that were already\nsupported! The Serbian locale is now available in both the Cyrillic and Latin\nscripts. Big thanks to @achmiral, @arggh, @czj, @jukakoski, @marcusforberg,\n@nndevstudio, @Pzoco, @Tashows, and @tvaliasek for their efforts \u2728"),(0,o.kt)("p",null,"New translations are rolling in every month, but there are plenty more languages\nout there that Uppy would love to learn. Please consider\n",(0,o.kt)("a",{parentName:"p",href:"/docs/locales/#Contributing-a-new-language"},"contributing your language")," as\nwell!"),(0,o.kt)("h2",{id:"facebook-and-onedrive"},"Facebook and OneDrive"),(0,o.kt)("p",null,"This release adds two experimental new remote providers: Facebook and OneDrive.\nFor now, they are not available through the ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy")," package. To use them, install\n",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/facebook")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/onedrive"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @uppy/facebook\nnpm install @uppy/onedrive\n")),(0,o.kt)("p",null,"Configure Companion to access the Facebook and OneDrive APIs, using environment\nvariables or the JS API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export COMPANION_FACEBOOK_KEY="***"\nexport COMPANION_FACEBOOK_SECRET="***"\nexport COMPANION_ONEDRIVE_KEY="***"\nexport COMPANION_ONEDRIVE_SECRET="***"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"providerOptions: {\n  facebook: {\n    key: '',\n    secret: ''\n  },\n  // For OneDrive\u2019s key & secret pair, please use `microsoft` option key\n  microsoft: {\n    key: '',\n    secret: ''\n  }\n}\n")),(0,o.kt)("p",null,"Then use them like the existing providers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Facebook = require('@uppy/facebook');\nconst OneDrive = require('@uppy/onedrive');\n\nuppy.use(Facebook, { companionUrl: YOUR_COMPANION_URL });\nuppy.use(OneDrive, { companionUrl: YOUR_COMPANION_URL });\n")),(0,o.kt)("p",null,"We\u2019re still waiting for our developer keys to be approved, so we don't have\nworking examples on the website yet! We\u2019ll let you know on\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io"},"Twitter")," when they\u2019re live."),(0,o.kt)("p",null,"Once these new providers have been tested for a while, we will release them as\n1.0 and include them in the main Uppy and Robodog bundles."),(0,o.kt)("h2",{id:"revoke-companions-provider-access-on-logout"},"Revoke Companion\u2019s Provider access on logout"),(0,o.kt)("p",null,"Up until now, when users clicked \u201clogout\u201d after using a remote Provider, such as\nGoogle Drive or Dropbox, Uppy would destroy the access token. But on the\nProvider\u2019s side, Uppy was still allowed access. Should the user click \u201cConnect\nto Google Drive\u201d again, no extra confirmation was required."),(0,o.kt)("p",null,"After a discussion in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/1563"},"#1563"),",\nwe are expanding the logout process. Now, when users log out of remote Providers\nthrough Uppy, Companion will destroy the token as before, but also attempt to\nrevoke the access from the corresponding Provider. In the event that the\nProvider doesn\u2019t support access revoke via it\u2019s API, Uppy will display a helpful\nmessage informing users how they can revoke the permissions manually."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1843"},"#1843")," for details."),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@uppy/aws-s3-multipart: fix queueing behaviors, especially interaction with\ncancellation (@goto-bus-stop, #1855)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/aws-s3: replace browser-only resolve-url by isomorphic url-parse\n(@goto-bus-stop, #1854)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion-client: rename serverHeaders to companionHeaders\n(@goto-bus-stop, #1861)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: Fix S3 uploads for URL plugins (#1784 / @@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: bump lodash.merge to 4.6.2 to fix audit warning (#1796 /\n@rettgerst)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: set allowed HTTP methods internally (#1754 /\n@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: whenever an error is returned from Companion: the auth screen\nwill be displayed if the user was never authenticated; if the user is\nauthenticated, the last screen on display before the error will be displayed\n(#1743 / @ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/core: Made sure we can upload new files if we cancel last file\n(allowMultipleUploads: false) (#1764 / @lakesare)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/core: fix \"Cannot read property 'log' of undefined\" (#1785 / @theJoeBiz)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/core: use setFileState inside retryUpload (#1759 / @goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/dashboard, @uppy/drag-drop: getDroppedFiles.js: handle exceptions better\n(#1797 / @lakesare)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/form: try/catch parsing, set updatedResult to an empty array when not an\narray (#1800 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/locales: Finnish semantics improved and fixed some typos (#1744 /\n@jukakoski)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/locales: Update sr_RS_Latin.js (#1749 / @nndevstudio)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/locales: correct some fr_FR localization strings (#1807 / @czj)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/locales: fix typo in Persian locale (@uxitten, #1865)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/locales: improve Swedish translation (@marcusforberg, #1859)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/thumbnail-generator: add waitForThumbnailsBeforeUpload option, false by\ndefault (@arturi, #1803)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/transloadit: add limit option, warn about using limit when it\u2019s set\nto 0. In Uppy 2.0 we\u2019ll set the limit to something sensible (like 10 files) by\ndefault. (#1789 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/transloadit: pin socket.io version to ES5 compatible one\n(@goto-bus-stop,\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/5839b655f093edaa778d49b719f7dda063ef79cb"},"https://github.com/transloadit/uppy/commit/5839b655f093edaa778d49b719f7dda063ef79cb"),")"),(0,o.kt)("li",{parentName:"ul"},"@uppy/xhr-upload: Throw an error when trying to upload a remote file with\n",(0,o.kt)("inlineCode",{parentName:"li"},"bundle: true")," (#1769 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"build: Fix statefulset update: statefulsets image only should be updated.\n(#1821 / @kiloreux)"),(0,o.kt)("li",{parentName:"ul"},"build: Update eslint to v6 (#1777 / @goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"build: ci: tweak job run order (#1740 / @goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"core: Made addFile return the file id (#1739 / @eliOcs)"),(0,o.kt)("li",{parentName:"ul"},"docs: Link to Transloadit plugin from Robodog Form page (#1810 / @janko)"),(0,o.kt)("li",{parentName:"ul"},"docs: Talk about using a custom-file input, instead of the file-input plugin\n(#1765 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"docs: add \u201cforce metafield\u201d to docs and changelog\n(ab053e7ab266d3a4838069ed23675bb9211e4d1a / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"docs: explicitly document supported tus-js-client options (#1755 /\n@goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"docs: fix typo (@leftdevel, #1852)"),(0,o.kt)("li",{parentName:"ul"},"docs: redux - mentioned that we can't persist Uppy state (#1793 / @lakesare)"),(0,o.kt)("li",{parentName:"ul"},"docs: remove pre-1.0 notice from changelog (@mskelton, #1858)"),(0,o.kt)("li",{parentName:"ul"},"docs: talk about marking some files as \u201calready uploaded\u201d\n(c345cbd58992f7bea9525629c28d38420c6b36a3 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"test: add end-to-end test with retries (@ifedapoolarewaju, #1766)"),(0,o.kt)("li",{parentName:"ul"},"tests: e2e: reintroduce e2e test for providers locally (#1706 /\n@ifedapoolarewaju)"),(0,o.kt)("li",{parentName:"ul"},"website: /examples/dragdrop - added more obvious 'file was uploaded' indicator\n(#1750 / @lakesare)"),(0,o.kt)("li",{parentName:"ul"},"website: /examples/xhrupload - more obvious UI, added a list of uploaded files\n(#1768 / @lakesare)"),(0,o.kt)("li",{parentName:"ul"},"website: add new version of hexo-filter-github-emojis (#1783 / @lakesare)"),(0,o.kt)("li",{parentName:"ul"},"website: fix docs/locales code escaping and css overflow\n(5a0055c15d04d97e8a0feb784daa7abe8da1d72d / @arturi)")),(0,o.kt)("p",null,"As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md"},"changelog"),"."))}c.isMDXComponent=!0},7143:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/with-source-icon-1688bd96924f14cffa611f00163cb978.png"},9459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/without-source-icon-8a537cd041e1aecd14dd6bc425d83a59.png"}}]);
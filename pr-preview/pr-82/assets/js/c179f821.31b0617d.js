"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3699],{3068:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),i=r(814),s=r(3612);const n=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.3.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.3.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/locales":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.3.1","@docusaurus/module-type-aliases":"^2.3.1","@tsconfig/docusaurus":"^1.0.7","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=n;function l(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:n="uppy.min.js"}=e,l=[];a.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${o}/${n}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(s.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(i.Z,{language:"html"},d))}},9827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var a=r(7462),i=r(7294),s=r(3905),n=(r(4866),r(5162),r(3068),r(9960));const o="section_kw8a",l="item_MAQH",p=e=>i.createElement("section",{className:o},e.items.map((e=>i.createElement(n.Z,{to:e.link},i.createElement("div",{className:l},i.createElement("h2",null,e.name),i.createElement("p",null,e.description)))))),u={sidebar_position:1},d="Quick start",c={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/uppy.io/docs/quick-start",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Choosing the uploader you need",permalink:"/uppy.io/docs/guides/choosing-uploader"}},m={},k=[{value:"Features",id:"features",level:2}],h={toc:k},f="wrapper";function y(e){let{components:t,...r}=e;return(0,s.kt)(f,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quick-start"},"Quick start"),(0,s.kt)("p",null,"Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly\nwith any application. It\u2019s fast, has a comprehensible API and lets you worry\nabout more important problems than building a file uploader."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Fetch")," files from local disk, remote URLs, Google Drive, Dropbox, Box,\nInstagram or snap and record selfies with a\xa0camera"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Preview")," and edit metadata with a nice interface"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Upload")," to the final destination, optionally process/encode")),(0,s.kt)("h2",{id:"features"},"Features"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lightweight, modular plugin-based architecture, light on dependencies \u26a1"),(0,s.kt)("li",{parentName:"ul"},"Resumable file uploads via the open ",(0,s.kt)("a",{parentName:"li",href:"https://tus.io/"},"tus")," standard, so large\nuploads survive network hiccups"),(0,s.kt)("li",{parentName:"ul"},"Supports picking files from: Webcam, Dropbox, Box, Google Drive, Instagram,\nbypassing the user\u2019s device where possible, syncing between servers directly\nvia ",(0,s.kt)("a",{parentName:"li",href:"/docs/companion"},"@uppy/companion")),(0,s.kt)("li",{parentName:"ul"},"Works great with file encoding and processing backends, such as\n",(0,s.kt)("a",{parentName:"li",href:"https://transloadit.com"},"Transloadit"),", works great without (all you need is\nto roll your own Apache/Nginx/Node/FFmpeg/etc backend)"),(0,s.kt)("li",{parentName:"ul"},"Sleek user interface \u2728"),(0,s.kt)("li",{parentName:"ul"},"Optional file recovery (after a browser crash) with\n",(0,s.kt)("a",{parentName:"li",href:"/docs/golden-retriever/"},"Golden Retriever")),(0,s.kt)("li",{parentName:"ul"},"Speaks several languages (i18n) \ud83c\udf0d"),(0,s.kt)("li",{parentName:"ul"},"Built with accessibility in mind"),(0,s.kt)("li",{parentName:"ul"},"Free for the world, forever (as in beer \ud83c\udf7a, pizza \ud83c\udf55, and liberty \ud83d\uddfd)"),(0,s.kt)("li",{parentName:"ul"},"Cute as a puppy, also accepts cat pictures \ud83d\udc36")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can take Uppy for a walk inside\n",(0,s.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,s.kt)(p,{items:[{name:"Examples",description:"Try out one of our extensive example projects",link:"https://github.com/transloadit/uppy/tree/main/examples"},{name:"Uploaders",description:"Choosing the uploader you need",link:"/docs/guides/choosing-uploader"},{name:"Dashboard",description:"Powerful, responsive, and pluggable UI",link:"/docs/dashboard"},{name:"Companion",description:"Download files from remote sources on the server",link:"/docs/companion"}],mdxType:"QuickStartLinks"}))}y.isMDXComponent=!0}}]);
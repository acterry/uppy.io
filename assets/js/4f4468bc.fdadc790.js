"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6990],{3068:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),s=r(814),a=r(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git diff --quiet || (echo \'Unable to show a diff because there are unstaged changes\'; false) && (prettier . -w --loglevel silent && git --no-pager diff; git restore .)","format:check":"prettier -c .","format:check-diff":"yarn format:check || (yarn format:show-diff && false)","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.3.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.3.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/locales":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.3.1","@docusaurus/module-type-aliases":"^2.3.1","@tsconfig/docusaurus":"^1.0.7","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=i;function l(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,l=[];n.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),m=`https://releases.transloadit.com/uppy/v${o}/${i}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,m)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(a.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(s.Z,{language:"html"},u))}},9408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=r(7462),s=(r(7294),r(3905)),a=r(4866),i=r(5162),o=r(3068);const l={sidebar_position:12},p="Compressor",m={unversionedId:"compressor",id:"compressor",title:"Compressor",description:"The @uppy/compressor plugin optimizes images (JPEG, PNG, and any other format",source:"@site/docs/compressor.mdx",sourceDirName:".",slug:"/compressor",permalink:"/docs/compressor",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/compressor.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Golden Retriever",permalink:"/docs/golden-retriever"},next:{title:"Form",permalink:"/docs/form"}},u={},d=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"Events",id:"events",level:2},{value:"<code>compressor:complete</code>",id:"compressorcomplete",level:4}],c={toc:d},h="wrapper";function k(e){let{components:t,...r}=e;return(0,s.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"compressor"},"Compressor"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"@uppy/compressor")," plugin optimizes images (JPEG, PNG, and any other format\nsupported by the client\u2019s browser) before upload, saving up to 60% in size\n(roughly 18 MB for 10 images). It uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs"},"Compressor.js")," library under the hood."),(0,s.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,s.kt)("p",null,"When your users are likely to upload images, potentially on mobile devices, and\nsaving data and faster uploads are important."),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)(a.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/compressor\n"))),(0,s.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/compressor\n"))),(0,s.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,s.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Compressor } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Compressor, {\n          // Options\n        })\n      '))),(0,s.kt)("h2",{id:"use"},"Use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{7} showLineNumbers","{7}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Compressor from '@uppy/compressor';\n\nnew Uppy()\n  .use(Dashboard, {inline:true, target: '#dashboard')\n  .use(Compressor);\n")),(0,s.kt)("p",null,"No action is needed from the user \u2014 Uppy will automatically optimize images,\nshow an ",(0,s.kt)("a",{parentName:"p",href:"/docs/informer"},"Informer")," message with saved bytes, and then begin the\nupload as usual."),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can also pass any of the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs#options"},"Compressor.js options")," here as well.")),(0,s.kt)("h4",{id:"id"},(0,s.kt)("inlineCode",{parentName:"h4"},"id")),(0,s.kt)("p",null,"A unique identifier for this plugin (",(0,s.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,s.kt)("inlineCode",{parentName:"p"},"'Compressor'"),")."),(0,s.kt)("h4",{id:"quality"},(0,s.kt)("inlineCode",{parentName:"h4"},"quality")),(0,s.kt)("p",null,"The quality of the output image passed to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs"},"Compressor.js")," (",(0,s.kt)("inlineCode",{parentName:"p"},"number"),", default:\n",(0,s.kt)("inlineCode",{parentName:"p"},"0.6"),")."),(0,s.kt)("p",null,"It must be a number between ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),". Be careful to use ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," as it may make\nthe size of the output image become larger. In most cases, going with the\ndefault value is best."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This option is only available for ",(0,s.kt)("inlineCode",{parentName:"p"},"image/jpeg")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"image/webp")," images.")),(0,s.kt)("h4",{id:"limit"},(0,s.kt)("inlineCode",{parentName:"h4"},"limit")),(0,s.kt)("p",null,"Number of images that will be compressed in parallel (",(0,s.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,s.kt)("inlineCode",{parentName:"p"},"10"),")."),(0,s.kt)("p",null,"You likely don\u2019t need to change this, unless you are experiencing performance\nissues."),(0,s.kt)("h4",{id:"locale"},(0,s.kt)("inlineCode",{parentName:"h4"},"locale")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown in the Status Bar\n        compressingImages: 'Compressing images...',\n        compressedX: 'Saved %{size} by compressing images',\n    },\n};\n")),(0,s.kt)("h2",{id:"events"},"Events"),(0,s.kt)("h4",{id:"compressorcomplete"},(0,s.kt)("inlineCode",{parentName:"h4"},"compressor:complete")),(0,s.kt)("p",null,"The event is emitted when all files are compressed. You can use it for side\neffects or custom UI notifications."))}k.isMDXComponent=!0}}]);
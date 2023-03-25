"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5724],{3068:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(814),i=r(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git diff --quiet || (echo \'Unable to show a diff because there are unstaged changes\'; false) && (prettier . -w --loglevel silent && git --no-pager diff; git restore .)","format:check":"prettier -c .","format:check-diff":"yarn format:check || (yarn format:show-diff && false)","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.3.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.3.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/locales":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.3.1","@docusaurus/module-type-aliases":"^2.3.1","@tsconfig/docusaurus":"^1.0.7","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=l;function s(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,s=[];a.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=s.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${o}/${l}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(n.Z,{language:"html"},u))}},8500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),i=r(4866),l=r(5162),o=r(3068);const s={sidebar_position:2,slug:"/drag-drop"},p="Drag & Drop",d={unversionedId:"user-interfaces/drag-drop",id:"user-interfaces/drag-drop",title:"Drag & Drop",description:"The @uppy/drag-drop plugin renders a drag and drop area for file selection.",source:"@site/docs/user-interfaces/drag-drop.mdx",sourceDirName:"user-interfaces",slug:"/drag-drop",permalink:"/docs/drag-drop",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/drag-drop.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/drag-drop"},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/docs/dashboard"},next:{title:"Image editor",permalink:"/docs/image-editor"}},u={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>width</code>",id:"width",level:4},{value:"<code>height</code>",id:"height",level:4},{value:"<code>note</code>",id:"note",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>onDragOver(event)</code>",id:"ondragoverevent",level:4},{value:"<code>onDragLeave(event)</code>",id:"ondragleaveevent",level:4},{value:"<code>onDrop(event)</code>",id:"ondropevent",level:4}],c={toc:m},h="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"drag--drop"},"Drag & Drop"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/drag-drop")," plugin renders a drag and drop area for file selection."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"),".")),(0,n.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,n.kt)("p",null,"It can be useful when you only want the local device as a file source, don\u2019t\nneed file previews and a UI for metadata editing, or the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/dashboard/"},"Dashboard")," is too much. But it can be too minimal too. By\ndefault it doesn\u2019t show that a file has been added nor is there a progress bar."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/drag-drop\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/drag-drop\n"))),(0,n.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, DragDrop } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(DragDrop, { target: '#uppy' })\n      "))),(0,n.kt)("h2",{id:"use"},"Use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport DragDrop from '@uppy/drag-drop';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\n\nnew Uppy().use(DragDrop, { target: '#drag-drop' });\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Certain ",(0,n.kt)("a",{parentName:"p",href:"/docs/uppy#restrictions"},"restrictions")," set in Uppy\u2019s options, namely\n",(0,n.kt)("inlineCode",{parentName:"p"},"maxNumberOfFiles")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"allowedFileTypes"),", affect the system file picker dialog.\nIf ",(0,n.kt)("inlineCode",{parentName:"p"},"maxNumberOfFiles: 1"),", users will only be able to select one file, and\n",(0,n.kt)("inlineCode",{parentName:"p"},"allowedFileTypes: ['video/*', '.gif']")," means only videos or gifs (files with\n",(0,n.kt)("inlineCode",{parentName:"p"},".gif")," extension) will be selectable.")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("h4",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")),(0,n.kt)("p",null,"A unique identifier for this plugin (",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"'DragDrop'"),")."),(0,n.kt)("p",null,"Use this if you need to add several DragDrop instances."),(0,n.kt)("h4",{id:"target"},(0,n.kt)("inlineCode",{parentName:"h4"},"target")),(0,n.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,n.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,n.kt)("h4",{id:"width"},(0,n.kt)("inlineCode",{parentName:"h4"},"width")),(0,n.kt)("p",null,"Drag and drop area width (",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"'100%'"),")."),(0,n.kt)("p",null,"Set in inline CSS, so feel free to use percentage, pixels or other values that\nyou like."),(0,n.kt)("h4",{id:"height"},(0,n.kt)("inlineCode",{parentName:"h4"},"height")),(0,n.kt)("p",null,"Drag and drop area height (",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"'100%'"),")."),(0,n.kt)("p",null,"Set in inline CSS, so feel free to use percentage, pixels or other values that\nyou like."),(0,n.kt)("h4",{id:"note"},(0,n.kt)("inlineCode",{parentName:"h4"},"note")),(0,n.kt)("p",null,"Optionally, specify a string of text that explains something about the upload\nfor the user (",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,n.kt)("p",null,"This is a place to explain any ",(0,n.kt)("inlineCode",{parentName:"p"},"restrictions")," that are put in place. For\nexample: ",(0,n.kt)("inlineCode",{parentName:"p"},"'Images and video only, 2\u20133 files, up to 1 MB'"),"."),(0,n.kt)("h4",{id:"locale"},(0,n.kt)("inlineCode",{parentName:"h4"},"locale")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Text to show on the droppable area.\n        // `%{browse}` is replaced with a link that opens the system file selection dialog.\n        dropHereOr: 'Drop here or %{browse}',\n        // Used as the label for the link that opens the system file selection dialog.\n        browse: 'browse',\n    },\n};\n")),(0,n.kt)("h4",{id:"ondragoverevent"},(0,n.kt)("inlineCode",{parentName:"h4"},"onDragOver(event)")),(0,n.kt)("p",null,"Callback for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover"},(0,n.kt)("inlineCode",{parentName:"a"},"ondragover"))," event handler."),(0,n.kt)("h4",{id:"ondragleaveevent"},(0,n.kt)("inlineCode",{parentName:"h4"},"onDragLeave(event)")),(0,n.kt)("p",null,"Callback for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave"},(0,n.kt)("inlineCode",{parentName:"a"},"ondragleave"))," event handler."),(0,n.kt)("h4",{id:"ondropevent"},(0,n.kt)("inlineCode",{parentName:"h4"},"onDrop(event)")),(0,n.kt)("p",null,"Callback for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop"},(0,n.kt)("inlineCode",{parentName:"a"},"ondrop"))," event handler."))}k.isMDXComponent=!0}}]);
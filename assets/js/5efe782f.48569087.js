"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9195],{3068:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),a=n(814),i=n(3612);const r=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git diff --quiet || (echo \'Unable to show a diff because there are unstaged changes\'; false) && (prettier . -w --loglevel silent && git --no-pager diff; git restore .)","format:check":"prettier -c .","format:check-diff":"yarn format:check || (yarn format:show-diff && false)","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.3.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.3.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/locales":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.3.1","@docusaurus/module-type-aliases":"^2.3.1","@tsconfig/docusaurus":"^1.0.7","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:s}=r;function l(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:r="uppy.min.js"}=e,l=[];o.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${s}/${r}`,m=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${s}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return o.createElement(o.Fragment,null,o.createElement(i.Z,{type:"caution"},o.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),o.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),o.createElement(a.Z,{language:"html"},m))}},4499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),i=n(4866),r=n(5162),s=n(3068);const l={slug:"/zoom"},p="Zoom",d={unversionedId:"sources/companion-plugins/zoom",id:"sources/companion-plugins/zoom",title:"Zoom",description:"The @uppy/zoom plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/zoom.mdx",sourceDirName:"sources/companion-plugins",slug:"/zoom",permalink:"/docs/zoom",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/zoom.mdx",tags:[],version:"current",frontMatter:{slug:"/zoom"},sidebar:"tutorialSidebar",previous:{title:"Import from URL",permalink:"/docs/url"},next:{title:"Transloadit",permalink:"/docs/transloadit"}},m={},u=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:u},h="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zoom"},"Zoom"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/zoom")," plugin lets users import files from their\n",(0,a.kt)("a",{parentName:"p",href:"https://zoom.com"},"Zoom")," account."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,a.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,a.kt)("p",null,"When you want to let users import files from their ",(0,a.kt)("a",{parentName:"p",href:"https://zoom.com"},"Zoom"),"\naccount."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Zoom plugin to work.\nCompanion handles authentication with Zoom, downloads the files, and uploads\nthem to the destination. This saves the user bandwidth, especially helpful if\nthey are on a mobile connection."),(0,a.kt)("p",null,"You can self-host Companion or get a hosted version with any\n",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/zoom\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/zoom\n"))),(0,a.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(s.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Zoom } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Zoom, {\n          // Options\n        })\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"Using Zoom requires setup in both Uppy and Companion."),(0,a.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-13} showLineNumbers","{10-13}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Zoom from '@uppy/zoom';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy().use(Dashboard, { inline: true, target: '#dashboard' }).use(Zoom, {\n    target: Dashboard,\n    companionUrl: 'https://your-companion.com',\n});\n")),(0,a.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,a.kt)("p",null,"Configure the Zoom key and secret. With the standalone Companion server, specify\nenvironment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_ZOOM_KEY="Zoom API key"\nexport COMPANION_ZOOM_SECRET="Zoom API secret"\n')),(0,a.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        zoom: {\n            key: 'Zoom API key',\n            secret: 'Zoom API secret',\n        },\n    },\n});\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Zoom'"),")."),(0,a.kt)("h4",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")),(0,a.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,a.kt)("inlineCode",{parentName:"p"},"'Zoom'"),")."),(0,a.kt)("h4",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h4"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionurl"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,a.kt)("p",null,"URL to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionheaders"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,a.kt)("p",null,"Custom headers that should be sent along to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,a.kt)("h4",{id:"companionallowedhosts"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,a.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,a.kt)("p",null,"This value can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of both. This is\nuseful when you have your ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts.\nOtherwise, the default value should do fine."),(0,a.kt)("h4",{id:"companioncookiesrule"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,a.kt)("p",null,"This option correlates to the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,a.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,a.kt)("h4",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameZoom: 'Zoom',\n    },\n};\n")))}k.isMDXComponent=!0}}]);
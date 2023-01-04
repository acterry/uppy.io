"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[442],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),s=n(7392),l=n(7094),p=n(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:c,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,l.U)(),[N,C]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=c){const e=y[c];null!=e&&e!==N&&g.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==N&&(I(t),C(a),null!=c&&b(c,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:x},o,{className:(0,i.Z)("tabs__item",m,o?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(814),i=n(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:s}=o;function l(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,l=[];a.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${s}/${o}`,m=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${s}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(r.Z,{language:"html"},m))}},7134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162),s=n(3068);const l={},p="Instagram",u={unversionedId:"sources/companion-plugins/instagram",id:"sources/companion-plugins/instagram",title:"Instagram",description:"The @uppy/instagram plugin lets users import files from their Instagram account.",source:"@site/docs/sources/companion-plugins/instagram.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/instagram",permalink:"/uppy.io/pr-preview/pr-5/docs/sources/companion-plugins/instagram",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/instagram.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Drive",permalink:"/uppy.io/pr-preview/pr-5/docs/sources/companion-plugins/google-drive"},next:{title:"OneDrive",permalink:"/uppy.io/pr-preview/pr-5/docs/sources/companion-plugins/onedrive"}},m={},d=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instagram"},"Instagram"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/instagram")," plugin lets users import files from their ",(0,r.kt)("a",{parentName:"p",href:"https://instagram.com"},"Instagram")," account."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"When you want to let users import files from their ",(0,r.kt)("a",{parentName:"p",href:"https://instagram.com"},"Instagram")," account."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Instagram plugin to work.\nCompanion handles authentication with Instagram, downloads the files, and uploads them to the destination.\nThis saves the user bandwidth, especially helpful if they are on a mobile connection."),(0,r.kt)("p",null,"You can self-host Companion or get a hosted version with any ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/instagram\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/instagram\n"))),(0,r.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Instagram } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Instagram, {\n          // Options\n        })\n      '))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"Using Instagram requires setup in both Uppy and Companion."),(0,r.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-19} showLineNumbers","{12-19}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Instagram from '@uppy/instagram';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy.use(Dashboard, { inline: true, target: 'body' })\n    // Example of setting all the options to their defaults.\n    // Not passing anything to `Instagram` is therefor the same as the example below.\n    .use(Instagram, {\n        id: 'Instagram',\n        title: 'Instagram',\n        target: null,\n        companionUrl: null,\n        companionHeaders: null,\n        companionAllowedHosts: null,\n    });\n")),(0,r.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,r.kt)("p",null,"To sign up for API keys, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/products/instagram/"},"Instagram Platform from Meta"),"."),(0,r.kt)("p",null,"Create a project for your app if you don\u2019t have one yet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable the Instagram API."),(0,r.kt)("li",{parentName:"ul"},"Use this for an authorized redirect URI: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://$YOUR\\_COMPANION\\_HOST\\_NAME/instagram/redirect"))),(0,r.kt)("p",null,"Meta will give you an OAuth client ID and client secret."),(0,r.kt)("p",null,"Configure the Instagram key and secret in Companion.\nWith the standalone Companion server, specify environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_GOOGLE_KEY="Instagram OAuth client ID"\nexport COMPANION_GOOGLE_SECRET="Instagram OAuth client secret"\n')),(0,r.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        drive: {\n            key: 'Instagram OAuth client ID',\n            secret: 'Instagram OAuth client secret',\n        },\n    },\n});\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Instagram'"),")."),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Instagram'"),")."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h4",{id:"companionurl"},(0,r.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,r.kt)("p",null,"URL to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h4",{id:"companionheaders"},(0,r.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,r.kt)("p",null,"Custom headers that should be sent along to ",(0,r.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,r.kt)("h4",{id:"companionallowedhosts"},(0,r.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,r.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,r.kt)("p",null,"This value can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of both.\nThis is useful when you have your ",(0,r.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts. Otherwise, the default value should do fine."),(0,r.kt)("h4",{id:"companioncookiesrule"},(0,r.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,r.kt)("p",null,"This option correlates to the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,r.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,r.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameInstagram: 'Instagram',\n    },\n};\n")))}h.isMDXComponent=!0}}]);
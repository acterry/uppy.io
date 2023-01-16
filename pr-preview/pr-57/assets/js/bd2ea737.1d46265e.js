"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2106],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:l,values:m,groupId:c,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[N,w]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=c){const e=y[c];null!=e&&e!==N&&h.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==N&&(x(t),w(a),null!=c&&v(c,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:E,onClick:T},l,{className:(0,i.Z)("tabs__item",d,l?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(814),i=n(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=l;function s(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,s=[];a.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=s.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${o}/${l}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(r.Z,{language:"html"},d))}},4790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162),o=n(3068);const s={},p="Form",u={unversionedId:"framework-integrations/form",id:"framework-integrations/form",title:"Form",description:"The @uppy/form plugin does two things:",source:"@site/docs/framework-integrations/form.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/form",permalink:"/uppy.io/pr-preview/pr-57/docs/framework-integrations/form",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/form.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Angular",permalink:"/uppy.io/pr-preview/pr-57/docs/framework-integrations/angular"},next:{title:"React",permalink:"/uppy.io/pr-preview/pr-57/docs/framework-integrations/react"}},d={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id: &#39;Form&#39;</code>",id:"id-form",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>resultName</code>",id:"resultname",level:4},{value:"<code>getMetaFromForm</code>",id:"getmetafromform",level:4},{value:"<code>addResultToForm</code>",id:"addresulttoform",level:4},{value:"<code>triggerUploadOnSubmit</code>",id:"triggeruploadonsubmit",level:4},{value:"<code>submitOnSuccess: false</code>",id:"submitonsuccess-false",level:4}],c={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form"},"Form"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/form")," plugin does two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extracts meta data from an existing HTML ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>")," on the page, right before Uppy begins uploading/processing files. "),(0,r.kt)("li",{parentName:"ol"},"Appends upload results back to the ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>")," as a hidden field. The appended result is a stringified version of a result returned from ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy.upload()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"complete")," event.")),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"When you have an existing HTML form on the page and you want to integrate Uppy uploads into it."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/form\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/form\n"))),(0,r.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Form } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Form, {\n          // Options\n        })\n      '))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Form from '@uppy/form';\n\nnew Uppy().use(Form, { \n  target: '#my-form' \n});\n")),(0,r.kt)("p",null,"By default the code above will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extract meta data from the form ",(0,r.kt)("inlineCode",{parentName:"li"},"#my-form")," and send it with the Uppy upload."),(0,r.kt)("li",{parentName:"ol"},"When Uppy completes upload/processing, it will add an ",(0,r.kt)("inlineCode",{parentName:"li"},'<input type="hidden" name="uppyResult"')," with the upload result back to the form.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can disable both of these features, see options below.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/form")," can also start Uppy upload automatically once the form is submitted, and even submit the form after the upload is complete. This is off by default. See ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerUploadOnSubmit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"submitOnSuccess")," options below for details.")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id-form"},(0,r.kt)("inlineCode",{parentName:"h4"},"id: 'Form'")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Form'"),")."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element or CSS selector for the form element (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),") "),(0,r.kt)("p",null,"This is required for the plugin to work."),(0,r.kt)("h4",{id:"resultname"},(0,r.kt)("inlineCode",{parentName:"h4"},"resultName")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute for the ",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="hidden">')," where the result will be added (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"uppyResult"),")"),(0,r.kt)("h4",{id:"getmetafromform"},(0,r.kt)("inlineCode",{parentName:"h4"},"getMetaFromForm")),(0,r.kt)("p",null,"Configures whether to extract metadata from the form (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",null," When set to true, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," plugin will extract all fields from a ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," element before upload begins. Those fields will then be added to Uppy meta data state (",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.state.meta"),") and each file\u2019s meta, and appended as (meta)data to the upload in an object with ",(0,r.kt)("inlineCode",{parentName:"p"},"[file input name attribute]")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"[file input value]")," key/values."),(0,r.kt)("h4",{id:"addresulttoform"},(0,r.kt)("inlineCode",{parentName:"h4"},"addResultToForm")),(0,r.kt)("p",null,"Configures whether to add upload/encoding results back to the form in an ",(0,r.kt)("inlineCode",{parentName:"p"},'<input name="uppyResult" type="hidden">')," element (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("h4",{id:"triggeruploadonsubmit"},(0,r.kt)("inlineCode",{parentName:"h4"},"triggerUploadOnSubmit")),(0,r.kt)("p",null,"Configures whether to start the upload when the form is submitted (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",null,"When the user presses a submit button, this will prevent form submission, and instead upload files. You can then:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"submitOnSuccess: true")," if you need the form to ",(0,r.kt)("em",{parentName:"li"},"actually")," be submitted once all files have been uploaded."),(0,r.kt)("li",{parentName:"ul"},"Listen for ",(0,r.kt)("inlineCode",{parentName:"li"},"uppy.on('complete')")," event to do something else if the file uploads are all you need. For example, if the form is used for file metadata only.")),(0,r.kt)("h4",{id:"submitonsuccess-false"},(0,r.kt)("inlineCode",{parentName:"h4"},"submitOnSuccess: false")),(0,r.kt)("p",null,"Configures whether to submit the form after Uppy finishes uploading/encoding (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"))}f.isMDXComponent=!0}}]);
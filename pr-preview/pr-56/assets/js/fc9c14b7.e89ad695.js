"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5724],{8500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),i=a(5162),l=a(3068);const p={sidebar_position:2},d="Drag & Drop",s={unversionedId:"user-interfaces/drag-drop",id:"user-interfaces/drag-drop",title:"Drag & Drop",description:"The @uppy/drag-drop plugin renders a drag and drop area for file selection.",source:"@site/docs/user-interfaces/drag-drop.mdx",sourceDirName:"user-interfaces",slug:"/user-interfaces/drag-drop",permalink:"/uppy.io/pr-preview/pr-56/docs/user-interfaces/drag-drop",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/drag-drop.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/uppy.io/pr-preview/pr-56/docs/user-interfaces/dashboard"},next:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-56/docs/user-interfaces/elements/image-editor"}},u={},h=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>width</code>",id:"width",level:4},{value:"<code>height</code>",id:"height",level:4},{value:"<code>note</code>",id:"note",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>onDragOver(event)</code>",id:"ondragoverevent",level:4},{value:"<code>onDragLeave(event)</code>",id:"ondragleaveevent",level:4},{value:"<code>onDrop(event)</code>",id:"ondropevent",level:4}],m={toc:h};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"drag--drop"},"Drag & Drop"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/drag-drop")," plugin renders a drag and drop area for file selection."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"),".")),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"It can be useful when you only want the local device as a file source, don\u2019t\nneed file previews and a UI for metadata editing, or the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/"},"Dashboard")," is too much. But it can be too minimal too. By\ndefault it doesn\u2019t show that a file has been added nor is there a progress bar."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/drag-drop\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/drag-drop\n"))),(0,r.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, DragDrop } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(DragDrop, { target: '#uppy' })\n      "))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport DragDrop from '@uppy/drag-drop';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\n\nnew Uppy().use(DragDrop, { target: '#drag-drop' });\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Certain ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy#restrictions"},"restrictions")," set in Uppy\u2019s options, namely\n",(0,r.kt)("inlineCode",{parentName:"p"},"maxNumberOfFiles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedFileTypes"),", affect the system file picker dialog.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"maxNumberOfFiles: 1"),", users will only be able to select one file, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"allowedFileTypes: ['video/*', '.gif']")," means only videos or gifs (files with\n",(0,r.kt)("inlineCode",{parentName:"p"},".gif")," extension) will be selectable.")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'DragDrop'"),")."),(0,r.kt)("p",null,"Use this if you need to add several DragDrop instances."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h4",{id:"width"},(0,r.kt)("inlineCode",{parentName:"h4"},"width")),(0,r.kt)("p",null,"Drag and drop area width (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'100%'"),")."),(0,r.kt)("p",null,"Set in inline CSS, so feel free to use percentage, pixels or other values that\nyou like."),(0,r.kt)("h4",{id:"height"},(0,r.kt)("inlineCode",{parentName:"h4"},"height")),(0,r.kt)("p",null,"Drag and drop area height (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'100%'"),")."),(0,r.kt)("p",null,"Set in inline CSS, so feel free to use percentage, pixels or other values that\nyou like."),(0,r.kt)("h4",{id:"note"},(0,r.kt)("inlineCode",{parentName:"h4"},"note")),(0,r.kt)("p",null,"Optionally, specify a string of text that explains something about the upload\nfor the user (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"This is a place to explain any ",(0,r.kt)("inlineCode",{parentName:"p"},"restrictions")," that are put in place. For\nexample: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Images and video only, 2\u20133 files, up to 1 MB'"),"."),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Text to show on the droppable area.\n        // `%{browse}` is replaced with a link that opens the system file selection dialog.\n        dropHereOr: 'Drop here or %{browse}',\n        // Used as the label for the link that opens the system file selection dialog.\n        browse: 'browse',\n    },\n};\n")),(0,r.kt)("h4",{id:"ondragoverevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"onDragOver(event)")),(0,r.kt)("p",null,"Callback for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover"},(0,r.kt)("inlineCode",{parentName:"a"},"ondragover"))," event handler."),(0,r.kt)("h4",{id:"ondragleaveevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"onDragLeave(event)")),(0,r.kt)("p",null,"Callback for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave"},(0,r.kt)("inlineCode",{parentName:"a"},"ondragleave"))," event handler."),(0,r.kt)("h4",{id:"ondropevent"},(0,r.kt)("inlineCode",{parentName:"h4"},"onDrop(event)")),(0,r.kt)("p",null,"Callback for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop"},(0,r.kt)("inlineCode",{parentName:"a"},"ondrop"))," event handler."))}c.isMDXComponent=!0}}]);
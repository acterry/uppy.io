"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5857],{1355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(7462),p=(a(7294),a(3905)),r=a(5488),o=a(5162),i=a(3068);const s={},l="React",u={unversionedId:"framework-integrations/react",id:"framework-integrations/react",title:"React",description:"React components for the Uppy UI plugins.",source:"@site/docs/framework-integrations/react.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/react",permalink:"/uppy.io/pr-preview/pr-56/docs/framework-integrations/react",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/react.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Angular",permalink:"/uppy.io/pr-preview/pr-56/docs/framework-integrations/angular"},next:{title:"Svelte",permalink:"/uppy.io/pr-preview/pr-56/docs/framework-integrations/svelte"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"CSS",id:"css",level:3}],c={toc:d};function k(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"react"},"React"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," components for the Uppy UI plugins."),(0,p.kt)("h2",{id:"install"},"Install"),(0,p.kt)(r.Z,{mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/react\n"))),(0,p.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/react\n"))),(0,p.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,p.kt)(i.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use.\nFor instance, ",(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,p.kt)("h2",{id:"use"},"Use"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/react")," exposes component wrappers for ",(0,p.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"DragDrop"),", and all other UI elements.\nThe components can be used with either ",(0,p.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," or API-compatible alternatives such as ",(0,p.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),"."),(0,p.kt)("p",null,"The following plugins are available as React component wrappers:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<Dashboard />")," renders ",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<DragDrop />")," renders ",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<ProgressBar />")," renders ",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<StatusBar />")," renders ",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,p.kt)("p",null,"A couple things to keep in mind when using Uppy with React:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Instead of adding a UI plugin to an Uppy instance with ",(0,p.kt)("inlineCode",{parentName:"li"},".use()"),", the Uppy instance can be passed into components as an ",(0,p.kt)("inlineCode",{parentName:"li"},"uppy")," prop."),(0,p.kt)("li",{parentName:"ul"},"All other props are passed as options to the plugin."),(0,p.kt)("li",{parentName:"ul"},"The Uppy instance ",(0,p.kt)("strong",{parentName:"li"},"should not live inside the component")," but outside of it."),(0,p.kt)("li",{parentName:"ul"},"You have to pass the IDs of your ",(0,p.kt)("inlineCode",{parentName:"li"},"use"),"d plugins to the ",(0,p.kt)("inlineCode",{parentName:"li"},"plugins")," array prop so Dashboard knows it needs to render them."),(0,p.kt)("li",{parentName:"ul"},"An Uppy instance can\u2019t be used by more than one component. Make sure you are using a unique Uppy instance per component.")),(0,p.kt)("p",null,"Here is a basic example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\nimport Uppy from '@uppy/core';\nimport Webcam from '@uppy/webcam';\nimport { Dashboard } from '@uppy/react';\n\n// Don't forget the CSS: core and the UI components + plugins you are using\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/webcam/dist/style.min.css';\n\n// Don\u2019t forget to keep the Uppy instance outside of your component / render()\nconst uppy = new Uppy().use(Webcam);\n\nfunction Component() {\n    return <Dashboard uppy={uppy} plugins={['Webcam']} />;\n}\n")),(0,p.kt)("h3",{id:"css"},"CSS"),(0,p.kt)("p",null,"Components and plugins have their own styling and should be imported / bundled with your app. You can find the CSS import statements in the docs of the UI plugin you want to use. For instance, for ",(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard")," with ",(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/image-editor"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/image-editor/dist/style.min.css';\n")))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2734],{39058:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(86010),r=a(16787),i=a(87524),s=a(39960),o=a(95999);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:m.sidebarItem},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(13102);function d(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return n.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?n.createElement(g,{sidebar:t}):n.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(p,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},22584:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),l=a(67294),r=a(95999),i=a(39960);function s(){return l.createElement("b",null,l.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function o(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.Z,(0,n.Z)({"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(s,null))}},51324:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(67294),l=a(86010),r=a(9460),i=a(44996);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s}=(0,r.C)(),{withBaseUrl:o}=(0,i.C)(),m=s.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&n.createElement("meta",{itemProp:"image",content:o(m,{absolute:!0})}),t)}var o=a(39960);const m={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:s,title:c}=a,u=i?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(m.title,t),itemProp:"headline"},i?c:n.createElement(o.Z,{itemProp:"url",to:s},c))}var u=a(95999),d=a(88824);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return n.createElement(n.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:s,readingTime:o}=a;return n.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},n.createElement(h,{date:i,formattedDate:s}),void 0!==o&&n.createElement(n.Fragment,null,n.createElement(E,null),n.createElement(p,{readingTime:o})))}function f(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:i,url:s,imageURL:o,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},o&&n.createElement(f,{href:c,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(f,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const _={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?_.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?_.imageOnlyAuthorCol:_.authorCol),key:t},n.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function Z(){return n.createElement("header",null,n.createElement(c,null),n.createElement(b,null),n.createElement(N,null))}var k=a(18780),P=a(42762);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return n.createElement("div",{id:i?k.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(P.Z,null,t))}var I=a(4508);function T(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,l.Z)(i,a)},n.createElement(Z,null),n.createElement(C,null,t),n.createElement(I.Z,null))}},84881:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(95999),r=a(35281),i=a(87462),s=a(86010);const o={iconEdit:"iconEdit_Z9Sw"};function m(e){let{className:t,...a}=e;return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),r=a(39960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},86233:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(86010),r=a(95999),i=a(39960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:a,count:r}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(s.tag,r?s.tagWithCount:s.tagRegular)},a,r&&n.createElement("span",null,r))}const m={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:m.tag},n.createElement(o,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>i});var n=a(67294),l=a(902);const r=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:i},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>m});var n=a(67294),l=a(52263);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);
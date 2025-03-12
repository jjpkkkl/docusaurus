"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9633"],{55813:function(e,s,n){n.r(s),n.d(s,{frontMatter:()=>o,default:()=>p,contentTitle:()=>c,assets:()=>h,toc:()=>d,metadata:()=>a});var a=JSON.parse('{"id":"guides/markdown-features/plugins","title":"MDX Plugins","description":"Using MDX plugins to expand Docusaurus Markdown functionalities","source":"@site/docs/guides/markdown-features/markdown-features-plugins.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/plugins","permalink":"/docs/markdown-features/plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-plugins.mdx","tags":[],"version":"current","lastUpdatedBy":"Jake Boone","lastUpdatedAt":1741682221000,"frontMatter":{"id":"plugins","description":"Using MDX plugins to expand Docusaurus Markdown functionalities","slug":"/markdown-features/plugins"},"sidebar":"docs","previous":{"title":"Markdown links","permalink":"/docs/markdown-features/links"},"next":{"title":"Math Equations","permalink":"/docs/markdown-features/math-equations"}}'),t=n(85893),r=n(80980),i=n(15398),l=n(58636);let o={id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},c="MDX Plugins",h={},d=[{value:"Default plugins",id:"default-plugins",level:2},{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Creating new rehype/remark plugins",id:"creating-new-rehyperemark-plugins",level:2}];function u(e){let s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mrow:"mrow",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"mdx-plugins",children:"MDX Plugins"})}),"\n",(0,t.jsx)(s.p,{children:"Sometimes, you may want to extend or tweak your Markdown syntax. For example:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["How do I embed youtube videos using the image syntax (",(0,t.jsx)(s.code,{children:"![](https://youtu.be/yKNxeF4KMsY)"}),")?"]}),"\n",(0,t.jsx)(s.li,{children:"How do I style links that are on their own lines differently, e.g., as a social card?"}),"\n",(0,t.jsx)(s.li,{children:"How do I make every page start with a copyright notice?"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["And the answer is: create an MDX plugin! MDX has a built-in ",(0,t.jsx)(s.a,{href:"https://mdxjs.com/advanced/plugins/",children:"plugin system"})," that can be used to customize how the Markdown files will be parsed and transformed to JSX. There are three typical use-cases of MDX plugins:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Using existing ",(0,t.jsx)(s.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins",children:"remark plugins"})," or ",(0,t.jsx)(s.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins",children:"rehype plugins"}),";"]}),"\n",(0,t.jsx)(s.li,{children:"Creating remark/rehype plugins to transform the elements generated by existing MDX syntax;"}),"\n",(0,t.jsx)(s.li,{children:"Creating remark/rehype plugins to introduce new syntaxes to MDX."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If you play with the ",(0,t.jsx)(s.a,{href:"https://mdxjs.com/playground/",children:"MDX playground"}),", you would notice that the MDX transpilation has two intermediate steps: Markdown AST (MDAST), and Hypertext AST (HAST), before arriving at the final JSX output. MDX plugins also come in two forms:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/remarkjs/remark/",children:"Remark"})}),": processes the Markdown AST."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/rehypejs/rehype/",children:"Rehype"})}),": processes the Hypertext AST."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project. The ",(0,t.jsx)(s.a,{href:"/docs/markdown-features/admonitions",children:"admonition"})," syntax that we offer is also generated by a Remark plugin, and you could do the same for your own use case."]})}),"\n",(0,t.jsx)(s.h2,{id:"default-plugins",children:"Default plugins"}),"\n",(0,t.jsxs)(s.p,{children:["Docusaurus injects ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-mdx-loader/src/remark",children:"some default Remark plugins"})," during Markdown processing. These plugins would:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Generate the table of contents;"}),"\n",(0,t.jsx)(s.li,{children:"Add anchor links to each heading;"}),"\n",(0,t.jsxs)(s.li,{children:["Transform images and links to ",(0,t.jsx)(s.code,{children:"require()"})," calls."]}),"\n",(0,t.jsx)(s.li,{children:"\u2026"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"These are all typical use-cases of Remark plugins, which can also be a source of inspiration if you want to implement your own plugin."}),"\n",(0,t.jsx)(s.h2,{id:"installing-plugins",children:"Installing plugins"}),"\n",(0,t.jsxs)(s.p,{children:["An MDX plugin is usually an npm package, so you install them like other npm packages using npm. Take the ",(0,t.jsx)(s.a,{href:"/docs/markdown-features/math-equations",children:"math plugins"})," as an example."]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save remark-math@5 rehype-katex@6\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add remark-math@5 rehype-katex@6\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add remark-math@5 rehype-katex@6\n"})})}),(0,t.jsx)(l.Z,{value:"bun",label:"Bun",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"bun add remark-math@5 rehype-katex@6\n"})})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsxs)("summary",{children:["How are ",(0,t.jsx)("code",{children:"remark-math"})," and ",(0,t.jsx)("code",{children:"rehype-katex"})," different?"]}),(0,t.jsxs)(s.p,{children:["In case you are wondering how Remark and Rehype are different, here is a good example. ",(0,t.jsx)(s.code,{children:"remark-math"})," operates on the Markdown AST, where it sees text like ",(0,t.jsx)(s.code,{children:"$...$"}),", and all it does is transform that to the JSX ",(0,t.jsx)(s.code,{children:'<span class="math math-inline">...</span>'})," without doing too much with the content. This decouples the extraction of math formulae from their rendering, which means you can swap ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mtext,{children:"KaTeX"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\KaTeX"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,t.jsxs)(s.span,{className:"mord text",children:[(0,t.jsx)(s.span,{className:"mord textrm",children:"K"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.17em"}}),(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.6833em"},children:(0,t.jsxs)(s.span,{style:{top:"-2.905em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mord textrm mtight sizing reset-size6 size3",children:"A"})})]})})})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.15em"}}),(0,t.jsxs)(s.span,{className:"mord text",children:[(0,t.jsx)(s.span,{className:"mord textrm",children:"T"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.4678em"},children:(0,t.jsxs)(s.span,{style:{top:"-2.7845em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mord textrm",children:"E"})})]})}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200B"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.2155em"},children:(0,t.jsx)(s.span,{})})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.125em"}}),(0,t.jsx)(s.span,{className:"mord textrm",children:"X"})]})]})]})})]})," out with other math renderers, like MathJax (with ",(0,t.jsx)(s.a,{href:"https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax",children:(0,t.jsx)(s.code,{children:"rehype-mathjax"})}),"), just by replacing the Rehype plugin."]}),(0,t.jsxs)(s.p,{children:["Next, the ",(0,t.jsx)(s.code,{children:"rehype-katex"})," operates on the Hypertext AST where everything has been converted to HTML-like tags already. It traverses all the elements with ",(0,t.jsx)(s.code,{children:"math"})," class and uses ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mtext,{children:"KaTeX"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\KaTeX"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8988em",verticalAlign:"-0.2155em"}}),(0,t.jsxs)(s.span,{className:"mord text",children:[(0,t.jsx)(s.span,{className:"mord textrm",children:"K"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.17em"}}),(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.6833em"},children:(0,t.jsxs)(s.span,{style:{top:"-2.905em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mord textrm mtight sizing reset-size6 size3",children:"A"})})]})})})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.15em"}}),(0,t.jsxs)(s.span,{className:"mord text",children:[(0,t.jsx)(s.span,{className:"mord textrm",children:"T"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.4678em"},children:(0,t.jsxs)(s.span,{style:{top:"-2.7845em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mord textrm",children:"E"})})]})}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200B"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.2155em"},children:(0,t.jsx)(s.span,{})})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.125em"}}),(0,t.jsx)(s.span,{className:"mord textrm",children:"X"})]})]})]})})]})," to parse and render the content to actual HTML."]})]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["Many official Remark/Rehype plugins are ",(0,t.jsx)(s.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",children:(0,t.jsx)(s.strong,{children:"ES Modules only"})}),", a JavaScript module system, which Docusaurus supports. We recommend using an ",(0,t.jsx)(s.a,{href:"https://flaviocopes.com/es-modules/",children:(0,t.jsx)(s.strong,{children:"ES Modules"})})," config file to make it easier to import such packages."]})}),"\n",(0,t.jsxs)(s.p,{children:["Next, import your plugins and add them to the plugin options through plugin or preset config in ",(0,t.jsx)(s.code,{children:"docusaurus.config.js"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\n// highlight-start\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsxs)("summary",{children:["Using a ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules",children:(0,t.jsx)(s.strong,{children:"CommonJS"})})," config file?"]}),(0,t.jsx)(s.p,{children:"If you decide to use a CommonJS config file, it is possible to load those ES module plugins thanks to dynamic imports and an async config creator function:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nmodule.exports = async function createConfigAsync() {\n  // highlight-end\n  return {\n    presets: [\n      [\n        '@docusaurus/preset-classic',\n        {\n          docs: {\n            path: 'docs',\n            // highlight-start\n            remarkPlugins: [(await import('remark-math')).default],\n            rehypePlugins: [(await import('rehype-katex')).default],\n            // highlight-end\n          },\n        },\n      ],\n    ],\n  };\n};\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"configuring-plugins",children:"Configuring plugins"}),"\n",(0,t.jsxs)(s.p,{children:["Some plugins can be configured and accept their own options. In that case, use the ",(0,t.jsx)(s.code,{children:"[plugin, pluginOptions]"})," syntax, like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import rehypeKatex from 'rehype-katex';\n\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          rehypePlugins: [\n            // highlight-start\n            [rehypeKatex, {strict: false}],\n            // highlight-end\n          ],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"You should check your plugin's documentation for the options it supports."}),"\n",(0,t.jsx)(s.h2,{id:"creating-new-rehyperemark-plugins",children:"Creating new rehype/remark plugins"}),"\n",(0,t.jsx)(s.p,{children:"If there isn't an existing package that satisfies your customization need, you can create your own MDX plugin."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The writeup below is ",(0,t.jsx)(s.strong,{children:"not"})," meant to be a comprehensive guide to creating a plugin, but just an illustration of how to make it work with Docusaurus. Visit the ",(0,t.jsx)(s.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#create-plugins",children:"Remark"})," or ",(0,t.jsx)(s.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#create-plugins",children:"Rehype"})," documentation for a more in-depth explanation of how they work."]})}),"\n",(0,t.jsxs)(s.p,{children:["For example, let's make a plugin that visits every ",(0,t.jsx)(s.code,{children:"h2"})," heading and adds a ",(0,t.jsx)(s.code,{children:"Section X. "})," prefix. First, create your plugin source file anywhere\u2014you can even publish it as a separate npm package and install it like explained above. We would put ours at ",(0,t.jsx)(s.code,{children:"src/remark/section-prefix.js"}),". A remark/rehype plugin is just a function that receives the ",(0,t.jsx)(s.code,{children:"options"})," and returns a ",(0,t.jsx)(s.code,{children:"transformer"})," that operates on the AST."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'"src/remark/section-prefix.js"',children:"import {visit} from 'unist-util-visit';\n\nconst plugin = (options) => {\n  const transformer = async (ast) => {\n    let number = 1;\n    visit(ast, 'heading', (node) => {\n      if (node.depth === 2 && node.children.length > 0) {\n        node.children.unshift({\n          type: 'text',\n          value: `Section ${number}. `,\n        });\n        number++;\n      }\n    });\n  };\n  return transformer;\n};\n\nexport default plugin;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can now import your plugin in ",(0,t.jsx)(s.code,{children:"docusaurus.config.js"})," and use it just like an installed plugin!"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-next-line\nimport sectionPrefix from './src/remark/section-prefix';\n\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          remarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"transformer"})," has a second parameter ",(0,t.jsx)(s.a,{href:"https://github.com/vfile/vfile",children:(0,t.jsx)(s.code,{children:"vfile"})})," which is useful if you need to access the current Markdown file's path."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const plugin = (options) => {\n  const transformer = async (ast, vfile) => {\n    ast.children.unshift({\n      type: 'text',\n      value: `The current file path is ${vfile.path}`,\n    });\n  };\n  return transformer;\n};\n"})}),(0,t.jsxs)(s.p,{children:["Our ",(0,t.jsx)(s.code,{children:"transformImage"})," plugin uses this parameter, for example, to transform relative image references to ",(0,t.jsx)(s.code,{children:"require()"})," calls."]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:["The default plugins of Docusaurus would operate before the custom remark plugins, and that means the images or links have been converted to JSX with ",(0,t.jsx)(s.code,{children:"require()"})," calls already. For example, in the example above, the table of contents generated is still the same even when all ",(0,t.jsx)(s.code,{children:"h2"})," headings are now prefixed by ",(0,t.jsx)(s.code,{children:"Section X."}),", because the TOC-generating plugin is called before our custom plugin. If you need to process the MDAST before the default plugins do, use the ",(0,t.jsx)(s.code,{children:"beforeDefaultRemarkPlugins"})," and ",(0,t.jsx)(s.code,{children:"beforeDefaultRehypePlugins"}),"."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          beforeDefaultRemarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n"})}),(0,t.jsxs)(s.p,{children:["This would make the table of contents generated contain the ",(0,t.jsx)(s.code,{children:"Section X."})," prefix as well."]})]})]})}function p(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},58636:function(e,s,n){n.d(s,{Z:()=>r});var a=n(85893);n(67294);var t=n(90496);function r(e){let{children:s,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_pnkT",r),hidden:n,children:s})}},15398:function(e,s,n){n.d(s,{Z:()=>f});var a=n(85893),t=n(67294),r=n(90496),i=n(54947),l=n(3620),o=n(844),c=n(97486),h=n(32263),d=n(16971);function u(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:s,tabValues:n}=e;return n.some(e=>e.value===s)}var m=n(71607);function x(e){let{className:s,block:n,selectedValue:t,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),d=e=>{let s=e.currentTarget,n=o[c.indexOf(s)].value;n!==t&&(h(s),l(n))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1]}}s?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:o.map(e=>{let{value:s,label:n,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item","tabItem_AQgk",i?.className,{"tabs__item--active":t===s}),children:n??s},s)})})}function g(e){let{lazy:s,children:n,selectedValue:i}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){let e=l.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==i}))})}function j(e){let s=function(e){let{defaultValue:s,queryString:n=!1,groupId:a}=e,r=function(e){let{values:s,children:n}=e;return(0,t.useMemo)(()=>{let e=s??u(n).map(e=>{let{props:{value:s,label:n,attributes:a,default:t}}=e;return{value:s,label:n,attributes:a,default:t}});return!function(e){let s=(0,h.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,n])}(e),[i,m]=(0,t.useState)(()=>(function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let a=n.find(e=>e.default)??n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:s,tabValues:r})),[x,g]=function(e){let{queryString:s=!1,groupId:n}=e,a=(0,l.k6)(),r=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(r),(0,t.useCallback)(e=>{if(!r)return;let s=new URLSearchParams(a.location.search);s.set(r,e),a.replace({...a.location,search:s.toString()})},[r,a])]}({queryString:n,groupId:a}),[j,f]=function(e){let{groupId:s}=e,n=s?`docusaurus.tab.${s}`:null,[a,r]=(0,d.Nk)(n);return[a,(0,t.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:a}),y=(()=>{let e=x??j;return p({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{y&&m(y)},[y]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),f(e)},[g,f,r]),tabValues:r}}(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList_Qoir"),children:[(0,a.jsx)(x,{...s,...e}),(0,a.jsx)(g,{...s,...e})]})}function f(e){let s=(0,m.Z)();return(0,a.jsx)(j,{...e,children:u(e.children)},String(s))}},80980:function(e,s,n){n.d(s,{Z:()=>l,a:()=>i});var a=n(67294);let t={},r=a.createContext(t);function i(e){let s=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);
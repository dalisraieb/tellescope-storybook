import{j as e}from"./iframe-C_mvATxf.js";import{useMDXComponents as l}from"./index-B-CkTmln.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"formbuilder",children:"FormBuilder"}),`
`,e.jsx(r.p,{children:"A dynamic form builder component with three distinct color schemes. Features interactive states with a checkcirlce icon that changes color based on selection status and modular header/footer structure."}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Three Color Schemes"}),": Choose from tellescope-soft, tellescope, or agua themes"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Selected State Control"}),": Toggle between selected (green checkcirlce) and unselected (grey checkcirlce) states"]}),`
`]}),`
`,e.jsx(r.h2,{id:"color-schemes",children:"Color Schemes"}),`
`,e.jsx(r.h3,{id:"tellescope-soft-purple-blue-theme",children:"Tellescope Soft (Purple-Blue Theme)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Primary"}),": #798ED0 (Blue-Purple)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Secondary"}),": #585E72 (Dark Grey)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Accent"}),": #DDE1F9 (Light Blue-Purple)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Background"}),": #F4F3FA (Light Purple-Grey)"]}),`
`]}),`
`,e.jsx(r.h3,{id:"tellescope-blue-theme",children:"Tellescope (Blue Theme)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Primary"}),": #4A90E2 (Blue)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Secondary"}),": #2C3E50 (Dark Blue-Grey)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Accent"}),": #A8D8F0 (Light Blue)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Background"}),": #F8FBFF (Very Light Blue)"]}),`
`]}),`
`,e.jsx(r.h3,{id:"agua-aquateal-theme",children:"Agua (Aqua/Teal Theme)"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Primary"}),": #00B4D8 (Cyan)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Secondary"}),": #0077B6 (Dark Blue)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Accent"}),": #90E0EF (Light Cyan)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Background"}),": #F0FDFF (Very Light Cyan)"]}),`
`]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { FormBuilder } from './FormBuilder';\r
\r
function App() {\r
  return (\r
    <FormBuilder type="tellescope-soft" />\r
  );\r
}
`})}),`
`,e.jsx(r.h3,{id:"different-types",children:"Different Types"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { FormBuilder } from './FormBuilder';\r
\r
function App() {\r
  return (\r
    <div>\r
      <FormBuilder type="tellescope-soft" selected={false} />\r
      <FormBuilder type="tellescope" selected={false} />\r
      <FormBuilder type="agua" selected={false} />\r
    </div>\r
  );\r
}
`})}),`
`,e.jsx(r.h3,{id:"selected-state",children:"Selected State"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { FormBuilder } from './FormBuilder';\r
\r
function App() {\r
  return (\r
    <FormBuilder type="agua" selected={true} />\r
  );\r
}
`})}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.p,{children:[`| Prop | Type | Default | Description |\r
|------|------|---------|-------------|\r
| `,e.jsx(r.code,{children:"type"})," | ",e.jsx(r.code,{children:'"tellescope-soft" \\| "tellescope" \\| "agua"'})," | ",e.jsx(r.strong,{children:"Required"}),` | The type of form builder with different color schemes |\r
| `,e.jsx(r.code,{children:"selected"})," | ",e.jsx(r.code,{children:"boolean"})," | ",e.jsx(r.code,{children:"false"})," | Whether the component is in selected state. Controls the checkcirlce icon color. |"]}),`
`,e.jsx(r.h2,{id:"component-structure",children:"Component Structure"}),`
`,e.jsx(r.p,{children:"The FormBuilder component is composed of three main parts:"}),`
`,e.jsx(r.h3,{id:"formwrapper",children:"FormWrapper"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Main container with border, background, and hover effects"}),`
`,e.jsx(r.li,{children:"Handles the overall styling and interactive states"}),`
`,e.jsx(r.li,{children:"Background color changes based on type"}),`
`]}),`
`,e.jsx(r.h3,{id:"formheader",children:"FormHeader"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Contains the form categories (Primary, Secondary, Accent)"}),`
`,e.jsx(r.li,{children:"Houses the CheckCircle icon with conditional coloring"}),`
`,e.jsx(r.li,{children:"Text colors adapt to the selected type theme"}),`
`]}),`
`,e.jsx(r.h3,{id:"formfooter",children:"FormFooter"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Bottom section with white background"}),`
`,e.jsx(r.li,{children:'Contains branding text that matches the type ("Tellescope Soft", "Tellescope", "Agua")'}),`
`,e.jsx(r.li,{children:"Separated from header with subtle border"}),`
`]})]})}function t(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{t as default};

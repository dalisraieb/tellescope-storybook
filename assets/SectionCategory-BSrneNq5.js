import{j as n}from"./iframe-CpdnR0i2.js";import{useMDXComponents as i}from"./index-Dt9XBGDk.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"sectioncategory",children:"SectionCategory"}),`
`,n.jsx(e.p,{children:"A customizable accordion component with add button functionality. This component extends Material-UI's Accordion component to provide a clean and functional section header."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Expandable/Collapsible Content"}),": Toggle visibility of content with a click"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Add Button"}),": Quick action button for adding new items"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Customizable"}),": Easy to configure title and content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Variants"}),": Supports expanded and selected states"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import CustomAccordion from './SectionCategory';\r
\r
function App() {\r
  return (\r
    <CustomAccordion>\r
      <p>This is the content inside the accordion.</p>\r
    </CustomAccordion>\r
  );\r
}
`})}),`
`,n.jsx(e.h3,{id:"with-custom-title",children:"With Custom Title"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import CustomAccordion from './SectionCategory';\r
\r
function App() {\r
  return (\r
    <CustomAccordion \r
      title="Task Categories" \r
    >\r
      <ul>\r
        <li>Task 1</li>\r
        <li>Task 2</li>\r
        <li>Task 3</li>\r
      </ul>\r
    </CustomAccordion>\r
  );\r
}
`})}),`
`,n.jsx(e.h3,{id:"expanded-variant",children:"Expanded Variant"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import CustomAccordion from './SectionCategory';\r
\r
function App() {\r
  return (\r
    <CustomAccordion \r
      title="Expanded Section" \r
      expanded={true}\r
    >\r
      <p>This section starts in an expanded state</p>\r
    </CustomAccordion>\r
  );\r
}
`})}),`
`,n.jsx(e.h3,{id:"selected-variant",children:"Selected Variant"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import CustomAccordion from './SectionCategory';\r
\r
function App() {\r
  return (\r
    <CustomAccordion \r
      title="Selected Section" \r
      selected={true}\r
    >\r
      <p>This section has a selected/highlighted appearance with gray background</p>\r
    </CustomAccordion>\r
  );\r
}
`})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"expanded-variant-1",children:"Expanded Variant"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"expanded"})," prop controls whether the accordion is initially expanded or collapsed. When set to ",n.jsx(e.code,{children:"true"}),", the accordion will be expanded when first rendered."]}),`
`,n.jsx(e.h3,{id:"selected-variant-1",children:"Selected Variant"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"selected"})," prop controls whether the accordion appears in a selected/highlighted state. When set to ",n.jsx(e.code,{children:"true"}),", the accordion will have a light gray background and no bottom border."]})]})}function s(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{s as default};

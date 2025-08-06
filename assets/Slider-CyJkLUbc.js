import{j as e}from"./iframe-CpdnR0i2.js";import{useMDXComponents as t}from"./index-Dt9XBGDk.js";import{M as l,C as i}from"./blocks-BPJ2Qi9p.js";import{S as a,D as o,W as d}from"./Slider.stories-C4cjsE9z.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./Box-Cc3QCFpm.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./styled-DujYcmrZ.js";import"./Stack-Bd6jq2pn.js";import"./useControlled-d9yX6gVw.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./useTimeout-BgZTaRCc.js";import"./useForkRef-k7JvqZ8G.js";import"./ownerDocument-DW-IO8s5.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-DcuCg741.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(r.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(r.p,{children:"The Slider component provides a way to select a value from a range of values using a sliding interface. Built with Material-UI's Slider component, it offers a clean and accessible way to select numeric values."}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Value Range"}),": Customizable minimum and maximum values"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Step Control"}),": Define the increment/decrement step size"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Marks"}),": Display marks along the slider track"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Optional Stepper"}),": Stepper controls for precise value input (planned feature)"]}),`
`]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import Slider from './Slider';\r
\r
<Slider \r
  defaultValue={50}\r
  min={0}\r
  max={100}\r
/>
`})}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h3,{id:"default-slider",children:"Default Slider"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(r.h3,{id:"slider-with-marks-and-stepper",children:"Slider with Marks and Stepper"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(r.p,{children:"The Slider component accepts all standard Material-UI Slider props plus:"}),`
`,e.jsx(r.p,{children:`| Prop | Type | Default | Description |\r
|------|------|---------|-------------|\r
| stepper | boolean | false | Whether to show +/- stepper controls (planned feature) |\r
| defaultValue | number | - | The default value of the slider |\r
| min | number | 0 | The minimum allowed value |\r
| max | number | 100 | The maximum allowed value |\r
| step | number | 1 | The step size for increments/decrements |\r
| marks | boolean | array | false | Whether to show marks or custom mark definitions |\r
| disabled | boolean | false | Whether the slider is disabled |\r
| onChange | function | - | Callback fired when the value changes |`}),`
`,e.jsx(r.h2,{id:"styling",children:"Styling"}),`
`,e.jsx(r.p,{children:"The component uses Material-UI's Slider component with a fixed width of 300px and proper spacing for optimal usability."})]})}function T(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{T as default};

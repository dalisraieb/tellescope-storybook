import{j as r}from"./iframe-Bv6dwyi6.js";import{useMDXComponents as i}from"./index-Cu5Oti8Q.js";import{M as s,C as n}from"./blocks-AiG4XMut.js";import{F as l,D as p,E as a,T as m,a as d}from"./Form.stories-BHYJE1Bt.js";import"./index-BaZz6jG6.js";import"./index-Bn2X2bTa.js";import"./FormControl-DtIj0zbc.js";import"./styled-1wupYI6N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DVbzj1df.js";import"./isMuiElement-Cd5s-INa.js";import"./Select-DgVd0jcT.js";import"./formControlState-Dq1zat_P.js";import"./List-CZrgSkRM.js";import"./useSlotProps-B-IxTsoN.js";import"./resolveComponentProps-C72E2f_V.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B_DK4l75.js";import"./Paper-CpZCUC_L.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./Grow-ozNc40uE.js";import"./useTheme-Chg0PB4m.js";import"./getReactElementRef-Dq-Larem.js";import"./ownerWindow-DIR61fab.js";import"./Modal-84UeeU9m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Bh7QF-ia.js";import"./useId-5SlOnbtB.js";import"./createSvgIcon-BJSFEBnp.js";import"./InputBase-BELbqXUV.js";import"./TextField-OODcnAKk.js";import"./Stack-BfX3vPkc.js";import"./MenuItem-9FrNM_dI.js";import"./ButtonBase-_JbzIVNU.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./dividerClasses-CeLMdPFz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:l}),`
`,r.jsx(e.h1,{id:"form-components",children:"Form Components"}),`
`,r.jsx(e.p,{children:"A collection of form components designed to create consistent and accessible form layouts."}),`
`,r.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,r.jsx(e.p,{children:"The Form components consist of three main parts:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"FormGroup"}),": A wrapper component that provides structure to form elements"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"FormGroupLabel"}),": A label component with customizable size and state"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"FormHelperText"}),": A helper text component for providing additional information or error messages"]}),`
`]}),`
`,r.jsx(e.p,{children:"These components are built on top of Material UI's form components but with a standardized API and styling."}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { FormGroup } from './FormGroup';\r
import { FormGroupLabel } from './FormGroupLabel';\r
import { FormHelperText } from './FormHelperText';\r
import { TextField } from '@mui/material';\r
\r
<FormGroup>\r
  <FormGroupLabel>Email Address</FormGroupLabel>\r
  <TextField \r
    hiddenLabel \r
    variant="filled" \r
    placeholder="Enter your email..." \r
  />\r
  <FormHelperText>\r
    We will never share your email with anyone.\r
  </FormHelperText>\r
</FormGroup>
`})}),`
`,r.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,r.jsx(e.h3,{id:"default-form-group",children:"Default Form Group"}),`
`,r.jsx(e.p,{children:"A basic form group with a label, input field, and helper text."}),`
`,r.jsx(n,{of:p}),`
`,r.jsx(e.h3,{id:"error-state",children:"Error State"}),`
`,r.jsxs(e.p,{children:["Form components can display error states by passing the ",r.jsx(e.code,{children:"error"})," prop."]}),`
`,r.jsx(n,{of:a}),`
`,r.jsx(e.h3,{id:"multiple-inputs",children:"Multiple Inputs"}),`
`,r.jsx(e.p,{children:"FormGroup can contain multiple inputs arranged horizontally."}),`
`,r.jsx(n,{of:m}),`
`,r.jsx(n,{of:d}),`
`,r.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,r.jsx(e.h3,{id:"formgroup",children:"FormGroup"}),`
`,r.jsx(e.p,{children:"A container component that wraps form elements."}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<FormGroup>\r
  {/* Form elements go here */}\r
</FormGroup>
`})}),`
`,r.jsx(e.h4,{id:"props",children:"Props"}),`
`,r.jsx(e.p,{children:`| Prop | Type | Default | Description |\r
|------|------|---------|-------------|\r
| children | React.ReactNode | - | The content of the form group |`}),`
`,r.jsx(e.h3,{id:"formgrouplabel",children:"FormGroupLabel"}),`
`,r.jsx(e.p,{children:"A label component for form groups."}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<FormGroupLabel labelSize="default">Label Text</FormGroupLabel>
`})}),`
`,r.jsx(e.h4,{id:"props-1",children:"Props"}),`
`,r.jsx(e.p,{children:`| Prop | Type | Default | Description |\r
|------|------|---------|-------------|\r
| children | React.ReactNode | - | The label text |\r
| labelSize | 'default' | 'large' | 'default' | Controls the size of the label |\r
| error | boolean | false | Whether to display the label in error state |\r
| disabled | boolean | false | Whether to display the label in disabled state |`}),`
`,r.jsx(e.h3,{id:"formhelpertext",children:"FormHelperText"}),`
`,r.jsx(e.p,{children:"A component for displaying helper text or error messages."}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<FormHelperText error={false}>Helper text goes here</FormHelperText>
`})}),`
`,r.jsx(e.h4,{id:"props-2",children:"Props"}),`
`,r.jsx(e.p,{children:`| Prop | Type | Default | Description |\r
|------|------|---------|-------------|\r
| children | React.ReactNode | - | The helper text content |\r
| error | boolean | false | Whether to display the text in error state |`})]})}function K(o={}){const{wrapper:e}={...i(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{K as default};

import{j as e}from"./iframe-CpdnR0i2.js";import{F as s,a as i,b as m}from"./FormHelperText-D7QRrrp1.js";import{T as n}from"./TextField-grUENmEg.js";import{S as v}from"./Stack-Bd6jq2pn.js";import{M as d}from"./MenuItem-CY6_J7Gc.js";const L={title:"Atoms/Form",component:s,parameters:{layout:"centered",docs:{description:{component:"A collection of form elements including FormGroup wrapper with FormGroupLabel and FormHelperText."}}},argTypes:{}},a={args:{},render:r=>e.jsxs(s,{...r,children:[e.jsx(i,{children:"Label"}),e.jsx(n,{hiddenLabel:!0,variant:"filled",placeholder:"Enter your email..."}),e.jsx(m,{children:"We will never share your email with anyone."})]})},l={args:{},render:r=>e.jsxs(s,{...r,children:[e.jsx(i,{error:!0,children:"Label"}),e.jsx(n,{error:!0,hiddenLabel:!0,variant:"filled",placeholder:"Enter your email..."}),e.jsx(m,{error:!0,children:"We will never share your email with anyone."})]})},o={args:{},render:r=>e.jsxs(s,{...r,children:[e.jsx(i,{children:"Label"}),e.jsxs(v,{direction:"row",spacing:2,sx:{width:"max-content"},children:[e.jsx(n,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}}),e.jsxs(n,{hiddenLabel:!0,select:!0,size:"small",sx:{width:200},label:"Label",children:[e.jsx(d,{value:"1",children:"Option 1"}),e.jsx(d,{value:"2",children:"Option 2"}),e.jsx(d,{value:"3",children:"Option 3"})]})]}),e.jsx(m,{children:"Helper Text"})]})},t={args:{},render:r=>e.jsxs(s,{...r,children:[e.jsx(i,{children:"Label"}),e.jsxs(v,{direction:"row",spacing:2,sx:{width:"max-content"},children:[e.jsx(n,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}}),e.jsx(n,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}}),e.jsx(n,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}})]}),e.jsx(m,{children:"We will never share your email with anyone."})]})};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    // label: "Email Address",
    // labelSize: "default",
    // disabled: false,
    // type: "text",
  },
  render: args => <FormControlAtom {...args}>\r
      <FormGroupLabel>Label</FormGroupLabel>\r
      <TextField hiddenLabel variant="filled" placeholder="Enter your email..." />\r
      <FormHelperText>\r
        We will never share your email with anyone.\r
      </FormHelperText>\r
    </FormControlAtom>
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,h,F;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    // label: "Email Address",
    // helperText: "We will never share your email with anyone.",
    // labelSize: "default",
  },
  render: args => <FormControlAtom {...args}>\r
      <FormGroupLabel error>Label</FormGroupLabel>\r
      <TextField error hiddenLabel variant="filled" placeholder="Enter your email..." />\r
      <FormHelperText error>\r
        We will never share your email with anyone.\r
      </FormHelperText>\r
    </FormControlAtom>
}`,...(F=(h=l.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var b,w,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    // label: "Label",
    // helperText: "We will never share your email with anyone.",
    // labelSize: "default",
  },
  render: args => <FormControlAtom {...args}>\r
      <FormGroupLabel>Label</FormGroupLabel>\r
      <Stack direction="row" spacing={2} sx={{
      width: "max-content"
    }}>\r
        <TextField variant="outlined" size="small" placeholder="Enter your email..." sx={{
        width: "max-content"
      }} />\r
        <TextField hiddenLabel select size="small" sx={{
        width: 200
      }} label="Label">\r
          <MenuItem value="1">Option 1</MenuItem>\r
          <MenuItem value="2">Option 2</MenuItem>\r
          <MenuItem value="3">Option 3</MenuItem>\r
        </TextField>\r
      </Stack>\r
      <FormHelperText>Helper Text</FormHelperText>\r
    </FormControlAtom>
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var T,g,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: args => <FormControlAtom {...args}>\r
      <FormGroupLabel>Label</FormGroupLabel>\r
      <Stack direction="row" spacing={2} sx={{
      width: "max-content"
    }}>\r
        <TextField variant="outlined" size="small" placeholder="Enter your email..." sx={{
        width: "max-content"
      }} />\r
\r
        <TextField variant="outlined" size="small" placeholder="Enter your email..." sx={{
        width: "max-content"
      }} />\r
        <TextField variant="outlined" size="small" placeholder="Enter your email..." sx={{
        width: "max-content"
      }} />\r
      </Stack>\r
      <FormHelperText>\r
        We will never share your email with anyone.\r
      </FormHelperText>\r
    </FormControlAtom>
}`,...(j=(g=t.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const f=["Default","Error","TwoInputs","ThreeInputs"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Error:l,ThreeInputs:t,TwoInputs:o,__namedExportsOrder:f,default:L},Symbol.toStringTag,{value:"Module"}));export{a as D,l as E,G as F,o as T,t as a};

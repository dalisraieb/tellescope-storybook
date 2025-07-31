import{j as e}from"./iframe-CM3h47Pf.js";import{F as E}from"./FormControl-DNSu1jEy.js";import{I as S,F as I}from"./Select-BL39qYkB.js";import{T as a}from"./TextField-C_RVne8W.js";import{S as v}from"./Stack-Dif7eGMF.js";import{M as c}from"./MenuItem-BiGuVhex.js";const n=({children:r})=>e.jsx(E,{children:r});n.__docgenInfo={description:"",methods:[],displayName:"FormGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=({children:r,labelSize:o="default",error:L,disabled:G})=>e.jsx(S,{disabled:G,error:L,sx:{fontSize:o==="large"?"1.25rem":"1rem",lineHeight:o==="large"?1.3:1.4,mb:1,position:"static",transform:"none"},children:r});d.__docgenInfo={description:"",methods:[],displayName:"FormGroupLabel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},labelSize:{required:!1,tsType:{name:"union",raw:'"default" | "large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const m=({children:r,error:o=!1})=>e.jsx(I,{error:o,sx:{mr:0,ml:0,mb:4,pt:1,color:o?"error.main":"text.secondary"},children:r});m.__docgenInfo={description:"",methods:[],displayName:"FormHelperText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"Atoms/Form",component:n,parameters:{layout:"centered",docs:{description:{component:"A collection of form elements including FormGroup wrapper with FormGroupLabel and FormHelperText."}}},argTypes:{}},t={args:{},render:r=>e.jsxs(n,{...r,children:[e.jsx(d,{children:"Label"}),e.jsx(a,{hiddenLabel:!0,variant:"filled",placeholder:"Enter your email..."}),e.jsx(m,{children:"We will never share your email with anyone."})]})},l={args:{},render:r=>e.jsxs(n,{...r,children:[e.jsx(d,{error:!0,children:"Label"}),e.jsx(a,{error:!0,hiddenLabel:!0,variant:"filled",placeholder:"Enter your email..."}),e.jsx(m,{error:!0,children:"We will never share your email with anyone."})]})},s={args:{},render:r=>e.jsxs(n,{...r,children:[e.jsx(d,{children:"Label"}),e.jsxs(v,{direction:"row",spacing:2,sx:{width:"max-content"},children:[e.jsx(a,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}}),e.jsxs(a,{hiddenLabel:!0,select:!0,size:"small",sx:{width:200},label:"Label",children:[e.jsx(c,{value:"1",children:"Option 1"}),e.jsx(c,{value:"2",children:"Option 2"}),e.jsx(c,{value:"3",children:"Option 3"})]})]}),e.jsx(m,{children:"Helper Text"})]})},i={args:{},render:r=>e.jsxs(n,{...r,children:[e.jsx(d,{children:"Label"}),e.jsxs(v,{direction:"row",spacing:2,sx:{width:"max-content"},children:[e.jsx(a,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}}),e.jsx(a,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}}),e.jsx(a,{variant:"outlined",size:"small",placeholder:"Enter your email...",sx:{width:"max-content"}})]}),e.jsx(m,{children:"We will never share your email with anyone."})]})};var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    // label: "Email Address",
    // labelSize: "default",
    // disabled: false,
    // type: "text",
  },
  render: args => <FormGroup {...args}>\r
      <FormGroupLabel>Label</FormGroupLabel>\r
      <TextField hiddenLabel variant="filled" placeholder="Enter your email..." />\r
      <FormHelperText>\r
        We will never share your email with anyone.\r
      </FormHelperText>\r
    </FormGroup>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,F,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    // label: "Email Address",
    // helperText: "We will never share your email with anyone.",
    // labelSize: "default",
  },
  render: args => <FormGroup {...args}>\r
      <FormGroupLabel error>Label</FormGroupLabel>\r
      <TextField error hiddenLabel variant="filled" placeholder="Enter your email..." />\r
      <FormHelperText error>\r
        We will never share your email with anyone.\r
      </FormHelperText>\r
    </FormGroup>
}`,...(b=(F=l.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var y,w,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    // label: "Label",
    // helperText: "We will never share your email with anyone.",
    // labelSize: "default",
  },
  render: args => <FormGroup {...args}>\r
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
    </FormGroup>
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var T,g,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: args => <FormGroup {...args}>\r
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
    </FormGroup>
}`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const H=["Default","Error","TwoInputs","ThreeInputs"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Error:l,ThreeInputs:i,TwoInputs:s,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{t as D,l as E,q as F,s as T,i as a};

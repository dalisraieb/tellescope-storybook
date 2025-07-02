import{j as r,b as n}from"./iframe-DtbUUh3X.js";import{S as i}from"./select-CE7xbMrk.js";import"./createSvgIcon-BH24oe3O.js";import"./createSvgIcon-ETa8Gqb4.js";import"./TransitionGroupContext-ByHAGyPv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-D1OSTXzn.js";import"./useIsFocusVisible-BXAimtCf.js";import"./checkbox-BVoPvrbS.js";import"./SwitchBase-DqOH8uJR.js";import"./useFormControl-BPlPBONu.js";import"./ButtonBase-jxhwmONz.js";import"./FormControl-BScKHux-.js";import"./utils-iop7lDec.js";import"./Select-Czjngvcg.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-D6_ZQbxJ.js";import"./index-BlOsm4Bp.js";import"./index-COy-h3kB.js";import"./Stack-DEr1tTMe.js";import"./Chip-VFZ0OiVz.js";import"./Typography-jgpmIS-g.js";const A={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",value:"",onChange:()=>{},options:["Chip 1","Chip 2","Chip 3","Chip 4"],appearance:"standard",multiple:!1,size:"medium"},render:e=>{const[s,l]=n.useState(e.multiple?[]:"");return r.jsx(i,{...e,value:s,onChange:m=>l(m.target.value)})}};var a,o,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "",
    onChange: () => {},
    options: ['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4'],
    appearance: 'standard',
    multiple: false,
    size: "medium"
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const I=["SingleSelect"];export{t as SingleSelect,I as __namedExportsOrder,A as default};

import{j as r,b as m}from"./iframe-cG-0_CPm.js";import{S as p}from"./select-qxROV7tU.js";import"./createSvgIcon-cM32GE1w.js";import"./createSvgIcon-dDeKaFoy.js";import"./TransitionGroupContext-Q0M-j55S.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CiGQ-sYP.js";import"./useIsFocusVisible-LLXNQJPz.js";import"./checkbox-lAdbOCI_.js";import"./SwitchBase-Dx5XlnH8.js";import"./useFormControl-COLmt8lF.js";import"./ButtonBase-kLDy-nZc.js";import"./FormControl-CVDjBwdb.js";import"./utils-iop7lDec.js";import"./Select-zI9tPuai.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DSOlMuUk.js";import"./index-D6JOygL5.js";import"./index-BlZ5Tbaw.js";import"./Stack-DVD8BSff.js";import"./Chip-DQa26HyS.js";import"./Typography-BKfEMICe.js";const A={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","options","label","multiple"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",value:"",onChange:()=>{},options:["Chip 1","Chip 2","Chip 3","Chip 4"],appearance:"standard",multiple:!1,size:"medium"},render:e=>{const[l,s]=m.useState(e.multiple?[]:"");return r.jsx(p,{...e,value:l,onChange:n=>s(n.target.value)})}};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const I=["SingleSelect"];export{t as SingleSelect,I as __namedExportsOrder,A as default};

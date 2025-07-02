import{j as r,b as m}from"./iframe-cG-0_CPm.js";import{S as i}from"./select-qxROV7tU.js";import"./createSvgIcon-cM32GE1w.js";import"./createSvgIcon-dDeKaFoy.js";import"./TransitionGroupContext-Q0M-j55S.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CiGQ-sYP.js";import"./useIsFocusVisible-LLXNQJPz.js";import"./checkbox-lAdbOCI_.js";import"./SwitchBase-Dx5XlnH8.js";import"./useFormControl-COLmt8lF.js";import"./ButtonBase-kLDy-nZc.js";import"./FormControl-CVDjBwdb.js";import"./utils-iop7lDec.js";import"./Select-zI9tPuai.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DSOlMuUk.js";import"./index-D6JOygL5.js";import"./index-BlZ5Tbaw.js";import"./Stack-DVD8BSff.js";import"./Chip-DQa26HyS.js";import"./Typography-BKfEMICe.js";const A={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","multiple","options","label","appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",options:["Option 1","Option 2","Option 3","Option 4","Option 5"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:e=>{const[l,n]=m.useState(e.multiple?[]:"");return r.jsx(i,{...e,value:l,onChange:s=>n(s.target.value)})}};var o,a,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
    appearance: "standard",
    multiple: true,
    value: '',
    onChange: () => {},
    size: 'medium'
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const F=["MultipleSelect"];export{t as MultipleSelect,F as __namedExportsOrder,A as default};

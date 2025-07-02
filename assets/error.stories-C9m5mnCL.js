import{j as r,b as m}from"./iframe-cG-0_CPm.js";import{S as s}from"./select-qxROV7tU.js";import"./createSvgIcon-cM32GE1w.js";import"./createSvgIcon-dDeKaFoy.js";import"./TransitionGroupContext-Q0M-j55S.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CiGQ-sYP.js";import"./useIsFocusVisible-LLXNQJPz.js";import"./checkbox-lAdbOCI_.js";import"./SwitchBase-Dx5XlnH8.js";import"./useFormControl-COLmt8lF.js";import"./ButtonBase-kLDy-nZc.js";import"./FormControl-CVDjBwdb.js";import"./utils-iop7lDec.js";import"./Select-zI9tPuai.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DSOlMuUk.js";import"./index-D6JOygL5.js";import"./index-BlZ5Tbaw.js";import"./Stack-DVD8BSff.js";import"./Chip-DQa26HyS.js";import"./Typography-BKfEMICe.js";const _={title:"ATOMS/FormInputs/Select",component:s,parameters:{controls:{exclude:["optionStyle","disabled","helperText","value","onChange","size","options","label","multiple","error"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",options:["Menu Item 1","Menu Item 2","Menu Item 3"],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:e=>{const[l,p]=m.useState(e.multiple?[]:"");return r.jsx(s,{...e,value:l,onChange:i=>p(i.target.value),error:!0})}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    options: ['Menu Item 1', 'Menu Item 2', 'Menu Item 3'],
    appearance: 'standard',
    multiple: false,
    value: '',
    onChange: () => {},
    size: 'medium'
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} error={true} />;
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const w=["Error"];export{t as Error,w as __namedExportsOrder,_ as default};

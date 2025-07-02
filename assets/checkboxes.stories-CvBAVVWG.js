import{j as t,b as m}from"./iframe-cG-0_CPm.js";import{S as p}from"./select-qxROV7tU.js";import"./createSvgIcon-cM32GE1w.js";import"./createSvgIcon-dDeKaFoy.js";import"./TransitionGroupContext-Q0M-j55S.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CiGQ-sYP.js";import"./useIsFocusVisible-LLXNQJPz.js";import"./checkbox-lAdbOCI_.js";import"./SwitchBase-Dx5XlnH8.js";import"./useFormControl-COLmt8lF.js";import"./ButtonBase-kLDy-nZc.js";import"./FormControl-CVDjBwdb.js";import"./utils-iop7lDec.js";import"./Select-zI9tPuai.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DSOlMuUk.js";import"./index-D6JOygL5.js";import"./index-BlZ5Tbaw.js";import"./Stack-DVD8BSff.js";import"./Chip-DQa26HyS.js";import"./Typography-BKfEMICe.js";const B={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","multiple","options","label","appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",options:["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox"},render:e=>{const[n,s]=m.useState(e.multiple?[]:"");return t.jsx(p,{...e,value:n,onChange:i=>s(i.target.value)})}};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    options: ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander'],
    appearance: 'standard',
    multiple: true,
    value: '',
    onChange: () => {},
    size: 'medium',
    optionStyle: "checkbox"
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const F=["CheckBoxes"];export{r as CheckBoxes,F as __namedExportsOrder,B as default};

import{j as t,b as n}from"./iframe-CPQTd9d5.js";import{S as i}from"./select-ByH49_zW.js";import"./Check-CcgHJ_hO.js";import"./createSvgIcon-dv_5fqTH.js";import"./createSvgIcon-BoBBx9HX.js";import"./styled-C2Cu9qfT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-Cbn0X-eY.js";import"./isMuiElement-DLkjVCSc.js";import"./useControlled-C2KopCyd.js";import"./useIsFocusVisible-CLv33wm5.js";import"./checkbox-LnJ5j6Ld.js";import"./SwitchBase-BRzyNRqZ.js";import"./useFormControl-PyG4Ikag.js";import"./ButtonBase-t_hNJL6A.js";import"./TransitionGroupContext-D0Irt0u2.js";import"./index-I4yg9hSe.js";import"./FormControl-DTFU8ly8.js";import"./utils-DoM3o7-Q.js";import"./Select-C_RdHVh4.js";import"./formControlState-Dq1zat_P.js";import"./List-CyNYxBQg.js";import"./useSlotProps-BP5MHBFQ.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DNpquR1_.js";import"./index-CpFMawnv.js";import"./InputBase-B4vcM9ZV.js";import"./Stack-DFQFZ6Xi.js";import"./Typography-BzBpWJM4.js";const B={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",options:["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkmark"},render:e=>{const[l,m]=n.useState(e.multiple?[]:"");return t.jsx(i,{...e,value:l,onChange:s=>m(s.target.value)})}};var a,o,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    options: ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander'],
    appearance: 'standard',
    multiple: true,
    value: '',
    onChange: () => {},
    size: 'medium',
    optionStyle: "checkmark"
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const D=["CheckMarks"];export{r as CheckMarks,D as __namedExportsOrder,B as default};

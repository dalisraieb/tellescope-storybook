import{j as t,b as n}from"./iframe-MlT4uNqk.js";import{S as i}from"./select-DHAKSmZb.js";import"./Check-ql6EAfzj.js";import"./createSvgIcon-SHSNCR4y.js";import"./createSvgIcon-j_d6Q5Pl.js";import"./styled-uAf5yWmA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CyR9ZBBC.js";import"./isMuiElement-CEp5Ye4Q.js";import"./useControlled-3UtnvOT2.js";import"./useIsFocusVisible-rP1Nd5fW.js";import"./checkbox-Bn4HuM78.js";import"./SwitchBase-Df2V0RFK.js";import"./useFormControl-D8WB3yfs.js";import"./ButtonBase-CL_5rPQg.js";import"./TransitionGroupContext-UBgLjG1_.js";import"./index-Dx6EIJkF.js";import"./FormControl-CFVprfL6.js";import"./utils-DoM3o7-Q.js";import"./Select-DNsqDj-L.js";import"./formControlState-Dq1zat_P.js";import"./List-CzCOLpp6.js";import"./useSlotProps-BcOVKQAO.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C-8GXCC5.js";import"./index-Dh7Fyga5.js";import"./InputBase-DD6AQtSv.js";import"./Stack-CDqxnO2v.js";import"./Typography-Dlx4VT3Z.js";const B={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",options:["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkmark"},render:e=>{const[l,m]=n.useState(e.multiple?[]:"");return t.jsx(i,{...e,value:l,onChange:s=>m(s.target.value)})}};var a,o,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

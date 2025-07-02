import{j as t,b as m}from"./iframe-DtbUUh3X.js";import{S as p}from"./select-CE7xbMrk.js";import"./createSvgIcon-BH24oe3O.js";import"./createSvgIcon-ETa8Gqb4.js";import"./TransitionGroupContext-ByHAGyPv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-D1OSTXzn.js";import"./useIsFocusVisible-BXAimtCf.js";import"./checkbox-BVoPvrbS.js";import"./SwitchBase-DqOH8uJR.js";import"./useFormControl-BPlPBONu.js";import"./ButtonBase-jxhwmONz.js";import"./FormControl-BScKHux-.js";import"./utils-iop7lDec.js";import"./Select-Czjngvcg.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-D6_ZQbxJ.js";import"./index-BlOsm4Bp.js";import"./index-COy-h3kB.js";import"./Stack-DEr1tTMe.js";import"./Chip-VFZ0OiVz.js";import"./Typography-jgpmIS-g.js";const B={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","multiple","options","label","appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",options:["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox"},render:e=>{const[n,s]=m.useState(e.multiple?[]:"");return t.jsx(p,{...e,value:n,onChange:i=>s(i.target.value)})}};var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

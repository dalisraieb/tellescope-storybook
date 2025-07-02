import{j as r,b as m}from"./iframe-DtbUUh3X.js";import{S as i}from"./select-CE7xbMrk.js";import"./createSvgIcon-BH24oe3O.js";import"./createSvgIcon-ETa8Gqb4.js";import"./TransitionGroupContext-ByHAGyPv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-D1OSTXzn.js";import"./useIsFocusVisible-BXAimtCf.js";import"./checkbox-BVoPvrbS.js";import"./SwitchBase-DqOH8uJR.js";import"./useFormControl-BPlPBONu.js";import"./ButtonBase-jxhwmONz.js";import"./FormControl-BScKHux-.js";import"./utils-iop7lDec.js";import"./Select-Czjngvcg.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-D6_ZQbxJ.js";import"./index-BlOsm4Bp.js";import"./index-COy-h3kB.js";import"./Stack-DEr1tTMe.js";import"./Chip-VFZ0OiVz.js";import"./Typography-jgpmIS-g.js";const A={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","multiple","options","label","appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",options:["Option 1","Option 2","Option 3","Option 4","Option 5"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:e=>{const[l,n]=m.useState(e.multiple?[]:"");return r.jsx(i,{...e,value:l,onChange:s=>n(s.target.value)})}};var o,a,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{j as r,b as m}from"./iframe-MlT4uNqk.js";import{S as i}from"./select-DHAKSmZb.js";import"./Check-ql6EAfzj.js";import"./createSvgIcon-SHSNCR4y.js";import"./createSvgIcon-j_d6Q5Pl.js";import"./styled-uAf5yWmA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CyR9ZBBC.js";import"./isMuiElement-CEp5Ye4Q.js";import"./useControlled-3UtnvOT2.js";import"./useIsFocusVisible-rP1Nd5fW.js";import"./checkbox-Bn4HuM78.js";import"./SwitchBase-Df2V0RFK.js";import"./useFormControl-D8WB3yfs.js";import"./ButtonBase-CL_5rPQg.js";import"./TransitionGroupContext-UBgLjG1_.js";import"./index-Dx6EIJkF.js";import"./FormControl-CFVprfL6.js";import"./utils-DoM3o7-Q.js";import"./Select-DNsqDj-L.js";import"./formControlState-Dq1zat_P.js";import"./List-CzCOLpp6.js";import"./useSlotProps-BcOVKQAO.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C-8GXCC5.js";import"./index-Dh7Fyga5.js";import"./InputBase-DD6AQtSv.js";import"./Stack-CDqxnO2v.js";import"./Typography-Dlx4VT3Z.js";const D={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[t=>r.jsx("div",{style:{width:250},children:r.jsx(t,{})})]},e={args:{label:"Label",options:["Option 1","Option 2","Option 3","Option 4","Option 5"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:t=>{const[l,n]=m.useState(t.multiple?[]:"");return r.jsx(i,{...t,value:l,onChange:s=>n(s.target.value)})}};var o,p,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const G=["MultipleSelect"];export{e as MultipleSelect,G as __namedExportsOrder,D as default};

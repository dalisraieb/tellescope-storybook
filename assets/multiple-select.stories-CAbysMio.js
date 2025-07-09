import{j as r,b as m}from"./iframe-CPQTd9d5.js";import{S as i}from"./select-ByH49_zW.js";import"./Check-CcgHJ_hO.js";import"./createSvgIcon-dv_5fqTH.js";import"./createSvgIcon-BoBBx9HX.js";import"./styled-C2Cu9qfT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-Cbn0X-eY.js";import"./isMuiElement-DLkjVCSc.js";import"./useControlled-C2KopCyd.js";import"./useIsFocusVisible-CLv33wm5.js";import"./checkbox-LnJ5j6Ld.js";import"./SwitchBase-BRzyNRqZ.js";import"./useFormControl-PyG4Ikag.js";import"./ButtonBase-t_hNJL6A.js";import"./TransitionGroupContext-D0Irt0u2.js";import"./index-I4yg9hSe.js";import"./FormControl-DTFU8ly8.js";import"./utils-DoM3o7-Q.js";import"./Select-C_RdHVh4.js";import"./formControlState-Dq1zat_P.js";import"./List-CyNYxBQg.js";import"./useSlotProps-BP5MHBFQ.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DNpquR1_.js";import"./index-CpFMawnv.js";import"./InputBase-B4vcM9ZV.js";import"./Stack-DFQFZ6Xi.js";import"./Typography-BzBpWJM4.js";const D={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[t=>r.jsx("div",{style:{width:250},children:r.jsx(t,{})})]},e={args:{label:"Label",options:["Option 1","Option 2","Option 3","Option 4","Option 5"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:t=>{const[l,n]=m.useState(t.multiple?[]:"");return r.jsx(i,{...t,value:l,onChange:s=>n(s.target.value)})}};var o,p,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

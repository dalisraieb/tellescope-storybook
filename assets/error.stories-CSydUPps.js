import{j as r,b as l}from"./iframe-CPQTd9d5.js";import{S as p}from"./select-ByH49_zW.js";import"./Check-CcgHJ_hO.js";import"./createSvgIcon-dv_5fqTH.js";import"./createSvgIcon-BoBBx9HX.js";import"./styled-C2Cu9qfT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-Cbn0X-eY.js";import"./isMuiElement-DLkjVCSc.js";import"./useControlled-C2KopCyd.js";import"./useIsFocusVisible-CLv33wm5.js";import"./checkbox-LnJ5j6Ld.js";import"./SwitchBase-BRzyNRqZ.js";import"./useFormControl-PyG4Ikag.js";import"./ButtonBase-t_hNJL6A.js";import"./TransitionGroupContext-D0Irt0u2.js";import"./index-I4yg9hSe.js";import"./FormControl-DTFU8ly8.js";import"./utils-DoM3o7-Q.js";import"./Select-C_RdHVh4.js";import"./formControlState-Dq1zat_P.js";import"./List-CyNYxBQg.js";import"./useSlotProps-BP5MHBFQ.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DNpquR1_.js";import"./index-CpFMawnv.js";import"./InputBase-B4vcM9ZV.js";import"./Stack-DFQFZ6Xi.js";import"./Typography-BzBpWJM4.js";const D={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",options:["Menu Item 1","Menu Item 2","Menu Item 3"],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:e=>{const[m,i]=l.useState(e.multiple?[]:"");return r.jsx(p,{...e,value:m,onChange:s=>i(s.target.value),error:!0})}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const G=["Error"];export{t as Error,G as __namedExportsOrder,D as default};

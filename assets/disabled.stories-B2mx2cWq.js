import{b as l,j as p}from"./iframe-pqJXIrR0.js";import{S as o}from"./select-COI8gJdk.js";import"./FormControl-DAMVBQp0.js";import"./TransitionGroupContext-C8yxHfzh.js";import"./utils-iop7lDec.js";import"./useFormControl-C-KOYPA3.js";import"./useId-CU7IDVFO.js";import"./Select-CSN2hFw2.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DV9Xdpa-.js";import"./index-DBMPwtkS.js";import"./index-D5nfPDNt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-CA1eWsW_.js";import"./Stack-BrF-CeY5.js";import"./ButtonBase-C1ayromv.js";import"./useIsFocusVisible-eeMHGHa3.js";import"./Checkbox-BfoQfGPd.js";import"./SwitchBase-BkmAx4Ne.js";import"./Typography-BnYRhljd.js";const O={title:"ATOMS/FormInputs/Select",component:o,argTypes:{variant:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}}},e={args:{label:"Label",options:["Menu Item 1","Menu Item 2","Menu Item 3"],variant:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:t=>{const[s,m]=l.useState(t.multiple?[]:"");return p.jsx(o,{...t,value:s,onChange:i=>m(i.target.value)})}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    options: ['Menu Item 1', 'Menu Item 2', 'Menu Item 3'],
    variant: 'standard',
    multiple: false,
    value: '',
    onChange: () => {},
    size: 'medium'
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const T=["Disabled"];export{e as Disabled,T as __namedExportsOrder,O as default};

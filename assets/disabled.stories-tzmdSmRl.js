import{j as r,b as m}from"./iframe-DtbUUh3X.js";import{S as s}from"./select-CE7xbMrk.js";import"./createSvgIcon-BH24oe3O.js";import"./createSvgIcon-ETa8Gqb4.js";import"./TransitionGroupContext-ByHAGyPv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-D1OSTXzn.js";import"./useIsFocusVisible-BXAimtCf.js";import"./checkbox-BVoPvrbS.js";import"./SwitchBase-DqOH8uJR.js";import"./useFormControl-BPlPBONu.js";import"./ButtonBase-jxhwmONz.js";import"./FormControl-BScKHux-.js";import"./utils-iop7lDec.js";import"./Select-Czjngvcg.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-D6_ZQbxJ.js";import"./index-BlOsm4Bp.js";import"./index-COy-h3kB.js";import"./Stack-DEr1tTMe.js";import"./Chip-VFZ0OiVz.js";import"./Typography-jgpmIS-g.js";const O={title:"ATOMS/FormInputs/Select",component:s,parameters:{controls:{exclude:["optionStyle","error","helperText","value","onChange","size","options","label"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",options:["Menu Item 1","Menu Item 2","Menu Item 3"],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:e=>{const[l,i]=m.useState(e.multiple?[]:"");return r.jsx(s,{...e,value:l,onChange:p=>i(p.target.value)})}};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)}
    // disabled={true}
    />;
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const _=["Disabled"];export{t as Disabled,_ as __namedExportsOrder,O as default};

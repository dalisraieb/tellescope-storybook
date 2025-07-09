import{j as r,b as m}from"./iframe-DcQCorcF.js";import{S as i}from"./select-DCwCwDax.js";import"./Check-K5bxv44D.js";import"./createSvgIcon-DsipAhp4.js";import"./createSvgIcon-B8TgDHxc.js";import"./styled-BwxNTMYu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-JwLuVtQu.js";import"./isMuiElement-Bs55rATV.js";import"./useControlled-Cq1AqgbH.js";import"./useIsFocusVisible-AGo_CW5c.js";import"./checkbox-C15Zh00d.js";import"./SwitchBase-CF7vN2eH.js";import"./useFormControl-DUshowLh.js";import"./ButtonBase-BmcDWBos.js";import"./TransitionGroupContext-DB_VBoO3.js";import"./index-DKg1N_ec.js";import"./FormControl-KyJaZbTt.js";import"./utils-DoM3o7-Q.js";import"./Select-DiB2dLpw.js";import"./formControlState-Dq1zat_P.js";import"./List-C5Yomo3v.js";import"./useSlotProps-kzTmx_RL.js";import"./isHostComponent-DVu5iVWx.js";import"./index-M7CxruzB.js";import"./index-DS_KXk_Y.js";import"./InputBase-BDI_5ZKH.js";import"./Stack-DhfY1MpU.js";import"./Typography-CrfA0lvj.js";const D={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[t=>r.jsx("div",{style:{width:250},children:r.jsx(t,{})})]},e={args:{label:"Label",options:["Option 1","Option 2","Option 3","Option 4","Option 5"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:t=>{const[l,n]=m.useState(t.multiple?[]:"");return r.jsx(i,{...t,value:l,onChange:s=>n(s.target.value)})}};var o,p,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

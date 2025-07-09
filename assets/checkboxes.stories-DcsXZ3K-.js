import{j as t,b as m}from"./iframe-DcQCorcF.js";import{S as i}from"./select-DCwCwDax.js";import"./Check-K5bxv44D.js";import"./createSvgIcon-DsipAhp4.js";import"./createSvgIcon-B8TgDHxc.js";import"./styled-BwxNTMYu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-JwLuVtQu.js";import"./isMuiElement-Bs55rATV.js";import"./useControlled-Cq1AqgbH.js";import"./useIsFocusVisible-AGo_CW5c.js";import"./checkbox-C15Zh00d.js";import"./SwitchBase-CF7vN2eH.js";import"./useFormControl-DUshowLh.js";import"./ButtonBase-BmcDWBos.js";import"./TransitionGroupContext-DB_VBoO3.js";import"./index-DKg1N_ec.js";import"./FormControl-KyJaZbTt.js";import"./utils-DoM3o7-Q.js";import"./Select-DiB2dLpw.js";import"./formControlState-Dq1zat_P.js";import"./List-C5Yomo3v.js";import"./useSlotProps-kzTmx_RL.js";import"./isHostComponent-DVu5iVWx.js";import"./index-M7CxruzB.js";import"./index-DS_KXk_Y.js";import"./InputBase-BDI_5ZKH.js";import"./Stack-DhfY1MpU.js";import"./Typography-CrfA0lvj.js";const q={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",options:["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox"},render:e=>{const[l,s]=m.useState(e.multiple?[]:"");return t.jsx(i,{...e,value:l,onChange:n=>s(n.target.value)})}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const D=["CheckBoxes"];export{r as CheckBoxes,D as __namedExportsOrder,q as default};

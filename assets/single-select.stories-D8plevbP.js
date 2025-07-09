import{j as a,b as s}from"./iframe-DcQCorcF.js";import{S as l}from"./select-DCwCwDax.js";import"./Check-K5bxv44D.js";import"./createSvgIcon-DsipAhp4.js";import"./createSvgIcon-B8TgDHxc.js";import"./styled-BwxNTMYu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-JwLuVtQu.js";import"./isMuiElement-Bs55rATV.js";import"./useControlled-Cq1AqgbH.js";import"./useIsFocusVisible-AGo_CW5c.js";import"./checkbox-C15Zh00d.js";import"./SwitchBase-CF7vN2eH.js";import"./useFormControl-DUshowLh.js";import"./ButtonBase-BmcDWBos.js";import"./TransitionGroupContext-DB_VBoO3.js";import"./index-DKg1N_ec.js";import"./FormControl-KyJaZbTt.js";import"./utils-DoM3o7-Q.js";import"./Select-DiB2dLpw.js";import"./formControlState-Dq1zat_P.js";import"./List-C5Yomo3v.js";import"./useSlotProps-kzTmx_RL.js";import"./isHostComponent-DVu5iVWx.js";import"./index-M7CxruzB.js";import"./index-DS_KXk_Y.js";import"./InputBase-BDI_5ZKH.js";import"./Stack-DhfY1MpU.js";import"./Typography-CrfA0lvj.js";const D={title:"ATOMS/FormInputs/Select",component:l,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>a.jsx("div",{style:{width:250},children:a.jsx(e,{})})]},t={args:{label:"Label",value:"",onChange:()=>{},options:["Synt to health","Content capsqd","Chip 3","Chip 4"],appearance:"standard",multiple:!1,size:"medium"},render:e=>{const[i,m]=s.useState(e.multiple||e.appearance==="table"?[]:"");return a.jsx(l,{...e,multiple:e.multiple||e.appearance==="table",value:i,onChange:n=>m(n.target.value)})}};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "",
    onChange: () => {},
    options: ['Synt to health', 'Content capsqd', 'Chip 3', 'Chip 4'],
    appearance: 'standard',
    multiple: false,
    size: "medium"
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple || args.appearance === "table" ? [] : '');
    return <Select {...args} multiple={args.multiple || args.appearance === "table"} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const G=["SingleSelect"];export{t as SingleSelect,G as __namedExportsOrder,D as default};

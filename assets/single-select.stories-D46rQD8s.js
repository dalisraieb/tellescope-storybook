import{j as r,b as n}from"./iframe-C5I7zUGg.js";import{S as p}from"./select-DRFcoz37.js";import"./Check-DBDEjYab.js";import"./createSvgIcon-Cgq1HHLL.js";import"./createSvgIcon-B4GBH7Cj.js";import"./TransitionGroupContext-BuuAjFk1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-B06uzprO.js";import"./isMuiElement-BQkK_zk6.js";import"./useControlled-BsnZG7tq.js";import"./useIsFocusVisible-BtJllHTp.js";import"./checkbox-BK82rUDH.js";import"./SwitchBase-C33R3ZU6.js";import"./useFormControl-BLPrbtBA.js";import"./ButtonBase-BBeAeCl3.js";import"./FormControl-B9RF-G-A.js";import"./utils-DoM3o7-Q.js";import"./Select-a55uB6rt.js";import"./formControlState-Dq1zat_P.js";import"./List-mmoQ_dlE.js";import"./useSlotProps-BWY3cnJ5.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Bf9KfrAq.js";import"./index-p93MzeW2.js";import"./InputBase-CVo7mlo-.js";import"./Stack-CmCYCfVI.js";import"./Chip-Baf5IX0r.js";import"./Typography-DuF830wv.js";const B={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","options","label","multiple"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",value:"",onChange:()=>{},options:["Chip 1","Chip 2","Chip 3","Chip 4"],appearance:"standard",multiple:!1,size:"medium"},render:e=>{const[l,s]=n.useState(e.multiple?[]:"");return r.jsx(p,{...e,value:l,onChange:m=>s(m.target.value)})}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "",
    onChange: () => {},
    options: ['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4'],
    appearance: 'standard',
    multiple: false,
    size: "medium"
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const D=["SingleSelect"];export{t as SingleSelect,D as __namedExportsOrder,B as default};

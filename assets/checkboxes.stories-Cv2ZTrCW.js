import{j as t,b as m}from"./iframe-C5I7zUGg.js";import{S as i}from"./select-DRFcoz37.js";import"./Check-DBDEjYab.js";import"./createSvgIcon-Cgq1HHLL.js";import"./createSvgIcon-B4GBH7Cj.js";import"./TransitionGroupContext-BuuAjFk1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-B06uzprO.js";import"./isMuiElement-BQkK_zk6.js";import"./useControlled-BsnZG7tq.js";import"./useIsFocusVisible-BtJllHTp.js";import"./checkbox-BK82rUDH.js";import"./SwitchBase-C33R3ZU6.js";import"./useFormControl-BLPrbtBA.js";import"./ButtonBase-BBeAeCl3.js";import"./FormControl-B9RF-G-A.js";import"./utils-DoM3o7-Q.js";import"./Select-a55uB6rt.js";import"./formControlState-Dq1zat_P.js";import"./List-mmoQ_dlE.js";import"./useSlotProps-BWY3cnJ5.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Bf9KfrAq.js";import"./index-p93MzeW2.js";import"./InputBase-CVo7mlo-.js";import"./Stack-CmCYCfVI.js";import"./Chip-Baf5IX0r.js";import"./Typography-DuF830wv.js";const M={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","multiple","options","label","appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",options:["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox"},render:e=>{const[l,n]=m.useState(e.multiple?[]:"");return t.jsx(i,{...e,value:l,onChange:s=>n(s.target.value)})}};var a,o,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const q=["CheckBoxes"];export{r as CheckBoxes,q as __namedExportsOrder,M as default};

import{j as t,b as m}from"./iframe-BgjesgQg.js";import{S as i}from"./select-Cyh5S39l.js";import"./Check-DkeUXCOw.js";import"./createSvgIcon-DuVIEAor.js";import"./createSvgIcon-iIuMGR86.js";import"./TransitionGroupContext-CLlTie2B.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-DP9OkCxR.js";import"./isMuiElement-DaA2x2kF.js";import"./useControlled-LfO21FU7.js";import"./useIsFocusVisible-Bjmxrfal.js";import"./checkbox-D5XBzKqJ.js";import"./SwitchBase-yqUcOkcV.js";import"./useFormControl-YTI9_HU0.js";import"./ButtonBase-BrFLFx0R.js";import"./FormControl-BvCggP1j.js";import"./utils-DoM3o7-Q.js";import"./Select-Dnj5o-UP.js";import"./formControlState-Dq1zat_P.js";import"./List-BmU6gkgd.js";import"./useSlotProps-Cmui656I.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D6IPu2VR.js";import"./index-ZbsjeBzv.js";import"./InputBase-D3eESvJZ.js";import"./Stack-KWo0K7od.js";import"./Chip-BmlQj8q0.js";import"./Typography-652LhfSf.js";const q={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","multiple","options","label","appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",options:["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander"],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkmark"},render:e=>{const[l,n]=m.useState(e.multiple?[]:"");return t.jsx(i,{...e,value:l,onChange:s=>n(s.target.value)})}};var a,o,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    options: ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander'],
    appearance: 'standard',
    multiple: true,
    value: '',
    onChange: () => {},
    size: 'medium',
    optionStyle: "checkmark"
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const B=["CheckMarks"];export{r as CheckMarks,B as __namedExportsOrder,q as default};

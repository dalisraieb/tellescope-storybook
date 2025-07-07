import{j as a,b as m}from"./iframe-BgjesgQg.js";import{S as l}from"./select-Cyh5S39l.js";import"./Check-DkeUXCOw.js";import"./createSvgIcon-DuVIEAor.js";import"./createSvgIcon-iIuMGR86.js";import"./TransitionGroupContext-CLlTie2B.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-DP9OkCxR.js";import"./isMuiElement-DaA2x2kF.js";import"./useControlled-LfO21FU7.js";import"./useIsFocusVisible-Bjmxrfal.js";import"./checkbox-D5XBzKqJ.js";import"./SwitchBase-yqUcOkcV.js";import"./useFormControl-YTI9_HU0.js";import"./ButtonBase-BrFLFx0R.js";import"./FormControl-BvCggP1j.js";import"./utils-DoM3o7-Q.js";import"./Select-Dnj5o-UP.js";import"./formControlState-Dq1zat_P.js";import"./List-BmU6gkgd.js";import"./useSlotProps-Cmui656I.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D6IPu2VR.js";import"./index-ZbsjeBzv.js";import"./InputBase-D3eESvJZ.js";import"./Stack-KWo0K7od.js";import"./Chip-BmlQj8q0.js";import"./Typography-652LhfSf.js";const B={title:"ATOMS/FormInputs/Select",component:l,parameters:{controls:{exclude:["optionStyle","disabled","error","helperText","value","onChange","size","options","label","multiple"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>a.jsx("div",{style:{width:250},children:a.jsx(e,{})})]},t={args:{label:"Label",value:"",onChange:()=>{},options:["Synt to health","Content capsqd","Chip 3","Chip 4"],appearance:"standard",multiple:!1,size:"medium"},render:e=>{const[i,s]=m.useState(e.multiple||e.appearance==="table"?[]:"");return a.jsx(l,{...e,multiple:e.multiple||e.appearance==="table",value:i,onChange:n=>s(n.target.value)})}};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const D=["SingleSelect"];export{t as SingleSelect,D as __namedExportsOrder,B as default};

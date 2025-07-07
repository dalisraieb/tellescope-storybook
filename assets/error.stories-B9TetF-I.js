import{j as r,b as l}from"./iframe-BgjesgQg.js";import{S as p}from"./select-Cyh5S39l.js";import"./Check-DkeUXCOw.js";import"./createSvgIcon-DuVIEAor.js";import"./createSvgIcon-iIuMGR86.js";import"./TransitionGroupContext-CLlTie2B.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-DP9OkCxR.js";import"./isMuiElement-DaA2x2kF.js";import"./useControlled-LfO21FU7.js";import"./useIsFocusVisible-Bjmxrfal.js";import"./checkbox-D5XBzKqJ.js";import"./SwitchBase-yqUcOkcV.js";import"./useFormControl-YTI9_HU0.js";import"./ButtonBase-BrFLFx0R.js";import"./FormControl-BvCggP1j.js";import"./utils-DoM3o7-Q.js";import"./Select-Dnj5o-UP.js";import"./formControlState-Dq1zat_P.js";import"./List-BmU6gkgd.js";import"./useSlotProps-Cmui656I.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D6IPu2VR.js";import"./index-ZbsjeBzv.js";import"./InputBase-D3eESvJZ.js";import"./Stack-KWo0K7od.js";import"./Chip-BmlQj8q0.js";import"./Typography-652LhfSf.js";const B={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{exclude:["optionStyle","disabled","helperText","value","onChange","size","options","label","multiple","error"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[e=>r.jsx("div",{style:{width:250},children:r.jsx(e,{})})]},t={args:{label:"Label",options:["Menu Item 1","Menu Item 2","Menu Item 3"],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:e=>{const[i,m]=l.useState(e.multiple?[]:"");return r.jsx(p,{...e,value:i,onChange:s=>m(s.target.value),error:!0})}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const D=["Error"];export{t as Error,D as __namedExportsOrder,B as default};

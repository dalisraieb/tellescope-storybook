import{j as a,b as s}from"./iframe-MlT4uNqk.js";import{S as l}from"./select-DHAKSmZb.js";import"./Check-ql6EAfzj.js";import"./createSvgIcon-SHSNCR4y.js";import"./createSvgIcon-j_d6Q5Pl.js";import"./styled-uAf5yWmA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CyR9ZBBC.js";import"./isMuiElement-CEp5Ye4Q.js";import"./useControlled-3UtnvOT2.js";import"./useIsFocusVisible-rP1Nd5fW.js";import"./checkbox-Bn4HuM78.js";import"./SwitchBase-Df2V0RFK.js";import"./useFormControl-D8WB3yfs.js";import"./ButtonBase-CL_5rPQg.js";import"./TransitionGroupContext-UBgLjG1_.js";import"./index-Dx6EIJkF.js";import"./FormControl-CFVprfL6.js";import"./utils-DoM3o7-Q.js";import"./Select-DNsqDj-L.js";import"./formControlState-Dq1zat_P.js";import"./List-CzCOLpp6.js";import"./useSlotProps-BcOVKQAO.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C-8GXCC5.js";import"./index-Dh7Fyga5.js";import"./InputBase-DD6AQtSv.js";import"./Stack-CDqxnO2v.js";import"./Typography-Dlx4VT3Z.js";const D={title:"ATOMS/FormInputs/Select",component:l,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>a.jsx("div",{style:{width:250},children:a.jsx(e,{})})]},t={args:{label:"Label",value:"",onChange:()=>{},options:["Synt to health","Content capsqd","Chip 3","Chip 4"],appearance:"standard",multiple:!1,size:"medium"},render:e=>{const[i,m]=s.useState(e.multiple||e.appearance==="table"?[]:"");return a.jsx(l,{...e,multiple:e.multiple||e.appearance==="table",value:i,onChange:n=>m(n.target.value)})}};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

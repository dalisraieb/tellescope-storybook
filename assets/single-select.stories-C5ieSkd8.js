import{j as a,b as s}from"./iframe-CPQTd9d5.js";import{S as l}from"./select-ByH49_zW.js";import"./Check-CcgHJ_hO.js";import"./createSvgIcon-dv_5fqTH.js";import"./createSvgIcon-BoBBx9HX.js";import"./styled-C2Cu9qfT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-Cbn0X-eY.js";import"./isMuiElement-DLkjVCSc.js";import"./useControlled-C2KopCyd.js";import"./useIsFocusVisible-CLv33wm5.js";import"./checkbox-LnJ5j6Ld.js";import"./SwitchBase-BRzyNRqZ.js";import"./useFormControl-PyG4Ikag.js";import"./ButtonBase-t_hNJL6A.js";import"./TransitionGroupContext-D0Irt0u2.js";import"./index-I4yg9hSe.js";import"./FormControl-DTFU8ly8.js";import"./utils-DoM3o7-Q.js";import"./Select-C_RdHVh4.js";import"./formControlState-Dq1zat_P.js";import"./List-CyNYxBQg.js";import"./useSlotProps-BP5MHBFQ.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DNpquR1_.js";import"./index-CpFMawnv.js";import"./InputBase-B4vcM9ZV.js";import"./Stack-DFQFZ6Xi.js";import"./Typography-BzBpWJM4.js";const D={title:"ATOMS/FormInputs/Select",component:l,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>a.jsx("div",{style:{width:250},children:a.jsx(e,{})})]},t={args:{label:"Label",value:"",onChange:()=>{},options:["Synt to health","Content capsqd","Chip 3","Chip 4"],appearance:"standard",multiple:!1,size:"medium"},render:e=>{const[i,m]=s.useState(e.multiple||e.appearance==="table"?[]:"");return a.jsx(l,{...e,multiple:e.multiple||e.appearance==="table",value:i,onChange:n=>m(n.target.value)})}};var r,o,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

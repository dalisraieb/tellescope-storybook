import{j as t,r as u}from"./iframe-B635ogeX.js";import{S as i}from"./select-7MktsETV.js";import{M as a}from"./MenuItem-BNPISDk-.js";import"./index-7pjO2N5Y.js";import"./styled-D_JRszTj.js";import"./createSvgIcon-BdBhm6j3.js";import"./useTimeout-BqFI7Rpv.js";import"./ButtonBase-BhyEMCvw.js";import"./TransitionGroupContext-B-FBxGae.js";import"./useIsFocusVisible-BUp4RUIQ.js";import"./FormControl-DjzAj70N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Q5Xwe7A9.js";import"./isMuiElement-1gBlwsmZ.js";import"./Select-CVOI_XZF.js";import"./formControlState-Dq1zat_P.js";import"./List-Bh5MpXX8.js";import"./useSlotProps-B0axK7bx.js";import"./resolveComponentProps-C1ixA3CJ.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CrNB3hHz.js";import"./index-DG8fRf4y.js";import"./index-DWA8G4Dm.js";import"./Grow-JzYB1-ex.js";import"./getReactElementRef-BxFG5RlB.js";import"./ownerWindow-DIR61fab.js";import"./Modal-NfOny6sb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Cf6RMG8v.js";import"./useId-DOVApbVR.js";import"./InputBase-BO8XgWSZ.js";import"./Stack-D0FngCED.js";import"./dividerClasses-B-TpH0Bm.js";const N={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(i,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(a,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(a,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(a,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(a,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,l,o;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "",
    onChange: () => {},
    appearance: 'standard',
    multiple: false,
    size: "medium",
    children: []
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple || args.appearance === "table" ? [] : '');
    return <Select {...args} multiple={args.multiple || args.appearance === "table"} value={value} onChange={e => setValue(e.target.value)}>\r
                <MenuItem value="Synt to health" key="Synt to health">Synt to health</MenuItem>\r
                <MenuItem value="Content capsqd" key="Content capsqd">Content capsqd</MenuItem>\r
                <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>\r
                <MenuItem value="Chip 4" key="Chip 4">Chip 4</MenuItem>\r
            </Select>;
  }
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const P=["SingleSelect"];export{r as SingleSelect,P as __namedExportsOrder,N as default};

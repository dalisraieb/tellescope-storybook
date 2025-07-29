import{j as t,r as u}from"./iframe-C_mvATxf.js";import{S as l}from"./select-BXD8uIfw.js";import{M as r}from"./MenuItem-DJYbJNDN.js";import"./FormControl-Cxd88cuH.js";import"./styled-D3e7hSdf.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B5wV8xKu.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./isMuiElement-BRSh3FLT.js";import"./Select-B9Z0luHz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CcMJvyZX.js";import"./useSlotProps-CJdg0P1D.js";import"./resolveComponentProps-BNjn3TbO.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cd2_LOh1.js";import"./Paper-y4L9TjWB.js";import"./Grow-CA2fjeE3.js";import"./useTheme-BlUG05El.js";import"./utils-B6yf_fIX.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./index-BmfL9UO7.js";import"./index-BBQBgD7t.js";import"./getReactElementRef-BioJHGsC.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DXzE80HE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B9PzbMud.js";import"./useControlled-Cyk4WA3W.js";import"./useId-CjGAtGk9.js";import"./createSvgIcon-Iv4cjDr_.js";import"./InputBase-BojRxlmd.js";import"./Stack-DsmHLUro.js";import"./Chip-DpmiigPe.js";import"./ButtonBase-CGQkK_HI.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./listItemTextClasses-DV326QbH.js";import"./dividerClasses-BBsfSVcS.js";const X={title:"ATOMS/FormInputs/Select",component:l,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},a={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(l,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(r,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(r,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(r,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(r,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,o,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Y=["SingleSelect"];export{a as SingleSelect,Y as __namedExportsOrder,X as default};

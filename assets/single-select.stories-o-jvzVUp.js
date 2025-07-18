import{j as t,r as u}from"./iframe-B6hPRLvE.js";import{S as i}from"./select-BGqoILpo.js";import{M as a}from"./MenuItem-Q1gmN7vQ.js";import"./FormControl-1sqMHBwx.js";import"./styled-Rc4ikHLI.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BtT_9nwa.js";import"./isMuiElement-B_mmvVf4.js";import"./Select-CFxqwodU.js";import"./formControlState-Dq1zat_P.js";import"./List-ChGWsoRI.js";import"./useSlotProps-BuwsEpD8.js";import"./resolveComponentProps-CnB1lgEl.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B4QmwxA7.js";import"./Paper-CFhDzt5U.js";import"./TransitionGroupContext-Dj08XMFC.js";import"./index-gQzC7Ad2.js";import"./index-BieRKVp6.js";import"./Grow-BpKX7UDY.js";import"./useTheme-5qJboM6u.js";import"./getReactElementRef-BZdDpp7s.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DNwEdGq-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-CfTk7emU.js";import"./useId-BR_BWiP_.js";import"./createSvgIcon-Cd6zCl4P.js";import"./InputBase-Ps_PzXNt.js";import"./Stack-pVxnj9_9.js";import"./Chip-CtWo5-rH.js";import"./ButtonBase-1LTz6Pn6.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./dividerClasses-zMu8IGbe.js";const P={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(i,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(a,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(a,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(a,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(a,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,o,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const Q=["SingleSelect"];export{r as SingleSelect,Q as __namedExportsOrder,P as default};

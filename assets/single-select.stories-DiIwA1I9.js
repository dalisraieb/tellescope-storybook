import{j as t,r as u}from"./iframe-Bv6dwyi6.js";import{S as i}from"./select-Dl4qvc58.js";import{M as a}from"./MenuItem-9FrNM_dI.js";import"./FormControl-DtIj0zbc.js";import"./styled-1wupYI6N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DVbzj1df.js";import"./isMuiElement-Cd5s-INa.js";import"./Select-DgVd0jcT.js";import"./formControlState-Dq1zat_P.js";import"./List-CZrgSkRM.js";import"./useSlotProps-B-IxTsoN.js";import"./resolveComponentProps-C72E2f_V.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B_DK4l75.js";import"./Paper-CpZCUC_L.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./index-BaZz6jG6.js";import"./index-Bn2X2bTa.js";import"./Grow-ozNc40uE.js";import"./useTheme-Chg0PB4m.js";import"./getReactElementRef-Dq-Larem.js";import"./ownerWindow-DIR61fab.js";import"./Modal-84UeeU9m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Bh7QF-ia.js";import"./useId-5SlOnbtB.js";import"./createSvgIcon-BJSFEBnp.js";import"./InputBase-BELbqXUV.js";import"./Stack-BfX3vPkc.js";import"./Chip-Cjw0dkUG.js";import"./ButtonBase-_JbzIVNU.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./dividerClasses-CeLMdPFz.js";const P={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(i,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(a,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(a,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(a,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(a,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,o,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{j as t,r as u}from"./iframe-CQw1bh_3.js";import{S as i}from"./select-BZ7Hd2EU.js";import{M as a}from"./MenuItem-DUOQhvfP.js";import"./FormControl-BvfGlV5i.js";import"./styled-0urVwbhR.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D7aixEVT.js";import"./isMuiElement-c5mTnCJM.js";import"./Select-BZlqZEy6.js";import"./formControlState-Dq1zat_P.js";import"./List-BRMYBShm.js";import"./useSlotProps-CC53gLXq.js";import"./resolveComponentProps-BAz9eB7D.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CUAEDxbs.js";import"./Paper-DoXoRAIi.js";import"./TransitionGroupContext-ucckMPrU.js";import"./index-BU1ft_YN.js";import"./index-D7rk0scn.js";import"./Grow-DZ6JOMQo.js";import"./useTheme-CONGIyUh.js";import"./getReactElementRef-BFTcAmDX.js";import"./ownerWindow-DIR61fab.js";import"./Modal-B5tUVl_X.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DKLpkiav.js";import"./useId-CBKkpWLc.js";import"./createSvgIcon-CPZXexn_.js";import"./InputBase-G_Xq6-VF.js";import"./Stack-DJd1T9w_.js";import"./Chip-Bhz2nqgH.js";import"./ButtonBase-CawyO1_w.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./dividerClasses-Cr81tDjM.js";const P={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(i,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(a,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(a,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(a,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(a,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,o,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

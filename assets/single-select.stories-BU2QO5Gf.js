import{j as t,r as u}from"./iframe-D6WPvDsw.js";import{S as i}from"./select-DT0abQCc.js";import{M as a}from"./MenuItem-CMGtjuSE.js";import"./FormControl-Bvexnv9I.js";import"./styled-AX3WQiqK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-j6TWbiTy.js";import"./isMuiElement-tmp0hHY9.js";import"./Select-Bk3sn5xi.js";import"./formControlState-Dq1zat_P.js";import"./List-BxyuLOoB.js";import"./useSlotProps-re4MZg2K.js";import"./resolveComponentProps-DdCxtoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-kuuMuFVN.js";import"./Paper-IUoxnzvH.js";import"./TransitionGroupContext-DkLkXY74.js";import"./index-w00OeCIG.js";import"./index-CjlK8uMj.js";import"./Grow-CxdA_Xp2.js";import"./useTheme-C5UVmkdi.js";import"./getReactElementRef-DbwD0SEZ.js";import"./ownerWindow-DIR61fab.js";import"./Modal-CG13Q5kf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-7GtWE5q9.js";import"./useId-DV-IoEpY.js";import"./createSvgIcon-V8HVGjoo.js";import"./InputBase-CRatIxq-.js";import"./Stack-QjlE7ymT.js";import"./Chip-D-e2GIwl.js";import"./ButtonBase-BZJrsSUT.js";import"./useIsFocusVisible-BVCTFO4q.js";import"./dividerClasses-BdycyqIl.js";const P={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(i,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(a,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(a,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(a,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(a,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,o,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

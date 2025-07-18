import{r as u,j as t}from"./iframe-D6WPvDsw.js";import{T as i}from"./tiny-select-D2asRN4s.js";import{M as r}from"./MenuItem-CMGtjuSE.js";import"./select-DT0abQCc.js";import"./FormControl-Bvexnv9I.js";import"./styled-AX3WQiqK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-j6TWbiTy.js";import"./isMuiElement-tmp0hHY9.js";import"./Select-Bk3sn5xi.js";import"./formControlState-Dq1zat_P.js";import"./List-BxyuLOoB.js";import"./useSlotProps-re4MZg2K.js";import"./resolveComponentProps-DdCxtoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-kuuMuFVN.js";import"./Paper-IUoxnzvH.js";import"./TransitionGroupContext-DkLkXY74.js";import"./index-w00OeCIG.js";import"./index-CjlK8uMj.js";import"./Grow-CxdA_Xp2.js";import"./useTheme-C5UVmkdi.js";import"./getReactElementRef-DbwD0SEZ.js";import"./ownerWindow-DIR61fab.js";import"./Modal-CG13Q5kf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-7GtWE5q9.js";import"./useId-DV-IoEpY.js";import"./createSvgIcon-V8HVGjoo.js";import"./InputBase-CRatIxq-.js";import"./Stack-QjlE7ymT.js";import"./Chip-D-e2GIwl.js";import"./ButtonBase-BZJrsSUT.js";import"./useIsFocusVisible-BVCTFO4q.js";import"./createSvgIcon-l15DWx3n.js";import"./dividerClasses-BdycyqIl.js";const U={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[a,p]=u.useState(""),l=s=>{p(s)};return t.jsxs(i,{value:a,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <TinySelect value={value} onChange={handleChange}>\r
                <MenuItem value="Value">value</MenuItem>\r
                <MenuItem value="Option">option</MenuItem>\r
            </TinySelect>;
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const W=["Default"];export{e as Default,W as __namedExportsOrder,U as default};

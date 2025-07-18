import{r as u,j as t}from"./iframe-CQw1bh_3.js";import{T as i}from"./tiny-select-jhcVnHcm.js";import{M as r}from"./MenuItem-DUOQhvfP.js";import"./select-BZ7Hd2EU.js";import"./FormControl-BvfGlV5i.js";import"./styled-0urVwbhR.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D7aixEVT.js";import"./isMuiElement-c5mTnCJM.js";import"./Select-BZlqZEy6.js";import"./formControlState-Dq1zat_P.js";import"./List-BRMYBShm.js";import"./useSlotProps-CC53gLXq.js";import"./resolveComponentProps-BAz9eB7D.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CUAEDxbs.js";import"./Paper-DoXoRAIi.js";import"./TransitionGroupContext-ucckMPrU.js";import"./index-BU1ft_YN.js";import"./index-D7rk0scn.js";import"./Grow-DZ6JOMQo.js";import"./useTheme-CONGIyUh.js";import"./getReactElementRef-BFTcAmDX.js";import"./ownerWindow-DIR61fab.js";import"./Modal-B5tUVl_X.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DKLpkiav.js";import"./useId-CBKkpWLc.js";import"./createSvgIcon-CPZXexn_.js";import"./InputBase-G_Xq6-VF.js";import"./Stack-DJd1T9w_.js";import"./Chip-Bhz2nqgH.js";import"./ButtonBase-CawyO1_w.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./createSvgIcon-D0mVd8bh.js";import"./dividerClasses-Cr81tDjM.js";const U={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[a,p]=u.useState(""),l=s=>{p(s)};return t.jsxs(i,{value:a,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{r as u,j as t}from"./iframe-BIRbnDU3.js";import{T as i}from"./tiny-select-Cda-kuWo.js";import{M as r}from"./MenuItem-BDVB43Er.js";import"./select-BLez6DQG.js";import"./FormControl-BJPLsCx9.js";import"./styled-BQzQxZQg.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BH6yyn_Y.js";import"./isMuiElement-Dhbmfky1.js";import"./Select-DHZTV8S8.js";import"./formControlState-Dq1zat_P.js";import"./List-D-5zpCoO.js";import"./useSlotProps-ODbKV4Mg.js";import"./resolveComponentProps-BCcY2dCN.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cm4fgxMA.js";import"./Paper-rDORrwMN.js";import"./TransitionGroupContext-BaULKsg4.js";import"./index-DhMiAOT7.js";import"./index-CSL-6jbx.js";import"./Grow-BrjM973w.js";import"./useTheme-CdO6g5nq.js";import"./getReactElementRef-76HF8eBV.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Bs-D53QN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-BFmAtxsm.js";import"./useId-C-divviP.js";import"./createSvgIcon-Dj-KrJjm.js";import"./InputBase-fzMASiwB.js";import"./Stack-p8V-8Yyf.js";import"./Chip-BXVl9Dqj.js";import"./ButtonBase-CwbxjUMM.js";import"./useIsFocusVisible-BmSydHd7.js";import"./createSvgIcon-Co9ghxje.js";import"./dividerClasses-BqfVdti0.js";const U={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[a,p]=u.useState(""),l=s=>{p(s)};return t.jsxs(i,{value:a,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

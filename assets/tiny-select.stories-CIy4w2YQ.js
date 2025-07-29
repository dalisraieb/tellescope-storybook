import{r as u,j as t}from"./iframe-C_mvATxf.js";import{T as i}from"./tiny-select-UwO_yehd.js";import{M as r}from"./MenuItem-DJYbJNDN.js";import"./select-BXD8uIfw.js";import"./FormControl-Cxd88cuH.js";import"./styled-D3e7hSdf.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B5wV8xKu.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./isMuiElement-BRSh3FLT.js";import"./Select-B9Z0luHz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CcMJvyZX.js";import"./useSlotProps-CJdg0P1D.js";import"./resolveComponentProps-BNjn3TbO.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cd2_LOh1.js";import"./Paper-y4L9TjWB.js";import"./Grow-CA2fjeE3.js";import"./useTheme-BlUG05El.js";import"./utils-B6yf_fIX.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./index-BmfL9UO7.js";import"./index-BBQBgD7t.js";import"./getReactElementRef-BioJHGsC.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DXzE80HE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B9PzbMud.js";import"./useControlled-Cyk4WA3W.js";import"./useId-CjGAtGk9.js";import"./createSvgIcon-Iv4cjDr_.js";import"./InputBase-BojRxlmd.js";import"./Stack-DsmHLUro.js";import"./Chip-DpmiigPe.js";import"./ButtonBase-CGQkK_HI.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./createSvgIcon-BJfsRVye.js";import"./listItemTextClasses-DV326QbH.js";import"./dividerClasses-BBsfSVcS.js";const Z={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[p,a]=u.useState(""),l=s=>{a(s)};return t.jsxs(i,{value:p,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};

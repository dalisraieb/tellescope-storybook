import{r as u,j as t}from"./iframe-NAPhPX1u.js";import{T as i}from"./tiny-select-BnvDj24i.js";import{M as r}from"./MenuItem-BJ221rqE.js";import"./select-DfzJsUG5.js";import"./FormControl-BmN-RmyH.js";import"./styled-DO-91wXW.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-bl8w57rs.js";import"./isMuiElement-GCpe9NcE.js";import"./Select-Cf1fb45c.js";import"./formControlState-Dq1zat_P.js";import"./List-DOWCaeCd.js";import"./useSlotProps-CXKkWSe0.js";import"./resolveComponentProps-BUujQf9b.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CG_60NpA.js";import"./Paper-B2ewq_WJ.js";import"./TransitionGroupContext-C90OWFUl.js";import"./index-Dcz_RGR5.js";import"./index-BgztMLLJ.js";import"./Grow-D3PY-YRs.js";import"./useTheme-CuDTbWok.js";import"./getReactElementRef-DvA4X375.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Dy9YtBPR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Coj7fk6E.js";import"./useId-0sbXxxQP.js";import"./createSvgIcon-CBEcOZsh.js";import"./InputBase-DjT-u5ZZ.js";import"./Stack-CQ7BulZm.js";import"./Chip-Db7o_Qk_.js";import"./ButtonBase-Dyh98Sbg.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./createSvgIcon-D0Rt455a.js";import"./dividerClasses-anPVgJL4.js";const U={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[a,p]=u.useState(""),l=s=>{p(s)};return t.jsxs(i,{value:a,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

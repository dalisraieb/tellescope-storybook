import{r as u,j as t}from"./iframe-B6hPRLvE.js";import{T as i}from"./tiny-select-JwLPrqb6.js";import{M as r}from"./MenuItem-Q1gmN7vQ.js";import"./select-BGqoILpo.js";import"./FormControl-1sqMHBwx.js";import"./styled-Rc4ikHLI.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BtT_9nwa.js";import"./isMuiElement-B_mmvVf4.js";import"./Select-CFxqwodU.js";import"./formControlState-Dq1zat_P.js";import"./List-ChGWsoRI.js";import"./useSlotProps-BuwsEpD8.js";import"./resolveComponentProps-CnB1lgEl.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B4QmwxA7.js";import"./Paper-CFhDzt5U.js";import"./TransitionGroupContext-Dj08XMFC.js";import"./index-gQzC7Ad2.js";import"./index-BieRKVp6.js";import"./Grow-BpKX7UDY.js";import"./useTheme-5qJboM6u.js";import"./getReactElementRef-BZdDpp7s.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DNwEdGq-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-CfTk7emU.js";import"./useId-BR_BWiP_.js";import"./createSvgIcon-Cd6zCl4P.js";import"./InputBase-Ps_PzXNt.js";import"./Stack-pVxnj9_9.js";import"./Chip-CtWo5-rH.js";import"./ButtonBase-1LTz6Pn6.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./createSvgIcon-TL-ltilD.js";import"./dividerClasses-zMu8IGbe.js";const U={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[a,p]=u.useState(""),l=s=>{p(s)};return t.jsxs(i,{value:a,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{r as u,j as t}from"./iframe-Bv6dwyi6.js";import{T as i}from"./tiny-select-Bz48zSUh.js";import{M as r}from"./MenuItem-9FrNM_dI.js";import"./select-Dl4qvc58.js";import"./FormControl-DtIj0zbc.js";import"./styled-1wupYI6N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DVbzj1df.js";import"./isMuiElement-Cd5s-INa.js";import"./Select-DgVd0jcT.js";import"./formControlState-Dq1zat_P.js";import"./List-CZrgSkRM.js";import"./useSlotProps-B-IxTsoN.js";import"./resolveComponentProps-C72E2f_V.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B_DK4l75.js";import"./Paper-CpZCUC_L.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./index-BaZz6jG6.js";import"./index-Bn2X2bTa.js";import"./Grow-ozNc40uE.js";import"./useTheme-Chg0PB4m.js";import"./getReactElementRef-Dq-Larem.js";import"./ownerWindow-DIR61fab.js";import"./Modal-84UeeU9m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Bh7QF-ia.js";import"./useId-5SlOnbtB.js";import"./createSvgIcon-BJSFEBnp.js";import"./InputBase-BELbqXUV.js";import"./Stack-BfX3vPkc.js";import"./Chip-Cjw0dkUG.js";import"./ButtonBase-_JbzIVNU.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./createSvgIcon-CKdMn4wO.js";import"./dividerClasses-CeLMdPFz.js";const U={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[a,p]=u.useState(""),l=s=>{p(s)};return t.jsxs(i,{value:a,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

import{r as u,j as t}from"./iframe-CM3h47Pf.js";import{T as i}from"./tiny-select-BM0M8zNu.js";import{M as r}from"./MenuItem-BiGuVhex.js";import"./select-DzcQDPtY.js";import"./FormControl-DNSu1jEy.js";import"./styled-DspZaNH0.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BCi-nmTG.js";import"./generateUtilityClasses-BkYpawWM.js";import"./isMuiElement-DnV2LNbe.js";import"./Select-BL39qYkB.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-K5XpL-Os.js";import"./useSlotProps-933pvwWH.js";import"./resolveComponentProps--03T1_O3.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-RdUEBmnf.js";import"./Paper-Baj6TKFv.js";import"./Grow-9zfcWsEt.js";import"./useTheme-Dl-SHv7N.js";import"./utils-BCjB-yJc.js";import"./TransitionGroupContext-DluSgF3d.js";import"./index-BGWVLkds.js";import"./index-Bu34i8Fg.js";import"./getReactElementRef-TcbM6XSU.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DJKmJHn4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BdCPbg8P.js";import"./useControlled-nTii91Zb.js";import"./useId-BRHASpNm.js";import"./createSvgIcon-DWMlvmED.js";import"./InputBase-6wqBhyI4.js";import"./Stack-Dif7eGMF.js";import"./Chip-DK8sHTPe.js";import"./ButtonBase-DVaQIUUB.js";import"./useIsFocusVisible-DCSkjDCX.js";import"./createSvgIcon-g6ki7VAI.js";import"./listItemTextClasses-8cn6mZSo.js";import"./dividerClasses-DV1b1S48.js";const Z={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[p,a]=u.useState(""),l=s=>{a(s)};return t.jsxs(i,{value:p,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

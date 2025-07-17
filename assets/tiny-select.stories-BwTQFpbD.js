import{r as u,j as t}from"./iframe-DccEvDzC.js";import{T as i}from"./tiny-select-CDZJiGEl.js";import{M as r}from"./MenuItem-GQcqo-ak.js";import"./select-avApGTAo.js";import"./FormControl-Cmj0kEMY.js";import"./styled-Cfu_AvQ7.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-v0wCab-t.js";import"./isMuiElement-joNQ-oVj.js";import"./Select-EjcNZfqg.js";import"./formControlState-Dq1zat_P.js";import"./List-B6j4edsR.js";import"./useSlotProps-4Lu9Nojn.js";import"./resolveComponentProps-D7A_zo3W.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-xbtmyUFd.js";import"./Paper-CzlpFu-5.js";import"./TransitionGroupContext-DT2Zqife.js";import"./index-EoyXtuYd.js";import"./index-k-8e6fLA.js";import"./Grow-BqP7IeYW.js";import"./useTheme-C5CGHMgP.js";import"./getReactElementRef-wxbblr7K.js";import"./ownerWindow-DIR61fab.js";import"./Modal-jeFbmNzL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DIa1ppNA.js";import"./useId-DAXsOMtQ.js";import"./createSvgIcon-CYhW7ZJ1.js";import"./InputBase-C9l8h_le.js";import"./Stack-DQLN1x6Z.js";import"./Chip-BY0P0vAX.js";import"./ButtonBase-BQpfw9M-.js";import"./useIsFocusVisible-nsLV3YSx.js";import"./createSvgIcon-B3ikaxcm.js";import"./dividerClasses-Dr5gbvf2.js";const U={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[a,p]=u.useState(""),l=s=>{p(s)};return t.jsxs(i,{value:a,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

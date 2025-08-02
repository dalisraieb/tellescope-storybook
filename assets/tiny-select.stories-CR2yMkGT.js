import{r as u,j as t}from"./iframe-DfEpVtbN.js";import{T as i}from"./tiny-select-PE0gehAO.js";import{M as r}from"./MenuItem-ZzlJJzG5.js";import"./select-CKVMQOl7.js";import"./FormControl-D-y60pjM.js";import"./styled-YlXm3ULK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-UibTObRu.js";import"./generateUtilityClasses-CpTVYkhT.js";import"./isMuiElement-DpfzEnnW.js";import"./Select-DEww3rqc.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cqsq5E1F.js";import"./useSlotProps-CjKilamI.js";import"./resolveComponentProps-B98698j1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-SVx8Dkdh.js";import"./Paper-CbQWkKmk.js";import"./Grow-BqRLbL9l.js";import"./useTheme-D5mibIYT.js";import"./utils-CVehUsqU.js";import"./TransitionGroupContext-DVR4kuzA.js";import"./index-CAcAdmOn.js";import"./index-cZe5j3_t.js";import"./getReactElementRef-CcVow88t.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BEYhj1Ai.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BXwSC4-5.js";import"./useControlled-BnfF5NMN.js";import"./useId-Bxenf6dE.js";import"./createSvgIcon-DAAJIYo0.js";import"./InputBase-Dst-n6oM.js";import"./Stack-CKDPRdOE.js";import"./Chip-CXH0rH-o.js";import"./ButtonBase-ByKSMk68.js";import"./useIsFocusVisible-DyBpABSY.js";import"./createSvgIcon-UJ_-k-8q.js";import"./listItemTextClasses-CyM1XClL.js";import"./dividerClasses-BbO3K7uf.js";const Z={title:"ATOMS/TableControlElements/TinySelect",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}}},e={render:()=>{const[p,a]=u.useState(""),l=s=>{a(s)};return t.jsxs(i,{value:p,onChange:l,children:[t.jsx(r,{value:"Value",children:"value"}),t.jsx(r,{value:"Option",children:"option"})]})}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

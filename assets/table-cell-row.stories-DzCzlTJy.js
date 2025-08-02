import{r as y,j as e}from"./iframe-DfEpVtbN.js";import{T as s}from"./table-cell-row-DzU7mZ09.js";import{T as l}from"./table-cell-0o-0Vwfa.js";import{S as d}from"./select-CKVMQOl7.js";import{C as t}from"./checkbox-4r4V99iX.js";import{T as a}from"./Typography-8iwqUs_2.js";import{M as r}from"./MenuItem-ZzlJJzG5.js";import"./styled-YlXm3ULK.js";import"./TableCell-BO7Hvii1.js";import"./generateUtilityClasses-CpTVYkhT.js";import"./Stack-CKDPRdOE.js";import"./FormControl-D-y60pjM.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-UibTObRu.js";import"./isMuiElement-DpfzEnnW.js";import"./Select-DEww3rqc.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cqsq5E1F.js";import"./useSlotProps-CjKilamI.js";import"./resolveComponentProps-B98698j1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-SVx8Dkdh.js";import"./Paper-CbQWkKmk.js";import"./Grow-BqRLbL9l.js";import"./useTheme-D5mibIYT.js";import"./utils-CVehUsqU.js";import"./TransitionGroupContext-DVR4kuzA.js";import"./index-CAcAdmOn.js";import"./index-cZe5j3_t.js";import"./getReactElementRef-CcVow88t.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BEYhj1Ai.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BXwSC4-5.js";import"./useControlled-BnfF5NMN.js";import"./useId-Bxenf6dE.js";import"./createSvgIcon-DAAJIYo0.js";import"./InputBase-Dst-n6oM.js";import"./Chip-CXH0rH-o.js";import"./ButtonBase-ByKSMk68.js";import"./useIsFocusVisible-DyBpABSY.js";import"./SwitchBase-B0V4sAvE.js";import"./listItemTextClasses-CyM1XClL.js";import"./dividerClasses-BbO3K7uf.js";const pe={title:"MOLECULES/Table Elements/Table Cell Row",component:s,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{column:{options:["text","checkbox","select","number"],control:{type:"select"}},checkbox:{control:{type:"boolean"}}}},i={args:{checkbox:!1,column:"text"},render:h=>{const{column:n,checkbox:o}=h,[u,x]=y.useState([]);return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[n==="text"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",children:"Chompy"})]}),n==="select"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsxs(d,{multiple:!0,appearance:"table",value:u,onChange:C=>x(C.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(r,{value:"Organization",children:"Organization"},"Organization"),e.jsx(r,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(r,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(r,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(r,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(r,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})]}),n==="checkbox"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(t,{size:"small"})]}),n==="number"&&e.jsxs(l,{StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"})]})]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checkbox: false,
    column: "text"
  },
  render: args => {
    const {
      column,
      checkbox
    } = args as StoryProps;
    const [value, setValue] = useState<string | string[]>([]);
    return <>\r
                <TableCellRow>\r
                    {column === "text" && <TableCell>\r
                                {checkbox ? <CheckBox color="primary" /> : null}\r
                                <Typography variant="body2">Chompy</Typography>\r
                            </TableCell>}\r
                    {column === "select" && <TableCell>\r
                                {checkbox ? <CheckBox color="primary" /> : null}\r
                                <SelectBase multiple={true} appearance="table" value={value} onChange={e => setValue(e.target.value)} size="medium" sx={{
            width: "300px"
          }}>\r
                                    <MenuItem value="Organization" key="Organization">Organization</MenuItem>\r
                                    <MenuItem value="Synt to Healthie" key="Synt to Healthie">Synt to Healthie</MenuItem>\r
                                    <MenuItem value="Content campaign" key="Content campaign">Content campaign</MenuItem>\r
                                    <MenuItem value="Chip 1" key="Chip 1">Chip 1</MenuItem>\r
                                    <MenuItem value="Chip 2" key="Chip 2">Chip 2</MenuItem>\r
                                    <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>\r
                                </SelectBase>\r
                            </TableCell>}\r
                    {column === "checkbox" && <TableCell>\r
                                {checkbox ? <CheckBox color="primary" /> : null}\r
                                <CheckBox size="small" />\r
                            </TableCell>}\r
\r
                    {column === "number" && <TableCell StackProps={{
          sx: {
            justifyContent: "flex-end"
          }
        }} sx={{
          minWidth: "300px"
        }}>\r
                                {checkbox ? <CheckBox color="primary" /> : null}\r
                                <Typography variant="body2" sx={{
            textAlign: "right",
            width: "100%"
          }}>091387408374140</Typography>\r
                            </TableCell>}\r
                </TableCellRow>\r
            </>;
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const me=["Text"];export{i as Text,me as __namedExportsOrder,pe as default};

import{r as y,j as e}from"./iframe-CpdnR0i2.js";import{T as s}from"./table-cell-row-YtGG-iI1.js";import{T as l}from"./table-cell-5sh2CBbl.js";import{S as d}from"./select-y-F9G4j3.js";import{C as t}from"./checkbox-Bw3-lbAv.js";import{T as a}from"./Typography-DUyUrCFr.js";import{M as r}from"./MenuItem-CY6_J7Gc.js";import"./styled-DujYcmrZ.js";import"./TableCell-DhamWoF8.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./Stack-Bd6jq2pn.js";import"./FormControl-8E0NZ6Fd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./isMuiElement-5-QtcHpW.js";import"./InputLabel-CkLjBIwK.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BvCR-wSo.js";import"./Select-DbmNEHLt.js";import"./useSlotProps-DcuCg741.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k7JvqZ8G.js";import"./Paper-CL1wgyoG.js";import"./Grow-CSCmvqx_.js";import"./useTheme-dL_JtiI5.js";import"./utils-Be2lOGi8.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./useTimeout-BgZTaRCc.js";import"./getReactElementRef-dg5jktwz.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-DFczexqp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B7_zldcA.js";import"./useControlled-d9yX6gVw.js";import"./createSvgIcon-C4MRlNQH.js";import"./InputBase-DoBoD0Ub.js";import"./Chip-Cxo-wOmO.js";import"./ButtonBase-DfyOkDKJ.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./Checkbox-Drl9XYMK.js";import"./SwitchBase-COxA6MWJ.js";import"./listItemTextClasses-Cs2njzJp.js";import"./dividerClasses-DwUrptCk.js";const se={title:"MOLECULES/Table Elements/Table Cell Row",component:s,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{column:{options:["text","checkbox","select","number"],control:{type:"select"}},checkbox:{control:{type:"boolean"}}}},i={args:{checkbox:!1,column:"text"},render:h=>{const{column:n,checkbox:o}=h,[u,x]=y.useState([]);return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[n==="text"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",children:"Chompy"})]}),n==="select"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsxs(d,{multiple:!0,appearance:"table",value:u,onChange:C=>x(C.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(r,{value:"Organization",children:"Organization"},"Organization"),e.jsx(r,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(r,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(r,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(r,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(r,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})]}),n==="checkbox"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(t,{size:"small"})]}),n==="number"&&e.jsxs(l,{StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"})]})]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const he=["Text"];export{i as Text,he as __namedExportsOrder,se as default};

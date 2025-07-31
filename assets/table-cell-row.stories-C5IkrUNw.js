import{r as y,j as e}from"./iframe-CM3h47Pf.js";import{T as s}from"./table-cell-row-CwcrTb_t.js";import{T as l}from"./table-cell-Dwt-87al.js";import{S as d}from"./select-DzcQDPtY.js";import{C as t}from"./checkbox-DLBR6ojq.js";import{T as a}from"./Typography-CxaJ7SmR.js";import{M as r}from"./MenuItem-BiGuVhex.js";import"./styled-DspZaNH0.js";import"./TableCell-CSp__xTK.js";import"./generateUtilityClasses-BkYpawWM.js";import"./Stack-Dif7eGMF.js";import"./FormControl-DNSu1jEy.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BCi-nmTG.js";import"./isMuiElement-DnV2LNbe.js";import"./Select-BL39qYkB.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-K5XpL-Os.js";import"./useSlotProps-933pvwWH.js";import"./resolveComponentProps--03T1_O3.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-RdUEBmnf.js";import"./Paper-Baj6TKFv.js";import"./Grow-9zfcWsEt.js";import"./useTheme-Dl-SHv7N.js";import"./utils-BCjB-yJc.js";import"./TransitionGroupContext-DluSgF3d.js";import"./index-BGWVLkds.js";import"./index-Bu34i8Fg.js";import"./getReactElementRef-TcbM6XSU.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DJKmJHn4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BdCPbg8P.js";import"./useControlled-nTii91Zb.js";import"./useId-BRHASpNm.js";import"./createSvgIcon-DWMlvmED.js";import"./InputBase-6wqBhyI4.js";import"./Chip-DK8sHTPe.js";import"./ButtonBase-DVaQIUUB.js";import"./useIsFocusVisible-DCSkjDCX.js";import"./SwitchBase-DlkZSi--.js";import"./listItemTextClasses-8cn6mZSo.js";import"./dividerClasses-DV1b1S48.js";const pe={title:"MOLECULES/Table Elements/Table Cell Row",component:s,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{column:{options:["text","checkbox","select","number"],control:{type:"select"}},checkbox:{control:{type:"boolean"}}}},i={args:{checkbox:!1,column:"text"},render:h=>{const{column:n,checkbox:o}=h,[u,x]=y.useState([]);return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[n==="text"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",children:"Chompy"})]}),n==="select"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsxs(d,{multiple:!0,appearance:"table",value:u,onChange:C=>x(C.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(r,{value:"Organization",children:"Organization"},"Organization"),e.jsx(r,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(r,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(r,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(r,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(r,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})]}),n==="checkbox"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(t,{size:"small"})]}),n==="number"&&e.jsxs(l,{StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"})]})]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

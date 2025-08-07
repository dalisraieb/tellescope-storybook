import{r as y,j as e}from"./iframe-C7YkNvSQ.js";import{T as s}from"./table-cell-row-Clm13res.js";import{T as l}from"./table-cell-Y0Fbznlw.js";import{S as d}from"./select-2vUKkyk2.js";import{C as t}from"./checkbox-BuWGlwvw.js";import{T as a}from"./Typography-CIh4BeGT.js";import{M as r}from"./MenuItem-BzwDd5tb.js";import"./styled-9bVfkw6q.js";import"./TableCell-DYsjNFJ-.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./Stack-BPribNI5.js";import"./FormControl-DmS9Qp8c.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./isMuiElement-4jqovnI5.js";import"./InputLabel-BSDcvnkt.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bxcy2z6E.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C4CjHbyO.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useTimeout-BzjaGR02.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-4AeG_tC3.js";import"./useControlled-CDtRUcdo.js";import"./createSvgIcon-CAcL5gG4.js";import"./InputBase-wxT8anmG.js";import"./Chip-BVuNbYRK.js";import"./ButtonBase-DinbBO9G.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./Checkbox-CtOlTCly.js";import"./SwitchBase-poeQoh38.js";import"./listItemTextClasses-BVuUz09p.js";import"./dividerClasses-6wmrs3Ei.js";const se={title:"MOLECULES/Table Elements/Table Cell Row",component:s,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{column:{options:["text","checkbox","select","number"],control:{type:"select"}},checkbox:{control:{type:"boolean"}}}},i={args:{checkbox:!1,column:"text"},render:h=>{const{column:n,checkbox:o}=h,[u,x]=y.useState([]);return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[n==="text"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",children:"Chompy"})]}),n==="select"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsxs(d,{multiple:!0,appearance:"table",value:u,onChange:C=>x(C.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(r,{value:"Organization",children:"Organization"},"Organization"),e.jsx(r,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(r,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(r,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(r,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(r,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})]}),n==="checkbox"&&e.jsxs(l,{children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(t,{size:"small"})]}),n==="number"&&e.jsxs(l,{StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:[o?e.jsx(t,{color:"primary"}):null,e.jsx(a,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"})]})]})})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

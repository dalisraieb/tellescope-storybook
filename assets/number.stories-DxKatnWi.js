import{j as e}from"./iframe-D6WPvDsw.js";import{T as a}from"./table-cell-DREws4R4.js";import{T as l}from"./Typography-DRjZWMth.js";import"./Star-B02olAGE.js";import"./createSvgIcon-l15DWx3n.js";import"./createSvgIcon-V8HVGjoo.js";import"./styled-AX3WQiqK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-tmp0hHY9.js";import"./useTimeout-kuuMuFVN.js";import"./useId-DV-IoEpY.js";import"./useControlled-7GtWE5q9.js";import"./useIsFocusVisible-BVCTFO4q.js";import"./TableCell-BiibN0VZ.js";import"./Stack-QjlE7ymT.js";const k={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return e.jsx(a,{...p,StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:i?e.jsx(l,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"}):void 0})}};var t,o,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: 'none',
    hasValue: true
  },
  render: args => {
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    return <TableCell {...rest} StackProps={{
      sx: {
        justifyContent: "flex-end"
      }
    }} sx={{
      minWidth: "300px"
    }}>\r
                {hasValue ? <Typography variant="body2" sx={{
        textAlign: "right",
        width: "100%"
      }}>091387408374140</Typography> : undefined}\r
            </TableCell>;
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Number"];export{r as Number,v as __namedExportsOrder,k as default};

import{j as e}from"./iframe-Bv6dwyi6.js";import{T as a}from"./table-cell-CPkfm7Uu.js";import{T as l}from"./Typography-YZ__YNto.js";import"./Star-DdzjKHTg.js";import"./createSvgIcon-CKdMn4wO.js";import"./createSvgIcon-BJSFEBnp.js";import"./styled-1wupYI6N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Cd5s-INa.js";import"./useTimeout-B_DK4l75.js";import"./useId-5SlOnbtB.js";import"./useControlled-Bh7QF-ia.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./TableCell-DAidFtZ1.js";import"./Stack-BfX3vPkc.js";const k={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return e.jsx(a,{...p,StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:i?e.jsx(l,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"}):void 0})}};var t,o,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

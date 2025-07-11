import{j as e}from"./iframe-B635ogeX.js";import{T as a}from"./default-BRUugG8v.js";import{T as p}from"./Typography-CshVcec5.js";import"./Star-C5G71cOL.js";import"./createSvgIcon-RgKzumi2.js";import"./createSvgIcon-BdBhm6j3.js";import"./styled-D_JRszTj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-1gBlwsmZ.js";import"./useTimeout-BqFI7Rpv.js";import"./useId-DOVApbVR.js";import"./useControlled-Cf6RMG8v.js";import"./useIsFocusVisible-BUp4RUIQ.js";import"./TableCell-CP-9_kZY.js";import"./Stack-D0FngCED.js";const A={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...l}=n;return e.jsx(a,{...l,StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:i?e.jsx(p,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"}):void 0})}};var t,o,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const E=["Number"];export{r as Number,E as __namedExportsOrder,A as default};

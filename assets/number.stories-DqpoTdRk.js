import{j as e}from"./iframe-DcQCorcF.js";import{T as a}from"./default-BqUHMdeT.js";import{T as p}from"./Typography-CrfA0lvj.js";import"./Star-D3uSIz_K.js";import"./createSvgIcon-DsipAhp4.js";import"./createSvgIcon-B8TgDHxc.js";import"./styled-BwxNTMYu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-JwLuVtQu.js";import"./isMuiElement-Bs55rATV.js";import"./useControlled-Cq1AqgbH.js";import"./useIsFocusVisible-AGo_CW5c.js";import"./TableCell-BuE_TEbS.js";import"./Stack-DhfY1MpU.js";const S={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...l}=n;return e.jsx(a,{...l,StackProps:{sx:{justifyContent:"flex-end"}},sx:{minWidth:"300px"},children:i?e.jsx(p,{variant:"body2",sx:{textAlign:"right",width:"100%"},children:"091387408374140"}):void 0})}};var t,o,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Number"];export{r as Number,v as __namedExportsOrder,S as default};

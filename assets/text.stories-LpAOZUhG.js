import{j as e}from"./iframe-DcQCorcF.js";import{T as s}from"./default-BqUHMdeT.js";import{T as i}from"./Typography-CrfA0lvj.js";import"./Star-D3uSIz_K.js";import"./createSvgIcon-DsipAhp4.js";import"./createSvgIcon-B8TgDHxc.js";import"./styled-BwxNTMYu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-JwLuVtQu.js";import"./isMuiElement-Bs55rATV.js";import"./useControlled-Cq1AqgbH.js";import"./useIsFocusVisible-AGo_CW5c.js";import"./TableCell-BuE_TEbS.js";import"./Stack-DhfY1MpU.js";const v={title:"ATOMS/TableControlElements/TableCell",component:s,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:l,...p}=n;return e.jsx(s,{...p,children:l?e.jsx(i,{variant:"body2",children:"Chompy"}):void 0})}};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    icon: 'none',
    hasValue: true
  },
  render: args => {
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    return <TableCell {...rest}>\r
                {hasValue ? <Typography variant="body2">Chompy</Typography> : undefined}\r
            </TableCell>;
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const E=["Text"];export{r as Text,E as __namedExportsOrder,v as default};

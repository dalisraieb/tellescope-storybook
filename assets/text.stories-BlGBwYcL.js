import{j as e}from"./iframe-Bv6dwyi6.js";import{T as s}from"./table-cell-CPkfm7Uu.js";import{T as i}from"./Typography-YZ__YNto.js";import"./Star-DdzjKHTg.js";import"./createSvgIcon-CKdMn4wO.js";import"./createSvgIcon-BJSFEBnp.js";import"./styled-1wupYI6N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Cd5s-INa.js";import"./useTimeout-B_DK4l75.js";import"./useId-5SlOnbtB.js";import"./useControlled-Bh7QF-ia.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./TableCell-DAidFtZ1.js";import"./Stack-BfX3vPkc.js";const E={title:"ATOMS/TableControlElements/TableCell",component:s,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:p=>{const{hasValue:n,...l}=p;return e.jsx(s,{...l,children:n?e.jsx(i,{variant:"body2",children:"Chompy"}):void 0})}};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const O=["Text"];export{r as Text,O as __namedExportsOrder,E as default};

import{j as r}from"./iframe-Bv6dwyi6.js";import{T as a}from"./table-cell-CPkfm7Uu.js";import{C as l}from"./checkbox-C0SGPuDn.js";import"./Star-DdzjKHTg.js";import"./createSvgIcon-CKdMn4wO.js";import"./createSvgIcon-BJSFEBnp.js";import"./styled-1wupYI6N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Cd5s-INa.js";import"./useTimeout-B_DK4l75.js";import"./useId-5SlOnbtB.js";import"./useControlled-Bh7QF-ia.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./TableCell-DAidFtZ1.js";import"./Stack-BfX3vPkc.js";import"./SwitchBase-C8OYgTTV.js";import"./useFormControl-DVbzj1df.js";import"./ButtonBase-_JbzIVNU.js";import"./TransitionGroupContext-CCP3XvNy.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: 'none',
    hasValue: true
  },
  render: args => {
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    return <TableCell {...rest} sx={{
      padding: 0,
      width: '150px'
    }} StackProps={{
      sx: {
        justifyContent: 'center'
      }
    }}>\r
                {hasValue ? <CheckBox size="small" /> : undefined}\r
            </TableCell>;
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const O=["Checkbox"];export{e as Checkbox,O as __namedExportsOrder,B as default};

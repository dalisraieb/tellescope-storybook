import{j as r}from"./iframe-CPQTd9d5.js";import{T as s}from"./default-ohgqolac.js";import{C as l}from"./checkbox-LnJ5j6Ld.js";import"./Star-B3RyJAW5.js";import"./createSvgIcon-dv_5fqTH.js";import"./createSvgIcon-BoBBx9HX.js";import"./styled-C2Cu9qfT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-Cbn0X-eY.js";import"./isMuiElement-DLkjVCSc.js";import"./useControlled-C2KopCyd.js";import"./useIsFocusVisible-CLv33wm5.js";import"./TableCell-nJvgOQUG.js";import"./Stack-DFQFZ6Xi.js";import"./SwitchBase-BRzyNRqZ.js";import"./useFormControl-PyG4Ikag.js";import"./ButtonBase-t_hNJL6A.js";import"./TransitionGroupContext-D0Irt0u2.js";const w={title:"ATOMS/TableControlElements/TableCell",component:s,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:a=>{const{hasValue:p,...i}=a;return r.jsx(s,{...i,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:p?r.jsx(l,{}):void 0})}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
                {hasValue ? <CheckBox /> : undefined}\r
            </TableCell>;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const B=["Checkbox"];export{e as Checkbox,B as __namedExportsOrder,w as default};

import{j as r}from"./iframe-B635ogeX.js";import{T as s}from"./default-BRUugG8v.js";import{C as l}from"./checkbox-wIxGoIgW.js";import"./Star-C5G71cOL.js";import"./createSvgIcon-RgKzumi2.js";import"./createSvgIcon-BdBhm6j3.js";import"./styled-D_JRszTj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-1gBlwsmZ.js";import"./useTimeout-BqFI7Rpv.js";import"./useId-DOVApbVR.js";import"./useControlled-Cf6RMG8v.js";import"./useIsFocusVisible-BUp4RUIQ.js";import"./TableCell-CP-9_kZY.js";import"./Stack-D0FngCED.js";import"./SwitchBase-D0ioEufM.js";import"./useFormControl-Q5Xwe7A9.js";import"./ButtonBase-BhyEMCvw.js";import"./TransitionGroupContext-B-FBxGae.js";const O={title:"ATOMS/TableControlElements/TableCell",component:s,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:a=>{const{hasValue:p,...i}=a;return r.jsx(s,{...i,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:p?r.jsx(l,{}):void 0})}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const _=["Checkbox"];export{e as Checkbox,_ as __namedExportsOrder,O as default};

import{j as r}from"./iframe-DcQCorcF.js";import{T as s}from"./default-BqUHMdeT.js";import{C as l}from"./checkbox-C15Zh00d.js";import"./Star-D3uSIz_K.js";import"./createSvgIcon-DsipAhp4.js";import"./createSvgIcon-B8TgDHxc.js";import"./styled-BwxNTMYu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-JwLuVtQu.js";import"./isMuiElement-Bs55rATV.js";import"./useControlled-Cq1AqgbH.js";import"./useIsFocusVisible-AGo_CW5c.js";import"./TableCell-BuE_TEbS.js";import"./Stack-DhfY1MpU.js";import"./SwitchBase-CF7vN2eH.js";import"./useFormControl-DUshowLh.js";import"./ButtonBase-BmcDWBos.js";import"./TransitionGroupContext-DB_VBoO3.js";const w={title:"ATOMS/TableControlElements/TableCell",component:s,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:a=>{const{hasValue:p,...i}=a;return r.jsx(s,{...i,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:p?r.jsx(l,{}):void 0})}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

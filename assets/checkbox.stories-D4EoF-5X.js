import{j as r}from"./iframe-B6hPRLvE.js";import{T as a}from"./table-cell-_WOslSYS.js";import{C as l}from"./checkbox-Bzlf76FQ.js";import"./Star-DrL5j4OO.js";import"./createSvgIcon-TL-ltilD.js";import"./createSvgIcon-Cd6zCl4P.js";import"./styled-Rc4ikHLI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-B_mmvVf4.js";import"./useTimeout-B4QmwxA7.js";import"./useId-BR_BWiP_.js";import"./useControlled-CfTk7emU.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./TableCell-DPCCfXTh.js";import"./Stack-pVxnj9_9.js";import"./SwitchBase-Tf5JjDZE.js";import"./useFormControl-BtT_9nwa.js";import"./ButtonBase-1LTz6Pn6.js";import"./TransitionGroupContext-Dj08XMFC.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

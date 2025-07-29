import{j as r}from"./iframe-C_mvATxf.js";import{T as a}from"./table-cell-d2jWSAfu.js";import{C as l}from"./checkbox-sb5U5XXM.js";import"./Star-DcrWNXMk.js";import"./createSvgIcon-BJfsRVye.js";import"./createSvgIcon-Iv4cjDr_.js";import"./styled-D3e7hSdf.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-BRSh3FLT.js";import"./useTimeout-Cd2_LOh1.js";import"./useId-CjGAtGk9.js";import"./useControlled-Cyk4WA3W.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./TableCell-In65ryYW.js";import"./Stack-DsmHLUro.js";import"./SwitchBase-BHpo2KH8.js";import"./useFormControl-B5wV8xKu.js";import"./ButtonBase-CGQkK_HI.js";import"./TransitionGroupContext-DgN5kJD-.js";const O={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:i=>{const{hasValue:n,...p}=i;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:n?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const _=["Checkbox"];export{e as Checkbox,_ as __namedExportsOrder,O as default};

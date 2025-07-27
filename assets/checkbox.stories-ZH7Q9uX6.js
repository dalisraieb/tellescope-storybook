import{j as r}from"./iframe-NAPhPX1u.js";import{T as a}from"./table-cell-DSlnjG9E.js";import{C as l}from"./checkbox-NyBU_v8M.js";import"./Star-R7YRv9D_.js";import"./createSvgIcon-D0Rt455a.js";import"./createSvgIcon-CBEcOZsh.js";import"./styled-DO-91wXW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-GCpe9NcE.js";import"./useTimeout-CG_60NpA.js";import"./useId-0sbXxxQP.js";import"./useControlled-Coj7fk6E.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./TableCell-NDiT1rE_.js";import"./Stack-CQ7BulZm.js";import"./SwitchBase-Cqrd6I-_.js";import"./useFormControl-bl8w57rs.js";import"./ButtonBase-Dyh98Sbg.js";import"./TransitionGroupContext-C90OWFUl.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

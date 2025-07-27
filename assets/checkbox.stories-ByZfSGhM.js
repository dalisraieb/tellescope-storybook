import{j as r}from"./iframe-BOEgomFY.js";import{T as a}from"./table-cell-DeM4BisI.js";import{C as l}from"./checkbox-CGHeDPPs.js";import"./Star-C2J-2dzE.js";import"./createSvgIcon-LsRAuJTe.js";import"./createSvgIcon-y6GUQK9N.js";import"./styled-BMCVJyWx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Bf6F_2WO.js";import"./useTimeout-CDGGrJEl.js";import"./useId-DfYzE2b8.js";import"./useControlled-C-4bjezr.js";import"./useIsFocusVisible-BN_wfPI7.js";import"./TableCell-CtG0H9wN.js";import"./Stack-Cc11et4g.js";import"./SwitchBase-BKjeN5Kq.js";import"./useFormControl-B6gfc5sY.js";import"./ButtonBase-Bf9JyTdh.js";import"./TransitionGroupContext-CDEAkzgg.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

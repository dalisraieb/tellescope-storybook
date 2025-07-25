import{j as r}from"./iframe-BIRbnDU3.js";import{T as a}from"./table-cell-CrOr8ur6.js";import{C as l}from"./checkbox-_M4IeGsB.js";import"./Star-kGenPfQu.js";import"./createSvgIcon-Co9ghxje.js";import"./createSvgIcon-Dj-KrJjm.js";import"./styled-BQzQxZQg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Dhbmfky1.js";import"./useTimeout-Cm4fgxMA.js";import"./useId-C-divviP.js";import"./useControlled-BFmAtxsm.js";import"./useIsFocusVisible-BmSydHd7.js";import"./TableCell-COutCF5k.js";import"./Stack-p8V-8Yyf.js";import"./SwitchBase-PQc1oV__.js";import"./useFormControl-BH6yyn_Y.js";import"./ButtonBase-CwbxjUMM.js";import"./TransitionGroupContext-BaULKsg4.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

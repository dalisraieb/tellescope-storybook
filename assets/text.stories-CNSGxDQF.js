import{j as r}from"./iframe-C7YkNvSQ.js";import{T as n}from"./table-cell-Y0Fbznlw.js";import{S as m}from"./Star-U0nG9LrA.js";import{T as l}from"./Typography-CIh4BeGT.js";import"./TableCell-DYsjNFJ-.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./Stack-BPribNI5.js";import"./createSvgIcon-CmLukg3o.js";import"./createSvgIcon-CAcL5gG4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-4jqovnI5.js";import"./useForkRef-C4CjHbyO.js";import"./useControlled-CDtRUcdo.js";import"./useTimeout-BzjaGR02.js";import"./useIsFocusVisible-BgEYUAtg.js";const O={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...p}=s;return r.jsx(n,{...p,icon:r.jsx(m,{}),children:i?r.jsx(l,{variant:"body2",children:"Chompy"}):void 0})}};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconPosition: 'none',
    hasValue: true
  },
  render: args => {
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    return <TableCell {...rest} icon={<StarIcon />}>\r
                {hasValue ? <Typography variant="body2">Chompy</Typography> : undefined}\r
            </TableCell>;
  }
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const _=["Text"];export{o as Text,_ as __namedExportsOrder,O as default};

import{j as r}from"./iframe-CpdnR0i2.js";import{T as n}from"./table-cell-5sh2CBbl.js";import{S as m}from"./Star-BqTWP5ux.js";import{T as l}from"./Typography-DUyUrCFr.js";import"./TableCell-DhamWoF8.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./Stack-Bd6jq2pn.js";import"./createSvgIcon-C3FiYK1r.js";import"./createSvgIcon-C4MRlNQH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-5-QtcHpW.js";import"./useForkRef-k7JvqZ8G.js";import"./useControlled-d9yX6gVw.js";import"./useTimeout-BgZTaRCc.js";import"./useIsFocusVisible-BvCl6UH0.js";const O={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...p}=s;return r.jsx(n,{...p,icon:r.jsx(m,{}),children:i?r.jsx(l,{variant:"body2",children:"Chompy"}):void 0})}};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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

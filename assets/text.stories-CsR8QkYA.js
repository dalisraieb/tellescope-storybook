import{j as r}from"./iframe-DfEpVtbN.js";import{T as n}from"./table-cell-0o-0Vwfa.js";import{S as m}from"./Star-FTPm_6nU.js";import{T as l}from"./Typography-8iwqUs_2.js";import"./TableCell-BO7Hvii1.js";import"./styled-YlXm3ULK.js";import"./generateUtilityClasses-CpTVYkhT.js";import"./Stack-CKDPRdOE.js";import"./createSvgIcon-UJ_-k-8q.js";import"./createSvgIcon-DAAJIYo0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-DpfzEnnW.js";import"./useTimeout-SVx8Dkdh.js";import"./useId-Bxenf6dE.js";import"./useControlled-BnfF5NMN.js";import"./useIsFocusVisible-DyBpABSY.js";const E={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...p}=s;return r.jsx(n,{...p,icon:r.jsx(m,{}),children:i?r.jsx(l,{variant:"body2",children:"Chompy"}):void 0})}};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const O=["Text"];export{o as Text,O as __namedExportsOrder,E as default};

import{j as r}from"./iframe-CM3h47Pf.js";import{T as n}from"./table-cell-Dwt-87al.js";import{S as m}from"./Star-DHQd8crR.js";import{T as l}from"./Typography-CxaJ7SmR.js";import"./TableCell-CSp__xTK.js";import"./styled-DspZaNH0.js";import"./generateUtilityClasses-BkYpawWM.js";import"./Stack-Dif7eGMF.js";import"./createSvgIcon-g6ki7VAI.js";import"./createSvgIcon-DWMlvmED.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-DnV2LNbe.js";import"./useTimeout-RdUEBmnf.js";import"./useId-BRHASpNm.js";import"./useControlled-nTii91Zb.js";import"./useIsFocusVisible-DCSkjDCX.js";const E={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...p}=s;return r.jsx(n,{...p,icon:r.jsx(m,{}),children:i?r.jsx(l,{variant:"body2",children:"Chompy"}):void 0})}};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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

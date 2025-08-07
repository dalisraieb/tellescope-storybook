import{j as r}from"./iframe-C7YkNvSQ.js";import{T as n}from"./table-cell-Y0Fbznlw.js";import{C as m}from"./checkbox-BuWGlwvw.js";import{S as c}from"./Star-U0nG9LrA.js";import"./TableCell-DYsjNFJ-.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./Stack-BPribNI5.js";import"./Checkbox-CtOlTCly.js";import"./SwitchBase-poeQoh38.js";import"./useFormControl-DA987-lg.js";import"./useControlled-CDtRUcdo.js";import"./ButtonBase-DinbBO9G.js";import"./useTimeout-BzjaGR02.js";import"./TransitionGroupContext-CotujMke.js";import"./useForkRef-C4CjHbyO.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./createSvgIcon-CAcL5gG4.js";import"./createSvgIcon-CmLukg3o.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-4jqovnI5.js";const v={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:a=>{const{hasValue:i,...p}=a;return r.jsx(n,{...p,icon:r.jsx(c,{}),sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(m,{size:"small"}):void 0})}};var e,t,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconPosition: 'none',
    hasValue: true
  },
  render: args => {
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    return <TableCell {...rest} icon={<StarIcon />} sx={{
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
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const A=["Checkbox"];export{o as Checkbox,A as __namedExportsOrder,v as default};

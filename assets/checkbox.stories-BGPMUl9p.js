import{j as r}from"./iframe-CM3h47Pf.js";import{T as n}from"./table-cell-Dwt-87al.js";import{C as c}from"./checkbox-DLBR6ojq.js";import{S as m}from"./Star-DHQd8crR.js";import"./TableCell-CSp__xTK.js";import"./styled-DspZaNH0.js";import"./generateUtilityClasses-BkYpawWM.js";import"./Stack-Dif7eGMF.js";import"./SwitchBase-DlkZSi--.js";import"./useFormControl-BCi-nmTG.js";import"./useControlled-nTii91Zb.js";import"./ButtonBase-DVaQIUUB.js";import"./useTimeout-RdUEBmnf.js";import"./TransitionGroupContext-DluSgF3d.js";import"./useIsFocusVisible-DCSkjDCX.js";import"./createSvgIcon-DWMlvmED.js";import"./createSvgIcon-g6ki7VAI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-DnV2LNbe.js";import"./useId-BRHASpNm.js";const O={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:a=>{const{hasValue:i,...p}=a;return r.jsx(n,{...p,icon:r.jsx(m,{}),sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(c,{size:"small"}):void 0})}};var e,t,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const _=["Checkbox"];export{o as Checkbox,_ as __namedExportsOrder,O as default};

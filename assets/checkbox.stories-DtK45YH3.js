import{j as r}from"./iframe-CpdnR0i2.js";import{T as n}from"./table-cell-5sh2CBbl.js";import{C as m}from"./checkbox-Bw3-lbAv.js";import{S as c}from"./Star-BqTWP5ux.js";import"./TableCell-DhamWoF8.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./Stack-Bd6jq2pn.js";import"./Checkbox-Drl9XYMK.js";import"./SwitchBase-COxA6MWJ.js";import"./useFormControl-Bdg8Z9sC.js";import"./useControlled-d9yX6gVw.js";import"./ButtonBase-DfyOkDKJ.js";import"./useTimeout-BgZTaRCc.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./useForkRef-k7JvqZ8G.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./createSvgIcon-C4MRlNQH.js";import"./createSvgIcon-C3FiYK1r.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-5-QtcHpW.js";const v={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:a=>{const{hasValue:i,...p}=a;return r.jsx(n,{...p,icon:r.jsx(c,{}),sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(m,{size:"small"}):void 0})}};var e,t,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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

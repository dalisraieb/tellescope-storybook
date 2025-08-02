import{j as r}from"./iframe-DfEpVtbN.js";import{T as n}from"./table-cell-0o-0Vwfa.js";import{C as c}from"./checkbox-4r4V99iX.js";import{S as m}from"./Star-FTPm_6nU.js";import"./TableCell-BO7Hvii1.js";import"./styled-YlXm3ULK.js";import"./generateUtilityClasses-CpTVYkhT.js";import"./Stack-CKDPRdOE.js";import"./SwitchBase-B0V4sAvE.js";import"./useFormControl-UibTObRu.js";import"./useControlled-BnfF5NMN.js";import"./ButtonBase-ByKSMk68.js";import"./useTimeout-SVx8Dkdh.js";import"./TransitionGroupContext-DVR4kuzA.js";import"./useIsFocusVisible-DyBpABSY.js";import"./createSvgIcon-DAAJIYo0.js";import"./createSvgIcon-UJ_-k-8q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-DpfzEnnW.js";import"./useId-Bxenf6dE.js";const O={title:"ATOMS/TableControlElements/TableCell",component:n,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},o={args:{iconPosition:"none",hasValue:!0},render:a=>{const{hasValue:i,...p}=a;return r.jsx(n,{...p,icon:r.jsx(m,{}),sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(c,{size:"small"}):void 0})}};var e,t,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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

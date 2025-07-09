import{j as r}from"./iframe-MlT4uNqk.js";import{T as s}from"./default-Dvu6AeB0.js";import{C as l}from"./checkbox-Bn4HuM78.js";import"./Star-CkduyxDF.js";import"./createSvgIcon-SHSNCR4y.js";import"./createSvgIcon-j_d6Q5Pl.js";import"./styled-uAf5yWmA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CyR9ZBBC.js";import"./isMuiElement-CEp5Ye4Q.js";import"./useControlled-3UtnvOT2.js";import"./useIsFocusVisible-rP1Nd5fW.js";import"./TableCell-BhhcnbvJ.js";import"./Stack-CDqxnO2v.js";import"./SwitchBase-Df2V0RFK.js";import"./useFormControl-D8WB3yfs.js";import"./ButtonBase-CL_5rPQg.js";import"./TransitionGroupContext-UBgLjG1_.js";const w={title:"ATOMS/TableControlElements/TableCell",component:s,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:a=>{const{hasValue:p,...i}=a;return r.jsx(s,{...i,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:p?r.jsx(l,{}):void 0})}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
                {hasValue ? <CheckBox /> : undefined}\r
            </TableCell>;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const B=["Checkbox"];export{e as Checkbox,B as __namedExportsOrder,w as default};

import{j as r}from"./iframe-DccEvDzC.js";import{T as a}from"./table-cell-Dzn4G16b.js";import{C as l}from"./checkbox-BwVtHigN.js";import"./Star-CgbTiwaa.js";import"./createSvgIcon-B3ikaxcm.js";import"./createSvgIcon-CYhW7ZJ1.js";import"./styled-Cfu_AvQ7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-joNQ-oVj.js";import"./useTimeout-xbtmyUFd.js";import"./useId-DAXsOMtQ.js";import"./useControlled-DIa1ppNA.js";import"./useIsFocusVisible-nsLV3YSx.js";import"./TableCell-DGJJq51U.js";import"./Stack-DQLN1x6Z.js";import"./SwitchBase-DIXMj2ts.js";import"./useFormControl-v0wCab-t.js";import"./ButtonBase-BQpfw9M-.js";import"./TransitionGroupContext-DT2Zqife.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

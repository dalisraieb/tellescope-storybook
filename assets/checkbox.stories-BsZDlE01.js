import{j as r}from"./iframe-CQw1bh_3.js";import{T as a}from"./table-cell-Bi36CrhM.js";import{C as l}from"./checkbox-Vr4xrhDt.js";import"./Star-BSJN2xAC.js";import"./createSvgIcon-D0mVd8bh.js";import"./createSvgIcon-CPZXexn_.js";import"./styled-0urVwbhR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-c5mTnCJM.js";import"./useTimeout-CUAEDxbs.js";import"./useId-CBKkpWLc.js";import"./useControlled-DKLpkiav.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./TableCell-DVv3ONEV.js";import"./Stack-DJd1T9w_.js";import"./SwitchBase-DogA0G-g.js";import"./useFormControl-D7aixEVT.js";import"./ButtonBase-CawyO1_w.js";import"./TransitionGroupContext-ucckMPrU.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

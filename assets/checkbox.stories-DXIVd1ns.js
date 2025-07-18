import{j as r}from"./iframe-D6WPvDsw.js";import{T as a}from"./table-cell-DREws4R4.js";import{C as l}from"./checkbox-DLrDHwI_.js";import"./Star-B02olAGE.js";import"./createSvgIcon-l15DWx3n.js";import"./createSvgIcon-V8HVGjoo.js";import"./styled-AX3WQiqK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-tmp0hHY9.js";import"./useTimeout-kuuMuFVN.js";import"./useId-DV-IoEpY.js";import"./useControlled-7GtWE5q9.js";import"./useIsFocusVisible-BVCTFO4q.js";import"./TableCell-BiibN0VZ.js";import"./Stack-QjlE7ymT.js";import"./SwitchBase-BcQeOoxM.js";import"./useFormControl-j6TWbiTy.js";import"./ButtonBase-BZJrsSUT.js";import"./TransitionGroupContext-DkLkXY74.js";const B={title:"ATOMS/TableControlElements/TableCell",component:a,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},e={args:{icon:"none",hasValue:!0},render:n=>{const{hasValue:i,...p}=n;return r.jsx(a,{...p,sx:{padding:0,width:"150px"},StackProps:{sx:{justifyContent:"center"}},children:i?r.jsx(l,{size:"small"}):void 0})}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

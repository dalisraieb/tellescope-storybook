import{j as e,r as u}from"./iframe-B635ogeX.js";import{S as a}from"./select-7MktsETV.js";import{M as r}from"./MenuItem-BNPISDk-.js";import"./index-7pjO2N5Y.js";import"./styled-D_JRszTj.js";import"./createSvgIcon-BdBhm6j3.js";import"./useTimeout-BqFI7Rpv.js";import"./ButtonBase-BhyEMCvw.js";import"./TransitionGroupContext-B-FBxGae.js";import"./useIsFocusVisible-BUp4RUIQ.js";import"./FormControl-DjzAj70N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Q5Xwe7A9.js";import"./isMuiElement-1gBlwsmZ.js";import"./Select-CVOI_XZF.js";import"./formControlState-Dq1zat_P.js";import"./List-Bh5MpXX8.js";import"./useSlotProps-B0axK7bx.js";import"./resolveComponentProps-C1ixA3CJ.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CrNB3hHz.js";import"./index-DG8fRf4y.js";import"./index-DWA8G4Dm.js";import"./Grow-JzYB1-ex.js";import"./getReactElementRef-BxFG5RlB.js";import"./ownerWindow-DIR61fab.js";import"./Modal-NfOny6sb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Cf6RMG8v.js";import"./useId-DOVApbVR.js";import"./InputBase-BO8XgWSZ.js";import"./Stack-D0FngCED.js";import"./dividerClasses-B-TpH0Bm.js";const N={title:"ATOMS/FormInputs/Select",component:a,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},o={args:{label:"Label",children:[],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:t=>{const[l,m]=u.useState(t.multiple?[]:"");return e.jsxs(a,{...t,value:l,onChange:s=>m(s.target.value),children:[e.jsx(r,{value:"Option 1",children:"Option 1"},"Option 1"),e.jsx(r,{value:"Option 2",children:"Option 2"},"Option 2"),e.jsx(r,{value:"Option 3",children:"Option 3"},"Option 3"),e.jsx(r,{value:"Option 4",children:"Option 4"},"Option 4")]})}};var i,p,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    children: [],
    appearance: "standard",
    multiple: true,
    value: '',
    onChange: () => {},
    size: 'medium'
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)}>\r
                <MenuItem value="Option 1" key="Option 1">Option 1</MenuItem>\r
                <MenuItem value="Option 2" key="Option 2">Option 2</MenuItem>\r
                <MenuItem value="Option 3" key="Option 3">Option 3</MenuItem>\r
                <MenuItem value="Option 4" key="Option 4">Option 4</MenuItem>\r
            </Select>;
  }
}`,...(n=(p=o.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const P=["MultipleSelect"];export{o as MultipleSelect,P as __namedExportsOrder,N as default};

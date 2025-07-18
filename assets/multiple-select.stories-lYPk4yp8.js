import{j as e,r as u}from"./iframe-D6WPvDsw.js";import{S as a}from"./select-DT0abQCc.js";import{M as r}from"./MenuItem-CMGtjuSE.js";import"./FormControl-Bvexnv9I.js";import"./styled-AX3WQiqK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-j6TWbiTy.js";import"./isMuiElement-tmp0hHY9.js";import"./Select-Bk3sn5xi.js";import"./formControlState-Dq1zat_P.js";import"./List-BxyuLOoB.js";import"./useSlotProps-re4MZg2K.js";import"./resolveComponentProps-DdCxtoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-kuuMuFVN.js";import"./Paper-IUoxnzvH.js";import"./TransitionGroupContext-DkLkXY74.js";import"./index-w00OeCIG.js";import"./index-CjlK8uMj.js";import"./Grow-CxdA_Xp2.js";import"./useTheme-C5UVmkdi.js";import"./getReactElementRef-DbwD0SEZ.js";import"./ownerWindow-DIR61fab.js";import"./Modal-CG13Q5kf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-7GtWE5q9.js";import"./useId-DV-IoEpY.js";import"./createSvgIcon-V8HVGjoo.js";import"./InputBase-CRatIxq-.js";import"./Stack-QjlE7ymT.js";import"./Chip-D-e2GIwl.js";import"./ButtonBase-BZJrsSUT.js";import"./useIsFocusVisible-BVCTFO4q.js";import"./dividerClasses-BdycyqIl.js";const P={title:"ATOMS/FormInputs/Select",component:a,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},o={args:{label:"Label",children:[],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:t=>{const[l,m]=u.useState(t.multiple?[]:"");return e.jsxs(a,{...t,value:l,onChange:s=>m(s.target.value),children:[e.jsx(r,{value:"Option 1",children:"Option 1"},"Option 1"),e.jsx(r,{value:"Option 2",children:"Option 2"},"Option 2"),e.jsx(r,{value:"Option 3",children:"Option 3"},"Option 3"),e.jsx(r,{value:"Option 4",children:"Option 4"},"Option 4")]})}};var i,p,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(p=o.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const Q=["MultipleSelect"];export{o as MultipleSelect,Q as __namedExportsOrder,P as default};

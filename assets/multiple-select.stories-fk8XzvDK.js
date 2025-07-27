import{j as e,r as u}from"./iframe-BOEgomFY.js";import{S as a}from"./select-CZlMwc6a.js";import{M as r}from"./MenuItem-DNZf9Anj.js";import"./FormControl-D37Fn8y0.js";import"./styled-BMCVJyWx.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B6gfc5sY.js";import"./isMuiElement-Bf6F_2WO.js";import"./Select-tTbiwVb4.js";import"./formControlState-Dq1zat_P.js";import"./List-gGLNKbcG.js";import"./useSlotProps-v6wrWMpK.js";import"./resolveComponentProps-DtOmBmP4.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CDGGrJEl.js";import"./Paper-AT6iWgtF.js";import"./TransitionGroupContext-CDEAkzgg.js";import"./index-DQXJKHYz.js";import"./index-BwK426Sg.js";import"./Grow-Dgl558nA.js";import"./useTheme-Blpu_Sfd.js";import"./getReactElementRef-BclllGOx.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BONlEAG5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-C-4bjezr.js";import"./useId-DfYzE2b8.js";import"./createSvgIcon-y6GUQK9N.js";import"./InputBase-DSuvVq8E.js";import"./Stack-Cc11et4g.js";import"./Chip-r-q0salv.js";import"./ButtonBase-Bf9JyTdh.js";import"./useIsFocusVisible-BN_wfPI7.js";import"./dividerClasses-qGTNULkz.js";const P={title:"ATOMS/FormInputs/Select",component:a,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},o={args:{label:"Label",children:[],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:t=>{const[l,m]=u.useState(t.multiple?[]:"");return e.jsxs(a,{...t,value:l,onChange:s=>m(s.target.value),children:[e.jsx(r,{value:"Option 1",children:"Option 1"},"Option 1"),e.jsx(r,{value:"Option 2",children:"Option 2"},"Option 2"),e.jsx(r,{value:"Option 3",children:"Option 3"},"Option 3"),e.jsx(r,{value:"Option 4",children:"Option 4"},"Option 4")]})}};var i,p,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

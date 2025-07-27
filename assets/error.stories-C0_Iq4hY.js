import{j as e,r as s}from"./iframe-BOEgomFY.js";import{S as u}from"./select-CZlMwc6a.js";import{M as r}from"./MenuItem-DNZf9Anj.js";import"./FormControl-D37Fn8y0.js";import"./styled-BMCVJyWx.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B6gfc5sY.js";import"./isMuiElement-Bf6F_2WO.js";import"./Select-tTbiwVb4.js";import"./formControlState-Dq1zat_P.js";import"./List-gGLNKbcG.js";import"./useSlotProps-v6wrWMpK.js";import"./resolveComponentProps-DtOmBmP4.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CDGGrJEl.js";import"./Paper-AT6iWgtF.js";import"./TransitionGroupContext-CDEAkzgg.js";import"./index-DQXJKHYz.js";import"./index-BwK426Sg.js";import"./Grow-Dgl558nA.js";import"./useTheme-Blpu_Sfd.js";import"./getReactElementRef-BclllGOx.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BONlEAG5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-C-4bjezr.js";import"./useId-DfYzE2b8.js";import"./createSvgIcon-y6GUQK9N.js";import"./InputBase-DSuvVq8E.js";import"./Stack-Cc11et4g.js";import"./Chip-r-q0salv.js";import"./ButtonBase-Bf9JyTdh.js";import"./useIsFocusVisible-BN_wfPI7.js";import"./dividerClasses-qGTNULkz.js";const P={title:"ATOMS/FormInputs/Select",component:u,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},m={args:{label:"Label",children:[],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:t=>{const[i,l]=s.useState(t.multiple?[]:"");return e.jsxs(u,{...t,value:i,onChange:p=>l(p.target.value),error:!0,children:[e.jsx(r,{value:"Menu Item 1",children:"Menu Item 1"},"Menu Item 1"),e.jsx(r,{value:"Menu Item 2",children:"Menu Item 2"},"Menu Item 2"),e.jsx(r,{value:"Menu Item 3",children:"Menu Item 3"},"Menu Item 3"),e.jsx(r,{value:"Menu Item 4",children:"Menu Item 4"},"Menu Item 4")]})}};var n,a,o;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    children: [],
    appearance: 'standard',
    multiple: false,
    value: '',
    onChange: () => {},
    size: 'medium'
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} error={true}>\r
                <MenuItem value="Menu Item 1" key="Menu Item 1">Menu Item 1</MenuItem>\r
                <MenuItem value="Menu Item 2" key="Menu Item 2">Menu Item 2</MenuItem>\r
                <MenuItem value="Menu Item 3" key="Menu Item 3">Menu Item 3</MenuItem>\r
                <MenuItem value="Menu Item 4" key="Menu Item 4">Menu Item 4</MenuItem>\r
            </Select>;
  }
}`,...(o=(a=m.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const Q=["Error"];export{m as Error,Q as __namedExportsOrder,P as default};

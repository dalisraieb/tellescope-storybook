import{j as e,r as s}from"./iframe-CQw1bh_3.js";import{S as u}from"./select-BZ7Hd2EU.js";import{M as r}from"./MenuItem-DUOQhvfP.js";import"./FormControl-BvfGlV5i.js";import"./styled-0urVwbhR.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D7aixEVT.js";import"./isMuiElement-c5mTnCJM.js";import"./Select-BZlqZEy6.js";import"./formControlState-Dq1zat_P.js";import"./List-BRMYBShm.js";import"./useSlotProps-CC53gLXq.js";import"./resolveComponentProps-BAz9eB7D.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CUAEDxbs.js";import"./Paper-DoXoRAIi.js";import"./TransitionGroupContext-ucckMPrU.js";import"./index-BU1ft_YN.js";import"./index-D7rk0scn.js";import"./Grow-DZ6JOMQo.js";import"./useTheme-CONGIyUh.js";import"./getReactElementRef-BFTcAmDX.js";import"./ownerWindow-DIR61fab.js";import"./Modal-B5tUVl_X.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DKLpkiav.js";import"./useId-CBKkpWLc.js";import"./createSvgIcon-CPZXexn_.js";import"./InputBase-G_Xq6-VF.js";import"./Stack-DJd1T9w_.js";import"./Chip-Bhz2nqgH.js";import"./ButtonBase-CawyO1_w.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./dividerClasses-Cr81tDjM.js";const P={title:"ATOMS/FormInputs/Select",component:u,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},m={args:{label:"Label",children:[],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:t=>{const[i,l]=s.useState(t.multiple?[]:"");return e.jsxs(u,{...t,value:i,onChange:p=>l(p.target.value),error:!0,children:[e.jsx(r,{value:"Menu Item 1",children:"Menu Item 1"},"Menu Item 1"),e.jsx(r,{value:"Menu Item 2",children:"Menu Item 2"},"Menu Item 2"),e.jsx(r,{value:"Menu Item 3",children:"Menu Item 3"},"Menu Item 3"),e.jsx(r,{value:"Menu Item 4",children:"Menu Item 4"},"Menu Item 4")]})}};var n,a,o;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

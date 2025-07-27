import{j as e,r as s}from"./iframe-NAPhPX1u.js";import{S as u}from"./select-DfzJsUG5.js";import{M as r}from"./MenuItem-BJ221rqE.js";import"./FormControl-BmN-RmyH.js";import"./styled-DO-91wXW.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-bl8w57rs.js";import"./isMuiElement-GCpe9NcE.js";import"./Select-Cf1fb45c.js";import"./formControlState-Dq1zat_P.js";import"./List-DOWCaeCd.js";import"./useSlotProps-CXKkWSe0.js";import"./resolveComponentProps-BUujQf9b.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CG_60NpA.js";import"./Paper-B2ewq_WJ.js";import"./TransitionGroupContext-C90OWFUl.js";import"./index-Dcz_RGR5.js";import"./index-BgztMLLJ.js";import"./Grow-D3PY-YRs.js";import"./useTheme-CuDTbWok.js";import"./getReactElementRef-DvA4X375.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Dy9YtBPR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Coj7fk6E.js";import"./useId-0sbXxxQP.js";import"./createSvgIcon-CBEcOZsh.js";import"./InputBase-DjT-u5ZZ.js";import"./Stack-CQ7BulZm.js";import"./Chip-Db7o_Qk_.js";import"./ButtonBase-Dyh98Sbg.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./dividerClasses-anPVgJL4.js";const P={title:"ATOMS/FormInputs/Select",component:u,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},m={args:{label:"Label",children:[],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:t=>{const[i,l]=s.useState(t.multiple?[]:"");return e.jsxs(u,{...t,value:i,onChange:p=>l(p.target.value),error:!0,children:[e.jsx(r,{value:"Menu Item 1",children:"Menu Item 1"},"Menu Item 1"),e.jsx(r,{value:"Menu Item 2",children:"Menu Item 2"},"Menu Item 2"),e.jsx(r,{value:"Menu Item 3",children:"Menu Item 3"},"Menu Item 3"),e.jsx(r,{value:"Menu Item 4",children:"Menu Item 4"},"Menu Item 4")]})}};var n,a,o;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

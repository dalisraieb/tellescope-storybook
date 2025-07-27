import{j as e,r as u}from"./iframe-NAPhPX1u.js";import{S as a}from"./select-DfzJsUG5.js";import{M as r}from"./MenuItem-BJ221rqE.js";import"./FormControl-BmN-RmyH.js";import"./styled-DO-91wXW.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-bl8w57rs.js";import"./isMuiElement-GCpe9NcE.js";import"./Select-Cf1fb45c.js";import"./formControlState-Dq1zat_P.js";import"./List-DOWCaeCd.js";import"./useSlotProps-CXKkWSe0.js";import"./resolveComponentProps-BUujQf9b.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CG_60NpA.js";import"./Paper-B2ewq_WJ.js";import"./TransitionGroupContext-C90OWFUl.js";import"./index-Dcz_RGR5.js";import"./index-BgztMLLJ.js";import"./Grow-D3PY-YRs.js";import"./useTheme-CuDTbWok.js";import"./getReactElementRef-DvA4X375.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Dy9YtBPR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Coj7fk6E.js";import"./useId-0sbXxxQP.js";import"./createSvgIcon-CBEcOZsh.js";import"./InputBase-DjT-u5ZZ.js";import"./Stack-CQ7BulZm.js";import"./Chip-Db7o_Qk_.js";import"./ButtonBase-Dyh98Sbg.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./dividerClasses-anPVgJL4.js";const P={title:"ATOMS/FormInputs/Select",component:a,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},o={args:{label:"Label",children:[],appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium"},render:t=>{const[l,m]=u.useState(t.multiple?[]:"");return e.jsxs(a,{...t,value:l,onChange:s=>m(s.target.value),children:[e.jsx(r,{value:"Option 1",children:"Option 1"},"Option 1"),e.jsx(r,{value:"Option 2",children:"Option 2"},"Option 2"),e.jsx(r,{value:"Option 3",children:"Option 3"},"Option 3"),e.jsx(r,{value:"Option 4",children:"Option 4"},"Option 4")]})}};var i,p,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

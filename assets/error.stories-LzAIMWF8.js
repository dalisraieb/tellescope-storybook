import{j as e,r as s}from"./iframe-B6hPRLvE.js";import{S as u}from"./select-BGqoILpo.js";import{M as r}from"./MenuItem-Q1gmN7vQ.js";import"./FormControl-1sqMHBwx.js";import"./styled-Rc4ikHLI.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BtT_9nwa.js";import"./isMuiElement-B_mmvVf4.js";import"./Select-CFxqwodU.js";import"./formControlState-Dq1zat_P.js";import"./List-ChGWsoRI.js";import"./useSlotProps-BuwsEpD8.js";import"./resolveComponentProps-CnB1lgEl.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B4QmwxA7.js";import"./Paper-CFhDzt5U.js";import"./TransitionGroupContext-Dj08XMFC.js";import"./index-gQzC7Ad2.js";import"./index-BieRKVp6.js";import"./Grow-BpKX7UDY.js";import"./useTheme-5qJboM6u.js";import"./getReactElementRef-BZdDpp7s.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DNwEdGq-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-CfTk7emU.js";import"./useId-BR_BWiP_.js";import"./createSvgIcon-Cd6zCl4P.js";import"./InputBase-Ps_PzXNt.js";import"./Stack-pVxnj9_9.js";import"./Chip-CtWo5-rH.js";import"./ButtonBase-1LTz6Pn6.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./dividerClasses-zMu8IGbe.js";const P={title:"ATOMS/FormInputs/Select",component:u,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{width:250},children:e.jsx(t,{})})]},m={args:{label:"Label",children:[],appearance:"standard",multiple:!1,value:"",onChange:()=>{},size:"medium"},render:t=>{const[i,l]=s.useState(t.multiple?[]:"");return e.jsxs(u,{...t,value:i,onChange:p=>l(p.target.value),error:!0,children:[e.jsx(r,{value:"Menu Item 1",children:"Menu Item 1"},"Menu Item 1"),e.jsx(r,{value:"Menu Item 2",children:"Menu Item 2"},"Menu Item 2"),e.jsx(r,{value:"Menu Item 3",children:"Menu Item 3"},"Menu Item 3"),e.jsx(r,{value:"Menu Item 4",children:"Menu Item 4"},"Menu Item 4")]})}};var n,a,o;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{j as e,r as d}from"./iframe-C_mvATxf.js";import{S as p}from"./select-BXD8uIfw.js";import{C as a}from"./checkbox-sb5U5XXM.js";import{M as t}from"./MenuItem-DJYbJNDN.js";import{L as i}from"./ListItemText-DtmrVKjz.js";import"./FormControl-Cxd88cuH.js";import"./styled-D3e7hSdf.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B5wV8xKu.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./isMuiElement-BRSh3FLT.js";import"./Select-B9Z0luHz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CcMJvyZX.js";import"./useSlotProps-CJdg0P1D.js";import"./resolveComponentProps-BNjn3TbO.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cd2_LOh1.js";import"./Paper-y4L9TjWB.js";import"./Grow-CA2fjeE3.js";import"./useTheme-BlUG05El.js";import"./utils-B6yf_fIX.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./index-BmfL9UO7.js";import"./index-BBQBgD7t.js";import"./getReactElementRef-BioJHGsC.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DXzE80HE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B9PzbMud.js";import"./useControlled-Cyk4WA3W.js";import"./useId-CjGAtGk9.js";import"./createSvgIcon-Iv4cjDr_.js";import"./InputBase-BojRxlmd.js";import"./Stack-DsmHLUro.js";import"./Chip-DpmiigPe.js";import"./ButtonBase-CGQkK_HI.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./SwitchBase-BHpo2KH8.js";import"./listItemTextClasses-DV326QbH.js";import"./dividerClasses-BBsfSVcS.js";import"./Typography-BNoquuOj.js";const ae={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[n=>e.jsx("div",{style:{width:250},children:e.jsx(n,{})})]},l={args:{label:"Label",appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox",children:[]},render:n=>{const[r,c]=d.useState(n.multiple?[]:"");return e.jsxs(p,{...n,value:r,onChange:u=>c(u.target.value),children:[e.jsxs(t,{value:"Oliver Hansen",children:[e.jsx(a,{checked:r.includes("Oliver Hansen")}),e.jsx(i,{primary:"Oliver Hansen"})]},"Oliver Hansen"),",",e.jsxs(t,{value:"Van Henry",children:[e.jsx(a,{checked:r.includes("Van Henry")}),e.jsx(i,{primary:"Van Henry"})]},"Van Henry"),",",e.jsxs(t,{value:"April Tucker",children:[e.jsx(a,{checked:r.includes("April Tucker")}),e.jsx(i,{primary:"April Tucker"})]},"April Tucker"),",",e.jsxs(t,{value:"Ralph Hubbard",children:[e.jsx(a,{checked:r.includes("Ralph Hubbard")}),e.jsx(i,{primary:"Ralph Hubbard"})]},"Ralph Hubbard"),",",e.jsxs(t,{value:"Omar Alexander",children:[e.jsx(a,{checked:r.includes("Omar Alexander")}),e.jsx(i,{primary:"Omar Alexander"})]},"Omar Alexander")]})}};var s,m,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    appearance: 'standard',
    multiple: true,
    value: '',
    onChange: () => {},
    size: 'medium',
    optionStyle: "checkbox",
    children: []
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple ? [] : '');
    return <Select {...args} value={value} onChange={e => setValue(e.target.value)}>\r
                <MenuItem value="Oliver Hansen" key="Oliver Hansen">\r
                    <CheckBox checked={(value as string[]).includes("Oliver Hansen")} />\r
                    <ListItemText primary="Oliver Hansen" />\r
                </MenuItem>,\r
                <MenuItem value="Van Henry" key="Van Henry">\r
                    <CheckBox checked={(value as string[]).includes("Van Henry")} />\r
                    <ListItemText primary="Van Henry" />\r
                </MenuItem>,\r
                <MenuItem value="April Tucker" key="April Tucker">\r
                    <CheckBox checked={(value as string[]).includes("April Tucker")} />\r
                    <ListItemText primary="April Tucker" />\r
                </MenuItem>,\r
                <MenuItem value="Ralph Hubbard" key="Ralph Hubbard">\r
                    <CheckBox checked={(value as string[]).includes("Ralph Hubbard")} />\r
                    <ListItemText primary="Ralph Hubbard" />\r
                </MenuItem>,\r
                <MenuItem value="Omar Alexander" key="Omar Alexander">\r
                    <CheckBox checked={(value as string[]).includes("Omar Alexander")} />\r
                    <ListItemText primary="Omar Alexander" />\r
                </MenuItem>\r
            </Select>;
  }
}`,...(o=(m=l.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const te=["CheckBoxes"];export{l as CheckBoxes,te as __namedExportsOrder,ae as default};

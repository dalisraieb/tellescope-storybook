import{j as e,r as d}from"./iframe-BOEgomFY.js";import{S as p}from"./select-CZlMwc6a.js";import{C as a}from"./checkbox-CGHeDPPs.js";import{M as t}from"./MenuItem-DNZf9Anj.js";import{L as i}from"./ListItemText-oxz9E3z3.js";import"./FormControl-D37Fn8y0.js";import"./styled-BMCVJyWx.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B6gfc5sY.js";import"./isMuiElement-Bf6F_2WO.js";import"./Select-tTbiwVb4.js";import"./formControlState-Dq1zat_P.js";import"./List-gGLNKbcG.js";import"./useSlotProps-v6wrWMpK.js";import"./resolveComponentProps-DtOmBmP4.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CDGGrJEl.js";import"./Paper-AT6iWgtF.js";import"./TransitionGroupContext-CDEAkzgg.js";import"./index-DQXJKHYz.js";import"./index-BwK426Sg.js";import"./Grow-Dgl558nA.js";import"./useTheme-Blpu_Sfd.js";import"./getReactElementRef-BclllGOx.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BONlEAG5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-C-4bjezr.js";import"./useId-DfYzE2b8.js";import"./createSvgIcon-y6GUQK9N.js";import"./InputBase-DSuvVq8E.js";import"./Stack-Cc11et4g.js";import"./Chip-r-q0salv.js";import"./ButtonBase-Bf9JyTdh.js";import"./useIsFocusVisible-BN_wfPI7.js";import"./SwitchBase-BKjeN5Kq.js";import"./dividerClasses-qGTNULkz.js";import"./Typography-CgdaMjzI.js";const Z={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[n=>e.jsx("div",{style:{width:250},children:e.jsx(n,{})})]},l={args:{label:"Label",appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox",children:[]},render:n=>{const[r,c]=d.useState(n.multiple?[]:"");return e.jsxs(p,{...n,value:r,onChange:u=>c(u.target.value),children:[e.jsxs(t,{value:"Oliver Hansen",children:[e.jsx(a,{checked:r.includes("Oliver Hansen")}),e.jsx(i,{primary:"Oliver Hansen"})]},"Oliver Hansen"),",",e.jsxs(t,{value:"Van Henry",children:[e.jsx(a,{checked:r.includes("Van Henry")}),e.jsx(i,{primary:"Van Henry"})]},"Van Henry"),",",e.jsxs(t,{value:"April Tucker",children:[e.jsx(a,{checked:r.includes("April Tucker")}),e.jsx(i,{primary:"April Tucker"})]},"April Tucker"),",",e.jsxs(t,{value:"Ralph Hubbard",children:[e.jsx(a,{checked:r.includes("Ralph Hubbard")}),e.jsx(i,{primary:"Ralph Hubbard"})]},"Ralph Hubbard"),",",e.jsxs(t,{value:"Omar Alexander",children:[e.jsx(a,{checked:r.includes("Omar Alexander")}),e.jsx(i,{primary:"Omar Alexander"})]},"Omar Alexander")]})}};var s,m,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(m=l.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const $=["CheckBoxes"];export{l as CheckBoxes,$ as __namedExportsOrder,Z as default};

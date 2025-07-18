import{j as e,r as d}from"./iframe-D6WPvDsw.js";import{S as p}from"./select-DT0abQCc.js";import{C as a}from"./checkbox-DLrDHwI_.js";import{M as t}from"./MenuItem-CMGtjuSE.js";import{L as i}from"./ListItemText-neyRUY8Q.js";import"./FormControl-Bvexnv9I.js";import"./styled-AX3WQiqK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-j6TWbiTy.js";import"./isMuiElement-tmp0hHY9.js";import"./Select-Bk3sn5xi.js";import"./formControlState-Dq1zat_P.js";import"./List-BxyuLOoB.js";import"./useSlotProps-re4MZg2K.js";import"./resolveComponentProps-DdCxtoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-kuuMuFVN.js";import"./Paper-IUoxnzvH.js";import"./TransitionGroupContext-DkLkXY74.js";import"./index-w00OeCIG.js";import"./index-CjlK8uMj.js";import"./Grow-CxdA_Xp2.js";import"./useTheme-C5UVmkdi.js";import"./getReactElementRef-DbwD0SEZ.js";import"./ownerWindow-DIR61fab.js";import"./Modal-CG13Q5kf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-7GtWE5q9.js";import"./useId-DV-IoEpY.js";import"./createSvgIcon-V8HVGjoo.js";import"./InputBase-CRatIxq-.js";import"./Stack-QjlE7ymT.js";import"./Chip-D-e2GIwl.js";import"./ButtonBase-BZJrsSUT.js";import"./useIsFocusVisible-BVCTFO4q.js";import"./SwitchBase-BcQeOoxM.js";import"./dividerClasses-BdycyqIl.js";import"./Typography-DRjZWMth.js";const Z={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[n=>e.jsx("div",{style:{width:250},children:e.jsx(n,{})})]},l={args:{label:"Label",appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox",children:[]},render:n=>{const[r,c]=d.useState(n.multiple?[]:"");return e.jsxs(p,{...n,value:r,onChange:u=>c(u.target.value),children:[e.jsxs(t,{value:"Oliver Hansen",children:[e.jsx(a,{checked:r.includes("Oliver Hansen")}),e.jsx(i,{primary:"Oliver Hansen"})]},"Oliver Hansen"),",",e.jsxs(t,{value:"Van Henry",children:[e.jsx(a,{checked:r.includes("Van Henry")}),e.jsx(i,{primary:"Van Henry"})]},"Van Henry"),",",e.jsxs(t,{value:"April Tucker",children:[e.jsx(a,{checked:r.includes("April Tucker")}),e.jsx(i,{primary:"April Tucker"})]},"April Tucker"),",",e.jsxs(t,{value:"Ralph Hubbard",children:[e.jsx(a,{checked:r.includes("Ralph Hubbard")}),e.jsx(i,{primary:"Ralph Hubbard"})]},"Ralph Hubbard"),",",e.jsxs(t,{value:"Omar Alexander",children:[e.jsx(a,{checked:r.includes("Omar Alexander")}),e.jsx(i,{primary:"Omar Alexander"})]},"Omar Alexander")]})}};var s,m,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

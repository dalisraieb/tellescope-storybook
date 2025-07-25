import{j as e,r as d}from"./iframe-BIRbnDU3.js";import{S as p}from"./select-BLez6DQG.js";import{C as a}from"./checkbox-_M4IeGsB.js";import{M as t}from"./MenuItem-BDVB43Er.js";import{L as i}from"./ListItemText-C-knhhzz.js";import"./FormControl-BJPLsCx9.js";import"./styled-BQzQxZQg.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BH6yyn_Y.js";import"./isMuiElement-Dhbmfky1.js";import"./Select-DHZTV8S8.js";import"./formControlState-Dq1zat_P.js";import"./List-D-5zpCoO.js";import"./useSlotProps-ODbKV4Mg.js";import"./resolveComponentProps-BCcY2dCN.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cm4fgxMA.js";import"./Paper-rDORrwMN.js";import"./TransitionGroupContext-BaULKsg4.js";import"./index-DhMiAOT7.js";import"./index-CSL-6jbx.js";import"./Grow-BrjM973w.js";import"./useTheme-CdO6g5nq.js";import"./getReactElementRef-76HF8eBV.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Bs-D53QN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-BFmAtxsm.js";import"./useId-C-divviP.js";import"./createSvgIcon-Dj-KrJjm.js";import"./InputBase-fzMASiwB.js";import"./Stack-p8V-8Yyf.js";import"./Chip-BXVl9Dqj.js";import"./ButtonBase-CwbxjUMM.js";import"./useIsFocusVisible-BmSydHd7.js";import"./SwitchBase-PQc1oV__.js";import"./dividerClasses-BqfVdti0.js";import"./Typography-Cd3v5_Xb.js";const Z={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[n=>e.jsx("div",{style:{width:250},children:e.jsx(n,{})})]},l={args:{label:"Label",appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox",children:[]},render:n=>{const[r,c]=d.useState(n.multiple?[]:"");return e.jsxs(p,{...n,value:r,onChange:u=>c(u.target.value),children:[e.jsxs(t,{value:"Oliver Hansen",children:[e.jsx(a,{checked:r.includes("Oliver Hansen")}),e.jsx(i,{primary:"Oliver Hansen"})]},"Oliver Hansen"),",",e.jsxs(t,{value:"Van Henry",children:[e.jsx(a,{checked:r.includes("Van Henry")}),e.jsx(i,{primary:"Van Henry"})]},"Van Henry"),",",e.jsxs(t,{value:"April Tucker",children:[e.jsx(a,{checked:r.includes("April Tucker")}),e.jsx(i,{primary:"April Tucker"})]},"April Tucker"),",",e.jsxs(t,{value:"Ralph Hubbard",children:[e.jsx(a,{checked:r.includes("Ralph Hubbard")}),e.jsx(i,{primary:"Ralph Hubbard"})]},"Ralph Hubbard"),",",e.jsxs(t,{value:"Omar Alexander",children:[e.jsx(a,{checked:r.includes("Omar Alexander")}),e.jsx(i,{primary:"Omar Alexander"})]},"Omar Alexander")]})}};var s,m,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

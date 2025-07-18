import{j as e,r as d}from"./iframe-CQw1bh_3.js";import{S as p}from"./select-BZ7Hd2EU.js";import{C as a}from"./checkbox-Vr4xrhDt.js";import{M as t}from"./MenuItem-DUOQhvfP.js";import{L as i}from"./ListItemText-Bt3hA59g.js";import"./FormControl-BvfGlV5i.js";import"./styled-0urVwbhR.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D7aixEVT.js";import"./isMuiElement-c5mTnCJM.js";import"./Select-BZlqZEy6.js";import"./formControlState-Dq1zat_P.js";import"./List-BRMYBShm.js";import"./useSlotProps-CC53gLXq.js";import"./resolveComponentProps-BAz9eB7D.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CUAEDxbs.js";import"./Paper-DoXoRAIi.js";import"./TransitionGroupContext-ucckMPrU.js";import"./index-BU1ft_YN.js";import"./index-D7rk0scn.js";import"./Grow-DZ6JOMQo.js";import"./useTheme-CONGIyUh.js";import"./getReactElementRef-BFTcAmDX.js";import"./ownerWindow-DIR61fab.js";import"./Modal-B5tUVl_X.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DKLpkiav.js";import"./useId-CBKkpWLc.js";import"./createSvgIcon-CPZXexn_.js";import"./InputBase-G_Xq6-VF.js";import"./Stack-DJd1T9w_.js";import"./Chip-Bhz2nqgH.js";import"./ButtonBase-CawyO1_w.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./SwitchBase-DogA0G-g.js";import"./dividerClasses-Cr81tDjM.js";import"./Typography-CETEvHWw.js";const Z={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[n=>e.jsx("div",{style:{width:250},children:e.jsx(n,{})})]},l={args:{label:"Label",appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox",children:[]},render:n=>{const[r,c]=d.useState(n.multiple?[]:"");return e.jsxs(p,{...n,value:r,onChange:u=>c(u.target.value),children:[e.jsxs(t,{value:"Oliver Hansen",children:[e.jsx(a,{checked:r.includes("Oliver Hansen")}),e.jsx(i,{primary:"Oliver Hansen"})]},"Oliver Hansen"),",",e.jsxs(t,{value:"Van Henry",children:[e.jsx(a,{checked:r.includes("Van Henry")}),e.jsx(i,{primary:"Van Henry"})]},"Van Henry"),",",e.jsxs(t,{value:"April Tucker",children:[e.jsx(a,{checked:r.includes("April Tucker")}),e.jsx(i,{primary:"April Tucker"})]},"April Tucker"),",",e.jsxs(t,{value:"Ralph Hubbard",children:[e.jsx(a,{checked:r.includes("Ralph Hubbard")}),e.jsx(i,{primary:"Ralph Hubbard"})]},"Ralph Hubbard"),",",e.jsxs(t,{value:"Omar Alexander",children:[e.jsx(a,{checked:r.includes("Omar Alexander")}),e.jsx(i,{primary:"Omar Alexander"})]},"Omar Alexander")]})}};var s,m,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

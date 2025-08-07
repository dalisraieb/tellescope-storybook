import{j as e,r as d}from"./iframe-C7YkNvSQ.js";import{S as p}from"./select-2vUKkyk2.js";import{C as a}from"./checkbox-BuWGlwvw.js";import{M as t}from"./MenuItem-BzwDd5tb.js";import{L as i}from"./ListItemText-CUqI4k6h.js";import"./FormControl-DmS9Qp8c.js";import"./styled-9bVfkw6q.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./isMuiElement-4jqovnI5.js";import"./InputLabel-BSDcvnkt.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bxcy2z6E.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C4CjHbyO.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useTimeout-BzjaGR02.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-4AeG_tC3.js";import"./useControlled-CDtRUcdo.js";import"./createSvgIcon-CAcL5gG4.js";import"./InputBase-wxT8anmG.js";import"./Stack-BPribNI5.js";import"./Chip-BVuNbYRK.js";import"./ButtonBase-DinbBO9G.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./Checkbox-CtOlTCly.js";import"./SwitchBase-poeQoh38.js";import"./listItemTextClasses-BVuUz09p.js";import"./dividerClasses-6wmrs3Ei.js";import"./Typography-CIh4BeGT.js";const ne={title:"ATOMS/FormInputs/Select",component:p,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[n=>e.jsx("div",{style:{width:250},children:e.jsx(n,{})})]},l={args:{label:"Label",appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox",children:[]},render:n=>{const[r,c]=d.useState(n.multiple?[]:"");return e.jsxs(p,{...n,value:r,onChange:u=>c(u.target.value),children:[e.jsxs(t,{value:"Oliver Hansen",children:[e.jsx(a,{checked:r.includes("Oliver Hansen")}),e.jsx(i,{primary:"Oliver Hansen"})]},"Oliver Hansen"),",",e.jsxs(t,{value:"Van Henry",children:[e.jsx(a,{checked:r.includes("Van Henry")}),e.jsx(i,{primary:"Van Henry"})]},"Van Henry"),",",e.jsxs(t,{value:"April Tucker",children:[e.jsx(a,{checked:r.includes("April Tucker")}),e.jsx(i,{primary:"April Tucker"})]},"April Tucker"),",",e.jsxs(t,{value:"Ralph Hubbard",children:[e.jsx(a,{checked:r.includes("Ralph Hubbard")}),e.jsx(i,{primary:"Ralph Hubbard"})]},"Ralph Hubbard"),",",e.jsxs(t,{value:"Omar Alexander",children:[e.jsx(a,{checked:r.includes("Omar Alexander")}),e.jsx(i,{primary:"Omar Alexander"})]},"Omar Alexander")]})}};var s,m,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(m=l.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const le=["CheckBoxes"];export{l as CheckBoxes,le as __namedExportsOrder,ne as default};

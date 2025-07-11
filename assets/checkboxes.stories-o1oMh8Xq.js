import{r as k,u as R,_ as S,a as m,j as e}from"./iframe-B635ogeX.js";import{S as C}from"./select-7MktsETV.js";import{C as i}from"./checkbox-wIxGoIgW.js";import{g as V,l as j,M as l}from"./MenuItem-BNPISDk-.js";import{s as B,c as P,b as _}from"./styled-D_JRszTj.js";import{L as N}from"./List-Bh5MpXX8.js";import{T as d}from"./Typography-CshVcec5.js";import"./index-7pjO2N5Y.js";import"./createSvgIcon-BdBhm6j3.js";import"./useTimeout-BqFI7Rpv.js";import"./ButtonBase-BhyEMCvw.js";import"./TransitionGroupContext-B-FBxGae.js";import"./useIsFocusVisible-BUp4RUIQ.js";import"./FormControl-DjzAj70N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Q5Xwe7A9.js";import"./isMuiElement-1gBlwsmZ.js";import"./Select-CVOI_XZF.js";import"./formControlState-Dq1zat_P.js";import"./useSlotProps-B0axK7bx.js";import"./resolveComponentProps-C1ixA3CJ.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CrNB3hHz.js";import"./index-DG8fRf4y.js";import"./index-DWA8G4Dm.js";import"./Grow-JzYB1-ex.js";import"./getReactElementRef-BxFG5RlB.js";import"./ownerWindow-DIR61fab.js";import"./Modal-NfOny6sb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Cf6RMG8v.js";import"./useId-DOVApbVR.js";import"./InputBase-BO8XgWSZ.js";import"./Stack-D0FngCED.js";import"./SwitchBase-D0ioEufM.js";import"./dividerClasses-B-TpH0Bm.js";const E=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],w=a=>{const{classes:r,inset:t,primary:s,secondary:y,dense:x}=a;return _({root:["root",t&&"inset",x&&"dense",s&&y&&"multiline"],primary:["primary"],secondary:["secondary"]},V,r)},z=B("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:t}=a;return[{[`& .${j.primary}`]:r.primary},{[`& .${j.secondary}`]:r.secondary},r.root,t.inset&&r.inset,t.primary&&t.secondary&&r.multiline,t.dense&&r.dense]}})(({ownerState:a})=>m({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},a.primary&&a.secondary&&{marginTop:6,marginBottom:6},a.inset&&{paddingLeft:56})),p=k.forwardRef(function(r,t){const s=R({props:r,name:"MuiListItemText"}),{children:y,className:x,disableTypography:c=!1,inset:O=!1,primary:b,primaryTypographyProps:h,secondary:A,secondaryTypographyProps:L}=s,M=S(s,E),{dense:g}=k.useContext(N);let n=b??y,o=A;const T=m({},s,{disableTypography:c,inset:O,primary:!!n,secondary:!!o,dense:g}),v=w(T);return n!=null&&n.type!==d&&!c&&(n=e.jsx(d,m({variant:g?"body2":"body1",className:v.primary,component:h!=null&&h.variant?void 0:"span",display:"block"},h,{children:n}))),o!=null&&o.type!==d&&!c&&(o=e.jsx(d,m({variant:"body2",className:v.secondary,color:"text.secondary",display:"block"},L,{children:o}))),e.jsxs(z,m({className:P(v.root,x),ownerState:T,ref:t},M,{children:[n,o]}))}),He={title:"ATOMS/FormInputs/Select",component:C,parameters:{controls:{include:[""]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","patientForm","table"]},multiple:{control:"boolean"}},decorators:[a=>e.jsx("div",{style:{width:250},children:e.jsx(a,{})})]},u={args:{label:"Label",appearance:"standard",multiple:!0,value:"",onChange:()=>{},size:"medium",optionStyle:"checkbox",children:[]},render:a=>{const[r,t]=k.useState(a.multiple?[]:"");return e.jsxs(C,{...a,value:r,onChange:s=>t(s.target.value),children:[e.jsxs(l,{value:"Oliver Hansen",children:[e.jsx(i,{checked:r.includes("Oliver Hansen")}),e.jsx(p,{primary:"Oliver Hansen"})]},"Oliver Hansen"),",",e.jsxs(l,{value:"Van Henry",children:[e.jsx(i,{checked:r.includes("Van Henry")}),e.jsx(p,{primary:"Van Henry"})]},"Van Henry"),",",e.jsxs(l,{value:"April Tucker",children:[e.jsx(i,{checked:r.includes("April Tucker")}),e.jsx(p,{primary:"April Tucker"})]},"April Tucker"),",",e.jsxs(l,{value:"Ralph Hubbard",children:[e.jsx(i,{checked:r.includes("Ralph Hubbard")}),e.jsx(p,{primary:"Ralph Hubbard"})]},"Ralph Hubbard"),",",e.jsxs(l,{value:"Omar Alexander",children:[e.jsx(i,{checked:r.includes("Omar Alexander")}),e.jsx(p,{primary:"Omar Alexander"})]},"Omar Alexander")]})}};var H,I,f;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(f=(I=u.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const Ie=["CheckBoxes"];export{u as CheckBoxes,Ie as __namedExportsOrder,He as default};

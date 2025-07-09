import{j as o}from"./iframe-MlT4uNqk.js";import{C as s}from"./checkbox-Bn4HuM78.js";import{F as i}from"./FormControlLabel-CeYK84PY.js";import{T as n}from"./Typography-Dlx4VT3Z.js";import"./styled-uAf5yWmA.js";import"./SwitchBase-Df2V0RFK.js";import"./useFormControl-D8WB3yfs.js";import"./useControlled-3UtnvOT2.js";import"./ButtonBase-CL_5rPQg.js";import"./TransitionGroupContext-UBgLjG1_.js";import"./useIsFocusVisible-rP1Nd5fW.js";import"./createSvgIcon-j_d6Q5Pl.js";import"./formControlState-Dq1zat_P.js";import"./Stack-CDqxnO2v.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,v={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:m()}},e={args:{color:"primary",size:"medium"},render:l=>o.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:o.jsx(s,{...l,defaultChecked:!0}),label:o.jsx(n,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: "medium"
  },
  render: args => <FormControlLabel sx={{
    gap: 1,
    alignItems: "flex-start"
  }} control={<CheckBox {...args} defaultChecked />} label={<Typography variant="body2" color="text.secondary" sx={{
    userSelect: "none",
    maxWidth: 450
  }}>\r
                a longer label and will displayed at a smaller size in order to conserve\r
                valuable space.  This can be used to display some disclaimer about\r
                terms or conditions that might be a bit too long for a normal label area"\r
            </Typography>} />
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const O=["Mutliline"];export{e as Mutliline,O as __namedExportsOrder,v as default};

import{j as e}from"./iframe-C_mvATxf.js";import{C as s}from"./checkbox-sb5U5XXM.js";import{F as i}from"./FormControlLabel-DBGndQ-u.js";import{T as m}from"./Typography-BNoquuOj.js";import"./styled-D3e7hSdf.js";import"./SwitchBase-BHpo2KH8.js";import"./useFormControl-B5wV8xKu.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./useControlled-Cyk4WA3W.js";import"./ButtonBase-CGQkK_HI.js";import"./useTimeout-Cd2_LOh1.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./createSvgIcon-Iv4cjDr_.js";import"./formControlState-Dq1zat_P.js";import"./Stack-DsmHLUro.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,S={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:n()}},o={args:{color:"primary",size:"medium"},render:l=>e.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:e.jsx(s,{...l,defaultChecked:!0}),label:e.jsx(m,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var r,a,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const j=["Mutliline"];export{o as Mutliline,j as __namedExportsOrder,S as default};

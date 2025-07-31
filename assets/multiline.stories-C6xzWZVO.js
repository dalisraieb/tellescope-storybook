import{j as e}from"./iframe-CM3h47Pf.js";import{C as s}from"./checkbox-DLBR6ojq.js";import{F as i}from"./FormControlLabel-CH7xsC8B.js";import{T as m}from"./Typography-CxaJ7SmR.js";import"./styled-DspZaNH0.js";import"./SwitchBase-DlkZSi--.js";import"./useFormControl-BCi-nmTG.js";import"./generateUtilityClasses-BkYpawWM.js";import"./useControlled-nTii91Zb.js";import"./ButtonBase-DVaQIUUB.js";import"./useTimeout-RdUEBmnf.js";import"./TransitionGroupContext-DluSgF3d.js";import"./useIsFocusVisible-DCSkjDCX.js";import"./createSvgIcon-DWMlvmED.js";import"./formControlState-Dq1zat_P.js";import"./Stack-Dif7eGMF.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,S={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:n()}},o={args:{color:"primary",size:"medium"},render:l=>e.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:e.jsx(s,{...l,defaultChecked:!0}),label:e.jsx(m,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var r,a,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

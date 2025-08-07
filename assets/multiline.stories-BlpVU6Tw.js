import{j as r}from"./iframe-C7YkNvSQ.js";import{C as s}from"./checkbox-BuWGlwvw.js";import{F as i}from"./FormControlLabel-BaKYTZZf.js";import{T as m}from"./Typography-CIh4BeGT.js";import"./Checkbox-CtOlTCly.js";import"./styled-9bVfkw6q.js";import"./SwitchBase-poeQoh38.js";import"./useFormControl-DA987-lg.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./useControlled-CDtRUcdo.js";import"./ButtonBase-DinbBO9G.js";import"./useTimeout-BzjaGR02.js";import"./TransitionGroupContext-CotujMke.js";import"./useForkRef-C4CjHbyO.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./createSvgIcon-CAcL5gG4.js";import"./formControlState-Dq1zat_P.js";import"./Stack-BPribNI5.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,z={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:n()}},o={args:{color:"primary",size:"medium"},render:l=>r.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:r.jsx(s,{...l,defaultChecked:!0}),label:r.jsx(m,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var e,a,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const E=["Mutliline"];export{o as Mutliline,E as __namedExportsOrder,z as default};

import{j as r}from"./iframe-CpdnR0i2.js";import{C as s}from"./checkbox-Bw3-lbAv.js";import{F as i}from"./FormControlLabel-CnPiBcgg.js";import{T as m}from"./Typography-DUyUrCFr.js";import"./Checkbox-Drl9XYMK.js";import"./styled-DujYcmrZ.js";import"./SwitchBase-COxA6MWJ.js";import"./useFormControl-Bdg8Z9sC.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./useControlled-d9yX6gVw.js";import"./ButtonBase-DfyOkDKJ.js";import"./useTimeout-BgZTaRCc.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./useForkRef-k7JvqZ8G.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./createSvgIcon-C4MRlNQH.js";import"./formControlState-Dq1zat_P.js";import"./Stack-Bd6jq2pn.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,z={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:n()}},o={args:{color:"primary",size:"medium"},render:l=>r.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:r.jsx(s,{...l,defaultChecked:!0}),label:r.jsx(m,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var e,a,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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

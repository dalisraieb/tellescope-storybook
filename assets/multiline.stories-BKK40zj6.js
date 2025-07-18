import{j as e}from"./iframe-B6hPRLvE.js";import{C as s}from"./checkbox-Bzlf76FQ.js";import{F as i}from"./FormControlLabel-BWShK6a-.js";import{T as m}from"./Typography-BvbMjAlR.js";import"./styled-Rc4ikHLI.js";import"./SwitchBase-Tf5JjDZE.js";import"./useFormControl-BtT_9nwa.js";import"./useControlled-CfTk7emU.js";import"./ButtonBase-1LTz6Pn6.js";import"./useTimeout-B4QmwxA7.js";import"./TransitionGroupContext-Dj08XMFC.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./createSvgIcon-Cd6zCl4P.js";import"./formControlState-Dq1zat_P.js";import"./Stack-pVxnj9_9.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,O={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:n()}},o={args:{color:"primary",size:"medium"},render:l=>e.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:e.jsx(s,{...l,defaultChecked:!0}),label:e.jsx(m,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var r,a,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const S=["Mutliline"];export{o as Mutliline,S as __namedExportsOrder,O as default};

import{j as o}from"./iframe-cG-0_CPm.js";import{C as s}from"./checkbox-lAdbOCI_.js";import{F as i}from"./FormControlLabel-B2MF__7c.js";import{T as n}from"./Typography-BKfEMICe.js";import"./TransitionGroupContext-Q0M-j55S.js";import"./SwitchBase-Dx5XlnH8.js";import"./useFormControl-COLmt8lF.js";import"./createSvgIcon-dDeKaFoy.js";import"./ButtonBase-kLDy-nZc.js";import"./useIsFocusVisible-LLXNQJPz.js";import"./formControlState-Dq1zat_P.js";import"./Stack-DVD8BSff.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,_={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:m()}},e={args:{color:"primary",size:"medium"},render:l=>o.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:o.jsx(s,{...l,defaultChecked:!0}),label:o.jsx(n,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const k=["Mutliline"];export{e as Mutliline,k as __namedExportsOrder,_ as default};

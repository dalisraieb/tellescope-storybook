import{j as o}from"./iframe-BgjesgQg.js";import{C as s}from"./checkbox-D5XBzKqJ.js";import{F as i}from"./FormControlLabel-BfH2A24h.js";import{T as n}from"./Typography-652LhfSf.js";import"./TransitionGroupContext-CLlTie2B.js";import"./SwitchBase-yqUcOkcV.js";import"./useFormControl-YTI9_HU0.js";import"./useControlled-LfO21FU7.js";import"./ButtonBase-BrFLFx0R.js";import"./useIsFocusVisible-Bjmxrfal.js";import"./createSvgIcon-iIuMGR86.js";import"./formControlState-Dq1zat_P.js";import"./Stack-KWo0K7od.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,k={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:m()}},e={args:{color:"primary",size:"medium"},render:l=>o.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:o.jsx(s,{...l,defaultChecked:!0}),label:o.jsx(n,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const v=["Mutliline"];export{e as Mutliline,v as __namedExportsOrder,k as default};

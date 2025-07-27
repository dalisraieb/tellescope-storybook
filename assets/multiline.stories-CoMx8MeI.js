import{j as e}from"./iframe-NAPhPX1u.js";import{C as s}from"./checkbox-NyBU_v8M.js";import{F as i}from"./FormControlLabel-Raj02pgm.js";import{T as m}from"./Typography-PG28g8IJ.js";import"./styled-DO-91wXW.js";import"./SwitchBase-Cqrd6I-_.js";import"./useFormControl-bl8w57rs.js";import"./useControlled-Coj7fk6E.js";import"./ButtonBase-Dyh98Sbg.js";import"./useTimeout-CG_60NpA.js";import"./TransitionGroupContext-C90OWFUl.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./createSvgIcon-CBEcOZsh.js";import"./formControlState-Dq1zat_P.js";import"./Stack-CQ7BulZm.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,O={title:"ATOMS/FormInputs/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:n()}},o={args:{color:"primary",size:"medium"},render:l=>e.jsx(i,{sx:{gap:1,alignItems:"flex-start"},control:e.jsx(s,{...l,defaultChecked:!0}),label:e.jsx(m,{variant:"body2",color:"text.secondary",sx:{userSelect:"none",maxWidth:450},children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})})};var r,a,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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

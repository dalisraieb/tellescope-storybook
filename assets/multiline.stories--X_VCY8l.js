import{j as e}from"./iframe-C9uIjD27.js";import{C as s}from"./checkbox-BvqBhkpN.js";import{S as l}from"./Stack-B4fl6GfY.js";import{T as n}from"./Typography-Mvk64xdk.js";import"./TransitionGroupContext-CD6g6rJt.js";import"./useFormControl-DBUKqHg0.js";import"./createSvgIcon-6xyMhKCK.js";import"./ButtonBase-D2xIBlIG.js";import"./useIsFocusVisible-KCYrAar2.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,f={title:"ATOMS/Checkbox",component:s,parameters:{controls:{exclude:["onClick"]}},argTypes:{color:{options:["primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["large","medium","small"]}},args:{onClick:c()}},r={args:{color:"primary",size:"medium",disabled:!1},render:i=>e.jsxs(l,{direction:"row",spacing:2,alignItems:"center",maxWidth:600,children:[e.jsx(s,{...i}),e.jsx(n,{variant:"body2",color:"text.secondary",children:'a longer label and will displayed at a smaller size in order to conserve valuable space.  This can be used to display some disclaimer about terms or conditions that might be a bit too long for a normal label area"'})]})};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: "medium",
    disabled: false
  },
  render: args => <Stack direction={"row"} spacing={2} alignItems="center" maxWidth={600}>\r
            <CheckBox {...args} />\r
            <Typography variant="body2" color="text.secondary">\r
                a longer label and will displayed at a smaller size in order to conserve\r
                valuable space.  This can be used to display some disclaimer about\r
                terms or conditions that might be a bit too long for a normal label area"\r
            </Typography>\r
        </Stack>
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const T=["Mutliline"];export{r as Mutliline,T as __namedExportsOrder,f as default};

import{j as l}from"./iframe-CPQTd9d5.js";import{F}from"./FormControl-DTFU8ly8.js";import{F as j}from"./FormControlLabel-C9jlOcsi.js";import{S as k}from"./Switch-DXUQRmyV.js";import"./styled-C2Cu9qfT.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-PyG4Ikag.js";import"./isMuiElement-DLkjVCSc.js";import"./formControlState-Dq1zat_P.js";import"./Typography-BzBpWJM4.js";import"./Stack-DFQFZ6Xi.js";import"./SwitchBase-BRzyNRqZ.js";import"./useControlled-C2KopCyd.js";import"./ButtonBase-t_hNJL6A.js";import"./TransitionGroupContext-D0Irt0u2.js";import"./useIsFocusVisible-CLv33wm5.js";const z=({label:x,formlabelProps:L,color:w="default",...v})=>{const{sx:C,...D}=L||{};return l.jsx(F,{children:l.jsx(j,{control:l.jsx(k,{...v,color:w,disableRipple:!0}),label:x,labelPlacement:"start",sx:{gap:1,m:0,...C},...D})})};z.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "info"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},formlabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"MuiFormControlLabelProps"},{name:"union",raw:'"label" | "control"',elements:[{name:"literal",value:'"label"'},{name:"literal",value:'"control"'}]}],raw:'Omit<MuiFormControlLabelProps, "label" | "control">'},description:""}},composes:["Omit"]};const K={title:"ATOMS/Switch/Switch",component:z,parameters:{controls:{exclude:["label","formlabelProps","formControlProps","checked","disabled"]}},argTypes:{color:{options:["default","primary","secondary","info"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{color:"primary",size:"medium"}},r={args:{color:"primary",size:"medium",label:"Start",formlabelProps:{labelPlacement:"start"}}},a={args:{color:"primary",size:"medium",label:"End",formlabelProps:{labelPlacement:"end"}}},o={args:{color:"primary",size:"medium",disabled:!0}},s={args:{color:"primary",size:"medium",disabled:!0,checked:!0}};var t,m,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: "medium"
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: "medium",
    label: "Start",
    formlabelProps: {
      labelPlacement: "start"
    }
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var n,u,b;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: "medium",
    label: "End",
    formlabelProps: {
      labelPlacement: "end"
    }
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,y,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: "medium",
    disabled: true
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,P,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: "medium",
    disabled: true,
    checked: true
  }
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const Q=["Default","LabelLeft","LabelRight","Disabled","DisabledChecked"];export{e as Default,o as Disabled,s as DisabledChecked,r as LabelLeft,a as LabelRight,Q as __namedExportsOrder,K as default};

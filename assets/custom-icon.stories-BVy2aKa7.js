import{j as e}from"./iframe-cG-0_CPm.js";import{I as i}from"./input-MxhFUAyV.js";import{S as a}from"./Star-CXmWmz7l.js";import"./FormControl-CVDjBwdb.js";import"./TransitionGroupContext-Q0M-j55S.js";import"./utils-iop7lDec.js";import"./useFormControl-COLmt8lF.js";import"./useId-CiGQ-sYP.js";import"./Select-zI9tPuai.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DSOlMuUk.js";import"./index-D6JOygL5.js";import"./index-BlZ5Tbaw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-dDeKaFoy.js";import"./Typography-BKfEMICe.js";import"./createSvgIcon-cM32GE1w.js";import"./useIsFocusVisible-LLXNQJPz.js";const O={title:"ATOMS/FormInputs/Input",component:i,argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]},CustomIcon:{options:["start","end"],control:{type:"select"}}},args:{CustomIcon:"start"}},r={args:{appearance:"standard",size:"medium"},render:({CustomIcon:t,...o})=>e.jsx(i,{appearance:o.appearance,size:o.size,disabled:!1,label:"Label",error:!1,startIcon:t==="start"?e.jsx(a,{}):void 0,endIcon:t==="end"?e.jsx(a,{}):void 0})};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    appearance: "standard",
    size: "medium"
  },
  render: ({
    CustomIcon,
    ...args
  }: StoryProps) => {
    return <Input appearance={args.appearance} size={args.size} disabled={false} label="Label" error={false} startIcon={CustomIcon === "start" ? <StarIcon /> : undefined} endIcon={CustomIcon === "end" ? <StarIcon /> : undefined} />;
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const T=["CustomIcon"];export{r as CustomIcon,T as __namedExportsOrder,O as default};

import{j as t}from"./iframe-DcQCorcF.js";import{I as i}from"./input-BnUIuVii.js";import{S as a}from"./Star-D3uSIz_K.js";import"./FormControl-KyJaZbTt.js";import"./styled-BwxNTMYu.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DUshowLh.js";import"./isMuiElement-Bs55rATV.js";import"./useId-JwLuVtQu.js";import"./Select-DiB2dLpw.js";import"./formControlState-Dq1zat_P.js";import"./List-C5Yomo3v.js";import"./useSlotProps-kzTmx_RL.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-DB_VBoO3.js";import"./index-M7CxruzB.js";import"./index-DS_KXk_Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Cq1AqgbH.js";import"./createSvgIcon-B8TgDHxc.js";import"./InputBase-BDI_5ZKH.js";import"./Typography-CrfA0lvj.js";import"./createSvgIcon-DsipAhp4.js";import"./useIsFocusVisible-AGo_CW5c.js";const P={title:"ATOMS/FormInputs/Input",component:i,parameters:{controls:{include:["appearance","size","CustomIcon"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]},CustomIcon:{options:["start","end"],control:{type:"select"}}},args:{CustomIcon:"start"}},r={args:{appearance:"standard",size:"medium"},render:({CustomIcon:e,...o})=>t.jsx(i,{appearance:o.appearance,size:o.size,disabled:!1,label:"Label",error:!1,startIcon:e==="start"?t.jsx(a,{}):void 0,endIcon:e==="end"?t.jsx(a,{}):void 0})};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const R=["CustomIcon"];export{r as CustomIcon,R as __namedExportsOrder,P as default};

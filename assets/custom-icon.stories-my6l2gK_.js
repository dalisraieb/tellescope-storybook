import{j as e}from"./iframe-DtbUUh3X.js";import{I as i}from"./input-BKsq1mG2.js";import{S as a}from"./Star-Bck9YAxX.js";import"./FormControl-BScKHux-.js";import"./TransitionGroupContext-ByHAGyPv.js";import"./utils-iop7lDec.js";import"./useFormControl-BPlPBONu.js";import"./useId-D1OSTXzn.js";import"./Select-Czjngvcg.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-D6_ZQbxJ.js";import"./index-BlOsm4Bp.js";import"./index-COy-h3kB.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-ETa8Gqb4.js";import"./Typography-jgpmIS-g.js";import"./createSvgIcon-BH24oe3O.js";import"./useIsFocusVisible-BXAimtCf.js";const O={title:"ATOMS/FormInputs/Input",component:i,argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]},CustomIcon:{options:["start","end"],control:{type:"select"}}},args:{CustomIcon:"start"}},r={args:{appearance:"standard",size:"medium"},render:({CustomIcon:t,...o})=>e.jsx(i,{appearance:o.appearance,size:o.size,disabled:!1,label:"Label",error:!1,startIcon:t==="start"?e.jsx(a,{}):void 0,endIcon:t==="end"?e.jsx(a,{}):void 0})};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

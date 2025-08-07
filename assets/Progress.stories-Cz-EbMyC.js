import{j as i}from"./iframe-C7YkNvSQ.js";import{L as d}from"./LinearProgress-xsonztzb.js";import{s as l}from"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";const n=({sx:r,...a})=>i.jsx(d,{...a,sx:{...r}});n.__docgenInfo={description:"",methods:[],displayName:"LinearProgress",composes:["LinearProgressProps"]};const p={title:"Atoms/ProgressBar",component:n,tags:["autodocs"],args:{color:"primary",variant:"determinate",value:20,valueBuffer:0},argTypes:{color:{control:"select",options:["primary","secondary","inherit"]},variant:{control:"select",options:["determinate","indeterminate","buffer"]},value:{control:{type:"number",min:0}},valueBuffer:{control:{type:"number",min:0},if:{arg:"variant",eq:"buffer"}}}},e={argTypes:{color:{table:{disable:!0}},valueBuffer:{table:{disable:!0}},variant:{control:"radio",options:["determinate","indeterminate"]}},render:r=>{const a=l(n)(()=>({height:16,borderRadius:20,background:"#b7bed3","& .MuiLinearProgress-bar":{background:"#798ed0"}}));return i.jsx(a,{variant:r.variant,value:r.value,"aria-label":"progress-border"})}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    valueBuffer: {
      table: {
        disable: true
      }
    },
    variant: {
      control: "radio",
      options: ["determinate", "indeterminate"]
    }
  },
  render: args => {
    const BorderLinearProgress = styled(LinearProgress)(() => ({
      height: 16,
      borderRadius: 20,
      background: "#b7bed3",
      "& .MuiLinearProgress-bar": {
        background: "#798ed0"
      }
    }));
    return <BorderLinearProgress variant={args.variant} value={args.value} aria-label="progress-border" />;
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const b=["SentForms"];export{e as SentForms,b as __namedExportsOrder,p as default};

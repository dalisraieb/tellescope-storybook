import{r as t,j as g}from"./iframe-C_mvATxf.js";import{I as i}from"./input-BW5SRUMQ.js";import"./FormControl-Cxd88cuH.js";import"./styled-D3e7hSdf.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B5wV8xKu.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./isMuiElement-BRSh3FLT.js";import"./TextField-CChYsR28.js";import"./useId-CjGAtGk9.js";import"./Select-B9Z0luHz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CcMJvyZX.js";import"./useSlotProps-CJdg0P1D.js";import"./resolveComponentProps-BNjn3TbO.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cd2_LOh1.js";import"./Paper-y4L9TjWB.js";import"./Grow-CA2fjeE3.js";import"./useTheme-BlUG05El.js";import"./utils-B6yf_fIX.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./index-BmfL9UO7.js";import"./index-BBQBgD7t.js";import"./getReactElementRef-BioJHGsC.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DXzE80HE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B9PzbMud.js";import"./useControlled-Cyk4WA3W.js";import"./createSvgIcon-Iv4cjDr_.js";import"./InputBase-BojRxlmd.js";import"./Typography-BNoquuOj.js";const U={title:"ATOMS/FormInputs/Input",component:i,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:n=>{const[m,c]=t.useState(""),[u,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const o=h.target.value;c(o),/^[a-zA-Z\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(i,{...n,value:m,onChange:x,error:u,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    appearance: 'standard',
    size: "medium",
    label: 'Label'
  },
  render: args => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setValue(val);
      if (!/^[a-zA-Z\\s]*$/.test(val)) {
        setError(true);
        setHelperText('Only alphabetic text is allowed');
      } else {
        setError(false);
        setHelperText('');
      }
    };
    return <Input {...args} value={value} onChange={handleChange} error={error} helperText={helperText} />;
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const W=["Text"];export{e as Text,W as __namedExportsOrder,U as default};

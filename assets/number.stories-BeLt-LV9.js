import{r as t,j as h}from"./iframe-BOEgomFY.js";import{I as n}from"./input-8YHcm5ti.js";import"./FormControl-D37Fn8y0.js";import"./styled-BMCVJyWx.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B6gfc5sY.js";import"./isMuiElement-Bf6F_2WO.js";import"./TextField-DKXv7_ip.js";import"./useId-DfYzE2b8.js";import"./Select-tTbiwVb4.js";import"./formControlState-Dq1zat_P.js";import"./List-gGLNKbcG.js";import"./useSlotProps-v6wrWMpK.js";import"./resolveComponentProps-DtOmBmP4.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CDGGrJEl.js";import"./Paper-AT6iWgtF.js";import"./TransitionGroupContext-CDEAkzgg.js";import"./index-DQXJKHYz.js";import"./index-BwK426Sg.js";import"./Grow-Dgl558nA.js";import"./useTheme-Blpu_Sfd.js";import"./getReactElementRef-BclllGOx.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BONlEAG5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-C-4bjezr.js";import"./createSvgIcon-y6GUQK9N.js";import"./InputBase-DSuvVq8E.js";import"./Typography-CgdaMjzI.js";const P={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:m=>{const[i,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),g=x=>{const o=x.target.value;u(o),/^[0-9\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only Number is allowed"))};return h.jsx(n,{...m,value:i,onChange:g,error:c,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      if (!/^[0-9\\s]*$/.test(val)) {
        setError(true);
        setHelperText('Only Number is allowed');
      } else {
        setError(false);
        setHelperText('');
      }
    };
    return <Input {...args} value={value} onChange={handleChange} error={error} helperText={helperText} />;
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const Q=["Number"];export{e as Number,Q as __namedExportsOrder,P as default};

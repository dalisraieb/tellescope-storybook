import{b as t,j as g}from"./iframe-DHkDeS4D.js";import{I as p}from"./input-CzkZCFsu.js";import"./FormControl-BhF826TK.js";import"./TransitionGroupContext-CbOHklGW.js";import"./utils-iop7lDec.js";import"./useFormControl-DnPIpqAP.js";import"./useId-C77_bDNT.js";import"./Select-6Z79SygO.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-SfLOyeDi.js";import"./index-Cxm1fEVQ.js";import"./index-D4MwsqUW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-C2P4Wf-q.js";import"./FormHelperText-DGqlO1Sk.js";const w={title:"ATOMS/Input",component:p,argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium"},render:i=>{const[m,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const s=h.target.value;u(s),/^[a-zA-Z\s]*$/.test(s)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(p,{...i,value:m,onChange:x,error:c,helperText:d})}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    appearance: 'standard',
    size: "medium"
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const M=["Text"];export{e as Text,M as __namedExportsOrder,w as default};

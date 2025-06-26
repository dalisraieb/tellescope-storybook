import{b as t,j as g}from"./iframe-B7GmmWET.js";import{I as p}from"./input-DfWduFy2.js";import"./Select-CuzgQdQR.js";import"./TransitionGroupContext-DH3ylQVC.js";import"./InputBase-BawLYOb4.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CQZufoXh.js";import"./useId-XaYbKb2A.js";import"./index-C27TS9xd.js";import"./index-BFA7o-jJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-2es58OvH.js";const j={title:"ATOMS/Input",component:p,argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium"},render:i=>{const[u,c]=t.useState(""),[m,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const s=h.target.value;c(s),/^[a-zA-Z\s]*$/.test(s)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(p,{...i,value:u,onChange:x,error:m,helperText:d})}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const A=["Text"];export{e as Text,A as __namedExportsOrder,j as default};

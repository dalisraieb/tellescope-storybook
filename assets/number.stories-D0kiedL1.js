import{b as t,j as h}from"./iframe-B7GmmWET.js";import{I as p}from"./input-DfWduFy2.js";import"./Select-CuzgQdQR.js";import"./TransitionGroupContext-DH3ylQVC.js";import"./InputBase-BawLYOb4.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CQZufoXh.js";import"./useId-XaYbKb2A.js";import"./index-C27TS9xd.js";import"./index-BFA7o-jJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-2es58OvH.js";const j={title:"ATOMS/Input",component:p,argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium"},render:u=>{const[m,i]=t.useState(""),[c,r]=t.useState(!1),[d,s]=t.useState(""),g=x=>{const a=x.target.value;i(a),/^[0-9\s]*$/.test(a)?(r(!1),s("")):(r(!0),s("Only Number is allowed"))};return h.jsx(p,{...u,value:m,onChange:g,error:c,helperText:d})}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const z=["Number"];export{e as Number,z as __namedExportsOrder,j as default};

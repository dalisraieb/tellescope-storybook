import{b as t,j as h}from"./iframe-pqJXIrR0.js";import{I as p}from"./input-DCXH9eNP.js";import"./FormControl-DAMVBQp0.js";import"./TransitionGroupContext-C8yxHfzh.js";import"./utils-iop7lDec.js";import"./useFormControl-C-KOYPA3.js";import"./useId-CU7IDVFO.js";import"./Select-CSN2hFw2.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DV9Xdpa-.js";import"./index-DBMPwtkS.js";import"./index-D5nfPDNt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-CA1eWsW_.js";import"./Typography-BnYRhljd.js";import"./FormHelperText-CW492ymX.js";const M={title:"ATOMS/FormInputs/Input",component:p,argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium"},render:m=>{const[u,i]=t.useState(""),[c,r]=t.useState(!1),[d,s]=t.useState(""),g=x=>{const a=x.target.value;i(a),/^[0-9\s]*$/.test(a)?(r(!1),s("")):(r(!0),s("Only Number is allowed"))};return h.jsx(p,{...m,value:u,onChange:g,error:c,helperText:d})}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const _=["Number"];export{e as Number,_ as __namedExportsOrder,M as default};

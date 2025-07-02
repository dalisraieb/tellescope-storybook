import{b as t,j as h}from"./iframe-cG-0_CPm.js";import{I as p}from"./input-MxhFUAyV.js";import"./FormControl-CVDjBwdb.js";import"./TransitionGroupContext-Q0M-j55S.js";import"./utils-iop7lDec.js";import"./useFormControl-COLmt8lF.js";import"./useId-CiGQ-sYP.js";import"./Select-zI9tPuai.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DSOlMuUk.js";import"./index-D6JOygL5.js";import"./index-BlZ5Tbaw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-dDeKaFoy.js";import"./Typography-BKfEMICe.js";const V={title:"ATOMS/FormInputs/Input",component:p,parameters:{controls:{exclude:["label"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:m=>{const[u,i]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),x=g=>{const s=g.target.value;i(s),/^[0-9\s]*$/.test(s)?(r(!1),a("")):(r(!0),a("Only Number is allowed"))};return h.jsx(p,{...m,value:u,onChange:x,error:c,helperText:d})}};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const w=["Number"];export{e as Number,w as __namedExportsOrder,V as default};

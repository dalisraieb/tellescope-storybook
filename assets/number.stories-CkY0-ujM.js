import{b as t,j as h}from"./iframe-BgjesgQg.js";import{I as p}from"./input-hYFv0K2y.js";import"./FormControl-BvCggP1j.js";import"./TransitionGroupContext-CLlTie2B.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-YTI9_HU0.js";import"./isMuiElement-DaA2x2kF.js";import"./useId-DP9OkCxR.js";import"./Select-Dnj5o-UP.js";import"./formControlState-Dq1zat_P.js";import"./List-BmU6gkgd.js";import"./useSlotProps-Cmui656I.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D6IPu2VR.js";import"./index-ZbsjeBzv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-LfO21FU7.js";import"./createSvgIcon-iIuMGR86.js";import"./InputBase-D3eESvJZ.js";import"./Typography-652LhfSf.js";const A={title:"ATOMS/FormInputs/Input",component:p,parameters:{controls:{exclude:["label"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:m=>{const[i,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),x=g=>{const s=g.target.value;u(s),/^[0-9\s]*$/.test(s)?(r(!1),a("")):(r(!0),a("Only Number is allowed"))};return h.jsx(p,{...m,value:i,onChange:x,error:c,helperText:d})}};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const F=["Number"];export{e as Number,F as __namedExportsOrder,A as default};

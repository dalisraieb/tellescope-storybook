import{r as t,j as h}from"./iframe-DccEvDzC.js";import{I as n}from"./input-x3JIdKx9.js";import"./FormControl-Cmj0kEMY.js";import"./styled-Cfu_AvQ7.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-v0wCab-t.js";import"./isMuiElement-joNQ-oVj.js";import"./TextField-Cs5v_Pd1.js";import"./useId-DAXsOMtQ.js";import"./Select-EjcNZfqg.js";import"./formControlState-Dq1zat_P.js";import"./List-B6j4edsR.js";import"./useSlotProps-4Lu9Nojn.js";import"./resolveComponentProps-D7A_zo3W.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-xbtmyUFd.js";import"./Paper-CzlpFu-5.js";import"./TransitionGroupContext-DT2Zqife.js";import"./index-EoyXtuYd.js";import"./index-k-8e6fLA.js";import"./Grow-BqP7IeYW.js";import"./useTheme-C5CGHMgP.js";import"./getReactElementRef-wxbblr7K.js";import"./ownerWindow-DIR61fab.js";import"./Modal-jeFbmNzL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DIa1ppNA.js";import"./createSvgIcon-CYhW7ZJ1.js";import"./InputBase-C9l8h_le.js";import"./Typography-DOrtDJl4.js";const P={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:m=>{const[i,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),g=x=>{const o=x.target.value;u(o),/^[0-9\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only Number is allowed"))};return h.jsx(n,{...m,value:i,onChange:g,error:c,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

import{r as t,j as h}from"./iframe-B635ogeX.js";import{I as n}from"./input-1VOS5SxT.js";import"./FormControl-DjzAj70N.js";import"./styled-D_JRszTj.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Q5Xwe7A9.js";import"./isMuiElement-1gBlwsmZ.js";import"./TextField-D6ik_oxR.js";import"./useId-DOVApbVR.js";import"./Select-CVOI_XZF.js";import"./formControlState-Dq1zat_P.js";import"./List-Bh5MpXX8.js";import"./useSlotProps-B0axK7bx.js";import"./resolveComponentProps-C1ixA3CJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-BqFI7Rpv.js";import"./Paper-CrNB3hHz.js";import"./TransitionGroupContext-B-FBxGae.js";import"./index-DG8fRf4y.js";import"./index-DWA8G4Dm.js";import"./Grow-JzYB1-ex.js";import"./getReactElementRef-BxFG5RlB.js";import"./ownerWindow-DIR61fab.js";import"./Modal-NfOny6sb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Cf6RMG8v.js";import"./createSvgIcon-BdBhm6j3.js";import"./InputBase-BO8XgWSZ.js";import"./Typography-CshVcec5.js";const K={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:m=>{const[i,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),g=x=>{const o=x.target.value;u(o),/^[0-9\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only Number is allowed"))};return h.jsx(n,{...m,value:i,onChange:g,error:c,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const P=["Number"];export{e as Number,P as __namedExportsOrder,K as default};

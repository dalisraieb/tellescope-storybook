import{r as t,j as h}from"./iframe-BIRbnDU3.js";import{I as n}from"./input-CM_-x6T2.js";import"./FormControl-BJPLsCx9.js";import"./styled-BQzQxZQg.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BH6yyn_Y.js";import"./isMuiElement-Dhbmfky1.js";import"./TextField-DHc1r9LT.js";import"./useId-C-divviP.js";import"./Select-DHZTV8S8.js";import"./formControlState-Dq1zat_P.js";import"./List-D-5zpCoO.js";import"./useSlotProps-ODbKV4Mg.js";import"./resolveComponentProps-BCcY2dCN.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cm4fgxMA.js";import"./Paper-rDORrwMN.js";import"./TransitionGroupContext-BaULKsg4.js";import"./index-DhMiAOT7.js";import"./index-CSL-6jbx.js";import"./Grow-BrjM973w.js";import"./useTheme-CdO6g5nq.js";import"./getReactElementRef-76HF8eBV.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Bs-D53QN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-BFmAtxsm.js";import"./createSvgIcon-Dj-KrJjm.js";import"./InputBase-fzMASiwB.js";import"./Typography-Cd3v5_Xb.js";const P={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:m=>{const[i,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),g=x=>{const o=x.target.value;u(o),/^[0-9\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only Number is allowed"))};return h.jsx(n,{...m,value:i,onChange:g,error:c,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

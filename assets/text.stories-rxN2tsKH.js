import{r as t,j as g}from"./iframe-Bv6dwyi6.js";import{I as n}from"./input-JQg3Uu4n.js";import"./FormControl-DtIj0zbc.js";import"./styled-1wupYI6N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DVbzj1df.js";import"./isMuiElement-Cd5s-INa.js";import"./TextField-OODcnAKk.js";import"./useId-5SlOnbtB.js";import"./Select-DgVd0jcT.js";import"./formControlState-Dq1zat_P.js";import"./List-CZrgSkRM.js";import"./useSlotProps-B-IxTsoN.js";import"./resolveComponentProps-C72E2f_V.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B_DK4l75.js";import"./Paper-CpZCUC_L.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./index-BaZz6jG6.js";import"./index-Bn2X2bTa.js";import"./Grow-ozNc40uE.js";import"./useTheme-Chg0PB4m.js";import"./getReactElementRef-Dq-Larem.js";import"./ownerWindow-DIR61fab.js";import"./Modal-84UeeU9m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Bh7QF-ia.js";import"./createSvgIcon-BJSFEBnp.js";import"./InputBase-BELbqXUV.js";import"./Typography-YZ__YNto.js";const N={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:i=>{const[m,c]=t.useState(""),[u,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const o=h.target.value;c(o),/^[a-zA-Z\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(n,{...i,value:m,onChange:x,error:u,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const P=["Text"];export{e as Text,P as __namedExportsOrder,N as default};

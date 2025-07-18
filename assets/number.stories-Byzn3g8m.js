import{r as t,j as h}from"./iframe-CQw1bh_3.js";import{I as n}from"./input-Dwkb1V7Z.js";import"./FormControl-BvfGlV5i.js";import"./styled-0urVwbhR.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D7aixEVT.js";import"./isMuiElement-c5mTnCJM.js";import"./TextField-D7RqfJbV.js";import"./useId-CBKkpWLc.js";import"./Select-BZlqZEy6.js";import"./formControlState-Dq1zat_P.js";import"./List-BRMYBShm.js";import"./useSlotProps-CC53gLXq.js";import"./resolveComponentProps-BAz9eB7D.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CUAEDxbs.js";import"./Paper-DoXoRAIi.js";import"./TransitionGroupContext-ucckMPrU.js";import"./index-BU1ft_YN.js";import"./index-D7rk0scn.js";import"./Grow-DZ6JOMQo.js";import"./useTheme-CONGIyUh.js";import"./getReactElementRef-BFTcAmDX.js";import"./ownerWindow-DIR61fab.js";import"./Modal-B5tUVl_X.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DKLpkiav.js";import"./createSvgIcon-CPZXexn_.js";import"./InputBase-G_Xq6-VF.js";import"./Typography-CETEvHWw.js";const P={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:m=>{const[i,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),g=x=>{const o=x.target.value;u(o),/^[0-9\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only Number is allowed"))};return h.jsx(n,{...m,value:i,onChange:g,error:c,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

import{r as t,j as g}from"./iframe-B6hPRLvE.js";import{I as n}from"./input-DNcCrFuG.js";import"./FormControl-1sqMHBwx.js";import"./styled-Rc4ikHLI.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BtT_9nwa.js";import"./isMuiElement-B_mmvVf4.js";import"./TextField-CDn_BtSu.js";import"./useId-BR_BWiP_.js";import"./Select-CFxqwodU.js";import"./formControlState-Dq1zat_P.js";import"./List-ChGWsoRI.js";import"./useSlotProps-BuwsEpD8.js";import"./resolveComponentProps-CnB1lgEl.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B4QmwxA7.js";import"./Paper-CFhDzt5U.js";import"./TransitionGroupContext-Dj08XMFC.js";import"./index-gQzC7Ad2.js";import"./index-BieRKVp6.js";import"./Grow-BpKX7UDY.js";import"./useTheme-5qJboM6u.js";import"./getReactElementRef-BZdDpp7s.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DNwEdGq-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-CfTk7emU.js";import"./createSvgIcon-Cd6zCl4P.js";import"./InputBase-Ps_PzXNt.js";import"./Typography-BvbMjAlR.js";const N={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:i=>{const[m,c]=t.useState(""),[u,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const o=h.target.value;c(o),/^[a-zA-Z\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(n,{...i,value:m,onChange:x,error:u,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

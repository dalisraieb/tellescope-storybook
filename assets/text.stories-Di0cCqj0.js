import{b as t,j as g}from"./iframe-DcQCorcF.js";import{I as n}from"./input-BnUIuVii.js";import"./FormControl-KyJaZbTt.js";import"./styled-BwxNTMYu.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DUshowLh.js";import"./isMuiElement-Bs55rATV.js";import"./useId-JwLuVtQu.js";import"./Select-DiB2dLpw.js";import"./formControlState-Dq1zat_P.js";import"./List-C5Yomo3v.js";import"./useSlotProps-kzTmx_RL.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-DB_VBoO3.js";import"./index-M7CxruzB.js";import"./index-DS_KXk_Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Cq1AqgbH.js";import"./createSvgIcon-B8TgDHxc.js";import"./InputBase-BDI_5ZKH.js";import"./Typography-CrfA0lvj.js";const F={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:i=>{const[m,c]=t.useState(""),[u,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const s=h.target.value;c(s),/^[a-zA-Z\s]*$/.test(s)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(n,{...i,value:m,onChange:x,error:u,helperText:d})}};var o,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const R=["Text"];export{e as Text,R as __namedExportsOrder,F as default};

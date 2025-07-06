import{b as t,j as g}from"./iframe-C5I7zUGg.js";import{I as n}from"./input-DrnWkuHt.js";import"./FormControl-B9RF-G-A.js";import"./TransitionGroupContext-BuuAjFk1.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BLPrbtBA.js";import"./isMuiElement-BQkK_zk6.js";import"./useId-B06uzprO.js";import"./Select-a55uB6rt.js";import"./formControlState-Dq1zat_P.js";import"./List-mmoQ_dlE.js";import"./useSlotProps-BWY3cnJ5.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Bf9KfrAq.js";import"./index-p93MzeW2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-BsnZG7tq.js";import"./createSvgIcon-B4GBH7Cj.js";import"./InputBase-CVo7mlo-.js";import"./Typography-DuF830wv.js";const $={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{exclude:["label"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:i=>{const[m,u]=t.useState(""),[c,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const s=h.target.value;u(s),/^[a-zA-Z\s]*$/.test(s)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(n,{...i,value:m,onChange:x,error:c,helperText:d})}};var o,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const F=["Text"];export{e as Text,F as __namedExportsOrder,$ as default};

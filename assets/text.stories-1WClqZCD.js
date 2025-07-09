import{b as t,j as g}from"./iframe-MlT4uNqk.js";import{I as n}from"./input-DHOHPoqs.js";import"./FormControl-CFVprfL6.js";import"./styled-uAf5yWmA.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D8WB3yfs.js";import"./isMuiElement-CEp5Ye4Q.js";import"./useId-CyR9ZBBC.js";import"./Select-DNsqDj-L.js";import"./formControlState-Dq1zat_P.js";import"./List-CzCOLpp6.js";import"./useSlotProps-BcOVKQAO.js";import"./isHostComponent-DVu5iVWx.js";import"./TransitionGroupContext-UBgLjG1_.js";import"./index-C-8GXCC5.js";import"./index-Dh7Fyga5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-3UtnvOT2.js";import"./createSvgIcon-j_d6Q5Pl.js";import"./InputBase-DD6AQtSv.js";import"./Typography-Dlx4VT3Z.js";const F={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:i=>{const[m,c]=t.useState(""),[u,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const s=h.target.value;c(s),/^[a-zA-Z\s]*$/.test(s)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(n,{...i,value:m,onChange:x,error:u,helperText:d})}};var o,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

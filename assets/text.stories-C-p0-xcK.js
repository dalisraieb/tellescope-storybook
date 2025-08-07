import{r as t,j as g}from"./iframe-C7YkNvSQ.js";import{I as l}from"./input-cJKOjYWy.js";import"./FormControl-DmS9Qp8c.js";import"./styled-9bVfkw6q.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./isMuiElement-4jqovnI5.js";import"./TextField-CKlHBCga.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C4CjHbyO.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useTimeout-BzjaGR02.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-4AeG_tC3.js";import"./useControlled-CDtRUcdo.js";import"./formControlState-Dq1zat_P.js";import"./createSvgIcon-CAcL5gG4.js";import"./InputBase-wxT8anmG.js";import"./InputLabel-BSDcvnkt.js";import"./FormLabel-Bxcy2z6E.js";import"./Typography-CIh4BeGT.js";const X={title:"ATOMS/FormInputs/Input",component:l,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:n=>{const[m,c]=t.useState(""),[u,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const o=h.target.value;c(o),/^[a-zA-Z\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(l,{...n,value:m,onChange:x,error:u,helperText:d})}};var s,p,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Y=["Text"];export{e as Text,Y as __namedExportsOrder,X as default};

import{r as t,j as h}from"./iframe-C7YkNvSQ.js";import{I as i}from"./input-cJKOjYWy.js";import"./FormControl-DmS9Qp8c.js";import"./styled-9bVfkw6q.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./isMuiElement-4jqovnI5.js";import"./TextField-CKlHBCga.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C4CjHbyO.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useTimeout-BzjaGR02.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-4AeG_tC3.js";import"./useControlled-CDtRUcdo.js";import"./formControlState-Dq1zat_P.js";import"./createSvgIcon-CAcL5gG4.js";import"./InputBase-wxT8anmG.js";import"./InputLabel-BSDcvnkt.js";import"./FormLabel-Bxcy2z6E.js";import"./Typography-CIh4BeGT.js";const Y={title:"ATOMS/FormInputs/Input",component:i,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:l=>{const[n,u]=t.useState(""),[c,r]=t.useState(!1),[d,o]=t.useState(""),g=x=>{const a=x.target.value;u(a),/^[0-9\s]*$/.test(a)?(r(!1),o("")):(r(!0),o("Only Number is allowed"))};return h.jsx(i,{...l,value:n,onChange:g,error:c,helperText:d})}};var s,p,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Z=["Number"];export{e as Number,Z as __namedExportsOrder,Y as default};

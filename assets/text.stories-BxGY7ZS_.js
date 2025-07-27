import{r as t,j as g}from"./iframe-NAPhPX1u.js";import{I as n}from"./input-CVkLqA4G.js";import"./FormControl-BmN-RmyH.js";import"./styled-DO-91wXW.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-bl8w57rs.js";import"./isMuiElement-GCpe9NcE.js";import"./TextField-DE9IkZ7a.js";import"./useId-0sbXxxQP.js";import"./Select-Cf1fb45c.js";import"./formControlState-Dq1zat_P.js";import"./List-DOWCaeCd.js";import"./useSlotProps-CXKkWSe0.js";import"./resolveComponentProps-BUujQf9b.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-CG_60NpA.js";import"./Paper-B2ewq_WJ.js";import"./TransitionGroupContext-C90OWFUl.js";import"./index-Dcz_RGR5.js";import"./index-BgztMLLJ.js";import"./Grow-D3PY-YRs.js";import"./useTheme-CuDTbWok.js";import"./getReactElementRef-DvA4X375.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Dy9YtBPR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Coj7fk6E.js";import"./createSvgIcon-CBEcOZsh.js";import"./InputBase-DjT-u5ZZ.js";import"./Typography-PG28g8IJ.js";const N={title:"ATOMS/FormInputs/Input",component:n,parameters:{controls:{include:["appearance","size"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}}},e={args:{appearance:"standard",size:"medium",label:"Label"},render:i=>{const[m,c]=t.useState(""),[u,r]=t.useState(!1),[d,a]=t.useState(""),x=h=>{const o=h.target.value;c(o),/^[a-zA-Z\s]*$/.test(o)?(r(!1),a("")):(r(!0),a("Only alphabetic text is allowed"))};return g.jsx(n,{...i,value:m,onChange:x,error:u,helperText:d})}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

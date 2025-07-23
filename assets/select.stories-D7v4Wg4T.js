import{r as o,j as e}from"./iframe-Bv6dwyi6.js";import{T as m}from"./table-cell-CPkfm7Uu.js";import{S as C}from"./select-Dl4qvc58.js";import{M as t}from"./MenuItem-9FrNM_dI.js";import"./Star-DdzjKHTg.js";import"./createSvgIcon-CKdMn4wO.js";import"./createSvgIcon-BJSFEBnp.js";import"./styled-1wupYI6N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Cd5s-INa.js";import"./useTimeout-B_DK4l75.js";import"./useId-5SlOnbtB.js";import"./useControlled-Bh7QF-ia.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./TableCell-DAidFtZ1.js";import"./Stack-BfX3vPkc.js";import"./FormControl-DtIj0zbc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DVbzj1df.js";import"./Select-DgVd0jcT.js";import"./formControlState-Dq1zat_P.js";import"./List-CZrgSkRM.js";import"./useSlotProps-B-IxTsoN.js";import"./resolveComponentProps-C72E2f_V.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CpZCUC_L.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./index-BaZz6jG6.js";import"./index-Bn2X2bTa.js";import"./Grow-ozNc40uE.js";import"./useTheme-Chg0PB4m.js";import"./getReactElementRef-Dq-Larem.js";import"./Modal-84UeeU9m.js";import"./InputBase-BELbqXUV.js";import"./Chip-Cjw0dkUG.js";import"./ButtonBase-_JbzIVNU.js";import"./dividerClasses-CeLMdPFz.js";const Z={title:"ATOMS/TableControlElements/TableCell",component:m,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(m,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: 'none',
    hasValue: true
  },
  render: args => {
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    const [value, setValue] = useState<string | string[]>([]);
    useEffect(() => {
      setValue(hasValue ? ['Organization'] : []);
    }, [hasValue]);
    return <TableCell {...rest}>\r
                <SelectBase multiple={true} appearance="table" value={value} onChange={e => setValue(e.target.value)} size="medium" sx={{
        width: "300px"
      }}>\r
                    <MenuItem value="Organization" key="Organization">Organization</MenuItem>\r
                    <MenuItem value="Synt to Healthie" key="Synt to Healthie">Synt to Healthie</MenuItem>\r
                    <MenuItem value="Content campaign" key="Content campaign">Content campaign</MenuItem>\r
                    <MenuItem value="Chip 1" key="Chip 1">Chip 1</MenuItem>\r
                    <MenuItem value="Chip 2" key="Chip 2">Chip 2</MenuItem>\r
                    <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>\r
                </SelectBase>\r
            </TableCell>;
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ee=["Select"];export{r as Select,ee as __namedExportsOrder,Z as default};

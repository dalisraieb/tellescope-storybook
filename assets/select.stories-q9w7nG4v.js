import{r as a,j as e}from"./iframe-CpdnR0i2.js";import{T as l}from"./table-cell-5sh2CBbl.js";import{S as C}from"./select-y-F9G4j3.js";import{S as g}from"./Star-BqTWP5ux.js";import{M as t}from"./MenuItem-CY6_J7Gc.js";import"./TableCell-DhamWoF8.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./Stack-Bd6jq2pn.js";import"./FormControl-8E0NZ6Fd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./isMuiElement-5-QtcHpW.js";import"./InputLabel-CkLjBIwK.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BvCR-wSo.js";import"./Select-DbmNEHLt.js";import"./useSlotProps-DcuCg741.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k7JvqZ8G.js";import"./Paper-CL1wgyoG.js";import"./Grow-CSCmvqx_.js";import"./useTheme-dL_JtiI5.js";import"./utils-Be2lOGi8.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./useTimeout-BgZTaRCc.js";import"./getReactElementRef-dg5jktwz.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-DFczexqp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B7_zldcA.js";import"./useControlled-d9yX6gVw.js";import"./createSvgIcon-C4MRlNQH.js";import"./InputBase-DoBoD0Ub.js";import"./Chip-Cxo-wOmO.js";import"./ButtonBase-DfyOkDKJ.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./createSvgIcon-C3FiYK1r.js";import"./listItemTextClasses-Cs2njzJp.js";import"./dividerClasses-DwUrptCk.js";const ne={title:"ATOMS/TableControlElements/TableCell",component:l,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},r={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...u}=s,[c,o]=a.useState([]);return a.useEffect(()=>{o(i?["Organization"]:[])},[i]),e.jsx(l,{...u,icon:e.jsx(g,{}),children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>o(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    iconPosition: 'none',
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
    return <TableCell {...rest} icon={<StarIcon />}>\r
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const pe=["Select"];export{r as Select,pe as __namedExportsOrder,ne as default};

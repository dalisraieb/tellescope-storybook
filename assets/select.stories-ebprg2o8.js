import{r as o,j as e}from"./iframe-CM3h47Pf.js";import{T as l}from"./table-cell-Dwt-87al.js";import{S as C}from"./select-DzcQDPtY.js";import{S as g}from"./Star-DHQd8crR.js";import{M as t}from"./MenuItem-BiGuVhex.js";import"./TableCell-CSp__xTK.js";import"./styled-DspZaNH0.js";import"./generateUtilityClasses-BkYpawWM.js";import"./Stack-Dif7eGMF.js";import"./FormControl-DNSu1jEy.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BCi-nmTG.js";import"./isMuiElement-DnV2LNbe.js";import"./Select-BL39qYkB.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-K5XpL-Os.js";import"./useSlotProps-933pvwWH.js";import"./resolveComponentProps--03T1_O3.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-RdUEBmnf.js";import"./Paper-Baj6TKFv.js";import"./Grow-9zfcWsEt.js";import"./useTheme-Dl-SHv7N.js";import"./utils-BCjB-yJc.js";import"./TransitionGroupContext-DluSgF3d.js";import"./index-BGWVLkds.js";import"./index-Bu34i8Fg.js";import"./getReactElementRef-TcbM6XSU.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DJKmJHn4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BdCPbg8P.js";import"./useControlled-nTii91Zb.js";import"./useId-BRHASpNm.js";import"./createSvgIcon-DWMlvmED.js";import"./InputBase-6wqBhyI4.js";import"./Chip-DK8sHTPe.js";import"./ButtonBase-DVaQIUUB.js";import"./useIsFocusVisible-DCSkjDCX.js";import"./createSvgIcon-g6ki7VAI.js";import"./listItemTextClasses-8cn6mZSo.js";import"./dividerClasses-DV1b1S48.js";const ae={title:"ATOMS/TableControlElements/TableCell",component:l,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},r={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...u}=s,[c,a]=o.useState([]);return o.useEffect(()=>{a(i?["Organization"]:[])},[i]),e.jsx(l,{...u,icon:e.jsx(g,{}),children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>a(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const oe=["Select"];export{r as Select,oe as __namedExportsOrder,ae as default};

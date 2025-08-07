import{r as a,j as e}from"./iframe-C7YkNvSQ.js";import{T as l}from"./table-cell-Y0Fbznlw.js";import{S as C}from"./select-2vUKkyk2.js";import{S as g}from"./Star-U0nG9LrA.js";import{M as t}from"./MenuItem-BzwDd5tb.js";import"./TableCell-DYsjNFJ-.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./Stack-BPribNI5.js";import"./FormControl-DmS9Qp8c.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./isMuiElement-4jqovnI5.js";import"./InputLabel-BSDcvnkt.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bxcy2z6E.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C4CjHbyO.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useTimeout-BzjaGR02.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-4AeG_tC3.js";import"./useControlled-CDtRUcdo.js";import"./createSvgIcon-CAcL5gG4.js";import"./InputBase-wxT8anmG.js";import"./Chip-BVuNbYRK.js";import"./ButtonBase-DinbBO9G.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./createSvgIcon-CmLukg3o.js";import"./listItemTextClasses-BVuUz09p.js";import"./dividerClasses-6wmrs3Ei.js";const ne={title:"ATOMS/TableControlElements/TableCell",component:l,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},r={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...u}=s,[c,o]=a.useState([]);return a.useEffect(()=>{o(i?["Organization"]:[])},[i]),e.jsx(l,{...u,icon:e.jsx(g,{}),children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>o(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

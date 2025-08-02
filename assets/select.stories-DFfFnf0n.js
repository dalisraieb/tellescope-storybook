import{r as o,j as e}from"./iframe-DfEpVtbN.js";import{T as l}from"./table-cell-0o-0Vwfa.js";import{S as C}from"./select-CKVMQOl7.js";import{S as g}from"./Star-FTPm_6nU.js";import{M as t}from"./MenuItem-ZzlJJzG5.js";import"./TableCell-BO7Hvii1.js";import"./styled-YlXm3ULK.js";import"./generateUtilityClasses-CpTVYkhT.js";import"./Stack-CKDPRdOE.js";import"./FormControl-D-y60pjM.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-UibTObRu.js";import"./isMuiElement-DpfzEnnW.js";import"./Select-DEww3rqc.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cqsq5E1F.js";import"./useSlotProps-CjKilamI.js";import"./resolveComponentProps-B98698j1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-SVx8Dkdh.js";import"./Paper-CbQWkKmk.js";import"./Grow-BqRLbL9l.js";import"./useTheme-D5mibIYT.js";import"./utils-CVehUsqU.js";import"./TransitionGroupContext-DVR4kuzA.js";import"./index-CAcAdmOn.js";import"./index-cZe5j3_t.js";import"./getReactElementRef-CcVow88t.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BEYhj1Ai.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BXwSC4-5.js";import"./useControlled-BnfF5NMN.js";import"./useId-Bxenf6dE.js";import"./createSvgIcon-DAAJIYo0.js";import"./InputBase-Dst-n6oM.js";import"./Chip-CXH0rH-o.js";import"./ButtonBase-ByKSMk68.js";import"./useIsFocusVisible-DyBpABSY.js";import"./createSvgIcon-UJ_-k-8q.js";import"./listItemTextClasses-CyM1XClL.js";import"./dividerClasses-BbO3K7uf.js";const ae={title:"ATOMS/TableControlElements/TableCell",component:l,parameters:{controls:{exclude:["children","StackProps","Icon"]}},argTypes:{iconPosition:{options:["none","left","right"],control:{type:"select"},name:"icon"},hasValue:{control:{type:"boolean"}},icon:{name:"Icon"}}},r={args:{iconPosition:"none",hasValue:!0},render:s=>{const{hasValue:i,...u}=s,[c,a]=o.useState([]);return o.useEffect(()=>{a(i?["Organization"]:[])},[i]),e.jsx(l,{...u,icon:e.jsx(g,{}),children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>a(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{r as o,j as e}from"./iframe-BIRbnDU3.js";import{T as m}from"./table-cell-CrOr8ur6.js";import{S as C}from"./select-BLez6DQG.js";import{M as t}from"./MenuItem-BDVB43Er.js";import"./Star-kGenPfQu.js";import"./createSvgIcon-Co9ghxje.js";import"./createSvgIcon-Dj-KrJjm.js";import"./styled-BQzQxZQg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Dhbmfky1.js";import"./useTimeout-Cm4fgxMA.js";import"./useId-C-divviP.js";import"./useControlled-BFmAtxsm.js";import"./useIsFocusVisible-BmSydHd7.js";import"./TableCell-COutCF5k.js";import"./Stack-p8V-8Yyf.js";import"./FormControl-BJPLsCx9.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BH6yyn_Y.js";import"./Select-DHZTV8S8.js";import"./formControlState-Dq1zat_P.js";import"./List-D-5zpCoO.js";import"./useSlotProps-ODbKV4Mg.js";import"./resolveComponentProps-BCcY2dCN.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-rDORrwMN.js";import"./TransitionGroupContext-BaULKsg4.js";import"./index-DhMiAOT7.js";import"./index-CSL-6jbx.js";import"./Grow-BrjM973w.js";import"./useTheme-CdO6g5nq.js";import"./getReactElementRef-76HF8eBV.js";import"./Modal-Bs-D53QN.js";import"./InputBase-fzMASiwB.js";import"./Chip-BXVl9Dqj.js";import"./ButtonBase-CwbxjUMM.js";import"./dividerClasses-BqfVdti0.js";const Z={title:"ATOMS/TableControlElements/TableCell",component:m,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(m,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

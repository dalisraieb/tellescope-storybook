import{r as o,j as e}from"./iframe-NAPhPX1u.js";import{T as m}from"./table-cell-DSlnjG9E.js";import{S as C}from"./select-DfzJsUG5.js";import{M as t}from"./MenuItem-BJ221rqE.js";import"./Star-R7YRv9D_.js";import"./createSvgIcon-D0Rt455a.js";import"./createSvgIcon-CBEcOZsh.js";import"./styled-DO-91wXW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-GCpe9NcE.js";import"./useTimeout-CG_60NpA.js";import"./useId-0sbXxxQP.js";import"./useControlled-Coj7fk6E.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./TableCell-NDiT1rE_.js";import"./Stack-CQ7BulZm.js";import"./FormControl-BmN-RmyH.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-bl8w57rs.js";import"./Select-Cf1fb45c.js";import"./formControlState-Dq1zat_P.js";import"./List-DOWCaeCd.js";import"./useSlotProps-CXKkWSe0.js";import"./resolveComponentProps-BUujQf9b.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B2ewq_WJ.js";import"./TransitionGroupContext-C90OWFUl.js";import"./index-Dcz_RGR5.js";import"./index-BgztMLLJ.js";import"./Grow-D3PY-YRs.js";import"./useTheme-CuDTbWok.js";import"./getReactElementRef-DvA4X375.js";import"./Modal-Dy9YtBPR.js";import"./InputBase-DjT-u5ZZ.js";import"./Chip-Db7o_Qk_.js";import"./ButtonBase-Dyh98Sbg.js";import"./dividerClasses-anPVgJL4.js";const Z={title:"ATOMS/TableControlElements/TableCell",component:m,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(m,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

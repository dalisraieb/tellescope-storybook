import{r as o,j as e}from"./iframe-C_mvATxf.js";import{T as l}from"./table-cell-d2jWSAfu.js";import{S as C}from"./select-BXD8uIfw.js";import{M as t}from"./MenuItem-DJYbJNDN.js";import"./Star-DcrWNXMk.js";import"./createSvgIcon-BJfsRVye.js";import"./createSvgIcon-Iv4cjDr_.js";import"./styled-D3e7hSdf.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-BRSh3FLT.js";import"./useTimeout-Cd2_LOh1.js";import"./useId-CjGAtGk9.js";import"./useControlled-Cyk4WA3W.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./TableCell-In65ryYW.js";import"./Stack-DsmHLUro.js";import"./FormControl-Cxd88cuH.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B5wV8xKu.js";import"./Select-B9Z0luHz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CcMJvyZX.js";import"./useSlotProps-CJdg0P1D.js";import"./resolveComponentProps-BNjn3TbO.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-y4L9TjWB.js";import"./Grow-CA2fjeE3.js";import"./useTheme-BlUG05El.js";import"./utils-B6yf_fIX.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./index-BmfL9UO7.js";import"./index-BBQBgD7t.js";import"./getReactElementRef-BioJHGsC.js";import"./Modal-DXzE80HE.js";import"./List-B9PzbMud.js";import"./InputBase-BojRxlmd.js";import"./Chip-DpmiigPe.js";import"./ButtonBase-CGQkK_HI.js";import"./listItemTextClasses-DV326QbH.js";import"./dividerClasses-BBsfSVcS.js";const ae={title:"ATOMS/TableControlElements/TableCell",component:l,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(l,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const ie=["Select"];export{r as Select,ie as __namedExportsOrder,ae as default};

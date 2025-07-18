import{r as o,j as e}from"./iframe-B6hPRLvE.js";import{T as m}from"./table-cell-_WOslSYS.js";import{S as C}from"./select-BGqoILpo.js";import{M as t}from"./MenuItem-Q1gmN7vQ.js";import"./Star-DrL5j4OO.js";import"./createSvgIcon-TL-ltilD.js";import"./createSvgIcon-Cd6zCl4P.js";import"./styled-Rc4ikHLI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-B_mmvVf4.js";import"./useTimeout-B4QmwxA7.js";import"./useId-BR_BWiP_.js";import"./useControlled-CfTk7emU.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./TableCell-DPCCfXTh.js";import"./Stack-pVxnj9_9.js";import"./FormControl-1sqMHBwx.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BtT_9nwa.js";import"./Select-CFxqwodU.js";import"./formControlState-Dq1zat_P.js";import"./List-ChGWsoRI.js";import"./useSlotProps-BuwsEpD8.js";import"./resolveComponentProps-CnB1lgEl.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CFhDzt5U.js";import"./TransitionGroupContext-Dj08XMFC.js";import"./index-gQzC7Ad2.js";import"./index-BieRKVp6.js";import"./Grow-BpKX7UDY.js";import"./useTheme-5qJboM6u.js";import"./getReactElementRef-BZdDpp7s.js";import"./Modal-DNwEdGq-.js";import"./InputBase-Ps_PzXNt.js";import"./Chip-CtWo5-rH.js";import"./ButtonBase-1LTz6Pn6.js";import"./dividerClasses-zMu8IGbe.js";const Z={title:"ATOMS/TableControlElements/TableCell",component:m,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(m,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

import{r as o,j as e}from"./iframe-DccEvDzC.js";import{T as m}from"./table-cell-Dzn4G16b.js";import{S as C}from"./select-avApGTAo.js";import{M as t}from"./MenuItem-GQcqo-ak.js";import"./Star-CgbTiwaa.js";import"./createSvgIcon-B3ikaxcm.js";import"./createSvgIcon-CYhW7ZJ1.js";import"./styled-Cfu_AvQ7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-joNQ-oVj.js";import"./useTimeout-xbtmyUFd.js";import"./useId-DAXsOMtQ.js";import"./useControlled-DIa1ppNA.js";import"./useIsFocusVisible-nsLV3YSx.js";import"./TableCell-DGJJq51U.js";import"./Stack-DQLN1x6Z.js";import"./FormControl-Cmj0kEMY.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-v0wCab-t.js";import"./Select-EjcNZfqg.js";import"./formControlState-Dq1zat_P.js";import"./List-B6j4edsR.js";import"./useSlotProps-4Lu9Nojn.js";import"./resolveComponentProps-D7A_zo3W.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CzlpFu-5.js";import"./TransitionGroupContext-DT2Zqife.js";import"./index-EoyXtuYd.js";import"./index-k-8e6fLA.js";import"./Grow-BqP7IeYW.js";import"./useTheme-C5CGHMgP.js";import"./getReactElementRef-wxbblr7K.js";import"./Modal-jeFbmNzL.js";import"./InputBase-C9l8h_le.js";import"./Chip-BY0P0vAX.js";import"./ButtonBase-BQpfw9M-.js";import"./dividerClasses-Dr5gbvf2.js";const Z={title:"ATOMS/TableControlElements/TableCell",component:m,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(m,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

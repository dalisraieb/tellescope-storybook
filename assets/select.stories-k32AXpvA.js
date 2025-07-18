import{r as o,j as e}from"./iframe-CQw1bh_3.js";import{T as m}from"./table-cell-Bi36CrhM.js";import{S as C}from"./select-BZ7Hd2EU.js";import{M as t}from"./MenuItem-DUOQhvfP.js";import"./Star-BSJN2xAC.js";import"./createSvgIcon-D0mVd8bh.js";import"./createSvgIcon-CPZXexn_.js";import"./styled-0urVwbhR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-c5mTnCJM.js";import"./useTimeout-CUAEDxbs.js";import"./useId-CBKkpWLc.js";import"./useControlled-DKLpkiav.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./TableCell-DVv3ONEV.js";import"./Stack-DJd1T9w_.js";import"./FormControl-BvfGlV5i.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D7aixEVT.js";import"./Select-BZlqZEy6.js";import"./formControlState-Dq1zat_P.js";import"./List-BRMYBShm.js";import"./useSlotProps-CC53gLXq.js";import"./resolveComponentProps-BAz9eB7D.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-DoXoRAIi.js";import"./TransitionGroupContext-ucckMPrU.js";import"./index-BU1ft_YN.js";import"./index-D7rk0scn.js";import"./Grow-DZ6JOMQo.js";import"./useTheme-CONGIyUh.js";import"./getReactElementRef-BFTcAmDX.js";import"./Modal-B5tUVl_X.js";import"./InputBase-G_Xq6-VF.js";import"./Chip-Bhz2nqgH.js";import"./ButtonBase-CawyO1_w.js";import"./dividerClasses-Cr81tDjM.js";const Z={title:"ATOMS/TableControlElements/TableCell",component:m,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(m,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

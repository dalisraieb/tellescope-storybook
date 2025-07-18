import{r as o,j as e}from"./iframe-D6WPvDsw.js";import{T as m}from"./table-cell-DREws4R4.js";import{S as C}from"./select-DT0abQCc.js";import{M as t}from"./MenuItem-CMGtjuSE.js";import"./Star-B02olAGE.js";import"./createSvgIcon-l15DWx3n.js";import"./createSvgIcon-V8HVGjoo.js";import"./styled-AX3WQiqK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-tmp0hHY9.js";import"./useTimeout-kuuMuFVN.js";import"./useId-DV-IoEpY.js";import"./useControlled-7GtWE5q9.js";import"./useIsFocusVisible-BVCTFO4q.js";import"./TableCell-BiibN0VZ.js";import"./Stack-QjlE7ymT.js";import"./FormControl-Bvexnv9I.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-j6TWbiTy.js";import"./Select-Bk3sn5xi.js";import"./formControlState-Dq1zat_P.js";import"./List-BxyuLOoB.js";import"./useSlotProps-re4MZg2K.js";import"./resolveComponentProps-DdCxtoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-IUoxnzvH.js";import"./TransitionGroupContext-DkLkXY74.js";import"./index-w00OeCIG.js";import"./index-CjlK8uMj.js";import"./Grow-CxdA_Xp2.js";import"./useTheme-C5UVmkdi.js";import"./getReactElementRef-DbwD0SEZ.js";import"./Modal-CG13Q5kf.js";import"./InputBase-CRatIxq-.js";import"./Chip-D-e2GIwl.js";import"./ButtonBase-BZJrsSUT.js";import"./dividerClasses-BdycyqIl.js";const Z={title:"ATOMS/TableControlElements/TableCell",component:m,parameters:{controls:{exclude:["children","StackProps"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},hasValue:{control:{type:"boolean"}}}},r={args:{icon:"none",hasValue:!0},render:s=>{const{hasValue:a,...u}=s,[c,i]=o.useState([]);return o.useEffect(()=>{i(a?["Organization"]:[])},[a]),e.jsx(m,{...u,children:e.jsxs(C,{multiple:!0,appearance:"table",value:c,onChange:h=>i(h.target.value),size:"medium",sx:{width:"300px"},children:[e.jsx(t,{value:"Organization",children:"Organization"},"Organization"),e.jsx(t,{value:"Synt to Healthie",children:"Synt to Healthie"},"Synt to Healthie"),e.jsx(t,{value:"Content campaign",children:"Content campaign"},"Content campaign"),e.jsx(t,{value:"Chip 1",children:"Chip 1"},"Chip 1"),e.jsx(t,{value:"Chip 2",children:"Chip 2"},"Chip 2"),e.jsx(t,{value:"Chip 3",children:"Chip 3"},"Chip 3")]})})}};var n,p,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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

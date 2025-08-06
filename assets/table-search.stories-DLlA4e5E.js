import{r as o,j as u}from"./iframe-CpdnR0i2.js";import{T as m}from"./table-search-DxhHNQG_.js";import"./input-D6SmNVo1.js";import"./FormControl-8E0NZ6Fd.js";import"./styled-DujYcmrZ.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./isMuiElement-5-QtcHpW.js";import"./TextField-grUENmEg.js";import"./Select-DbmNEHLt.js";import"./useSlotProps-DcuCg741.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k7JvqZ8G.js";import"./Paper-CL1wgyoG.js";import"./Grow-CSCmvqx_.js";import"./useTheme-dL_JtiI5.js";import"./utils-Be2lOGi8.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./useTimeout-BgZTaRCc.js";import"./getReactElementRef-dg5jktwz.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-DFczexqp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B7_zldcA.js";import"./useControlled-d9yX6gVw.js";import"./formControlState-Dq1zat_P.js";import"./createSvgIcon-C4MRlNQH.js";import"./InputBase-DoBoD0Ub.js";import"./InputLabel-CkLjBIwK.js";import"./FormLabel-BvCR-wSo.js";import"./Typography-DUyUrCFr.js";import"./Search-C7SWhrfG.js";import"./createSvgIcon-C3FiYK1r.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./icon-button-Y5vMW5TR.js";import"./IconButton-a3Nxnak7.js";import"./ButtonBase-DfyOkDKJ.js";import"./Stack-Bd6jq2pn.js";import"./Box-Cc3QCFpm.js";const te={title:"ATOMS/TableControlElements/TableSearch",component:m,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},e={args:{hasValue:!0,expanded:!1},render:i=>{const{hasValue:r,expanded:s}=i,[l,t]=o.useState("");return o.useEffect(()=>{t(r?"Organization":"")},[r]),u.jsx(m,{value:l,expanded:s})}};var a,p,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    hasValue: true,
    expanded: false
  },
  render: args => {
    const {
      hasValue,
      expanded
    } = args as StoryProps;
    const [value, setValue] = useState<string>("");
    useEffect(() => {
      if (hasValue) {
        setValue("Organization");
      } else {
        setValue("");
      }
    }, [hasValue]);
    return <TableSearch value={value} expanded={expanded} />;
  }
}`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const oe=["Default"];export{e as Default,oe as __namedExportsOrder,te as default};

import{r as o,j as u}from"./iframe-C7YkNvSQ.js";import{T as m}from"./table-search-CGoSzB8E.js";import"./input-cJKOjYWy.js";import"./FormControl-DmS9Qp8c.js";import"./styled-9bVfkw6q.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./isMuiElement-4jqovnI5.js";import"./TextField-CKlHBCga.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C4CjHbyO.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useTimeout-BzjaGR02.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-4AeG_tC3.js";import"./useControlled-CDtRUcdo.js";import"./formControlState-Dq1zat_P.js";import"./createSvgIcon-CAcL5gG4.js";import"./InputBase-wxT8anmG.js";import"./InputLabel-BSDcvnkt.js";import"./FormLabel-Bxcy2z6E.js";import"./Typography-CIh4BeGT.js";import"./Search-Cule_Y4S.js";import"./createSvgIcon-CmLukg3o.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./icon-button-RetZhsBg.js";import"./IconButton-ydU9r2DX.js";import"./ButtonBase-DinbBO9G.js";import"./Stack-BPribNI5.js";import"./Box-okHX6eyU.js";const te={title:"ATOMS/TableControlElements/TableSearch",component:m,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},e={args:{hasValue:!0,expanded:!1},render:i=>{const{hasValue:r,expanded:s}=i,[l,t]=o.useState("");return o.useEffect(()=>{t(r?"Organization":"")},[r]),u.jsx(m,{value:l,expanded:s})}};var a,p,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

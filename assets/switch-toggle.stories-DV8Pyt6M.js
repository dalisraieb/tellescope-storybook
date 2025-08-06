import{p as y,q as C,g as j,r as d,j as r}from"./iframe-CpdnR0i2.js";import{S as s,G as W}from"./GroupsOutlined-Byviu6vy.js";import{r as I}from"./createSvgIcon-C3FiYK1r.js";import{W as v}from"./WifiCalling3Outlined-CTZ2UQcY.js";import{S as l}from"./Stack-Bd6jq2pn.js";import{T as g}from"./Typography-DUyUrCFr.js";import{B as O}from"./Badge-D_C-h1_3.js";import"./FormControl-8E0NZ6Fd.js";import"./styled-DujYcmrZ.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./isMuiElement-5-QtcHpW.js";import"./FormControlLabel-CnPiBcgg.js";import"./formControlState-Dq1zat_P.js";import"./Switch-pj7-AGL8.js";import"./SwitchBase-COxA6MWJ.js";import"./useControlled-d9yX6gVw.js";import"./ButtonBase-DfyOkDKJ.js";import"./useTimeout-BgZTaRCc.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./useForkRef-k7JvqZ8G.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./createSvgIcon-C4MRlNQH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./usePreviousProps-gH0S_yWp.js";import"./useSlotProps-DcuCg741.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";var a={},p;function B(){if(p)return a;p=1;var e=y();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e(I()),t=C();return a.default=(0,o.default)((0,t.jsx)("path",{d:"M15 1H9v2h6zm-4 13h2V8h-2zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"}),"TimerOutlined"),a}var D=B();const w=j(D),de={title:"ATOMS/Switch/Switch Toggle",component:s,parameters:{controls:{include:[""]}}},i={render:()=>{const[e,o]=d.useState(!1);return r.jsx(s,{color:"info",checked:e,onChange:t=>o(t.target.checked),label:r.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:e?1:0,px:1,transition:"padding 0.3s ease"},children:[r.jsx(w,{sx:{color:e?"rgba(242, 117, 92, 1)":void 0,transition:"color 0.3s ease-in-out"}}),r.jsx(v,{sx:{color:"rgba(242, 117, 92, 1)",opacity:e?1:0,maxWidth:e?24:0,overflow:"hidden",transition:"all 0.3s ease"}})]}),formlabelProps:{sx:{background:e?"rgba(254, 231, 211, 1)":void 0}}})}},c={render:()=>{const[e,o]=d.useState(!1);return r.jsx(s,{color:"info",checked:e,onChange:t=>o(t.target.checked),label:r.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:e?1:0,px:1,transition:"all 0.3s ease"},children:[r.jsx(g,{variant:"body2",sx:{color:"rgba(242, 117, 92, 1)",fontWeight:600,opacity:e?1:0,maxWidth:e?200:0,overflow:"hidden",whiteSpace:"nowrap",transition:"all 0.3s ease",userSelect:"none"},children:"Name"}),r.jsx(g,{variant:"body2",sx:{color:"rgba(242, 117, 92, 1)",fontWeight:600,opacity:e?1:0,maxWidth:e?200:0,overflow:"hidden",whiteSpace:"nowrap",userSelect:"none",transition:"all 0.3s ease"},children:"00:00"}),r.jsx(w,{sx:{color:e?"rgba(242, 117, 92, 1)":void 0,transition:"color 0.3s ease-in-out"}}),r.jsx(v,{sx:{color:"rgba(242, 117, 92, 1)",opacity:e?1:0,maxWidth:e?24:0,overflow:"hidden",transition:"all 0.3s ease"}})]}),formlabelProps:{sx:{background:e?"rgba(254, 231, 211, 1)":void 0}}})}},n={render:()=>{const[e,o]=d.useState(!1);return r.jsx(s,{color:"info",checked:e,onChange:t=>o(t.target.checked),label:r.jsx(l,{sx:{flexDirection:"row",alignItems:"center",gap:1,px:1,transition:"padding 0.3s ease"},children:r.jsx(O,{color:"secondary",variant:"dot",invisible:e,sx:{"& .MuiBadge-badge.MuiBadge-dot":{minWidth:6,height:6,bgcolor:"rgba(139, 92, 242, 1)",top:"10%",right:"10%"}},children:r.jsx(W,{sx:{color:e?"rgba(139, 92, 242, 1)":void 0,transition:"color 0.3s ease-in-out"}})})}),formlabelProps:{sx:{background:e?"rgba(222, 211, 254, 1)":void 0}}})}};var h,m,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <SwitchToggle color="info" checked={checked} onChange={e => setChecked(e.target.checked)} label={<Stack sx={{
      flexDirection: "row",
      alignItems: "center",
      gap: checked ? 1 : 0,
      px: 1,
      transition: "padding 0.3s ease"
    }}>\r
                        <TimerOutlinedIcon sx={{
        color: checked ? "rgba(242, 117, 92, 1)" : undefined,
        transition: "color 0.3s ease-in-out"
      }} />\r
                        <WifiCalling3OutlinedIcon sx={{
        color: "rgba(242, 117, 92, 1)",
        opacity: checked ? 1 : 0,
        maxWidth: checked ? 24 : 0,
        overflow: "hidden",
        transition: "all 0.3s ease"
      }} />\r
                    </Stack>} formlabelProps={{
      sx: {
        background: checked ? 'rgba(254, 231, 211, 1)' : undefined
      }
    }} />;
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,f,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <SwitchToggle color="info" checked={checked} onChange={e => setChecked(e.target.checked)} label={<Stack sx={{
      flexDirection: "row",
      alignItems: "center",
      gap: checked ? 1 : 0,
      px: 1,
      transition: "all 0.3s ease"
    }}>\r
                        <Typography variant="body2" sx={{
        color: "rgba(242, 117, 92, 1)",
        fontWeight: 600,
        opacity: checked ? 1 : 0,
        maxWidth: checked ? 200 : 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        transition: "all 0.3s ease",
        userSelect: "none"
      }}>\r
                            Name\r
                        </Typography>\r
                        <Typography variant="body2" sx={{
        color: "rgba(242, 117, 92, 1)",
        fontWeight: 600,
        opacity: checked ? 1 : 0,
        maxWidth: checked ? 200 : 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        userSelect: "none",
        transition: "all 0.3s ease"
      }}>\r
                            00:00\r
                        </Typography>\r
                        <TimerOutlinedIcon sx={{
        color: checked ? "rgba(242, 117, 92, 1)" : undefined,
        transition: "color 0.3s ease-in-out"
      }} />\r
                        <WifiCalling3OutlinedIcon sx={{
        color: "rgba(242, 117, 92, 1)",
        opacity: checked ? 1 : 0,
        maxWidth: checked ? 24 : 0,
        overflow: "hidden",
        transition: "all 0.3s ease"
      }} />\r
                    </Stack>} formlabelProps={{
      sx: {
        background: checked ? 'rgba(254, 231, 211, 1)' : undefined
      }
    }} />;
  }
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,T,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <SwitchToggle color="info" checked={checked} onChange={e => setChecked(e.target.checked)} label={<Stack sx={{
      flexDirection: "row",
      alignItems: "center",
      gap: 1,
      px: 1,
      transition: "padding 0.3s ease"
    }}>\r
                        <Badge color="secondary" variant="dot" invisible={checked} sx={{
        "& .MuiBadge-badge.MuiBadge-dot": {
          minWidth: 6,
          height: 6,
          bgcolor: "rgba(139, 92, 242, 1)",
          top: "10%",
          right: "10%"
        }
      }}>\r
                            <GroupsOutlinedIcon sx={{
          color: checked ? "rgba(139, 92, 242, 1)" : undefined,
          // mr: 1,
          transition: "color 0.3s ease-in-out"
        }} />\r
                        </Badge>\r
\r
                    </Stack>} formlabelProps={{
      sx: {
        background: checked ? 'rgba(222, 211, 254, 1)' : undefined
      }
    }} />;
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const le=["ProfileTimeTrackingToggle","AppBarTimeTrackingToggle","TeamChatToggle"];export{c as AppBarTimeTrackingToggle,i as ProfileTimeTrackingToggle,n as TeamChatToggle,le as __namedExportsOrder,de as default};

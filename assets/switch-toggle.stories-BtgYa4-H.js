import{b as y,u as _e,_ as Be,c as R,j as a,d as n,r as B,a as W,g as I}from"./iframe-C5I7zUGg.js";import{F as We}from"./FormControl-B9RF-G-A.js";import{F as Ie}from"./FormControlLabel-BHE9_2y4.js";import{S as $e}from"./Switch-DkasAuzG.js";import{r as $}from"./createSvgIcon-Cgq1HHLL.js";import{S as w}from"./Stack-CmCYCfVI.js";import{T as J}from"./Typography-DuF830wv.js";import{a as we,g as Me,c as K,s as de,b as ze}from"./TransitionGroupContext-BuuAjFk1.js";import{u as pe}from"./usePreviousProps-kek496Yb.js";import{u as Q}from"./useSlotProps-BWY3cnJ5.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BLPrbtBA.js";import"./isMuiElement-BQkK_zk6.js";import"./formControlState-Dq1zat_P.js";import"./SwitchBase-C33R3ZU6.js";import"./useControlled-BsnZG7tq.js";import"./ButtonBase-BBeAeCl3.js";import"./useIsFocusVisible-BtJllHTp.js";import"./createSvgIcon-B4GBH7Cj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-B06uzprO.js";import"./isHostComponent-DVu5iVWx.js";function De(r){const{badgeContent:o,invisible:e=!1,max:t=99,showZero:i=!1}=r,d=pe({badgeContent:o,max:t});let l=e;e===!1&&o===0&&!i&&(l=!0);const{badgeContent:s,max:p=t}=l?d:r,g=s&&Number(s)>p?`${p}+`:s;return{badgeContent:s,invisible:l,max:p,displayValue:g}}function qe(r){return Me("MuiBadge",r)}const c=we("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),Le=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],j=10,_=4,Fe=r=>{const{color:o,anchorOrigin:e,invisible:t,overlap:i,variant:d,classes:l={}}=r,s={root:["root"],badge:["badge",d,t&&"invisible",`anchorOrigin${n(e.vertical)}${n(e.horizontal)}`,`anchorOrigin${n(e.vertical)}${n(e.horizontal)}${n(i)}`,`overlap${n(i)}`,o!=="default"&&`color${n(o)}`]};return ze(s,qe,l)},Ne=de("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,o)=>o.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Ae=de("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.badge,o[e.variant],o[`anchorOrigin${n(e.anchorOrigin.vertical)}${n(e.anchorOrigin.horizontal)}${n(e.overlap)}`],e.color!=="default"&&o[`color${n(e.color)}`],e.invisible&&o.invisible]}})(({theme:r})=>{var o;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:j*2,lineHeight:1,padding:"0 6px",height:j*2,borderRadius:j,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.keys(((o=r.vars)!=null?o:r).palette).filter(e=>{var t,i;return((t=r.vars)!=null?t:r).palette[e].main&&((i=r.vars)!=null?i:r).palette[e].contrastText}).map(e=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main,color:(r.vars||r).palette[e].contrastText}})),{props:{variant:"dot"},style:{borderRadius:_,height:_*2,minWidth:_*2,padding:0}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}}),Ee=y.forwardRef(function(o,e){var t,i,d,l,s,p;const g=_e({props:o,name:"MuiBadge"}),{anchorOrigin:M={vertical:"top",horizontal:"right"},className:me,component:he,components:z={},componentsProps:D={},children:fe,overlap:q="rectangular",color:L="default",invisible:ve=!1,max:be=99,badgeContent:F,slots:v,slotProps:b,showZero:N=!1,variant:C="standard"}=g,xe=Be(g,Le),{badgeContent:A,invisible:Oe,max:ke,displayValue:ye}=De({max:be,invisible:ve,badgeContent:F,showZero:N}),Ce=pe({anchorOrigin:M,color:L,overlap:q,variant:C,badgeContent:F}),E=Oe||A==null&&C!=="dot",{color:Te=L,overlap:Pe=q,anchorOrigin:Se=M,variant:V=C}=E?Ce:g,G=V!=="dot"?ye:void 0,T=R({},g,{badgeContent:A,invisible:E,max:ke,displayValue:G,showZero:N,anchorOrigin:Se,color:Te,overlap:Pe,variant:V}),H=Fe(T),U=(t=(i=v==null?void 0:v.root)!=null?i:z.Root)!=null?t:Ne,Z=(d=(l=v==null?void 0:v.badge)!=null?l:z.Badge)!=null?d:Ae,P=(s=b==null?void 0:b.root)!=null?s:D.root,S=(p=b==null?void 0:b.badge)!=null?p:D.badge,Re=Q({elementType:U,externalSlotProps:P,externalForwardedProps:xe,additionalProps:{ref:e,as:he},ownerState:T,className:K(P==null?void 0:P.className,H.root,me)}),je=Q({elementType:Z,externalSlotProps:S,ownerState:T,className:K(H.badge,S==null?void 0:S.className)});return a.jsxs(U,R({},Re,{children:[fe,a.jsx(Z,R({},je,{children:G}))]}))}),f=({formlabelProps:r,label:o,...e})=>{const{sx:t,...i}=r||{};return a.jsx(We,{children:a.jsx(Ie,{control:a.jsx($e,{color:e.color||"info",...e,disableRipple:!0}),label:o,labelPlacement:"start",sx:{m:0,borderRadius:"6px",transition:"background 0.3s ease-in-out",...t},...i})})};f.__docgenInfo={description:"",methods:[],displayName:"SwitchToggle",props:{color:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "info"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"info"'}]},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},formlabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"MuiFormControlLabelProps"},{name:"union",raw:'"label" | "control"',elements:[{name:"literal",value:'"label"'},{name:"literal",value:'"control"'}]}],raw:'Omit<MuiFormControlLabelProps, "label" | "control">'},description:""}},composes:["Omit"]};var u={},X;function Ve(){if(X)return u;X=1;var r=B();Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var o=r($()),e=W();return u.default=(0,o.default)((0,e.jsx)("path",{d:"M15 1H9v2h6zm-4 13h2V8h-2zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"}),"TimerOutlined"),u}var Ge=Ve();const ge=I(Ge);var m={},Y;function He(){if(Y)return m;Y=1;var r=B();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var o=r($()),e=W();return m.default=(0,o.default)([(0,e.jsx)("path",{d:"M16.49 4.5c1.79 0 3.42.73 4.59 1.91l1.06-1.06C20.7 3.9 18.7 3 16.49 3c-2.21 0-4.21.9-5.66 2.34l1.06 1.06c1.19-1.17 2.81-1.9 4.6-1.9"},"0"),(0,e.jsx)("path",{d:"M16.49 6c-1.38 0-2.63.56-3.54 1.46l1.06 1.06c.63-.63 1.51-1.03 2.47-1.03s1.84.39 2.47 1.03l1.06-1.06C19.12 6.56 17.87 6 16.49 6m0 3c-.55 0-1.05.22-1.41.59L16.49 11l1.41-1.41c-.36-.37-.86-.59-1.41-.59"},"1"),(0,e.jsx)("path",{d:"m20.2 14.87-3.67-.73c-.5-.1-.83.2-.9.27l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.55.03 1.03-.43 1.03-1v-4.15c0-.48-.34-.89-.8-.98M5.1 5h2.23l.47 2.35L6.17 9c-.54-1.3-.9-2.63-1.07-4M19 18.9c-1.37-.18-2.7-.53-4-1.07l1.65-1.63 2.35.47z"},"2")],"WifiCalling3Outlined"),m}var Ue=He();const ue=I(Ue);var h={},ee;function Ze(){if(ee)return h;ee=1;var r=B();Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var o=r($()),e=W();return h.default=(0,o.default)((0,e.jsx)("path",{d:"M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zm-7.76-2.78c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74M8.07 16c.09-.23.13-.39.91-.69.97-.38 1.99-.56 3.02-.56s2.05.18 3.02.56c.77.3.81.46.91.69zM12 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"GroupsOutlined"),h}var Je=Ze();const Ke=I(Je),xr={title:"ATOMS/Switch/Switch Toggle",component:f,parameters:{controls:{exclude:["label","formlabelProps","color"]}}},x={render:()=>{const[r,o]=y.useState(!1);return a.jsx(f,{color:"info",checked:r,onChange:e=>o(e.target.checked),label:a.jsxs(w,{sx:{flexDirection:"row",alignItems:"center",gap:r?1:0,px:1,transition:"padding 0.3s ease"},children:[a.jsx(ge,{sx:{color:r?"rgba(242, 117, 92, 1)":void 0,transition:"color 0.3s ease-in-out"}}),a.jsx(ue,{sx:{color:"rgba(242, 117, 92, 0.35)",opacity:r?1:0,maxWidth:r?24:0,overflow:"hidden",transition:"all 0.3s ease"}})]}),formlabelProps:{sx:{background:r?"rgba(254, 231, 211, 1)":void 0}}})}},O={render:()=>{const[r,o]=y.useState(!1);return a.jsx(f,{color:"info",checked:r,onChange:e=>o(e.target.checked),label:a.jsxs(w,{sx:{flexDirection:"row",alignItems:"center",gap:r?1:0,px:1,transition:"all 0.3s ease"},children:[a.jsx(J,{variant:"body2",sx:{color:"rgba(242, 117, 92, 1)",fontWeight:600,opacity:r?1:0,maxWidth:r?200:0,overflow:"hidden",whiteSpace:"nowrap",transition:"all 0.3s ease",userSelect:"none"},children:"Name"}),a.jsx(J,{variant:"body2",sx:{color:"rgba(242, 117, 92, 1)",fontWeight:600,opacity:r?1:0,maxWidth:r?200:0,overflow:"hidden",whiteSpace:"nowrap",userSelect:"none",transition:"all 0.3s ease"},children:"00:00"}),a.jsx(ge,{sx:{color:r?"rgba(242, 117, 92, 1)":void 0,transition:"color 0.3s ease-in-out"}}),a.jsx(ue,{sx:{color:"rgba(242, 117, 92, 0.35)",opacity:r?1:0,maxWidth:r?24:0,overflow:"hidden",transition:"all 0.3s ease"}})]}),formlabelProps:{sx:{background:r?"rgba(254, 231, 211, 1)":void 0}}})}},k={render:()=>{const[r,o]=y.useState(!1);return a.jsx(f,{color:"info",checked:r,onChange:e=>o(e.target.checked),label:a.jsx(w,{sx:{flexDirection:"row",alignItems:"center",gap:1,px:1,transition:"padding 0.3s ease"},children:a.jsx(Ee,{color:"secondary",variant:"dot",invisible:r,sx:{"& .MuiBadge-badge.MuiBadge-dot":{minWidth:6,height:6,bgcolor:"rgba(139, 92, 242, 1)",top:"10%",right:"10%"}},children:a.jsx(Ke,{sx:{color:r?"rgba(139, 92, 242, 1)":void 0,transition:"color 0.3s ease-in-out"}})})}),formlabelProps:{sx:{background:r?"rgba(222, 211, 254, 1)":void 0}}})}};var re,oe,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
        color: "rgba(242, 117, 92, 0.35)",
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
}`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,ie,ne;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
        color: "rgba(242, 117, 92, 0.35)",
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
}`,...(ne=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var se,le,ce;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Or=["ProfileTimeTrackingToggle","AppBarTimeTrackingToggle","TeamChatToggle"];export{O as AppBarTimeTrackingToggle,x as ProfileTimeTrackingToggle,k as TeamChatToggle,Or as __namedExportsOrder,xr as default};

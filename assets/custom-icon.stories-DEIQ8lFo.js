import{b as j,u as k,_,c as h,j as n,d as x}from"./iframe-DHkDeS4D.js";import{I as i}from"./input-CzkZCFsu.js";import{S as d}from"./Star-CC7hDxB7.js";import{S as f}from"./Stack-Cbkqjta9.js";import{T as I}from"./Typography-DLueHzXQ.js";import{a as w,g as R,s as F,c as M,b as $}from"./TransitionGroupContext-CbOHklGW.js";import{u as N,F as U}from"./useFormControl-DnPIpqAP.js";import"./FormControl-BhF826TK.js";import"./utils-iop7lDec.js";import"./useId-C77_bDNT.js";import"./Select-6Z79SygO.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-SfLOyeDi.js";import"./index-Cxm1fEVQ.js";import"./index-D4MwsqUW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-C2P4Wf-q.js";import"./FormHelperText-DGqlO1Sk.js";import"./createSvgIcon-BcIawX6P.js";import"./useIsFocusVisible-BKpNlkVY.js";function W(t){return R("MuiInputAdornment",t)}const y=w("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var S;const O=["children","className","component","disablePointerEvents","disableTypography","position","variant"],D=(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${x(r.position)}`],r.disablePointerEvents===!0&&e.disablePointerEvents,e[r.variant]]},H=t=>{const{classes:e,disablePointerEvents:r,hiddenLabel:s,position:a,size:p,variant:m}=t,u={root:["root",r&&"disablePointerEvents",a&&`position${x(a)}`,m,s&&"hiddenLabel",p&&`size${x(p)}`]};return $(u,W,e)},q=F("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:D})(({theme:t,ownerState:e})=>h({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},e.variant==="filled"&&{[`&.${y.positionStart}&:not(.${y.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),l=j.forwardRef(function(e,r){const s=k({props:e,name:"MuiInputAdornment"}),{children:a,className:p,component:m="div",disablePointerEvents:u=!1,disableTypography:z=!1,position:v,variant:g}=s,E=_(s,O),o=N()||{};let b=g;g&&o.variant,o&&!b&&(b=o.variant);const A=h({},s,{hiddenLabel:o.hiddenLabel,size:o.size,disablePointerEvents:u,position:v,variant:b}),T=H(A);return n.jsx(U.Provider,{value:null,children:n.jsx(q,h({as:m,ownerState:A,className:M(T.root,p),ref:r},E,{children:typeof a=="string"&&!z?n.jsx(I,{color:"text.secondary",children:a}):n.jsxs(j.Fragment,{children:[v==="start"?S||(S=n.jsx("span",{className:"notranslate",children:"​"})):null,a]})}))})}),mn={title:"ATOMS/Input",component:i},c={render:()=>{const t=["standard","filled","outlined"];return n.jsxs(f,{direction:"row",spacing:4,flexWrap:"wrap",children:[n.jsxs(f,{spacing:2,children:[n.jsx(I,{variant:"h6",children:"Custom icon start"}),t.map(e=>n.jsx(i,{appearance:e,size:"medium",disabled:!1,label:"Label",error:!1,InputProps:{startAdornment:n.jsx(l,{position:"start",children:n.jsx(d,{})})}},e)),n.jsx(i,{appearance:"distinct",size:"medium",disabled:!1,label:"Label",error:!1,startAdornment:n.jsx(l,{position:"start",children:n.jsx(d,{})})})]}),n.jsxs(f,{spacing:2,children:[n.jsx(I,{variant:"h6",children:"Custom icon end"}),t.map(e=>n.jsx(i,{appearance:e,size:"medium",disabled:!1,label:"Label",error:!1,InputProps:{endAdornment:n.jsx(l,{position:"end",children:n.jsx(d,{})})}},e)),n.jsx(i,{appearance:"distinct",size:"medium",disabled:!1,label:"Label",error:!1,endAdornment:n.jsx(l,{position:"end",children:n.jsx(d,{})})})]})]})}};var C,L,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const appearance: ["standard", "filled", "outlined"] = ["standard", "filled", "outlined"];
    return <Stack direction={"row"} spacing={4} flexWrap="wrap">\r
                <Stack spacing={2}>\r
                    <Typography variant="h6">Custom icon start</Typography>\r
                    {appearance.map(appearance => <Input key={appearance} appearance={appearance} size="medium" disabled={false} label="Label" error={false} InputProps={{
          startAdornment: <InputAdornment position="start">\r
                                            <StarIcon />\r
                                        </InputAdornment>
        }} />)}\r
                    <Input appearance={"distinct"} size="medium" disabled={false} label="Label" error={false} startAdornment={<InputAdornment position="start">\r
                                <StarIcon />\r
                            </InputAdornment>} />\r
                </Stack>\r
                <Stack spacing={2}>\r
                    <Typography variant="h6">Custom icon end</Typography>\r
                    {appearance.map(appearance => <Input key={appearance} appearance={appearance} size="medium" disabled={false} label="Label" error={false} InputProps={{
          endAdornment: <InputAdornment position="end">\r
                                            <StarIcon />\r
                                        </InputAdornment>
        }} />)}\r
                    <Input appearance={"distinct"} size="medium" disabled={false} label="Label" error={false} endAdornment={<InputAdornment position="end">\r
                                <StarIcon />\r
                            </InputAdornment>} />\r
                </Stack>\r
            </Stack>;
  }
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const un=["CustomIcon"];export{c as CustomIcon,un as __namedExportsOrder,mn as default};

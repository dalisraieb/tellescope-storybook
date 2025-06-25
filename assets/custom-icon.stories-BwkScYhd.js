import{b as j,u as k,_,c as h,j as n,d as x}from"./iframe-Bmyllo3Y.js";import{I as i}from"./input-ButZ_Ewy.js";import{S as d}from"./Star-DA0H6p8V.js";import{S as f}from"./Stack-yGa6_ZH3.js";import{T as I}from"./Typography-t9dWk8fI.js";import{a as w,g as R,s as F,c as M,b as $}from"./TransitionGroupContext-D5Fp7aOT.js";import{u as N,F as U}from"./useFormControl-zb8md3L_.js";import"./Select-DjhAsZ3L.js";import"./InputBase-K3cid50W.js";import"./formControlState-Dq1zat_P.js";import"./useId-8UaLn4l8.js";import"./index-C8HBKbK7.js";import"./index-D2rTwDF2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./createSvgIcon-COt07Q7j.js";import"./createSvgIcon-zl4Hh3-q.js";import"./useIsFocusVisible-8M8vmMwl.js";function W(t){return R("MuiInputAdornment",t)}const y=w("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var S;const O=["children","className","component","disablePointerEvents","disableTypography","position","variant"],D=(t,e)=>{const{ownerState:a}=t;return[e.root,e[`position${x(a.position)}`],a.disablePointerEvents===!0&&e.disablePointerEvents,e[a.variant]]},H=t=>{const{classes:e,disablePointerEvents:a,hiddenLabel:s,position:r,size:p,variant:m}=t,u={root:["root",a&&"disablePointerEvents",r&&`position${x(r)}`,m,s&&"hiddenLabel",p&&`size${x(p)}`]};return $(u,W,e)},q=F("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:D})(({theme:t,ownerState:e})=>h({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},e.variant==="filled"&&{[`&.${y.positionStart}&:not(.${y.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),l=j.forwardRef(function(e,a){const s=k({props:e,name:"MuiInputAdornment"}),{children:r,className:p,component:m="div",disablePointerEvents:u=!1,disableTypography:z=!1,position:v,variant:g}=s,E=_(s,O),o=N()||{};let b=g;g&&o.variant,o&&!b&&(b=o.variant);const A=h({},s,{hiddenLabel:o.hiddenLabel,size:o.size,disablePointerEvents:u,position:v,variant:b}),T=H(A);return n.jsx(U.Provider,{value:null,children:n.jsx(q,h({as:m,ownerState:A,className:M(T.root,p),ref:a},E,{children:typeof r=="string"&&!z?n.jsx(I,{color:"text.secondary",children:r}):n.jsxs(j.Fragment,{children:[v==="start"?S||(S=n.jsx("span",{className:"notranslate",children:"​"})):null,r]})}))})}),dn={title:"ATOMS/Input",component:i},c={render:()=>{const t=["standard","filled","outlined"];return n.jsxs(f,{direction:"row",spacing:4,flexWrap:"wrap",children:[n.jsxs(f,{spacing:2,children:[n.jsx(I,{variant:"h6",children:"Custom icon start"}),t.map(e=>n.jsx(i,{appearance:e,size:"medium",disabled:!1,label:"Label",error:!1,InputProps:{startAdornment:n.jsx(l,{position:"start",children:n.jsx(d,{})})}},e)),n.jsx(i,{appearance:"distinct",size:"medium",disabled:!1,label:"Label",error:!1,startAdornment:n.jsx(l,{position:"start",children:n.jsx(d,{})})})]}),n.jsxs(f,{spacing:2,children:[n.jsx(I,{variant:"h6",children:"Custom icon end"}),t.map(e=>n.jsx(i,{appearance:e,size:"medium",disabled:!1,label:"Label",error:!1,InputProps:{endAdornment:n.jsx(l,{position:"end",children:n.jsx(d,{})})}},e)),n.jsx(i,{appearance:"distinct",size:"medium",disabled:!1,label:"Label",error:!1,endAdornment:n.jsx(l,{position:"end",children:n.jsx(d,{})})})]})]})}};var C,L,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const ln=["CustomIcon"];export{c as CustomIcon,ln as __namedExportsOrder,dn as default};

import{b as j,u as _,_ as k,c as h,j as e,d as x}from"./iframe-C9uIjD27.js";import{I as i}from"./input-DOW7uilt.js";import{S as u}from"./Star-1S3-b3G6.js";import{S as f}from"./Stack-B4fl6GfY.js";import{T as I}from"./Typography-Mvk64xdk.js";import{a as R,g as w,s as M,c as O,b as F}from"./TransitionGroupContext-CD6g6rJt.js";import{u as U,F as $}from"./useFormControl-DBUKqHg0.js";import"./InputBase-C_iDOyBW.js";import"./useId-D6YLFFLF.js";import"./index-GHsBvRqN.js";import"./index-BNGoxM5s.js";import"./createSvgIcon-6xyMhKCK.js";import"./createSvgIcon-ftULVIff.js";import"./useIsFocusVisible-KCYrAar2.js";function N(t){return w("MuiInputAdornment",t)}const A=R("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var S;const W=["children","className","component","disablePointerEvents","disableTypography","position","variant"],D=(t,n)=>{const{ownerState:a}=t;return[n.root,n[`position${x(a.position)}`],a.disablePointerEvents===!0&&n.disablePointerEvents,n[a.variant]]},B=t=>{const{classes:n,disablePointerEvents:a,hiddenLabel:s,position:r,size:p,variant:d}=t,c={root:["root",a&&"disablePointerEvents",r&&`position${x(r)}`,d,s&&"hiddenLabel",p&&`size${x(p)}`]};return F(c,N,n)},H=M("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:D})(({theme:t,ownerState:n})=>h({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},n.variant==="filled"&&{[`&.${A.positionStart}&:not(.${A.hiddenLabel})`]:{marginTop:16}},n.position==="start"&&{marginRight:8},n.position==="end"&&{marginLeft:8},n.disablePointerEvents===!0&&{pointerEvents:"none"})),b=j.forwardRef(function(n,a){const s=_({props:n,name:"MuiInputAdornment"}),{children:r,className:p,component:d="div",disablePointerEvents:c=!1,disableTypography:z=!1,position:v,variant:g}=s,E=k(s,W),o=U()||{};let m=g;g&&o.variant,o&&!m&&(m=o.variant);const y=h({},s,{hiddenLabel:o.hiddenLabel,size:o.size,disablePointerEvents:c,position:v,variant:m}),T=B(y);return e.jsx($.Provider,{value:null,children:e.jsx(H,h({as:d,ownerState:y,className:O(T.root,p),ref:a},E,{children:typeof r=="string"&&!z?e.jsx(I,{color:"text.secondary",children:r}):e.jsxs(j.Fragment,{children:[v==="start"?S||(S=e.jsx("span",{className:"notranslate",children:"​"})):null,r]})}))})}),{fn:K}=__STORYBOOK_MODULE_TEST__,oe={title:"ATOMS/Input",component:i,parameters:{controls:{exclude:["onClick"]}},argTypes:{appearance:{options:["standard","filled","outlined","distinct"],control:{type:"select"}},size:{control:{type:"select"},options:["medium","small"]}},args:{onClick:K()}},l={render:()=>{const t=["standard","filled","outlined"];return e.jsxs(f,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsxs(f,{spacing:2,children:[e.jsx(I,{variant:"h6",children:"Custom icon start"}),t.map(n=>e.jsx(i,{appearance:n,size:"medium",disabled:!1,label:"Label",error:!1,InputProps:{startAdornment:e.jsx(b,{position:"start",children:e.jsx(u,{})})}},n)),e.jsx(i,{appearance:"distinct",size:"medium",disabled:!1,label:"Label",error:!1,inputProps:{startAdornment:e.jsx(b,{position:"start",children:e.jsx(u,{})})}})]}),e.jsxs(f,{spacing:2,children:[e.jsx(I,{variant:"h6",children:"Custom icon end"}),t.map(n=>e.jsx(i,{appearance:n,size:"medium",disabled:!1,label:"Label",error:!1,InputProps:{endAdornment:e.jsx(b,{position:"end",children:e.jsx(u,{})})}},n)),e.jsx(i,{appearance:"distinct",size:"medium",disabled:!1,label:"Label",error:!1})]})]})}};var C,P,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const appearance: ["standard", "filled", "outlined"] = ["standard", "filled", "outlined"];
    return <Stack direction={"row"} spacing={2} flexWrap="wrap">\r
                <Stack spacing={2}>\r
                    <Typography variant="h6">Custom icon start</Typography>\r
                    {appearance.map(appearance => <Input key={appearance} appearance={appearance} size="medium" disabled={false} label="Label" error={false} InputProps={{
          startAdornment: <InputAdornment position="start">\r
                                            <StarIcon />\r
                                        </InputAdornment>
        }} />)}\r
                    <Input appearance={"distinct"} size="medium" disabled={false} label="Label" error={false} inputProps={{
          startAdornment: <InputAdornment position="start">\r
                                    <StarIcon />\r
                                </InputAdornment>
        }} />\r
                </Stack>\r
                <Stack spacing={2}>\r
                    <Typography variant="h6">Custom icon end</Typography>\r
                    {appearance.map(appearance => <Input key={appearance} appearance={appearance} size="medium" disabled={false} label="Label" error={false} InputProps={{
          endAdornment: <InputAdornment position="end">\r
                                            <StarIcon />\r
                                        </InputAdornment>
        }} />)}\r
                    <Input appearance={"distinct"} size="medium" disabled={false} label="Label" error={false} />\r
                </Stack>\r
            </Stack>;
  }
}`,...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const ie=["CustomIcon"];export{l as CustomIcon,ie as __namedExportsOrder,oe as default};

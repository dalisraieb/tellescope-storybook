import{r as W,u as Z,_ as rr,a as u,q as er,j as a,c as i,m as P,d as M,n as k,f as K,h as J,g as X}from"./iframe-B635ogeX.js";import{r as Q}from"./createSvgIcon-RgKzumi2.js";import{C as tr}from"./CheckCircle-y2jDW9Kt.js";import{I as $}from"./icon-button-ASgMlMDp.js";import{S as d}from"./Stack-D0FngCED.js";import{B as D}from"./Box-ppXUDQ5_.js";import{T as l}from"./Typography-CshVcec5.js";import{a as ar,g as or,s as F,c as nr,b as ir}from"./styled-D_JRszTj.js";import"./createSvgIcon-BdBhm6j3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-1gBlwsmZ.js";import"./useTimeout-BqFI7Rpv.js";import"./useId-DOVApbVR.js";import"./useControlled-Cf6RMG8v.js";import"./useIsFocusVisible-BUp4RUIQ.js";import"./IconButton-GqiW-QH8.js";import"./ButtonBase-BhyEMCvw.js";import"./TransitionGroupContext-B-FBxGae.js";function sr(r){return ar("MuiLinearProgress",r)}or("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const lr=["className","color","value","valueBuffer","variant"];let p=r=>r,S,U,z,B,T,N;const _=4,cr=k(S||(S=p`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),dr=k(U||(U=p`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),ur=k(z||(z=p`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),pr=r=>{const{classes:e,variant:t,color:n}=r,s={root:["root",`color${i(n)}`,t],dashed:["dashed",`dashedColor${i(n)}`],bar1:["bar",`barColor${i(n)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${i(n)}`,t==="buffer"&&`color${i(n)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return ir(s,sr,e)},q=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?M.lighten(r.palette[e].main,.62):M.darken(r.palette[e].main,.5),mr=F("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${i(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>u({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:q(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),fr=F("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${i(t.color)}`]]}})(({ownerState:r,theme:e})=>{const t=q(e,r.color);return u({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},P(B||(B=p`
    animation: ${0} 3s infinite linear;
  `),ur)),gr=F("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar1Indeterminate,t.variant==="determinate"&&e.bar1Determinate,t.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>u({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${_}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${_}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&P(T||(T=p`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),cr)),br=F("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar2Indeterminate,t.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>u({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:q(e,r.color),transition:`transform .${_}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&P(N||(N=p`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),dr)),w=W.forwardRef(function(e,t){const n=Z({props:e,name:"MuiLinearProgress"}),{className:s,color:x="primary",value:m,valueBuffer:h,variant:o="indeterminate"}=n,Y=rr(n,lr),f=u({},n,{color:x,variant:o}),v=pr(f),R=er(),y={},j={bar1:{},bar2:{}};if((o==="determinate"||o==="buffer")&&m!==void 0){y["aria-valuenow"]=Math.round(m),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let c=m-100;R&&(c=-c),j.bar1.transform=`translateX(${c}%)`}if(o==="buffer"&&h!==void 0){let c=(h||0)-100;R&&(c=-c),j.bar2.transform=`translateX(${c}%)`}return a.jsxs(mr,u({className:nr(v.root,s),ownerState:f,role:"progressbar"},y,{ref:t},Y,{children:[o==="buffer"?a.jsx(fr,{className:v.dashed,ownerState:f}):null,a.jsx(gr,{className:v.bar1,ownerState:f,style:j.bar1}),o==="determinate"?null:a.jsx(br,{className:v.bar2,ownerState:f,style:j.bar2})]}))});var g={},E;function xr(){if(E)return g;E=1;var r=K();Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e=r(Q()),t=J();return g.default=(0,e.default)((0,t.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),g}var hr=xr();const I=X(hr);var b={},A;function vr(){if(A)return b;A=1;var r=K();Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=r(Q()),t=J();return b.default=(0,e.default)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),b}var yr=vr();const O=X(yr),jr=r=>r>=1024*1024?`${(r/1024/1024).toFixed(1)}mb`:`${Math.round(r/1024)}kb`,L=({files:r,onDelete:e,onSelectFiles:t,error:n=!1,errorMsg:s})=>{const x=W.useRef(null),m=o=>{o.target.files&&t&&t(o.target.files)},h=()=>{var o;(o=x.current)==null||o.click()};return a.jsxs(d,{sx:{maxWidth:500,gap:3},children:[a.jsx(D,{sx:{borderWidth:"1px",borderStyle:n?"solid":"dashed",borderColor:n?"error.main":"#DADCE0",bgcolor:n?"rgba(186, 26, 26, 0.04) !important":"transparent",borderRadius:1,p:3,maxWidth:500,"&:hover":{borderColor:n?"rgba(186, 26, 26, 1)":"primary.main",bgcolor:"rgba(74, 92, 146, 0.08)"}},children:a.jsxs(d,{spacing:2,alignItems:"center",textAlign:"center",mb:2,children:[a.jsx(I,{fontSize:"large",color:n?"error":"primary"}),a.jsxs(l,{children:[a.jsx(l,{component:"span",color:"primary",sx:{position:"relative",cursor:"pointer","&::before":{content:'""',position:"absolute",left:0,bottom:0,width:"100%",height:"1px",background:"#4A5C9240"}},onClick:h,children:"Link"})," ","or drag and drop"]}),n&&s?a.jsx(l,{variant:"caption",color:"error",children:s}):a.jsx(l,{variant:"caption",color:"textSecondary",children:"SVG, PNG, JPG or GIF (max. 3MB)"}),a.jsx("input",{type:"file",hidden:!0,multiple:!0,onChange:m,ref:x})]})}),a.jsx(d,{spacing:3,sx:{px:2},children:r.map(o=>a.jsxs(d,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[a.jsxs(d,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row",width:"50%"},children:[o.status==="error"?a.jsx(I,{color:"error"}):a.jsx(I,{color:"primary"}),a.jsx(D,{sx:{width:"100%"},children:o.status==="error"?a.jsxs(a.Fragment,{children:[a.jsx(l,{variant:"body1",color:"error",children:"Upload failed."}),a.jsxs(l,{variant:"caption",color:"error",sx:{mt:1},children:[o.errorMessage||"Error"," • Failed"]}),a.jsx(w,{color:"error",variant:"determinate",value:100})]}):a.jsxs(a.Fragment,{children:[a.jsx(l,{variant:"body1",children:o.name}),a.jsxs(l,{variant:"caption",color:"textSecondary",sx:{display:"flex",alignItems:"center",gap:1,mt:.5},children:[jr(o.size)," •"," ",o.status==="uploading"?"Loading":o.status==="complete"?"Complete":"Pending"]}),(o.status==="uploading"||o.status==="complete")&&a.jsx(w,{variant:"determinate",value:o.progress??100})]})})]}),o.status==="complete"?a.jsxs(d,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[a.jsx($,{color:"secondary",onClick:()=>e==null?void 0:e(o.name),size:"small",sx:{mt:.5},children:a.jsx(O,{fontSize:"small"})}),a.jsx(tr,{color:"success"})]}):a.jsx($,{onClick:()=>e==null?void 0:e(o.name),size:"small",sx:{mt:.5},color:"secondary",children:a.jsx(O,{fontSize:"small"})})]},o.name+o.status))})]})};L.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"FileItem"}],raw:"FileItem[]"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},onSelectFiles:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"string"},description:""}}};const Ar={title:"ATOMS/FormInputs/Input",component:L,parameters:{controls:{exclude:["files"]}},argTypes:{status:{options:["pre-upload","uploading","complete","error"],control:{type:"select"}},onSelectFiles:{action:"onSelectFiles"},onDelete:{action:"onDelete"}}},Cr=r=>r==="pre-upload"?[]:[{name:r==="uploading"||r==="complete"?"document_file_name.pdf":"Upload failed.",size:102e3,status:r,progress:r==="uploading"?42:100,errorMessage:r==="error"?"File too large":void 0}],C={args:{status:"pre-upload",files:[],error:!1,errorMsg:"Unsuported file."},render:({status:r,onSelectFiles:e,onDelete:t,...n})=>{const s=Cr(r);return a.jsx(L,{...n,files:s,onSelectFiles:e,onDelete:t})}};var V,H,G;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    status: 'pre-upload',
    files: [],
    error: false,
    errorMsg: 'Unsuported file.'
  },
  render: ({
    status,
    onSelectFiles,
    onDelete,
    ...rest
  }) => {
    const files = createFilesFromStatus(status);
    return <FileUpload {...rest} files={files} onSelectFiles={onSelectFiles} onDelete={onDelete} />;
  }
}`,...(G=(H=C.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};const Or=["File"];export{C as File,Or as __namedExportsOrder,Ar as default};

import{s as oe,b as M,i as ne,_ as re,j as a,c as p,T as se,l as ie,u as le,m as ce,d as c,e as q,h as z,k as L,r as S,a as $,g as B}from"./iframe-pqJXIrR0.js";import{r as D}from"./createSvgIcon-BzyHc1Nj.js";import{I as U}from"./icon-button-DB-r4CP3.js";import{S as h}from"./Stack-BrF-CeY5.js";import{d as de,e as ue,c as te,a as ae,C as me,g as pe,s as F,b as fe}from"./TransitionGroupContext-C8yxHfzh.js";import{T as d}from"./Typography-BnYRhljd.js";import"./createSvgIcon-CA1eWsW_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CU7IDVFO.js";import"./useIsFocusVisible-eeMHGHa3.js";import"./ButtonBase-C1ayromv.js";const ge=["className","component"];function be(e={}){const{themeId:r,defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:s}=e,f=de("div",{shouldForwardProp:i=>i!=="theme"&&i!=="sx"&&i!=="as"})(oe);return M.forwardRef(function(o,k){const l=ne(t),u=ue(o),{className:_,component:b="div"}=u,x=re(u,ge);return a.jsx(f,p({as:b,ref:k,className:te(_,s?s(n):n),theme:r&&l[r]||l},x))})}const xe=ae("MuiBox",["root"]),he=ie(),w=be({themeId:se,defaultTheme:he,defaultClassName:xe.root,generateClassName:me.generate});function ve(e){return pe("MuiLinearProgress",e)}ae("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Ce=["className","color","value","valueBuffer","variant"];let v=e=>e,E,O,A,H,V,G;const R=4,ye=L(E||(E=v`
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
`)),je=L(O||(O=v`
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
`)),_e=L(A||(A=v`
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
`)),Ie=e=>{const{classes:r,variant:t,color:n}=e,s={root:["root",`color${c(n)}`,t],dashed:["dashed",`dashedColor${c(n)}`],bar1:["bar",`barColor${c(n)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${c(n)}`,t==="buffer"&&`color${c(n)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return fe(s,ve,r)},N=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?z.lighten(e.palette[r].main,.62):z.darken(e.palette[r].main,.5),Fe=F("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${c(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>p({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:N(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),ke=F("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${c(t.color)}`]]}})(({ownerState:e,theme:r})=>{const t=N(r,e.color);return p({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},q(H||(H=v`
    animation: ${0} 3s infinite linear;
  `),_e)),Pe=F("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${c(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>p({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${R}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${R}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&q(V||(V=v`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),ye)),Re=F("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${c(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>p({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:N(r,e.color),transition:`transform .${R}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&q(G||(G=v`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),je)),W=M.forwardRef(function(r,t){const n=le({props:r,name:"MuiLinearProgress"}),{className:s,color:f="primary",value:g,valueBuffer:i,variant:o="indeterminate"}=n,k=re(n,Ce),l=p({},n,{color:f,variant:o}),u=Ie(l),_=ce(),b={},x={bar1:{},bar2:{}};if((o==="determinate"||o==="buffer")&&g!==void 0){b["aria-valuenow"]=Math.round(g),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let m=g-100;_&&(m=-m),x.bar1.transform=`translateX(${m}%)`}if(o==="buffer"&&i!==void 0){let m=(i||0)-100;_&&(m=-m),x.bar2.transform=`translateX(${m}%)`}return a.jsxs(Fe,p({className:te(u.root,s),ownerState:l,role:"progressbar"},b,{ref:t},k,{children:[o==="buffer"?a.jsx(ke,{className:u.dashed,ownerState:l}):null,a.jsx(Pe,{className:u.bar1,ownerState:l,style:x.bar1}),o==="determinate"?null:a.jsx(Re,{className:u.bar2,ownerState:l,style:x.bar2})]}))});var C={},K;function Me(){if(K)return C;K=1;var e=S();Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0;var r=e(D()),t=$();return C.default=(0,r.default)((0,t.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),C}var qe=Me();const P=B(qe);var y={},J;function Le(){if(J)return y;J=1;var e=S();Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var r=e(D()),t=$();return y.default=(0,r.default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle"),y}var Se=Le();const $e=B(Se);var j={},X;function Be(){if(X)return j;X=1;var e=S();Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var r=e(D()),t=$();return j.default=(0,r.default)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),j}var De=Be();const Q=B(De),Ne=e=>e>=1024*1024?`${(e/1024/1024).toFixed(1)}mb`:`${Math.round(e/1024)}kb`,T=({files:e,onDelete:r,onSelectFiles:t,error:n=!1,errorMsg:s})=>{const f=M.useRef(null),g=o=>{o.target.files&&t&&t(o.target.files)},i=()=>{var o;(o=f.current)==null||o.click()};return a.jsxs(h,{sx:{maxWidth:500,gap:3},children:[a.jsx(w,{sx:{borderWidth:"1px",borderStyle:n?"solid":"dashed",borderColor:n?"error.main":"#DADCE0",bgcolor:n?"rgba(186, 26, 26, 0.04) !important":"transparent",borderRadius:1,p:3,maxWidth:500,"&:hover":{borderColor:n?"rgba(186, 26, 26, 1)":"primary.main",bgcolor:"rgba(74, 92, 146, 0.08)"}},children:a.jsxs(h,{spacing:2,alignItems:"center",textAlign:"center",mb:2,children:[a.jsx(P,{fontSize:"large",color:n?"error":"primary"}),a.jsxs(d,{children:[a.jsx(d,{component:"span",color:"primary",sx:{position:"relative",cursor:"pointer","&::before":{content:'""',position:"absolute",left:0,bottom:0,width:"100%",height:"1px",background:"#4A5C9240"}},onClick:i,children:"Link"})," ","or drag and drop"]}),n&&s?a.jsx(d,{variant:"caption",color:"error",children:s}):a.jsx(d,{variant:"caption",color:"textSecondary",children:"SVG, PNG, JPG or GIF (max. 3MB)"}),a.jsx("input",{type:"file",hidden:!0,multiple:!0,onChange:g,ref:f})]})}),a.jsx(h,{spacing:3,sx:{px:2},children:e.map(o=>a.jsxs(h,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[a.jsxs(h,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row",width:"50%"},children:[o.status==="error"?a.jsx(P,{color:"error"}):a.jsx(P,{color:"primary"}),a.jsx(w,{sx:{width:"100%"},children:o.status==="error"?a.jsxs(a.Fragment,{children:[a.jsx(d,{variant:"body1",color:"error",children:"Upload failed."}),a.jsxs(d,{variant:"caption",color:"error",sx:{mt:1},children:[o.errorMessage||"Error"," • Failed"]}),a.jsx(W,{color:"error",variant:"determinate",value:100})]}):a.jsxs(a.Fragment,{children:[a.jsx(d,{variant:"body1",children:o.name}),a.jsxs(d,{variant:"caption",color:"textSecondary",sx:{display:"flex",alignItems:"center",gap:1,mt:.5},children:[Ne(o.size)," •"," ",o.status==="uploading"?"Loading":o.status==="complete"?"Complete":"Pending"]}),(o.status==="uploading"||o.status==="complete")&&a.jsx(W,{variant:"determinate",value:o.progress??100})]})})]}),o.status==="complete"?a.jsxs(h,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[a.jsx(U,{color:"secondary",onClick:()=>r==null?void 0:r(o.name),size:"small",sx:{mt:.5},children:a.jsx(Q,{fontSize:"small"})}),a.jsx($e,{color:"success"})]}):a.jsx(U,{onClick:()=>r==null?void 0:r(o.name),size:"small",sx:{mt:.5},color:"secondary",children:a.jsx(Q,{fontSize:"small"})})]},o.name+o.status))})]})};T.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"FileItem"}],raw:"FileItem[]"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},onSelectFiles:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"string"},description:""}}};const Je={title:"ATOMS/FormInputs/Input",component:T,parameters:{controls:{exclude:["files"]}},argTypes:{status:{options:["pre-upload","uploading","complete","error"],control:{type:"select"}},onSelectFiles:{action:"onSelectFiles"},onDelete:{action:"onDelete"}}},Te=e=>e==="pre-upload"?[]:[{name:e==="uploading"||e==="complete"?"document_file_name.pdf":"Upload failed.",size:102e3,status:e,progress:e==="uploading"?42:100,errorMessage:e==="error"?"File too large":void 0}],I={args:{status:"pre-upload",files:[],error:!1,errorMsg:"Unsuported file."},render:({status:e,onSelectFiles:r,onDelete:t,...n})=>{const s=Te(e);return a.jsx(T,{...n,files:s,onSelectFiles:r,onDelete:t})}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Xe=["File"];export{I as File,Xe as __namedExportsOrder,Je as default};

import{s as oe,b as L,i as ne,_ as re,j as a,c as f,T as se,l as ie,u as le,m as ce,d as i,e as q,h as T,k as M,r as $,a as B,g as S}from"./iframe-Bmyllo3Y.js";import{r as D}from"./createSvgIcon-zl4Hh3-q.js";import{I as U}from"./icon-button-voQoMYx9.js";import{S as b}from"./Stack-yGa6_ZH3.js";import{d as de,e as ue,c as te,a as ae,C as me,g as pe,s as F,b as fe}from"./TransitionGroupContext-D5Fp7aOT.js";import{T as p}from"./Typography-t9dWk8fI.js";import"./createSvgIcon-COt07Q7j.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-8UaLn4l8.js";import"./useIsFocusVisible-8M8vmMwl.js";import"./ButtonBase-DQiMsG-n.js";const ge=["className","component"];function xe(e={}){const{themeId:r,defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:l}=e,v=de("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(oe);return L.forwardRef(function(c,k){const s=ne(t),u=ue(c),{className:_,component:g="div"}=u,x=re(u,ge);return a.jsx(v,f({as:g,ref:k,className:te(_,l?l(n):n),theme:r&&s[r]||s},x))})}const be=ae("MuiBox",["root"]),he=ie(),w=xe({themeId:se,defaultTheme:he,defaultClassName:be.root,generateClassName:me.generate});function ve(e){return pe("MuiLinearProgress",e)}ae("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Ce=["className","color","value","valueBuffer","variant"];let h=e=>e,E,A,O,H,G,V;const R=4,ye=M(E||(E=h`
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
`)),je=M(A||(A=h`
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
`)),_e=M(O||(O=h`
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
`)),Ie=e=>{const{classes:r,variant:t,color:n}=e,l={root:["root",`color${i(n)}`,t],dashed:["dashed",`dashedColor${i(n)}`],bar1:["bar",`barColor${i(n)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${i(n)}`,t==="buffer"&&`color${i(n)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return fe(l,ve,r)},N=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?T.lighten(e.palette[r].main,.62):T.darken(e.palette[r].main,.5),Fe=F("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${i(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>f({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:N(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),ke=F("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${i(t.color)}`]]}})(({ownerState:e,theme:r})=>{const t=N(r,e.color);return f({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},q(H||(H=h`
    animation: ${0} 3s infinite linear;
  `),_e)),Pe=F("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>f({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${R}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${R}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&q(G||(G=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),ye)),Re=F("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>f({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:N(r,e.color),transition:`transform .${R}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&q(V||(V=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),je)),K=L.forwardRef(function(r,t){const n=le({props:r,name:"MuiLinearProgress"}),{className:l,color:v="primary",value:o,valueBuffer:d,variant:c="indeterminate"}=n,k=re(n,Ce),s=f({},n,{color:v,variant:c}),u=Ie(s),_=ce(),g={},x={bar1:{},bar2:{}};if((c==="determinate"||c==="buffer")&&o!==void 0){g["aria-valuenow"]=Math.round(o),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let m=o-100;_&&(m=-m),x.bar1.transform=`translateX(${m}%)`}if(c==="buffer"&&d!==void 0){let m=(d||0)-100;_&&(m=-m),x.bar2.transform=`translateX(${m}%)`}return a.jsxs(Fe,f({className:te(u.root,l),ownerState:s,role:"progressbar"},g,{ref:t},k,{children:[c==="buffer"?a.jsx(ke,{className:u.dashed,ownerState:s}):null,a.jsx(Pe,{className:u.bar1,ownerState:s,style:x.bar1}),c==="determinate"?null:a.jsx(Re,{className:u.bar2,ownerState:s,style:x.bar2})]}))});var C={},W;function Le(){if(W)return C;W=1;var e=$();Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0;var r=e(D()),t=B();return C.default=(0,r.default)((0,t.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),C}var qe=Le();const P=S(qe);var y={},J;function Me(){if(J)return y;J=1;var e=$();Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var r=e(D()),t=B();return y.default=(0,r.default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle"),y}var $e=Me();const Be=S($e);var j={},X;function Se(){if(X)return j;X=1;var e=$();Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var r=e(D()),t=B();return j.default=(0,r.default)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),j}var De=Se();const Q=S(De),Ne=e=>e>=1024*1024?`${(e/1024/1024).toFixed(1)}mb`:`${Math.round(e/1024)}kb`,z=({files:e,onDelete:r,onSelectFiles:t})=>{const n=L.useRef(null),l=o=>{o.target.files&&t&&t(o.target.files)},v=()=>{var o;(o=n.current)==null||o.click()};return a.jsxs(b,{sx:{maxWidth:500,gap:3},children:[a.jsx(w,{sx:{border:"1px dashed #DADCE0",borderRadius:2,p:3,maxWidth:500},children:a.jsxs(b,{spacing:2,alignItems:"center",textAlign:"center",mb:2,children:[a.jsx(P,{fontSize:"large",color:"primary"}),a.jsxs(p,{children:[a.jsx(p,{component:"span",color:"primary",sx:{position:"relative",cursor:"pointer","&::before":{content:'""',position:"absolute",left:0,bottom:0,width:"100%",height:"1px",background:"#4A5C9240"}},onClick:v,children:"Link"})," ","or drag and drop"]}),a.jsx(p,{variant:"caption",color:"textSecondary",children:"SVG, PNG, JPG or GIF (max. 3MB)"}),a.jsx("input",{type:"file",hidden:!0,multiple:!0,onChange:l,ref:n})]})}),a.jsx(b,{spacing:3,sx:{px:2},children:e.map(o=>a.jsxs(b,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[a.jsxs(b,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row",width:"50%"},children:[o.status==="error"?a.jsx(P,{color:"error"}):a.jsx(P,{color:"primary"}),a.jsx(w,{sx:{width:"100%"},children:o.status==="error"?a.jsxs(a.Fragment,{children:[a.jsx(p,{variant:"body1",color:"error",children:"Upload failed."}),a.jsxs(p,{variant:"caption",color:"error",sx:{mt:1},children:[o.errorMessage||"Error"," • Failed"]}),a.jsx(K,{color:"error",variant:"determinate",value:100})]}):a.jsxs(a.Fragment,{children:[a.jsx(p,{variant:"body1",children:o.name}),a.jsxs(p,{variant:"caption",color:"textSecondary",sx:{display:"flex",alignItems:"center",gap:1,mt:.5},children:[Ne(o.size)," •"," ",o.status==="uploading"?"Loading":o.status==="complete"?"Complete":"Pending"]}),(o.status==="uploading"||o.status==="complete")&&a.jsx(K,{variant:"determinate",value:o.progress??100})]})})]}),o.status==="complete"?a.jsxs(b,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[a.jsx(U,{color:"secondary",onClick:()=>r==null?void 0:r(o.name),size:"small",sx:{mt:.5},children:a.jsx(Q,{fontSize:"small"})}),a.jsx(Be,{color:"success"})]}):a.jsx(U,{onClick:()=>r==null?void 0:r(o.name),size:"small",sx:{mt:.5},color:"secondary",children:a.jsx(Q,{fontSize:"small"})})]},o.name+o.status))})]})};z.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"FileItem"}],raw:"FileItem[]"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},onSelectFiles:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""}}};const Je={title:"Atoms/Input",component:z,parameters:{controls:{exclude:["files"]}},argTypes:{status:{options:["pre-upload","uploading","complete","error"],control:{type:"select"}},onSelectFiles:{action:"onSelectFiles"},onDelete:{action:"onDelete"}}},ze=e=>e==="pre-upload"?[]:[{name:e==="uploading"||e==="complete"?"document_file_name.pdf":"Upload failed.",size:102e3,status:e,progress:e==="uploading"?42:100,errorMessage:e==="error"?"File too large":void 0}],I={args:{status:"pre-upload",files:[]},render:({status:e,onSelectFiles:r,onDelete:t})=>{const n=ze(e);return a.jsx(z,{files:n,onSelectFiles:r,onDelete:t})}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    status: 'pre-upload',
    files: []
  },
  render: ({
    status,
    onSelectFiles,
    onDelete
  }) => {
    const files = createFilesFromStatus(status);
    return <FileUpload files={files} onSelectFiles={onSelectFiles} onDelete={onDelete} />;
  }
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Xe=["File"];export{I as File,Xe as __namedExportsOrder,Je as default};

import{r as G,b as H,_ as K,a as u,t as J,j as t,f as i,n as k,h as q,o as P,i as X,k as Q,g as Y}from"./iframe-B6hPRLvE.js";import{r as Z}from"./createSvgIcon-TL-ltilD.js";import{C as rr}from"./CheckCircle-Ei93eyuN.js";import{D as R}from"./Delete-QhOavbNN.js";import{I as M}from"./icon-button-BK1LrRzv.js";import{S as d}from"./Stack-pVxnj9_9.js";import{B as S}from"./Box-iLS2pYYB.js";import{T as l}from"./Typography-BvbMjAlR.js";import{a as er,g as ar,s as j,c as tr,b as or}from"./styled-Rc4ikHLI.js";import"./createSvgIcon-Cd6zCl4P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-B_mmvVf4.js";import"./useTimeout-B4QmwxA7.js";import"./useId-BR_BWiP_.js";import"./useControlled-CfTk7emU.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./IconButton-yGVPIgv8.js";import"./ButtonBase-1LTz6Pn6.js";import"./TransitionGroupContext-Dj08XMFC.js";function nr(r){return er("MuiLinearProgress",r)}ar("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const ir=["className","color","value","valueBuffer","variant"];let p=r=>r,U,B,z,D,T,N;const I=4,sr=P(U||(U=p`
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
`)),lr=P(B||(B=p`
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
`)),cr=P(z||(z=p`
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
`)),dr=r=>{const{classes:e,variant:a,color:n}=r,s={root:["root",`color${i(n)}`,a],dashed:["dashed",`dashedColor${i(n)}`],bar1:["bar",`barColor${i(n)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${i(n)}`,a==="buffer"&&`color${i(n)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return or(s,nr,e)},_=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?q.lighten(r.palette[e].main,.62):q.darken(r.palette[e].main,.5),ur=j("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${i(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>u({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:_(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),pr=j("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${i(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=_(e,r.color);return u({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},k(D||(D=p`
    animation: ${0} 3s infinite linear;
  `),cr)),mr=j("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${i(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>u({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${I}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${I}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(T||(T=p`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),sr)),fr=j("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${i(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>u({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:_(e,r.color),transition:`transform .${I}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(N||(N=p`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),lr)),w=G.forwardRef(function(e,a){const n=H({props:e,name:"MuiLinearProgress"}),{className:s,color:b="primary",value:m,valueBuffer:x,variant:o="indeterminate"}=n,W=K(n,ir),f=u({},n,{color:b,variant:o}),h=dr(f),$=J(),v={},y={bar1:{},bar2:{}};if((o==="determinate"||o==="buffer")&&m!==void 0){v["aria-valuenow"]=Math.round(m),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let c=m-100;$&&(c=-c),y.bar1.transform=`translateX(${c}%)`}if(o==="buffer"&&x!==void 0){let c=(x||0)-100;$&&(c=-c),y.bar2.transform=`translateX(${c}%)`}return t.jsxs(ur,u({className:tr(h.root,s),ownerState:f,role:"progressbar"},v,{ref:a},W,{children:[o==="buffer"?t.jsx(pr,{className:h.dashed,ownerState:f}):null,t.jsx(mr,{className:h.bar1,ownerState:f,style:y.bar1}),o==="determinate"?null:t.jsx(fr,{className:h.bar2,ownerState:f,style:y.bar2})]}))});var g={},A;function gr(){if(A)return g;A=1;var r=X();Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e=r(Z()),a=Q();return g.default=(0,e.default)((0,a.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),g}var br=gr();const F=Y(br),xr=r=>r>=1024*1024?`${(r/1024/1024).toFixed(1)}mb`:`${Math.round(r/1024)}kb`,L=({files:r,onDelete:e,onSelectFiles:a,error:n=!1,errorMsg:s})=>{const b=G.useRef(null),m=o=>{o.target.files&&a&&a(o.target.files)},x=()=>{var o;(o=b.current)==null||o.click()};return t.jsxs(d,{sx:{maxWidth:500,gap:3},children:[t.jsx(S,{sx:{borderWidth:"1px",borderStyle:n?"solid":"dashed",borderColor:n?"error.main":"#DADCE0",bgcolor:n?"rgba(186, 26, 26, 0.04) !important":"transparent",borderRadius:1,p:3,maxWidth:500,"&:hover":{borderColor:n?"rgba(186, 26, 26, 1)":"primary.main",bgcolor:"rgba(74, 92, 146, 0.08)"}},children:t.jsxs(d,{spacing:2,alignItems:"center",textAlign:"center",mb:2,children:[t.jsx(F,{fontSize:"large",color:n?"error":"primary"}),t.jsxs(l,{children:[t.jsx(l,{component:"span",color:"primary",sx:{position:"relative",cursor:"pointer","&::before":{content:'""',position:"absolute",left:0,bottom:0,width:"100%",height:"1px",background:"#4A5C9240"}},onClick:x,children:"Link"})," ","or drag and drop"]}),n&&s?t.jsx(l,{variant:"caption",color:"error",children:s}):t.jsx(l,{variant:"caption",color:"textSecondary",children:"SVG, PNG, JPG or GIF (max. 3MB)"}),t.jsx("input",{type:"file",hidden:!0,multiple:!0,onChange:m,ref:b})]})}),t.jsx(d,{spacing:3,sx:{px:2},children:r.map(o=>t.jsxs(d,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[t.jsxs(d,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row",width:"50%"},children:[o.status==="error"?t.jsx(F,{color:"error"}):t.jsx(F,{color:"primary"}),t.jsx(S,{sx:{width:"100%"},children:o.status==="error"?t.jsxs(t.Fragment,{children:[t.jsx(l,{variant:"body1",color:"error",children:"Upload failed."}),t.jsxs(l,{variant:"caption",color:"error",sx:{mt:1},children:[o.errorMessage||"Error"," • Failed"]}),t.jsx(w,{color:"error",variant:"determinate",value:100})]}):t.jsxs(t.Fragment,{children:[t.jsx(l,{variant:"body1",children:o.name}),t.jsxs(l,{variant:"caption",color:"textSecondary",sx:{display:"flex",alignItems:"center",gap:1,mt:.5},children:[xr(o.size)," •"," ",o.status==="uploading"?"Loading":o.status==="complete"?"Complete":"Pending"]}),(o.status==="uploading"||o.status==="complete")&&t.jsx(w,{variant:"determinate",value:o.progress??100})]})})]}),o.status==="complete"?t.jsxs(d,{sx:{gap:2,alignItems:"center",justifyContent:"space-between",flexDirection:"row"},children:[t.jsx(M,{color:"secondary",onClick:()=>e==null?void 0:e(o.name),size:"small",sx:{mt:.5},children:t.jsx(R,{fontSize:"small"})}),t.jsx(rr,{color:"success"})]}):t.jsx(M,{onClick:()=>e==null?void 0:e(o.name),size:"small",sx:{mt:.5},color:"secondary",children:t.jsx(R,{fontSize:"small"})})]},o.name+o.status))})]})};L.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"FileItem"}],raw:"FileItem[]"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},onSelectFiles:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMsg:{required:!1,tsType:{name:"string"},description:""}}};const Nr={title:"ATOMS/FormInputs/Input",component:L,parameters:{controls:{exclude:["files"]}},argTypes:{status:{options:["pre-upload","uploading","complete","error"],control:{type:"select"}},onSelectFiles:{action:"onSelectFiles"},onDelete:{action:"onDelete"}}},hr=r=>r==="pre-upload"?[]:[{name:r==="uploading"||r==="complete"?"document_file_name.pdf":"Upload failed.",size:102e3,status:r,progress:r==="uploading"?42:100,errorMessage:r==="error"?"File too large":void 0}],C={args:{status:"pre-upload",files:[],error:!1,errorMsg:"Unsuported file."},render:({status:r,onSelectFiles:e,onDelete:a,...n})=>{const s=hr(r);return t.jsx(L,{...n,files:s,onSelectFiles:e,onDelete:a})}};var E,O,V;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(O=C.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const wr=["File"];export{C as File,wr as __namedExportsOrder,Nr as default};

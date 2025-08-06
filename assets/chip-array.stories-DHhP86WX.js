import{r as p,j as o,p as T,q as W,g as H}from"./iframe-CpdnR0i2.js";import{C as V}from"./Check-DfsgGmZK.js";import{F as O}from"./FormControl-8E0NZ6Fd.js";import{F as z}from"./FormLabel-BvCR-wSo.js";import{a as G}from"./List-B7_zldcA.js";import{C as N}from"./Chip-Cxo-wOmO.js";import{r as Q}from"./createSvgIcon-C3FiYK1r.js";import{S as J}from"./Stack-Bd6jq2pn.js";import"./styled-DujYcmrZ.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./isMuiElement-5-QtcHpW.js";import"./formControlState-Dq1zat_P.js";import"./createSvgIcon-C4MRlNQH.js";import"./useForkRef-k7JvqZ8G.js";import"./ButtonBase-DfyOkDKJ.js";import"./useTimeout-BgZTaRCc.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./useControlled-d9yX6gVw.js";const Y=()=>{const[a,l]=p.useState(null),i=p.useCallback(e=>{e&&l(e)},[]);return p.useEffect(()=>{if(!a)return;const e=c=>{a.scrollLeft+=c.deltaY,c.preventDefault()};return a.addEventListener("wheel",e,{passive:!1}),()=>{a.removeEventListener("wheel",e)}},[a]),i},g=({data:a,label:l,withDelete:i=!0,selectable:e=!1,chipProps:c,ListProps:M})=>{const w=Y(),{sx:L,...I}=M??{},{sx:j,...R}=c??{},[q,E]=p.useState(a),[P,F]=p.useState(new Set),A=r=>()=>{E(t=>t.filter(s=>s.key!==r.key))},_=r=>()=>{F(t=>{const s=new Set(t);return s.has(r)?s.delete(r):s.add(r),s})};return o.jsxs(O,{children:[l&&o.jsx(z,{sx:{color:"black"},children:l}),o.jsx(G,{ref:w,sx:{gap:1,display:"flex",overflow:"hidden",maxWidth:"300px",...L},...I,children:q.map(r=>{const t=P.has(r.key);return o.jsx(N,{label:r.label,variant:e?t?"filled":"outlined":"filled",icon:t?o.jsx(V,{sx:{fontSize:16}}):void 0,onClick:e?_(r.key):void 0,onDelete:i?A(r):void 0,sx:{borderRadius:e?2.5:void 0,"& .MuiSvgIcon-root.MuiChip-icon":{color:e&&t?"#0000008F":void 0},backgroundColor:e&&t?"#d3dee8":void 0,"&.MuiChip-root.MuiChip-filled.MuiChip-clickable.MuiChip-clickableColorDefault.MuiChip-filledDefault":{border:"1px solid #CAC4D0"},"&.MuiChip-clickable:hover":{backgroundColor:e?"#d3deeb":void 0},borderColor:e?t?" #4A5C9280":"#CAC4D0":void 0,...j,"& .MuiTouchRipple-root":{display:"none"}},...R},r.key)})})]})};g.__docgenInfo={description:"",methods:[],displayName:"ChipArray",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ChipData"}],raw:"ChipData[]"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},withDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"Chip"}],raw:"ComponentProps<typeof Chip>"},description:""},ListProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"List"}],raw:"ComponentProps<typeof List>"},description:""}}};var n={},h;function B(){if(h)return n;h=1;var a=T();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(Q()),i=W();return n.default=(0,l.default)((0,i.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),n}var K=B();const U=H(K),Se={title:"ATOMS/FormInputs/ChipArray",component:g,parameters:{controls:{include:[""]}}},d={args:{label:"Label",data:[{key:"1",label:"Chip"},{key:"2",label:"Chip"},{key:"3",label:"Chip"},{key:"4",label:"Chip"},{key:"5",label:"Chip"},{key:"6",label:"Chip"}],withDelete:!0}},u={args:{data:[{key:"1",label:"Angular"},{key:"2",label:"jQuery"},{key:"3",label:"Polymer"},{key:"4",label:"React"}],withDelete:!0}},m={args:{label:o.jsxs(J,{sx:{flexDirection:"row",gap:1},children:[o.jsx(U,{})," Channel"]}),data:[{key:"1",label:"Chat"},{key:"2",label:"SMS"},{key:"3",label:"Email"},{key:"4",label:"Form Response"},{key:"5",label:"Group MMS"}],withDelete:!1,selectable:!0,ListProps:{sx:{maxWidth:"500px"}}}};var b,f,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Label",
    data: [{
      key: '1',
      label: 'Chip'
    }, {
      key: '2',
      label: 'Chip'
    }, {
      key: '3',
      label: 'Chip'
    }, {
      key: '4',
      label: 'Chip'
    }, {
      key: '5',
      label: 'Chip'
    }, {
      key: '6',
      label: 'Chip'
    }],
    withDelete: true
  }
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,x,k;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: [{
      key: '1',
      label: 'Angular'
    }, {
      key: '2',
      label: 'jQuery'
    }, {
      key: '3',
      label: 'Polymer'
    }, {
      key: '4',
      label: 'React'
    }],
    withDelete: true
  }
}`,...(k=(x=u.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,v,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: <Stack sx={{
      flexDirection: "row",
      gap: 1
    }}><InboxIcon /> Channel</Stack>,
    data: [{
      key: '1',
      label: 'Chat'
    }, {
      key: '2',
      label: 'SMS'
    }, {
      key: '3',
      label: 'Email'
    }, {
      key: '4',
      label: 'Form Response'
    }, {
      key: '5',
      label: 'Group MMS'
    }],
    withDelete: false,
    selectable: true,
    ListProps: {
      sx: {
        maxWidth: "500px"
      }
    }
  }
}`,...(D=(v=m.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const ve=["Default","SansLabel","Filter"];export{d as Default,m as Filter,u as SansLabel,ve as __namedExportsOrder,Se as default};

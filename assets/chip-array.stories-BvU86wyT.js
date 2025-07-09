import{b as u,j as t,r as T,a as H,g as V}from"./iframe-MlT4uNqk.js";import{C as W}from"./Check-ql6EAfzj.js";import{u as O,C as z}from"./index-Dx6EIJkF.js";import{F as G}from"./FormControl-CFVprfL6.js";import{F as N,L as Q}from"./List-CzCOLpp6.js";import{r as J}from"./createSvgIcon-SHSNCR4y.js";import{S as B}from"./Stack-CDqxnO2v.js";import"./styled-uAf5yWmA.js";import"./createSvgIcon-j_d6Q5Pl.js";import"./ButtonBase-CL_5rPQg.js";import"./TransitionGroupContext-UBgLjG1_.js";import"./useIsFocusVisible-rP1Nd5fW.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D8WB3yfs.js";import"./isMuiElement-CEp5Ye4Q.js";import"./formControlState-Dq1zat_P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CyR9ZBBC.js";import"./useControlled-3UtnvOT2.js";const D=({data:c,label:s,withDelete:d=!0,selectable:a=!1,chipProps:g,ListProps:M})=>{const I=O(),{sx:j,...w}=M??{},{sx:L,...R}=g??{},[q,P]=u.useState(c),[F,A]=u.useState(new Set),_=e=>()=>{P(r=>r.filter(o=>o.key!==e.key))},E=e=>()=>{A(r=>{const o=new Set(r);return o.has(e)?o.delete(e):o.add(e),o})};return t.jsxs(G,{children:[s&&t.jsx(N,{sx:{color:"black"},children:s}),t.jsx(Q,{ref:I,sx:{gap:1,display:"flex",overflow:"hidden",maxWidth:"300px",...j},...w,children:q.map(e=>{const r=F.has(e.key);return t.jsx(z,{label:e.label,variant:a?r?"filled":"outlined":"filled",icon:r?t.jsx(W,{sx:{fontSize:16}}):void 0,onClick:a?E(e.key):void 0,onDelete:d?_(e):void 0,sx:{borderRadius:a?2.5:void 0,"& .MuiSvgIcon-root.MuiChip-icon":{color:a&&r?"#0000008F":void 0},backgroundColor:a&&r?"#d3dee8":void 0,"&.MuiChip-root.MuiChip-filled.MuiChip-clickable.MuiChip-clickableColorDefault.MuiChip-filledDefault":{border:"1px solid #CAC4D0"},"&.MuiChip-clickable:hover":{backgroundColor:a?"#d3deeb":void 0},borderColor:a?r?" #4A5C9280":"#CAC4D0":void 0,...L,"& .MuiTouchRipple-root":{display:"none"}},...R},e.key)})})]})};D.__docgenInfo={description:"",methods:[],displayName:"ChipArray",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ChipData"}],raw:"ChipData[]"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},withDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"Chip"}],raw:"ComponentProps<typeof Chip>"},description:""},ListProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"List"}],raw:"ComponentProps<typeof List>"},description:""}}};var l={},m;function K(){if(m)return l;m=1;var c=T();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var s=c(J()),d=H();return l.default=(0,s.default)((0,d.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),l}var U=K();const X=V(U),Ce={title:"ATOMS/FormInputs/ChipArray",component:D,parameters:{controls:{include:[""]}}},i={args:{label:"Label",data:[{key:"1",label:"Chip"},{key:"2",label:"Chip"},{key:"3",label:"Chip"},{key:"4",label:"Chip"},{key:"5",label:"Chip"},{key:"6",label:"Chip"}],withDelete:!0}},n={args:{data:[{key:"1",label:"Angular"},{key:"2",label:"jQuery"},{key:"3",label:"Polymer"},{key:"4",label:"React"}],withDelete:!0}},p={args:{label:t.jsxs(B,{sx:{flexDirection:"row",gap:1},children:[t.jsx(X,{})," Channel"]}),data:[{key:"1",label:"Chat"},{key:"2",label:"SMS"},{key:"3",label:"Email"},{key:"4",label:"Form Response"},{key:"5",label:"Group MMS"}],withDelete:!1,selectable:!0,ListProps:{sx:{maxWidth:"500px"}}}};var h,b,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var y,f,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,S,v;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const ye=["Default","SansLabel","Filter"];export{i as Default,p as Filter,n as SansLabel,ye as __namedExportsOrder,Ce as default};

import{b as u,j as t,r as T,a as E,g as H}from"./iframe-BgjesgQg.js";import{C as V}from"./Check-DkeUXCOw.js";import{F as O}from"./FormControl-BvCggP1j.js";import{F as W,L as z}from"./List-BmU6gkgd.js";import{C as G}from"./Chip-BmlQj8q0.js";import{r as N}from"./createSvgIcon-DuVIEAor.js";import{S as Q}from"./Stack-KWo0K7od.js";import"./TransitionGroupContext-CLlTie2B.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-YTI9_HU0.js";import"./isMuiElement-DaA2x2kF.js";import"./formControlState-Dq1zat_P.js";import"./createSvgIcon-iIuMGR86.js";import"./ButtonBase-BrFLFx0R.js";import"./useIsFocusVisible-Bjmxrfal.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-DP9OkCxR.js";import"./useControlled-LfO21FU7.js";const v=({data:c,label:s,withDelete:d=!0,selectable:r=!1,chipProps:g,ListProps:M})=>{const{sx:w,...I}=M??{},{sx:L,...j}=g??{},[P,q]=u.useState(c),[R,F]=u.useState(new Set),A=e=>()=>{q(a=>a.filter(o=>o.key!==e.key))},_=e=>()=>{F(a=>{const o=new Set(a);return o.has(e)?o.delete(e):o.add(e),o})};return t.jsxs(O,{children:[s&&t.jsx(W,{sx:{color:"black"},children:s}),t.jsx(z,{sx:{gap:1,display:"flex",overflow:"hidden",maxWidth:"300px",...w},...I,children:P.map(e=>{const a=R.has(e.key);return t.jsx(G,{label:e.label,variant:r?a?"filled":"outlined":"filled",icon:a?t.jsx(V,{sx:{fontSize:16}}):void 0,onClick:r?_(e.key):void 0,onDelete:d?A(e):void 0,sx:{borderRadius:r?2.5:void 0,"& .MuiSvgIcon-root.MuiChip-icon":{color:r&&a?"#0000008F":void 0},backgroundColor:r&&a?"#d3dee8":void 0,"&.MuiChip-root.MuiChip-filled.MuiChip-clickable.MuiChip-clickableColorDefault.MuiChip-filledDefault":{border:"1px solid #CAC4D0"},"&.MuiChip-clickable:hover":{backgroundColor:r?"#d3deeb":void 0},borderColor:r?a?" #4A5C9280":"#CAC4D0":void 0,...L,"& .MuiTouchRipple-root":{display:"none"}},...j},e.key)})})]})};v.__docgenInfo={description:"",methods:[],displayName:"ChipArray",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ChipData"}],raw:"ChipData[]"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},withDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"Chip"}],raw:"ComponentProps<typeof Chip>"},description:""},ListProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"List"}],raw:"ComponentProps<typeof List>"},description:""}}};var l={},m;function J(){if(m)return l;m=1;var c=T();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var s=c(N()),d=E();return l.default=(0,s.default)((0,d.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),l}var B=J();const K=H(B),me={title:"ATOMS/FormInputs/ChipArray",component:v,parameters:{controls:{exclude:["label","data","withDelete","selectable","chipProps","ListProps"]}}},i={args:{label:"Label",data:[{key:"1",label:"Chip"},{key:"2",label:"Chip"},{key:"3",label:"Chip"},{key:"4",label:"Chip"},{key:"5",label:"Chip"},{key:"6",label:"Chip"}],withDelete:!0}},n={args:{data:[{key:"1",label:"Angular"},{key:"2",label:"jQuery"},{key:"3",label:"Polymer"},{key:"4",label:"React"}],withDelete:!0}},p={args:{label:t.jsxs(Q,{sx:{flexDirection:"row",gap:1},children:[t.jsx(K,{})," Channel"]}),data:[{key:"1",label:"Chat"},{key:"2",label:"SMS"},{key:"3",label:"Email"},{key:"4",label:"Form Response"},{key:"5",label:"Group MMS"}],withDelete:!1,selectable:!0,ListProps:{sx:{maxWidth:"500px"}}}};var h,b,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,S,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const he=["Default","SansLabel","Filter"];export{i as Default,p as Filter,n as SansLabel,he as __namedExportsOrder,me as default};

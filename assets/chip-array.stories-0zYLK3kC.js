import{i as M,k as j,g as w,r as m,j as t}from"./iframe-NAPhPX1u.js";import{r as I}from"./createSvgIcon-D0Rt455a.js";import{F as z}from"./FormControl-BmN-RmyH.js";import{F as G,a as N}from"./List-DOWCaeCd.js";import{C as Q}from"./Chip-Db7o_Qk_.js";import{S as J}from"./Stack-CQ7BulZm.js";import"./createSvgIcon-CBEcOZsh.js";import"./styled-DO-91wXW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-GCpe9NcE.js";import"./useTimeout-CG_60NpA.js";import"./useId-0sbXxxQP.js";import"./useControlled-Coj7fk6E.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-bl8w57rs.js";import"./formControlState-Dq1zat_P.js";import"./ButtonBase-Dyh98Sbg.js";import"./TransitionGroupContext-C90OWFUl.js";var n={},h;function B(){if(h)return n;h=1;var i=M();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(I()),s=j();return n.default=(0,o.default)((0,s.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),n}var K=B();const U=w(K),q=({data:i,label:o,withDelete:s=!0,selectable:a=!1,chipProps:R,ListProps:L})=>{const{sx:P,..._}=L??{},{sx:F,...A}=R??{},[E,T]=m.useState(i),[H,O]=m.useState(new Set),V=e=>()=>{T(r=>r.filter(l=>l.key!==e.key))},W=e=>()=>{O(r=>{const l=new Set(r);return l.has(e)?l.delete(e):l.add(e),l})};return t.jsxs(z,{children:[o&&t.jsx(G,{sx:{color:"black"},children:o}),t.jsx(N,{sx:{gap:1,display:"flex",overflow:"auto",maxWidth:"300px","&::-webkit-scrollbar":{display:"none"},"-ms-overflow-style":"none",scrollbarWidth:"none",...P},..._,children:E.map(e=>{const r=H.has(e.key);return t.jsx(Q,{label:e.label,variant:a?r?"filled":"outlined":"filled",icon:r?t.jsx(U,{sx:{fontSize:16}}):void 0,onClick:a?W(e.key):void 0,onDelete:s?V(e):void 0,sx:{borderRadius:a?2.5:void 0,"& .MuiSvgIcon-root.MuiChip-icon":{color:a&&r?"#0000008F":void 0},backgroundColor:a&&r?"#d3dee8":void 0,"&.MuiChip-root.MuiChip-filled.MuiChip-clickable.MuiChip-clickableColorDefault.MuiChip-filledDefault":{border:"1px solid #CAC4D0"},"&.MuiChip-clickable:hover":{backgroundColor:a?"#d3deeb":void 0},borderColor:a?r?" #4A5C9280":"#CAC4D0":void 0,...F,"& .MuiTouchRipple-root":{display:"none"}},...A},e.key)})})]})};q.__docgenInfo={description:"",methods:[],displayName:"ChipArray",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ChipData"}],raw:"ChipData[]"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},withDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"Chip"}],raw:"ComponentProps<typeof Chip>"},description:""},ListProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"List"}],raw:"ComponentProps<typeof List>"},description:""}}};var p={},b;function X(){if(b)return p;b=1;var i=M();Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var o=i(I()),s=j();return p.default=(0,o.default)((0,s.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),p}var Y=X();const Z=w(Y),ke={title:"ATOMS/FormInputs/ChipArray",component:q,parameters:{controls:{include:[""]}}},c={args:{label:"Label",data:[{key:"1",label:"Chip"},{key:"2",label:"Chip"},{key:"3",label:"Chip"},{key:"4",label:"Chip"},{key:"5",label:"Chip"},{key:"6",label:"Chip"}],withDelete:!0}},u={args:{data:[{key:"1",label:"Angular"},{key:"2",label:"jQuery"},{key:"3",label:"Polymer"},{key:"4",label:"React"}],withDelete:!0}},d={args:{label:t.jsxs(J,{sx:{flexDirection:"row",gap:1},children:[t.jsx(Z,{})," Channel"]}),data:[{key:"1",label:"Chat"},{key:"2",label:"SMS"},{key:"3",label:"Email"},{key:"4",label:"Form Response"},{key:"5",label:"Group MMS"}],withDelete:!1,selectable:!0,ListProps:{sx:{maxWidth:"500px"}}}};var C,y,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,x,v;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,D,g;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(g=(D=d.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};const xe=["Default","SansLabel","Filter"];export{c as Default,d as Filter,u as SansLabel,xe as __namedExportsOrder,ke as default};

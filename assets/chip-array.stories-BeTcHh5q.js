import{f as M,h as j,g as I,r as m,j as t}from"./iframe-B635ogeX.js";import{r as R}from"./createSvgIcon-RgKzumi2.js";import{u as G,C as N}from"./index-7pjO2N5Y.js";import{F as Q}from"./FormControl-DjzAj70N.js";import{F as J,a as B}from"./List-Bh5MpXX8.js";import{S as K}from"./Stack-D0FngCED.js";import"./createSvgIcon-BdBhm6j3.js";import"./styled-D_JRszTj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-1gBlwsmZ.js";import"./useTimeout-BqFI7Rpv.js";import"./useId-DOVApbVR.js";import"./useControlled-Cf6RMG8v.js";import"./useIsFocusVisible-BUp4RUIQ.js";import"./ButtonBase-BhyEMCvw.js";import"./TransitionGroupContext-B-FBxGae.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Q5Xwe7A9.js";import"./formControlState-Dq1zat_P.js";var n={},h;function U(){if(h)return n;h=1;var s=M();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(R()),i=j();return n.default=(0,o.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),n}var X=U();const Y=I(X),q=({data:s,label:o,withDelete:i=!0,selectable:a=!1,chipProps:w,ListProps:L})=>{const P=G(),{sx:_,...F}=L??{},{sx:A,...E}=w??{},[T,H]=m.useState(s),[O,V]=m.useState(new Set),W=e=>()=>{H(r=>r.filter(l=>l.key!==e.key))},z=e=>()=>{V(r=>{const l=new Set(r);return l.has(e)?l.delete(e):l.add(e),l})};return t.jsxs(Q,{children:[o&&t.jsx(J,{sx:{color:"black"},children:o}),t.jsx(B,{ref:P,sx:{gap:1,display:"flex",overflow:"hidden",maxWidth:"300px",..._},...F,children:T.map(e=>{const r=O.has(e.key);return t.jsx(N,{label:e.label,variant:a?r?"filled":"outlined":"filled",icon:r?t.jsx(Y,{sx:{fontSize:16}}):void 0,onClick:a?z(e.key):void 0,onDelete:i?W(e):void 0,sx:{borderRadius:a?2.5:void 0,"& .MuiSvgIcon-root.MuiChip-icon":{color:a&&r?"#0000008F":void 0},backgroundColor:a&&r?"#d3dee8":void 0,"&.MuiChip-root.MuiChip-filled.MuiChip-clickable.MuiChip-clickableColorDefault.MuiChip-filledDefault":{border:"1px solid #CAC4D0"},"&.MuiChip-clickable:hover":{backgroundColor:a?"#d3deeb":void 0},borderColor:a?r?" #4A5C9280":"#CAC4D0":void 0,...A,"& .MuiTouchRipple-root":{display:"none"}},...E},e.key)})})]})};q.__docgenInfo={description:"",methods:[],displayName:"ChipArray",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ChipData"}],raw:"ChipData[]"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},withDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"Chip"}],raw:"ComponentProps<typeof Chip>"},description:""},ListProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"List"}],raw:"ComponentProps<typeof List>"},description:""}}};var p={},b;function Z(){if(b)return p;b=1;var s=M();Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var o=s(R()),i=j();return p.default=(0,o.default)((0,i.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),p}var $=Z();const ee=I($),ve={title:"ATOMS/FormInputs/ChipArray",component:q,parameters:{controls:{include:[""]}}},c={args:{label:"Label",data:[{key:"1",label:"Chip"},{key:"2",label:"Chip"},{key:"3",label:"Chip"},{key:"4",label:"Chip"},{key:"5",label:"Chip"},{key:"6",label:"Chip"}],withDelete:!0}},u={args:{data:[{key:"1",label:"Angular"},{key:"2",label:"jQuery"},{key:"3",label:"Polymer"},{key:"4",label:"React"}],withDelete:!0}},d={args:{label:t.jsxs(K,{sx:{flexDirection:"row",gap:1},children:[t.jsx(ee,{})," Channel"]}),data:[{key:"1",label:"Chat"},{key:"2",label:"SMS"},{key:"3",label:"Email"},{key:"4",label:"Form Response"},{key:"5",label:"Group MMS"}],withDelete:!1,selectable:!0,ListProps:{sx:{maxWidth:"500px"}}}};var C,f,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,k,v;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(k=u.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var S,D,g;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(g=(D=d.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};const Se=["Default","SansLabel","Filter"];export{c as Default,d as Filter,u as SansLabel,Se as __namedExportsOrder,ve as default};

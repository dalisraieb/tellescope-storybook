import{j as e}from"./iframe-CpdnR0i2.js";import{B as a}from"./Box-Cc3QCFpm.js";import{S as v}from"./Stack-Bd6jq2pn.js";import{T as l}from"./Typography-DUyUrCFr.js";import{C as Y}from"./ChevronRight-bJn4zER6.js";import{C as J}from"./ChatBubbleOutline-CQTov31q.js";import{c as x}from"./createSvgIcon-C4MRlNQH.js";import{L as F}from"./Link-B_9hc5w-.js";import{A as G}from"./Avatar-FJZ4Slfo.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./styled-DujYcmrZ.js";import"./useSlot-CDCkmms0.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k7JvqZ8G.js";const $=x(e.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment"),K=x(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"ErrorOutline"),Q=x(e.jsx("path",{d:"M17 12h-5v5h5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1zm3 18H5V8h14z"}),"Event"),y={form:{icon:e.jsx($,{}),showStatus:!0,statusText:t=>t?"Completed":"Not started"},link:{icon:e.jsx(F,{})},appointment:{icon:e.jsx(Q,{})},message:{icon:e.jsx(J,{}),showDateTime:!0,showAvatar:!0}},U=({type:t,hasNewMessage:s})=>{const n=y[t];return e.jsxs(a,{position:"relative",display:"inline-flex",alignItems:"center",children:[n.icon,t==="message"&&s&&e.jsx(a,{position:"absolute",top:-2,right:-2,width:8,height:8,borderRadius:"50%",bgcolor:"error.main",sx:{border:"1px solid white",pointerEvents:"none"}})]})},X=({type:t,completed:s,dateTime:n,doctorName:i})=>{const o=y[t];return!o.showStatus&&!o.showDateTime?null:e.jsxs(a,{display:"flex",alignItems:"center",gap:1,children:[o.showStatus&&!s&&e.jsx(K,{color:"error",fontSize:"inherit"}),o.showStatus&&o.statusText&&e.jsx(l,{variant:"caption",fontWeight:600,color:"text.secondary",children:o.statusText(s)}),o.showDateTime&&(n||i)&&e.jsxs(a,{display:"flex",gap:1,children:[n&&e.jsx(l,{variant:"caption",fontWeight:500,color:"text.secondary",children:n}),i&&e.jsx(l,{variant:"caption",fontWeight:500,color:"text.secondary",children:i})]})]})},Z=({count:t})=>t?e.jsx(l,{variant:"caption",fontWeight:600,sx:{marginRight:1.2},color:"text.secondary",children:t}):null,ee=({src:t,show:s})=>!s||!t?null:e.jsx(G,{sx:{width:24,height:24},src:t}),r=({type:t,completed:s=!1,title:n,badge:i=!1,badgeCount:o=8,dateTime:E,doctorName:H,avatarSrc:O,hasNewMessage:W=!1,onClick:h,sx:L})=>{const f=y[t],_=f.showStatus||f.showDateTime;return e.jsxs(a,{bgcolor:"white",px:2,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"space-between",height:"60px",width:"100%",onClick:h,sx:{cursor:h?"pointer":"default","&:hover":h?{bgcolor:"grey.50"}:{},...L},children:[e.jsxs(v,{direction:"row",alignItems:"center",gap:2,children:[e.jsx(U,{type:t,hasNewMessage:W}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:_?.4:0,children:[e.jsx(l,{variant:"body2",fontWeight:600,children:n}),e.jsx(X,{type:t,completed:s,dateTime:E,doctorName:H})]})]}),e.jsxs(v,{direction:"row",alignItems:"center",gap:1,children:[e.jsx(Z,{count:i?o:void 0}),e.jsx(ee,{src:O,show:f.showAvatar}),e.jsx(Y,{})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"ItemPortal",props:{type:{required:!0,tsType:{name:"union",raw:'"form" | "link" | "appointment" | "message"',elements:[{name:"literal",value:'"form"'},{name:"literal",value:'"link"'},{name:"literal",value:'"appointment"'},{name:"literal",value:'"message"'}]},description:""},completed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},badge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},dateTime:{required:!1,tsType:{name:"string"},description:""},doctorName:{required:!1,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},hasNewMessage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"any"},description:""}}};const fe={title:"Molecules/PatientPortal/Item",component:r,parameters:{layout:"padded"},argTypes:{type:{control:{type:"select"},options:["form","link","appointment","message"]},completed:{control:{type:"boolean"}},badge:{control:{type:"boolean"}},badgeCount:{control:{type:"number"}},hasNewMessage:{control:{type:"boolean"}},onClick:{action:"clicked"}}},c={args:{type:"form",completed:!1,title:"Complete Registration"},render:t=>e.jsx(a,{px:10,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"#f0f0f0",height:"100vh",children:e.jsx(r,{...t})})},p={args:{type:"link",completed:!0,title:"Review care plan"},render:t=>e.jsx(a,{px:10,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"#f0f0f0",height:"100vh",children:e.jsx(r,{...t})})},m={args:{type:"appointment",completed:!0,title:"Schedule your appointment"},render:t=>e.jsx(a,{px:10,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"#f0f0f0",height:"100vh",children:e.jsx(r,{...t})})},d={args:{type:"message",completed:!1,title:"Message from your doctor",badge:!0,badgeCount:3,dateTime:"3/5/2025 1:00 PM",doctorName:"Dr. John Doe",avatarSrc:"https://via.placeholder.com/80",hasNewMessage:!0},render:t=>e.jsx(a,{px:10,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"#f0f0f0",height:"100vh",children:e.jsx(r,{...t})})},g={args:{type:"message",completed:!0,title:"Read message from your doctor",badge:!1,dateTime:"Yesterday 3:00 PM",doctorName:"Dr. Sarah Smith",avatarSrc:"https://via.placeholder.com/80",hasNewMessage:!1},render:t=>e.jsx(a,{px:10,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"#f0f0f0",height:"100vh",children:e.jsx(r,{...t})})},u={render:()=>e.jsxs(a,{px:10,display:"flex",flexDirection:"column",gap:2,bgcolor:"#f0f0f0",height:"100vh",py:4,children:[e.jsx(r,{type:"form",completed:!1,title:"Complete Registration"}),e.jsx(r,{type:"link",completed:!0,title:"Review care plan"}),e.jsx(r,{type:"appointment",completed:!0,title:"Schedule your appointment"}),e.jsx(r,{type:"message",completed:!1,title:"New message from your doctor",badge:!0,badgeCount:3,dateTime:"3/5/2025 1:00 PM",doctorName:"Dr. John Doe",avatarSrc:"https://via.placeholder.com/80",hasNewMessage:!0}),e.jsx(r,{type:"message",completed:!0,title:"Read message from your doctor",badge:!1,dateTime:"Yesterday 3:00 PM",doctorName:"Dr. Sarah Smith",avatarSrc:"https://via.placeholder.com/80",hasNewMessage:!1})]})};var j,b,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "form",
    completed: false,
    title: "Complete Registration"
  },
  render: args => <Box px={10} display="flex" alignItems="center" justifyContent="center" bgcolor="#f0f0f0" height="100vh">\r
      <ItemPortal {...args} />\r
    </Box>
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,I,T;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "link",
    completed: true,
    title: "Review care plan"
  },
  render: args => <Box px={10} display="flex" alignItems="center" justifyContent="center" bgcolor="#f0f0f0" height="100vh">\r
      <ItemPortal {...args} />\r
    </Box>
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var C,M,P;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "appointment",
    completed: true,
    title: "Schedule your appointment"
  },
  render: args => <Box px={10} display="flex" alignItems="center" justifyContent="center" bgcolor="#f0f0f0" height="100vh">\r
      <ItemPortal {...args} />\r
    </Box>
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var N,D,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: "message",
    completed: false,
    title: "Message from your doctor",
    badge: true,
    badgeCount: 3,
    dateTime: "3/5/2025 1:00 PM",
    doctorName: "Dr. John Doe",
    avatarSrc: "https://via.placeholder.com/80",
    hasNewMessage: true
  },
  render: args => <Box px={10} display="flex" alignItems="center" justifyContent="center" bgcolor="#f0f0f0" height="100vh">\r
      <ItemPortal {...args} />\r
    </Box>
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var B,k,A;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "message",
    completed: true,
    title: "Read message from your doctor",
    badge: false,
    dateTime: "Yesterday 3:00 PM",
    doctorName: "Dr. Sarah Smith",
    avatarSrc: "https://via.placeholder.com/80",
    hasNewMessage: false
  },
  render: args => <Box px={10} display="flex" alignItems="center" justifyContent="center" bgcolor="#f0f0f0" height="100vh">\r
      <ItemPortal {...args} />\r
    </Box>
}`,...(A=(k=g.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var V,q,z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box px={10} display="flex" flexDirection="column" gap={2} bgcolor="#f0f0f0" height="100vh" py={4}>\r
      <ItemPortal type="form" completed={false} title="Complete Registration" />\r
      <ItemPortal type="link" completed={true} title="Review care plan" />\r
      <ItemPortal type="appointment" completed={true} title="Schedule your appointment" />\r
      <ItemPortal type="message" completed={false} title="New message from your doctor" badge={true} badgeCount={3} dateTime="3/5/2025 1:00 PM" doctorName="Dr. John Doe" avatarSrc="https://via.placeholder.com/80" hasNewMessage={true} />\r
      <ItemPortal type="message" completed={true} title="Read message from your doctor" badge={false} dateTime="Yesterday 3:00 PM" doctorName="Dr. Sarah Smith" avatarSrc="https://via.placeholder.com/80" hasNewMessage={false} />\r
    </Box>
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const xe=["Form","Link","Appointment","Message","MessageWithoutNewIndicator","AllVariants"];export{u as AllVariants,m as Appointment,c as Form,p as Link,d as Message,g as MessageWithoutNewIndicator,xe as __namedExportsOrder,fe as default};

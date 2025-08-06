import{M as y}from"./MessageBubble-BxGl9vNj.js";import"./iframe-CpdnR0i2.js";import"./MessageImage-BMTiF1SR.js";import"./Icon-C0STYbrQ.js";import"./createSvgIcon-C4MRlNQH.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./Drawer-4cK5GzGc.js";import"./Box-Cc3QCFpm.js";import"./useTheme-dL_JtiI5.js";import"./utils-Be2lOGi8.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./useForkRef-k7JvqZ8G.js";import"./getReactElementRef-dg5jktwz.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-CL1wgyoG.js";import"./Modal-DFczexqp.js";import"./useTimeout-BgZTaRCc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-DcuCg741.js";import"./Button-DOuccIOk.js";import"./ButtonBase-DfyOkDKJ.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./Typography-DUyUrCFr.js";import"./FormHelperText-D7QRrrp1.js";import"./FormControl-8E0NZ6Fd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./isMuiElement-5-QtcHpW.js";import"./InputLabel-CkLjBIwK.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BvCR-wSo.js";import"./SectionCategory-fz1Fy2mO.js";import"./Add-ClgTdUVf.js";import"./createSvgIcon-C3FiYK1r.js";import"./useControlled-d9yX6gVw.js";import"./ArrowRight-CFwkqJWg.js";import"./AccordionSummary-CusgB5Ad.js";import"./useSlot-CDCkmms0.js";import"./Collapse-ChKwRi7e.js";import"./IconButton-a3Nxnak7.js";import"./Snackbar-DOrY7AX3.js";import"./Grow-CSCmvqx_.js";import"./Close-J1FGOmMI.js";import"./Stack-Bd6jq2pn.js";import"./MessageOptions-BRMIPCkn.js";import"./eye-tE-gzFm9.js";import"./MessageScheduled-DHC7yzgk.js";import"./Avatar-FJZ4Slfo.js";const fe={title:"Molecules/Message/MessageItem/MessageBubble",component:y,parameters:{layout:"padded",docs:{description:{component:"A message bubble component that displays message content with options."}}},argTypes:{message:{control:"object",description:"The message object containing all message data"}},args:{message:{type:"OUTGOING",text:"Hello! This is a sample message.",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,role:"User"}}},e={args:{message:{type:"OUTGOING",text:"Hello! This is a sample message.",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,role:"User"}}},a={args:{message:{type:"INCOMING",text:"Hi there! This is an incoming message.",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=John",createdAt:new Date}}},t={args:{message:{type:"TEAM_CHAT",text:"This is a team chat message from a specialist.",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",createdAt:new Date,role:"Nutritionist"}}},s={args:{message:{type:"OUTGOING",text:"Check out this image!",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,image:{fileName:"sample-image.jpg",url:"https://picsum.photos/400/300"}}}},r={args:{message:{type:"INCOMING",text:"This message has reactions!",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",createdAt:new Date,reactions:[{icon:"👍",count:3},{icon:"❤️",count:2},{icon:"🎉",count:1}]}}},o={args:{message:{type:"INCOMING",text:"This message has been translated from another language.",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",createdAt:new Date,isTranslated:!0}}},n={args:{message:{type:"OUTGOING",text:"This message is scheduled for later.",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,scheduledTime:new Date(Date.now()+1440*60*1e3),role:"User"}}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    message: {
      type: "OUTGOING",
      text: "Hello! This is a sample message.",
      avatar: "https://avatar.iran.liara.run/public",
      createdAt: new Date(),
      role: "User"
    }
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,g,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: {
      type: "INCOMING",
      text: "Hi there! This is an incoming message.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      createdAt: new Date()
    }
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: {
      type: "TEAM_CHAT",
      text: "This is a team chat message from a specialist.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      createdAt: new Date(),
      role: "Nutritionist"
    }
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,T,M;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    message: {
      type: "OUTGOING",
      text: "Check out this image!",
      avatar: "https://avatar.iran.liara.run/public",
      createdAt: new Date(),
      image: {
        fileName: "sample-image.jpg",
        url: "https://picsum.photos/400/300"
      }
    }
  }
}`,...(M=(T=s.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var b,x,I;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: {
      type: "INCOMING",
      text: "This message has reactions!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      createdAt: new Date(),
      reactions: [{
        icon: "👍",
        count: 3
      }, {
        icon: "❤️",
        count: 2
      }, {
        icon: "🎉",
        count: 1
      }]
    }
  }
}`,...(I=(x=r.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var N,w,D;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    message: {
      type: "INCOMING",
      text: "This message has been translated from another language.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      createdAt: new Date(),
      isTranslated: true
    }
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var O,A,G;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    message: {
      type: "OUTGOING",
      text: "This message is scheduled for later.",
      avatar: "https://avatar.iran.liara.run/public",
      createdAt: new Date(),
      scheduledTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
      // Tomorrow
      role: "User"
    }
  }
}`,...(G=(A=n.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const Ce=["Default","IncomingMessage","TeamChatMessage","MessageWithImage","MessageWithReactions","TranslatedMessage","ScheduledMessage"];export{e as Default,a as IncomingMessage,s as MessageWithImage,r as MessageWithReactions,n as ScheduledMessage,t as TeamChatMessage,o as TranslatedMessage,Ce as __namedExportsOrder,fe as default};

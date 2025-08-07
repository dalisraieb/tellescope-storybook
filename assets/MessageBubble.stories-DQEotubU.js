import{M as y}from"./MessageBubble-CK3wXT4f.js";import"./iframe-C7YkNvSQ.js";import"./MessageImage-6U3A9rXe.js";import"./Icon-CJL_ZT07.js";import"./createSvgIcon-CAcL5gG4.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./Drawer-BerFU-9G.js";import"./Box-okHX6eyU.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useForkRef-C4CjHbyO.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-BDm6ID2S.js";import"./Modal-0dIJzl53.js";import"./useTimeout-BzjaGR02.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-BU_eKGJ3.js";import"./Button-B8jdMY2Z.js";import"./ButtonBase-DinbBO9G.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./Typography-CIh4BeGT.js";import"./FormHelperText-DZqxPJYu.js";import"./FormControl-DmS9Qp8c.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./isMuiElement-4jqovnI5.js";import"./InputLabel-BSDcvnkt.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bxcy2z6E.js";import"./SectionCategory-TepzXezl.js";import"./Add-Dn-QFNkM.js";import"./createSvgIcon-CmLukg3o.js";import"./useControlled-CDtRUcdo.js";import"./ArrowRight-CtcwVm9W.js";import"./AccordionSummary-BqR9m19g.js";import"./useSlot-BT8-D9z4.js";import"./Collapse-CZcd38Sj.js";import"./IconButton-ydU9r2DX.js";import"./Snackbar-C_clFFxS.js";import"./Grow-vDAeiKMi.js";import"./Close-CLF3yX8M.js";import"./Stack-BPribNI5.js";import"./MessageOptions-Bb211irs.js";import"./eye-BXqjAq6F.js";import"./MessageScheduled-Dc7FVIfk.js";import"./Avatar-BMwmp4a_.js";const fe={title:"Molecules/Message/MessageItem/MessageBubble",component:y,parameters:{layout:"padded",docs:{description:{component:"A message bubble component that displays message content with options."}}},argTypes:{message:{control:"object",description:"The message object containing all message data"}},args:{message:{type:"OUTGOING",text:"Hello! This is a sample message.",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,role:"User"}}},e={args:{message:{type:"OUTGOING",text:"Hello! This is a sample message.",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,role:"User"}}},a={args:{message:{type:"INCOMING",text:"Hi there! This is an incoming message.",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=John",createdAt:new Date}}},t={args:{message:{type:"TEAM_CHAT",text:"This is a team chat message from a specialist.",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",createdAt:new Date,role:"Nutritionist"}}},s={args:{message:{type:"OUTGOING",text:"Check out this image!",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,image:{fileName:"sample-image.jpg",url:"https://picsum.photos/400/300"}}}},r={args:{message:{type:"INCOMING",text:"This message has reactions!",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",createdAt:new Date,reactions:[{icon:"👍",count:3},{icon:"❤️",count:2},{icon:"🎉",count:1}]}}},o={args:{message:{type:"INCOMING",text:"This message has been translated from another language.",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",createdAt:new Date,isTranslated:!0}}},n={args:{message:{type:"OUTGOING",text:"This message is scheduled for later.",avatar:"https://avatar.iran.liara.run/public",createdAt:new Date,scheduledTime:new Date(Date.now()+1440*60*1e3),role:"User"}}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

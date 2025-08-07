import{j as r,r as y}from"./iframe-C7YkNvSQ.js";import{M as W}from"./MessageInput-BIdKvG3j.js";import"./icon-button-RetZhsBg.js";import"./IconButton-ydU9r2DX.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./ButtonBase-DinbBO9G.js";import"./useTimeout-BzjaGR02.js";import"./TransitionGroupContext-CotujMke.js";import"./useForkRef-C4CjHbyO.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./Icon-CJL_ZT07.js";import"./createSvgIcon-CAcL5gG4.js";import"./Drawer-BerFU-9G.js";import"./Box-okHX6eyU.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-BDm6ID2S.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-BU_eKGJ3.js";import"./Button-B8jdMY2Z.js";import"./Typography-CIh4BeGT.js";import"./FormHelperText-DZqxPJYu.js";import"./FormControl-DmS9Qp8c.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./isMuiElement-4jqovnI5.js";import"./InputLabel-BSDcvnkt.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bxcy2z6E.js";import"./SectionCategory-TepzXezl.js";import"./Add-Dn-QFNkM.js";import"./createSvgIcon-CmLukg3o.js";import"./useControlled-CDtRUcdo.js";import"./ArrowRight-CtcwVm9W.js";import"./AccordionSummary-BqR9m19g.js";import"./useSlot-BT8-D9z4.js";import"./Collapse-CZcd38Sj.js";import"./Snackbar-C_clFFxS.js";import"./Grow-vDAeiKMi.js";import"./Close-CLF3yX8M.js";import"./eye-BXqjAq6F.js";import"./Divider-CInqqJsa.js";import"./dividerClasses-6wmrs3Ei.js";import"./ChatBubbleOutline-CuB7u-mM.js";import"./Link-j3UsXMGu.js";import"./Stack-BPribNI5.js";import"./InputBase-wxT8anmG.js";const Le={title:"Molecules/Message/MessageInput",component:W,parameters:{layout:"padded",docs:{description:{component:"A comprehensive message input component with support for different chat interfaces, team chat mode, and various configuration options."}}},argTypes:{enableTeamChat:{control:"boolean",description:"Enables team chat mode with additional action buttons"},chatInterface:{control:"select",options:["CHAT","SMS","EMAIL","MMS"],description:"The type of chat interface being used"},onSubmit:{action:"submitted",description:"Callback fired when a message is submitted"},onInputChange:{action:"input changed",description:"Callback fired when input value changes"},config:{control:"object",description:"Configuration object for input behavior and appearance"}},args:{enableTeamChat:!1,chatInterface:"CHAT",onSubmit:e=>console.log("Message submitted:",e),onInputChange:e=>console.log("Input changed:",e),config:{placeholder:"Type a message...",maxLength:1e3,autoFocus:!1,disabled:!1,error:!1,showCharacterCount:!1,multiline:!1}}},c=e=>{const[w,v]=y.useState(e.chatInterface);return r.jsx(W,{...e,chatInterface:w,setChatInterface:v})},t={render:e=>r.jsx(c,{...e}),args:{chatInterface:"CHAT"}},a={render:e=>r.jsx(c,{...e}),args:{chatInterface:"SMS"}},o={render:e=>r.jsx(c,{...e}),args:{chatInterface:"EMAIL"}},s={render:e=>r.jsx(c,{...e}),args:{chatInterface:"MMS"}},n={args:{config:{disabled:!0,placeholder:"Input is disabled"}}},i={args:{config:{error:!0,placeholder:"Error state"}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <MessageInputWithState {...args} />,
  args: {
    chatInterface: 'CHAT'
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <MessageInputWithState {...args} />,
  args: {
    chatInterface: 'SMS'
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,h,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <MessageInputWithState {...args} />,
  args: {
    chatInterface: 'EMAIL'
  }
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var M,S,b;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <MessageInputWithState {...args} />,
  args: {
    chatInterface: 'MMS'
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,E,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    config: {
      disabled: true,
      placeholder: 'Input is disabled'
    }
  }
}`,...(x=(E=n.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var j,T,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    config: {
      error: true,
      placeholder: 'Error state'
    }
  }
}`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const ke=["Default","SMSInterface","EmailInterface","MMSInterface","Disabled","WithError"];export{t as Default,n as Disabled,o as EmailInterface,s as MMSInterface,a as SMSInterface,i as WithError,ke as __namedExportsOrder,Le as default};

import{j as r,r as y}from"./iframe-CpdnR0i2.js";import{M as W}from"./MessageInput-DnOLJsmT.js";import"./icon-button-Y5vMW5TR.js";import"./IconButton-a3Nxnak7.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./ButtonBase-DfyOkDKJ.js";import"./useTimeout-BgZTaRCc.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./useForkRef-k7JvqZ8G.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./Icon-C0STYbrQ.js";import"./createSvgIcon-C4MRlNQH.js";import"./Drawer-4cK5GzGc.js";import"./Box-Cc3QCFpm.js";import"./useTheme-dL_JtiI5.js";import"./utils-Be2lOGi8.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./getReactElementRef-dg5jktwz.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-CL1wgyoG.js";import"./Modal-DFczexqp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-DcuCg741.js";import"./Button-DOuccIOk.js";import"./Typography-DUyUrCFr.js";import"./FormHelperText-D7QRrrp1.js";import"./FormControl-8E0NZ6Fd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./isMuiElement-5-QtcHpW.js";import"./InputLabel-CkLjBIwK.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BvCR-wSo.js";import"./SectionCategory-fz1Fy2mO.js";import"./Add-ClgTdUVf.js";import"./createSvgIcon-C3FiYK1r.js";import"./useControlled-d9yX6gVw.js";import"./ArrowRight-CFwkqJWg.js";import"./AccordionSummary-CusgB5Ad.js";import"./useSlot-CDCkmms0.js";import"./Collapse-ChKwRi7e.js";import"./Snackbar-DOrY7AX3.js";import"./Grow-CSCmvqx_.js";import"./Close-J1FGOmMI.js";import"./eye-tE-gzFm9.js";import"./Divider-Bute_Vbv.js";import"./dividerClasses-DwUrptCk.js";import"./ChatBubbleOutline-CQTov31q.js";import"./Link-B_9hc5w-.js";import"./Stack-Bd6jq2pn.js";import"./InputBase-DoBoD0Ub.js";const Le={title:"Molecules/Message/MessageInput",component:W,parameters:{layout:"padded",docs:{description:{component:"A comprehensive message input component with support for different chat interfaces, team chat mode, and various configuration options."}}},argTypes:{enableTeamChat:{control:"boolean",description:"Enables team chat mode with additional action buttons"},chatInterface:{control:"select",options:["CHAT","SMS","EMAIL","MMS"],description:"The type of chat interface being used"},onSubmit:{action:"submitted",description:"Callback fired when a message is submitted"},onInputChange:{action:"input changed",description:"Callback fired when input value changes"},config:{control:"object",description:"Configuration object for input behavior and appearance"}},args:{enableTeamChat:!1,chatInterface:"CHAT",onSubmit:e=>console.log("Message submitted:",e),onInputChange:e=>console.log("Input changed:",e),config:{placeholder:"Type a message...",maxLength:1e3,autoFocus:!1,disabled:!1,error:!1,showCharacterCount:!1,multiline:!1}}},c=e=>{const[w,v]=y.useState(e.chatInterface);return r.jsx(W,{...e,chatInterface:w,setChatInterface:v})},t={render:e=>r.jsx(c,{...e}),args:{chatInterface:"CHAT"}},a={render:e=>r.jsx(c,{...e}),args:{chatInterface:"SMS"}},o={render:e=>r.jsx(c,{...e}),args:{chatInterface:"EMAIL"}},s={render:e=>r.jsx(c,{...e}),args:{chatInterface:"MMS"}},n={args:{config:{disabled:!0,placeholder:"Input is disabled"}}},i={args:{config:{error:!0,placeholder:"Error state"}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

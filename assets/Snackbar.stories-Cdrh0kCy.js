import{e}from"./iframe-CpdnR0i2.js";import{C as d}from"./Close-BUkdjj13.js";import{S as f}from"./Snackbar-DOrY7AX3.js";import{B as h}from"./Button-DOuccIOk.js";import{I as k}from"./IconButton-a3Nxnak7.js";import"./createSvgIcon-C3FiYK1r.js";import"./createSvgIcon-C4MRlNQH.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-5-QtcHpW.js";import"./useForkRef-k7JvqZ8G.js";import"./useControlled-d9yX6gVw.js";import"./useTimeout-BgZTaRCc.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useTheme-dL_JtiI5.js";import"./Grow-CSCmvqx_.js";import"./utils-Be2lOGi8.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./getReactElementRef-dg5jktwz.js";import"./useSlotProps-DcuCg741.js";import"./Paper-CL1wgyoG.js";import"./useSlot-CDCkmms0.js";import"./Close-J1FGOmMI.js";import"./Box-Cc3QCFpm.js";import"./ButtonBase-DfyOkDKJ.js";const X={title:"Atoms/Snackbar",component:f,parameters:{layout:"centered",docs:{description:{component:"A basic Snackbar component for displaying brief messages to users."}}},argTypes:{open:{control:"boolean",description:"Whether the snackbar is open (required)"},message:{control:"text",description:"The message to display in the snackbar"}}},a=()=>{console.log("Close action triggered")},t={args:{open:!1,message:"This is a default snackbar message",asAlert:!1}},r={args:{open:!1,message:"Message sent successfully",action:e.createElement(e.Fragment,{},e.createElement(h,{size:"small",variant:"text",color:"inherit",onClick:a},"UNDO"),e.createElement(k,{size:"small","aria-label":"close",color:"inherit",onClick:a},e.createElement(d,{fontSize:"small"})))}},s={args:{open:!1,message:"Warning! Please check your input",asAlert:!0}};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    open: false,
    message: 'This is a default snackbar message',
    asAlert: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: false,
    message: 'Message sent successfully',
    action: React.createElement(React.Fragment, {}, React.createElement(Button, {
      size: 'small',
      variant: 'text',
      color: 'inherit',
      onClick: handleClose
    }, 'UNDO'), React.createElement(IconButton, {
      size: 'small',
      'aria-label': 'close',
      color: 'inherit',
      onClick: handleClose
    }, React.createElement(CloseIcon, {
      fontSize: 'small'
    })))
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,g,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: false,
    message: 'Warning! Please check your input',
    asAlert: true
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Y=["Default","WithActions","Alert"];export{s as Alert,t as Default,r as WithActions,Y as __namedExportsOrder,X as default};

import{e}from"./iframe-C7YkNvSQ.js";import{C as d}from"./Close-B8hEUAZw.js";import{S as f}from"./Snackbar-C_clFFxS.js";import{B as h}from"./Button-B8jdMY2Z.js";import{I as k}from"./IconButton-ydU9r2DX.js";import"./createSvgIcon-CmLukg3o.js";import"./createSvgIcon-CAcL5gG4.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-4jqovnI5.js";import"./useForkRef-C4CjHbyO.js";import"./useControlled-CDtRUcdo.js";import"./useTimeout-BzjaGR02.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./useTheme-DaYcaQ3H.js";import"./Grow-vDAeiKMi.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./getReactElementRef-BlSFz3Vq.js";import"./useSlotProps-BU_eKGJ3.js";import"./Paper-BDm6ID2S.js";import"./useSlot-BT8-D9z4.js";import"./Close-CLF3yX8M.js";import"./Box-okHX6eyU.js";import"./ButtonBase-DinbBO9G.js";const X={title:"Atoms/Snackbar",component:f,parameters:{layout:"centered",docs:{description:{component:"A basic Snackbar component for displaying brief messages to users."}}},argTypes:{open:{control:"boolean",description:"Whether the snackbar is open (required)"},message:{control:"text",description:"The message to display in the snackbar"}}},a=()=>{console.log("Close action triggered")},t={args:{open:!1,message:"This is a default snackbar message",asAlert:!1}},r={args:{open:!1,message:"Message sent successfully",action:e.createElement(e.Fragment,{},e.createElement(h,{size:"small",variant:"text",color:"inherit",onClick:a},"UNDO"),e.createElement(k,{size:"small","aria-label":"close",color:"inherit",onClick:a},e.createElement(d,{fontSize:"small"})))}},s={args:{open:!1,message:"Warning! Please check your input",asAlert:!0}};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

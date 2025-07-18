import{j as e}from"./iframe-B6hPRLvE.js";import{M as n}from"./MessageInput-BQTM9lUT.js";import"./createSvgIcon-TL-ltilD.js";import"./createSvgIcon-Cd6zCl4P.js";import"./styled-Rc4ikHLI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-B_mmvVf4.js";import"./useTimeout-B4QmwxA7.js";import"./useId-BR_BWiP_.js";import"./useControlled-CfTk7emU.js";import"./useIsFocusVisible-CWL7ywU2.js";import"./nice-7U4jMAOW.js";import"./Box-iLS2pYYB.js";import"./IconButton-yGVPIgv8.js";import"./ButtonBase-1LTz6Pn6.js";import"./TransitionGroupContext-Dj08XMFC.js";import"./InputBase-Ps_PzXNt.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BtT_9nwa.js";import"./utils-DoM3o7-Q.js";import"./isHostComponent-DVu5iVWx.js";import"./dividerClasses-zMu8IGbe.js";const E={title:"Molecules/Message/MessageInput",component:n,parameters:{layout:"centered",docs:{description:{component:"A complete message input interface with a toolbar for various actions and a text input field with send functionality."}}},argTypes:{disabled:{control:"boolean",description:"Disables the entire message input interface"},error:{control:"boolean",description:"Shows error state with red border on input"}}},r={args:{disabled:!1,error:!1},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Default"}),e.jsx(n,{})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Disabled"}),e.jsx(n,{disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Error"}),e.jsx(n,{error:!0})]})]}),parameters:{docs:{description:{story:"A comparison view showing all possible states of the Message component."}}}};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: false,
    error: false
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "400px"
  }}>\r
      <div>\r
        <h3 style={{
        margin: "0 0 10px 0",
        fontSize: "14px",
        fontWeight: "bold"
      }}>\r
          Default\r
        </h3>\r
        <MessageInput />\r
      </div>\r
      <div>\r
        <h3 style={{
        margin: "0 0 10px 0",
        fontSize: "14px",
        fontWeight: "bold"
      }}>\r
          Disabled\r
        </h3>\r
        <MessageInput disabled />\r
      </div>\r
      <div>\r
        <h3 style={{
        margin: "0 0 10px 0",
        fontSize: "14px",
        fontWeight: "bold"
      }}>\r
          Error\r
        </h3>\r
        <MessageInput error />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A comparison view showing all possible states of the Message component."
      }
    }
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const A=["Default"];export{r as Default,A as __namedExportsOrder,E as default};

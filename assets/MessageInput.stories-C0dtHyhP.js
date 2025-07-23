import{j as e}from"./iframe-Bv6dwyi6.js";import{M as n}from"./MessageInput-CP5dDKXA.js";import"./createSvgIcon-CKdMn4wO.js";import"./createSvgIcon-BJSFEBnp.js";import"./styled-1wupYI6N.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Cd5s-INa.js";import"./useTimeout-B_DK4l75.js";import"./useId-5SlOnbtB.js";import"./useControlled-Bh7QF-ia.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./nice-TgOL8Xpf.js";import"./Box-BzyrmKLH.js";import"./IconButton-B97976Nu.js";import"./ButtonBase-_JbzIVNU.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./InputBase-BELbqXUV.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DVbzj1df.js";import"./utils-DoM3o7-Q.js";import"./isHostComponent-DVu5iVWx.js";import"./dividerClasses-CeLMdPFz.js";const E={title:"Molecules/Message/MessageInput",component:n,parameters:{layout:"centered",docs:{description:{component:"A complete message input interface with a toolbar for various actions and a text input field with send functionality."}}},argTypes:{disabled:{control:"boolean",description:"Disables the entire message input interface"},error:{control:"boolean",description:"Shows error state with red border on input"}}},r={args:{disabled:!1,error:!1},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Default"}),e.jsx(n,{})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Disabled"}),e.jsx(n,{disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Error"}),e.jsx(n,{error:!0})]})]}),parameters:{docs:{description:{story:"A comparison view showing all possible states of the Message component."}}}};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

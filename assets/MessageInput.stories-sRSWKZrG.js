import{j as e}from"./iframe-CQw1bh_3.js";import{M as n}from"./MessageInput-BCsSU1eN.js";import"./createSvgIcon-D0mVd8bh.js";import"./createSvgIcon-CPZXexn_.js";import"./styled-0urVwbhR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-c5mTnCJM.js";import"./useTimeout-CUAEDxbs.js";import"./useId-CBKkpWLc.js";import"./useControlled-DKLpkiav.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./nice-BEAm4_CR.js";import"./Box-1eo89r2K.js";import"./IconButton-CEYTmHaP.js";import"./ButtonBase-CawyO1_w.js";import"./TransitionGroupContext-ucckMPrU.js";import"./InputBase-G_Xq6-VF.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D7aixEVT.js";import"./utils-DoM3o7-Q.js";import"./isHostComponent-DVu5iVWx.js";import"./dividerClasses-Cr81tDjM.js";const E={title:"Molecules/Message/MessageInput",component:n,parameters:{layout:"centered",docs:{description:{component:"A complete message input interface with a toolbar for various actions and a text input field with send functionality."}}},argTypes:{disabled:{control:"boolean",description:"Disables the entire message input interface"},error:{control:"boolean",description:"Shows error state with red border on input"}}},r={args:{disabled:!1,error:!1},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",minWidth:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Default"}),e.jsx(n,{})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Disabled"}),e.jsx(n,{disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"14px",fontWeight:"bold"},children:"Error"}),e.jsx(n,{error:!0})]})]}),parameters:{docs:{description:{story:"A comparison view showing all possible states of the Message component."}}}};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

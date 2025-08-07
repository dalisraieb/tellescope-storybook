import{r as m,j as p}from"./iframe-C7YkNvSQ.js";import{C as o}from"./ChatInput-DXK9AeG8.js";import"./createSvgIcon-CmLukg3o.js";import"./createSvgIcon-CAcL5gG4.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-4jqovnI5.js";import"./useForkRef-C4CjHbyO.js";import"./useControlled-CDtRUcdo.js";import"./useTimeout-BzjaGR02.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./Paper-BDm6ID2S.js";import"./InputBase-wxT8anmG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DA987-lg.js";import"./utils-DoM3o7-Q.js";import"./isHostComponent-DVu5iVWx.js";import"./IconButton-ydU9r2DX.js";import"./ButtonBase-DinbBO9G.js";import"./TransitionGroupContext-CotujMke.js";const k={title:"Atoms/Chat Input",component:o},e={argTypes:{value:{table:{disable:!0}},placeholder:{table:{disable:!0}},disabled:{table:{disable:!0}},onChange:{table:{disable:!0}},onSend:{table:{disable:!0}}},render:()=>{const[t,n]=m.useState(""),l=()=>{alert(`Sending message: ${t}`),n("")};return p.jsx(o,{value:t,onChange:i=>n(i.target.value),onSend:l})}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    placeholder: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    onSend: {
      table: {
        disable: true
      }
    }
  },
  render: () => {
    const [message, setMessage] = useState("");
    const handleSend = () => {
      alert(\`Sending message: \${message}\`);
      setMessage("");
    };
    return <ChatInput value={message} onChange={e => setMessage(e.target.value)} onSend={handleSend} />;
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,k as default};

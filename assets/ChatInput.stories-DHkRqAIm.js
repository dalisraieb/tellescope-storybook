import{r as m,j as p}from"./iframe-CpdnR0i2.js";import{C as o}from"./ChatInput-CMxHpOPr.js";import"./createSvgIcon-C3FiYK1r.js";import"./createSvgIcon-C4MRlNQH.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-5-QtcHpW.js";import"./useForkRef-k7JvqZ8G.js";import"./useControlled-d9yX6gVw.js";import"./useTimeout-BgZTaRCc.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./Paper-CL1wgyoG.js";import"./InputBase-DoBoD0Ub.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bdg8Z9sC.js";import"./utils-DoM3o7-Q.js";import"./isHostComponent-DVu5iVWx.js";import"./IconButton-a3Nxnak7.js";import"./ButtonBase-DfyOkDKJ.js";import"./TransitionGroupContext-B3hU1AzR.js";const k={title:"Atoms/Chat Input",component:o},e={argTypes:{value:{table:{disable:!0}},placeholder:{table:{disable:!0}},disabled:{table:{disable:!0}},onChange:{table:{disable:!0}},onSend:{table:{disable:!0}}},render:()=>{const[t,n]=m.useState(""),l=()=>{alert(`Sending message: ${t}`),n("")};return p.jsx(o,{value:t,onChange:i=>n(i.target.value),onSend:l})}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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

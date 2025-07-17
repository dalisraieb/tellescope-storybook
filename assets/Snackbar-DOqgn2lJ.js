import{j as n}from"./iframe-DccEvDzC.js";import{useMDXComponents as a}from"./index-CONVb01i.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx(e.p,{children:"The Snackbar component provides a way to display brief messages to users in a non-intrusive manner."}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Snackbar\r
  open={true}\r
  message="This is a snackbar message"\r
/>
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(e.p,{children:`| Prop | Type | Default | Description |\r
|------|------|---------|-------------|\r
| open | boolean | - | Controls whether the snackbar is displayed |\r
| message | string | "This is a snackbar message" | The text content of the snackbar |\r
| asAlert | boolean | false | When true, displays the snackbar with alert styling (red background) |\r
| action | React.ReactNode | - | Optional action elements to display in the snackbar |`}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default-snackbar",children:"Default Snackbar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Snackbar\r
  open={true}\r
  message="This is a default snackbar message"\r
/>
`})}),`
`,n.jsx(e.h3,{id:"alert-snackbar",children:"Alert Snackbar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Snackbar\r
  open={true}\r
  message="Warning! Please check your input"\r
  asAlert={true}\r
/>
`})}),`
`,n.jsx(e.h3,{id:"with-action-buttons",children:"With Action Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Snackbar\r
  open={true}\r
  message="Message sent successfully"\r
  action={\r
    <>\r
      <Button \r
        size="small"\r
        variant="text"\r
        color="inherit"\r
        onClick={handleClose}\r
      >\r
        UNDO\r
      </Button>\r
      <IconButton\r
        size="small"\r
        aria-label="close"\r
        color="inherit"\r
        onClick={handleClose}\r
      >\r
        <CloseIcon fontSize="small" />\r
      </IconButton>\r
    </>\r
  }\r
/>
`})}),`
`,n.jsx(e.h2,{id:"styling",children:"Styling"}),`
`,n.jsx(e.p,{children:"The component uses Material UI's Snackbar and Alert components with custom styling:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default: Dark blue background (#151B2C)"}),`
`,n.jsx(e.li,{children:"Alert: Red background (#BA1A1A)"}),`
`,n.jsx(e.li,{children:"Enhanced box shadow for better visibility"}),`
`]})]})}function l(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{l as default};

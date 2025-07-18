import{j as n}from"./iframe-CQw1bh_3.js";import{useMDXComponents as l}from"./index-O0xZlPfa.js";import{M as r,C as o,A as t}from"./blocks-CN6QVQQC.js";import{D as a,a as c,C as d,b as h}from"./Dialog.stories-YKMuWsac.js";import"./index-BU1ft_YN.js";import"./index-D7rk0scn.js";import"./Close-BC1LdMDY.js";import"./createSvgIcon-D0mVd8bh.js";import"./createSvgIcon-CPZXexn_.js";import"./styled-0urVwbhR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-c5mTnCJM.js";import"./useTimeout-CUAEDxbs.js";import"./useId-CBKkpWLc.js";import"./useControlled-DKLpkiav.js";import"./useIsFocusVisible-DCSDlLBr.js";import"./Button-ZrOHyzlF.js";import"./ButtonBase-CawyO1_w.js";import"./TransitionGroupContext-ucckMPrU.js";import"./useTheme-CONGIyUh.js";import"./Paper-DoXoRAIi.js";import"./Modal-B5tUVl_X.js";import"./resolveComponentProps-BAz9eB7D.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-CC53gLXq.js";import"./getReactElementRef-BFTcAmDX.js";import"./Typography-CETEvHWw.js";import"./Box-1eo89r2K.js";import"./IconButton-CEYTmHaP.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:a}),`
`,n.jsx(e.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx(e.p,{children:"The Dialog component is a versatile modal dialog built with Material UI v5 that provides a consistent way to display alerts, forms, confirmations, and other interactive content."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Multiple Sizes"}),": Choose from 3 different sizes (",n.jsx(e.code,{children:"xs"}),", ",n.jsx(e.code,{children:"sm"}),", ",n.jsx(e.code,{children:"md"}),") to fit your content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flexible Actions"}),": Support for customizable action buttons with different colors and variants"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Title"}),": Optional title for the dialog"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Close Button"}),": Optional close button in the top-right corner for easy dismissal"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Collapsible"}),": Option to minimize dialog to title bar only, useful for keeping dialogs accessible but out of the way"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Background Control"}),": Option to show or hide the background overlay/backdrop"]}),`
`]}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.p,{children:"The Dialog component displays with sample content and can be configured using the available controls."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"To view the dialog examples:"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Click on any story below to open it in the Canvas"}),`
`,n.jsxs(e.li,{children:["Use the ",n.jsx(e.strong,{children:"Controls"})," panel to toggle the dialog settings"]}),`
`,n.jsx(e.li,{children:"The dialog will update based on your control selections"}),`
`]}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h2,{id:"collapsible-dialog",children:"Collapsible Dialog"}),`
`,n.jsx(e.p,{children:"Make dialogs collapsible to minimize them to just the title bar, useful for keeping dialogs accessible but out of the way:"}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(e.h2,{id:"controls",children:"Controls"}),`
`,n.jsx(e.p,{children:"The following controls are available for customizing the dialog:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Size"}),": Choose from xs, sm, or md"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Actions"}),": Configure action buttons (array of button objects)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Background"}),": Toggle the background overlay/backdrop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Close Button"}),": Toggle the close button in the top-right corner"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Collapsible"}),": Enable collapsible functionality (available in specific stories)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h2,{id:"action-object-interface",children:"Action Object Interface"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"actions"})," prop accepts an array of objects with the following structure:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface DialogAction {\r
  label: string;                    // Button text\r
  onClick: () => void;              // Click handler\r
  color?: 'primary' | 'error' | 'secondary' | 'success' | 'info' | 'warning';\r
  variant?: 'contained' | 'outlined' | 'text';\r
  disabled?: boolean;               // Whether the button is disabled\r
  closeButton?: boolean;            // Whether this action includes a close button\r
}
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"basic-dialog",children:"Basic Dialog"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Dialog\r
  open={open}\r
  size="sm"\r
  background={true}\r
>\r
  <Typography>This is a sample dialog description that explains what the dialog is for and provides context to the user.</Typography>\r
</Dialog>
`})}),`
`,n.jsx(e.h3,{id:"dialog-with-actions",children:"Dialog with Actions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Dialog\r
  open={open}\r
  size="md"\r
  background={true}\r
  actions={[\r
    { label: 'Cancel', onClick: handleClose, variant: 'text' },\r
    { label: 'Confirm', onClick: handleConfirm, variant: 'contained' }\r
  ]}\r
/>
`})}),`
`,n.jsx(e.h3,{id:"dialog-with-close-button",children:"Dialog with Close Button"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Dialog\r
  open={open}\r
  size="sm"\r
  background={true}\r
  closeButton={true}\r
  actions={[\r
    { label: 'Cancel', onClick: handleClose, variant: 'text' },\r
    { label: 'Save', onClick: handleSave, variant: 'contained' }\r
  ]}\r
/>
`})}),`
`,n.jsx(e.h3,{id:"collapsible-dialog-1",children:"Collapsible Dialog"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Dialog\r
  open={open}\r
  size="sm"\r
  background={true}\r
  collapsible={true}\r
  closeButton={true}\r
  actions={[\r
    { label: 'Cancel', onClick: handleClose, variant: 'text' },\r
    { label: 'Apply', onClick: handleApply, variant: 'contained' }\r
  ]}\r
/>
`})}),`
`,n.jsx(e.h2,{id:"available-sizes",children:"Available Sizes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"xs"}),": Extra small dialog for minimal content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"sm"}),": Small dialog (default) for standard use cases"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"md"}),": Medium dialog for more content or forms"]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use appropriate sizes"}),": Choose the size that best fits your content without excessive white space"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clear button labels"}),": Use descriptive labels that clearly indicate what will happen"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent colors"}),": Use ",n.jsx(e.code,{children:"error"})," color for destructive actions, ",n.jsx(e.code,{children:"primary"})," for main actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Close button"}),": Consider adding a close button for non-critical dialogs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Collapsible option"}),": Use collapsible dialogs for non-blocking notifications or secondary information"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Background control"}),": Use background overlay for modal dialogs, consider disabling for overlay content"]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The Dialog component includes built-in accessibility features:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus management"}),": Focus is automatically trapped within the dialog"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard navigation"}),": Tab cycles through interactive elements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Screen reader support"}),": Proper ARIA labels and roles are automatically applied"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Color contrast"}),": Material UI ensures proper color contrast for all variants"]}),`
`]})]})}function _(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{_ as default};

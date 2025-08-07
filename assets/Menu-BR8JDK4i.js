import{j as e}from"./iframe-C7YkNvSQ.js";import{useMDXComponents as r}from"./index-CWqWarbL.js";import{M as o,C as s,A as c}from"./blocks-UYr0AJMd.js";import{M as l,D as h,a as d,S as a,b as m}from"./Menu.stories-Cnz8SxVX.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./Star-U0nG9LrA.js";import"./createSvgIcon-CmLukg3o.js";import"./createSvgIcon-CAcL5gG4.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-4jqovnI5.js";import"./useForkRef-C4CjHbyO.js";import"./useControlled-CDtRUcdo.js";import"./useTimeout-BzjaGR02.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./Box-okHX6eyU.js";import"./TextField-CKlHBCga.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./TransitionGroupContext-CotujMke.js";import"./getReactElementRef-BlSFz3Vq.js";import"./Modal-0dIJzl53.js";import"./List-4AeG_tC3.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DA987-lg.js";import"./InputBase-wxT8anmG.js";import"./InputLabel-BSDcvnkt.js";import"./FormLabel-Bxcy2z6E.js";import"./FormControl-DmS9Qp8c.js";import"./Check-srMR41A8.js";import"./MenuItem-BzwDd5tb.js";import"./ButtonBase-DinbBO9G.js";import"./listItemTextClasses-BVuUz09p.js";import"./dividerClasses-6wmrs3Ei.js";import"./ListItemIcon-B6EQeCdB.js";import"./ListItemText-CUqI4k6h.js";import"./Typography-CIh4BeGT.js";import"./Checkbox-CtOlTCly.js";import"./SwitchBase-poeQoh38.js";import"./Switch-JhjkuGDR.js";import"./ArrowRight-CtcwVm9W.js";import"./Divider-CInqqJsa.js";import"./Stack-BPribNI5.js";import"./Button-B8jdMY2Z.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"menu",children:"Menu"}),`
`,e.jsx(n.p,{children:"The Menu component is a customizable dropdown menu built with Material UI v5. It can contain various interactive items like simple menu items, checkboxes, and switches. It also has a built-in search functionality."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Searchable"}),": Includes an optional search bar to filter menu items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dense Mode"}),": Supports a compact layout with 32px item height for space-efficient menus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Composable Items"}),": Supports different types of menu items:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Menu.Item"}),": A standard menu item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Menu.Checkbox"}),": A menu item with a checkbox."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Menu.Switch"}),": A menu item with a switch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Menu.SubMenu"}),": A menu item that opens a secondary menu with nested items."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Customizable"}),": Built on top of MUI's Menu, so it accepts all ",e.jsx(n.code,{children:"MenuProps"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Menu"})," component is controlled by ",e.jsx(n.code,{children:"anchorEl"}),", ",e.jsx(n.code,{children:"open"}),", and ",e.jsx(n.code,{children:"onClose"})," props, similar to MUI's Menu. You can compose different item types within the menu."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"To view the menu examples:"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Click on the "Open Menu" button to show the menu.'}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.strong,{children:"Controls"})," panel to toggle the ",e.jsx(n.code,{children:"search"})," and ",e.jsx(n.code,{children:"dense"})," functionality."]}),`
`,e.jsx(n.li,{children:"Interact with the different menu items."}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"dense-mode",children:"Dense Mode"}),`
`,e.jsx(n.p,{children:"The Menu component supports a dense layout that reduces the height of menu items to 32px. This is useful for space-constrained interfaces or when you need to fit more items in a smaller area. The search field also adapts its height when dense mode is enabled."}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"sub-menu",children:"Sub Menu"}),`
`,e.jsx(n.p,{children:"The Menu component also supports nested sub-menus that open when clicked:"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"controls",children:"Controls"}),`
`,e.jsx(n.p,{children:"The following controls are available for customizing the menu:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"search"}),": Toggles the search bar visibility within the menu."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"dense"}),": Enables dense mode with 32px height menu items for compact layouts."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(n.h2,{id:"composable-components",children:"Composable Components"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Menu"})," component comes with sub-components that can be used as children."]}),`
`,e.jsx(n.h3,{id:"menuitem",children:"Menu.Item"}),`
`,e.jsx(n.p,{children:"A standard menu item that can have an icon and a selected state."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Menu.Item selected={selected === "Name"} onClick={() => setSelected("Name")} icon={<Star />}>\r
  Name\r
</Menu.Item>
`})}),`
`,e.jsx(n.h3,{id:"menucheckbox",children:"Menu.Checkbox"}),`
`,e.jsx(n.p,{children:"A menu item that functions as a checkbox."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Menu.Checkbox\r
  checked={checked.includes("Appointments")}\r
  onClick={() => setChecked((prev) => (prev.includes("Appointments") ? prev.filter((i) => i !== "Appointments") : [...prev, "Appointments"]))}\r
>\r
  Appointments\r
</Menu.Checkbox>
`})}),`
`,e.jsx(n.h3,{id:"menuswitch",children:"Menu.Switch"}),`
`,e.jsx(n.p,{children:"A menu item that functions as a switch."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Menu.Switch checked={switches.Documents ?? false} onClick={() => setSwitches((p) => ({ ...p, Documents: !p.Documents }))}>\r
  Documents\r
</Menu.Switch>
`})}),`
`,e.jsx(n.h3,{id:"menusubmenu",children:"Menu.SubMenu"}),`
`,e.jsx(n.p,{children:"A menu item that opens a secondary menu when clicked. Perfect for organizing related actions into nested groups."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Menu.SubMenu text="More options" icon={<Star />}>\r
  <Menu.Item>Sub-item 1</Menu.Item>\r
  <Menu.Item>Sub-item 2</Menu.Item>\r
  <Menu.SubMenu text="Nested submenu">\r
    <Menu.Item>Deeply nested item</Menu.Item>\r
  </Menu.SubMenu>\r
</Menu.SubMenu>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text"}),": The display text for the sub-menu item"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icon"}),": Optional icon to display alongside the text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"children"}),": The menu items to display in the sub-menu"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Behavior:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Click to open/close the sub-menu"}),`
`,e.jsx(n.li,{children:"Sub-menu appears to the right of the parent menu"}),`
`,e.jsx(n.li,{children:"Can be nested multiple levels deep"}),`
`,e.jsx(n.li,{children:"Automatically closes when clicking outside"}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsxs(n.p,{children:["Here is a full example of how to use the ",e.jsx(n.code,{children:"Menu"})," component with its composable items."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from "react";\r
import { Button, Divider } from "@mui/material";\r
import { Menu } from "./Menu";\r
import Star from "@mui/icons-material/Star";\r
\r
const MyMenu = () => {\r
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);\r
  const [selected, setSelected] = useState<string | null>(null);\r
  const [checked, setChecked] = useState<string[]>([]);\r
  const [switches, setSwitches] = useState<Record<string, boolean>>({});\r
\r
  const open = Boolean(anchorEl);\r
  const handleClose = () => setAnchorEl(null);\r
\r
  return (\r
    <>\r
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>\r
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} search dense>\r
        <Menu.Item selected={selected === "Name"} onClick={() => setSelected("Name")} icon={<Star />}>\r
          Name\r
        </Menu.Item>\r
        <Menu.Item selected={selected === "Care Team"} onClick={() => setSelected("Care Team")}>\r
          Care Team\r
        </Menu.Item>\r
        <Divider />\r
        <Menu.Checkbox\r
          checked={checked.includes("Appointments")}\r
          onClick={() => setChecked((prev) => (prev.includes("Appointments") ? prev.filter((i) => i !== "Appointments") : [...prev, "Appointments"]))}\r
        >\r
          Appointments\r
        </Menu.Checkbox>\r
        <Menu.Checkbox\r
          checked={checked.includes("Messages")}\r
          onClick={() => setChecked((prev) => (prev.includes("Messages") ? prev.filter((i) => i !== "Messages") : [...prev, "Messages"]))}\r
        >\r
          Messages\r
        </Menu.Checkbox>\r
        <Divider />\r
        <Menu.Switch checked={switches.Documents ?? false} onClick={() => setSwitches((p) => ({ ...p, Documents: !p.Documents }))}>\r
          Documents\r
        </Menu.Switch>\r
        <Divider />\r
        <Menu.SubMenu text="More options" icon={<Star />}>\r
          <Menu.Item>Export Data</Menu.Item>\r
          <Menu.Item>Import Data</Menu.Item>\r
          <Menu.SubMenu text="Advanced">\r
            <Menu.Item>Debug Mode</Menu.Item>\r
            <Menu.Item>Developer Tools</Menu.Item>\r
          </Menu.SubMenu>\r
        </Menu.SubMenu>\r
      </Menu>\r
    </>\r
  );\r
}
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The Menu component leverages Material UI's Menu for accessibility, including:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus management"}),": Focus is automatically trapped within the menu."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard navigation"}),": Arrow keys can be used to navigate between items, and ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," can be used to activate them."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Screen reader support"}),": Proper ARIA labels and roles are automatically applied."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sub-menu navigation"}),": Sub-menus can be opened with ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," and closed with ",e.jsx(n.code,{children:"Escape"}),"."]}),`
`]})]})}function pe(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{pe as default};

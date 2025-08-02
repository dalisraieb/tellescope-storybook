import{j as n}from"./iframe-DfEpVtbN.js";import{useMDXComponents as s}from"./index-BBT-_OR1.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"drawer",children:"Drawer"}),`
`,n.jsx(e.p,{children:"A versatile drawer component that slides in from the right side of the screen. Built with Material-UI's Drawer component, it provides flexible containers for navigation menus, forms, settings panels, and other overlay content with automatic content-based sizing and proper content-pushing behavior for persistent drawers."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Auto-sizing"}),": Automatically adjusts width based on content size"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content-driven layout"}),": No need to specify fixed widths - the drawer adapts to your content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Two variants"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Temporary (overlay)"}),": Slides over content with backdrop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Persistent"}),": Pushes main content aside when open (no backdrop)"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hug Contents option"}),": For temporary variant, choose between content-hugging or fixed width"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Proper content pushing"}),": Persistent drawers correctly push main content using Material-UI's styled components pattern"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"basic-temporary-drawer",children:"Basic Temporary Drawer"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Drawer } from './Drawer';\r
\r
function App() {\r
  const [open, setOpen] = useState(false);\r
\r
  return (\r
    <>\r
      <button onClick={() => setOpen(true)}>Open Drawer</button>\r
      <Drawer\r
        open={open}\r
        title="My Drawer"\r
      >\r
        <p>Drawer content goes here</p>\r
      </Drawer>\r
    </>\r
  );\r
}
`})}),`
`,n.jsx(e.h3,{id:"persistent-drawer-content-pushing",children:"Persistent Drawer (Content Pushing)"}),`
`,n.jsx(e.p,{children:"The persistent drawer properly pushes the main content to the left when opened, following Material-UI's recommended pattern:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Drawer } from './Drawer';\r
\r
function App() {\r
  const mainContent = (\r
    <div style={{ \r
      minHeight: '100vh', \r
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',\r
      display: 'flex',\r
      alignItems: 'center',\r
      justifyContent: 'center',\r
      color: 'white'\r
    }}>\r
      <h1>Main Content Area</h1>\r
      <p>This content gets pushed when the persistent drawer opens</p>\r
    </div>\r
  );\r
\r
  return (\r
    <Drawer\r
      open={false}\r
      persistent={true}\r
      title="Navigation"\r
      mainContent={mainContent}\r
    >\r
      <button>Menu Item 1</button>\r
      <button>Menu Item 2</button>\r
      <button>Menu Item 3</button>\r
    </Drawer>\r
  );\r
}
`})}),`
`,n.jsx(e.h3,{id:"navigation-menu-example",children:"Navigation Menu Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer\r
  open={open}\r
  title="Navigation"\r
  persistent={true}\r
  mainContent={\r
    <div style={{ padding: '20px' }}>\r
      <h1>Welcome to My App</h1>\r
      <p>This content will be pushed when the drawer opens.</p>\r
    </div>\r
  }\r
>\r
  <List>\r
    <ListItem>\r
      <ListItemButton>\r
        <ListItemIcon><HomeIcon /></ListItemIcon>\r
        <ListItemText primary="Home" />\r
      </ListItemButton>\r
    </ListItem>\r
    <ListItem>\r
      <ListItemButton>\r
        <ListItemIcon><ProductsIcon /></ListItemIcon>\r
        <ListItemText primary="Products" />\r
      </ListItemButton>\r
    </ListItem>\r
    <ListItem>\r
      <ListItemButton>\r
        <ListItemIcon><ContactIcon /></ListItemIcon>\r
        <ListItemText primary="Contact" />\r
      </ListItemButton>\r
    </ListItem>\r
  </List>\r
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"hug-contents-temporary-only",children:"Hug Contents (Temporary Only)"}),`
`,n.jsxs(e.p,{children:["For temporary drawers, you can use the ",n.jsx(e.code,{children:"hugContents"})," option to make the drawer size to its content:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer\r
  open={open}\r
  title="Compact Drawer"\r
  hugContents={true}\r
>\r
  <p>This drawer hugs its content</p>\r
  <button>Small Action</button>\r
</Drawer>
`})}),`
`,n.jsx(e.h3,{id:"wide-content-example",children:"Wide Content Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Drawer\r
  open={open}\r
  title="Data Table"\r
>\r
  <table style={{ width: '600px' }}>\r
    <thead>\r
      <tr>\r
        <th>Name</th>\r
        <th>Email</th>\r
        <th>Status</th>\r
        <th>Actions</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr>\r
        <td>John Doe</td>\r
        <td>john@example.com</td>\r
        <td>Active</td>\r
        <td>\r
          <button>Edit</button>\r
          <button>Delete</button>\r
        </td>\r
      </tr>\r
    </tbody>\r
  </table>\r
</Drawer>
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.p,{children:[`| Prop | Type | Default | Description |\r
|------|------|---------|-------------|\r
| `,n.jsx(e.code,{children:"open"})," | ",n.jsx(e.code,{children:"boolean"})," | ",n.jsx(e.code,{children:"false"}),` | Controls whether the drawer is open or closed |\r
| `,n.jsx(e.code,{children:"title"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"undefined"}),` | Optional title displayed at the top of the drawer |\r
| `,n.jsx(e.code,{children:"children"})," | ",n.jsx(e.code,{children:"ReactNode"})," | ",n.jsx(e.code,{children:"undefined"}),` | Content to display inside the drawer |\r
| `,n.jsx(e.code,{children:"persistent"})," | ",n.jsx(e.code,{children:"boolean"})," | ",n.jsx(e.code,{children:"false"}),` | Whether the drawer is persistent (pushes content) or temporary (overlay) |\r
| `,n.jsx(e.code,{children:"hugContents"})," | ",n.jsx(e.code,{children:"boolean"})," | ",n.jsx(e.code,{children:"false"}),` | For temporary drawers, whether to size to content or use fixed positioning |\r
| `,n.jsx(e.code,{children:"mainContent"})," | ",n.jsx(e.code,{children:"ReactNode"})," | ",n.jsx(e.code,{children:"undefined"})," | For persistent drawers, the main page content that gets pushed when drawer opens |"]}),`
`,n.jsx(e.h2,{id:"behavior-differences",children:"Behavior Differences"}),`
`,n.jsx(e.h3,{id:"temporary-drawer-default",children:"Temporary Drawer (default)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Slides over the content"}),`
`,n.jsx(e.li,{children:"Has a backdrop that can be clicked to close"}),`
`,n.jsx(e.li,{children:"Automatically closes when clicking outside"}),`
`,n.jsx(e.li,{children:"Perfect for mobile navigation or quick actions"}),`
`]}),`
`,n.jsx(e.h3,{id:"persistent-drawer",children:"Persistent Drawer"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pushes the main content to the side"}),`
`,n.jsx(e.li,{children:"No backdrop - stays open until explicitly closed"}),`
`,n.jsx(e.li,{children:"Uses Material-UI's recommended styled components pattern"}),`
`,n.jsx(e.li,{children:"Perfect for desktop navigation or side panels that should remain visible"}),`
`]}),`
`,n.jsx(e.h2,{id:"design-notes",children:"Design Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"240px width"}),": Persistent drawers use a fixed 240px width following Material-UI standards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Smooth transitions"}),": Both drawer and content use theme-based transitions for smooth animations"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsive behavior"}),": Temporary drawers work better on mobile, persistent drawers on desktop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content pushing"}),": Uses proper negative margins and transitions to push content smoothly"]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Proper ARIA labels and roles are automatically handled by Material-UI"}),`
`,n.jsx(e.li,{children:"Keyboard navigation works out of the box"}),`
`,n.jsx(e.li,{children:"Focus management is handled automatically"}),`
`,n.jsx(e.li,{children:"Screen reader support included"}),`
`]})]})}function a(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{a as default};

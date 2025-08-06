import{j as e,r as i,e as j}from"./iframe-CpdnR0i2.js";import{S as L}from"./Star-BqTWP5ux.js";import{B as Q}from"./Box-Cc3QCFpm.js";import{T as W}from"./TextField-grUENmEg.js";import{C as $}from"./Check-DfsgGmZK.js";import{M}from"./MenuItem-CY6_J7Gc.js";import{L as q}from"./ListItemIcon-jMMEYnIU.js";import{L as k}from"./ListItemText-Csnkj9ZO.js";import{C as G}from"./Checkbox-Drl9XYMK.js";import{S as J}from"./Switch-pj7-AGL8.js";import{A as K}from"./ArrowRight-CFwkqJWg.js";import{M as _}from"./Select-DbmNEHLt.js";import{D as b}from"./Divider-Bute_Vbv.js";import{S as U}from"./Stack-Bd6jq2pn.js";import{B as T}from"./Button-DOuccIOk.js";const B=({value:r,onChange:o,dense:t=!1})=>e.jsx(Q,{px:1,pb:1,children:e.jsx(W,{placeholder:"Search...",value:r,onChange:o,sx:{width:"100%",border:"2px solid #1C7AE0",borderRadius:"8px","& .MuiOutlinedInput-root":{height:"32px","& fieldset":{border:"none"},"&:hover fieldset":{border:"none"},"&.Mui-focused fieldset":{border:"none"},"& input":{padding:t?"6px 12px":"8px 12px",fontSize:"14px"}}},size:t?"small":"medium"})});B.__docgenInfo={description:"",methods:[],displayName:"SearchField",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},dense:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F=({icon:r,children:o,selected:t,...s})=>{const{dense:c}=S();return e.jsxs(M,{selected:t,sx:{p:c?"4px 8px":"8px",borderRadius:"6px",mx:1,minHeight:c?"32px":"auto","&.Mui-selected":{backgroundColor:"#DDE1F9","&:hover":{backgroundColor:"#DDE1F9"}}},...s,children:[r&&e.jsx(q,{sx:{minWidth:c?"24px":"auto"},children:r}),e.jsx(k,{sx:{"& .MuiListItemText-primary":{fontSize:c?"14px":"inherit"}},children:o}),t&&e.jsx($,{sx:{marginLeft:4},fontSize:"small"})]})};F.__docgenInfo={description:"",methods:[],displayName:"Item",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},searchableText:{required:!1,tsType:{name:"string"},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""}}};const z=({checked:r,children:o,...t})=>{const{dense:s}=S();return e.jsxs(M,{selected:r,sx:{borderRadius:"6px",mx:1,minHeight:s?"32px":"auto","&.Mui-selected":{backgroundColor:"#DDE1F9","&:hover":{backgroundColor:"#DDE1F9"}}},...t,children:[e.jsx(G,{edge:"start",checked:r,tabIndex:-1,disableRipple:!0,size:s?"small":"medium",sx:{padding:s?"4px":"7px",marginRight:s?"8px":"12px"}}),e.jsx(k,{sx:{"& .MuiListItemText-primary":{fontSize:s?"14px":"inherit"}},children:o})]})};z.__docgenInfo={description:"",methods:[],displayName:"ItemCheckbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},searchableText:{required:!1,tsType:{name:"string"},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""}}};const O=({checked:r,children:o,...t})=>{const{dense:s}=S();return e.jsxs(M,{selected:r,sx:{p:s?"4px 8px":"8px",borderRadius:"6px",mx:1,minHeight:s?"32px":"auto","&.Mui-selected":{backgroundColor:"#DDE1F9","&:hover":{backgroundColor:"#DDE1F9"}}},...t,children:[e.jsx(k,{sx:{"& .MuiListItemText-primary":{fontSize:s?"14px":"inherit"}},children:o}),e.jsx(J,{sx:{marginLeft:"auto",marginRight:s?"4px":"8px"},edge:"end",checked:r,size:"small",tabIndex:-1,disableRipple:!0})]})};O.__docgenInfo={description:"",methods:[],displayName:"ItemSwitch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},searchableText:{required:!1,tsType:{name:"string"},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""}}};const H=({icon:r,text:o,children:t,...s})=>{const[c,l]=i.useState(null),u=i.useRef(null),{dense:d}=S(),m=n=>{n.stopPropagation(),l(c?null:n.currentTarget)},p=()=>{l(null)},x=!!c;return e.jsxs(e.Fragment,{children:[e.jsxs(M,{...s,ref:u,onClick:m,sx:{p:d?"4px 8px":"8px",mx:1,minHeight:d?"32px":"auto",cursor:"pointer","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.04)"}},children:[r&&e.jsx(q,{sx:{minWidth:d?"24px":"auto"},children:r}),e.jsx(k,{sx:{"& .MuiListItemText-primary":{fontSize:d?"14px":"inherit"}},children:o}),e.jsx(K,{sx:{marginLeft:4},fontSize:"small"})]}),e.jsx(_,{anchorEl:c,open:x,onClose:p,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},sx:{ml:1.2,mt:-1},children:t})]})};H.__docgenInfo={description:"",methods:[],displayName:"SubMenuItem",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},text:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""}}};const P=i.createContext({dense:!1}),S=()=>i.useContext(P),V=({search:r=!1,dense:o=!1,children:t,...s})=>{const[c,l]=i.useState(""),u=j.Children.toArray(t).filter(d=>{if(c&&j.isValidElement(d)){const{searchableText:m,children:p}=d.props;return(m||(typeof p=="string"?p:"")).toLowerCase().includes(c.toLowerCase())}return!0});return e.jsx(P.Provider,{value:{dense:o},children:e.jsxs(_,{...s,sx:{"& .MuiPaper-root":{borderRadius:"6px",overflow:"hidden"},...s.sx},children:[r&&e.jsxs(e.Fragment,{children:[e.jsx(B,{value:c,onChange:d=>l(d.target.value),dense:o}),e.jsx(b,{sx:{mb:1}})]}),e.jsx(U,{display:"flex",gap:0,flexDirection:"column",children:u})]})})},a=Object.assign(V,{Item:F,SubMenu:H,Switch:O,Checkbox:z});V.__docgenInfo={description:"",methods:[],displayName:"MenuComponent",props:{search:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dense:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const X={title:"Molecules/Menu",component:a,argTypes:{search:{control:"boolean"},dense:{control:"boolean"}}},g={render:r=>{const[o,t]=i.useState(null),[s,c]=i.useState(null),[l,u]=i.useState([]),[d,m]=i.useState({}),p=!!o,x=()=>t(null);return e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:n=>t(n.currentTarget),children:"Open Menu"}),e.jsxs(a,{...r,anchorEl:o,open:p,onClose:x,sx:{borderRadius:"80px"},children:[e.jsx(a.Item,{selected:s==="Name",onClick:()=>c("Name"),icon:e.jsx(L,{}),children:"Name"}),e.jsx(a.Item,{selected:s==="Care Team",onClick:()=>c("Care Team"),children:"Care Team"}),e.jsx(a.Checkbox,{checked:l.includes("Appointments"),onClick:()=>u(n=>n.includes("Appointments")?n.filter(h=>h!=="Appointments"):[...n,"Appointments"]),children:"Appointments"}),e.jsx(a.Checkbox,{checked:l.includes("Messages"),onClick:()=>u(n=>n.includes("Messages")?n.filter(h=>h!=="Messages"):[...n,"Messages"]),children:"Messages"}),e.jsx(a.Switch,{checked:d.Documents??!1,onClick:()=>m(n=>({...n,Documents:!n.Documents})),children:"Documents"})]})]})},args:{search:!0,dense:!1}},C={render:r=>{const[o,t]=i.useState(null),[s,c]=i.useState(null),[l,u]=i.useState([]),[d,m]=i.useState({}),p=!!o,x=()=>t(null);return e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:n=>t(n.currentTarget),children:"Open Dense Menu"}),e.jsxs(a,{...r,anchorEl:o,open:p,onClose:x,children:[e.jsx(a.Item,{selected:s==="Name",onClick:()=>c("Name"),icon:e.jsx(L,{}),children:"Name"}),e.jsx(a.Item,{selected:s==="Care Team",onClick:()=>c("Care Team"),children:"Care Team"}),e.jsx(b,{}),e.jsx(a.Checkbox,{checked:l.includes("Appointments"),onClick:()=>u(n=>n.includes("Appointments")?n.filter(h=>h!=="Appointments"):[...n,"Appointments"]),children:"Appointments"}),e.jsx(a.Checkbox,{checked:l.includes("Messages"),onClick:()=>u(n=>n.includes("Messages")?n.filter(h=>h!=="Messages"):[...n,"Messages"]),children:"Messages"}),e.jsx(b,{}),e.jsx(a.Switch,{checked:d.Documents??!1,onClick:()=>m(n=>({...n,Documents:!n.Documents})),children:"Documents"})]})]})},args:{search:!0,dense:!0}},f={render:r=>{const[o,t]=i.useState(null),s=!!o,c=()=>t(null);return e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:l=>t(l.currentTarget),children:"Open Menu"}),e.jsxs(a,{...r,anchorEl:o,open:s,onClose:c,children:[e.jsxs(a.SubMenu,{text:"More options",children:[e.jsx(a.Item,{children:"Sub-item 1"}),e.jsx(a.Item,{children:"Sub-item 2"})]}),e.jsx(a.Item,{children:"Logout"})]})]})},args:{search:!1,dense:!1}};var I,E,y;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = useState<string | null>(null);
    const [checked, setChecked] = useState<string[]>([]);
    const [switches, setSwitches] = useState<Record<string, boolean>>({});
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);
    return <>\r
        <Button onClick={e => setAnchorEl(e.currentTarget)}>Open Menu</Button>\r
        <Menu {...args} anchorEl={anchorEl} open={open} onClose={handleClose} sx={{
        borderRadius: "80px"
      }}>\r
          <Menu.Item selected={selected === "Name"} onClick={() => setSelected("Name")} icon={<Star />}>\r
            Name\r
          </Menu.Item>\r
          <Menu.Item selected={selected === "Care Team"} onClick={() => setSelected("Care Team")}>\r
            Care Team\r
          </Menu.Item>\r
\r
          <Menu.Checkbox checked={checked.includes("Appointments")} onClick={() => setChecked(prev => prev.includes("Appointments") ? prev.filter(i => i !== "Appointments") : [...prev, "Appointments"])}>\r
            Appointments\r
          </Menu.Checkbox>\r
          <Menu.Checkbox checked={checked.includes("Messages")} onClick={() => setChecked(prev => prev.includes("Messages") ? prev.filter(i => i !== "Messages") : [...prev, "Messages"])}>\r
            Messages\r
          </Menu.Checkbox>\r
\r
          <Menu.Switch checked={switches.Documents ?? false} onClick={() => setSwitches(p => ({
          ...p,
          Documents: !p.Documents
        }))}>\r
            Documents\r
          </Menu.Switch>\r
        </Menu>\r
      </>;
  },
  args: {
    search: true,
    dense: false
  }
}`,...(y=(E=g.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var D,A,R;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = useState<string | null>(null);
    const [checked, setChecked] = useState<string[]>([]);
    const [switches, setSwitches] = useState<Record<string, boolean>>({});
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);
    return <>\r
        <Button onClick={e => setAnchorEl(e.currentTarget)}>\r
          Open Dense Menu\r
        </Button>\r
        <Menu {...args} anchorEl={anchorEl} open={open} onClose={handleClose}>\r
          <Menu.Item selected={selected === "Name"} onClick={() => setSelected("Name")} icon={<Star />}>\r
            Name\r
          </Menu.Item>\r
          <Menu.Item selected={selected === "Care Team"} onClick={() => setSelected("Care Team")}>\r
            Care Team\r
          </Menu.Item>\r
          <Divider />\r
          <Menu.Checkbox checked={checked.includes("Appointments")} onClick={() => setChecked(prev => prev.includes("Appointments") ? prev.filter(i => i !== "Appointments") : [...prev, "Appointments"])}>\r
            Appointments\r
          </Menu.Checkbox>\r
          <Menu.Checkbox checked={checked.includes("Messages")} onClick={() => setChecked(prev => prev.includes("Messages") ? prev.filter(i => i !== "Messages") : [...prev, "Messages"])}>\r
            Messages\r
          </Menu.Checkbox>\r
          <Divider />\r
          <Menu.Switch checked={switches.Documents ?? false} onClick={() => setSwitches(p => ({
          ...p,
          Documents: !p.Documents
        }))}>\r
            Documents\r
          </Menu.Switch>\r
        </Menu>\r
      </>;
  },
  args: {
    search: true,
    dense: true
  }
}`,...(R=(A=C.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var w,v,N;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);
    return <>\r
        <Button onClick={e => setAnchorEl(e.currentTarget)}>Open Menu</Button>\r
        <Menu {...args} anchorEl={anchorEl} open={open} onClose={handleClose}>\r
          <Menu.SubMenu text="More options">\r
            <Menu.Item>Sub-item 1</Menu.Item>\r
            <Menu.Item>Sub-item 2</Menu.Item>\r
          </Menu.SubMenu>\r
\r
          <Menu.Item>Logout</Menu.Item>\r
        </Menu>\r
      </>;
  },
  args: {
    search: false,
    dense: false
  }
}`,...(N=(v=f.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const Y=["Default","Dense","SecondaryMenu"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:g,Dense:C,SecondaryMenu:f,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{g as D,he as M,f as S,C as a,a as b};

import{j as e,r as g}from"./iframe-C7YkNvSQ.js";import{a as j}from"./List-4AeG_tC3.js";import{L as M}from"./ListSubHeader-Ctk7RyLl.js";import{L as a}from"./ListItemButton-cHQ93_4H.js";import{L as s}from"./ListItemIcon-B6EQeCdB.js";import{c as n}from"./createSvgIcon-CAcL5gG4.js";import{L as r}from"./ListItemText-CUqI4k6h.js";import{E as y}from"./ExpandMore-BgdNZ8St.js";import{C as B}from"./Collapse-CZcd38Sj.js";import{L as x}from"./ListItem-oh3K9L-3.js";import{S as w}from"./Switch-JhjkuGDR.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./ListSubheader-BShIKKvr.js";import"./useForkRef-C4CjHbyO.js";import"./ButtonBase-DinbBO9G.js";import"./useTimeout-BzjaGR02.js";import"./TransitionGroupContext-CotujMke.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./listItemTextClasses-BVuUz09p.js";import"./Typography-CIh4BeGT.js";import"./utils-B2tfotqe.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./useTheme-DaYcaQ3H.js";import"./isMuiElement-4jqovnI5.js";import"./isHostComponent-DVu5iVWx.js";import"./SwitchBase-poeQoh38.js";import"./useFormControl-DA987-lg.js";import"./useControlled-CDtRUcdo.js";const C=n(e.jsx("path",{d:"M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76z"}),"Bluetooth"),v=n(e.jsx("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM12 13 3.74 7.84 12 3l8.26 4.84z"}),"Drafts"),E=n(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),R=n(e.jsx("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),T=n(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),z=n(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorder"),O=n(e.jsx("path",{d:"m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0m-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13"}),"Wifi"),c=({sx:t,density:i="normal",...o})=>e.jsx(j,{dense:i=="dense",sx:{...t},...o});c.__docgenInfo={description:"",methods:[],displayName:"List",props:{density:{required:!1,tsType:{name:"union",raw:'"dense" | "normal"',elements:[{name:"literal",value:'"dense"'},{name:"literal",value:'"normal"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}}},composes:["Omit"]};const pe={title:"Atoms/List",component:c,tags:["autodocs"],args:{density:"normal"},argTypes:{density:{control:"radio",options:["normal","dense"]}}},h={render:t=>{const[i,o]=g.useState(!1),d=()=>{o(!i)};return e.jsxs(c,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav",dense:(t==null?void 0:t.density)=="dense","aria-labelledby":"nested-list-subheader",subheader:e.jsx(M,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),...t,children:[e.jsxs(a,{sx:{borderRadius:"4px"},children:[e.jsx(s,{children:e.jsx(T,{})}),e.jsx(r,{primary:"Sent mail"})]}),e.jsxs(a,{sx:{borderRadius:"4px"},children:[e.jsx(s,{children:e.jsx(v,{})}),e.jsx(r,{primary:"Drafts"})]}),e.jsxs(a,{sx:{borderRadius:"4px"},onClick:d,children:[e.jsx(s,{children:e.jsx(R,{})}),e.jsx(r,{primary:"Inbox"}),i?e.jsx(E,{}):e.jsx(y,{})]}),e.jsx(B,{in:i,timeout:"auto",unmountOnExit:!0,children:e.jsx(c,{dense:(t==null?void 0:t.density)=="dense",component:"div",disablePadding:!0,children:e.jsxs(a,{sx:{pl:4,borderRadius:"4px"},children:[e.jsx(s,{children:e.jsx(z,{})}),e.jsx(r,{primary:"List Item"})]})})})]})}},p={render:t=>{const[i,o]=g.useState(["wifi"]),d=l=>()=>{const m=i.indexOf(l),u=[...i];m===-1?u.push(l):u.splice(m,1),o(u)};return e.jsxs(c,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},"aria-labelledby":"switch-list-subheader",subheader:e.jsx(M,{component:"div",id:"switch-list-subheader",children:"Switch List"}),...t,children:[e.jsxs(x,{children:[e.jsx(s,{children:e.jsx(O,{})}),e.jsx(r,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),e.jsx(w,{edge:"end",onChange:d("wifi"),checked:i.includes("wifi"),inputProps:{"aria-labelledby":"switch-list-label-wifi"},sx:{width:"65px",".MuiSwitch-switchBase":{top:"7.9px",left:"8.5px"},".MuiSwitch-switchBase.Mui-checked":{top:"6.5px",left:"4.5px"},".MuiSwitch-thumb":{width:"12px",height:"12px",background:"#79747E"},".MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb":{width:"15px",height:"15px",background:"#fff"},".MuiSwitch-switchBase.Mui-checked ~ .MuiSwitch-track":{background:"var(--primary-main)",opacity:.5,border:"none"},".MuiSwitch-root":{width:"65px"},".MuiSwitch-track":{height:"23px",width:"40px",borderRadius:"100px",background:"transparent",border:"solid 1px #79747E",opacity:1}}})]}),e.jsxs(x,{children:[e.jsx(s,{children:e.jsx(C,{})}),e.jsx(r,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),e.jsx(w,{edge:"end",onChange:d("bluetooth"),checked:i.includes("bluetooth"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"},sx:{width:"65px",".MuiSwitch-switchBase":{top:"7.9px",left:"8.5px"},".MuiSwitch-switchBase.Mui-checked":{top:"6.5px",left:"4.5px"},".MuiSwitch-thumb":{width:"12px",height:"12px",background:"#79747E"},".MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb":{width:"15px",height:"15px",background:"#fff"},".MuiSwitch-switchBase.Mui-checked ~ .MuiSwitch-track":{background:"var(--primary-main)",opacity:.5,border:"none"},".MuiSwitch-root":{width:"65px"},".MuiSwitch-track":{height:"23px",width:"40px",borderRadius:"100px",background:"transparent",border:"solid 1px #79747E",opacity:1}}})]})]})}};var b,L,f;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
    return <List sx={{
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper"
    }} component="nav" dense={args?.density == "dense" ? true : false} aria-labelledby="nested-list-subheader" subheader={<ListSubheader component="div" id="nested-list-subheader">\r
            Nested List Items\r
          </ListSubheader>} {...args}>\r
        <ListItemButton sx={{
        borderRadius: "4px"
      }}>\r
          <ListItemIcon>\r
            <Send />\r
          </ListItemIcon>\r
          <ListItemText primary="Sent mail" />\r
        </ListItemButton>\r
        <ListItemButton sx={{
        borderRadius: "4px"
      }}>\r
          <ListItemIcon>\r
            <Drafts />\r
          </ListItemIcon>\r
          <ListItemText primary="Drafts" />\r
        </ListItemButton>\r
        <ListItemButton sx={{
        borderRadius: "4px"
      }} onClick={handleClick}>\r
          <ListItemIcon>\r
            <Inbox />\r
          </ListItemIcon>\r
          <ListItemText primary="Inbox" />\r
          {open ? <ExpandLess /> : <ExpandMore />}\r
        </ListItemButton>\r
        <Collapse in={open} timeout="auto" unmountOnExit>\r
          <List dense={args?.density == "dense" ? true : false} component="div" disablePadding>\r
            <ListItemButton sx={{
            pl: 4,
            borderRadius: "4px"
          }}>\r
              <ListItemIcon>\r
                <StarBorder />\r
              </ListItemIcon>\r
              <ListItemText primary="List Item" />\r
            </ListItemButton>\r
          </List>\r
        </Collapse>\r
      </List>;
  }
}`,...(f=(L=h.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var S,k,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(["wifi"]);
    const handleToggle = (value: string) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };
    return <List sx={{
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper"
    }} aria-labelledby="switch-list-subheader" subheader={<ListSubheader component="div" id="switch-list-subheader">\r
            Switch List\r
          </ListSubheader>} {...args}>\r
        <ListItem>\r
          <ListItemIcon>\r
            <Wifi />\r
          </ListItemIcon>\r
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />\r
          <Switch edge="end" onChange={handleToggle("wifi")} checked={checked.includes("wifi")} inputProps={{
          "aria-labelledby": "switch-list-label-wifi"
        }} sx={{
          width: "65px",
          ".MuiSwitch-switchBase": {
            top: "7.9px",
            left: "8.5px"
          },
          ".MuiSwitch-switchBase.Mui-checked": {
            top: "6.5px",
            left: "4.5px"
          },
          ".MuiSwitch-thumb": {
            width: "12px",
            height: "12px",
            background: "#79747E"
          },
          ".MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
            width: "15px",
            height: "15px",
            background: "#fff"
          },
          ".MuiSwitch-switchBase.Mui-checked ~ .MuiSwitch-track": {
            background: "var(--primary-main)",
            opacity: 0.5,
            border: "none"
          },
          ".MuiSwitch-root": {
            width: "65px"
          },
          ".MuiSwitch-track": {
            height: "23px",
            width: "40px",
            borderRadius: "100px",
            background: "transparent",
            border: "solid 1px #79747E",
            opacity: 1
          }
        }} />\r
        </ListItem>\r
        <ListItem>\r
          <ListItemIcon>\r
            <Bluetooth />\r
          </ListItemIcon>\r
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />\r
          <Switch edge="end" onChange={handleToggle("bluetooth")} checked={checked.includes("bluetooth")} inputProps={{
          "aria-labelledby": "switch-list-label-bluetooth"
        }} sx={{
          width: "65px",
          ".MuiSwitch-switchBase": {
            top: "7.9px",
            left: "8.5px"
          },
          ".MuiSwitch-switchBase.Mui-checked": {
            top: "6.5px",
            left: "4.5px"
          },
          ".MuiSwitch-thumb": {
            width: "12px",
            height: "12px",
            background: "#79747E"
          },
          ".MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
            width: "15px",
            height: "15px",
            background: "#fff"
          },
          ".MuiSwitch-switchBase.Mui-checked ~ .MuiSwitch-track": {
            background: "var(--primary-main)",
            opacity: 0.5,
            border: "none"
          },
          ".MuiSwitch-root": {
            width: "65px"
          },
          ".MuiSwitch-track": {
            height: "23px",
            width: "40px",
            borderRadius: "100px",
            background: "transparent",
            border: "solid 1px #79747E",
            opacity: 1
          }
        }} />\r
        </ListItem>\r
      </List>;
  }
}`,...(I=(k=p.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ue=["NestedList","SwitchList"];export{h as NestedList,p as SwitchList,ue as __namedExportsOrder,pe as default};

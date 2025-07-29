import{j as e}from"./iframe-C_mvATxf.js";import{C as h}from"./checkbox-sb5U5XXM.js";import{S as s}from"./Star-DcrWNXMk.js";import{T as x}from"./TableCell-In65ryYW.js";import{S as l}from"./Stack-DsmHLUro.js";import"./styled-D3e7hSdf.js";import"./SwitchBase-BHpo2KH8.js";import"./useFormControl-B5wV8xKu.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./useControlled-Cyk4WA3W.js";import"./ButtonBase-CGQkK_HI.js";import"./useTimeout-Cd2_LOh1.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./createSvgIcon-Iv4cjDr_.js";import"./createSvgIcon-BJfsRVye.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-BRSh3FLT.js";import"./useId-CjGAtGk9.js";const n=({icon:r,checkbox:a,small:t,children:p,sx:d,...u})=>e.jsx(x,{...u,sx:{fontWeight:"bold",border:0,...d},variant:"head",children:e.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:2},children:[a&&e.jsx(h,{color:"primary",size:t?"small":"medium"}),e.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:1},children:[r==="left"&&e.jsx(s,{sx:{width:20,color:"rgba(0, 0, 0, 0.56)"}}),p,r==="right"&&e.jsx(s,{sx:{width:20,color:"rgba(0, 0, 0, 0.56)"}})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{icon:{required:!1,tsType:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},checkbox:{required:!1,tsType:{name:"boolean"},description:""},small:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["TableCellProps"]};const O={title:"ATOMS/TableControlElements/TableHead",component:n,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},checkbox:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,icon:"none",checkbox:!1},render:r=>{const{hasValue:a,...t}=r;return e.jsx(n,{...t,children:a?e.jsx(e.Fragment,{children:"Head"}):void 0})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    hasValue: true,
    icon: 'none',
    checkbox: false
  },
  render: args => {
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    return <TableHead {...rest}>\r
                {hasValue ? <>\r
                            Head\r
                        </> : undefined}\r
            </TableHead>;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Default"];export{o as Default,P as __namedExportsOrder,O as default};

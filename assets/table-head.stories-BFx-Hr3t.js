import{j as e}from"./iframe-Bv6dwyi6.js";import{C as h}from"./checkbox-C0SGPuDn.js";import{S as s}from"./Star-DdzjKHTg.js";import{T as x}from"./TableCell-DAidFtZ1.js";import{S as l}from"./Stack-BfX3vPkc.js";import"./styled-1wupYI6N.js";import"./SwitchBase-C8OYgTTV.js";import"./useFormControl-DVbzj1df.js";import"./useControlled-Bh7QF-ia.js";import"./ButtonBase-_JbzIVNU.js";import"./useTimeout-B_DK4l75.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./createSvgIcon-BJSFEBnp.js";import"./createSvgIcon-CKdMn4wO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-Cd5s-INa.js";import"./useId-5SlOnbtB.js";const n=({icon:r,checkbox:a,small:t,children:p,sx:d,...u})=>e.jsx(x,{...u,sx:{fontWeight:"bold",border:0,...d},variant:"head",children:e.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:2},children:[a&&e.jsx(h,{color:"primary",size:t?"small":"medium"}),e.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:1},children:[r==="left"&&e.jsx(s,{sx:{width:20,color:"rgba(0, 0, 0, 0.56)"}}),p,r==="right"&&e.jsx(s,{sx:{width:20,color:"rgba(0, 0, 0, 0.56)"}})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{icon:{required:!1,tsType:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},checkbox:{required:!1,tsType:{name:"boolean"},description:""},small:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["TableCellProps"]};const N={title:"ATOMS/TableControlElements/TableHead",component:n,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},checkbox:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,icon:"none",checkbox:!1},render:r=>{const{hasValue:a,...t}=r;return e.jsx(n,{...t,children:a?e.jsx(e.Fragment,{children:"Head"}):void 0})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,N as default};

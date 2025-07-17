import{j as e}from"./iframe-DccEvDzC.js";import{C as h}from"./checkbox-BwVtHigN.js";import{S as s}from"./Star-CgbTiwaa.js";import{T as x}from"./TableCell-DGJJq51U.js";import{S as l}from"./Stack-DQLN1x6Z.js";import"./styled-Cfu_AvQ7.js";import"./SwitchBase-DIXMj2ts.js";import"./useFormControl-v0wCab-t.js";import"./useControlled-DIa1ppNA.js";import"./ButtonBase-BQpfw9M-.js";import"./useTimeout-xbtmyUFd.js";import"./TransitionGroupContext-DT2Zqife.js";import"./useIsFocusVisible-nsLV3YSx.js";import"./createSvgIcon-CYhW7ZJ1.js";import"./createSvgIcon-B3ikaxcm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DIR61fab.js";import"./isMuiElement-joNQ-oVj.js";import"./useId-DAXsOMtQ.js";const n=({icon:r,checkbox:a,small:t,children:p,sx:d,...u})=>e.jsx(x,{...u,sx:{fontWeight:"bold",border:0,...d},variant:"head",children:e.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:2},children:[a&&e.jsx(h,{color:"primary",size:t?"small":"medium"}),e.jsxs(l,{sx:{flexDirection:"row",alignItems:"center",gap:1},children:[r==="left"&&e.jsx(s,{sx:{width:20,color:"rgba(0, 0, 0, 0.56)"}}),p,r==="right"&&e.jsx(s,{sx:{width:20,color:"rgba(0, 0, 0, 0.56)"}})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{icon:{required:!1,tsType:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},checkbox:{required:!1,tsType:{name:"boolean"},description:""},small:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["TableCellProps"]};const N={title:"ATOMS/TableControlElements/TableHead",component:n,parameters:{controls:{exclude:["small","children"]}},argTypes:{icon:{options:["none","left","right"],control:{type:"select"}},checkbox:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,icon:"none",checkbox:!1},render:r=>{const{hasValue:a,...t}=r;return e.jsx(n,{...t,children:a?e.jsx(e.Fragment,{children:"Head"}):void 0})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

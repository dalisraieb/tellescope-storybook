import{r as p,b as X,_ as Y,a as x,j as r}from"./iframe-CpdnR0i2.js";import{g as Z,s as B,c as j,a as aa}from"./styled-DujYcmrZ.js";import{B as ea}from"./Badge-D_C-h1_3.js";import{A as U,a as ra}from"./Avatar-FJZ4Slfo.js";import{g as sa}from"./generateUtilityClasses-DDi6EuTn.js";import"./usePreviousProps-gH0S_yWp.js";import"./useSlotProps-DcuCg741.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k7JvqZ8G.js";import"./createSvgIcon-C4MRlNQH.js";import"./useSlot-CDCkmms0.js";function ta(a){return Z("MuiAvatarGroup",a)}const oa=sa("MuiAvatarGroup",["root","avatar"]),na=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],T={small:-16,medium:null},la=a=>{const{classes:e}=a;return aa({root:["root"],avatar:["avatar"]},ta,e)},ia=B("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,e)=>x({[`& .${oa.avatar}`]:e.avatar},e.root)})(({theme:a,ownerState:e})=>{const s=e.spacing&&T[e.spacing]!==void 0?T[e.spacing]:-e.spacing;return{[`& .${ra.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:s??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),ca=p.forwardRef(function(e,s){var i;const n=X({props:e,name:"MuiAvatarGroup"}),{children:I,className:L,component:S="div",componentsProps:W={},max:b=5,renderSurplus:C,slotProps:F={},spacing:H="medium",total:J,variant:A="circular"}=n,K=Y(n,na);let c=b<2?2:b;const G=x({},n,{max:b,spacing:H,component:S,variant:A}),f=la(G),y=p.Children.toArray(I).filter(d=>p.isValidElement(d)),m=J||y.length;m===c&&(c+=1),c=Math.min(m+1,c);const z=Math.min(y.length,c-1),h=Math.max(m-c,m-z,0),Q=C?C(h):`+${h}`,P=(i=F.additionalAvatar)!=null?i:W.additionalAvatar;return r.jsxs(ia,x({as:S,ownerState:G,className:j(f.root,L),ref:s},K,{children:[h?r.jsx(U,x({variant:A},P,{className:j(f.avatar,P==null?void 0:P.className),children:Q})):null,y.slice(0,z).reverse().map(d=>p.cloneElement(d,{className:j(d.props.className,f.avatar),variant:d.props.variant||A}))]}))}),t={extraSmall:"extra small",small:"small",medium:"medium",large:"large"},O={primary:"primary",secondary:"secondary",default:"default"},l={[t.extraSmall]:24,[t.small]:32,[t.medium]:40,[t.large]:56},da={[O.primary]:"solid 2px var(--primary-light)",[O.secondary]:"solid 2px var(--secondary-light)"},ma=B(ea)(({theme:a})=>({"& .MuiBadge-badge":{backgroundColor:a.palette.success.dark,color:a.palette.success.dark,boxShadow:`0 0 0 2px ${a.palette.background.paper}`,"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}})),_=({sx:a,color:e,size:s,badge:i=!1,...n})=>r.jsx(U,{...n,sx:{...a,height:l[s]||l[t.medium],width:l[s]||l[t.medium],fontSize:s==t.extraSmall?12:void 0,border:da[e]||void 0}}),o=({sx:a,color:e,size:s,badge:i=!1,...n})=>i?r.jsx(ma,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:r.jsx(_,{sx:a,color:e,size:s,badge:i,...n})}):r.jsx(_,{sx:a,color:e,size:s,badge:i,...n});o.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"default"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"extra small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"extra small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},badge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const D=({sx:a,size:e,...s})=>r.jsx(ca,{sx:{...a,".MuiAvatar-root":{height:l[e]||l[t.medium],width:l[e]||l[t.medium],fontSize:e==t.extraSmall?12:void 0}},...s});D.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{size:{required:!1,tsType:{name:"union",raw:'"extra small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"extra small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},badge:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Oa={title:"Atoms/Avatar",component:o,tags:["autodocs"],args:{color:void 0,size:"extra small",badge:!1},argTypes:{color:{control:"select",options:Object.values(O)},size:{control:"radio",options:Object.values(t)},badge:{control:"boolean"}}},u={args:{color:"primary",size:"medium"},argTypes:{color:{table:{disable:!1}}},render:a=>r.jsx(o,{...a,children:"OP"})},v={args:{color:"secondary",size:"medium"},argTypes:{color:{table:{disable:!1}}},render:a=>r.jsx(o,{...a,children:"OP"})},g={args:{size:"medium",max:4,spacing:"medium",sx:{justifyContent:"flex-end"}},argTypes:{size:{control:"radio",options:Object.values(t)},color:{table:{disable:!0}},max:{table:{disable:!0}},badge:{table:{disable:!0}},spacing:{table:{disable:!0}},sx:{table:{disable:!0}}},render:a=>r.jsxs(D,{...a,children:[r.jsx(o,{children:"OP"}),r.jsx(o,{children:"OP"}),r.jsx(o,{children:"OP"}),r.jsx(o,{children:"OP"}),r.jsx(o,{children:"OP"}),r.jsx(o,{children:"OP"}),r.jsx(o,{children:"OP"})]})};var M,N,$;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: "primary",
    size: "medium"
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  },
  render: args => <Avatar {...args}>OP</Avatar>
}`,...($=(N=u.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var w,V,k;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    size: "medium"
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  },
  render: args => <Avatar {...args}>OP</Avatar>
}`,...(k=(V=v.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var E,R,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "medium",
    max: 4,
    spacing: "medium",
    sx: {
      justifyContent: "flex-end"
    }
  },
  argTypes: {
    size: {
      control: "radio",
      options: Object.values(AvatarSizeValues)
    },
    color: {
      table: {
        disable: true
      }
    },
    max: {
      table: {
        disable: true
      }
    },
    badge: {
      table: {
        disable: true
      }
    },
    spacing: {
      table: {
        disable: true
      }
    },
    sx: {
      table: {
        disable: true
      }
    }
  },
  render: args => <AvatarGroup {...args}>\r
      <Avatar>OP</Avatar>\r
      <Avatar>OP</Avatar>\r
      <Avatar>OP</Avatar>\r
      <Avatar>OP</Avatar>\r
      <Avatar>OP</Avatar>\r
      <Avatar>OP</Avatar>\r
      <Avatar>OP</Avatar>\r
    </AvatarGroup>
}`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Sa=["Primary","Secondary","AvatarGroups"];export{g as AvatarGroups,u as Primary,v as Secondary,Sa as __namedExportsOrder,Oa as default};

import{j as e}from"./iframe-C7YkNvSQ.js";import{B as a}from"./Breadcrumbs-Gb9hrq3R.js";import{c as i}from"./createSvgIcon-CAcL5gG4.js";const s=i(e.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),r=i(e.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),f={title:"Molecules/Breadcrumbs",component:a,parameters:{layout:"padded"},argTypes:{levels:{control:{type:"select"},options:[1,2,3],description:"Number of breadcrumb levels to display (maximum 3)"}}},g=(o,m,p)=>{const d=[e.jsx(s,{},"home"),e.jsx(r,{},"settings")],u=[e.jsx(s,{},"home"),e.jsx(r,{},"settings")];return e.jsx(a,{levels:o,leftIcon:d.slice(0,m),rightIcon:u.slice(0,p)})},t={args:{levels:3,leftIcon:0,rightIcon:0},render:o=>g(o.levels,o.leftIcon,o.rightIcon),argTypes:{leftIcon:{control:{type:"select"},options:[0,1,2],description:"Number of icons to display after breadcrumbs (maximum 2)"},rightIcon:{control:{type:"select"},options:[0,1,2],description:"Number of icons to display after breadcrumbs (maximum 2)"}}};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    levels: 3,
    leftIcon: 0,
    rightIcon: 0
  },
  render: args => renderWithIcons(args.levels, args.leftIcon, args.rightIcon),
  argTypes: {
    leftIcon: {
      control: {
        type: 'select'
      },
      options: [0, 1, 2],
      description: 'Number of icons to display after breadcrumbs (maximum 2)'
    },
    rightIcon: {
      control: {
        type: 'select'
      },
      options: [0, 1, 2],
      description: 'Number of icons to display after breadcrumbs (maximum 2)'
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const b=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{y as B,t as D};

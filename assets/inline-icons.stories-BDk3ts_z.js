import{p as d,q as l,g as p,j as e}from"./iframe-CpdnR0i2.js";import{B as s}from"./button-Bp8dYhEO.js";import{A as m}from"./ArrowForwardIos-CL8qJE-J.js";import{r as u}from"./createSvgIcon-C3FiYK1r.js";import"./Button-DOuccIOk.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./ButtonBase-DfyOkDKJ.js";import"./useTimeout-BgZTaRCc.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./useForkRef-k7JvqZ8G.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./createSvgIcon-C4MRlNQH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-5-QtcHpW.js";import"./useControlled-d9yX6gVw.js";var n={},w;function j(){if(w)return n;w=1;var r=d();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(u()),t=l();return n.default=(0,o.default)((0,t.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew"),n}var _=j();const y=p(_);var a={},x;function A(){if(x)return a;x=1;var r=d();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(u()),t=l();return a.default=(0,o.default)((0,t.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),a}var B=A();const D=p(B);var i={},I;function g(){if(I)return i;I=1;var r=d();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(u()),t=l();return i.default=(0,o.default)((0,t.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"}),"FileCopy"),i}var q=g();const R=p(q),{fn:z}=__STORYBOOK_MODULE_TEST__,G={title:"ATOMS/Button",component:s,parameters:{controls:{include:[]},actions:{disable:!0}},args:{onClick:z()}},c={args:{color:"secondary",children:"LABEL",appearance:"contained",size:"medium",disabled:!1},render:r=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{...r,color:"primary",endIcon:e.jsx(m,{sx:{width:16}}),children:r.children}),e.jsx(s,{...r,color:"primary",appearance:"text",startIcon:e.jsx(y,{sx:{width:16}}),children:r.children}),e.jsx("div",{children:e.jsx(s,{...r,color:"secondary",startIcon:e.jsx(R,{sx:{width:16}}),endIcon:e.jsx(D,{sx:{fontSize:30}}),size:"small",children:r.children})}),e.jsx(s,{...r,color:"info",appearance:"outlined",endIcon:e.jsx(m,{sx:{width:16}}),children:r.children})]})};c.name="Inline Icons";var f,v,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    children: 'LABEL',
    appearance: 'contained',
    size: "medium",
    disabled: false
  },
  render: args => {
    return <div style={{
      display: 'flex',
      gap: 8
    }}>\r
                <Button {...args} color="primary" endIcon={<ArrowForwardIosIcon sx={{
        width: 16
      }} />}>{args.children}</Button>\r
                <Button {...args} color="primary" appearance="text" startIcon={<ArrowBackIosNewIcon sx={{
        width: 16
      }} />}>{args.children}</Button>\r
                <div>\r
                    <Button {...args} color="secondary" startIcon={<FileCopyIcon sx={{
          width: 16
        }} />} endIcon={<ArrowDropDownIcon sx={{
          fontSize: 30
        }} />} size="small">{args.children}</Button>\r
                </div>\r
                <Button {...args} color="info" appearance="outlined" endIcon={<ArrowForwardIosIcon sx={{
        width: 16
      }} />}>{args.children}</Button>\r
            </div>;
  }
}`,...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Q=["InlineIcons"];export{c as InlineIcons,Q as __namedExportsOrder,G as default};

import{r as l,a as u,g as p,j as e}from"./iframe-DtbUUh3X.js";import{B as c}from"./button-DW7SH_Ad.js";import{r as w}from"./createSvgIcon-BH24oe3O.js";import"./Button-nfZFoYEm.js";import"./TransitionGroupContext-ByHAGyPv.js";import"./ButtonBase-jxhwmONz.js";import"./useIsFocusVisible-BXAimtCf.js";import"./createSvgIcon-ETa8Gqb4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-D1OSTXzn.js";var n={},I;function A(){if(I)return n;I=1;var r=l();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(w()),t=u();return n.default=(0,o.default)((0,t.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos"),n}var y=A();const v=p(y);var a={},f;function B(){if(f)return a;f=1;var r=l();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(w()),t=u();return a.default=(0,o.default)((0,t.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew"),a}var D=B();const q=p(D);var i={},x;function F(){if(x)return i;x=1;var r=l();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(w()),t=u();return i.default=(0,o.default)((0,t.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),i}var R=F();const g=p(R);var s={},m;function z(){if(m)return s;m=1;var r=l();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o=r(w()),t=u();return s.default=(0,o.default)((0,t.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"}),"FileCopy"),s}var C=z();const E=p(C),{fn:S}=__STORYBOOK_MODULE_TEST__,K={title:"ATOMS/Button",component:c,parameters:{controls:{include:[]},actions:{disable:!0}},args:{onClick:S()}},d={args:{color:"secondary",children:"LABEL",appearence:"contained",size:"medium",disabled:!1},render:r=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(c,{...r,color:"primary",endIcon:e.jsx(v,{sx:{width:16}}),children:r.children}),e.jsx(c,{...r,color:"primary",appearence:"text",startIcon:e.jsx(q,{sx:{width:16}}),children:r.children}),e.jsx("div",{children:e.jsx(c,{...r,color:"secondary",startIcon:e.jsx(E,{sx:{width:16}}),endIcon:e.jsx(g,{sx:{fontSize:30}}),size:"small",children:r.children})}),e.jsx(c,{...r,color:"info",appearence:"outlined",endIcon:e.jsx(v,{sx:{width:16}}),children:r.children})]})};d.name="Inline Icons";var h,_,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    children: 'LABEL',
    appearence: 'contained',
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
                <Button {...args} color="primary" appearence="text" startIcon={<ArrowBackIosNewIcon sx={{
        width: 16
      }} />}>{args.children}</Button>\r
                <div>\r
                    <Button {...args} color="secondary" startIcon={<FileCopyIcon sx={{
          width: 16
        }} />} endIcon={<ArrowDropDownIcon sx={{
          fontSize: 30
        }} />} size="small">{args.children}</Button>\r
                </div>\r
                <Button {...args} color="info" appearence="outlined" endIcon={<ArrowForwardIosIcon sx={{
        width: 16
      }} />}>{args.children}</Button>\r
            </div>;
  }
}`,...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const U=["InlineIcons"];export{d as InlineIcons,U as __namedExportsOrder,K as default};

import{j as t}from"./iframe-C_mvATxf.js";import{T as s}from"./Typography-BNoquuOj.js";import{S as d}from"./Stack-DsmHLUro.js";import"./styled-D3e7hSdf.js";import"./generateUtilityClasses-rR3iYhxQ.js";const o=({children:a,variant:e="body1",...i})=>t.jsx(s,{...i,variant:e,sx:{fontSize:e==="custom"?"0.875rem":e,fontWeight:e==="custom"?500:void 0,lineHeight:e==="custom"?"24px":void 0,letterSpacing:e==="custom"?"0.17px":void 0,color:i.color||"text.primary",...i.sx},children:a});o.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline' | "custom"`,elements:[{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"},{name:"literal",value:'"custom"'}]},description:"",defaultValue:{value:'"body1"',computed:!1}}},composes:["ComponentPropsWithoutRef"]};const x={title:"ATOMS/Typography",component:o},r={render:()=>{const a=["body1","body2","subtitle1","subtitle2","overline","caption","h6","h5","h4","h3","h2","h1","custom"];return t.jsx(t.Fragment,{children:a.map(e=>t.jsxs(d,{sx:{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:2,"&:not(:last-child) .MuiTypography-root ":{borderBottom:"none"},"&:last-child .MuiTypography-root ":{borderRadius:"0 0 8px 8px"},"&:first-child .MuiTypography-root ":{borderRadius:"8px 8px 0 0"}},children:[t.jsx(o,{sx:{width:"50px",textAlign:"center",color:"#9747FF"},variant:"body2",children:e}),t.jsx(o,{variant:e,sx:{textAlign:"center",width:"528px",border:"1px dashed  #9747FF",padding:"16px 16px"},children:"Typography"})]},e))})}};var p,n,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const typographyVariants: ComponentProps<typeof Typography>['variant'][] = ['body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'caption', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1', 'custom'];
    return <>\r
                {typographyVariants.map(variant => {
        return <Stack key={variant} sx={{
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          "&:not(:last-child) .MuiTypography-root ": {
            borderBottom: 'none'
          },
          "&:last-child .MuiTypography-root ": {
            borderRadius: '0 0 8px 8px'
          },
          "&:first-child .MuiTypography-root ": {
            borderRadius: '8px 8px 0 0'
          }
        }}>\r
                            <Typography sx={{
            width: '50px',
            textAlign: 'center',
            color: "#9747FF"
          }} variant="body2">\r
                                {variant}\r
                            </Typography>\r
                            <Typography variant={variant} sx={{
            textAlign: 'center',
            width: '528px',
            border: '1px dashed  #9747FF',
            padding: '16px 16px'
          }}>\r
                                Typography\r
                            </Typography>\r
                        </Stack>;
      })}\r
            </>;
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const g=["Text"];export{r as Text,g as __namedExportsOrder,x as default};

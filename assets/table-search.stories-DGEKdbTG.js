import{i as v,k as C,g as S,j as t,r as p}from"./iframe-C_mvATxf.js";import{I as V}from"./input-BW5SRUMQ.js";import{S as u}from"./Search-54jhCkmg.js";import{I as m}from"./icon-button-DxE0ed2w.js";import{r as b}from"./createSvgIcon-BJfsRVye.js";import"./FormControl-Cxd88cuH.js";import"./styled-D3e7hSdf.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B5wV8xKu.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./isMuiElement-BRSh3FLT.js";import"./TextField-CChYsR28.js";import"./useId-CjGAtGk9.js";import"./Select-B9Z0luHz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CcMJvyZX.js";import"./useSlotProps-CJdg0P1D.js";import"./resolveComponentProps-BNjn3TbO.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cd2_LOh1.js";import"./Paper-y4L9TjWB.js";import"./Grow-CA2fjeE3.js";import"./useTheme-BlUG05El.js";import"./utils-B6yf_fIX.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./index-BmfL9UO7.js";import"./index-BBQBgD7t.js";import"./getReactElementRef-BioJHGsC.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DXzE80HE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B9PzbMud.js";import"./useControlled-Cyk4WA3W.js";import"./createSvgIcon-Iv4cjDr_.js";import"./InputBase-BojRxlmd.js";import"./Typography-BNoquuOj.js";import"./IconButton-BUqMT2pW.js";import"./ButtonBase-CGQkK_HI.js";import"./useIsFocusVisible-yosOA7Ab.js";var n={},d;function j(){if(d)return n;d=1;var a=v();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(b()),e=C();return n.default=(0,r.default)((0,e.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),n}var I=j();const y=S(I),i=({expanded:a,value:r,onChange:e})=>a?t.jsx(V,{placeholder:"Search",value:r,onChange:e?s=>e(s.target.value):void 0,InputProps:{disableUnderline:!0},hiddenLabel:!0,startIcon:t.jsx(u,{sx:{width:20,height:20}}),endIcon:t.jsx(m,{color:"default",size:"small",onClick:()=>e&&e(""),disabled:!r,children:t.jsx(y,{sx:{width:20,height:20}})})}):r?null:t.jsx(m,{color:"default",size:"table",children:t.jsx(u,{sx:{width:20,height:20}})});i.__docgenInfo={description:"",methods:[],displayName:"TableSearch",props:{expanded:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const me={title:"ATOMS/TableControlElements/TableSearch",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,expanded:!1},render:a=>{const[r,e]=p.useState(""),s=x=>{e(x)},{hasValue:l,...g}=a;return p.useEffect(()=>{e(l?"Organization":"")},[l]),t.jsx(i,{...g,value:r,onChange:s})}};var c,h,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    hasValue: true,
    expanded: false
  },
  render: args => {
    const [value, setValue] = useState<string>("");
    const handleOnChange = (newValue: string) => {
      setValue(newValue);
    };
    const {
      hasValue,
      ...rest
    } = args as StoryProps;
    useEffect(() => {
      if (hasValue) {
        setValue("Organization");
      } else {
        setValue("");
      }
    }, [hasValue]);
    return <TableSearch {...rest} value={value} onChange={handleOnChange} />;
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const de=["Default"];export{o as Default,de as __namedExportsOrder,me as default};

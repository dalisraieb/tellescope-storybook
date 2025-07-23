import{i as v,k as C,g as S,j as t,r as p}from"./iframe-Bv6dwyi6.js";import{I as V}from"./input-JQg3Uu4n.js";import{S as u}from"./Search-Bw82WqJA.js";import{I as m}from"./icon-button-Bsq2QKSR.js";import{r as b}from"./createSvgIcon-CKdMn4wO.js";import"./FormControl-DtIj0zbc.js";import"./styled-1wupYI6N.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DVbzj1df.js";import"./isMuiElement-Cd5s-INa.js";import"./TextField-OODcnAKk.js";import"./useId-5SlOnbtB.js";import"./Select-DgVd0jcT.js";import"./formControlState-Dq1zat_P.js";import"./List-CZrgSkRM.js";import"./useSlotProps-B-IxTsoN.js";import"./resolveComponentProps-C72E2f_V.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-B_DK4l75.js";import"./Paper-CpZCUC_L.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./index-BaZz6jG6.js";import"./index-Bn2X2bTa.js";import"./Grow-ozNc40uE.js";import"./useTheme-Chg0PB4m.js";import"./getReactElementRef-Dq-Larem.js";import"./ownerWindow-DIR61fab.js";import"./Modal-84UeeU9m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Bh7QF-ia.js";import"./createSvgIcon-BJSFEBnp.js";import"./InputBase-BELbqXUV.js";import"./Typography-YZ__YNto.js";import"./IconButton-B97976Nu.js";import"./ButtonBase-_JbzIVNU.js";import"./useIsFocusVisible-D2WDfv2W.js";var n={},d;function j(){if(d)return n;d=1;var a=v();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(b()),e=C();return n.default=(0,r.default)((0,e.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),n}var I=j();const y=S(I),i=({expanded:a,value:r,onChange:e})=>a?t.jsx(V,{placeholder:"Search",value:r,onChange:e?s=>e(s.target.value):void 0,InputProps:{disableUnderline:!0},hiddenLabel:!0,startIcon:t.jsx(u,{sx:{width:20,height:20}}),endIcon:t.jsx(m,{color:"default",size:"small",onClick:()=>e&&e(""),disabled:!r,children:t.jsx(y,{sx:{width:20,height:20}})})}):r?null:t.jsx(m,{color:"default",size:"table",children:t.jsx(u,{sx:{width:20,height:20}})});i.__docgenInfo={description:"",methods:[],displayName:"TableSearch",props:{expanded:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const le={title:"ATOMS/TableControlElements/TableSearch",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,expanded:!1},render:a=>{const[r,e]=p.useState(""),s=x=>{e(x)},{hasValue:l,...g}=a;return p.useEffect(()=>{e(l?"Organization":"")},[l]),t.jsx(i,{...g,value:r,onChange:s})}};var c,h,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const pe=["Default"];export{o as Default,pe as __namedExportsOrder,le as default};

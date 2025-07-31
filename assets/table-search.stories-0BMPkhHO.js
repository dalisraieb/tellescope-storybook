import{i as v,k as C,g as S,j as t,r as p}from"./iframe-CM3h47Pf.js";import{I as V}from"./input-CmOveAHK.js";import{S as u}from"./Search-BLvZSuZE.js";import{I as m}from"./icon-button-D9DfdhK8.js";import{r as b}from"./createSvgIcon-g6ki7VAI.js";import"./FormControl-DNSu1jEy.js";import"./styled-DspZaNH0.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BCi-nmTG.js";import"./generateUtilityClasses-BkYpawWM.js";import"./isMuiElement-DnV2LNbe.js";import"./TextField-C_RVne8W.js";import"./useId-BRHASpNm.js";import"./Select-BL39qYkB.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-K5XpL-Os.js";import"./useSlotProps-933pvwWH.js";import"./resolveComponentProps--03T1_O3.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-RdUEBmnf.js";import"./Paper-Baj6TKFv.js";import"./Grow-9zfcWsEt.js";import"./useTheme-Dl-SHv7N.js";import"./utils-BCjB-yJc.js";import"./TransitionGroupContext-DluSgF3d.js";import"./index-BGWVLkds.js";import"./index-Bu34i8Fg.js";import"./getReactElementRef-TcbM6XSU.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DJKmJHn4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BdCPbg8P.js";import"./useControlled-nTii91Zb.js";import"./createSvgIcon-DWMlvmED.js";import"./InputBase-6wqBhyI4.js";import"./Typography-CxaJ7SmR.js";import"./IconButton-DQGzsnDs.js";import"./ButtonBase-DVaQIUUB.js";import"./useIsFocusVisible-DCSkjDCX.js";var n={},d;function j(){if(d)return n;d=1;var a=v();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(b()),e=C();return n.default=(0,r.default)((0,e.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),n}var I=j();const y=S(I),i=({expanded:a,value:r,onChange:e})=>a?t.jsx(V,{placeholder:"Search",value:r,onChange:e?s=>e(s.target.value):void 0,InputProps:{disableUnderline:!0},hiddenLabel:!0,startIcon:t.jsx(u,{sx:{width:20,height:20}}),endIcon:t.jsx(m,{color:"default",size:"small",onClick:()=>e&&e(""),disabled:!r,children:t.jsx(y,{sx:{width:20,height:20}})})}):r?null:t.jsx(m,{color:"default",size:"table",children:t.jsx(u,{sx:{width:20,height:20}})});i.__docgenInfo={description:"",methods:[],displayName:"TableSearch",props:{expanded:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const me={title:"ATOMS/TableControlElements/TableSearch",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,expanded:!1},render:a=>{const[r,e]=p.useState(""),s=x=>{e(x)},{hasValue:l,...g}=a;return p.useEffect(()=>{e(l?"Organization":"")},[l]),t.jsx(i,{...g,value:r,onChange:s})}};var c,h,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

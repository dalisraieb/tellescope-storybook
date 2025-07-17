import{i as v,k as C,g as S,j as t,r as p}from"./iframe-DccEvDzC.js";import{I as V}from"./input-x3JIdKx9.js";import{S as u}from"./Search-C4xRY29k.js";import{I as m}from"./icon-button-CE4Nt9_8.js";import{r as b}from"./createSvgIcon-B3ikaxcm.js";import"./FormControl-Cmj0kEMY.js";import"./styled-Cfu_AvQ7.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-v0wCab-t.js";import"./isMuiElement-joNQ-oVj.js";import"./TextField-Cs5v_Pd1.js";import"./useId-DAXsOMtQ.js";import"./Select-EjcNZfqg.js";import"./formControlState-Dq1zat_P.js";import"./List-B6j4edsR.js";import"./useSlotProps-4Lu9Nojn.js";import"./resolveComponentProps-D7A_zo3W.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-xbtmyUFd.js";import"./Paper-CzlpFu-5.js";import"./TransitionGroupContext-DT2Zqife.js";import"./index-EoyXtuYd.js";import"./index-k-8e6fLA.js";import"./Grow-BqP7IeYW.js";import"./useTheme-C5CGHMgP.js";import"./getReactElementRef-wxbblr7K.js";import"./ownerWindow-DIR61fab.js";import"./Modal-jeFbmNzL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DIa1ppNA.js";import"./createSvgIcon-CYhW7ZJ1.js";import"./InputBase-C9l8h_le.js";import"./Typography-DOrtDJl4.js";import"./IconButton-IIbfsP2f.js";import"./ButtonBase-BQpfw9M-.js";import"./useIsFocusVisible-nsLV3YSx.js";var n={},d;function j(){if(d)return n;d=1;var a=v();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(b()),e=C();return n.default=(0,r.default)((0,e.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),n}var I=j();const y=S(I),i=({expanded:a,value:r,onChange:e})=>a?t.jsx(V,{placeholder:"Search",value:r,onChange:e?s=>e(s.target.value):void 0,InputProps:{disableUnderline:!0},hiddenLabel:!0,startIcon:t.jsx(u,{sx:{width:20,height:20}}),endIcon:t.jsx(m,{color:"default",size:"small",onClick:()=>e&&e(""),disabled:!r,children:t.jsx(y,{sx:{width:20,height:20}})})}):r?null:t.jsx(m,{color:"default",size:"table",children:t.jsx(u,{sx:{width:20,height:20}})});i.__docgenInfo={description:"",methods:[],displayName:"TableSearch",props:{expanded:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const le={title:"ATOMS/TableControlElements/TableSearch",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,expanded:!1},render:a=>{const[r,e]=p.useState(""),s=x=>{e(x)},{hasValue:l,...g}=a;return p.useEffect(()=>{e(l?"Organization":"")},[l]),t.jsx(i,{...g,value:r,onChange:s})}};var c,h,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

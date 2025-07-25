import{i as v,k as C,g as S,j as t,r as p}from"./iframe-BIRbnDU3.js";import{I as V}from"./input-CM_-x6T2.js";import{S as u}from"./Search-YWwkS9Z8.js";import{I as m}from"./icon-button-DRdewMc3.js";import{r as b}from"./createSvgIcon-Co9ghxje.js";import"./FormControl-BJPLsCx9.js";import"./styled-BQzQxZQg.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BH6yyn_Y.js";import"./isMuiElement-Dhbmfky1.js";import"./TextField-DHc1r9LT.js";import"./useId-C-divviP.js";import"./Select-DHZTV8S8.js";import"./formControlState-Dq1zat_P.js";import"./List-D-5zpCoO.js";import"./useSlotProps-ODbKV4Mg.js";import"./resolveComponentProps-BCcY2dCN.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-Cm4fgxMA.js";import"./Paper-rDORrwMN.js";import"./TransitionGroupContext-BaULKsg4.js";import"./index-DhMiAOT7.js";import"./index-CSL-6jbx.js";import"./Grow-BrjM973w.js";import"./useTheme-CdO6g5nq.js";import"./getReactElementRef-76HF8eBV.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Bs-D53QN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-BFmAtxsm.js";import"./createSvgIcon-Dj-KrJjm.js";import"./InputBase-fzMASiwB.js";import"./Typography-Cd3v5_Xb.js";import"./IconButton-2QUjugh2.js";import"./ButtonBase-CwbxjUMM.js";import"./useIsFocusVisible-BmSydHd7.js";var n={},d;function j(){if(d)return n;d=1;var a=v();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(b()),e=C();return n.default=(0,r.default)((0,e.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),n}var I=j();const y=S(I),i=({expanded:a,value:r,onChange:e})=>a?t.jsx(V,{placeholder:"Search",value:r,onChange:e?s=>e(s.target.value):void 0,InputProps:{disableUnderline:!0},hiddenLabel:!0,startIcon:t.jsx(u,{sx:{width:20,height:20}}),endIcon:t.jsx(m,{color:"default",size:"small",onClick:()=>e&&e(""),disabled:!r,children:t.jsx(y,{sx:{width:20,height:20}})})}):r?null:t.jsx(m,{color:"default",size:"table",children:t.jsx(u,{sx:{width:20,height:20}})});i.__docgenInfo={description:"",methods:[],displayName:"TableSearch",props:{expanded:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const le={title:"ATOMS/TableControlElements/TableSearch",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,expanded:!1},render:a=>{const[r,e]=p.useState(""),s=x=>{e(x)},{hasValue:l,...g}=a;return p.useEffect(()=>{e(l?"Organization":"")},[l]),t.jsx(i,{...g,value:r,onChange:s})}};var c,h,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

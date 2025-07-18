import{i as v,k as C,g as S,j as t,r as p}from"./iframe-D6WPvDsw.js";import{I as V}from"./input-BUbJuK_k.js";import{S as u}from"./Search-L1R6jzIp.js";import{I as m}from"./icon-button-DgwAMjYS.js";import{r as b}from"./createSvgIcon-l15DWx3n.js";import"./FormControl-Bvexnv9I.js";import"./styled-AX3WQiqK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-j6TWbiTy.js";import"./isMuiElement-tmp0hHY9.js";import"./TextField-ChueuGlo.js";import"./useId-DV-IoEpY.js";import"./Select-Bk3sn5xi.js";import"./formControlState-Dq1zat_P.js";import"./List-BxyuLOoB.js";import"./useSlotProps-re4MZg2K.js";import"./resolveComponentProps-DdCxtoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-kuuMuFVN.js";import"./Paper-IUoxnzvH.js";import"./TransitionGroupContext-DkLkXY74.js";import"./index-w00OeCIG.js";import"./index-CjlK8uMj.js";import"./Grow-CxdA_Xp2.js";import"./useTheme-C5UVmkdi.js";import"./getReactElementRef-DbwD0SEZ.js";import"./ownerWindow-DIR61fab.js";import"./Modal-CG13Q5kf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-7GtWE5q9.js";import"./createSvgIcon-V8HVGjoo.js";import"./InputBase-CRatIxq-.js";import"./Typography-DRjZWMth.js";import"./IconButton-BviMfJhe.js";import"./ButtonBase-BZJrsSUT.js";import"./useIsFocusVisible-BVCTFO4q.js";var n={},d;function j(){if(d)return n;d=1;var a=v();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(b()),e=C();return n.default=(0,r.default)((0,e.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),n}var I=j();const y=S(I),i=({expanded:a,value:r,onChange:e})=>a?t.jsx(V,{placeholder:"Search",value:r,onChange:e?s=>e(s.target.value):void 0,InputProps:{disableUnderline:!0},hiddenLabel:!0,startIcon:t.jsx(u,{sx:{width:20,height:20}}),endIcon:t.jsx(m,{color:"default",size:"small",onClick:()=>e&&e(""),disabled:!r,children:t.jsx(y,{sx:{width:20,height:20}})})}):r?null:t.jsx(m,{color:"default",size:"table",children:t.jsx(u,{sx:{width:20,height:20}})});i.__docgenInfo={description:"",methods:[],displayName:"TableSearch",props:{expanded:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const le={title:"ATOMS/TableControlElements/TableSearch",component:i,parameters:{controls:{exclude:["small","children","value","onChange"]}},argTypes:{expanded:{control:{type:"boolean"}},hasValue:{control:{type:"boolean"}}}},o={args:{hasValue:!0,expanded:!1},render:a=>{const[r,e]=p.useState(""),s=x=>{e(x)},{hasValue:l,...g}=a;return p.useEffect(()=>{e(l?"Organization":"")},[l]),t.jsx(i,{...g,value:r,onChange:s})}};var c,h,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

import{j as t,r as u}from"./iframe-CM3h47Pf.js";import{S as l}from"./select-DzcQDPtY.js";import{M as r}from"./MenuItem-BiGuVhex.js";import"./FormControl-DNSu1jEy.js";import"./styled-DspZaNH0.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BCi-nmTG.js";import"./generateUtilityClasses-BkYpawWM.js";import"./isMuiElement-DnV2LNbe.js";import"./Select-BL39qYkB.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-K5XpL-Os.js";import"./useSlotProps-933pvwWH.js";import"./resolveComponentProps--03T1_O3.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-RdUEBmnf.js";import"./Paper-Baj6TKFv.js";import"./Grow-9zfcWsEt.js";import"./useTheme-Dl-SHv7N.js";import"./utils-BCjB-yJc.js";import"./TransitionGroupContext-DluSgF3d.js";import"./index-BGWVLkds.js";import"./index-Bu34i8Fg.js";import"./getReactElementRef-TcbM6XSU.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DJKmJHn4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BdCPbg8P.js";import"./useControlled-nTii91Zb.js";import"./useId-BRHASpNm.js";import"./createSvgIcon-DWMlvmED.js";import"./InputBase-6wqBhyI4.js";import"./Stack-Dif7eGMF.js";import"./Chip-DK8sHTPe.js";import"./ButtonBase-DVaQIUUB.js";import"./useIsFocusVisible-DCSkjDCX.js";import"./listItemTextClasses-8cn6mZSo.js";import"./dividerClasses-DV1b1S48.js";const X={title:"ATOMS/FormInputs/Select",component:l,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},a={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(l,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(r,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(r,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(r,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(r,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,o,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "",
    onChange: () => {},
    appearance: 'standard',
    multiple: false,
    size: "medium",
    children: []
  },
  render: args => {
    const [value, setValue] = useState<string | string[]>(args.multiple || args.appearance === "table" ? [] : '');
    return <Select {...args} multiple={args.multiple || args.appearance === "table"} value={value} onChange={e => setValue(e.target.value)}>\r
                <MenuItem value="Synt to health" key="Synt to health">Synt to health</MenuItem>\r
                <MenuItem value="Content capsqd" key="Content capsqd">Content capsqd</MenuItem>\r
                <MenuItem value="Chip 3" key="Chip 3">Chip 3</MenuItem>\r
                <MenuItem value="Chip 4" key="Chip 4">Chip 4</MenuItem>\r
            </Select>;
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Y=["SingleSelect"];export{a as SingleSelect,Y as __namedExportsOrder,X as default};

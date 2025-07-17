import{j as t,r as u}from"./iframe-DccEvDzC.js";import{S as i}from"./select-avApGTAo.js";import{M as a}from"./MenuItem-GQcqo-ak.js";import"./FormControl-Cmj0kEMY.js";import"./styled-Cfu_AvQ7.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-v0wCab-t.js";import"./isMuiElement-joNQ-oVj.js";import"./Select-EjcNZfqg.js";import"./formControlState-Dq1zat_P.js";import"./List-B6j4edsR.js";import"./useSlotProps-4Lu9Nojn.js";import"./resolveComponentProps-D7A_zo3W.js";import"./isHostComponent-DVu5iVWx.js";import"./useTimeout-xbtmyUFd.js";import"./Paper-CzlpFu-5.js";import"./TransitionGroupContext-DT2Zqife.js";import"./index-EoyXtuYd.js";import"./index-k-8e6fLA.js";import"./Grow-BqP7IeYW.js";import"./useTheme-C5CGHMgP.js";import"./getReactElementRef-wxbblr7K.js";import"./ownerWindow-DIR61fab.js";import"./Modal-jeFbmNzL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-DIa1ppNA.js";import"./useId-DAXsOMtQ.js";import"./createSvgIcon-CYhW7ZJ1.js";import"./InputBase-C9l8h_le.js";import"./Stack-DQLN1x6Z.js";import"./Chip-BY0P0vAX.js";import"./ButtonBase-BQpfw9M-.js";import"./useIsFocusVisible-nsLV3YSx.js";import"./dividerClasses-Dr5gbvf2.js";const P={title:"ATOMS/FormInputs/Select",component:i,parameters:{controls:{include:["appearance"]}},argTypes:{appearance:{control:"select",options:["standard","filled","outlined","table","patientForm"]},multiple:{control:"boolean"}},decorators:[e=>t.jsx("div",{style:{width:250},children:t.jsx(e,{})})]},r={args:{label:"Label",value:"",onChange:()=>{},appearance:"standard",multiple:!1,size:"medium",children:[]},render:e=>{const[n,m]=u.useState(e.multiple||e.appearance==="table"?[]:"");return t.jsxs(i,{...e,multiple:e.multiple||e.appearance==="table",value:n,onChange:s=>m(s.target.value),children:[t.jsx(a,{value:"Synt to health",children:"Synt to health"},"Synt to health"),t.jsx(a,{value:"Content capsqd",children:"Content capsqd"},"Content capsqd"),t.jsx(a,{value:"Chip 3",children:"Chip 3"},"Chip 3"),t.jsx(a,{value:"Chip 4",children:"Chip 4"},"Chip 4")]})}};var p,o,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const Q=["SingleSelect"];export{r as SingleSelect,Q as __namedExportsOrder,P as default};

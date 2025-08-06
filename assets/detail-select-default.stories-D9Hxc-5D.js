import{j as e}from"./iframe-CpdnR0i2.js";import{D as a}from"./detail-select-default-D8J8BZEA.js";import{P as p,S as s,T as m}from"./Tag-BB6O47SC.js";import{G as o}from"./GroupOutlined-Ah3vpoTb.js";import"./button-Bp8dYhEO.js";import"./Button-DOuccIOk.js";import"./styled-DujYcmrZ.js";import"./generateUtilityClasses-DDi6EuTn.js";import"./ButtonBase-DfyOkDKJ.js";import"./useTimeout-BgZTaRCc.js";import"./TransitionGroupContext-B3hU1AzR.js";import"./useForkRef-k7JvqZ8G.js";import"./useIsFocusVisible-BvCl6UH0.js";import"./tiny-select-Cu9ohbW1.js";import"./select-y-F9G4j3.js";import"./FormControl-8E0NZ6Fd.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bdg8Z9sC.js";import"./isMuiElement-5-QtcHpW.js";import"./InputLabel-CkLjBIwK.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BvCR-wSo.js";import"./Select-DbmNEHLt.js";import"./useSlotProps-DcuCg741.js";import"./resolveComponentProps-C7XGfMdE.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CL1wgyoG.js";import"./Grow-CSCmvqx_.js";import"./useTheme-dL_JtiI5.js";import"./utils-Be2lOGi8.js";import"./index-CoYqnUvw.js";import"./index-wcffcyWy.js";import"./getReactElementRef-dg5jktwz.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-DFczexqp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B7_zldcA.js";import"./useControlled-d9yX6gVw.js";import"./createSvgIcon-C4MRlNQH.js";import"./InputBase-DoBoD0Ub.js";import"./Stack-Bd6jq2pn.js";import"./Chip-Cxo-wOmO.js";import"./createSvgIcon-C3FiYK1r.js";import"./input-D6SmNVo1.js";import"./TextField-grUENmEg.js";import"./Typography-DUyUrCFr.js";import"./Add-ClgTdUVf.js";import"./Delete-D5B99YKw.js";import"./Box-Cc3QCFpm.js";import"./Badge-D_C-h1_3.js";import"./usePreviousProps-gH0S_yWp.js";import"./MenuItem-CY6_J7Gc.js";import"./listItemTextClasses-Cs2njzJp.js";import"./dividerClasses-DwUrptCk.js";import"./ListItemIcon-jMMEYnIU.js";import"./ListItemText-Csnkj9ZO.js";import"./ListSubheader-C5U8P2Rn.js";const fe={title:"MOLECULES/Table Elements/Detail Select",component:a,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],r={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(a,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(a,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:t.hasValue?"name":void 0})})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    appearance: "sort",
    active: false,
    hasValue: false
  },
  render: (props: StoryProps) => {
    /* \r
        - This methods helps developer make the component more interactive.\r
            - Appearance "Sort"\r
                * onAddSort\r
                * onDeleteSort\r
                * onChangeSort\r
                * onChangeSortOrder\r
            - Appearance "Filter"\r
                * OnSetFilterOption\r
                * OnSetFilterValue\r
                * OnClearFilter\r
    */

    return <>\r
                {props.appearance === "sort" ? <DetailSelect open={props.active} appearance="sort" availableSortFields={availableSortFields} value={props.hasValue ? [{
        field: 'name',
        order: 'ascending'
      }] : []}
      // onChangeSort, onChangeSortOrder, onAddSort, onDeleteSort handlers can be added here
      /> : <DetailSelect open={props.active} appearance="filter" filterOptions={filterOptions} value={props.hasValue ? {
        value: 'a',
        filterOption: 'contains'
      } : null} field={props.hasValue ? 'name' : undefined}
      // OnSetFilterOption, OnSetFilterValue, OnClearFilter handlers can be added here
      />}\r
            </>;
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const be=["Default"];export{r as Default,be as __namedExportsOrder,fe as default};

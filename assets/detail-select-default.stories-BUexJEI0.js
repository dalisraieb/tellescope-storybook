import{j as e}from"./iframe-CM3h47Pf.js";import{D as a}from"./detail-select-default-BE45x72t.js";import{P as p,S as s,T as m}from"./Tag-HOrNbciI.js";import{G as o}from"./GroupOutlined-DPv6lbhP.js";import"./button-DSw1XxL4.js";import"./Button-JTqTRxJl.js";import"./styled-DspZaNH0.js";import"./generateUtilityClasses-BkYpawWM.js";import"./ButtonBase-DVaQIUUB.js";import"./useTimeout-RdUEBmnf.js";import"./TransitionGroupContext-DluSgF3d.js";import"./useIsFocusVisible-DCSkjDCX.js";import"./tiny-select-BM0M8zNu.js";import"./select-DzcQDPtY.js";import"./FormControl-DNSu1jEy.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BCi-nmTG.js";import"./isMuiElement-DnV2LNbe.js";import"./Select-BL39qYkB.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-K5XpL-Os.js";import"./useSlotProps-933pvwWH.js";import"./resolveComponentProps--03T1_O3.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Baj6TKFv.js";import"./Grow-9zfcWsEt.js";import"./useTheme-Dl-SHv7N.js";import"./utils-BCjB-yJc.js";import"./index-BGWVLkds.js";import"./index-Bu34i8Fg.js";import"./getReactElementRef-TcbM6XSU.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DJKmJHn4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BdCPbg8P.js";import"./useControlled-nTii91Zb.js";import"./useId-BRHASpNm.js";import"./createSvgIcon-DWMlvmED.js";import"./InputBase-6wqBhyI4.js";import"./Stack-Dif7eGMF.js";import"./Chip-DK8sHTPe.js";import"./createSvgIcon-g6ki7VAI.js";import"./input-CmOveAHK.js";import"./TextField-C_RVne8W.js";import"./Typography-CxaJ7SmR.js";import"./Add-7VmSZPLs.js";import"./Delete-BOWLBchF.js";import"./SwapVert-D3R4uzPl.js";import"./Box-CPj2at51.js";import"./Badge-D2vCWnn3.js";import"./usePreviousProps-Bd5HZ0Qr.js";import"./MenuItem-BiGuVhex.js";import"./listItemTextClasses-8cn6mZSo.js";import"./dividerClasses-DV1b1S48.js";import"./ListItemIcon-CRYv4Jlt.js";import"./ListItemText-CtSizuYw.js";import"./ListSubheader-DVkmjH6j.js";const Se={title:"MOLECULES/Table Elements/Detail Select",component:a,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],r={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(a,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(a,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:"name"})})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      } : null} field='name'

      // OnSetFilterOption, OnSetFilterValue, OnClearFilter handlers can be added here
      />}\r
            </>;
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const fe=["Default"];export{r as Default,fe as __namedExportsOrder,Se as default};

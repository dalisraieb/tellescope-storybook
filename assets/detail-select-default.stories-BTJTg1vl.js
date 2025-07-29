import{j as e}from"./iframe-C_mvATxf.js";import{D as a}from"./detail-select-default-CZIgCHij.js";import{P as p,S as s,T as m}from"./Tag-BkG8cxs2.js";import{G as o}from"./GroupOutlined-CXMVofo_.js";import"./button-CZ_JoKoe.js";import"./Button-7jMBupUw.js";import"./styled-D3e7hSdf.js";import"./generateUtilityClasses-rR3iYhxQ.js";import"./ButtonBase-CGQkK_HI.js";import"./useTimeout-Cd2_LOh1.js";import"./TransitionGroupContext-DgN5kJD-.js";import"./useIsFocusVisible-yosOA7Ab.js";import"./tiny-select-UwO_yehd.js";import"./select-BXD8uIfw.js";import"./FormControl-Cxd88cuH.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B5wV8xKu.js";import"./isMuiElement-BRSh3FLT.js";import"./Select-B9Z0luHz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CcMJvyZX.js";import"./useSlotProps-CJdg0P1D.js";import"./resolveComponentProps-BNjn3TbO.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-y4L9TjWB.js";import"./Grow-CA2fjeE3.js";import"./useTheme-BlUG05El.js";import"./utils-B6yf_fIX.js";import"./index-BmfL9UO7.js";import"./index-BBQBgD7t.js";import"./getReactElementRef-BioJHGsC.js";import"./ownerWindow-DIR61fab.js";import"./Modal-DXzE80HE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-B9PzbMud.js";import"./useControlled-Cyk4WA3W.js";import"./useId-CjGAtGk9.js";import"./createSvgIcon-Iv4cjDr_.js";import"./InputBase-BojRxlmd.js";import"./Stack-DsmHLUro.js";import"./Chip-DpmiigPe.js";import"./createSvgIcon-BJfsRVye.js";import"./input-BW5SRUMQ.js";import"./TextField-CChYsR28.js";import"./Typography-BNoquuOj.js";import"./Add-6zO5eE1A.js";import"./Delete-DuIgHlmd.js";import"./SwapVert-D5y6yLFd.js";import"./Box-bbxb9Zzk.js";import"./Badge-BMeK0IPM.js";import"./usePreviousProps-BXUi4Fvj.js";import"./MenuItem-DJYbJNDN.js";import"./listItemTextClasses-DV326QbH.js";import"./dividerClasses-BBsfSVcS.js";import"./ListItemIcon-lDgly72x.js";import"./ListItemText-DtmrVKjz.js";import"./ListSubheader-CGn_gHz4.js";const Se={title:"MOLECULES/Table Elements/Detail Select",component:a,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],r={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(a,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(a,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:"name"})})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

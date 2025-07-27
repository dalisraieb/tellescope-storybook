import{j as e}from"./iframe-BOEgomFY.js";import{D as r}from"./detail-select-default-l5G3JsfX.js";import{P as p,S as s,T as m}from"./Tag-B6UNhHpC.js";import{G as o}from"./GroupOutlined-D0jhcqgU.js";import"./button-n0liwBoJ.js";import"./Button-sfdADAur.js";import"./styled-BMCVJyWx.js";import"./ButtonBase-Bf9JyTdh.js";import"./useTimeout-CDGGrJEl.js";import"./TransitionGroupContext-CDEAkzgg.js";import"./useIsFocusVisible-BN_wfPI7.js";import"./tiny-select-xRRZWEFK.js";import"./select-CZlMwc6a.js";import"./FormControl-D37Fn8y0.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B6gfc5sY.js";import"./isMuiElement-Bf6F_2WO.js";import"./Select-tTbiwVb4.js";import"./formControlState-Dq1zat_P.js";import"./List-gGLNKbcG.js";import"./useSlotProps-v6wrWMpK.js";import"./resolveComponentProps-DtOmBmP4.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-AT6iWgtF.js";import"./index-DQXJKHYz.js";import"./index-BwK426Sg.js";import"./Grow-Dgl558nA.js";import"./useTheme-Blpu_Sfd.js";import"./getReactElementRef-BclllGOx.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BONlEAG5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-C-4bjezr.js";import"./useId-DfYzE2b8.js";import"./createSvgIcon-y6GUQK9N.js";import"./InputBase-DSuvVq8E.js";import"./Stack-Cc11et4g.js";import"./Chip-r-q0salv.js";import"./createSvgIcon-LsRAuJTe.js";import"./input-8YHcm5ti.js";import"./TextField-DKXv7_ip.js";import"./Typography-CgdaMjzI.js";import"./Add-TB_9c5FD.js";import"./Delete-CI8CsQVk.js";import"./SwapVert-BwgJ_U4F.js";import"./Box-CK-R1Q0_.js";import"./Badge-CctqCfSM.js";import"./usePreviousProps-DztokaXV.js";import"./MenuItem-DNZf9Anj.js";import"./dividerClasses-qGTNULkz.js";import"./ListItemText-oxz9E3z3.js";import"./ListSubheader-DMGyXe1C.js";const ce={title:"MOLECULES/Table Elements/Detail Select",component:r,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],a={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(r,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(r,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:"name"})})};var i,l,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const ue=["Default"];export{a as Default,ue as __namedExportsOrder,ce as default};

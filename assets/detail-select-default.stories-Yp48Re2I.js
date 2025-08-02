import{j as e}from"./iframe-DfEpVtbN.js";import{D as a}from"./detail-select-default-qZAxqop7.js";import{P as p,S as s,T as m}from"./Tag-BZpHW92b.js";import{G as o}from"./GroupOutlined-CoJRWkZX.js";import"./button-DoqKT3zp.js";import"./Button-BtZU7I81.js";import"./styled-YlXm3ULK.js";import"./generateUtilityClasses-CpTVYkhT.js";import"./ButtonBase-ByKSMk68.js";import"./useTimeout-SVx8Dkdh.js";import"./TransitionGroupContext-DVR4kuzA.js";import"./useIsFocusVisible-DyBpABSY.js";import"./tiny-select-PE0gehAO.js";import"./select-CKVMQOl7.js";import"./FormControl-D-y60pjM.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-UibTObRu.js";import"./isMuiElement-DpfzEnnW.js";import"./Select-DEww3rqc.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cqsq5E1F.js";import"./useSlotProps-CjKilamI.js";import"./resolveComponentProps-B98698j1.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CbQWkKmk.js";import"./Grow-BqRLbL9l.js";import"./useTheme-D5mibIYT.js";import"./utils-CVehUsqU.js";import"./index-CAcAdmOn.js";import"./index-cZe5j3_t.js";import"./getReactElementRef-CcVow88t.js";import"./ownerWindow-DIR61fab.js";import"./Modal-BEYhj1Ai.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-BXwSC4-5.js";import"./useControlled-BnfF5NMN.js";import"./useId-Bxenf6dE.js";import"./createSvgIcon-DAAJIYo0.js";import"./InputBase-Dst-n6oM.js";import"./Stack-CKDPRdOE.js";import"./Chip-CXH0rH-o.js";import"./createSvgIcon-UJ_-k-8q.js";import"./input-Cgkj05mh.js";import"./TextField-DPkoAeEg.js";import"./Typography-8iwqUs_2.js";import"./Add-BF-TkGuY.js";import"./Delete-WWz11jsq.js";import"./SwapVert-Lk4XiiLN.js";import"./Box-DlJbTAuF.js";import"./Badge-CyQxmNgx.js";import"./usePreviousProps-Bu6Nc7TQ.js";import"./MenuItem-ZzlJJzG5.js";import"./listItemTextClasses-CyM1XClL.js";import"./dividerClasses-BbO3K7uf.js";import"./ListItemIcon-D1_vVhQj.js";import"./ListItemText-BpR2EgHv.js";import"./ListSubheader-N6I6uUEF.js";const Se={title:"MOLECULES/Table Elements/Detail Select",component:a,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],r={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(a,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(a,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:"name"})})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

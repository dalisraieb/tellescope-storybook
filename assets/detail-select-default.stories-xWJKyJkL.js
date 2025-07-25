import{j as e}from"./iframe-BIRbnDU3.js";import{D as r}from"./detail-select-default-DGtq2OIO.js";import{P as p,S as s,T as m}from"./Tag-CzebFKrF.js";import{G as o}from"./GroupOutlined-G3aEyYlM.js";import"./button-BcP49Cyf.js";import"./Button-BZEx8dNu.js";import"./styled-BQzQxZQg.js";import"./ButtonBase-CwbxjUMM.js";import"./useTimeout-Cm4fgxMA.js";import"./TransitionGroupContext-BaULKsg4.js";import"./useIsFocusVisible-BmSydHd7.js";import"./tiny-select-Cda-kuWo.js";import"./select-BLez6DQG.js";import"./FormControl-BJPLsCx9.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BH6yyn_Y.js";import"./isMuiElement-Dhbmfky1.js";import"./Select-DHZTV8S8.js";import"./formControlState-Dq1zat_P.js";import"./List-D-5zpCoO.js";import"./useSlotProps-ODbKV4Mg.js";import"./resolveComponentProps-BCcY2dCN.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-rDORrwMN.js";import"./index-DhMiAOT7.js";import"./index-CSL-6jbx.js";import"./Grow-BrjM973w.js";import"./useTheme-CdO6g5nq.js";import"./getReactElementRef-76HF8eBV.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Bs-D53QN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-BFmAtxsm.js";import"./useId-C-divviP.js";import"./createSvgIcon-Dj-KrJjm.js";import"./InputBase-fzMASiwB.js";import"./Stack-p8V-8Yyf.js";import"./Chip-BXVl9Dqj.js";import"./createSvgIcon-Co9ghxje.js";import"./input-CM_-x6T2.js";import"./TextField-DHc1r9LT.js";import"./Typography-Cd3v5_Xb.js";import"./Add-CvossPtt.js";import"./Delete-HDbAFf9x.js";import"./SwapVert-Cd4EJ95H.js";import"./Box-CF8wFioY.js";import"./Badge-BZ6w4LUh.js";import"./usePreviousProps-DTOlMNH7.js";import"./MenuItem-BDVB43Er.js";import"./dividerClasses-BqfVdti0.js";import"./ListItemText-C-knhhzz.js";import"./ListSubheader-Br1BxnEU.js";const ce={title:"MOLECULES/Table Elements/Detail Select",component:r,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],a={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(r,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(r,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:"name"})})};var i,l,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

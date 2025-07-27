import{j as e}from"./iframe-NAPhPX1u.js";import{D as r}from"./detail-select-default-o5k3CnvN.js";import{P as p,S as s,T as m}from"./Tag-CN4K6U8Z.js";import{G as o}from"./GroupOutlined-vqebo_-s.js";import"./button-CX41wHf2.js";import"./Button-CehtIALR.js";import"./styled-DO-91wXW.js";import"./ButtonBase-Dyh98Sbg.js";import"./useTimeout-CG_60NpA.js";import"./TransitionGroupContext-C90OWFUl.js";import"./useIsFocusVisible-j7B1oZPr.js";import"./tiny-select-BnvDj24i.js";import"./select-DfzJsUG5.js";import"./FormControl-BmN-RmyH.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-bl8w57rs.js";import"./isMuiElement-GCpe9NcE.js";import"./Select-Cf1fb45c.js";import"./formControlState-Dq1zat_P.js";import"./List-DOWCaeCd.js";import"./useSlotProps-CXKkWSe0.js";import"./resolveComponentProps-BUujQf9b.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B2ewq_WJ.js";import"./index-Dcz_RGR5.js";import"./index-BgztMLLJ.js";import"./Grow-D3PY-YRs.js";import"./useTheme-CuDTbWok.js";import"./getReactElementRef-DvA4X375.js";import"./ownerWindow-DIR61fab.js";import"./Modal-Dy9YtBPR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Coj7fk6E.js";import"./useId-0sbXxxQP.js";import"./createSvgIcon-CBEcOZsh.js";import"./InputBase-DjT-u5ZZ.js";import"./Stack-CQ7BulZm.js";import"./Chip-Db7o_Qk_.js";import"./createSvgIcon-D0Rt455a.js";import"./input-CVkLqA4G.js";import"./TextField-DE9IkZ7a.js";import"./Typography-PG28g8IJ.js";import"./Add-C9lG2cpJ.js";import"./Delete-DkmvgdWT.js";import"./SwapVert-DVOf-Tv-.js";import"./Box-DSk5b-S9.js";import"./Badge-DNUy47J3.js";import"./usePreviousProps-CxIL-_bV.js";import"./MenuItem-BJ221rqE.js";import"./dividerClasses-anPVgJL4.js";import"./ListItemText-DLUECCs6.js";import"./ListSubheader-YUmCH3Mo.js";const ce={title:"MOLECULES/Table Elements/Detail Select",component:r,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],a={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(r,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(r,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:"name"})})};var i,l,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-C7YkNvSQ.js";import{D as a}from"./detail-select-default-9JvLFqpR.js";import{P as p,S as s,T as m}from"./Tag-BmgM6M8l.js";import{G as o}from"./GroupOutlined-l4EthbOk.js";import"./button-C9AJtPin.js";import"./Button-B8jdMY2Z.js";import"./styled-9bVfkw6q.js";import"./generateUtilityClasses-DEoyZHqF.js";import"./ButtonBase-DinbBO9G.js";import"./useTimeout-BzjaGR02.js";import"./TransitionGroupContext-CotujMke.js";import"./useForkRef-C4CjHbyO.js";import"./useIsFocusVisible-BgEYUAtg.js";import"./tiny-select-CrQ49Uy9.js";import"./select-2vUKkyk2.js";import"./FormControl-DmS9Qp8c.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DA987-lg.js";import"./isMuiElement-4jqovnI5.js";import"./InputLabel-BSDcvnkt.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bxcy2z6E.js";import"./Select-DIwpWrco.js";import"./useSlotProps-BU_eKGJ3.js";import"./resolveComponentProps-mwzhxngg.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BDm6ID2S.js";import"./Grow-vDAeiKMi.js";import"./useTheme-DaYcaQ3H.js";import"./utils-B2tfotqe.js";import"./index-C_5Kxbn_.js";import"./index-BxH1Iaxn.js";import"./getReactElementRef-BlSFz3Vq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Modal-0dIJzl53.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-4AeG_tC3.js";import"./useControlled-CDtRUcdo.js";import"./createSvgIcon-CAcL5gG4.js";import"./InputBase-wxT8anmG.js";import"./Stack-BPribNI5.js";import"./Chip-BVuNbYRK.js";import"./createSvgIcon-CmLukg3o.js";import"./input-cJKOjYWy.js";import"./TextField-CKlHBCga.js";import"./Typography-CIh4BeGT.js";import"./Add-Dn-QFNkM.js";import"./Delete-BAIGV3ty.js";import"./Box-okHX6eyU.js";import"./Badge-DnkfCYw-.js";import"./usePreviousProps-DXzHCaM4.js";import"./MenuItem-BzwDd5tb.js";import"./listItemTextClasses-BVuUz09p.js";import"./dividerClasses-6wmrs3Ei.js";import"./ListItemIcon-B6EQeCdB.js";import"./ListItemText-CUqI4k6h.js";import"./ListSubheader-BShIKKvr.js";const fe={title:"MOLECULES/Table Elements/Detail Select",component:a,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],r={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(a,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(a,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:t.hasValue?"name":void 0})})};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

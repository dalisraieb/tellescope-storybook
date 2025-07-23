import{j as e}from"./iframe-Bv6dwyi6.js";import{D as r}from"./detail-select-default-DC27LsKt.js";import{P as p,S as s,T as m}from"./Tag-I7Pj7mF6.js";import{G as o}from"./GroupOutlined-DifzGsY2.js";import"./button-DjDMlC5L.js";import"./Button-BnTxtv4B.js";import"./styled-1wupYI6N.js";import"./ButtonBase-_JbzIVNU.js";import"./useTimeout-B_DK4l75.js";import"./TransitionGroupContext-CCP3XvNy.js";import"./useIsFocusVisible-D2WDfv2W.js";import"./tiny-select-Bz48zSUh.js";import"./select-Dl4qvc58.js";import"./FormControl-DtIj0zbc.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DVbzj1df.js";import"./isMuiElement-Cd5s-INa.js";import"./Select-DgVd0jcT.js";import"./formControlState-Dq1zat_P.js";import"./List-CZrgSkRM.js";import"./useSlotProps-B-IxTsoN.js";import"./resolveComponentProps-C72E2f_V.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-CpZCUC_L.js";import"./index-BaZz6jG6.js";import"./index-Bn2X2bTa.js";import"./Grow-ozNc40uE.js";import"./useTheme-Chg0PB4m.js";import"./getReactElementRef-Dq-Larem.js";import"./ownerWindow-DIR61fab.js";import"./Modal-84UeeU9m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-Bh7QF-ia.js";import"./useId-5SlOnbtB.js";import"./createSvgIcon-BJSFEBnp.js";import"./InputBase-BELbqXUV.js";import"./Stack-BfX3vPkc.js";import"./Chip-Cjw0dkUG.js";import"./createSvgIcon-CKdMn4wO.js";import"./input-JQg3Uu4n.js";import"./TextField-OODcnAKk.js";import"./Typography-YZ__YNto.js";import"./Add-wXW7rx43.js";import"./Delete-BB7olYF3.js";import"./SwapVert-DitooL-c.js";import"./Box-BzyrmKLH.js";import"./Badge-oZGx0qmT.js";import"./usePreviousProps-BtoKIu1n.js";import"./MenuItem-9FrNM_dI.js";import"./dividerClasses-CeLMdPFz.js";import"./ListItemText-Cl69ImRH.js";import"./ListSubheader-DJmiDozX.js";const ce={title:"MOLECULES/Table Elements/Detail Select",component:r,parameters:{controls:{include:["appearance","active","hasValue"]}},argTypes:{hasValue:{control:{type:"boolean"}},active:{control:{type:"boolean"}},appearance:{control:{type:"select"},options:["sort","filter"]}}},c=[{label:"Name",value:"name",icon:e.jsx(p,{})},{label:"Care Team",value:"care team",icon:e.jsx(o,{})},{label:"Share Team",value:"share team",icon:e.jsx(o,{})},{label:"Journeys",value:"journeys",icon:e.jsx(s,{})},{label:"Tags",value:"tags",icon:e.jsx(m,{})}],u=[{label:"is",value:"is"},{label:"is not",value:"is not"},{label:"contains",value:"contains"},{label:"does not contain",value:"does not contain"},{label:"starts with",value:"starts with"},{label:"ends with",value:"ends with"},{label:"is empty",value:"is empty"},{label:"is not empty",value:"is not empty"}],a={args:{appearance:"sort",active:!1,hasValue:!1},render:t=>e.jsx(e.Fragment,{children:t.appearance==="sort"?e.jsx(r,{open:t.active,appearance:"sort",availableSortFields:c,value:t.hasValue?[{field:"name",order:"ascending"}]:[]}):e.jsx(r,{open:t.active,appearance:"filter",filterOptions:u,value:t.hasValue?{value:"a",filterOption:"contains"}:null,field:"name"})})};var i,l,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

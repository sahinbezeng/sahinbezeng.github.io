(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[17],{2292:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(33),i=a(22),o=a(693),d=a.n(o),c=a(688),l=a(671),s=a(226),m=a(63),p=a(23),u=a(282),b=a(691),h=a(702),g=a(0);t.default=function(){var e=Object(m.a)().themeStretch,t=Object(n.g)().pathname.split("/dashboard/campaign/list/")[1];return Object(g.jsx)(u.a,{title:"Campaign: List",children:Object(g.jsxs)(c.a,{maxWidth:!e&&"lg",children:[Object(g.jsx)(b.a,{heading:"Campaign List",links:[{name:"Campaign",href:p.b.campaign.list.all},{name:"List"}],action:Object(g.jsx)(l.a,{variant:"contained",component:r.b,to:p.b.campaign.create,startIcon:Object(g.jsx)(i.a,{icon:d.a}),children:"New Campaign"})}),Object(g.jsx)(s.a,{sx:{height:720},children:Object(g.jsx)(h.a,{type:"all"!==t&&t})})]})})}},691:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(32),i=a(174),o=a(638),d=a(226),c=a(227),l=a(663),s=a(38),m=a(0),p=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,b=e.moreLink,h=void 0===b?[]:b,g=e.sx,f=Object(r.a)(e,p);return Object(m.jsxs)(o.a,{sx:g,mb:5,spacing:2,children:[Object(m.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(m.jsxs)(d.a,{sx:{flexGrow:1},children:[Object(m.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:u}),Object(m.jsx)(s.a,Object(n.a)({links:t},f))]}),a&&Object(m.jsx)(d.a,{sx:{flexShrink:0},children:a})]}),Object(i.isString)(h)?Object(m.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(m.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},699:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(32),r=a(3),i=a(7),o=a(60),d=a(0),c=["color","variant","children"],l=Object(i.a)("span")((function(e){var t=e.theme,a=e.styleProps,n="light"===t.palette.mode,i=a.color,d=a.variant;return Object(r.a)({height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:t.spacing(0,1),color:t.palette.grey[800],fontSize:t.typography.pxToRem(12),fontFamily:t.typography.fontFamily,backgroundColor:t.palette.grey[300],fontWeight:t.typography.fontWeightBold},"default"!==i?Object(r.a)(Object(r.a)(Object(r.a)({},"filled"===d&&Object(r.a)({},function(e){return{color:t.palette[e].contrastText,backgroundColor:t.palette[e].main}}(i))),"outlined"===d&&Object(r.a)({},function(e){return{color:t.palette[e].main,backgroundColor:"transparent",border:"1px solid ".concat(t.palette[e].main)}}(i))),"ghost"===d&&Object(r.a)({},function(e){return{color:t.palette[e][n?"dark":"light"],backgroundColor:Object(o.a)(t.palette[e].main,.16)}}(i))):Object(r.a)(Object(r.a)({},"outlined"===d&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"1px solid ".concat(t.palette.grey[50032])}),"ghost"===d&&{color:n?t.palette.text.secondary:t.palette.common.white,backgroundColor:t.palette.grey[50016]}))}));function s(e){var t=e.color,a=void 0===t?"default":t,i=e.variant,o=void 0===i?"ghost":i,s=e.children,m=Object(n.a)(e,c);return Object(d.jsx)(l,Object(r.a)(Object(r.a)({styleProps:{color:a,variant:o}},m),{},{children:s}))}},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a(3),r=a(19),i=a(698),o=a.n(i),d=a(174),c=a(22),l=a(703),s=a.n(l),m=a(226),p=a(2296),u=a(2300),b=a(713),h=a(699),g=a(38),f=a(0),j=[{field:"id"},{field:"name",headerName:"Task Name",width:200},{field:"brandName",headerName:"Brand Name",width:200},{field:"brandStatus",headerName:"Brand Status",type:"number",width:200},{field:"campaignType",headerName:"Campaign Type",width:200},{field:"campaignBudget",headerName:"Campaign Budget",type:"number",width:200},{field:"budgetLeft",headerName:"Budget Left",type:"number",width:200},{field:"tokensGiven",headerName:"Tokens Given",type:"number",width:200},{field:"starsGiven",headerName:"Stars Given",type:"number",width:200},{field:"additionalTokensAdded",headerName:"Tokens Added",type:"number",width:200},{field:"engagementRate",headerName:"Engagement Rate",type:"number",width:200},{field:"reach",headerName:"Reach",type:"number",width:200},{field:"targetReach",headerName:"Target Reach",type:"number",width:200},{field:"brandShared",headerName:"Brand Shared",type:"number",width:200},{field:"entries",headerName:"Entries",type:"number",width:200},{field:"followingUsersNotCompleted",headerName:"Following Users Not Completed",type:"number",width:200},{field:"entriesAfterRewardsCompleted",headerName:"Entries After Rewards Completed",type:"number",width:200},{field:"deletedEntries",headerName:"Deleted Entries",type:"number",width:200},{field:"tickets",headerName:"Tickets",type:"number",width:200},{field:"bonusSet",headerName:"Bonus Set",type:"number",width:200},{field:"status",type:"singleSelect",headerName:"Status",width:120,valueOptions:["online","away","busy"],renderCell:function(e){var t=e.getValue(e.id,"status");return Object(f.jsx)(h.a,{color:Object(d.sample)(["error","success","warning"]),sx:{textTransform:"capitalize",mx:"auto"},children:t})}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){var t=e.row.id;return Object(f.jsx)(g.c,{onClick:function(){console.log("selectedID",t)},children:Object(f.jsx)(m.a,{component:c.a,icon:s.a,sx:{width:20,height:20}})})}}],y=["Contest","Content","Survey","Watch-Ad","Campaign"];o.a.seed(10);var x=Object(r.a)(Array(100)).map((function(e,t){return{id:"id ".concat(t+1),name:o.a.commerce.productName(),brandName:o.a.company.companyName(),brandStatus:o.a.datatype.number({min:1,max:5,precision:1}),campaignType:o.a.helpers.randomize(y),campaignBudget:o.a.datatype.number({min:1e3,max:5e5,precision:1}),budgetLeft:o.a.datatype.number({min:1e3,max:5e5,precision:1}),tokensGiven:o.a.datatype.number({min:100,max:1e4,precision:1}),starsGiven:o.a.datatype.number({min:100,max:1e3,precision:1}),additionalTokensAdded:o.a.datatype.number({min:100,max:5e3,precision:1}),engagementRate:o.a.datatype.number({min:100,max:5e3,precision:1}),reach:o.a.datatype.number({min:100,max:5e3,precision:1}),targetReach:o.a.datatype.number({min:100,max:5e3,precision:1}),brandShared:o.a.datatype.number({min:100,max:5e3,precision:1}),entries:o.a.datatype.number({min:100,max:5e3,precision:1}),followingUsersNotCompleted:o.a.datatype.number({min:100,max:5e3,precision:1}),entriesAfterRewardsCompleted:o.a.datatype.number({min:100,max:5e3,precision:1}),deletedEntries:o.a.datatype.number({min:100,max:5e3,precision:1}),tickets:o.a.datatype.number({min:100,max:5e3,precision:1}),bonusSet:o.a.datatype.number({min:100,max:5e3,precision:1}),status:Object(d.sample)(["saved not completed ","waiting for brand approval","active","ended submission","voting","voting ended","winner announced","paused","ended"])}}));function O(){var e=Object(b.d)(),t=e.state,a=e.apiRef;return Object(f.jsx)(p.a,{color:"primary",count:t.pagination.pageCount,page:t.pagination.page+1,onChange:function(e,t){return a.current.setPage(t-1)}})}function v(e){var t=e.item,a=e.applyValue;return Object(f.jsx)(m.a,{sx:{pl:2,height:1,alignItems:"center",display:"inline-flex"},children:Object(f.jsx)(u.a,{size:"small",name:"custom-rating-filter-operator",placeholder:"Filter value",value:Number(t.value),onChange:function(e,r){a(Object(n.a)(Object(n.a)({},t),{},{value:r}))},precision:.5})})}function w(e){var t=e.brandName,a=e.type;if(j.length>0){var r=j.find((function(e){return"rating"===e.field})),i=j.findIndex((function(e){return"rating"===e.field})),o=Object(b.c)().map((function(e){return Object(n.a)(Object(n.a)({},e),{},{InputComponent:v})}));j[i]=Object(n.a)(Object(n.a)({},r),{},{filterOperators:o})}return Object(f.jsx)(b.a,{rows:t?x.filter((function(e){return e.brandName===t})):a?x.filter((function(e){return e.campaignType.toLowerCase()===a})):x,columns:j,pagination:!0,pageSize:10,components:{Toolbar:b.b,Pagination:O},filterModel:{items:[{columnField:"engagementRate",value:"2500",operatorValue:">="}]}})}}}]);
//# sourceMappingURL=17.4c869408.chunk.js.map
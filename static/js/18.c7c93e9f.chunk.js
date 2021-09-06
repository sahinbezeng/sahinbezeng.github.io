(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[18],{2285:function(e,t,a){"use strict";a.r(t);var n=a(33),i=a(22),r=a(691),o=a.n(r),d=a(687),c=a(670),l=a(226),s=a(63),m=a(23),p=a(282),u=a(690),b=a(710),h=a(0);t.default=function(){var e=Object(s.a)().themeStretch;return Object(h.jsx)(p.a,{title:"Campaign: List",children:Object(h.jsxs)(d.a,{maxWidth:!e&&"lg",children:[Object(h.jsx)(u.a,{heading:"Campaign List",links:[{name:"Campaign",href:m.b.campaign.list.all},{name:"List"}],action:Object(h.jsx)(c.a,{variant:"contained",component:n.b,to:m.b.campaign.create,startIcon:Object(h.jsx)(i.a,{icon:o.a}),children:"New Campaign"})}),Object(h.jsx)(l.a,{sx:{height:720},children:Object(h.jsx)(b.a,{})})]})})}},690:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),i=a(32),r=a(174),o=a(637),d=a(226),c=a(227),l=a(662),s=a(38),m=a(0),p=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,b=e.moreLink,h=void 0===b?[]:b,g=e.sx,f=Object(i.a)(e,p);return Object(m.jsxs)(o.a,{sx:g,mb:5,spacing:2,children:[Object(m.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(m.jsxs)(d.a,{sx:{flexGrow:1},children:[Object(m.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:u}),Object(m.jsx)(s.a,Object(n.a)({links:t},f))]}),a&&Object(m.jsx)(d.a,{sx:{flexShrink:0},children:a})]}),Object(r.isString)(h)?Object(m.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(m.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},704:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(32),i=a(3),r=a(7),o=a(60),d=a(0),c=["color","variant","children"],l=Object(r.a)("span")((function(e){var t=e.theme,a=e.styleProps,n="light"===t.palette.mode,r=a.color,d=a.variant;return Object(i.a)({height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:t.spacing(0,1),color:t.palette.grey[800],fontSize:t.typography.pxToRem(12),fontFamily:t.typography.fontFamily,backgroundColor:t.palette.grey[300],fontWeight:t.typography.fontWeightBold},"default"!==r?Object(i.a)(Object(i.a)(Object(i.a)({},"filled"===d&&Object(i.a)({},function(e){return{color:t.palette[e].contrastText,backgroundColor:t.palette[e].main}}(r))),"outlined"===d&&Object(i.a)({},function(e){return{color:t.palette[e].main,backgroundColor:"transparent",border:"1px solid ".concat(t.palette[e].main)}}(r))),"ghost"===d&&Object(i.a)({},function(e){return{color:t.palette[e][n?"dark":"light"],backgroundColor:Object(o.a)(t.palette[e].main,.16)}}(r))):Object(i.a)(Object(i.a)({},"outlined"===d&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"1px solid ".concat(t.palette.grey[50032])}),"ghost"===d&&{color:n?t.palette.text.secondary:t.palette.common.white,backgroundColor:t.palette.grey[50016]}))}));function s(e){var t=e.color,a=void 0===t?"default":t,r=e.variant,o=void 0===r?"ghost":r,s=e.children,m=Object(n.a)(e,c);return Object(d.jsx)(l,Object(i.a)(Object(i.a)({styleProps:{color:a,variant:o}},m),{},{children:s}))}},710:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(3),i=a(19),r=a(720),o=a.n(r),d=a(174),c=a(22),l=a(734),s=a.n(l),m=a(226),p=a(2292),u=a(2295),b=a(735),h=a(704),g=a(38),f=a(0),j=[{field:"id"},{field:"name",headerName:"Task Name",width:200},{field:"brandStatus",headerName:"Brand Status",type:"number",width:200},{field:"campaignType",headerName:"Campaign Type",width:200},{field:"campaignBudget",headerName:"Campaign Budget",type:"number",width:200},{field:"budgetLeft",headerName:"Budget Left",type:"number",width:200},{field:"tokensGiven",headerName:"Tokens Given",type:"number",width:200},{field:"starsGiven",headerName:"Stars Given",type:"number",width:200},{field:"additionalTokensAdded",headerName:"Tokens Added",type:"number",width:200},{field:"engagementRate",headerName:"Engagement Rate",type:"number",width:200},{field:"reach",headerName:"Reach",type:"number",width:200},{field:"targetReach",headerName:"Target Reach",type:"number",width:200},{field:"brandShared",headerName:"Brand Shared",type:"number",width:200},{field:"entries",headerName:"Entries",type:"number",width:200},{field:"followingUsersNotCompleted",headerName:"Following Users Not Completed",type:"number",width:200},{field:"entriesAfterRewardsCompleted",headerName:"Entries After Rewards Completed",type:"number",width:200},{field:"deletedEntries",headerName:"Deleted Entries",type:"number",width:200},{field:"tickets",headerName:"Tickets",type:"number",width:200},{field:"bonusSet",headerName:"Bonus Set",type:"number",width:200},{field:"status",type:"singleSelect",headerName:"Status",width:120,valueOptions:["online","away","busy"],renderCell:function(e){var t=e.getValue(e.id,"status");return Object(f.jsx)(h.a,{color:("busy"===t?"error":"away"===t&&"warning")||"success",sx:{textTransform:"capitalize",mx:"auto"},children:t})}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){var t=e.row.id;return Object(f.jsx)(g.c,{onClick:function(){console.log("selectedID",t)},children:Object(f.jsx)(m.a,{component:c.a,icon:s.a,sx:{width:20,height:20}})})}}],y=["Task","Contest","Survey","Watch Ad","Campaign"],x=Object(i.a)(Array(100)).map((function(e,t){return{id:"id ".concat(t+1),name:o.a.commerce.productName(),brandStatus:o.a.datatype.number({min:1,max:5,precision:1}),campaignType:o.a.helpers.randomize(y),campaignBudget:o.a.datatype.number({min:1e3,max:5e5,precision:1}),budgetLeft:o.a.datatype.number({min:1e3,max:5e5,precision:1}),tokensGiven:o.a.datatype.number({min:100,max:1e4,precision:1}),starsGiven:o.a.datatype.number({min:100,max:1e3,precision:1}),additionalTokensAdded:o.a.datatype.number({min:100,max:5e3,precision:1}),engagementRate:o.a.datatype.number({min:100,max:5e3,precision:1}),reach:o.a.datatype.number({min:100,max:5e3,precision:1}),targetReach:o.a.datatype.number({min:100,max:5e3,precision:1}),brandShared:o.a.datatype.number({min:100,max:5e3,precision:1}),entries:o.a.datatype.number({min:100,max:5e3,precision:1}),followingUsersNotCompleted:o.a.datatype.number({min:100,max:5e3,precision:1}),entriesAfterRewardsCompleted:o.a.datatype.number({min:100,max:5e3,precision:1}),deletedEntries:o.a.datatype.number({min:100,max:5e3,precision:1}),tickets:o.a.datatype.number({min:100,max:5e3,precision:1}),bonusSet:o.a.datatype.number({min:100,max:5e3,precision:1}),status:Object(d.sample)(["online","away","busy"])}}));function O(){var e=Object(b.d)(),t=e.state,a=e.apiRef;return Object(f.jsx)(p.a,{color:"primary",count:t.pagination.pageCount,page:t.pagination.page+1,onChange:function(e,t){return a.current.setPage(t-1)}})}function w(e){var t=e.item,a=e.applyValue;return Object(f.jsx)(m.a,{sx:{pl:2,height:1,alignItems:"center",display:"inline-flex"},children:Object(f.jsx)(u.a,{size:"small",name:"custom-rating-filter-operator",placeholder:"Filter value",value:Number(t.value),onChange:function(e,i){a(Object(n.a)(Object(n.a)({},t),{},{value:i}))},precision:.5})})}function v(){if(j.length>0){var e=j.find((function(e){return"rating"===e.field})),t=j.findIndex((function(e){return"rating"===e.field})),a=Object(b.c)().map((function(e){return Object(n.a)(Object(n.a)({},e),{},{InputComponent:w})}));j[t]=Object(n.a)(Object(n.a)({},e),{},{filterOperators:a})}return Object(f.jsx)(b.a,{rows:x,columns:j,pagination:!0,pageSize:10,components:{Toolbar:b.b,Pagination:O},filterModel:{items:[{columnField:"engagementRate",value:"4500",operatorValue:">="}]}})}}}]);
//# sourceMappingURL=18.c7c93e9f.chunk.js.map
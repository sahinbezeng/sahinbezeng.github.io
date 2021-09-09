(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[18],{2292:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(22),i=a(693),d=a.n(i),o=a(688),c=a(671),s=a(226),l=a(63),m=a(23),p=a(282),u=a(691),b=a(701),h=a(0);t.default=function(){var e=Object(l.a)().themeStretch;return Object(h.jsx)(p.a,{title:"Campaign: List",children:Object(h.jsxs)(o.a,{maxWidth:!e&&"lg",children:[Object(h.jsx)(u.a,{heading:"Campaign List",links:[{name:"Campaign",href:m.b.campaign.list.all},{name:"List"}],action:Object(h.jsx)(c.a,{variant:"contained",component:n.b,to:m.b.campaign.create,startIcon:Object(h.jsx)(r.a,{icon:d.a}),children:"New Campaign"})}),Object(h.jsx)(s.a,{sx:{height:720},children:Object(h.jsx)(b.a,{})})]})})}},691:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(32),i=a(174),d=a(638),o=a(226),c=a(227),s=a(663),l=a(38),m=a(0),p=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,b=e.moreLink,h=void 0===b?[]:b,g=e.sx,f=Object(r.a)(e,p);return Object(m.jsxs)(d.a,{sx:g,mb:5,spacing:2,children:[Object(m.jsxs)(d.a,{direction:"row",alignItems:"center",children:[Object(m.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(m.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:u}),Object(m.jsx)(l.a,Object(n.a)({links:t},f))]}),a&&Object(m.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(i.isString)(h)?Object(m.jsx)(s.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(m.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},700:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(32),r=a(3),i=a(7),d=a(60),o=a(0),c=["color","variant","children"],s=Object(i.a)("span")((function(e){var t=e.theme,a=e.styleProps,n="light"===t.palette.mode,i=a.color,o=a.variant;return Object(r.a)({height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:t.spacing(0,1),color:t.palette.grey[800],fontSize:t.typography.pxToRem(12),fontFamily:t.typography.fontFamily,backgroundColor:t.palette.grey[300],fontWeight:t.typography.fontWeightBold},"default"!==i?Object(r.a)(Object(r.a)(Object(r.a)({},"filled"===o&&Object(r.a)({},function(e){return{color:t.palette[e].contrastText,backgroundColor:t.palette[e].main}}(i))),"outlined"===o&&Object(r.a)({},function(e){return{color:t.palette[e].main,backgroundColor:"transparent",border:"1px solid ".concat(t.palette[e].main)}}(i))),"ghost"===o&&Object(r.a)({},function(e){return{color:t.palette[e][n?"dark":"light"],backgroundColor:Object(d.a)(t.palette[e].main,.16)}}(i))):Object(r.a)(Object(r.a)({},"outlined"===o&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"1px solid ".concat(t.palette.grey[50032])}),"ghost"===o&&{color:n?t.palette.text.secondary:t.palette.common.white,backgroundColor:t.palette.grey[50016]}))}));function l(e){var t=e.color,a=void 0===t?"default":t,i=e.variant,d=void 0===i?"ghost":i,l=e.children,m=Object(n.a)(e,c);return Object(o.jsx)(s,Object(r.a)(Object(r.a)({styleProps:{color:a,variant:d}},m),{},{children:l}))}},701:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a(3),r=a(19),i=a(702),d=a.n(i),o=a(174),c=a(22),s=a(703),l=a.n(s),m=a(226),p=a(2297),u=a(2301),b=a(713),h=a(700),g=a(38),f=a(0),j=[{field:"id"},{field:"name",headerName:"Task Name",width:200},{field:"brandName",headerName:"Brand Name",width:200},{field:"brandStatus",headerName:"Brand Status",type:"number",width:200},{field:"campaignType",headerName:"Campaign Type",width:200},{field:"campaignBudget",headerName:"Campaign Budget",type:"number",width:200},{field:"budgetLeft",headerName:"Budget Left",type:"number",width:200},{field:"tokensGiven",headerName:"Tokens Given",type:"number",width:200},{field:"starsGiven",headerName:"Stars Given",type:"number",width:200},{field:"additionalTokensAdded",headerName:"Tokens Added",type:"number",width:200},{field:"engagementRate",headerName:"Engagement Rate",type:"number",width:200},{field:"reach",headerName:"Reach",type:"number",width:200},{field:"targetReach",headerName:"Target Reach",type:"number",width:200},{field:"brandShared",headerName:"Brand Shared",type:"number",width:200},{field:"entries",headerName:"Entries",type:"number",width:200},{field:"followingUsersNotCompleted",headerName:"Following Users Not Completed",type:"number",width:200},{field:"entriesAfterRewardsCompleted",headerName:"Entries After Rewards Completed",type:"number",width:200},{field:"deletedEntries",headerName:"Deleted Entries",type:"number",width:200},{field:"tickets",headerName:"Tickets",type:"number",width:200},{field:"bonusSet",headerName:"Bonus Set",type:"number",width:200},{field:"status",type:"singleSelect",headerName:"Status",width:120,valueOptions:["online","away","busy"],renderCell:function(e){var t=e.getValue(e.id,"status");return Object(f.jsx)(h.a,{color:Object(o.sample)(["error","success","warning"]),sx:{textTransform:"capitalize",mx:"auto"},children:t})}},{field:"action",headerName:" ",width:80,align:"right",sortable:!1,filterable:!1,disableColumnMenu:!0,renderCell:function(e){var t=e.row.id;return Object(f.jsx)(g.c,{onClick:function(){console.log("selectedID",t)},children:Object(f.jsx)(m.a,{component:c.a,icon:l.a,sx:{width:20,height:20}})})}}],y=["Task","Contest","Survey","Watch Ad","Campaign"];d.a.seed(10);var x=Object(r.a)(Array(100)).map((function(e,t){return{id:"id ".concat(t+1),name:d.a.commerce.productName(),brandName:d.a.company.companyName(),brandStatus:d.a.datatype.number({min:1,max:5,precision:1}),campaignType:d.a.helpers.randomize(y),campaignBudget:d.a.datatype.number({min:1e3,max:5e5,precision:1}),budgetLeft:d.a.datatype.number({min:1e3,max:5e5,precision:1}),tokensGiven:d.a.datatype.number({min:100,max:1e4,precision:1}),starsGiven:d.a.datatype.number({min:100,max:1e3,precision:1}),additionalTokensAdded:d.a.datatype.number({min:100,max:5e3,precision:1}),engagementRate:d.a.datatype.number({min:100,max:5e3,precision:1}),reach:d.a.datatype.number({min:100,max:5e3,precision:1}),targetReach:d.a.datatype.number({min:100,max:5e3,precision:1}),brandShared:d.a.datatype.number({min:100,max:5e3,precision:1}),entries:d.a.datatype.number({min:100,max:5e3,precision:1}),followingUsersNotCompleted:d.a.datatype.number({min:100,max:5e3,precision:1}),entriesAfterRewardsCompleted:d.a.datatype.number({min:100,max:5e3,precision:1}),deletedEntries:d.a.datatype.number({min:100,max:5e3,precision:1}),tickets:d.a.datatype.number({min:100,max:5e3,precision:1}),bonusSet:d.a.datatype.number({min:100,max:5e3,precision:1}),status:Object(o.sample)(["saved not completed ","waiting for brand approval","active","ended submission","voting","voting ended","winner announced","paused","ended"])}}));function O(){var e=Object(b.d)(),t=e.state,a=e.apiRef;return Object(f.jsx)(p.a,{color:"primary",count:t.pagination.pageCount,page:t.pagination.page+1,onChange:function(e,t){return a.current.setPage(t-1)}})}function v(e){var t=e.item,a=e.applyValue;return Object(f.jsx)(m.a,{sx:{pl:2,height:1,alignItems:"center",display:"inline-flex"},children:Object(f.jsx)(u.a,{size:"small",name:"custom-rating-filter-operator",placeholder:"Filter value",value:Number(t.value),onChange:function(e,r){a(Object(n.a)(Object(n.a)({},t),{},{value:r}))},precision:.5})})}function w(e){var t=e.brandName;if(j.length>0){var a=j.find((function(e){return"rating"===e.field})),r=j.findIndex((function(e){return"rating"===e.field})),i=Object(b.c)().map((function(e){return Object(n.a)(Object(n.a)({},e),{},{InputComponent:v})}));j[r]=Object(n.a)(Object(n.a)({},a),{},{filterOperators:i})}return Object(f.jsx)(b.a,{rows:t?x.filter((function(e){return e.brandName===t})):x,columns:j,pagination:!0,pageSize:10,components:{Toolbar:b.b,Pagination:O},filterModel:{items:[{columnField:"engagementRate",value:"2500",operatorValue:">="}]}})}}}]);
//# sourceMappingURL=18.9ddd1f1a.chunk.js.map
(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[27],{2324:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var n=a(25),i=a(688),c=a(231),s=a(232),r=a(660),l=a(687),j=a(711),b=a(706),d=a(635),h=a(19),u=a(65),o=a(283),x=a(691),O=a(736),g=a(734),m=a(21),p=a(699),f=a.n(p),k=a(182),v=a(46),R=a(722),B=a(723),y=a(720),S=a(721),w=a(715),N=a(724),D=a(187),A=a(0),C=[{id:"name",label:"Name",alignRight:!1},{id:"userId",label:"User Id",alignRight:!1},{id:"tickets",label:"# of tickets",alignRight:!1},{id:"bonusWon",label:"Bonus Won",alignRight:!1},{id:"acceptanceState",label:"Acceptance State",alignRight:!1}],L=Object(m.a)(Array(10)).map((function(e,t){return{userId:"id ".concat(t+1),name:f.a.internet.userName(),tickets:f.a.datatype.number({min:1e3,max:1e4,precision:1}),bonusWon:"100 shoes",acceptanceState:Object(k.sample)(["accepted bonus ","not accepted bonus","accepted task not completed","accepted task completed"])}})),T=function(){var e=Object(v.a)();return Object(A.jsxs)(r.a,{container:!0,spacing:2,sx:{mt:e.spacing(8)},children:[Object(A.jsx)(r.a,{item:!0,xs:12,children:Object(A.jsx)(s.a,{variant:"h5",children:"Participant List"})}),Object(A.jsx)(r.a,{item:!0,xs:12,children:Object(A.jsx)(D.a,{children:Object(A.jsx)(R.a,{sx:{minWidth:800},children:Object(A.jsxs)(B.a,{"aria-label":"reward table",children:[Object(A.jsx)(y.a,{children:Object(A.jsx)(S.a,{children:C.map((function(e){return Object(A.jsx)(w.a,{align:e.alignRight?"right":"left",children:e.label},e.id)}))})}),Object(A.jsx)(N.a,{children:L.map((function(e){return Object(A.jsxs)(S.a,{children:[Object(A.jsx)(w.a,{children:e.name}),Object(A.jsx)(w.a,{children:e.userId}),Object(A.jsx)(w.a,{children:e.tickets}),Object(A.jsx)(w.a,{children:e.bonusWon}),Object(A.jsx)(w.a,{children:e.acceptanceState})]},e.name)}))})]})})})})]})},W=a(735),I=a(3),V=a(15),P=a(1),Q=a(2327),U=a(679);function F(){var e=Object(P.useState)(["Default Followers","Default Social"]),t=Object(V.a)(e,2),a=t[0],n=t[1];return Object(A.jsx)(Q.a,{fullWidth:!0,multiple:!0,disableCloseOnSelect:!0,size:"small",value:a,onChange:function(e,t){n(t)},options:["Default Historical Data","Default App Level","Default Followers","Default Social","Historical V2"],renderInput:function(e){return Object(A.jsx)(U.a,Object(I.a)({},e))}})}function H(){var e=Object(u.a)().themeStretch,t=Object(n.h)().name;return Object(A.jsx)(o.a,{title:"Bonus Set: View Bonus Set",children:Object(A.jsxs)(i.a,{maxWidth:!e&&"lg",children:[Object(A.jsx)(x.a,{heading:t,links:[{name:"Bonus Set",href:h.b.bonus.listBonusSet},{name:t}]}),Object(A.jsx)(O.a,{bonusList:[{name:"Set 1",brand:"Riddim",bonuses:["Bonus 1","Bonus 2","Bonus 3"],endDate:(new Date).toDateString(),ticketRules:["Default Historical Data","Default Followers"],averageValueOfSingleBonus:200,valueOfAllBonuses:2e3,winnerNumber:10,bonusTasksCompleted:60,numberOfParticipants:200,numberOfTickets:2e3,averageNumberOfUserTickets:150}]}),Object(A.jsxs)(c.a,{sx:{mb:function(e){return e.spacing(8)},mt:function(e){return e.spacing(8)}},children:[Object(A.jsx)(s.a,{variant:"h5",sx:{mb:2},children:"Ticket Rules"}),Object(A.jsx)(F,{})]}),Object(A.jsxs)(r.a,{container:!0,spacing:2,children:[Object(A.jsx)(r.a,{item:!0,sm:12,md:4,lg:3,children:Object(A.jsxs)(l.a,{children:[Object(A.jsx)(j.a,{title:"Followers on Riddim",titleTypographyProps:{textAlign:"center"}}),Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"100-5k"}),Object(A.jsx)(s.a,{children:"x1 tickets"})]}),Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"5k-50k"}),Object(A.jsx)(s.a,{children:"x2 tickets"})]}),Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"50k-500k"}),Object(A.jsx)(s.a,{children:"x3 tickets"})]}),Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"500k-2mil"}),Object(A.jsx)(s.a,{children:"x4 tickets"})]})]})]})}),Object(A.jsx)(r.a,{item:!0,sm:12,md:4,lg:3,children:Object(A.jsxs)(l.a,{children:[Object(A.jsx)(j.a,{title:"App Level",titleTypographyProps:{textAlign:"center"}}),Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"Level 0-5"}),Object(A.jsx)(s.a,{children:"x1 tickets"})]}),Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"Level 6-10"}),Object(A.jsx)(s.a,{children:"x2 tickets"})]}),Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"Level 11-20"}),Object(A.jsx)(s.a,{children:"x3 tickets"})]}),Object(A.jsxs)(d.a,{direction:"row",justifyContent:"center",spacing:2,children:[Object(A.jsx)(s.a,{children:"Level 21-25"}),Object(A.jsx)(s.a,{children:"x4 tickets"})]})]})]})})]}),Object(A.jsxs)(c.a,{sx:{height:720,mt:function(e){return e.spacing(8)}},children:[Object(A.jsx)(s.a,{variant:"h5",sx:{mb:2},children:"Bonuses of this set"}),Object(A.jsx)(W.a,{bonusList:[{name:"Bonus 1",availableQuantity:200,brand:"Riddim",value:"100"},{name:"Bonus 2",availableQuantity:15,brand:"Riddim",value:"250"},{name:"Bonus 3",availableQuantity:100,brand:"Riddim",value:"75"}]})]}),Object(A.jsx)(c.a,{sx:{height:720,mt:function(e){return e.spacing(8)}},children:Object(A.jsx)(T,{})}),Object(A.jsx)(c.a,{sx:{height:720,mt:function(e){return e.spacing(8)}},children:Object(A.jsx)(g.a,{})})]})})}},691:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),i=a(33),c=a(182),s=a(635),r=a(231),l=a(232),j=a(662),b=a(40),d=a(0),h=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,o=e.moreLink,x=void 0===o?[]:o,O=e.sx,g=Object(i.a)(e,h);return Object(d.jsxs)(s.a,{sx:O,mb:5,spacing:2,children:[Object(d.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(d.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(b.a,Object(n.a)({links:t},g))]}),a&&Object(d.jsx)(r.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(x)?Object(d.jsx)(j.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(d.jsx)(j.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},734:function(e,t,a){"use strict";var n=a(21),i=a(699),c=a.n(i),s=a(182),r=a(46),l=a(660),j=a(232),b=a(722),d=a(723),h=a(720),u=a(721),o=a(715),x=a(724),O=a(187),g=a(0),m=[{id:"name",label:"Name",alignRight:!1},{id:"userId",label:"User Id",alignRight:!1},{id:"tickets",label:"# of tickets",alignRight:!1},{id:"brand",label:"Brand",alignRight:!1},{id:"bonusName",label:"Bonus Name",alignRight:!1},{id:"acceptanceState",label:"Acceptance State",alignRight:!1}],p=Object(n.a)(Array(3)).map((function(e,t){return{userId:"id ".concat(t+1),name:c.a.internet.userName(),tickets:c.a.datatype.number({min:1e3,max:1e4,precision:1}),brand:"Brand 1",bonusName:"100 shoes",acceptanceState:Object(s.sample)(["accepted bonus ","not accepted bonus","accepted task not completed","accepted task completed"])}}));t.a=function(){var e=Object(r.a)();return Object(g.jsxs)(l.a,{container:!0,spacing:2,sx:{mt:e.spacing(8)},children:[Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsx)(j.a,{variant:"h5",children:"Winner List"})}),Object(g.jsx)(l.a,{item:!0,xs:12,children:Object(g.jsx)(O.a,{children:Object(g.jsx)(b.a,{sx:{minWidth:800},children:Object(g.jsxs)(d.a,{"aria-label":"reward table",children:[Object(g.jsx)(h.a,{children:Object(g.jsx)(u.a,{children:m.map((function(e){return Object(g.jsx)(o.a,{align:e.alignRight?"right":"left",children:e.label},e.id)}))})}),Object(g.jsx)(x.a,{children:p.map((function(e){return Object(g.jsxs)(u.a,{children:[Object(g.jsx)(o.a,{children:e.name}),Object(g.jsx)(o.a,{children:e.userId}),Object(g.jsx)(o.a,{children:e.tickets}),Object(g.jsx)(o.a,{children:e.brand}),Object(g.jsx)(o.a,{children:e.bonusName}),Object(g.jsx)(o.a,{children:e.acceptanceState})]},e.name)}))})]})})})})]})}},735:function(e,t,a){"use strict";var n=a(722),i=a(723),c=a(720),s=a(721),r=a(715),l=a(724),j=a(187),b=a(0),d=[{id:"name",label:"Name",alignRight:!1},{id:"brand",label:"Brand",alignRight:!1},{id:"availableQuantity",label:"Available Quantity",alignRight:!1},{id:"value",label:"Value ($)",alignRight:!1}];t.a=function(e){var t=e.bonusList,a=void 0===t?[]:t;return Object(b.jsx)(j.a,{children:Object(b.jsx)(n.a,{sx:{minWidth:800},children:Object(b.jsxs)(i.a,{"aria-label":"bonus table",children:[Object(b.jsx)(c.a,{children:Object(b.jsx)(s.a,{children:d.map((function(e){return Object(b.jsx)(r.a,{align:e.alignRight?"right":"left",children:e.label},e.id)}))})}),Object(b.jsx)(l.a,{children:a.map((function(e){return Object(b.jsxs)(s.a,{children:[Object(b.jsx)(r.a,{children:e.name}),Object(b.jsx)(r.a,{children:e.brand}),Object(b.jsx)(r.a,{children:e.availableQuantity}),Object(b.jsx)(r.a,{children:e.value})]},e.name)}))})]})})})}},736:function(e,t,a){"use strict";var n=a(722),i=a(723),c=a(720),s=a(721),r=a(715),l=a(724),j=a(187),b=a(0),d=[{id:"name",label:"Name",alignRight:!1},{id:"brand",label:"Brand",alignRight:!1},{id:"endDate",label:"End Date",alignRight:!1},{id:"numberOfBonuses",label:"Number of bonuses",alignRight:!1},{id:"averageValueOfSingleBonus",label:"Average $ of a single bonus",alignRight:!1},{id:"valueOfAllBonuses",label:"Value of all bonuses",alignRight:!1},{id:"winnerNumber",label:"Winner Number",alignRight:!1},{id:"bonusTasksCompleted",label:"Bonus Tasks Completed (%)",alignRight:!1},{id:"numberOfParticipants",label:"# of participants",alignRight:!1},{id:"numberOfTickets",label:"# of tickets",alignRight:!1},{id:"averageNumberOfUserTickets",label:"Average # of user tickets",alignRight:!1}];t.a=function(e){var t=e.bonusList,a=void 0===t?[]:t;return Object(b.jsx)(j.a,{children:Object(b.jsx)(n.a,{sx:{minWidth:800},children:Object(b.jsxs)(i.a,{"aria-label":"bonus table",children:[Object(b.jsx)(c.a,{children:Object(b.jsx)(s.a,{children:d.map((function(e){return Object(b.jsx)(r.a,{align:e.alignRight?"right":"left",children:e.label},e.id)}))})}),Object(b.jsx)(l.a,{children:a.map((function(e){return Object(b.jsxs)(s.a,{children:[Object(b.jsx)(r.a,{children:e.name}),Object(b.jsx)(r.a,{children:e.brand}),Object(b.jsx)(r.a,{children:e.endDate}),Object(b.jsx)(r.a,{children:e.bonuses.length}),Object(b.jsx)(r.a,{children:e.averageValueOfSingleBonus}),Object(b.jsx)(r.a,{children:e.valueOfAllBonuses}),Object(b.jsx)(r.a,{children:e.winnerNumber}),Object(b.jsx)(r.a,{children:e.bonusTasksCompleted}),Object(b.jsx)(r.a,{children:e.numberOfParticipants}),Object(b.jsx)(r.a,{children:e.numberOfTickets}),Object(b.jsx)(r.a,{children:e.averageNumberOfUserTickets})]},e.name)}))})]})})})}}}]);
//# sourceMappingURL=27.aa7800bb.chunk.js.map
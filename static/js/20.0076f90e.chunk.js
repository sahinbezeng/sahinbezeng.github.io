(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[20],{2315:function(e,t,a){"use strict";a.r(t);var n=a(691),r=a(66),c=a(21),o=a(288),s=a(694),i=a(45),l=a.n(i),d=a(71),b=a(3),j=(a(1),a(126)),u=a(183),v=a(182),O=a(23),h=a(696),p=a.n(h),m=a(663),x=a(690),f=a(706),g=a(673),k=a(714),y=a(642),T=a(233),A=a(683),w=a(672),N=a(670),S=a(232),C=a(664),M=a(721),R=a(707),L=a(0),H={levelNumber:1,starsToAdvance:10,tokensToAdvance:0,tasksToAdvance:0,rewardForLevelUp:"NONE"},z=u.f().shape({levels:u.a().of(u.f().shape({levelNumber:u.e().min(1),starsToAdvance:u.e().test("level stars test","star number should be greater than previous level",(function(){var e,t=this.originalValue,a=this.parent,n=this.options.context.levels;return n.length<=1||a.levelNumber-2<0||t>(null===(e=n[a.levelNumber-2])||void 0===e?void 0:e.starsToAdvance)})),tokensToAdvance:u.e(),tasksToAdvance:u.e(),rewardForLevelUp:u.g()}))}),P=function(e){var t=e.levels,a=Object(j.useSnackbar)().enqueueSnackbar,n=Object(v.e)({enableReinitialize:!0,initialValues:{levels:t||[Object(b.a)({},H)]},validate:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.f)(t,z,!0,t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",Object(v.g)(e.t0));case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setSubmitting,c=n.setErrors,alert(JSON.stringify(t));try{r(!1),a("Update success",{variant:"success"})}catch(o){console.error(o),r(!1),c(o)}case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),r=n.values,c=n.errors,o=n.touched,s=n.handleSubmit,i=n.getFieldProps,u=n.isSubmitting;return Object(L.jsx)(v.c,{value:n,children:Object(L.jsx)(v.b,{noValidate:!0,autoComplete:"off",onSubmit:s,children:Object(L.jsx)(m.a,{container:!0,spacing:3,children:Object(L.jsx)(m.a,{item:!0,md:12,children:Object(L.jsx)(v.a,{name:"levels",render:function(e){return Object(L.jsxs)(x.a,{children:[Object(L.jsx)(f.a,{title:"Level Settings",action:Object(L.jsx)(g.a,{variant:"contained",startIcon:Object(L.jsx)(O.a,{icon:p.a}),onClick:function(){return e.push(Object(b.a)(Object(b.a)({},H),{},{levelNumber:r.levels.length+1}))},children:"Add Level"})}),Object(L.jsx)(k.a,{children:Object(L.jsxs)(y.a,{spacing:2,children:[r.levels.map((function(t,a){var n="levels.".concat(a);return Object(L.jsxs)(y.a,{alignItems:"center",direction:{xs:"column",sm:"column",md:"row"},spacing:{xs:3,sm:3,md:2},children:[Object(L.jsx)(T.a,{sx:{width:"50%"},children:"Level #".concat(Object(v.d)(r,"".concat(n,".levelNumber")))}),Object(L.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Stars to advance",InputProps:{endAdornment:Object(L.jsx)(w.a,{position:"end",children:"stars"})}},i("".concat(n,".starsToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".starsToAdvance"))&&Object(v.d)(c,"".concat(n,".starsToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".starsToAdvance"))&&Object(v.d)(c,"".concat(n,".starsToAdvance"))})),Object(L.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tokens to advance",InputProps:{endAdornment:Object(L.jsx)(w.a,{position:"end",children:"tokens"})}},i("".concat(n,".tokensToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".tokensToAdvance"))&&Object(v.d)(c,"".concat(n,".tokensToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".tokensToAdvance"))&&Object(v.d)(c,"".concat(n,".tokensToAdvance"))})),Object(L.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tasks to advance",InputProps:{endAdornment:Object(L.jsx)(w.a,{position:"end",children:"tasks"})}},i("".concat(n,".tasksToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".tasksToAdvance"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".tasksToAdvance"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))})),Object(L.jsxs)(A.a,Object(b.a)(Object(b.a)({select:!0,fullWidth:!0,size:"small",label:"Reward for level up"},i("".concat(n,".rewardForLevelUp"))),{},{SelectProps:{native:!0},error:Boolean(Object(v.d)(o,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(c,"".concat(n,".rewardForLevelUp")),children:[Object(L.jsx)("option",{value:"NONE",children:"NONE"}),["Present","Easter Egg","MAX Energy increase by 1"].map((function(e){return Object(L.jsx)("option",{value:e,children:e},e)}))]})),Object(L.jsx)(N.a,{color:"error","aria-label":"delete",onClick:function(){return e.remove(a)},children:Object(L.jsx)(M.a,{})})]},a)})),Object(L.jsx)(S.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(L.jsx)(C.a,{type:"submit",variant:"contained",loading:u,endIcon:Object(L.jsx)(R.a,{}),children:"Save"})})]})})]})}})})})})})};t.default=function(){var e=Object(r.a)().themeStretch;return Object(L.jsx)(o.a,{title:"Riddim: Level Settings",children:Object(L.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(L.jsx)(s.a,{heading:"Riddim Levels",links:[{name:"App",href:c.b.app.root},{name:"Level Settings"}]}),Object(L.jsx)(P,{})]})})}},694:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(33),c=a(179),o=a(642),s=a(232),i=a(233),l=a(665),d=a(39),b=a(0),j=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,v=e.moreLink,O=void 0===v?[]:v,h=e.sx,p=Object(r.a)(e,j);return Object(b.jsxs)(o.a,{sx:h,mb:5,spacing:2,children:[Object(b.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(d.a,Object(n.a)({links:t},p))]}),a&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(O)?Object(b.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},696:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},706:function(e,t,a){"use strict";var n=a(6),r=a(5),c=a(2),o=a(1),s=(a(9),a(11)),i=a(148),l=a(233),d=a(12),b=a(7),j=a(105),u=a(125);function v(e){return Object(j.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(O.title),t.title),Object(n.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),k=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,o=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,O=a.disableTypography,k=void 0!==O&&O,y=a.subheader,T=a.subheaderTypographyProps,A=a.title,w=a.titleTypographyProps,N=Object(r.a)(a,p),S=Object(c.a)({},a,{component:u,disableTypography:k}),C=function(e){var t=e.classes;return Object(i.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)}(S),M=A;null==M||M.type===l.a||k||(M=Object(h.jsx)(l.a,Object(c.a)({variant:o?"body2":"h5",className:C.title,component:"span",display:"block"},w,{children:M})));var R=y;return null==R||R.type===l.a||k||(R=Object(h.jsx)(l.a,Object(c.a)({variant:o?"body2":"body1",className:C.subheader,color:"text.secondary",component:"span",display:"block"},T,{children:R}))),Object(h.jsxs)(m,Object(c.a)({className:Object(s.default)(C.root,b),as:u,ref:t,ownerState:S},N,{children:[o&&Object(h.jsx)(x,{className:C.avatar,ownerState:S,children:o}),Object(h.jsxs)(g,{className:C.content,ownerState:S,children:[M,R]}),n&&Object(h.jsx)(f,{className:C.action,ownerState:S,children:n})]}))}));t.a=k},707:function(e,t,a){"use strict";var n=a(30),r=a(0);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},714:function(e,t,a){"use strict";var n=a(2),r=a(5),c=a(1),o=(a(9),a(11)),s=a(148),i=a(7),l=a(12),d=a(105),b=a(125);function j(e){return Object(d.a)("MuiCardContent",e)}Object(b.a)("MuiCardContent",["root"]);var u=a(0),v=["className","component"],O=Object(i.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),h=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardContent"}),c=a.className,i=a.component,d=void 0===i?"div":i,b=Object(r.a)(a,v),h=Object(n.a)({},a,{component:d}),p=function(e){var t=e.classes;return Object(s.a)({root:["root"]},j,t)}(h);return Object(u.jsx)(O,Object(n.a)({as:d,className:Object(o.default)(p.root,c),ownerState:h,ref:t},b))}));t.a=h},721:function(e,t,a){"use strict";var n=a(30),r=a(0);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")}}]);
//# sourceMappingURL=20.0076f90e.chunk.js.map
(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[17],{2308:function(e,t,a){"use strict";a.r(t);var n=a(688),r=a(63),c=a(21),s=a(282),o=a(691),i=a(41),l=a.n(i),d=a(69),b=a(3),j=(a(1),a(127)),u=a(178),v=a(177),O=a(23),p=a(693),h=a.n(p),m=a(660),x=a(687),f=a(703),g=a(671),y=a(720),k=a(638),T=a(227),A=a(681),N=a(670),C=a(668),w=a(226),S=a(662),M=a(713),P=a(706),R=a(0),L={levelNumber:1,starsToAdvance:10,tokensToAdvance:0,tasksToAdvance:0,rewardForLevelUp:"NONE"},H=u.f().shape({levels:u.a().of(u.f().shape({levelNumber:u.e().min(1),starsToAdvance:u.e().test("level stars test","star number should be greater than previous level",(function(){var e,t=this.originalValue,a=this.parent,n=this.options.context.levels;return n.length<=1||a.levelNumber-2<0||t>(null===(e=n[a.levelNumber-2])||void 0===e?void 0:e.starsToAdvance)})),tokensToAdvance:u.e(),tasksToAdvance:u.e(),rewardForLevelUp:u.g()}))}),z=function(e){var t=e.levels,a=Object(j.useSnackbar)().enqueueSnackbar,n=Object(v.e)({enableReinitialize:!0,initialValues:{levels:t||[Object(b.a)({},L)]},validate:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.f)(t,H,!0,t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",Object(v.g)(e.t0));case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setSubmitting,c=n.setErrors,alert(JSON.stringify(t));try{r(!1),a("Update success",{variant:"success"})}catch(s){console.error(s),r(!1),c(s)}case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),r=n.values,c=n.errors,s=n.touched,o=n.handleSubmit,i=n.getFieldProps,u=n.isSubmitting;return Object(R.jsx)(v.c,{value:n,children:Object(R.jsx)(v.b,{noValidate:!0,autoComplete:"off",onSubmit:o,children:Object(R.jsx)(m.a,{container:!0,spacing:3,children:Object(R.jsx)(m.a,{item:!0,md:12,children:Object(R.jsx)(v.a,{name:"levels",render:function(e){return Object(R.jsxs)(x.a,{children:[Object(R.jsx)(f.a,{title:"Level Settings",action:Object(R.jsx)(g.a,{variant:"contained",startIcon:Object(R.jsx)(O.a,{icon:h.a}),onClick:function(){return e.push(Object(b.a)(Object(b.a)({},L),{},{levelNumber:r.levels.length+1}))},children:"Add Level"})}),Object(R.jsx)(y.a,{children:Object(R.jsxs)(k.a,{spacing:2,children:[r.levels.map((function(t,a){var n="levels.".concat(a);return Object(R.jsxs)(k.a,{alignItems:"center",direction:{xs:"column",sm:"column",md:"row"},spacing:{xs:3,sm:3,md:2},children:[Object(R.jsx)(T.a,{sx:{width:"50%"},children:"Level #".concat(Object(v.d)(r,"".concat(n,".levelNumber")))}),Object(R.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Stars to advance",InputProps:{endAdornment:Object(R.jsx)(N.a,{position:"end",children:"stars"})}},i("".concat(n,".starsToAdvance"))),{},{error:Boolean(Object(v.d)(s,"".concat(n,".starsToAdvance"))&&Object(v.d)(c,"".concat(n,".starsToAdvance"))),helperText:Object(v.d)(s,"".concat(n,".starsToAdvance"))&&Object(v.d)(c,"".concat(n,".starsToAdvance"))})),Object(R.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tokens to advance",InputProps:{endAdornment:Object(R.jsx)(N.a,{position:"end",children:"tokens"})}},i("".concat(n,".tokensToAdvance"))),{},{error:Boolean(Object(v.d)(s,"".concat(n,".tokensToAdvance"))&&Object(v.d)(c,"".concat(n,".tokensToAdvance"))),helperText:Object(v.d)(s,"".concat(n,".tokensToAdvance"))&&Object(v.d)(c,"".concat(n,".tokensToAdvance"))})),Object(R.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tasks to advance",InputProps:{endAdornment:Object(R.jsx)(N.a,{position:"end",children:"tasks"})}},i("".concat(n,".tasksToAdvance"))),{},{error:Boolean(Object(v.d)(s,"".concat(n,".tasksToAdvance"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(s,"".concat(n,".tasksToAdvance"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))})),Object(R.jsxs)(A.a,Object(b.a)(Object(b.a)({select:!0,fullWidth:!0,size:"small",label:"Reward for level up"},i("".concat(n,".rewardForLevelUp"))),{},{SelectProps:{native:!0},error:Boolean(Object(v.d)(s,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(s,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(c,"".concat(n,".rewardForLevelUp")),children:[Object(R.jsx)("option",{value:"NONE",children:"NONE"}),["Present","Easter Egg","MAX Energy increase by 1"].map((function(e){return Object(R.jsx)("option",{value:e,children:e},e)}))]})),Object(R.jsx)(C.a,{color:"error","aria-label":"delete",onClick:function(){return e.remove(a)},children:Object(R.jsx)(M.a,{})})]},a)})),Object(R.jsx)(w.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(R.jsx)(S.a,{type:"submit",variant:"contained",loading:u,endIcon:Object(R.jsx)(P.a,{}),children:"Save"})})]})})]})}})})})})})};t.default=function(){var e=Object(r.a)().themeStretch;return Object(R.jsx)(s.a,{title:"Riddim: Level Settings",children:Object(R.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(R.jsx)(o.a,{heading:"Riddim Levels",links:[{name:"App",href:c.b.app.root},{name:"Level Settings"}]}),Object(R.jsx)(z,{})]})})}},691:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(32),c=a(174),s=a(638),o=a(226),i=a(227),l=a(663),d=a(38),b=a(0),j=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,v=e.moreLink,O=void 0===v?[]:v,p=e.sx,h=Object(r.a)(e,j);return Object(b.jsxs)(s.a,{sx:p,mb:5,spacing:2,children:[Object(b.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(b.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(d.a,Object(n.a)({links:t},h))]}),a&&Object(b.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(O)?Object(b.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},693:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},703:function(e,t,a){"use strict";var n=a(5),r=a(4),c=a(2),s=a(1),o=(a(9),a(11)),i=a(150),l=a(227),d=a(12),b=a(7),j=a(102),u=a(126);function v(e){return Object(j.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=a(0),h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(O.title),t.title),Object(n.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=s.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,s=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,O=a.disableTypography,y=void 0!==O&&O,k=a.subheader,T=a.subheaderTypographyProps,A=a.title,N=a.titleTypographyProps,C=Object(r.a)(a,h),w=Object(c.a)({},a,{component:u,disableTypography:y}),S=function(e){var t=e.classes;return Object(i.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)}(w),M=A;null==M||M.type===l.a||y||(M=Object(p.jsx)(l.a,Object(c.a)({variant:s?"body2":"h5",className:S.title,component:"span",display:"block"},N,{children:M})));var P=k;return null==P||P.type===l.a||y||(P=Object(p.jsx)(l.a,Object(c.a)({variant:s?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},T,{children:P}))),Object(p.jsxs)(m,Object(c.a)({className:Object(o.default)(S.root,b),as:u,ref:t,styleProps:w},C,{children:[s&&Object(p.jsx)(x,{className:S.avatar,styleProps:w,children:s}),Object(p.jsxs)(g,{className:S.content,styleProps:w,children:[M,P]}),n&&Object(p.jsx)(f,{className:S.action,styleProps:w,children:n})]}))}));t.a=y},706:function(e,t,a){"use strict";var n=a(29),r=a(0);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},713:function(e,t,a){"use strict";var n=a(29),r=a(0);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},720:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(1),s=(a(9),a(11)),o=a(150),i=a(7),l=a(12),d=a(102),b=a(126);function j(e){return Object(d.a)("MuiCardContent",e)}Object(b.a)("MuiCardContent",["root"]);var u=a(0),v=["className","component"],O=Object(i.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),p=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardContent"}),c=a.className,i=a.component,d=void 0===i?"div":i,b=Object(r.a)(a,v),p=Object(n.a)({},a,{component:d}),h=function(e){var t=e.classes;return Object(o.a)({root:["root"]},j,t)}(p);return Object(u.jsx)(O,Object(n.a)({as:d,className:Object(s.default)(h.root,c),styleProps:p,ref:t},b))}));t.a=p}}]);
//# sourceMappingURL=17.bae3079f.chunk.js.map
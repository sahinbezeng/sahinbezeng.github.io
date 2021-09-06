(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[15],{2303:function(e,t,a){"use strict";a.r(t);var n=a(687),c=a(63),r=a(23),o=a(282),s=a(690),i=a(41),l=a.n(i),d=a(70),b=a(3),j=(a(1),a(127)),u=a(178),v=a(177),O=a(22),h=a(691),p=a.n(h),m=a(659),x=a(686),f=a(706),g=a(670),y=a(716),k=a(637),T=a(227),A=a(680),N=a(669),C=a(667),S=a(226),w=a(661),M=a(707),P=a(708),R=a(0),L={levelNumber:1,starsToAdvance:10,tokensToAdvance:10,tasksToAdvance:10,rewardForLevelUp:"NONE"},H=u.f().shape({levels:u.a().of(u.f().shape({levelNumber:u.e().min(1),starsToAdvance:u.e().test("level stars test","star number should be greater than previous level",(function(){var e,t=this.originalValue,a=this.parent,n=this.options.context.levels;return n.length<=1||a.levelNumber-2<0||t>(null===(e=n[a.levelNumber-2])||void 0===e?void 0:e.starsToAdvance)})),tokensToAdvance:u.e(),tasksToAdvance:u.e(),rewardForLevelUp:u.g()}))}),z=function(e){var t=e.levels,a=Object(j.useSnackbar)().enqueueSnackbar,n=Object(v.e)({enableReinitialize:!0,initialValues:{levels:t||[Object(b.a)({},L)]},validate:function(e){try{Object(v.f)(e,H,!0,e)}catch(t){return Object(v.g)(t)}return{}},onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(t,n){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.setSubmitting,n.resetForm,r=n.setErrors,alert(JSON.stringify(t));try{c(!1),a("Update success",{variant:"success"})}catch(o){console.error(o),c(!1),r(o)}case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),c=n.values,r=n.errors,o=n.touched,s=n.handleSubmit,i=n.getFieldProps,u=n.isSubmitting;return Object(R.jsx)(v.c,{value:n,children:Object(R.jsx)(v.b,{noValidate:!0,autoComplete:"off",onSubmit:s,children:Object(R.jsx)(m.a,{container:!0,spacing:3,children:Object(R.jsx)(m.a,{item:!0,md:12,children:Object(R.jsx)(v.a,{name:"levels",render:function(e){return Object(R.jsxs)(x.a,{children:[Object(R.jsx)(f.a,{title:"Level Settings",action:Object(R.jsx)(g.a,{variant:"contained",startIcon:Object(R.jsx)(O.a,{icon:p.a}),onClick:function(){return e.push(Object(b.a)(Object(b.a)({},L),{},{levelNumber:c.levels.length+1}))},children:"Add Level"})}),Object(R.jsx)(y.a,{children:Object(R.jsxs)(k.a,{spacing:2,children:[c.levels.map((function(t,a){var n="levels.".concat(a);return Object(R.jsxs)(k.a,{alignItems:"center",direction:{xs:"column",sm:"column",md:"row"},spacing:{xs:3,sm:3,md:2},children:[Object(R.jsx)(T.a,{sx:{width:"50%"},children:"Level #".concat(Object(v.d)(c,"".concat(n,".levelNumber")))}),Object(R.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Stars to advance",InputProps:{endAdornment:Object(R.jsx)(N.a,{position:"end",children:"stars"})}},i("".concat(n,".starsToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".starsToAdvance"))&&Object(v.d)(r,"".concat(n,".starsToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".starsToAdvance"))&&Object(v.d)(r,"".concat(n,".starsToAdvance"))})),Object(R.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tokens to advance",InputProps:{endAdornment:Object(R.jsx)(N.a,{position:"end",children:"tokens"})}},i("".concat(n,".tokensToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".tokensToAdvance"))&&Object(v.d)(r,"".concat(n,".tokensToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".tokensToAdvance"))&&Object(v.d)(r,"".concat(n,".tokensToAdvance"))})),Object(R.jsx)(A.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tasks to advance",InputProps:{endAdornment:Object(R.jsx)(N.a,{position:"end",children:"tasks"})}},i("".concat(n,".tasksToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".tasksToAdvance"))&&Object(v.d)(r,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".tasksToAdvance"))&&Object(v.d)(r,"".concat(n,".tasksToAdvance"))})),Object(R.jsxs)(A.a,Object(b.a)(Object(b.a)({select:!0,fullWidth:!0,size:"small",label:"Reward for level up"},i("".concat(n,".rewardForLevelUp"))),{},{SelectProps:{native:!0},error:Boolean(Object(v.d)(o,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(r,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(r,"".concat(n,".rewardForLevelUp")),children:[Object(R.jsx)("option",{value:"NONE",children:"NONE"}),["Present","Easter Egg","MAX Energy increase by 1"].map((function(e){return Object(R.jsx)("option",{value:e,children:e},e)}))]})),Object(R.jsx)(C.a,{color:"error","aria-label":"delete",onClick:function(){return e.remove(a)},children:Object(R.jsx)(M.a,{})})]},a)})),Object(R.jsx)(S.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(R.jsx)(w.a,{type:"submit",variant:"contained",loading:u,endIcon:Object(R.jsx)(P.a,{}),children:"Save"})})]})})]})}})})})})})};t.default=function(){var e=Object(c.a)().themeStretch;return Object(R.jsx)(o.a,{title:"Riddim: Level Settings",children:Object(R.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(R.jsx)(s.a,{heading:"Riddim Levels",links:[{name:"App",href:r.b.app.root},{name:"Level Settings"}]}),Object(R.jsx)(z,{})]})})}},690:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),c=a(32),r=a(174),o=a(637),s=a(226),i=a(227),l=a(662),d=a(38),b=a(0),j=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,v=e.moreLink,O=void 0===v?[]:v,h=e.sx,p=Object(c.a)(e,j);return Object(b.jsxs)(o.a,{sx:h,mb:5,spacing:2,children:[Object(b.jsxs)(o.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(d.a,Object(n.a)({links:t},p))]}),a&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(r.isString)(O)?Object(b.jsx)(l.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},691:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},706:function(e,t,a){"use strict";var n=a(5),c=a(4),r=a(2),o=a(1),s=(a(9),a(11)),i=a(150),l=a(227),d=a(12),b=a(7),j=a(102),u=a(126);function v(e){return Object(j.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(r.a)((a={},Object(n.a)(a,"& .".concat(O.title),t.title),Object(n.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,o=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,O=a.disableTypography,y=void 0!==O&&O,k=a.subheader,T=a.subheaderTypographyProps,A=a.title,N=a.titleTypographyProps,C=Object(c.a)(a,p),S=Object(r.a)({},a,{component:u,disableTypography:y}),w=function(e){var t=e.classes;return Object(i.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)}(S),M=A;null==M||M.type===l.a||y||(M=Object(h.jsx)(l.a,Object(r.a)({variant:o?"body2":"h5",className:w.title,component:"span",display:"block"},N,{children:M})));var P=k;return null==P||P.type===l.a||y||(P=Object(h.jsx)(l.a,Object(r.a)({variant:o?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},T,{children:P}))),Object(h.jsxs)(m,Object(r.a)({className:Object(s.default)(w.root,b),as:u,ref:t,styleProps:S},C,{children:[o&&Object(h.jsx)(x,{className:w.avatar,styleProps:S,children:o}),Object(h.jsxs)(g,{className:w.content,styleProps:S,children:[M,P]}),n&&Object(h.jsx)(f,{className:w.action,styleProps:S,children:n})]}))}));t.a=y},707:function(e,t,a){"use strict";var n=a(29),c=a(0);t.a=Object(n.a)(Object(c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},708:function(e,t,a){"use strict";var n=a(29),c=a(0);t.a=Object(n.a)(Object(c.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},716:function(e,t,a){"use strict";var n=a(2),c=a(4),r=a(1),o=(a(9),a(11)),s=a(150),i=a(7),l=a(12),d=a(102),b=a(126);function j(e){return Object(d.a)("MuiCardContent",e)}Object(b.a)("MuiCardContent",["root"]);var u=a(0),v=["className","component"],O=Object(i.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),h=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardContent"}),r=a.className,i=a.component,d=void 0===i?"div":i,b=Object(c.a)(a,v),h=Object(n.a)({},a,{component:d}),p=function(e){var t=e.classes;return Object(s.a)({root:["root"]},j,t)}(h);return Object(u.jsx)(O,Object(n.a)({as:d,className:Object(o.default)(p.root,r),styleProps:h,ref:t},b))}));t.a=h}}]);
//# sourceMappingURL=15.bfe521c1.chunk.js.map
(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[18],{2208:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},2211:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(1),o=(a(8),a(9)),s=a(183),i=a(6),l=a(13),d=a(131),b=a(155);function u(e){return Object(d.a)("MuiCardContent",e)}Object(b.a)("MuiCardContent",["root"]);var j=a(0),v=["className","component"],p=Object(i.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),O=c.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardContent"}),c=a.className,i=a.component,d=void 0===i?"div":i,b=Object(r.a)(a,v),O=Object(n.a)({},a,{component:d}),h=function(e){var t=e.classes;return Object(s.a)({root:["root"]},u,t)}(O);return Object(j.jsx)(p,Object(n.a)({as:d,className:Object(o.a)(h.root,c),ownerState:O,ref:t},b))}));t.a=O},2213:function(e,t,a){"use strict";var n=a(4),r=a(7),c=a(2),o=a(1),s=(a(8),a(9)),i=a(183),l=a(184),d=a(13),b=a(6),u=a(131),j=a(155);function v(e){return Object(u.a)("MuiCardHeader",e)}var p=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),O=a(0),h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(p.title),t.title),Object(n.a)(a,"& .".concat(p.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),T=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,o=a.avatar,b=a.className,u=a.component,j=void 0===u?"div":u,p=a.disableTypography,T=void 0!==p&&p,y=a.subheader,A=a.subheaderTypographyProps,k=a.title,N=a.titleTypographyProps,w=Object(r.a)(a,h),C=Object(c.a)({},a,{component:j,disableTypography:T}),S=function(e){var t=e.classes;return Object(i.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)}(C),M=k;null==M||M.type===l.a||T||(M=Object(O.jsx)(l.a,Object(c.a)({variant:o?"body2":"h5",className:S.title,component:"span",display:"block"},N,{children:M})));var R=y;return null==R||R.type===l.a||T||(R=Object(O.jsx)(l.a,Object(c.a)({variant:o?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},A,{children:R}))),Object(O.jsxs)(m,Object(c.a)({className:Object(s.a)(S.root,b),as:j,ref:t,ownerState:C},w,{children:[o&&Object(O.jsx)(f,{className:S.avatar,ownerState:C,children:o}),Object(O.jsxs)(g,{className:S.content,ownerState:C,children:[M,R]}),n&&Object(O.jsx)(x,{className:S.action,ownerState:C,children:n})]}))}));t.a=T},2225:function(e,t,a){"use strict";var n=a(28),r=a(0);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},2311:function(e,t,a){"use strict";a.r(t);var n=a(2201),r=a(60),c=a(20),o=a(187),s=a(281),i=a(37),l=a.n(i),d=a(66),b=a(3),u=(a(1),a(95)),j=a(62),v=a(94),p=a(21),O=a(2208),h=a.n(O),m=a(2171),f=a(2200),x=a(2213),g=a(2183),T=a(2211),y=a(397),A=a(184),k=a(2192),N=a(2182),w=a(2180),C=a(157),S=a(2175),M=a(2225),R=a(2152),L=a(0),H={levelNumber:1,starsToAdvance:10,tokensToAdvance:0,tasksToAdvance:0,rewardForLevelUp:"NONE"},P=j.f().shape({levels:j.a().of(j.f().shape({levelNumber:j.e().min(1),starsToAdvance:j.e().test("level stars test","star number should be greater than previous level",(function(){var e,t=this.originalValue,a=this.parent,n=this.options.context.levels;return n.length<=1||a.levelNumber-2<0||t>(null===(e=n[a.levelNumber-2])||void 0===e?void 0:e.starsToAdvance)})),tokensToAdvance:j.e(),tasksToAdvance:j.e(),rewardForLevelUp:j.g()}))}),z=function(e){var t=e.levels,a=Object(u.b)().enqueueSnackbar,n=Object(v.e)({enableReinitialize:!0,initialValues:{levels:t||[Object(b.a)({},H)]},validate:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.f)(t,P,!0,t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",Object(v.g)(e.t0));case 8:return e.abrupt("return",{});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),onSubmit:function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setSubmitting,c=n.setErrors,alert(JSON.stringify(t));try{r(!1),a("Update success",{variant:"success"})}catch(o){console.error(o),r(!1),c(o)}case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),r=n.values,c=n.errors,o=n.touched,s=n.handleSubmit,i=n.getFieldProps,j=n.isSubmitting;return Object(L.jsx)(v.c,{value:n,children:Object(L.jsx)(v.b,{noValidate:!0,autoComplete:"off",onSubmit:s,children:Object(L.jsx)(m.a,{container:!0,spacing:3,children:Object(L.jsx)(m.a,{item:!0,md:12,children:Object(L.jsx)(v.a,{name:"levels",render:function(e){return Object(L.jsxs)(f.a,{children:[Object(L.jsx)(x.a,{title:"Level Settings",action:Object(L.jsx)(g.a,{variant:"contained",startIcon:Object(L.jsx)(p.a,{icon:h.a}),onClick:function(){return e.push(Object(b.a)(Object(b.a)({},H),{},{levelNumber:r.levels.length+1}))},children:"Add Level"})}),Object(L.jsx)(T.a,{children:Object(L.jsxs)(y.a,{spacing:2,children:[r.levels.map((function(t,a){var n="levels.".concat(a);return Object(L.jsxs)(y.a,{alignItems:"center",direction:{xs:"column",sm:"column",md:"row"},spacing:{xs:3,sm:3,md:2},children:[Object(L.jsx)(A.a,{sx:{width:"50%"},children:"Level #".concat(Object(v.d)(r,"".concat(n,".levelNumber")))}),Object(L.jsx)(k.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Stars to advance",InputProps:{endAdornment:Object(L.jsx)(N.a,{position:"end",children:"stars"})}},i("".concat(n,".starsToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".starsToAdvance"))&&Object(v.d)(c,"".concat(n,".starsToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".starsToAdvance"))&&Object(v.d)(c,"".concat(n,".starsToAdvance"))})),Object(L.jsx)(k.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tokens to advance",InputProps:{endAdornment:Object(L.jsx)(N.a,{position:"end",children:"tokens"})}},i("".concat(n,".tokensToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".tokensToAdvance"))&&Object(v.d)(c,"".concat(n,".tokensToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".tokensToAdvance"))&&Object(v.d)(c,"".concat(n,".tokensToAdvance"))})),Object(L.jsx)(k.a,Object(b.a)(Object(b.a)({fullWidth:!0,size:"small",label:"Tasks to advance",InputProps:{endAdornment:Object(L.jsx)(N.a,{position:"end",children:"tasks"})}},i("".concat(n,".tasksToAdvance"))),{},{error:Boolean(Object(v.d)(o,"".concat(n,".tasksToAdvance"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".tasksToAdvance"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))})),Object(L.jsxs)(k.a,Object(b.a)(Object(b.a)({select:!0,fullWidth:!0,size:"small",label:"Reward for level up"},i("".concat(n,".rewardForLevelUp"))),{},{SelectProps:{native:!0},error:Boolean(Object(v.d)(o,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(c,"".concat(n,".tasksToAdvance"))),helperText:Object(v.d)(o,"".concat(n,".rewardForLevelUp"))&&Object(v.d)(c,"".concat(n,".rewardForLevelUp")),children:[Object(L.jsx)("option",{value:"NONE",children:"NONE"}),["Present","Easter Egg","MAX Energy increase by 1"].map((function(e){return Object(L.jsx)("option",{value:e,children:e},e)}))]})),Object(L.jsx)(w.a,{color:"error","aria-label":"delete",onClick:function(){return e.remove(a)},children:Object(L.jsx)(M.a,{})})]},a)})),Object(L.jsx)(C.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(L.jsx)(S.a,{type:"submit",variant:"contained",loading:j,endIcon:Object(L.jsx)(R.a,{}),children:"Save"})})]})})]})}})})})})})};t.default=function(){var e=Object(r.a)().themeStretch;return Object(L.jsx)(o.a,{title:"Riddim: Level Settings",children:Object(L.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(L.jsx)(s.a,{heading:"Riddim Levels",links:[{name:"App",href:c.b.app.root},{name:"Level Settings"}]}),Object(L.jsx)(z,{})]})})}}}]);
//# sourceMappingURL=18.10e87326.chunk.js.map
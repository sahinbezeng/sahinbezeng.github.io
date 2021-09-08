(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[19],{2297:function(e,n,t){"use strict";t.r(n);var a=t(33),s=t(22),r=t(692),i=t.n(r),c=t(39),l=t(687),o=t(670),d=t(686),j=t(719),b=t(637),u=t(227),h=t(226),O=t(63),x=t(23),k=t(718),m=t(282),p=t(690),f=t(659),g=t(2251),V=t(2248),v=t(2249),T=t(2246),y=t(2247),I=t(2250),w=t(182),S=t(0),q=[{id:"name",label:"Name",alignRight:!1},{id:"location",label:"Location",alignRight:!1},{id:"dispensedWeekly",label:"Dispensed Weekly",alignRight:!1}];var R=function(e){var n=e.rewardList,t=void 0===n?[]:n,a=Object(c.a)();return Object(S.jsxs)(f.a,{container:!0,spacing:2,sx:{mt:a.spacing(8)},children:[Object(S.jsx)(f.a,{item:!0,xs:12,children:Object(S.jsx)(u.a,{variant:"h5",children:"Reward List"})}),Object(S.jsx)(f.a,{item:!0,xs:12,children:Object(S.jsx)(w.a,{children:Object(S.jsx)(g.a,{sx:{minWidth:800},children:Object(S.jsxs)(V.a,{"aria-label":"reward table",children:[Object(S.jsx)(v.a,{children:Object(S.jsx)(T.a,{children:q.map((function(e){return Object(S.jsx)(y.a,{align:e.alignRight?"right":"left",children:e.label},e.id)}))})}),Object(S.jsx)(I.a,{children:t.map((function(e){return Object(S.jsxs)(T.a,{children:[Object(S.jsx)(y.a,{children:e.name}),Object(S.jsx)(y.a,{children:e.location}),Object(S.jsx)(y.a,{children:e.dispensedWeekly})]},e.name)}))})]})})})})]})},W=t(3),B=t(41),L=t.n(B),C=t(70),E=(t(1),t(127)),P=t(178),z=t(177),A=t(706),D=t(680),K=t(669),U=t(661),J=t(709),N=P.f().shape({tokenValue:P.e().required("This field is required."),starValueInTokens:P.e().required("This field is required."),keyValueInTokens:P.e().required("This field is required."),boosterValueInTokens:P.e().required("This field is required.")}),_=function(e){var n=e.currentSettings,t=Object(E.useSnackbar)().enqueueSnackbar,a=Object(z.e)({enableReinitialize:!0,initialValues:{tokenValue:(null===n||void 0===n?void 0:n.tokenValue)||5,starValueInTokens:(null===n||void 0===n?void 0:n.starValueInTokens)||5,keyValueInTokens:(null===n||void 0===n?void 0:n.keyValueInTokens)||5,boosterValueInTokens:(null===n||void 0===n?void 0:n.boosterValueInTokens)||5},validationSchema:N,onSubmit:function(){var e=Object(C.a)(L.a.mark((function e(n,a){var s,r,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=a.setSubmitting,r=a.resetForm,i=a.setErrors,alert(JSON.stringify(n));try{r(),s(!1),t("Update success",{variant:"success"})}catch(c){console.error(c),s(!1),i(c)}case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),s=a.errors,r=a.touched,i=a.handleSubmit,c=a.getFieldProps,l=a.isSubmitting;return Object(S.jsx)(z.c,{value:a,children:Object(S.jsx)(z.b,{noValidate:!0,autoComplete:"off",onSubmit:i,children:Object(S.jsx)(f.a,{container:!0,spacing:3,children:Object(S.jsx)(f.a,{item:!0,md:12,children:Object(S.jsxs)(d.a,{children:[Object(S.jsx)(A.a,{title:"Reward Settings"}),Object(S.jsx)(j.a,{children:Object(S.jsxs)(b.a,{spacing:2,children:[Object(S.jsxs)(b.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(S.jsx)(D.a,Object(W.a)(Object(W.a)({fullWidth:!0,size:"small",label:"Token Value in USD",InputProps:{endAdornment:Object(S.jsx)(K.a,{position:"end",children:"USD"})}},c("tokenValue")),{},{error:Boolean(r.tokenValue&&s.tokenValue),helperText:r.tokenValue&&s.tokenValue})),Object(S.jsx)(D.a,Object(W.a)(Object(W.a)({fullWidth:!0,size:"small",label:"Star Value in Tokens",InputProps:{endAdornment:Object(S.jsx)(K.a,{position:"end",children:"tokens"})}},c("starValueInTokens")),{},{error:Boolean(r.starValueInTokens&&s.starValueInTokens),helperText:r.starValueInTokens&&s.starValueInTokens}))]}),Object(S.jsxs)(b.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(S.jsx)(D.a,Object(W.a)(Object(W.a)({fullWidth:!0,size:"small",label:"Key Value in Tokens",InputProps:{endAdornment:Object(S.jsx)(K.a,{position:"end",children:"tokens"})}},c("keyValueInTokens")),{},{error:Boolean(r.keyValueInTokens&&s.keyValueInTokens),helperText:r.keyValueInTokens&&s.keyValueInTokens})),Object(S.jsx)(D.a,Object(W.a)(Object(W.a)({fullWidth:!0,size:"small",label:"Booster Value in Tokens",InputProps:{endAdornment:Object(S.jsx)(K.a,{position:"end",children:"tokens"})}},c("boosterValueInTokens")),{},{error:Boolean(r.boosterValueInTokens&&s.boosterValueInTokens),helperText:r.boosterValueInTokens&&s.boosterValueInTokens}))]}),Object(S.jsx)(h.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(S.jsx)(U.a,{type:"submit",variant:"contained",loading:l,endIcon:Object(S.jsx)(J.a,{}),children:"Save"})})]})})]})})})})})};n.default=function(){var e=Object(O.a)().themeStretch,n=Object(c.a)();return Object(S.jsx)(m.a,{title:"Reward: List",children:Object(S.jsxs)(l.a,{maxWidth:!e&&"lg",children:[Object(S.jsx)(p.a,{heading:"Reward List",links:[{name:"Reward",href:x.b.reward.list},{name:"List"}],action:Object(S.jsx)(o.a,{variant:"contained",component:a.b,to:x.b.reward.create,startIcon:Object(S.jsx)(s.a,{icon:i.a}),children:"New Reward"})}),Object(S.jsx)(_,{currentSettings:{tokenValue:10,starValueInTokens:100,keyValueInTokens:240,boosterValueInTokens:120}}),Object(S.jsx)(d.a,{sx:{mt:n.spacing(4)},children:Object(S.jsx)(j.a,{children:Object(S.jsxs)(b.a,{spacing:1,children:[Object(S.jsxs)(b.a,{direction:"row",spacing:2,children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:"Easter Egg"}),Object(S.jsx)(u.a,{variant:"body2",children:"1800 tokens"})]}),Object(S.jsxs)(b.a,{direction:"row",spacing:2,children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:"Present"}),Object(S.jsx)(u.a,{variant:"body2",children:"1750 tokens"})]}),Object(S.jsxs)(b.a,{direction:"row",spacing:2,children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:"Chest"}),Object(S.jsx)(u.a,{variant:"body2",children:"2021 tokens"})]}),Object(S.jsxs)(b.a,{direction:"row",spacing:2,children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:"Lottery Wheels"}),Object(S.jsx)(u.a,{variant:"body2",children:"1907 tokens"})]})]})})}),Object(S.jsx)(h.a,{sx:{height:720},children:Object(S.jsx)(R,{rewardList:[{avatarUrl:Object(k.a)(1),name:"Easter Egg",location:"Default",dispensedWeekly:2890,contents:[{title:"Basic",frequency:30,numberOfKeys:5,numberOfCoins:5,numberOfStars:5,numberOfBoosters:5},{title:"Rare",frequency:30,numberOfKeys:10,numberOfCoins:15,numberOfStars:5,numberOfBoosters:10},{title:"Epic",frequency:20,numberOfKeys:20,numberOfCoins:30,numberOfStars:20,numberOfBoosters:25}]}]})})]})})}},690:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(3),s=t(32),r=t(174),i=t(637),c=t(226),l=t(227),o=t(662),d=t(38),j=t(0),b=["links","action","heading","moreLink","sx"];function u(e){var n=e.links,t=e.action,u=e.heading,h=e.moreLink,O=void 0===h?[]:h,x=e.sx,k=Object(s.a)(e,b);return Object(j.jsxs)(i.a,{sx:x,mb:5,spacing:2,children:[Object(j.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(j.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(d.a,Object(a.a)({links:n},k))]}),t&&Object(j.jsx)(c.a,{sx:{flexShrink:0},children:t})]}),Object(r.isString)(O)?Object(j.jsx)(o.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(j.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},718:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e){return"/static/mock-images/products/product_".concat(e,".jpg")}}}]);
//# sourceMappingURL=19.964d64e4.chunk.js.map
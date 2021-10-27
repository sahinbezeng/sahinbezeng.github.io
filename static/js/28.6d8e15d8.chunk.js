(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[28],{2330:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(25),s=n(688),i=n(20),r=n(65),c=n(283),o=n(693),u=n(3),l=n(45),d=n.n(l),b=n(70),j=(n(1),n(186)),m=n(128),O=n(175),h=n(144),x=n(185),f=n(705),p=n(2308),v=n(661),g=n(687),y=n(704),B=n(635),D=n(679),S=n(669),q=n(2322),k=n(2323),T=n(231),A=n(685),R=n(721),w=n(232),z=n(707),C=n(698),V=n(0),W=j.f().shape({name:j.g().matches(C.b,"Cannot include special characters.").required("Name is required"),brand:j.g().required("Brand is required"),bonuses:j.a(),startDate:j.c().nullable(!0),duration:j.e().min(1).required("This field is required."),ticketRules:j.a(),isDefault:j.b()});function F(e){var t=e.isEdit,n=e.currentBonusSet,s=Object(a.g)(),r=Object(m.b)().enqueueSnackbar,c=Object(x.e)({enableReinitialize:!0,initialValues:{name:(null===n||void 0===n?void 0:n.name)||"",brand:(null===n||void 0===n?void 0:n.brand)||"Adidas",bonuses:(null===n||void 0===n?void 0:n.bonuses)||[],startDate:(null===n||void 0===n?void 0:n.startDate)?new Date(n.startDate):null,duration:(null===n||void 0===n?void 0:n.duration)||45,ticketRules:(null===n||void 0===n?void 0:n.ticketRules)||[],isDefault:(null===n||void 0===n?void 0:n.isDefault)||!0},validationSchema:W,onSubmit:function(){var e=Object(b.a)(d.a.mark((function e(n,a){var c,o,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=a.setSubmitting,o=a.resetForm,u=a.setErrors,alert(JSON.stringify(n));try{o(),c(!1),r(t?"Update success":"Create success",{variant:"success"}),s(i.b.bonus.list)}catch(l){console.error(l),c(!1),u(l)}case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),o=c.errors,l=c.values,j=c.touched,C=c.handleSubmit,F=c.isSubmitting,I=c.setFieldValue,E=c.getFieldProps;return console.log("*** ",l,o),Object(V.jsx)(x.c,{value:c,children:Object(V.jsx)(x.b,{noValidate:!0,autoComplete:"off",onSubmit:C,children:Object(V.jsx)(g.a,{children:Object(V.jsx)(y.a,{children:Object(V.jsxs)(B.a,{spacing:3,children:[Object(V.jsxs)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(V.jsx)(D.a,Object(u.a)(Object(u.a)({fullWidth:!0,size:"small",label:"Name"},E("name")),{},{error:Boolean(j.name&&o.name),helperText:j.name&&o.name})),Object(V.jsx)(D.a,Object(u.a)(Object(u.a)({select:!0,fullWidth:!0,size:"small",label:"Select Brand",placeholder:"Brand"},E("brand")),{},{SelectProps:{native:!0},error:Boolean(j.brand&&o.brand),helperText:j.brand&&o.brand,children:["Adidas","Nike"].map((function(e,t){return Object(V.jsx)("option",{value:e,children:e},e+t)}))})),Object(V.jsx)(p.a,{label:"Start Date",value:l.startDate?l.startDate:I("startDate",Object(O.a)(new Date,45)),inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(h.a)(e)?I("startDate",e):null},renderInput:function(e){return Object(V.jsx)(D.a,Object(u.a)(Object(u.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(j.startDate&&o.startDate),helperText:j.startDate&&o.startDate,sx:{mb:3}}))}}),Object(V.jsx)(D.a,Object(u.a)(Object(u.a)({fullWidth:!0,type:"number",size:"small",label:"Duration",InputProps:{endAdornment:Object(V.jsx)(S.a,{position:"end",children:"days"})}},E("duration")),{},{error:Boolean(j.duration&&o.duration),helperText:j.duration&&o.duration}))]}),Object(V.jsxs)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(V.jsx)(q.a,{fullWidth:!0,multiple:!0,disableCloseOnSelect:!0,size:"small",value:l.bonuses,onChange:function(e,t){console.log(t),I("bonuses",t)},options:[{name:"Bonus 1",quantity:100,quantityToAssign:0,value:20},{name:"Bonus 2",quantity:50,quantityToAssign:0,value:40,isRiddimBonus:!0},{name:"Bonus 3",quantity:200,quantityToAssign:0,value:30},{name:"Bonus 4",quantity:40,quantityToAssign:0,value:15,isRiddimBonus:!0},{name:"Bonus 5",quantity:120,quantityToAssign:0,value:25}],isOptionEqualToValue:function(e,t){return e.name===t.name},renderTags:function(e,t){return e.map((function(e,n){return Object(V.jsx)(k.a,Object(u.a)({label:"".concat(e.name," ").concat(e.isRiddimBonus?"(Riddim)":"")},t({index:n})),n)}))},getOptionLabel:function(e){return e.name},renderOption:function(e,t){return Object(V.jsx)(T.a,Object(u.a)(Object(u.a)({component:"li",sx:{fontSize:15,"& > span":{mr:"10px",fontSize:18}}},e),{},{children:"".concat(t.name," Qty: ").concat(t.quantity," ").concat(t.isRiddimBonus?"(Riddim)":"")}))},renderInput:function(e){return Object(V.jsx)(D.a,Object(u.a)(Object(u.a)({},e),{},{label:"Bonuses",error:Boolean(j.bonuses&&o.bonuses),helperText:j.bonuses&&o.bonuses}))}}),Object(V.jsx)(q.a,{fullWidth:!0,multiple:!0,disableCloseOnSelect:!0,size:"small",value:l.ticketRules,onChange:function(e,t){I("ticketRules",t)},options:["Default Historical Data","Default App Level","Default Followers","Default Social","Historical V2"],renderInput:function(e){return Object(V.jsx)(D.a,Object(u.a)(Object(u.a)({},e),{},{label:"Ticket Rules",error:Boolean(j.ticketRules&&o.ticketRules),helperText:j.ticketRules&&o.ticketRules}))}}),Object(V.jsx)(A.a,{labelPlacement:"start",control:Object(V.jsx)(R.a,Object(u.a)(Object(u.a)({},E("isDefault")),{},{checked:l.isDefault})),label:Object(V.jsx)(w.a,{variant:"subtitle2",children:"Default"}),sx:{mx:0,width:1,justifyContent:"end"}})]}),l.bonuses.length>0&&Object(V.jsx)(x.a,{name:"bonuses",render:function(){return Object(V.jsxs)(g.a,{children:[Object(V.jsx)(z.a,{title:"Set Bonus Quantities for this set",subheader:"Total value of this bonus set: ".concat(l.bonuses.reduce((function(e,t){return e+t.quantityToAssign*t.value}),0))}),Object(V.jsx)(y.a,{children:Object(V.jsx)(B.a,{spacing:3,children:l.bonuses.map((function(e,t){var n="bonuses.".concat(t);return Object(V.jsx)(D.a,Object(u.a)(Object(u.a)({type:"number",fullWidth:!0,size:"small",label:"".concat(e.name," quantity (available ").concat(e.quantity,")")},E("".concat(n,".quantityToAssign"))),{},{error:Boolean(Object(x.d)(j,"".concat(n,".quantityToAssign"))&&Object(x.d)(o,"".concat(n,".quantityToAssign"))),helperText:Object(x.d)(j,"".concat(n,".quantityToAssign"))&&Object(x.d)(o,"".concat(n,".quantityToAssign"))||"Bonus Value: ".concat(e.value," Total Value: ").concat(e.value*e.quantityToAssign)}),t)}))})})]})}}),Object(V.jsx)(T.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(V.jsx)(v.a,{type:"submit",variant:"contained",loading:F,endIcon:Object(V.jsx)(f.a,{}),children:"Save"})})]})})})})})}function I(){var e=Object(r.a)().themeStretch,t=Object(a.f)().pathname,n=Object(a.h)().name,u=t.includes("edit"),l=u?{name:"Set 1",brand:"Nike",bonuses:["Bonus 1","Bonus 2","Bonus 3"],startDate:new Date,duration:20,ticketRules:["Default Historical Data","Default Followers"]}:{};return Object(V.jsx)(c.a,{title:"BonusSet: Create a new bonus",children:Object(V.jsxs)(s.a,{maxWidth:!e&&"lg",children:[Object(V.jsx)(o.a,{heading:u?"Edit Bonus Set":"Add Bonus Set",links:[{name:"Bonus Set",href:i.b.root},{name:u?n:"Add BonusSet"}]}),Object(V.jsx)(F,{isEdit:u,currentBonusSet:l})]})})}},693:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(3),s=n(33),i=n(182),r=n(635),c=n(231),o=n(232),u=n(662),l=n(40),d=n(0),b=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,n=e.action,j=e.heading,m=e.moreLink,O=void 0===m?[]:m,h=e.sx,x=Object(s.a)(e,b);return Object(d.jsxs)(r.a,{sx:h,mb:5,spacing:2,children:[Object(d.jsxs)(r.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:j}),Object(d.jsx)(l.a,Object(a.a)({links:t},x))]}),n&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(i.isString)(O)?Object(d.jsx)(u.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(d.jsx)(u.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},698:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,s=/^[a-zA-Z0-9 ]*$/,i=/^[a-zA-Z ]*$/},705:function(e,t,n){"use strict";var a=n(29),s=n(0);t.a=Object(a.a)(Object(s.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")}}]);
//# sourceMappingURL=28.6d8e15d8.chunk.js.map
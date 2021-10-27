(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[10],{2328:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var r=a(25),n=a(688),i=a(20),c=a(65),o=a(283),s=a(693),l=a(3),d=a(45),b=a.n(d),j=a(70),u=a(186),p=a(1),h=a(128),O=a(144),m=a(185),x=a(705),v=a(2308),g=a(661),f=a(660),y=a(635),w=a(687),k=a(707),R=a(704),T=a(231),C=a(684),S=a(232),z=a(679),D=a(672),A=a(685),B=a(721),M=a(669),N=a(662),H=a(691),I=a(698),P=a(699),W=a(0),L=u.f().shape({images:u.a().min(1,"Minimum 1 bonus image required.").max(3,"Upload maximum 3 images."),thumbnail:u.d().required("Thumbnail is required"),name:u.g().matches(I.b,"Cannot include special characters.").required("Name is required"),giveawayType:u.g(),status:u.b(),description:u.g(),startDate:u.c().nullable(!0),value:u.e().required("This field is required."),availableQuantity:u.e(),brand:u.g().required("Brand is required")});function q(e){var t=e.isEdit,a=e.currentBonus,n=Object(r.g)(),c=Object(h.b)().enqueueSnackbar,o=Object(m.e)({enableReinitialize:!0,initialValues:{images:(null===a||void 0===a?void 0:a.images)||[],brand:(null===a||void 0===a?void 0:a.brand)||"Adidas",thumbnail:(null===a||void 0===a?void 0:a.thumbnail)||null,name:(null===a||void 0===a?void 0:a.name)||"",giveawayType:(null===a||void 0===a?void 0:a.giveawayType)||"Level2",status:(null===a||void 0===a?void 0:a.status)||!0,description:(null===a||void 0===a?void 0:a.description)||"",startDate:(null===a||void 0===a?void 0:a.startDate)?new Date(a.startDate):null,value:(null===a||void 0===a?void 0:a.value)||null,availableQuantity:(null===a||void 0===a?void 0:a.availableQuantity)||null},validationSchema:L,onSubmit:function(){var e=Object(j.a)(b.a.mark((function e(a,r){var o,s,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.setSubmitting,s=r.resetForm,l=r.setErrors,alert(JSON.stringify(a));try{s(),o(!1),c(t?"Update success":"Create success",{variant:"success"}),n(i.b.bonus.list)}catch(d){console.error(d),o(!1),l(d)}case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),s=o.errors,d=o.values,u=o.touched,I=o.handleSubmit,q=o.isSubmitting,Q=o.setFieldValue,U=o.getFieldProps;console.log("*** ",d,s);var F=Object(p.useCallback)((function(e){Q("images",e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[Q]),V=Object(p.useCallback)((function(e){var t=e[0];t&&Q("thumbnail",Object(l.a)(Object(l.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[Q]);return Object(W.jsx)(m.c,{value:o,children:Object(W.jsx)(m.b,{noValidate:!0,autoComplete:"off",onSubmit:I,children:Object(W.jsxs)(f.a,{container:!0,spacing:3,children:[Object(W.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(W.jsxs)(y.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(W.jsxs)(w.a,{children:[Object(W.jsx)(k.a,{title:"Bonus Images"}),Object(W.jsx)(R.a,{children:Object(W.jsxs)(T.a,{sx:{mb:5},children:[Object(W.jsx)(P.b,{showPreview:!0,maxSize:3145728,accept:"image/*",files:d.images,onDrop:F,onRemove:function(e){var t=d.images.filter((function(t){return t!==e}));Q("images",t)},onRemoveAll:function(){Q("images",[])},error:Boolean(u.images&&s.images)}),Object(W.jsx)(C.a,{error:!0,sx:{px:2,textAlign:"center"},children:u.images&&s.images&&Object(W.jsx)(C.a,{error:!0,sx:{px:2},children:u.images&&s.images})})]})})]}),Object(W.jsxs)(w.a,{children:[Object(W.jsx)(k.a,{title:"Thumbnail"}),Object(W.jsx)(R.a,{children:Object(W.jsxs)(T.a,{sx:{mb:5},children:[Object(W.jsx)(P.a,{accept:"image/*",file:d.thumbnail,maxSize:3145728,onDrop:V,error:Boolean(u.thumbnail&&s.thumbnail),caption:Object(W.jsxs)(S.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(W.jsx)("br",{})," max size of ",Object(H.a)(3145728)]})}),Object(W.jsx)(C.a,{error:!0,sx:{px:2,textAlign:"center"},children:u.thumbnail&&s.thumbnail})]})})]})]})}),Object(W.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(W.jsx)(w.a,{children:Object(W.jsx)(R.a,{children:Object(W.jsxs)(y.a,{spacing:3,children:[Object(W.jsxs)(y.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(W.jsx)(z.a,Object(l.a)(Object(l.a)({fullWidth:!0,size:"small",label:"Name"},U("name")),{},{error:Boolean(u.name&&s.name),helperText:u.name&&s.name})),Object(W.jsx)(z.a,Object(l.a)(Object(l.a)({select:!0,fullWidth:!0,size:"small",label:"Giveaway Type"},U("giveawayType")),{},{error:Boolean(u.giveawayType&&s.giveawayType),helperText:u.giveawayType&&s.giveawayType,children:["Level2","Level3","Brand Prize Set","Task Specific"].map((function(e){return Object(W.jsx)(D.a,{value:e,children:e},e)}))}))]}),Object(W.jsx)(y.a,{children:Object(W.jsx)(z.a,Object(l.a)(Object(l.a)({select:!0,fullWidth:!0,size:"small",label:"Select Brand",placeholder:"Brand"},U("brand")),{},{error:Boolean(u.brand&&s.brand),helperText:u.brand&&s.brand,children:["Adidas","Nike"].map((function(e,t){return Object(W.jsx)(D.a,{value:e,children:e},e+t)}))}))}),Object(W.jsxs)(y.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(W.jsx)(y.a,{sx:{width:"100%"},children:Object(W.jsx)(z.a,Object(l.a)(Object(l.a)({fullWidth:!0,multiline:!0,rows:3,size:"small",label:"Description"},U("description")),{},{error:Boolean(u.description&&s.description),helperText:u.description&&s.description}))}),Object(W.jsxs)(y.a,{sx:{width:"100%"},children:[Object(W.jsx)(v.a,{label:"Start date",value:d.startDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(O.a)(e)?Q("startDate",e):null},renderInput:function(e){return Object(W.jsx)(z.a,Object(l.a)(Object(l.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(u.startDate&&s.startDate),helperText:u.startDate&&s.startDate,sx:{mb:3}}))}}),Object(W.jsx)(A.a,{labelPlacement:"start",control:Object(W.jsx)(B.a,Object(l.a)(Object(l.a)({},U("status")),{},{checked:d.status})),label:Object(W.jsx)(S.a,{variant:"subtitle2",children:"Active"}),sx:{mx:0,width:1}})]})]}),Object(W.jsxs)(y.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(W.jsx)(z.a,Object(l.a)(Object(l.a)({fullWidth:!0,type:"number",size:"small",label:"Value of bonus",InputProps:{endAdornment:Object(W.jsx)(M.a,{position:"end",children:"$"})}},U("value")),{},{error:Boolean(u.value&&s.value),helperText:u.value&&s.value})),Object(W.jsx)(z.a,Object(l.a)(Object(l.a)({fullWidth:!0,type:"number",size:"small",label:"Available Quantity"},U("availableQuantity")),{},{error:Boolean(u.availableQuantity&&s.availableQuantity),helperText:u.availableQuantity&&s.availableQuantity}))]}),t&&Object(W.jsxs)(y.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},alignItems:"center",children:[Object(W.jsx)(S.a,{children:"Associated Task: "}),Object(W.jsx)(N.a,{href:i.b.campaign.detail,variant:"h6",children:"Task 1"}),Object(W.jsx)(A.a,{labelPlacement:"start",control:Object(W.jsx)(B.a,{}),label:Object(W.jsx)(S.a,{variant:"subtitle2",children:"Task On/Off"})})]}),Object(W.jsx)(T.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(W.jsx)(g.a,{type:"submit",variant:"contained",loading:q,endIcon:Object(W.jsx)(x.a,{}),children:"Save"})})]})})})})]})})})}var Q=a(733),U=a(720);function F(){var e=Object(c.a)().themeStretch,t=Object(r.f)().pathname,a=Object(r.h)().name,l=t.includes("edit"),d=l?{images:[Object(U.a)(1),Object(U.a)(1)],thumbnail:Object(U.a)(1),name:"100 shoes",description:"100 shoes for all.",giveawayType:"Level3",status:!0,startDate:new Date,value:1500,availableQuantity:100}:{};return Object(W.jsx)(o.a,{title:"Bonus: Create a new bonus",children:Object(W.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(W.jsx)(s.a,{heading:l?"Edit Bonus":"Add Bonus",links:[{name:"Bonus",href:i.b.root},{name:l?a:"Add Bonus"}]}),Object(W.jsx)(q,{isEdit:l,currentBonus:d}),l&&Object(W.jsx)(Q.a,{})]})})}},691:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var r=a(182),n=a(703),i=a.n(n);function c(e){return Object(r.replace)(i()(e).format("0.00a"),".00","")}function o(e){return i()(e).format("0.0 b")}},692:function(e,t,a){"use strict";var r=a(1),n=r.createContext();t.a=n},693:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(3),n=a(33),i=a(182),c=a(635),o=a(231),s=a(232),l=a(662),d=a(40),b=a(0),j=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,p=e.moreLink,h=void 0===p?[]:p,O=e.sx,m=Object(n.a)(e,j);return Object(b.jsxs)(c.a,{sx:O,mb:5,spacing:2,children:[Object(b.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(b.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(d.a,Object(r.a)({links:t},m))]}),a&&Object(b.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(i.isString)(h)?Object(b.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},695:function(e,t,a){"use strict";var r=a(1),n=r.createContext();t.a=n},698:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var r=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,n=/^[a-zA-Z0-9 ]*$/,i=/^[a-zA-Z ]*$/},699:function(e,t,a){"use strict";a.d(t,"b",(function(){return N})),a.d(t,"c",(function(){return P})),a.d(t,"a",(function(){return V}));var r=a(3),n=a(33),i=a(7),c=a(182),o=a(24),s=a(696),l=a(708),d=a.n(l),b=a(154),j=a.n(b),u=a(655),p=a(645),h=a(6),O=a(58),m=a(665),x=a(231),v=a(232),g=a(676),f=a(2331),y=a(637),w=a(638),k=a(2332),R=a(635),T=a(670),C=a(691),S=a(40),z=a(155),D=a(284),A=a(0),B=["error","showPreview","files","onRemove","onRemoveAll","sx"],M=Object(h.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function N(e){var t=e.error,a=e.showPreview,i=void 0!==a&&a,l=e.files,b=e.onRemove,h=e.onRemoveAll,N=e.sx,H=Object(n.a)(e,B),I=l.length>0,P=Object(s.a)(Object(r.a)({},H)),W=P.getRootProps,L=P.getInputProps,q=P.isDragActive,Q=P.isDragReject,U=P.fileRejections,F=function(){return Object(A.jsx)(m.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(O.a)(e.palette.error.main,.08)}},children:U.map((function(e){var t=e.file,a=e.errors,r=t.path,n=t.size;return Object(A.jsxs)(x.a,{sx:{my:1},children:[Object(A.jsxs)(v.a,{variant:"subtitle2",noWrap:!0,children:[r," - ",Object(C.a)(n)]}),a.map((function(e){return Object(A.jsxs)(v.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},r)}))})};return Object(A.jsxs)(x.a,{sx:Object(r.a)({width:"100%"},N),children:[Object(A.jsxs)(M,Object(r.a)(Object(r.a)({},W()),{},{sx:Object(r.a)(Object(r.a)({},q&&{opacity:.72}),(Q||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(A.jsx)("input",Object(r.a)({},L())),Object(A.jsx)(D.b,{sx:{width:220}}),Object(A.jsxs)(x.a,{sx:{p:3,ml:{md:2}},children:[Object(A.jsx)(v.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(A.jsxs)(v.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(A.jsx)(v.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]})]})),U.length>0&&Object(A.jsx)(F,{}),Object(A.jsx)(g.a,{disablePadding:!0,sx:Object(r.a)({},I&&{my:3}),children:Object(A.jsx)(u.a,{children:l.map((function(e,t){var a=e.name,n=e.size,s=e.preview,l=Object(c.isString)(e)?e+t:a+t;return i?Object(A.jsxs)(f.a,Object(r.a)(Object(r.a)({component:p.a.div},z.b),{},{sx:{p:0,m:.5,width:80,height:80,borderRadius:1.5,overflow:"hidden",position:"relative",display:"inline-flex"},children:[Object(A.jsx)(m.a,{variant:"outlined",component:"img",src:Object(c.isString)(e)?e:s,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute"}}),Object(A.jsx)(x.a,{sx:{top:6,right:6,position:"absolute"},children:Object(A.jsx)(S.c,{size:"small",onClick:function(){return b(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(O.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(O.a)(e.palette.grey[900],.48)}}},children:Object(A.jsx)(o.a,{icon:j.a})})})]}),l):Object(A.jsxs)(f.a,Object(r.a)(Object(r.a)({component:p.a.div},z.b),{},{sx:{my:1,py:.75,px:2,borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.divider)},bgcolor:"background.paper"},children:[Object(A.jsx)(y.a,{children:Object(A.jsx)(o.a,{icon:d.a,width:28,height:28})}),Object(A.jsx)(w.a,{primary:Object(c.isString)(e)?e:a,secondary:Object(c.isString)(e)?"":Object(C.a)(n),primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),Object(A.jsx)(k.a,{children:Object(A.jsx)(S.c,{edge:"end",size:"small",onClick:function(){return b(e)},children:Object(A.jsx)(o.a,{icon:j.a})})})]}),l)}))})}),I&&Object(A.jsx)(R.a,{direction:"row",justifyContent:"flex-end",children:Object(A.jsx)(T.a,{onClick:h,sx:{mr:1.5},children:"Remove all"})})]})}var H=["error","file","sx"],I=Object(h.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function P(e){var t=e.error,a=e.file,i=e.sx,o=Object(n.a)(e,H),l=Object(s.a)(Object(r.a)({multiple:!1},o)),d=l.getRootProps,b=l.getInputProps,j=l.isDragActive,u=l.isDragReject,p=l.fileRejections,h=function(){return Object(A.jsx)(m.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(O.a)(e.palette.error.main,.08)}},children:p.map((function(e){var t=e.file,a=e.errors,r=t.path,n=t.size;return Object(A.jsxs)(x.a,{sx:{my:1},children:[Object(A.jsxs)(v.a,{variant:"subtitle2",noWrap:!0,children:[r," - ",Object(C.a)(n)]}),a.map((function(e){return Object(A.jsxs)(v.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},r)}))})};return Object(A.jsxs)(x.a,{sx:Object(r.a)({width:"100%"},i),children:[Object(A.jsxs)(I,Object(r.a)(Object(r.a)({},d()),{},{sx:Object(r.a)(Object(r.a)(Object(r.a)({},j&&{opacity:.72}),(u||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),a&&{padding:"12% 0"}),children:[Object(A.jsx)("input",Object(r.a)({},b())),Object(A.jsx)(D.b,{sx:{width:220}}),Object(A.jsxs)(x.a,{sx:{p:3,ml:{md:2}},children:[Object(A.jsx)(v.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(A.jsxs)(v.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(A.jsx)(v.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]}),a&&Object(A.jsx)(x.a,{component:"img",alt:"file preview",src:Object(c.isString)(a)?a:a.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),p.length>0&&Object(A.jsx)(h,{})]})}var W=a(709),L=a.n(W),q=["error","file","caption","sx"],Q=Object(h.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),U=Object(h.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),F=Object(h.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function V(e){var t=e.error,a=e.file,i=e.caption,l=e.sx,d=Object(n.a)(e,q),b=Object(s.a)(Object(r.a)({multiple:!1},d)),j=b.getRootProps,u=b.getInputProps,p=b.isDragActive,h=b.isDragReject,g=b.fileRejections,f=function(){return Object(A.jsx)(m.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(O.a)(e.palette.error.main,.08)}},children:g.map((function(e){var t=e.file,a=e.errors,r=t.path,n=t.size;return Object(A.jsxs)(x.a,{sx:{my:1},children:[Object(A.jsxs)(v.a,{variant:"subtitle2",noWrap:!0,children:[r," - ",Object(C.a)(n)]}),a.map((function(e){return Object(A.jsxs)(v.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},r)}))})};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Q,{sx:l,children:Object(A.jsxs)(U,Object(r.a)(Object(r.a)({},j()),{},{sx:Object(r.a)(Object(r.a)({},p&&{opacity:.72}),(h||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(A.jsx)("input",Object(r.a)({},u())),a&&Object(A.jsx)(x.a,{component:"img",alt:"avatar",src:Object(c.isString)(a)?a:a.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(A.jsxs)(F,{className:"placeholder",sx:Object(r.a)({},a&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(A.jsx)(x.a,{component:o.a,icon:L.a,sx:{width:24,height:24,mb:1}}),Object(A.jsx)(v.a,{variant:"caption",children:a?"Update photo":"Upload photo"})]})]}))}),i,g.length>0&&Object(A.jsx)(f,{})]})}},705:function(e,t,a){"use strict";var r=a(29),n=a(0);t.a=Object(r.a)(Object(n.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save")},710:function(e,t,a){"use strict";var r=a(7),n=a(5),i=a(2),c=a(1),o=(a(9),a(11)),s=a(181),l=a(58),d=a(14),b=a(695),j=a(692),u=a(12),p=a(6),h=a(127),O=a(151);function m(e){return Object(h.a)("MuiTableCell",e)}var x=Object(O.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),v=a(0),g=["align","className","component","padding","scope","size","sortDirection","variant"],f=Object(p.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.e)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(r.a)({padding:"6px 16px"},"&.".concat(x.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=c.forwardRef((function(e,t){var a,r=Object(u.a)({props:e,name:"MuiTableCell"}),l=r.align,p=void 0===l?"inherit":l,h=r.className,O=r.component,x=r.padding,y=r.scope,w=r.size,k=r.sortDirection,R=r.variant,T=Object(n.a)(r,g),C=c.useContext(b.a),S=c.useContext(j.a),z=S&&"head"===S.variant;a=O||(z?"th":"td");var D=y;!D&&z&&(D="col");var A=R||S&&S.variant,B=Object(i.a)({},r,{align:p,component:a,padding:x||(C&&C.padding?C.padding:"normal"),size:w||(C&&C.size?C.size:"medium"),sortDirection:k,stickyHeader:"head"===A&&C&&C.stickyHeader,variant:A}),M=function(e){var t=e.classes,a=e.variant,r=e.align,n=e.padding,i=e.size,c={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat(Object(d.a)(r)),"normal"!==n&&"padding".concat(Object(d.a)(n)),"size".concat(Object(d.a)(i))]};return Object(s.a)(c,m,t)}(B),N=null;return k&&(N="asc"===k?"ascending":"descending"),Object(v.jsx)(f,Object(i.a)({as:a,ref:t,className:Object(o.a)(M.root,h),"aria-sort":N,scope:D,ownerState:B},T))}));t.a=y},711:function(e,t,a){"use strict";var r=a(2),n=a(5),i=a(1),c=(a(9),a(11)),o=a(181),s=a(692),l=a(12),d=a(6),b=a(127),j=a(151);function u(e){return Object(b.a)("MuiTableHead",e)}Object(j.a)("MuiTableHead",["root"]);var p=a(0),h=["className","component"],O=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),m={variant:"head"},x="thead",v=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),i=a.className,d=a.component,b=void 0===d?x:d,j=Object(n.a)(a,h),v=Object(r.a)({},a,{component:b}),g=function(e){var t=e.classes;return Object(o.a)({root:["root"]},u,t)}(v);return Object(p.jsx)(s.a.Provider,{value:m,children:Object(p.jsx)(O,Object(r.a)({as:b,className:Object(c.a)(g.root,i),ref:t,role:b===x?null:"rowgroup",ownerState:v},j))})}));t.a=v},712:function(e,t,a){"use strict";var r=a(7),n=a(2),i=a(5),c=a(1),o=(a(9),a(11)),s=a(181),l=a(58),d=a(692),b=a(12),j=a(6),u=a(127),p=a(151);function h(e){return Object(u.a)("MuiTableRow",e)}var O=Object(p.a)("MuiTableRow",["root","selected","hover","head","footer"]),m=a(0),x=["className","component","hover","selected"],v=Object(j.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(O.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(r.a)(t,"&.".concat(O.selected),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),g=c.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),r=a.className,l=a.component,j=void 0===l?"tr":l,u=a.hover,p=void 0!==u&&u,O=a.selected,g=void 0!==O&&O,f=Object(i.a)(a,x),y=c.useContext(d.a),w=Object(n.a)({},a,{component:j,hover:p,selected:g,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),k=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,h,t)}(w);return Object(m.jsx)(v,Object(n.a)({as:j,ref:t,className:Object(o.a)(k.root,r),role:"tr"===j?null:"row",ownerState:w},f))}));t.a=g},713:function(e,t,a){"use strict";var r=a(2),n=a(5),i=a(1),c=(a(9),a(11)),o=a(181),s=a(12),l=a(6),d=a(127),b=a(151);function j(e){return Object(d.a)("MuiTableContainer",e)}Object(b.a)("MuiTableContainer",["root"]);var u=a(0),p=["className","component"],h=Object(l.a)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),O=i.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),i=a.className,l=a.component,d=void 0===l?"div":l,b=Object(n.a)(a,p),O=Object(r.a)({},a,{component:d}),m=function(e){var t=e.classes;return Object(o.a)({root:["root"]},j,t)}(O);return Object(u.jsx)(h,Object(r.a)({ref:t,as:d,className:Object(c.a)(m.root,i),ownerState:O},b))}));t.a=O},714:function(e,t,a){"use strict";var r=a(5),n=a(2),i=a(1),c=(a(9),a(11)),o=a(181),s=a(695),l=a(12),d=a(6),b=a(127),j=a(151);function u(e){return Object(b.a)("MuiTable",e)}Object(j.a)("MuiTable",["root","stickyHeader"]);var p=a(0),h=["className","component","padding","size","stickyHeader"],O=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),m="table",x=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,j=void 0===b?m:b,x=a.padding,v=void 0===x?"normal":x,g=a.size,f=void 0===g?"medium":g,y=a.stickyHeader,w=void 0!==y&&y,k=Object(r.a)(a,h),R=Object(n.a)({},a,{component:j,padding:v,size:f,stickyHeader:w}),T=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(o.a)(a,u,t)}(R),C=i.useMemo((function(){return{padding:v,size:f,stickyHeader:w}}),[v,f,w]);return Object(p.jsx)(s.a.Provider,{value:C,children:Object(p.jsx)(O,Object(n.a)({as:j,role:j===m?null:"table",ref:t,className:Object(c.a)(T.root,d),ownerState:R},k))})}));t.a=x},715:function(e,t,a){"use strict";var r=a(2),n=a(5),i=a(1),c=(a(9),a(11)),o=a(181),s=a(692),l=a(12),d=a(6),b=a(127),j=a(151);function u(e){return Object(b.a)("MuiTableBody",e)}Object(j.a)("MuiTableBody",["root"]);var p=a(0),h=["className","component"],O=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),m={variant:"body"},x="tbody",v=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),i=a.className,d=a.component,b=void 0===d?x:d,j=Object(n.a)(a,h),v=Object(r.a)({},a,{component:b}),g=function(e){var t=e.classes;return Object(o.a)({root:["root"]},u,t)}(v);return Object(p.jsx)(s.a.Provider,{value:m,children:Object(p.jsx)(O,Object(r.a)({className:Object(c.a)(g.root,i),as:b,ref:t,role:b===x?null:"rowgroup",ownerState:v},j))})}));t.a=v},720:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){return"/static/mock-images/products/product_".concat(e,".jpg")}},733:function(e,t,a){"use strict";var r=a(21),n=a(700),i=a.n(n),c=a(182),o=a(46),s=a(660),l=a(232),d=a(713),b=a(714),j=a(711),u=a(712),p=a(710),h=a(715),O=a(187),m=a(0),x=[{id:"name",label:"Name",alignRight:!1},{id:"userId",label:"User Id",alignRight:!1},{id:"tickets",label:"# of tickets",alignRight:!1},{id:"brand",label:"Brand",alignRight:!1},{id:"bonusName",label:"Bonus Name",alignRight:!1},{id:"acceptanceState",label:"Acceptance State",alignRight:!1}],v=Object(r.a)(Array(3)).map((function(e,t){return{userId:"id ".concat(t+1),name:i.a.internet.userName(),tickets:i.a.datatype.number({min:1e3,max:1e4,precision:1}),brand:"Brand 1",bonusName:"100 shoes",acceptanceState:Object(c.sample)(["accepted bonus ","not accepted bonus","accepted task not completed","accepted task completed"])}}));t.a=function(){var e=Object(o.a)();return Object(m.jsxs)(s.a,{container:!0,spacing:2,sx:{mt:e.spacing(8)},children:[Object(m.jsx)(s.a,{item:!0,xs:12,children:Object(m.jsx)(l.a,{variant:"h5",children:"Winner List"})}),Object(m.jsx)(s.a,{item:!0,xs:12,children:Object(m.jsx)(O.a,{children:Object(m.jsx)(d.a,{sx:{minWidth:800},children:Object(m.jsxs)(b.a,{"aria-label":"reward table",children:[Object(m.jsx)(j.a,{children:Object(m.jsx)(u.a,{children:x.map((function(e){return Object(m.jsx)(p.a,{align:e.alignRight?"right":"left",children:e.label},e.id)}))})}),Object(m.jsx)(h.a,{children:v.map((function(e){return Object(m.jsxs)(u.a,{children:[Object(m.jsx)(p.a,{children:e.name}),Object(m.jsx)(p.a,{children:e.userId}),Object(m.jsx)(p.a,{children:e.tickets}),Object(m.jsx)(p.a,{children:e.brand}),Object(m.jsx)(p.a,{children:e.bonusName}),Object(m.jsx)(p.a,{children:e.acceptanceState})]},e.name)}))})]})})})})]})}}}]);
//# sourceMappingURL=10.03a57646.chunk.js.map
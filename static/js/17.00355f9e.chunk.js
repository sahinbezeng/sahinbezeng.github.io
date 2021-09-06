(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[17],{2301:function(e,t,r){"use strict";r.r(t);var n=r(687),a=r(23),i=r(63),c=r(282),o=r(690),s=r(3),l=r(41),d=r.n(l),j=r(70),u=r(178),b=r(1),p=r(127),h=r(21),x=r(177),O=r(661),m=r(659),g=r(686),f=r(226),v=r(716),y=r(227),w=r(683),k=r(637),S=r(680),I=r(2296),C=r(2299),R=r(689),A=r(695),D=r(696),q=r(0),z=u.f().shape({postImage:u.d().required("Post image is required"),username:u.g().matches(A.b,"Cannot include special characters.").required("username is required"),question:u.g(),description:u.g()});function P(){var e=Object(h.h)(),t=Object(p.useSnackbar)().enqueueSnackbar,r=Object(x.e)({enableReinitialize:!0,initialValues:{postImage:null,username:"johndoe",hashtags:[],question:"Question One",description:""},validationSchema:z,onSubmit:function(){var r=Object(j.a)(d.a.mark((function r(n,i){var c,o,s;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c=i.setSubmitting,o=i.resetForm,s=i.setErrors,alert(JSON.stringify(n));try{o(),c(!1),t("Create success",{variant:"success"}),e(a.b.brand.list)}catch(l){console.error(l),c(!1),s(l)}case 3:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}),n=r.errors,i=r.values,c=r.touched,o=r.handleSubmit,l=r.isSubmitting,u=r.setFieldValue,A=r.getFieldProps;console.log("*** ",i,n);var P=Object(b.useCallback)((function(e){var t=e[0];t&&u("postImage",Object(s.a)(Object(s.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[u]);return Object(q.jsx)(x.c,{value:r,children:Object(q.jsx)(x.b,{noValidate:!0,autoComplete:"off",onSubmit:o,children:Object(q.jsxs)(m.a,{container:!0,spacing:3,children:[Object(q.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(q.jsx)(g.a,{children:Object(q.jsx)(f.a,{children:Object(q.jsxs)(v.a,{children:[Object(q.jsx)(y.a,{sx:{display:"block",textAlign:"center",color:"text.secondary"},children:"Upload Image/Video/Audio"}),Object(q.jsx)(D.b,{accept:"image/*, video/*, audio/*",file:i.postImage,maxSize:3145728,onDrop:P,error:Boolean(c.postImage&&n.postImage)}),Object(q.jsxs)(y.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(q.jsx)("br",{})," max size of ",Object(R.a)(3145728)]}),Object(q.jsx)(w.a,{error:!0,sx:{px:2,textAlign:"center"},children:c.postImage&&n.postImage})]})})})}),Object(q.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(q.jsx)(g.a,{sx:{p:3},children:Object(q.jsx)(v.a,{children:Object(q.jsxs)(k.a,{spacing:3,children:[Object(q.jsxs)(m.a,{container:!0,spacing:2,children:[Object(q.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(q.jsx)(S.a,Object(s.a)(Object(s.a)({select:!0,fullWidth:!0,label:"Select Username",placeholder:"Username"},A("username")),{},{SelectProps:{native:!0},error:Boolean(c.username&&n.username),helperText:c.username&&n.username,children:["johndoe","evedoe"].map((function(e,t){return Object(q.jsx)("option",{value:e,children:e},e+t)}))}))}),Object(q.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(q.jsx)(I.a,{multiple:!0,freeSolo:!0,value:i.hashtags,onChange:function(e,t){u("hashtags",t)},options:[],renderTags:function(e,t){return e.map((function(e,r){return Object(q.jsx)(C.a,Object(s.a)({size:"small",label:e},t({index:r})),e)}))},renderInput:function(e){return Object(q.jsx)(S.a,Object(s.a)(Object(s.a)({},e),{},{label:"Hashtags"}))}})})]}),Object(q.jsx)(S.a,Object(s.a)(Object(s.a)({select:!0,fullWidth:!0,label:"Select Question",placeholder:"Question",defaultValue:void 0},A("question")),{},{SelectProps:{native:!0},error:Boolean(c.question&&n.question),helperText:c.question&&n.question,children:["Question One","Question Two"].map((function(e,t){return Object(q.jsx)("option",{value:e,children:e},e+t)}))})),Object(q.jsx)(S.a,Object(s.a)(Object(s.a)({fullWidth:!0,multiline:!0,rows:3,label:"Description"},A("description")),{},{error:Boolean(c.description&&n.description),helperText:c.description&&n.description})),Object(q.jsx)(f.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(q.jsx)(O.a,{type:"submit",variant:"contained",loading:l,children:"Save Post"})})]})})})})]})})})}t.default=function(){var e=Object(i.a)().themeStretch;return Object(q.jsx)(c.a,{title:"Campaign: Create a new campaign",children:Object(q.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(q.jsx)(o.a,{heading:"Add User Post",links:[{name:"Campaign",href:a.b.campaign.list.all},{name:"Add User Post"}]}),Object(q.jsx)(P,{})]})})}},689:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(174),a=r(697),i=r.n(a);function c(e){return Object(n.replace)(i()(e).format("0.00a"),".00","")}function o(e){return i()(e).format("0.0 b")}},690:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(3),a=r(32),i=r(174),c=r(637),o=r(226),s=r(227),l=r(662),d=r(38),j=r(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,r=e.action,b=e.heading,p=e.moreLink,h=void 0===p?[]:p,x=e.sx,O=Object(a.a)(e,u);return Object(j.jsxs)(c.a,{sx:x,mb:5,spacing:2,children:[Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(d.a,Object(n.a)({links:t},O))]}),r&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:r})]}),Object(i.isString)(h)?Object(j.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},695:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));var n=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,a=/^[a-zA-Z0-9 ]*$/,i=/^[a-zA-Z ]*$/},696:function(e,t,r){"use strict";r.d(t,"b",(function(){return g})),r.d(t,"a",(function(){return I}));var n=r(3),a=r(32),i=r(5),c=r(174),o=r(22),s=r(692),l=(r(701),r(152),r(654),r(643),r(7)),d=r(60),j=r(665),u=r(226),b=r(227),p=(r(676),r(2304),r(639),r(640),r(2305),r(637),r(670),r(689)),h=(r(38),r(153),r(283)),x=r(0);Object(l.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));var O=["error","file","sx"],m=Object(l.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function g(e){var t=e.error,r=e.file,i=e.sx,o=Object(a.a)(e,O),l=Object(s.a)(Object(n.a)({multiple:!1},o)),g=l.getRootProps,f=l.getInputProps,v=l.isDragActive,y=l.isDragReject,w=l.fileRejections,k=function(){return Object(x.jsx)(j.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(d.a)(e.palette.error.main,.08)}},children:w.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(x.jsxs)(u.a,{sx:{my:1},children:[Object(x.jsxs)(b.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(p.a)(a)]}),r.map((function(e){return Object(x.jsxs)(b.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(x.jsxs)(u.a,{sx:Object(n.a)({width:"100%"},i),children:[Object(x.jsxs)(m,Object(n.a)(Object(n.a)({},g()),{},{sx:Object(n.a)(Object(n.a)(Object(n.a)({},v&&{opacity:.72}),(y||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),r&&{padding:"12% 0"}),children:[Object(x.jsx)("input",Object(n.a)({},f())),Object(x.jsx)(h.b,{sx:{width:220}}),Object(x.jsxs)(u.a,{sx:{p:3,ml:{md:2}},children:[Object(x.jsx)(b.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(x.jsxs)(b.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(x.jsx)(b.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]}),r&&Object(x.jsx)(u.a,{component:"img",alt:"file preview",src:Object(c.isString)(r)?r:r.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),w.length>0&&Object(x.jsx)(k,{})]})}var f=r(702),v=r.n(f),y=["error","file","caption","sx"],w=Object(l.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),k=Object(l.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),S=Object(l.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function I(e){var t=e.error,r=e.file,i=e.caption,l=e.sx,h=Object(a.a)(e,y),O=Object(s.a)(Object(n.a)({multiple:!1},h)),m=O.getRootProps,g=O.getInputProps,f=O.isDragActive,I=O.isDragReject,C=O.fileRejections,R=function(){return Object(x.jsx)(j.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(d.a)(e.palette.error.main,.08)}},children:C.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(x.jsxs)(u.a,{sx:{my:1},children:[Object(x.jsxs)(b.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(p.a)(a)]}),r.map((function(e){return Object(x.jsxs)(b.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{sx:l,children:Object(x.jsxs)(k,Object(n.a)(Object(n.a)({},m()),{},{sx:Object(n.a)(Object(n.a)({},f&&{opacity:.72}),(I||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(x.jsx)("input",Object(n.a)({},g())),r&&Object(x.jsx)(u.a,{component:"img",alt:"avatar",src:Object(c.isString)(r)?r:r.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(x.jsxs)(S,{className:"placeholder",sx:Object(n.a)({},r&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(x.jsx)(u.a,{component:o.a,icon:v.a,sx:{width:24,height:24,mb:1}}),Object(x.jsx)(b.a,{variant:"caption",children:r?"Update photo":"Upload photo"})]})]}))}),i,C.length>0&&Object(x.jsx)(R,{})]})}}}]);
//# sourceMappingURL=17.00355f9e.chunk.js.map
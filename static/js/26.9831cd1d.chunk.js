(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[26],{2330:function(e,t,r){"use strict";r.r(t);var n=r(688),a=r(19),i=r(65),c=r(283),o=r(691),s=r(3),l=r(45),j=r.n(l),d=r(70),b=r(186),u=r(1),p=r(128),x=r(25),h=r(185),O=r(661),m=r(660),g=r(687),f=r(231),v=r(706),y=r(232),w=r(684),C=r(635),k=r(679),R=r(672),S=r(2327),I=r(2328),D=r(692),A=r(698),P=r(700),z=r(0),q=b.f().shape({postImage:b.d().required("Post image is required"),username:b.g().matches(A.b,"Cannot include special characters.").required("username is required"),question:b.g(),description:b.g()});function U(){var e=Object(x.g)(),t=Object(p.b)().enqueueSnackbar,r=Object(h.e)({enableReinitialize:!0,initialValues:{postImage:null,username:"johndoe",hashtags:[],question:"Question One",description:""},validationSchema:q,onSubmit:function(){var r=Object(d.a)(j.a.mark((function r(n,i){var c,o,s;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c=i.setSubmitting,o=i.resetForm,s=i.setErrors,alert(JSON.stringify(n));try{o(),c(!1),t("Create success",{variant:"success"}),e(a.b.brand.list)}catch(l){console.error(l),c(!1),s(l)}case 3:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}),n=r.errors,i=r.values,c=r.touched,o=r.handleSubmit,l=r.isSubmitting,b=r.setFieldValue,A=r.getFieldProps;console.log("*** ",i,n);var U=Object(u.useCallback)((function(e){var t=e[0];t&&b("postImage",Object(s.a)(Object(s.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[b]);return Object(z.jsx)(h.c,{value:r,children:Object(z.jsx)(h.b,{noValidate:!0,autoComplete:"off",onSubmit:o,children:Object(z.jsxs)(m.a,{container:!0,spacing:3,children:[Object(z.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(z.jsx)(g.a,{children:Object(z.jsx)(f.a,{children:Object(z.jsxs)(v.a,{children:[Object(z.jsx)(y.a,{sx:{display:"block",textAlign:"center",color:"text.secondary"},children:"Upload Image/Video/Audio"}),Object(z.jsx)(P.c,{accept:"image/*, video/*, audio/*",file:i.postImage,maxSize:3145728,onDrop:U,error:Boolean(c.postImage&&n.postImage)}),Object(z.jsxs)(y.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(z.jsx)("br",{})," max size of ",Object(D.a)(3145728)]}),Object(z.jsx)(w.a,{error:!0,sx:{px:2,textAlign:"center"},children:c.postImage&&n.postImage})]})})})}),Object(z.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(z.jsx)(g.a,{sx:{p:3},children:Object(z.jsx)(v.a,{children:Object(z.jsxs)(C.a,{spacing:3,children:[Object(z.jsxs)(m.a,{container:!0,spacing:2,children:[Object(z.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(z.jsx)(k.a,Object(s.a)(Object(s.a)({select:!0,fullWidth:!0,label:"Select Username",placeholder:"Username"},A("username")),{},{error:Boolean(c.username&&n.username),helperText:c.username&&n.username,children:["johndoe","evedoe"].map((function(e,t){return Object(z.jsx)(R.a,{value:e,children:e},e+t)}))}))}),Object(z.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(z.jsx)(S.a,{multiple:!0,freeSolo:!0,value:i.hashtags,onChange:function(e,t){b("hashtags",t)},options:[],renderTags:function(e,t){return e.map((function(e,r){return Object(z.jsx)(I.a,Object(s.a)({size:"small",label:e},t({index:r})),e)}))},renderInput:function(e){return Object(z.jsx)(k.a,Object(s.a)(Object(s.a)({},e),{},{label:"Hashtags"}))}})})]}),Object(z.jsx)(k.a,Object(s.a)(Object(s.a)({select:!0,fullWidth:!0,label:"Select Question",placeholder:"Question",defaultValue:void 0},A("question")),{},{error:Boolean(c.question&&n.question),helperText:c.question&&n.question,children:["Question One","Question Two"].map((function(e,t){return Object(z.jsx)(R.a,{value:e,children:e},e+t)}))})),Object(z.jsx)(k.a,Object(s.a)(Object(s.a)({fullWidth:!0,multiline:!0,rows:3,label:"Description"},A("description")),{},{error:Boolean(c.description&&n.description),helperText:c.description&&n.description})),Object(z.jsx)(f.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(z.jsx)(O.a,{type:"submit",variant:"contained",loading:l,children:"Save Post"})})]})})})})]})})})}t.default=function(){var e=Object(i.a)().themeStretch;return Object(z.jsx)(c.a,{title:"Campaign: Create a new campaign",children:Object(z.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(z.jsx)(o.a,{heading:"Add User Post",links:[{name:"Campaign",href:a.b.campaign.list.all},{name:"Add User Post"}]}),Object(z.jsx)(U,{})]})})}},691:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(3),a=r(33),i=r(182),c=r(635),o=r(231),s=r(232),l=r(662),j=r(40),d=r(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,r=e.action,u=e.heading,p=e.moreLink,x=void 0===p?[]:p,h=e.sx,O=Object(a.a)(e,b);return Object(d.jsxs)(c.a,{sx:h,mb:5,spacing:2,children:[Object(d.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(j.a,Object(n.a)({links:t},O))]}),r&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:r})]}),Object(i.isString)(x)?Object(d.jsx)(l.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},692:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(182),a=r(703),i=r.n(a);function c(e){return Object(n.replace)(i()(e).format("0.00a"),".00","")}function o(e){return i()(e).format("0.0 b")}},698:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));var n=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,a=/^[a-zA-Z0-9 ]*$/,i=/^[a-zA-Z ]*$/},700:function(e,t,r){"use strict";r.d(t,"b",(function(){return U})),r.d(t,"c",(function(){return F})),r.d(t,"a",(function(){return J}));var n=r(3),a=r(33),i=r(7),c=r(182),o=r(24),s=r(696),l=r(712),j=r.n(l),d=r(154),b=r.n(d),u=r(655),p=r(645),x=r(6),h=r(58),O=r(665),m=r(231),g=r(232),f=r(676),v=r(2337),y=r(637),w=r(638),C=r(2338),k=r(635),R=r(670),S=r(692),I=r(40),D=r(155),A=r(284),P=r(0),z=["error","showPreview","files","onRemove","onRemoveAll","sx"],q=Object(x.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function U(e){var t=e.error,r=e.showPreview,i=void 0!==r&&r,l=e.files,d=e.onRemove,x=e.onRemoveAll,U=e.sx,B=Object(a.a)(e,z),W=l.length>0,F=Object(s.a)(Object(n.a)({},B)),T=F.getRootProps,N=F.getInputProps,Q=F.isDragActive,V=F.isDragReject,L=F.fileRejections,M=function(){return Object(P.jsx)(O.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(h.a)(e.palette.error.main,.08)}},children:L.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(P.jsxs)(m.a,{sx:{my:1},children:[Object(P.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(S.a)(a)]}),r.map((function(e){return Object(P.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(P.jsxs)(m.a,{sx:Object(n.a)({width:"100%"},U),children:[Object(P.jsxs)(q,Object(n.a)(Object(n.a)({},T()),{},{sx:Object(n.a)(Object(n.a)({},Q&&{opacity:.72}),(V||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(P.jsx)("input",Object(n.a)({},N())),Object(P.jsx)(A.b,{sx:{width:220}}),Object(P.jsxs)(m.a,{sx:{p:3,ml:{md:2}},children:[Object(P.jsx)(g.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(P.jsxs)(g.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(P.jsx)(g.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]})]})),L.length>0&&Object(P.jsx)(M,{}),Object(P.jsx)(f.a,{disablePadding:!0,sx:Object(n.a)({},W&&{my:3}),children:Object(P.jsx)(u.a,{children:l.map((function(e,t){var r=e.name,a=e.size,s=e.preview,l=Object(c.isString)(e)?e+t:r+t;return i?Object(P.jsxs)(v.a,Object(n.a)(Object(n.a)({component:p.a.div},D.b),{},{sx:{p:0,m:.5,width:80,height:80,borderRadius:1.5,overflow:"hidden",position:"relative",display:"inline-flex"},children:[Object(P.jsx)(O.a,{variant:"outlined",component:"img",src:Object(c.isString)(e)?e:s,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute"}}),Object(P.jsx)(m.a,{sx:{top:6,right:6,position:"absolute"},children:Object(P.jsx)(I.c,{size:"small",onClick:function(){return d(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(h.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(h.a)(e.palette.grey[900],.48)}}},children:Object(P.jsx)(o.a,{icon:b.a})})})]}),l):Object(P.jsxs)(v.a,Object(n.a)(Object(n.a)({component:p.a.div},D.b),{},{sx:{my:1,py:.75,px:2,borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.divider)},bgcolor:"background.paper"},children:[Object(P.jsx)(y.a,{children:Object(P.jsx)(o.a,{icon:j.a,width:28,height:28})}),Object(P.jsx)(w.a,{primary:Object(c.isString)(e)?e:r,secondary:Object(c.isString)(e)?"":Object(S.a)(a),primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),Object(P.jsx)(C.a,{children:Object(P.jsx)(I.c,{edge:"end",size:"small",onClick:function(){return d(e)},children:Object(P.jsx)(o.a,{icon:b.a})})})]}),l)}))})}),W&&Object(P.jsx)(k.a,{direction:"row",justifyContent:"flex-end",children:Object(P.jsx)(R.a,{onClick:x,sx:{mr:1.5},children:"Remove all"})})]})}var B=["error","file","sx"],W=Object(x.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function F(e){var t=e.error,r=e.file,i=e.sx,o=Object(a.a)(e,B),l=Object(s.a)(Object(n.a)({multiple:!1},o)),j=l.getRootProps,d=l.getInputProps,b=l.isDragActive,u=l.isDragReject,p=l.fileRejections,x=function(){return Object(P.jsx)(O.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(h.a)(e.palette.error.main,.08)}},children:p.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(P.jsxs)(m.a,{sx:{my:1},children:[Object(P.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(S.a)(a)]}),r.map((function(e){return Object(P.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(P.jsxs)(m.a,{sx:Object(n.a)({width:"100%"},i),children:[Object(P.jsxs)(W,Object(n.a)(Object(n.a)({},j()),{},{sx:Object(n.a)(Object(n.a)(Object(n.a)({},b&&{opacity:.72}),(u||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),r&&{padding:"12% 0"}),children:[Object(P.jsx)("input",Object(n.a)({},d())),Object(P.jsx)(A.b,{sx:{width:220}}),Object(P.jsxs)(m.a,{sx:{p:3,ml:{md:2}},children:[Object(P.jsx)(g.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(P.jsxs)(g.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(P.jsx)(g.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]}),r&&Object(P.jsx)(m.a,{component:"img",alt:"file preview",src:Object(c.isString)(r)?r:r.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),p.length>0&&Object(P.jsx)(x,{})]})}var T=r(713),N=r.n(T),Q=["error","file","caption","sx"],V=Object(x.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),L=Object(x.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),M=Object(x.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function J(e){var t=e.error,r=e.file,i=e.caption,l=e.sx,j=Object(a.a)(e,Q),d=Object(s.a)(Object(n.a)({multiple:!1},j)),b=d.getRootProps,u=d.getInputProps,p=d.isDragActive,x=d.isDragReject,f=d.fileRejections,v=function(){return Object(P.jsx)(O.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(h.a)(e.palette.error.main,.08)}},children:f.map((function(e){var t=e.file,r=e.errors,n=t.path,a=t.size;return Object(P.jsxs)(m.a,{sx:{my:1},children:[Object(P.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(S.a)(a)]}),r.map((function(e){return Object(P.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(V,{sx:l,children:Object(P.jsxs)(L,Object(n.a)(Object(n.a)({},b()),{},{sx:Object(n.a)(Object(n.a)({},p&&{opacity:.72}),(x||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(P.jsx)("input",Object(n.a)({},u())),r&&Object(P.jsx)(m.a,{component:"img",alt:"avatar",src:Object(c.isString)(r)?r:r.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(P.jsxs)(M,{className:"placeholder",sx:Object(n.a)({},r&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(P.jsx)(m.a,{component:o.a,icon:N.a,sx:{width:24,height:24,mb:1}}),Object(P.jsx)(g.a,{variant:"caption",children:r?"Update photo":"Upload photo"})]})]}))}),i,f.length>0&&Object(P.jsx)(v,{})]})}},706:function(e,t,r){"use strict";var n=r(2),a=r(5),i=r(1),c=(r(9),r(11)),o=r(181),s=r(6),l=r(12),j=r(127),d=r(151);function b(e){return Object(j.a)("MuiCardContent",e)}Object(d.a)("MuiCardContent",["root"]);var u=r(0),p=["className","component"],x=Object(s.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),h=i.forwardRef((function(e,t){var r=Object(l.a)({props:e,name:"MuiCardContent"}),i=r.className,s=r.component,j=void 0===s?"div":s,d=Object(a.a)(r,p),h=Object(n.a)({},r,{component:j}),O=function(e){var t=e.classes;return Object(o.a)({root:["root"]},b,t)}(h);return Object(u.jsx)(x,Object(n.a)({as:j,className:Object(c.a)(O.root,i),ownerState:h,ref:t},d))}));t.a=h}}]);
//# sourceMappingURL=26.9831cd1d.chunk.js.map
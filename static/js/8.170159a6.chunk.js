(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[8],{2281:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return D}));var n=o(21),l=o(687),t=o(33),c=o(64),r=o(282),i=o(690),d=o(42),s=o.n(d),b=o(72),h=o(3),p=o(181),u=o(1),j=o(129),m=o(178),O=o(28),x=o(0),g=Object(O.a)(Object(x.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save"),v=o(661),f=o(7),S=o(227),k=o(659),C=o(686),y=o(226),L=o(683),A=o(684),w=o(2233),B=o(637),M=o(680),R=o(2288),I=o(2234),T=o(689),P=o(701),N=o(694),G=o(699),U=o(696),F=Object(f.a)(S.a)((function(e){var a=e.theme;return Object(h.a)(Object(h.a)({},a.typography.subtitle2),{},{color:a.palette.text.secondary,marginBottom:a.spacing(1)})})),z=p.f().shape({avatarUrl:p.d().required("Avatar is required"),name:p.g().matches(N.b,"Cannot include special characters.").required("Name is required"),contactPersonName:p.g().matches(N.b,"Cannot include special characters."),email:p.g().email().required("Email is required"),phoneNumber:p.g().matches(N.c,"Phone number is not valid.").required("Phone number is required"),address:p.g().matches(N.a,"Address cannot include special characters."),country:p.g(),state:p.g(),city:p.g(),zipCode:p.g(),status:p.b().required("Status is required"),about:p.g(),websiteLinks:p.a().of(p.g()),facebookLinks:p.a().of(p.g()),instagramLinks:p.a().of(p.g()),twitterLinks:p.a().of(p.g()),whoWeAreLookingFor:p.g(),brandRestriction:p.g(),coverUrl:p.d()});function W(e){var a=e.isEdit,o=e.currentBrand,l=Object(n.h)(),c=Object(j.useSnackbar)().enqueueSnackbar,r=Object(m.e)({enableReinitialize:!0,initialValues:{avatarUrl:(null===o||void 0===o?void 0:o.avatarUrl)||null,name:(null===o||void 0===o?void 0:o.name)||"",contactPersonName:(null===o||void 0===o?void 0:o.contactPersonName)||"",email:(null===o||void 0===o?void 0:o.email)||"",phoneNumber:(null===o||void 0===o?void 0:o.phoneNumber)||"",address:(null===o||void 0===o?void 0:o.address)||"",country:(null===o||void 0===o?void 0:o.country)||"",state:(null===o||void 0===o?void 0:o.state)||"",city:(null===o||void 0===o?void 0:o.city)||"",zipCode:(null===o||void 0===o?void 0:o.zipCode)||void 0,status:(null===o||void 0===o?void 0:o.status)||!0,websiteLinks:(null===o||void 0===o?void 0:o.websiteLinks)||[""],facebookLinks:(null===o||void 0===o?void 0:o.facebookLinks)||[""],instagramLinks:(null===o||void 0===o?void 0:o.instagramLinks)||[""],twitterLinks:(null===o||void 0===o?void 0:o.twitterLinks)||[""],whoWeAreLookingFor:(null===o||void 0===o?void 0:o.whoWeAreLookingFor)||"",brandRestriction:(null===o||void 0===o?void 0:o.brandRestriction)||"",coverUrl:(null===o||void 0===o?void 0:o.coverUrl)||null},validationSchema:z,onSubmit:function(){var e=Object(b.a)(s.a.mark((function e(o,n){var r,i,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setSubmitting,i=n.resetForm,d=n.setErrors,alert(JSON.stringify(o));try{i(),r(!1),c(a?"Update success":"Create success",{variant:"success"}),l(t.b.brand.list)}catch(s){console.error(s),r(!1),d(s)}case 3:case"end":return e.stop()}}),e)})));return function(a,o){return e.apply(this,arguments)}}()}),i=r.errors,d=r.values,p=r.touched,O=r.handleSubmit,f=r.isSubmitting,N=r.setFieldValue,W=r.getFieldProps;console.log("*** ",d,i);var D=Object(u.useCallback)((function(e){var a=e[0];a&&N("avatarUrl",Object(h.a)(Object(h.a)({},a),{},{preview:URL.createObjectURL(a)}))}),[N]),E=Object(u.useCallback)((function(e){var a=e[0];a&&N("coverUrl",Object(h.a)(Object(h.a)({},a),{},{preview:URL.createObjectURL(a)}))}),[N]);return Object(x.jsx)(m.c,{value:r,children:Object(x.jsx)(m.b,{noValidate:!0,autoComplete:"off",onSubmit:O,children:Object(x.jsxs)(k.a,{container:!0,spacing:3,children:[Object(x.jsx)(k.a,{item:!0,xs:12,md:4,children:Object(x.jsxs)(C.a,{sx:{py:10,px:3},children:[Object(x.jsxs)(y.a,{sx:{mb:5},children:[Object(x.jsx)(G.a,{accept:"image/*",file:d.avatarUrl,maxSize:3145728,onDrop:D,error:Boolean(p.avatarUrl&&i.avatarUrl),caption:Object(x.jsxs)(S.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(x.jsx)("br",{})," max size of ",Object(T.a)(3145728)]})}),Object(x.jsx)(L.a,{error:!0,sx:{px:2,textAlign:"center"},children:p.avatarUrl&&i.avatarUrl})]}),Object(x.jsx)(A.a,{labelPlacement:"start",control:Object(x.jsx)(w.a,Object(h.a)(Object(h.a)({},W("status")),{},{checked:d.status})),label:Object(x.jsx)(S.a,{variant:"subtitle2",sx:{mb:.5},children:"Status"}),sx:{mx:0,width:1,justifyContent:"space-between"}})]})}),Object(x.jsx)(k.a,{item:!0,xs:12,md:8,children:Object(x.jsx)(C.a,{sx:{p:3},children:Object(x.jsxs)(B.a,{spacing:3,children:[Object(x.jsxs)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,size:"small",label:"Name"},W("name")),{},{error:Boolean(p.name&&i.name),helperText:p.name&&i.name})),Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,size:"small",label:"Contact Person Name"},W("contactPersonName")),{},{error:Boolean(p.contactPersonName&&i.contactPersonName),helperText:p.contactPersonName&&i.contactPersonName}))]}),Object(x.jsxs)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,size:"small",label:"Phone Number"},W("phoneNumber")),{},{error:Boolean(p.phoneNumber&&i.phoneNumber),helperText:p.phoneNumber&&i.phoneNumber})),Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,size:"small",label:"Email Address"},W("email")),{},{error:Boolean(p.email&&i.email),helperText:p.email&&i.email}))]}),Object(x.jsx)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,multiline:!0,rows:3,size:"small",label:"Address"},W("address")),{},{error:Boolean(p.address&&i.address),helperText:p.address&&i.address}))}),Object(x.jsxs)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(x.jsxs)(M.a,Object(h.a)(Object(h.a)({select:!0,fullWidth:!0,size:"small",label:"Country",placeholder:"Country"},W("country")),{},{SelectProps:{native:!0},error:Boolean(p.country&&i.country),helperText:p.country&&i.country,children:[Object(x.jsx)("option",{value:""}),P.a.map((function(e){return Object(x.jsx)("option",{value:e.label,children:e.label},e.code)}))]})),Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,size:"small",label:"State/Region"},W("state")),{},{error:Boolean(p.state&&i.state),helperText:p.state&&i.state}))]}),Object(x.jsxs)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,size:"small",label:"City"},W("city")),{},{error:Boolean(p.city&&i.city),helperText:p.city&&i.city})),Object(x.jsx)(M.a,Object(h.a)({fullWidth:!0,size:"small",label:"Zip/Code"},W("zipCode")))]}),Object(x.jsxs)(C.a,{children:[Object(x.jsx)(R.a,{title:"Social Media Links"}),Object(x.jsx)(I.a,{children:Object(x.jsxs)(B.a,{spacing:1,children:[Object(x.jsx)(m.a,{name:"websiteLinks",render:function(e){var a=d.websiteLinks;return Object(x.jsx)(x.Fragment,{children:a.map((function(o,n){var l="websiteLinks.".concat(n);return Object(x.jsx)(U.a,{label:"Website Link ".concat(n+1),fieldProps:Object(h.a)({},W(l)),error:Boolean(Object(m.d)(p,l)&&Object(m.d)(i,l)),helperText:Object(m.d)(p,l)&&Object(m.d)(i,l),isLastItem:n===a.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(n)}},n)}))})}}),Object(x.jsx)(m.a,{name:"facebookLinks",render:function(e){var a=d.facebookLinks;return Object(x.jsx)(x.Fragment,{children:a.map((function(o,n){var l="facebookLinks.".concat(n);return Object(x.jsx)(U.a,{label:"Facebook Link ".concat(n+1),fieldProps:Object(h.a)({},W(l)),error:Boolean(Object(m.d)(p,l)&&Object(m.d)(i,l)),helperText:Object(m.d)(p,l)&&Object(m.d)(i,l),isLastItem:n===a.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(n)}},n)}))})}}),Object(x.jsx)(m.a,{name:"instagramLinks",render:function(e){var a=d.instagramLinks;return Object(x.jsx)(x.Fragment,{children:a.map((function(o,n){var l="instagramLinks.".concat(n);return Object(x.jsx)(U.a,{label:"Instagram Link ".concat(n+1),fieldProps:Object(h.a)({},W(l)),error:Boolean(Object(m.d)(p,l)&&Object(m.d)(i,l)),helperText:Object(m.d)(p,l)&&Object(m.d)(i,l),isLastItem:n===a.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(n)}},n)}))})}}),Object(x.jsx)(m.a,{name:"twitterLinks",render:function(e){var a=d.twitterLinks;return Object(x.jsx)(x.Fragment,{children:a.map((function(o,n){var l="twitterLinks.".concat(n);return Object(x.jsx)(U.a,{label:"Twitter Link ".concat(n+1),fieldProps:Object(h.a)({},W(l)),error:Boolean(Object(m.d)(p,l)&&Object(m.d)(i,l)),helperText:Object(m.d)(p,l)&&Object(m.d)(i,l),isLastItem:n===a.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(n)}},n)}))})}})]})})]}),Object(x.jsx)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,multiline:!0,rows:4,size:"small",label:"Who we are looking for"},W("whoWeAreLookingFor")),{},{error:Boolean(p.whoWeAreLookingFor&&i.whoWeAreLookingFor),helperText:p.whoWeAreLookingFor&&i.whoWeAreLookingFor}))}),Object(x.jsx)(B.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(x.jsx)(M.a,Object(h.a)(Object(h.a)({fullWidth:!0,multiline:!0,rows:4,size:"small",label:"Brand Restriction"},W("brandRestriction")),{},{error:Boolean(p.brandRestriction&&i.brandRestriction),helperText:p.brandRestriction&&i.brandRestriction}))}),Object(x.jsxs)(B.a,{children:[Object(x.jsx)(F,{children:"Cover"}),Object(x.jsx)(G.b,{maxSize:3145728,accept:"image/*",file:d.coverUrl,onDrop:E,error:Boolean(p.coverUrl&&i.coverUrl)}),p.coverUrl&&i.coverUrl&&Object(x.jsx)(L.a,{error:!0,sx:{px:2},children:p.coverUrl&&i.coverUrl})]}),Object(x.jsx)(y.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(x.jsx)(v.a,{type:"submit",variant:"contained",loading:f,endIcon:Object(x.jsx)(g,{}),children:"Save"})})]})})})]})})})}function D(){var e=Object(c.a)().themeStretch,a=Object(n.g)().pathname,o=Object(n.i)().name,d=a.includes("edit");return Object(x.jsx)(r.a,{title:"Brand: Create a new brand",children:Object(x.jsxs)(l.a,{maxWidth:!e&&"lg",children:[Object(x.jsx)(i.a,{heading:d?"Edit Brand":"Add Brand",links:[{name:"Brand",href:t.b.root},{name:d?o:"Add Brand"}]}),Object(x.jsx)(W,{isEdit:d,currentBrand:{}})]})})}},689:function(e,a,o){"use strict";o.d(a,"b",(function(){return c})),o.d(a,"a",(function(){return r}));var n=o(175),l=o(695),t=o.n(l);function c(e){return Object(n.replace)(t()(e).format("0.00a"),".00","")}function r(e){return t()(e).format("0.0 b")}},690:function(e,a,o){"use strict";o.d(a,"a",(function(){return p}));var n=o(3),l=o(31),t=o(175),c=o(637),r=o(226),i=o(227),d=o(662),s=o(38),b=o(0),h=["links","action","heading","moreLink","sx"];function p(e){var a=e.links,o=e.action,p=e.heading,u=e.moreLink,j=void 0===u?[]:u,m=e.sx,O=Object(l.a)(e,h);return Object(b.jsxs)(c.a,{sx:m,mb:5,spacing:2,children:[Object(b.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(b.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:p}),Object(b.jsx)(s.a,Object(n.a)({links:a},O))]}),o&&Object(b.jsx)(r.a,{sx:{flexShrink:0},children:o})]}),Object(t.isString)(j)?Object(b.jsx)(d.a,{href:j,target:"_blank",variant:"body2",children:j}):j.map((function(e){return Object(b.jsx)(d.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},694:function(e,a,o){"use strict";o.d(a,"c",(function(){return n})),o.d(a,"a",(function(){return l})),o.d(a,"b",(function(){return t}));var n=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,l=/^[a-zA-Z0-9 ]*$/,t=/^[a-zA-Z ]*$/},696:function(e,a,o){"use strict";var n=o(3),l=o(2269),t=o(2270),c=o(637),r=o(680),i=o(667),d=o(0);a.a=function(e){var a=e.label,o=e.fieldProps,s=e.error,b=e.helperText,h=e.isLastItem,p=e.onAddClick,u=e.onRemoveClick;return Object(d.jsxs)(c.a,{direction:"row",spacing:1,children:[Object(d.jsx)(r.a,Object(n.a)(Object(n.a)({fullWidth:!0,size:"small",label:a},o),{},{error:s,helperText:b})),h?Object(d.jsx)(i.a,{color:"primary",onClick:p,children:Object(d.jsx)(l.a,{})}):Object(d.jsx)(i.a,{color:"error",onClick:u,children:Object(d.jsx)(t.a,{})})]})}},699:function(e,a,o){"use strict";o.d(a,"b",(function(){return g})),o.d(a,"a",(function(){return L}));var n=o(3),l=o(31),t=o(5),c=o(175),r=o(22),i=o(693),d=(o(709),o(159),o(654),o(643),o(7)),s=o(60),b=o(665),h=o(226),p=o(227),u=(o(676),o(2286),o(639),o(640),o(2287),o(637),o(670),o(689)),j=(o(38),o(160),o(283)),m=o(0);Object(d.a)("div")((function(e){var a=e.theme;return Object(t.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:a.spacing(5,1),borderRadius:a.shape.borderRadius,backgroundColor:a.palette.background.neutral,border:"1px dashed ".concat(a.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},a.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));var O=["error","file","sx"],x=Object(d.a)("div")((function(e){var a=e.theme;return Object(t.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:a.spacing(5,0),borderRadius:a.shape.borderRadius,transition:a.transitions.create("padding"),backgroundColor:a.palette.background.neutral,border:"1px dashed ".concat(a.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},a.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function g(e){var a=e.error,o=e.file,t=e.sx,r=Object(l.a)(e,O),d=Object(i.a)(Object(n.a)({multiple:!1},r)),g=d.getRootProps,v=d.getInputProps,f=d.isDragActive,S=d.isDragReject,k=d.fileRejections,C=function(){return Object(m.jsx)(b.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(s.a)(e.palette.error.main,.08)}},children:k.map((function(e){var a=e.file,o=e.errors,n=a.path,l=a.size;return Object(m.jsxs)(h.a,{sx:{my:1},children:[Object(m.jsxs)(p.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(u.a)(l)]}),o.map((function(e){return Object(m.jsxs)(p.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(m.jsxs)(h.a,{sx:Object(n.a)({width:"100%"},t),children:[Object(m.jsxs)(x,Object(n.a)(Object(n.a)({},g()),{},{sx:Object(n.a)(Object(n.a)(Object(n.a)({},f&&{opacity:.72}),(S||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),o&&{padding:"12% 0"}),children:[Object(m.jsx)("input",Object(n.a)({},v())),Object(m.jsx)(j.b,{sx:{width:220}}),Object(m.jsxs)(h.a,{sx:{p:3,ml:{md:2}},children:[Object(m.jsx)(p.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(m.jsxs)(p.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(m.jsx)(p.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]}),o&&Object(m.jsx)(h.a,{component:"img",alt:"file preview",src:Object(c.isString)(o)?o:o.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),k.length>0&&Object(m.jsx)(C,{})]})}var v=o(710),f=o.n(v),S=["error","file","caption","sx"],k=Object(d.a)("div")((function(e){var a=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:a.spacing(1),border:"1px dashed ".concat(a.palette.grey[50032])}})),C=Object(d.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),y=Object(d.a)("div")((function(e){var a=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:a.palette.text.secondary,backgroundColor:a.palette.background.neutral,transition:a.transitions.create("opacity",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function L(e){var a=e.error,o=e.file,t=e.caption,d=e.sx,j=Object(l.a)(e,S),O=Object(i.a)(Object(n.a)({multiple:!1},j)),x=O.getRootProps,g=O.getInputProps,v=O.isDragActive,L=O.isDragReject,A=O.fileRejections,w=function(){return Object(m.jsx)(b.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(s.a)(e.palette.error.main,.08)}},children:A.map((function(e){var a=e.file,o=e.errors,n=a.path,l=a.size;return Object(m.jsxs)(h.a,{sx:{my:1},children:[Object(m.jsxs)(p.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(u.a)(l)]}),o.map((function(e){return Object(m.jsxs)(p.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{sx:d,children:Object(m.jsxs)(C,Object(n.a)(Object(n.a)({},x()),{},{sx:Object(n.a)(Object(n.a)({},v&&{opacity:.72}),(L||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(m.jsx)("input",Object(n.a)({},g())),o&&Object(m.jsx)(h.a,{component:"img",alt:"avatar",src:Object(c.isString)(o)?o:o.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(m.jsxs)(y,{className:"placeholder",sx:Object(n.a)({},o&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(m.jsx)(h.a,{component:r.a,icon:f.a,sx:{width:24,height:24,mb:1}}),Object(m.jsx)(p.a,{variant:"caption",children:o?"Update photo":"Upload photo"})]})]}))}),t,A.length>0&&Object(m.jsx)(w,{})]})}},701:function(e,a,o){"use strict";a.a=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61"},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1"},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49"},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33"},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81"},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1"},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}]}}]);
//# sourceMappingURL=8.170159a6.chunk.js.map
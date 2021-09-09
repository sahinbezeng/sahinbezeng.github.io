(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[13],{2294:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n(688),i=n(23),c=n(63),o=n(282),s=n(691),l=n(41),d=n.n(l),j=n(70),u=n(15),b=n(178),O=n(1),h=n(127),p=n(177),x=n(662),m=n(660),g=n(687),f=n(638),v=n(226),y=n(671),C=n(695),T=b.f().shape({brand:b.g().matches(C.b,"Cannot include special characters.").required("Brand is required"),campaignType:b.g()}),D=b.f().shape({name:b.g().matches(C.b,"Cannot include special characters.").required("Name is required"),taskType:b.g(),totalBudget:b.e(),perUser:b.g(),starPerUser:b.e(),continueAfterBudget:b.g(),tier:b.g(),isPublic:b.b().required("Status is required")}),k=b.f().shape({headerImage:b.d(),description:b.g(),doList:b.a().of(b.g()),dontList:b.a().of(b.g()),igCaptionQuestions:b.a().of(b.g()),noOfPhotoRequired:b.e(),noOfVideoRequired:b.e(),hashtags:b.a().of(b.g()),mentions:b.a().of(b.g()),startDate:b.c().nullable(!0),endDate:b.c().when("startDate",(function(e,t){return e?t.min(e,"End date must be later than start date"):t.nullable(!0)}))}),w=b.f().shape({name:b.g().matches(C.b,"Cannot include special characters.").required("Name is required"),contestType:b.g(),totalBudget:b.e(),winnerToken:b.g(),starPerUser:b.e(),continueAfterBudget:b.g(),tier:b.g(),isPublic:b.b().required("Status is required")}),B=b.f().shape({headerImage:b.d(),description:b.g(),doList:b.a().of(b.g()),dontList:b.a().of(b.g()),igCaptionQuestions:b.a().of(b.g()),noOfPhotoRequired:b.e(),noOfVideoRequired:b.e(),hashtags:b.a().of(b.g()),mentions:b.a().of(b.g()),contestStartDate:b.c().nullable(!0),contestEndDate:b.c().when("contestStartDate",(function(e,t){return e?t.min(e,"End date must be later than start date"):t.nullable(!0)})),votingStartDate:b.c().nullable(!0),votingEndDate:b.c().when("votingStartDate",(function(e,t){return e?t.min(e,"End date must be later than start date"):t.nullable(!0)})),winnerDate:b.c().nullable(!0)}),P=b.f().shape({name:b.g().matches(C.b,"Cannot include special characters.").required("Name is required"),description:b.g(),percentageColor:b.g(),starPerUser:b.e(),startDate:b.c().nullable(!0),endDate:b.c().when("startDate",(function(e,t){return e?t.min(e,"End date must be later than start date"):t.nullable(!0)})),surveyQuestions:b.a().of(b.f().shape({title:b.g(),options:b.a().of(b.g())}))}),S=n(716),I=n(3),R=n(39),W=n(681),z=n(659),q=n(2316),U=n(720),A=n(2317),L=n(685),F=n(649),Q=n(0),E=["Task","Contest","Survey","Watch Ad","Campaign"],M=function(e){var t=e.formik,n=e.onCampaignTypeChange,a=Object(R.a)(),r=t.errors,i=t.values,c=t.touched,o=t.getFieldProps,s=t.setFieldValue;return Object(Q.jsx)(m.a,{container:!0,spacing:3,children:Object(Q.jsx)(m.a,{item:!0,md:12,children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsx)(m.a,{container:!0,children:Object(Q.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(Q.jsxs)(W.a,Object(I.a)(Object(I.a)({select:!0,fullWidth:!0,size:"small",label:"Select Brand",placeholder:"Brand"},o("brand")),{},{SelectProps:{native:!0},error:Boolean(c.brand&&r.brand),helperText:c.brand&&r.brand,children:[Object(Q.jsx)("option",{value:""}),["Adidas","Nike"].map((function(e,t){return Object(Q.jsx)("option",{value:e,children:e},e+t)}))]}))})}),Object(Q.jsx)(z.a,Object(I.a)(Object(I.a)({},o("campaignType")),{},{value:i.campaignType,onChange:function(e){console.log(e.target.value),s("campaignType",e.target.value),n(e.target.value)},children:Object(Q.jsx)(m.a,{container:!0,spacing:1.5,direction:"row",columns:10,children:E.map((function(e){var t=i.campaignType===e;return Object(Q.jsx)(m.a,{item:!0,xs:5,md:2,children:Object(Q.jsxs)(g.a,{variant:t?"elevation":"outlined",sx:Object(I.a)({},t&&{border:"solid 2px ".concat(a.palette.primary.main)}),children:[Object(Q.jsx)(q.a,{sx:{height:140},image:"/static/mock-images/products/product_1.jpg",title:"Contemplative Reptile"}),Object(Q.jsx)(U.a,{children:e}),Object(Q.jsx)(A.a,{children:Object(Q.jsx)(L.a,{label:"",value:e,control:Object(Q.jsx)(F.a,{sx:{display:"none"}}),sx:{top:0,margin:0,width:"100%",height:"100%",position:"absolute"}})})]})},e)}))})}))]})})})},V=n(709),N=n(227),$=n(742),_=function(e){var t=e.formik,n=t.values,a=t.errors,r=t.touched,i=t.getFieldProps;return Object(Q.jsx)(m.a,{container:!0,spacing:3,children:Object(Q.jsx)(m.a,{item:!0,md:12,children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Task Detail"}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Task Name"},i("name")),{},{error:Boolean(r.name&&a.name),helperText:r.name&&a.name})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Task Type"},i("taskType")),{},{error:Boolean(r.taskType&&a.taskType),helperText:r.taskType&&a.taskType}))]})})]}),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Rewards"}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Total Budget",type:"number"},i("totalBudget")),{},{error:Boolean(r.totalBudget&&a.totalBudget),helperText:r.totalBudget&&a.totalBudget})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Per User"},i("perUser")),{},{error:Boolean(r.perUser&&a.perUser),helperText:r.perUser&&a.perUser}))]}),Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Star Per User",type:"number"},i("starPerUser")),{},{error:Boolean(r.starPerUser&&a.starPerUser),helperText:r.starPerUser&&a.starPerUser})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Continue After Budget"},i("continueAfterBudget")),{},{error:Boolean(r.continueAfterBudget&&a.continueAfterBudget),helperText:r.continueAfterBudget&&a.continueAfterBudget}))]})]})})]}),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Audience"}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Select Tier"},i("tier")),{},{error:Boolean(r.tier&&a.tier),helperText:r.tier&&a.tier})),Object(Q.jsxs)(f.a,{direction:"row",justifyContent:"space-around",children:[Object(Q.jsx)(N.a,{variant:"caption",children:"In case of public, the task goes to the activity feed and all users can see"}),Object(Q.jsx)(L.a,{labelPlacement:"start",control:Object(Q.jsx)($.a,Object(I.a)(Object(I.a)({},i("isPublic")),{},{checked:n.isPublic})),label:Object(Q.jsx)(N.a,{variant:"subtitle2",children:"Public"}),sx:{mx:0,width:1,justifyContent:"center"}})]})]})})]})]})})})},H=n(144),J=n(7),Z=n(2293),G=n(684),K=n(654),X=n(2302),Y=n(2306),ee=n(697),te=n(707),ne=Object(J.a)(N.a)((function(e){var t=e.theme;return Object(I.a)(Object(I.a)({},t.typography.subtitle2),{},{color:t.palette.text.secondary,marginBottom:t.spacing(1)})})),ae=function(e){var t=e.formik,n=t.values,a=t.errors,r=t.touched,i=t.getFieldProps,c=t.setFieldValue,o=Object(O.useCallback)((function(e){var t=e[0];t&&c("headerImage",Object(I.a)(Object(I.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[c]);return Object(Q.jsxs)(m.a,{container:!0,spacing:3,children:[Object(Q.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(ne,{children:"Header Image"}),Object(Q.jsx)(ee.b,{maxSize:3145728,accept:"image/*",file:n.coverUrl,onDrop:o,error:Boolean(r.coverUrl&&a.coverUrl)}),r.coverUrl&&a.coverUrl&&Object(Q.jsx)(G.a,{error:!0,sx:{px:2},children:r.coverUrl&&a.coverUrl})]}),Object(Q.jsxs)(f.a,{children:[Object(Q.jsxs)(f.a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(Q.jsx)(ne,{children:"Bonus Reward & Benefits"}),Object(Q.jsxs)(f.a,{direction:"row",spacing:1,alignItems:"center",children:[Object(Q.jsx)(y.a,{variant:"contained",children:"Add New"}),Object(Q.jsx)(y.a,{variant:"contained",children:"Select More"})]})]}),Object(Q.jsx)(f.a,{direction:"row",spacing:1,children:[1,2,3,4,5,6].map((function(e,t){return Object(Q.jsx)(K.a,{alt:"bonus&rewards",src:"/static/mock-images/products/product_1.jpg",sx:{width:64,height:64}},e+t)}))})]}),Object(Q.jsx)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,multiline:!0,rows:3,size:"small",label:"Description"},i("description")),{},{error:Boolean(r.description&&a.description),helperText:r.description&&a.description}))}),Object(Q.jsx)(p.a,{name:"doList",render:function(e){var t=n.doList;return Object(Q.jsx)(Q.Fragment,{children:t.map((function(n,c){var o="doList.".concat(c);return Object(Q.jsx)(te.a,{label:"Do ".concat(c+1),fieldProps:Object(I.a)({},i(o)),error:Boolean(Object(p.d)(r,o)&&Object(p.d)(a,o)),helperText:Object(p.d)(r,o)&&Object(p.d)(a,o),isLastItem:c===t.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(c)}},c)}))})}}),Object(Q.jsx)(p.a,{name:"dontList",render:function(e){var t=n.dontList;return Object(Q.jsx)(Q.Fragment,{children:t.map((function(n,c){var o="dontList.".concat(c);return Object(Q.jsx)(te.a,{label:"Don't ".concat(c+1),fieldProps:Object(I.a)({},i(o)),error:Boolean(Object(p.d)(r,o)&&Object(p.d)(a,o)),helperText:Object(p.d)(r,o)&&Object(p.d)(a,o),isLastItem:c===t.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(c)}},c)}))})}}),Object(Q.jsx)(p.a,{name:"igCaptionQuestions",render:function(e){var t=n.igCaptionQuestions;return Object(Q.jsx)(Q.Fragment,{children:t.map((function(n,c){var o="igCaptionQuestions.".concat(c);return Object(Q.jsx)(te.a,{label:"Instagram Caption Question ".concat(c+1),fieldProps:Object(I.a)({},i(o)),error:Boolean(Object(p.d)(r,o)&&Object(p.d)(a,o)),helperText:Object(p.d)(r,o)&&Object(p.d)(a,o),isLastItem:c===t.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(c)}},c)}))})}}),Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Number of photo required",type:"number"},i("noOfPhotoRequired")),{},{error:Boolean(r.noOfPhotoRequired&&a.noOfPhotoRequired),helperText:r.noOfPhotoRequired&&a.noOfPhotoRequired})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Number of video required",type:"number"},i("noOfVideoRequired")),{},{error:Boolean(r.noOfVideoRequired&&a.noOfVideoRequired),helperText:r.noOfVideoRequired&&a.noOfVideoRequired}))]}),Object(Q.jsx)(X.a,{multiple:!0,freeSolo:!0,value:n.hashtags,onChange:function(e,t){c("hashtags",t)},options:[],renderTags:function(e,t){return e.map((function(e,n){return Object(Q.jsx)(Y.a,Object(I.a)({size:"small",label:e},t({index:n})),e)}))},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{label:"Hashtags"}))}}),Object(Q.jsx)(X.a,{multiple:!0,freeSolo:!0,value:n.mentions,onChange:function(e,t){c("mentions",t)},options:[],renderTags:function(e,t){return e.map((function(e,n){return Object(Q.jsx)(Y.a,Object(I.a)({size:"small",label:e},t({index:n})),e)}))},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{label:"Mentions"}))}}),Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(Z.a,{label:"Start date",value:n.startDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?c("startDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.startDate&&a.startDate),helperText:r.startDate&&a.startDate,sx:{mb:3}}))}}),Object(Q.jsx)(Z.a,{label:"End date",value:n.endDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?c("endDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.endDate&&a.endDate),helperText:r.endDate&&a.endDate,sx:{mb:3}}))}})]})]})}),Object(Q.jsx)(m.a,{item:!0,xs:12,md:4,sx:{height:"auto"},children:Object(Q.jsx)(g.a,{sx:{p:3,height:"100%"},children:"Later Phase"})})]})},re=function(e){var t=e.formik,n=t.values,a=t.errors,r=t.touched,i=t.getFieldProps;return Object(Q.jsx)(m.a,{container:!0,spacing:3,children:Object(Q.jsx)(m.a,{item:!0,md:12,children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Contest Detail"}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Contest Name"},i("name")),{},{error:Boolean(r.name&&a.name),helperText:r.name&&a.name})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Contest Type"},i("contestType")),{},{error:Boolean(r.contestType&&a.contestType),helperText:r.contestType&&a.contestType}))]})})]}),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Rewards"}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Total Budget",type:"number"},i("totalBudget")),{},{error:Boolean(r.totalBudget&&a.totalBudget),helperText:r.totalBudget&&a.totalBudget})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Winner Token"},i("winnerToken")),{},{error:Boolean(r.winnerToken&&a.winnerToken),helperText:r.winnerToken&&a.winnerToken})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Star Per User",type:"number"},i("starPerUser")),{},{error:Boolean(r.starPerUser&&a.starPerUser),helperText:r.starPerUser&&a.starPerUser}))]}),Object(Q.jsx)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(Q.jsx)(m.a,{container:!0,children:Object(Q.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Continue After Budget"},i("continueAfterBudget")),{},{error:Boolean(r.continueAfterBudget&&a.continueAfterBudget),helperText:r.continueAfterBudget&&a.continueAfterBudget}))})})})]})})]}),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Audience"}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Select Tier"},i("tier")),{},{error:Boolean(r.tier&&a.tier),helperText:r.tier&&a.tier})),Object(Q.jsxs)(f.a,{direction:"row",justifyContent:"space-around",children:[Object(Q.jsx)(N.a,{variant:"caption",children:"In case of Public, the contest goes to the activity feed and all users can see"}),Object(Q.jsx)(L.a,{labelPlacement:"start",control:Object(Q.jsx)($.a,Object(I.a)(Object(I.a)({},i("isPublic")),{},{checked:n.isPublic})),label:Object(Q.jsx)(N.a,{variant:"subtitle2",children:"Public"}),sx:{mx:0,width:1,justifyContent:"center"}})]})]})})]})]})})})},ie=Object(J.a)(N.a)((function(e){var t=e.theme;return Object(I.a)(Object(I.a)({},t.typography.subtitle2),{},{color:t.palette.text.secondary,marginBottom:t.spacing(1)})})),ce=function(e){var t=e.formik,n=t.values,a=t.errors,r=t.touched,i=t.getFieldProps,c=t.setFieldValue,o=Object(O.useCallback)((function(e){var t=e[0];t&&c("headerImage",Object(I.a)(Object(I.a)({},t),{},{preview:URL.createObjectURL(t)}))}),[c]);return Object(Q.jsxs)(m.a,{container:!0,spacing:3,children:[Object(Q.jsx)(m.a,{item:!0,xs:12,md:8,children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsxs)(f.a,{children:[Object(Q.jsx)(ie,{children:"Header Image"}),Object(Q.jsx)(ee.b,{maxSize:3145728,accept:"image/*",file:n.headerImage,onDrop:o,error:Boolean(r.headerImage&&a.headerImage)}),r.headerImage&&a.headerImage&&Object(Q.jsx)(G.a,{error:!0,sx:{px:2},children:r.headerImage&&a.headerImage})]}),Object(Q.jsxs)(f.a,{children:[Object(Q.jsxs)(f.a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(Q.jsx)(ie,{children:"Bonus Reward & Benefits"}),Object(Q.jsxs)(f.a,{direction:"row",spacing:1,alignItems:"center",children:[Object(Q.jsx)(y.a,{variant:"contained",children:"Add New"}),Object(Q.jsx)(y.a,{variant:"contained",children:"Select More"})]})]}),Object(Q.jsx)(f.a,{direction:"row",spacing:1,children:[1,2,3,4,5,6].map((function(e,t){return Object(Q.jsx)(K.a,{alt:"bonus&rewards",src:"/static/mock-images/products/product_1.jpg",sx:{width:64,height:64}},e+t)}))})]}),Object(Q.jsx)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,multiline:!0,rows:3,size:"small",label:"Description"},i("description")),{},{error:Boolean(r.description&&a.description),helperText:r.description&&a.description}))}),Object(Q.jsx)(p.a,{name:"doList",render:function(e){var t=n.doList;return Object(Q.jsx)(Q.Fragment,{children:t.map((function(n,c){var o="doList.".concat(c);return Object(Q.jsx)(te.a,{label:"Do ".concat(c+1),fieldProps:Object(I.a)({},i(o)),error:Boolean(Object(p.d)(r,o)&&Object(p.d)(a,o)),helperText:Object(p.d)(r,o)&&Object(p.d)(a,o),isLastItem:c===t.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(c)}},c)}))})}}),Object(Q.jsx)(p.a,{name:"dontList",render:function(e){var t=n.dontList;return Object(Q.jsx)(Q.Fragment,{children:t.map((function(n,c){var o="dontList.".concat(c);return Object(Q.jsx)(te.a,{label:"Don't ".concat(c+1),fieldProps:Object(I.a)({},i(o)),error:Boolean(Object(p.d)(r,o)&&Object(p.d)(a,o)),helperText:Object(p.d)(r,o)&&Object(p.d)(a,o),isLastItem:c===t.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(c)}},c)}))})}}),Object(Q.jsx)(p.a,{name:"igCaptionQuestions",render:function(e){var t=n.igCaptionQuestions;return Object(Q.jsx)(Q.Fragment,{children:t.map((function(n,c){var o="igCaptionQuestions.".concat(c);return Object(Q.jsx)(te.a,{label:"Instagram Caption Question ".concat(c+1),fieldProps:Object(I.a)({},i(o)),error:Boolean(Object(p.d)(r,o)&&Object(p.d)(a,o)),helperText:Object(p.d)(r,o)&&Object(p.d)(a,o),isLastItem:c===t.length-1,onAddClick:function(){return e.push("")},onRemoveClick:function(){return e.remove(c)}},c)}))})}}),Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Number of photo required",type:"number"},i("noOfPhotoRequired")),{},{error:Boolean(r.noOfPhotoRequired&&a.noOfPhotoRequired),helperText:r.noOfPhotoRequired&&a.noOfPhotoRequired})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Number of video required",type:"number"},i("noOfVideoRequired")),{},{error:Boolean(r.noOfVideoRequired&&a.noOfVideoRequired),helperText:r.noOfVideoRequired&&a.noOfVideoRequired}))]}),Object(Q.jsx)(X.a,{multiple:!0,freeSolo:!0,value:n.hashtags,onChange:function(e,t){c("hashtags",t)},options:[],renderTags:function(e,t){return e.map((function(e,n){return Object(Q.jsx)(Y.a,Object(I.a)({size:"small",label:e},t({index:n})),e)}))},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{label:"Hashtags"}))}}),Object(Q.jsx)(X.a,{multiple:!0,freeSolo:!0,value:n.mentions,onChange:function(e,t){c("mentions",t)},options:[],renderTags:function(e,t){return e.map((function(e,n){return Object(Q.jsx)(Y.a,Object(I.a)({size:"small",label:e},t({index:n})),e)}))},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{label:"Mentions"}))}}),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Contest Dates",titleTypographyProps:{variant:"subtitle2"}}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(Z.a,{label:"Start date",value:n.contestStartDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?c("contestStartDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.contestStartDate&&a.contestStartDate),helperText:r.contestStartDate&&a.contestStartDate,sx:{mb:3}}))}}),Object(Q.jsx)(Z.a,{label:"End date",value:n.contestEndDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?c("contestEndDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.contestEndDate&&a.contestEndDate),helperText:r.contestEndDate&&a.contestEndDate,sx:{mb:3}}))}})]})})]}),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Voting Dates",titleTypographyProps:{variant:"subtitle2"}}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(Z.a,{label:"Start date",value:n.votingStartDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?c("votingStartDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.votingStartDate&&a.votingStartDate),helperText:r.votingStartDate&&a.votingStartDate,sx:{mb:3}}))}}),Object(Q.jsx)(Z.a,{label:"End date",value:n.votingEndDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?c("votingEndDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.votingEndDate&&a.votingEndDate),helperText:r.votingEndDate&&a.votingEndDate,sx:{mb:3}}))}})]})})]}),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Winner Dates",titleTypographyProps:{variant:"subtitle2"}}),Object(Q.jsx)(U.a,{children:Object(Q.jsx)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(Q.jsx)(Z.a,{label:"Winner date",value:n.winnerDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?c("winnerDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.winnerDate&&a.winnerDate),helperText:r.winnerDate&&a.winnerDate,sx:{mb:3}}))}})})})]})]})}),Object(Q.jsx)(m.a,{item:!0,xs:12,md:4,sx:{height:"auto"},children:Object(Q.jsx)(g.a,{sx:{p:3,height:"100%"},children:"Later Phase"})})]})},oe=n(22),se=n(693),le=n.n(se),de=n(711),je=n(747),ue=n(668),be={title:"",options:[""]},Oe=function(e){var t=e.formik,n=t.errors,a=t.values,r=t.touched,i=t.setFieldValue,c=t.getFieldProps;return Object(Q.jsx)(m.a,{container:!0,spacing:3,children:Object(Q.jsx)(m.a,{item:!0,md:12,children:Object(Q.jsxs)(f.a,{spacing:3,children:[Object(Q.jsx)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Name"},c("name")),{},{error:Boolean(r.name&&n.name),helperText:r.name&&n.name}))}),Object(Q.jsx)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,multiline:!0,rows:3,size:"small",label:"Description"},c("description")),{},{error:Boolean(r.description&&n.description),helperText:r.description&&n.description}))}),Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Percentage Color"},c("percentageColor")),{},{error:Boolean(r.percentageColor&&n.percentageColor),helperText:r.percentageColor&&n.percentageColor})),Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Star Per User",type:"number"},c("starPerUser")),{},{error:Boolean(r.starPerUser&&n.starPerUser),helperText:r.starPerUser&&n.starPerUser}))]}),Object(Q.jsxs)(f.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(Q.jsx)(Z.a,{label:"Start date",value:a.startDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?i("startDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.startDate&&n.startDate),helperText:r.startDate&&n.startDate,sx:{mb:3}}))}}),Object(Q.jsx)(Z.a,{label:"End date",value:a.endDate,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return Object(H.a)(e)?i("endDate",e):null},renderInput:function(e){return Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({},e),{},{size:"small",fullWidth:!0,error:Boolean(r.endDate&&n.endDate),helperText:r.endDate&&n.endDate,sx:{mb:3}}))}})]}),Object(Q.jsx)(p.a,{name:"surveyQuestions",render:function(e){return Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Questions",action:Object(Q.jsx)(y.a,{variant:"contained",startIcon:Object(Q.jsx)(oe.a,{icon:le.a}),onClick:function(){return e.push(be)},children:"Add New"})}),Object(Q.jsx)(U.a,{children:Object(Q.jsx)(f.a,{spacing:2,children:a.surveyQuestions.map((function(e,t){return console.log("question index: ",t),Object(Q.jsxs)(g.a,{children:[Object(Q.jsx)(V.a,{title:"Question ".concat(t+1),titleTypographyProps:{variant:"h8"}}),Object(Q.jsx)(U.a,{children:Object(Q.jsxs)(f.a,{spacing:1,children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Title"},c("surveyQuestions.".concat(t,".title"))),{},{error:Boolean(Object(p.d)(r,"surveyQuestions.".concat(t,".title"))&&Object(p.d)(n,"surveyQuestions.".concat(t,".title"))),helperText:Object(p.d)(r,"surveyQuestions.".concat(t,".title"))&&Object(p.d)(n,"surveyQuestions.".concat(t,".title"))})),Object(Q.jsx)(p.a,{name:"surveyQuestions.".concat(t,".options"),render:function(e){return Object(Q.jsxs)(Q.Fragment,{children:[a.surveyQuestions[t].options.map((function(a,i){var o="surveyQuestions.".concat(t,".options.").concat(i);return Object(Q.jsxs)(f.a,{direction:"row",spacing:1,children:[Object(Q.jsx)(W.a,Object(I.a)(Object(I.a)({fullWidth:!0,size:"small",label:"Option ".concat(i+1)},c(o)),{},{error:Boolean(Object(p.d)(r,o)&&Object(p.d)(n,o)),helperText:Object(p.d)(r,o)&&Object(p.d)(n,o)})),Object(Q.jsx)(ue.a,{color:"error","aria-label":"delete",onClick:function(){return e.remove(i)},children:Object(Q.jsx)(de.a,{})})]},i)})),Object(Q.jsx)(ue.a,{color:"primary","aria-label":"plus",onClick:function(){return e.push("")},children:Object(Q.jsx)(je.a,{})})]})}})]})})]},t)}))})})]})}})]})})})},he=["Campaign Type","Task & Rewards","Task Detail"],pe={title:"",options:[""]};var xe=function(e){var t=e.isEdit,n=e.currentCampaign,r=Object(a.h)(),c=Object(h.useSnackbar)().enqueueSnackbar,o=Object(O.useState)(0),s=Object(u.a)(o,2),l=s[0],C=s[1],I=Object(O.useState)("Task"),R=Object(u.a)(I,2),W=R[0],z=R[1],q={0:{Task:T,Contest:T,Survey:T,"Watch Ad":T,Campaign:T},1:{Task:D,Contest:w,Survey:P,"Watch Ad":b.f(),Campaign:b.f()},2:{Task:k,Contest:B,Survey:b.f(),"Watch Ad":b.f(),Campaign:b.f()}},U=function(){return l===he.length-1},A=Object(p.e)({enableReinitialize:!0,initialValues:{brand:(null===n||void 0===n?void 0:n.brand)||"",campaignType:(null===n||void 0===n?void 0:n.campaignType)||"Task",name:(null===n||void 0===n?void 0:n.name)||"",taskType:(null===n||void 0===n?void 0:n.taskType)||"",totalBudget:(null===n||void 0===n?void 0:n.totalBudget)||void 0,perUser:(null===n||void 0===n?void 0:n.perUser)||"",starPerUser:(null===n||void 0===n?void 0:n.starPerUser)||void 0,continueAfterBudget:(null===n||void 0===n?void 0:n.continueAfterBudget)||"",tier:(null===n||void 0===n?void 0:n.tier)||"",isPublic:(null===n||void 0===n?void 0:n.isPublic)||!1,headerImage:(null===n||void 0===n?void 0:n.headerImage)||void 0,doList:(null===n||void 0===n?void 0:n.doList)||[""],dontList:(null===n||void 0===n?void 0:n.dontList)||[""],igCaptionQuestions:(null===n||void 0===n?void 0:n.igCaptionQuestions)||[""],noOfPhotoRequired:(null===n||void 0===n?void 0:n.noOfPhotoRequired)||void 0,noOfVideoRequired:(null===n||void 0===n?void 0:n.noOfVideoRequired)||void 0,hashtags:(null===n||void 0===n?void 0:n.hashtags)||[],mentions:(null===n||void 0===n?void 0:n.mentions)||[],startDate:(null===n||void 0===n?void 0:n.startDate)?new Date(n.startDate):null,endDate:(null===n||void 0===n?void 0:n.endDate)?new Date(n.endDate):null,surveyQuestions:(null===n||void 0===n?void 0:n.surveyQuestions)||[pe],percentageColor:(null===n||void 0===n?void 0:n.percentageColor)||""},validationSchema:q[l][W],onSubmit:function(){var e=Object(j.a)(d.a.mark((function e(n,a){var o,s,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a.setSubmitting,s=a.resetForm,l=a.setErrors,U())try{alert(JSON.stringify(n)),s(),o(!1),c(t?"Update success":"Create success",{variant:"success"}),r(i.b.task.list)}catch(d){console.error(d),o(!1),l(d)}else C((function(e){return e+1}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),L=A.errors,F=A.values,E=A.handleSubmit,V=A.isSubmitting;return console.log("Active Step: ",l),console.log("*** ",F,L),Object(Q.jsx)(p.c,{value:A,children:Object(Q.jsxs)(p.b,{noValidate:!0,autoComplete:"off",onSubmit:E,children:[Object(Q.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(Q.jsx)(m.a,{item:!0,xs:12,md:8,sx:{mb:5},children:Object(Q.jsx)(S.a,{steps:he,activeStep:l})})}),Object(Q.jsx)(g.a,{sx:{p:3},children:Object(Q.jsxs)(f.a,{spacing:3,children:[{0:{Task:Object(Q.jsx)(M,{formik:A,onCampaignTypeChange:function(e){return z(e)}}),Contest:Object(Q.jsx)(M,{formik:A,onCampaignTypeChange:function(e){return z(e)}}),Survey:Object(Q.jsx)(M,{formik:A,onCampaignTypeChange:function(e){return z(e)}}),"Watch Ad":Object(Q.jsx)(M,{formik:A,onCampaignTypeChange:function(e){return z(e)}}),Campaign:Object(Q.jsx)(M,{formik:A,onCampaignTypeChange:function(e){return z(e)}})},1:{Task:Object(Q.jsx)(_,{formik:A}),Contest:Object(Q.jsx)(re,{formik:A}),Survey:Object(Q.jsx)(Oe,{formik:A}),"Watch Ad":Object(Q.jsx)("div",{children:"Watch ad Form"}),Campaign:Object(Q.jsx)("div",{children:"Campaign Form"})},2:{Task:Object(Q.jsx)(ae,{formik:A}),Contest:Object(Q.jsx)(ce,{formik:A}),Survey:Object(Q.jsx)("div",{children:"Survey Detail Form"}),"Watch Ad":Object(Q.jsx)("div",{children:"Watch ad Form"}),Campaign:Object(Q.jsx)("div",{children:"Watch ad Form"})}}[l][W],Object(Q.jsxs)(v.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:[0!==l&&Object(Q.jsx)(y.a,{sx:{mr:2},variant:"outlined",onClick:U()?function(){return console.log("Draft Clicked")}:function(){return C((function(e){return e-1}))},children:U()?"Draft":"Back"}),Object(Q.jsx)(x.a,{type:"submit",variant:"contained",loading:V,children:U()?"Setup Complete":"Next"})]})]})})]})})};t.default=function(){var e=Object(c.a)().themeStretch,t=Object(a.g)().pathname,n=Object(a.i)().name,l=t.includes("edit");return Object(Q.jsx)(o.a,{title:"Campaign: Create a new campaign",children:Object(Q.jsxs)(r.a,{maxWidth:!e&&"lg",children:[Object(Q.jsx)(s.a,{heading:l?"Edit Campaign":"Create Campaign",links:[{name:"Campaign",href:i.b.campaign.list.all},{name:l?n:"Create Campaign"}]}),Object(Q.jsx)(xe,{isEdit:l,currentCampaign:{}})]})})}},690:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(174),r=n(698),i=n.n(r);function c(e){return Object(a.replace)(i()(e).format("0.00a"),".00","")}function o(e){return i()(e).format("0.0 b")}},691:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),r=n(32),i=n(174),c=n(638),o=n(226),s=n(227),l=n(663),d=n(38),j=n(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,O=e.moreLink,h=void 0===O?[]:O,p=e.sx,x=Object(r.a)(e,u);return Object(j.jsxs)(c.a,{sx:p,mb:5,spacing:2,children:[Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(d.a,Object(a.a)({links:t},x))]}),n&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(i.isString)(h)?Object(j.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},695:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var a=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,r=/^[a-zA-Z0-9 ]*$/,i=/^[a-zA-Z ]*$/},697:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return k}));var a=n(3),r=n(32),i=n(5),c=n(174),o=n(22),s=n(692),l=(n(705),n(152),n(655),n(644),n(7)),d=n(60),j=n(666),u=n(226),b=n(227),O=(n(677),n(2311),n(640),n(641),n(2312),n(638),n(671),n(690)),h=(n(38),n(153),n(283)),p=n(0);Object(l.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));var x=["error","file","sx"],m=Object(l.a)("div")((function(e){var t=e.theme;return Object(i.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function g(e){var t=e.error,n=e.file,i=e.sx,o=Object(r.a)(e,x),l=Object(s.a)(Object(a.a)({multiple:!1},o)),g=l.getRootProps,f=l.getInputProps,v=l.isDragActive,y=l.isDragReject,C=l.fileRejections,T=function(){return Object(p.jsx)(j.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(d.a)(e.palette.error.main,.08)}},children:C.map((function(e){var t=e.file,n=e.errors,a=t.path,r=t.size;return Object(p.jsxs)(u.a,{sx:{my:1},children:[Object(p.jsxs)(b.a,{variant:"subtitle2",noWrap:!0,children:[a," - ",Object(O.a)(r)]}),n.map((function(e){return Object(p.jsxs)(b.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},a)}))})};return Object(p.jsxs)(u.a,{sx:Object(a.a)({width:"100%"},i),children:[Object(p.jsxs)(m,Object(a.a)(Object(a.a)({},g()),{},{sx:Object(a.a)(Object(a.a)(Object(a.a)({},v&&{opacity:.72}),(y||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),n&&{padding:"12% 0"}),children:[Object(p.jsx)("input",Object(a.a)({},f())),Object(p.jsx)(h.b,{sx:{width:220}}),Object(p.jsxs)(u.a,{sx:{p:3,ml:{md:2}},children:[Object(p.jsx)(b.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(p.jsxs)(b.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(p.jsx)(b.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]}),n&&Object(p.jsx)(u.a,{component:"img",alt:"file preview",src:Object(c.isString)(n)?n:n.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),C.length>0&&Object(p.jsx)(T,{})]})}var f=n(706),v=n.n(f),y=["error","file","caption","sx"],C=Object(l.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),T=Object(l.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),D=Object(l.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function k(e){var t=e.error,n=e.file,i=e.caption,l=e.sx,h=Object(r.a)(e,y),x=Object(s.a)(Object(a.a)({multiple:!1},h)),m=x.getRootProps,g=x.getInputProps,f=x.isDragActive,k=x.isDragReject,w=x.fileRejections,B=function(){return Object(p.jsx)(j.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(d.a)(e.palette.error.main,.08)}},children:w.map((function(e){var t=e.file,n=e.errors,a=t.path,r=t.size;return Object(p.jsxs)(u.a,{sx:{my:1},children:[Object(p.jsxs)(b.a,{variant:"subtitle2",noWrap:!0,children:[a," - ",Object(O.a)(r)]}),n.map((function(e){return Object(p.jsxs)(b.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},a)}))})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{sx:l,children:Object(p.jsxs)(T,Object(a.a)(Object(a.a)({},m()),{},{sx:Object(a.a)(Object(a.a)({},f&&{opacity:.72}),(k||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(p.jsx)("input",Object(a.a)({},g())),n&&Object(p.jsx)(u.a,{component:"img",alt:"avatar",src:Object(c.isString)(n)?n:n.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(p.jsxs)(D,{className:"placeholder",sx:Object(a.a)({},n&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(p.jsx)(u.a,{component:o.a,icon:v.a,sx:{width:24,height:24,mb:1}}),Object(p.jsx)(b.a,{variant:"caption",children:n?"Update photo":"Upload photo"})]})]}))}),i,w.length>0&&Object(p.jsx)(B,{})]})}},707:function(e,t,n){"use strict";var a=n(3),r=n(747),i=n(711),c=n(638),o=n(681),s=n(668),l=n(0);t.a=function(e){var t=e.label,n=e.fieldProps,d=e.error,j=e.helperText,u=e.isLastItem,b=e.onAddClick,O=e.onRemoveClick;return Object(l.jsxs)(c.a,{direction:"row",spacing:1,children:[Object(l.jsx)(o.a,Object(a.a)(Object(a.a)({fullWidth:!0,size:"small",label:t},n),{},{error:d,helperText:j})),u?Object(l.jsx)(s.a,{color:"primary",onClick:b,children:Object(l.jsx)(r.a,{})}):Object(l.jsx)(s.a,{color:"error",onClick:O,children:Object(l.jsx)(i.a,{})})]})}},716:function(e,t,n){"use strict";n(1);var a=n(22),r=n(741),i=n.n(r),c=n(635),o=n(2313),s=n(226),l=n(2314),d=n(2315),j=n(2299),u=n(0),b=Object(c.a)((function(e){return{alternativeLabel:{top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{"& $line":{borderColor:e.palette.primary.main}},completed:{"& $line":{borderColor:e.palette.primary.main}},line:{borderTopWidth:2,borderColor:e.palette.divider}}}))(o.a);function O(e){var t=e.active,n=e.completed;return Object(u.jsx)(s.a,{sx:{zIndex:9,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",color:t?"primary.main":"divider",bgcolor:"background.default"},children:n?Object(u.jsx)(s.a,{component:a.a,icon:i.a,sx:{zIndex:1,width:20,height:20,color:"primary.main"}}):Object(u.jsx)(s.a,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}t.a=function(e){var t=e.steps,n=e.activeStep;return Object(u.jsx)(l.a,{alternativeLabel:!0,activeStep:n,connector:Object(u.jsx)(b,{}),children:t.map((function(e){return Object(u.jsx)(d.a,{children:Object(u.jsx)(j.a,{StepIconComponent:O,sx:{"& .MuiStepLabel-label":{typography:"subtitle2",color:"text.disabled"}},children:e})},e)}))})}}}]);
//# sourceMappingURL=13.5969d907.chunk.js.map
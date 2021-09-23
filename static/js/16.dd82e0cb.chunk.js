(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[16],{2296:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(24),o=a(695),i=a.n(o),c=a(690),s=a(673),l=a(228),d=a(64),b=a(20),u=a(284),j=a(693),p=a(728),v=a(0);t.default=function(){var e=Object(d.a)().themeStretch;return Object(v.jsx)(u.a,{title:"Bonus: List",children:Object(v.jsxs)(c.a,{maxWidth:!e&&"lg",children:[Object(v.jsx)(j.a,{heading:"Bonus List",links:[{name:"Bonus",href:b.b.bonus.list},{name:"List"}],action:Object(v.jsx)(s.a,{variant:"contained",component:n.b,to:b.b.bonus.create,startIcon:Object(v.jsx)(r.a,{icon:i.a}),children:"New Bonus"})}),Object(v.jsx)(l.a,{sx:{height:720},children:Object(v.jsx)(p.a,{bonusList:[{name:"Bonus 1",availableQuantity:200,brand:"Riddim",value:"100"},{name:"Bonus 2",availableQuantity:15,brand:"Adidas",value:"250"},{name:"Bonus 3",availableQuantity:100,brand:"Nike",value:"75"}]})})]})})}},693:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(3),r=a(33),o=a(176),i=a(640),c=a(228),s=a(229),l=a(665),d=a(39),b=a(0),u=["links","action","heading","moreLink","sx"];function j(e){var t=e.links,a=e.action,j=e.heading,p=e.moreLink,v=void 0===p?[]:p,O=e.sx,h=Object(r.a)(e,u);return Object(b.jsxs)(i.a,{sx:O,mb:5,spacing:2,children:[Object(b.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(b.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:j}),Object(b.jsx)(d.a,Object(n.a)({links:t},h))]}),a&&Object(b.jsx)(c.a,{sx:{flexShrink:0},children:a})]}),Object(o.isString)(v)?Object(b.jsx)(l.a,{href:v,target:"_blank",variant:"body2",children:v}):v.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},694:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},695:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},699:function(e,t,a){"use strict";var n=a(1),r=n.createContext();t.a=r},713:function(e,t,a){"use strict";var n=a(2),r=a(4),o=a(1),i=(a(9),a(11)),c=a(151),s=a(694),l=a(12),d=a(7),b=a(103),u=a(127);function j(e){return Object(b.a)("MuiTableHead",e)}Object(u.a)("MuiTableHead",["root"]);var p=a(0),v=["className","component"],O=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),h={variant:"head"},f="thead",g=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),o=a.className,d=a.component,b=void 0===d?f:d,u=Object(r.a)(a,v),g=Object(n.a)({},a,{component:b}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(g);return Object(p.jsx)(s.a.Provider,{value:h,children:Object(p.jsx)(O,Object(n.a)({as:b,className:Object(i.default)(m.root,o),ref:t,role:b===f?null:"rowgroup",styleProps:g},u))})}));t.a=g},714:function(e,t,a){"use strict";var n=a(5),r=a(2),o=a(4),i=a(1),c=(a(9),a(11)),s=a(151),l=a(61),d=a(694),b=a(12),u=a(7),j=a(103),p=a(127);function v(e){return Object(j.a)("MuiTableRow",e)}var O=Object(p.a)("MuiTableRow",["root","selected","hover","head","footer"]),h=a(0),f=["className","component","hover","selected"],g=Object(u.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(n.a)(t,"&.".concat(O.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(n.a)(t,"&.".concat(O.selected),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),m=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),n=a.className,l=a.component,u=void 0===l?"tr":l,j=a.hover,p=void 0!==j&&j,O=a.selected,m=void 0!==O&&O,y=Object(o.a)(a,f),x=i.useContext(d.a),k=Object(r.a)({},a,{component:u,hover:p,selected:m,head:x&&"head"===x.variant,footer:x&&"footer"===x.variant}),R=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,v,t)}(k);return Object(h.jsx)(g,Object(r.a)({as:u,ref:t,className:Object(c.default)(R.root,n),role:"tr"===u?null:"row",styleProps:k},y))}));t.a=m},715:function(e,t,a){"use strict";var n=a(2),r=a(4),o=a(1),i=(a(9),a(11)),c=a(151),s=a(12),l=a(7),d=a(103),b=a(127);function u(e){return Object(d.a)("MuiTableContainer",e)}Object(b.a)("MuiTableContainer",["root"]);var j=a(0),p=["className","component"],v=Object(l.a)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),O=o.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),o=a.className,l=a.component,d=void 0===l?"div":l,b=Object(r.a)(a,p),O=Object(n.a)({},a,{component:d}),h=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(O);return Object(j.jsx)(v,Object(n.a)({ref:t,as:d,className:Object(i.default)(h.root,o),styleProps:O},b))}));t.a=O},716:function(e,t,a){"use strict";var n=a(4),r=a(2),o=a(1),i=(a(9),a(11)),c=a(151),s=a(699),l=a(12),d=a(7),b=a(103),u=a(127);function j(e){return Object(b.a)("MuiTable",e)}Object(u.a)("MuiTable",["root","stickyHeader"]);var p=a(0),v=["className","component","padding","size","stickyHeader"],O=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.styleProps;return Object(r.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),h="table",f=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,u=void 0===b?h:b,f=a.padding,g=void 0===f?"normal":f,m=a.size,y=void 0===m?"medium":m,x=a.stickyHeader,k=void 0!==x&&x,R=Object(n.a)(a,v),M=Object(r.a)({},a,{component:u,padding:g,size:y,stickyHeader:k}),w=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(c.a)(a,j,t)}(M),T=o.useMemo((function(){return{padding:g,size:y,stickyHeader:k}}),[g,y,k]);return Object(p.jsx)(s.a.Provider,{value:T,children:Object(p.jsx)(O,Object(r.a)({as:u,role:u===h?null:"table",ref:t,className:Object(i.default)(w.root,d),styleProps:M},R))})}));t.a=f},717:function(e,t,a){"use strict";var n=a(2),r=a(4),o=a(1),i=(a(9),a(11)),c=a(151),s=a(694),l=a(12),d=a(7),b=a(103),u=a(127);function j(e){return Object(b.a)("MuiTableBody",e)}Object(u.a)("MuiTableBody",["root"]);var p=a(0),v=["className","component"],O=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),h={variant:"body"},f="tbody",g=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),o=a.className,d=a.component,b=void 0===d?f:d,u=Object(r.a)(a,v),g=Object(n.a)({},a,{component:b}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(g);return Object(p.jsx)(s.a.Provider,{value:h,children:Object(p.jsx)(O,Object(n.a)({className:Object(i.default)(m.root,o),as:b,ref:t,role:b===f?null:"rowgroup",styleProps:g},u))})}));t.a=g},728:function(e,t,a){"use strict";var n=a(715),r=a(716),o=a(713),i=a(714),c=a(732),s=a(717),l=a(181),d=a(0),b=[{id:"name",label:"Name",alignRight:!1},{id:"brand",label:"Brand",alignRight:!1},{id:"availableQuantity",label:"Available Quantity",alignRight:!1},{id:"value",label:"Value ($)",alignRight:!1}];t.a=function(e){var t=e.bonusList,a=void 0===t?[]:t;return Object(d.jsx)(l.a,{children:Object(d.jsx)(n.a,{sx:{minWidth:800},children:Object(d.jsxs)(r.a,{"aria-label":"bonus table",children:[Object(d.jsx)(o.a,{children:Object(d.jsx)(i.a,{children:b.map((function(e){return Object(d.jsx)(c.a,{align:e.alignRight?"right":"left",children:e.label},e.id)}))})}),Object(d.jsx)(s.a,{children:a.map((function(e){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(c.a,{children:e.name}),Object(d.jsx)(c.a,{children:e.brand}),Object(d.jsx)(c.a,{children:e.availableQuantity}),Object(d.jsx)(c.a,{children:e.value})]},e.name)}))})]})})})}},732:function(e,t,a){"use strict";var n=a(5),r=a(4),o=a(2),i=a(1),c=(a(9),a(11)),s=a(151),l=a(61),d=a(14),b=a(699),u=a(694),j=a(12),p=a(7),v=a(103),O=a(127);function h(e){return Object(v.a)("MuiTableCell",e)}var f=Object(O.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),g=a(0),m=["align","className","component","padding","scope","size","sortDirection","variant"],y=Object(p.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.styleProps;return Object(o.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.i)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(n.a)({padding:"6px 16px"},"&.".concat(f.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),x=i.forwardRef((function(e,t){var a,n=Object(j.a)({props:e,name:"MuiTableCell"}),l=n.align,p=void 0===l?"inherit":l,v=n.className,O=n.component,f=n.padding,x=n.scope,k=n.size,R=n.sortDirection,M=n.variant,w=Object(r.a)(n,m),T=i.useContext(b.a),H=i.useContext(u.a),C=H&&"head"===H.variant;a=O||(C?"th":"td");var N=x;!N&&C&&(N="col");var z=M||H&&H.variant,B=Object(o.a)({},n,{align:p,component:a,padding:f||(T&&T.padding?T.padding:"normal"),size:k||(T&&T.size?T.size:"medium"),sortDirection:R,stickyHeader:"head"===z&&T&&T.stickyHeader,variant:z}),P=function(e){var t=e.classes,a=e.variant,n=e.align,r=e.padding,o=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat(Object(d.a)(n)),"normal"!==r&&"padding".concat(Object(d.a)(r)),"size".concat(Object(d.a)(o))]};return Object(s.a)(i,h,t)}(B),A=null;return R&&(A="asc"===R?"ascending":"descending"),Object(g.jsx)(y,Object(o.a)({as:a,ref:t,className:Object(c.default)(P.root,v),"aria-sort":A,scope:N,styleProps:B},w))}));t.a=x}}]);
//# sourceMappingURL=16.dd82e0cb.chunk.js.map
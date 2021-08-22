/*! For license information please see 3.79e14e16.chunk.js.LICENSE.txt */
(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[3],{677:function(e,t,r){var n,o;void 0===(o="function"===typeof(n=function(){var e,t,r="2.0.6",n={},o={},a={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},i={currentLocale:a.currentLocale,zeroFormat:a.zeroFormat,nullFormat:a.nullFormat,defaultFormat:a.defaultFormat,scalePercentBy100:a.scalePercentBy100};function c(e,t){this._input=e,this._value=t}return(e=function(r){var o,a,l,s;if(e.isNumeral(r))o=r.value();else if(0===r||"undefined"===typeof r)o=0;else if(null===r||t.isNaN(r))o=null;else if("string"===typeof r)if(i.zeroFormat&&r===i.zeroFormat)o=0;else if(i.nullFormat&&r===i.nullFormat||!r.replace(/[^0-9]+/g,"").length)o=null;else{for(a in n)if((s="function"===typeof n[a].regexps.unformat?n[a].regexps.unformat():n[a].regexps.unformat)&&r.match(s)){l=n[a].unformat;break}o=(l=l||e._.stringToNumber)(r)}else o=Number(r)||null;return new c(r,o)}).version=r,e.isNumeral=function(e){return e instanceof c},e._=t={numberToFormat:function(t,r,n){var a,i,c,l,s,u,f,d=o[e.options.currentLocale],p=!1,b=!1,m=0,h="",g=1e12,v=1e9,y=1e6,O=1e3,j="",w=!1;if(t=t||0,i=Math.abs(t),e._.includes(r,"(")?(p=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(s=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(a=!!(a=r.match(/a(k|m|b|t)?/))&&a[1],e._.includes(r," a")&&(h=" "),r=r.replace(new RegExp(h+"a[kmbt]?"),""),i>=g&&!a||"t"===a?(h+=d.abbreviations.trillion,t/=g):i<g&&i>=v&&!a||"b"===a?(h+=d.abbreviations.billion,t/=v):i<v&&i>=y&&!a||"m"===a?(h+=d.abbreviations.million,t/=y):(i<y&&i>=O&&!a||"k"===a)&&(h+=d.abbreviations.thousand,t/=O)),e._.includes(r,"[.]")&&(b=!0,r=r.replace("[.]",".")),c=t.toString().split(".")[0],l=r.split(".")[1],u=r.indexOf(","),m=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),j=e._.toFixed(t,l[0].length+l[1].length,n,l[1].length)):j=e._.toFixed(t,l.length,n),c=j.split(".")[0],j=e._.includes(j,".")?d.delimiters.decimal+j.split(".")[1]:"",b&&0===Number(j.slice(1))&&(j="")):c=e._.toFixed(t,0,n),h&&!a&&Number(c)>=1e3&&h!==d.abbreviations.trillion)switch(c=String(Number(c)/1e3),h){case d.abbreviations.thousand:h=d.abbreviations.million;break;case d.abbreviations.million:h=d.abbreviations.billion;break;case d.abbreviations.billion:h=d.abbreviations.trillion}if(e._.includes(c,"-")&&(c=c.slice(1),w=!0),c.length<m)for(var x=m-c.length;x>0;x--)c="0"+c;return u>-1&&(c=c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===r.indexOf(".")&&(c=""),f=c+j+(h||""),p?f=(p&&w?"(":"")+f+(p&&w?")":""):s>=0?f=0===s?(w?"-":"+")+f:f+(w?"-":"+"):w&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,a=o[i.currentLocale],c=e,l={thousand:3,million:6,billion:9,trillion:12};if(i.zeroFormat&&e===i.zeroFormat)r=0;else if(i.nullFormat&&e===i.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==a.delimiters.decimal&&(e=e.replace(/\./g,"").replace(a.delimiters.decimal,".")),l)if(n=new RegExp("[^a-zA-Z]"+a.abbreviations[t]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),c.match(n)){r*=Math.pow(10,l[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return"number"===typeof e&&isNaN(e)})),includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,a=0;if(3===arguments.length)r=arguments[2];else{for(;a<o&&!(a in n);)a++;if(a>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[a++]}for(;a<o;a++)a in n&&(r=t(r,n[a],a,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var o,a,i,c,l=e.toString().split("."),s=t-(n||0);return o=2===l.length?Math.min(Math.max(l[1].length,s),t):s,i=Math.pow(10,o),c=(r(e+"e+"+o)/i).toFixed(o),n>t-o&&(a=new RegExp("\\.?0{1,"+(n-(t-o))+"}$"),c=c.replace(a,"")),c}},e.options=i,e.formats=n,e.locales=o,e.locale=function(e){return e&&(i.currentLocale=e.toLowerCase()),i.currentLocale},e.localeData=function(e){if(!e)return o[i.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},e.reset=function(){for(var e in a)i[e]=a[e]},e.zeroFormat=function(e){i.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){i.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){i.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,o,a,i,c,l,s,u;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(r)}catch(f){s=e.localeData(e.locale())}return a=s.currency.symbol,c=s.abbreviations,n=s.delimiters.decimal,o="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(u=t.match(/^[^\d]+/))||(t=t.substr(1),u[0]===a))&&(null===(u=t.match(/[^\d]+$/))||(t=t.slice(0,-1),u[0]===c.thousand||u[0]===c.million||u[0]===c.billion||u[0]===c.trillion))&&(l=new RegExp(o+"{2}"),!t.match(/[^\d.,]/g)&&!((i=t.split(n)).length>2)&&(i.length<2?!!i[0].match(/^\d+.*\d$/)&&!i[0].match(l):1===i[0].length?!!i[0].match(/^\d+$/)&&!i[0].match(l)&&!!i[1].match(/^\d+$/):!!i[0].match(/^\d+.*\d$/)&&!i[0].match(l)&&!!i[1].match(/^\d+$/)))},e.fn=c.prototype={clone:function(){return e(this)},format:function(t,r){var o,a,c,l=this._value,s=t||i.defaultFormat;if(r=r||Math.round,0===l&&null!==i.zeroFormat)a=i.zeroFormat;else if(null===l&&null!==i.nullFormat)a=i.nullFormat;else{for(o in n)if(s.match(n[o].regexps.format)){c=n[o].format;break}a=(c=c||e._.numberToFormat)(l,s,r)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,o){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,o){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,o){var a=t.correctionFactor(e,r);return Math.round(e*a)*Math.round(r*a)/Math.round(a*a)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,o){var a=t.correctionFactor(e,r);return Math.round(e*a)/Math.round(r*a)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var o,a=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,a+"BPS"),o=o.join("")):o=o+a+"BPS",o},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=t.suffixes.concat(r.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(n,o,a){var i,c,l,s=e._.includes(o,"ib")?r:t,u=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),i=0;i<=s.suffixes.length;i++)if(c=Math.pow(s.base,i),l=Math.pow(s.base,i+1),null===n||0===n||n>=c&&n<l){u+=s.suffixes[i],c>0&&(n/=c);break}return e._.numberToFormat(n,o,a)+u},unformat:function(n){var o,a,i=e._.stringToNumber(n);if(i){for(o=t.suffixes.length-1;o>=0;o--){if(e._.includes(n,t.suffixes[o])){a=Math.pow(t.base,o);break}if(e._.includes(n,r.suffixes[o])){a=Math.pow(r.base,o);break}}i*=a||1}return i}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var o,a,i=e.locales[e.options.currentLocale],c={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),o=e._.numberToFormat(t,r,n),t>=0?(c.before=c.before.replace(/[\-\(]/,""),c.after=c.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(c.before,"-")&&!e._.includes(c.before,"(")&&(c.before="-"+c.before),a=0;a<c.before.length;a++)switch(c.before[a]){case"$":o=e._.insert(o,i.currency.symbol,a);break;case" ":o=e._.insert(o," ",a+i.currency.symbol.length-1)}for(a=c.after.length-1;a>=0;a--)switch(c.after[a]){case"$":o=a===c.after.length-1?o+i.currency.symbol:e._.insert(o,i.currency.symbol,-(c.after.length-(1+a)));break;case" ":o=a===c.after.length-1?o+" ":e._.insert(o," ",-(c.after.length-(1+a)+i.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var o=("number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),r,n)+"e"+o[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),o=Number(r[1]);function a(t,r,n,o){var a=e._.correctionFactor(t,r);return t*a*(r*a)/(a*a)}return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],a,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var o=e.locales[e.options.currentLocale],a=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),a+=o.ordinal(t),e._.numberToFormat(t,r,n)+a}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var o,a=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,a+"%"),o=o.join("")):o=o+a+"%",o},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),a=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(a<10?"0"+a:a)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e})?n.call(t,r,t,e):n)||(e.exports=o)},679:function(e,t,r){"use strict";var n=r(390);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(391)),a=r(0),i=(0,o.default)((0,a.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=i},681:function(e,t,r){"use strict";r.d(t,"a",(function(){return Q}));var n=r(1),o=r.n(n),a=r(8),i=r.n(a);function c(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(t){a(t)}}function c(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}Object.create;function s(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}Object.create;var u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function f(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=u.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof t?t:"string"===typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var d=[".DS_Store","Thumbs.db"];function p(e){return(null!==e.target&&e.target.files?h(e.target.files):[]).map((function(e){return f(e)}))}function b(e,t){return c(this,void 0,void 0,(function(){var r;return l(this,(function(n){switch(n.label){case 0:return e.items?(r=h(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(g))]):[3,2];case 1:return[2,m(v(n.sent()))];case 2:return[2,m(h(e.files).map((function(e){return f(e)})))]}}))}))}function m(e){return e.filter((function(e){return-1===d.indexOf(e.name)}))}function h(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function g(e){if("function"!==typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?j(t):y(e)}function v(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}(e,Array.isArray(t)?v(t):[t])}),[])}function y(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var r=f(t);return Promise.resolve(r)}function O(e){return c(this,void 0,void 0,(function(){return l(this,(function(t){return[2,e.isDirectory?j(e):w(e)]}))}))}function j(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function o(){var a=this;t.readEntries((function(t){return c(a,void 0,void 0,(function(){var a,i,c;return l(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return a=l.sent(),e(a),[3,4];case 3:return i=l.sent(),r(i),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(O)),n.push(c),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function w(e){return c(this,void 0,void 0,(function(){return l(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=f(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var x=r(683),F=r.n(x);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},P=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},A=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},_={code:"too-many-files",message:"Too many files"};function C(e,t){var r="application/x-moz-file"===e.type||F()(e,t);return[r,r?null:S(t)]}function M(e,t,r){if(z(e.size))if(z(t)&&z(r)){if(e.size>r)return[!1,P(r)];if(e.size<t)return[!1,A(t)]}else{if(z(t)&&e.size<t)return[!1,A(t)];if(z(r)&&e.size>r)return[!1,P(r)]}return[!0,null]}function z(e){return void 0!==e&&null!==e}function N(e){var t=e.files,r=e.accept,n=e.minSize,o=e.maxSize,a=e.multiple,i=e.maxFiles;return!(!a&&t.length>1||a&&i>=1&&t.length>i)&&t.every((function(e){var t=k(C(e,r),1)[0],a=k(M(e,n,o),1)[0];return t&&a}))}function E(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function B(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function R(e){e.preventDefault()}function I(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function L(e){return-1!==e.indexOf("Edge/")}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return I(e)||L(e)}function $(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.some((function(t){return!E(e)&&t&&t.apply(void 0,[e].concat(n)),E(e)}))}}function G(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||K(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"===typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var J=Object(n.forwardRef)((function(e,t){var r=e.children,a=Q(q(e,["children"])),i=a.open,c=q(a,["open"]);return Object(n.useImperativeHandle)(t,(function(){return{open:i}}),[i]),o.a.createElement(n.Fragment,null,r(Y(Y({},c),{},{open:i})))}));J.displayName="Dropzone";var W={disabled:!1,getFilesFromEvent:function(e){return c(this,void 0,void 0,(function(){return l(this,(function(t){return[2,(r=e,r.dataTransfer&&e.dataTransfer?b(e.dataTransfer,e.type):p(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};J.defaultProps=W,J.propTypes={children:i.a.func,accept:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),multiple:i.a.bool,preventDropOnDocument:i.a.bool,noClick:i.a.bool,noKeyboard:i.a.bool,noDrag:i.a.bool,noDragEventsBubbling:i.a.bool,minSize:i.a.number,maxSize:i.a.number,maxFiles:i.a.number,disabled:i.a.bool,getFilesFromEvent:i.a.func,onFileDialogCancel:i.a.func,onDragEnter:i.a.func,onDragLeave:i.a.func,onDragOver:i.a.func,onDrop:i.a.func,onDropAccepted:i.a.func,onDropRejected:i.a.func,validator:i.a.func};var X={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Y(Y({},W),e),r=t.accept,o=t.disabled,a=t.getFilesFromEvent,i=t.maxSize,c=t.minSize,l=t.multiple,s=t.maxFiles,u=t.onDragEnter,f=t.onDragLeave,d=t.onDragOver,p=t.onDrop,b=t.onDropAccepted,m=t.onDropRejected,h=t.onFileDialogCancel,g=t.preventDropOnDocument,v=t.noClick,y=t.noKeyboard,O=t.noDrag,j=t.noDragEventsBubbling,w=t.validator,x=Object(n.useRef)(null),F=Object(n.useRef)(null),k=Object(n.useReducer)(ee,X),D=V(k,2),S=D[0],P=D[1],A=S.isFocused,z=S.isFileDialogActive,I=S.draggedFiles,L=Object(n.useCallback)((function(){F.current&&(P({type:"openDialog"}),F.current.value=null,F.current.click())}),[P]),K=function(){z&&setTimeout((function(){F.current&&(F.current.files.length||(P({type:"closeDialog"}),"function"===typeof h&&h()))}),300)};Object(n.useEffect)((function(){return window.addEventListener("focus",K,!1),function(){window.removeEventListener("focus",K,!1)}}),[F,z,h]);var H=Object(n.useCallback)((function(e){x.current&&x.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),L()))}),[x,F]),U=Object(n.useCallback)((function(){P({type:"focus"})}),[]),J=Object(n.useCallback)((function(){P({type:"blur"})}),[]),Q=Object(n.useCallback)((function(){v||(T()?setTimeout(L,0):L())}),[F,v]),te=Object(n.useRef)([]),re=function(e){x.current&&x.current.contains(e.target)||(e.preventDefault(),te.current=[])};Object(n.useEffect)((function(){return g&&(document.addEventListener("dragover",R,!1),document.addEventListener("drop",re,!1)),function(){g&&(document.removeEventListener("dragover",R),document.removeEventListener("drop",re))}}),[x,g]);var ne=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),ue(e),te.current=[].concat(G(te.current),[e.target]),B(e)&&Promise.resolve(a(e)).then((function(t){E(e)&&!j||(P({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),u&&u(e))}))}),[a,u,j]),oe=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),ue(e);var t=B(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return t&&d&&d(e),!1}),[d,j]),ae=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),ue(e);var t=te.current.filter((function(e){return x.current&&x.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),te.current=t,t.length>0||(P({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),B(e)&&f&&f(e))}),[x,f,j]),ie=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),ue(e),te.current=[],B(e)&&Promise.resolve(a(e)).then((function(t){if(!E(e)||j){var n=[],o=[];t.forEach((function(e){var t=V(C(e,r),2),a=t[0],l=t[1],s=V(M(e,c,i),2),u=s[0],f=s[1],d=w?w(e):null;if(a&&u&&!d)n.push(e);else{var p=[l,f];d&&(p=p.concat(d)),o.push({file:e,errors:p.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&s>=1&&n.length>s)&&(n.forEach((function(e){o.push({file:e,errors:[_]})})),n.splice(0)),P({acceptedFiles:n,fileRejections:o,type:"setFiles"}),p&&p(n,o,e),o.length>0&&m&&m(o,e),n.length>0&&b&&b(n,e)}})),P({type:"reset"})}),[l,r,c,i,s,a,p,b,m,j,w]),ce=function(e){return o?null:e},le=function(e){return y?null:ce(e)},se=function(e){return O?null:ce(e)},ue=function(e){j&&e.stopPropagation()},fe=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onKeyDown,a=e.onFocus,i=e.onBlur,c=e.onClick,l=e.onDragEnter,s=e.onDragOver,u=e.onDragLeave,f=e.onDrop,d=q(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return Y(Y(Z({onKeyDown:le($(n,H)),onFocus:le($(a,U)),onBlur:le($(i,J)),onClick:ce($(c,Q)),onDragEnter:se($(l,ne)),onDragOver:se($(s,oe)),onDragLeave:se($(u,ae)),onDrop:se($(f,ie))},r,x),o||y?{}:{tabIndex:0}),d)}}),[x,H,U,J,Q,ne,oe,ae,ie,y,O,o]),de=Object(n.useCallback)((function(e){e.stopPropagation()}),[]),pe=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,o=e.onChange,a=e.onClick,i=q(e,["refKey","onChange","onClick"]),c=Z({accept:r,multiple:l,type:"file",style:{display:"none"},onChange:ce($(o,ie)),onClick:ce($(a,de)),autoComplete:"off",tabIndex:-1},n,F);return Y(Y({},c),i)}}),[F,r,l,ie,o]),be=I.length,me=be>0&&N({files:I,accept:r,minSize:c,maxSize:i,multiple:l,maxFiles:s}),he=be>0&&!me;return Y(Y({},S),{},{isDragAccept:me,isDragReject:he,isFocused:A&&!o,getRootProps:fe,getInputProps:pe,rootRef:x,inputRef:F,open:ce(L)})}function ee(e,t){switch(t.type){case"focus":return Y(Y({},e),{},{isFocused:!0});case"blur":return Y(Y({},e),{},{isFocused:!1});case"openDialog":return Y(Y({},e),{},{isFileDialogActive:!0});case"closeDialog":return Y(Y({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=t.isDragActive,n=t.draggedFiles;return Y(Y({},e),{},{draggedFiles:n,isDragActive:r});case"setFiles":return Y(Y({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Y({},X);default:return e}}},683:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),a=o.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):o===t}))}return!0}},684:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 4l3.74 4h-3a.79.79 0 0 1-.74-.85z"/>',width:24,height:24}},685:function(e,t){t.__esModule=!0,t.default={body:'<path d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z" fill="currentColor"/><circle cx="13" cy="14" r="3" fill="currentColor"/><path d="M21 6h-3.17l-1.24-1.35A1.99 1.99 0 0 0 15.12 4h-6.4c.17.3.28.63.28 1c0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2c-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z" fill="currentColor"/>',width:24,height:24}},714:function(e,t,r){"use strict";var n=r(5),o=r(4),a=r(2),i=r(1),c=(r(8),r(9)),l=r(147),s=r(205),u=r(60),f=r(7),d=r(10),p=r(581),b=r(136),m=r(44),h=r(16),g=r(63),v=r(100),y=r(124);function O(e){return Object(v.a)("MuiListItem",e)}var j=Object(y.a)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),w=r(123),x=r(715),F=r(0),k=["className"],D=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],S=Object(f.a)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.button&&t.button,r.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,r=e.theme,o=e.styleProps;return Object(a.a)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&Object(a.a)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&Object(n.a)({},"& > .".concat(w.a.root),{paddingRight:48}),(t={},Object(n.a)(t,"&.".concat(j.focusVisible),{backgroundColor:r.palette.action.focus}),Object(n.a)(t,"&.".concat(j.selected),Object(n.a)({backgroundColor:Object(u.a)(r.palette.primary.main,r.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:Object(u.a)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)})),Object(n.a)(t,"&.".concat(j.disabled),{opacity:r.palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat(r.palette.divider),backgroundClip:"padding-box"},o.button&&Object(n.a)({transition:r.transitions.create("background-color",{duration:r.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:r.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(j.selected,":hover"),{backgroundColor:Object(u.a)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Object(u.a)(r.palette.primary.main,r.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),P=Object(f.a)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),A=i.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiListItem"}),n=r.alignItems,u=void 0===n?"center":n,f=r.autoFocus,v=void 0!==f&&f,y=r.button,w=void 0!==y&&y,A=r.children,_=r.className,C=r.component,M=r.components,z=void 0===M?{}:M,N=r.componentsProps,E=void 0===N?{}:N,B=r.ContainerComponent,R=void 0===B?"li":B,I=r.ContainerProps,L=(I=void 0===I?{}:I).className,T=r.dense,$=void 0!==T&&T,G=r.disabled,V=void 0!==G&&G,K=r.disableGutters,H=void 0!==K&&K,U=r.disablePadding,Y=void 0!==U&&U,Z=r.divider,q=void 0!==Z&&Z,J=r.focusVisibleClassName,W=r.secondaryAction,X=r.selected,Q=void 0!==X&&X,ee=Object(o.a)(r.ContainerProps,k),te=Object(o.a)(r,D),re=i.useContext(g.a),ne={dense:$||re.dense||!1,alignItems:u,disableGutters:H},oe=i.useRef(null);Object(m.a)((function(){v&&oe.current&&oe.current.focus()}),[v]);var ae=i.Children.toArray(A),ie=ae.length&&Object(b.a)(ae[ae.length-1],["ListItemSecondaryAction"]),ce=Object(a.a)({},r,{alignItems:u,autoFocus:v,button:w,dense:ne.dense,disabled:V,disableGutters:H,disablePadding:Y,divider:q,hasSecondaryAction:ie,selected:Q}),le=function(e){var t=e.alignItems,r=e.button,n=e.classes,o=e.dense,a=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",a&&"disabled",r&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return Object(l.a)(i,O,n)}(ce),se=Object(h.a)(oe,t),ue=z.Root||S,fe=E.root||{},de=Object(a.a)({className:Object(c.default)(le.root,fe.className,_),disabled:V},te),pe=C||"li";return w&&(de.component=C||"div",de.focusVisibleClassName=Object(c.default)(j.focusVisible,J),pe=p.a),ie?(pe=de.component||C?pe:"div","li"===R&&("li"===pe?pe="div":"li"===de.component&&(de.component="div")),Object(F.jsx)(g.a.Provider,{value:ne,children:Object(F.jsxs)(P,Object(a.a)({as:R,className:Object(c.default)(le.container,L),ref:se,styleProps:ce},ee,{children:[Object(F.jsx)(ue,Object(a.a)({},fe,!Object(s.a)(ue)&&{as:pe,styleProps:Object(a.a)({},ce,fe.styleProps)},de,{children:ae})),ae.pop()]}))})):Object(F.jsx)(g.a.Provider,{value:ne,children:Object(F.jsxs)(ue,Object(a.a)({},fe,{as:pe,ref:se,styleProps:ce},!Object(s.a)(ue)&&{styleProps:Object(a.a)({},ce,fe.styleProps)},de,{children:[ae,W&&Object(F.jsx)(x.a,{children:W})]}))})}));t.a=A},715:function(e,t,r){"use strict";var n=r(4),o=r(2),a=r(1),i=(r(8),r(9)),c=r(147),l=r(7),s=r(10),u=r(63),f=r(100),d=r(124);function p(e){return Object(f.a)("MuiListItemSecondaryAction",e)}Object(d.a)("MuiListItemSecondaryAction",["root","disableGutters"]);var b=r(0),m=["className"],h=Object(l.a)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return[t.root,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.styleProps;return Object(o.a)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),g=a.forwardRef((function(e,t){var r=Object(s.a)({props:e,name:"MuiListItemSecondaryAction"}),l=r.className,f=Object(n.a)(r,m),d=a.useContext(u.a),g=Object(o.a)({},r,{disableGutters:d.disableGutters}),v=function(e){var t=e.disableGutters,r=e.classes,n={root:["root",t&&"disableGutters"]};return Object(c.a)(n,p,r)}(g);return Object(b.jsx)(h,Object(o.a)({className:Object(i.default)(v.root,l),styleProps:g,ref:t},f))}));g.muiName="ListItemSecondaryAction";t.a=g},716:function(e,t,r){"use strict";var n=r(5),o=r(4),a=r(2),i=r(1),c=(r(8),r(9)),l=r(147),s=r(60),u=r(12),f=r(195),d=r(10),p=r(7),b=r(100),m=r(124);function h(e){return Object(b.a)("MuiSwitch",e)}var g=Object(m.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),v=r(0),y=["className","color","edge","size","sx"],O=Object(p.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return[t.root,r.edge&&t["edge".concat(Object(u.a)(r.edge))],t["size".concat(Object(u.a)(r.size))]]}})((function(e){var t,r=e.styleProps;return Object(a.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===r.edge&&{marginLeft:-8},"end"===r.edge&&{marginRight:-8},"small"===r.size&&(t={width:40,height:24,padding:7},Object(n.a)(t,"& .".concat(g.thumb),{width:16,height:16}),Object(n.a)(t,"& .".concat(g.switchBase),Object(n.a)({padding:4},"&.".concat(g.checked),{transform:"translateX(16px)"})),t))})),j=Object(p.a)(f.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var r=e.styleProps;return[t.switchBase,t.input,"default"!==r.color&&t["color".concat(Object(u.a)(r.color))]]}})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===r.palette.mode?r.palette.common.white:r.palette.grey[300],transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},Object(n.a)(t,"&.".concat(g.checked),{transform:"translateX(20px)"}),Object(n.a)(t,"&.".concat(g.disabled),{color:"light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600]}),Object(n.a)(t,"&.".concat(g.checked," + .").concat(g.track),{opacity:.5}),Object(n.a)(t,"&.".concat(g.disabled," + .").concat(g.track),{opacity:"light"===r.palette.mode?.12:.2}),Object(n.a)(t,"& .".concat(g.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,r=e.theme,o=e.styleProps;return Object(a.a)({"&:hover":{backgroundColor:Object(s.a)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},Object(n.a)(t,"&.".concat(g.checked),Object(n.a)({color:r.palette[o.color].main,"&:hover":{backgroundColor:Object(s.a)(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(g.disabled),{color:"light"===r.palette.mode?Object(s.i)(r.palette[o.color].main,.62):Object(s.b)(r.palette[o.color].main,.55)})),Object(n.a)(t,"&.".concat(g.checked," + .").concat(g.track),{backgroundColor:r.palette[o.color].main}),t))})),w=Object(p.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),x=Object(p.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),F=i.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiSwitch"}),n=r.className,i=r.color,s=void 0===i?"primary":i,f=r.edge,p=void 0!==f&&f,b=r.size,m=void 0===b?"medium":b,g=r.sx,F=Object(o.a)(r,y),k=Object(a.a)({},r,{color:s,edge:p,size:m}),D=function(e){var t=e.classes,r=e.edge,n=e.size,o=e.color,i=e.checked,c=e.disabled,s={root:["root",r&&"edge".concat(Object(u.a)(r)),"size".concat(Object(u.a)(n))],switchBase:["switchBase","color".concat(Object(u.a)(o)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},f=Object(l.a)(s,h,t);return Object(a.a)({},t,f)}(k),S=Object(v.jsx)(x,{className:D.thumb,styleProps:k});return Object(v.jsxs)(O,{className:Object(c.default)(D.root,n),sx:g,styleProps:k,children:[Object(v.jsx)(j,Object(a.a)({type:"checkbox",icon:S,checkedIcon:S,ref:t,styleProps:k},F,{classes:Object(a.a)({},D,{root:D.switchBase})})),Object(v.jsx)(w,{className:D.track,styleProps:k})]})}));t.a=F}}]);
//# sourceMappingURL=3.79e14e16.chunk.js.map
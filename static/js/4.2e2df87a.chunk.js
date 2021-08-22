/*! For license information please see 4.2e2df87a.chunk.js.LICENSE.txt */
(this["webpackJsonpdashboard-admin"]=this["webpackJsonpdashboard-admin"]||[]).push([[4],{677:function(e,r,t){var n,i;void 0===(i="function"===typeof(n=function(){var e,r,t="2.0.6",n={},i={},a={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},o={currentLocale:a.currentLocale,zeroFormat:a.zeroFormat,nullFormat:a.nullFormat,defaultFormat:a.defaultFormat,scalePercentBy100:a.scalePercentBy100};function l(e,r){this._input=e,this._value=r}return(e=function(t){var i,a,u,c;if(e.isNumeral(t))i=t.value();else if(0===t||"undefined"===typeof t)i=0;else if(null===t||r.isNaN(t))i=null;else if("string"===typeof t)if(o.zeroFormat&&t===o.zeroFormat)i=0;else if(o.nullFormat&&t===o.nullFormat||!t.replace(/[^0-9]+/g,"").length)i=null;else{for(a in n)if((c="function"===typeof n[a].regexps.unformat?n[a].regexps.unformat():n[a].regexps.unformat)&&t.match(c)){u=n[a].unformat;break}i=(u=u||e._.stringToNumber)(t)}else i=Number(t)||null;return new l(t,i)}).version=t,e.isNumeral=function(e){return e instanceof l},e._=r={numberToFormat:function(r,t,n){var a,o,l,u,c,s,f,m=i[e.options.currentLocale],h=!1,d=!1,b=0,p="",g=1e12,v=1e9,_=1e6,y=1e3,F="",x=!1;if(r=r||0,o=Math.abs(r),e._.includes(t,"(")?(h=!0,t=t.replace(/[\(|\)]/g,"")):(e._.includes(t,"+")||e._.includes(t,"-"))&&(c=e._.includes(t,"+")?t.indexOf("+"):r<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),e._.includes(t,"a")&&(a=!!(a=t.match(/a(k|m|b|t)?/))&&a[1],e._.includes(t," a")&&(p=" "),t=t.replace(new RegExp(p+"a[kmbt]?"),""),o>=g&&!a||"t"===a?(p+=m.abbreviations.trillion,r/=g):o<g&&o>=v&&!a||"b"===a?(p+=m.abbreviations.billion,r/=v):o<v&&o>=_&&!a||"m"===a?(p+=m.abbreviations.million,r/=_):(o<_&&o>=y&&!a||"k"===a)&&(p+=m.abbreviations.thousand,r/=y)),e._.includes(t,"[.]")&&(d=!0,t=t.replace("[.]",".")),l=r.toString().split(".")[0],u=t.split(".")[1],s=t.indexOf(","),b=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),F=e._.toFixed(r,u[0].length+u[1].length,n,u[1].length)):F=e._.toFixed(r,u.length,n),l=F.split(".")[0],F=e._.includes(F,".")?m.delimiters.decimal+F.split(".")[1]:"",d&&0===Number(F.slice(1))&&(F="")):l=e._.toFixed(r,0,n),p&&!a&&Number(l)>=1e3&&p!==m.abbreviations.trillion)switch(l=String(Number(l)/1e3),p){case m.abbreviations.thousand:p=m.abbreviations.million;break;case m.abbreviations.million:p=m.abbreviations.billion;break;case m.abbreviations.billion:p=m.abbreviations.trillion}if(e._.includes(l,"-")&&(l=l.slice(1),x=!0),l.length<b)for(var w=b-l.length;w>0;w--)l="0"+l;return s>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===t.indexOf(".")&&(l=""),f=l+F+(p||""),h?f=(h&&x?"(":"")+f+(h&&x?")":""):c>=0?f=0===c?(x?"-":"+")+f:f+(x?"-":"+"):x&&(f="-"+f),f},stringToNumber:function(e){var r,t,n,a=i[o.currentLocale],l=e,u={thousand:3,million:6,billion:9,trillion:12};if(o.zeroFormat&&e===o.zeroFormat)t=0;else if(o.nullFormat&&e===o.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(r in t=1,"."!==a.delimiters.decimal&&(e=e.replace(/\./g,"").replace(a.delimiters.decimal,".")),u)if(n=new RegExp("[^a-zA-Z]"+a.abbreviations[r]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),l.match(n)){t*=Math.pow(10,u[r]);break}t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}((function(e){return"number"===typeof e&&isNaN(e)})),includes:function(e,r){return-1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)},reduce:function(e,r){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof r)throw new TypeError(r+" is not a function");var t,n=Object(e),i=n.length>>>0,a=0;if(3===arguments.length)t=arguments[2];else{for(;a<i&&!(a in n);)a++;if(a>=i)throw new TypeError("Reduce of empty array with no initial value");t=n[a++]}for(;a<i;a++)a in n&&(t=r(t,n[a],a,n));return t},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,t){var n=r.multiplier(t);return e>n?e:n}),1)},toFixed:function(e,r,t,n){var i,a,o,l,u=e.toString().split("."),c=r-(n||0);return i=2===u.length?Math.min(Math.max(u[1].length,c),r):c,o=Math.pow(10,i),l=(t(e+"e+"+i)/o).toFixed(i),n>r-i&&(a=new RegExp("\\.?0{1,"+(n-(r-i))+"}$"),l=l.replace(a,"")),l}},e.options=o,e.formats=n,e.locales=i,e.locale=function(e){return e&&(o.currentLocale=e.toLowerCase()),o.currentLocale},e.localeData=function(e){if(!e)return i[o.currentLocale];if(e=e.toLowerCase(),!i[e])throw new Error("Unknown locale : "+e);return i[e]},e.reset=function(){for(var e in a)o[e]=a[e]},e.zeroFormat=function(e){o.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){o.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){o.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,r,t){if(r=r.toLowerCase(),this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},e.validate=function(r,t){var n,i,a,o,l,u,c,s;if("string"!==typeof r&&(r+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",r)),(r=r.trim()).match(/^\d+$/))return!0;if(""===r)return!1;try{c=e.localeData(t)}catch(f){c=e.localeData(e.locale())}return a=c.currency.symbol,l=c.abbreviations,n=c.delimiters.decimal,i="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,(null===(s=r.match(/^[^\d]+/))||(r=r.substr(1),s[0]===a))&&(null===(s=r.match(/[^\d]+$/))||(r=r.slice(0,-1),s[0]===l.thousand||s[0]===l.million||s[0]===l.billion||s[0]===l.trillion))&&(u=new RegExp(i+"{2}"),!r.match(/[^\d.,]/g)&&!((o=r.split(n)).length>2)&&(o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(u):1===o[0].length?!!o[0].match(/^\d+$/)&&!o[0].match(u)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(u)&&!!o[1].match(/^\d+$/)))},e.fn=l.prototype={clone:function(){return e(this)},format:function(r,t){var i,a,l,u=this._value,c=r||o.defaultFormat;if(t=t||Math.round,0===u&&null!==o.zeroFormat)a=o.zeroFormat;else if(null===u&&null!==o.nullFormat)a=o.nullFormat;else{for(i in n)if(c.match(n[i].regexps.format)){l=n[i].format;break}a=(l=l||e._.numberToFormat)(u,c,t)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=r.correctionFactor.call(null,this._value,e);function n(e,r,n,i){return e+Math.round(t*r)}return this._value=r.reduce([this._value,e],n,0)/t,this},subtract:function(e){var t=r.correctionFactor.call(null,this._value,e);function n(e,r,n,i){return e-Math.round(t*r)}return this._value=r.reduce([e],n,Math.round(this._value*t))/t,this},multiply:function(e){function t(e,t,n,i){var a=r.correctionFactor(e,t);return Math.round(e*a)*Math.round(t*a)/Math.round(a*a)}return this._value=r.reduce([this._value,e],t,1),this},divide:function(e){function t(e,t,n,i){var a=r.correctionFactor(e,t);return Math.round(e*a)/Math.round(t*a)}return this._value=r.reduce([this._value,e],t),this},difference:function(r){return Math.abs(e(this._value).subtract(r).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return 1===~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(r,t,n){var i,a=e._.includes(t," BPS")?" ":"";return r*=1e4,t=t.replace(/\s?BPS/,""),i=e._.numberToFormat(r,t,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"BPS"),i=i.join("")):i=i+a+"BPS",i},unformat:function(r){return+(1e-4*e._.stringToNumber(r)).toFixed(15)}}),function(){var r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=r.suffixes.concat(t.suffixes.filter((function(e){return r.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(n,i,a){var o,l,u,c=e._.includes(i,"ib")?t:r,s=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),o=0;o<=c.suffixes.length;o++)if(l=Math.pow(c.base,o),u=Math.pow(c.base,o+1),null===n||0===n||n>=l&&n<u){s+=c.suffixes[o],l>0&&(n/=l);break}return e._.numberToFormat(n,i,a)+s},unformat:function(n){var i,a,o=e._.stringToNumber(n);if(o){for(i=r.suffixes.length-1;i>=0;i--){if(e._.includes(n,r.suffixes[i])){a=Math.pow(r.base,i);break}if(e._.includes(n,t.suffixes[i])){a=Math.pow(t.base,i);break}}o*=a||1}return o}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(r,t,n){var i,a,o=e.locales[e.options.currentLocale],l={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),i=e._.numberToFormat(r,t,n),r>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):r<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),a=0;a<l.before.length;a++)switch(l.before[a]){case"$":i=e._.insert(i,o.currency.symbol,a);break;case" ":i=e._.insert(i," ",a+o.currency.symbol.length-1)}for(a=l.after.length-1;a>=0;a--)switch(l.after[a]){case"$":i=a===l.after.length-1?i+o.currency.symbol:e._.insert(i,o.currency.symbol,-(l.after.length-(1+a)));break;case" ":i=a===l.after.length-1?i+" ":e._.insert(i," ",-(l.after.length-(1+a)+o.currency.symbol.length-1))}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(r,t,n){var i=("number"!==typeof r||e._.isNaN(r)?"0e+0":r.toExponential()).split("e");return t=t.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(i[0]),t,n)+"e"+i[1]},unformat:function(r){var t=e._.includes(r,"e+")?r.split("e+"):r.split("e-"),n=Number(t[0]),i=Number(t[1]);function a(r,t,n,i){var a=e._.correctionFactor(r,t);return r*a*(t*a)/(a*a)}return i=e._.includes(r,"e-")?i*=-1:i,e._.reduce([n,Math.pow(10,i)],a,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(r,t,n){var i=e.locales[e.options.currentLocale],a=e._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),a+=i.ordinal(r),e._.numberToFormat(r,t,n)+a}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(r,t,n){var i,a=e._.includes(t," %")?" ":"";return e.options.scalePercentBy100&&(r*=100),t=t.replace(/\s?\%/,""),i=e._.numberToFormat(r,t,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"%"),i=i.join("")):i=i+a+"%",i},unformat:function(r){var t=e._.stringToNumber(r);return e.options.scalePercentBy100?.01*t:t}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),a=Math.round(e-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)},unformat:function(e){var r=e.split(":"),t=0;return 3===r.length?(t+=60*Number(r[0])*60,t+=60*Number(r[1]),t+=Number(r[2])):2===r.length&&(t+=60*Number(r[0]),t+=Number(r[1])),Number(t)}}),e})?n.call(r,t,r,e):n)||(e.exports=i)},679:function(e,r,t){"use strict";var n=t(390);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(t(391)),a=t(0),o=(0,i.default)((0,a.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");r.default=o},680:function(e,r){r.__esModule=!0,r.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},686:function(e,r){r.__esModule=!0,r.default={body:'<path fill="currentColor" d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/>',width:24,height:24}},687:function(e,r){r.__esModule=!0,r.default={body:'<g fill="currentColor"><path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"/><rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9"/><circle cx="5.25" cy="5.25" r="2.25"/></g>',width:24,height:24}},688:function(e,r){r.__esModule=!0,r.default={body:'<path fill="currentColor" d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/>',width:24,height:24}},689:function(e,r){r.__esModule=!0,r.default={body:'<path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" fill="currentColor"/>',width:1024,height:1024}}}]);
//# sourceMappingURL=4.2e2df87a.chunk.js.map
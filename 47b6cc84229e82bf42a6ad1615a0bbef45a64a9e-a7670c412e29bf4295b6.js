(self.webpackChunk_ntyukaev_gatsby_multilingual_parallax_theme=self.webpackChunk_ntyukaev_gatsby_multilingual_parallax_theme||[]).push([[565],{3013:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===r(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){if(a(1,arguments),!function(e){return a(1,arguments),e instanceof Date||"object"===r(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=i(e);return!isNaN(Number(t))}function u(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function l(e,t){return a(2,arguments),function(e,t){a(2,arguments);var n=i(e).getTime(),r=u(t);return new Date(n+r)}(e,-u(t))}n.d(t,{Z:function(){return ee}});function s(e){a(1,arguments);var t=i(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function c(e){a(1,arguments);var t=i(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=s(r),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var l=s(u);return t.getTime()>=o.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function d(e){a(1,arguments);var t=i(e),n=s(t).getTime()-function(e){a(1,arguments);var t=c(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),s(n)}(t).getTime();return Math.round(n/6048e5)+1}var f={};function m(){return f}function h(e,t){var n,r,o,l,s,c,d,f;a(1,arguments);var h=m(),g=u(null!==(n=null!==(r=null!==(o=null!==(l=null==t?void 0:t.weekStartsOn)&&void 0!==l?l:null==t||null===(s=t.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==r?r:null===(d=h.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=i(e),w=v.getUTCDay(),b=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function g(e,t){var n,r,o,l,s,c,d,f;a(1,arguments);var g=i(e),v=g.getUTCFullYear(),w=m(),b=u(null!==(n=null!==(r=null!==(o=null!==(l=null==t?void 0:t.firstWeekContainsDate)&&void 0!==l?l:null==t||null===(s=t.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:w.firstWeekContainsDate)&&void 0!==r?r:null===(d=w.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,b),y.setUTCHours(0,0,0,0);var p=h(y,t),C=new Date(0);C.setUTCFullYear(v,0,b),C.setUTCHours(0,0,0,0);var M=h(C,t);return g.getTime()>=p.getTime()?v+1:g.getTime()>=M.getTime()?v:v-1}function v(e,t){a(1,arguments);var n=i(e),r=h(n,t).getTime()-function(e,t){var n,r,i,o,l,s,c,d;a(1,arguments);var f=m(),v=u(null!==(n=null!==(r=null!==(i=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(l=t.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:f.firstWeekContainsDate)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),w=g(e,t),b=new Date(0);return b.setUTCFullYear(w,0,v),b.setUTCHours(0,0,0,0),h(b,t)}(n,t).getTime();return Math.round(r/6048e5)+1}function w(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var b={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):w(n+1,2)},d:function(e,t){return w(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return w(e.getUTCHours()%12||12,t.length)},H:function(e,t){return w(e.getUTCHours(),t.length)},m:function(e,t){return w(e.getUTCMinutes(),t.length)},s:function(e,t){return w(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),t.length)}},y="midnight",p="noon",C="morning",M="afternoon",T="evening",k="night",x={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b.y(e,t)},Y:function(e,t,n,r){var a=g(e,r),i=a>0?a:1-a;return"YY"===t?w(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):w(i,t.length)},R:function(e,t){return w(c(e),t.length)},u:function(e,t){return w(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=v(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):w(a,t.length)},I:function(e,t,n){var r=d(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):w(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,n){var r=function(e){a(1,arguments);var t=i(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return w(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return w(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?p:0===a?y:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?T:a>=12?M:a>=4?C:k,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return E(a);case"XXXX":case"XX":return P(a);default:return P(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return E(a);case"xxxx":case"xx":return P(a);default:return P(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+D(a,":");default:return"GMT"+P(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+D(a,":");default:return"GMT"+P(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return w(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return w((r._originalDate||e).getTime(),t.length)}};function D(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+w(i,2)}function E(e,t){return e%60==0?(e>0?"-":"+")+w(Math.abs(e)/60,2):P(e,t)}function P(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}var S=x,U=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},W=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},O={p:W,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return U(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",U(a,t)).replace("{{time}}",W(i,t))}},Y=O;var L=["D","DD"],N=["YY","YYYY"];function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var j={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},H=function(e,t,n){var r,a=j[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function q(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var F={date:q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Z={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},z=function(e,t,n,r){return Z[e]};function A(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}var R={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:A({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:A({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:A({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:A({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:A({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function G(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,u=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return}(l,(function(e){return e.test(u)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n;return}(l,(function(e){return e.test(u)}));return o=e.valueCallback?e.valueCallback(s):s,{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(u.length)}}}var Q,B={ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(Q.matchPattern);if(!n)return null;var r=n[0],a=e.match(Q.parsePattern);if(!a)return null;var i=Q.valueCallback?Q.valueCallback(a[0]):a[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:e.slice(r.length)}}),era:G({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:G({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:G({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:G({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},I={code:"en-US",formatDistance:H,formatLong:F,formatRelative:z,localize:R,match:B,options:{weekStartsOn:0,firstWeekContainsDate:1}},X=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,K=/''/g,$=/[a-zA-Z]/;function ee(e,t,n){var r,s,c,d,f,h,g,v,w,b,y,p,C,M,T,k,x,D;a(2,arguments);var E=String(t),P=m(),U=null!==(r=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:P.locale)&&void 0!==r?r:I,W=u(null!==(c=null!==(d=null!==(f=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(g=n.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==f?f:P.firstWeekContainsDate)&&void 0!==d?d:null===(w=P.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==c?c:1);if(!(W>=1&&W<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=u(null!==(y=null!==(p=null!==(C=null!==(M=null==n?void 0:n.weekStartsOn)&&void 0!==M?M:null==n||null===(T=n.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==C?C:P.weekStartsOn)&&void 0!==p?p:null===(x=P.locale)||void 0===x||null===(D=x.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==y?y:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var j=i(e);if(!o(j))throw new RangeError("Invalid time value");var H=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(j),q=l(j,H),F={firstWeekContainsDate:W,weekStartsOn:O,locale:U,_originalDate:j};return E.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Y[t])(e,U.formatLong):e})).join("").match(X).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return function(e){var t=e.match(J);if(!t)return e;return t[1].replace(K,"'")}(r);var i,o=S[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||(i=r,-1===N.indexOf(i))||_(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==L.indexOf(e)}(r)||_(r,t,String(e)),o(q,r,U.localize,F);if(a.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}},2562:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.Link=void 0;var a=r(n(434)),i=r(n(7071)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(7294)),u=n(9402),l=n(1883),s=n(7610),c=["language","to","onClick"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var f=o.default.forwardRef((function(e,t){var n=e.language,r=e.to,d=e.onClick,f=(0,i.default)(e,c),m=(0,o.useContext)(u.I18nextContext),h=n||m.language,g=""+function(e){return m.generateDefaultLanguagePage||e!==m.defaultLanguage?"/"+e:""}(h)+r;return o.default.createElement(l.Link,(0,a.default)({},f,{to:g,innerRef:t,hrefLang:h,onClick:function(e){n&&localStorage.setItem(s.LANGUAGE_KEY,n),d&&d(e)}}))}));t.Link=f},531:function(e,t,n){"use strict";t.__esModule=!0;var r=n(1072);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var a=n(9402);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var i=n(8112);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var o=n(2562);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}))},8112:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.useI18next=void 0;var a=r(n(434)),i=n(1072),o=n(7294),u=n(1883),l=n(9402),s=n(7610);t.useI18next=function(e,t){var n=(0,i.useTranslation)(e,t),r=n.i18n,c=n.t,d=n.ready,f=(0,o.useContext)(l.I18nextContext),m=f.routed,h=f.defaultLanguage,g=f.generateDefaultLanguagePage,v=function(e){return g||e!==h?"/"+e:""};return(0,a.default)({},f,{i18n:r,t:c,ready:d,navigate:function(e,t){var n=v(f.language),r=m?""+n+e:""+e;return(0,u.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+v(e)+(t||function(e){if(!m)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(s.LANGUAGE_KEY,e),(0,u.navigate)(r,n)}})}},7782:function(e,t,n){e.exports=n(531)},1162:function(e,t,n){"use strict";var r=n(8733),a=n(7294),i=n(7782);t.Z=e=>{let{languages:t}=e;const{language:n,languages:o,changeLanguage:u}=(0,i.useI18next)(),l=t||o;return(0,r.tZ)(a.Fragment,null,(null==l?void 0:l.length)>1&&(0,r.tZ)("select",{sx:{color:"primary",background:"transparent",cursor:"pointer",border:"none",fontSize:"1em",outline:"none"},defaultValue:n,onChange:e=>{e.preventDefault(),u(e.target.value)}},l.map((e=>(0,r.tZ)("option",{key:e,value:e},e)))))}},8521:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(1883);var i=()=>(0,a.useStaticQuery)("2421966660").site.siteMetadata;var o=e=>{let{title:t="",description:n="",pathname:o="",image:u="",children:l=null}=e;const s=i(),{siteTitle:c,siteTitleAlt:d,siteUrl:f,siteDescription:m,siteImage:h,author:g,siteLanguage:v}=s,w={title:t?t+" | "+c:d,description:n||m,url:""+f+(o||""),image:""+f+(u||h)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:v}),r.createElement("title",null,w.title),r.createElement("meta",{name:"description",content:w.description}),r.createElement("meta",{name:"image",content:w.image}),r.createElement("meta",{property:"og:title",content:w.title}),r.createElement("meta",{property:"og:url",content:w.url}),r.createElement("meta",{property:"og:description",content:w.description}),r.createElement("meta",{property:"og:image",content:w.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:w.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:w.title}),r.createElement("meta",{name:"twitter:url",content:w.url}),r.createElement("meta",{name:"twitter:description",content:w.description}),r.createElement("meta",{name:"twitter:image",content:w.image}),r.createElement("meta",{name:"twitter:image:alt",content:w.description}),r.createElement("meta",{name:"twitter:creator",content:g}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),l)}},9283:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(6197),a=n(8733),i=n(7294);var o=()=>i.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z",fill:"currentColor"}));var u=()=>i.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z",fill:"currentColor"}));var l=()=>{const[e,t]=(0,r.If)(),n="dark"===e,i=()=>{const e=n?"light":"dark";document.querySelector("html").className="theme-ui-"+e,t(e)};return(0,a.tZ)("div",{onClick:i,onKeyDown:i,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"1.875em",height:"1.875em",color:"primary"}},n?(0,a.tZ)(u,null):(0,a.tZ)(o,null))}},8733:function(e,t,n){"use strict";n.d(t,{tZ:function(){return r}});var r=n(2396).tZ}}]);
//# sourceMappingURL=47b6cc84229e82bf42a6ad1615a0bbef45a64a9e-a7670c412e29bf4295b6.js.map
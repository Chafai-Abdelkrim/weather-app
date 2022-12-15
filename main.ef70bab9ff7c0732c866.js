(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",c="week",u="month",d="quarter",l="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},$=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},w={s:$,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+$(n,2,"0")+":"+$(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,u),s=r-i<0,a=e.clone().add(n+(s?-1:1),u);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:c,d:o,D:h,h:a,m:s,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",S={};S[v]=p;var g=function(t){return t instanceof C},x=function t(e,r,n){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();S[s]&&(i=s),r&&(S[s]=r,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;S[o]=e,i=o}return!n&&i&&(v=i),i||!n&&v},M=function(t,e){if(g(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new C(r)},D=w;D.l=x,D.i=g,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var C=function(){function p(t){this.$L=x(t.locale,null,!0),this.parse(t)}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(f);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return!(this.$d.toString()===m)},$.isSame=function(t,e){var r=M(t);return this.startOf(e)<=r&&r<=this.endOf(e)},$.isAfter=function(t,e){return M(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<M(t)},$.$g=function(t,e,r){return D.u(t)?this[e]:this.set(r,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var r=this,n=!!D.u(e)||e,d=D.p(t),m=function(t,e){var i=D.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(o)},f=function(t,e){return D.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},y=this.$W,p=this.$M,$=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case l:return n?m(1,0):m(31,11);case u:return n?m(1,p):m(0,p+1);case c:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return m(n?$-S:$+(6-S),p);case o:case h:return f(w+"Hours",0);case a:return f(w+"Minutes",1);case s:return f(w+"Seconds",2);case i:return f(w+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var r,c=D.p(t),d="set"+(this.$u?"UTC":""),m=(r={},r[o]=d+"Date",r[h]=d+"Date",r[u]=d+"Month",r[l]=d+"FullYear",r[a]=d+"Hours",r[s]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[c],f=c===o?this.$D+(e-this.$W):e;if(c===u||c===l){var y=this.clone().set(h,1);y.$d[m](f),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[D.p(t)]()},$.add=function(n,d){var h,m=this;n=Number(n);var f=D.p(d),y=function(t){var e=M(m);return D.w(e.date(e.date()+Math.round(t*n)),m)};if(f===u)return this.set(u,this.$M+n);if(f===l)return this.set(l,this.$y+n);if(f===o)return y(1);if(f===c)return y(7);var p=(h={},h[s]=e,h[a]=r,h[i]=t,h)[f]||1,$=this.$d.getTime()+n*p;return D.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||m;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},l=function(t){return D.s(s%12||12,t,"0")},h=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:d(r.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,c,2),ddd:d(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:D.s(s,2,"0"),h:l(1),hh:l(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return n.replace(y,(function(t,e){return e||f[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,h,m){var f,y=D.p(h),p=M(n),$=(p.utcOffset()-this.utcOffset())*e,w=this-p,v=D.m(this,p);return v=(f={},f[l]=v/12,f[u]=v,f[d]=v/3,f[c]=(w-$)/6048e5,f[o]=(w-$)/864e5,f[a]=w/r,f[s]=w/e,f[i]=w/t,f)[y]||w,m?v:D.a(v)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return S[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=x(t,e,!0);return n&&(r.$L=n),r},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),q=C.prototype;return M.prototype=q,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",u],["$y",l],["$D",h]].forEach((function(t){q[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,C,M),t.$i=!0),M},M.locale=x,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=S[v],M.Ls=S,M.p={},M}()}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(484),e=r.n(t);const n=document.querySelector("#search"),i=document.querySelector("#unit-toggle");i.className=localStorage.getItem("units")||"metric";const s=t=>t.charAt(0).toUpperCase()+t.slice(1),a=(t,e,...r)=>{const n=document.createElement(t);return Object.keys(e).forEach((t=>{n.setAttribute(t,e[t])})),r.forEach((t=>{t&&("string"==typeof t?n.appendChild(document.createTextNode(t)):n.appendChild(t))})),n},o=({icon:t,description:e})=>a("img",{src:`https://openweathermap.org/img/wn/${t}@4x.png`,alt:s(e),title:s(e)}),c=()=>{const t=document.querySelector("#current-weather-card");return{locationName:t.querySelector(".weather-location"),icon:t.querySelector(".weather-icon"),description:t.querySelector(".weather-desc"),temperature:t.querySelector(".weather-temp"),humidity:t.querySelector(".humidity"),cloudiness:t.querySelector(".clouds"),windSpeed:t.querySelector(".wind")}},u=t=>{const e=document.querySelector("#current-weather-card"),r=document.querySelector("#error"),n=r.querySelector("#message");e.classList.add("hidden"),r.classList.remove("hidden"),n.textContent=t.message,i.disabled=!1},d=()=>{document.querySelector("#current-weather-card").classList.add("loading"),i.disabled=!0,(()=>{const t=document.querySelector("#current-weather-card"),e=document.querySelector("#error");t.classList.remove("hidden"),e.classList.add("hidden")})(),(()=>{const t=c();Object.keys(t).forEach((e=>{t[e].textContent=""}))})(),(()=>{const t=document.querySelector("#forecast-weather"),e=t.querySelector("#hourly"),r=t.querySelector("#daily");e?.remove(),r?.remove()})()},l=t=>{const e=document.querySelector("#current-weather-card"),{locationName:r,icon:n,description:a,temperature:u,humidity:d,cloudiness:l,windSpeed:h}=c();e.classList.remove("loading"),r.textContent=`${t.name}, ${t.country}`,n.append(o(t)),a.textContent=s(t.description),u.textContent=`${t.temperature.toFixed(0)}°`,d.textContent=`${t.humidity}%`,l.textContent=`${t.cloudiness}%`,h.textContent=`${t.windSpeed} ${"metric"===i.className?"m/s":"mph"}`},h=t=>{const e=document.querySelector("#forecast-weather"),r=a("div",{id:"hourly"}),n=a("div",{id:"daily"});t.hourly.forEach((t=>{r.appendChild((t=>{const e=a("div",{class:"hour"},t.hour),r=o(t),n=a("div",{class:"temp"},`${t.temperature}°`),i=a("div",{class:"container"},r,n);return a("div",{class:"card"},e,i)})(t))})),t.daily.forEach((t=>{n.appendChild((t=>{const e=a("div",{class:"day"},t.day),r=o(t),n=a("div",{class:"max-temp"},`${t.maxTemperature}°`),i=a("div",{class:"min-temp"},`${t.minTemperature}°`),s=a("div",{class:"temp"},n,i),c=a("div",{class:"container"},r,s);return a("div",{class:"card"},e,c)})(t))}));const s=n.firstElementChild.querySelector(".day");s.textContent="Today",s.classList.add("Today"),e.appendChild(r),e.appendChild(n),i.disabled=!1};i.addEventListener("click",(()=>{i.classList.toggle("metric"),i.classList.toggle("imperial"),localStorage.setItem("units",i.className)}));const m="https://api.openweathermap.org/data/2.5/",f="e705fd2733337e25a8b91977646312e1";const y=class{constructor(t){const[e]=t.weather;this.main=e.main,this.description=e.description,this.icon=e.icon}};class p extends y{constructor(t){super(t);const{coord:e,main:r,wind:n,clouds:i}=t;this.longitude=e.lon,this.latitude=e.lat,this.temperature=r.temp,this.humidity=r.humidity,this.windSpeed=n.speed,this.cloudiness=i.all,this.name=t.name,this.country=t.sys.country}}const $=async({longitude:t,latitude:e},r="metric")=>{const n=await fetch(`${m}weather?lon=${t}&lat=${e}&units=${r}&appid=${f}`);if(!n.ok)throw new Error(n.statusText);const i=await n.json();return new p(i)};const w=class extends y{constructor(t){super(t),this.hour=e().unix(t.dt).format("h A"),this.temperature=t.temp.toFixed(0)}};const v=class extends y{constructor(t){super(t),this.day=e().unix(t.dt).format("dddd"),this.minTemperature=t.temp.min.toFixed(0),this.maxTemperature=t.temp.max.toFixed(0)}};class S{constructor({hourly:t,daily:e}){this.hourly=t.slice(1,9).map((t=>new w(t))),this.daily=e.map((t=>new v(t)))}}const g=async({longitude:t,latitude:e},r="metric")=>{const n=await fetch(`${m}onecall?lon=${t}&lat=${e}&units=${r}&exclude=current,minutely,alerts&appid=${f}`);if(!n.ok)throw new Error(n.statusText);const i=await n.json();return new S(i)};let x;(()=>{const{day:t,date:r,time:n}=(()=>{const t=document.querySelector("#current-weather-card");return{day:t.querySelector(".weather-day"),date:t.querySelector(".weather-date"),time:t.querySelector(".weather-time")}})();t.textContent=e()().format("dddd"),r.textContent=e()().format("ddd/MM/YYYY"),n.textContent=e()().format("h:mm A")})();const M=async t=>{d();try{const e=await(async(t,e="metric")=>{const r=await fetch(`${m}weather?q=${t}&units=${e}&appid=${f}`);if(!r.ok)throw new Error(r.statusText);const n=await r.json();return new p(n)})(t,i.className);l(e);const r=await g(e,i.className);h(r)}catch(t){u(t)}};n.addEventListener("submit",(t=>{t.preventDefault();const e=n.text.value;e&&e!==x&&M(e),x=e})),i.addEventListener("click",(()=>{const t=document.querySelector("#current-weather-card .weather-location")?.textContent;""!==t&&M(t)})),(async()=>{const t={timeout:5e3,maximumAge:0};d();try{const e=await function(t){return new Promise(((e,r)=>{navigator.geolocation.getCurrentPosition(e,r,t)}))}(t);(async t=>{d();try{const[e,r]=await Promise.all([$(t,i.className),g(t,i.className)]);l(e),h(r)}catch(t){u(t)}})(e.coords)}catch(t){M("Agadir")}})()})()})();
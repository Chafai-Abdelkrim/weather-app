/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",f=\"month\",h=\"quarter\",c=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=h+\"Date\",n[d]=h+\"Date\",n[f]=h+\"Month\",n[c]=h+\"FullYear\",n[u]=h+\"Hours\",n[s]=h+\"Minutes\",n[i]=h+\"Seconds\",n[r]=h+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,\"0\")},d=n.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,\"0\"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,\"0\"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,\"0\"),s:String(this.$s),ss:O.s(this.$s,2,\"0\"),SSS:O.s(this.$ms,3,\"0\"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",f],[\"$y\",c],[\"$D\",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));\n\n//# sourceURL=webpack://weather-app/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_currentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/currentWeather */ \"./src/modules/currentWeather.js\");\n/* harmony import */ var _modules_forecastWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forecastWeather */ \"./src/modules/forecastWeather.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nlet lastLocation;\n\n(0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.displayDateInfo)();\n\nfunction getCurrentPosition(options) {\n    return new Promise((resolve, reject) => {\n        navigator.geolocation.getCurrentPosition(resolve, reject, options);\n    });\n}\n\nconst getWeather = async (location) => {\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.showLoadingAnimation)();\n    try {\n        const currentWeather = await (0,_modules_currentWeather__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(\n            location,\n            _modules_dom__WEBPACK_IMPORTED_MODULE_0__.unitsToggle.className\n        );\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(currentWeather);\n        const forecastWeather = await (0,_modules_forecastWeather__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n            currentWeather,\n            _modules_dom__WEBPACK_IMPORTED_MODULE_0__.unitsToggle.className\n        );\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.displayForecastWeather)(forecastWeather);\n    } catch (err) {\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.showError)(err);\n    }\n};\n\nconst search = (e) => {\n    e.preventDefault();\n\n    const location = _modules_dom__WEBPACK_IMPORTED_MODULE_0__.searchForm.text.value;\n    if (location && location !== lastLocation) {\n        getWeather(location);\n    }\n    lastLocation = location;\n};\n\nconst toggleUnits = () => {\n    const location = document.querySelector(\n        '#current-weather-card .weather-location'\n    )?.textContent;\n    if (location !== '') {\n        getWeather(location);\n    }\n};\n\nconst getWeatherByCoords = async (coords) => {\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.showLoadingAnimation)();\n    try {\n        const [currentWeather, forecastWeather] = await Promise.all([\n            (0,_modules_currentWeather__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeatherByCoords)(coords, _modules_dom__WEBPACK_IMPORTED_MODULE_0__.unitsToggle.className),\n            (0,_modules_forecastWeather__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(coords, _modules_dom__WEBPACK_IMPORTED_MODULE_0__.unitsToggle.className),\n        ]);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(currentWeather);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.displayForecastWeather)(forecastWeather);\n    } catch (err) {\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.showError)(err);\n    }\n};\n\nconst getWeatherAtStart = async () => {\n    const options = {\n        timeout: 5000,\n        maximumAge: 0,\n    };\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.showLoadingAnimation)();\n    try {\n        const position = await getCurrentPosition(options);\n        getWeatherByCoords(position.coords);\n    } catch (err) {\n        getWeather('Agadir');\n    }\n};\n\n_modules_dom__WEBPACK_IMPORTED_MODULE_0__.searchForm.addEventListener('submit', search);\n_modules_dom__WEBPACK_IMPORTED_MODULE_0__.unitsToggle.addEventListener('click', toggleUnits);\n\ngetWeatherAtStart();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiEndpoint\": () => (/* binding */ apiEndpoint),\n/* harmony export */   \"apiKey\": () => (/* binding */ apiKey)\n/* harmony export */ });\nconst apiEndpoint = 'https://api.openweathermap.org/data/2.5/';\nconst apiKey = 'e705fd2733337e25a8b91977646312e1';\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/currentWeather.js":
/*!***************************************!*\
  !*** ./src/modules/currentWeather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentWeather\": () => (/* binding */ getCurrentWeather),\n/* harmony export */   \"getCurrentWeatherByCoords\": () => (/* binding */ getCurrentWeatherByCoords)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/modules/weather.js\");\n\n\n\nclass CurrentWeather extends _weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(data) {\n        super(data);\n        const { coord, main, wind, clouds } = data;\n        this.longitude = coord.lon;\n        this.latitude = coord.lat;\n        this.temperature = main.temp;\n        this.humidity = main.humidity;\n        this.windSpeed = wind.speed;\n        this.cloudiness = clouds.all;\n        this.name = data.name;\n        this.country = data.sys.country;\n    }\n}\n\nconst getCurrentWeather = async (location, units = 'metric') => {\n    const response = await fetch(\n        `${_api__WEBPACK_IMPORTED_MODULE_0__.apiEndpoint}weather?q=${location}&units=${units}&appid=${_api__WEBPACK_IMPORTED_MODULE_0__.apiKey}`\n    );\n    if (!response.ok) throw new Error(response.statusText);\n    const data = await response.json();\n\n    return new CurrentWeather(data);\n};\n\nconst getCurrentWeatherByCoords = async (\n    { longitude, latitude },\n    units = 'metric'\n) => {\n    const response = await fetch(\n        `${_api__WEBPACK_IMPORTED_MODULE_0__.apiEndpoint}weather?lon=${longitude}&lat=${latitude}&units=${units}&appid=${_api__WEBPACK_IMPORTED_MODULE_0__.apiKey}`\n    );\n    if (!response.ok) throw new Error(response.statusText);\n    const data = await response.json();\n    return new CurrentWeather(data);\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/currentWeather.js?");

/***/ }),

/***/ "./src/modules/dailyForecast.js":
/*!**************************************!*\
  !*** ./src/modules/dailyForecast.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/modules/weather.js\");\n\n\n\nclass DailyWeather extends _weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(data) {\n        super(data);\n        this.day = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(data.dt).format('dddd');\n        this.minTemperature = data.temp.min.toFixed(0);\n        this.maxTemperature = data.temp.max.toFixed(0);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dailyForecast.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCurrentWeather\": () => (/* binding */ displayCurrentWeather),\n/* harmony export */   \"displayDateInfo\": () => (/* binding */ displayDateInfo),\n/* harmony export */   \"displayForecastWeather\": () => (/* binding */ displayForecastWeather),\n/* harmony export */   \"searchForm\": () => (/* binding */ searchForm),\n/* harmony export */   \"showError\": () => (/* binding */ showError),\n/* harmony export */   \"showLoadingAnimation\": () => (/* binding */ showLoadingAnimation),\n/* harmony export */   \"unitsToggle\": () => (/* binding */ unitsToggle)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst searchForm = document.querySelector('#search');\nconst unitsToggle = document.querySelector('#unit-toggle');\n\nunitsToggle.className = localStorage.getItem('units') || 'metric';\n\nconst capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);\n\nconst createElement = (tag, attributes, ...children) => {\n    const element = document.createElement(tag);\n    Object.keys(attributes).forEach((attr) => {\n        element.setAttribute(attr, attributes[attr]);\n    });\n    children.forEach((child) => {\n        if (child) {\n            if (typeof child === 'string') {\n                element.appendChild(document.createTextNode(child));\n            } else {\n                element.appendChild(child);\n            }\n        }\n    });\n    return element;\n};\n\nconst createWeatherIcon = ({ icon, description }) => {\n    const weatherIcon = createElement('img', {\n        src: `https://openweathermap.org/img/wn/${icon}@4x.png`,\n        alt: capitalize(description),\n        title: capitalize(description),\n    });\n\n    return weatherIcon;\n};\n\nconst createHourlyCard = (weather) => {\n    const hour = createElement('div', { class: 'hour' }, weather.hour);\n    const icon = createWeatherIcon(weather);\n    const temp = createElement(\n        'div',\n        { class: 'temp' },\n        `${weather.temperature}°`\n    );\n    const container = createElement('div', { class: 'container' }, icon, temp);\n    const card = createElement('div', { class: 'card' }, hour, container);\n\n    return card;\n};\n\nconst createDailyCard = (weather) => {\n    const day = createElement('div', { class: 'day' }, weather.day);\n    const icon = createWeatherIcon(weather);\n    const maxTemp = createElement(\n        'div',\n        { class: 'max-temp' },\n        `${weather.maxTemperature}°`\n    );\n    const minTemp = createElement(\n        'div',\n        { class: 'min-temp' },\n        `${weather.minTemperature}°`\n    );\n    const temp = createElement('div', { class: 'temp' }, maxTemp, minTemp);\n    const container = createElement('div', { class: 'container' }, icon, temp);\n    const card = createElement('div', { class: 'card' }, day, container);\n\n    return card;\n};\n\nconst getWeatherElements = () => {\n    const currentWeather = document.querySelector('#current-weather-card');\n    const locationName = currentWeather.querySelector('.weather-location');\n    const icon = currentWeather.querySelector('.weather-icon');\n    const description = currentWeather.querySelector('.weather-desc');\n    const temperature = currentWeather.querySelector('.weather-temp');\n    const humidity = currentWeather.querySelector('.humidity');\n    const cloudiness = currentWeather.querySelector('.clouds');\n    const windSpeed = currentWeather.querySelector('.wind');\n\n    return {\n        locationName,\n        icon,\n        description,\n        temperature,\n        humidity,\n        cloudiness,\n        windSpeed,\n    };\n};\n\nconst getDateInfoElements = () => {\n    const currentWeather = document.querySelector('#current-weather-card');\n    const day = currentWeather.querySelector('.weather-day');\n    const date = currentWeather.querySelector('.weather-date');\n    const time = currentWeather.querySelector('.weather-time');\n\n    return { day, date, time };\n};\n\nconst toggleUnits = () => {\n    undefined.classList.toggle('metric');\n    undefined.classList.toggle('imperial');\n    localStorage.setItem('units', undefined.className);\n};\n\nconst clearCurrentWeather = () => {\n    const weatherElements = getWeatherElements();\n    Object.keys(weatherElements).forEach((element) => {\n        weatherElements[element].textContent = '';\n    });\n};\n\nconst clearForecastWeather = () => {\n    const forecastWeather = document.querySelector('#forecast-weather');\n    const hourly = forecastWeather.querySelector('#hourly');\n    const daily = forecastWeather.querySelector('#daily');\n    hourly?.remove();\n    daily?.remove();\n};\n\nconst showError = (err) => {\n    const currentWeather = document.querySelector('#current-weather-card');\n    const error = document.querySelector('#error');\n    const errorMessage = error.querySelector('#message');\n    currentWeather.classList.add('hidden');\n    error.classList.remove('hidden');\n    errorMessage.textContent = err.message;\n    unitsToggle.disabled = false;\n};\n\nconst hideError = () => {\n    const currentWeather = document.querySelector('#current-weather-card');\n    const error = document.querySelector('#error');\n    currentWeather.classList.remove('hidden');\n    error.classList.add('hidden');\n};\n\nconst showLoadingAnimation = () => {\n    const currentWeather = document.querySelector('#current-weather-card');\n    currentWeather.classList.add('loading');\n    unitsToggle.disabled = true;\n    hideError();\n    clearCurrentWeather();\n    clearForecastWeather();\n};\n\nconst displayDateInfo = () => {\n    const { day, date, time } = getDateInfoElements();\n\n    day.textContent = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('dddd');\n    date.textContent = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('ddd/MM/YYYY');\n    time.textContent = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('h:mm A');\n};\n\nconst displayCurrentWeather = (weather) => {\n    const currentWeather = document.querySelector('#current-weather-card');\n    const {\n        locationName,\n        icon,\n        description,\n        temperature,\n        humidity,\n        cloudiness,\n        windSpeed,\n    } = getWeatherElements();\n\n    currentWeather.classList.remove('loading');\n    locationName.textContent = `${weather.name}, ${weather.country}`;\n    icon.append(createWeatherIcon(weather));\n    description.textContent = capitalize(weather.description);\n    temperature.textContent = `${weather.temperature.toFixed(0)}°`;\n    humidity.textContent = `${weather.humidity}%`;\n    cloudiness.textContent = `${weather.cloudiness}%`;\n    windSpeed.textContent = `${weather.windSpeed} ${\n        unitsToggle.className === 'metric' ? 'm/s' : 'mph'\n    }`;\n};\n\nconst displayForecastWeather = (weather) => {\n    const forecastWeather = document.querySelector('#forecast-weather');\n    const hourly = createElement('div', { id: 'hourly' });\n    const daily = createElement('div', { id: 'daily' });\n\n    weather.hourly.forEach((hour) => {\n        hourly.appendChild(createHourlyCard(hour));\n    });\n    weather.daily.forEach((day) => {\n        daily.appendChild(createDailyCard(day));\n    });\n    const today = daily.firstElementChild.querySelector('.day');\n    today.textContent = 'Today';\n    today.classList.add('Today');\n    forecastWeather.appendChild(hourly);\n    forecastWeather.appendChild(daily);\n    unitsToggle.disabled = false;\n};\n\nunitsToggle.addEventListener('click', toggleUnits);\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/forecastWeather.js":
/*!****************************************!*\
  !*** ./src/modules/forecastWeather.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _hourlyForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourlyForecast */ \"./src/modules/hourlyForecast.js\");\n/* harmony import */ var _dailyForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyForecast */ \"./src/modules/dailyForecast.js\");\n\n\n\n\nclass ForecastWeather {\n    constructor({ hourly, daily }) {\n        this.hourly = hourly\n            .slice(1, 9)\n            .map((hour) => new _hourlyForecast__WEBPACK_IMPORTED_MODULE_1__[\"default\"](hour));\n        this.daily = daily.map((day) => new _dailyForecast__WEBPACK_IMPORTED_MODULE_2__[\"default\"](day));\n    }\n}\n\nconst getForecastWeather = async (\n    { longitude, latitude },\n    units = 'metric'\n) => {\n    const response = await fetch(\n        `${_api__WEBPACK_IMPORTED_MODULE_0__.apiEndpoint}onecall?lon=${longitude}&lat=${latitude}&units=${units}&exclude=current,minutely,alerts&appid=${_api__WEBPACK_IMPORTED_MODULE_0__.apiKey}`\n    );\n    if (!response.ok) throw new Error(response.statusText);\n    const data = await response.json();\n    return new ForecastWeather(data);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForecastWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/forecastWeather.js?");

/***/ }),

/***/ "./src/modules/hourlyForecast.js":
/*!***************************************!*\
  !*** ./src/modules/hourlyForecast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/modules/weather.js\");\n\n\n\nclass HourlyForecast extends _weather__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(data) {\n        super(data);\n        this.hour = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(data.dt).format('h A');\n        this.temperature = data.temp.toFixed(0);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HourlyForecast);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/hourlyForecast.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Weather {\n    constructor(data) {\n        const [weather] = data.weather;\n        this.main = weather.main;\n        this.description = weather.description;\n        this.icon = weather.icon;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
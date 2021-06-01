(function(t){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,r,o,!1,null,null,null),u=s.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("使用JS,CSS,HTML 實作一個國家目錄！")]),n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"請輸入國家"},domProps:{value:t.searchText},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.searchCountry(t.searchText):null},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),n("button",{on:{click:function(e){return t.searchCountry(t.searchText)}}},[t._v("確認")])]),n("div",{staticClass:"show-body"},[n("button",{on:{click:function(e){return t.getData()}}},[t._v("正序顯示")]),n("button",{on:{click:function(e){return t.reverseSum()}}},[t._v("倒序顯示")])]),t.loading?n("div",{staticClass:"loading vh-100"},[t._v("Loading...")]):n("div",{staticClass:"list"},[n("ul",{staticClass:"list-body"},t._l(t.pageContent,(function(e){return n("li",{key:e.numericCode,on:{click:function(n){return t.openDetails(e.name,e.numericCode)}}},[n("div",{staticClass:"card"},[n("img",{attrs:{src:e.flag,alt:e.name}}),n("div",{staticClass:"text-item"},[n("h4",[t._v("國家名稱: "+t._s(e.name))]),n("p",[t._v("2位國家代碼 : "+t._s(e.alpha2Code))]),n("p",[t._v("3位國家代碼 : "+t._s(e.alpha3Code))]),n("p",[t._v("母語名稱: "+t._s(e.nativeName))]),n("p",[t._v("替代國家名稱: "),n("br"),t._l(e.altSpellings,(function(e,a){return n("span",{key:a},[t._v(t._s(e)),n("br")])}))],2),n("p",[t._v("國際電話區號: "),t._l(e.callingCodes,(function(e,a){return n("span",{key:a},[t._v(t._s(e)),n("br")])}))],2)])])])})),0),n("ul",{staticClass:"currentPage"},t._l(t.page,(function(e){return n("li",{key:e,staticClass:"page-item",class:{active:e===t.currentPage}},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])})),0),t.isPopup?n("div",{staticClass:"vue-popUpSmall"},[n("h5",[t._v(t._s(t.modelData.name)+" 詳細資訊")]),n("p",[t._v("area: "+t._s(t.modelData.area))]),n("p",[t._v("capital: "+t._s(t.modelData.capital))]),n("p",[t._v("cioc: "+t._s(t.modelData.cioc))]),n("p",[t._v("demonym: "+t._s(t.modelData.demonym))]),n("p",[t._v("languages: "),t._l(t.modelData.languages,(function(e,a){return n("span",{key:a},[t._v(t._s(e.name)),n("br")])}))],2),n("p",[t._v("latlng: "),t._l(t.modelData.latlng,(function(e,a){return n("span",{key:a},[t._v(t._s(e)),n("br")])}))],2),n("p",[t._v("numericCode: "+t._s(t.modelData.numericCode))]),n("p",[t._v("population: "+t._s(t.modelData.population))]),n("p",[t._v("region: "+t._s(t.modelData.region))]),n("p",[t._v("subregion: "+t._s(t.modelData.subregion))]),n("div",{staticClass:"popUp-buttons"},[n("button",{on:{click:function(e){return t.cancelPopUp()}}},[t._v("關閉")])])]):t._e()])])},d=[],f=(n("4de4"),n("ac1f"),n("841c"),n("b0c0"),{name:"Home",data:function(){return{loading:!1,countriydata:[],searchText:"",modelData:{},isPopup:!1,currentPage:1,pageContent:[],page:0}},created:function(){this.getData()},methods:{getData:function(){var t=this,e="https://restcountries.eu/rest/v2/all";this.loading=!0,this.$http.get(e).then((function(e){var n=e.data;t.page=n.length/25,t.pageContent=n.filter((function(t,e){return e<25})),t.countriydata=n,t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))},searchCountry:function(t){if(t){var e=this.countriydata.filter((function(e){return-1!==e.name.search(t)}));return this.pageContent=e,this.searchText="",this.countriydata}return alert("請輸入正確關鍵字")},reverseSum:function(){return this.pageContent.reverse()},openDetails:function(t,e){var n=this;if(e){var a="https://restcountries.eu/rest/v2/name/".concat(t);this.$http.get(a).then((function(t){var e=t.data[0];n.modelData=e,n.isPopup=!n.isPopup})).catch((function(t){console.log(t)}))}},cancelPopUp:function(){this.isPopup=!1},changePage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t,this.pageContent=this.countriydata.filter((function(e,n){return n<25*t&&n>=25*(t-1)}))}}}),v=f,h=(n("21bb"),Object(i["a"])(v,p,d,!1,null,null,null)),g=h.exports;a["a"].use(l["a"]);var _=[{path:"/",name:"Home",component:g}],m=new l["a"]({mode:"history",base:"",routes:_}),b=m,y=n("bc3a"),C=n.n(y);a["a"].config.productionTip=!1,a["a"].prototype.$http=C.a,new a["a"]({router:b,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.f395f9a6.js.map
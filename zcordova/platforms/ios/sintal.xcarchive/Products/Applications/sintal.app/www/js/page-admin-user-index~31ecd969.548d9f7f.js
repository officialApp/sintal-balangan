(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-user-index~31ecd969"],{5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");var s=a("ade3");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"824f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"font-times"},[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-sm-2 col-sm-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"p-2"},[a("button",{staticClass:"btn btn-sm btn-style9 ",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/admin/user/add")}}},[t._v("ADD USER "),a("span",{staticClass:"typcn typcn-user-add"})])])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"p-2"},[a("button",{staticClass:"btn btn-sm btn-style9 ",staticStyle:{background:"lightblue"},attrs:{type:"button"},on:{click:function(e){return t.editnya()}}},[t._v("EDIT USER "),a("span",{staticClass:"typcn typcn-user-add"})])])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"p-2"},[a("button",{staticClass:"btn btn-sm btn-style9 ",staticStyle:{background:"red"},attrs:{type:"button"},on:{click:function(e){return t.hapus()}}},[t._v("DELETE "),a("span",{staticClass:"typcn typcn-arrow-repeat"})])])]),a("div",{staticClass:"col-12 pl-4 pr-4 font-bold text-xl"},[t._v(" "+t._s(t.vdata.nama)+" "+t._s(t.vdata.nip)+" ")])])])]),a("hr",{staticClass:"style16"}),t.ready?a("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[a("div",{staticClass:"container flex flex-wrap mx-auto px-4 d-print-none"},[a("div",{staticClass:"w-full sm:w-1/3"},[a("div",{staticClass:"input-group mb-2"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0",attrs:{type:"text",id:"searchTable",placeholder:"Cari Data ... "},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),a("div",{staticClass:"w-full sm:w-1/3"}),a("div",{staticClass:"w-full sm:w-1/3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3 order-2"}),a("div",{staticClass:"col-sm-3 order-3"}),a("div",{staticClass:"col-sm-4 order-1"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},[a("option",[t._v("10")]),a("option",[t._v("20")]),a("option",[t._v("50")]),a("option",[t._v("100")]),a("option",{domProps:{value:1e6}},[t._v("Semua")])])])])])]),a("div",{staticClass:"pr-4"},[a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[a("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[a("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[a("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[a("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(e,s){return a("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(e),expression:"!less.includes(item)"}],key:s+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(a){return t.sort(e)}}},[a("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v(" "+t._s(e)+" "),t.orderWith?[a("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==e,expression:"orderBy==item"}]},[a("span",{staticClass:"typcn typcn-arrow-down"})])]:[a("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==e,expression:"orderBy==item"}]},[a("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),a("tbody",t._l(t.td,(function(e,s){return a("tr",{key:s+"td"},[a("td",[t._v(t._s(s+t.temp1+1))]),a("no-ssr",t._l(t.thnya,(function(i,n){return a("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(i),expression:"!less.includes(item2)"}],key:n+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(e[i])},on:{tap:function(a){t.ambil(e,s),t.modal=!0,t.aksi="update"}}})})),1)],1)})),0)])],a("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[a("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[a("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)])]):a("div",[a("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"typcn typcn-zoom"})])])}],n=a("5530"),r=a("ade3"),o=(a("159b"),a("b64b"),a("d3b7"),a("25f0"),a("5319"),a("ac1f"),a("4de4"),a("841c"),a("d81d"),a("7db0"),a("fb6a"),a("bc3a"),a("8aa5")),c=a.n(o),l=a("03a0"),d=c.a.firestore(),u={components:{},data:function(){return{thbackground:"initial",thcolor:"asd",datanya:[],order:["id","nip","nama","bagian","uid","changepassword","pertama","auth"],vdata:Object(r["a"])({changepassword:!1,auth:"user",bagian:"unit_head",pertama:!1},"bagian","-"),ready:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id","uid","changepassword","pertama","auth"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,aksi:"insert",formOn:!1,updateOn:!1}},methods:{editnya:function(){this.vdata.id?this.$router.push("/admin/user/edit?id=".concat(this.vdata.id)):alert("Silahkan pilih salah satu ID atau user!")},hapus:function(){this.vdata.id?confirm("Apakah yakin user dihapus ?")&&d.collection("users").doc(this.vdata.id).delete().then((function(t){alert("DATA BERHASIL DI DELETE")})):alert("Silahkan pilih salah satu ID atau user!")},insert:function(){delete this.vdata.id,d.collection("users").doc().set(this.vdata).then((function(t){console.log("berhasil"),alert("simpan data berhasil!")}))},update:function(){d.collection("users").doc(this.pilih.id).set(this.vdata,{merge:!0}).then((function(t){alert("update data berhasil!")}))},remove:function(){confirm("Apakah yakin menghapus data?")&&d.collection("users").doc(this.pilih.id).delete().then((function(t){alert("delete data berhasil!")}))},refreshData:function(){var t=this,e=this;d.collection("users").onSnapshot((function(a){var s=[];a.forEach((function(t){s.push(Object(n["a"])({id:t.id},t.data()))})),setTimeout((function(){(function(){var t,e;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(a){a.style.position="relative";var s=document.createElement("div");s.innerHTML="&nbsp;",s.style.top=0,s.style.right=0,s.style.bottom=0,s.style.width="5px",s.style.position="absolute",s.style.cursor="col-resize",s.addEventListener("mousedown",(function(s){t=a,e=a.offsetWidth-s.pageX})),a.appendChild(s)})),document.addEventListener("mousemove",(function(a){t&&(t.style.width=e+a.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})();var a=[],i={};s.forEach((function(t,n){e.order.forEach((function(t){i[t]=s[n][t]})),a.push(i),i={}})),t.datanya=a;var n=t.order;n=t.$_.difference(n,t.unless),t.thnya=n}),1e3)}))},ambil:function(t,e){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var a=this.$_.clone(t);console.log(a),this.vdata=a,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var e=Object.keys(this.vdata);e.forEach((function(e){t.vdata[e]=""}))},
//!==================
//! hapus dari sini
//! =================
checkedAll:function(){console.log(this.checkedItem)},susun:function(t){var e=t,a=["id","nip","nama","uid","changepassword","pertama","auth","head"],s=[],i={};return e.forEach((function(t,n){a.forEach((function(t){i[t]=e[n][t]})),s.push(i),i={}})),s},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),this.$store.state.print2=this.susun(this.$store.state.print2),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString()));this.$store.state.print2=this.susun(this.td),alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},isDate:function(t){var e;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),e=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,e.test(t))},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:l})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:l,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,e=Object.keys(t[0]);return e=this.$_.difference(e,this.unless),e},td:function(){var t=this,e=this,a=this.datanya;//! order fungsi
if(this.orderBy.length>0){var s=this.orderWith?"asc":"desc";a=this.$_.orderBy(a,[this.orderBy],[s])}//! search fungsi
var i=this.thnya;return a=a.filter((function(e,a,s){var n=!1;if(i.filter((function(a){"string"==typeof e[a]?-1!=e[a].toLowerCase().indexOf(t.search.toLowerCase())&&(n=!0):null!=e[a]&&-1!=e[a].toString().indexOf(t.search)&&(n=!0)})),n)return e})),//! cari shortcut contoh
a=a.map((function(t){var a={},s=Object.keys(t);return s=e.$_.difference(s,e.unless),s.forEach((function(i,n){s.find((function(t){return t==e.date[n]})),a[i]=t[i]})),a})),a=a.slice(this.temp1,this.temp2),a}},layout:"admin",mounted:function(){this.refreshData()}},p=u,h=a("2877"),f=Object(h["a"])(p,s,i,!1,null,null,null);e["default"]=f.exports},dbb4:function(t,e,a){var s=a("23e7"),i=a("83ab"),n=a("56ef"),r=a("fc6a"),o=a("06cf"),c=a("8418");s({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,a,s=r(t),i=o.f,l=n(s),d={},u=0;while(l.length>u)a=i(s,e=l[u++]),void 0!==a&&c(d,e,a);return d}})},e439:function(t,e,a){var s=a("23e7"),i=a("d039"),n=a("fc6a"),r=a("06cf").f,o=a("83ab"),c=i((function(){r(1)})),l=!o||c;s({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(n(t),e)}})}}]);
//# sourceMappingURL=page-admin-user-index~31ecd969.548d9f7f.js.map
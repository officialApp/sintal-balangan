(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-report_keluar~31ecd969"],{2350:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"font-times"},[e("div",{staticClass:"tips float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"taufik"!=t.pilih.name,expression:"pilih.name!='taufik'"}],staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print1}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Satu")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"offset-sm-2 col-sm-8"},[e("form",{attrs:{action:""},on:{submit:function(a){a.preventDefault(),"insert"==t.aksi?t.insert():"update"==t.aksi?t.update():t.remove()}}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("users/${this.$store.state.users.uid}/history-keluar")]),e("div",{staticClass:"card-body"},[e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("id_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"id_",id:"id",name:"id",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("nip_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nip,expression:"vdata.nip"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"nip_",id:"nip",name:"nip",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.nip},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nip",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("nama_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"nama_",id:"nama",name:"nama",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("jam_berangkat_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jam_berangkat,expression:"vdata.jam_berangkat"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"jam_berangkat_",id:"jam_berangkat",name:"jam_berangkat",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.jam_berangkat},on:{input:function(a){a.target.composing||t.$set(t.vdata,"jam_berangkat",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("keperluan_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.keperluan,expression:"vdata.keperluan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"keperluan_",id:"keperluan",name:"keperluan",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.keperluan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"keperluan",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("kendaraan_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.kendaraan,expression:"vdata.kendaraan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"kendaraan_",id:"kendaraan",name:"kendaraan",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.kendaraan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"kendaraan",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("penumpang_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.penumpang,expression:"vdata.penumpang"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"penumpang_",id:"penumpang",name:"penumpang",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.penumpang},on:{input:function(a){a.target.composing||t.$set(t.vdata,"penumpang",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("lokasi_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lokasi,expression:"vdata.lokasi"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"lokasi_",id:"lokasi",name:"lokasi",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.lokasi},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lokasi",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("tujuan_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tujuan,expression:"vdata.tujuan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"tujuan_",id:"tujuan",name:"tujuan",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.tujuan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"tujuan",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("createAt_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.createAt,expression:"vdata.createAt"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"createAt_",id:"createAt",name:"createAt",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.createAt},on:{input:function(a){a.target.composing||t.$set(t.vdata,"createAt",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("bintang_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.bintang,expression:"vdata.bintang"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"bintang_",id:"bintang",name:"bintang",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.bintang},on:{input:function(a){a.target.composing||t.$set(t.vdata,"bintang",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("pilih_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.pilih,expression:"vdata.pilih"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"pilih_",id:"pilih",name:"pilih",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.pilih},on:{input:function(a){a.target.composing||t.$set(t.vdata,"pilih",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("disposisi1_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi1,expression:"vdata.disposisi1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"disposisi1_",id:"disposisi1",name:"disposisi1",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.disposisi1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi1",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("disposisi2_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi2,expression:"vdata.disposisi2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"disposisi2_",id:"disposisi2",name:"disposisi2",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.disposisi2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi2",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("disposisi3_")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi3,expression:"vdata.disposisi3"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"disposisi3_",id:"disposisi3",name:"disposisi3",pattern:"[a-zA-Z0-9\\s]+",minlength:"0",maxlength:"30",oninvalid:"this.setCustomValidity('Harus diisi dan Maksimal 30 !')",oninput:"this.setCustomValidity('')",required:""},domProps:{value:t.vdata.disposisi3},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi3",a.target.value)}}})])])]),e("br"),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-outline-primary ml-2  font-times text-uppercase",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" "+t._s("insert"==t.aksi?"insert":"update"==t.aksi?"update":"remove"))])])])])]),e("hr",{staticClass:"style13"}),e("div",{staticClass:"row"},[e("div",{staticClass:"offset-1 col-3"},[e("button",{staticClass:"text-uppercase font-times btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(a){t.aksi="insert",t.clearInput()}}},[e("span",{staticClass:"typcn typcn-plus"}),t._v("Insert")])]),e("div",{staticClass:"col-3 text-center"},[e("button",{staticClass:"text-uppercase font-times btn btn-sm btn-warning",attrs:{type:"button"},on:{click:function(a){t.aksi="update"}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v("Update")])]),e("div",{staticClass:"col-3 text-center"},[e("button",{staticClass:"text-uppercase font-times btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.aksi="remove"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v("Delete")])])])])]),e("hr",{staticClass:"style16"}),t.ready?e("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[e("div",{staticClass:"container flex flex-wrap mx-auto px-4 d-print-none"},[e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"input-group mb-2"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0",attrs:{type:"text",id:"searchTable",placeholder:"Cari Data ... "},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),e("div",{staticClass:"w-full sm:w-1/3"}),e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3 order-2"},[e("a",{staticClass:"btn-lg btn-success",attrs:{href:"https://akbarmaliki.github.io/infolayanansjs/#/excel?data="+JSON.stringify(t.td)}},[e("span",{staticClass:"typcn typcn-chart-bar"})])]),e("div",{staticClass:"col-3 order-3"},[e("div",{staticClass:"tips"},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print2}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Laporan")])])]),e("div",{staticClass:"col-4 order-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?e:e[0]}}},[e("option",[t._v("10")]),e("option",[t._v("20")]),e("option",[t._v("50")]),e("option",[t._v("100")]),e("option",{domProps:{value:1e6}},[t._v("Semua")])])])])])]),e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[e("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[e("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[e("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[e("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(a,s){return e("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:s+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(e){return t.sort(a)}}},[e("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v(" "+t._s(a)+" "),t.orderWith?[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-down"})])]:[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),e("tbody",t._l(t.td,(function(a,s){return e("tr",{key:s+"td"},[e("td",[t._v(t._s(s+t.temp1+1))]),e("no-ssr",t._l(t.thnya,(function(i,n){return e("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(i),expression:"!less.includes(item2)"}],key:n+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(a[i])},on:{tap:function(e){t.ambil(a,s),t.modal=!0,t.aksi="update"}}})})),1)],1)})),0)])],e("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[e("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):e("div",[e("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"typcn typcn-zoom"})])])}],n=e("5530"),o=(e("159b"),e("b64b"),e("d3b7"),e("25f0"),e("5319"),e("ac1f"),e("4de4"),e("841c"),e("d81d"),e("7db0"),e("fb6a"),e("bc3a"),e("8aa5")),r=e.n(o),d=e("03a0"),l=r.a.firestore(),c={layout:"admin",components:{downloadExcel:downloadExcel},data:function(){return{thbackground:"initial",thcolor:"asd",datanya:[],order:["id","nip","nama","jam_berangkat","keperluan","kendaraan","penumpang","lokasi","tujuan","createAt","bintang","pilih","disposisi1","disposisi2","disposisi3","driver","mobil"],vdata:{},ready:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id","createAt"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,aksi:"insert",formOn:!1,updateOn:!1}},methods:{insert:function(){delete this.vdata.id,l.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).doc().set(this.vdata).then((function(t){console.log("berhasil"),alert("simpan data berhasil!")}))},update:function(){l.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).doc(this.pilih.id).set(this.vdata,{merge:!0}).then((function(t){alert("update data berhasil!")}))},remove:function(){confirm("Apakah yakin menghapus data?")&&l.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).doc(this.pilih.id).delete().then((function(t){alert("delete data berhasil!")}))},refreshData:function(){var t=this,a=this;l.collection("users/".concat(this.$store.state.users.uid,"/history-keluar")).onSnapshot((function(e){var s=[];e.forEach((function(t){s.push(Object(n["a"])({id:t.id},t.data()))})),setTimeout((function(){(function(){var t,a;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(e){e.style.position="relative";var s=document.createElement("div");s.innerHTML="&nbsp;",s.style.top=0,s.style.right=0,s.style.bottom=0,s.style.width="5px",s.style.position="absolute",s.style.cursor="col-resize",s.addEventListener("mousedown",(function(s){t=e,a=e.offsetWidth-s.pageX})),e.appendChild(s)})),document.addEventListener("mousemove",(function(e){t&&(t.style.width=a+e.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})();var e=[],i={};s.forEach((function(t,n){a.order.forEach((function(t){i[t]="driver"==t?s[n][t].nama:"mobil"==t?s[n][t].nama_mobil:s[n][t]})),e.push(i),i={}})),t.datanya=e;var n=t.order;n=t.$_.difference(n,t.unless),t.thnya=n}),1e3)}))},ambil:function(t,a){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var e=this.$_.clone(t);console.log(e),this.vdata=e,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var a=Object.keys(this.vdata);a.forEach((function(a){t.vdata[a]=""}))},
//!==================
//! hapus dari sini
//! =================
checkedAll:function(){console.log(this.checkedItem)},susun:function(t){var a=t,e=["id","nip","nama","jam_berangkat","keperluan","kendaraan","penumpang","lokasi","tujuan","createAt","bintang","pilih","disposisi1","disposisi2","disposisi3"],s=[],i={};return a.forEach((function(t,n){e.forEach((function(t){i[t]=a[n][t]})),s.push(i),i={}})),s},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),this.$store.state.print2=this.susun(this.$store.state.print2),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString()));this.$store.state.print2=this.susun(this.td),alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},isDate:function(t){var a;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),a=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,a.test(t))},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:d})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:d,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,a=Object.keys(t[0]);return a=this.$_.difference(a,this.unless),a},td:function(){var t=this,a=this,e=this.datanya;//! order fungsi
if(this.orderBy.length>0){var s=this.orderWith?"asc":"desc";e=this.$_.orderBy(e,[this.orderBy],[s])}//! search fungsi
var i=this.thnya;return e=e.filter((function(a,e,s){var n=!1;if(i.filter((function(e){"string"==typeof a[e]?-1!=a[e].toLowerCase().indexOf(t.search.toLowerCase())&&(n=!0):null!=a[e]&&-1!=a[e].toString().indexOf(t.search)&&(n=!0)})),n)return a})),//! cari shortcut contoh
e=e.map((function(t){var e={},s=Object.keys(t);return s=a.$_.difference(s,a.unless),s.forEach((function(i,n){s.find((function(t){return t==a.date[n]})),e[i]=t[i]})),e})),e=e.slice(this.temp1,this.temp2),e}},mounted:function(){this.refreshData()}},p=c,u=e("2877"),m=Object(u["a"])(p,s,i,!1,null,null,null);a["default"]=m.exports},5530:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("159b"),e("dbb4");var s=e("ade3");function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function n(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){Object(s["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},dbb4:function(t,a,e){var s=e("23e7"),i=e("83ab"),n=e("56ef"),o=e("fc6a"),r=e("06cf"),d=e("8418");s({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var a,e,s=o(t),i=r.f,l=n(s),c={},p=0;while(l.length>p)e=i(s,a=l[p++]),void 0!==e&&d(c,a,e);return c}})},e439:function(t,a,e){var s=e("23e7"),i=e("d039"),n=e("fc6a"),o=e("06cf").f,r=e("83ab"),d=i((function(){o(1)})),l=!r||d;s({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,a){return o(n(t),a)}})}}]);
//# sourceMappingURL=page-admin-report_keluar~31ecd969.12f61f60.js.map
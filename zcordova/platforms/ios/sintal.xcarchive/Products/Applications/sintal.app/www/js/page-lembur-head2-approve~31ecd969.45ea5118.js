(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-head2-approve~31ecd969"],{"03a0":function(t,a,e){var n=e("25bb"),r=e("d309");t.exports={distanceInWords:n(),format:r()}},"25bb":function(t,a){function e(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function a(a,e,n){var r;return n=n||{},r="string"===typeof t[a]?t[a]:1===e?t[a].one:t[a].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:a}}t.exports=e},"4de4":function(t,a,e){"use strict";var n=e("23e7"),r=e("b727").filter,i=e("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("159b"),e("dbb4");var n=e("ade3");function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},5970:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-sm btn-style1 font-bold text-uppercase underline",staticStyle:{position:"absolute","z-index":"10"},attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[e("span",{staticClass:"text-xl typcn typcn-arrow-left"}),t._v(" Kembali ")]),e("svg",{staticClass:"animated fadeInDown",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}})]),t.ready?e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("DISPOSISI HEAD")]),e("div",{staticClass:"card-body"},[e("tr",[e("td",[t._v("NIP")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.datanya.nip))])]),e("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"-10px",width:"40px",height:"40px"},attrs:{src:t.datanya.gambar}}),t._v(" Nama : "+t._s(t.datanya.nama)+" "),e("br"),t._v(" Unit : "+t._s(t.datanya.unit_kerja)+" "),e("tr",[e("td",[t._v("Tanggal Ijin Keluar")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.format(t.datanya.tanggal_ijin)))])]),e("tr",{directives:[{name:"show",rawName:"v-show",value:-1==t.datanya.lama_keluar.indexOf("undefined"),expression:"datanya.lama_keluar.indexOf('undefined')==-1"}]},[e("td",[t._v("Lama Keluar")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.datanya.lama_keluar))])]),e("tr",[e("td",[t._v("Ijin")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",{staticClass:"font-bold"},[t._v(t._s(t.datanya.ijin))])]),e("tr",[e("td",[t._v("Keperluan")]),e("td",{staticClass:"pl-1 pr-1"},[t._v(" : ")]),e("td",[t._v(t._s(t.datanya.keperluan))])]),e("span",{staticClass:"text-sm float-right"},[t._v(t._s(t.distanceToNow(t.datanya.createAt))+" Yang lalu")]),e("br"),e("hr",{staticClass:"style13"}),e("div",{staticClass:"sm-form"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.disposisi2,expression:"vdata.disposisi2"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"disposisi1",name:"disposisi1",rows:"2",placeholder:"disposisi ..."},domProps:{value:t.vdata.disposisi2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"disposisi2",a.target.value)}}})]),e("br"),e("br"),e("button",{staticClass:"btn btn-sm btn-style9 float-right",attrs:{type:"button"},on:{click:t.approve}},[t._v("Approve")]),e("button",{staticClass:"btn btn-sm btn-style9",staticStyle:{background:"linear-gradient(349deg, rgba(227,23,23,0.5410539215686274) 0%, rgba(232,53,17,0.8603816526610644) 97%)"},attrs:{type:"button"},on:{click:t.batal}},[t._v("BATAL")])])]):e("div",[e("p",{staticClass:"p-3 font-bold font-medium text-center animated bounce infinite"},[t._v("DATA TIDAK DITEMUKAN ...")])])])},r=[],i=e("5530"),o=(e("d81d"),e("bc3a"),e("8aa5")),s=e.n(o),u=e("4b97"),d=e("03a0"),c=s.a.firestore(),l=new u["a"],f={data:function(){return{datanya:{},vdata:{disposisi2:""},ready:!1,units:[]}},methods:{approve:function(){var t=this;console.log(t.datanya),confirm("yakin meng approve Ijin Keluar ?")&&(this.$store.dispatch("notifikasi",{title:"Permintaan Ijin Keluar diterima !",body:"Permintaan Ijin Keluar dari "+t.datanya.nama+" telah di disposisi",link:"/lembur/history",that:this.$store.state.users,to:t.datanya}),l.collection("ijin_keluar").doc().set({id:t.datanya.id2,status:3,dibaca:!1,disposisi_head:t.$store.state.users.id,disposisi2:t.vdata.disposisi2}).then((function(a){t.$router.push("/lembur"),console.log(a)})))},batal:function(){var t=this;if(confirm("yakin membatalkan Ijin Keluar?")){var a=prompt("Alasan dibatalkan ? ","-");console.log("from",t.datanya),this.$store.dispatch("notifikasi",{title:"Permintaan Ijin Keluar dibatalkan",body:a,link:"/lembur",from:this.$store.state.users,uid:t.datanya.froms,to:{id:t.datanya.froms}}),l.collection("ijin_keluar").doc(t.datanya.id2).delete().then((function(a){t.$router.push("/lembur")}))}},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:d,includeSeconds:!0})},format:function(t){return this.$datefns.format(new Date(t),"DD MMMM YYYY",{locale:d})}},mounted:function(){var t=this;console.log(this.$route.query),c.collection("users").where("bagian","==","deputy").get().then((function(a){var e=a.docs.map((function(t){return Object(i["a"])({id:t.id},t.data())}));t.units=e})),l.collection("ijin_keluar").doc().select("select *,tb2.fcm as fcm, tb1.id AS id2,tb2.id as id, NULL AS password, NULL AS password2 from ijin_keluar tb1 left join tbuser tb2 on tb2.id=tb1.froms where tb1.id='".concat(this.$route.query.id,"' && tb1.status='2'")).then((function(a){console.log("datanya",a),t.datanya=a[0],a[0]&&(t.ready=!0)}))},layout:"lembur"},p=f,b=e("2877"),m=Object(b["a"])(p,n,r,!1,null,null,null);a["default"]=m.exports},d309:function(t,a,e){var n=e("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],o=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],s=["AM","PM"],u=["am","pm"],d=["a.m.","p.m."],c={MMM:function(a){return t[a.getMonth()]},MMMM:function(t){return a[t.getMonth()]},dd:function(t){return e[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return o[t.getDay()]},A:function(t){return t.getHours()/12>=1?s[1]:s[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?d[1]:d[0]}},l=["M","D","DDD","d","Q","W"];return l.forEach((function(t){c[t+"o"]=function(a,e){return i(e[t](a))}})),{formatters:c,formattingTokensRegExp:n(c)}}function i(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r},d81d:function(t,a,e){"use strict";var n=e("23e7"),r=e("b727").map,i=e("1dde"),o=i("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,a,e){var n=e("23e7"),r=e("83ab"),i=e("56ef"),o=e("fc6a"),s=e("06cf"),u=e("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var a,e,n=o(t),r=s.f,d=i(n),c={},l=0;while(d.length>l)e=r(n,a=d[l++]),void 0!==e&&u(c,a,e);return c}})},e439:function(t,a,e){var n=e("23e7"),r=e("d039"),i=e("fc6a"),o=e("06cf").f,s=e("83ab"),u=r((function(){o(1)})),d=!s||u;n({target:"Object",stat:!0,forced:d,sham:!s},{getOwnPropertyDescriptor:function(t,a){return o(i(t),a)}})}}]);
//# sourceMappingURL=page-lembur-head2-approve~31ecd969.45ea5118.js.map
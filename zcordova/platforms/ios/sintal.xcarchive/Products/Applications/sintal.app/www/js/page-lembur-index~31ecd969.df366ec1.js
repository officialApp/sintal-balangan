(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-lembur-index~31ecd969"],{"25f0":function(t,e,a){"use strict";var n=a("6eeb"),s=a("825a"),r=a("d039"),i=a("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=l.name!=o;(u||p)&&n(RegExp.prototype,o,(function(){var t=s(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?i.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"4de4":function(t,e,a){"use strict";var n=a("23e7"),s=a("b727").filter,r=a("1dde"),i=r("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"7d97":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("transition",{attrs:{tag:"div","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",mode:"in-out"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuKanan,expression:"menuKanan"}],staticClass:" border-1 border-grey shadow-md rounded-bl-lg bg-white mt-1 pt-1 shadow-1",staticStyle:{position:"fixed","z-index":"11",right:"0",top:"0",width:"210px","box-shadow":"1px 1px 2px 1.5px black"}},[n("p",{staticClass:"p-2 btn-style8 btn-block ",class:{"text-red-600":t.notification2.length>0},on:{click:function(e){return t.$router.push("/notification")}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.notification2.length>0,expression:"notification2.length>0"}]},[t._v(t._s(t.notification2.length))]),n("span",{staticClass:"typcn typcn-bell"}),t._v(" Notification")]),n("p",{directives:[{name:"show",rawName:"v-show",value:!!t.$store.state.users&&"admin"==t.$store.state.users.auth,expression:"!$store.state.users ? false:$store.state.users.auth=='admin'?true:false"}],staticClass:"p-2 btn-style8 btn-block mt-1",on:{click:function(e){return t.$router.push("/tools")}}},[n("span",{staticClass:"typcn typcn-attachment"}),t._v(" Tools")]),n("p",{staticClass:"p-2 btn-style8 btn-block mt-1",on:{click:function(e){return t.$router.push("/setting")}}},[n("span",{staticClass:"typcn typcn-cog"}),t._v(" Setting")]),n("p",{directives:[{name:"show",rawName:"v-show",value:!!t.$store.state.users&&"admin"==t.$store.state.users.auth,expression:"!$store.state.users ? false:$store.state.users.auth=='admin'?true:false"}],staticClass:"p-2 btn-style8 btn-block mt-1",on:{click:function(e){return t.$router.push("/admin")}}},[n("span",{staticClass:"typcn typcn-at"}),t._v(" Admin")]),n("p",{staticClass:"p-2 btn-style8 btn-block mt-1",on:{click:t.logout}},[n("span",{staticClass:"typcn typcn-delete"}),t._v(" Logout")])])]),n("div",[n("div",{staticStyle:{height:"130px",background:"#0099ff",width:"100%"}}),n("div",{staticStyle:{height:"150px",background:"#fff",width:"100%"}}),n("svg",{staticStyle:{position:"absolute","margin-top":"-290px",height:"200px",width:"100vw"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{fill:"#ffffff","fill-opacity":"1",d:"M0,256L21.8,256C43.6,256,87,256,131,250.7C174.5,245,218,235,262,234.7C305.5,235,349,245,393,229.3C436.4,213,480,171,524,170.7C567.3,171,611,213,655,202.7C698.2,192,742,128,785,101.3C829.1,75,873,85,916,80C960,75,1004,53,1047,69.3C1090.9,85,1135,139,1178,138.7C1221.8,139,1265,85,1309,74.7C1352.7,64,1396,96,1418,112L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"}})]),n("img",{staticClass:"kinoLightBox img-fluid",staticStyle:{width:"220px",position:"absolute",left:"10px",top:"30px"},attrs:{src:a("c8f1")},on:{click:function(e){t.menuKanan=!1}}}),n("button",{staticClass:"btn btn-sm btn-style9",staticStyle:{"font-size":"14px",position:"absolute",right:"10px",top:"10px"},attrs:{type:"button"},on:{click:function(e){return t.menukanans()}}},[n("span",{staticClass:"typcn typcn-th-menu"}),n("button",{directives:[{name:"show",rawName:"v-show",value:t.notification2.length>0,expression:"notification2.length>0"}],staticClass:"btn btn-sm btn-danger",staticStyle:{position:"absolute",right:"3px",top:"2px"},attrs:{type:"button"}},[t._v(" "+t._s(t.notification2.length)+" ")])]),n("div",{staticClass:"p-2",staticStyle:{"margin-top":"-180px","z-index":"10",position:"absolute",width:"100%"},on:{click:function(e){t.menuKanan=!1}}},[n("div",{staticClass:"shadow-1 rounded-lg p-3",staticStyle:{"box-shadow":"-1px 10px 12px 2px rgba(0,0,0,0.49)","-moz-box-shadow":"-1px 10px 12px 2px rgba(0,0,0,0.49)",background:"white"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[this.$store.state.users&&"-"!=this.$store.state.users.gambar?n("img",{directives:[{name:"viewer",rawName:"v-viewer"}],key:t.$store.state.users.gambar,staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"-10px",width:"40px",height:"40px"},attrs:{src:this.$store.state.users.gambar}}):n("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid rounded-circle float-right",staticStyle:{"margin-top":"-10px",width:"40px",height:"40px"},attrs:{src:a("b709")}}),n("p",{staticClass:"p-2 text-sm text-uppercase font-courier"},[t._v("Hello "),n("span",{staticClass:"font-bold"},[t._v(t._s(!!this.$store.state.users&&t.$store.state.users.nama))])]),n("hr",{staticStyle:{margin:"0",padding:"0"}})]),n("div",{staticClass:"offset-2 col-3 mt-3 text-center"},[n("button",{staticClass:"btn btn-lg btn-style9 animate__animated animate__backInRight",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/lembur/ijin-lembur")}}},[n("span",{staticClass:"typcn typcn-stopwatch"})]),n("p",{staticClass:"text-center font-bold font-times animate__animated animate__fadeInDown delay-1s",staticStyle:{"font-size":"12px"}},[t._v("Ijin")])]),n("div",{staticClass:"offset-2 col-3 mt-3 text-center"},[n("button",{staticClass:"btn btn-lg btn-style9 animate__animated animate__backInLeft",attrs:{type:"button"},on:{click:function(e){"deputy"==t.$store.state.users.bagian||"unit_head"==t.$store.state.users.bagian?t.$router.push("/lembur/history/head"):t.$router.push("/404")}}},[n("span",{staticClass:"typcn typcn-th-list"})]),n("p",{staticClass:"text-center font-bold font-times animate__animated animate__fadeInDown delay-1s",staticStyle:{"font-size":"12px"}},[t._v("Log Semua")])]),n("div",{staticClass:"col-1"}),n("div",{staticClass:"col-3 mt-3 text-center",on:{click:function(e){return t.$router.push("/lembur/history/total?id="+t.$store.state.users.id)}}},[t._m(0),n("p",{staticClass:"text-center font-bold font-times animate__animated animate__fadeInDown delay-1s",staticStyle:{"font-size":"12px"}},[t._v("Total Ijin")])]),n("div",{staticClass:"col-3 mt-3 text-center"},[n("button",{staticClass:"btn btn-lg btn-style9 animate__animated animate__backInDown",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/lembur/history")}}},[n("span",{staticClass:"typcn typcn-user"})]),n("p",{staticClass:"text-center font-bold font-times animate__animated animate__fadeInDown delay-1s",staticStyle:{"font-size":"12px"}},[t._v("Log Ijin")])]),n("div",{staticClass:"col-3 mt-3 text-center"},[n("button",{staticClass:"btn btn-lg btn-style9 animate__animated animate__backInUp",attrs:{type:"button"},on:{click:function(e){"deputy"==t.$store.state.users.bagian?t.$router.push("/lembur/head2"):t.$router.push("/404")}}},[n("span",{staticClass:"typcn typcn-pen"})]),n("p",{staticClass:"text-center font-bold font-times animate__animated animate__fadeInDown delay-1s",staticStyle:{"font-size":"12px"}},[t._v("Approve Pimpinan")])]),n("div",{staticClass:"col-3 mt-3 text-center"},[n("button",{staticClass:"btn btn-lg btn-style9 animate__animated animate__backInLeft",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/setting")}}},[n("span",{staticClass:"typcn typcn-cog"})]),n("p",{staticClass:"text-center font-bold font-times animate__animated animate__fadeInDown delay-1s",staticStyle:{"font-size":"12px"}},[t._v("Setting")])])]),n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,64L60,96C120,128,240,192,360,192C480,192,600,128,720,106.7C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}})])])]),n("div",{staticClass:"p-2 mt-3"},[n("Berita")],1),n("div",[n("div",{staticClass:"text-center p-2",staticStyle:{width:"100%",background:"black",color:"white"}},[n("marquee",{on:{click:function(e){return t.$router.push("/test")}}},[t._v("Created By Kominfo Balangan")])],1)])])])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-lg btn-style9 animate__animated animate__backInRight",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-download"})])}],r=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("div",{staticClass:"bg-grey-lightest"},[a("a",{staticClass:"float-right font-bold mr-3 mt-4",staticStyle:{"font-size":"12px"},attrs:{href:"https://mediacenter.balangankab.go.id"}},[t._v(" Berita Selengkapnya ")]),a("p",{staticClass:"p-3 font-bold text-lg"},[t._v("Berita Terbaru")]),t._l(t.beritas,(function(e,n){return a("a",{key:n+"berutas",staticClass:"row border-b-1 p-2 border-black ",attrs:{target:"__blank",href:"https://mediacenter.balangankab.go.id/artikel/detail/"+e.slug_berita}},[a("div",{staticClass:"col-3 text-center"},[a("img",{staticClass:"text-center img-fluid",staticStyle:{"max-height":"60px"},attrs:{src:"https://mediacenter.balangankab.go.id/upload/artikel/"+e.gambar,alt:""}})]),a("div",{staticClass:"col-9"},[a("p",{staticClass:"text-sm font-bold"},[t._v(t._s(e.judul))]),a("p",{staticClass:"text-sm",domProps:{innerHTML:t._s(e.content.substr(0,70))}}),a("p",{staticClass:"text-sm opacity-75 font-bold",staticStyle:{"font-size":"12px"}},[t._v("Source : Media Center")])])])}))],2)])}),i=[],o=a("1da1"),c=(a("96cf"),a("53ca")),l=a("d4ec"),u=a("bee2"),p=(a("b64b"),a("159b"),a("5319"),a("ac1f"),a("d3b7"),a("25f0"),a("4627")),d=a("bc3a"),h=a.n(d),b=a("6821"),m=a.n(b),f="borneojs",g=!1,k=!0,w="php",v="",y="",_=0,x="https://mediacenter.balangankab.go.id",C=x+"/apis.php",H=x+"/upload1.php",j=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,[{key:"collection",value:function(t){return v=t,this}},{key:"doc",value:function(t){return t&&(y=t),this}},{key:"set",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a){var n,s,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=function(t){return Object.keys(t)},n=new FormData,console.log("vdata",e),s=Object.keys(e),s.forEach((function(t){console.log(Object(c["a"])(e[t])),"string"==typeof e[t]&&(e[t]=e[t].replace(/'/g,"\\'"),e[t]=e[t].replace(/"/g,'"'))})),a&&(g=a),g&&(n.append("header",localStorage.getItem("auth._token.local")),n.append("key-h",localStorage.getItem("auth._token.local"))),n.append("api-token",I(f)),n.append("5e19fb19a0aa66a0",I(g.toString())),n.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),n.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),n.append("t-bl",I(v)),n.append("backend",I(w)),k?(n.append("scramble",k),n.append("data",I(JSON.stringify(e)))):n.append("data",JSON.stringify(e)),n.append("key-z-token",I("set")),n.append("key",r(e)),t.next=18,h.a.post(C,n).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found"),_++,_<2&&i.set(e)}));case 18:return t.abrupt("return",t.sent);case 19:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a,n){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new FormData,s.append("t-bl",I(v)),s.append("backend",I(w)),s.append("api-token",I(f)),s.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),s.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),n&&(g=n),g&&(s.append("header",localStorage.getItem("auth._token.local")),s.append("key-h",localStorage.getItem("auth._token.local"))),s.append("5e19fb19a0aa66a0",I(g.toString())),k?(s.append("scramble",k),s.append("sd28(#092/sd",I(e)),s.append("23*(kdj",I(a))):(s.append("sd28(#092/sd",e),s.append("23*(kdj",a)),""!=y.length&&s.append("id","".concat(y)),s.append("key-z-token",I("get")),t.next=14,h.a.post(C,s).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}}),t)})));function e(e,a,n){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,k&&n.append("scramble",k),e&&(g=e),g&&(n.append("header",localStorage.getItem("auth._token.local")),n.append("key-h",localStorage.getItem("auth._token.local"))),n.append("t-bl",I(v)),n.append("api-token",I(f)),n.append("5e19fb19a0aa66a0",I(g.toString())),n.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),n.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),n.append("backend",I(w)),n.append("sd28(#092/sd",a),""!=y.length&&n.append("id","".concat(y)),n.append("key-z-token",I("delete")),t.next=15,h.a.post(C,n).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("Data tidak ditemukan")}));case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"select",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,n.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),n.append("api-token",I(f)),n.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),a&&(g=a),g&&(n.append("header",localStorage.getItem("auth._token.local")),n.append("key-h",localStorage.getItem("auth._token.local"))),n.append("t-bl",I(v)),n.append("5e19fb19a0aa66a0",I(g.toString())),n.append("backend",I(w)),k?(n.append("scramble",k),n.append("sd28(#092/sd",I(e))):n.append("sd28(#092/sd",e),""!=y.length&&n.append("id","".concat(y)),n.append("key-z-token",I("select")),t.next=14,h.a.post(C,n).then((function(t){return console.log(t),t.data})).catch((function(t){console.log("table not found")}));case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"login",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a,n,s){var r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),r=new FormData,r.append("api-token",I(f)),r.append("token-u",I(e.username)),r.append("token-p",I(m()(e.password))),r.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),r.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),r.append("backend",I(w)),r.append("key-z-token",I("login")),t.next=11,h.a.post(x+"/apis.php",r).then((function(t){console.log("data login",t),localStorage.setItem("auth._token.local",t.data.token),localStorage.setItem("auth.local",t.data.token);var e=new FormData;e.append("api-token",I(f)),e.append("key-h",localStorage.getItem("auth._token.local")),e.append("key-z-token",I("getuser")),h.a.post(x+"/apis.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){console.log("changeuser",t),i.Oauth=!0,a.commit("changeUsers",t.data),localStorage.setItem("users",JSON.stringify(t.data)),n.push(s)}))})).catch((function(t){alert("username salah")}));case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})));function e(e,a,n,s){return t.apply(this,arguments)}return e}()},{key:"login2",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a,n,s){var r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new FormData,r.append("api-token",I(f)),r.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),r.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),r.append("token-u",I(e.username)),r.append("token-p",I(e.password)),t.next=8,h.a.post(x+"/auth/login.php",r).then((function(t){console.log("data login",t),localStorage.setItem("auth._token.local",t.data.token),localStorage.setItem("auth.local",t.data.token);var e=new FormData;e.append("api-token",I(f)),e.append("key-h",localStorage.getItem("auth._token.local")),e.append("key-z-token",I("getuser")),h.a.post(x+"/apis.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){console.log("changeuser",t),i.Oauth=!0,a.commit("changeUsers",t.data),localStorage.setItem("users",JSON.stringify(t.data)),s&&n.push(s)}))}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e,a,n,s){return t.apply(this,arguments)}return e}()},{key:"register",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("api-token",I(f)),a.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),a.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),a.append("token-u",I(e.username)),a.append("token-p",I(e.password)),t.next=8,h.a.post(x+"/auth/register.php",a).then((function(t){return t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"ceklogin",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,n.append("api-token",I(f)),n.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),n.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),n.append("backend",I(w)),n.append("key-z-token",I("getuser")),n.append("key-h",localStorage.getItem("auth._token.local")),t.next=9,h.a.post(x+"/apis.php",n,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){if("object"==Object(c["a"])(t.data))return e.commit("changeUsers",t.data),localStorage.setItem("users",JSON.stringify(t.data)),t;throw Error})).catch((function(t){throw Error}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"getuser",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("api-token",I(f)),a.append("authentication","Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudiacPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8"),a.append("Authorization",'"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"'),a.append("backend",I(w)),a.append("key-z-token",I("getuser")),a.append("key-h",localStorage.getItem("auth._token.local")),t.next=9,h.a.post(x+"/apis.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){return console.log(t),e.commit("changeUsers",t.data[0]),localStorage.setItem("users",JSON.stringify(t.data[0])),t.data[0]}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"upload",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,n,s,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this,a=e,n={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},t.prev=3,s=a.files[0],r=new FormData,t.next=8,Object(p["a"])(s,n);case 8:return i=t.sent,r.append("api-token",I(f)),r.append("file",i),r.append("data","select * from tbuser"),r.append("secret","dsdxxoi4#$(*#sdsaaada@#"),t.next=15,h.a.post(H,r).then((function(t){return x+t.data}));case 15:return t.abrupt("return",t.sent);case 18:t.prev=18,t.t0=t["catch"](3),console.log(t.t0);case 21:case"end":return t.stop()}}),t,this,[[3,18]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();function I(t){for(var e="",a="",n=0;n<t.length;n++)e="",e=t.charAt(n),"a"==e?e=e.replace("a","x"):"b"==e?e=e.replace("b","v"):"c"==e?e=e.replace("c","u"):"d"==e?e=e.replace("d","w"):"e"==e?e=e.replace("e","y"):"f"==e?e=e.replace("f","z"):"g"==e?e=e.replace("g","t"):"h"==e?e=e.replace("h","s"):"i"==e?e=e.replace("i","r"):"j"==e?e=e.replace("j","q"):"k"==e?e=e.replace("k","p"):"l"==e?e=e.replace("l","o"):"m"==e?e=e.replace("m","n"):"z"==e?e=e.replace("z","f"):"y"==e?e=e.replace("y","e"):"x"==e?e=e.replace("x","a"):"w"==e?e=e.replace("w","d"):"v"==e?e=e.replace("v","b"):"u"==e?e=e.replace("u","c"):"t"==e?e=e.replace("t","g"):"s"==e?e=e.replace("s","h"):"r"==e?e=e.replace("r","i"):"q"==e?e=e.replace("q","j"):"p"==e?e=e.replace("p","k"):"o"==e?e=e.replace("o","l"):"n"==e?e=e.replace("n","m"):"1"==e?e=e.replace("1","0"):"2"==e?e=e.replace("2","8"):"3"==e?e=e.replace("3","9"):"4"==e?e=e.replace("4","7"):"5"==e?e=e.replace("5","6"):"0"==e?e=e.replace("0","1"):"8"==e?e=e.replace("8","2"):"9"==e?e=e.replace("9","3"):"7"==e?e=e.replace("7","4"):"6"==e?e=e.replace("6","5"):" "==e?e=e.replace(" ","_"):"_"==e?e=e.replace("_"," "):"*"==e?e=e.replace("*","/"):"/"==e?e=e.replace("/","*"):","==e?e=e.replace(",","^"):"^"==e&&(e=e.replace("^",",")),a+=e;return a}var S=j,z=new S,F={data:function(){return{beritas:[]}},methods:{getBerita:function(){}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t,z.collection("artikel").doc().get("*","order by ditulis desc limit 10").then((function(t){console.log("artikel",t),a.beritas=t,a.$forceUpdate()}));case 2:case"end":return e.stop()}}),e)})))()}},A=F,Q=a("2877"),M=Object(Q["a"])(A,r,i,!1,null,null,null),O=M.exports,L=a("0a63"),R=a("4b97"),E=a("8aa5"),$=a.n(E),B=new R["a"],D=$.a.database(),J={layout:"lembur",data:function(){return{ready:!1,notification:[],notification2:[],menuKanan:!1,vicons:[],notifId:[],sops:[],series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],chartOptions:{chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Pemakai an aplikasi",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}}},watch:{notifId:function(){this.notifId.id==this.$store.state.users.id&&this.getNotif()}},methods:{getNotif:function(){var t=this;B.collection("notifikasi").doc().select("select * from notifikasi where id_user='".concat(this.$store.state.users.id,"' order by createdAt desc")).then((function(e){var a=e,n=a.filter((function(t){if(!t.dibaca)return t}));t.notification=a,t.notification2=n,console.log("notification",a)}))},logout:function(){this.$store.dispatch("logout")},menukanans:function(){this.menuKanan=!this.menuKanan}},beforeMount:function(){var t=this,e=this;B.collection().ceklogin(this.$store).then((function(t){console.log("ada")})).catch((function(a){console.log("error"),t.$store.state.users||e.$router.push("/")})),setTimeout((function(){"true"==e.$store.state.users.hapus&&e.$store.dispatch("logout")}),1500)},mounted:function(){var t=this;setTimeout((function(){t.getNotif()}),3e3),D.ref("/notif/sintal").on("value",(function(e){t.notifId=e.val(),console.log(e.val())})),console.log("users",this.$store.state.users),this.$store.state.users&&(this.$store.state.users.changepassword,"true"==this.$store.state.users.pertama||this.$router.push("/pertama"),this.$store.state.users.changettd)},components:{Berita:O,Carousel:L["Carousel"],Slide:L["Slide"]}},U=J,P=Object(Q["a"])(U,n,s,!1,null,null,null);e["default"]=P.exports},b709:function(t,e,a){t.exports=a.p+"img/nofound.2251b368.png"},c8f1:function(t,e,a){t.exports=a.p+"img/kopdiskominfo.bdcc1330.png"}}]);
//# sourceMappingURL=page-lembur-index~31ecd969.df366ec1.js.map
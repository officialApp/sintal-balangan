(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af48f40c"],{"7b3d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.busy?n("div",[t._m(0)]):t._e(),n("router-view")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"absolute",height:"100vh",width:"100vw",background:"linear-gradient(90deg, rgba(8,34,11,0.5522584033613445) 3%, rgba(1,11,2,0.5046393557422969) 98%)",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[n("p",{staticClass:"font-bold text-2xl text-red animated bounce infinite",staticStyle:{position:"absolute",top:"50%",left:"30%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[t._v("LOADING ...")])])}],s=(n("bc3a"),n("8aa5")),r=n.n(s),a=n("4b97"),c=(r.a.firestore(),new a["a"]),u={data:function(){return{test:1,bearer:"",busy:!1}},methods:{mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.version(),this.loginOAuth()}},mounted:function(){var t=this;document.addEventListener("deviceready",(function(){document.addEventListener("backbutton",(function(t){t.preventDefault(),navigator.app.exitApp()}),!1)}));var e=this;//! idleLogout();
window.addEventListener("scroll",(function(t){this.scrollY}));var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"),document.head.appendChild(n),setTimeout((function(){(new WOW).init()}),500),document.addEventListener("deviceready",(function(){var t=PushNotification.init({android:{senderID:"494678481790",sound:"true",vibrate:"true",clearNotifications:!0,forceShow:!0},ios:{alert:"true",badge:"true",sound:"true"}});PushNotification.createChannel((function(){console.log("success")}),(function(){console.log("error")}),{id:"test-channel",description:"My first test channel",importance:5,vibration:[500,1e3,500,500],sound:"test"}),t.on("registration",(function(t){localStorage.setItem("notifid",t.registrationId),e.regis=t.registrationId,e.$forceUpdate(),this.$store.state.users&&c.collection("tbuser").doc().set({id:this.$store.state.users.id,fcm:t.registrationId}).then((function(t){console.log(t)}))})),t.subscribe("epermit",(function(){}),(function(t){alert("error subscribe epermit")})),t.on("notification",(function(t){})),t.on("error",(function(t){console.log(t.message)}))}),!1),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))}},d=u,l=(n("f70f"),n("2877")),f=Object(l["a"])(d,i,o,!1,null,null,null);e["default"]=f.exports},f70f:function(t,e,n){"use strict";n("fb80")},fb80:function(t,e,n){}}]);
//# sourceMappingURL=chunk-af48f40c.8d86656b.js.map
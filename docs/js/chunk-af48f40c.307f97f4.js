(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af48f40c"],{"7b3d":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.busy?n("div",[t._m(0)]):t._e(),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"absolute",height:"100vh",width:"100vw",background:"linear-gradient(90deg, rgba(8,34,11,0.5522584033613445) 3%, rgba(1,11,2,0.5046393557422969) 98%)",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[n("p",{staticClass:"font-bold text-2xl text-red animated bounce infinite",staticStyle:{position:"absolute",top:"50%",left:"30%",transform:"translateX(-50%) translateY(-50%)","z-index":"100"}},[t._v("LOADING ...")])])}],r=n("53ca"),s=n("4b97"),a=(new s["a"],{data:function(){return{test:1,bearer:"",busy:!1}},methods:{},mounted:function(){var t=this,e=this;//! idleLogout();
window.addEventListener("scroll",(function(t){this.scrollY})),document.addEventListener("deviceready",(function(){var t=PushNotification.init({android:{senderID:"494678481790",sound:"true",vibrate:"true",clearNotifications:!0,forceShow:!0},ios:{alert:"true",badge:"true",sound:"true"}});PushNotification.createChannel((function(){console.log("success")}),(function(){console.log("error")}),{id:"test-channel",description:"My first test channel",importance:5,vibration:[500,1e3,500,500],sound:"test"}),t.on("registration",(function(t){localStorage.setItem("notifid",t.registrationId),e.regis=t.registrationId,e.$forceUpdate(),this.$store.state.users})),t.subscribe("epermit",(function(){}),(function(t){alert("error subscribe epermit")})),t.on("notification",(function(t){})),t.on("error",(function(t){console.log(t.message)}))}),!1),"object"===("undefined"===typeof cordova?"undefined":Object(r["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),window.powerManagement.dim((function(){console.log("Wakelock acquired")}),(function(){console.log("Failed to acquire wakelock")})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))}}),c=a,u=(n("f70f"),n("2877")),d=Object(u["a"])(c,o,i,!1,null,null,null);e["default"]=d.exports},f70f:function(t,e,n){"use strict";n("fb80")},fb80:function(t,e,n){}}]);
//# sourceMappingURL=chunk-af48f40c.307f97f4.js.map
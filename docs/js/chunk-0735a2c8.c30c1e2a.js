(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0735a2c8"],{"21b4":function(t,e,n){"use strict";n("b08b")},"2c25":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.busy?n("div",{staticStyle:{width:"100%",height:"1200px",position:"fixed","z-index":"200",background:"radial-gradient(circle, rgba(33,35,57,0.36738445378151263) 0%, rgba(34,33,48,0.33657212885154064) 100%)"}},[n("p",{staticClass:"animated infinite bounce font-bold font-times text-2xl text-black",staticStyle:{"margin-top":"50vh","margin-left":"30vw"}},[t._v("LOADING ...")])]):t._e(),t.ready?n("div",[n("router-view",{staticStyle:{"z-index":"10"}})],1):t._e()])},o=[],s=(n("159b"),n("bc3a"),n("8aa5")),r=n.n(s),a=(n("6821"),n("4b97")),c=(r.a.firestore(),n("03a0")),u=new a["a"],l={components:{},data:function(){return{notifs:[],notifn:0,count:0,bgleft1:"#343A40",bgleft2:"#232e30",bgleft3:"#343A40",bgrighttop:"#1A3B4E",test:1,menuTrigger:!1,menuKanan:!1,ready:!1,bearer:"",busy:!1}},beforeMount:function(){var t=this;t.ready=!0;var e=localStorage.getItem("notifid");setTimeout((function(){u.collection("tbuser").doc().set({id:t.$store.state.users.id,fcm:e}).then((function(t){console.log(t)}))}),3e3)},methods:{refresh:function(){this.$router.go()},exits:function(){document.addEventListener("deviceready",(function(t){navigator.app.exitApp()}),!0)},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:c,includeSeconds:!0})},logout:function(){this.$store.dispatch("logout"),localStorage.removeItem("login"),this.$router.push("/")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),this.version()}},mounted:function(){var t=this,e=this;document.addEventListener("deviceready",(function(){document.addEventListener("backbutton",(function(t){t.preventDefault(),navigator.app.exitApp()}),!1);var t=PushNotification.init({android:{senderID:"494678481790",sound:"true",vibrate:"true",clearNotifications:!0,forceShow:!0},ios:{alert:"true",badge:"true",sound:"true"}});PushNotification.createChannel((function(){console.log("success")}),(function(){console.log("error")}),{id:"test-channel",description:"My first test channel",importance:5,vibration:[500,1e3,500,500],sound:"test"}),t.on("registration",(function(t){localStorage.setItem("notifid",t.registrationId),e.regis=t.registrationId,e.$forceUpdate(),this.$store.state.users&&u.collection("tbuser").doc().set({id:this.$store.state.users.id,fcm:t.registrationId}).then((function(t){console.log(t)}))})),t.subscribe("epermit",(function(){}),(function(t){alert("error subscribe epermit")})),t.on("notification",(function(t){})),t.on("error",(function(t){console.log(t.message)}))}),!1),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))}},d=l,f=(n("21b4"),n("2877")),g=Object(f["a"])(d,i,o,!1,null,"42bfa850",null);e["default"]=g.exports},b08b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0735a2c8.c30c1e2a.js.map
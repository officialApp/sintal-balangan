// document.addEventListener("deviceready",function() {
//   //taruh didalam sini

// })

import autophp from '@/plugins/autophp.js'
var sdb = new autophp();

class cordova{
    backbutton(){
        document.addEventListener("backbutton", function(e) {
            e.preventDefault();
            navigator.app.exitApp();
            return;
        }, false);
    }
    // ======================================================
    printer(){
         // cordova.plugins.printer is now available
         cordova.plugins.printer.print();
    }
    // ======================================================
    initNotification(){
        var push = PushNotification.init({
            android: {
              senderID: "494678481790", // setting project firebase
              sound: "true",
              vibrate: "true",
              clearNotifications: true, // clear notifications from shade on app start
              forceShow: true
            },
            ios: {
              alert: "true",
              badge: "true",
              sound: "true"
            }
          });
          PushNotification.createChannel(() => {
            console.log('success');
          }, () => {
            console.log('error');
          }, {
            id: "test-channel",
            description: "My first test channel",
            importance: 5,
          vibration: [500, 1000, 500, 500],
            sound:'test', // test adalah test.wav nama file sound notification
          });
          push.on("registration", function(data) {
            // ! AMBIL data registrationId untuk ditaruh sebagai payload to : ""
            // ! simpan data regitrationId kedatabase
            localStorage.setItem("notifid", data.registrationId);
            that.regis = data.registrationId;
            that.$forceUpdate()
            if(this.$store.state.users){
              // db.collection('users').doc(this.$store.state.users.uid).set({fcm:data.registrationId},{merge:true}).then(res=>{
              //   console.log("BERHASIL")
              // })
              sdb.collection('tbuser').doc().set({id:this.$store.state.users.id,fcm:data.registrationId}).then(res=>{
                  console.log(res)
              })
            }
            // Simpan data.registrationId KE DATABASE DENGAN GANDENGAN ID USER untuk di tembak dengan payload {to : ""} firebase
          });
          push.subscribe(
            'epermit',
            () => {
              // alert('success subscribe epermit');
            },
            e => {
              alert('error subscribe epermit');
              // console.log('error:', e);
            }
          );
          push.on("notification", function(data) {
          });
          push.on("error", function(e) {
            console.log(e.message);
          });
    }

}
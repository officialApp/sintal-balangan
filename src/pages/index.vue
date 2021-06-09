<template>
  <div class="bg1">
    <div class="float-right mr-5 mt-3">
      <span class="text-2xl font-bold pl-4 cursor-pointer" @click="$router.push('/login')">LOGIN</span>
      <span class="text-2xl font-bold pl-4 cursor-pointer" @click="$router.push('/privacy')">PRIVACY</span>
    </div>
    <img src="@/static/logobalangan.png" class="" style="height:20vh;position:absolute;left:100px;top:20px;" alt="">
    <img src="@/static/sintal.png" class="" style="height:80vh;position:absolute;right:100px;bottom:20px;" alt="">
    <div class="row">
      <div class="offset-sm-1 col-sm-8">
        <div style="height:30vh;">

        </div>
        <div class="p-3">
          <p class=" text-white text-3xl pt-2 font-bold">
            SINTAL
          </p>
          <p class=" text-white font-bold text-xl">
            APLIKASI SURAT IJIN DIGITAL
          </p>
          <p class=" text-white font-bold text-xl">
            KABUPATEN BALANGAN
          </p>
    <br>
    <br>
    <br>
    <a href="https://play.google.com/store/apps/details?id=com.kominfobalanganijin.app" target="__blank">
    <img src="@/static/googleplay.png" style="height:80px;width:250px;" class="">
    </a>
    <br>
    <img src="@/static/appstore.png" style="height:80px;width:250px;" class="">
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
let db = firebase.firestore();
// let rdb = firebase.database()
import autophp from "@/plugins/autophp";
let sdb = new autophp();
export default {
  data() {
    return {};
  },
  methods: {
    login(){
      alert('login')
    },
    privacy(){
      alert('privacy')
    }
  },
  mounted() {},
  metaInfo() {
    return {
      title: "SINTAL KABUPATEN BALANGAN",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "SINTAL KABUPATEN BALANGAN",
        },
        {
          property: "og:title",
          content: "Tentang Taufik akbar maliki / TA_Maliki",
        },
        { property: "og:site_name", content: "TA_Maliki" },
        { property: "og:type", content: "website" },
        { property: `og:url`, content: `${this.$store.state.url}` },
        { property: `og:image`, content: `${this.$store.state.url}/Kino.jpg` },
        { property: `og:description`, content: `documentasi ya` },
        { name: "keywords", content: "blog,portofolio,freelance" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>
<style>
.bg1{
  background: url("../static/bg.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height:100vh;
}
</style>
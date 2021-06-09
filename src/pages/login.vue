<template>
  <div class="bg1" style="height:100vh;width:100vw;">
          <div style="position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);width:40vw;">
              <div class="p-5 bg-white shadow-lg rounded-lg">
                  <p class="text-center font-bold text-2xl">LOGIN</p>
                  <div class="sm-form ">
                      <label for="username">Your username</label>
                      <input type="text" id="username" name="username" class="form-control form-control-sm" placeholder="username" v-model="vdata.username" >
                  </div>
                  <div class="sm-form ">
                      <label for="password">Your password</label>
                      <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password" >
                  </div>
                  <br>
                  <hr>
                  <br>
                  <div class="text-center">
                      <button type="button" @click="login" class="btn btn-sm btn-style9  ">Login</button>
                      <br>
                      <br>
                      <hr>
                      <br>
                      <p class="cursor-pointer" @click="$router.push('/')">Back</p>

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
    return {
        vdata:{}
    };
  },
  methods: {
    login(){
      alert('Username atau password salah !')
    },
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
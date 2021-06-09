// import autophp from '@/plugins/autophp.js'
// let sdb = new autophp()

import axios from 'axios'
let auth = true; // pake auth atau tidak
let scrambles = true; // data apakah scramble atau tidak
let backend = "php"; //php, firebase, laravel
let table = "";
let id = "";
// let url = "http://localhost:8080/auto"
let url = "https://api.officialapp.website"
let that = this;
let errCount=0;
let urlBASE = auth ? url+"/api2.php" : url+"/api.php";
class autophp {
    collection(tables) {
        table = tables;
        return this;
    }
    doc(ids) {
        if (ids) {
            // that.vdata.id = ids;
            id = ids;
        }
        return this;
    }
    async set(vdata) {
        let fd = new FormData();
        console.log('vdata',vdata)
        let keys = Object.keys(vdata)
        keys.forEach(e=>{
            console.log(typeof vdata[e])
            if(typeof vdata[e]=='string'){
                vdata[e] =vdata[e].replace(/'/g, "\\'");
                vdata[e]= vdata[e].replace(/"/g,`\"`);
            }
        })
        // if (id != "") {
        //     vdata.id = id;
        // }
        if (auth) {
            fd.append('header', localStorage.getItem('auth._token.local'))
        }
        fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia"+"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
        fd.append('Authorization','"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
        fd.append("table", table);
        fd.append("scramble", scrambles);
        fd.append("backend", backend);
        if(scrambles){
          fd.append("data", scramble(JSON.stringify(vdata)));
        }else{
          fd.append("data", JSON.stringify(vdata));
        }
        fd.append("type", "set");
        fd.append("key", getKey(vdata));

        function getKey(data) {
            return Object.keys(data);
        }
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        }).catch(err=>{
            console.log('table not found')
            errCount++;
            if(errCount<2){
                this.set(vdata)
            }
        })
    }
    async get(vdata) {
        let fd = new FormData();
        fd.append("table", table);
        fd.append("backend", backend);
        if (auth) {
            fd.append('header', localStorage.getItem('auth._token.local'))
        }
        fd.append("select", vdata);
        fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia"+"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
        fd.append('Authorization','"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
        if (id.length != "") {
            fd.append("id", `${id}`);
        }
        fd.append("type", "get");
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        }).catch(err=>{
            console.log('table not found')
        })
    }
    async delete(vdata) {
        let fd = new FormData();
        if (auth) {
            fd.append('header', localStorage.getItem('auth._token.local'))
        }
        fd.append("table", table);
        fd.append("backend", backend);
        fd.append("select", vdata);
        fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia"+"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
        fd.append('Authorization','"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
        if (id.length != "") {
            fd.append("id", `${id}`);
        }
        fd.append("type", "delete");
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        }).catch(err=>{
            console.log('Data tidak ditemukan')
        })
    }
    async select(vdata) {
        let fd = new FormData();
        fd.append("scramble", scrambles);
        if (auth) {
            fd.append('header', localStorage.getItem('auth._token.local'))
        }
        fd.append('authentication', "Bearer E2-azzadoDS02389SAkas?29!asdbi3d$SIDsaiH#asjknku-JKNjkbduawdiasb-?ioh893798mskjaksjdnwiu=idbasid0asjudia"+"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok-vyRxzUy0owj72EhAdz94kIRIMf4v4lHoFNF0tri_nmqIu4TfL8");
        fd.append('Authorization','"cPbt9I1_VB4:APA91bHrrUimOQ9QDOaTLUEWMHEGs8xhwCL5FYaGJhHccHYFuzlleb4RiH_7uQrFtaMXjqil9QKJhsvwod-ewMBok"')
        fd.append("table", table);
        fd.append("backend", backend);
        if(scrambles){
          fd.append("select", scramble(vdata));
        }else{
          fd.append("select", vdata);
        }
        if (id.length != "") {
            fd.append("id", `${id}`);
        }
        fd.append("type", "select");
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        }).catch(err=>{
            console.log('table not found')
        })
    }
    async ceklogin(store,router){ // CEK LOGIN BACKEND PHP
        let fd2 = new FormData();
        fd2.append('key-h',localStorage.getItem("auth._token.local"))
         return await axios
            .post(url+"/getUser.php", fd2, {  
              headers: {
                Authorization: localStorage.getItem("auth._token.local")
              }
            })
            .then(res => {
                  // if(res.data.indexOf('error')!=-1){
                  //   router.push('/')
                  // }else{
                    if(typeof res.data=='object'){
                      store.commit("changeUsers", res.data);
                      localStorage.setItem("users", JSON.stringify(res.data));
                      return res
                  } else {
                    throw Error;
                  }
                  
                  // }
          }).catch(err=>{
                  throw Error;
          })
    }
      async getuser(store){
        let fd2 = new FormData();
        axios
          .post(url+"/getUser.php", fd2, {
            headers: {
              Authorization: localStorage.getItem("auth._token.local")
            }
          })
          .then(res => {
            console.log(res);
            store.commit("changeUsers", res.data[0]);
            localStorage.setItem("users", JSON.stringify(res.data[0]));
            return res.data[0]
          });
      }
    
}
function scramble(teks) {
        let char = "";
        let hasil = "";
        for (var i = 0; i < teks.length; i++) {
          char = "";
          char = teks.charAt(i);
          if (char == "a") {
            char = char.replace("a", "x");
          } else if (char == "b") {
            char = char.replace("b", "v");
          } else if (char == "c") {
            char = char.replace("c", "u");
          } else if (char == "d") {
            char = char.replace("d", "w");
          } else if (char == "e") {
            char = char.replace("e", "y");
          } else if (char == "f") {
            char = char.replace("f", "z");
          } else if (char == "g") {
            char = char.replace("g", "t");
          } else if (char == "h") {
            char = char.replace("h", "s");
          } else if (char == "i") {
            char = char.replace("i", "r");
          } else if (char == "j") {
            char = char.replace("j", "q");
          } else if (char == "k") {
            char = char.replace("k", "p");
          } else if (char == "l") {
            char = char.replace("l", "o");
          } else if (char == "m") {
            char = char.replace("m", "n");
          } else if (char == "z") {
            char = char.replace("z", "f");
          } else if (char == "y") {
            char = char.replace("y", "e");
          } else if (char == "x") {
            char = char.replace("x", "a");
          } else if (char == "w") {
            char = char.replace("w", "d");
          } else if (char == "v") {
            char = char.replace("v", "b");
          } else if (char == "u") {
            char = char.replace("u", "c");
          } else if (char == "t") {
            char = char.replace("t", "g");
          } else if (char == "s") {
            char = char.replace("s", "h");
          } else if (char == "r") {
            char = char.replace("r", "i");
          } else if (char == "q") {
            char = char.replace("q", "j");
          } else if (char == "p") {
            char = char.replace("p", "k");
          } else if (char == "o") {
            char = char.replace("o", "l");
          } else if (char == "n") {
            char = char.replace("n", "m");
          } else if (char == "1") {
            char = char.replace("1", "0");
          } else if (char == "2") {
            char = char.replace("2", "8");
          } else if (char == "3") {
            char = char.replace("3", "9");
          } else if (char == "4") {
            char = char.replace("4", "7");
          } else if (char == "5") {
            char = char.replace("5", "6");
          } else if (char == "0") {
            char = char.replace("0", "1");
          } else if (char == "8") {
            char = char.replace("8", "2");
          } else if (char == "9") {
            char = char.replace("9", "3");
          } else if (char == "7") {
            char = char.replace("7", "4");
          } else if (char == "6") {
            char = char.replace("6", "5");
          } else if (char == " ") {
            char = char.replace(" ", "_");
          } else if (char == "_") {
            char = char.replace("_", " ");
          } else if (char == "*") {
            char = char.replace("*", "/");
          } else if (char == "/") {
            char = char.replace("/", "*");
          } else if (char == ",") {
            char = char.replace(",", "^");
          } else if (char == "^") {
            char = char.replace("^", ",");
          }
          hasil = hasil + char;
        }
        return hasil;
}

export default autophp
import axios from'axios'; 
import LocalStorage from '../helper/LocalStorage';

 function Get(url) {
  return new Promise(async(resolve, reject) => {
    try {
      console.log(new Date() + ": GET: " + url);
      axios
        .get(url, {
          method: "GET",
          headers: { "content-type": "application/json; charset=utf-8" },
        })
        .then((x) => {
          console.log(new Date() + ": RESPONSE: " + x);
          resolve(x.data);
        })
        .catch((err) => {
          console.log("ERROR: "+err);
          reject(err)});

      // var response = fetch(url,{method:"GET",credentials:'include',
      // headers: {'Content-Type': 'application/json', },});
      // //debugger
      // var json = response.json();
      // console.log(new Date() + ": Response:" + JSON.stringify(json));
      // resolve(json);
      // fetch(url, {
      //   method: "GET", // *GET, POST, PUT, DELETE, etc.
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      // })
      //   .then(res=>{console.log(JSON.stringify(res.data))})
      //   .then((result) => {
      //     console.log(new Date() + ": Response:" + JSON.stringify(result));
      //     resolve(false);
      //   })
      //   .catch((err) => {
      //     console.log(new Date() + ": " + err);
      //     reject(err);
      //   });
    } catch (e) {
      reject(e);
    }
  });
}
function Post({ data, url }) {
  return new Promise((resolve, reject) => {
    try {
      console.log(new Date() + ": POST: " + url);
      // axios({
      //   method: "POST",
      //   url,
      //   data,
      // })
      //   .then((res) => {
      //     console.log(new Date() + ": Response:" + res);
      //     resolve(res);
      //   })
      //   .catch((err) => {
      //     console.log(new Date() + ": " + err);
      //     reject(err);
      //   });
      reject(false);
    } catch (e) {
      reject(e);
    }
  });
}

const Fetch = {
  Get,
  Post,
};
export default Fetch;

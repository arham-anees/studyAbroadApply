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
          //console.log(new Date() + ": RESPONSE: " + x);
          debugger
          resolve(x.data);
        })
        .catch((err) => {
          //console.log("ERROR: "+err);
          debugger
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
      axios.post(url,{
        data,
      })
        .then((res) => {
          console.log(new Date() + ": Response: OK");
          console.log(JSON.stringify(res.status))
          if(res.status==200){
          resolve(res.data);
          }
          else{
            resolve(red.status)
          }
        })
        .catch((err) => {
          console.log(new Date() + ": " + err);
          reject(err);
        });
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

import axios from'axios'; 
import LocalStorage from '../helper/LocalStorage';

 function Get(url) {
  return new Promise(async(resolve, reject) => {
    try {
      //console.log(new Date() + ": GET: " + url);
      //debugger
      axios
        .get(url, {
          method: "GET",
          headers: { "content-type": "application/json; charset=utf-8" },
        })
        .then((x) => {
          console.log(new Date() + ": RESPONSE: " + (x));
          if(x.status==200){
          resolve(x.data);
          }
         
          else reject(x.status);
        })
        .catch((err) => {
          console.log("ERROR: "+err);
          console.log(url);
          reject(err)});

    } catch (e) {
      reject(e);
    }
  });
}
function Post({ data, url }) {
  return new Promise((resolve, reject) => {
    try {
      console.log(new Date() + ": POST: " + url);
      axios
        .post(url,data)
        .then((res) => {
          console.log(new Date() + ": Response: " + JSON.stringify(res.status));
          if (res.status == 200) {
            resolve(res.data);
          } else {
            reject(res.status);
          }
        })
        .catch((err) => {
          console.log(new Date() + ": ERROR: " + err);
          console.log(url);
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

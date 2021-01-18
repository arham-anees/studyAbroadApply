import axios from'axios'; 
import LocalStorage from '../helper/LocalStorage';

 function Get(url) {
  return new Promise(async(resolve, reject) => {
    try {
      console.log(new Date() + ": GET: " + url);
      debugger
      axios
        .get(url, {
          method: "GET",
          headers: { "content-type": "application/json; charset=utf-8" },
        })
        .then((x) => {
          console.log(new Date() + ": RESPONSE: " + (x));
          resolve(x.data);
        })
        .catch((err) => {
          //console.log("ERROR: "+err);
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

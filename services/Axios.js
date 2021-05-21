import axios from "axios";

function Get(url) {
  //console.log(url, "executing");
  return new Promise((resolve, reject) => {
    try {
      //debugger
      axios
        .get(url, {
          method: "GET",
          headers: { "content-type": "application/json; charset=utf-8" },
        })
        .then((x) => {
          //console.log(url, "executed");

          if (x.status == 200) {
            resolve(x.data);
          } else reject(x.status);
        })
        .catch((err) => {
          //console.log(url, "failed");
          console.log("sign in error", err);
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
}
function Post({ data, url }) {
  //console.log(url, "executing");
  return new Promise((resolve, reject) => {
    try {
      if (!data) data = [];
      axios
        .post(url, data)
        .then((res) => {
          //console.log(url, "executed");
          if (res.status == 200) {
            resolve(res.data);
          } else {
            reject(res.status);
          }
        })
        .catch((err) => {
          //console.log(url, "failed");

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

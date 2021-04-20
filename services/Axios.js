import axios from "axios";

function Get(url) {
  return new Promise(async (resolve, reject) => {
    try {
      //debugger
      axios
        .get(url, {
          method: "GET",
          headers: { "content-type": "application/json; charset=utf-8" },
        })
        .then((x) => {
          if (x.status == 200) {
            resolve(x.data);
          } else reject(x.status);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
}
function Post({ data, url }) {
  return new Promise((resolve, reject) => {
    try {
      if (!data) data = [];
      axios
        .post(url, data)
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          } else {
            reject(res.status);
          }
        })
        .catch((err) => {
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

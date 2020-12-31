

function Get(url) {
  return new Promise((resolve, reject) => {
    try {
      console.log(new Date() + ": GET: " + url);
      fetch(url)
        .then((res) => {
          console.log(new Date() + ": Response:" + JSON.stringify(res.data));
          resolve(res.data);
        })
        .then((err) => {
          console.log(new Date() + ": " + err);
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

const Axios = {
  Get,
  Post,
};
export default Axios;

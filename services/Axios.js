import axios from "axios";

function Get({data, url}) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url,
      data,
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
function Post({ data, url }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url,
      data,
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

const Axios = {
  Get,
  Post,
};
export default Axios;

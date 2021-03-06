import Fetch from "./Axios";
import Urls from "./Urls";

function GetHomePageGraphsData() {
  return new Promise((resolve, reject) => {
    Fetch.Post({ url: Urls.HomeGraphs })
      .then((res) => {
        //console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err)});
  });
}




const GraphsDataService={
    GetHomePageGraphsData
}

export default GraphsDataService;
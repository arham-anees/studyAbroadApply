import Fetch from "./Axios";
import Urls from "./Urls";

function GetHomePageGraphsData() {
  return new Promise((resolve, reject) => {
    Fetch.Post({ url: Urls.HomeGraphs })
      .then((res) => {
        //debugger;
        // console.log("*******************************************");
        // console.log(res["PieChartDataList"]);
        // console.log("*******************************************");

        resolve(res);
      })
      .catch((err) => console.log(err));
  });
}




const GraphsDataService={
    GetHomePageGraphsData
}

export default GraphsDataService;
import Fetch from "./Axios";
import Urls from "./Urls";

function GetHomePageGraphsData(){
    Fetch.Get(Urls.HomeGraphs)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>console.log(err));
}




const GraphsDataService={
    GetHomePageGraphsData
}

export default GraphsDataService;
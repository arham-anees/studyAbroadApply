import Axios from "./Axios";
import Urls from "./Urls";

function GetHomePageGraphsData(){
    Axios.Get(Urls.HomeGraphs)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>console.log(err));
}




const GraphsDataService={
    GetHomePageGraphsData
}

export default GraphsDataService;
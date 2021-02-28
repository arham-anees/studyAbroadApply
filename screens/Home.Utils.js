const Colors = [
    "rgb(0, 143, 251)",
    "rgb(0, 227, 150)",
    "rgb(254, 176, 25)",
    "rgb(255, 69, 96)",
  ];

function MapPieChartData(data){
    let pieChartData=[];
    data.forEach((ele, index) => {
        pieChartData.push({
            key:index,
            amount:ele.Key,
            label:ele.Value,
            svg: { fill: Colors[index] }
        })
    });
    return pieChartData;
}

function MapLineChartData(data){
    let lineChartData=[];
    let length=data.IndexWithCompanyName_Data1.length;
    for (let i = 0; i < length; i++) {
        lineChartData.push({
        country: data.IndexWithCompanyName_Data1[i][1],
        value: data.IndexWithData_Data1[i][1],
        //sentToInstitute: data.IndexWithData_SendToInstitute_Data2[i][1],
        // newApplications: data.IndexWithData_NewApplication_Data2[i][1],
        // progress:
        //   data.IndexWithData_SendToCounselor_Data2[i][1] +
        //   data.IndexWithData_SendToInstitute_Data2[i][1] +
        //   data.IndexWithData_NewApplication_Data2[i][1],
      });
    }
    return lineChartData;
}


function MapBarChartData(data){
    let barChartData=[];
    let length=data.IndexWithCompanyName_Data2.length;
    for (let i = 0; i < length; i++) {
      barChartData.push({
        country: data.IndexWithCompanyName_Data2[i][1],
        sentToCounselor: data.IndexWithData_SendToCounselor_Data2[i][1],
        sentToInstitute: data.IndexWithData_SendToInstitute_Data2[i][1],
        newApplications: data.IndexWithData_NewApplication_Data2[i][1],
        progress:
          data.IndexWithData_SendToCounselor_Data2[i][1] +
          data.IndexWithData_SendToInstitute_Data2[i][1] +
          data.IndexWithData_NewApplication_Data2[i][1],
      });
    }
    return barChartData;
}







const HomeUtils={
    MapPieChartData,
    MapBarChartData,
    MapLineChartData
}

export default HomeUtils;
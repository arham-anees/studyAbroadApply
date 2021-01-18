import Fetch from "./Axios";
import Urls from "./Urls";

function BrowseApplications() {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.BrowseApplications;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          //if call is successful
          //console.log(response);
          if (response == null) reject(Messages.FailedLogin);
          //if authentication is failed
          else {
            //if authentication is successful
            resolve(response.Applicationlist);
          }
        })
        .catch((err) => reject(err)); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function GetApplicationNotes(applicationId) {
  return new Promise((resolve, reject) => {
    try {
      const url=Urls.GetAppNotes;
      Fetch.Get(url+`?applicationId=${applicationId}`)//call authentication method
        .then((response) => {//if call is successful
          //console.log(response);
          if (response == null) reject(Messages.FailedLog);//if authentication is failed
          //else {//if authentication is successful
            //console.log(response);
            //LocalStorage.SetToken(response.data);//store token
            resolve(response);//
          //}
        })
        .catch((err) => {console.log("ERROR: ",err);reject(err)});//throw error
    } catch (e) {
      reject(e);
    }
  });
}



const ApplicationService={
    BrowseApplications,
    GetApplicationNotes
}

export default ApplicationService;
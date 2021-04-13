import LocalStorage from "../helper/LocalStorage";
import Messages from "../helper/Messages";
import Fetch from "./Axios";
import Urls from "./Urls";

function Login({ username, password }, callback) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.Login + `?username=${username}&password=${password}`;
      //console.log(url);
      Fetch.Get(url) //call authentication method
        .then(async (response) => {
          //if call is successful
          if (response == null) reject(Messages.FailedLogin);
          //if authentication is failed
          else {
            //if authentication is successful
            //console.log(response);
            if (response.data) {
              LocalStorage.SetToken(response.data, callback) //store token
                .then((x) => {
                  //console.log("saved response");
                  resolve(response);
                })
                .catch((err) => {
                  console.log(err);
                  reject(response.data);
                });
              //console.log(response.data);
            } else resolve(null);
          }
        })
        .catch((err) => {
          //console.log(err);
          reject(err);
        }); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function RegisterStudent({ FirstName, LastName, Email, Password, Gender }) {
  return new Promise((resolve, reject) => {
    try {
      const url =
        Urls.RegisterStudent +
        `?Email=${Email}&gender=${Gender}&password=${Password}&firstName=${FirstName}&lastName=${LastName}`;
      console.log(url);
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          console.log("response:", response);
          if (response == null) reject(Messages.RequestFailed);
          else {
            //if(response.ResponseStatus){
            resolve(response);
            ///}
            //else {
            //   console.log("request failed",response.ResponseMessage)
            //   reject(response.ReponseMessage);
            // }
          }
        })
        .catch((err) => {
          console.log("error", err);
          reject(err);
        }); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function RegisterAssociate({
  companyName,
  companyWebsite,
  yearEstablished,
  firstName,
  lastName,
  officeAddress,
  stateCity,
  country,
  landline,
  cellPhone,
  skypeId,
  whatsappId,
  recruitCountries,
  educationalIntitues,
}) {
  return new Promise((resolve, reject) => {
    try {
      resolve(false);
    } catch (e) {
      reject(e);
    }
  });
}

const AuthService = {
  Login,
  RegisterStudent,
  RegisterAssociate,
};

export default AuthService;

import LocalStorage from "../helper/LocalStorage";
import Messages from "../helper/Messages";
import Fetch from "./Axios";
import Urls from "./Urls";

function Login({ username, password }, callback) {
  return new Promise((resolve, reject) => {
    try {
      
      const url=Urls.Login;
      Fetch.Get(url+`?username=${username}&password=${password}`)//call authentication method
        .then(async (response) => {//if call is successful
          if (response == null) reject(Messages.FailedLogin);//if authentication is failed
          else {//if authentication is successful
            console.log(response);
            if (response.data) {
              //console.log(new Date());
              LocalStorage.SetToken(response.data, callback) //store token
                .then((x) => {
                  console.log("saved response");
                  resolve(response.data);
                  //console.log(new Date());
                })
                .catch((err) => {
                  console.log(err);
                  reject(response.data);
                });
              //console.log(response.data);
            }
            else resolve(null);
          }
        })
        .catch((err) => {
          //console.log(err);
          reject(err)
        });//throw error
    } catch (e) {
      reject(e);
    }
  });
}

function RegisterStudent(data) {
  return new Promise((resolve, reject) => {
    try {
      debugger
      const url = Urls.RegisterStudent;
      Fetch.Post({ url, data }) //call authentication method
        .then((response) => {
          console.log(response);
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);          
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err)}); //throw error
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

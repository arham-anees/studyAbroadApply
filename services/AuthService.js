import LocalStorage from "../helper/LocalStorage";
import Messages from "../helper/Messages";
import Fetch from "./Axios";
import Urls from "./Urls";

function Login({ username, password }, callback) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.Login + `?username=${username}&password=${password}`;
      Fetch.Get(url) //call authentication method
        .then((response) => {
          //if call is successful
          if (response == null) reject({ message: Messages.FailedLogin });
          //if authentication is failed
          else {
            //if authentication is successful
            if (response.data) {
              LocalStorage.SetToken(response.data, callback) //store token
                .then((x) => {
                  resolve(response);
                })
                .catch((err) => {
                  //console.log(err);
                  reject(response.data);
                });
            } else resolve(null);
          }
        })
        .catch((err) => {
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
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            resolve(response);
          }
        })
        .catch((err) => {
          reject(err);
        }); //throw error
    } catch (e) {
      reject(e);
    }
  });
}

function ForgotPassword(email) {
  return new Promise((resolve, reject) => {
    try {
      const url = Urls.ForgetPassword + `?username=${email}`;
      Fetch.Post({ url }) //call authentication method
        .then((response) => {
          if (response == null) reject(Messages.RequestFailed);
          else {
            if (response.ResponseStatus) {
              //console.log("forget password response", response);
              resolve(response.ResponseMessage);
            } else {
              reject({ message: response.ResponseMessage });
            }
          }
        })
        .catch((err) => {
          //console.log("error", err);
          reject(err);
        }); //throw error
    } catch (e) {
      //console.log("error", e);
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
  ForgotPassword,
};

export default AuthService;

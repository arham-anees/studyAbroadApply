import LocalStorage from "../helper/LocalStorage";
import Messages from "../helper/Messages";
import Axios from "./Axios";
import Urls from "./Urls";

function Login({ username, password }) {
  return new Promise((resolve, reject) => {
    try {
      const data = { Username: username, Password: password };
      Axios.Get({ data, Urls })//call authentication method
        .then((response) => {//if call is successful
          if (response == null) reject(Messages.FailedLogin);//if authentication is failed
          else {//if authentication is successful
            LocalStorage.SetUser(response.data);//store token
            resolve(true);//
          }
        })
        .catch((err) => reject(err));//throw error
    } catch (e) {
      reject(e);
    }
  });
}

function RegisterStudent({ firstName, lastName, email, password }) {
  return new Promise((resolve, reject) => {
    try {
      resolve(true);
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

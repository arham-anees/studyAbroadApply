import { isEmailValid, isWebsiteValid } from "../../../helper/validations";
export function ValidateStep1({
  email,
  companyName,
  companyWebsite,
  yearEstablished,
}) {
  return new Promise((resolve, reject) => {
    try {
    //   if (!isEmailValid(email))reject({ errorCode: 1, message: "Invalid email address" });
    //   if (companyName.length == 0)reject({ errorCode: 1, message: "Invalid company name" });
    //   if (!isWebsiteValid(companyWebsite))reject({ errorCode: 1, message: "Invalid company website" });
      resolve(true);
    } catch (err) {
      reject({ errorCode: 0, message: err });
    }
  });
}


export function ValidateStep2({
    firstName,
    lastName, 
    officeAddress,
    stateCity,
    country,
    landline,
    cellPhone,
    skypeId,
    whatsappId
    ,
  }) {
    return new Promise((resolve, reject) => {
      try {
     
        resolve(true);
      } catch (err) {
        reject({ errorCode: 0, message: err });
      }
    });
  }



  export function ValidateStep3({
    recruitCountries,
    educationalIntitues,
  }) {
    return new Promise((resolve, reject) => {
      try {
       
        resolve(true);
      } catch (err) {
        reject({ errorCode: 0, message: err });
      }
    });
  }

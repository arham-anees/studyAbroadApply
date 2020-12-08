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

//this method checks if parameters are not empty
export function ValidateStep2({
  firstName,
  lastName,
  officeAddress,
  stateCity,
  country,
  landline,
  cellPhone,
  skypeId,
  whatsappId,
}) {
  return new Promise((resolve, reject) => {
    try {
      if (!firstName || firstName.length == 0)
        reject({ errorCode: 1, message: "Empty first name" });
      if (!lastName || lastName.length == 0)
        reject({ errorCode: 1, message: "Empty last name" });
      if (!officeAddress || officeAddress.length == 0)
        reject({ errorCode: 1, message: "Empty office address" });
      if (!stateCity || stateCity.length == 0)
        reject({ errorCode: 1, message: "Empty state/ city" });
      if (!country || country.length == 0)
        reject({ errorCode: 1, message: "Empty country name" });
      if (!landline || landline.length == 0)
        reject({ errorCode: 1, message: "Empty landline" });
      if (!cellPhone || cellPhone.length == 0)
        reject({ errorCode: 1, message: "Empty cell Phone" });
      if (!skypeId || skypeId.length == 0)
        reject({ errorCode: 1, message: "Empty skype id" });
      if (!whatsappId || whatsappId.length == 0)
        reject({ errorCode: 1, message: "Empty whatsapp id" });
      resolve(true);
    } catch (err) {
      reject({ errorCode: 0, message: err });
    }
  });
}

export function ValidateStep3({ recruitCountries, educationalIntitues }) {
  return new Promise((resolve, reject) => {
    try {
      if (!recruitCountries || recruitCountries.length == 0)
        reject({ errorCode: 1, message: "Empty recruit countries" });
      if (!educationalIntitues || educationalIntitues.length == 0)
        reject({ errorCode: 1, message: "Empty educational institutes" });
      resolve(true);
    } catch (err) {
      reject({ errorCode: 0, message: err });
    }
  });
}

import Messages from "../../../helper/Messages";
import ApplicationService from "../../../services/ApplicationService";
import AuthService from "../../../services/AuthService";

const {
  isEmailValid,
  isPasswordValid,
} = require("../../../helper/validations");

export function HandleSignUp({
  FirstName,
  LastName,
  Email,
  Password,
  ConfirmPassword,
  Gender,
}) {
  return new Promise((resolve, reject) => {
    try {
      //trim all values
      FirstName = FirstName.trim();
      LastName = LastName.trim();
      Email = Email.trim();
      Password = Password.trim();
      ConfirmPassword = ConfirmPassword.trim();
      if (!isEmailValid(Email))
        reject({ errorCode: 2, message: Messages.InvalidEmail });
      if (Gender != "1" && Gender != "2")
        reject({ errorCode: 5, message: Messages.InvalidGender });
      else if (!isPasswordValid(Password))
        reject({
          errorCode: 3,
          message: Messages.InvalidPassword,
        });
      else if (Password !== ConfirmPassword)
        reject({ errorCode: 4, message: "Password does not match." });
      //call service method here

      // console.log("sign params",{
      //   FirstName,
      //   LastName,
      //   Email,
      //   Password,
      //   Gender
      // })
      AuthService.RegisterStudent({
        FirstName,
        LastName,
        Email,
        Password,
        Gender,
      })
        .then((response) => {
          //debugger
          if (response) {
            if (response.ResponseStatus) {
              resolve(true);
            } else {
              reject({ errorCode: -1, message: response.ResponseMessage });
            }
          } else {
            //console.log("rejected")
            reject({
              errorCode: -1,
              message: Messages.FailedSignUp,
            });
          }
        })
        .catch((err) => {
          //debugger;
          console.log("error at sign un auth service", err);
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
}

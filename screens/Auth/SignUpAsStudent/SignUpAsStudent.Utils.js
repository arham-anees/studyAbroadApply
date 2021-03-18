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
}) {
  return new Promise((resolve, reject) => {
    try {
      //trim all values
      FirstName = FirstName.trim();
      LastName = LastName.trim();
      Email = Email.trim();
      Password = Password.trim();
      ConfirmPassword = ConfirmPassword.trim();
      if (!isEmailValid(Email)) reject({errorCode:2,message:"Invalid email address"});
      else if (!isPasswordValid(Password)) reject({errorCode:3, message:"Password does not match required criteria. Please enter alphabets and numbers only at least 6."});
      else if (Password !== ConfirmPassword) reject({errorCode:4, message:"Password does not match."});
      //call service method here
      AuthService.RegisterStudent({
        FirstName,
        LastName,
        Email,
        Password,
      })
        .then((response) => {
          debugger
          if (response) {
          resolve(true)
          } else {
            //console.log("rejected")
            reject({errorCode:-1, message:"Failed to create your account. Please try again later."});
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
}

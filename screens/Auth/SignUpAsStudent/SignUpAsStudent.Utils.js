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
      else if (!isPasswordValid(Password)) reject({errorCode:3, message:"Password does not match required criteria."});
      else if (Password !== ConfirmPassword) reject({errorCode:4, message:"Password does not match."});
      //call service method here
      AuthService.RegisterStudent({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        password: Password,
      })
        .then((response) => {
          if (response == true) {
            resolve(true);
          } else {
            reject({errorCode:-1, message:"Password does not match."});
          }
        })
        .catch((err) => {
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
}

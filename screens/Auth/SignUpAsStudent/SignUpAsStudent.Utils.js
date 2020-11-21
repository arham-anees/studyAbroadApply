const { isEmailValid, isPasswordValid } = require("../../../helper/validations");

export function HandleSignUp({FirstName,LastName,Email,Password,ConfirmPassword}) {
  return new Promise((resolve, reject) => {
      try{
    // firstName = firstName.trim();
    // lastName = lastName.trim();
    // email = email.trim();
    // password = password.trim();
    // confirmPassword = confirmPassword.trim();

    if(!isEmailValid(Email))reject("2");
    else if(!isPasswordValid(Password))reject("3");
    else if (Password !== ConfirmPassword) reject("4");
    //call service method here
    else resolve("Student signed up successfully.");
      }catch(e){
          reject(e);
      }
  });
}

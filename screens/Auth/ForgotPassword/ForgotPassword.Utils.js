import AuthService from "../../../services/AuthService";

function SubmitEmail(email) {
  return new Promise((resolve, reject) => {
    AuthService.ForgotPassword(email)
      .then((x) => resolve(x))
      .catch((err) => reject(err));
  });
}

const ForgotPasswordUtils = {
  SubmitEmail,
};

export default ForgotPasswordUtils;

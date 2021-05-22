function SubmitEmail(email) {
  return new Promise((resolve, reject) => {
    if (email == "test@test.test") reject({ message: "network error" });
    else resolve({ Message: "Email has successfully been sent" });
  });
}

const ForgotPasswordUtils = {
  SubmitEmail,
};

export default ForgotPasswordUtils;

function Login({ email, password }) {
  return new Promise((resolve, reject) => {
    try {
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
}



const AuthService={
    Login
}

export default AuthService;
function Login({ email, password }) {
  return new Promise((resolve, reject) => {
    try {
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
}

function RegisterStudent({ firstName,lastName,email, password }) {
    return new Promise((resolve, reject) => {
      try {
        resolve(false);
      } catch (e) {
        reject(e);
      }
    });
  }
  


const AuthService={
    Login,
    RegisterStudent
}

export default AuthService;
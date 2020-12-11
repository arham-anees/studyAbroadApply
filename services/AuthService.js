function Login({ email, password }) {
  return new Promise((resolve, reject) => {
    try {
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
}

function RegisterStudent({ firstName, lastName, email, password }) {
  return new Promise((resolve, reject) => {
    try {
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
}

function RegisterAssociate({
  companyName,
  companyWebsite,
  yearEstablished,
  firstName,
  lastName,
  officeAddress,
  stateCity,
  country,
  landline,
  cellPhone,
  skypeId,
  whatsappId,
  recruitCountries,
  educationalIntitues,
}) {
  return new Promise((resolve, reject) => {
    try {
      resolve(false);
    } catch (e) {
      reject(e);
    }
  });
}

const AuthService = {
  Login,
  RegisterStudent,
  RegisterAssociate,
};

export default AuthService;

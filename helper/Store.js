import LocalStorage from "./LocalStorage";

var isLoading = false;
function GetUserInfo() {
  isLoading = true;
  LocalStorage.GetToken()
    .then((token) => {})
    .catch((tokenErr) => {})
    .finally(() => {
      isLoading = false;
    });
}

const Store = {};

export default Store;

import LocalStorage from "../../../helper/LocalStorage";
import AuthService from "../../../services/AuthService";
import AuthToken from "../../../helper/Token";
import Role from "../../../helper/Role";
import ApplicationService from "../../../services/ApplicationService";
import { CommonActions } from "@react-navigation/core";
import { NavigationActions } from "@react-navigation/compat";

function SignIn(email, password, navigation) {
  return new Promise((resolve, reject) => {
    AuthService.Login({
      username: email,
      password: password,
    })
      .then((response) => {
        try {
          if (response == null) {
            this.setState({
              generalMessage: "failed to login",
              isLoading: false,
            });
          } else {
            AuthToken.SetAuthToken(response);
            LocalStorage.SetUserInfo({
              UserID: response.info.Table[0].userID,
              RoleID: response.info.Table[0].UserRoleID,
            });
            if (response.info.Table[0].UserRoleID == Role.Student) {
              ApplicationService.BrowseApplications().then((applications) => {
                let screenName = "Applications";
                if (!applications || applications.length == 0)
                  screenName = "Courses";
                navigation.navigate(
                  screenName,
                  {},
                  NavigationActions.navigate({
                    routeName: screenName,
                  })
                );
              });
            } else {
              navigation.navigate("Home");
            }
            resolve("");
          }
        } catch (err) {
          reject(err);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const SignInUtil = {
  SignIn,
};

export default SignInUtil;

import LocalStorage from "../../../helper/LocalStorage";
import AuthService from "../../../services/AuthService";
import AuthToken from "../../../helper/Token";
import Role from "../../../helper/Role";
import ApplicationService from "../../../services/ApplicationService";
import { NavigationActions } from "@react-navigation/compat";

function SignIn(email, password, navigation) {
  return new Promise((resolve, reject) => {
    //console.log(email, password);
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
            //console.log('navigation.navigate("Home", { screen: "Courses" })');
            navigation.navigate("Home", { screen: "Home" });
            // navigation.navigate(
            //   NavigationActions.navigate({
            //     routeName: "Home",
            //     action: NavigationActions.navigate({ routeName: "Courses" }),
            //   })
            // );

            //debugger;
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: "Home" }],
            // });
            // navigation.navigate(
            //   "Courses",
            //   { screen: "Courses" }
            // NavigationActions.navigate({
            //   routeName: "Courses",
            // })
            //);
            // if (response.info.Table[0].UserRoleID == Role.Student) {
            //   ApplicationService.BrowseApplications().then((applications) => {
            //     if (!applications || applications.length == 0) {
            //       //navigation.navigate("Courses");
            //       navigation.navigate(
            //         "Courses",
            //         { screen: "Courses" }
            //         // NavigationActions.navigate({
            //         //   routeName: "Courses",
            //         // })
            //       );
            //     } else {
            //       navigation.navigate("Applications");
            //     }
            //   });
            //} else {
            //this.setState({ isLoading: false });
            //navigation.navigate("Home");
            //}
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

import React from "react";
import { StatusBar, View, Keyboard } from "react-native";
import { Block, Button, Text } from "galio-framework";

import AuthToken from "../../../helper/Token";

import styles from "./SignIn.Styles";
import argonTheme from "../../../constants/Theme";
import LabelledInput from "../../../components/LabelledInput.Component";
import AuthService from "../../../services/AuthService";
import Background from "../../../components/Background";
import LocalStorage from "../../../helper/LocalStorage";
import GlobalStyle from "../../../GlobalStyles";
import { Alert } from "react-native";
import SignInUtil from "./SignIn.Utils";
import Role from "../../../helper/Role";
import ApplicationService from "../../../services/ApplicationService";
import { NavigationActions } from "@react-navigation/compat";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", //"faraz@mail.com",
      password: "", //"123",
      error: false,
      isSubmitted: false,
      networkError: false,
    };
  }
  componentDidMount() {
    this.CheckStatus();
  }
  CheckStatus() {
    LocalStorage.GetToken()
      .then((res) => {
        if (res.length > 100) {
          LocalStorage.GetUserInfo()
            .then((userInfo) => {
              userInfo = JSON.parse(userInfo);
              if (userInfo.RoleID == Role.Student) {
                ApplicationService.BrowseApplications().then((applications) => {
                  let screenName = "Applications";
                  if (!applications || applications.length == 0)
                    screenName = "Courses";
                  this.props.navigation.navigate(
                    screenName,
                    {},
                    NavigationActions.navigate({
                      routeName: screenName,
                    })
                  );
                });
              } else {
                this.props.navigation.navigate("Home");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // var result = await LocalStorage.GetToken();
    // // console.log(this.props.navigation);
    // global.navigation = this.props.navigation;
    // //console.log(result);
    // try {
    //   if (result.length > 100) {
    //     this.props.navigation.navigate("Home");
    //   }
    // } catch {}
  }
  handleSignUpStudentPress = () =>
    this.props.navigation.navigate("SignUpAsStudent");
  handleSignUpAssociatePress = () =>
    this.props.navigation.navigate("SignUpAsAssociate");
  handlePasswordChange = (value) =>
    this.setState({ error: false, networkError: false, password: value });
  handleUsernameChange = (value) =>
    this.setState({ error: false, networkError: false, username: value });
  handleSubmit = () => {
    try {
      Keyboard.dismiss();
    } catch (err) {
      console.log(err);
    }
    if (this.state.username.length == 0 || this.state.password.length == 0) {
      this.setState({ error: true, isSubmitted: false });
      return;
    }

    this.setState({ isSubmitted: true });

    //call service

    SignInUtil.SignIn(
      this.state.username,
      this.state.password,
      this.props.navigation
    )
      .then((x) => {
        this.setState({ isSubmitted: false });
      })
      .catch((err) => {
        this.setState({ isSubmitted: false, error: true });
        //Alert.alert("Error", err.message);
      });

    // AuthService.Login(this.state)
    //   .then((response) => {
    //     console.log("response received", response);
    //     //debugger
    //     if (response == null) {
    //       this.setState({ isSubmitted: false, error: true });
    //     } else {
    //       this.setState({ isSubmitted: false });
    //       AuthToken.SetAuthToken(response);
    //       try {
    //         LocalStorage.SetUserInfo({
    //           UserID: response.info.Table[0].userID,
    //           RoleID: response.info.Table[0].UserRoleID,
    //         });

    //         this.props.navigation.reset({
    //           index: 0,
    //           routes: [{ name: "Home" }],
    //         });
    //         this.props.navigation.navigate("Home");
    //       } catch (err) {
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("Error: " + err);
    //     this.setState({ isSubmitted: false, networkError: true });
    //   });
  };
  render() {
    //this.CheckStatus();

    return (
      <Block style={styles.container}>
        <Background fullscreen>
          <StatusBar />

          <View style={{ minHeight: GlobalStyle.SIZES.PageHeight }}>
            <Block center style={styles.logoBox}>
              <Text style={styles.logoText}>Study Abroad Apply</Text>
            </Block>
            <Block
              space="between"
              style={styles.padded}
              KeyboardShouldPersistTaps={true}
            >
              <LabelledInput
                label="Username"
                onChange={this.handleUsernameChange}
                value={this.state.username}
                required
                error={this.state.emailError}
                type={"email-address"}
              />
              <LabelledInput
                label="Password"
                password
                onChange={this.handlePasswordChange}
                value={this.state.password}
                required
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />

              {this.state.error ? (
                <Text style={styles.error}>Incorrect email or password</Text>
              ) : null}
              {this.state.networkError ? (
                <Text style={styles.error}>
                  Request failed. Please try again later
                </Text>
              ) : null}
              <Button
                style={[
                  styles.button,
                  { marginTop: 15 },
                  this.state.isSubmitted ? {} : null,
                ]}
                onPress={this.handleSubmit}
                loading={this.state.isSubmitted}
                disabled={this.state.isSubmitted}
              >
                Sign In
              </Button>

              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={this.handleSignUpStudentPress}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Sign Up As Student
              </Button>
            </Block>
          </View>
        </Background>
      </Block>
    );
  }
}

export default SignIn;

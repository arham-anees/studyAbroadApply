import React from "react";
import { View, Keyboard } from "react-native";
import { Block, Button, Link, Text } from "galio-framework";

import styles from "./SignIn.Styles";
import argonTheme from "../../../constants/Theme";
import LabelledInput from "../../../components/LabelledInput.Component";
import Background from "../../../components/Background";
import LocalStorage from "../../../helper/LocalStorage";
import GlobalStyle from "../../../GlobalStyles";
import SignInUtil from "./SignIn.Utils";
import Role from "../../../helper/Role";
import ApplicationService from "../../../services/ApplicationService";
import { NavigationActions } from "@react-navigation/compat";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextCustom from "../../../components/TextCustom";
import AuthBackGround from "../../../components/BackgroundFull";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", //"faraz@mail.com",
      password: "", //"123",
      error: false,
      isSubmitted: false,
      networkError: false,
      errorMessage: "Incorrect email or password",
    };
  }
  componentDidMount() {
    this.CheckStatus();
  }
  CheckStatus() {
    LocalStorage.GetToken()
      .then((res) => {
        if (res != null && res != undefined) {
          if (res.length > 100) {
            LocalStorage.GetUserInfo()
              .then((userInfo) => {
                userInfo = JSON.parse(userInfo);
                if (userInfo.RoleID == Role.Student) {
                  ApplicationService.BrowseApplications().then(
                    (applications) => {
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
                    }
                  );
                } else {
                  this.props.navigation.navigate("Home");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleSignUpStudentPress = () =>
    this.props.navigation.navigate("SignUpAsStudent");
  handleSignUpAssociatePress = () =>
    this.props.navigation.navigate("SignUpAsAssociate");
  handlePasswordChange = (value) => {
    this.setState({ error: false, networkError: false, password: value });
  };
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
        this.setState({
          isSubmitted: false,
          error: true,
          errorMessage: err.message,
        });
        //Alert.alert("Error", err.message);
      });
  };
  render() {
    return (
      <Block style={styles.container}>
        <Background>
          <Block
            space="between"
            style={{ minHeight: GlobalStyle.SIZES.PageHeight }}
          >
            <Block center style={styles.logoBox}>
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.logoText}
              >
                Study Abroad Apply
              </Text>
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
                secureTextEntry
                onChange={this.handlePasswordChange}
                value={this.state.password}
                required
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />

              {this.state.error ? (
                <Text style={styles.error}>{this.state.errorMessage}</Text>
              ) : null}
              {this.state.networkError && (
                <Text style={styles.error}>
                  Request failed. Please try again later
                </Text>
              )}
              <View style={styles.Link}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("ForgotPassword");
                  }}
                >
                  <TextCustom>Forgot Password?</TextCustom>
                </TouchableOpacity>
              </View>
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
          </Block>
        </Background>
      </Block>
    );
  }
}

export default SignIn;

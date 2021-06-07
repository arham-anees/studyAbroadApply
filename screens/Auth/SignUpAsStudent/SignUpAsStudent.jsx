import React from "react";

import { RadioButton } from "react-native-paper";
import { Block, Button, Text, theme } from "galio-framework";

import styles from "./SignUpAsStudent.Styles";
import argonTheme from "../../../constants/Theme";
import LabelledInput from "../../../components/LabelledInput.Component";

import { HandleSignUp } from "./SignUpAsStudent.Utils";
import Background from "../../../components/Background";
import TextCustom from "../../../components/TextCustom";
import GlobalStyle from "../../../GlobalStyles";
import SignInUtils from "../SignIn/SignIn.Utils";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AuthBackGround from "../../../components/BackgroundFull";

class SignUpAsStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "", // "asd",
      LastName: "", //"asd",
      Email: "", //"asd@sad.asd",
      Password: "", //"1231231",
      ConfirmPassword: "", //"1231231",
      error: -1,
      generalMessage: "",
      Gender: "1",
      isLoading: false,
    };
  }

  handleSignUp = () => {
    this.setState({ isLoading: true });

    HandleSignUp(this.state)
      .then((x) => {
        SignInUtils.SignIn(
          this.state.Email,
          this.state.Password,
          this.props.navigation
        )
          .then(() => {
            //user is logged in
            this.setState({ isLoading: false });
            this.props.navigation.navigate("Courses");
          })
          .catch((err) => {
            this.setState({ isLoading: false, generalMessage: err });
          });
        //this.props.navigation.navigate("Home");
      })
      .catch((e) => {
        try {
          let errorCode = parseInt(e.errorCode);
          this.setState({
            error: errorCode,
            generalMessage: e.message,
            isLoading: false,
          });
        } catch (err) {
          //console.log("error message", err);
          this.setState({ generalMessage: err, error: -1, isLoading: false });
        }
      });
  };
  handleFirstNameChange = (value) =>
    this.setState({ FirstName: value, generalMessage: "", error: -1 });
  handleGenderChange = (value) =>
    this.setState({ Gender: value, generalMessage: "", error: -1 });
  handleLastNameChange = (value) =>
    this.setState({ LastName: value, generalMessage: "", error: -1 });
  handleEmailChange = (value) =>
    this.setState({ Email: value, generalMessage: "", error: -1 });
  handlePasswordChange = (value) =>
    this.setState({ Password: value, generalMessage: "", error: -1 });
  handleConfirmPasswordChange = (value) =>
    this.setState({ ConfirmPassword: value, generalMessage: "", error: -1 });
  render = () => (
    <Block>
      <AuthBackGround>
        <Block style={styles.container}>
          <Block center style={styles.logoBox}>
            <Text style={styles.logoText}>Study Abroad Apply</Text>
          </Block>
          <Block style={styles.padded}>
            <TextCustom style={{ textAlign: "center", fontSize: 20 }}>
              Student Sign Up
            </TextCustom>
            <ScrollView
              style={{ height: "45%" }}
              keyboardShouldPersistTaps={"handled"}
            >
              <LabelledInput
                label="First Name"
                onChange={this.handleFirstNameChange}
                value={this.state.FirstName}
              />
              <LabelledInput
                label="Last Name"
                value={this.state.LastName}
                onChange={this.handleLastNameChange}
                value={this.state.LastName}
              />

              <LabelledInput
                label="Email"
                value={this.state.Email}
                error={this.state.error === 2}
                onChange={this.handleEmailChange}
                value={this.state.Email}
                required
                type={"email-address"}
              />
              <LabelledInput
                label="Password"
                error={this.state.error === 3}
                onChange={this.handlePasswordChange}
                value={this.state.Password}
                password
                required
              />
              <LabelledInput
                label="Confirm Password"
                password
                onChange={this.handleConfirmPasswordChange}
                error={this.state.error === 4}
                value={this.state.ConfirmPassword}
                required
              />
              <Block style={{ marginTop: 10 }}>
                <TextCustom>Gender*</TextCustom>
                <RadioButton.Group
                  onValueChange={(value) => this.handleGenderChange(value)}
                  value={this.state.Gender}
                >
                  <RadioButton.Item
                    label="Male"
                    value="1"
                    color={GlobalStyle.color.textLight}
                    labelStyle={{ color: GlobalStyle.color.textLight }}
                    uncheckedColor={GlobalStyle.color.textLight}
                  />
                  <RadioButton.Item
                    label="Female"
                    value="0"
                    color={GlobalStyle.color.textLight}
                    uncheckedColor={GlobalStyle.color.textLight}
                    labelStyle={{ color: GlobalStyle.color.textLight }}
                  />
                </RadioButton.Group>
              </Block>

              {this.state.generalMessage.length > 0 ? (
                <Text style={styles.error}>{this.state.generalMessage}</Text>
              ) : null}

              <Button
                style={[styles.button, { marginBottom: 20 }]}
                onPress={this.handleSignUp}
                loading={this.state.isLoading}
              >
                Sign Up
              </Button>

              <Block style={[styles.Link, { alignItems: "center" }]}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignIn")}
                >
                  <TextCustom>Sign In Here</TextCustom>
                </TouchableOpacity>
              </Block>
              <Block style={{ minHeight: 100 }}></Block>
            </ScrollView>
          </Block>
        </Block>
      </AuthBackGround>
    </Block>
  );
}

export default SignUpAsStudent;

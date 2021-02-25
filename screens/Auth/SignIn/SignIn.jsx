import React from "react";
import { ImageBackground, Image, StatusBar, Dimensions } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import styles from "./SignIn.Styles";

import argonTheme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import LabelledInput from "../../../components/LabelledInput.Component";
import { ScrollView } from "react-native";

import AuthService from "../../../services/AuthService";
import Background from "../../../components/Background";
import LocalStorage from "../../../helper/LocalStorage";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "faraz@mail.com",
      password: "123",
      error: false,
      isSubmitted: false,
      networkError:false
    };
  }
  async CheckStatus() {
    
    //this.handleSubmit();
    //return;
    //console.log("SignIn Check Status");
    var result =LocalStorage.GetToken();
    //debugger
    //console.log(result);
    result.then((x) => {
      try{if (x.length>100) {
        this.props.navigation.navigate("Home");
      }
    }catch{}
    });
  }
  handleSignUpStudentPress = () =>
    this.props.navigation.navigate("SignUpAsStudent");
  handleSignUpAssociatePress = () =>
    this.props.navigation.navigate("SignUpAsAssociate");
  handlePasswordChange = (value) =>
    this.setState({ error: false,networkError:false, password: value });
  handleUsernameChange = (value) => this.setState({ error: false,networkError:false, username: value });
  handleSubmit = () => {
    this.setState({ isSubmitted: true });
    if (this.state.username.length == 0 || this.state.password.length == 0) {
      this.setState({ error: true, isSubmitted: false });
      return;
    }
    //call service
    AuthService.Login(this.state)
      .then((response) => {
        if (response == true) {
          this.setState({ isSubmitted: false });
          console.log(response)
          //this.props.navigation.navigate("Home");
        } else {
          this.setState({ isSubmitted: false, error: true });
        }
      })
      .catch((err) => {
        console.log("Error: "+err);
        this.setState({ isSubmitted: false, networkError: true });
      });
  };
  render (){ 
    this.CheckStatus();
    return(
    <Block style={styles.container}>
      <Background fullscreen>
        <StatusBar />
        <Block center style={styles.logoBox}>
          <Text style={styles.logoText}>Study Abroad Apply</Text>
        </Block>
        <Block space="between" style={styles.padded}>
          <LabelledInput
            label="Username"
            iconname="person"
            iconfamily="Fontisto"
            onChange={this.handleUsernameChange}
            value={this.state.username}
          required
          error={this.state.emailError}
          />
          <LabelledInput
            label="Password"
            password
            iconname="key"
            iconfamily="Entypo"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          required
          />

          {this.state.error ? (
            <Text style={styles.error}>Incorrect email or password</Text>
          ) : null}
          {this.state.networkError ? (
            <Text style={styles.error}>Request failed. Please try again later</Text>
          ) : null}
          <Button
            style={[
              styles.button,
              {marginTop:15},
              this.state.isSubmitted ? {} : null,
            ]}
            onPress={this.handleSubmit}
            loading={this.state.isSubmitted}
            disabled={this.state.isSubmitted}
          >
            Sign In
          </Button>
{/* 
          <Button
            style={styles.button}
            color={argonTheme.COLORS.SECONDARY}
            onPress={this.handleSignUpStudentPress}
            textStyle={{ color: argonTheme.COLORS.BLACK }}
          >
            Sign Up As Student
          </Button>

          <Button
            style={styles.button}
            color={argonTheme.COLORS.SECONDARY}
            onPress={this.handleSignUpAssociatePress}
            textStyle={{ color: argonTheme.COLORS.BLACK }}
          >
            Sign Up As Associate
          </Button> */}
        </Block>
      </Background>
    </Block>
  );}
}

export default SignIn;

import React from "react";

import { RadioButton } from 'react-native-paper';
import { ImageBackground, Image, StatusBar, Dimensions } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");
import { Radio } from 'galio-framework';
import styles from "./SignUpAsStudent.Styles";
import argonTheme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import LabelledInput from "../../../components/LabelledInput.Component";

import { HandleSignUp } from "./SignUpAsStudent.Utils";
import Background from "../../../components/Background";
import TextCustom from "../../../components/TextCustom";
import GlobalStyle from "../../../GlobalStyles";

class SignUpAsStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "asd",
      LastName: "asd",
      Email: "asd@sad.asd",
      Password: "1231231",
      ConfirmPassword: "1231231",
      error: -1,
      generalMessage: "",
      Gender: "1"
    };
  }

  handleSignUp = () => {
    HandleSignUp(this.state)
      .then(x => {
        debugger;
        this.props.navigation.navigate("Home");
      })
      .catch(e => {
        try {
          let errorCode = parseInt(e.errorCode);
          this.setState({ error: errorCode, generalMessage: e.message });
        } catch (err) {
          this.setState({ generalMessage: err });
        }
      });
  };
  handleFirstNameChange = value =>
    this.setState({ FirstName: value, generalMessage: "", error: -1 });
  handleGenderChange = value =>
    this.setState({ Gender: value, generalMessage: "", error: -1 });
  handleLastNameChange = value =>
    this.setState({ LastName: value, generalMessage: "", error: -1 });
  handleEmailChange = value =>
    this.setState({ Email: value, generalMessage: "", error: -1 });
  handlePasswordChange = value =>
    this.setState({ Password: value, generalMessage: "", error: -1 });
  handleConfirmPasswordChange = value =>
    this.setState({ ConfirmPassword: value, generalMessage: "", error: -1 });
  render = () => (
    <Background fullscreen>
      <StatusBar />
      <Block center style={styles.logoBox}>
        <Text style={styles.logoText}>Study Abroad Apply</Text>
      </Block>
      <Block space="between" style={styles.padded}>
        <LabelledInput
          label="First Name"
          iconname="person"
          iconfamily="Fontisto"
          onChange={this.handleFirstNameChange}
          value={this.state.FirstName}
        />
        <LabelledInput
          label="Last Name"
          iconname="person"
          value={this.state.LastName}
          onChange={this.handleLastNameChange}
          iconfamily="Fontisto"
          value={this.state.LastName}
        />

        <LabelledInput
          label="Email"
          iconname="key"
          iconfamily="Entypo"
          value={this.state.Email}
          error={this.state.error === 2}
          onChange={this.handleEmailChange}
          value={this.state.Email}
          required
        />
        <LabelledInput
          label="Password"
          iconname="key"
          error={this.state.error === 3}
          iconfamily="Entypo"
          onChange={this.handlePasswordChange}
          value={this.state.Password}
          password
          required
        />
        <LabelledInput
          label="Confirm Password"
          iconname="key"
          iconfamily="Entypo"
          password
          onChange={this.handleConfirmPasswordChange}
          error={this.state.error === 4}
          value={this.state.ConfirmPassword}
          required
        />
        <Block>
          <TextCustom>Gender*</TextCustom>
          <RadioButton.Group
            onValueChange={value => this.handleGenderChange(value)}
            value={this.state.Gender}
          >
            <RadioButton.Item label="Male" value="1" 
            color={GlobalStyle.color.textLight}
            labelStyle={{color:GlobalStyle.color.textLight}}
            uncheckedColor={GlobalStyle.color.textLight}/>
            <RadioButton.Item label="Female" value="2" 
            color={GlobalStyle.color.textLight}
            uncheckedColor={GlobalStyle.color.textLight}
            labelStyle={{color:GlobalStyle.color.textLight}}/>
          </RadioButton.Group>
        </Block>

        {this.state.generalMessage.length > 0 ? (
          <Text style={styles.error}>{this.state.generalMessage}</Text>
        ) : null}

        <Button
          style={[styles.button, { marginBottom: 20 }]}
          onPress={this.handleSignUp}
        >
          Sign Up
        </Button>

        <Button
          style={styles.button}
          color={argonTheme.COLORS.SECONDARY}
          onPress={() => this.props.navigation.navigate("SignIn")}
          textStyle={{ color: argonTheme.COLORS.BLACK }}
        >
          Sign In Here
        </Button>
      </Block>
    </Background>
  );
}

export default SignUpAsStudent;

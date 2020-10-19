import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";
import EmailTextInput from "../../Components/EmailTextInput";
import PasswordInput from "../../Components/PasswordInput";

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleLoginPress = () => {
    this.props.navigation.navigate("Home");
  };
  handleRegisterStudent = () => {
    this.props.navigation.navigate("RegisterAsStudent");
  };
  handleRegisterAssociate = () => {
    this.props.navigation.navigate("RegisterAsAssociate");
  };
  handleContinueGoogle = () => {};
  handleEmailChange = (text) => {};
  handleEmailBlur = (e) => {};
  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.header}>
          <Text>Study Abroad Apply logo</Text>
        </View>
        <View style={Styles.body}>
          <EmailTextInput />
          <PasswordInput />
          <View style={{ marginHorizontal: 10 }}>
            <ThemeProvider theme={this.theme}>
              <View style={{ marginBottom: 10 }}>
                <Button raised title="LOGIN" onPress={this.handleLoginPress} />
              </View>

              <View style={{ marginBottom: 10 }}>
                <Button
                  raised
                  title="REGISTER AS STUDENT"
                  type="outline"
                  onPress={this.handleRegisterStudent}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <Button
                  raised
                  title="REGISTER AS ASSOCIATE"
                  type="outline"
                  onPress={this.handleRegisterAssociate}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <Button
                  raised
                  title="CONTINUE WITH GOOGLE"
                  type="solid"
                  buttonStyle={{
                    backgroundColor: "red",
                  }}
                  disabled
                />
              </View>
            </ThemeProvider>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  header: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  body: { flex: 2 },
  loginButton: { marginHorizontal: 10 },
  Button: { marginBottom: 15 },
});

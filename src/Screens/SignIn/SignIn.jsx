import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";
import EmailTextInput from "../../Components/EmailTextInput";
import PasswordInput from "../../Components/PasswordInput";
import Styles from "./SignIn.Style";
import {
  handleLoginPress,
  handleRegisterStudent,
  handleRegisterAssociate,
} from "./SignIn.Utils";

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

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
                <Button
                  raised
                  title="LOGIN"
                  onPress={() => handleLoginPress(this.props)}
                />
              </View>

              <View style={{ marginBottom: 10 }}>
                <Button
                  raised
                  title="REGISTER AS STUDENT"
                  type="outline"
                  onPress={() => handleRegisterStudent(this.props)}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <Button
                  raised
                  title="REGISTER AS ASSOCIATE"
                  type="outline"
                  onPress={() => handleRegisterAssociate(this.props)}
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

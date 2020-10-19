import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import EmailTextInput from "../../../Components/EmailTextInput";
import PasswordInput from "../../../Components/PasswordInput";
import * as Screens from "../../../ScreenNames";

export default class RegisterAsStudentScreen extends React.Component {
  handleLoginPress = () => {
    this.props.navigation.navigate("SignIn");
  };
  handleSignUpPress = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <ScrollView style={Styles.mainContainer}>
        <View style={Styles.header}>
          <Text>Register As Student</Text>
        </View>
        <View style={Styles.body}>
          <Input
            leftIcon={{ type: "material", name: "person" }}
            placeholder={"First Name"}
          />
          <Input
            leftIcon={{ type: "material", name: "person" }}
            placeholder={"Last Name"}
          />
          <EmailTextInput />
          <PasswordInput />
          <PasswordInput placeholder={"Confirm Password"} />
          <Button raised title="SIGN UP" onPress={this.handleSignUpPress} />
          <Button
            title="LOGIN HERE"
            type="clear"
            onPress={this.handleLoginPress}
          />
        </View>
      </ScrollView>
    );
  }
}

const Styles = StyleSheet.create({
  mainContainer: { marginHorizontal: 10, marginTop: 30, flex: 1 },
  header: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height / 4,
  },
  body: { flex: 3 },
});

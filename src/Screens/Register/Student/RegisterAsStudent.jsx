import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlightBase,
  View,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import EmailTextInput from "../../../Components/EmailTextInput";
import PasswordInput from "../../../Components/PasswordInput";
import Styles from "./RegisterAsStudent.Style";
import {
  handleLoginPress,
  handleSignUpPress,
  pickImage,
} from "./RegisterAsStudent.Utils";

export default class RegisterAsStudentScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <ScrollView>
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
            <View style={Styles.RadioContainer}>
              <View style={Styles.RadioMale}>
                <RadioButton value="male" />
                <Text>Male</Text>
              </View>
              <View style={Styles.RadioFemale}>
                <RadioButton value="female" />
                <Text>Female</Text>
              </View>
            </View>

            <View style={Styles.selectImage}>
              <Button
                raised
                type="outline"
                title="Select Profile Picture"
                onPress={() => pickImage()}
              ></Button>
              <View>
                <Text></Text>
              </View>
            </View>
            <Button
              raised
              title="SIGN UP"
              onPress={() => handleSignUpPress(this.props)}
            />
            <Text></Text>
            {/* <TouchableOpacity style={Styles.btnLogin}>
              <Text style={Styles.btnLoginTitle}>LOGIN HERE</Text>
            </TouchableOpacity> */}
            <Button
              title="LOGIN HERE"
              type="outline"
              onPress={() => handleLoginPress(this.props)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import RegisterAsAssociateStep1 from "./RegisterAsAssociate.Step1";
import RegisterAsAssociateStep2 from "./RegisterAsAssociate.Step2";
import RegisterAsAssociateStep3 from "./RegisterAsAssociate.Step3";
import Styles from "./RegisterAsAssociate.Style";

import {
  handleLoginPress,
  handleSignUpPress,
  pickImage,
} from "./RegisterAsAssociate.Utils";

export default class RegisterAsAssociateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }
  handleSignUpPress(props) {
    this.props.navigation.navigate("Home");
  }
  NextStep = () => {
    console.log("Next");
    if (this.state.currentStep == 3) {
      // this.props.navigation.reset();
      this.props.navigation.push("Home");
    } else this.setState({ currentStep: this.state.currentStep + 1 });
  };
  PreviousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };
  render() {
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <ScrollView>
          <View style={Styles.header}>
            <Text>Register As Associate</Text>
          </View>
          <View style={Styles.body}>
            <ScrollView style={{ flex: 1 }}>
              {this.state.currentStep === 1 ? (
                <RegisterAsAssociateStep1 />
              ) : this.state.currentStep === 2 ? (
                <RegisterAsAssociateStep2 />
              ) : this.state.currentStep === 3 ? (
                <RegisterAsAssociateStep3 />
              ) : (
                <Text>{this.state.currentStep}</Text>
              )}
            </ScrollView>
            <View style={Styles.controlContainer}>
              <Button
                title="Previous"
                onPress={this.PreviousStep}
                disabled={this.state.currentStep <= 1}
              />
              <Button
                title={this.state.currentStep < 3 ? "Next" : "Submit"}
                buttonStyle={{
                  backgroundColor:
                    this.state.currentStep < 3 ? "rgb(32, 137, 220)" : "green",
                }}
                onPress={this.NextStep}
              />
            </View>
            <Button
              title="LOGIN HERE"
              type="outline"
              onPress={() => this.handleSignUpPress()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

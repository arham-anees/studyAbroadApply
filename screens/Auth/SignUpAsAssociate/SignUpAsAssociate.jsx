import React from "react";
import styles from "./SignUpAsAssociate.Style";

import {
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import Step1 from "./SignUpAsAssociate.Step1";
import Step2 from "./SignUpAsAssociate.Step2";
import Step3 from "./SignUpAsAssociate.Step3";
import { ValidateStep1, ValidateStep2, ValidateStep3 } from "./SignUpAsAssociate.Utils";
import { KeyboardAvoidingView } from "react-native";
import Background from "../../../components/Background";

class SignUpAsAssociate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email: "",
      companyName: "",
      companyWebsite: "",
      yearEstablished: 1990,
      firstName: "",
      lastName: "",
      officeAddress: "",
      stateCity: "",
      country: "",
      landline: "",
      cellPhone: "",
      skypeId: "",
      whatsappId: "",
      recruitCountries: "",
      maxStudentSendAbroad: 0,
      educationalIntitues: "",
      estimateStudentSendAbroad: 0,
      error: true,
      errorMessage: "",
    };
  }

  componentWillMount() {
    // this.keyboardWillShowSub = Keyboard.addListener(
    //   "keyboardDidShow",
    //   this.keyboardWillShow
    // );
    // this.keyboardWillHideSub = Keyboard.addListener(
    //   "keyboardDidHide",
    //   this.keyboardWillHide
    // );
  }

  componentWillUnmount() {
    //this.keyboardWillShowSub.remove();
    //this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = () => {
    console.log("keyboardWillShow");
    this.setState({ keyboard: true });
  };
  keyboardWillHide = () => this.setState({ keyboard: false });
  handleCompanyNameChange = (value) =>
    this.setState({ companyName: value, error: false });
  handleEmailChange = (value) => this.setState({ email: value, error: false });
  handleCompanyWebsiteChange = (value) =>
    this.setState({ companyWebsite: value, error: false });
  handleYearEstablishedChange = (value) =>
    this.setState({ yearEstablished: value, error: false });
  handleFirstNameChange = (value) =>
    this.setState({ firstName: value, error: false });
  handleLastNameChange = (value) =>
    this.setState({ lastName: value, error: false });
  handleOfficeAddressChange = (value) =>
    this.setState({ officeAddress: value, error: false });
  handleStateCityChange = (value) =>
    this.setState({ stateCity: value, error: false });
  handleCountryChange = (value) =>
    this.setState({ country: value, error: false });
  handleLandlineChange = (value) =>
    this.setState({ landline: value, error: false });
  handleCellPhoneChange = (value) =>
    this.setState({ cellPhone: value, error: false });
  handleSkypeIdChange = (value) =>
    this.setState({ skypeId: value, error: false });
  handleWhatsappIdChange = (value) =>
    this.setState({ whatsappId: value, error: false });
  handleRecruitCountriesChange = (value) =>
    this.setState({ recruitCountries: value, error: false });
  handleMaxStudentSendAbroadChange = (value) =>
    this.setState({ maxStudentSendAbroad: value, error: false });
  handleEducationalIntituesChange = (value) =>
    this.setState({ educationalIntitues: value, error: false });
  handleEstimateStudentSendAbroadChange = (value) =>
    this.setState({ estimateStudentSendAbroad: value, error: false });
  nextStep() {
    var stepUp;
    if (this.state.step == 1)
      ValidateStep1(this.state).then((response) => {
        this.nextStepProcess(response)
      });
    else if (this.state.step == 2)
      ValidateStep2(this.state).then((response) => {
        this.nextStepProcess(response)
      });
    else if (this.state.step == 3)
      ValidateStep3(this.state).then((response) => {
        this.nextStepProcess(response)
      });

    
  }
  nextStepProcess(stepUp){
    if (stepUp) {
      if (this.state.step === 3) {
        this.props.navigation.navigate("Home");
      } else this.setState({ step: this.state.step + 1 });
    }
  }
  perviousStep() {
    this.setState({ step: this.state.step - 1 });
  }
  render() {
    return (
      <Background noScroll fullscreen>
        <View style={styles.container} behavior="padding" enabled>
        <Block center style={styles.logoBox}>
        <Text style={styles.logoText}>Study Abroad Apply</Text>
      </Block>
          <Block style={styles.padded}>
            <ScrollView>
              <Block style={[styles.title, styles.stepContainer]}>
                {this.state.step === 1 ? (
                  <Step1
                    {...this.state}
                    handleCompanyNameChange={this.handleCompanyNameChange}
                    handleEmailChange={this.handleEmailChange}
                    handleCompanyWebsiteChange={this.handleCompanyWebsiteChange}
                    handleYearEstablishedChange={
                      this.handleYearEstablishedChange
                    }
                  />
                ) : null}
                {this.state.step === 2 ? <Step2 {...this.state} /> : null}
                {this.state.step === 3 ? <Step3 {...this.state} /> : null}
              </Block>
            </ScrollView>
            <Block flex bottom style={styles.buttons}>
              <Block
                style={[
                  { paddingHorizontal: theme.SIZES.BASE },
                  styles.navigationBtnContainer,
                ]}
              >
                {this.state.step!=1?
                <Button
                  style={{ width: 100 }}
                  onPress={() => this.perviousStep()}
                >
                  Previous
                </Button>:<View></View>}
                <Button style={{ width: 100 }} onPress={() => this.nextStep()}>
                  {this.state.step === 3 ? "Submit" : "Next"}
                </Button>
              </Block>
              <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => this.props.navigation.navigate("SignIn")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Sign In Here
                </Button>
              </Block>
            </Block>
          </Block>
          {this.state.keyboard ? (
            <View style={{ height: 280 }} />
          ) : (
            <View style={{ height: 60 }} />
          )}
        </View>
      </Background>
    );
  }
}

export default SignUpAsAssociate;

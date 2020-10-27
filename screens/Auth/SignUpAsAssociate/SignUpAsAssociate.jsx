import React from "react";
import styles from "./SignUpAsAssociate.Style";

import { ImageBackground, Image, StatusBar, Dimensions } from "react-native";
import { Block, Button, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import Step1 from "./SignUpAsAssociate.Step1";
import Step2 from "./SignUpAsAssociate.Step2";
import Step3 from "./SignUpAsAssociate.Step3";

class SignUpAsAssociate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  nextStep() {
    if (this.state.step === 3) {
      this.props.navigation.navigate("Home");
    } else this.setState({ step: this.state.step + 1 });
  }
  perviousStep() {
    this.setState({ step: this.state.step - 1 });
  }
  render() {
    return (
      <Block flex style={[styles.container, { backgroundColor: "red" }]}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center style={{ backgroundColor: "red" }}>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block space="between" style={[styles.padded, { flex: 2 }]}>
          <Block space="around" style={{ zIndex: 2, flex: 2 }}>
            <Block style={[styles.title, styles.stepContainer]}>
              {this.state.step === 1 ? <Step1 /> : null}
              {this.state.step === 2 ? <Step2 /> : null}
              {this.state.step === 3 ? <Step3 /> : null}
            </Block>
            <Block
              flex
              bottom
              style={[
                styles.title,
                { justifyContent: "space-around", marginTop: 10 },
              ]}
            >
              <Block
                style={[
                  { paddingHorizontal: theme.SIZES.BASE },
                  styles.navigationBtnContainer,
                ]}
              >
                {/* <Button
                  style={[styles.button, { marginBottom: 20 }]}
                  onPress={() => navigation.navigate("Elements")}
                >
                  Sign Up
                </Button> */}
                <Button
                  style={{ width: 100 }}
                  onPress={() => this.perviousStep()}
                  disabled={this.state.step === 1}
                >
                  Previous
                </Button>
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
        </Block>
      </Block>
    );
  }
}

export default SignUpAsAssociate;

import React from "react";
import AuthBackGround from "../../../components/BackgroundFull";

import { Alert, View, StyleSheet, Dimensions } from "react-native";
import { Block, Button, Input, Text, theme } from "galio-framework";

import LabelledInput from "../../../components/LabelledInput.Component";
import GlobalStyle from "../../../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextCustom from "../../../components/TextCustom";

const { height, width, fontScale } = Dimensions.get("window");
function ForgotPassword(props) {
  return (
    <View style={Styles.MainContainer}>
      <AuthBackGround fullscreen>
        <View style={Styles.container}>
          <View
            style={[
              {
                justifyContent: "center",
              },
              Styles.Block,
            ]}
          >
            <TextCustom
              numberOfLines={1}
              adjustsFontSizeToFit
              style={Styles.LogoText}
            >
              Study Abroad Apply
            </TextCustom>
          </View>
          <View
            style={[
              {
                justifyContent: "flex-end",
              },
              Styles.Block,
            ]}
          >
            <TextCustom style={Styles.TextCenter}>Forgot Password</TextCustom>
            <LabelledInput
              label="Email address"
              // onChange={this.handleUsernameChange}
              // value={this.state.username}
              required
              // error={this.state.emailError}
              type={"email-address"}
            />
            <Button style={Styles.Button}>Send Email</Button>
            <View style={Styles.Link}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SignIn")}
              >
                <TextCustom style={{ textAlign: "center" }}>
                  Sign in here
                </TextCustom>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </AuthBackGround>
    </View>
  );
}

const Styles = StyleSheet.create({
  MainContainer: {
    height: "100%",
  },
  container: {
    padding: GlobalStyle.SIZES.PageNormalPadding,
    height: "100%",
  },
  Block: {
    height: "45%",
    display: "flex",
  },
  Button: {
    width: "100%",
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginVertical: 10,
    margin: 0,
  },
  LogoText: {
    textAlign: "center",
    fontSize:
      width > 500
        ? GlobalStyle.LOGO.TEXT.FONTSIZE * 1.5
        : GlobalStyle.LOGO.TEXT.FONTSIZE,
  },
  TextCenter: {
    textAlign: "center",
    fontSize: 20,
  },
  Link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ForgotPassword;

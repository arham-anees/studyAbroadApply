import React from "react";
import { Dimensions, ImageBackground, Keyboard } from "react-native";
import { View } from "react-native";
import GlobalStyle from "../GlobalStyles";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Images from "../constants/Images";
import { SafeAreaView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

//var  = Dimensions.get("screen").height;
function AuthBackGround(props) {
  const { height, width } = Dimensions.get("screen");
  return (
    <SafeAreaView>
      <ImageBackground
        source={Images.Background}
        style={{ width, height: "100%" }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {props.children}
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default AuthBackGround;

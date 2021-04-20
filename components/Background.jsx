import React, { useState } from "react";
import { Dimensions, ImageBackground, Keyboard } from "react-native";
import { View } from "react-native";
import GlobalStyle from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Block, Text } from "galio-framework";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Theme from "../constants/Theme";
import Images from "../constants/Images";
import { SafeAreaView } from "react-native";

//var  = Dimensions.get("screen").height;
function Background(props) {
  const { height, width } = Dimensions.get("screen");
  let backgroundHeight = props.fullscreen
    ? GlobalStyle.SIZES.PageHeight + GlobalStyle.SIZES.NavBarHeight
    : GlobalStyle.SIZES.PageHeight;
  let scrollStatus = !props.noScroll;
  // const [winHeight, setWinHeight] = useState(height);
  // Keyboard.addListener("keyboardDidShow", (e) => {
  //   console.log(e.endCoordinates.height);
  //   setWinHeight(height - e.endCoordinates.height);
  // });
  // Keyboard.addListener("keyboardDidHide", () => {
  //   setWinHeight(height);
  // });

  return (
    <SafeAreaView>
      <ImageBackground
        source={Images.Background}
        style={{ width, height: backgroundHeight }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "padding"}
          style={{ flex: 1 }}
        >
          {scrollStatus ? (
            <ScrollView
              style={{
                flex: 1,
              }}
              keyboardShouldPersistTaps={"handled"}
              nestedScrollEnabled={true}
            >
              {props.children}
              <View style={{ minHeight: 80 }}></View>
            </ScrollView>
          ) : (
            <View style={{ flex: 1 }}>{props.children}</View>
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Background;

import React from "react";
import { Dimensions, ImageBackground } from "react-native";
import { View } from "react-native";
import GlobalStyle from "../GlobalStyles";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Images from "../constants/Images";
import { SafeAreaView } from "react-native";

//var  = Dimensions.get("screen").height;
function Background(props) {
  const { height, width } = Dimensions.get("screen");
  let backgroundHeight = props.fullscreen
    ? GlobalStyle.SIZES.PageHeight + GlobalStyle.SIZES.NavBarHeight
    : GlobalStyle.SIZES.PageHeight + GlobalStyle.SIZES.NavBarHeight;
  let scrollStatus = !props.noScroll;

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

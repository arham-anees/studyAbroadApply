import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { View } from 'react-native';
import GlobalStyle from '../GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { Block, Text } from 'galio-framework';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Theme from '../constants/Theme';
import Images from '../constants/Images';
import { SafeAreaView } from 'react-native';



function Background(props) {
  const { height, width } = Dimensions.get("screen");
  let backgroundHeight = props.fullscreen
    ? GlobalStyle.SIZES.PageHeight + GlobalStyle.SIZES.NavBarHeight
    : GlobalStyle.SIZES.PageHeight;
    let scrollStatus=!props.noScroll;
  return (
    <SafeAreaView>
    <ImageBackground
      source={Images.Background}
      style={{ width, height: backgroundHeight }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {scrollStatus ? (
          <ScrollView style={{ flex: 1 }}>
            {props.children}
            <Block style={{ minHeight: 80 }}></Block>
          </ScrollView>
        ) : (
          props.children
        )}
      </KeyboardAvoidingView>
    </ImageBackground>
    </SafeAreaView>
  );
}


export default Background;
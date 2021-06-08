import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";
import axios from "axios";
import { Provider } from "react-redux";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";
import { Images, argonTheme } from "./constants";
import LocalStorage from "./helper/LocalStorage";
import { CaptureConsole as CaptureConsoleIntegration } from "@sentry/integrations";
import store from "./Redux/Store";
import { LinearGradient } from "expo-linear-gradient";

//#region SENTRY

try {
  // console.log(process.env);
  Sentry.init({
    dsn: "https://45acbe906c574686a29acae60709b4c8@o478857.ingest.sentry.io/5522026",
    // enableInExpoDevelopment: true,
    // debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
    // release: "StudyAbroadApply@3",
    enableNative: false,
    release: "0.0.5",
    environment: "prod",
    maxBreadcrumbs: 50,
    integrations: [
      new CaptureConsoleIntegration({
        levels: ["log", "info", "warn", "error", "debug", "assert"],
      }),
    ],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    //tracesSampleRate: 1.0,
  });
} catch (e) {
  console.log(e);
}

//#endregion

//#region set interceptors
axios.interceptors.request.use(
  async (config) => {
    const token = await LocalStorage.GetToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    //console.log("request Start:",new Date())
    //console.log(config.data);
    return config;
  },
  (err) => Promise.reject(err)
);
//#endregion

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Background,
];
function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }
  });
}

export default (props) => {
  const [isLoadingComplete, setLoading] = useState(false);

  function _loadResourcesAsync() {
    return Promise.all([...cacheImages(assetImages)]);
  }

  function _handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }

  function _handleFinishLoading() {
    setLoading(true);
  }

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <GalioProvider theme={argonTheme}>
            <Block flex>
              <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
              <Screens />
            </Block>
          </GalioProvider>
        </NavigationContainer>
      </Provider>
    );
  }
};

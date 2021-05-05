import React, { useState } from "react";
import { Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import axios from "axios";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";
import { Images, argonTheme } from "./constants";
import LocalStorage from "./helper/LocalStorage";

//#region SENTRY

// try{
// Sentry.init({
//   dsn: 'https://367ddf64e23f4dfa9a654f873eb6aa36@o478857.ingest.sentry.io/5522026',
//   enableInExpoDevelopment: true,
//   debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
//   release: "StudyAbroadApply@" + process.env.npm_package_version,
//   integrations: [new Integrations.BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });
// }catch{}

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
const assetImages = [Images.Onboarding, Images.LogoOnboarding, Images.Logo];
function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }
  });
}

export default (props) => {
  const [isLoadingComplete, setLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    ArgonExtra: require("./assets/font/argon.ttf"),
  });

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

  if (!fontsLoaded && !isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else if (fontsLoaded) {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  }
  return <View></View>;
};

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false
//   };

//   render() {
//     if (!this.state.isLoadingComplete) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <NavigationContainer>
//           <GalioProvider theme={argonTheme}>
//             <Block flex>
//               <Screens />
//             </Block>
//           </GalioProvider>
//         </NavigationContainer>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([...cacheImages(assetImages)]);
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }

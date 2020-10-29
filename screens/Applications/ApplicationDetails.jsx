import React from "react";
import { View } from "react-native";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import ApplicationDetailsTabs from "../../components/Applications/ApplicationDetailsTabs";
const { height, width } = Dimensions.get("screen");
import Images from "../../constants/Images";

class ApplicationDetails extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        >
          <ApplicationDetailsTabs />
        </ImageBackground>
      </View>
    );
  }
}

export default ApplicationDetails;

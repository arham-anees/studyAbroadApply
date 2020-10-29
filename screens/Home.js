import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
// const { width } = Dimensions.get("screen");
import LineChart from "../components/Home/LineChart.Component";
import AppStatusByCountry from "../components/Home/AppStatusByCountry.PieChart";
import PieChart from "../components/Home/PieChart.Component";
import StackedBarComponent from "../components/Home/StackedBar.Component";
import Images from "../constants/Images";
import CountryApplicationsProgressChart from "../components/Home/CountryApplications.ProgressChart";

const { height, width } = Dimensions.get("screen");
class Home extends React.Component {
  render() {
    return (
      <Block flex center style={styles.home}>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        >
          <AppStatusByCountry />
          <LineChart />
          {/* <CountryApplicationsProgressChart /> */}
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;

import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  BackHandler,
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
import ProgressBarByCountry from "../components/Home/ProgressBarByCountry";
import GlobalStyle from "../GlobalStyles";
import Background from "../components/Background";
import { View } from "react-native";
import { Animated } from "react-native";
import GraphsDataService from "../services/GraphDataService";

const { height, width } = Dimensions.get("screen");
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fadeAnim: new Animated.Value(0)
    }
    
  }
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 0
    }).start();
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      this.fadeOut();
      this.fadeIn();
    });

    

  }
  // componentDidUpdate(){
  //   GraphsDataService.GetHomePageGraphsData();
  // }
  render() {
    return (
      <Background>
        <Animated.View style={{opacity:this.state.fadeAnim}}>
        <View style={{padding:GlobalStyle.SIZES.PageNormalPadding}}>
            <AppStatusByCountry />
            <LineChart />
            <ProgressBarByCountry />
            {/* <CountryApplicationsProgressChart /> */}
            </View>
            </Animated.View>
      </Background>
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

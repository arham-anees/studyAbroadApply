import React from "react";
import { StyleSheet, Dimensions, BackHandler } from "react-native";
import { theme } from "galio-framework";

import LineChart from "../components/Home/LineChart.Component";
import AppStatusByCountry from "../components/Home/AppStatusByCountry.PieChart";
import ProgressBarByCountry from "../components/Home/ProgressBarByCountry";
import GlobalStyle from "../GlobalStyles";
import Background from "../components/Background";
import { View } from "react-native";
import { Animated } from "react-native";
import GraphsDataService from "../services/GraphDataService";
import { Alert } from "react-native";
import HomeUtils from "./Home.Utils";
import Loading from "../components/Loading";
import Notifications from "../helper/Notifications";
import { addToken } from "../Redux/Reducers/TokenActions";
import { enableScreens } from "react-native-screens";

const { height, width } = Dimensions.get("screen");
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.back_Button_Press = this.back_Button_Press.bind(this);
    this.state = {
      fadeAnim: new Animated.Value(0),
      pieChartData: [],
      lineChartData: [],
      barChartData: [],
      isLoading: true,
    };
    this.fadeOut();
  }
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  componentDidMount() {
    enableScreens(false);
    Notifications.Start();
    BackHandler.addEventListener("hardwareBackPress", this.back_Button_Press);
    const { navigation } = this.props;
    addToken("token added");
    this.focusListener = navigation.addListener("focus", () => {
      this.setState({
        isLoading: true,
      });
      this.fadeIn();
      this.getData();
    });
  }
  componentWillUnmount() {
    try {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        this.back_Button_Press
      );
      this.props.navigation.removeListener("focus");
    } catch {}
  }

  back_Button_Press = () => {
    Alert.alert(
      "Exit From App ",
      "Do you want to exit From App ?",
      [
        { text: "Yes", onPress: () => BackHandler.exitApp() },
        { text: "No", onPress: () => {} },
      ],
      { cancelable: false }
    );
    return true;
  };

  getData() {
    try {
      //console.log("getting data");
      GraphsDataService.GetHomePageGraphsData()
        .then((x) => {
          let pieChartData = HomeUtils.MapPieChartData(x["PieChartDataList"]);
          let barChartData = HomeUtils.MapBarChartData(x);
          let lineChartData = HomeUtils.MapLineChartData(x);
          this.setState({
            pieChartData,
            barChartData,
            lineChartData,
            isLoading: false,
          });
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          Alert.alert("failed to load data.");
        });
    } catch (e) {
      this.setState({ isLoading: false });
      Alert.alert("failed to load data.");
    }
  }

  render() {
    return (
      <Background>
        <Loading
          isActive={
            this.state.isLoading &&
            this.state.barChartData.length == 0 &&
            this.state.lineChartData.length == 0 &&
            this.state.pieChartData.length == 0
          }
        />
        <Animated.View style={{ opacity: this.state.fadeAnim }}>
          <View style={{ padding: GlobalStyle.SIZES.PageNormalPadding }}>
            <AppStatusByCountry
              data={this.state.pieChartData}
              isLoading={
                this.state.isLoading && this.state.pieChartData.length == 0
              }
            />
            <LineChart
              data={this.state.lineChartData}
              isLoading={
                this.state.isLoading && this.state.lineChartData.length == 0
              }
            />
            <ProgressBarByCountry
              data={this.state.barChartData}
              isLoading={
                this.state.isLoading && this.state.barChartData.length == 0
              }
            />
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

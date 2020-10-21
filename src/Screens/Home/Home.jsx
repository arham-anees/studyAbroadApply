import React from "react";
import { Text, View } from "react-native";
import ApplicationBar from "../../Components/Appbar";
import LineChartCustom from "./LineChart.Component";
import PieChartCustom from "./PieChart.component";
import Styles from "./Home.Style";
import { BackHandler } from "react-native";
import StackedBarComponent from "./StackedBar.Component";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  componentWillUnmount() {
    BackHandler.addEventListener("hardwareBackPress", function () {
      return false;
    });
  }
  render() {
    return (
      <ScrollView style={Styles.container}>
        <ApplicationBar props={{ ...this.props, name: "Home" }} />
        <PieChartCustom />
        <LineChartCustom />
        <StackedBarComponent />
      </ScrollView>
    );
  }
}

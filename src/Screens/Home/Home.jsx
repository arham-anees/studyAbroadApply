import React from "react";
import { Text, View } from "react-native";
import ApplicationBar from "../../Components/Appbar";
import LineChartCustom from "./LineChart.Component";
import PieChartCustom from "./PieChart.component";
import * as Styles from "./Home.Style";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <ApplicationBar props={{ ...this.props, name: "Home" }} />
        <PieChartCustom />
        <LineChartCustom />
      </View>
    );
  }
}

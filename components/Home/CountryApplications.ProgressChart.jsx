import React from "react";
import { View } from "react-native";
import CountryApplicationItem from "./CountryApplicationItem.ProgressChart";

function CountryApplicationsProgressChart(props) {
  return (
    <View>
      <CountryApplicationItem />
      <CountryApplicationItem />
      <CountryApplicationItem />
      <CountryApplicationItem />
      <CountryApplicationItem />
    </View>
  );
}

export default CountryApplicationsProgressChart;

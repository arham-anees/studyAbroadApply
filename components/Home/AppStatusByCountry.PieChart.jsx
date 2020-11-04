import { Text } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalStyle from "../../GlobalStyles";
import AppStatusByCountryDoughnutChart from "./AppStatusByCountry.DoughnutChart";
// import { Text } from "galio-framework";
const Colors = [
  "rgb(0, 143, 251)",
  "rgb(0, 227, 150)",
  "rgb(254, 176, 25)",
  "rgb(255, 69, 96)",
];
function AppStatusByCountry(props) {
  return (
    <View style={{ margin: 10 }}>
      <View style={GlobalStyle.block}>
        <View style={Styles.card}>
          <AppStatusByCountryDoughnutChart />
          <View style={Styles.legendContainer}>
            <TouchableOpacity style={Styles.legend}>
              <TouchableOpacity
                style={{ ...Styles.color, backgroundColor: Colors[0] }}
              ></TouchableOpacity>
              <Text style={Styles.legendTitle}>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.legend}>
              <TouchableOpacity
                style={{ ...Styles.color, backgroundColor: Colors[1] }}
              ></TouchableOpacity>
              <Text style={Styles.legendTitle}>New Application Submitted</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.legend}>
              <TouchableOpacity
                style={{ ...Styles.color, backgroundColor: Colors[2] }}
              ></TouchableOpacity>
              <Text style={Styles.legendTitle}>Pending With Institute</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.legend}>
              <TouchableOpacity
                style={{ ...Styles.color, backgroundColor: Colors[3] }}
              ></TouchableOpacity>
              <Text style={Styles.legendTitle}>Visa Issued</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default AppStatusByCountry;
const Styles = StyleSheet.create({
  card: {
    // backgroundColor: GlobalStyle.color.background,
    margin: 10,
    borderRadius: 20,
    paddingVertical: 10,
  },
  color: {
    height: 15,
    width: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  legendContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  legend: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendTitle: {
    fontSize: 12,
    color: "#fff",
  },
});

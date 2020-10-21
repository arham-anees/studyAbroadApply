import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Title } from "react-native-paper";
import GlobalStyle from "../../GlobalStyles";

function PieChartCustom(props) {
  const data = [
    {
      name: "In Progress",
      population: Math.random() * 100,
      color: "rgb(0, 143, 251)",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "New Application",
      population: Math.random() * 100,
      color: "rgb(0, 227, 150)",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Pending With Institute",
      population: Math.random() * 100,
      color: "rgb(254, 176, 25)",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Visa Issued",
      population: Math.random() * 100,
      color: "rgb(255, 69, 96)",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
  ];
  return (
    <View style={Styles.card}>
      <Title style={Styles.title}>Application By Status</Title>
      <View style={Styles.chart}>
        <PieChart
          data={data}
          height={220}
          width={Dimensions.get("screen").width - 20}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "purple",
            backgroundGradientTo: "purple",
            color: () => `rgba(255, 255, 255, 1)`,
            style: {
              borderRadius: 0,
              padding: 0,
            },
          }}
          accessor="population"
          paddingLeft="0"
          hideLegend={true}
          verticalLabelRotation={130}
        />
      </View>
    </View>
  );
}

export default PieChartCustom;

const colors = [];
const Styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 15,
  },
  title: {
    textAlign: "center",
  },
  chart: {
    backgroundColor: GlobalStyle.color.background,
    borderRadius: 16,
  },
});

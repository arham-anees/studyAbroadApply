import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Title } from "react-native-paper";

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
      <Title style={Styles.title}>Pie Chart</Title>
      <PieChart
        data={data}
        height={200}
        width={Dimensions.get("screen").width - 20}
        chartConfig={{
          backgroundColor: "#00000000",
          backgroundGradientFrom: "#022173",
          backgroundGradientTo: "#1b3fa0",
          color: () => `rgba(255, 255, 255, 1)`,
          style: {
            borderRadius: 0,
            padding: 0,
          },
        }}
        accessor="population"
      />
    </View>
  );
}

export default PieChartCustom;

const colors = [];
const Styles = StyleSheet.create({
  card: {
    backgroundColor: "purple",
    margin: 10,
    borderRadius: 15,
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
});

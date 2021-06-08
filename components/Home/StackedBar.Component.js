import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
// import { StackedBarChart } from "react-native-chart-kit";
import GlobalStyle from "../../GlobalStyles";

function StackedBarComponent(props) {
  const data = {
    labels: [
      "Australia",
      "Bulgaria",
      "Canada",
      "China",
      "European Cyprus",
      "Hungary",
      "Ireland",
    ],
    legend: ["Send To Counselor", "Send To Institute", "New Application"],
    data: [
      [60, 60, 60],
      [30, 30, 60],
      [30, 30, 60],
      [30, 30, 60],
      [30, 30, 60],
      [30, 30, 60],
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
  };
  return (
    <View style={Styles.card}>
      <Title style={Styles.title}>Application Status By Country</Title>
      <View style={Styles.chart}>
        {/* <StackedBarChart
          data={data}
          width={Dimensions.get("screen").width - 20}
          height={220}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "purple",
            backgroundGradientTo: "purple",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          hasLegend={false}
        /> */}
      </View>
    </View>
  );
}

export default StackedBarComponent;
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

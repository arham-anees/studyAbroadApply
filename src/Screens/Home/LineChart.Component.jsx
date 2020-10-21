import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Title } from "react-native-paper";

function LineChartCustom(props) {
  return (
    <View style={Styles.container}>
      <Title style={Styles.title}>Applications By Countries</Title>
      <View style={Styles.chart}>
        <LineChart
          data={{
            labels: [
              "Hungary",
              "Malaysia",
              "Turkey",
              "Uzbekistan",
              "North Cyprus",
              "United Kingdom",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("screen").width - 20} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "purple",
            backgroundGradientTo: "purple",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}

export default LineChartCustom;

const Styles = StyleSheet.create({
  container: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
});

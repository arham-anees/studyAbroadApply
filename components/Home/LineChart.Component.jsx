import { Text } from "galio-framework";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import GlobalStyle from "../../GlobalStyles";

function LineChartCustom(props) {
  return (
    <View style={{ margin: 10 }}>
      <View style={GlobalStyle.block}>
        <View style={Styles.chart}>
          <LineChart
            verticalLabelRotation={-45}
            horizontalLabelRotation={-45}
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
            width={Dimensions.get("screen").width - 40} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "transparent",

              backgroundGradientFromOpacity: 0.01,
              backgroundGradientToOpacity: 0.01,

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

        <Text style={Styles.title}>Total Applications By Countries</Text>
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
    color: "white",
  },
});
import { Text } from "galio-framework";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import GlobalStyle from "../../GlobalStyles";

function LineChartCustom(props) {
  return (
    <View>
      <View style={[GlobalStyle.block,{padding:0,height:250}]}>
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
            width={Dimensions.get("screen").width-60} // from react-native
            height={200}
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
    paddingTop:10
  },
  title: {
    textAlign: "center",
    color: GlobalStyle.color.textLight,
  },
  chart:{
    marginTop:20
  }
});

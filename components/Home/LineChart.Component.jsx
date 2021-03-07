import { Text } from "galio-framework";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Svg from "react-native-svg";
import { Rect } from "react-native-svg";
import GlobalStyle from "../../GlobalStyles";

function LineChartCustom(props) {
  const {data}=props;
  let labels=[];
  let values=[];
  data.forEach(element => {
    labels.push(element.country);
    values.push(element.value);
  });
  return (
    <View>
      <View style={[GlobalStyle.block, { padding: 0, height: 250 }]}>
        <View style={Styles.chart}>
          {values.length > 0 ? (
            <LineChart
              verticalLabelRotation={-25}
              horizontalLabelRotation={0}
              data={{
                labels,
                datasets: [
                  {
                    data: values,
                  },
                ],
              }}
              width={Dimensions.get("screen").width - 60} // from react-native
              height={200}
              chartConfig={{
                backgroundColor: "transparent",

                backgroundGradientFromOpacity: 0.01,
                backgroundGradientToOpacity: 0.01,

                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                  backgroundColor: "red",
                  overflow: "visible",
                },
              }}
              bezier
              style={{
                overflow: "visible",
              }}
            />
          ) : (
           <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           <Svg height={200} width={Dimensions.get("screen").width - 60 } fill={"grey"}>
              <Rect height={200} width={Dimensions.get("screen").width - 60 } x={0} y={0} xy={0} />
            </Svg></View>
          )}
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

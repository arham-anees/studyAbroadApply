import React from "react";

import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import GlobalStyle from "../../GlobalStyles";

function AppStatusByCountryDoughnutChart(props) {
  const { data } = props;

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={GlobalStyle.color.textLight}
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={18}
        >
          {data.amount}
        </Text>
      );
    });
  };
  return (
    <PieChart
      style={{ height: 180 }}
      valueAccessor={({ item }) => item.amount}
      data={data}
      spacing={0}
      outerRadius={"95%"}
    >
      <Labels />
    </PieChart>
  );
}

export default AppStatusByCountryDoughnutChart;

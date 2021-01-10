import React from "react";

import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import GlobalStyle from "../../GlobalStyles";
const Colors = [
  "rgb(0, 143, 251)",
  "rgb(0, 227, 150)",
  "rgb(254, 176, 25)",
  "rgb(255, 69, 96)",
];

function AppStatusByCountryDoughnutChart(props) {
  const {data} = props;
  const temp=[
    {
      key: 1,
      amount: 50,
      label: "In Progress",
      svg: { fill: Colors[0] },
    },
    {
      key: 2,
      amount: 40,
      label: "New Application Submitted",
      svg: { fill: Colors[1] },
    },
    {
      key: 3,
      amount: 20,
      label: "Pending With Institute",
      svg: { fill: Colors[2] },
    },
    {
      key: 4,
      amount: 45,
      label: "Visa Issued",
      svg: { fill: Colors[3] },
    },
  ];

  const Labels = ({ slices, height, width }) => {
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

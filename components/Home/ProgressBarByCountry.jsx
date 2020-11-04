import { Block, Text } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import GlobalStyle from "../../GlobalStyles";
import ProgressBarByCountryItem from "./ProgressBarByCountry.Component";

const data = [
  {
    country: "Pakistan",
    sentToCounselor: 10,
    sentToInstitute: 2,
    newApplications: 7,
    progress: 60,
  },
  {
    country: "Bangladesh",
    sentToCounselor: 5,
    sentToInstitute: 5,
    newApplications: 1,
    progress: 40,
  },
  {
    country: "Sri Lanka",
    sentToCounselor: 8,
    sentToInstitute: 2,
    newApplications: 7,
    progress: 80,
  },
  {
    country: "South Africa",
    sentToCounselor: 6,
    sentToInstitute: 8,
    newApplications: 4,
    progress: 30,
  },
];

class ProgressBarByCountry extends React.Component {
  redDot = { ...styles.dot, backgroundColor: GlobalStyle.bg.red };
  orangeDot = { ...styles.dot, backgroundColor: GlobalStyle.bg.orange };
  skyDot = { ...styles.dot, backgroundColor: GlobalStyle.bg.sky };
  render = () => {
    return (
      <View style={{ margin: 10 }}>
        <View style={GlobalStyle.block}>
          {data
            .sort(function (a, b) {
              return b.progress - a.progress;
            })
            .map((item, index) => (
              <ProgressBarByCountryItem
                item={item}
                totalApp={100}
                number={index + 1}
                key={index}
              />
            ))}

          <Block left>
            <Block row middle>
              <Block style={this.skyDot}></Block>
              <Text color={GlobalStyle.color.textLight}>Send To Counselor</Text>
            </Block>
            <Block row middle>
              <Block style={this.orangeDot}></Block>
              <Text color={GlobalStyle.color.textLight}>Send To Institute</Text>
            </Block>
            <Block row middle>
              <Block style={this.redDot}></Block>
              <Text color={GlobalStyle.color.textLight}>New Applications</Text>
            </Block>
          </Block>
        </View>
      </View>
    );
  };
}

export default ProgressBarByCountry;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: GlobalStyle.bg.white,
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
  },
  countryName: {
    fontSize: 20,
  },
  dot: {
    width: 15,
    height: 15,
    marginLeft: 10,
    marginRight: 5,
  },
});
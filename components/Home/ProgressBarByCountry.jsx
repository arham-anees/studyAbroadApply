import { Block, Text } from "galio-framework";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg from "react-native-svg";
import { Rect } from "react-native-svg";
import GlobalStyle from "../../GlobalStyles";
import ProgressBarByCountryItem from "./ProgressBarByCountry.Component";

const data2 = [
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

function ProgressBarByCountry (props) {
  
  // componentDidMount() {
  //   const { data } = this.props;
  //   console.log("========================================================");
  //   console.log(data)
  //   this.setState({ data });
  // }
  const redDot = {
    ...styles.dot,
    backgroundColor: GlobalStyle.STATUSCOLOR.NewApplication,
  };
  const orangeDot = {
    ...styles.dot,
    backgroundColor: GlobalStyle.STATUSCOLOR.SentToInstitute,
  };
  const skyDot = {
    ...styles.dot,
    backgroundColor: GlobalStyle.STATUSCOLOR.SentToCounsellor,
  };
    return (
      <View>
        <View style={GlobalStyle.block}>
          {props.data.length > 0 ? (
            <View>
              {props.data
                .sort(function (a, b) {
                  return b.progress - a.progress;
                })
                .map((item, index) => (
                  <ProgressBarByCountryItem
                    item={item}
                    totalApp={props.data[0].progress}
                    number={index + 1}
                    key={index}
                  />
                ))}
            </View>
          ) : 
          <Block>
            <MockProgressBar/>
            <MockProgressBar/>
            <MockProgressBar/>
            <MockProgressBar/>
            <MockProgressBar/>
            </Block>}
        <Block left>
          <Block row middle>
            <Block style={skyDot}></Block>
            <Text color={GlobalStyle.color.textLight}>Send To Counselor</Text>
          </Block>
          <Block row middle>
            <Block style={orangeDot}></Block>
            <Text color={GlobalStyle.color.textLight}>Send To Institute</Text>
          </Block>
          <Block row middle>
            <Block style={redDot}></Block>
            <Text color={GlobalStyle.color.textLight}>New Applications</Text>
          </Block>
        </Block>
        </View>
      </View>
    );
}


function MockProgressBar(props){
  return <Block>
<Svg width={"100%"} height={45} fill={"grey"}>
  <Rect width={"35%"} height={20} x={0} y={0} xy={0}></Rect>
  <Rect width={(Dimensions.get("screen").width)/2} height={20} x={Dimensions.get("screen").width-(Dimensions.get("screen").width)/2} y={0} xy={0}></Rect>
  <Rect width={(Dimensions.get("screen").width)} height={10} x={0} y={25} xy={0}></Rect>
</Svg>
  </Block>
}

export default ProgressBarByCountry;

const styles = StyleSheet.create({
  wrapper: {
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
    borderRadius: 10,
  },
});

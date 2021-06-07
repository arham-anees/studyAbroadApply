import { Block, Text } from "galio-framework";
import React from "react";
import {
  Dimensions,
  ListView,
  ShadowPropTypesIOS,
  StyleSheet,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Svg from "react-native-svg";
import { Rect } from "react-native-svg";
import GlobalStyle from "../../GlobalStyles";
import TextCustom from "../TextCustom";
import ProgressBarByCountryItem from "./ProgressBarByCountry.Component";

function ProgressBarByCountry(props) {
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
        {props.isLoading ? (
          <Block>
            <MockProgressBar />
            <MockProgressBar />
            <MockProgressBar />
            <MockProgressBar />
            <MockProgressBar />
          </Block>
        ) : props.data.length == 0 ? (
          <View style={styles.centerAll}>
            <TextCustom>Not enough data for graph</TextCustom>
          </View>
        ) : (
          <FlatList
            data={props.data.sort(function (a, b) {
              return b.progress - a.progress;
            })}
            renderItem={(item) => {
              return (
                <ProgressBarByCountryItem
                  item={item.item}
                  totalApp={props.data[0].progress}
                  number={item.index + 1}
                  key={item.index}
                />
              );
            }}
          ></FlatList>
        )}
        <Block left>
          {props.data.length > 0 ? (
            <>
              <Block row middle>
                <Block style={skyDot}></Block>
                <Text color={GlobalStyle.color.textLight}>
                  Send To Counselor
                </Text>
              </Block>
              <Block row middle>
                <Block style={orangeDot}></Block>
                <Text color={GlobalStyle.color.textLight}>
                  Send To Institute
                </Text>
              </Block>
              <Block row middle>
                <Block style={redDot}></Block>
                <Text color={GlobalStyle.color.textLight}>
                  New Applications
                </Text>
              </Block>
            </>
          ) : null}
        </Block>
      </View>
    </View>
  );
}

function MockProgressBar(props) {
  return (
    <Block>
      <Svg width={"100%"} height={45} fill={"grey"}>
        <Rect width={"35%"} height={20} x={0} y={0} xy={0}></Rect>
        <Rect
          width={Dimensions.get("screen").width / 2}
          height={20}
          x={
            Dimensions.get("screen").width - Dimensions.get("screen").width / 2
          }
          y={0}
          xy={0}
        ></Rect>
        <Rect
          width={Dimensions.get("screen").width}
          height={10}
          x={0}
          y={25}
          xy={0}
        ></Rect>
      </Svg>
    </Block>
  );
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
  centerAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

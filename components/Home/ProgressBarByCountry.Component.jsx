import { Block, Text } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import GlobalStyle from "../../GlobalStyles";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
function ProgressBarByCountryItem(props) {
  // console.log(props.item);
  return (
    <View style={styles.wrapper}>
      <Block row space="between" middle>
        <Text style={styles.countryName}>
          {props.number}. {props.item.country}
        </Text>
        <Block row middle>
          <Block
            style={{ ...styles.dot, backgroundColor: GlobalStyle.bg.sky }}
          ></Block>
          <Text>{props.item.sentToCounselor}</Text>
          <Block
            style={{ ...styles.dot, backgroundColor: GlobalStyle.bg.orange }}
          ></Block>
          <Text>{props.item.sentToInstitute}</Text>
          <Block
            style={{ ...styles.dot, backgroundColor: GlobalStyle.bg.red }}
          ></Block>
          <Text>{props.item.newApplications}</Text>
        </Block>
      </Block>
      <Block center>
        <ProgressBarAnimated
          width={width - 50}
          value={(props.item.progress / props.totalApp) * 100}
          backgroundColorOnComplete="#6CC644"
        />
      </Block>
    </View>
  );
}

export default ProgressBarByCountryItem;

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

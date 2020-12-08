import { Block, Text } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import GlobalStyle from "../../GlobalStyles";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import { Dimensions } from "react-native";
import Theme from "../../constants/Theme";
const { width } = Dimensions.get("screen");
function ProgressBarByCountryItem(props) {
   //console.log(props.item);
   const progressCustomStyles = {
    backgroundColor:GlobalStyle.color.textLight, 
  };
  return (
    <View style={styles.wrapper}>
      <Block row space="between" middle>
        <Text style={styles.countryName} color={GlobalStyle.color.textLight}>
          {props.number}. {props.item.country}
        </Text>
        <Block row middle>
          <Block
            style={{ ...styles.dot, backgroundColor: GlobalStyle.STATUSCOLOR.SentToCounsellor }}
          ></Block>
          <Text color={GlobalStyle.color.textLight}>{props.item.sentToCounselor}</Text>
          <Block
            style={{ ...styles.dot, backgroundColor: GlobalStyle.STATUSCOLOR.SentToInstitute }}
          ></Block>
          <Text color={GlobalStyle.color.textLight} >{props.item.sentToInstitute}</Text>
          <Block
            style={{ ...styles.dot, backgroundColor: GlobalStyle.STATUSCOLOR.NewApplication }}
          ></Block>
          <Text color={GlobalStyle.color.textLight}>{props.item.newApplications}</Text>
        </Block>
      </Block>
      <Block center>
        <ProgressBarAnimated
          width={width - 60}
          height={10}
          value={(props.item.progress / props.totalApp) * 100}
          backgroundColor={"#fff"}
          borderColor={"#fff"}
          backgroundColorOnComplete={"#fff"}
          {...progressCustomStyles}
        />
      </Block>
    </View>
  );
}

export default ProgressBarByCountryItem;

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
    borderRadius:10
  },
});

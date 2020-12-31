import { Block, Button, Text } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Alert } from "react-native";
import { View } from "react-native";
import DropDown from "../../../components/DropDown";
import HeaderNormal from "../../../components/HeadingNormal";
import TextCustom from "../../../components/TextCustom";
import GlobalStyle from "../../../GlobalStyles";

const { width, height } = Dimensions.get("window");

function SearchedCoursesItem(props) {
  const {title, university, country, city, intake, duration, annualFee, feeCurrency,courseDeadline, id}=props;
  return (
      <Block style={GlobalStyle.block}>
      <TextCustom style={GlobalStyle.blockTitle}>
      bachelor of Environmental Science
        </TextCustom>
        <TextCustom center style={{fontSize:GlobalStyle.SIZES.HEADING6}}>
          University of the Sunshine Coast
        </TextCustom>
        <Block row>
          <TextCustom style={ styles.infoField}>Country :</TextCustom>
          <TextCustom style={ styles.infoField}>Australia</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>City :</TextCustom>
          <TextCustom style={ styles.infoField}>Queensland</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>Intakes :</TextCustom>
          <TextCustom style={ styles.infoField}>-</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>Duration :</TextCustom>
          <TextCustom style={ styles.infoField}>0 Year(s) 0 Month(s)</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>
            Course Fee (Per Year):
          </TextCustom>
          <TextCustom style={ styles.infoField}>$0</TextCustom>
        </Block>
        {/* <Block row>
          <Text style={ styles.infoField]}>Course Deadline :</Text>
          <Text style={ styles.infoField]}>-</Text>
        </Block> */}
        <Block row middle>
        <TextCustom style={ styles.infoField}>Course Deadline :</TextCustom>
          <TextCustom style={ styles.infoField}>12/12/2020</TextCustom>
        </Block>
        <Button style={styles.btn} onPress={()=>Alert.alert("Applied for course","You have successfully for course")}>Apply For Course</Button>
      </Block>
  );
}

export default SearchedCoursesItem;

const styles = StyleSheet.create({

  infoField: {
    flex:1,
    flexWrap:"wrap",
    width:"50%"
  },

  btn:{
    marginTop:4,
    width:"100%"
  }
});

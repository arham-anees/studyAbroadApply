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
  console.log(props)
  const {InstituteName, CountryName, CityName, InTakeName, CourseName,Duration,CourseDescription, CourseFee, DeadLine,  id}=props.item;
  return (
      <Block style={GlobalStyle.block}>
      <TextCustom style={GlobalStyle.blockTitle}>
      {CourseName}
        </TextCustom>
        <TextCustom center style={{fontSize:GlobalStyle.SIZES.HEADING6}}>
        {InstituteName}
        </TextCustom>
        <Block row>
          <TextCustom style={ styles.infoField}>Country :</TextCustom>
          <TextCustom style={ styles.infoField}>{CountryName}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>City :</TextCustom>
          <TextCustom style={ styles.infoField}>{CityName}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>Intakes :</TextCustom>
          <TextCustom style={ styles.infoField}>{InTakeName}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>Duration :</TextCustom>
          <TextCustom style={ styles.infoField}>{Duration}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={ styles.infoField}>
            Course Fee (Per Year):
          </TextCustom>
          <TextCustom style={ styles.infoField}>{CourseFee!=undefined?CourseFee:"-"}</TextCustom>
        </Block>
        {/* <Block row>
          <Text style={ styles.infoField]}>Course Deadline :</Text>
          <Text style={ styles.infoField]}>-</Text>
        </Block> */}
        <Block row middle>
        <TextCustom style={ styles.infoField}>Course Deadline :</TextCustom>
          <TextCustom style={ styles.infoField}>{DeadLine?(new Date(DeadLine)).toISOString():"-"}</TextCustom>
        </Block>
        <Button 
        style={styles.btn}
        color={true ? "#a0a0a0" : "primary"}
                disabled={true}
        onPress={()=>Alert.alert("Applied for course","You have successfully for course")}>Apply For Course</Button>
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
    margin:0,
    marginTop:4,
    width:"100%"
  }
});

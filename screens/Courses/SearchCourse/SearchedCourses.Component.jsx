import { Block, Button, Text } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import DropDown from "../../../components/DropDown";
import HeaderNormal from "../../../components/HeadingNormal";
import GlobalStyle from "../../../GlobalStyles";

const { width, height } = Dimensions.get("window");

function SearchedCoursesItem(props) {
  const {title, university, country, city, intake, duration, annualFee, feeCurrency,courseDeadline, id}=props;
  return (
    <View style={styles.container}>
       <HeaderNormal>
            <Block row  center >
            <Text style={{fontSize:GlobalStyle.SIZES.HEADING5}} center>
          bachelor of Environmental Science
          </Text>
            
            </Block>
            </HeaderNormal>
      {/* <Block style={styles.header}>
        <Text style={styles.title}>
          BACHELOR OF ENGINEERING (CIVIL) (HONOURS)/BACHELOR OF ENVIRONMENTAL
          SCIENCE
        </Text>
      </Block> */}
      <Block style={styles.padding}>
        <Text center style={styles.instituteName}>
          University of the Sunshine Coast
        </Text>
        <Block row>
          <Text style={[styles.text, styles.infoField]}>Country :</Text>
          <Text style={[styles.text, styles.infoField]}>Australia</Text>
        </Block>
        <Block row>
          <Text style={[styles.text, styles.infoField]}>City :</Text>
          <Text style={[styles.text, styles.infoField]}>Queensland</Text>
        </Block>
        <Block row>
          <Text style={[styles.text, styles.infoField]}>Intakes :</Text>
          <Text style={[styles.text, styles.infoField]}>-</Text>
        </Block>
        <Block row>
          <Text style={[styles.text, styles.infoField]}>Duration :</Text>
          <Text style={[styles.text, styles.infoField]}>0 Year(s) 0 Month(s)</Text>
        </Block>
        <Block row>
          <Text style={[styles.text, styles.infoField]}>
            Course Fee (Per Year):
          </Text>
          <Text style={[styles.text, styles.infoField]}>$ 0</Text>
        </Block>
        {/* <Block row>
          <Text style={[styles.text, styles.infoField]}>Course Deadline :</Text>
          <Text style={[styles.text, styles.infoField]}>-</Text>
        </Block> */}
        <Block row middle>
        <Text style={[styles.text, styles.infoField]}>Course Deadline :</Text>
          <Text style={[styles.text, styles.infoField]}>12/12/2020</Text>
        </Block>
        <Button style={styles.btn}>Apply For Course</Button>
      </Block>
    </View>
  );
}

export default SearchedCoursesItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    margin: 10,
    backgroundColor: "#fff4",
    borderRadius: 10,
    paddingBottom: 10,
  },

  instituteName: {
    fontSize: 20,
    color: GlobalStyle.color.textLight,
    textTransform: "capitalize",
  },
  text: {
    color: GlobalStyle.color.textLight,
    textTransform: "capitalize",
  },
  infoField: {
    flex:1,
    flexWrap:"wrap"
  },
  padding: {
    paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding,
  },
  btn:{
    width:"100%"
  }
});

import { Block, Button, Text } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import DropDown from "../../../components/DropDown";
import GlobalStyle from "../../../GlobalStyles";

const { width, height } = Dimensions.get("window");

function SearchedCoursesItem(props) {
  return (
    <View style={styles.wrapper}>
      <Block style={styles.header}>
        <Text style={styles.title}>
          BACHELOR OF ENGINEERING (CIVIL) (HONOURS)/BACHELOR OF ENVIRONMENTAL
          SCIENCE
        </Text>
      </Block>
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
        <Block row>
          <Text style={[styles.text, styles.infoField]}>Course Deadline :</Text>
          <Text style={[styles.text, styles.infoField]}>-</Text>
        </Block>
        <Block row middle>
        <Text style={[styles.text, styles.infoField]}>Course Deadline :</Text>
          <Text style={[styles.text, styles.infoField]}>12/12/2020</Text>
        </Block>
        <Button>Apply</Button>
      </Block>
    </View>
  );
}

export default SearchedCoursesItem;

const styles = StyleSheet.create({
  wrapper: {
    ...GlobalStyle.block,
    marginVertical: 5,
    overflow: "hidden",
    borderRadius: 10,
    padding: 0,
  },
  header: {
    backgroundColor: GlobalStyle.bg.green,
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: GlobalStyle.color.textLight,
    fontSize: 18,
    textTransform: "capitalize",
  },
  instituteName: {
    fontSize: 20,
    color: GlobalStyle.color.textLight,
    marginBottom: 10,
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
    padding: 10,
  },
});

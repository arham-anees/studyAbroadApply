import { Block, Button, Text, theme } from "galio-framework";
import React from "react";
import { Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import { Input } from "../../../components";
import DropDown from "../../../components/DropDown";
import SelectCountry from "../../../components/SelectCountry";

const { width } = Dimensions.get("screen");
const countries = [
  { name: "Pakistan", value: 1 },
  { name: "Pakistan", value: 2 },
  { name: "Pakistan", value: 3 },
  { name: "Pakistan", value: 4 },
  { name: "Pakistan", value: 5 },
  { name: "Pakistan", value: 6 },
  { name: "Pakistan", value: 7 },
  { name: "Pakistan", value: 8 },
];
const levels = [
  { name: "Bachelors", value: 1 },
  { name: "Bachelors", value: 2 },
  { name: "Bachelors", value: 3 },
  { name: "Bachelors", value: 4 },
  { name: "Bachelors", value: 5 },
  { name: "Bachelors", value: 6 },
  { name: "Bachelors", value: 7 },
  { name: "Bachelors", value: 8 },
];

const courses = [
  { name: "courses", value: 1 },
  { name: "courses", value: 2 },
  { name: "courses", value: 3 },
  { name: "courses", value: 4 },
  { name: "courses", value: 5 },
  { name: "courses", value: 6 },
  { name: "courses", value: 7 },
  { name: "courses", value: 8 },
];

const intakes = [
  { name: "intake", value: 1 },
  { name: "intake", value: 2 },
  { name: "intake", value: 3 },
  { name: "intake", value: 4 },
  { name: "intake", value: 5 },
  { name: "intake", value: 6 },
  { name: "intake", value: 7 },
  { name: "intake", value: 8 },
];

var item = {
  course: "BSc Business Administration & Management",
  intake: "February 2021",
  level: "Bachelor's",
  institute: "Budapest Metropolitan University",
  country: "Hungary",
};
function CourseTab(props) {
  return (
    <View>
      <Block style={styles.block}>
        <Text color="white" center h5>
          Course
        </Text>
        <Block row>
          <Text style={styles.title}>COURSE</Text>
          <Text style={styles.info}>{item.course}</Text>
        </Block>

        <Block row>
          <Text style={styles.title}>INTAKE</Text>
          <Text style={styles.info}>{item.intake}</Text>
        </Block>
        <Block row>
          <Text style={styles.title}>LEVEL</Text>
          <Text style={styles.info}>{item.level}</Text>
        </Block>
        <Block row>
          <Text style={styles.title}>INSTITUTE</Text>
          <Text style={styles.info}>{item.institute}</Text>
        </Block>
        <Block row>
          <Text style={styles.title}>COUNTRY</Text>
          <Text style={styles.info}>{item.country}</Text>
        </Block>
      </Block>
      <Block style={styles.block}>
        <Text center h5 color="white">
          Select your course and location to apply
        </Text>
        <Block>
          <Text style={styles.title}>Country</Text>
          <View style={styles.info}>
            <SelectCountry />
          </View>
        </Block>
        <DropDown label="Level" list={levels} />
        <DropDown label="Course" list={courses} />
        <DropDown label="Intake" list={intakes} />

        <Button style={styles.btnApply}>Apply</Button>
      </Block>
    </View>
  );
}

export default CourseTab;

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#0004",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: theme.SIZES.BASE 
  },
  title: {
    width: 80,
    color: "white",
  },
  info: {
    color: "white",
  },
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT,
    overflow: "hidden",
    marginTop: 10,
    width: width - 100,
  },
  btnApply: {
    width: "100%",
    marginTop: 10,
  },
});

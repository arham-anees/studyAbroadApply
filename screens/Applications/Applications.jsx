import React from "react";
import { ImageBackground } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import ApplicationItem from "../../components/Applications/Application.Component";

import Images from "../../constants/Images";
import styles from "./Applications.Style";
const { height, width } = Dimensions.get("screen");
const data = [
  {
    name: "Imran Khan",
    status: "status",
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Imran Khan",
    status: "status",
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Imran Khan",
    status: "status",
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Imran Khan",
    status: "status",
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
];
function Applications(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.Onboarding}
        style={{ height, width, zIndex: 1 }}
      >
        {data.map((item, index) => (
          <ApplicationItem props={{ ...props, item, index }} key={index} />
        ))}
      </ImageBackground>
    </View>
  );
}

export default Applications;

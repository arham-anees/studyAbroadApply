import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import ApplicationItem from "../../components/Applications/Application.Component";

import Images from "../../constants/Images";
import styles from "./Applications.Style";
import GlobalStyles from '../../GlobalStyles';
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
    name: "Ahmad Raza",
    status: "status",
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Ibrar Akhtar",
    status: "status",
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Tauseef Rehman",
    status: "status",
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
];
function Applications(props) {
  return (
    <View style={styles.containerMain}>
      <ImageBackground
        source={Images.Onboarding}
        style={{ height, width, zIndex: 1 }}
      >
        <ScrollView style={styles.container}>
        {data.map((item, index) => (
          <ApplicationItem props={{ ...props, item, index }} key={index} />
        ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default Applications;

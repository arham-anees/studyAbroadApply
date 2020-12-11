import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import ApplicationItem from "../../components/Applications/Application.Component";

import Images from "../../constants/Images";
import styles from "./Applications.Style";
import GlobalStyles from '../../GlobalStyles';
import { Block } from "galio-framework";
import GlobalStyle from "../../GlobalStyles";
import Background from "../../components/Background";
const { height, width } = Dimensions.get("screen");
const data = [
  {
    name: "Imran Khan",
    status: "New Application",
    statusId:1,
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Ahmad Raza",
    status: "Sent To Counsellor",    statusId:2,
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Ibrar Akhtar",
    status: "In Progress",    statusId:3,
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
  {
    name: "Tauseef Rehman",
    status: "Visa Issued",    statusId:4,
    level: "Bachelors",
    date: "1/12/2020",
    course: "Software Engineering",
    institute: "International Islamic University Islamabad",
  },
];
function Applications(props) {
  return (
<Background>
        <View style={styles.container}>
        {data.map((item, index) => (
          <ApplicationItem props={{ ...props, item, index }} key={index} />
        ))}
        
        </View>
        </Background>
  );
}

export default Applications;

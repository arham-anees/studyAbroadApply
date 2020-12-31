import React, { useRef, useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import ApplicationItem from "../../components/Applications/Application.Component";

import styles from "./Applications.Style";
import Background from "../../components/Background";
import { Animated } from "react-native";
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
  const {navigation} =props;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn=()=>{
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  }
  const fadeOut=()=>{
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0
    }).start();
  }
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      fadeOut();
      fadeIn();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  return (
    <Background>
      <Animated.View style={{opacity:fadeAnim}}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <ApplicationItem props={{ ...props, item, index }} key={index} />
        ))}
      </View>
      </Animated.View>
    </Background>
  );
}

export default Applications;

import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, ScrollView, Text } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import ApplicationItem from "../../components/Applications/Application.Component";

import styles from "./Applications.Style";
import Background from "../../components/Background";
import { Animated } from "react-native";

import ApplicationService from '../../services/ApplicationService';
import LocalStorage from '../../helper/LocalStorage'; 
import TextCustom from "../../components/TextCustom";
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
class Applications extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fadeAnim: new Animated.Value(0),
      appList:[]
    }
    this.navigation =this.props;
    this.fadeOut();
  }

 
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 0
    }).start();
  };
  MapApplicationData(data){
    try{
      if(!data || data.length==0)return null;
    var resultData = [];
    //console.log("purifying browse application data");
    data.forEach((x) => {
      resultData.push({
        id:x.ApplicationID,
        name: x.StudentName,
        status: x.StatusName,
        statusId: 1,
        level: x.LevelName,
        date: x.ApplicationDate,
        course: x.CourseName,
        institute: x.InstitutionName,
        createdBy:x.CreatedBy,
        createdByRoleName:x.RoleName,
        intake:x.InTakeName,
        totalUnread:x.TotalUnread
      });
    });
    
    //console.log(resultData);
    
    return resultData;
  }catch{
    return [];
  }
    } 

  componentDidMount() {
    this.fadeIn();

    LocalStorage.GetAppList().then(x=>{
      try {
        let localData = JSON.parse(x);
        //console.log("Data from local",localData)
        this.setState({ appList: localData });
      } catch (err) {
        console.log(err);
      }
    })
    

      ApplicationService.BrowseApplications()
        .then((response) => {
          let result = this.MapApplicationData(response);
          //debugger
          if(result!=null){
          LocalStorage.SetAppList(result);
          if(result!=this.state.appList)this.setState({appList:result});
          }
        })
        .catch((err) => console.log(err));
  }

render=()=> (
    <Background>
      <Animated.View style={{ opacity: this.state.fadeAnim }}>
        <View style={styles.container}>
          {this.state.appList.length > 0 ? (
            this.state.appList.map((item, index) => (
              <ApplicationItem props={{ ...this.props, item, index }} key={index} />
            ))
          ) : (
            <View><TextCustom>No application found</TextCustom></View>
          )}
        </View>
      </Animated.View>
    </Background>
  );
}

export default Applications;




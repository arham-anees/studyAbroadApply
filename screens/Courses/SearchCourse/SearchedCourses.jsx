import { Block } from "galio-framework";
import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { Images } from "../../../constants";
import SearchedCoursesItem from "./SearchedCourses.Component";

const { width, height } = Dimensions.get("window");

class SearchedCourses extends React.Component {
  render = () => {
    return (
      <View>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        >
          <ScrollView>
          <Block padding={10}>
            <SearchedCoursesItem />
            <SearchedCoursesItem />
            <SearchedCoursesItem />
            <SearchedCoursesItem />
            <SearchedCoursesItem />
          </Block>
          <Block style={{height:100}}></Block>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };
}

export default SearchedCourses;

import { Block, Text } from "galio-framework";
import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { Images } from "../../../constants";
import CourseService from "../../../services/CourseService";
import SearchedCoursesItem from "./SearchedCourses.Component";

const { width, height } = Dimensions.get("window");

class SearchedCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: null,
    };
  }

  componentDidMount() { 
    const { country, course, institute, advanced } = this.props.route.params;
    console.log(country);
    if (advanced) {
      console.log('advanced');
    } else {
      console.log('classic');
      CourseService.SearchCourse(country, course, institute)
        .then((res) => {
          console.log('success');
          this.setState({ loading: false, data: res });
        })
        .catch((err) => {
          console.log('failed');
          this.setState({ loading: false, error: err });
        });
    }
  }


renderItems=()=>{
  let data=[];//this.state.data;
  return data.map(x=> <SearchedCoursesItem item={x}/>)
}


  render = () => {
    return (
      <View>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        >
          <ScrollView>
            <Block padding={10}>
              {this.state.loading ? (
                <View><Text>Loading</Text></View>
              ) : (
                <React.Fragment>
                 {this.renderItems()}
                </React.Fragment>
              )}
            </Block>
            <Block style={{ height: 100 }}></Block>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  };
}

export default SearchedCourses;

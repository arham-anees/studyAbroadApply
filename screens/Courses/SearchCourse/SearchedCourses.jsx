import { Block, Text } from "galio-framework";
import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { Images } from "../../../constants";
import CourseService from "../../../services/CourseService";
import SearchedCoursesItem from "./SearchedCourses.Component";
import Background from '../../../components/Background';
import GlobalStyle from "../../../GlobalStyles";

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
    console.log(country, course, institute);
    //if (advanced) {
    //} else {
    CourseService.SearchCourse(country, course, institute)
      .then((res) => {
        this.setState({ loading: false, data: res });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false, error: err });
      });
    // }
  }

  renderItems = () => {
    let data = this.state.data;
    return data.map((x, index) => <SearchedCoursesItem item={x} key={index} />);
  };

  render = () => {
    return (
      <Background>
        <Block
          style={{ paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding }}
        >
          {this.state.loading ? (
            <View>
              <Text>Loading</Text>
            </View>
          ) : (
            <React.Fragment>{this.renderItems()}</React.Fragment>
          )}
        </Block>
      </Background>
    );
  };
}

export default SearchedCourses;

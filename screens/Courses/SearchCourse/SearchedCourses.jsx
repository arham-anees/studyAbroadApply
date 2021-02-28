import { Block, Text } from "galio-framework";
import React from "react";
import { Alert, ImageBackground, Linking, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { Images } from "../../../constants";
import CourseService from "../../../services/CourseService";
import SearchedCoursesItem from "./SearchedCourses.Component";
import Background from '../../../components/Background';
import GlobalStyle from "../../../GlobalStyles";
import TextCustom from "../../../components/TextCustom";
import SearchService from "../../../services/SearchService";
import SearchedCourseLoading from "./SearchedCourseLoading.Component";
import styles from "./SearchCourse.Styles";

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
    const { searchFilter } = this.props.route.params;
    this.setState({ searchFilter });

    SearchService.Search({
      searchTypeId: searchFilter.advanced ? 2 : 1,
      levelId: searchFilter.level,
      instituteId: searchFilter.institute,
      countryId: searchFilter.country,
      intakeId: searchFilter.intake,
      courseDisciplineId: searchFilter.courseDisciplineId,
      courseName: searchFilter.courseName,
      courseDisciplineName: searchFilter.courseDisciplineName,
    })
      .then((x) => {
        if(!x)x=[];
        this.setState({ loading:false, data:x });
            
      })
      .catch((err) => {console.log(err);
        this.setState({loading:false});});
  }

applyForCourse=(id)=>{
  try{
    let data=this.state.data;
    if(data!=null){
      let course = this.state.data.filter((x) => x.CourseID == id);
      SearchService.ApplyForCourse({ ...course })
        .then((response) => {
          if(response=="/Application/Profile")
          {
            Alert.alert("Apply Successful","Successfully applied for selected course.");
          }
          else{
            //pending
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    
  }
  catch{

  }
}

  renderItems = () => {
    let data = this.state.data;
    if(data.length==0)return <TextCustom style={styles.noCourse}>No Course found</TextCustom>
    return data.map((x, index) => <SearchedCoursesItem item={x} key={index} applyForCourse={this.applyForCourse} />);
  };

  render = () => {
    return (
      <Background>
        <Block
          style={{ paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding }}
        >
          {this.state.loading ? (
            <View>
              <SearchedCourseLoading />
              <SearchedCourseLoading />
              <SearchedCourseLoading />
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

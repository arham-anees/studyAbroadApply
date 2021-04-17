import { Block, Button, Switch, Text } from "galio-framework";
import React from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from "react-native";
import Background from "../../../components/Background";
import DropDown from "../../../components/DropDown";
import SelectCountry from "../../../components/SelectCountry";
import GlobalStyle from "../../../GlobalStyles";
import SearchService from "../../../services/SearchService";

import styles from "./SearchCourse.Styles";
import AutoComplete from "../../../components/AutoComplete";
import SearchedCoursesItem from "./SearchedCourses.Component";
import TextCustom from "../../../components/TextCustom";
import Loading from "../../../components/Loading";
import Autocomplete from "react-native-autocomplete-input";
import { ScrollView } from "react-native-gesture-handler";
import { Images } from "../../../constants";

class SearchCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      countriesList: [{ value: 0, name: "Select Country" }],
      coursesList: [{ value: 0, name: "" }],
      instituteList: [{ value: 0, name: "" }],
      levelList: [{ value: 0, name: "" }],
      intakeList: [{ value: 0, name: "" }],
      searchFilter: {
        country: 0,
        institute: 0,
        level: 0,
        course: 0,
        courseDisciplineName: "",
        courseDisciplineId: 0,
        courseName: "",
        advanced: false,
        CourseOfferedID: 0,
      },
      coursesListAdv: [],
      disciplinesList: [],
      isLoading: false,
      instituteStatus: false,
      levelStatus: false,
      courseStatus: false,
      intakeStatus: false,
      btnStatus: false,
      isSearched: false,
      searchResult: [],
    };
  }

  _mapData = (data, name) => {
    try {
      let mappedData = [];
      data.forEach((x) => {
        if (x) {
          mappedData.push({
            value: x.Key,
            name: x.Value,
          });
        }
      });
      return mappedData;
    } catch {}
    return [];
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 0,
    }).start();
  };

  componentDidMount() {
    this.fadeIn();
    let disciplinesList = [];
    let coursesListAdv = [];
  }

  handleAdvanced = (val) => {
    let searchFilter = this.state.searchFilter;
    searchFilter.advanced = !searchFilter.advanced;
    this.setState(searchFilter);
  };
  //#region CHANGE SELECTION
  handleChange = (name, val) => {
    let searchFilter = this.state.searchFilter;
    searchFilter[name] = val;
    this.setState(searchFilter);
  };

  handleIntakwSelection = (val) => {
    let searchFilter = this.state.searchFilter;
    searchFilter["intake"] = val;
    this.setState(searchFilter);
    this.resetSelection(6);
  };

  handleCountrySelection = (val) => {
    let searchFilter = this.state.searchFilter;
    searchFilter["country"] = val;
    this.setState(searchFilter);

    SearchService.GetInstitutes(this.state.searchFilter.country)
      .then((x) => {
        let filter = this.state.searchFilter;
        filter.institute = x[0].Key;
        this.setState({
          instituteList: this._mapData(x, "Institute"),
          searchFilter: filter,
        });
        this.resetSelection(2);
        this.handleInstituteSelection(x[0].Key);
      })
      .then((err) => {});
  };

  handleInstituteSelection = (val) => {
    let searchFilter = this.state.searchFilter;
    searchFilter["institute"] = val;
    this.setState(searchFilter);

    SearchService.GetLevels(this.state.searchFilter.institute)
      .then((x) => {
        let filter = this.state.searchFilter;
        filter.level = x[0].Key;
        this.setState({
          levelList: this._mapData(x, "Level"),
          searchFilter: filter,
        });
        this.resetSelection(3);
        this.handleLevelSelection(x[0].Key);
      })
      .then((err) => {});
  };

  handleLevelSelection = (val) => {
    let searchFilter = this.state.searchFilter;
    searchFilter["level"] = val;
    this.setState(searchFilter);

    SearchService.GetCourses(
      this.state.searchFilter.level,
      this.state.searchFilter.institute
    )
      .then((x) => {
        let filter = this.state.searchFilter;
        filter.course = x[0].Key;
        this.setState({
          coursesList: this._mapData(x, "Course"),
          searchFilter: filter,
        });
        this.resetSelection(4);
        this.handleCourseSelection(x[0].Key);
      })
      .then((err) => {});
  };

  handleCourseSelection = (val) => {
    let searchFilter = this.state.searchFilter;
    searchFilter["CourseOfferedID"] = val;
    this.setState(searchFilter);

    // SearchService.GetIntakes(this.state.searchFilter.institute)
    //   .then((x) => {
    //     try {
    //       let filter = this.state.searchFilter;
    //       filter.institute = x[0].Key;
    //       this.setState({
    //         intakeList: this._mapData(x, "Intakes"),
    //         searchFilter: filter,
    //       });
    //     } catch {
    //       this.setState({ intakeList: [{ value: 0, name: "Select Intake" }] });
    //     }
    //     this.resetSelection(5);
    //   })
    //   .then((err) => {});
  };
  //#endregion

  //this method enablles
  resetSelection = (level) => {
    if (!level) level = 0;
    if (level == 0) {
      if (this.state.searchFilter.country == 0) level = 1;
      else if (this.state.searchFilter.institute == 0) level = 2;
      else if (this.state.searchFilter.level == 0) level = 3;
      else if (this.state.searchFilter.CourseOfferedID == 0) level = 4;
      else if (this.state.searchFilter.intake == 0) level = 5;
      else level = 6;
    }
    let searchFilter = this.state.searchFilter;
    let { coursesList, levelList, instituteList, intakeList } = this.state;
    let instituteStatus = true;
    let levelStatus = true;
    let courseStatus = true;
    let intakeStatus = true;
    switch (level) {
      case 0:
      case 1:
        instituteStatus = false;
        searchFilter.institute = 0;
        instituteList = [{ value: 0, name: "" }];
      case 2:
        levelStatus = false;
        searchFilter.level = 0;
        levelList = [{ value: 0, name: "" }];
      case 3:
        courseStatus = false;
        searchFilter.CourseOfferedID = 0;
        coursesList = [{ value: 0, name: "" }];
      case 4:
        intakeStatus = false;
        searchFilter.CourseOfferedID = 0;
        intakeList = [{ value: 0, name: "" }];
    }
    this.setState({
      coursesList,
      levelList,
      instituteList,
      instituteStatus,
      levelStatus,
      courseStatus,
      intakeStatus,
      intakeList,
    });
  };

  renderSearchedItems = () => {
    let data = this.state.searchResult;
    if (data.length == 0)
      return <TextCustom style={styles.noCourse}>No Course found</TextCustom>;
    return data.map((x, index) => (
      <SearchedCoursesItem
        item={x}
        key={index}
        applyForCourse={this.applyForCourse}
      />
    ));
  };

  searchCourse = () => {
    const searchFilter = this.state.searchFilter;
    //console.log(searchFilter);
    this.props.navigation.navigate({
      name: "SearchedCourses",
      params: { searchFilter },
    });
    return;
    this.setState({ isLoading: true });
    SearchService.Search({
      searchTypeId: searchFilter.advanced ? 2 : 1,
      levelId: searchFilter.level,
      instituteId: searchFilter.institute,
      countryId: searchFilter.country,
      courseDisciplineId: searchFilter.courseDisciplineId,
      courseName: searchFilter.courseName,
      courseDisciplineName: searchFilter.courseDisciplineName,
    })
      .then((x) => {
        if (!x) x = [];
        this.setState({ isLoading: false, searchResult: x, isSearched: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false, isSearched: true });
      });
  };
  updateCourseDiscipline = (id, text) => {
    let searchFilter = this.state.searchFilter;
    searchFilter["courseDisciplineId"] = id;
    searchFilter["courseDisciplineName"] = text;
    this.setState(searchFilter);
  };
  updateCourse = (id, text) => {
    let searchFilter = this.state.searchFilter;
    searchFilter["CourseOfferedID"] = id;
    searchFilter["courseName"] = text;
    this.setState(searchFilter);
  };

  handleSearchByCourse = () => {
    let { courseName, CourseOfferedID, country } = this.state.searchFilter;
    // searchFilter.courseDisciplineId = 0;
    // searchFilter.courseDisciplineName = "";
    // searchFilter.institute = 0;
    // searchFilter.level = 0;
    // searchFilter = { ...searchFilter, searchTypeId: 0 };
    //console.log(searchFilter);
    let searchFilter = {
      courseName,
      CourseOfferedID,
      country,
      searchTypeId: 0,
    };
    this.props.navigation.navigate({
      name: "SearchedCourses",
      params: { searchFilter },
    });
  };

  handleSearchByDiscipline = () => {
    let {
      courseDisciplineName,
      courseDisciplineId,
      country,
    } = this.state.searchFilter;
    // searchFilter.CourseOfferedID = 0;
    // searchFilter.course = 0;
    // searchFilter.courseName = "";
    // searchFilter.institute = 0;
    // searchFilter.level = 0;
    // searchFilter = { ...searchFilter, searchTypeId: 1 };
    let searchFilter = {
      courseDisciplineName,
      courseDisciplineId,
      country,
      searchTypeId: 1,
    };
    //console.log(searchFilter);
    this.props.navigation.navigate({
      name: "SearchedCourses",
      params: { searchFilter },
    });
  };
  render = () => {
    //console.log(this.state);
    return (
      <Background>
        <Animated.View
          style={{
            opacity: this.state.fadeAnim,
          }}
        >
          <Block
            style={[{ paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding }]}
          >
            <Block style={styles.block}>
              <Text style={styles.blockTitle}>Search Course</Text>
              <SelectCountry
                onChange={(val) => this.handleCountrySelection(val)}
                selectedValue={this.state.searchFilter.country}
              />
              {this.state.searchFilter.advanced ? (
                <Block>
                  <AutoComplete
                    label="Course Discipline"
                    update={this.updateCourseDiscipline}
                    list={[]}
                  />
                  <Block row middle>
                    <Button
                      onPress={() => this.handleSearchByDiscipline()}
                      color={"primary"}
                      style={{ height: 30 }}
                    >
                      Search By Discipline
                    </Button>
                  </Block>
                  <AutoComplete
                    label="Course"
                    CountryID={this.state.searchFilter.country}
                    update={this.updateCourse}
                    list={this.state.coursesListAdv}
                  />
                  <Block row middle>
                    <Button
                      onPress={() => this.handleSearchByCourse()}
                      color={"primary"}
                      style={{ height: 30 }}
                    >
                      Search By Course
                    </Button>
                  </Block>
                </Block>
              ) : (
                <Block>
                  <DropDown
                    list={this.state.instituteList}
                    label="Institutes"
                    onChange={(val) => this.handleInstituteSelection(val)}
                    selectedValue={this.state.searchFilter.institute}
                    disabled={!this.state.instituteStatus}
                  />
                  <DropDown
                    list={this.state.levelList}
                    label="Level"
                    onChange={(val) => this.handleLevelSelection(val)}
                    selectedValue={this.state.searchFilter.level}
                    disabled={!this.state.levelStatus}
                  />
                  <DropDown
                    list={this.state.coursesList}
                    label="Courses"
                    onChange={(val) => this.handleCourseSelection(val)}
                    selectedValue={this.state.searchFilter.CourseOfferedID}
                    disabled={!this.state.courseStatus}
                  />
                </Block>
              )}

              <Block row space="between" style={styles.advancedSearch}>
                <Text color={GlobalStyle.color.textLight}>Advanced Search</Text>
                <Switch
                  onChange={this.handleAdvanced}
                  trackColor={{
                    true: GlobalStyle.bg.sky,
                  }}
                  initialValue={this.state.searchFilter.advanced}
                  thumbColor={
                    this.state.searchFilter.advanced
                      ? GlobalStyle.color.textLight
                      : null
                  }
                />
              </Block>
              {this.state.searchFilter.advanced ? null : (
                <Button
                  style={styles.btn}
                  onPress={() => this.searchCourse()}
                  color={"primary"}
                >
                  Search
                </Button>
              )}
            </Block>
          </Block>
        </Animated.View>
      </Background>
    );

    return (
      <Background noScroll={false} keyboardBehavior="position"></Background>
    );
  };
}
export default SearchCourse;

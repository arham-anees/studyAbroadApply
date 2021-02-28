import { Block, Button, Input, Switch, Text } from "galio-framework";
import React from "react";
import {  Animated } from "react-native";
import Background from "../../../components/Background";
import DropDown from "../../../components/DropDown";
import SelectCountry from "../../../components/SelectCountry";
import GlobalStyle from "../../../GlobalStyles";
import SearchService from "../../../services/SearchService";

import styles from "./SearchCourse.Styles";
import AutoComplete from "../../../components/AutoComplete";


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
      searchFitler: {
        country: 0,
        institute: 0,
        level: 0,
        course: 0,
        intake: 0,
        courseDisciplineName: "",
        courseDisciplineId: 0,
        courseName: "",
        advanced: false,
      },
      coursesListAdv: [],
      disciplinesList: [],

      isLoading:false,

      instituteStatus: false,
      levelStatus: false,
      courseStatus: false,
      intakeStatus: false,
      btnStatus: false,
    };
  }

  _mapData = (data, name) => {
    try {
      let mappedData = [{ value: 0, name: "Select " + name }];
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
    const { navigation } = this.props;
    this.fadeIn();
    let disciplinesList = [];
    let coursesListAdv = [];
    SearchService.GetCourseAutoFill()
      .then((x) => {
        try {
          if (x != null && x.length > 0) {
            x.forEach((course) => {
              course.DisciplineList.forEach((disc) => {
                if (!disciplinesList.includes(disc))
                  disciplinesList.push({ id: 0, text: disc.Value });
              });
              if (!coursesListAdv.includes(course.Value))
                coursesListAdv.push({ id: 0, text: course.Value });
            });
            this.setState({ disciplinesList, coursesListAdv });
          }
        } catch {
          this.setState({ disciplinesList:[], coursesListAdv:null });
        }
      })
      .catch((err) => {console.log(err);this.setState({ disciplinesList:[], coursesListAdv:null });});
  }

  handleAdvanced = (val) => {
    let searchFitler = this.state.searchFitler;
    searchFitler.advanced = !searchFitler.advanced;
    this.setState(searchFitler);
  };
  //#region CHANGE SELECTION
  handleChange = (name, val) => {
    let searchFitler = this.state.searchFitler;
    searchFitler[name] = val;
    this.setState(searchFitler);
  };

  handleIntakwSelection = (val) => {
    let searchFitler = this.state.searchFitler;
    searchFitler["intake"] = val;
    this.setState(searchFitler);
    this.resetSelection(6);
  };

  handleCountrySelection = (val) => {
    let searchFitler = this.state.searchFitler;
    searchFitler["country"] = val;
    this.setState(searchFitler);

    SearchService.GetInstitutes(this.state.searchFitler.country)
      .then((x) => {
        this.setState({ instituteList: this._mapData(x, "Institute") });
        this.resetSelection(2);
      })
      .then((err) => {});
  };

  handleInstituteSelection = (val) => {
    let searchFitler = this.state.searchFitler;
    searchFitler["institute"] = val;
    this.setState(searchFitler);

    SearchService.GetLevels(this.state.searchFitler.institute)
      .then((x) => {
        this.setState({ levelList: this._mapData(x, "Level") });
        this.resetSelection(3);
      })
      .then((err) => {});
  };

  handleLevelSelection = (val) => {
    let searchFitler = this.state.searchFitler;
    searchFitler["level"] = val;
    this.setState(searchFitler);

    SearchService.GetCourses(
      this.state.searchFitler.level,
      this.state.searchFitler.institute
    )
      .then((x) => {
        this.setState({ coursesList: this._mapData(x, "Course") });
        this.resetSelection(4);
      })
      .then((err) => {});
  };

  handleCourseSelection = (val) => {
    let searchFitler = this.state.searchFitler;
    searchFitler["course"] = val;
    this.setState(searchFitler);

    SearchService.GetIntakes(this.state.searchFitler.institute)
      .then((x) => {
        try {
          this.setState({ intakeList: this._mapData(x, "Intakes") });
        } catch {
          this.setState({ intakeList: [{ value: 0, name: "Select Intake" }] });
        }
        this.resetSelection(5);
      })
      .then((err) => {});
  };
  //#endregion

  //this method enablles
  resetSelection = (level) => {
    if (!level) level = 0;
    if (level == 0) {
      if (this.state.searchFitler.country == 0) level = 1;
      else if (this.state.searchFitler.institute == 0) level = 2;
      else if (this.state.searchFitler.level == 0) level = 3;
      else if (this.state.searchFitler.course == 0) level = 4;
      else if (this.state.searchFitler.intake == 0) level = 5;
      else level = 6;
    }
    let searchFilter = this.state.searchFitler;
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
        searchFilter.course = 0;
        coursesList = [{ value: 0, name: "" }];
      case 4:
        intakeStatus = false;
        searchFilter.course = 0;
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

  searchCourse = () => {
      const searchFilter = this.state.searchFitler;
      this.props.navigation.navigate({
        name: "SearchedCourses",
        params: { searchFilter },
      });

  };
  updateCourse = (id, text) => {
    let searchFitler = this.state.searchFitler;
    searchFitler["courseDisciplineId"] = id;
    searchFitler["courseDisciplineName"] = text;
    this.setState(searchFitler);
  };
  updateCourseDiscipline = (id, text) => {
    let searchFitler = this.state.searchFitler;
    searchFitler["course"] = id;
    searchFitler["courseName"] = text;
    this.setState(searchFitler);
  };
  render = () => {
    return (
      <Background>
        <Animated.View style={{ opacity: this.state.fadeAnim, flex: 1 }}>
          <Block
            style={[
              { paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding },
              styles.container,
            ]}
          >
            <Block style={styles.block}>
              <Text style={styles.blockTitle}>Search Course</Text>

              {this.state.searchFitler.advanced ? (
                <Block>
                  <AutoComplete
                    label="Course Discipline"
                    update={this.updateCourseDiscipline}
                    list={this.state.disciplinesList}
                  />
                  <AutoComplete
                    label="Course"
                    update={this.updateCourse}
                    list={this.state.coursesListAdv}
                  />
                </Block>
              ) : (
                <Block>
                  <SelectCountry
                    onChange={(val) => this.handleCountrySelection(val)}
                    selectedValue={this.state.searchFitler.country}
                  />
                  {/* {this.state.searchFitler.advanced ? (
                <React.Fragment> */}
                  <DropDown
                    list={this.state.instituteList}
                    label="Institutes"
                    onChange={(val) => this.handleInstituteSelection(val)}
                    selectedValue={this.state.searchFitler.institute}
                    disabled={!this.state.instituteStatus}
                  />
                  <DropDown
                    list={this.state.levelList}
                    label="Level"
                    onChange={(val) => this.handleLevelSelection(val)}
                    selectedValue={this.state.searchFitler.level}
                    disabled={!this.state.levelStatus}
                  />
                  {/* </React.Fragment>
              ) : null} */}
                  <DropDown
                    list={this.state.coursesList}
                    label="Courses"
                    onChange={(val) => this.handleCourseSelection(val)}
                    selectedValue={this.state.searchFitler.course}
                    disabled={!this.state.courseStatus}
                  />
                  <DropDown
                    list={this.state.intakeList}
                    label="Intakes"
                    onChange={(val) => this.handleIntakwSelection(val)}
                    selectedValue={this.state.searchFitler.intake}
                    disabled={!this.state.intakeStatus}
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
                  initialValue={this.state.searchFitler.advanced}
                  thumbColor={
                    this.state.searchFitler.advanced
                      ? GlobalStyle.color.textLight
                      : null
                  }
                />
              </Block>
              <Button
                style={styles.btn}
                onPress={() => this.searchCourse()}
                color={"primary"}
              >
                Search
              </Button>
            </Block>
          </Block>
        </Animated.View>
      </Background>
    );
  };
}
export default SearchCourse;

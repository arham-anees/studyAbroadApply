import { Block } from "galio-framework";
import React from "react";
import { Alert } from "react-native";
import { Images } from "../../../constants";
import SearchedCoursesItem from "./SearchedCourses.Component";
import Background from "../../../components/Background";
import GlobalStyle from "../../../GlobalStyles";
import TextCustom from "../../../components/TextCustom";
import SearchService from "../../../services/SearchService";
import styles from "./SearchCourse.Styles";
import CustomIcon from "../../../Icons/BellIcon";
import DropDown from "../../../components/DropDown";
import Loading from "../../../components/Loading";
import { CommonActions } from "@react-navigation/core";

class SearchedCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 10,
      institute: 0,
      country: 0,
      level: 0,
      data: [],
      loading: true,
      totalItems: 0,
      countries: [],
      levels: [],
      institutes: [],
      displayData: [],
      errorMessage: "",
    };
  }
  applyForCourse = (id, intakeId) => {
    try {
      if (intakeId == 0) {
        Alert.alert("Select Intake", "Please select an intake before apply.");
        return;
      }
      let data = this.state.data;
      if (data != null) {
        let course = this.state.data.filter((x) => x.CourseID == id)[0];
        course = { ...course, IntakeID: intakeId };
        this.setState({ loading: true });
        SearchService.ApplyForCourse({ ...course })
          .then((response) => {
            if (response == "/Application/Profile") {
              this.props.navigation.navigate("CreateProfile", { course });
            } else if (response == "/Application/BrowseApplication") {
              this.props.navigation.dispatch({
                ...CommonActions.reset({
                  index: 1,
                  routes: [{ name: "Home" }, { name: "Applications" }],
                }),
              });
            }
            this.setState({ loading: false });
          })
          .catch((err) => {
            console.log(err);
            this.setState({ loading: false });
            Alert.alert(
              "An unexpected error occurred while applying for course"
            );
          });
      }
    } catch {}
  };

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      //console.log("searched courses focus");
      let {
        searchTypeId,
        level,
        institute,
        country,
        courseDisciplineId,
        courseName,
        courseDisciplineName,
        advanced,
        CourseOfferedID,
      } = this.props.route.params.searchFilter;
      if (!CourseOfferedID) CourseOfferedID = 0;
      if (!courseDisciplineName) courseDisciplineName = "";
      if (!courseName) courseName = "";
      if (!courseDisciplineName) courseDisciplineName = "";
      if (!courseDisciplineId) courseDisciplineId = 0;
      if (!country) country = 0;
      if (!institute) institute = 0;
      if (!level) level = 0;
      //console.log("search filter:", searchFilter);
      SearchService.Search({
        searchTypeId: searchTypeId,
        levelId: level,
        instituteId: institute,
        CountryID: country,
        courseDisciplineId,
        CourseName: courseName,
        courseDisciplineName,
        CourseOfferedID: !advanced ? CourseOfferedID : 0,
      })
        .then((x) => {
          if (!x) x = [];
          this.setState({
            data: x,
            displayData: x,
            loading: false,
            totalItems: x.length,
          });
        })
        .catch((err) => {
          console.log("Error:", err);
          this.setState({ loading: false });
        });
    });
  }
  componentWillUnmount() {
    this.props.navigation.removeListener("focus");
  }
  filterData = () => {
    var newData = this.state.data;
    if (this.state.institute > 0)
      newData = newData.filter((x) => x.InstituteID == this.state.institute);
    if (this.state.country > 0)
      newData = newData.filter((x) => x.CountryID == this.state.country);
    if (this.state.level > 0)
      newData = newData.filter((x) => x.LevelID == this.state.level);
    this.setState({
      totalItems: newData.length,
      displayData: newData,
    });
  };
  renderItems = () => {
    if (this.state.loading)
      return <TextCustom style={styles.noCourse}></TextCustom>;

    if (this.state.data.length == 0)
      return <TextCustom style={styles.noCourse}>No Course found</TextCustom>;
    var newData = this.state.displayData;

    newData = newData.slice(this.state.start, this.state.end);
    return newData.map((x, index) => {
      let _intakeList = [{ name: "-", value: 0 }];
      try {
        for (let i = 0; i < x.CourseIntakeList.length; i++) {
          _intakeList.push({
            name: x.CourseIntakeList[i].Intake,
            value: x.CourseIntakeList[i].IntakeID,
          });
        }
      } catch (e) {}
      return (
        <SearchedCoursesItem
          item={{ ...x, intakeList: _intakeList }}
          key={index}
          applyForCourse={this.applyForCourse}
        />
      );
    });
  };
  previousPage = () => {
    if (this.state.start > 0) {
      this.setState({ start: this.state.start - 10, end: this.state.end - 10 });
    }
  };
  nextPage = () => {
    if (this.state.end < this.state.data.length) {
      this.setState({ start: this.state.start + 10, end: this.state.end + 10 });
    }
  };

  render = () => {
    return (
      <Background>
        <Loading isActive={this.state.loading} />
        <Block
          style={[
            { paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding },
            styles.container,
          ]}
        >
          {this.props.route.params.searchFilter.advanced && false ? (
            <Block style={GlobalStyle.block}>
              <DropDown
                list={this.state.countries}
                label="Countries"
                onChange={(val) => {
                  this.setState({ country: val });
                  this.filterData();
                }}
                selectedValue={this.state.countries}
                disabled={this.state.countries.length == 1}
              />
              <DropDown
                list={this.state.institutes}
                label="Institutes"
                onChange={(val) => {
                  this.setState({ institute: val });
                  this.filterData();
                }}
                selectedValue={this.state.institute}
                disabled={this.state.institutes.length == 1}
              />
              <DropDown
                list={this.state.levels}
                label="Levels"
                onChange={(val) => {
                  this.setState({ level: val });
                  this.filterData();
                }}
                selectedValue={this.state.level}
                disabled={this.state.levels.length == 1}
              />
            </Block>
          ) : null}
          <React.Fragment>{this.renderItems()}</React.Fragment>
          {this.state.data.length > 0 ? (
            <Block row center style={{ marginTop: 10 }}>
              <CustomIcon
                source={Images.Backward}
                onPress={this.previousPage}
              />
              <TextCustom
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  textAlign: "center",
                  flex: 1,
                }}
              >
                From {this.state.start + 1} to{" "}
                {this.state.end > this.state.totalItems
                  ? this.state.totalItems
                  : this.state.end}{" "}
                off {this.state.totalItems}
              </TextCustom>
              <CustomIcon source={Images.Forward} onPress={this.nextPage} />
            </Block>
          ) : null}
        </Block>
      </Background>
    );
  };
}

export default SearchedCourses;

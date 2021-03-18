import { Block } from "galio-framework";
import React from "react";
import { Alert, Modal, Text } from "react-native";
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
      displayData:[]
    };
  }
  applyForCourse = (id, intakeId) => {
    //console.log("APPly " +this.props);
    //this.props.navigation.navigate("CreateProfile");
    //return;
    try {
      if (intakeId == 0) {
        Alert.alert("Select Intake", "Please select an intake before apply.");
        return;
      }
      let data = this.state.data;
      if (data != null) {
        let course = this.state.data.filter((x) => x.CourseID == id)[0];
        course={...course,IntakeID :intakeId};
        SearchService.ApplyForCourse({ ...course })
          .then((response) => {
            console.log(response);
            if (response == "/Application/Profile") {
              this.props.navigation.navigate("CreateProfile",{course})
              //Alert.alert("Apply Successful", "create profile here");
            } else if(response=="/Application/BrowseApplication"){
              this.props.navigation.navigate("Applications");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch {}
  };

  componentDidMount() {
    const { searchFilter } = this.props.route.params;
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

        let institutes = [{ name: "All", value: 0 }];
        let tempInsti = [];
        x.forEach((x) => {
          if (!tempInsti.includes(x.InstituteID)) {
            tempInsti.push(x.InstituteID);
            institutes.push({ name: x.InstituteName, value: x.InstituteID });
          }
        });

        let countries = [{ name: "All", value: 0 }];
        let tempcountry = [];
        x.forEach((x) => {
          if (!tempcountry.includes(x.CountryID)) {
            tempcountry.push(x.CountryID);
            countries.push({ name: x.CountryName, value: x.CountryID });
          }
        });

        let levels = [{ name: "All", value: 0 }];
        let tempLevels = [];
        x.forEach((x) => {
          if (!tempLevels.includes(x.LevelID)) {
            tempLevels.push(x.LevelID);
            levels.push({ name: x.LevelName, value: x.LevelID });
          }
        });
        this.setState({
          levels,
          institutes,
          countries,
          data: x,
          displayData:x,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  filterData=()=>{
    var newData = this.state.data;
    if (this.state.institute > 0) newData = newData.filter((x) => x.InstituteID == this.state.institute);
    if (this.state.country > 0) newData = newData.filter((x) => x.CountryID == this.state.country);
    if (this.state.level > 0) newData = newData.filter((x) => x.LevelID == this.state.level);
    this.setState({ totalItems: newData.length, displayData:newData });
  }
  renderItems = () => {
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
      } catch (e){}
      return (
        <SearchedCoursesItem
          item={{...x,intakeList:_intakeList}}
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
  render = () => (
    <Background>
    <Loading isActive={this.state.loading} />
      <Block
        style={[
          { paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding },
          styles.container,
        ]}
      >
        <Block style={GlobalStyle.block}>
          <DropDown
            list={this.state.countries}
            label="Countries"
            onChange={(val) => {this.setState({ country: val });this.filterData()}}
            selectedValue={this.state.countries}
            disabled={this.state.countries.length == 1}
          />
          <DropDown
            list={this.state.institutes}
            label="Institutes"
            onChange={(val) => {this.setState({ institute: val });this.filterData()}}
            selectedValue={this.state.institute}
            disabled={this.state.institutes.length == 1}
          />

          <DropDown
            list={this.state.levels}
            label="Levels"
            onChange={(val) => {this.setState({ level: val });this.filterData()}}
            selectedValue={this.state.level}
            disabled={this.state.levels.length == 1}
          />
        </Block>
        <React.Fragment>{this.renderItems()}</React.Fragment>
        <Block row center style={{ marginTop: 10 }}>
          <CustomIcon source={Images.Backward} onPress={this.previousPage} />
          <TextCustom style={{ marginLeft: 20, marginRight: 20 }}>
            From {this.state.start + 1} to{" "}
            {this.state.end > this.state.totalItems
              ? this.state.totalItems
              : this.state.end}{" "}
            off {this.state.totalItems}
          </TextCustom>
          <CustomIcon source={Images.Forward} onPress={this.nextPage} />
        </Block>
      </Block>
    </Background>);
}

export default SearchedCourses;

import { Block, Button, Input, Switch, Text } from "galio-framework";
import React from "react";
import { ImageBackground } from "react-native";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import Background from "../../../components/Background";
import DropDown from "../../../components/DropDown";
import LabelledInput from "../../../components/LabelledInput.Component";
import SelectCountry from "../../../components/SelectCountry";
import { Images } from "../../../constants";
import GlobalStyle from "../../../GlobalStyles";

const { width, height } = Dimensions.get("window");
import styles from "./SearchCourse.Styles";

const institutes = [
  { value: 1, name: "IIUI1" },
  { value: 2, name: "IIUI2" },
  { value: 3, name: "IIUI3" },
  { value: 4, name: "IIUI4" },
  { value: 5, name: "IIUI5" },
  { value: 6, name: "IIUI6" },
  { value: 7, name: "IIUI7" },
  { value: 8, name: "IIUI8" },
];

class SearchCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFitler:{
        country:1,
        institute:1,
        level:1,
        course:"",
        discipline:"",
        advanced:false
      }
    };
  }

  handleAdvanced = (val) => {
    let searchFitler=this.state.searchFitler;
    searchFitler.advanced=val;
    this.setState(searchFitler);
  };

  handleChange=(name, val)=>{
    let searchFitler=this.state.searchFitler;
    searchFitler[name]=val;
    this.setState(searchFitler);
  }

  render = () => {
    return (
 <Background>
   <Block style={{paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding}}>
            <Block style={styles.block}>
              <Text style={styles.blockTitle}>Search Course</Text>
              <SelectCountry onChange={val=>this.handleChange('country',val)} selectedValue={this.state.searchFitler.country}/>
              {this.state.searchFitler.advanced ? (
                <React.Fragment>
                  <DropDown list={institutes} label="Institutes" onChange={val=>this.handleChange('institute',val)} selectedValue={this.state.searchFitler.institute}/>
                  <DropDown list={institutes} label="Level" onChange={val=>this.handleChange('level',val)} selectedValue={this.state.searchFitler.level}/>
                </React.Fragment>
              ) : null}
              <LabelledInput label="Course" value={this.state.searchFitler.course} onChange={val=>this.handleChange('course',val)}/>
              <LabelledInput label="Discipline" value={this.state.searchFitler.discipline} onChange={val=>this.handleChange('discipline',val)}/>
              <Button
              style={styles.btn}
                onPress={() =>
                  this.props.navigation.navigate({name:"SearchedCourses",params:{...this.state.searchFitler}})
                }
              >
                Search
              </Button>
              <Block row space="between" style={styles.advancedSearch}>
                <Text color={GlobalStyle.color.textLight}>Advanced Search</Text>
                <Switch
                  onChange={this.handleAdvanced}
                  trackColor={{
                    true: GlobalStyle.bg.sky,
                  }}
                  initialValue={true}
                  thumbColor={this.state.searchFitler.advanced?GlobalStyle.color.textLight:null}
                />
              </Block></Block>
            </Block></Background>
    );
  };
}
export default SearchCourse;

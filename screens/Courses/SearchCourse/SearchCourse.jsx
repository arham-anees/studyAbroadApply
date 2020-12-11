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
  { id: 1, name: "IIUI1" },
  { id: 2, name: "IIUI2" },
  { id: 3, name: "IIUI3" },
  { id: 4, name: "IIUI4" },
  { id: 5, name: "IIUI5" },
  { id: 6, name: "IIUI6" },
  { id: 7, name: "IIUI7" },
  { id: 8, name: "IIUI8" },
];

class SearchCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advancedSearch: false,
    };
  }

  handleAdvanced = (val) => {
    this.setState({ advancedSearch: val });
  };

  render = () => {
    return (
 <Background>
   <Block style={{paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding}}>
            <Block style={styles.block}>
              <Text style={styles.blockTitle}>Search Course</Text>
              <SelectCountry />
              {this.state.advancedSearch ? (
                <React.Fragment>
                  <DropDown list={institutes} label="Institutes" />
                  <DropDown list={institutes} label="Level" />
                </React.Fragment>
              ) : null}
              <LabelledInput label="Course" />
              <LabelledInput label="Discipline" />
              <Button
              style={styles.btn}
                onPress={() =>
                  this.props.navigation.navigate({name:"SearchedCourses",params:{country:1,course:"test",institute:"test" ,advanced:0}})
                }
              >
                Search
              </Button>
              <Block row space="between" style={styles.advancedSearch}>
                <Text color={GlobalStyle.color.textLight}>Advanced Search</Text>
                <Switch
                  onChange={this.handleAdvanced}
                  trackColor={{
                    true: GlobalStyle.bg.green,
                    false: GlobalStyle.color.textLight,
                  }}
                  initialValue={false}
                  color={"red"}
                />
              </Block></Block>
            </Block></Background>
    );
  };
}
export default SearchCourse;

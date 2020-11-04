import { Block, Button, Input, Text } from "galio-framework";
import React from "react";
import { ImageBackground } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import DropDown from "../../../components/DropDown";
import SelectCountry from "../../../components/SelectCountry";
import { Images } from "../../../constants";

const { width, height } = Dimensions.get("window");
import styles from "./SearchCourse.Styles";

class SearchCourse extends React.Component {
  render = () => {
    return (
      <ImageBackground
        source={Images.Onboarding}
        style={{ height, width, zIndex: 1 }}
      >
        <ScrollView style={styles.container}>
          <Block style={styles.block}>
            <Text style={styles.blockTitle}>Search Course</Text>
            <Block row space="between" middle>
              <Text style={styles.text}>Country</Text>
              <Block style={styles.input}>
                <SelectCountry />
              </Block>
            </Block>
            <Block row space="between" middle>
              <Text style={styles.text}>Course</Text>
              <Block style={styles.input}>
                <Input placeholder="Course" />
              </Block>
            </Block>
            <Block row space="between" middle>
              <Text style={styles.text}>Discipline</Text>
              <Block style={styles.input}>
                <Input placeholder="Discipline" />
              </Block>
            </Block>
            <Button
              onPress={() => this.props.navigation.navigate("SearchedCourses")}
            >
              Search
            </Button>
          </Block>
          <Block style={styles.block}>
            <Text style={styles.blockTitle}>
              WHAT DO YOU WANT TO STUDY? FIND THE RIGHT COURSE.
            </Text>
            <Block row space="between" middle>
              <Text style={styles.text}>Country</Text>
              <Block style={styles.input}>
                <SelectCountry />
              </Block>
            </Block>
            <Block row space="between" middle>
              <Text style={styles.text}>Institute</Text>
              <Block style={styles.input}>
                <DropDown />
              </Block>
            </Block>
            <Block row space="between" middle>
              <Text style={styles.text}>Level</Text>
              <Block style={styles.input}>
                <DropDown />
              </Block>
            </Block>
            <Block row space="between" middle>
              <Text style={styles.text}>Course</Text>
              <Block style={styles.input}>
                <DropDown />
              </Block>
            </Block>
            <Button>Search</Button>
          </Block>
        </ScrollView>
      </ImageBackground>
    );
  };
}
export default SearchCourse;

import { Block, Button, theme } from "galio-framework";
import React, { useState } from "react";
import { Picker, View } from "react-native";
import { StyleSheet } from "react-native";
import TextCustom from "../../../components/TextCustom";
import GlobalStyle from "../../../GlobalStyles";

function SearchedCoursesItem(props) {
  const [intake, setIntake] = useState(0);
  const {
    InstituteName,
    CountryName,
    CityName,
    CourseName,
    Duration,
    CourseDescription,
    intakeList,
    CourseFee,
    DeadLine,
    CourseID,
  } = props.item;

  let date = "-";

  try {
    date = new Date(DeadLine).toLocaleDateString();
    if (date.includes("nvalid")) date = "-";
  } catch {}
  return (
    <Block style={GlobalStyle.block}>
      <TextCustom style={GlobalStyle.blockTitle}>{CourseName}</TextCustom>
      <TextCustom center style={{ fontSize: GlobalStyle.SIZES.HEADING6 }}>
        {InstituteName}
      </TextCustom>
      <Block row>
        <TextCustom style={styles.infoField}>Country :</TextCustom>
        <TextCustom style={styles.infoField}>{CountryName}</TextCustom>
      </Block>
      <Block row>
        <TextCustom style={styles.infoField}>City :</TextCustom>
        <TextCustom style={styles.infoField}>{CityName}</TextCustom>
      </Block>
      <Block row middle>
        <TextCustom style={styles.infoField}>Intakes :</TextCustom>
        <View style={styles.dropdown}>
          <Picker
            mode={"dropdown"}
            selectedValue={intake}
            enabled={true}
            style={styles.dd}
            onValueChange={(val) => setIntake(val)}
          >
            {intakeList
              ? intakeList.map((item, index) => (
                  <Picker.Item
                    label={item.name}
                    value={item.value}
                    key={index}
                  />
                ))
              : null}
          </Picker>
        </View>
        {/* <DropDown style={ {...styles.infoField, width:"100%"}} label="test" selectedValue={0} list={intakeList} noLabel/> */}
      </Block>
      <Block row>
        <TextCustom style={styles.infoField}>Duration :</TextCustom>
        <TextCustom style={styles.infoField}>{Duration}</TextCustom>
      </Block>
      <Block row>
        <TextCustom style={styles.infoField}>Course Fee (Per Year):</TextCustom>
        <TextCustom style={styles.infoField}>
          {CourseFee != undefined ? CourseFee : "-"}
        </TextCustom>
      </Block>
      <Block row middle>
        <TextCustom style={styles.infoField}>Course Deadline :</TextCustom>
        <TextCustom style={styles.infoField}>{date}</TextCustom>
      </Block>
      <Button
        style={styles.btn}
        onPress={() => {
          props.applyForCourse(CourseID, intake);
        }}
      >
        Apply For Course
      </Button>
    </Block>
  );
}

export default SearchedCoursesItem;

const styles = StyleSheet.create({
  infoField: {
    flex: 1,
    flexWrap: "wrap",
    width: "50%",
  },

  btn: {
    margin: 0,
    marginTop: 4,
    width: "100%",
  },
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT / 2,
    marginVertical: 0,
    overflow: "hidden",
    marginTop: 10,
    width: "50%",
    // width: width - 100,
  },
  dd: {
    height: theme.SIZES.INPUT_HEIGHT / 2,
  },
});

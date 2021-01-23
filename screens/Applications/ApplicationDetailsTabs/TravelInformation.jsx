import { Block, Input, Text, theme } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import GlobalStyle from "../../../GlobalStyles";
import TextCustom from '../../../components/TextCustom';

const {width}=Dimensions.get("screen");

const travelDocuments = {
  arrivalTime: "10:20 PM",
  arrivalDate: "10/10/2020",
  flightNumber: "123asd",
  proposedAccomodation: "-",
  contactNumberAbroad: "0300-0000000",
};

// var item = {
//   course: "BSc Business Administration & Management",
//   intake: "February 2021",
//   level: "Bachelor's",
//   institute: "Budapest Metropolitan University",
//   country: "Hungary",
// };

function TravelInformation(props) {
  const {item}=props;
  return (
    <View>
      <Block style={styles.block}>
        <Text color={GlobalStyle.color.textLight} center h5>
          Course
        </Text>
        <Block style={styles.line}></Block>
        <Block row>
          <TextCustom style={styles.title}>Course</TextCustom>
          <TextCustom style={styles.info}>{item.name}</TextCustom>
        </Block>

        <Block row>
          <TextCustom style={styles.title}>Intake</TextCustom>
          <TextCustom style={styles.info}>{item.intake}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={styles.title}>Level</TextCustom>
          <TextCustom style={styles.info}>{item.level}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={styles.title}>Institute</TextCustom>
          <TextCustom style={styles.info}>{item.institute}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={styles.title}>Country</TextCustom>
          <TextCustom style={styles.info}>{item.country}</TextCustom>
        </Block>
      </Block>
      <Block style={styles.block}>
        <TextCustom color={GlobalStyle.color.textLight} center h5>
          Travel Information
        </TextCustom>
        <Block style={styles.line}></Block>
        <Block row>
          <TextCustom style={styles.title}>Arrival Date</TextCustom>
          <TextCustom  style={styles.info}>{travelDocuments.arrivalDate}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={styles.title}>Arrival Time</TextCustom>
          <TextCustom style={styles.info}>{travelDocuments.arrivalTime}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={styles.title}>Flight Number</TextCustom>
          <TextCustom style={styles.info}>{travelDocuments.flightNumber}</TextCustom>
        </Block>
        <Block row>
          <TextCustom style={styles.title}>Proposed Accomodation</TextCustom>
          <TextCustom style={styles.info}>
            {travelDocuments.proposedAccomodation}
          </TextCustom>
        </Block>
        <Block row>
          <TextCustom style={styles.title}>Contact Number Abroad</TextCustom>
          <TextCustom style={styles.info}>{travelDocuments.contactNumberAbroad}</TextCustom>
        </Block>
      </Block>
    </View>
  );
}

export default TravelInformation;
const styles=StyleSheet.create({

   block: {
    backgroundColor: "#0004",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: theme.SIZES.BASE ,
    paddingBottom:10
  },
  title: {
    width: "40%",
    fontWeight:"bold"
  },
  info: {
    flex: 1,
    flexWrap: 'wrap'
  },
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT,
    overflow: "hidden",
    marginTop: 10,
    width: width - 100,
  },
  btnApply: {
    width: "100%",
    marginTop: 10,
  },
  line:{
    height:1,
    backgroundColor:GlobalStyle.color.textLight,
    marginBottom:10
  }
})

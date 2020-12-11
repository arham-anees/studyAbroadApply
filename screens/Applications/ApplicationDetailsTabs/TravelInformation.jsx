import { Block, Input, Text, theme } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import GlobalStyle from "../../../GlobalStyles";

const {width}=Dimensions.get("screen");

const travelDocuments = {
  arrivalTime: "10:20 PM",
  arrivalDate: "10/10/2020",
  flightNumber: "123asd",
  proposedAccomodation: "-",
  contactNumberAbroad: "0300-0000000",
};

var item = {
  course: "BSc Business Administration & Management",
  intake: "February 2021",
  level: "Bachelor's",
  institute: "Budapest Metropolitan University",
  country: "Hungary",
};
function TravelInformation(props) {
  return (
    <View
      style={{
        paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding,
      }}
    >
      <Block style={styles.block}>
        <Text color={GlobalStyle.color.textLight} center h5>
          Course
        </Text>
        <Block style={styles.line}></Block>
        <Block row>
          <Text style={styles.title}>COURSE</Text>
          <Text style={styles.info}>{item.course}</Text>
        </Block>

        <Block row>
          <Text style={styles.title}>INTAKE</Text>
          <Text style={styles.info}>{item.intake}</Text>
        </Block>
        <Block row>
          <Text style={styles.title}>LEVEL</Text>
          <Text style={styles.info}>{item.level}</Text>
        </Block>
        <Block row>
          <Text style={styles.title}>INSTITUTE</Text>
          <Text style={styles.info}>{item.institute}</Text>
        </Block>
        <Block row>
          <Text style={styles.title}>COUNTRY</Text>
          <Text style={styles.info}>{item.country}</Text>
        </Block>
      </Block>
      <Block style={styles.block}>
        <Text color={GlobalStyle.color.textLight} center h5>
          Travel Information
        </Text>
        <Block style={styles.line}></Block>
        <Block row space="evenly">
          <Text style={styles.item}>Arrival Date</Text>
          <Text style={styles.item}>{travelDocuments.arrivalDate}</Text>
        </Block>
        <Block row space="evenly">
          <Text style={styles.item}>Arrival Time</Text>
          <Text style={styles.item}>{travelDocuments.arrivalTime}</Text>
        </Block>
        <Block row space="evenly">
          <Text style={styles.item}>Flight Number</Text>
          <Text style={styles.item}>{travelDocuments.flightNumber}</Text>
        </Block>
        <Block row space="evenly">
          <Text style={styles.item}>Proposed Accomodation</Text>
          <Text style={styles.item}>
            {travelDocuments.proposedAccomodation}
          </Text>
        </Block>
        <Block row space="evenly">
          <Text style={styles.item}>Contact Number Abroad</Text>
          <Text style={styles.item}>{travelDocuments.contactNumberAbroad}</Text>
        </Block>
      </Block>
      <Block style={GlobalStyle.scrollBottomPadding}></Block>
    </View>
  );
}

export default TravelInformation;
const styles=StyleSheet.create({
  item:{
    width:width/2 -40,
    color:GlobalStyle.color.textLight
  }
  , block: {
    backgroundColor: "#0004",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: theme.SIZES.BASE ,
    paddingBottom:10
  },
  title: {
    width: 80,
    color: GlobalStyle.color.textLight,
  },
  info: {
    color: GlobalStyle.color.textLight,
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

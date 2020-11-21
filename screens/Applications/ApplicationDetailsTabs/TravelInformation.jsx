import { Block, Input, Text, theme } from "galio-framework";
import React from "react";
import { View } from "react-native";

const travelDocuments = {
  arrivalTime: "10:20 PM",
  arrivalDate: "10/10/2020",
  flightNumber: "123asd",
  proposedAccomodation: "-",
  contactNumberAbroad: "0300-0000000",
};
function TravelInformation(props) {
  return (
    <View style={{paddingHorizontal:theme.SIZES.BASE}}>
      <Block row  space="evenly">
      <Text color="white">Arrival Date</Text>
        <Text color="white">{travelDocuments.arrivalDate}</Text>
      </Block>
      <Block row space="evenly">
        <Text color="white">Arrival Time</Text>
        <Text color="white">{travelDocuments.arrivalTime}</Text>
      </Block>
      <Block row space="evenly">
        <Text color="white">Flight Number</Text>
        <Text color="white">{travelDocuments.flightNumber}</Text>
      </Block>
      <Block row space="evenly">
        <Text color="white">Proposed Accomodation</Text>
        <Text color="white">{travelDocuments.proposedAccomodation}</Text>
      </Block>
      <Block row space="evenly" >
        <Text color="white">Contact Number Abroad</Text>
        <Text color="white">{travelDocuments.contactNumberAbroad}</Text>
      </Block>
    </View>
  );
}

export default TravelInformation;

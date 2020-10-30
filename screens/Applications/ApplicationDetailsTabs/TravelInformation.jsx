import { Block, Input, Text } from "galio-framework";
import React from "react";

const travelDocuments = {
  arrivalTime: "10:20 PM",
  arrivalDate: "10/10/2020",
  flightNumber: "123asd",
  proposedAccomodation: "-",
  contactNumberAbroad: "0300-0000000",
};
function TravelInformation(props) {
  return (
    <Block>
      <Block row space="between" middle>
        <Text color="white">Arrival Date</Text>
        <Input
          value={travelDocuments.arrivalDate}
          color="black"
          editable={false}
          opacity={0.5}
        />
      </Block>
      <Block row space="between" middle>
        <Text color="white">Arrival Time</Text>
        <Input
          value={travelDocuments.arrivalTime}
          color="black"
          editable={false}
          opacity={0.5}
        />
      </Block>
      <Block row space="between" middle>
        <Text color="white">Flight Number</Text>
        <Input
          value={travelDocuments.flightNumber}
          color="black"
          editable={false}
          opacity={0.5}
        />
      </Block>
      <Block row space="between" middle>
        <Text color="white">Proposed Accomodation</Text>
        <Input
          value={travelDocuments.proposedAccomodation}
          color="black"
          editable={false}
          opacity={0.5}
        />
      </Block>
      <Block row space="between" middle>
        <Text color="white">Contact Number Abroad</Text>
        <Input
          value={travelDocuments.contactNumberAbroad}
          color="black"
          editable={false}
          opacity={0.5}
        />
      </Block>
    </Block>
  );
}

export default TravelInformation;

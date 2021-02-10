import { Block, Input, Text, theme } from "galio-framework";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import GlobalStyle from "../../../GlobalStyles";
import TextCustom from '../../../components/TextCustom';
import ApplicationService from "../../../services/ApplicationService";
import { Rect } from "react-native-svg";
import Svg from "react-native-svg";

const {width}=Dimensions.get("screen");


class TravelInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalTime: "-",
      arrivalDate: "-",
      flightNumber: "-",
      proposedAccomodation: "-",
      contactNumberAbroad: "-",
      isLoading: true,
    };
  }
  componentDidMount() {
    const { applicationId } = this.props;
    ApplicationService.GetTravelInfo(0, applicationId)
    .then((x) => {
      this.setState({
        arrivalTime: x.ArrivalTime == null ? "-" : x.ArrivalTime,
        arrivalDate: x.ArrivalDate == null ? "-" : x.ArrivalDate,
        flightNumber: x.FlightNumber == null ? "-" : x.FlightNumber,
        proposedAccomodation:
          x.ProposedAccommodation == null ? "-" : x.ProposedAccommodation,
        contactNumberAbroad: x.AbroadContact == null ? "-" : x.AbroadContact,
        isLoading: false,
      });
    })
    .catch(err=>{});
  }

  render = () => (
    <View>
      <Block style={styles.block}>
        <TextCustom color={GlobalStyle.color.textLight} center h5>
          Travel Information
        </TextCustom>
        <Block style={styles.line}></Block>
        {this.state.isLoading ? (
          <Block>
            <Svg height={130} width="100%" fill={"grey"}>
              <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
              <Rect x="0" y="24" rx="4" ry="4" width="100%" height="20" />
              <Rect x="0" y="48" rx="4" ry="4" width="100%" height="20" />
              <Rect x="0" y="72" rx="4" ry="4" width="100%" height="20" />
              <Rect x="0" y="96" rx="4" ry="4" width="100%" height="20" />
            </Svg>
          </Block>
        ) : (
          <Block>
            <Block row>
              <TextCustom style={styles.title}>Arrival Date</TextCustom>
              <TextCustom style={styles.info}>
                {this.state.arrivalDate}
              </TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>Arrival Time</TextCustom>
              <TextCustom style={styles.info}>
                {this.state.arrivalTime}
              </TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>Flight Number</TextCustom>
              <TextCustom style={styles.info}>
                {this.state.flightNumber}
              </TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>
                Proposed Accomodation
              </TextCustom>
              <TextCustom style={styles.info}>
                {this.state.proposedAccomodation}
              </TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>
                Contact Number Abroad
              </TextCustom>
              <TextCustom style={styles.info}>
                {this.state.contactNumberAbroad}
              </TextCustom>
            </Block>
          </Block>
        )}
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

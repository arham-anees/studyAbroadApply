import { Block, Text } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import GlobalStyle from "../../GlobalStyles";
import ProgressBarByCountryItem from "./ProgressBarByCountry.Component";

const data2 = [
  {
    country: "Pakistan",
    sentToCounselor: 10,
    sentToInstitute: 2,
    newApplications: 7,
    progress: 60,
  },
  {
    country: "Bangladesh",
    sentToCounselor: 5,
    sentToInstitute: 5,
    newApplications: 1,
    progress: 40,
  },
  {
    country: "Sri Lanka",
    sentToCounselor: 8,
    sentToInstitute: 2,
    newApplications: 7,
    progress: 80,
  },
  {
    country: "South Africa",
    sentToCounselor: 6,
    sentToInstitute: 8,
    newApplications: 4,
    progress: 30,
  },
];

class ProgressBarByCountry extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }

  componentDidMount() {
      const {data} = this.props;
      console.log("data :",data);
      this.setState({data})
  }
  redDot = { ...styles.dot, backgroundColor: GlobalStyle.STATUSCOLOR.NewApplication };
  orangeDot = { ...styles.dot, backgroundColor: GlobalStyle.STATUSCOLOR.SentToInstitute };
  skyDot = { ...styles.dot, backgroundColor: GlobalStyle.STATUSCOLOR.SentToCounsellor};
  render = () => {
    return (
      <View>{
        this.state.data?
        <View style={GlobalStyle.block}>
          {this.state.data
            .sort(function (a, b) {
              return b.progress - a.progress;
            })
            .map((item, index) => (
              <ProgressBarByCountryItem
                item={item}
                totalApp={this.state.data[0].progress}
                number={index + 1}
                key={index}
              />
            ))}

          <Block left>
            <Block row middle>
              <Block style={this.skyDot}></Block>
              <Text color={GlobalStyle.color.textLight}>Send To Counselor</Text>
            </Block>
            <Block row middle>
              <Block style={this.orangeDot}></Block>
              <Text color={GlobalStyle.color.textLight}>Send To Institute</Text>
            </Block>
            <Block row middle>
              <Block style={this.redDot}></Block>
              <Text color={GlobalStyle.color.textLight}>New Applications</Text>
            </Block>
          </Block>
        </View>
  :null}</View>
    );
  };
}

export default ProgressBarByCountry;

const styles = StyleSheet.create({
  wrapper: {
    
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
  },
  countryName: {
    fontSize: 20,
  },
  dot: {
    width: 15,
    height: 15,
    marginLeft: 10,
    marginRight: 5,
    borderRadius:10
  },
});

import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  BackHandler,
} from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
// const { width } = Dimensions.get("screen");
import LineChart from "../components/Home/LineChart.Component";
import AppStatusByCountry from "../components/Home/AppStatusByCountry.PieChart";
import PieChart from "../components/Home/PieChart.Component";
import StackedBarComponent from "../components/Home/StackedBar.Component";
import Images from "../constants/Images";
import CountryApplicationsProgressChart from "../components/Home/CountryApplications.ProgressChart";
import ProgressBarByCountry from "../components/Home/ProgressBarByCountry";
import GlobalStyle from "../GlobalStyles";
import Background from "../components/Background";
import { View } from "react-native";
import { Animated } from "react-native";
import GraphsDataService from "../services/GraphDataService";
import { Alert } from "react-native";
import HomeUtils from './Home.Utils';

const { height, width } = Dimensions.get("screen");
class Home extends React.Component {
  constructor(props){
    super(props);
    this.back_Button_Press = this.back_Button_Press.bind(this);
    this.state={
      fadeAnim: new Animated.Value(0),
      pieChartData:[]
    }
    
    this.fadeOut();
  }
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 0
    }).start();
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      
      this.fadeIn();
    });
    this.getData();
  }


  componentWillUnmount() {
   
      BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
    }
  back_Button_Press = () => {

    // Put your own code here, which you want to exexute on back button press.
    Alert.alert(
      ' Exit From App ',
      ' Do you want to exit From App ?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => console.log('NO Pressed') }
      ],
      { cancelable: false },
    );
 
    // Return true to enable back button over ride.
    return true;
  }
  getData(){
    try{
    GraphsDataService.GetHomePageGraphsData()
    .then(x=>{
      let pieChartData=HomeUtils.MapPieChartData(x["PieChartDataList"]);
      let barChartData=HomeUtils.MapBarChartData(x);
      let lineChartData=HomeUtils.MapLineChartData(x);
      this.setState({pieChartData, barChartData,lineChartData});
    });
    }catch(e){console.log(e)}
  }
  render() {
    return (
      <Background>
        <Animated.View style={{ opacity: this.state.fadeAnim }}>
          <View style={{ padding: GlobalStyle.SIZES.PageNormalPadding }}>
            <AppStatusByCountry data={this.state.pieChartData} />
            {this.state.lineChartData && this.state.lineChartData.length > 0 ? (
              <LineChart data={this.state.lineChartData} />
            ) : null}
           
            {this.state.barChartData && this.state.barChartData.length > 0 ? (
              <ProgressBarByCountry data={this.state.barChartData} />
            ) : null}
            {/* <CountryApplicationsProgressChart /> */}
          </View>
        </Animated.View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;

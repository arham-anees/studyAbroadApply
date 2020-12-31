import React from "react";
import { Animated, Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../../components/Background";
import { Images } from "../../constants";
import GlobalStyle from "../../GlobalStyles";
import NotificationItem from "./Notifications.Component";

const { width, height } = Dimensions.get("window");
class Notifications extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fadeAnim: new Animated.Value(0)
    }
    
  }
  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
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
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      this.fadeOut();
      this.fadeIn();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
    this.fadeOut();
  }
  data = [
    {
      name: "Faraz Jehangir",
      notificationText: "Please send his offer",
      date: "Nov 05 2020",
    },
    {
      name: "Jalal Haider",
      notificationText: "Please send his offer",
      date: "Nov 15 2020",
    },
    {
      name: "Danyal Khan",
      notificationText: "Please send his offer",
      date: "Nov 05 2020",
    },
    {
      name: "Imran Khan",
      notificationText: "Please send his offer",
      date: "Nov 05 2020",
    },
    {
      name: "Ahmad Raza",
      notificationText: "Please send his offer",
      date: "Nov 05 2020",
    },
    {
      name: "Ibrar Akhtar",
      notificationText: "Please send his offer",
      date: "Nov 05 2020",
    },
    {
      name: "Tauseef Rehman",
      notificationText: "Please send his offer",
      date: "Nov 05 2020",
    },
    {
      name: "Farrukh Javaid",
      notificationText: "Please send his offer",
      date: "Nov 05 2020",
    },
  ];
  render = () => (
    <Background>
      <Animated.View style={{opacity:this.state.fadeAnim}}>
      <View style={{ paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding }}>
        <View style={GlobalStyle.block}>
          {this.data.map((item, index) => (
            <NotificationItem item={item} key={index} />
          ))}
        </View>
      </View>
      </Animated.View>
    </Background>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: { margin: 10 },
});

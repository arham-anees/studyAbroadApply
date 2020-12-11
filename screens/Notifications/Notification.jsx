import React from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../../components/Background";
import { Images } from "../../constants";
import GlobalStyle from "../../GlobalStyles";
import NotificationItem from "./Notifications.Component";

const { width, height } = Dimensions.get("window");
class Notifications extends React.Component {
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
      <View style={{ paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding }}>
        <View style={GlobalStyle.block}>
          {this.data.map((item, index) => (
            <NotificationItem item={item} key={index} />
          ))}
        </View>
      </View>
    </Background>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: { margin: 10 },
});

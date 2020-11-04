import React from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Images } from "../../constants";
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
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height: height + 200, width, zIndex: 1 }}
        >
          <View style={styles.container}>
            {this.data.map((item, index) => (
              <NotificationItem item={item} key={index} />
            ))}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: { margin: 10 },
});

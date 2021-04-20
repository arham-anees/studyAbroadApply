import { Block, Text } from "galio-framework";
import React, { createRef, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Swipeout from "react-native-swipeout";
import TextCustom from "../../components/TextCustom";
import GlobalStyle from "../../GlobalStyles";
import { Animated } from "react-native";
const { width } = Dimensions.get("screen");

function SwipeOutComponent({ color, text }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        borderRadius: 10,
        backgroundColor: "transparent",
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>{text}</Text>
    </View>
  );
}
function MarkAsRead(id) {
  NotificationService.DeleteNotification(id)
    .then((x) => {
      callback();
      setTimeout(() => {
        try {
          notifs = this.state.data;
          notifs = notifs.filter((x) => x.id != id);
          this.setState({ data: notifs });
        } catch {}
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      Alert.alert(
        "Failed",
        "Failed to mark notification as read. Please try again later."
      );
    });
}

function Read(props) {
  try {
    props.deleteNotificationSilent(props.item.id);
  } catch {}
  try {
    props.navigation.navigate("Applications", {
      params: { appId: props.item.id },
      screen: "ApplicationDetails",
    });
  } catch {
    props.navigation.navigate("Applications", {
      params: { appId: props.item.id },
      screen: "ApplicationDetails",
    });
  }
}

function NotificationItem(props) {
  const initialOpacity = 1;
  const view = useRef(null);
  const fadeAnim = useRef(new Animated.Value(initialOpacity)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
    }).start();
  };
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 0,
  }).start();
  return (
    <Animated.View ref={view} style={{ overflow: "hidden", opacity: fadeAnim }}>
      <View style={styles.container}>
        <Swipeout
          backgroundColor="transparent"
          right={[
            {
              component: <SwipeOutComponent text={"View"} />,
              text: "Mark as read",
              onPress: () => Read(props),
              type: "primary",
            },
            // {
            //   component: <SwipeOutComponent text={"Read"} />,
            //   type: "primary",
            //   onPress: () => MarkAsRead(view),
            // },
            {
              component: <SwipeOutComponent text={"Read"} />,
              onPress: () => props.deleteNotification(props.item.id, fadeOut),
              type: "delete",
            },
          ]}
          openRight={false}
          autoClose
          buttonWidth={60}
        >
          <Block row>
            <Image
              style={styles.image}
              source={{
                uri:
                  // "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
                  "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png",
              }}
            />
            <Block space="between" style={{ paddingRight: 10, flex: 1 }}>
              <Text style={styles.title}>{props.item.name}</Text>
              <Text style={{ flexWrap: "wrap", flex: 1 }}>
                {props.item.notificationText}
              </Text>
              <Text style={{ color: "grey" }}>{props.item.date}</Text>
            </Block>
          </Block>
        </Swipeout>
      </View>
    </Animated.View>
  );
}

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyle.bg.whiteFaded,
    margin: 5,
    borderRadius: 2,
    borderRightWidth: 5,
    borderRightColor: "purple",
    paddingRight: 0,
  },
  image: {
    height: 80,
    width: "30%",
    minWidth: 60,
    maxWidth: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: GlobalStyle.SIZES.HEADING6,
    fontWeight: "bold",
  },
});

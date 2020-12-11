import { Block, Text } from "galio-framework";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import GlobalStyle from "../../GlobalStyles";

function NotificationItem(props) {
  return (
    <View style={styles.container}>
      <Block row>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://media.gettyimages.com/photos/happy-kid-picture-id649133062",
          }}
        />
        <Block space="between">
          <Text style={styles.title}>{props.item.name}</Text>
          <Text>{props.item.notificationText}</Text>
          <Text>{props.item.date}</Text>
        </Block>
      </Block>
    </View>
  );
}

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyle.bg.white,
    margin: 5,
    borderRadius: 2,
  },
  image: {
    height: 80,
    width: 80,
    marginRight: 10,
    borderRadius:5
  },
  title: {
    fontSize: GlobalStyle.SIZES.HEADING6,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

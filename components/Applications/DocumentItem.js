import React, { useRef } from "react";
import { StyleSheet, View, Linking, Alert } from "react-native";
import { Block } from "galio-framework";
import { Dimensions } from "react-native";
import GlobalStyle from "../../GlobalStyles";
import CustomIcon from "../../Icons/BellIcon";
import Icons from "../../constants/Icons";
import TextCustom from "../TextCustom";
import { Animated } from "react-native";
import * as FileSystem from "expo-file-system";
const { width } = Dimensions.get("screen");
const itemWidth = 120;
// const callback = (downloadProgress) => {
//   const progress =
//     downloadProgress.totalBytesWritten /
//     downloadProgress.totalBytesExpectedToWrite;
//   this.setState({
//     downloadProgress: progress,
//   });
//   console.log(progress + "%");
// };

async function DownloadFile(fileName, ApplicationID) {
  try {
    // const downloadResumable = FileSystem.createDownloadResumable(
    //   `http://www.studyabroadapply.com/documents/${ApplicationID}/${fileName}`,
    //   FileSystem.documentDirectory + "test/" + fileName,
    //   {},
    //   callback
    // );
    // try {
    //   const { uri } = await downloadResumable.downloadAsync();
    //   console.log("Finished downloading to ", uri);
    //   Alert.alert("Finished downloading to ", uri);
    // } catch (e) {
    //   console.error(e);
    // }
    Linking.openURL(
      `http://www.studyabroadapply.com/documents/${ApplicationID}/${fileName}`
    );
  } catch (e) {
    console.log(e);
  }
}
function DocumentItem(props) {
  const {
    id,
    number,
    name,
    category,
    date,
    ApplicationID,
    roleId,
    showDelete,
  } = props;

  const fadeAnim = useRef(new Animated.Value(itemWidth)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false, // Add this line
    }).start();
  };
  Animated.timing(fadeAnim, {
    toValue: itemWidth,
    useNativeDriver: false, // Add this line
    duration: 0,
  }).start();
  const { deleteItem } = props;
  return (
    <Animated.View style={{ height: fadeAnim, overflow: "hidden" }}>
      <View style={GlobalStyle.block}>
        <Block row>
          <TextCustom style={{ fontWeight: "bold", maxWidth: 15 }}>
            {number}.{" "}
          </TextCustom>
          <TextCustom style={{ fontWeight: "bold" }}>
            {category.trim().toUpperCase()}
          </TextCustom>
        </Block>
        <Block row space="between" margin={5}>
          <TextCustom style={{ maxWidth: "80%" }}>
            {name.slice(0, 30).toLowerCase()}
            {name.length > 30 ? "..." : ""}
          </TextCustom>
          <TextCustom>{date}</TextCustom>
        </Block>
        <Block
          row
          space="around"
          style={{ borderTopWidth: 0.5, paddingTop: 10 }}
        >
          <CustomIcon
            source={Icons.Download}
            onPress={() => DownloadFile(name, ApplicationID)}
          />
          {showDelete && (
            <CustomIcon
              source={Icons.Trash}
              onPress={() => deleteItem(id, fadeOut)}
            />
          )}
        </Block>
      </View>
    </Animated.View>
  );
}

export default DocumentItem;

const styles = StyleSheet.create({
  button: {
    width: (width - 60) / 2,
    height: 30,
  },
});

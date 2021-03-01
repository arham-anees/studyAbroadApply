import React, { useRef } from "react";
import { TouchableOpacity, StyleSheet, View, Linking } from "react-native";
import { Block, Button, Text } from "galio-framework";
import { Dimensions } from "react-native";
import GlobalStyle from "../../GlobalStyles";
import CustomIcon from "../../Icons/BellIcon";
import Icons from "../../constants/Icons";
import TextCustom from "../../components/TextCustom";
import { Animated } from "react-native";

const { width } = Dimensions.get("screen");
const itemWidth=120;

function DownloadFile(fileName){
  try{
  Linking.openURL("https://www.studyabroadapply.com/"+fileName);
  }catch{}
}

function DocumentItem(props) {
  const {id,number, name, category, date}=props;
  const fadeAnim = useRef(new Animated.Value(itemWidth)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000
    }).start();
  };
  Animated.timing(fadeAnim, {
    toValue: itemWidth,
    duration: 0
  }).start();
  const {deleteItem}=props;
  return (
    <Animated.View style={{ height: fadeAnim, overflow:"hidden"}}>
      <View style={GlobalStyle.block}>
      <Block row >
        <TextCustom style={{fontWeight:"bold"}}>{number}. </TextCustom>
        <TextCustom style={{fontWeight:"bold"}}>{category.toUpperCase()}</TextCustom>
      </Block>
      <Block row space="between" margin={5}>
        <TextCustom style={{maxWidth:"80%"}}>{name.slice(0,30).toLowerCase()}{name.length>30?"...":""}</TextCustom>
        <TextCustom>{date}</TextCustom>
      </Block>
      <Block row space="around" style={{borderTopWidth:0.5, paddingTop:10}}>
        <CustomIcon source={Icons.Download}  onPress={()=>DownloadFile(name)}/>
          <CustomIcon source={Icons.Trash} onPress={()=>deleteItem(id, fadeOut)}/>
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

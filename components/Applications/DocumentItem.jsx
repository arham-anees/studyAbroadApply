import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Block, Button, Text } from "galio-framework";
import { Dimensions } from "react-native";
import GlobalStyle from "../../GlobalStyles";
import CustomIcon from "../../Icons/BellIcon";
import Icons from "../../constants/Icons";

const { width } = Dimensions.get("screen");

function DocumentItem(props) {
  const {deleteItem}=props;
  const {id,number, name, category, date}=props;
  return (
    <View style={styles.container}>
      <Block row>
        <Text>{number}. </Text>
        <Text>{name}</Text>
      </Block>
      <Block row space="between" margin={5}>
        <Text>{category}</Text>
        <Text>{date}</Text>
      </Block>
      <Block row space="around" style={{borderTopWidth:0.5, paddingTop:10}}>
        <CustomIcon source={Icons.Download}/>
          <CustomIcon source={Icons.Trash} onPress={()=>deleteItem(id)}/>
      </Block>
{/*       
      <Block row space="between">
        <Button style={styles.button} color={GlobalStyle.bg.green}>
          Download
        </Button>
        <Button style={styles.button} color={GlobalStyle.bg.red}>
          Delete
        </Button>
      </Block> */}
    </View>
  );
}

export default DocumentItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff9",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },

  button: {
    width: (width - 60) / 2,
    height: 30,
  },
});

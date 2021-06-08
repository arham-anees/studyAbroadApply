import { Block, Text } from "galio-framework";
import React, { useState } from "react";
import { Dimensions, Modal } from "react-native";
import { StyleSheet, View } from "react-native";

const { height } = Dimensions.get("screen");

function Toast(props) {
  const {isShow}=props;
  const [show, setShow]=useState(isShow);
  setTimeout(() => {
    setShow(false);
  }, 3000);
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
  <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Modal>
  );
}

export default Toast;

const styles = StyleSheet.create({
 
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    paddingHorizontal:10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  text:{
fontSize:14
  }
});

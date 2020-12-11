import { Block, Button, Input, Text, theme } from "galio-framework";
import React, { useState } from "react";
import { Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import DocumentItem from "../../../components/Applications/DocumentItem";
import * as DocumentPicker from "expo-document-picker";
import GlobalStyle from "../../../GlobalStyles";
import { ScrollView } from "react-native";

const { width } = Dimensions.get("screen");

const documentTypes = [
  { value: 1, name: "Bachelors Degree / Transcript" },
  { value: 2, name: "Passport" },
  { value: 3, name: "CV" },
  { value: 4, name: "Bachelors Degree / Transcript" },
];

function DocumentsTab (props) {
  const [file, setFile]=useState(null);

const {documents}=props.application;
const {deleteDocument}=props;
  const pickDocumentHandle = () => {
    DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: false,
    })
      .then((result) => {
        if (result.type === "success") {
          this.setState({ file: result, file: result.name });
        } else {
          this.refs.toast.show("hello world");
        }
      })
      .catch((er) => console.log(er));
  };
  return (
    <View style={{
      paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding}}>
      
      <Block style={GlobalStyle.block}>
        <Text style={{fontSize:GlobalStyle.SIZES.HEADING5}} color="white" center>
          Documents
        </Text>
        {documents.map((item, index) => (
          <DocumentItem
            name={item.name}
            number={index + 1}
            category={item.category}
            date={item.date}
            id={item.id}
            key={index}
            deleteItem={deleteDocument}
          />
        ))}
      </Block>
    
      <Block style={GlobalStyle.scrollBottomPadding}></Block>
    </View>
  );
}

export default DocumentsTab;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT,
    overflow: "hidden",
    marginTop: 10,
  },
  block: {
    backgroundColor: "#0004",
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    
    paddingHorizontal: theme.SIZES.BASE 
  },
  button: {
    height: 30,
  },
});

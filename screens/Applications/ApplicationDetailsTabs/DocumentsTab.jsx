import { Block, Button, Input, Text, theme } from "galio-framework";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import DocumentItem from "../../../components/Applications/DocumentItem";
import * as DocumentPicker from "expo-document-picker";
import GlobalStyle from "../../../GlobalStyles";
import { ScrollView } from "react-native";
import TextCustom from "../../../components/TextCustom";
import ApplicationService from "../../../services/ApplicationService";

const { width } = Dimensions.get("screen");

const documentTypes = [
  { value: 1, name: "Bachelors Degree / Transcript" },
  { value: 2, name: "Passport" },
  { value: 3, name: "CV" },
  { value: 4, name: "Bachelors Degree / Transcript" },
];

class DocumentsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      documents: [],
      applicationId: 0,
    };
  }

  componentDidMount() {
    let appId = this.props.applicationId;
    if (appId > 0) {
      ApplicationService.GetDocuments(appId)
        .then((x) => {
          this.setState({documents:this.mapItens(x)});
        })
        .catch((err) => console.log(err));
    }
  }

mapItens=(data)=>{
  try{
    //console.log(data);
    let mappedData=[];
    data.forEach(x=>{
      mappedData.push({
        name:x.FileName,
        category:x.DocumentCategoryName,
        date:x.CreationDate,
        id:x.DocumentID
      })
    });
    return mappedData;

  }
  catch(err){
    console.log(err);
  }
  return [];
}

  deleteDocument = (id, callback) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            let documents = this.state.documents;
            callback();
            setTimeout(() => {
              documents = documents.filter((x) => x.id != id);
              this.setState({ documents });
            }, 1000);
          },
        },
      ],
      { cancelable: false }
    );
  };
  pickDocumentHandle = () => {
    DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: false,
    })
      .then((result) => {
        if (result.type === "success") {
          //console.log(result);
          this.setState({ file: result, filename: result.name });
        } else {
          this.refs.toast.show("hello world");
        }
      })
      .catch((er) => console.log(er));
  };
  render() {
    return (
      <View>
        <Text
          style={{ fontSize: GlobalStyle.SIZES.HEADING5 }}
          color="white"
          center
        >
          Documents
        </Text>
        {this.state.documents.length > 0 ? (
          this.state.documents.map((item, index) => (
            <DocumentItem
              name={item.name}
              number={index + 1}
              category={item.category}
              date={item.date}
              id={item.id}
              key={index}
              deleteItem={this.deleteDocument}
            />
          ))
        ) : (
          <View>
            <TextCustom>No document found</TextCustom>
          </View>
        )}
      </View>
    );
  }
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

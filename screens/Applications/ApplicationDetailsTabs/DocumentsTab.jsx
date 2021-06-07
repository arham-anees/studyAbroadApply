import { Text, theme } from "galio-framework";
import React from "react";
import { Alert } from "react-native";
import { StyleSheet, View } from "react-native";
import DocumentItem from "../../../components/Applications/DocumentItem";
import * as DocumentPicker from "expo-document-picker";
import GlobalStyle from "../../../GlobalStyles";
import TextCustom from "../../../components/TextCustom";
import ApplicationService from "../../../services/ApplicationService";
import Role from "../../../helper/Role";

class DocumentsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      documents: [],
      applicationId: 0,
      isLoading: true,
    };
  }

  componentDidMount() {
    let appId = this.props.applicationId;
    if (appId > 0) {
      ApplicationService.GetDocuments(appId)
        .then((x) => {
          this.setState({ documents: this.mapItems(x), isLoading: false });
        })
        .catch((err) => {
          // console.log(err);
          this.setState({ isLoading: false });
        });
    }
  }

  mapItems = (data) => {
    try {
      //console.log(data);
      let mappedData = [];
      data.forEach((x) => {
        mappedData.push({
          name: x.FileName,
          category: x.DocumentCategoryName,
          date: x.CreationDate,
          id: x.DocumentID,
          ApplicationID: x.ApplicationID,
        });
      });
      //console.log(mappedData);
      return mappedData;
    } catch (err) {
      //console.log(err);
    }
    return [];
  };

  deleteDocument = (id, callback) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to continue?",
      [
        {
          text: "Cancel",
          onPress: () => {},
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
      .catch((er) => {
        //console.log(er)
      });
  };
  render() {
    //console.log(this.props.roleId);
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
              ApplicationID={item.ApplicationID}
              key={index}
              deleteItem={this.deleteDocument}
              showDelete={this.props.roleId != Role.Institute}
            />
          ))
        ) : this.state.isLoading ? (
          <View>
            <TextCustom>Loading documents...</TextCustom>
          </View>
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

    paddingHorizontal: theme.SIZES.BASE,
  },
  button: {
    height: 30,
  },
});

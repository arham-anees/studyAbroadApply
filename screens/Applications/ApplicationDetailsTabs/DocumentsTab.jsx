import { Block, Button, Input, Text, theme } from "galio-framework";
import React from "react";
import { Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import DocumentItem from "../../../components/Applications/DocumentItem";
import * as DocumentPicker from "expo-document-picker";
import GlobalStyle from "../../../GlobalStyles";

const { width } = Dimensions.get("screen");
const documents = [
  { id: 1, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 2, name: "Passport", category: "Passport", date: "Oct 29 2020" },
  {
    id: 3,
    name: "Bachelors Degree / Transcript",
    category: "Bachelors Degree / Transcript",
    date: "Oct 29 2020",
  },
  { id: 4, name: "HSSC", category: "HSSC", date: "Oct 29 2020" },
  { id: 5, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 6, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 7, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 8, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 9, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 10, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 11, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 12, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
  { id: 13, name: "CV", category: "Curriculum Vitae", date: "Oct 29 2020" },
];
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
    };
  }
  pickDocumentHandle = () => {
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
  render = () => (
    <View>
      <Block style={styles.block}>
        <Text color="white" h5 center>
          New Document
        </Text>
        <Block>
          <Text color="white">Title</Text>
          <Input placeholder="Document Title" />
        </Block>

        <Block>
          <Text color="white">Category</Text>
          <View style={styles.dropdown}>
            <Picker mode={"dropdown"}>
              {documentTypes.map((item, index) => (
                <Picker.Item label={item.name} value={item.value} key={index} />
              ))}
            </Picker>
          </View>
        </Block>

        <Block>
          <Text color="white">File</Text>
          <Block row space="between" middle>
            <Text color="white">{this.state.file}</Text>
            <Button
              uppercase
              style={[styles.button, { width: width / 3 }]}
              onPress={() => this.pickDocumentHandle()}
            >
              File
            </Button>
          </Block>
        </Block>
        <Block row space={"between"} flex marginTop={10}>
          <Button
            uppercase
            color={GlobalStyle.bg.green}
            style={[styles.button, { width: (width - 30) / 2 }]}
          >
            Upload
          </Button>
          <Button
            uppercase
            color={GlobalStyle.bg.red}
            style={[styles.button, { width: (width - 30) / 2 }]}
          >
            Reset
          </Button>
        </Block>
      </Block>
      <Block style={styles.block}>
        <Text h5 color="white" center>
          Documents
        </Text>
        {documents.map((item, index) => (
          <DocumentItem
            name={item.name}
            number={index + 1}
            category={item.category}
            date={item.date}
            key={index}
          />
        ))}
      </Block>
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
  },
  button: {
    height: 30,
  },
});

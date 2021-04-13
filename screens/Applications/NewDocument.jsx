import { Block, Button, Input, Text, theme } from 'galio-framework';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Picker, StyleSheet } from 'react-native';
import DropDown from '../../components/DropDown';
import LabelledInput from '../../components/LabelledInput.Component';
import GlobalStyle from '../../GlobalStyles';
import * as DocumentPicker from 'expo-document-picker';


const { width } = Dimensions.get("screen");
const documentTypes = [
    { value: 1, name: "Bachelors Degree / Transcript" },
    { value: 2, name: "Passport" },
    { value: 3, name: "CV" },
    { value: 4, name: "Bachelors Degree / Transcript" },
  ];
const NewDocument = (props) => {
  const [title, setTitle]=useState('');
  const [category, setCategory]=useState(1);
  const [file, setFile] = useState(null);
  const { closeModal, submitModal } = props;
  const [titleError, setTitleError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const pickDoc = () => {
    DocumentPicker.getDocumentAsync({
      type: "*/*",
    })
      .then((x) => {
        console.log(x);
        if (x.type == "success") setFile(x);
      })
      .catch((err) => console.log(err));
  };

  const submit = () => {
    let isValid = true;
    if (file == null) {
      setFileError(true);
      isValid = false;
    }

    if (title.length == 0) {
      setTitleError(true);
      isValid = false;
    }

    let categoryName = documentTypes.filter((x) => x.value == category)[0].name;
    if (isValid) {
      console.log("submitting file", file);
      submitModal({
        title,
        category: categoryName,
        file,
        IsInstituteDocuments: props.offer ? 1 : 0,
      });
    }
  };
    return (
      <Block style={styles.container}>
        <Text center style={{fontSize:GlobalStyle.SIZES.HEADING5}}>
          New Document
        </Text>
        <LabelledInput
          placeholder="Document Title"
          label="Title"
          textColor={"#000"}
          value={title}
          onChange={(text) => {setTitle(text);setTitleError(false)}}
          error={titleError}
        />
        <Block>
          <DropDown
            list={documentTypes}
            label={"Category"}
            textColor={"#000"}
            selectedValue={category}
            onChange={(newCategory) => setCategory(newCategory)}
          />
        </Block>
        <Block>
          <Text>File</Text>
          <Block row space="between" middle>
            <Text style={[GlobalStyle.wrapText,{color:fileError?GlobalStyle.color.error:GlobalStyle.color.textDark}]}>{file?file.name:"No File Selected"}</Text>
            <Button style={{ width: width / 3, height: 30 }} onPress={()=>{pickDoc();setFileError(false)}}>File</Button>
          </Block>
        </Block>
        <Block row space={"between"} marginTop={10}>
          <Button
            style={[styles.button, { borderColor: "#000" }]}
            onPress={closeModal}
            color={"transparent"}
          >
            <Text>Close</Text>
          </Button>
          <Button
            style={styles.button}
            onPress={submit}
          >
            Submit
          </Button>
        </Block>
      </Block>
    );
}
 
export default NewDocument;


const styles = StyleSheet.create({
  container:{
    width:width/10*7,
  },
   button: {
      height: 35,
      width: width  / 3,
      marginTop:20
    },
  });
  
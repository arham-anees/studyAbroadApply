import { Block, Button, Checkbox, Input, Text, theme } from "galio-framework";
import React, { useState } from "react";
import { Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import DropDown from "../../../components/DropDown";
import Icons from "../../../constants/Icons";
import GlobalStyle from "../../../GlobalStyles";
import CustomIcon from "../../../Icons/BellIcon";
import DateTimePicker from "@react-native-community/datetimepicker";
import { KeyboardAvoidingView } from "react-native";
import TextCustom from '../../../components/TextCustom';
import ApplicationService from "../../../services/ApplicationService";

const { height, width } = Dimensions.get("screen");

const applicationStatus = [
  { name: "Application Status", value: 1 },
  { name: "Application Sent to Institute", value: 2 },
  { name: "Application Sent to Student Counsellor", value: 3 },
  { name: "New Application Application Submitted", value: 4 },
  { name: "Refund Acknowledged", value: 5 },
];

function Note({ sender, note, date }) {
  return (
    <Block 
    style={{
      borderWidth: 0.5,
      padding: 5,
      borderColor: "#fff",
      marginBottom: 10,
      borderRadius: 5,
    }}> 
    <Block
      row
      space="between"
    >
      <TextCustom>{sender} :</TextCustom>
      <TextCustom>{date}</TextCustom>
    </Block>
    <TextCustom
        style={{
          paddingLeft: 10,
          flex: 1,
          flexWrap: "wrap",
        }}
      >
        {note}
      </TextCustom>
    </Block>
  );
}


function NoticeBoardTab(props) {
  const [openNewNote, setOpenNewNote] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes]=useState([]);

  const [date, setDate] = useState(Date.now());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  let { application } = props;
  const { addFollowUp, updateStatus, addNote, handleUpdateStatusPress, applicationId } = props;

  const loadNotes=() => {
    try {
     
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    addFollowUp(selectedDate);
  };

  const handleAddNotePress = () => {
    if(newNote=="")return;
    addNote({ sender: "test", note: newNote });
    setOpenNewNote(false);
    setNewNote("");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  loadNotes();
  return (
    <KeyboardAvoidingView>
      <Block center style={styles.statusBar}>
        <Text color="white">New Application Submitted</Text>
      </Block>
      <View>
        <Block style={GlobalStyle.block}>
          <Text style={GlobalStyle.blockTitle}>Update Status</Text>
          <Block>
            <DropDown
              list={applicationStatus}
              label={"Application Status"}
              selectedValue={application.applicationStatus}
              onChange={updateStatus}
            />
            <Block center>
              <Button style={styles.updateStatusBtn} onPress={handleUpdateStatusPress} disable color={"#a0a0a0"}>Update Status</Button>
            </Block>
          </Block>
        </Block>
        <Block style={GlobalStyle.block}>
          <Text style={GlobalStyle.blockTitle}>Follow Up</Text>
          {application.followUps.map((x, index) => (
            <Block row space="between" key={index}>
              <TextCustom>Next Follow Up</TextCustom>
              <TextCustom>{new Date(x).toDateString()}</TextCustom>
            </Block>
          ))}
          <Block row center>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <Button style={styles.updateStatusBtn} onPress={showDatepicker} disable color={"#a0a0a0"}>
              Add Next Follow Up Date
            </Button>
          </Block>
        </Block>
        <Block style={GlobalStyle.block}>
          <Text style={GlobalStyle.blockTitle}>Application Notes</Text>
          <Block>
            {application.notes.map((x, index) => (
              <Note key={index} sender={x.sender} note={x.note} date={x.date} />
            ))}
          </Block>
          {openNewNote ? (
            <Block>
              <Checkbox
                color="white"
                label="Is visible to students"
                icon
                iconColor="black"
                labelStyle={{ color: "white" }}
              />
              <Block row middle space="between">
                <Block flex>
                  <Input
                    placeholder={"Note"}
                    value={newNote}
                    color={"black"}
                    onChangeText={(text) => setNewNote(text)}
                  />
                </Block>
                <Block style={styles.iconBlock} middle disabled={true}>
                  <CustomIcon
                    source={Icons.Send}
                    onPress={handleAddNotePress}
                  />
                </Block>
              </Block>
            </Block>
          ) : (
            <Block center >
              <Button  style={styles.updateStatusBtn} onPress={() => setOpenNewNote(true)}>Add Note</Button>
            </Block>
          )}
        </Block>
      </View>
    </KeyboardAvoidingView>
  );
}

export default NoticeBoardTab;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "green",
    width: width,
    borderRadius: 5,
  },
 
  dropdown: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS - 3,
    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.INPUT_HEIGHT,
    overflow: "hidden",
    marginTop: 10,
  },
  updateStatusBtn: {
    height: 30,
    width: width / 2,
    marginTop: 10,
  },
  iconBlock: {
    width: 50,
    marginLeft: 5,
    backgroundColor: "white",
    height: theme.SIZES.INPUT_HEIGHT,
    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
  },
  noteBody: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 5,
    marginBottom: 10,
  },
 
  newNote: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 5,
  },
});

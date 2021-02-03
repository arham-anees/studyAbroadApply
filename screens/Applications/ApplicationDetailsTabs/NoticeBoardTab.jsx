import { Block, Button, Input, Text, theme } from "galio-framework";
import React from "react";
import {  CheckBox, Dimensions } from "react-native";
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


class NoticeBoardTab extends React.Component {
constructor(props){
  super(props);
  this.state={
    data:Date.now(),
    mode:"date",
    show:false,
    statusName:"",
    notes:[],
    followUps:[],
    openNewNote:false,
    newNote:"",
    visibleToStudent:true
  }
}


mapNotes=(data)=>{
  try{
    var mappedData=[];
    data.forEach(element => {
      mappedData.push({
        sender:element.UserName,
        note:element.Message,
        date:element.CreationDate,
        isVisibleToStudents:element.IsVisableToStudents
      })
    });
    //console.log("mapped notes", mappedData);
    return mappedData;
  }
  catch(err){
    return [];
  }
}
componentDidMount() {
  let { application } = this.props;
  const { applicationId } = this.props;

  ApplicationService.GetApplicationNotes(applicationId)
  .then((x) => {
    //console.log("notes: ",JSON.stringify(x));
    var mappedData=this.mapNotes(x);
    this.setState({notes:mappedData});
  })
  .catch((err) => {
    console.log("ERROR: ",JSON.stringify(err));
  });


  ApplicationService.GetApplicationStatus(applicationId)
  .then(x=>{
    this.setState({statusName:x.ResponseMessage})
  })
  .catch(err=>{
    console.log(err)
  })
}
handleUpdateStatusPress=()=>{}
updateStatus=()=>{}
addFollowUp=()=>{}
addNote=()=>{}


  loadNotes=() => {
    try {
     
    } catch (err) {
      console.log(err);
    }
  };
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({show:Platform.OS === "ios"})
    //setShow();
    this.addFollowUp(selectedDate);
  };

  handleAddNotePress = () => {
    if(this.state.newNote=="")return;
    this.addNote({ sender: "test", note: newNote });
    this.setState({openNewNote:false, newNote:""});
  };

  showMode = (currentMode) => {
    this.setState({show:true, mode:currentMode});    
  };

  showDatepicker = () => {
    this.showMode("date");
  };

  handleCheckValChange=()=>{
    this.setState({visibleToStudent:!this.state.visibleToStudent})
  }
  render(){
  return (
    <KeyboardAvoidingView>
      <Block center style={styles.statusBar}>
        <TextCustom>{this.state.statusName}</TextCustom>
      </Block>
      <View>
        <Block style={GlobalStyle.block}>
          <Text style={GlobalStyle.blockTitle}>Update Status</Text>
          <Block>
            <DropDown
              list={applicationStatus}
              label={"Application Status"}
              selectedValue={0}
              onChange={this.updateStatus}
            />
            <Block center>
              <Button
                style={styles.updateStatusBtn}
                onPress={this.handleUpdateStatusPress}
                disable
                color={"#a0a0a0"}
              >
                Update Status
              </Button>
            </Block>
          </Block>
        </Block>
        <Block style={GlobalStyle.block}>
          <Text style={GlobalStyle.blockTitle}>Follow Up</Text>
          {this.state.followUps.map((x, index) => (
            <Block row space="between" key={index}>
              <TextCustom>Next Follow Up</TextCustom>
              <TextCustom>{new Date(x).toDateString()}</TextCustom>
            </Block>
          ))}
          <Block row center>
            {this.state.show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode={this.state.mode}
                is24Hour={true}
                display="default"
                onChange={this.onChange}
              />
            )}
            <Button
              style={styles.updateStatusBtn}
              onPress={this.showDatepicker}
              disable
              color={"#a0a0a0"}
            >
              Add Next Follow Up Date
            </Button>
          </Block>
        </Block>
        <Block style={GlobalStyle.block}>
          <Text style={GlobalStyle.blockTitle}>Application Notes</Text>
          <Block>
            {this.state.notes.length > 0 ? (
              this.state.notes.map((x, index) => (
                <Note
                  key={index}
                  sender={x.sender}
                  note={x.note}
                  date={x.date}
                />
              ))
            ) : (
              <TextCustom>
                Sorry, no notes found for this application
              </TextCustom>
            )}
          </Block>
          {this.state.openNewNote ? (
            <Block>
              <Block row style={{alignItems:"center"}}>
                <View
                  style={{ backgroundColor: "#fff", margin: 0, padding: 0, borderRadius:5, marginRight:5 }}
                >
                  <CheckBox
                    color="white"
                    label=""
                    iconColor="black"
                    onValueChange={this.handleCheckValChange}
                    value={this.state.visibleToStudent}
                    style={{ margin: 0, padding: 0 }}
                  />
                </View>
                <TextCustom>Is visible to students</TextCustom>
                </Block>
              <Block row middle space="between">
                <Block flex>
                  <Input
                    placeholder={"Note"}
                    value={this.state.newNote}
                    color={"black"}
                    onChangeText={(text) => this.setState({ newNote: text })}
                  />
                </Block>
                <Block style={styles.iconBlock} middle disabled={true}>
                  <CustomIcon
                    source={Icons.Send}
                    onPress={this.handleAddNotePress}
                  />
                </Block>
              </Block>
            </Block>
          ) : (
            <Block center>
              <Button
                style={styles.updateStatusBtn}
                onPress={() => this.setState({ openNewNote: true })}
                
              disable
              color={"#a0a0a0"}
              >
                Add Note
              </Button>
            </Block>
          )}
        </Block>
      </View>
    </KeyboardAvoidingView>
  );
          }
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

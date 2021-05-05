import { Block, Button, Input, Text, theme } from "galio-framework";
import React from "react";
import { Alert, CheckBox, Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import DropDown from "../../../components/DropDown";
import Icons from "../../../constants/Icons";
import GlobalStyle from "../../../GlobalStyles";
import CustomIcon from "../../../Icons/BellIcon";
import { KeyboardAvoidingView } from "react-native";
import TextCustom from "../../../components/TextCustom";
import ApplicationService from "../../../services/ApplicationService";
import Svg from "react-native-svg";
import { Rect } from "react-native-svg";
import LocalStorage from "../../../helper/LocalStorage";
import Role from "../../../helper/Role";
import Messages from "../../../helper/Messages";

const { height, width } = Dimensions.get("screen");

var applicationStatus = [];

function Note({ sender, note, date }) {
  try {
    sender = sender.trim();
  } catch {}
  try {
    note = note.trim();
  } catch {}
  return (
    <Block
      style={{
        borderWidth: 0.5,
        padding: 5,
        borderColor: "#fff",
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <Block row space="between">
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

function NoteSkeleton() {
  return (
    <Block>
      <Block
        style={{
          borderWidth: 0.5,
          padding: 5,
          borderColor: "#fff",
          marginBottom: 10,
          borderRadius: 5,
        }}
      >
        <Svg height={70} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
          <Rect x="0" y="30" rx="4" ry="4" width="100%" height="40" />
        </Svg>
      </Block>
    </Block>
  );
}

class NoticeBoardTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationId: 0,
      statusId: 0,
      date: new Date(),
      mode: "date",
      show: false,
      statusName: "",
      notes: [],
      followUps: [],
      openNewNote: false,
      newNote: "",
      visibleToStudent: true,
      isStatusUpdating: true,
      disableUpdateBtn: true,
      isLoadingNotes: true,
      settingNote: false,
      allowUpdateStatus: false,
      roleId: 0,
      isStudent: true,
    };
  }

  mapNotes = (data) => {
    try {
      var mappedData = [];
      data.forEach((element) => {
        mappedData.push({
          sender: element.UserName,
          note: element.Message,
          date: element.CreationDate,
          isVisibleToStudents: element.IsVisibleToStudents,
        });
      });
      // if (this.state.isStudent)
      //   return mappedData.some((x) => x.isVisibleToStudents);
      return mappedData;
    } catch (err) {
      return [];
    }
  };

  componentDidMount() {
    const { applicationId } = this.props;

    LocalStorage.GetUserInfo().then((x) => {
      //console.log(x);
      x = JSON.parse(x);
      if (x != null) this.setState({ isStudent: x.RoleID == Role.Student });
    });
    this.setState({ applicationId });

    ApplicationService.GetStatusList()
      .then((x) => {
        this._MapAppStatus(x);
      })
      .catch((err) => {
        console.log(err);
      });

    ApplicationService.GetApplicationStatus(applicationId)
      .then((x) => {
        //console.log(x);
        this.setState({
          statusName: x.ResponseMessage,
          isStatusUpdating: false,
        });
      })
      .catch((err) => {
        this.setState({ isStatusUpdating: false });
        console.log(err);
      });

    LocalStorage.GetUserInfo()
      .then((x) => {
        x = JSON.parse(x);
        if (
          x.RoleID == Role.Administrator ||
          x.RoleID == Role.Institute ||
          x.RoleID == Role.StudentCounselor
        ) {
          this.setState({ allowUpdateStatus: true, roleId: x.RoleID });
        } else {
          this.setState({ roleId: x.RoleID });
        }
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    this.loadNotes(applicationId);
  }

  handleUpdateStatusPress = () => {
    Alert.alert("Confirm", "Are you sure to update application status?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Update",
        onPress: () => {
          this.setState({ isStatusUpdating: true });
          ApplicationService.UpdateApplicationStatus(
            this.state.statusId,
            this.state.applicationId
          )
            .then((x) => {
              this.setState({
                statusName: x.ResponseMessage,
                isStatusUpdating: false,
              });
            })
            .catch((e) => {
              this.setState({ isStatusUpdating: false });
            });
        },
      },
    ]);
  };

  _MapAppStatus = (data) => {
    let mappedData = [];
    data.forEach((x) => {
      mappedData.push({
        name: x.Value,
        value: x.Key,
      });
    });
    applicationStatus = mappedData;
  };
  addFollowUp = () => {};
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({ show: Platform.OS === "ios" });
    //setShow();
    this.addFollowUp(selectedDate);
  };

  loadNotes = (applicationId) => {
    this.setState({ notes: [] });
    if (!applicationId) applicationId = this.state.applicationId;
    ApplicationService.GetApplicationNotes(applicationId)
      .then((x) => {
        var mappedData = this.mapNotes(x);
        this.setState({ notes: mappedData, isLoadingNotes: false });
      })
      .catch((err) => {
        this.setState({ isLoadingNotes: false, notes: [] });
        console.log("ERROR: ", JSON.stringify(err));
      });
  };

  handleAddNotePress = () => {
    if (this.state.settingNote) return;
    if (this.state.newNote == "") return;
    // this.addNote({ sender: "test", note: newNote });
    this.setState({ settingNote: true });
    ApplicationService.SetNewNote(
      this.state.applicationId.toString(),
      this.state.newNote,
      this.state.visibleToStudent ? 1 : 0
    )
      .then((x) => {
        if (x.ResponseStatus) {
          this.setState({
            newNote: "",
            visibleToStudent: true,
            openNewNote: false,
            settingNote: false,
          });
          this.loadNotes(this.state.applicationId.toString());
        } else {
          Alert.alert("Failed", Messages.FailToAddNote);
        }
      })
      .catch((err) => {
        this.setState({ settingNote: false });
        Alert.alert("Failed", Messages.FailToAddNote);
      });
  };

  showMode = (currentMode) => {
    this.setState({ show: true, mode: currentMode });
  };

  showDatePicker = () => {
    this.showMode("date");
  };

  handleCheckValChange = () => {
    this.setState({ visibleToStudent: !this.state.visibleToStudent });
  };

  updateStatus = (val) => {
    this.setState({ statusId: val });
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <Block center style={styles.statusBar}>
          <TextCustom>{this.state.statusName}</TextCustom>
        </Block>
        <View>
          {this.state.allowUpdateStatus ? (
            <Block style={GlobalStyle.block}>
              <Text style={GlobalStyle.blockTitle}>Update Status</Text>

              <Block>
                <DropDown
                  list={applicationStatus}
                  label={"Application Status"}
                  selectedValue={this.state.statusId}
                  onChange={this.updateStatus}
                  disabled={applicationStatus.length === 0}
                />
                {this.state.allowUpdateStatus ? (
                  <Block center>
                    <Button
                      style={styles.updateStatusBtn}
                      onPress={this.handleUpdateStatusPress}
                      // disable
                      color={
                        this.state.allowUpdateStatus ? "primary" : "#a0a0a0"
                      }
                      loading={this.state.isStatusUpdating ? true : false}
                    >
                      Update Status
                    </Button>
                  </Block>
                ) : null}
              </Block>
            </Block>
          ) : null}
          {/* <Block style={GlobalStyle.block}>
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
                onPress={this.showDatePicker}
                disable
                color={"#a0a0a0"}
              >
                Next Follow Up Date
              </Button>
            </Block>
          </Block> */}
          <Block style={GlobalStyle.block}>
            <Text style={GlobalStyle.blockTitle}>Application Notes</Text>
            <Block>
              {this.state.isLoadingNotes ? (
                <Block>
                  <NoteSkeleton />
                  <NoteSkeleton />
                  <NoteSkeleton />
                </Block>
              ) : this.state.notes.length > 0 ? (
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
                {this.state.roleId != Role.Student &&
                  this.state.roleId != Role.StudentCounselor && (
                    <Block row style={{ alignItems: "center" }}>
                      <View
                        style={{
                          backgroundColor: "#fff",
                          margin: 0,
                          padding: 0,
                          borderRadius: 5,
                          marginRight: 5,
                        }}
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
                  )}
                <Block>
                  <Block flex>
                    <Input
                      placeholder={"Note"}
                      value={this.state.newNote}
                      color={"black"}
                      onChangeText={(text) => this.setState({ newNote: text })}
                    />
                  </Block>
                  <Block center>
                    <Button
                      style={styles.updateStatusBtn}
                      onPress={this.handleAddNotePress}
                    >
                      Submit
                    </Button>
                  </Block>
                </Block>
              </Block>
            ) : (
              <Block center>
                <Button
                  style={styles.updateStatusBtn}
                  onPress={() => this.setState({ openNewNote: true })}
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

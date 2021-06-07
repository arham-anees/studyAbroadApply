import { Block } from "galio-framework";
import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/Background";
import Loading from "../../components/Loading";
import TextCustom from "../../components/TextCustom";
import { Images } from "../../constants";
import GlobalStyle from "../../GlobalStyles";
import CustomIcon from "../../Icons/BellIcon";
import ApplicationService from "../../services/ApplicationService";
import NotificationService from "../../services/NotificationService";
import NotificationItem from "./Notifications.Component";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      data: [],
      isLoading: false,
      dataToShow: [],
      startIndex: 0,
      endIndex: 25,
      length: 25,
      isDeleting: false,
    };
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      // this.fadeOut();
      // this.fadeIn();
      this.setState({ isLoading: true });
      NotificationService.GetNotificationsList({ IsRequiredCount: 0 })
        .then((x) => {
          //console.log(x);
          let data = [];
          x.forEach((item) => {
            data.push({
              id: item.NotificationID,
              name: item.Name,
              notificationText: item.Message,
              date: item.CreationDate,
              ApplicationID: item.ApplicationID,
              isRead: item.IsRead,
            });
          });
          data.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          this.setState({ data, isLoading: false });
          if (this.state.dataToShow.length == 0) {
            this.setState({
              dataToShow: data.slice(0, this.state.length),
              startIndex: 0,
              endIndex: this.state.length,
            });
          }
        })
        .catch((err) => {
          //console.log(err);
          this.setState({ isLoading: false });
        });
    });
  }

  nextPage = () => {
    let length = this.state.length;
    let currStartIndex = this.state.startIndex + length;
    let listLength = this.state.data.length;
    let endIndex = currStartIndex + length;
    if (endIndex > listLength) endIndex = listLength;
    let dataToShow = this.state.data.slice(currStartIndex, endIndex);
    this.setState({ startIndex: currStartIndex, endIndex, dataToShow });
  };
  previousPage = () => {
    let length = this.state.length;
    let currStartIndex = this.state.startIndex;
    let dataToShow = this.state.data.slice(
      currStartIndex - length,
      currStartIndex
    );
    if (currStartIndex - length >= 0)
      this.setState({
        startIndex: currStartIndex - length,
        endIndex: currStartIndex,
        dataToShow,
      });
  };
  componentWillUnmount() {
    // Remove the event listener
    try {
      this.focusListener.remove();
      //this.fadeOut();
    } catch {}
  }

  //#region ACTIONS
  deleteNotificationSilent = (id) => {
    NotificationService.DeleteNotification(id)
      .then((x) => {
        try {
          notifs = this.state.data;
          notifs = notifs.filter((x) => x.id != id);
          let dataToShow = notifs.slice(
            this.state.startIndex,
            this.state.endIndex
          );
          this.setState({ data: notifs, dataToShow });
        } catch {}
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  deleteNotification = (id, callback) => {
    Alert.alert(
      "Confirm Read",
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
            this.setState({ isDeleting: true });
            NotificationService.DeleteNotification(id)
              .then((x) => {
                callback();
                setTimeout(() => {
                  try {
                    notifs = this.state.data;
                    notifs = notifs.filter((x) => x.id != id);
                    let dataToShow = notifs.slice(
                      this.state.startIndex,
                      this.state.endIndex
                    );
                    this.setState({
                      data: notifs,
                      dataToShow,
                      isDeleting: false,
                    });
                  } catch {}
                }, 1000);
              })
              .catch((err) => {
                //console.log(err);
                this.setState({ isDeleting: false });
                Alert.alert(
                  "Failed",
                  "Failed to delete notification. Please try again later."
                );
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
  markAllAsRead = () => {
    Alert.alert(
      "Confirm",
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
            NotificationService.MarkAllNotificationAsRead()
              .then((x) => {
                //console.log(x);
                Alert.alert(
                  "Done",
                  "All notifications are marked as read successfully"
                );
              })
              .catch((err) => {
                //console.log(err);
                Alert.alert(
                  "Failed",
                  "Failed to mark all notifications as read. Please try again later."
                );
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
  //#endregion

  render = () => (
    <Background fullscreen>
      <View
        style={{
          minHeight: GlobalStyle.SIZES.PageHeight,
        }}
      >
        <Loading
          isActive={this.state.isLoading && this.state.data.length == 0}
        />
        <Loading isActive={this.state.isDeleting} />
        <Animated.View style={{ opacity: 1 }}>
          <View
            style={{ paddingHorizontal: GlobalStyle.SIZES.PageNormalPadding }}
          >
            <View style={GlobalStyle.block}>
              {this.state.data.length > 0 ? (
                <View style={styles.markAsRead}>
                  <TouchableOpacity onPress={this.markAllAsRead}>
                    <TextCustom>Mark All As Read</TextCustom>
                  </TouchableOpacity>
                </View>
              ) : null}

              {this.state.isLoading && this.state.data.length == 0 ? (
                <Block middle>
                  <TextCustom>Loading Notifications</TextCustom>
                </Block>
              ) : this.state.data.length == 0 ? (
                <Block middle>
                  <TextCustom>No Notifications</TextCustom>
                </Block>
              ) : (
                <FlatList
                  data={this.state.dataToShow}
                  renderItem={(item) => {
                    return (
                      <NotificationItem
                        item={item.item}
                        navigation={this.props.navigation}
                        key={item.index}
                        deleteNotification={this.deleteNotification}
                        deleteNotificationSilent={this.deleteNotificationSilent}
                      />
                    );
                  }}
                ></FlatList>
              )}
            </View>
            {this.state.data.length > 0 ? (
              <Block row center style={{ marginTop: 10, marginBottom: 40 }}>
                {this.state.startIndex > 0 ? (
                  <CustomIcon
                    source={Images.Backward}
                    onPress={this.previousPage}
                  />
                ) : null}
                <TextCustom
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  From {this.state.startIndex + 1} to{" "}
                  {this.state.endIndex > this.state.data.length
                    ? this.state.data.length
                    : this.state.endIndex}{" "}
                  off {this.state.data.length}
                </TextCustom>
                {this.state.endIndex < this.state.data.length ? (
                  <CustomIcon source={Images.Forward} onPress={this.nextPage} />
                ) : null}
              </Block>
            ) : null}
          </View>
        </Animated.View>
      </View>
    </Background>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: { margin: 10 },
  markAsRead: {
    padding: 0,
    marginLeft: "auto",
  },
});

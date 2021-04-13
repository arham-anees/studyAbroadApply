import React from "react";
import { View } from "react-native";
import ApplicationItem from "../../components/Applications/Application.Component";

import styles from "./Applications.Style";
import Background from "../../components/Background";
import { Animated } from "react-native";

import ApplicationService from "../../services/ApplicationService";
import LocalStorage from "../../helper/LocalStorage";
import TextCustom from "../../components/TextCustom";
import { Block, Input } from "galio-framework";
import CustomIcon from "../../Icons/BellIcon";
import { Images } from "../../constants";
import Loading from "../../components/Loading";

class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      appFullList: [],
      appList: [],
      startIndex: 0,
      endIndex: 10,
      length: 10,
      searchAppliation: "",
      isLoading: true,
    };
    this.navigation = this.props;
    this.fadeOut();
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 0,
    }).start();
  };
  MapApplicationData(data) {
    return data;
  }

  componentWillUnmount() {
    //this._unsubscribe();
  }
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.fadeIn();
      LocalStorage.GetAppFirstPage().then((x) => {
        try {
          let localData = JSON.parse(x);
          if (!localData) localData = [];
          this.setState({
            appList: localData,
            appFullList: localData,
            isLoading: localData.length <= 0,
          });
        } catch (err) {
          console.log(err);
        }
      });
      ApplicationService.BrowseApplications()
        .then((response) => {
          let result = response; // this.MapApplicationData(response);
          //debugger
          if (result != null) {
            LocalStorage.SetAppList(result);
            if (result != this.state.appList)
              this.setState({
                appList: result,
                appFullList: result,
                searchAppliation: "",
                isLoading: false,
              });
          }
        })
        .catch((err) => console.log(err));
    });
  }

  getApplicationList() {
    let apps = this.state.appList.slice(
      this.state.startIndex,
      this.state.endIndex
    );
    return this.MapApplicationData(apps);
  }

  nextPage = () => {
    let length = this.state.length;
    let currStartIndex = this.state.startIndex + length;
    let listLength = this.state.appList.length;
    let endIndex = currStartIndex + length;
    if (endIndex > listLength) endIndex = listLength;
    this.setState({ startIndex: currStartIndex, endIndex });
  };
  previousPage = () => {
    let length = this.state.length;
    let currStartIndex = this.state.startIndex;
    if (currStartIndex - length >= 0)
      this.setState({
        startIndex: currStartIndex - length,
        endIndex: currStartIndex,
      });
  };

  searchApplication = (searchTerm) => {
    this.setState({ searchAppliation: searchTerm });
    searchTerm = searchTerm.toLocaleLowerCase();
    let filtered = this.state.appFullList.filter(
      (x) =>
        (x.StudentName
          ? x.StudentName.toLocaleLowerCase().includes(searchTerm)
          : false) ||
        (x.InstitutionName
          ? x.InstitutionName.toLocaleLowerCase().includes(searchTerm)
          : false) ||
        (x.CreatedBy
          ? x.CreatedBy.toLocaleLowerCase().includes(searchTerm)
          : false)
    );
    this.setState({ appList: filtered });
  };

  render() {
    return (
      <Background>
        <Animated.View style={{ opacity: this.state.fadeAnim }}>
          <View style={styles.container}>
            <Loading isActive={this.state.isLoading} />
            <Block row middle space="between">
              <Block flex>
                <Input
                  placeholder={"Search Application"}
                  value={this.state.searchAppliation}
                  color={"black"}
                  onChangeText={(text) => this.searchApplication(text)}
                />
              </Block>
              {/* <Block style={[styles.iconBlock]} middle opacity={this.state.settingNote?0.5:1}>
                  <CustomIcon
                    source={Images.Search}
                    onPress={this.searchApplication}
                  />
                </Block> */}
            </Block>
            {this.state.appList.length > 0 ? (
              this.getApplicationList().map((item, index) => {
                return (
                  <ApplicationItem
                    props={{ ...this.props, item, index }}
                    key={index}
                  />
                );
              })
            ) : (
              <View>
                <TextCustom>No application found</TextCustom>
              </View>
            )}
            <Block row center style={{ marginTop: 10 }}>
              <CustomIcon
                source={Images.Backward}
                onPress={this.previousPage}
              />
              <TextCustom
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  textAlign: "center",
                  flex: 1,
                }}
              >
                From {this.state.startIndex + 1} to{" "}
                {this.state.endIndex > this.state.appList.length
                  ? this.state.appList.length
                  : this.state.endIndex}{" "}
                off {this.state.appList.length}
              </TextCustom>
              <CustomIcon source={Images.Forward} onPress={this.nextPage} />
            </Block>
          </View>
        </Animated.View>
      </Background>
    );
  }
}

export default Applications;

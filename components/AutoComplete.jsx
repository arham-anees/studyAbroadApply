import React from "react";
import { Block } from "galio-framework";
import LabelledInput from "./LabelledInput.Component";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import TextCustom from "./TextCustom";
import { StyleSheet, Text } from "react-native";
import SearchCourseUtils from "../screens/Courses/SearchCourse/SearchCourse.Utils";

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      inputOption: 0,
      filteredList: [],
      list: [],
      isFocused: false,
    };
  }

  componentDidMount() {
    const { list } = this.props;
    if (list && list.length > 0) {
      this.setState({ list });
    } else {
      this.setState({ list: [] });
    }
  }

  changeFocus = (val) => {
    this.setState({ isFocused: val });
  };

  changeText = (text) => {
    this.setState({ inputVal: text, inputOption: 0 });
    this.filterList(text);
    this.updateParent(0, text);
  };

  updateParent(id, value) {
    this.props.update(id, value);
  }

  filterList = (text) => {
    if (!text) text = this.state.inputVal;
    if (text.length == 0) {
      this.setState({ filteredList: [] });
      return;
    }
    if (this.props.label.includes("D")) {
      SearchCourseUtils.GetDisciplineAutoFill(this.props.CountryID, text)
        .then((x) => {
          this.setState({ filteredList: x.disciplinesList });
        })
        .catch((err) => console.log(err));
    } else {
      SearchCourseUtils.GetAutoFill(this.props.CountryID, text)
        .then((x) => {
          this.setState({ filteredList: x.coursesList });
        })
        .catch((err) => console.log(err));
    }
    return;
    // console.log("list", this.state.list);
    // console.log(this.state.inputVal.toLocaleLowerCase());
    let newList = this.state.list.filter((x) =>
      x.text.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
    this.setState({ filteredList: newList });
  };

  selectOption = (id) => {
    let item = this.state.filteredList.filter((x) => x.id == id)[0];
    this.setState({ inputVal: item.text, inputOption: id, filteredList: [] });
    this.updateParent(id, item.text);
  };

  render = () => {
    //console.log("this.state.filteredList.length", this.state);
    return (
      <Block>
        <LabelledInput
          label={this.props.label}
          value={this.state.inputVal}
          onChange={(text) => this.changeText(text)}
          inputStyle={{ marginBottom: 0 }}
          onFocus={() => this.changeFocus(true)}
          onBlur={() => this.changeFocus(false)}
        />
        {this.state.filteredList.length > 0 && this.state.isFocused ? (
          <Block style={styles.itemWrapper} key={1}>
            <Block>
              <ScrollView>
                {this.state.filteredList.map((x, i) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.selectOption(x.id)}
                    key={i}
                  >
                    <Text>{x.text}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Block>
          </Block>
        ) : null}
      </Block>
    );
  };
}

export default AutoComplete;

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: "#fffd",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    width: "95%",
    marginTop: -10,
    maxHeight: 150,
    shadowOpacity: 0.8,
    minHeight: 50,
    zIndex: 99999,
  },

  item: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    padding: 5,
  },
});

import React from "react";
import { Block } from "galio-framework";
import LabelledInput from "./LabelledInput.Component";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import TextCustom from "./TextCustom";
import { StyleSheet, Text } from "react-native";


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
    console.log("list", list);
    if (list.length > 0) {
      this.setState({ list });
    }
  }

  changeFocus = (val) => {
    this.setState({ isFocused: val });
  };

  changeText = (text) => {
    this.setState({ inputVal: text, inputOption: 0 });
    this.filterList();
    //console.log(this.props.updateCourse);
    this.updateParent(0, text);
  };

  updateParent(id, value) {
    this.props.update(id, value);
  }

  filterList = () => {
    if (this.state.inputVal.length == 0) {
      this.setState({ filteredList: [] });
      return;
    }
    console.log(this.state);
    let newList = [];
    console.log(this.state.list);
    this.state.list.forEach((x) => {
      if (x.text) {
        if (
          x.text
            .toLocaleLowerCase()
            .includes(this.state.inputVal.toLocaleLowerCase())
        )
          newList.push(x);
      }
    });
    this.setState({ filteredList: newList });
  };

  selectOption = (id) => {
    //console.log(text);
    let item = this.state.list.filter((x) => x.id == id)[0];
    this.setState({ inputVal: item.text, inputOption: id, filteredList: [] });
    this.updateParent(id, item.text);
  };

  render = () => (
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
          <Block style={styles.innerContainer}>
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
}

export default AutoComplete;


const styles=StyleSheet.create({
    itemWrapper:{
        backgroundColor:"#fffd",
        padding:5,
        borderRadius:5,
        marginBottom:10,
        width:"95%",
        marginTop:-10,
        maxHeight:150,
        shadowOpacity:0.8
    },
   
    item:{
        borderBottomColor:"grey",
        borderBottomWidth:1,
        padding:5
    }
})
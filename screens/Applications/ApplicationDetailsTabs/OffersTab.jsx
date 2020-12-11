import { Block, Button, Input, Text, theme } from "galio-framework";
import React from "react";
import { Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import DocumentItem from "../../../components/Applications/DocumentItem";
import GlobalStyle from "../../../GlobalStyles";


function OffersTab(props) {
  const {offers}=props.application;
const {deleteOffer}=props;
  return (
    <View style={{
      paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding}}>
      <Block style={GlobalStyle.block}>
        <Text style={{fontSize:GlobalStyle.SIZES.HEADING5}} color="white" center>
          Documents
        </Text>
        {offers.map((item, index) => (
          <DocumentItem
            name={item.name}
            number={index + 1}
            category={item.category}
            date={item.date}
            id={item.id}
            key={index}
            deleteItem={deleteOffer}
          />
        ))}
      </Block>
            <Block style={GlobalStyle.scrollBottomPadding}></Block>
    </View>
  );
}

export default OffersTab;

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

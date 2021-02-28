import { Block, Button, Input, Text, theme } from "galio-framework";
import React from "react";
import { Alert, Picker } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import DocumentItem from "../../../components/Applications/DocumentItem";
import GlobalStyle from "../../../GlobalStyles";
import ApplicationService from "../../../services/ApplicationService";


class OffersTab extends React.Component{
constructor(props){
  super(props);
  this.state={
    offers:[]
  }
}

componentDidMount() {
  let appId = this.props.applicationId;
  if (appId > 0) {
    ApplicationService.GetOffers(appId)
      .then((x) => {
        this.setState({offers:this.mapItems(x)});
      })
      .catch((err) => console.log(err));
  }
}


mapItems=(data)=>{
  try{
    let mappedData=[];
    data.forEach(x=>{
      mappedData.push({
        name:x.FileName,
        category:x.DocumentCategoryName,
        date:x.CreationDate,
        id:x.DocumentID
      })
    });
    return mappedData;

  }
  catch(err){
    console.log(err);
  }
  return [];
}
deleteOffer = (id, callback) => {
  Alert.alert(
    "Confirm Delete",
    "Are you sure you want to continue?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          let offers = this.state.offers;
          callback();
          setTimeout(() => {
            offers = offers.filter((x) => x.id != id);
            this.setState({ offers });
          }, 1000);
        },
      },
    ],
    { cancelable: false }
  );
};
render=()=> (
    <View>
        <Text style={{fontSize:GlobalStyle.SIZES.HEADING5}} color="white" center>
          Documents
        </Text>
        {this.state.offers.map((item, index) => (
          <DocumentItem
            name={item.name}
            number={index + 1}
            category={item.category}
            date={item.date}
            id={item.id}
            key={index}
            deleteItem={this.deleteOffer}
          />
        ))}
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

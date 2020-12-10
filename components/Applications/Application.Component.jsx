import { Block, Button, Card, Icon, Text } from "galio-framework";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {} from "@expo/vector-icons";
import Icons from "../../constants/Icons";
import CustomIcon from '../../Icons/BellIcon';
import HeaderNormal from "../HeadingNormal";
import GlobalStyle from "../../GlobalStyles";

function ApplicationItem({ props }) {
  const { item, navigation } = props;
  //console.log(item)
  let statusBackground=GlobalStyle.STATUSBACKGROUND[item.statusId-1]
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ApplicationDetails")}>
      <View
        title={(props.index + 1).toString()}
        titleColor="white"
        style={styles.container}
      >
        <View styles={styles.wrapper}>
          {/* <Block row middle>
            <Text h5 center style={styles.textWhite}>
               {item.name} 
              test
            </Text>
          </Block> */}
          <HeaderNormal>
            <Block row  center >
            <Text style={{fontSize:24}}>{item.name}</Text>
            
            </Block>
            </HeaderNormal>
          <Block left style={styles.body}>
            {/* <Block>
              <Text style={[styles.textWhite, styles.bgStatus]}>
                {item.status}
              </Text>
            </Block> */}
             <Block row center style={{ width: "100%" }}>
              <Text style={[styles.textWhite, {...styles.bgStatus,backgroundColor:statusBackground}]}>
                {item.status}
              </Text>
              </Block>
            <Block row middle>
              <Text style={styles.textWhite}>{item.course},</Text>
              <Text style={styles.textWhite}> {item.level}</Text>
            </Block>
            <Block row middle>
              <Text style={styles.textWhite}>{item.institute}</Text>
            </Block>
           
            <Block>
              {/* <Block row style={{ width: "100%" }}>
                <Text style={{...styles.textWhite,width:"50%"}}>Application Status: </Text>
                <Text style={[styles.textWhite, {...styles.bgStatus,backgroundColor:statusBackground}]}>
                {item.status}
              </Text>
              </Block> */} 
             
             
              <Block row style={{ width: "100%" }}>
                <Text style={{...styles.textWhite,width:"50%"}}>Application Date: </Text>
                <Text style={styles.textWhite}>{item.date}</Text>
              </Block>
              <Block row style={{ width: "100%" }}>
                <Text style={{...styles.textWhite,width:"50%"}}>Intake</Text>
                <Text style={styles.textWhite}>21 Feb</Text>
              </Block>
              <Block row  style={{ width: "100%" }}>
                <Text style={{...styles.textWhite,width:"50%"}}>Created By</Text>
                <Text style={styles.textWhite}>test user</Text>
              </Block>
              <Block row space="evenly" style={styles.footer}>
                <CustomIcon source={Icons.Email}/>
                <CustomIcon source={Icons.Settings}/>
              </Block>
            </Block>
          </Block>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ApplicationItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    margin: 10,
    backgroundColor: "#fff4",
    borderRadius: 10,
    paddingBottom: 10,
  },
  body:{
    paddingHorizontal:GlobalStyle.SIZES.PageNormalPadding
  },
  wrapper: {
    padding: 10,
    margin: 5,
  },
  textWhite: {
    color: "white",
  },
  bgStatus: {
    borderRadius: 5,
    padding:3,
    paddingHorizontal: 10,
    height:"100%",
    textAlignVertical:"center"
  },
  icon: {
    width: 20,
    color: "white",
  },
  footer: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "white",
    marginTop: 10,
    paddingTop: 10,
  },
});

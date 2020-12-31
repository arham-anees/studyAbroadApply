import { Block, Button, Card, Icon, Text } from "galio-framework";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icons from "../../constants/Icons";
import CustomIcon from "../../Icons/BellIcon";
import GlobalStyle from "../../GlobalStyles";
import TextCustom from "../../components/TextCustom";

function ApplicationItem({ props }) {
  const { item, navigation } = props;
  let statusBackground = GlobalStyle.STATUSBACKGROUND[item.statusId - 1];
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ApplicationDetails")}>
      <View
        title={(props.index + 1).toString()}
        titleColor="white"
        style={GlobalStyle.block}
      >
        <TextCustom style={GlobalStyle.blockTitle}>{item.name}</TextCustom>
        <Block style={styles.bgStatus}>
          <TextCustom
            style={{ backgroundColor: statusBackground, textAlign:"center",borderRadius: 2 }}
          >
            {item.status}
          </TextCustom>
        </Block>
        <Block left>
          <Block row middle>
            <TextCustom>{item.course},</TextCustom>
            <TextCustom> {item.level}</TextCustom>
          </Block>
          <Block row middle>
            <TextCustom>{item.institute}</TextCustom>
          </Block>

          <Block>
            <Block row>
              <TextCustom style={styles.title}>Application Date: </TextCustom>
              <TextCustom>{item.date}</TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>Intake</TextCustom>
              <TextCustom>21 Feb</TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>Created By</TextCustom>
              <TextCustom>test user</TextCustom>
            </Block>
            <Block row space="evenly" style={styles.footer}>
              <CustomIcon source={Icons.Email} />
              <CustomIcon source={Icons.Settings} />
            </Block>
          </Block>
        </Block>
      </View>
    </TouchableOpacity>

    //   <TouchableOpacity onPress={() => navigation.navigate("ApplicationDetails")}>
    //     <View
    //       title={(props.index + 1).toString()}
    //       titleColor="white"
    //       style={styles.container}
    //     >
    //       <View styles={styles.wrapper}>
    //         {/* <Block row middle>
    //           <Text h5 center style={styles.textWhite}>
    //              {item.name}
    //             test
    //           </Text>
    //         </Block> */}
    //         <HeaderNormal>
    //           <Block row  center >
    //           <Text style={{fontSize:GlobalStyle.SIZES.HEADING5}}>{item.name}</Text>
    //           </Block>
    //           </HeaderNormal>
    //         <Block left style={styles.body}>
    //           {/* <Block>
    //             <Text style={[styles.textWhite, styles.bgStatus]}>
    //               {item.status}
    //             </Text>
    //           </Block> */}
    //            <Block row center style={{ width: "100%" }}>
    //             <Text style={[styles.textWhite, {...styles.bgStatus,backgroundColor:statusBackground}]}>
    //               {item.status}
    //             </Text>
    //             </Block>
    //           <Block row middle>
    //             <Text style={styles.textWhite}>{item.course},</Text>
    //             <Text style={styles.textWhite}> {item.level}</Text>
    //           </Block>
    //           <Block row middle>
    //             <Text style={styles.textWhite}>{item.institute}</Text>
    //           </Block>
    //           <Block>
    //             {/* <Block row style={{ width: "100%" }}>
    //               <Text style={{...styles.textWhite,width:"50%"}}>Application Status: </Text>
    //               <Text style={[styles.textWhite, {...styles.bgStatus,backgroundColor:statusBackground}]}>
    //               {item.status}
    //             </Text>
    //             </Block> */}
    //             <Block row style={{ width: "100%" }}>
    //               <Text style={{...styles.textWhite,width:"50%"}}>Application Date: </Text>
    //               <Text style={styles.textWhite}>{item.date}</Text>
    //             </Block>
    //             <Block row style={{ width: "100%" }}>
    //               <Text style={{...styles.textWhite,width:"50%"}}>Intake</Text>
    //               <Text style={styles.textWhite}>21 Feb</Text>
    //             </Block>
    //             <Block row  style={{ width: "100%" }}>
    //               <Text style={{...styles.textWhite,width:"50%"}}>Created By</Text>
    //               <Text style={styles.textWhite}>test user</Text>
    //             </Block>
    //             <Block row space="evenly" style={styles.footer}>
    //               <CustomIcon source={Icons.Email}/>
    //               <CustomIcon source={Icons.Settings}/>
    //             </Block>
    //           </Block>
    //         </Block>
    //       </View>
    //     </View>
    //   </TouchableOpacity>
    //
  );
}

export default ApplicationItem;

const styles = StyleSheet.create({
  bgStatus: {
    
    paddingVertical: 3,
    width: "100%",
    textAlignVertical: "center",
    textAlign:"center"
  },
  footer: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "white",
    marginTop: 10,
    paddingTop: 10,
  },
  title: {
    width: "50%",
    fontWeight: "bold",
  },
});

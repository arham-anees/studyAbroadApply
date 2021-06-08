import { Block, Button, Card, Icon, Text, theme } from "galio-framework";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icons from "../../constants/Icons";
import CustomIcon from "../../Icons/BellIcon";
import GlobalStyle from "../../GlobalStyles";
import TextCustom from "../../components/TextCustom";
import { argonTheme } from "../../constants";

function ApplicationItem({ props }) {
  const { item, navigation } = props;
  let statusBackground = GlobalStyle.STATUSBACKGROUND[0];
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("ApplicationDetails", { appId: item.ApplicationID })
      }
    >
      <View
        title={(props.index + 1).toString()}
        titleColor="white"
        style={GlobalStyle.block}
      >
        <TextCustom style={GlobalStyle.blockTitle}>
          {item.StudentName}
        </TextCustom>
        <Block style={styles.bgStatus}>
          <TextCustom
            style={{
              backgroundColor: statusBackground,
              textAlign: "center",
              borderRadius: 2,
            }}
          >
            {item.StatusName}
          </TextCustom>
        </Block>
        <Block left>
          <Block
            row
            middle
            style={{
              flexWrap: "wrap",
              minWidth: "100%",
            }}
          >
            <TextCustom style={{ textAlign: "center" }}>
              {item.CourseName},
            </TextCustom>
            <TextCustom> {item.LevelName}</TextCustom>
          </Block>
          <Block row middle>
            <TextCustom>{item.InstitutionName}</TextCustom>
          </Block>

          <Block>
            <Block row>
              <TextCustom style={styles.title}>Application Date: </TextCustom>
              <TextCustom>{item.ApplicationDate}</TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>Intake</TextCustom>
              <TextCustom>{item.InTakeName}</TextCustom>
            </Block>
            <Block row>
              <TextCustom style={styles.title}>Created By</TextCustom>
              <TextCustom style={styles.text}>
                {item.CreatedBy} ({item.RoleName})
              </TextCustom>
            </Block>
            <Block row space="evenly" style={styles.footer}>
              <View>
                <CustomIcon source={Icons.Email} />
                {item.TotalUnread > 0 ? (
                  <Block middle style={styles.notify}></Block>
                ) : null}
              </View>
              <CustomIcon source={Icons.Settings} />
            </Block>
          </Block>
        </Block>
      </View>
    </TouchableOpacity>
  );
}

export default ApplicationItem;

const styles = StyleSheet.create({
  bgStatus: {
    paddingVertical: 3,
    width: "100%",
    textAlignVertical: "center",
    textAlign: "center",
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
  text: {
    width: "50%",
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 1.5,
    width: theme.SIZES.BASE / 1.5,
    position: "absolute",
    top: 0,
    right: -5,
  },
});

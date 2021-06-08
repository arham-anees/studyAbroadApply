import { Block, Text } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalStyle from "../../GlobalStyles";
import TextCustom from "../TextCustom";
import AppStatusByCountryDoughnutChart from "./AppStatusByCountry.DoughnutChart";
// import { Text } from "galio-framework";
const Colors = [
  GlobalStyle.STATUSCOLOR.InProgress,
  GlobalStyle.STATUSCOLOR.NewApplication,
  GlobalStyle.STATUSCOLOR.SentToInstitute,
  GlobalStyle.STATUSCOLOR.VisaIssued,
];
function AppStatusByCountry(props) {
  const { data } = props;
  let inProgressCount = 0;
  let newAppsCount = 0;
  let pendingAppsCount = 0;
  let visaIssuedCount = 0;
  try {
    inProgressCount = data.filter((x) => x.key == 0)[0].amount;
  } catch {}
  try {
    newAppsCount = data.filter((x) => x.key == 1)[0].amount;
  } catch {}
  try {
    pendingAppsCount = data.filter((x) => x.key == 2)[0].amount;
  } catch {}
  try {
    visaIssuedCount = data.filter((x) => x.key == 3)[0].amount;
  } catch {}
  return (
    <View>
      <View style={GlobalStyle.block}>
        <View style={Styles.card}>
          {!props.isLoading && props.data.length == 0 ? (
            <View style={Styles.centerAll}>
              <TextCustom>Not enough data for graph</TextCustom>
            </View>
          ) : (
            <AppStatusByCountryDoughnutChart data={data} />
          )}
          <View style={Styles.legendContainer}>
            <Block row space={"between"}>
              <Block row>
                <View
                  style={{ ...Styles.color, backgroundColor: Colors[0] }}
                ></View>
                <Text style={Styles.legendTitle}>
                  In Progress ({inProgressCount})
                </Text>
              </Block>
              <Text style={Styles.legendTitle}></Text>
            </Block>
            <Block row space={"between"}>
              <Block row>
                <View
                  style={{ ...Styles.color, backgroundColor: Colors[1] }}
                ></View>
                <Text style={Styles.legendTitle}>
                  New Application Submitted ({newAppsCount})
                </Text>
              </Block>
              <Text style={Styles.legendTitle}></Text>
            </Block>
            <Block row space={"between"}>
              <Block row>
                <View
                  style={{ ...Styles.color, backgroundColor: Colors[2] }}
                ></View>
                <Block row center space={"between"}>
                  <Text style={Styles.legendTitle}>
                    Pending With Institute ({pendingAppsCount})
                  </Text>
                </Block>
              </Block>
              <Text style={Styles.legendTitle}></Text>
            </Block>
            <Block row space={"between"}>
              <Block row>
                <View
                  style={{ ...Styles.color, backgroundColor: Colors[3] }}
                ></View>
                <Text style={Styles.legendTitle}>
                  Visa Issued ({visaIssuedCount})
                </Text>
              </Block>
              <Text style={Styles.legendTitle}></Text>
            </Block>
          </View>
        </View>
      </View>
    </View>
  );
}
export default AppStatusByCountry;
const Styles = StyleSheet.create({
  card: {
    // backgroundColor: GlobalStyle.color.background,
    margin: 10,
    borderRadius: 20,
    paddingVertical: 10,
  },
  color: {
    height: 15,
    width: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  legendContainer: {},
  legend: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendTitle: {
    color: GlobalStyle.color.textLight,
  },
  centerAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

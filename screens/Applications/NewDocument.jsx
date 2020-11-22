import { Block, Button, Input, Text, theme } from 'galio-framework';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { Picker, StyleSheet } from 'react-native';
import { View } from 'react-native';
import LabelledInput from '../../components/LabelledInput.Component';
import { Images } from '../../constants';
import GlobalStyle from '../../GlobalStyles';
const { width, height } = Dimensions.get("screen");
const documentTypes = [
    { value: 1, name: "Bachelors Degree / Transcript" },
    { value: 2, name: "Passport" },
    { value: 3, name: "CV" },
    { value: 4, name: "Bachelors Degree / Transcript" },
  ];
const NewDocument = () => {
    return (
      <SafeAreaView>
        <ImageBackground
          source={Images.Onboarding}
          style={{ height, width, zIndex: 1 }}
        >
            <View>
          <Block style={styles.block}>
            <Text color={GlobalStyle.color.textLight} h5 center>
              New Document
            </Text>
            <LabelledInput placeholder="Document Title" label="Title" />

            <Block>
              <Text color={GlobalStyle.color.textLight}>Category</Text>
              <View style={styles.dropdown}>
                <Picker mode={"dropdown"}>
                  {documentTypes.map((item, index) => (
                    <Picker.Item
                      label={item.name}
                      value={item.value}
                      key={index}
                    />
                  ))}
                </Picker>
              </View>
            </Block>
            <Block>
              <Text color={GlobalStyle.color.textLight}>File</Text>
              <Block row space="between" middle>
                <Text color={GlobalStyle.color.textLight} style={GlobalStyle.wrapText}>./file.pdf/le.pdf</Text>
                <Button style={{ width: width / 3, height: 30 }}>File</Button>
              </Block>
            </Block>
            <Block row space={"between"} flex marginTop={10}>
              <Button color={GlobalStyle.bg.green} style={styles.button}>
                Upload
              </Button>
              <Button color={GlobalStyle.bg.red} style={styles.button}>
                Reset
              </Button>
            </Block>
          
          </Block>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
}
 
export default NewDocument;


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
      margin: 10,
      padding: 10,
      borderRadius: 5,
    },
    button: {
      height: 50,
      width: width  / 3,
      marginTop:20
    },
  });
  
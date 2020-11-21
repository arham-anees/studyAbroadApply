import React from 'react';
import { StyleSheet, View } from 'react-native';


class NewApplication extends React.Component{
    render(){
        return <View>
            <Block style={styles.block}>
        <Text color="white" h5 center>
          New Document
        </Text>
        <Block>
          <Text color="white">Title</Text>
          <Input placeholder="Document Title" />
        </Block>

        <Block>
          <Text color="white">Category</Text>
          <View style={styles.dropdown}>
            <Picker mode={"dropdown"}>
              {documentTypes.map((item, index) => (
                <Picker.Item label={item.name} value={item.value} key={index} />
              ))}
            </Picker>
          </View>
        </Block>

        <Block>
          <Text color="white">File</Text>
          <Block row space="between" middle>
            <Text color="white">{this.state.file}</Text>
            <Button
              uppercase
              style={[styles.button, { width: width / 3 }]}
              onPress={() => this.pickDocumentHandle()}
            >
              File
            </Button>
          </Block>
        </Block>
        <Block row space={"between"} flex marginTop={10}>
          <Button
            uppercase
            color={GlobalStyle.bg.green}
            style={[styles.button, { width: (width - 30) / 2 }]}
          >
            Upload
          </Button>
          <Button
            uppercase
            color={GlobalStyle.bg.red}
            style={[styles.button, { width: (width - 30) / 2 }]}
          >
            Reset
          </Button>
        </Block>
      </Block>
        </View>
    }
}


export default NewApplication;

const styles=StyleSheet.create({
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
        
        paddingHorizontal: theme.SIZES.BASE 
      },
      button: {
        height: 30,
      },
})
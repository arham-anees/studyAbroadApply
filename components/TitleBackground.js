import { Block, Text } from 'galio-framework';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../constants/Theme';

function TitleBackground(props){
return (
  <View style={styles.wrapper}>
        {props.children}
  </View>
);
}

export default TitleBackground;

const styles = StyleSheet.create({
    wrapper:{
        minHeight:40,
        borderRadius:5,
        marginBottom:10,
        
    }
})
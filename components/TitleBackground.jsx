import { Block } from 'galio-framework';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Theme from '../constants/Theme';

function TitleBackground(props){
return (
  <View style={styles.wrapper}>
    <LinearGradient
      // Button Linear Gradient
      colors={[Theme.COLORS.SECONDARY,Theme.COLORS.SECONDARY]}
      style={{ borderRadius: 5,paddingHorizontal:20 }}
    >
        {props.children}
    </LinearGradient>
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
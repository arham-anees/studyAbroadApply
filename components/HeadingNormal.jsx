import { Text } from 'galio-framework';
import React from 'react';
import { StyleSheet } from 'react-native';
import GlobalStyle from '../GlobalStyles';
import TitleBackground from './TitleBackground';

function HeaderNormal(props){
    const children=props.children
    return <TitleBackground>{children}
    </TitleBackground>
}

export default HeaderNormal;

const styles=StyleSheet.create({
    heading:{
        fontSize:GlobalStyle.SIZES.HeadingNormalHeight,
        marginTop:5,
        paddingHorizontal:20
    }
})
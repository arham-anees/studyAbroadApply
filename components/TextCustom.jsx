import React from 'react';
import {Text} from 'galio-framework';
import GlobalStyle from '../GlobalStyles';

function TextCustom(props){
    return <Text color={GlobalStyle.color.textLight} {...props}>{props.children}</Text>
}

export default TextCustom;
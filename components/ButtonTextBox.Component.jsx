import { Text } from 'galio-framework';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import GlobalStyle from '../GlobalStyles';
function ButtonTextBox(props){
    const {onPress, label,value}=props;
    return (
      <>
        <Text style={{ color: GlobalStyle.color.textLight }}>{label}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 13,
            borderRadius: 8,
            marginVertical: 5,
          }}
          onPress={onPress}
        >
          <Text>{value?value:label}</Text>
        </TouchableOpacity>
      </>
    );
}

export default ButtonTextBox;
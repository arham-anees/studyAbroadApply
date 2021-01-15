import { Block, theme } from 'galio-framework';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { argonTheme } from '../constants';
import Icons from '../constants/Icons';
import Theme from '../constants/Theme';

const CustomIconImage=(props)=>{
  return  <Image
  resizeMode="contain"
  style={{
    height: Theme.ICONS.DEFAULT.WIDTH,
    width: Theme.ICONS.DEFAULT.HEIGHT,
  }}
  {...props}
/>
}
const CustomIcon = (props) => {
    const onPress=props.onPress;
    return (
      <React.Fragment>
        {onPress != null ? (
          <TouchableOpacity onPress={onPress}>
           <CustomIconImage {...props}/>
          </TouchableOpacity>
        ) : (
          <>
          <CustomIconImage {...props}/>

</>
        )}
      </React.Fragment>
    );
}
 
export default CustomIcon;
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Icons from '../constants/Icons';
import Theme from '../constants/Theme';

const CustomIcon = (props) => {
    const onPress=props.onPress;
    return (
      <React.Fragment>
        {onPress != null ? (
          <TouchableOpacity onPress={onPress}>
            <Image
              resizeMode="contain"
              style={{
                height: Theme.ICONS.DEFAULT.WIDTH,
                width: Theme.ICONS.DEFAULT.HEIGHT,
              }}
              {...props}
            />
          </TouchableOpacity>
        ) : (
          <Image
            resizeMode="contain"
            style={{
              height: Theme.ICONS.DEFAULT.WIDTH,
              width: Theme.ICONS.DEFAULT.HEIGHT,
            }}
            {...props}
          />
        )}
      </React.Fragment>
    );
}
 
export default CustomIcon;
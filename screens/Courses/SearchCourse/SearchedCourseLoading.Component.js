import { Block,Button } from 'galio-framework';
import React from 'react';
import Svg from 'react-native-svg';
import { Rect } from 'react-native-svg';
import TextCustom from '../../../components/TextCustom';
import GlobalStyle from '../../../GlobalStyles';
import styles from './SearchCourse.Styles';

function SearchedCourseLoading(props){
    return (
      <Block style={GlobalStyle.block}>
        <Block style={GlobalStyle.blockTitle}>
          <Svg height={40} width="100%" fill={"grey"}>
            <Rect x="0" y="0" rx="4" ry="4" width="100%" height="30" />
          </Svg>
        </Block>
        <Svg height={30} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
        </Svg>
      
        <Svg height={25} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
        </Svg>
      
        <Svg height={25} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
        </Svg>
      
        <Svg height={25} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
        </Svg>
      
        <Svg height={25} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
        </Svg>
      
        <Svg height={25} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
        </Svg>
      
        <Svg height={25} width="100%" fill={"grey"}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height="20" />
        </Svg>
      </Block>
    );
}

export default SearchedCourseLoading;
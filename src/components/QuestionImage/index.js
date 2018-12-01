/** 
 * React-Native `<Text />` component does not scale the text based on the device size.  
 * This component does, and it also provides a nice interface for using custom fonts and style.  
 */
import React from 'react';
import { Image } from 'react-native';
import style from './index.style';
import CacheableImage from '../../containers/CacheableImage';

const QuestionImage = props => {
  const { imageName, ...otherProps } = props;
  return <CacheableImage style={style.image} source={imageName} resizeMode="contain"/>;
};

export default QuestionImage;

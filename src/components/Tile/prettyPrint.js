import React from 'react';
import { Text } from 'react-native-animatable';
import CustomText from '../CustomText';
import formulaParser from './formulaParser';
import fractionParser from './fractionParser';
import binomialParser from './binomialParser';
import squareRootParser from './squareRootParser';
import italicParser from './italicParser';
import styles from './index.style';

const prettyPrint = text => {
  if (!text) {
    return <Text />;
  }
  if (text.indexOf('*') > -1 && text.indexOf('#') > -1) {
    return fractionParser(text);
  }
  if (text.indexOf('#') > -1) {
    return fractionParser(text);
  }
  if (text.indexOf('@') > -1) {
    return binomialParser(text);
  }
  if (text.indexOf('$') > -1) {
    return squareRootParser(text);
  }
  if (text.indexOf('*') > -1 && text.indexOf('@') > -1) {
    return binomialParser(text);
  }
  if (text.indexOf('*') > -1 && !text.indexOf('#') > -1) {
    return formulaParser(text);
  }
  if (text.indexOf('€') > -1) {
    return italicParser(text);
  }
  return (
    <CustomText withShadow={true} style={styles.text}>
      {text}
    </CustomText>
  );
};

export default prettyPrint;

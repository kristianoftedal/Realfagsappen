import React from 'react';
import { View } from 'react-native';
import CustomText from '../../components/CustomText';
import uuid from 'uuid';
import formulaParser from './formulaParser';
import styles from './index.style';

const squareRootParser = question => {
  if (question == null) return <CustomText />;
  const parts = question.split('$');
  const restructuredCustomText = [];
  let postSquareRoot = -1;
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].indexOf('√') > -1) {
      const tempParts = parts[i].split('√');
      if (tempParts[0] === '') {
        restructuredCustomText.push(<CustomText key={uuid.v4()} withShadow={true} style={styles.squareRoot}>√</CustomText>);
        restructuredCustomText.push(<CustomText key={uuid.v4()} withShadow={true} style={styles.text}>{formulaParser(tempParts[1])}</CustomText>);
      } else {
        restructuredCustomText.push(<CustomText key={uuid.v4()} withShadow={true} style={styles.text}>{formulaParser(tempParts[0])}</CustomText>);
        restructuredCustomText.push(<CustomText key={uuid.v4()} withShadow={true} style={styles.squareRoot}>√</CustomText>);
      }
      postSquareRoot = i + 2;
    } else if (parts[i] === '') {
      // do nothing
    } else if (i < postSquareRoot) {
      restructuredCustomText.push(
        <View style={styles.postSquareRoot}>
          <CustomText key={uuid.v4()} withShadow={true} style={styles.postSquareRoot}>{formulaParser(parts[i])}</CustomText>
        </View>
        );
    } else {
      restructuredCustomText.push(<CustomText key={uuid.v4()} withShadow={true} style={styles.text}>{formulaParser(parts[i])}</CustomText>);
    }
  }
  return restructuredCustomText;
};

export default squareRootParser;

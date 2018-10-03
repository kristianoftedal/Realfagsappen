import React from 'react';
import { View, Text } from 'react-native';
import CustomText from '../CustomText';
import formulaParser from './formulaParser';
import uuid from 'uuid';
import styles from './index.style';

const fractionParser = question => {
  if (question == null) return <Text />;

  const parts = question.split('#');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].indexOf('/') > -1) {
      const fraction = parts[i].split('/');
      const parsedPart0 = formulaParser(fraction[0], 10);
      const parsedPart1 = formulaParser(fraction[1], 10);

      restructuredText.push(
        <View key={uuid.v4()}>
          <View style={styles.fractionTop}>
            <Text key={uuid.v4()} withShadow={true}>
              {parsedPart0}
            </Text>
          </View>
          <View style={styles.fractionBottom}>
            <Text key={uuid.v4()} withShadow={true}>
              {parsedPart1}
            </Text>
          </View>
        </View>
      );
    } else {
      restructuredText.push(
        <CustomText key={uuid.v4()} withShadow={true} style={styles.text}>
          {formulaParser(parts[i])}
        </CustomText>
      );
    }
  }
  return restructuredText;
};

export default fractionParser;

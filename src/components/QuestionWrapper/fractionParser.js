import React from 'react';
import { View, Text } from 'react-native';
import CustomText from '../CustomText';
import uuid from 'uuid';
import styles from './index.style';
import formulaParser from './formulaParser';

const fractionParser = (question, difficulty) => {
  if (question == null) return <Text />;

  const parts = question.split('#');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].indexOf('/') > -1) {
      const fraction = parts[i].split('/');
      const parsedPart0 = formulaParser(fraction[0], 8, 11);
      const parsedPart1 = formulaParser(fraction[1], 8, 11);
      restructuredText.push(
        <View key={uuid.v4()}>
          <View key={uuid.v4()}  style={styles.fractionTop}>
              {parsedPart0}
          </View>
          <View key={uuid.v4()}  style={styles.fractionBottom}>
            <Text key={uuid.v4()} withShadow={true}>
              {parsedPart1}
            </Text>
          </View>
        </View>
      );
    } else {
      restructuredText.push(
          formulaParser(parts[i])
      );
    }
  }
  return restructuredText.push(<Text style={styles.text}>{difficulty}</Text>);
};

export default fractionParser;


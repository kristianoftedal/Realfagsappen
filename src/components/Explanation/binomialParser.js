import React from 'react';
import { View, Text } from 'react-native';
import CustomText from '../CustomText';
import uuid from 'uuid';
import styles from './index.style';

const fractionParser = question => {
  if (question == null) return <Text />;

  const parts = question.split('#');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].indexOf('/') > -1) {
      const fraction = parts[i].split('/');
      restructuredText.push(
        <View>
          <View style={styles.binomial}>
            <Text key={uuid.v4()} size={14} style={styles.top}>
              {fraction[0]}
            </Text>
          </View>
          <View>
            <Text key={uuid.v4()} size={14} style={styles.bottom}>
              {Text[1]}
            </Text>
          </View>
        </View>
      );
    } else {
      restructuredText.push(
        <CustomText key={uuid.v4()} style={styles.text}>
          {parts[i]}
        </CustomText>
      );
    }
  }
  return restructuredText;
};

export default fractionParser;

import React from 'react';
import { View, Text } from 'react-native';
import uuid from 'uuid';
import formulaParser from './formulaParser';
import styles from './index.style';

const squareRootParser = question => {
  if (question == null) return <Text />;
  const parts = question.split('$');
  const restructuredText = [];
  let postSquareRoot = -1;
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].indexOf('√') > -1) {
      const tempParts = parts[i].split('√');
      if (tempParts[0] === '') {
        restructuredText.push(<Text key={uuid.v4()} style={styles.squareRoot}>√</Text>);
        restructuredText.push(<Text key={uuid.v4()} style={styles.text}>{formulaParser(tempParts[1])}</Text>);
      } else {
        restructuredText.push(<Text key={uuid.v4()} style={styles.text}>{formulaParser(tempParts[0])}</Text>);
        restructuredText.push(<Text key={uuid.v4()} style={styles.squareRoot}>√</Text>);
      }
      postSquareRoot = i + 2;
    } else if (parts[i] === '') {
      // do nothing
    } else if (i < postSquareRoot) {
      restructuredText.push(
        <View style={styles.postSquareRoot}>
          <Text key={uuid.v4()} style={styles.postSquareRoot}>{formulaParser(parts[i])}</Text>
        </View>);
    } else {
      restructuredText.push(<Text key={uuid.v4()} style={styles.text}>{formulaParser(parts[i])}</Text>);
    }
  }
  return restructuredText;
};

export default squareRootParser;

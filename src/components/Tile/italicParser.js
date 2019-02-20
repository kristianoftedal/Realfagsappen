import React from 'react';
import { Text } from 'react-native';
import uuid from 'uuid';
import styles from './index.style';

const italicParser = text => {
  if (text == null) return <Text />;
  const restructuredText = [];
  const indices = [];
  for (let i = 0; i < text.length;i++) {
      if (text[i] === '€') {
        indices.push(i);
      }
  }

  const initialPart = text.substring(0, indices[0]);
  restructuredText.push(<Text style={styles.text}>{initialPart}</Text>);
  for (let i = 0; i < indices.length; i += 2) {
    const italicPart = text.substring(indices[i] + 1, indices[i + 1]);
    restructuredText.push(<Text style={styles.italicText}>{italicPart}</Text>);
    const trailingPart = text.substring(indices[i + 1] + 1, indices[getIndex(indices[i + 2], indices.length, text.length)]);
    restructuredText.push(<Text style={styles.text}>{trailingPart}</Text>);
  }
  return restructuredText;
};

export default italicParser;

function getIndex(i, length, textLength) {
  if (i > length)
    return textLength - 1;
  else
    return i + 1;
}


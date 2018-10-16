import React from 'react';
import { Text } from 'react-native';
import CustomText from '../CustomText';
import uuid from 'uuid';
import styles from './index.style';

const formulaParser = (question, size, textSize) => {
  if (question == null) return (<Text/>);

  const parts = question.split('*');
  const restructuredText = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].indexOf('_') > -1 && parts[i].indexOf('^') > - 1) {
      const tempParts = parts[i].split('|');
      for (let j = 0; j < tempParts.length; j++) {
        if (tempParts[j].indexOf('_') > -1) {
          const x = tempParts[j].split('_');
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.text} size={styles.text.fontSize}>
              {x[0]}
            </CustomText>
          );
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.subscript} size={size ? size : styles.subscript.fontSize}>
              {x[1]}
            </CustomText>
          );
        }
        else if (tempParts[j].indexOf('^') > -1) {
          const y = tempParts[j].split('^');
          restructuredText.push(
            <CustomText key={uuid.v4()}  withShadow={true} style={styles.text} size={textSize}>
              {y[0]}
            </CustomText>
          );
          restructuredText.push(
            <CustomText key={uuid.v4()}  withShadow={true} style={styles.superscript} size={size ? size : styles.superscript.fontSize}>
              {y[1]}
            </CustomText>
          );
        } else {
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.text} size={textSize}>
              {tempParts[j]}
            </CustomText>);
        }
      }
    } else if (parts[i].indexOf('_') > -1 ) {
      const tempParts = parts[i].split('|');
      for (let j = 0; j < tempParts.length; j++) {
        if (tempParts[j].indexOf('_') > -1) {
          const x = tempParts[j].split('_');
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.text} size={textSize}>
              {x[0]}
            </CustomText>
          );
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true}  style={styles.subscript} size={size ? size : styles.subscript.fontSize}>
              {x[1]}
            </CustomText>
          );
        } else {
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.text} size={textSize}>
              {tempParts[j]}
            </CustomText>);
        }
      }
    } else if (parts[i].indexOf('^') > -1) {
      const tempParts = parts[i].split('|');
      for (let j = 0; j < tempParts.length; j++) {
        if (tempParts[j].indexOf('^') > -1) {
          const y = tempParts[j].split('^');
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.text} size={textSize}>{
              y[0]}
            </CustomText>
          );
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.superscript} size={size ? size : styles.superscript.fontSize}>
              {y[1]}
            </CustomText>
          );
        } else {
          restructuredText.push(
            <CustomText key={uuid.v4()} withShadow={true} style={styles.text} size={textSize}>
              {tempParts[j]}
            </CustomText>);
        }
      }
    } else if (parts[i] === '') {
      continue;
    } else {
      restructuredText.push(
        <CustomText key={uuid.v4()} withShadow={true} style={styles.text} size={textSize}>
          {parts[i]}
        </CustomText>);
    }
  }
  return restructuredText;
}

export default formulaParser;
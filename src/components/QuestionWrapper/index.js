/**
 * React-Native `<Text />` component does not scale the text based on the device size.
 * This component does, and it also provides a nice interface for using custom fonts and style.
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-animatable';
import styles from './index.style';
import QuestionImage from '../QuestionImage';
import prettyPrint from './prettyPrint';

const getDifficulty = difficulty => {
  if (!difficulty) return '';
  if (difficulty == 'Lett') {
    return ' (L)';
  }
  if (difficulty == 'Middels') {
    return ' (M)';
  }
  if (difficulty == 'Vanskelig') {
    return ' (V)';
  }
}

const printQuestion = (question, difficulty)=> {
  if (question == null) {
    return <Text />;
  }

  return <View style={styles.textWrapper}>
    {prettyPrint(question + getDifficulty(difficulty))}
    <Text style={styles.text}></Text></View>;
};

const QuestionWrapper = props => {
  const { children, image, text, difficulty, ...otherProps } = props;
  const prettyText = printQuestion('Reaksjonen 3A + 2B ⇌ tes 4C starter med 10 mol av A og 10 mol av B. Dette er før vi blander dem sammen. Ved likevekt finnes det 4 mol av C. Hvor mange mol gjenstår av A og B?', difficulty) ;
  if (image) {
    const questionImage = <QuestionImage imageName={image} />;
    return (
      <View style={styles.wrapper}>
        {prettyText}
        {questionImage}
      </View>
    );
  }
  return <View style={styles.wrapper}>{prettyText}</View>;
};

export default QuestionWrapper;

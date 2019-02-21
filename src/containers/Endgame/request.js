import { AsyncStorage } from 'react-native';

export const hasAskedforReview = async () => {
  debugger;
  const responseSubscription = await AsyncStorage.getItem('kjemiaReview');
  if (responseSubscription) {
    return true;
  }
  return false;
};

export const setAskedForReview = async () => {
  await AsyncStorage.setItem('kjemiaReview', JSON.stringify(true));
};

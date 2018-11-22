import { AsyncStorage } from 'react-native';

export const getReceipt = async (subject) => {
  const responseSubscription = await AsyncStorage.getItem(subject + 'receipt');
  if (responseSubscription) {
    return JSON.parse(responseSubscription);
  }
  return '';
};

export const setReceipt = async (receipt, subject) => {
  if (receipt)
  await AsyncStorage.setItem(subject + 'receipt', JSON.stringify(receipt));
};

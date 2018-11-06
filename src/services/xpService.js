import { AsyncStorage } from 'react-native';
import { NATURFAG, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP } from '../stores/constants';

export const getXp = async (subject) => {
  const responseXp = await AsyncStorage.getItem('currentXp' + subject);
  const xp = JSON.parse(responseXp) || 0;
  return xp;
};

export const getLevelIndex = async (subject) => {
  const responseIndex = await AsyncStorage.getItem('currentLevelIndex' + subject);
  const index = JSON.parse(responseIndex) || 0;
  return index;
};

export const setLevelIndex = async (index, subject) => {
  await AsyncStorage.setItem('currentLevelIndex' + subject, JSON.stringify(index));
};
export const setXp = async (xp, subject) => {
  await AsyncStorage.setItem('currentXp' + subject, JSON.stringify(xp));
};

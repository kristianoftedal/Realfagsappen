import { NATURFAG, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP, NATURFAG_P, NATURFAG_Y, BIO1, BIO2 } from '../stores/constants';
import naturfagLevels from './naturfag/levels';
import kjemi1Levels from './kjemi1/levels';
import kjemi2Levels from './kjemi2/levels';
import fysikk1Levels from './fysikk1/levels';
import s1Levels from './s1/levels';
import oneTLevels from './1t/levels';
import geografiLevels from './geografi/levels';
import onePLevels from './1p/levels';
import r1Levels from './r1/levels';
import naturfag_yLevels from './naturfag_y/levels';
import naturfag_pLevels from './naturfag_p/levels';
import bio1Levels from './bio1/levels';
import bio2Levels from './bio2/levels';

const levelProvider = (topic) => {
  if (topic === NATURFAG || topic === NATURFAG_P || topic === NATURFAG_Y) {
    return naturfagLevels;
  }
  if (topic === KJEMI1) {
    return kjemi1Levels;
  }
  if (topic === KJEMI2) {
    return kjemi2Levels;
  }
  if (topic === FYSIKK1) {
    return fysikk1Levels;
  }
  if (topic === ONET) {
    return oneTLevels;
  }
  if (topic === S1) {
    return s1Levels;
  }
  if (topic === GEO) {
    return geografiLevels;
  }
  if (topic === ONEP) {
    return onePLevels;
  }
  if (topic === R1) {
    return r1Levels;
  }
  if (topic === BIO1) {
    return bio1Levels;
  }
  if (topic === BIO2) {
    return bio2Levels;
  }
  return naturfagLevels;
};

export default levelProvider;
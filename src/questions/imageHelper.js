import { NATURFAG, NATURFAG_P, NATURFAG_Y, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP, BIO1, BIO2 } from '../stores/constants';
import naturfagImages from './naturfag/questionImages';
import kjemi1Images from './kjemi1/questionImages';
import kjemi2Images from './kjemi2/questionImages';
import fysikk1Images from './fysikk1/questionImages';
import oneTImages from './1t/questionImages';
import s1Images from './s1/questionImages';
import geografiImages from './geografi/questionImages';
import onePImages from './1p/questionImages';
import r1Images from './1t/questionImages';
import bio1Images from './bio1/questionImages';
import bio2Images from './bio2/questionImages';

export default getImages = (subject) => {
  if (subject === NATURFAG || subject === NATURFAG_P || subject === NATURFAG_Y) {
    return naturfagImages;
  }
  if (subject === KJEMI1) {
    return kjemi1Images;
  }
  if (subject === KJEMI2) {
    return kjemi2Images;
  }
  if (subject === FYSIKK1) {
    return fysikk1Images;
  }
  if (subject === ONET) {
    return oneTImages;
  }
  if (subject === S1) {
    return s1Images;
  }
  if (subject === GEO) {
    return geografiImages;
  }
  if (subject === ONEP) {
    return onePImages;
  }
  if (subject === R1) {
    return r1Images;
  }
  if (subject === BIO1) {
    return bio1Images;
  }
  if (subject === BIO2) {
    return bio2Images;
  }
  return naturfagImages;
};

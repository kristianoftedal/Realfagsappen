import { NATURFAG, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP, NATURFAG_P, NATURFAG_Y, BIO1 } from '../stores/constants';


const subjectCode = (topic) => {
  if (topic === NATURFAG) {
    return 'naturfag';
  }
  if (topic === KJEMI1) {
    return 'kjemi1';
  }
  if (topic === KJEMI2) {
    return 'kjemi2';
  }
  if (topic === FYSIKK1) {
    return 'fysikk1';
  }
  if (topic === ONET) {
    return '1t';
  }
  if (topic === S1) {
    return 's1';
  }
  if (topic === GEO) {
    return 'geografi';
  }
  if (topic === ONEP) {
    return '1p';
  }
  if (topic === R1) {
    return 'r1';
  }
  if (topic === NATURFAG_P) {
    return 'naturfag_p';
  }
  if (topic === NATURFAG_Y) {
    return 'naturfag_y';
  }
  if (topic === NATURFAG_Y) {
    return 'naturfag_y';
  }
  return naturfagLevels;
};

export default subjectCode;
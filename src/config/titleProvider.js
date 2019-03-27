import { NATURFAG, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP, NATURFAG_P, NATURFAG_Y, BIO1, BIO2 } from '../stores/constants';


const titleProvider = (topic) => {
  if (topic === NATURFAG) {
    return 'Naturfag';
  }
  if (topic === KJEMI1) {
    return 'Kjemi 1';
  }
  if (topic === KJEMI2) {
    return 'Kjemi 2';
  }
  if (topic === FYSIKK1) {
    return 'Fysikk 1';
  }
  if (topic === ONET) {
    return '1T';
  }
  if (topic === S1) {
    return 'S1';
  }
  if (topic === GEO) {
    return 'Geografi';
  }
  if (topic === ONEP) {
    return '1P';
  }
  if (topic === R1) {
    return 'R1';
  }
  if (topic === NATURFAG_P) {
    return 'Naturfag Påbygg';
  }
  if (topic === NATURFAG_Y) {
    return 'Naturfag Yrkesfag';
  }
  if (topic === BIO1) {
    return 'Biologi 1';
  }
  if (topic === BIO2) {
    return 'Biologi 2';
  }
  return 'Naturfag';
};

export default titleProvider;
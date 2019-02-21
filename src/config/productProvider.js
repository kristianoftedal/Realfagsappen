import { NATURFAG, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP, NATURFAG_P, NATURFAG_Y, BIO1 } from '../stores/constants';

const getProduct = (subject) => {
  if (subject === NATURFAG) {
    return 'no.kjemia.realfagsappen.naturfag';
  }
  if (subject === KJEMI1) {
    return 'no.kjemia.realfagsappen.kjemi1';
  }
  if (subject === KJEMI2) {
    return 'no.kjemia.realfagsappen.kjemi2';
  }
  if (subject === FYSIKK1) {
    return 'no.kjemia.realfagsappen.fysikk1';
  }
  if (subject === ONET) {
    return 'no.kjemia.realfagsappen.1t';
  }
  if (subject === S1) {
    return 'no.kjemia.realfagsappen.s1';
  }
  if (subject === GEO) {
    return 'no.kjemia.realfagsappen.geografi';
  }
  if (subject === R1) {
    return 'no.kjemia.realfagsappen.r1';
  }
  if (subject === ONEP) {
    return 'no.kjemia.realfagsappen.1p';
  }
  if (subject === NATURFAG_Y) {
    return 'no.kjemia.realfagsappen.naturfag_y';
  }
  if (subject === NATURFAG_P) {
    return 'no.kjemia.realfagsappen.naturfag_p';
  }
  if (subject === BIO1) {
    return 'no.kjemia.realfagsappen.bio1';
  }
  return 'no.kjemia.realfagsappen.naturfag';
};

export default getProduct;
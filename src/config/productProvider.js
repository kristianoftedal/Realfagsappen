import { NATURFAG, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP, NATURFAG_P, NATURFAG_Y } from '../stores/constants';

const getProduct = (topic) => {
  if (topic === NATURFAG) {
    return 'no.kjemia.naturfagsappen';
  }
  if (topic === KJEMI1) {
    return 'no.kjemia.kjemi1';
  }
  if (topic === KJEMI2) {
    return 'no.kjemia.kjemi2';
  }
  if (topic === FYSIKK1) {
    return 'no.kjemia.fysikk1';
  }
  if (topic === ONET) {
    return 'no.kjemia.1t';
  }
  if (topic === S1) {
    return 'no.kjemia.s1';
  }
  if (topic === GEO) {
    return 'no.kjemia.geografi';
  }
  if (topic === R1) {
    return 'no.kjemia.r1';
  }
  if (topic === ONEP) {
    return 'no.kjemia.1p';
  }
  if (topic === NATURFAG_Y) {
    return 'no.kjemia.naturfag_y';
  }
  if (topic === NATURFAG_P) {
    return 'no.kjemia.naturfag_p';
  }
  return 'no.kjemia.naturfagsappen';
};

export default getProduct;
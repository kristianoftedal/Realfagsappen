import { KJEMI1, KJEMI2, NATURFAG, NATURFAG_P, NATURFAG_Y, S1, ONET, GEO, FYSIKK1, R1, ONEP } from '../stores/constants';
import kjemi1Tables from './kjemi1/tables';
import kjemi2Tables from './kjemi1/tables';

export default isVisible = (subject) => {
  if (subject === NATURFAG || subject === NATURFAG_P || subject === NATURFAG_Y) {
    return true;
  }
  return false;
};

import { KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP } from '../stores/constants';

import kjemi1Tables from './kjemi1/tables';

export default getTables = (subject) => {
  if (subject === KJEMI1) {
    return kjemi1Tables;
  }
  return null;
};

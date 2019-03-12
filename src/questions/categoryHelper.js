import { NATURFAG, NATURFAG_Y, NATURFAG_P, KJEMI1, KJEMI2, S1, ONET, GEO, FYSIKK1, R1, ONEP, BIO1, BIO2 } from '../stores/constants';
import naturfagCategories from './naturfag/categories';
import naturfag_pCategories from './naturfag_p/categories';
import naturfag_yCategories from './naturfag_y/categories';
import kjemi1Categories from './kjemi1/categories';
import kjemi2Categories from './kjemi2/categories';
import fysikk1Categories from './fysikk1/categories';
import oneTCategories from './1t/categories';
import s1Categories from './s1/categories';
import geografiCategories from './geografi/categories';
import onePCategories from './1p/categories';
import r1Categories from './1t/categories';
import bio1Categories from './bio1/categories';
import bio2Categories from './bio2/categories';

export default getCategories = (subject) => {
  if (subject === NATURFAG) {
    return naturfagCategories;
  }
  if (subject === KJEMI1) {
    return kjemi1Categories;
  }
  if (subject === KJEMI2) {
    return kjemi2Categories;
  }
  if (subject === FYSIKK1) {
    return fysikk1Categories;
  }
  if (subject === ONET) {
    return oneTCategories;
  }
  if (subject === S1) {
    return s1Categories;
  }
  if (subject === GEO) {
    return geografiCategories;
  }
  if (subject === ONEP) {
    return onePCategories;
  }
  if (subject === R1) {
    return r1Categories;
  }
  if (subject === NATURFAG_P) {
    return naturfag_pCategories;
  }
  if (subject === NATURFAG_Y) {
    return naturfag_yCategories;
  }
  if (subject === BIO1) {
    return bio1Categories;
  }
  if (subject === BIO2) {
    return bio2Categories;
  }
  return naturfagCategories;
};

/**
 * A super-simple MobX routing solution.
 */
import { decorate, observable, action } from 'mobx';
import { NATURFAG } from './constants';
import titleProvider from '../config/titleProvider';
import levelProvider from '../config/levelProvider';
import getSubjectCode from '../config/subjectCodeProvider';
import getProduct from '../config/productProvider';
import getCategories from '../questions/categoryHelper';
import getImages from '../questions/imageHelper';
import getTables from '../questions/tablesHelper';
import isVisible from '../questions/periodicHelper';
import { getQuestions, getFreeQuestions } from '../questions/questionHelper';

class SubjectStore {
  subject = NATURFAG;
  levels = null;
  freeQuestions = null;
  questions = null;
  questionImages = null;
  categories = null;
  product = null;
  images = null;
  tables = null;
  title = '';
  subjectCode = '';
  isPeriodicVisible = false;

  selectSubject = subject => {
    this.subject = subject;
    this.levels = levelProvider(subject);
    this.freeQuestions = getFreeQuestions(subject);
    this.questions = getQuestions(subject);
    this.product = getProduct(subject);
    this.categories = getCategories(subject);
    this.images = getImages(subject);
    this.title = titleProvider(subject);
    this.tables = getTables(subject);
    this.isPeriodicVisible = isVisible(subject);
    this.subjectCode = getSubjectCode(subject);
  };
}

decorate(SubjectStore, {
  subject: observable,
  levels: observable,
  freeQuestions: observable,
  questions: observable,
  questionImages: observable,
  categories: observable,
  product: observable,
  images: observable,
  title: observable,
  tables: observable,
  isPeriodicVisible: observable,
  subjectCode: observable,
})

const subjectStore = new SubjectStore();
export default subjectStore;

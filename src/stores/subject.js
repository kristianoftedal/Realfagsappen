/**
 * A super-simple MobX routing solution.
 */
import { decorate, observable, action } from 'mobx';
import { NATURFAG } from './constants';
import titleProvider from '../config/titleProvider';
import levelProvider from '../config/levelProvider';
import getProduct from '../config/productProvider';
import getCategories from '../questions/categoryHelper';
import getImages from '../questions/imageHelper';
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
  title = '';

  getProduct = () => {
    return this.product;
  };


  getLevels = () => {
    return this.levels;
  };

  getFreeQuestions = () => {
    return this.freeQuestions;
  };

  getCurrentTitle = () => {
    return this.title;
  };

  selectSubject = subject => {
    this.subject = subject;
    this.levels = levelProvider(subject);
    this.freeQuestions = getFreeQuestions(subject);
    this.questions = getQuestions(subject);
    this.product = getProduct(subject);
    debugger;
    this.categories = getCategories(subject);
    this.images = getImages(subject);
    this.title = titleProvider(subject);
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
  getProduct: action,
  getLevels: action,
  getFreeQuestions: action,
  getCurrentTitle: action,
})

const subjectStore = new SubjectStore();
export default subjectStore;

/**
 * Here you can find the entire logic of the game.
 */
import { action, computed, observable, decorate } from 'mobx';
import { getQuestionsSet, getQuestionsSetByCriterias } from '../services/questionService';
import metrics from '../config/metrics';
import { getXp, getLevelIndex, setXp, setLevelIndex } from '../services/xpService';
import subjectStore from './subject';

class GameStore {
  isGameRunning = false;
  isEndgame = false;
  level = 1;
  score = 0;
  previousScore = 0;
  questions = [];
  currentIndex = 0;
  isCorrectAnswer = false;
  correctCount = 0;
  isCustomizedGame = false;
  totalByCategory = {};
  currentXp = 0;
  currentLevelIndex = 0;
  isLevelUp = false;
  isAdTime = false;
  hasSubscription = false;
  levelUpProgress = 0;
  answeredQuestions = [];
  levels = [];

  setBaseline() {
    this.score = 0;
    this.currentIndex = 0;
    this.isEndgame = false;
    this.previousScore = 0;
    this.isGameRunning = true;
    this.isCorrectAnswer = false;
    this.correctCount = 0;
    this.answeredQuestions = [];
    this.totalByCategory = {};
    this.isLevelUp = false;
    this.isAdTime = false;
    this.levels = subjectStore.levels;
  }

  getLevels = async () => {
    this.currentXp = await getXp(subjectStore.subject);
    this.currentLevelIndex = await getLevelIndex(subjectStore.subject);
  };

  resetGame = () => {
    this.setBaseline();
    this.isCustomizedGame = false;
  };

  startGame = hasSubscription => {
    this.hasSubscription = hasSubscription;
    this.setBaseline();
    this.buildQuiz();
  };

  initPlayer = () => {
    this.getLevels().then(() => {
      this.computeLevelUpProgress();
    });
  };

  setCustomizedGame = (categories, difficulty, count) => {
    this.setBaseline();
    this.isCustomizedGame = true;
    this.correctCount = 0;
    this.questions = getQuestionsSetByCriterias(
      categories,
      difficulty,
      count,
      this.hasSubscription
    );
  };

  buildQuiz = () => {
    if (!this.isCustomizedGame) {
      this.questions = getQuestionsSet(30, this.hasSubscription);
    }
  };

  handleGoBack = () => {
    if (this.currentIndex - 1 >= 0) {
      this.currentIndex--;
    }
  };
  
  handleAnswerPress = async answerKey => {
    this.isLevelUp = false;
    this.isCorrectAnswer = false;
    this.previousScore = this.score;
    let totalByCategory = this.totalByCategory[this.currentQuestion.category];
    if (!totalByCategory) {
      totalByCategory = { correct: 0, total: 0 };
    }
    if (this.answeredQuestions.includes(this.currentQuestion.id)) {
      if (this.currentQuestion.solution === answerKey) {
        this.isCorrectAnswer = true;
      }
    } else {
      this.answeredQuestions.push(this.currentQuestion.id);
      if (this.currentQuestion.solution === answerKey) {
        if (this.currentQuestion.difficulty === 'Lett') {
          this.score += 50;
          this.currentXp += 50;
        } else if (this.currentQuestion.difficulty === 'Middels') {
          this.score += 100;
          this.currentXp += 100;
        } else if (this.currentQuestion.difficulty === 'Vanskelig') {
          this.score += 200;
          this.currentXp += 200;
        } else {
          this.score += 50;
          this.currentXp += 50;
        }
        let nextScore = this.levels[this.currentLevelIndex + 1].score;
        let test = this.currentXp >= nextScore;
        if (this.currentXp >= nextScore) {
          this.currentLevelIndex += 1;
          this.isLevelUp = true;
        } else {
          this.isLevelUp = false;
        }
        this.isCorrectAnswer = true;
        this.correctCount++;
        totalByCategory.correct++;
        setXp(this.currentXp).then(() => {
          setLevelIndex(this.currentLevelIndex);
        });
      }
      totalByCategory.total++;
      this.totalByCategory[this.currentQuestion.category] = totalByCategory;
    }
    if (this.currentIndex < this.questions.length) {
      this.currentIndex++;
    }
    if (this.currentIndex === this.questions.length) {
      this.isEndgame = true;
    }
    if (
      !this.hasSubscription &&
      !this.isLevelUp &&
      this.currentIndex !== 0 &&
      this.currentIndex % 6 === 0 &&
      this.currentIndex !== this.questions.length &&
      this.currentIndex - 1 !== this.questions.length
    ) {
      this.isAdTime = true;
    } else {
      this.isAdTime = false;
    }
  };

  get currentQuestion() {
    if (this.questions.length === 0) {
      return {};
    }
    if (this.isEndgame) {
      return {};
    }
    return this.questions[this.currentIndex];
  }
  
  get quizLength() {
    return this.questions.length;
  }

  get currentLevel() {
    return this.levels[this.currentLevelIndex];
  }
  
  get getProgress() {
    if (this.questions.length === 0) {
      return 0;
    }
    const quizProgress = this.currentIndex / this.questions.length * 100;
    return quizProgress * metrics.DEVICE_WIDTH / 100;
  }

  nextLevelThreshold = () => {
    if (this.currentLevelIndex + 1 > this.levels.length || this.currentLevelIndex === 0) {
      return this.levels[this.currentLevelIndex].score;
    }
    const nextLevelThreshold = this.levels[this.currentLevelIndex + 1].score;
    return nextLevelThreshold;
  };

  currentLevelThreshold = () => {
    if (this.currentLevelIndex === 0) {
      return 0;
    }
    const prev = this.levels[this.currentLevelIndex].score;
    return prev;
  };

  computeLevelUpProgress() {
    const threshold = this.nextLevelThreshold();
    const currentVal = this.currentXp - this.currentLevelThreshold();
    const levelUpPercentage = currentVal / threshold * 100;
    this.levelUpProgress = levelUpPercentage * (metrics.DEVICE_WIDTH - 70) / 100;
  }
  get 
  correctPercentage() {
    const correctPercentage = this.correctCount / this.questions.length * 100 || 0;
    return correctPercentage;
  }
}

decorate(GameStore, {
  isGameRunning: observable,
  isEndgame: observable,
  level: observable,
  score: observable,
  previousScore: observable,
  questions: observable,
  currentIndex: observable,
  isCorrectAnswer: observable,
  correctCount: observable,
  isCustomizedGame: observable,
  totalByCategory:observable,
  currentXp: observable,
  currentLevelIndex: observable,
  isLevelUp: observable,
  isAdTime: observable,
  hasSubscription: observable,
  levelUpProgress: observable,
  answeredQuestions: observable,
  levels: observable,
  setBaseline: action,
  getLevels: action,
  resetGame: action,
  startGame: action,
  initPlayer: action,
  setCustomizedGame: action,
  buildQuiz: action,
  handleGoBack: action,
  handleAnswerPress: action,
  currentQuestion: computed,
  quizLength: computed,
  currentLevel: computed,
  getProgress: computed,
  correctPercentage: computed,
})

export default new GameStore();

/**
 * The core of the game.
 * It links the Board to the MobX store and navigates to the Endgame screen when needed.
 */
import React, { Component } from 'react';
import { StatusBar} from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import { times } from 'lodash';
import { AdMobInterstitial } from 'react-native-admob';
import DropdownAlert from 'react-native-dropdownalert';
import QuestionWrapper from '../../components/QuestionWrapper';
import LevelUp from '../../components/LevelUp';
import style from './index.style';
import answersUtils from '../../utils/answersUtils';
import AnswerTile from './AnswerTile';
import audioService from '../../services/audio';
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import env from '../../config/env';
import CallToAction from './CallToAction';

class Playground extends Component {
  _questionRef = null;
  _playRef = null;

  constructor(props) {
    super(props);
    this.state = {
      isLevelUp: false,
      showBuy: false,
    };
  }

  componentDidMount() {
    this._playRef.fadeIn(1500);
    this.props.startGame(this.props.hasSubscription);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isAdTime && !this.props.hasSubscription) {
      if (env.IS_ENV_DEVELOPMENT) {
        AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/4411468910');
        AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
      } else {
        AdMobInterstitial.setAdUnitID('ca-app-pub-4545695212875309/4479049379');
      }
      const dropdown = this.dropdown;
      AdMobInterstitial.requestAd()
        .then(() => AdMobInterstitial.showAd())
        .catch(error => {
          if (this.props.isCorrectAnswer) {
            dropdown.alertWithType('success', 'Riktig 😀', '');
            audioService.playSuccessSound();
          } else {
            dropdown.alertWithType('error', 'Feil 😮', '');
            audioService.playFailureSound();
          }
        });
      AdMobInterstitial.addEventListener('adClosed', () => {
        if (this.props.isCorrectAnswer) {
          dropdown.alertWithType('success', 'Riktig 😀', '');
          audioService.playSuccessSound();
        } else {
          dropdown.alertWithType('error', 'Feil 😮', '');
          audioService.playFailureSound();
        }
      });
    }
    if (prevProps.currentIndex > this.props.currentIndex) {
      this._questionRef.fadeInLeft(500);
    } else if (
      prevProps.currentIndex !== this.props.currentIndex &&
      this.props.currentIndex !== 0
    ) {
      if (this.props.isEndgame) {
        this.dropdown.closeDirectly();
        this.props.navigateToEndgame();
      }
      if (this.props.isCorrectAnswer && !this.props.isAdTime) {
        this.dropdown.alertWithType('success', 'Riktig 😀', '');
        audioService.playSuccessSound();
      } else if (!this.props.isAdTime) {
        this.dropdown.alertWithType('error', 'Feil 😮', '');
        audioService.playFailureSound();
      }
      this._questionRef.bounceInRight(1000);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLevelUp) {
      this.setState({ isLevelUp: true });
    }
    if (!nextProps.isLevelUp && this.state.isLevelUp) {
      this.setState({ isLevelUp: false });
    }
    if (this.props.isAdTime && new Date().getSeconds() % 2 === 0) {
      this.setState({ showBuy: true });
    }
  }

  componentWillUnmount() {
    this.dropdown.closeDirectly();
  }

  _handleAnswerPress = answerKey => {
    this._questionRef.fadeOutLeft(500);
    this.props.handleAnswerPress(answerKey);
  };

  render() {
    const { currentQuestion } = this.props;
    let questionImage = null;

    if (currentQuestion.image) {
      questionImage = currentQuestion.image;
    }
    const alreadyPickedColors = [];
    times(4, () => {
      const color = answersUtils.getRandomTileColor(alreadyPickedColors);
      alreadyPickedColors.push(color);
    });

    const isLevelUp = this.state.isLevelUp;
    return (
      <View>
        <StatusBar hidden={true} barStyle="light-content" networkActivityIndicatorVisible={true}/>
        <View
          style={style.container}
          ref={ref => {
            this._playRef = ref;
          }}
        >
          <ProgressBar />
          <View
            style={style.questionsWrapper}
            ref={ref => {
              this._questionRef = ref;
            }}
          >
            <QuestionWrapper
              image={questionImage}
              text={currentQuestion.questionText}
              difficulty={currentQuestion.difficulty}
            />
            <View style={style.answerWrapper}>
              {currentQuestion.answers &&
                currentQuestion.answers.map((e, i) => {
                  return (
                    <AnswerTile
                      backgroundColor={alreadyPickedColors[i]}
                      key={e.key}
                      text={`${e.key}. ${e.value}`}
                      onTilePress={() => this._handleAnswerPress(e.key)}
                    />
                  );
                })}
            </View>
            <LevelUp
              visible={isLevelUp}
              showHeader
              level={this.props.level}
              onClose={() => this.setState({ isLevelUp: false })}
              key={currentQuestion.id}
            />
            <CallToAction
              visible={this.state.showBuy}
              onClose={() => this.setState({ showBuy: false })}
            />
          </View>
          <Footer dialog={this.popupDialog} />
        </View>
        <DropdownAlert
          ref={ref => (this.dropdown = ref)}
          closeInterval={1000}
          titleStyle={style.questionFeedback}
          imageStyle={{ display: 'none' }}
          successColor="#2ecc71"
          errorColor="#e74c3c"
        />
      </View>
    );
  }
}

export default inject(allStores => ({
  navigateToEndgame: allStores.router.navigateToEndgame,
  startGame: allStores.game.startGame,
  handleAnswerPress: allStores.game.handleAnswerPress,
  currentQuestion: allStores.game.currentQuestion,
  currentIndex: allStores.game.currentIndex,
  questions: allStores.game.questions,
  isCorrectAnswer: allStores.game.isCorrectAnswer,
  isEndgame: allStores.game.isEndgame,
  isCustomizedGame: allStores.game.isCustomizedGame,
  isAdTime: allStores.game.isAdTime,
  isLevelUp: allStores.game.isLevelUp,
  level: allStores.game.currentLevel,
  hasSubscription: allStores.subscription.hasSubscription,
  title: allStores.subject.title,
}))(observer(Playground))
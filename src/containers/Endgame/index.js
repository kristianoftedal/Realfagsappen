/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 */

import React, { Component } from 'react';
import { StatusBar, Text, Linking, Platform, UIManager, LayoutAnimation } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import Button from 'apsl-react-native-button';
import style from './index.style';
import audioService from '../../services/audio';

class Endgame extends Component {
  _headerRef;
  _bodyRef;

  state = {
    hasHeaderAppeared: false,
    hasPressedButton: false,
  };

  componentDidMount() {
    if (this._headerRef) {
      this._headerRef.fadeInRight(1000).then(() => {
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        LayoutAnimation.spring();
        this.setState({ hasHeaderAppeared: true });
        audioService.initSounds();
      });
    }
  }

  componentWillUnmount() {
    this.props.resetGame();
  }

  _handleBackPress = async () => {
    this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
    if (this._headerRef && this._bodyRef) {
      await Promise.all([this._headerRef.fadeOutLeft(400), this._bodyRef.fadeOutRight(400)]);
    }
    this.props.navigateToGameMenu();
  };
  _handleReplayPress = async () => {
    this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
    if (this._headerRef && this._bodyRef) {
      await Promise.all([this._headerRef.fadeOutLeft(400), this._bodyRef.fadeOutRight(400)]);
    }
    if (!this.props.isCustomizedGame) {
      this.props.navigateToPlayground();
    } else {
      this.props.navigateToSelection();
    }
  };

  _handleOpenKjemia = async () => {
    Linking.openURL('http://kjemia.no');
  };

  render() {
    const { hasHeaderAppeared } = this.state;
    return (
      <View style={style.body}>
        <StatusBar hidden={true} />
        <View
          ref={ref => {
            this._headerRef = ref;
          }}
        >
          <Text style={style.header}>Din score: {this.props.score}</Text>
        </View>
        {hasHeaderAppeared && (
          <View
            style={style.container}
            ref={ref => {
              this._bodyRef = ref;
            }}
          >
            <View>
              <Text style={style.subHeader}>
                Du klarte:&nbsp; {Math.trunc(this.props.correctPercentage)}%
              </Text>
            </View>
            <View style={style.categoriesWrapper}>
              <Text style={style.resultHeader}>Per kategori:</Text>
              {categories.map(e => {
                const category = e.value;
                const result = this.props.totalByCategory[category];
                if (result) {
                  return (
                    <View key={category} style={style.resultWrapper}>
                      <Text style={style.resultLabel}>{category}: </Text>
                      <Text style={style.resultPercentage}>
                        {Math.trunc(result.correct / result.total * 100)}
                        &#37;
                      </Text>
                    </View>
                  );
                }
              })}
            </View>
            <Button style={style.button} onPressOut={this._handleReplayPress}>
              <Text style={style.buttonText}>Spill igjen!</Text>
            </Button>
            <Button style={style.button} onPressOut={this._handleBackPress}>
              <Text style={style.buttonText}>Tilbake til start</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }
}

export default inject(allStores => ({
  navigateToPlayground: allStores.router.navigateToPlayground,
  navigateToGameMenu: allStores.router.navigateToGameMenu,
  navigateToSelection: allStores.router.navigateToSelection,
  score: allStores.game.score,
  correctCount: allStores.game.correctCount,
  quizLength: allStores.game.quizLength,
  correctPercentage: allStores.game.correctPercentage,
  totalByCategory: allStores.game.totalByCategory,
  resetGame: allStores.game.resetGame,
  isCustomizedGame: allStores.game.isCustomizedGame,
  categories: allStores.subject.categories,
}))(observer(Endgame))

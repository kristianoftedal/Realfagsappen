/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StatusBar, Text, Platform, UIManager, LayoutAnimation } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import Button from 'apsl-react-native-button';
import LevelProgress from '../../components/LevelProgress';
import style from './index.style';
import audioService from '../../services/audio';

class GameMenu extends Component {
  _headerRef;
  _bodyRef;

  state = {
    hasHeaderAppeared: false,
    hasPressedButton: false,
    init: true,
  };

  componentDidMount() {
    this.props.resetGame();
    this.props.initPlayer();
    if (this._headerRef) {
      const fadeTime = 900;
      this._headerRef.fadeInRight(fadeTime).then(() => {
        this.setState({ init: false });
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

  _handleStartPress = async () => {
    this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
    if (this._headerRef && this._bodyRef) {
      await Promise.all([this._headerRef.fadeOutLeft(500), this._bodyRef.fadeOutRight(400)]);
    }
    this.props.navigateToPlayground();
  };

  _handleSelectionPress = async () => {
    this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
    if (this._headerRef && this._bodyRef) {
      await Promise.all([this._headerRef.fadeOutLeft(500), this._bodyRef.fadeOutRight(400)]);
    }
    this.props.navigateToSelection();
  };

  _handleBadgesPress = async () => {
    this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
    if (this._headerRef && this._bodyRef) {
      await Promise.all([this._headerRef.fadeOutLeft(500), this._bodyRef.fadeOutRight(400)]);
    }
    this.props.navigateToBadges();
  };

  _handleSubscriptionPress = async () => {
    this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
    if (this._headerRef && this._bodyRef) {
      await Promise.all([this._headerRef.fadeOutLeft(500), this._bodyRef.fadeOutRight(400)]);
    }
    this.props.navigateToSubscription();
  };

  _handleBackPress = async () => {
    this.setState({ hasPressedButton: true }); // Prevents button presses while animating to the new screen
    if (this._headerRef && this._bodyRef) {
      await Promise.all([this._headerRef.fadeOutLeft(500), this._bodyRef.fadeOutRight(400)]);
    }
    this.props.navigateToHome();
  };
  
  
  render() {
    const { hasHeaderAppeared } = this.state;
    return (
      <View style={style.body}>
        <StatusBar barStyle="light-content" />
        <View
          ref={ref => {
            this._headerRef = ref;
          }}
        >
          <Text style={style.header}>{this.props.title}</Text>
        </View>
        {hasHeaderAppeared && (
          <View
            style={style.container}
            ref={ref => {
              this._bodyRef = ref;
            }}
          >
            <View key={this.props.progress}>
              <LevelProgress level={this.props.level.value} progress={this.props.progress} />
            </View>
            <Button style={style.button} onPressOut={this._handleStartPress}>
              <Text style={style.buttonText}>Hurtigstart</Text>
            </Button>
            <Button style={style.button} onPressOut={this._handleSelectionPress}>
              <Text style={style.buttonText}>Velg selv</Text>
            </Button>
            <Button style={style.button} onPressOut={this._handleBadgesPress}>
              <Text style={style.buttonText}>Troféer</Text>
            </Button>
            {!this.props.hasSubscription &&
              <Button style={style.button} onPressOut={this._handleSubscriptionPress}>
                <Text style={style.buttonText}>Kjøp fullversjon</Text>
              </Button>
            }
            <Button style={style.button} onPressOut={this._handleBackPress}>
              <Text style={style.buttonText}>Tilbake</Text>
            </Button>
            <View style={style.body}>
              <Text style={style.subscriptionText}>{this.props.hasSubscription ? 'Premium' : 'Gratisversjon' }</Text>
            </View>
            <View style={style.footer}>
              <Text style={style.subscriptionText}>Innspill og rettelser sendes til kontakt@kjemia.no</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default inject(allStores => ({
  navigateToPlayground: allStores.router.navigateToPlayground,
  navigateToEndgame: allStores.router.navigateToEndgame,
  navigateToSelection: allStores.router.navigateToSelection,
  navigateToAbout: allStores.router.navigateToAbout,
  navigateToBadges: allStores.router.navigateToBadges,
  navigateToSubscription: allStores.router.navigateToSubscription,
  navigateToHome: allStores.router.navigateToHome,
  progress: allStores.game.levelUpProgress,
  level: allStores.game.currentLevel,
  initPlayer: allStores.game.initPlayer,
  resetGame: allStores.game.resetGame,
  hasSubscription: allStores.subscription.hasSubscription,
  title: allStores.subject.title,
}))(observer(GameMenu))
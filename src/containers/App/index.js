/*  */
/**
 * Main application component, handles the routing.
 */

import React, { Component } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { View } from 'react-native-animatable';
import { inject, observer } from 'mobx-react/native';
import backgroundImg from '../../images/bg7.png';
import playgroundImg from '../../images/playground.png';
import GameMenu from '../GameMenu';
import Playground from '../Playground';
import Home from '../Home';
import Endgame from '../Endgame';
import Selection from '../Selection';
import About from '../About';
import Subscription from '../Subscription';
import Badges from '../Badges';
import styles from './index.style';

class App extends Component {
  static defaultProps = {
    currentScreen: 'HOME',
  };
  
  componentDidMount() {
    this.props.init();
  }

  render() {
    let content;
    let bgImg = backgroundImg;
    switch (this.props.currentScreen) {
      case 'HOME':
        content = <Home />;
        break;
      case 'GAMEMENU':
        content = <GameMenu />;
        break;
      case 'PLAYGROUND':
        bgImg = playgroundImg;
        content = <Playground />;
        break;
      case 'ENDGAME':
        content = <Endgame />;
        break;
      case 'SELECTION':
        content = <Selection />;
        break;
      case 'ABOUT':
        content = <About />;
        break;
      case 'BADGES':
        content = <Badges />;
        break;
      case 'SUBSCRIPTION':
        content = <Subscription />;
        break;
      default:
        content = <View />;
        break;
    }
    return (
      <ImageBackground source={bgImg} style={styles.container} >
        <StatusBar barStyle="light-content" />
        {content}
      </ImageBackground>
    );
  }
}

export default inject(allStores => ({
  currentScreen: allStores.router.currentScreen,
  init: allStores.subscription.init,
}))(observer(App))

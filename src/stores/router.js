/**
 * A super-simple MobX routing solution.
 */
import { decorate, observable } from 'mobx';

class RouterStore {
  currentScreen = 'HOME';

  navigateToHome = () => {
    this.currentScreen = 'HOME';
  };

  navigateToGameMenu = () => {
    this.currentScreen = 'GAMEMENU';
  };

  navigateToPlayground = () => {
    this.currentScreen = 'PLAYGROUND';
  };

  navigateToEndgame = () => {
    this.currentScreen = 'ENDGAME';
  };

  navigateToSelection = () => {
    this.currentScreen = 'SELECTION';
  };

  navigateToAbout = () => {
    this.currentScreen = 'ABOUT';
  };

  navigateToBadges = () => {
    this.currentScreen = 'BADGES';
  };

  navigateToSubscription = () => {
    this.currentScreen = 'SUBSCRIPTION';
  };
}

decorate(RouterStore, {
  currentScreen: observable,
})

export default new RouterStore();
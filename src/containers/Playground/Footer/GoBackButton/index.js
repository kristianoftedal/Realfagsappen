/*  */
/**
 * A HOC on src/component/Tile that customizes it a bit for the board.  
 * It adds styles and animations when the Tile appears/disappears.
 */
import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Button from 'apsl-react-native-button';
import style from './index.style';

class GoBackButton extends Component {
  _handleBackPress = () => {
    this.props.handleGoBack();
  };

  render() {
    return(
    <Button onPress={this._handleBackPress} style={style.backButton}>
      <Text style={style.buttonText}>&lt;</Text>
    </Button>);
  }
}

export default inject(allStores => ({
  handleGoBack: allStores.game.handleGoBack,
}))(observer(GoBackButton))

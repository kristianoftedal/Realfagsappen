/**
 * A HOC on src/component/Tile that customizes it a bit for the board.
 * It adds styles and animations when the Tile appears/disappears.
 */
import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Button from 'apsl-react-native-button';
import style from './index.style';

class QuitButton extends Component {
  _handleBackPress = () => {
    const onYes = () => {
      this.props.navigateToGameMenu();
    };
    Alert.alert(
      'Sikker på at du ønsker å avslutte?',
      '',
      [
        {
          text: 'Nei',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ja',
          onPress: onYes,
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  render() {
    return (
      <Button onPress={this._handleBackPress} style={style.backButton}>
        <Text style={style.buttonText}> x</Text>
      </Button>
    );
  }
}

export default inject(allStores => ({
  navigateToGameMenu: allStores.router.navigateToGameMenu,
}))(observer(QuitButton))

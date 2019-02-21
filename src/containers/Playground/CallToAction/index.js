/**
 * React-Native `<Text />` component does not scale the text based on the device size.
 * This component does, and it also provides a nice interface for using custom fonts and style.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'apsl-react-native-button';
import { inject, observer } from 'mobx-react/native';
import Overlay from 'react-native-modal-overlay';
import styles from './index.style';

class CallToAction extends Component {
  render() {
    return (
      <Overlay
        visible={this.props.visible}
        closeOnTouchOutside
        animationType="zoomIn"
        containerStyle={styles.container}
        childrenWrapperStyle={styles.overlayWrapper}
        animationDuration={500}
        onClose={() => this.props.onClose()}
      >
        <View style={styles.explanationWrapper}>
          <View style={styles.wrapper}>
            <View style={styles.headerWrapper}>
              <Text style={styles.header}>Lei av reklame?</Text>
            </View>
            <Text style={styles.text}>
              Støtt et lite selskap på tre kamerater som har laget denne appen på fritiden
              ved å kjøpe fullversjonen. Da forsvinner reklamen
              og alle spørsmålene i faget blir låst opp!
            </Text>
            <Text style={styles.text}>
              Vi hadde satt utrolig pris på det☺️
            </Text>
            <View styles={styles.buttonWrapper}>
              <Button onPress={() => this.props.navigateToSubscription()} style={styles.button}>
                <Text style={styles.buttonText}>Ja!</Text>
              </Button>
              <Button onPress={() => this.props.onClose()} style={styles.button}>
                <Text style={styles.buttonText}>Ellers takk</Text>
              </Button>
            </View>
          </View>
        </View>
      </Overlay>
    );
  }
}

export default inject(allStores => ({
  navigateToSubscription: allStores.router.navigateToSubscription,
}))(observer(CallToAction))
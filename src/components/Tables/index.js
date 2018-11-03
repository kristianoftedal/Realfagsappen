/**
 * React-Native `<Text />` component does not scale the text based on the device size.
 * This component does, and it also provides a nice interface for using custom fonts and style.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import PhotoView from 'react-native-photo-view';
import Overlay from 'react-native-modal-overlay';
import Button from 'apsl-react-native-button';
import styles from './index.style';
import metrics from '../../config/metrics';

export default class Tables extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      tables: props.tables,
      image: null,
    };
  }

  isAnySelected = () => {
    return this.state.tables !== null && this.state.tables.filter(e => e.isSelected).length > 0;
  }

  tableSelected = (table) => {
    const tables = this.state.tables;
    for (let i = 0; i < tables.length; i++) {
      if (tables[i].name === table.name) {
        tables[i].isSelected = true;
        this.setState({ tables, image: table.src });
      }
    }
  }

  onClose = () => {
    const tables = this.state.tables;
    for (let i = 0; i < tables.length; i++) {
      tables[i].isSelected = false;
    }
    this.setState({ image: null, tables });
    this.props.onClose();
  }

  render() {
    const imageWidth = metrics.DEVICE_WIDTH * 0.95;
    const imageHeight = metrics.DEVICE_HEIGHT * 0.82;
    return (
      <Overlay
        visible={this.props.visible}
        closeOnTouchOutside
        animationType="zoomIn"
        containerStyle={styles.container}
        childrenWrapperStyle={styles.overlayWrapper}
        animationDuration={500}
        onClose={() => this.onClose()}
      >
        {!this.isAnySelected() &&
          <View style={styles.explanationWrapper}>
            <View style={styles.wrapper}>
              <View style={styles.headerWrapper}>
                <Text style={styles.header}>Velg tabell:</Text>
              </View>
              {this.state.tables.map(e => (
                <Button onPress={() => this.tableSelected(e)} style={styles.button} key={e.name}>
                  <Text style={styles.buttonText}>{e.name}</Text>
                </Button>
              ))}
            </View>
          </View>
        }
        {this.state.image &&
          <View style={styles.imageWrapper}>
            <PhotoView style={{backgroundColor: 'white'}}
              source={this.state.image}
              minimumZoomScale={1}
              maximumZoomScale={6}
              style={{width: imageWidth, height: imageHeight}} />
          </View>
        }
      </Overlay>
    );
  }
}

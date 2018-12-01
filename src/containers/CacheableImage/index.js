
import React, { Component } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import imageCacheHoc from 'react-native-image-cache-hoc';
import { inject, observer } from 'mobx-react/native';
import styles from './index.style';

const placeholderObject = {
    component: ActivityIndicator,
    props: {
      style: styles.activityIndicatorStyle
    }
  };

const CachedImage = imageCacheHoc(Image, {
  fileDirName: 'no.kjemia.realfagsappen',
  defaultPlaceholder: {
    component: ActivityIndicator,
    props: {
      style: styles.activityIndicatorStyle,
      size: 'large',
      color: '#ecf0f1'
    },
  },
});

class CacheableImage extends Component {

  _getUrlFromSrc = () => {
    return this.props.isLevelUp ? 
      `https://raw.githubusercontent.com/kristianoftedal/Realfagsappen/master/src/images/levels/${this.props.subjectCode}/${this.props.source}`
      : `https://raw.githubusercontent.com/kristianoftedal/Realfagsappen/master/src/questions/${this.props.subjectCode}/media/${this.props.source}`;
  }

  render() {
    const source = this._getUrlFromSrc();
    return (
      <CachedImage 
        style={this.props.style}
        source={{uri: source}}
        permanent
        resizeMode="contain"
      />);
  }
}


export default inject(allStores => ({
  subjectCode: allStores.subject.subjectCode,
}))(observer(CacheableImage))
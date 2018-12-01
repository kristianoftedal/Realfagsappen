
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
  fileHostWhitelist: ['github', 'dropbox'],
  fileDirName: 'no.kjemia.realfagsappen',
});

class CacheableImage extends Component {

  const getUrlFromSrc = (subject, src) => {
      const splitted = src.split('/');
      const temp = splitted[splitted.length - 1];
      const imageName = temp.split('.')[0];
      const source = `https://raw.githubusercontent.com/kristianoftedal/Realfagsappen/master/src/images/levels/${this.props.subjectCode}/${imageName}`;
  }

  render() {
    const source = this.getUrlFromSrc()
    return (
      <CachedImage style={styles.image}
      source={{uri: source}}
      permanent
      placeholder={placeholderObject} />);
  }
}


export default inject(allStores => ({
  subjectCode: allStores.subject.subjectCode,
}))(observer(CacheableImage))
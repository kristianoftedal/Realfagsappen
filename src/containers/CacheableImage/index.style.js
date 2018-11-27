import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

const imageWidth = metrics.DEVICE_WIDTH * 0.7;
const imageHeight = metrics.DEVICE_HEIGHT * 0.30;


export default StyleSheet.create({
    activityIndicatorStyle: {
        width: 150,
        height: 204,
        backgroundColor: '#ecf0f1',
    },
    image: {
      height: imageHeight,
      width: imageWidth,
    },
});
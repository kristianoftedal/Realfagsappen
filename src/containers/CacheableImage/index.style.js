import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

const imageWidth = metrics.DEVICE_WIDTH;
const imageHeight = metrics.DEVICE_HEIGHT * 0.39;

export default StyleSheet.create({
    activityIndicatorStyle: {
        width: imageWidth,
        height: imageHeight,
        backgroundColor: '#0a3d62',
        color: '#ecf0f1'
    },
    image: {
      height: imageHeight,
      width: imageWidth,
    },
});
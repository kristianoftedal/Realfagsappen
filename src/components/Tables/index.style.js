import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

const width = metrics.DEVICE_WIDTH * 0.80;
const height = metrics.DEVICE_HEIGHT * 0.83;

const imageWidth = metrics.DEVICE_WIDTH * 0.95;
const imageHeight = metrics.DEVICE_HEIGHT * 0.72;

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  overlayWrapper: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    padding: 10,
    width: width,
    height: height,
  },
  explanationWrapper: {
    flexDirection: 'column',
  },
  wrapper: {
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: width,
    height: height,
  },
  headerWrapper: {
    width: metrics.DEVICE_WIDTH * 0.75,
  },
  header: {
    fontFamily: 'Permanent Marker',
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  imageWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    width: imageWidth,
    height: imageHeight,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    height: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
  },
});

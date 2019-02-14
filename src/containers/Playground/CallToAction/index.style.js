import { StyleSheet } from 'react-native';
import metrics from '../../../config/metrics';

const width = metrics.DEVICE_WIDTH * 0.82;
const height = metrics.DEVICE_HEIGHT * 0.80;

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
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 5,
    paddingRight: 5,
    width: width,
    height: height,
  },
  headerWrapper: {
    width: metrics.DEVICE_WIDTH * 0.80,
  },
  header: {
    fontFamily: 'Permanent Marker',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    //fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 18,
    marginBottom: 1,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    height: 30,
    width: width - 40,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Raleway-Regular',
    fontSize: 13,
  },
  buttonWrapper: {
    marginTop: 10,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

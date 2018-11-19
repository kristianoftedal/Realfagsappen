/*  */
import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

const logoWidth = metrics.DEVICE_WIDTH * 0.5;
const subjectWidth = metrics.DEVICE_WIDTH * 0.30;

export default StyleSheet.create({
  body: {
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  header: {
    fontFamily: 'Raleway-Regular',
    color: 'white',
    fontSize: 27,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  subjectHeader: {
    fontFamily: 'Raleway-Regular',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 3,
  },
  subjectContainer: {
    marginTop: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: metrics.DEVICE_WIDTH * 0.95,
  },
  logo: {
    flex: 1,
    marginLeft: metrics.DEVICE_WIDTH * 0.05,
    height: null,
    width: logoWidth,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    minHeight: 40,
    width: subjectWidth,
  },
  buttonToCome: {
    backgroundColor: 'transparent',
    minHeight: 40,
    width: subjectWidth,
    borderWidth: 0,
    textAlign: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },

  aboutButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    minHeight: 30,
    width: metrics.DEVICE_WIDTH * 0.8,
    borderWidth: 2,
    borderRadius: 22,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
});

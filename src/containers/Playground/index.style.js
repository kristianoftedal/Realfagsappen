/*  */
import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  questionSize: {
    width: metrics.TILE_SIZE,
    height: metrics.TILE_SIZE,
  },
  answerWrapper: {
    paddingTop: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  questionsWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  footerWrapper: {
    flexDirection: 'column',
    backgroundColor: '#0a3d62',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Raleway-Regular',
  },
  footerLayout: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a3d62',
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 20,
    height: 50,
  },
  questionFeedback: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Permanent Marker',
  },
  periodicTable: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

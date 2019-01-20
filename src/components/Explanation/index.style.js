import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

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
    justifyContent: 'flex-start',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: width,
    height: height,
  },
  headerWrapper: {
    width: metrics.DEVICE_WIDTH * 0.80,
  },
  header: {
    fontFamily: 'Permanent Marker',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    //fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 1,
  },
  newLine: {
    flexBasis: 50,
  },
  subscript: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 10,
    lineHeight: 12,
    marginTop: 7,
  },
  superscript: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    lineHeight: 12,
    fontSize: 10,
    marginBottom: 10,
  },
  fractionBottom: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  fractionTop: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  fractionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  binomial: {
  },
  squareRoot: {
    fontSize: 23,
    color: 'white',
  },
  postSquareRoot: {
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
  italicText: {
    color: 'white',
    fontFamily: 'Raleway-Italic',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 1,
    fontStyle: 'italic',
  }
});

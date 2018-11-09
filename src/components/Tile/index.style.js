import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

const height = metrics.DEVICE_HEIGHT * 0.05;
export default StyleSheet.create({
  tile: {
    zIndex: 2,
  },
  depth: {
    zIndex: 1,
  },
  textWrapper: {
    flexDirection: 'row', 
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: 4,
    padding: 2
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 18,
  },
  subscript: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 11,
    lineHeight: 11,
    marginTop: 8,
  },
  superscript: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 11,
    lineHeight: 11,
    marginBottom: 5,
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
  top: {
    flexDirection: 'row', 
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    lineHeight: 12,
  },
  bottom: {
    flexDirection: 'row', 
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    lineHeight: 12,
    marginTop: 1,
  },
  binomial: {
  },
  squareRoot: {
    color: 'white',
    fontSize: 23,
  },
  postSquareRoot: {
    borderTopColor: 'white',
    borderTopWidth: 1,
  }
});

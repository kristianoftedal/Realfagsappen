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
    padding: 4,
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
    fontSize: 12,
    lineHeight: 14,
    marginTop: 10,
  },
  superscript: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    lineHeight: 10,
    fontSize: 12,
    marginBottom: 10,
  },
  fractionBottom: {
    flex: 1,
    alignItems: 'center'
  },
  fractionTop: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center'
  },
  top: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    lineHeight: 12,
    textAlignVertical: 'top',
  },
  bottom: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    lineHeight: 12,
    marginTop: 1,
  },
  binomial: {
  },
  squareRoot: {
    fontSize: 23,
  },
  postSquareRoot: {
    borderTopColor: 'white',
    borderTopWidth: 1,
  }
});

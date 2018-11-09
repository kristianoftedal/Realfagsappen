import { StyleSheet } from 'react-native';
import metrics from '../../config/metrics';

const width = metrics.DEVICE_WIDTH;
export default StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#0a3d62',
    marginTop: 5,
    padding: 5,
    paddingBottom: 5,
    width: width,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  text: {
    color: 'white',
    //fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 1,
  },
  subscript: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    fontSize: 10,
    lineHeight: 10,
    marginTop: 10,
  },
  superscript: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Raleway-Regular',
    lineHeight: 10,
    fontSize: 10,
    marginBottom: 10,
  },
  fractionBottom: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  fractionTop: {
    flexDirection: 'row', 
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
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
    fontFamily: 'Raleway-Regular',
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  postSquareRoot: {
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
  newLine: {
    flexBasis: 25,
  },
});

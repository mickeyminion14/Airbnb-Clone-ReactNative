import {StyleSheet} from 'react-native';
import {LIGHT_GRAY} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  configText: {
    marginVertical: 10,
    color: LIGHT_GRAY,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: 'black',
  },
  prices: {
    fontSize: 18,
    marginVertical: 5,
    color: 'black',
  },
  oldPrice: {
    color: '#999',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    // color: 'black',
  },
  totalPrice: {
    fontSize: 18,

    // color: '#999',
    color: 'black',

    textDecorationLine: 'underline',
  },
});

export default styles;

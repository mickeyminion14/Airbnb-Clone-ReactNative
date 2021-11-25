import React from 'react';
import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    width: 200,
    backgroundColor: '#f5f5f5',
    marginLeft: 25,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#f5f5f5',
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 100,
    elevation: 100,
    width: windowWidth - 20,
  },
  searchButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
    marginLeft: 10,
  },
});
export default styles;

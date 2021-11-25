import React from 'react';
import {View, Text, ImageBackground, Button, Pressable} from 'react-native';
import styles from './home.styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {PRIMARY} from '../../styles/colors';

export default function HomeScreen() {
  return (
    <View>
      {/* search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => {
          console.log('button');
        }}>
        <Fontisto name="search" size={20} color={PRIMARY} />
        <Text style={styles.searchButtonText}>Where are you going ?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}

        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            console.log('button');
          }}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
        {/* button */}
      </ImageBackground>
    </View>
  );
}

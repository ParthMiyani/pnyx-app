import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../assets/images/images';
import AppHeader from '../components/appHeader';

export default function GenresScreen() {
  const {colors} = useTheme();

  return (
    <View style={{...styles.container}}>
      <AppHeader title="Choose some genres" />
      <Text style={styles.subText}>
        Select a minimum of 4 tracks or more, so we can generate a playlist for
        you
      </Text>
      <Image style={styles.cube} source={images.cubeImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cube: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  subText: {
    fontSize: 24,
    marginVertical: 8,
    textAlign: 'center',
  },
});

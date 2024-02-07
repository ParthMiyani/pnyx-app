import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../assets/images/images';

export default function GenresScreen() {
  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Text style={{...styles.headingText, color: colors.text}}>
        Choose some genres
      </Text>
      <Text style={styles.headingText}>
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
  headingText: {
    fontSize: 30,
    textAlign: 'center',
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

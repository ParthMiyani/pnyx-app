import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import images from '../assets/images/images';
import WelcomeScreenSwipeButton from '../components/WelcomeScreenSwipeButton';

export default function WelcomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>WELCOME TO</Text>
      <Text style={styles.headingText}>PNYX</Text>
      <Image style={styles.cube} source={images.cubeImage} />
      <Text style={styles.subText}>
        DISCOVER TRACKS AND{'\n'}SHARE COLLECTIONS{'\n'}WITH LIKE-MINDED FRIENDS
      </Text>
      <WelcomeScreenSwipeButton
        onSwipeSuccess={() => navigation.navigate('Genres')}
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.accountText}>Have an account</Text>
        <Text style={styles.loginText}>Log In</Text>
      </View>
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
  accountText: {
    fontSize: 14,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    lineHeight: 28,
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    textDecorationLine: 'underline',
    lineHeight: 28,
  },
});

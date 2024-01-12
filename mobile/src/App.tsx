import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';
import WelcomeScreen from './screens/welcomeScreen';
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31304D',
  },
  footerContainer: {
    backgroundColor: '#31304D',
  },
});

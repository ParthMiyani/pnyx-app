import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomSwipeButton from '../components/customSwipeButton';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>PNYX</Text>
      <Text style={styles.subText}>
        DISCOVER TRACKS AND SHARE COLLECTIONS WITH LIKE-MINDED FRIENDS
      </Text>
      <CustomSwipeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  subText: {
    fontSize: 24,
    paddingTop: 300,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});

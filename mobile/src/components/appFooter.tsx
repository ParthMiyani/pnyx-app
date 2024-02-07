import * as React from 'react';
import {View, StyleSheet} from 'react-native';

export default function AppFooter() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingBottom: 10,
  },
});

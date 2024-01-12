import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SwipeButton from 'rn-swipe-button';

export default function CustomSwipeButton() {
  return (
    <View style={styles.container}>
      <SwipeButton
        onSwipeSuccess={() => 'Slide success!'}
        railBackgroundColor="#a493d6"
        thumbIconBackgroundColor="#FFFFFF"
        title="Slide to unlock"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31304D',
  },
});

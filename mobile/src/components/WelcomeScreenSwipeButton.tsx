import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SwipeButton from 'rn-swipe-button';
// import {Icon} from '../assets/icons/index';
import ICONS from '../assets/icons/icons';

export default function WelcomeScreenSwipeButton(porps: any) {
  return (
    <View style={styles.container}>
      <SwipeButton
        onSwipeSuccess={porps.onSwipeSuccess}
        railBorderColor="#FFFFFF"
        railFillBorderColor="rgba(0, 0, 0, 0)"
        railFillBackgroundColor="#FFFFFF"
        railBackgroundColor="rgba(0, 0, 0, 0)"
        // TODO: Fix when swipe button library is updated
        // @ts-ignore
        thumbIconComponent={() => {
          return <ICONS.voice />;
        }}
        thumbIconBackgroundColor="#FFFFFF"
        thumbIconBorderColor="rgba(0, 0, 0, 0)"
        title="Start Listening"
        titleColor="#FFFFFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

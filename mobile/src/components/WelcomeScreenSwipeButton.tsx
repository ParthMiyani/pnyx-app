import {View, StyleSheet} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import {Icon} from '../assets/icons';

export default function WelcomeScreenSwipeButton(porps: any) {
  return (
    <View style={styles.container}>
      <SwipeButton
        onSwipeSuccess={porps.onSwipeSuccess}
        height={60}
        width={310}
        railBorderColor="#FFFFFF"
        railFillBorderColor="transparent"
        railFillBackgroundColor="#FFFFFF"
        railBackgroundColor="transparent"
        // TODO: Fix when swipe button library is updated
        // @ts-ignore
        thumbIconComponent={() => {
          return <Icon name="voice" size={24} />;
        }}
        thumbIconBackgroundColor="#FFFFFF"
        thumbIconBorderColor="transparent"
        title="Start Listening"
        titleColor="#FFFFFF"
        titleFontSize={17}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

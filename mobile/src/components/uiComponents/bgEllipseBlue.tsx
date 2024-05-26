import {View, StyleSheet} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';

export default function BgEllipseBlue() {
  return (
    <View style={styles.container}>
      <RadialGradient
        style={styles.blueCircle}
        colors={['#102DF480', 'transparent']}
        stops={[0, 1]}
        center={[208, 208]}
        radius={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  blueCircle: {
    width: 415,
    height: 415,
    position: 'absolute',
    top: 168,
    left: -51,
  },
});

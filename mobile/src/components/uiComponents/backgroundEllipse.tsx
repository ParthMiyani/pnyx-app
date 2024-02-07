import {View, StyleSheet} from 'react-native';

export default function backgroundEllipse() {
  return <div style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    mixBlendMode: 'color',
    background: 'rgba(16, 45, 244, 0.60)',
    boxShadow: '180px 180px 180px ',
    borderRadius: 9999,
    filter: 'blur(180px)',
  },
});

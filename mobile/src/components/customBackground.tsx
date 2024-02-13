import {View} from 'react-native';
import BgEllipseBlue from './uiComponents/bgEllipseBlue';

export default function CustomBackground() {
  return (
    <View style={styles.container}>
      <BgEllipseBlue />
    </View>
  );
}

const styles = {
  container: {},
};

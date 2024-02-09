import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';
import {Icon} from '../../assets/icons';
import {Circle} from 'react-native-svg';

function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}

export default function CustomCricle(props: any) {
  return (
    <Pressable onPress={() => alert('Pressed')} style={styles.circle}>
      <Icon name={props.iconName} size={16} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.14,
    height: Dimensions.get('window').width * 0.14,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

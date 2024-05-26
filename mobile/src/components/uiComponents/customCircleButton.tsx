import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';
import {Icon} from '../../assets/icons';

function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}

export default function CustomCricleButton(props: {
  iconName: string;
  onTouchCricle: () => void;
}) {
  return (
    <Pressable onPress={props.onTouchCricle} style={styles.circle}>
      <Icon name={props.iconName} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

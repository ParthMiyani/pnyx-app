import {View, Text, StyleSheet} from 'react-native';
import CustomCricleButton from './uiComponents/customCircleButton';
import {useTheme} from '@react-navigation/native';

export default function AppHeader(props: {
  iconNameLeft?: string;
  iconNameRight?: string;
  title?: string;
  onTouchLeft?: () => void;
  onTouchRight?: () => void;
}) {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.iconStyle}>
        {props.iconNameLeft && (
          <CustomCricleButton
            iconName={props.iconNameLeft}
            onTouchCricle={props.onTouchLeft || (() => {})}
          />
        )}
      </View>
      <Text style={{...styles.headingText, color: colors.primary}}>
        {props.title}
      </Text>
      <View style={styles.iconStyle}>
        {props.iconNameRight && (
          <CustomCricleButton
            iconName={props.iconNameRight}
            onTouchCricle={props.onTouchRight || (() => {})}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  iconStyle: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  headingText: {
    flex: 4,
    fontSize: 16,
    // backgroundColor: 'red',
    textAlign: 'center',
  },
});

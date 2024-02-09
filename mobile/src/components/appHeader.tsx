import {View, Text, StyleSheet} from 'react-native';
import CustomCricle from './uiComponents/customCircle';

export default function AppHeader({title}: {title: string}) {
  return (
    <View style={styles.container}>
      <CustomCricle iconName="left-arrow" />
      <Text style={styles.headingText}>{title}</Text>
      <CustomCricle iconName="right-arrow" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 15,
  },
  headingText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

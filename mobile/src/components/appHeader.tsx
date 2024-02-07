import {View, Text, StyleSheet} from 'react-native';
import ICONS from '../assets/icons/icons';
import {Icon} from '../assets/icons';

export default function AppHeader({title}: {title: string}) {
  return (
    <View style={styles.container}>
      <Icon name={'left-arrow'} size={16} />
      <Text style={styles.headingText}>{title}</Text>
      <Icon name={'right-arrow'} size={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40,
  },
  headingText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

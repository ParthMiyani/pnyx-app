import {View, TextInput, StyleSheet} from 'react-native';
import {Icon} from '../../assets/icons';

export default function CustomSearchBar() {
  return (
    <View>
      <Icon
        style={{position: 'absolute', right: 35, top: 28}}
        name="search"
        size={21}
      />
      <TextInput style={styles.searchBar} placeholder="Search genres ..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  searchBar: {
    height: 56,
    margin: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#7B75A1',
    padding: 10,
  },
});

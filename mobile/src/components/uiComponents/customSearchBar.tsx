import {View, TextInput, StyleSheet} from 'react-native';
import {Icon} from '../../assets/icons';
import {useTheme} from '@react-navigation/native';

export default function CustomSearchBar() {
  const {colors} = useTheme();
  return (
    <View>
      <Icon
        style={{position: 'absolute', right: 35, top: 28}}
        name="search"
        size={21}
      />
      <TextInput
        style={{...styles.searchBar}}
        placeholderTextColor={colors.primary}
        placeholder="Search genres ..."
      />
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

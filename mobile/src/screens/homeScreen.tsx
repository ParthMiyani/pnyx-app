import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../assets/images/images';
import AppHeader from '../components/appHeader';
import CustomBackground from '../components/customBackground';
import CustomSearchBar from '../components/uiComponents/customSearchBar';

export default function HomeScreen() {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1}}>
      <View>
        <CustomBackground />
      </View>
      <View style={{...styles.container}}>
        <AppHeader
          iconNameLeft="eye-star"
          iconNameRight="options"
          title="Discover"
          onTouchLeft={() => {}}
          onTouchRight={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  cube: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  },
  subText: {
    fontSize: 14,
    margin: 8,
    paddingBottom: 30,
    textAlign: 'center',
  },
});

import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../assets/images/images';
import AppHeader from '../components/appHeader';
import CustomBackground from '../components/customBackground';
import CustomSearchBar from '../components/uiComponents/customSearchBar';

export default function ArtistScreen({navigation}: {navigation: any}) {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1}}>
      <View>
        <CustomBackground />
      </View>
      <View style={{...styles.container}}>
        <AppHeader
          iconNameLeft="left-arrow"
          // TODO: icon right in temprary
          iconNameRight="right-arrow"
          title="Choose some artits"
          onTouchLeft={() => {
            navigation.goBack();
          }}
          // TODO: icon right in temprary
          onTouchRight={() => {
            navigation.navigate('Success');
          }}
        />
        <Text style={{...styles.subText, color: colors.primary}}>
          Select a minimum of 4 tracks or more {'\n'} so we can generate a
          playlist for you
        </Text>
        <Image style={styles.cube} source={images.cubeImage} />
        <CustomSearchBar />
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

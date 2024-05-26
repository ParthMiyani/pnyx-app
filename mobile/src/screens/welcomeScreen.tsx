import {View, Text, Image, StyleSheet} from 'react-native';
import images from '../assets/images/images';
import WelcomeScreenSwipeButton from '../components/WelcomeScreenSwipeButton';
import CustomBackground from '../components/customBackground';
import {useTheme} from '@react-navigation/native';

export default function WelcomeScreen({navigation}: {navigation: any}) {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.customBg}>
        <CustomBackground />
      </View>
      <View style={styles.content}>
        <View style={styles.headingContainer}>
          <Text style={{...styles.headingText, color: colors.primary}}>
            WELCOME TO
          </Text>
          <Text style={{...styles.companyText, color: colors.primary}}>
            PNYX
          </Text>
        </View>
        <Image style={styles.cube} source={images.cubeImage} />
        <Text style={{...styles.subText, color: colors.primary}}>
          DISCOVER TRACKS AND{'\n'}SHARE COLLECTIONS{'\n'}WITH LIKE-MINDED
          FRIENDS
        </Text>
        <View style={styles.swipeContainer}>
          <WelcomeScreenSwipeButton
            onSwipeSuccess={() => navigation.navigate('Genres')}
          />
        </View>
        <View style={styles.authTextContainer}>
          <Text style={{...styles.accountText, color: colors.primary}}>
            Have an account
          </Text>
          <Text style={{...styles.loginText, color: colors.primary}}>
            Log In
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
  headingContainer: {
    paddingTop: 40,
    paddingBottom: 50,
    // backgroundColor: 'green',
  },
  headingText: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    fontSize: 32,
    textAlign: 'center',
  },
  companyText: {
    fontSize: 96,
    textAlign: 'center',
  },
  cube: {
    marginVertical: 20,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  subText: {
    // backgroundColor: 'blue',
    fontSize: 16,
    paddingVertical: 30,
    textAlign: 'center',
  },
  swipeContainer: {
    height: 100,
  },
  authTextContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  accountText: {
    fontSize: 14,
    lineHeight: 28,
  },
  loginText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    lineHeight: 28,
  },
});

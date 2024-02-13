import * as React from 'react';
import WelcomeScreen from './screens/welcomeScreen';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GenresScreen from './screens/genresScreen';
import ArtistScreen from './screens/artistScreen';
import SuccessScreen from './screens/successScreen';
import HomeScreen from './screens/homeScreen';
import MyTheme from './components/uiComponents/myTheme';
import CustomBackground from './components/customBackground';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Genres"
          component={GenresScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Artist"
          component={ArtistScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

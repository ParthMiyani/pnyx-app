import * as React from 'react';
import WelcomeScreen from './screens/welcomeScreen';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GenresScreen from './screens/genresScreen';
import MyTheme from './components/uiComponents/myTheme';
import CustomBackground from './components/customBackground';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          // component={CustomBackground}
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Genres"
          component={GenresScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

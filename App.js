import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from './HomeScreen';
import NextScreen from './NextScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
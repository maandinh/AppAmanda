import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LOGIN from './src/Pages/LOGIN';
import REGISTRO from './src/Pages/REGISTRO';
import DASHBOARD from './src/Pages/DASHBOARD';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LOGIN} />
        <Stack.Screen name="REGISTRO" component={REGISTRO} />
         <Stack.Screen name="DASHBOARD" component={DASHBOARD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import BoardScreen from './screens/BoardScreen';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="BoardScreen" component={BoardScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

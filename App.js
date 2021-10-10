import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import BoardScreen from './screens/BoardScreen';
import NewBoard from './screens/NewBoard';

const RootStack = createStackNavigator();

export default function App() {

  const [userId, setUserId] = useState()

  return (
    <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="LoginScreen">
          {props => <LoginScreen {...props} setUserId={setUserId} />}
        </RootStack.Screen>
        <RootStack.Screen name="HomeScreen">
          {props => <HomeScreen {...props} userId={userId} />}
        </RootStack.Screen>
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="BoardScreen" component={BoardScreen} />
        <RootStack.Screen name="NewBoard" component={NewBoard} userId={userId}/>
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
